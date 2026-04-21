const Policy = require("../models/Policy");
const { callGemini } = require("../utils/geminiClient");

/**
 * Calculate out-of-pocket costs for a medical scenario
 * POST /api/policy/calculate-oop
 *
 * Request body:
 * {
 *   policyId: string,
 *   medicalCost: number,
 *   serviceType: string (e.g., "hospital", "surgery", "preventive"),
 *   scenarioDescription: string,
 *   language: string
 * }
 */
const calculateOOPCost = async (req, res) => {
  const { policyId, medicalCost, serviceType, scenarioDescription, language } =
    req.body;

  // Validation
  if (!policyId || medicalCost === undefined || medicalCost < 0) {
    return res.status(400).json({
      success: false,
      message: "policyId and valid medicalCost are required",
    });
  }

  try {
    const policy = await Policy.findById(policyId);
    if (!policy) {
      return res
        .status(404)
        .json({ success: false, message: "Policy not found" });
    }

    const costStructure = policy.costStructure || {};

    // Extract cost details
    const deductible = costStructure.deductible?.individual || 0;
    const coinsurancePercent = costStructure.coinsurance?.percentage || 0;
    const coinsuranceAfterDeductible =
      costStructure.coinsurance?.afterDeductible !== false;
    const oopMax = costStructure.outOfPocketMax?.individual || 999999;

    // Calculate basic OOP scenario
    let calculation = calculateOutOfPocket({
      totalCost: medicalCost,
      deductible,
      coinsurancePercent,
      coinsuranceAfterDeductible,
      oopMax,
    });

    // Get relevant copay if any
    const relevantCopay = costStructure.copay?.find((c) =>
      c.service.toLowerCase().includes(serviceType?.toLowerCase() || "")
    );

    // Check coverage limits
    const relevantLimit = costStructure.coverageLimits?.find((l) =>
      l.service.toLowerCase().includes(serviceType?.toLowerCase() || "")
    );

    if (relevantLimit && medicalCost > relevantLimit.maxAmount) {
      calculation.exceedsLimit = true;
      calculation.limitAmount = relevantLimit.maxAmount;
      calculation.excessAmount = medicalCost - relevantLimit.maxAmount;
    }

    // Use Gemini to generate personalized explanation
    const lang = language || "en";
    const explanation = await generateOOPExplanation(
      {
        medicalCost,
        serviceType,
        scenarioDescription,
        calculation,
        policy,
        relevantCopay,
        relevantLimit,
      },
      lang
    );

    res.json({
      success: true,
      calculation,
      explanation,
      costStructure: {
        deductible: costStructure.deductible,
        coinsurance: costStructure.coinsurance,
        copay: costStructure.copay,
        outOfPocketMax: costStructure.outOfPocketMax,
        coverageLimits: costStructure.coverageLimits,
      },
    });
  } catch (error) {
    console.error("❌ OOP calculation failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to calculate out-of-pocket costs",
      error: error.message,
    });
  }
};

/**
 * Calculate out-of-pocket amounts
 */
function calculateOutOfPocket({
  totalCost,
  deductible,
  coinsurancePercent,
  coinsuranceAfterDeductible,
  oopMax,
}) {
  let userCost = 0;
  let insuranceCost = 0;
  let breakdownSteps = [];

  // Step 1: Apply deductible
  if (deductible > 0) {
    const deductibleApplied = Math.min(deductible, totalCost);
    userCost += deductibleApplied;
    insuranceCost += 0;
    breakdownSteps.push({
      step: "Deductible Applied",
      amount: deductibleApplied,
      userPays: deductibleApplied,
      insurancePays: 0,
      description: `Out of $${totalCost}, you pay $${deductibleApplied} toward your $${deductible} deductible`,
    });
  }

  const remainingCost = totalCost - userCost;

  // Step 2: Apply coinsurance
  if (coinsurancePercent > 0 && remainingCost > 0) {
    const coinsuranceBase = coinsuranceAfterDeductible ? remainingCost : totalCost;
    const coinsuranceAmount = (coinsuranceBase * coinsurancePercent) / 100;
    const userCoinsurance = Math.min(coinsuranceAmount, remainingCost);
    userCost += userCoinsurance;
    insuranceCost += remainingCost - userCoinsurance;

    breakdownSteps.push({
      step: "Coinsurance (Your Share)",
      amount: userCoinsurance,
      userPays: userCoinsurance,
      insurancePays: remainingCost - userCoinsurance,
      description: `You pay ${coinsurancePercent}% of remaining $${remainingCost}`,
    });
  } else if (remainingCost > 0) {
    insuranceCost += remainingCost;
    breakdownSteps.push({
      step: "Insurance Coverage",
      amount: remainingCost,
      userPays: 0,
      insurancePays: remainingCost,
      description: `Insurance covers remaining $${remainingCost}`,
    });
  }

  // Apply OOP max limit
  userCost = Math.min(userCost, oopMax);

  return {
    totalMedicalCost: totalCost,
    userPays: Math.round(userCost * 100) / 100,
    insurancePays: Math.round(insuranceCost * 100) / 100,
    deductible,
    coinsurancePercent,
    outOfPocketMax: oopMax,
    percentage: {
      user: Math.round((userCost / totalCost) * 100),
      insurance: Math.round((insuranceCost / totalCost) * 100),
    },
    breakdown: breakdownSteps,
    exceedsLimit: false,
  };
}

/**
 * Generate personalized explanation using Gemini
 */
async function generateOOPExplanation(data, lang) {
  const {
    medicalCost,
    serviceType,
    scenarioDescription,
    calculation,
    policy,
    relevantCopay,
    relevantLimit,
  } = data;

  const langInstructions =
    lang === "hi"
      ? "All text must be in Hindi (Devanagari script).\nRespond with valid JSON only.\nJSON keys stay in English."
      : "All text must be in English.\nRespond with valid JSON only.";

  const breakdownSummary = calculation.breakdown
    .map((b) => `${b.step}: $${b.amount}`)
    .join("\n");

  const systemPrompt = `You are an insurance cost transparency expert. 
${langInstructions}
Explain complex insurance costs in simple, friendly language that anyone can understand.`;

  const userPrompt = `Explain this out-of-pocket cost calculation in simple terms:

Medical Scenario: ${scenarioDescription || serviceType}
Total Medical Cost: $${medicalCost}
User Pays: $${calculation.userPays}
Insurance Pays: $${calculation.insurancePays}
Policy Deductible: $${calculation.deductible}
Coinsurance: ${calculation.coinsurancePercent}%
Out-of-Pocket Max: $${calculation.outOfPocketMax}

Cost Breakdown:
${breakdownSummary}

${relevantCopay ? `Relevant Copay: $${relevantCopay.amount} for ${relevantCopay.service}` : ""}
${relevantLimit ? `Coverage Limit: $${relevantLimit.maxAmount} (${relevantLimit.timeFrame})` : ""}

Respond with this JSON:
{
  "simpleExplanation": "A 2-3 sentence plain English explanation of what they'll pay",
  "breakdown": [
    { "label": "Step name", "explanation": "What this means in simple terms" }
  ],
  "tips": ["Tip 1: ...", "Tip 2: ..."],
  "disclaimer": "Any important disclaimers about the calculation"
}`;

  try {
    const raw = await callGemini(systemPrompt, userPrompt);
    const cleaned = raw.replace(/```json|```/g, "").trim();
    const result = JSON.parse(cleaned);
    return result;
  } catch (e) {
    console.warn("⚠️ Could not generate explanation via AI:", e.message);
    // Return fallback explanation
    return {
      simpleExplanation: `Based on your policy, for a $${medicalCost} medical cost, you will pay $${calculation.userPays} out of pocket and insurance will cover $${calculation.insurancePays}.`,
      breakdown: calculation.breakdown.map((b) => ({
        label: b.step,
        explanation: b.description,
      })),
      tips: [
        "Review your policy documents for complete details",
        "Contact your insurance provider for specific scenarios",
        "Keep receipts for claim submissions",
      ],
      disclaimer:
        "This is an estimate based on typical policy terms. Actual costs may vary.",
    };
  }
}

module.exports = { calculateOOPCost };

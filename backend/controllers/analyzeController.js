const Policy = require("../models/Policy");
const { callGemini, callGeminiWithPDF } = require("../utils/geminiClient");

const generateAnalysis = async (lang, req) => {
  const langInstruction =
    lang === "hi"
      ? "All text values in the JSON must be written in Hindi (Devanagari script). JSON keys must stay in English exactly as specified."
      : "All text values must be in English.";

  const systemPrompt = `You are an insurance policy analyzer.
Always respond with valid JSON only.
No markdown, no explanation outside the JSON.
${langInstruction}`;

  const userPrompt = `Analyze this insurance policy and respond ONLY with valid JSON in this exact format:
{
  "summary": "2-3 sentences in simple English",
  "riskScore": 65,
  "covered": [{ "title": "...", "description": "...", "icon": "emoji" }],
  "notCovered": [{ "title": "...", "description": "...", "icon": "emoji" }],
  "partialCoverage": [{ "title": "...", "description": "..." }],
  "keyTerms": [{ "term": "...", "definition": "..." }]
}
Rules:
- covered: max 6 items
- notCovered: max 6 items
- partialCoverage: max 3 items
- keyTerms: max 8 items
- Keep descriptions concise (max 18 words).
- Keep titles concise.
- Use only emojis in the icon field.
- Do not include markdown, code fences, or any text outside the JSON.
- If you cannot list every clause, prioritize the clearest, highest-impact items.
- riskScore: 0-100 (higher = riskier policy)`;

  async function repairPrompt(partialRaw) {
    const repairSystem = `You are a JSON repair assistant.
You will only return valid JSON with no markdown, no code fences, no explanation. Just the completed JSON object.`;
    const repairUser = `The previous AI response was truncated. Here is the partial JSON output:

${partialRaw}

Complete this JSON object by adding the missing parts. Return ONLY the complete, valid JSON object. Do not include any text before or after the JSON. Do not use code fences.`;
    return callGemini(repairSystem, repairUser);
  }

  let raw;

  if (req.file) {
    // ✅ Send PDF buffer directly to Gemini — no parsing library needed
    raw = await callGeminiWithPDF(systemPrompt, userPrompt, req.file.buffer);
  } else if (req.body.text) {
    // ✅ Text input path
    const textPrompt = `${userPrompt}\n\nPolicy text:\n${req.body.text.slice(
      0,
      8000
    )}`;
    raw = await callGemini(systemPrompt, textPrompt);
  } else {
    throw new Error("Provide a PDF file or paste policy text");
  }

  // Parse Gemini response
  const findJsonObject = (source) => {
    if (!source) return null;
    // Remove code fences and clean up
    let cleaned = source.replace(/```json|```/g, "").trim();
    // Remove any leading/trailing non-JSON text
    const start = cleaned.indexOf("{");
    if (start === -1) return null;
    cleaned = cleaned.slice(start);

    let depth = 0;
    let inString = false;
    let escape = false;

    for (let i = 0; i < cleaned.length; i += 1) {
      const char = cleaned[i];

      if (inString) {
        if (escape) {
          escape = false;
        } else if (char === "\\") {
          escape = true;
        } else if (char === '"') {
          inString = false;
        }
        continue;
      }

      if (char === '"') {
        inString = true;
      } else if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
        if (depth === 0) {
          return cleaned.slice(0, i + 1);
        }
      }
    }

    return null;
  };

  const parseJson = (source) => {
    const objectString = findJsonObject(source);
    if (!objectString) {
      throw new Error("No complete JSON object found.");
    }
    const parsed = JSON.parse(objectString);

    // Basic validation
    if (!parsed.summary || typeof parsed.riskScore !== "number") {
      throw new Error("Invalid JSON structure - missing required fields.");
    }

    return parsed;
  };

  try {
    return parseJson(raw);
  } catch (e) {
    console.warn("❌ Gemini parse failed, attempting JSON repair...");
    console.warn(
      "❌ Raw Gemini output preview:",
      typeof raw === "string" ? raw.slice(0, 800) : raw
    );

    try {
      const repaired = await repairPrompt(raw);
      console.warn(
        "✅ Gemini repair output preview:",
        typeof repaired === "string" ? repaired.slice(0, 800) : repaired
      );
      return parseJson(repaired);
    } catch (repairError) {
      console.error("❌ Gemini repair failed:", repairError.message);
      throw repairError;
    }
  }
};

// Extract cost structure from policy
const extractCostStructure = async (req) => {
  const systemPrompt = `You are an insurance policy cost analyzer.
Always respond with valid JSON only. No markdown, no code fences.
IMPORTANT: All numeric values must be NUMBERS (not strings).
If a value is not a number, use 0 as default.`;

  const userPrompt = `Extract cost information from this insurance policy. Respond ONLY with valid JSON:
{
  "deductible": {
    "individual": 0,
    "family": 0,
    "description": "Description of deductible"
  },
  "copay": [
    { "service": "Service name", "amount": 0, "currency": "USD" }
  ],
  "coinsurance": {
    "percentage": 0,
    "afterDeductible": true,
    "description": "Description"
  },
  "outOfPocketMax": {
    "individual": 0,
    "family": 0,
    "description": "Description"
  },
  "coverageLimits": [
    { "service": "Service name", "maxAmount": 0, "currency": "USD", "timeFrame": "Annual/Lifetime" }
  ],
  "notes": "Any additional cost-related notes"
}

Rules:
- CRITICAL: individual, family, amount, percentage, maxAmount MUST be numbers (not strings)
- If amount is not stated or unclear, use 0
- Never put text like "As per Certificate" in numeric fields
- Use reasonable estimates if ranges are given (pick the lower bound)
- Include currency information where applicable
- Keep descriptions under 100 words
- If not found, set numeric values to 0`;

  let raw;
  if (req.file) {
    raw = await callGeminiWithPDF(systemPrompt, userPrompt, req.file.buffer);
  } else if (req.body.text) {
    const textPrompt = `${userPrompt}\n\nPolicy text:\n${req.body.text.slice(
      0,
      8000
    )}`;
    raw = await callGemini(systemPrompt, textPrompt);
  } else {
    throw new Error("Provide a PDF file or paste policy text");
  }

  // Parse JSON
  const findJsonObject = (source) => {
    if (!source) return null;
    let cleaned = source.replace(/```json|```/g, "").trim();
    const start = cleaned.indexOf("{");
    if (start === -1) return null;
    cleaned = cleaned.slice(start);

    let depth = 0;
    let inString = false;
    let escape = false;

    for (let i = 0; i < cleaned.length; i += 1) {
      const char = cleaned[i];

      if (inString) {
        if (escape) {
          escape = false;
        } else if (char === "\\") {
          escape = true;
        } else if (char === '"') {
          inString = false;
        }
        continue;
      }

      if (char === '"') {
        inString = true;
      } else if (char === "{") {
        depth += 1;
      } else if (char === "}") {
        depth -= 1;
        if (depth === 0) {
          return cleaned.slice(0, i + 1);
        }
      }
    }

    return null;
  };

  const objectString = findJsonObject(raw);
  if (!objectString) {
    return { notes: "Cost structure could not be extracted from policy" };
  }

  try {
    const parsed = JSON.parse(objectString);
    
    // ✅ VALIDATION: Convert and validate numeric fields
    const validated = {};

    // Deductible validation
    if (parsed.deductible) {
      validated.deductible = {
        individual: Number(parsed.deductible.individual) || 0,
        family: Number(parsed.deductible.family) || 0,
        description: String(parsed.deductible.description || "").slice(0, 200),
      };
    }

    // Copay validation
    if (Array.isArray(parsed.copay)) {
      validated.copay = parsed.copay
        .map((c) => ({
          service: String(c.service || "").slice(0, 100),
          amount: Number(c.amount) || 0,
          currency: String(c.currency || "USD"),
        }))
        .filter((c) => c.amount > 0); // Only keep valid copays
    }

    // Coinsurance validation
    if (parsed.coinsurance) {
      const coinsPercent = Number(parsed.coinsurance.percentage);
      validated.coinsurance = {
        percentage: coinsPercent >= 0 && coinsPercent <= 100 ? coinsPercent : 0,
        afterDeductible: Boolean(parsed.coinsurance.afterDeductible),
        description: String(parsed.coinsurance.description || "").slice(0, 200),
      };
    }

    // Out-of-pocket max validation
    if (parsed.outOfPocketMax) {
      validated.outOfPocketMax = {
        individual: Number(parsed.outOfPocketMax.individual) || 0,
        family: Number(parsed.outOfPocketMax.family) || 0,
        description: String(parsed.outOfPocketMax.description || "").slice(0, 200),
      };
    }

    // Coverage limits validation
    if (Array.isArray(parsed.coverageLimits)) {
      validated.coverageLimits = parsed.coverageLimits
        .map((l) => ({
          service: String(l.service || "").slice(0, 100),
          maxAmount: Number(l.maxAmount) || 0,
          currency: String(l.currency || "USD"),
          timeFrame: String(l.timeFrame || "Annual"),
        }))
        .filter((l) => l.maxAmount > 0); // Only keep valid limits
    }

    // Additional notes
    validated.notes = String(parsed.notes || "").slice(0, 500);

    return validated;
  } catch (e) {
    console.warn("⚠️ Cost extraction parsing error:", e.message);
    return { notes: "Cost structure could not be parsed from policy" };
  }
};

const analyzePolicy = async (req, res) => {
  let filename = "text-input";

  try {
    // Generate both English and Hindi versions + extract costs in parallel
    const [enAnalysis, hiAnalysis, costStructure] = await Promise.all([
      generateAnalysis("en", req),
      generateAnalysis("hi", req),
      extractCostStructure(req),
    ]);

    if (req.file) {
      filename = req.file.originalname;
    }

    // Save to MongoDB (save English version as base)
    const policy = await Policy.create({
      filename,
      originalText: req.body.text?.slice(0, 8000) || "PDF Upload",
      ...enAnalysis,
      costStructure,
    });

    res.json({
      success: true,
      policyId: policy._id,
      en: enAnalysis,
      hi: hiAnalysis,
      costStructure,
    });
  } catch (error) {
    console.error("❌ Analysis failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "AI returned invalid response. Please try again.",
    });
  }
};

module.exports = { analyzePolicy };

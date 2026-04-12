const Policy = require("../models/Policy");
const { callGemini } = require("../utils/geminiClient");

const simulateScenario = async (req, res) => {
  const { policyId, question } = req.body;
  if (!policyId || !question) {
    return res.status(400).json({
      success: false,
      message: "policyId and question are required",
    });
  }

  const policy = await Policy.findById(policyId);
  if (!policy)
    return res
      .status(404)
      .json({ success: false, message: "Policy not found" });

  const coveredList = policy.covered.map((c) => c.title).join(", ");
  const notCoveredList = policy.notCovered.map((c) => c.title).join(", ");

  const language = req.body.language || "en";
  const systemPrompt = `You are an insurance expert.
Answer clearly and simply. Always respond with JSON only.
${
  language === "hi"
    ? "All text values in the JSON (answer, recommendation, relevantClauses) must be in Hindi (Devanagari script). JSON keys stay in English."
    : "All text values must be in English."
}`;

  const userPrompt = `Given this insurance policy:
Covered: ${coveredList}
Not Covered: ${notCoveredList}

User question: "${question}"

Respond ONLY with this JSON:
{
  "answer": "clear explanation in simple English",
  "covered": true or false,
  "relevantClauses": ["point 1", "point 2"],
  "recommendation": "what the user should know or do"
}`;

  const raw = await callGemini(systemPrompt, userPrompt);

  let result;
  try {
    const cleaned = raw.replace(/```json|```/g, "").trim();
    result = JSON.parse(cleaned);
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "AI returned invalid response. Please try again.",
    });
  }

  res.json({ success: true, ...result });
};

module.exports = { simulateScenario };

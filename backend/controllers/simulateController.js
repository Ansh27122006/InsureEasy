const Policy = require("../models/Policy");
const callGemini = require("../utils/geminiClient");

const simulateScenario = async (req, res) => {
  const { policyId, question } = req.body;

  const policy = await Policy.findById(policyId);
  if (!policy)
    return res
      .status(404)
      .json({ success: false, message: "Policy not found" });

  const coveredList = policy.covered.map((c) => c.title).join(", ");
  const notCoveredList = policy.notCovered.map((c) => c.title).join(", ");

  const systemPrompt = `You are an insurance expert. 
Answer clearly and simply. Always respond with JSON only.`;

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
  const cleaned = raw.replace(/```json|```/g, "").trim();
  const result = JSON.parse(cleaned);

  res.json({ success: true, ...result });
};

module.exports = { simulateScenario };

const Policy = require("../models/Policy");
const { callGemini, callGeminiWithPDF } = require("../utils/geminiClient");

const analyzePolicy = async (req, res) => {
  let filename = "text-input";

  const systemPrompt = `You are an insurance policy analyzer.
Always respond with valid JSON only.
No markdown, no explanation outside the JSON.`;

  const userPrompt = `Analyze this insurance policy and respond ONLY with JSON in this exact format:
{
  "summary": "2-3 sentences in simple English",
  "riskScore": 65,
  "covered": [{ "title": "...", "description": "...", "icon": "emoji" }],
  "notCovered": [{ "title": "...", "description": "...", "icon": "emoji" }],
  "partialCoverage": [{ "title": "...", "description": "..." }],
  "keyTerms": [{ "term": "...", "definition": "..." }]
}
Rules:
- covered: max 8 items
- notCovered: max 8 items
- partialCoverage: max 4 items
- keyTerms: max 10 items
- icons must be emojis
- riskScore: 0-100 (higher = riskier policy)`;

  let raw;

  if (req.file) {
    // ✅ Send PDF buffer directly to Gemini — no parsing library needed
    filename = req.file.originalname;
    raw = await callGeminiWithPDF(systemPrompt, userPrompt, req.file.buffer);

  } else if (req.body.text) {
    // ✅ Text input path
    const textPrompt = `${userPrompt}\n\nPolicy text:\n${req.body.text.slice(0, 8000)}`;
    raw = await callGemini(systemPrompt, textPrompt);

  } else {
    return res.status(400).json({
      success: false,
      message: "Provide a PDF file or paste policy text",
    });
  }

  // Parse Gemini response
  let parsed;
  try {
    const cleaned = raw.replace(/```json|```/g, "").trim();
    parsed = JSON.parse(cleaned);
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "AI returned invalid response. Please try again.",
    });
  }

  // Save to MongoDB
  const policy = await Policy.create({
    filename,
    originalText: req.body.text?.slice(0, 8000) || "PDF Upload",
    ...parsed,
  });

  res.json({ success: true, policyId: policy._id, ...parsed });
};

module.exports = { analyzePolicy };

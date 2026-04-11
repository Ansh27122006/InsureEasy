const fs = require("fs");
const pdfParse = require("pdf-parse");
const Policy = require("../models/Policy");
const callGemini = require("../utils/geminiClient");

const analyzePolicy = async (req, res) => {
  let text = "";
  let filename = "text-input";

  // Get text from PDF or direct input
  if (req.file) {
    const buffer = fs.readFileSync(req.file.path);
    const parsed = await pdfParse(buffer);
    text = parsed.text;
    filename = req.file.originalname;
    fs.unlinkSync(req.file.path); // delete file after reading
  } else if (req.body.text) {
    text = req.body.text;
  } else {
    return res
      .status(400)
      .json({ success: false, message: "Provide a PDF or text" });
  }

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
- riskScore: 0-100 (higher = riskier policy)

Policy text:
${text.slice(0, 8000)}`;

  const raw = await callGemini(systemPrompt, userPrompt);

  // Clean response and parse JSON
  const cleaned = raw.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(cleaned);

  // Save to MongoDB
  const policy = await Policy.create({
    filename,
    originalText: text.slice(0, 8000),
    ...parsed,
  });

  res.json({ success: true, policyId: policy._id, ...parsed });
};

module.exports = { analyzePolicy };

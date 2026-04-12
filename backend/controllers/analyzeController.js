const Policy = require("../models/Policy");
const { callGemini, callGeminiWithPDF } = require("../utils/geminiClient");

const analyzePolicy = async (req, res) => {
  let filename = "text-input";

  const systemPrompt = `You are an insurance policy analyzer.
Always respond with valid JSON only.
No markdown, no explanation outside the JSON.`;

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
    filename = req.file.originalname;
    raw = await callGeminiWithPDF(systemPrompt, userPrompt, req.file.buffer);
  } else if (req.body.text) {
    // ✅ Text input path
    const textPrompt = `${userPrompt}\n\nPolicy text:\n${req.body.text.slice(
      0,
      8000
    )}`;
    raw = await callGemini(systemPrompt, textPrompt);
  } else {
    return res.status(400).json({
      success: false,
      message: "Provide a PDF file or paste policy text",
    });
  }

  // Parse Gemini response
  let parsed;
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
    parsed = parseJson(raw);
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
      parsed = parseJson(repaired);
    } catch (repairError) {
      console.error("❌ Gemini repair failed:", repairError.message);
      return res.status(500).json({
        success: false,
        message: "AI returned invalid response. Please try again.",
      });
    }
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

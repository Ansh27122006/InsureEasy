const axios = require("axios");

const handleAxiosError = (error) => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;
    const detail =
      data?.error?.message || data?.message || JSON.stringify(data);
    let message = `Gemini API error ${status}: ${detail}`;

    if (status === 404 && detail?.includes("not found")) {
      message +=
        " Please check GEMINI_MODEL and GEMINI_API_BASE_URL in backend/.env.";
    }

    const e = new Error(message);
    e.status = status;
    e.details = data;
    throw e;
  }
  throw error;
};

const GEMINI_BASE_URL =
  process.env.GEMINI_API_BASE_URL ||
  "https://generativelanguage.googleapis.com/v1";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// For text-only prompts
const callGemini = async (systemPrompt, userPrompt) => {
  const fullPrompt = `${systemPrompt}\n\n${userPrompt}`;
  const url = `${GEMINI_BASE_URL}/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  try {
    const response = await axios.post(url, {
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 2000 },
    });

    const candidates = response.data.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error("Gemini returned no response. Try again.");
    }

    return candidates[0].content.parts[0].text;
  } catch (error) {
    handleAxiosError(error);
  }
};

// For PDF analysis — sends PDF directly to Gemini
const callGeminiWithPDF = async (systemPrompt, userPrompt, pdfBuffer) => {
  const base64PDF = pdfBuffer.toString("base64");
  const url = `${GEMINI_BASE_URL}/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  try {
    const response = await axios.post(url, {
      contents: [
        {
          parts: [
            {
              inline_data: {
                mime_type: "application/pdf",
                data: base64PDF,
              },
            },
            { text: `${systemPrompt}\n\n${userPrompt}` },
          ],
        },
      ],
      generationConfig: { temperature: 0.3, maxOutputTokens: 2000 },
    });

    const candidates = response.data.candidates;
    if (!candidates || candidates.length === 0) {
      throw new Error("Gemini returned no response. Try again.");
    }

    return candidates[0].content.parts[0].text;
  } catch (error) {
    handleAxiosError(error);
  }
};

module.exports = { callGemini, callGeminiWithPDF };

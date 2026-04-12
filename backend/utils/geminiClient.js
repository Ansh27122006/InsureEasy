const axios = require("axios");

const GEMINI_BASE_URL =
  process.env.GEMINI_API_BASE_URL ||
  "https://generativelanguage.googleapis.com/v1";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

// Get all available API keys
const getApiKeys = () => {
  const keys = [];
  for (let i = 1; i <= 10; i++) {
    const key =
      process.env[`GEMINI_API_KEY_${i}`] || process.env.GEMINI_API_KEY;
    if (
      key &&
      key !== "YOUR_SECOND_API_KEY_HERE" &&
      key !== "YOUR_THIRD_API_KEY_HERE"
    ) {
      keys.push(key);
    }
  }
  return keys.length > 0 ? keys : [process.env.GEMINI_API_KEY].filter(Boolean);
};

const handleAxiosError = (error, keyIndex) => {
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
    e.keyIndex = keyIndex;
    throw e;
  }
  throw error;
};

const extractGeminiText = (candidate) => {
  if (!candidate?.content) return "";

  const parts = candidate.content.parts;
  if (Array.isArray(parts) && parts.length > 0) {
    const textParts = parts
      .filter((part) => typeof part.text === "string")
      .map((part) => part.text);
    if (textParts.length > 0) {
      return textParts.join("");
    }
  }

  return typeof candidate.content.text === "string"
    ? candidate.content.text
    : "";
};

// Helper function to try API call with fallback keys
const tryWithFallbackKeys = async (apiCallFn, ...args) => {
  const keys = getApiKeys();

  if (keys.length === 0) {
    throw new Error(
      "No Gemini API keys configured. Please set GEMINI_API_KEY or GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc. in backend/.env"
    );
  }

  let lastError;

  for (let i = 0; i < keys.length; i++) {
    try {
      console.log(`Trying Gemini API with key ${i + 1}/${keys.length}`);
      return await apiCallFn(keys[i], ...args);
    } catch (error) {
      console.warn(`Gemini API key ${i + 1} failed:`, error.message);
      lastError = error;

      // Continue to next key if this is a rate limit or auth error
      if (
        error.status === 429 ||
        error.status === 403 ||
        error.status === 401
      ) {
        continue;
      }

      // For other errors (like 400, 404, 500), also try next key as it might be key-specific
      if (error.status >= 400) {
        continue;
      }

      // For network errors or other issues, throw immediately
      throw error;
    }
  }

  // If all keys failed, throw the last error
  throw lastError;
};

// For text-only prompts
const callGemini = async (systemPrompt, userPrompt) => {
  return await tryWithFallbackKeys(callGeminiWithKey, systemPrompt, userPrompt);
};

// Internal function that uses a specific API key
const callGeminiWithKey = async (apiKey, systemPrompt, userPrompt) => {
  const fullPrompt = `${systemPrompt}\n\n${userPrompt}`;
  const url = `${GEMINI_BASE_URL}/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const response = await axios.post(url, {
    contents: [{ parts: [{ text: fullPrompt }] }],
    generationConfig: { temperature: 0.3, maxOutputTokens: 8000 },
  });

  const candidates = response.data.candidates;
  if (!candidates || candidates.length === 0) {
    throw new Error("Gemini returned no response. Try again.");
  }

  const text = extractGeminiText(candidates[0]);
  if (!text) {
    throw new Error("Gemini returned no text response. Try again.");
  }

  return text;
};

// For PDF analysis — sends PDF directly to Gemini
const callGeminiWithPDF = async (systemPrompt, userPrompt, pdfBuffer) => {
  return await tryWithFallbackKeys(
    callGeminiWithPDFWithKey,
    systemPrompt,
    userPrompt,
    pdfBuffer
  );
};

// Internal function that uses a specific API key for PDF analysis
const callGeminiWithPDFWithKey = async (
  apiKey,
  systemPrompt,
  userPrompt,
  pdfBuffer
) => {
  const base64PDF = pdfBuffer.toString("base64");
  const url = `${GEMINI_BASE_URL}/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

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
    generationConfig: { temperature: 0.3, maxOutputTokens: 8000 },
  });

  const candidates = response.data.candidates;
  if (!candidates || candidates.length === 0) {
    throw new Error("Gemini returned no response. Try again.");
  }

  const text = extractGeminiText(candidates[0]);
  if (!text) {
    throw new Error("Gemini returned no text response. Try again.");
  }

  return text;
};

module.exports = { callGemini, callGeminiWithPDF };

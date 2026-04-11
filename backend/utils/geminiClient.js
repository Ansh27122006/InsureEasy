const axios = require("axios");

const callGemini = async (systemPrompt, userPrompt) => {
  const fullPrompt = `${systemPrompt}\n\n${userPrompt}`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 2000 },
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};

module.exports = callGemini;

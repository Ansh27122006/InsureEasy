const Policy = require("../models/Policy");
const { callGemini } = require("../utils/geminiClient");

const chatWithPolicy = async (req, res) => {
  const { policyId, messages } = req.body;
  if (!policyId || !messages || messages.length === 0) {
    return res.status(400).json({
      success: false,
      message: "policyId and messages are required",
    });
  }

  const policy = await Policy.findById(policyId);
  if (!policy)
    return res
      .status(404)
      .json({ success: false, message: "Policy not found" });

  // Build conversation history as text
  const history = messages
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  const language = req.body.language || "en";
  const systemPrompt = `You are a helpful insurance assistant.
You only answer questions based on the policy provided.
Be clear, simple, and concise. Never use legal jargon.
${
  language === "hi"
    ? "Always respond in Hindi (Devanagari script). Use simple, everyday Hindi."
    : "Always respond in English."
}`;

  const userPrompt = `Insurance Policy Summary: ${policy.summary}
Covered: ${policy.covered.map((c) => c.title).join(", ")}
Not Covered: ${policy.notCovered.map((c) => c.title).join(", ")}

Conversation so far:
${history}

Give a helpful reply to the user's last message. Keep it under 3 sentences.`;

  const reply = await callGemini(systemPrompt, userPrompt);

  // Save to chat history
  const lastUserMsg = messages[messages.length - 1];
  policy.chatHistory.push(
    { role: "user", content: lastUserMsg.content, timestamp: new Date() },
    { role: "assistant", content: reply, timestamp: new Date() }
  );
  await policy.save();

  res.json({ success: true, reply });
};

module.exports = { chatWithPolicy };

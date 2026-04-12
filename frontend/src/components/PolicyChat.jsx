import { useState, useEffect, useRef } from "react";
import { chatWithPolicy } from "../services/api";
import toast from "react-hot-toast";
import { useLanguage } from "../context/LanguageContext";

const SUGGESTIONS = {
  en: [
    "What is my deductible?",
    "Am I covered for pre-existing conditions?",
    "What is the claim process?",
    "Are family members covered?",
  ],
  hi: [
    "मेरा डिडक्टिबल क्या है?",
    "क्या पूर्व-मौजूदा स्थितियों के लिए कवर है?",
    "क्लेम प्रक्रिया क्या है?",
    "क्या परिवार के सदस्य कवर हैं?",
  ],
};

export default function PolicyChat({ policyId }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        lang === "hi"
          ? "नमस्ते! अपनी पॉलिसी के बारे में कुछ भी पूछें।"
          : "Hi! Ask me anything about your policy.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const { lang } = useLanguage();

  const suggestions = SUGGESTIONS[lang];

  const sendMessage = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;
    const updated = [...messages, { role: "user", content: userMsg }];
    setMessages(updated);
    setInput("");
    setShowSuggestions(false);
    setLoading(true);
    try {
      const data = await chatWithPolicy(policyId, updated, lang);
      setMessages([...updated, { role: "assistant", content: data.reply }]);
    } catch {
      toast.error("Failed to get a response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] border rounded-xl overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {showSuggestions && (
          <div className="flex flex-wrap gap-2 mb-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-xs bg-white border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded-full transition">
                {s}
              </button>
            ))}
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}>
            <div className="max-w-[75%]">
              {m.role === "assistant" && (
                <p className="text-xs text-gray-400 mb-0.5 ml-1">
                  InsureEasy AI
                </p>
              )}
              <div
                className={`px-4 py-2 rounded-2xl text-sm ${
                  m.role === "user"
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-white text-gray-800 border rounded-bl-none shadow-sm"
                }`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
              <span className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="flex items-center gap-2 p-3 border-t bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about your policy..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          onClick={() => sendMessage()}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition">
          ✈️
        </button>
      </div>
    </div>
  );
}

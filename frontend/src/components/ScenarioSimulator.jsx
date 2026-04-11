import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { simulateScenario } from "../services/api";

const PRESETS = [
  "What if I get hospitalized?",
  "What if I have a car accident?",
  "What if my phone gets stolen?",
  "What if I need surgery?",
  "What if I travel abroad?",
];

export default function ScenarioSimulator({ policyId }) {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await simulateScenario(policyId, question);
      setResult(data);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const badgeStyle = {
    YES: "bg-green-100 text-green-700 border border-green-400",
    NO: "bg-red-100 text-red-700 border border-red-400",
    PARTIAL: "bg-yellow-100 text-yellow-700 border border-yellow-400",
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">⚡</span>
        <div>
          <h2 className="text-xl font-bold">Scenario Simulator</h2>
          <p className="text-gray-500 text-sm">Ask any what-if question about your policy</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button key={p} onClick={() => setQuestion(p)}
            className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full border transition">
            {p}
          </button>
        ))}
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Describe your situation..."
        rows={3}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <div className="flex justify-end">
        <button onClick={handleAsk} disabled={loading || !question.trim()}
          className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-semibold transition">
          {loading ? "Asking..." : "Ask Now"}
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-white border rounded-xl p-5 shadow space-y-3"
          >
            <span className={`inline-block px-4 py-1 rounded-full font-bold text-lg ${badgeStyle[result.verdict] || badgeStyle.PARTIAL}`}>
              {result.verdict || "PARTIAL"}
            </span>
            <div>
              <h4 className="font-semibold text-gray-700">Answer</h4>
              <p className="text-gray-600 text-sm">{result.answer}</p>
            </div>
            {result.relevantClauses?.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700">Relevant Policy Points</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {result.relevantClauses.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {result.recommendation && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
                💡 <strong>What You Should Do:</strong> {result.recommendation}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { simulateScenario } from "../services/api";

const RED = "#E94560";
const NAVY = "#1A1A2E";

/* ── Scenario categories with presets ── */
const CATEGORIES = [
  {
    id: "health",
    label: "Health",
    icon: "🏥",
    color: "#10B981",
    bg: "#ECFDF5",
    scenarios: [
      "What if I get hospitalized for 3 days?",
      "What if I need surgery?",
      "What if I have a pre-existing condition?",
      "What if I need mental health treatment?",
    ],
  },
  {
    id: "property",
    label: "Property",
    icon: "🏠",
    color: "#3B82F6",
    bg: "#EFF6FF",
    scenarios: [
      "What if my house floods?",
      "What if there's a fire at home?",
      "What if my valuables are stolen?",
      "What if there's earthquake damage?",
    ],
  },
  {
    id: "travel",
    label: "Travel",
    icon: "✈️",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    scenarios: [
      "What if my flight gets cancelled?",
      "What if I need emergency care abroad?",
      "What if my luggage is lost?",
      "What if I need to cancel my trip?",
    ],
  },
  {
    id: "vehicle",
    label: "Vehicle",
    icon: "🚗",
    color: "#F59E0B",
    bg: "#FFFBEB",
    scenarios: [
      "What if I have a car accident?",
      "What if my car is stolen?",
      "What if I hit another vehicle?",
      "What if my car breaks down?",
    ],
  },
  {
    id: "liability",
    label: "Liability",
    icon: "⚖️",
    color: RED,
    bg: "#FFF0F3",
    scenarios: [
      "What if someone gets injured on my property?",
      "What if I accidentally damage someone's property?",
      "What if I'm sued for negligence?",
    ],
  },
];

/* ── Verdict config ── */
const VERDICT = {
  YES: {
    label: "COVERED",
    emoji: "✅",
    color: "#16A34A",
    bg: "linear-gradient(135deg, #DCFCE7, #BBF7D0)",
    border: "#86EFAC",
    text: "Your claim would likely be approved.",
  },
  NO: {
    label: "NOT COVERED",
    emoji: "🚫",
    color: "#DC2626",
    bg: "linear-gradient(135deg, #FEE2E2, #FECACA)",
    border: "#FCA5A5",
    text: "This scenario is excluded from your policy.",
  },
  PARTIAL: {
    label: "PARTIAL",
    emoji: "⚡",
    color: "#D97706",
    bg: "linear-gradient(135deg, #FEF3C7, #FDE68A)",
    border: "#FCD34D",
    text: "You may be partially covered with conditions.",
  },
};

/* ── Coverage meter bar ── */
function CoverageMeter({ verdict }) {
  const pct = verdict === "YES" ? 92 : verdict === "PARTIAL" ? 48 : 8;
  const color =
    verdict === "YES"
      ? "#16A34A"
      : verdict === "PARTIAL"
      ? "#D97706"
      : "#DC2626";
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-xs font-semibold text-gray-500">
        <span>Claim Likelihood</span>
        <span style={{ color }}>{pct}%</span>
      </div>
      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/* ── Single simulation result card ── */
function ResultCard({ question, result, index }) {
  const v =
    result.covered === true
      ? "YES"
      : result.covered === false
      ? "NO"
      : "PARTIAL";
  const cfg = VERDICT[v];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl overflow-hidden border shadow-sm"
      style={{ borderColor: cfg.border }}>
      {/* Verdict header */}
      <div
        className="px-5 py-4 flex items-center justify-between gap-3"
        style={{ background: cfg.bg }}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{cfg.emoji}</span>
          <div>
            <p
              className="font-extrabold text-sm"
              style={{ color: cfg.color }}>
              {cfg.label}
            </p>
            <p className="text-xs text-gray-600 leading-snug max-w-xs truncate">
              {question}
            </p>
          </div>
        </div>
        <CoverageMeter verdict={v} />
      </div>

      {/* Answer body */}
      <div className="bg-white px-5 py-4 flex flex-col gap-3">
        <p className="text-sm text-gray-700 leading-relaxed">{result.answer}</p>

        {result.relevantClauses?.length > 0 && (
          <div className="flex flex-col gap-1.5">
            <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
              Relevant Policy Clauses
            </p>
            <ul className="flex flex-col gap-1">
              {result.relevantClauses.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-600 bg-gray-50
                             px-3 py-2 rounded-lg border border-gray-100">
                  <span
                    className="mt-0.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: cfg.color }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {result.recommendation && (
          <div
            className="flex items-start gap-2.5 px-4 py-3 rounded-xl text-sm"
            style={{
              background: `${cfg.color}10`,
              border: `1px solid ${cfg.color}25`,
            }}>
            <span className="text-base shrink-0">💡</span>
            <p className="text-gray-700 leading-relaxed">
              <span
                className="font-bold"
                style={{ color: cfg.color }}>
                What to do:{" "}
              </span>
              {result.recommendation}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Main component ── */
export default function ScenarioSimulator({ policyId }) {
  const [activeCategory, setActiveCategory] = useState("health");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]); // [{question, result}]

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory);

  const handleAsk = async (q) => {
    const finalQ = (q || question).trim();
    if (!finalQ) return;
    setLoading(true);
    setQuestion("");
    try {
      const data = await simulateScenario(policyId, finalQ);
      setHistory((prev) => [{ question: finalQ, result: data }, ...prev]);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap'); .sim-heading{font-family:'Fraunces',serif;}`}</style>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="sim-heading text-2xl font-black text-gray-900">
            Claim Simulator
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Simulate real-world scenarios against your policy — get instant
            coverage verdicts.
          </p>
        </div>
        {history.length > 0 && (
          <button
            onClick={() => setHistory([])}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors
                       font-semibold shrink-0 mt-1">
            Clear history
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold
                        transition-all duration-150 border
                        ${
                          activeCategory === cat.id
                            ? "text-white shadow-sm"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
                        }`}
            style={
              activeCategory === cat.id
                ? { background: cat.color, borderColor: cat.color }
                : {}
            }>
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* Scenario preset cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {activeCat.scenarios.map((s) => (
            <motion.button
              key={s}
              onClick={() => handleAsk(s)}
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left
                         text-sm font-semibold text-gray-700 bg-white border border-gray-200
                         hover:border-gray-300 hover:shadow-sm transition-all duration-150
                         disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ borderLeft: `3px solid ${activeCat.color}` }}>
              <span className="text-lg shrink-0">{activeCat.icon}</span>
              <span className="flex-1 leading-snug">{s}</span>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-gray-300 shrink-0">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.button>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Custom question input */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
          Or describe your own scenario
        </label>
        <div className="flex gap-2">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            placeholder="e.g. What if I need dialysis treatment for 6 months?"
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm
                       text-gray-700 placeholder-gray-400 bg-white outline-none
                       focus:ring-2 focus:ring-red-200 focus:border-red-300
                       transition-all duration-200"
          />
          <button
            onClick={() => handleAsk()}
            disabled={loading || !question.trim()}
            className={`px-5 py-3 rounded-xl font-bold text-white text-sm flex items-center
                        gap-2 transition-all duration-150 shrink-0
                        ${
                          !loading && question.trim()
                            ? "hover:brightness-110 hover:scale-[1.02]"
                            : "opacity-40 cursor-not-allowed"
                        }`}
            style={{
              background:
                !loading && question.trim()
                  ? `linear-gradient(135deg, ${RED}, #c0304f)`
                  : "#9CA3AF",
            }}>
            {loading ? (
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth={3}
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            Simulate
          </button>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white
                     border border-gray-100 shadow-sm">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: "rgba(233,69,96,0.1)",
              border: "1.5px solid rgba(233,69,96,0.2)",
            }}>
            <div
              className="w-5 h-5 animate-spin"
              style={{
                border: `2px solid rgba(233,69,96,0.2)`,
                borderTop: `2px solid ${RED}`,
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">
              Checking your policy…
            </p>
            <p className="text-xs text-gray-400">
              Analyzing coverage against your scenario
            </p>
          </div>
        </motion.div>
      )}

      {/* Results history */}
      {history.length > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <p className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
              Simulation Results
            </p>
            <span
              className="text-xs font-bold text-white px-2 py-0.5 rounded-full"
              style={{ background: RED }}>
              {history.length}
            </span>
          </div>
          {history.map((item, i) => (
            <ResultCard
              key={i}
              index={i}
              question={item.question}
              result={item.result}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {history.length === 0 && !loading && (
        <div
          className="flex flex-col items-center justify-center py-10 text-center gap-3
                        rounded-2xl border-2 border-dashed border-gray-200">
          <span className="text-4xl">⚡</span>
          <p className="text-sm font-bold text-gray-500">
            Pick a scenario above or type your own
          </p>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            Results will appear here showing whether your claim would be
            covered, and what you should do.
          </p>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CoverageGrid from "../components/Coveragegrid";
import ExclusionHighlighter from "../components/ExclusionHighlighter";
import KeyTermsGlossary from "../components/KeyTermsGlossary";
import ScenarioSimulator from "../components/ScenarioSimulator";
import PolicyChat from "../components/PolicyChat";

/* ─── Brand tokens ──────────────────────────────────────────── */
const NAVY = "#1A1A2E";
const DEEP = "#0F3460";
const RED = "#E94560";

/* ─── Inline SVG icons ──────────────────────────────────────── */
const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4">
    <path d="M15 10H5M9 6l-4 4 4 4" />
  </svg>
);
const CalendarIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4">
    <rect
      x="3"
      y="4"
      width="14"
      height="13"
      rx="2"
    />
    <path d="M3 8h14M7 3v2M13 3v2" />
  </svg>
);
const DocumentIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4">
    <path d="M13 2H7a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V6z" />
    <polyline points="13 2 13 6 17 6" />
  </svg>
);
const SearchIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4">
    <circle
      cx="9"
      cy="9"
      r="5.5"
    />
    <path d="M16 16l-3-3" />
  </svg>
);

/* ─── Risk score helpers ────────────────────────────────────── */
function getRiskColor(score) {
  if (score < 40)
    return {
      stroke: "#16A34A",
      text: "#15803D",
      label: "Low Risk",
      bg: "#DCFCE7",
    };
  if (score < 70)
    return {
      stroke: "#D97706",
      text: "#B45309",
      label: "Medium Risk",
      bg: "#FEF3C7",
    };
  return {
    stroke: "#DC2626",
    text: "#B91C1C",
    label: "High Risk",
    bg: "#FEE2E2",
  };
}

/* ─── CSS-only circular gauge ───────────────────────────────── */
function RiskGauge({ score = 0 }) {
  const [displayed, setDisplayed] = useState(0);
  const cfg = getRiskColor(displayed);

  useEffect(() => {
    let frame;
    let start = null;
    const duration = 1200;
    const animate = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * score));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  const R = 52;
  const C = 2 * Math.PI * R;
  const filled = (displayed / 100) * C;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-36 h-36">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke={cfg.stroke}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${C}`}
            style={{ transition: "stroke 0.4s" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-black text-white leading-none">
            {displayed}
          </span>
          <span
            className="text-xs font-semibold mt-0.5"
            style={{ color: cfg.stroke }}>
            /100
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
          Policy Risk Score
        </span>
        <span
          className="px-3 py-1 rounded-full text-xs font-extrabold"
          style={{
            background: cfg.bg + "22",
            color: cfg.stroke,
            border: `1px solid ${cfg.stroke}44`,
          }}>
          {cfg.label}
        </span>
      </div>
    </div>
  );
}

/* ─── Summary stat card ─────────────────────────────────────── */
function StatCard({ value, label, color, icon }) {
  return (
    <div
      className="flex flex-col items-center gap-1 px-5 py-4 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
      <span className="text-2xl">{icon}</span>
      <span
        className="text-2xl font-black text-white leading-none"
        style={{ color }}>
        {value}
      </span>
      <span className="text-xs text-gray-400 font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

/* ─── Tab definitions ───────────────────────────────────────── */
const TABS = [
  { id: "coverage", label: "Coverage", emoji: "🛡️" },
  { id: "exclusions", label: "Exclusions", emoji: "🚫" },
  { id: "terms", label: "Key Terms", emoji: "📖" },
  { id: "simulate", label: "Simulator", emoji: "⚡" },
  { id: "chat", label: "Ask Policy", emoji: "💬" },
];

/* ─── Demo / fallback data ──────────────────────────────────── */
const DEMO_DATA = {
  summary:
    "This is a standard homeowner's insurance policy with moderate coverage. Several high-risk exclusions were identified including flood, earthquake, and intentional damage.",
  riskScore: 62,
  covered: [
    {
      title: "Fire & Smoke Damage",
      description:
        "Full replacement cost coverage for fire and smoke damage to structure and contents.",
      icon: "🔥",
    },
    {
      title: "Theft & Vandalism",
      description:
        "Covers stolen or damaged property up to $50,000 with a $500 deductible.",
      icon: "🔒",
    },
    {
      title: "Liability Protection",
      description:
        "Up to $300,000 personal liability if someone is injured on your property.",
      icon: "⚖️",
    },
    {
      title: "Temporary Housing",
      description:
        "Covers hotel and living expenses up to $15,000 if your home is uninhabitable.",
      icon: "🏨",
    },
    {
      title: "Medical Payments",
      description:
        "Pays up to $5,000 for medical expenses of guests injured on your property.",
      icon: "🏥",
    },
  ],
  notCovered: [
    {
      title: "Flood Damage",
      description:
        "Rising water, storm surge, and sewer backup are explicitly excluded.",
      icon: "🌊",
    },
    {
      title: "Earthquake Damage",
      description:
        "Structural damage from seismic activity is not covered under this policy.",
      icon: "🌍",
    },
    {
      title: "Intentional Acts",
      description:
        "Any damage caused intentionally by the insured is excluded.",
      icon: "⛔",
    },
    {
      title: "Business Activities",
      description:
        "Losses arising from running a business at the property are not covered.",
      icon: "💼",
    },
  ],
  partialCoverage: [
    {
      title: "Water Damage",
      description: "Only sudden/accidental covered. Gradual leaks excluded.",
      icon: "💧",
      covered: "Burst pipes",
      notCovered: "Slow leaks",
    },
  ],
  keyTerms: [
    {
      term: "Deductible",
      definition:
        "The amount you pay out-of-pocket before your insurance kicks in.",
    },
    {
      term: "Premium",
      definition:
        "The amount you pay monthly or annually to keep your policy active.",
    },
    {
      term: "Liability",
      definition:
        "Your legal responsibility if someone is injured or their property is damaged.",
    },
    {
      term: "Replacement Cost",
      definition:
        "What it costs to replace or repair your property at today's prices.",
    },
    {
      term: "Exclusion",
      definition:
        "A specific situation or item that your policy does NOT cover.",
    },
    {
      term: "Endorsement",
      definition:
        "An amendment to your policy that adds, removes, or changes coverage.",
    },
  ],
  policyId: "demo-policy-123",
};

/* ═══════════════════════════════════════════════════════════════
   ResultsPage
   ═══════════════════════════════════════════════════════════════ */
export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("coverage");

  const data = state?.data ?? DEMO_DATA;
  const {
    summary = "",
    riskScore = 0,
    covered = [],
    notCovered = [],
    partialCoverage = [],
    keyTerms = [],
    policyId,
  } = data;

  const policyName = state?.fileName ?? "Insurance Policy";
  const uploadDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:wght@700;900&display=swap');
        .results-heading { font-family: 'Fraunces', serif; }
        body { font-family: 'DM Sans', sans-serif; background: #F1F5F9; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tab-enter { animation: fadeSlideUp 0.3s ease forwards; }
      `}</style>

      <div
        className="min-h-screen flex flex-col"
        style={{ background: "#F1F5F9" }}>
        {/* ══════════ DARK HEADER ══════════════════════════════════ */}
        <header
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${DEEP} 100%)`,
          }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                                linear-gradient(90deg,rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
            style={{ background: "rgba(233,69,96,0.2)" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => navigate("/upload")}
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-150 shrink-0">
                  <ArrowLeftIcon /> Back
                </button>
                <span className="text-gray-600">|</span>
                <div className="flex items-center gap-2 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(233,69,96,0.2)", color: RED }}>
                    <DocumentIcon />
                  </div>
                  <span className="text-white font-bold text-sm truncate">
                    {policyName}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <CalendarIcon /> {uploadDate}
                </div>
                <button
                  onClick={() => navigate("/upload")}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white
                             border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-150">
                  Analyze Another →
                </button>
              </div>
            </div>

            {/* Hero row */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1 min-w-0">
                <span
                  className="text-xs font-extrabold tracking-[0.2em] uppercase mb-2 block"
                  style={{ color: RED }}>
                  Analysis Complete
                </span>
                <h1 className="results-heading text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Your Policy,
                  <br />
                  Decoded.
                </h1>
                {summary && (
                  <p className="text-sm text-gray-300 leading-relaxed max-w-lg mb-6">
                    {summary}
                  </p>
                )}
                <div className="grid grid-cols-3 gap-3 max-w-sm">
                  <StatCard
                    value={covered.length}
                    label="Items Covered"
                    color="#4ADE80"
                    icon="✅"
                  />
                  <StatCard
                    value={notCovered.length}
                    label="Exclusions"
                    color="#F87171"
                    icon="🚫"
                  />
                  <StatCard
                    value={keyTerms.length}
                    label="Key Terms"
                    color="#FBBF24"
                    icon="📖"
                  />
                </div>
              </div>
              <div className="lg:self-center">
                <RiskGauge score={riskScore} />
              </div>
            </div>

            {/* Tab row */}
            <div className="flex gap-1 mt-8 overflow-x-auto pb-0.5 -mb-px">
              {TABS.map(({ id, label, emoji }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={[
                    "flex items-center gap-2 px-5 py-3 rounded-t-xl text-sm font-bold whitespace-nowrap",
                    "transition-all duration-150 border-b-2",
                    activeTab === id
                      ? "text-white border-[#E94560] bg-white/10"
                      : "text-gray-400 border-transparent hover:text-white hover:bg-white/5",
                  ].join(" ")}>
                  <span>{emoji}</span>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ══════════ TAB CONTENT ══════════════════════════════════ */}
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-8">
          <div
            key={activeTab}
            className="tab-enter">
            {/* Coverage tab */}
            {activeTab === "coverage" && (
              <CoverageGrid
                coveredItems={covered.map((c) => ({ ...c, type: "covered" }))}
                excludedItems={notCovered.map((c) => ({
                  ...c,
                  type: "excluded",
                }))}
              />
            )}

            {/* Exclusions tab — YOUR COMPONENT ✅ */}
            {activeTab === "exclusions" && (
              <ExclusionHighlighter
                notCovered={notCovered}
                partialCoverage={partialCoverage}
              />
            )}

            {/* Key Terms tab — YOUR COMPONENT ✅ */}
            {activeTab === "terms" && (
              <div className="flex flex-col gap-4">
                <div className="mb-2">
                  <h2 className="results-heading text-2xl font-black text-gray-900">
                    Key Terms Glossary
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Insurance jargon, translated into plain English.
                  </p>
                </div>
                <KeyTermsGlossary keyTerms={keyTerms} />
              </div>
            )}

            {/* Simulator tab — YOUR COMPONENT ✅ */}
            {activeTab === "simulate" && (
              <ScenarioSimulator policyId={policyId} />
            )}

            {/* Chat tab — YOUR COMPONENT ✅ */}
            {activeTab === "chat" && (
              <div className="flex flex-col gap-4">
                <div className="mb-2">
                  <h2 className="results-heading text-2xl font-black text-gray-900">
                    Ask Your Policy
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Chat directly with AI about your policy details.
                  </p>
                </div>
                <PolicyChat policyId={policyId} />
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-5">
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>🛡️</span>
              <span className="font-bold text-gray-600">PolicyPal</span>
              <span>· AI Analysis</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Analysis complete · {new Date().toLocaleTimeString()}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

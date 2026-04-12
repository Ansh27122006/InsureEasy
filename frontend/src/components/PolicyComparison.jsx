import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { analyzePolicy } from "../services/api";
import { useLanguage } from "../context/LanguageContext";
import toast from "react-hot-toast";

const RED = "#E94560";
const NAVY = "#1A1A2E";
const DEEP = "#0F3460";

/* ── Icons ── */
const UploadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8">
    <polyline points="16 16 12 12 8 16" />
    <line
      x1="12"
      y1="12"
      x2="12"
      y2="21"
    />
    <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
  </svg>
);
const SpinnerIcon = () => (
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
);
const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    className="w-3.5 h-3.5">
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
    />
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
    />
  </svg>
);

/* ── Risk color helper ── */
function getRiskColor(score) {
  if (score < 40) return { color: "#16A34A", bg: "#DCFCE7", label: "Low Risk" };
  if (score < 70)
    return { color: "#D97706", bg: "#FEF3C7", label: "Medium Risk" };
  return { color: "#DC2626", bg: "#FEE2E2", label: "High Risk" };
}

/* ── Mini risk gauge ── */
function MiniGauge({ score }) {
  const cfg = getRiskColor(score);
  const R = 28,
    C = 2 * Math.PI * R;
  const filled = (score / 100) * C;
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-16 h-16">
        <svg
          viewBox="0 0 72 72"
          className="w-full h-full -rotate-90">
          <circle
            cx="36"
            cy="36"
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="7"
          />
          <circle
            cx="36"
            cy="36"
            r={R}
            fill="none"
            stroke={cfg.color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${filled} ${C}`}
            style={{ transition: "stroke-dasharray 1s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-black text-white">{score}</span>
        </div>
      </div>
      <span
        className="text-xs font-bold"
        style={{ color: cfg.color }}>
        {cfg.label}
      </span>
    </div>
  );
}

/* ── Single policy upload panel ── */
function PolicyPanel({ label, color, accentBg, data, loading, onAnalyze }) {
  const [tab, setTab] = useState("pdf");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const onDrop = useCallback((accepted) => {
    if (accepted.length > 0) setFile(accepted[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    disabled: !!data || loading,
  });

  const isReady = tab === "pdf" ? !!file : text.trim().length > 20;

  const handleAnalyze = () => {
    const fd = new FormData();
    if (tab === "pdf") fd.append("file", file);
    else fd.append("text", text.trim());
    onAnalyze(fd);
  };

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-0">
      {/* Panel header */}
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-2xl"
        style={{ background: accentBg, border: `1.5px solid ${color}30` }}>
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}cc)`,
          }}>
          {label}
        </div>
        <div>
          <p className="font-extrabold text-gray-900 text-sm">Policy {label}</p>
          <p className="text-xs text-gray-500">
            {data
              ? `${data.covered?.length ?? 0} covered · ${
                  data.notCovered?.length ?? 0
                } exclusions`
              : "Upload or paste policy text"}
          </p>
        </div>
        {data && (
          <div
            className="ml-auto flex items-center gap-1.5 text-xs font-bold text-green-700
                          bg-green-100 px-2.5 py-1 rounded-full">
            <CheckIcon /> Analyzed
          </div>
        )}
      </div>

      {/* Already analyzed — show summary */}
      {data ? (
        <div className="flex flex-col gap-3 px-5 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700 leading-relaxed flex-1 pr-4">
              {data.summary}
            </p>
            <MiniGauge score={data.riskScore ?? 0} />
          </div>
          <div className="flex gap-2 flex-wrap">
            {data.covered?.slice(0, 3).map((c, i) => (
              <span
                key={i}
                className="text-xs bg-green-50 text-green-700 border border-green-200
                                       px-2 py-1 rounded-full font-medium">
                ✅ {c.title}
              </span>
            ))}
            {data.notCovered?.slice(0, 2).map((c, i) => (
              <span
                key={i}
                className="text-xs bg-red-50 text-red-700 border border-red-200
                                       px-2 py-1 rounded-full font-medium">
                🚫 {c.title}
              </span>
            ))}
          </div>
        </div>
      ) : (
        /* Upload form */
        <div className="flex flex-col gap-3">
          {/* Tabs */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            {[
              { id: "pdf", label: "📄 PDF" },
              { id: "text", label: "📝 Text" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 py-2 text-sm font-semibold transition-all duration-150
                            ${
                              tab === t.id
                                ? "bg-white text-gray-900 shadow-sm"
                                : "text-gray-400 hover:text-gray-600"
                            }`}>
                {t.label}
              </button>
            ))}
          </div>

          {tab === "pdf" ? (
            file ? (
              <div className="flex items-center gap-3 px-4 py-3 bg-green-50 border-2 border-green-300 rounded-xl">
                <span className="text-2xl">📄</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-green-600 font-semibold">Ready</p>
                </div>
                <button
                  onClick={() => setFile(null)}
                  className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center
                             justify-center text-gray-400 hover:text-red-500 transition-colors">
                  <XIcon />
                </button>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200
                            flex flex-col items-center justify-center gap-2 py-8
                            ${
                              isDragActive
                                ? "border-blue-400 bg-blue-50"
                                : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
                            }`}>
                <input {...getInputProps()} />
                <div className="text-gray-300">
                  <UploadIcon />
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  {isDragActive ? "Drop PDF here…" : "Drag & drop PDF"}
                </p>
                <p className="text-xs text-gray-400">
                  or{" "}
                  <span className="text-blue-500 underline">browse files</span>
                </p>
              </div>
            )
          ) : (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste policy text here…"
              rows={6}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700
                         placeholder-gray-400 bg-gray-50 focus:bg-white resize-none outline-none
                         focus:ring-2 focus:ring-red-200 transition-all"
            />
          )}

          <button
            onClick={handleAnalyze}
            disabled={!isReady || loading}
            className={`w-full py-3 rounded-xl font-bold text-white text-sm flex items-center
                        justify-center gap-2 transition-all duration-200
                        ${
                          isReady && !loading
                            ? "hover:brightness-110 hover:scale-[1.01]"
                            : "opacity-40 cursor-not-allowed"
                        }`}
            style={{
              background:
                isReady && !loading
                  ? `linear-gradient(135deg, ${color}, ${color}cc)`
                  : "#9CA3AF",
            }}>
            {loading ? (
              <>
                <SpinnerIcon /> Analyzing…
              </>
            ) : (
              `Analyze Policy ${label}`
            )}
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Comparison row ── */
function CompareRow({ label, v1, v2, lowerIsBetter = false, isText = false }) {
  const better = isText
    ? null
    : lowerIsBetter
    ? v1 < v2
      ? "A"
      : v1 > v2
      ? "B"
      : null
    : v1 > v2
    ? "A"
    : v1 < v2
    ? "B"
    : null;

  return (
    <div className="grid grid-cols-3 px-5 py-3.5 border-b border-gray-50 last:border-0 items-center">
      <span className="text-sm font-semibold text-gray-600">{label}</span>
      {[
        { val: v1, side: "A" },
        { val: v2, side: "B" },
      ].map(({ val, side }) => (
        <div
          key={side}
          className="flex justify-center">
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full
            ${better === side ? "text-white" : "text-gray-700 bg-gray-100"}`}
            style={
              better === side
                ? { background: side === "A" ? "#3B82F6" : RED }
                : {}
            }>
            {val ?? "—"}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Item list comparison ── */
function ItemList({ items = [], color, emptyText }) {
  if (!items.length)
    return <p className="text-xs text-gray-400 italic">{emptyText}</p>;
  return (
    <ul className="flex flex-col gap-1.5">
      {items.slice(0, 5).map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-2 text-xs text-gray-700">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: color }}
          />
          <span className="truncate">
            {item.icon} {item.title}
          </span>
        </li>
      ))}
      {items.length > 5 && (
        <li className="text-xs text-gray-400 pl-3.5">
          +{items.length - 5} more
        </li>
      )}
    </ul>
  );
}

/* ── Main export ── */
export default function PolicyComparison() {
  const { lang } = useLanguage();
  const [policy1, setPolicy1] = useState(null);
  const [policy2, setPolicy2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const analyze = async (formData, setData, setLoading, label) => {
    setLoading(true);
    try {
      const data = await analyzePolicy(formData, lang);
      setData(data);
    } catch {
      toast.error(`Failed to analyze Policy ${label}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  /* Winner logic: lower risk + more covered + fewer exclusions */
  const winner = (() => {
    if (!policy1 || !policy2) return null;
    const score = (p) =>
      p.riskScore +
      (p.notCovered?.length ?? 0) * 3 -
      (p.covered?.length ?? 0) * 2;
    const s1 = score(policy1),
      s2 = score(policy2);
    if (s1 < s2) return "A";
    if (s2 < s1) return "B";
    return "TIE";
  })();

  const bothReady = policy1 && policy2;

  return (
    <div className="flex flex-col gap-8">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap'); .cmp-heading{font-family:'Fraunces',serif;}`}</style>

      {/* Upload panels */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <PolicyPanel
          label="A"
          color="#3B82F6"
          accentBg="#EFF6FF"
          data={policy1}
          loading={loading1}
          onAnalyze={(fd) => analyze(fd, setPolicy1, setLoading1, "A")}
        />

        {/* VS divider */}
        <div className="flex md:flex-col items-center justify-center gap-2 shrink-0">
          <div className="flex-1 h-px md:h-auto md:w-px bg-gray-200 md:flex-none md:h-full" />
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-black text-xs
                          text-white shrink-0"
            style={{ background: `linear-gradient(135deg, ${NAVY}, ${DEEP})` }}>
            VS
          </div>
          <div className="flex-1 h-px md:h-auto md:w-px bg-gray-200 md:flex-none md:h-full" />
        </div>

        <PolicyPanel
          label="B"
          color={RED}
          accentBg="#FFF0F3"
          data={policy2}
          loading={loading2}
          onAnalyze={(fd) => analyze(fd, setPolicy2, setLoading2, "B")}
        />
      </div>

      {/* Progress hint */}
      {!bothReady && (
        <div className="flex items-center justify-center gap-3">
          {[
            { label: "Policy A", done: !!policy1, color: "#3B82F6" },
            { label: "Policy B", done: !!policy2, color: RED },
          ].map(({ label, done, color }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center
                              ${
                                done ? "text-white" : "border-2 border-gray-200"
                              }`}
                style={done ? { background: color } : {}}>
                {done && <CheckIcon />}
              </div>
              <span
                className={
                  done ? "text-gray-800 font-semibold" : "text-gray-400"
                }>
                {label}
              </span>
            </div>
          ))}
          <span className="text-gray-300 text-sm">
            — Analyze both to compare
          </span>
        </div>
      )}

      {/* ── COMPARISON RESULTS ── */}
      <AnimatePresence>
        {bothReady && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6">
            {/* Winner banner */}
            <div
              className="relative overflow-hidden rounded-2xl px-8 py-6 flex flex-col
                            sm:flex-row items-center justify-between gap-4"
              style={{
                background: `linear-gradient(135deg, ${NAVY}, ${DEEP})`,
              }}>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 80% 50%, rgba(233,69,96,0.2) 0%, transparent 55%)`,
                }}
              />
              <div className="relative z-10">
                <p className="text-xs font-extrabold tracking-widest uppercase text-gray-400 mb-1">
                  Recommendation
                </p>
                {winner === "TIE" ? (
                  <h3 className="cmp-heading text-2xl font-black text-white">
                    🤝 Both policies are equally matched
                  </h3>
                ) : (
                  <h3 className="cmp-heading text-2xl font-black text-white">
                    🏆 Policy{" "}
                    <span style={{ color: winner === "A" ? "#93C5FD" : RED }}>
                      {winner}
                    </span>{" "}
                    is the better choice
                  </h3>
                )}
                <p className="text-sm text-gray-400 mt-1">
                  Based on risk score, coverage count, and exclusions
                </p>
              </div>
              {winner !== "TIE" && (
                <div className="relative z-10 shrink-0 flex flex-col items-center gap-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center
                                  font-black text-white text-3xl"
                    style={{
                      background: winner === "A" ? "#3B82F6" : RED,
                      boxShadow: `0 8px 24px ${
                        winner === "A" ? "#3B82F688" : "#E9456088"
                      }`,
                    }}>
                    {winner}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    Winner
                  </span>
                </div>
              )}
            </div>

            {/* Stats comparison table */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              {/* Table header */}
              <div
                className="grid grid-cols-3 px-5 py-4"
                style={{
                  background: `linear-gradient(135deg, ${NAVY}, ${DEEP})`,
                }}>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Metric
                </div>
                <div className="text-center">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold
                                   text-white uppercase tracking-widest">
                    <span className="w-5 h-5 rounded-md bg-blue-500 flex items-center justify-center font-black text-[10px]">
                      A
                    </span>
                    Policy A
                  </span>
                </div>
                <div className="text-center">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold
                                   text-white uppercase tracking-widest">
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center font-black text-[10px]"
                      style={{ background: RED }}>
                      B
                    </span>
                    Policy B
                  </span>
                </div>
              </div>
              <CompareRow
                label="Risk Score"
                v1={policy1.riskScore}
                v2={policy2.riskScore}
                lowerIsBetter
              />
              <CompareRow
                label="Items Covered"
                v1={policy1.covered?.length ?? 0}
                v2={policy2.covered?.length ?? 0}
              />
              <CompareRow
                label="Exclusions"
                v1={policy1.notCovered?.length ?? 0}
                v2={policy2.notCovered?.length ?? 0}
                lowerIsBetter
              />
              <CompareRow
                label="Key Terms"
                v1={policy1.keyTerms?.length ?? 0}
                v2={policy2.keyTerms?.length ?? 0}
              />
            </div>

            {/* Risk gauges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "A", data: policy1, color: "#3B82F6", bg: "#EFF6FF" },
                { label: "B", data: policy2, color: RED, bg: "#FFF0F3" },
              ].map(({ label, data, color, bg }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 flex flex-col items-center gap-3"
                  style={{ background: bg, border: `1.5px solid ${color}20` }}>
                  <div className="flex items-center gap-2 self-stretch">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center
                                    font-black text-white text-xs"
                      style={{ background: color }}>
                      {label}
                    </div>
                    <span className="text-sm font-bold text-gray-700">
                      Policy {label}
                    </span>
                  </div>
                  <MiniGauge score={data.riskScore ?? 0} />
                  <p className="text-xs text-gray-500 text-center leading-relaxed line-clamp-3">
                    {data.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Coverage side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "A", data: policy1, color: "#3B82F6", bg: "#EFF6FF" },
                { label: "B", data: policy2, color: RED, bg: "#FFF0F3" },
              ].map(({ label, data, color, bg }) => (
                <div
                  key={label}
                  className="rounded-2xl p-5 flex flex-col gap-4 bg-white
                                           border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center
                                    font-black text-white text-xs"
                      style={{ background: color }}>
                      {label}
                    </div>
                    <span className="text-sm font-extrabold text-gray-800">
                      Policy {label}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-green-700 uppercase tracking-widest mb-2">
                      ✅ Covered
                    </p>
                    <ItemList
                      items={data.covered}
                      color="#16A34A"
                      emptyText="No covered items"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-red-700 uppercase tracking-widest mb-2">
                      🚫 Exclusions
                    </p>
                    <ItemList
                      items={data.notCovered}
                      color="#DC2626"
                      emptyText="No exclusions listed"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Re-analyze hint */}
            <p className="text-center text-xs text-gray-400">
              Want to compare different policies?{" "}
              <button
                onClick={() => {
                  setPolicy1(null);
                  setPolicy2(null);
                }}
                className="text-blue-500 hover:underline font-semibold">
                Start over
              </button>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

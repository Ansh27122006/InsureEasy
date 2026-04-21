import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import { calculateOOPCost } from "../services/api";
import { useLanguage } from "../context/LanguageContext";

// ── Vivid color palette ──────────────────────────────────────────────────────
const C = {
  blue:        "#4F9CF9",
  blueDeep:    "#1A56DB",
  blueBg:      "#1E3A5F",
  amber:       "#FBBF24",
  amberDeep:   "#D97706",
  amberBg:     "#3D2800",
  green:       "#34D399",
  greenDeep:   "#059669",
  greenBg:     "#003D2B",
  red:         "#F87171",
  redDeep:     "#DC2626",
  redBg:       "#3D0A0A",
  purple:      "#A78BFA",
  purpleBg:    "#2D1B69",
  card:        "#1C2333",
  cardBorder:  "#2E3F5C",
  inputBg:     "#111827",
  inputBorder: "#374151",
  textPrimary: "#F1F5F9",
  textSub:     "#94A3B8",
  textMuted:   "#64748B",
};

const TRANSLATIONS = {
  en: {
    outOfPocket: "Out-of-Pocket Cost Calculator",
    subtitle: "See exactly what you pay vs. what insurance covers — in ₹ INR",
    enterMedicalCost: "Total Medical Cost",
    selectServiceType: "Service Type",
    scenarioDescription: "Describe Your Scenario",
    scenarioOptional: "(Optional)",
    calculate: "Calculate My Costs",
    calculating: "Calculating…",
    totalMedicalCost: "Total Cost",
    youPay: "You Pay",
    insurancePays: "Insurance Pays",
    deductible: "Deductible",
    coinsurance: "Coinsurance",
    outOfPocketMax: "OOP Max",
    limitExceeded: "Limit Exceeded",
    costBreakdown: "Cost Summary",
    stepBreakdown: "Step-by-Step Breakdown",
    explanation: "Your Situation",
    tips: "💡 Money-Saving Tips",
    disclaimer: "Important Note",
    whatThisMeans: "What This Means",
    hospital: "Hospital Stay", surgery: "Surgery", preventive: "Preventive",
    dental: "Dental", mental: "Mental Health", prescription: "Prescription",
    urgentCare: "Urgent Care", emergency: "Emergency", doctor: "Doctor Visit",
  },
  hi: {
    outOfPocket: "जेब से खर्च कैलकुलेटर",
    subtitle: "जानें आप कितना देंगे और बीमा कितना — ₹ INR में",
    enterMedicalCost: "कुल चिकित्सा लागत",
    selectServiceType: "सेवा प्रकार",
    scenarioDescription: "अपना परिदृश्य बताएं",
    scenarioOptional: "(वैकल्पिक)",
    calculate: "मेरी लागत की गणना करें",
    calculating: "गणना जारी है…",
    totalMedicalCost: "कुल लागत",
    youPay: "आप भुगतान करते हैं",
    insurancePays: "बीमा भुगतान करता है",
    deductible: "कटौती योग्य",
    coinsurance: "सह-बीमा",
    outOfPocketMax: "अधिकतम खर्च",
    limitExceeded: "सीमा पार",
    costBreakdown: "लागत सारांश",
    stepBreakdown: "चरण-दर-चरण विवरण",
    explanation: "आपकी स्थिति",
    tips: "💡 पैसा बचाने की सलाह",
    disclaimer: "महत्वपूर्ण नोट",
    whatThisMeans: "इसका क्या अर्थ है",
    hospital: "अस्पताल", surgery: "सर्जरी", preventive: "रोकथाम",
    dental: "दंत", mental: "मानसिक स्वास्थ्य", prescription: "दवा",
    urgentCare: "तत्काल", emergency: "आपातकालीन", doctor: "डॉक्टर",
  },
};

const SERVICE_TYPES = [
  { id: "doctor",       emoji: "🏥", key: "doctor" },
  { id: "hospital",     emoji: "🏨", key: "hospital" },
  { id: "surgery",      emoji: "🔬", key: "surgery" },
  { id: "preventive",   emoji: "💪", key: "preventive" },
  { id: "dental",       emoji: "🦷", key: "dental" },
  { id: "mental",       emoji: "🧠", key: "mental" },
  { id: "prescription", emoji: "💊", key: "prescription" },
  { id: "urgent",       emoji: "⚡", key: "urgentCare" },
  { id: "emergency",    emoji: "🚨", key: "emergency" },
];

function inr(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

// ── MetricCard ────────────────────────────────────────────────────────────────
function MetricCard({ label, value, sub, variant = "default" }) {
  const v = {
    default: { bg: C.card,    border: C.cardBorder, labelC: C.textSub, valueC: C.textPrimary },
    amber:   { bg: C.amberBg, border: C.amberDeep,  labelC: C.amber,   valueC: C.amber       },
    green:   { bg: C.greenBg, border: C.greenDeep,  labelC: C.green,   valueC: C.green       },
  }[variant];

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="p-4 rounded-2xl"
      style={{ background: v.bg, border: `1.5px solid ${v.border}` }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: v.labelC }}>
        {label}
      </p>
      <p className="text-xl font-black" style={{ color: v.valueC }}>{value}</p>
      {sub && <p className="text-sm font-semibold mt-1" style={{ color: v.labelC }}>{sub}</p>}
    </motion.div>
  );
}

// ── DetailPill ────────────────────────────────────────────────────────────────
function DetailPill({ label, value, danger }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="p-3 rounded-xl"
      style={{
        background: danger ? C.redBg : C.card,
        border: `1.5px solid ${danger ? C.redDeep : C.cardBorder}`,
      }}
    >
      <p className="text-xs font-bold uppercase tracking-widest mb-1"
         style={{ color: danger ? C.red : C.textSub }}>
        {label}
      </p>
      <p className="text-base font-black" style={{ color: danger ? C.red : C.textPrimary }}>{value}</p>
    </motion.div>
  );
}

// ── CostVisualization ─────────────────────────────────────────────────────────
function CostVisualization({ calculation, t }) {
  if (!calculation) return null;
  const userPct = calculation.percentage?.user      ?? 0;
  const insPct  = calculation.percentage?.insurance ?? 0;

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">

      <div className="grid grid-cols-3 gap-3">
        <MetricCard label={t.totalMedicalCost} value={inr(calculation.totalMedicalCost)} />
        <MetricCard label={t.youPay}           value={inr(calculation.userPays)}      sub={`${userPct}%`} variant="amber" />
        <MetricCard label={t.insurancePays}    value={inr(calculation.insurancePays)} sub={`${insPct}%`} variant="green" />
      </div>

      {/* Vivid split bar */}
      <div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="h-3 rounded-full overflow-hidden flex"
          style={{ transformOrigin: "left", background: "#1E293B" }}
        >
          <div style={{ width: `${userPct}%`, background: `linear-gradient(90deg, ${C.amber}, ${C.amberDeep})`, transition: "width 0.6s" }} />
          <div style={{ width: `${insPct}%`, background: `linear-gradient(90deg, ${C.green}, ${C.greenDeep})`,  transition: "width 0.6s" }} />
        </motion.div>
        <div className="flex justify-between mt-2">
          <span className="text-xs font-bold" style={{ color: C.amber }}>You — {userPct}%</span>
          <span className="text-xs font-bold" style={{ color: C.green }}>Insurance — {insPct}%</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <DetailPill label={t.deductible}     value={inr(calculation.deductible)} />
        <DetailPill label={t.coinsurance}    value={`${calculation.coinsurancePercent ?? 0}%`} />
        <DetailPill label={t.outOfPocketMax} value={inr(calculation.outOfPocketMax)} />
        {calculation.exceedsLimit && (
          <DetailPill label={t.limitExceeded} value={`+${inr(calculation.excessAmount ?? 0)}`} danger />
        )}
      </div>

      {calculation.breakdown?.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.textSub }}>
            {t.stepBreakdown}
          </p>
          <div className="space-y-2">
            {calculation.breakdown.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start justify-between p-3 rounded-xl"
                style={{ background: C.card, border: `1.5px solid ${C.cardBorder}` }}
              >
                <div>
                  <p className="text-sm font-bold" style={{ color: C.textPrimary }}>{step.step}</p>
                  <p className="text-xs mt-0.5" style={{ color: C.textSub }}>{step.description}</p>
                </div>
                <span className="text-sm font-black ml-4 shrink-0" style={{ color: C.blue }}>
                  {inr(step.amount)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ── ExplanationCard ───────────────────────────────────────────────────────────
function ExplanationCard({ explanation, t }) {
  if (!explanation) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="space-y-4"
    >
      {explanation.simpleExplanation && (
        <div
          className="p-4 rounded-xl text-sm leading-relaxed"
          style={{ background: C.blueBg, border: `1.5px solid ${C.blueDeep}`, color: "#BFDBFE" }}
        >
          {explanation.simpleExplanation}
        </div>
      )}

      {explanation.breakdown?.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.textSub }}>
            {t.whatThisMeans}
          </p>
          <div className="space-y-2">
            {explanation.breakdown.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
                className="p-3 rounded-xl"
                style={{ background: C.card, border: `1.5px solid ${C.cardBorder}` }}
              >
                <p className="text-sm font-bold" style={{ color: C.textPrimary }}>{item.label}</p>
                <p className="text-xs mt-0.5" style={{ color: C.textSub }}>{item.explanation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {explanation.tips?.length > 0 && (
        <div
          className="p-4 rounded-xl"
          style={{ background: C.greenBg, border: `1.5px solid ${C.greenDeep}` }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.green }}>
            {t.tips}
          </p>
          <ul className="space-y-2">
            {explanation.tips.map((tip, i) => (
              <li key={i} className="text-sm flex gap-2" style={{ color: "#A7F3D0" }}>
                <span style={{ color: C.green }}>›</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {explanation.disclaimer && (
        <div
          className="p-3 rounded-xl text-xs"
          style={{ background: "#1E1A2E", border: `1.5px solid ${C.purpleBg}`, color: C.purple }}
        >
          <span className="font-bold">⚠️ {t.disclaimer}:</span> {explanation.disclaimer}
        </div>
      )}
    </motion.div>
  );
}

// ── SectionCard ───────────────────────────────────────────────────────────────
function SectionCard({ title, children }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "#151E2D", border: `1.5px solid ${C.cardBorder}` }}
    >
      <h3 className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: C.textPrimary }}>
        {title}
      </h3>
      {children}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function OutOfPocketCalculator({ policyId }) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language] ?? TRANSLATIONS.en;

  const [medicalCost, setMedicalCost] = useState("");
  const [serviceType, setServiceType] = useState("doctor");
  const [scenario,    setScenario]    = useState("");
  const [loading,     setLoading]     = useState(false);
  const [result,      setResult]      = useState(null);

  const handleCalculate = async () => {
    const cost = parseFloat(medicalCost);
    if (!cost || cost <= 0) { toast.error("Please enter a valid medical cost"); return; }
    setLoading(true);
    try {
      const response = await calculateOOPCost(policyId, {
        medicalCost: cost, serviceType,
        scenarioDescription: scenario, language, currency: "INR",
      });
      setResult(response);
      toast.success("Calculation complete!");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to calculate costs");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-4">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h2 className="text-3xl font-black mb-1" style={{ color: C.textPrimary }}>
          💰 {t.outOfPocket}
        </h2>
        <p className="text-sm" style={{ color: C.textSub }}>{t.subtitle}</p>
      </motion.div>

      {/* Input card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl p-6 space-y-6"
        style={{ background: "#151E2D", border: `1.5px solid ${C.cardBorder}` }}
      >
        {/* Cost input */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.textSub }}>
            {t.enterMedicalCost}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-black" style={{ color: C.amber }}>
              ₹
            </span>
            <input
              type="number"
              value={medicalCost}
              onChange={e => setMedicalCost(e.target.value)}
              placeholder="e.g. 50000"
              min="0"
              step="1000"
              className="w-full pl-9 pr-4 py-3 rounded-xl text-base font-bold transition focus:outline-none"
              style={{ background: C.inputBg, color: C.textPrimary, border: `1.5px solid ${C.inputBorder}` }}
              onFocus={e => (e.target.style.borderColor = C.blue)}
              onBlur={e  => (e.target.style.borderColor = C.inputBorder)}
            />
          </div>
          <p className="text-xs mt-1" style={{ color: C.textMuted }}>Indian Rupees (INR)</p>
        </div>

        {/* Service type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: C.textSub }}>
            {t.selectServiceType}
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {SERVICE_TYPES.map(svc => {
              const active = serviceType === svc.id;
              return (
                <motion.button
                  key={svc.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setServiceType(svc.id)}
                  className="py-3 px-2 rounded-xl text-center transition-all"
                  style={{
                    background: active ? C.blueBg    : C.inputBg,
                    border:     active ? `2px solid ${C.blue}` : `1.5px solid ${C.inputBorder}`,
                  }}
                >
                  <span className="block text-xl mb-1">{svc.emoji}</span>
                  <span className="block text-xs font-bold leading-tight"
                        style={{ color: active ? C.blue : C.textSub }}>
                    {t[svc.key] ?? svc.id}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Scenario */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest mb-2" style={{ color: C.textSub }}>
            {t.scenarioDescription}{" "}
            <span className="normal-case font-normal" style={{ color: C.textMuted }}>{t.scenarioOptional}</span>
          </label>
          <textarea
            value={scenario}
            onChange={e => setScenario(e.target.value)}
            placeholder="e.g. 3-day hospital stay for appendicitis..."
            rows={2}
            className="w-full px-4 py-3 rounded-xl text-sm resize-none transition focus:outline-none"
            style={{ background: C.inputBg, color: C.textPrimary, border: `1.5px solid ${C.inputBorder}` }}
            onFocus={e => (e.target.style.borderColor = C.blue)}
            onBlur={e  => (e.target.style.borderColor = C.inputBorder)}
          />
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleCalculate}
          disabled={loading}
          className="w-full py-3.5 rounded-xl font-black text-white text-sm uppercase tracking-widest transition disabled:opacity-40"
          style={{
            background: loading
              ? C.blueDeep
              : `linear-gradient(135deg, ${C.blue}, ${C.blueDeep})`,
          }}
        >
          {loading ? t.calculating : t.calculate}
        </motion.button>
      </motion.div>

      {/* Results */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="space-y-4"
          >
            <SectionCard title={`📊 ${t.costBreakdown}`}>
              <CostVisualization calculation={result.calculation} t={t} />
            </SectionCard>

            {result.explanation && (
              <SectionCard title={`📝 ${t.explanation}`}>
                <ExplanationCard explanation={result.explanation} t={t} />
              </SectionCard>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
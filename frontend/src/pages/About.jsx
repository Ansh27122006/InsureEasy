import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const RED = "#E94560";
const NAVY = "#1A1A2E";
const DEEP = "#0F3460";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const PAIN_POINTS = [
  {
    stat: "47",
    unit: "pages",
    label: "Average insurance policy length",
    icon: "📄",
  },
  {
    stat: "68%",
    unit: "",
    label: "Claims denied due to unknown exclusions",
    icon: "❌",
  },
  {
    stat: "9/10",
    unit: "",
    label: "People don't fully read their policy",
    icon: "😶",
  },
  {
    stat: "₹0",
    unit: "refund",
    label: "You get back when a claim is rejected",
    icon: "💸",
  },
];

const FEATURES = [
  {
    icon: "🛡️",
    title: "Coverage Visualizer",
    desc: "See every item your policy covers mapped into clean visual cards. No more hunting through pages to find if something is included.",
    tag: "Core Feature",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: "🚫",
    title: "Exclusion Highlighter",
    desc: "Every exclusion clearly flagged in red. Know exactly what your policy won't cover before you file a claim and face a rejection.",
    tag: "Core Feature",
    color: RED,
    bg: "#FFF0F3",
  },
  {
    icon: "⚡",
    title: "Scenario Simulator",
    desc: "Ask 'What if I get hospitalized?' and get a real YES / NO / PARTIAL answer drawn directly from your actual policy — instantly.",
    tag: "Wow Feature",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: "💬",
    title: "Policy Chat",
    desc: "A multi-turn AI chat that knows your policy inside out. Ask anything about a clause, deductible, or process in plain English.",
    tag: "Wow Feature",
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    icon: "📊",
    title: "Risk Score",
    desc: "Every policy scored 0–100. The higher the number, the riskier your coverage. Know at a glance whether your policy is solid or full of gaps.",
    tag: "Insight",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: "📖",
    title: "Key Terms Glossary",
    desc: "Every confusing insurance term — deductible, premium, endorsement, liability — explained in one sentence that actually makes sense.",
    tag: "Insight",
    color: "#0D7377",
    bg: "#ECFDFB",
  },
];

const COMPARISON = [
  "Plain-English Summary",
  "Visual Coverage Map",
  "Exclusion Highlighter",
  "What-If Scenario Simulator",
  "AI Policy Chat",
  "Risk Score",
  "Results in under 60 seconds",
  "No account required",
];

export default function About() {
  return (
    <main
      className="min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');
        .ab-heading { font-family: 'Fraunces', serif; }
      `}</style>

      {/* ══════════════════════ HERO ══════════════════════════ */}
      <section
        className="relative pt-20 pb-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${DEEP} 60%, #16213E 100%)`,
        }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(233,69,96,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(233,69,96,0.04) 1px,transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(233,69,96,0.15)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "rgba(15,52,96,0.5)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(233,69,96,0.15)",
              border: "1px solid rgba(233,69,96,0.35)",
              color: RED,
            }}>
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: RED }}
            />
            About InsureEasy
          </motion.div>

          <motion.h1
            className="ab-heading text-5xl md:text-6xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            Insurance was designed
            <br />
            to be{" "}
            <span className="relative inline-block">
              confusing.
              <motion.span
                className="absolute bottom-1 left-0 w-full h-1 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${RED}, transparent)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              />
            </span>
            <br />
            <span style={{ color: RED }}>We fix that.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            InsureEasy uses AI to translate your insurance policy from dense
            legal jargon into plain English — with visuals, insights, and
            answers in under 60 seconds.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            className="w-full">
            <path
              d="M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ══════════════════ THE PROBLEM ═══════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <span
              className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>
              The Problem
            </span>
            <h2 className="ab-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Policies feel overwhelming,
              <br />
              legalistic, and confusing.
            </h2>
            <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-base leading-relaxed">
              Insurance companies write policies for lawyers, not for customers.
              The result? Millions of people pay for coverage they don't
              understand — and lose money when they need it most.
            </p>
          </FadeUp>

          {/* Pain stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {PAIN_POINTS.map((p, i) => (
              <FadeUp
                key={p.label}
                delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-white rounded-2xl p-6 text-center flex flex-col items-center gap-3"
                  style={{
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}>
                  <div className="text-3xl">{p.icon}</div>
                  <div>
                    <div
                      className="ab-heading text-3xl font-black"
                      style={{ color: RED }}>
                      {p.stat}
                      <span className="text-base ml-0.5 text-gray-400">
                        {p.unit}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-snug font-medium">
                      {p.label}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Before / After visual */}
          <FadeUp delay={0.1}>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#FEF2F2", border: "2px solid #FECACA" }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">😰</span>
                  <h3 className="font-extrabold text-red-700">
                    What You Get Today
                  </h3>
                </div>
                {[
                  "Notwithstanding the provisions of Section 4(b)(ii)...",
                  "Subject to the deductible stipulated hereinabove...",
                  "Excluding pre-existing conditions per Clause 12(c)...",
                  "See endorsement form HO-3, subsection III, para 2...",
                ].map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-red-600 bg-white rounded-lg px-3 py-2 font-mono"
                    style={{ border: "1px solid #FECACA" }}>
                    <span className="mt-0.5 shrink-0">❌</span>
                    <span className="opacity-80 italic">{line}</span>
                  </div>
                ))}
                <p className="text-xs text-red-500 font-semibold text-center">
                  47 more pages of this...
                </p>
              </div>

              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "#ECFDF5", border: "2px solid #6EE7B7" }}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <h3 className="font-extrabold text-green-700">
                    What InsureEasy Gives You
                  </h3>
                </div>
                {[
                  {
                    icon: "🔥",
                    text: "Fire & smoke damage — fully covered up to ₹5,00,000",
                    color: "text-green-700",
                  },
                  {
                    icon: "🏥",
                    text: "Hospitalization — covered after 24hr admission",
                    color: "text-green-700",
                  },
                  {
                    icon: "🚫",
                    text: "Dental treatment — NOT covered under this policy",
                    color: "text-red-600",
                  },
                  {
                    icon: "⚡",
                    text: "Pre-existing conditions — partial cover after 2 years",
                    color: "text-yellow-700",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 text-sm ${item.color} bg-white rounded-lg px-3 py-2 font-semibold`}
                    style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
                <div className="flex items-center justify-center gap-2 text-xs text-green-600 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Analyzed in 23 seconds
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════ THE SOLUTION ══════════════════════ */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg,#F8FAFC 0%,#F1F5F9 100%)",
        }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <span
              className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>
              The Solution
            </span>
            <h2 className="ab-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              When policies become{" "}
              <span style={{ color: RED }}>Interactive Visual Summaries</span>,
              <br />
              everything changes.
            </h2>
            <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-base leading-relaxed">
              Research shows that when customers truly understand their
              coverage, they make smarter decisions. InsureEasy makes that
              possible — for anyone, instantly, for free.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🗣️",
                title: "Plain-Language First",
                desc: "Every clause rewritten in simple English. If a 12-year-old can understand it, we've done our job.",
                color: "#3B82F6",
              },
              {
                icon: "👁️",
                title: "Visual Before Text",
                desc: "Coverage cards, risk meters, exclusion badges. See your policy before reading it. Visuals are 60,000x faster to process.",
                color: RED,
              },
              {
                icon: "🤝",
                title: "Interactive, Not Static",
                desc: "Ask questions. Simulate scenarios. Chat with your policy. Understanding insurance should be a conversation, not a document.",
                color: "#10B981",
              },
            ].map((pillar, i) => (
              <FadeUp
                key={pillar.title}
                delay={i * 0.12}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 24px 48px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="bg-white rounded-2xl p-7 h-full flex flex-col gap-4"
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{
                      background: `${pillar.color}12`,
                      border: `1.5px solid ${pillar.color}25`,
                    }}>
                    {pillar.icon}
                  </div>
                  <h3 className="font-extrabold text-gray-900 text-lg">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {pillar.desc}
                  </p>
                  <div
                    className="h-1 w-12 rounded-full"
                    style={{ background: pillar.color }}
                  />
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FEATURES ══════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <span
              className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>
              Features
            </span>
            <h2 className="ab-heading text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Six tools. One dashboard.
              <br />
              Complete clarity.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <FadeUp
                key={f.title}
                delay={i * 0.08}>
                <motion.div
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 48px rgba(0,0,0,0.09)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="relative rounded-2xl p-6 h-full flex flex-col gap-4"
                  style={{
                    background: f.bg,
                    border: `1.5px solid ${f.color}20`,
                  }}>
                  <span
                    className="self-start text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: `${f.color}18`, color: f.color }}>
                    {f.tag}
                  </span>
                  <div className="text-4xl">{f.icon}</div>
                  <h3 className="font-extrabold text-gray-900 text-lg leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {f.desc}
                  </p>
                  <div
                    className="h-1 w-10 rounded-full"
                    style={{ background: `${f.color}60` }}
                  />
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-[60px] rounded-tr-2xl opacity-[0.06]"
                    style={{ background: f.color }}
                  />
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ COMPARISON ════════════════════════════ */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg,#F8FAFC 0%,#F1F5F9 100%)",
        }}>
        <div className="max-w-3xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <span
              className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>
              Why InsureEasy
            </span>
            <h2 className="ab-heading text-4xl font-black text-gray-900 mt-3">
              Nothing else does all of this.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div
                className="grid grid-cols-3 px-6 py-4"
                style={{
                  background: `linear-gradient(135deg, ${NAVY}, ${DEEP})`,
                }}>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Feature
                </div>
                <div className="text-center text-xs font-extrabold text-white uppercase tracking-widest">
                  🛡️ InsureEasy
                </div>
                <div className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Traditional
                </div>
              </div>
              {COMPARISON.map((label, i) => (
                <div
                  key={label}
                  className={`grid grid-cols-3 px-6 py-4 border-b border-gray-50 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}>
                  <div className="text-sm font-semibold text-gray-700 flex items-center">
                    {label}
                  </div>
                  <div className="flex justify-center">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#DCFCE7", color: "#15803D" }}>
                      ✓
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#FEE2E2", color: "#B91C1C" }}>
                      ✗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════ CTA ═══════════════════════════ */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${DEEP} 100%)`,
        }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="text-5xl mb-6">🛡️</div>
            <h2 className="ab-heading text-4xl font-black text-white mb-4">
              Stop guessing. Start knowing.
            </h2>
            <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
              Upload any insurance policy and get complete clarity in under 60
              seconds. No account, no credit card, no confusion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/upload">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 16px 40px rgba(233,69,96,0.5)`,
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-base"
                  style={{
                    background: `linear-gradient(135deg, ${RED}, #c0304f)`,
                  }}>
                  Upload Your Policy — Free
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </Link>
              <Link to="/how-it-works">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    background: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-white text-base border border-white/20 transition-colors duration-200">
                  See How It Works
                </motion.button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

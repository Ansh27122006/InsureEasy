import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

/* ─── Brand tokens ──────────────────────────────────────────── */
const RED = "#E94560";
const NAVY = "#1A1A2E";
const DEEP = "#0F3460";

/* ─── Fade up helper ────────────────────────────────────────── */
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

/* ─── Steps data ────────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    emoji: "📄",
    title: "Upload Your Policy",
    subtitle: "PDF or plain text — your choice",
    desc: "Drag and drop your insurance policy PDF, or simply paste the text. We accept health, auto, home, life — any policy type. Your document is encrypted end-to-end.",
    detail: [
      "Supports PDF files up to 50MB",
      "Or paste raw policy text directly",
      "256-bit encryption in transit",
      "Document deleted after analysis",
    ],
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    num: "02",
    emoji: "🤖",
    title: "AI Reads Every Clause",
    subtitle: "Powered by Google Gemini",
    desc: "Our AI reads your entire policy word-by-word — extracting coverage details, spotting exclusions, defining confusing terms, and calculating a risk score in seconds.",
    detail: [
      "Reads up to 8,000 words of policy text",
      "Identifies covered & excluded items",
      "Flags unusual or risky clauses",
      "Calculates a 0–100 risk score",
    ],
    color: RED,
    bg: "#FFF0F3",
  },
  {
    num: "03",
    emoji: "✨",
    title: "Get Clear Insights",
    subtitle: "Your policy, finally decoded",
    desc: "Receive a plain-English summary, visual coverage map, flagged exclusions, and a glossary of key terms — all in one clean dashboard you can explore interactively.",
    detail: [
      "Plain-English summary (2–3 sentences)",
      "Visual coverage & exclusion cards",
      "Clickable insurance glossary",
      "Shareable results dashboard",
    ],
    color: "#10B981",
    bg: "#ECFDF5",
  },
  {
    num: "04",
    emoji: "💬",
    title: "Ask Anything",
    subtitle: "Your personal policy advisor",
    desc: "Use the Scenario Simulator to ask 'What if I get hospitalized?' or chat directly with AI about any clause. Get real answers drawn from your actual policy.",
    detail: [
      "Scenario simulator with preset questions",
      "Multi-turn policy chat",
      "Relevant clause references",
      "Plain recommendation for each scenario",
    ],
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
];

/* ─── FAQ data ──────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Is my policy document stored permanently?",
    a: "No. Your document is processed in memory and deleted immediately after analysis. We never store your personal insurance data.",
  },
  {
    q: "What types of insurance policies work?",
    a: "Any type — health, auto, home, life, travel, or business insurance. If it's written in English, our AI can analyze it.",
  },
  {
    q: "How accurate is the AI analysis?",
    a: "Very accurate for extraction and summarization. However, always verify critical coverage decisions with your insurance provider. This is a clarity tool, not legal advice.",
  },
  {
    q: "How long does the analysis take?",
    a: "Typically 15–30 seconds depending on policy length. The AI reads and processes thousands of words in that time.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account needed. Just upload your policy and get instant results. No sign-up, no credit card, no friction.",
  },
];

function FAQItem({ q, a, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b border-gray-100 py-6 last:border-0">
      <h4 className="font-bold text-gray-900 mb-2 text-base">{q}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
    </motion.div>
  );
}

/* ─── Main Page ─────────────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <main
      className="min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap'); .hw-heading{font-family:'Fraunces',serif;}`}</style>

      {/* ── HERO ── */}
      <section
        className="relative pt-20 pb-24 overflow-hidden"
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
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none"
          style={{ background: "rgba(233,69,96,0.2)" }}
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
            Simple 4-Step Process
          </motion.div>

          <motion.h1
            className="hw-heading text-5xl md:text-6xl font-black text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            From Confusing PDF
            <br />
            <span style={{ color: RED }}>to Crystal Clarity</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            No law degree. No jargon. No guesswork. Just upload your policy and
            understand exactly what you're paying for.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}>
            {[
              ["60s", "Average analysis time"],
              ["10K+", "Policies analyzed"],
              ["98%", "Accuracy rate"],
              ["0", "Data stored"],
            ].map(([val, label]) => (
              <div
                key={label}
                className="text-center">
                <div
                  className="text-3xl font-black text-white"
                  style={{ fontFamily: "'Fraunces', serif" }}>
                  {val}
                </div>
                <div className="text-xs text-gray-400 mt-1 font-medium">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
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

      {/* ── STEPS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp className="text-center mb-20">
            <span
              className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>
              The Process
            </span>
            <h2 className="hw-heading text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Four steps. One clear picture.
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-16">
            {STEPS.map((step, i) => (
              <FadeUp
                key={step.num}
                delay={0.1}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-10 items-center`}>
                  {/* Visual side */}
                  <div className="flex-1 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="relative w-72 h-64 rounded-3xl flex flex-col items-center justify-center gap-4"
                      style={{
                        background: step.bg,
                        border: `2px solid ${step.color}22`,
                        boxShadow: `0 20px 60px ${step.color}18`,
                      }}>
                      {/* Step number */}
                      <div
                        className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-sm"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                          boxShadow: `0 8px 24px ${step.color}44`,
                        }}>
                        {step.num}
                      </div>

                      {/* Emoji */}
                      <div className="text-6xl">{step.emoji}</div>

                      {/* Mini detail pills */}
                      <div className="flex flex-col gap-1.5 w-full px-6">
                        {step.detail.slice(0, 2).map((d, di) => (
                          <div
                            key={di}
                            className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white"
                            style={{
                              color: step.color,
                              border: `1px solid ${step.color}30`,
                            }}>
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: step.color }}
                            />
                            {d}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Text side */}
                  <div className="flex-1">
                    <span
                      className="text-xs font-extrabold tracking-widest uppercase"
                      style={{ color: step.color }}>
                      {step.subtitle}
                    </span>
                    <h3 className="hw-heading text-3xl font-black text-gray-900 mt-2 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.detail.map((d, di) => (
                        <li
                          key={di}
                          className="flex items-center gap-3 text-sm text-gray-600">
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                            style={{
                              background: step.bg,
                              color: step.color,
                              border: `1.5px solid ${step.color}40`,
                            }}>
                            <svg
                              viewBox="0 0 12 12"
                              className="w-3 h-3"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2.5}
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <path d="M2 6l3 3 5-5" />
                            </svg>
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center mt-10">
                    <div className="flex flex-col items-center gap-1">
                      {[0, 1, 2].map((d) => (
                        <div
                          key={d}
                          className="w-1 h-1 rounded-full"
                          style={{ background: RED, opacity: 1 - d * 0.25 }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
              FAQ
            </span>
            <h2 className="hw-heading text-4xl font-black text-gray-900 mt-3">
              Questions we get a lot.
            </h2>
          </FadeUp>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                {...faq}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${DEEP} 100%)`,
        }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeUp>
            <div className="text-5xl mb-6">🛡️</div>
            <h2 className="hw-heading text-4xl font-black text-white mb-4">
              Ready to try it yourself?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              No account. No credit card. Just upload and understand.
            </p>
            <Link to="/upload">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 16px 40px rgba(233,69,96,0.5)`,
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-white text-lg"
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
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

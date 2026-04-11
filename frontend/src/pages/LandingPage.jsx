import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

/* ─── Brand tokens ──────────────────────────────────────────── */
const RED = "#E94560";
const NAVY = "#1A1A2E";
const DEEP = "#0F3460";

/* ─── Lucide-style inline SVG icons ────────────────────────── */
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const AlertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="12" y2="14" />
  </svg>
);
const UploadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

/* ─── Reusable fade-up on scroll ────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating stats card ───────────────────────────────────── */
function FloatingCard() {
  const bars = [72, 88, 55, 94, 67, 81];
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-72 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: `0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(233,69,96,0.18)`,
      }}
    >
      {/* Card header */}
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E94560]">Live Stats</p>
          <p className="text-3xl font-black text-white mt-0.5">10,000+</p>
          <p className="text-sm text-gray-400 font-medium">Policies Analyzed</p>
        </div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(233,69,96,0.15)", border: "1px solid rgba(233,69,96,0.3)" }}>
          <span className="text-2xl">🛡️</span>
        </div>
      </div>
      {/* Mini bar chart */}
      <div className="px-5 pb-5">
        <div className="flex items-end gap-1.5 h-12 mt-2">
          {bars.map((h, i) => (
            <motion.div
  key={i}
  className="flex-1 rounded-sm"
  style={{
    originY: 1,
    height: `${h}%`,
    backgroundColor: i === 3 ? RED : "rgba(255,255,255,0.2)"
  }}
  initial={{ scaleY: 0 }}
  animate={{ scaleY: 1 }}
  transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: "backOut" }}
/>
          ))}
        </div>
        <div className="flex justify-between mt-2.5">
          <span className="text-xs text-gray-500">Jan</span>
          <span className="text-xs text-gray-500">Jun</span>
        </div>
      </div>
      {/* Glow orb behind card */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(233,69,96,0.3)" }} />
    </motion.div>
  );
}

/* ─── Feature card ──────────────────────────────────────────── */
const FEATURES = [
  {
    Icon: ShieldIcon,
    title: "Coverage Visualizer",
    desc: "See exactly what you're covered for at a glance — mapped visually so nothing gets buried in legalese.",
    tag: "Protection",
    color: "#3B82F6",
  },
  {
    Icon: AlertIcon,
    title: "Exclusion Highlighter",
    desc: "Instantly surface every clause that limits or voids your coverage, before a claim denial surprises you.",
    tag: "Risk",
    color: "#F59E0B",
  },
  {
    Icon: ChatIcon,
    title: "Scenario Simulator",
    desc: "Ask \"What if I have a fender bender at work?\" and get a real answer drawn from your actual policy.",
    tag: "Q&A",
    color: RED,
  },
];

function FeatureCard({ Icon, title, desc, tag, color, index }) {
  return (
    <FadeUp delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className="relative bg-white rounded-2xl p-7 h-full flex flex-col gap-4"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid rgba(0,0,0,0.05)" }}
      >
        {/* Tag pill */}
        <span className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: `${color}18`, color }}>
          {tag}
        </span>
        {/* Icon circle */}
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{ background: `${color}14`, color }}>
          <Icon />
        </div>
        <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{desc}</p>
        {/* Hover arrow */}
        <motion.span
          className="text-sm font-semibold flex items-center gap-1"
          style={{ color }}
          whileHover={{ x: 4 }}
        >
          Learn more
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}
            className="w-3.5 h-3.5">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[80px] rounded-tr-2xl opacity-[0.04]"
          style={{ background: color }} />
      </motion.div>
    </FadeUp>
  );
}

/* ─── How It Works step ─────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Upload Your PDF",
    desc: "Drag & drop or browse to upload any insurance policy document — health, auto, home, or life.",
    emoji: "📄",
  },
  {
    num: "02",
    title: "AI Analyzes It",
    desc: "Our engine reads every clause, maps your coverage limits, and flags hidden exclusions in seconds.",
    emoji: "🤖",
  },
  {
    num: "03",
    title: "Get Clear Insights",
    desc: "Receive plain-English summaries, visual coverage maps, and your own AI policy advisor.",
    emoji: "✨",
  },
];

function StepItem({ num, title, desc, emoji, index, total }) {
  return (
    <FadeUp delay={index * 0.15} className="flex-1">
      <div className="relative flex flex-col items-center text-center">
        {/* Connector line */}
        {index < total - 1 && (
          <div className="hidden md:block absolute top-9 left-1/2 w-full h-px"
            style={{
              background: "linear-gradient(90deg, rgba(233,69,96,0.5) 0%, rgba(233,69,96,0.1) 100%)",
              zIndex: 0,
            }} />
        )}
        {/* Number circle */}
        <div className="relative z-10 w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 text-2xl font-black text-white"
          style={{
            background: `linear-gradient(135deg, ${RED}, #b02040)`,
            boxShadow: `0 8px 28px rgba(233,69,96,0.4)`,
          }}>
          {emoji}
        </div>
        <span className="text-xs font-extrabold tracking-[0.2em] uppercase mb-2"
          style={{ color: RED }}>{num}</span>
        <h4 className="text-base font-extrabold text-gray-900 mb-2">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{desc}</p>
      </div>
    </FadeUp>
  );
}

/* ─── Main LandingPage ──────────────────────────────────────── */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white font-sans overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', 'Nunito', sans-serif" }}>

      {/* Google Font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,800;0,9..40,900;1,9..40,400&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap');
        .hero-heading { font-family: 'Fraunces', serif; }
      `}</style>

      {/* ══════════════════════════════ HERO ══════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${DEEP} 60%, #16213E 100%)` }}
      >
        {/* Background grid mesh */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(233,69,96,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(233,69,96,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }} />

        {/* Ambient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
          style={{ background: "rgba(233,69,96,0.18)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "rgba(15,52,96,0.6)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <div className="flex flex-col gap-7">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="self-start flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{
                  background: "rgba(233,69,96,0.15)",
                  border: "1px solid rgba(233,69,96,0.35)",
                  color: RED,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: RED }} />
                AI-Powered Policy Analysis
              </motion.div>

              <motion.h1
                className="hero-heading text-5xl md:text-6xl font-black text-white leading-[1.05]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Understand Your{" "}
                <span className="relative inline-block">
                  Insurance Policy
                  <motion.span
                    className="absolute bottom-1 left-0 w-full h-1 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${RED}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  />
                </span>{" "}
                in 60 Seconds
              </motion.h1>

              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Upload your policy PDF. Get plain-English summaries, coverage
                visualizations, and instant answers to your questions.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: `0 12px 32px rgba(233,69,96,0.45)` }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm"
                  style={{ background: `linear-gradient(135deg, ${RED}, #c0304f)` }}
                >
                  <UploadIcon />
                  Upload Your Policy
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white text-sm border border-white/25 backdrop-blur-sm transition-colors duration-200"
                >
                  <PlayIcon />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Social proof row */}
              <motion.div
                className="flex items-center gap-3 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <div className="flex -space-x-2">
                  {["#E94560", "#3B82F6", "#F59E0B", "#10B981"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1A1A2E] flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: c }}>
                      {["J", "M", "A", "K"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">2,400+</span> people protected this month
                </p>
              </motion.div>
            </div>

            {/* Right: floating card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <FloatingCard />
            </motion.div>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════ FEATURES ═════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>Features</span>
            <h2 className="hero-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Your policy, finally{" "}
              <span style={{ color: RED }}>decoded.</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Three powerful tools work together to give you complete clarity over your coverage — no law degree required.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ HOW IT WORKS ════════════════════════ */}
      <section className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)" }}>
        {/* Decorative circle */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, rgba(233,69,96,0.06) 0%, transparent 70%)` }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-extrabold tracking-[0.25em] uppercase"
              style={{ color: RED }}>How It Works</span>
            <h2 className="hero-heading text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
              Three steps to{" "}
              <span style={{ color: RED }}>clarity.</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto text-base leading-relaxed">
              From PDF upload to actionable insights in under a minute.
            </p>
          </FadeUp>

          {/* Steps */}
          <div className="relative flex flex-col md:flex-row gap-12 md:gap-6">
            {STEPS.map((step, i) => (
              <StepItem key={step.num} {...step} index={i} total={STEPS.length} />
            ))}
          </div>

          {/* CTA Banner */}
          <FadeUp delay={0.2} className="mt-20">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-3xl overflow-hidden px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
              style={{ background: `linear-gradient(120deg, ${NAVY} 0%, ${DEEP} 100%)` }}
            >
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 80% 50%, rgba(233,69,96,0.25) 0%, transparent 55%)`,
                }} />
              <div className="relative z-10">
                <h3 className="hero-heading text-3xl font-black text-white">
                  Ready to understand your coverage?
                </h3>
                <p className="text-gray-400 mt-2 text-sm max-w-md leading-relaxed">
                  Join thousands who've already stopped guessing and started knowing.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: `0 12px 32px rgba(233,69,96,0.5)` }}
                whileTap={{ scale: 0.97 }}
                className="relative z-10 shrink-0 flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-sm whitespace-nowrap"
                style={{ background: `linear-gradient(135deg, ${RED}, #c0304f)` }}
              >
                <UploadIcon />
                Upload Your Policy — Free
              </motion.button>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

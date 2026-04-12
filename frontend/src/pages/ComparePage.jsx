import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PolicyComparison from "../components/PolicyComparison";

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

export default function ComparePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#F1F5F9", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;800&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap'); .cmp-heading{font-family:'Fraunces',serif;}`}</style>

      {/* Hero */}
      <section
        className="relative pt-16 pb-20 overflow-hidden"
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
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none"
          style={{ background: "rgba(233,69,96,0.18)" }}
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
            Side-by-Side Analysis
          </motion.div>

          <motion.h1
            className="cmp-heading text-5xl md:text-6xl font-black text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            Compare Two Policies.
            <br />
            <span style={{ color: RED }}>Pick the Better One.</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}>
            Upload two insurance policies and get an instant side-by-side
            breakdown — risk scores, coverage gaps, and a clear winner
            recommendation.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            className="w-full">
            <path
              d="M0 64L1440 64L1440 32C1200 64 960 0 720 32C480 64 240 0 0 32L0 64Z"
              fill="#F1F5F9"
            />
          </svg>
        </div>
      </section>

      {/* Main comparison section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <FadeUp>
            <PolicyComparison />
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

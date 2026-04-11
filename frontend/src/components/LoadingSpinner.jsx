/* ─────────────────────────────────────────────────────────────
   LoadingSpinner.jsx
   Props:
     size     {'sm'|'md'|'lg'|'xl'}  default 'md'
     message  {string}               optional text below spinner
     fullPage {boolean}              centers in full viewport
     variant  {'spinner'|'pulse'|'dots'|'skeleton'} default 'spinner'
   ───────────────────────────────────────────────────────────── */

const NAVY = "#1A1A2E";
const RED  = "#E94560";

/* ── Size map ───────────────────────────────────────────────── */
const SIZE = {
  sm:  { outer: "w-6  h-6",  stroke: 3,   text: "text-xs" },
  md:  { outer: "w-10 h-10", stroke: 3.5, text: "text-sm" },
  lg:  { outer: "w-16 h-16", stroke: 4,   text: "text-base" },
  xl:  { outer: "w-24 h-24", stroke: 4.5, text: "text-lg" },
};

/* ── Spinner ring ───────────────────────────────────────────── */
function SpinnerRing({ size = "md" }) {
  const s = SIZE[size] ?? SIZE.md;
  return (
    <div className={`relative ${s.outer} shrink-0`}>
      <svg className={`${s.outer} animate-spin`} viewBox="0 0 44 44" fill="none">
        {/* Track */}
        <circle cx="22" cy="22" r="18" stroke="rgba(233,69,96,0.15)"
          strokeWidth={s.stroke} />
        {/* Arc */}
        <circle cx="22" cy="22" r="18" stroke={RED}
          strokeWidth={s.stroke} strokeLinecap="round"
          strokeDasharray="60 54" />
      </svg>
      {/* Inner pulsing dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: RED }} />
      </div>
    </div>
  );
}

/* ── Dot loader ─────────────────────────────────────────────── */
function DotsLoader() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full animate-bounce"
          style={{
            background: RED,
            animationDelay: `${i * 0.15}s`,
            animationDuration: "0.7s",
          }}
        />
      ))}
    </div>
  );
}

/* ── Pulse blocks (skeleton) ────────────────────────────────── */
function SkeletonLoader() {
  return (
    <div className="w-full max-w-md flex flex-col gap-3 animate-pulse">
      {/* Fake header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gray-200" />
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-3.5 bg-gray-200 rounded-full w-3/5" />
          <div className="h-2.5 bg-gray-100 rounded-full w-2/5" />
        </div>
      </div>
      {/* Fake content lines */}
      {[1, 0.85, 0.95, 0.6].map((w, i) => (
        <div key={i} className="h-3 bg-gray-200 rounded-full"
          style={{ width: `${w * 100}%`, opacity: 1 - i * 0.15 }} />
      ))}
      {/* Fake card row */}
      <div className="flex gap-3 mt-1">
        {[1, 1, 1].map((_, i) => (
          <div key={i} className="flex-1 h-20 bg-gray-100 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

/* ── Analyzing overlay (used during AI processing) ──────────── */
function AnalyzingOverlay({ message }) {
  const steps = [
    "Reading policy document…",
    "Identifying coverage clauses…",
    "Flagging exclusions…",
    "Calculating risk score…",
    "Generating plain-English summary…",
  ];

  return (
    <div className="flex flex-col items-center gap-6 text-center px-6">
      {/* Animated shield */}
      <div className="relative">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
          style={{
            background: "linear-gradient(135deg, rgba(233,69,96,0.12), rgba(233,69,96,0.04))",
            border: "2px solid rgba(233,69,96,0.2)",
          }}>
          🛡️
        </div>
        {/* Orbiting dot */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "2s" }}>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full"
            style={{ background: RED }} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-gray-800 mb-1">
          {message || "Analyzing Your Policy"}
        </h3>
        <p className="text-sm text-gray-400">This usually takes 15–30 seconds</p>
      </div>

      {/* Step list */}
      <div className="flex flex-col gap-2 w-full max-w-xs text-left">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
              style={{
                background: "rgba(233,69,96,0.1)",
                border: "1.5px solid rgba(233,69,96,0.3)",
              }}>
              <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: RED, animationDelay: `${i * 0.3}s` }} />
            </div>
            <span className="text-xs text-gray-500" style={{ animationDelay: `${i * 0.2}s` }}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <DotsLoader />
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────── */
export function LoadingSpinner({
  size     = "md",
  message  = "",
  fullPage = false,
  variant  = "spinner",
}) {
  const inner = (
    <div className="flex flex-col items-center justify-center gap-3">
      {variant === "spinner"  && <SpinnerRing size={size} />}
      {variant === "dots"     && <DotsLoader />}
      {variant === "skeleton" && <SkeletonLoader />}
      {variant === "analyzing" && <AnalyzingOverlay message={message} />}

      {message && variant === "spinner" && (
        <p className={`text-gray-500 font-medium animate-pulse ${SIZE[size]?.text ?? "text-sm"}`}>
          {message}
        </p>
      )}
      {message && variant === "dots" && (
        <p className="text-sm text-gray-500 font-medium">{message}</p>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)" }}>
        {inner}
      </div>
    );
  }

  return inner;
}

export default LoadingSpinner;
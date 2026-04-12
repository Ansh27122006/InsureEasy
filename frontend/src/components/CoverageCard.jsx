/* ─────────────────────────────────────────────────────────────
   CoverageCard.jsx
   Props:
     title       {string}              — Card heading
     description {string}              — Body copy
     icon        {ReactNode|string}    — Emoji string or JSX icon
     type        {'covered'|'excluded'|'partial'}
     covered     {string}              — What's covered (for partial type)
     notCovered  {string}              — What's not covered (for partial type)
   ───────────────────────────────────────────────────────────── */

/* ── Type config map ──────────────────────────────────────────
   Centralises every visual decision per type so the render
   function stays clean and adding new types is a one-liner.     */
const TYPE_CONFIG = {
  covered: {
    bg: "#ECFDF3",
    border: "#16A34A", // green-600
    badgeBg: "#DCFCE7",
    badgeText: "#15803D", // green-700
    label: "Covered",
    pillRing: "rgba(22,163,74,0.25)",
    statusIcon: (
      /* Animated checkmark */
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="#16A34A"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true">
        <path d="M4 10.5l4.5 4.5 7.5-8" />
      </svg>
    ),
    glow: "rgba(22,163,74,0.08)",
  },
  excluded: {
    bg: "#FEF3F2",
    border: "#DC2626", // red-600
    badgeBg: "#FEE2E2",
    badgeText: "#B91C1C", // red-700
    label: "Excluded",
    pillRing: "rgba(220,38,38,0.25)",
    statusIcon: (
      /* X mark */
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="#DC2626"
        strokeWidth={2.4}
        strokeLinecap="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true">
        <path d="M5 5l10 10M15 5L5 15" />
      </svg>
    ),
    glow: "rgba(220,38,38,0.07)",
  },
  partial: {
    bg: "#FFFAEB",
    border: "#D97706", // amber-600
    badgeBg: "#FEF3C7",
    badgeText: "#B45309", // amber-700
    label: "Partial",
    pillRing: "rgba(217,119,6,0.25)",
    statusIcon: (
      /* Warning triangle */
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="#D97706"
        strokeWidth={2.1}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 shrink-0"
        aria-hidden="true">
        <path d="M9.26 3.28L2.08 15.5A1 1 0 003 17h14a1 1 0 00.87-1.5L10.74 3.28a1 1 0 00-1.48 0z" />
        <line
          x1="10"
          y1="9"
          x2="10"
          y2="12"
        />
        <circle
          cx="10"
          cy="14.5"
          r="0.5"
          fill="#D97706"
        />
      </svg>
    ),
    glow: "rgba(217,119,6,0.07)",
  },
};

/* ── CoverageCard ─────────────────────────────────────────────  */
export function CoverageCard({
  title,
  description,
  icon,
  type = "covered",
  covered,
  notCovered,
}) {
  const cfg = TYPE_CONFIG[type] ?? TYPE_CONFIG.covered;

  return (
    <article
      className="group relative flex flex-col gap-3 rounded-2xl p-5 cursor-default
                 transition-all duration-200 ease-out
                 hover:scale-[1.02] hover:-translate-y-0.5"
      style={{
        background: cfg.bg,
        borderLeft: `4px solid ${cfg.border}`,
        boxShadow: `0 2px 12px ${cfg.glow}, 0 1px 3px rgba(0,0,0,0.05)`,
      }}
      /* Stronger shadow on hover via inline style swap is handled by
         Tailwind's group-hover + the CSS transition above.          */
    >
      {/* Top row: prop icon + status badge */}
      <div className="flex items-start justify-between gap-3">
        {/* Prop icon bubble */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0
                     transition-transform duration-200 group-hover:scale-110"
          style={{
            background: "rgba(255,255,255,0.75)",
            boxShadow: `0 0 0 2px ${cfg.pillRing}`,
          }}
          aria-hidden="true">
          {icon}
        </div>

        {/* Type badge pill */}
        <span
          className="self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full
                     text-xs font-bold tracking-wide shrink-0"
          style={{ background: cfg.badgeBg, color: cfg.badgeText }}>
          {cfg.statusIcon}
          {cfg.label}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-extrabold text-gray-900 text-[0.95rem] leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {description}
      </p>

      {/* Partial coverage details */}
      {type === "partial" && (covered || notCovered) && (
        <div className="space-y-1">
          {covered && (
            <p className="text-green-600 text-xs flex items-center gap-1">
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3 shrink-0"
                fill="currentColor">
                <path
                  d="M2 6.5l3 3 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {covered}
            </p>
          )}
          {notCovered && (
            <p className="text-red-600 text-xs flex items-center gap-1">
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round">
                <path d="M3 3l6 6M9 3l-6 6" />
              </svg>
              {notCovered}
            </p>
          )}
        </div>
      )}

      {/* Subtle bottom accent stripe that appears on hover */}
      <div
        className="absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0
                   group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${cfg.border}40, transparent)`,
        }}
      />
    </article>
  );
}

export default CoverageCard;

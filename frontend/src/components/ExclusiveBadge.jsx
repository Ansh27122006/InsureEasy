/* ─────────────────────────────────────────────────────────────
   ExclusionBadge.jsx
   Props:
     label     {string}                       — Badge text
     severity  {'critical'|'warning'|'info'}  — default 'warning'
     icon      {string}                       — optional emoji override
     size      {'sm'|'md'|'lg'}               — default 'md'
     pulse     {boolean}                      — animated dot
   ───────────────────────────────────────────────────────────── */

const SEVERITY = {
  critical: {
    bg:     "#FEE2E2",
    text:   "#B91C1C",
    border: "#FECACA",
    dot:    "#DC2626",
    icon:   "⛔",
    label:  "Critical Exclusion",
  },
  warning: {
    bg:     "#FEF3C7",
    text:   "#B45309",
    border: "#FDE68A",
    dot:    "#D97706",
    icon:   "⚠️",
    label:  "Exclusion",
  },
  info: {
    bg:     "#DBEAFE",
    text:   "#1D4ED8",
    border: "#BFDBFE",
    dot:    "#3B82F6",
    icon:   "ℹ️",
    label:  "Limited Coverage",
  },
};

const SIZE_CLASSES = {
  sm: "text-xs px-2 py-0.5 gap-1",
  md: "text-xs px-2.5 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2",
};

/* ── Inline badge (pill shape) ──────────────────────────────── */
export function ExclusionBadge({
  label,
  severity = "warning",
  icon,
  size = "md",
  pulse = false,
}) {
  const cfg = SEVERITY[severity] ?? SEVERITY.warning;
  const displayIcon = icon ?? cfg.icon;

  return (
    <span
      className={`inline-flex items-center rounded-full font-bold leading-none ${SIZE_CLASSES[size]}`}
      style={{
        background: cfg.bg,
        color: cfg.text,
        border: `1px solid ${cfg.border}`,
      }}
    >
      {pulse ? (
        <span className="relative flex shrink-0"
          style={{ width: size === "sm" ? 6 : 8, height: size === "sm" ? 6 : 8 }}>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: cfg.dot }} />
          <span className="relative inline-flex rounded-full h-full w-full"
            style={{ background: cfg.dot }} />
        </span>
      ) : (
        <span className="leading-none">{displayIcon}</span>
      )}
      {label ?? cfg.label}
    </span>
  );
}

/* ── Exclusion card (larger block variant) ──────────────────── */
export function ExclusionBadgeCard({
  title,
  description,
  severity = "warning",
  icon,
  clause,
}) {
  const cfg = SEVERITY[severity] ?? SEVERITY.warning;
  const displayIcon = icon ?? cfg.icon;

  return (
    <div
      className="relative flex gap-4 p-5 rounded-2xl transition-transform duration-200
                 hover:scale-[1.01] cursor-default"
      style={{
        background: cfg.bg,
        border: `1.5px solid ${cfg.border}`,
        boxShadow: `0 2px 12px ${cfg.dot}18`,
      }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
        style={{ background: cfg.dot }} />

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 ml-1"
        style={{ background: "rgba(255,255,255,0.6)" }}>
        {displayIcon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h4 className="font-extrabold text-sm leading-snug" style={{ color: cfg.text }}>
            {title}
          </h4>
          <ExclusionBadge severity={severity} size="sm" pulse />
        </div>

        {description && (
          <p className="text-xs leading-relaxed mt-1.5 text-gray-600">{description}</p>
        )}

        {clause && (
          <div className="mt-2.5 px-3 py-2 rounded-lg text-xs text-gray-500 italic leading-relaxed"
            style={{ background: "rgba(255,255,255,0.5)", border: `1px solid ${cfg.border}` }}>
            <span className="not-italic font-bold text-gray-400 text-[10px] uppercase tracking-wider block mb-0.5">
              Policy clause
            </span>
            "{clause}"
          </div>
        )}
      </div>
    </div>
  );
}

export default ExclusionBadge;
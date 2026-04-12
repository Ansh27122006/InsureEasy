/* ─────────────────────────────────────────────────────────────
   CoverageGrid.jsx
   Props:
     coveredItems  {Array<{ id?, title, description, icon, type? }>}
     excludedItems {Array<{ id?, title, description, icon, type? }>}
   ───────────────────────────────────────────────────────────── */
import { CoverageCard } from "./CoverageCard";

/* ── Section header icons ─────────────────────────────────────  */
const CheckShieldIcon = () => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true">
    <path d="M11 2L3 6v5c0 5.25 3.5 9.74 8 11 4.5-1.26 8-5.75 8-11V6L11 2z" />
    <polyline points="8 11 10.5 13.5 14.5 9" />
  </svg>
);

const BanIcon = () => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true">
    <circle
      cx="11"
      cy="11"
      r="9"
    />
    <line
      x1="4.22"
      y1="4.22"
      x2="17.78"
      y2="17.78"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    viewBox="0 0 22 22"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L11.71 3.86a2 2 0 0 0-3.42 0z" />
    <line
      x1="12"
      y1="9"
      x2="12"
      y2="13"
    />
    <line
      x1="12"
      y1="17"
      x2="12.01"
      y2="17"
    />
  </svg>
);

/* ── Section wrapper ──────────────────────────────────────────  */
function CoverageSection({
  title,
  subtitle,
  badge,
  items,
  cardType,
  emptyMessage,
}) {
  const { bg, text, ring, Icon } = badge;

  return (
    <section className="flex flex-col gap-5">
      {/* Section header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Colored icon pill */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: bg,
              color: text,
              boxShadow: `0 0 0 2px ${ring}`,
            }}>
            <Icon />
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-gray-900 leading-none">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs text-gray-400 mt-0.5 font-medium">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Count badge */}
        <span
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5
                     rounded-full text-xs font-bold tracking-wide"
          style={{ background: bg, color: text }}>
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full rounded-full"
        style={{ background: ring }}
      />

      {/* Grid or empty state */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <CoverageCard
              key={item.id ?? `${cardType}-${idx}`}
              title={item.title}
              description={item.description}
              icon={item.icon}
              type={item.type ?? cardType}
              covered={item.covered}
              notCovered={item.notCovered}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center py-12 rounded-2xl border-2 border-dashed text-center gap-2"
          style={{ borderColor: ring, background: bg + "60" }}>
          <span className="text-3xl opacity-40">
            <Icon />
          </span>
          <p className="text-sm text-gray-400 font-medium">{emptyMessage}</p>
        </div>
      )}
    </section>
  );
}

/* ── CoverageGrid ─────────────────────────────────────────────  */
export function CoverageGrid({
  coveredItems = [],
  excludedItems = [],
  partialItems = [],
}) {
  const totalItems =
    coveredItems.length + excludedItems.length + partialItems.length;

  return (
    <div className="flex flex-col gap-10">
      {/* Page-level summary strip */}
      {totalItems > 0 && (
        <div
          className="flex flex-wrap items-center gap-4 px-5 py-4 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
            border: "1px solid #E2E8F0",
          }}>
          {/* Coverage score */}
          <div className="flex items-center gap-3 flex-1 min-w-[160px]">
            <div className="relative w-12 h-12 shrink-0">
              {/* SVG donut */}
              <svg
                viewBox="0 0 36 36"
                className="w-12 h-12 -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#16A34A"
                  strokeWidth="4"
                  strokeDasharray={`${
                    totalItems > 0
                      ? ((coveredItems.length / totalItems) * 88).toFixed(1)
                      : 0
                  } 88`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dasharray 0.8s ease" }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-black text-gray-700">
                {totalItems > 0
                  ? Math.round((coveredItems.length / totalItems) * 100)
                  : 0}
                %
              </span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Coverage Score</p>
              <p className="text-xs text-gray-400">
                {coveredItems.length} covered · {partialItems.length} partial ·{" "}
                {excludedItems.length} excluded
              </p>
            </div>
          </div>

          {/* Quick-glance pills */}
          <div className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             text-xs font-bold bg-green-100 text-green-700">
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3"
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
              {coveredItems.length} Covered
            </span>
            {partialItems.length > 0 && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                               text-xs font-bold bg-yellow-100 text-yellow-700">
                <svg
                  viewBox="0 0 12 12"
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
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
                    fill="currentColor"
                  />
                </svg>
                {partialItems.length} Partial
              </span>
            )}
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             text-xs font-bold bg-red-100 text-red-700">
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round">
                <path d="M3 3l6 6M9 3l-6 6" />
              </svg>
              {excludedItems.length} Excluded
            </span>
          </div>
        </div>
      )}

      {/* Covered section */}
      <CoverageSection
        title="What You're Covered For"
        subtitle="Benefits and protections included in your policy"
        badge={{
          bg: "#DCFCE7",
          text: "#15803D",
          ring: "#BBF7D0",
          Icon: CheckShieldIcon,
        }}
        items={coveredItems}
        cardType="covered"
        emptyMessage="No covered items found in this policy."
      />

      {/* Partial section */}
      {partialItems.length > 0 && (
        <>
          {/* Divider between sections */}
          <div className="relative flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <span className="text-xs font-bold text-gray-300 uppercase tracking-widest shrink-0 px-2">
              and
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>

          <CoverageSection
            title="Partially Covered"
            subtitle="Some coverage with conditions or limitations"
            badge={{
              bg: "#FEF3C7",
              text: "#B45309",
              ring: "#FDE68A",
              Icon: WarningIcon,
            }}
            items={partialItems}
            cardType="partial"
            emptyMessage="No partial coverage items found."
          />
        </>
      )}

      {/* Divider between sections */}
      <div className="relative flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest shrink-0 px-2">
          vs
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      {/* Excluded section */}
      <CoverageSection
        title="What's NOT Covered"
        subtitle="Exclusions, limitations, and gaps in your policy"
        badge={{
          bg: "#FEE2E2",
          text: "#B91C1C",
          ring: "#FECACA",
          Icon: BanIcon,
        }}
        items={excludedItems}
        cardType="excluded"
        emptyMessage="No exclusions found — or none have been analyzed yet."
      />
    </div>
  );
}

export default CoverageGrid;

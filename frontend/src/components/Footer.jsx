/* ─────────────────────────────────────────────────────────────
   Footer.jsx — InsureEasy global footer
   ───────────────────────────────────────────────────────────── */
import { Link } from "react-router-dom";

const NAVY = "#1A1A2E";
const RED = "#E94560";

const LINKS = {
  Product: [
    { label: "How It Works", to: "/how-it-works" },
    { label: "Upload Policy", to: "/upload" },
    { label: "Coverage Visualizer", to: "/upload" },
    { label: "Risk Analyzer", to: "/upload" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/about" },
    { label: "Hackathon", to: "/about" },
  ],
  Legal: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Use", to: "/terms" },
    { label: "Cookie Policy", to: "/cookies" },
  ],
};

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: NAVY }}>
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column — spans 2 cols on lg */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 w-fit group">
              <span className="text-2xl">🛡️</span>
              <span className="text-white font-black text-xl tracking-tight">
                InsureEasy
              </span>
              <span
                className="w-2 h-2 rounded-full -ml-1 mt-0.5 self-start shrink-0
                               group-hover:scale-125 transition-transform duration-200"
                style={{ background: RED }}
              />
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              AI-powered insurance policy analysis. Upload any policy and get
              plain-English summaries, coverage maps, and instant answers in
              under 60 seconds.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400
                             hover:text-white transition-all duration-150"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(233,69,96,0.5)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)")
                  }>
                  {icon}
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              All systems operational
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div
              key={group}
              className="flex flex-col gap-4">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-gray-500">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150
                                 hover:translate-x-0.5 inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4
                        px-6 py-5 rounded-2xl"
          style={{
            background: "rgba(233,69,96,0.08)",
            border: "1px solid rgba(233,69,96,0.18)",
          }}>
          <div>
            <p className="text-white font-bold text-sm">
              Ready to decode your policy?
            </p>
            <p className="text-gray-400 text-xs mt-0.5">
              Free to try. No credit card required.
            </p>
          </div>
          <Link
            to="/upload"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm
                       font-bold text-white transition-all duration-150 hover:brightness-110
                       hover:scale-105 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${RED}, #c0304f)` }}>
            Upload Your Policy →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row
                      items-center justify-between gap-3"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <p className="text-xs text-gray-500">
          © {year} InsureEasy. Built for the Fintech Hackathon. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

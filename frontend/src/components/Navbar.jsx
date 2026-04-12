import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ backgroundColor: "#1A1A2E" }}
      className={[
        "sticky top-0 z-50 w-full transition-shadow duration-300",
        scrolled ? "shadow-[0_4px_32px_0_rgba(233,69,96,0.18)]" : "shadow-none",
      ].join(" ")}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2 select-none group">
            <span className="text-2xl leading-none">🛡️</span>
            <span className="text-white font-bold text-xl tracking-tight">
              InsureEasy
            </span>
            {/* Red accent dot */}
            <span
              className="w-2 h-2 rounded-full -ml-1 mt-0.5 self-start shrink-0 transition-transform duration-300 group-hover:scale-125"
              style={{ backgroundColor: "#E94560" }}
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200
                             after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#E94560]
                             after:transition-all after:duration-300 hover:after:w-full">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:block">
            <Link
              to="/upload"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold text-white
                         transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#E94560" }}>
              Try Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md
                       text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#E94560]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}>
            <span
              className={[
                "block w-5 h-0.5 bg-current transition-all duration-300 origin-center",
                menuOpen ? "translate-y-2 rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-0.5 bg-current transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-0.5 bg-current transition-all duration-300 origin-center",
                menuOpen ? "-translate-y-2 -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        style={{ backgroundColor: "#16162a" }}>
        <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-300 hover:text-white
                           hover:bg-white/5 transition-colors duration-150">
                {label}
              </Link>
            </li>
          ))}

          {/* Mobile CTA */}
          <li className="mt-2">
            <Link
              to="/upload"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg
                         text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: "#E94560" }}>
              Try Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

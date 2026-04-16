import { useState, useEffect, useCallback } from "react";
import LOGO from "../assets/EAT_LOGO.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }, []);

  return (
    <header
      role="banner"
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-white/40"
            : "bg-transparent"
        }
      `}
    >
      {/* Top decorative line */}
      <div
        className={`
          absolute top-0 left-0 right-0 h-0.5
          bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500
          transition-all duration-500
          ${scrolled ? "opacity-100" : "opacity-0"}
        `}
      />

      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="flex items-center shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg"
          aria-label="East Asia Trading – Home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={LOGO}
              alt="East Asia Trading logo"
              className="relative h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={`
                  relative px-5 py-2.5 rounded-full text-sm font-medium
                  transition-all duration-300
                  ${
                    scrolled
                      ? "text-slate-700 hover:text-emerald-700"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-white/60"
                  }
                  hover:-translate-y-0.5
                  after:absolute after:bottom-1.5 after:left-1/2 after:-translate-x-1/2
                  after:h-0.5 after:w-0 after:bg-linear-to-r after:from-emerald-500 after:to-emerald-600
                  after:rounded-full after:transition-all after:duration-300
                  hover:after:w-8
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("contact");
          }}
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-linear-to-r from-emerald-600 to-emerald-700 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Get Started
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`
            md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl
            transition-all duration-300
            ${
              mobileOpen
                ? "bg-emerald-600 text-white"
                : "bg-white/80 text-slate-700 hover:bg-white hover:shadow-lg"
            }
          `}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col justify-center items-center gap-1.5 w-5">
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${
                mobileOpen
                  ? "rotate-45 translate-y-1.75 bg-white"
                  : "bg-slate-700"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0 bg-white" : "bg-slate-700"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${
                mobileOpen
                  ? "-rotate-45 -translate-y-1.75 bg-white"
                  : "bg-slate-700"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`
          md:hidden fixed inset-0 z-40 transition-all duration-300
          ${mobileOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-down panel */}
        <div
          className={`
            absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl
            overflow-hidden transition-all duration-500 origin-top
            ${mobileOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-4"}
          `}
        >
          {/* Decorative linear top */}
          <div className="h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500" />

          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map(({ id, label }, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className="
                    flex items-center gap-4 px-8 py-5 text-base font-semibold text-slate-700
                    hover:bg-linear-to-r hover:from-emerald-50 hover:to-transparent
                    hover:text-emerald-700
                    transition-all duration-300
                    border-b border-slate-100/80 last:border-b-0
                    group
                  "
                  style={{
                    transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {label}
                  </span>
                  <svg
                    className="w-4 h-4 ml-auto text-slate-400 group-hover:text-emerald-500 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="px-6 py-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="
                  w-full inline-flex items-center justify-center gap-2
                  px-6 py-3.5 rounded-full text-base font-semibold
                  bg-linear-to-r from-emerald-600 to-emerald-700 text-white
                  shadow-lg shadow-emerald-600/30
                  hover:shadow-xl hover:shadow-emerald-600/40
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Get Started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

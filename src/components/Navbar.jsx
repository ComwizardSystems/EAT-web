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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20"
          : "bg-transparent"
      }`}
    >
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
          className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 rounded-sm"
          aria-label="East Asia Trading – Home"
        >
          <img
            src={LOGO}
            alt="East Asia Trading logo"
            className="h-14 w-auto object-contain"
            loading="eager"
          />
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
                  relative px-4 py-2 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${
                    scrolled
                      ? "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60"
                      : "text-slate-700 hover:text-emerald-700 hover:bg-white/40"
                  }
                  after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2
                  after:h-0.5 after:w-0 after:bg-emerald-600 after:rounded-full
                  after:transition-all after:duration-300
                  hover:after:w-5
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/40 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col justify-center items-center gap-1.25 w-5">
            <span
              className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-1.75" : ""
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
          className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-down panel */}
        <div
          className={`
            absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl
            overflow-hidden transition-all duration-300 origin-top
            ${mobileOpen ? "opacity-100 scale-y-100 translate-y-0" : "opacity-0 scale-y-95 -translate-y-4"}
          `}
        >
          <ul className="flex flex-col py-3">
            {NAV_ITEMS.map(({ id, label }, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className="
                    flex items-center gap-3 px-6 py-4 text-base font-medium text-slate-700
                    hover:bg-emerald-50 hover:text-emerald-700
                    transition-colors duration-200
                    border-b border-slate-100 last:border-b-0
                  "
                  style={{
                    transitionDelay: mobileOpen ? `${index * 40}ms` : "0ms",
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-500 opacity-60" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

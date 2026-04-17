import { useState, useEffect, useCallback } from "react";
import LOGO from "../assets/EAT_LOGO.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "capabilities", label: "Capabilities" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Top accent bar */}
      <div
        className={`h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500 transition-all duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="flex items-center shrink-0 group"
          aria-label="East Asia Trading - Home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={LOGO}
              alt="East Asia Trading logo"
              className="relative h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-slate-300 hover:text-white hover:bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
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
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all duration-300"
        >
          Get a Quote
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
            mobileOpen
              ? "bg-emerald-600 text-white"
              : scrolled
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-white/10 text-white hover:bg-white/20"
          }`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="flex flex-col justify-center items-center gap-1.5 w-5">
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-2 bg-white" : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-2 bg-white" : "bg-white"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 origin-top ${
            mobileOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-95 -translate-y-4"
          }`}
        >
          <div className="h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500" />
          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className="flex items-center gap-4 px-8 py-4 text-base font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 border-b border-white/5 last:border-b-0"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="px-6 py-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

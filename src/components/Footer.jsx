import AnimatedSection from "./AnimatedSection";

const NAV_LINKS = [
  { id: "home", label: "Home", icon: "" },
  { id: "about", label: "About Us", icon: "" },
  { id: "services", label: "Services", icon: "" },
  { id: "why-us", label: "Why Us", icon: "" },
  { id: "contact", label: "Contact", icon: "" },
];

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    url: "#",
  },
  {
    name: "Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    url: "#",
  },
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    url: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    url: "#",
  },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-linear-to-b from-slate-900 to-slate-950 text-white"
      role="contentinfo"
    >
      {/* Decorative background elements */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-0 left-1/4 w-100 h-100 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company info */}
          <AnimatedSection
            animation="fade-up"
            delay={0}
            className="lg:col-span-2"
          >
            <div>
              {/* Logo and tagline */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <span className="text-2xl">🌍</span>
                  </div>*/}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">
                      East Asia Trading
                    </h3>
                    <p className="text-sm text-emerald-400 font-medium">
                      Global Trade Excellence
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-base mb-6">
                Your trusted partner for premium fresh fruits, vegetables, and
                global trade solutions since 1978. We deliver quality,
                consistency, and reliability to markets worldwide.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-700/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Govt. Recognised
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-700/40 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <span className="text-sm">⭐</span>
                  46+ Years
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-700/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="text-sm">✓</span>
                  ISO Certified
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="
                      group flex items-center justify-center w-10 h-10 rounded-xl
                      bg-slate-800 text-slate-400
                      hover:bg-linear-to-br hover:from-emerald-500 hover:to-emerald-600
                      hover:text-white hover:shadow-lg hover:shadow-emerald-500/30
                      transition-all duration-300 hover:scale-110
                    "
                  >
                    <span className="transform group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick links */}
          <AnimatedSection animation="fade-up" delay={80}>
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-linear-to-b from-emerald-500 to-emerald-600 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className="
                        group flex items-center gap-3 text-slate-300 text-base
                        hover:text-emerald-400
                        transition-all duration-300
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg
                      "
                    >
                      <span className="text-lg transform group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                      <svg
                        className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-emerald-500"
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
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection animation="fade-up" delay={160}>
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-linear-to-b from-emerald-500 to-emerald-600 rounded-full" />
                Contact Us
              </h4>
              <div className="space-y-5 text-base">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-900/40 text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    1st Floor, 50 Manish Market, Mata Ramabai Ambedkar Marg
                    (Palton Road), Mumbai 400 001, India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-900/40 text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <a
                    href="tel:+91-22-22641122"
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                  >
                    +91-22-2264 1122
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-900/40 text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <a
                    href="mailto:eat@eastasiatrading.com"
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                  >
                    eat@eastasiatrading.com
                  </a>
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-sm text-slate-400 mb-3">
                  Subscribe to our newsletter
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="
                      flex-1 px-4 py-2.5 rounded-xl text-sm
                      bg-slate-800 border border-slate-700
                      text-white placeholder:text-slate-500
                      focus:outline-none focus:border-emerald-500
                      focus:ring-2 focus:ring-emerald-500/20
                      transition-all duration-300
                    "
                  />
                  <button
                    className="
                      px-4 py-2.5 rounded-xl
                      bg-linear-to-r from-emerald-600 to-emerald-700
                      text-white font-semibold text-sm
                      hover:shadow-lg hover:shadow-emerald-600/30
                      hover:-translate-y-0.5
                      transition-all duration-300
                    "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} East Asia Trading, Mumbai, India. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                Terms of Service
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#"
                className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-xs flex items-center gap-2">
            <span className="text-lg">🚀</span>
            Delivering quality &amp; trust since 1978
          </p>
        </div>

        {/* Decorative bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-amber-500 to-emerald-500"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}

import AnimatedSection from "./AnimatedSection";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Company info */}
          <AnimatedSection animation="fade-up" delay={0}>
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                East Asia Trading
              </h3>
              <p className="text-slate-400 leading-relaxed text-base mb-6">
                Your trusted partner for premium fresh fruits, vegetables, and
                global trade solutions since 1978. Quality, consistency, and
                reliability guaranteed.
              </p>
              {/* Social-style badges */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                    bg-emerald-900/40 text-emerald-400 text-xs font-semibold
                    border border-emerald-800/40
                  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Govt. Recognised Export House
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick links */}
          <AnimatedSection animation="fade-up" delay={80}>
            <div>
              <h4 className=" font-bold text-white mb-6 uppercase tracking-wider text-sm">
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
                        inline-flex items-center gap-2 text-slate-400 text-base
                        hover:text-emerald-400 transition-colors duration-200
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 rounded
                      "
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-emerald-500" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection animation="fade-up" delay={160}>
            <div>
              <h4 className=" font-bold text-white mb-6 uppercase tracking-wider text-sm">
                Contact Us
              </h4>
              <div className="space-y-4 text-base text-slate-400">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="leading-relaxed">
                    1st Floor, 50 Manish Market, Mata Ramabai Ambedkar Marg
                    (Palton Road), Mumbai 400 001, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 shrink-0 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <a
                    href="tel:+91-22-22641122"
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    +91-22-2264 1122
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 shrink-0 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <a
                    href="mailto:eat@eastasiatrading.com"
                    className="hover:text-emerald-400 transition-colors duration-200"
                  >
                    eat@eastasiatrading.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} East Asia Trading, Mumbai, India. All rights
            reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Delivering quality &amp; trust since 1978
          </p>
        </div>
      </div>
    </footer>
  );
}

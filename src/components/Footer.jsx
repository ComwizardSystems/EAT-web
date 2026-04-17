import LOGO from "../assets/EAT_LOGO.png";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "capabilities", label: "Capabilities" },
  { id: "why-us", label: "Why Us" },
  { id: "contact", label: "Contact" },
];

const FOOTER_LINKS = {
  "Quick Links": [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Products" },
    { id: "contact", label: "Contact Us" },
  ],
  "Our Services": [
    { id: "about", label: "Export Services" },
    { id: "about", label: "Sourcing Solutions" },
    { id: "about", label: "Trade Facilitation" },
    { id: "capabilities", label: "Quality Assurance" },
  ],
  Products: [
    { id: "products", label: "Fresh Fruits" },
    { id: "products", label: "Fresh Vegetables" },
    { id: "products", label: "Textiles & Garments" },
    { id: "products", label: "Footwear" },
  ],
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="inline-block mb-6"
            >
              <img
                src={LOGO}
                alt="East Asia Trading"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              East Asia Group of Companies is a dynamic and reliable Govt
              recognised export house, sourcing partner, and indenting agent.
              Your trusted partner in global trade since 1978.
            </p>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Govt Recognised Export House
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={"#" + link.id}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.id);
                      }}
                      className="text-slate-400 text-sm hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} East Asia Trading. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <a
                  key={link.id}
                  href={"#" + link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                  className="text-slate-500 text-sm hover:text-emerald-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
    </footer>
  );
}

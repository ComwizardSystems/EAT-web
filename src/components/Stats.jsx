import AnimatedSection from "./AnimatedSection";

const STATS = [
  { number: "46+", label: "Years Experience", suffix: "Years" },
  { number: "100+", label: "Products Exported", suffix: "Products" },
  { number: "20+", label: "Countries Served", suffix: "Countries" },
  { number: "100%", label: "Quality Assured", suffix: "Transparency" },
];

export default function Stats() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(234,179,8,0.2) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <AnimatedSection animation="fade-up" delay={0}>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Your <span className="text-emerald-400">Trusted</span> Partner
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Our Key Contributions to our Business Partners Success
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {STATS.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="relative text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-emerald-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-10 sm:mt-16 text-center">
            <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
              With a proven track record of delivering excellence, we stand by
              our dedicated partners in navigating the complexities of global
              sourcing and supply chain dynamics.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-base font-bold bg-linears-to-r from-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us Now
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

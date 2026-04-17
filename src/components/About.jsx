import AnimatedSection from "./AnimatedSection";

const SERVICES = [
  {
    title: "Export Services",
    description:
      "We export a wide range of high-quality Indian products to international markets, ensuring compliance with global standards and seamless logistics.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <ellipse cx="12" cy="12" rx="5" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M3.5 8 Q 12 6.5 20.5 8" />
        <path d="M3.5 16 Q 12 17.5 20.5 16" />
      </svg>
    ),
  },
  {
    title: "Sourcing Solutions",
    description:
      "As experienced sourcing agents, we identify reliable manufacturers, negotiate competitive pricing, and maintain strict quality control to meet buyer requirements.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Indenting & Trade Facilitation",
    description:
      "We act as trusted intermediaries between buyers and sellers, ensuring smooth transactions, transparent dealings, and long-term business relationships.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Top decorative border */}
      <div className="h-1 bg-linear-to-r from-emerald-500 via-amber-400 to-emerald-500" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
                About Us
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
                Welcome to{" "}
                <span className="text-emerald-600">East Asia Group</span> of
                Companies
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150}>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                Your Trusted Partner in Global Trade from India Since 1978.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 sm:mb-8">
                East Asia Group of Companies is a dynamic and reliable Govt
                recognised export house, sourcing partner, and indenting agent
                specializing in connecting Indian manufacturers with global
                markets. With a strong foundation in international trade, we
                serve as a bridge between quality Indian products and buyers
                across Middle East, Europe, Africa and beyond.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8 sm:mb-10">
                We are a professionally managed group committed to delivering
                excellence in export services, sourcing solutions, and trade
                facilitation. With deep market knowledge and a robust supplier
                network across India, we ensure that our clients receive the
                best products at competitive prices with consistent quality and
                timely delivery.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={250}>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Govt Recognised
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  46+ Years Experience
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Global Reach
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - What We Do */}
          <div>
            <AnimatedSection animation="fade-up" delay={100}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">
                What We Do
              </h3>
            </AnimatedSection>

            <div className="space-y-6">
              {SERVICES.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="fade-up"
                  delay={200 + index * 100}
                >
                  <div className="group relative bg-slate-50 hover:bg-emerald-50 rounded-xl p-4 sm:p-6 border border-slate-100 hover:border-emerald-200 transition-all duration-300">
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

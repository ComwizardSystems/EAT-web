import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

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
    color: "from-emerald-500 to-emerald-600",
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
    color: "from-amber-500 to-amber-600",
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
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M2 14 C 2 18 10 22 22 10" strokeDasharray="2 2" />
        <polyline points="18 10 22 10 22 14" />
      </svg>
    ),
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative p-6 bg-linear-to-b from-white to-slate-50/60 overflow-hidden"
    >
      {/* Decorative background elements */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-20 right-0 w-125 h-125 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute bottom-20 left-0 w-100 h-100
          rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="About East Asia Group"
          subtitle="Your Trusted Partner in Global Trade"
          description="Four decades of excellence in connecting Indian quality with global markets"
          gradient="from-emerald-500 to-amber-600"
        />

        {/* Welcome & Who We Are */}
        <div className="max-w-4xl mx-auto space-y-16 mb-24">
          {/* Welcome Card */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-10 md:p-12 border border-white/60 shadow-xl shadow-slate-200/50">
              {/* Decorative gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-emerald-500 to-emerald-700 rounded-l-3xl" />

              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className=" bg-clip-text bg-linear-to-r from-emerald-700 to-emerald-600">
                    Welcome to East Asia Group of Companies
                  </span>
                </h3>
                <p className="text-lg md:text-xl font-semibold bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-700 mb-6">
                  Your Trusted Partner in Global Trade from India Since 1978.
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  East Asia Group of Companies is a dynamic and reliable Govt
                  recognised export house, sourcing partner, and indenting agent
                  specializing in connecting Indian manufacturers with global
                  markets. With a strong foundation in international trade, we
                  serve as a bridge between quality Indian products and buyers
                  across Middle East, Europe, Africa and beyond.
                </p>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald-500/40" />
              <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-emerald-500/30" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-amber-500/40" />
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 rounded-full bg-amber-500/30" />
            </div>
          </AnimatedSection>

          {/* Who We Are Card */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="relative bg-linear-to-br from-slate-50 to-white rounded-3xl p-10 md:p-12 border border-slate-200/60 shadow-lg">
              {/* Decorative icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative z-10 text-center mt-2">
                <h3 className="text-3xl font-bold mb-4">
                  <span className=" bg-clip-text bg-linear-to-r from-amber-600 to-amber-700">
                    Who We Are
                  </span>
                </h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  We are a professionally managed group committed to delivering
                  excellence in export services, sourcing solutions, and trade
                  facilitation. With deep market knowledge and a robust supplier
                  network across India, we ensure that our clients receive the
                  best products at competitive prices with consistent quality
                  and timely delivery.
                </p>

                {/* Stats badges */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Govt Recognised
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    46+ Years Experience
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Global Reach
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* What We Do */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className=" bg-clip-text bg-linear-to-r from-teal-600 to-teal-700">
                What We Do
              </span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive trade solutions tailored to your business needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={150 + index * 100}
            >
              <div
                className="
                  group relative h-full
                  bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-10
                  border border-white/60 shadow-xl shadow-slate-200/40
                  hover:shadow-2xl hover:shadow-emerald-100/50
                  hover:-translate-y-2
                  transition-all duration-500
                  overflow-hidden
                "
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-0-to-br ${service.color} opacity-5`}
                />

                {/* Decorative gradient top line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />

                {/* Icon container */}
                <div className="relative z-10">
                  <div
                    className={`
                      inline-flex items-center justify-center w-20 h-20 rounded-2xl
                      bg-linear-to-br ${service.color} text-white mb-6
                      shadow-lg shadow-current/30
                      group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-500
                    `}
                  >
                    {service.icon}
                  </div>

                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h4>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative arrow */}
                  <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn more
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full text-emerald-500"
                  >
                    <path
                      d="M0 100 L100 100 L100 0"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

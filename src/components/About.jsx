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
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M2 14 C 2 18 10 22 22 10" strokeDasharray="2 2" />
        <polyline points="18 10 22 10 22 14" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="About East Asia Group"
          subtitle="Your Trusted Partner in Global Trade"
        />

        {/* Welcome & Who We Are */}
        <div className="max-w-4xl mx-auto space-y-16 mb-20">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Welcome to East Asia Group of Companies
              </h3>
              <p className="text-lg text-emerald-700 font-semibold mb-6">
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
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <div className="relative text-center">
              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="block h-px w-12 bg-emerald-300" />
                <span className="block w-2 h-2 rounded-full bg-emerald-500" />
                <span className="block h-px w-12 bg-emerald-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Who We Are
              </h3>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                We are a professionally managed group committed to delivering
                excellence in export services, sourcing solutions, and trade
                facilitation. With deep market knowledge and a robust supplier
                network across India, we ensure that our clients receive the
                best products at competitive prices with consistent quality and
                timely delivery.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* What We Do */}
        <AnimatedSection animation="fade-up" delay={100}>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 text-center">
            What We Do
          </h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={150 + index * 100}
            >
              <div
                className="
                  group relative h-full p-8 md:p-10 rounded-2xl text-center
                  bg-white border border-slate-200/80
                  shadow-sm hover:shadow-xl hover:shadow-emerald-100/40
                  hover:-translate-y-1.5
                  transition-all duration-300
                "
              >
                {/* Icon container */}
                <div
                  className="
                    inline-flex items-center justify-center w-16 h-16 rounded-2xl
                    bg-emerald-50 text-emerald-700 mb-6
                    group-hover:bg-emerald-700 group-hover:text-white
                    transition-colors duration-300
                  "
                >
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h4>

                <p className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.75 w-0 group-hover:w-16 bg-emerald-500 rounded-full transition-all duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

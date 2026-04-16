import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const CARDS = [
  {
    key: "mission",
    number: "",
    title: "Our Mission",
    subtitle: "Purpose Driven",
    description:
      "To promote Indian products globally by delivering value-driven sourcing and export solutions while building long-term partnerships based on trust, quality, and reliability.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "from-emerald-600 to-emerald-700",
    badge: "Impactful",
    color: "emerald",
  },
  {
    key: "vision",
    number: "",
    title: "Our Vision",
    subtitle: "Forward Thinking",
    description:
      "To become a leading global trade partner recognized for excellence in sourcing, exporting, and customer satisfaction.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    hoverGradient: "from-amber-600 to-amber-700",
    badge: "Innovative",
    color: "amber",
  },
];

export default function MissionVision() {
  return (
    <section className="relative py-24 md:py-32 bg-linear-to-b from-slate-50/60 to-white overflow-hidden">
      {/* Decorative background elements */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-20 left-0 w-125 h-125 rounded-full opacity-10"
          style={{
            background:
              "radial-linear(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute bottom-20 right-0 w-150 h-150 rounded-full opacity-10"
          style={{
            background:
              "radial-linear(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Our Mission & Vision"
          subtitle="Driving Excellence In Global Trade"
          description="Committed to delivering exceptional value through quality and innovation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {CARDS.map((card, index) => (
            <AnimatedSection
              key={card.key}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className={`
                  group relative h-full
                  bg-white/80 backdrop-blur-lg rounded-3xl p-10 md:p-12
                  border border-white/60 shadow-xl shadow-slate-200/50
                  hover:shadow-2xl hover:shadow-${card.color}-100/60
                  hover:-translate-y-2
                  transition-all duration-500
                  overflow-hidden
                `}
              >
                {/* linear background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${card.hoverlinear}`}
                  style={{
                    background: `linear-linear(135deg, ${card.color === "emerald" ? "rgba(16, 185, 129, 0.03)" : "rgba(251, 146, 60, 0.03)"} 0%, transparent 100%)`,
                  }}
                />

                {/* Number watermark */}
                <div className="absolute top-6 right-6 text-9xl font-extrabold opacity-5 group-hover:opacity-10 transition-opacity duration-500 select-none">
                  {card.number}
                </div>

                {/* Top badge */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2">
                  <div
                    className={`
                      inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                      bg-linear-to-r ${card.linear} text-white
                      text-xs font-bold uppercase tracking-wider
                      shadow-lg shadow-current/25
                      opacity-0 group-hover:opacity-100
                      transform -translate-y-3 group-hover:translate-y-0
                      transition-all duration-500
                    `}
                  >
                    {card.badge}
                  </div>
                </div>

                {/* Icon container */}
                <div className="relative z-10 mb-8 flex justify-center">
                  <div
                    className={`
                      relative inline-flex items-center justify-center w-28 h-28 rounded-3xl
                      bg-linear-to-br ${card.linear} text-white
                      shadow-2xl shadow-current/40
                      group-hover:scale-110 group-hover:rotate-6
                      transition-all duration-500
                    `}
                  >
                    {/* Decorative rings */}
                    <div
                      className={`
                        absolute inset-0 rounded-3xl border-2 border-white/30
                        animate-[spin_10s_linear_infinite]
                      `}
                      aria-hidden="true"
                    />
                    <div
                      className={`
                        absolute -inset-2 rounded-3xl border border-white/20
                        animate-[spin_15s_linear_infinite_reverse]
                      `}
                      aria-hidden="true"
                    />
                    {card.icon}
                  </div>
                </div>

                {/* Title and subtitle */}
                <div className="relative z-10 text-center mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p
                    className={`
                      text-sm font-semibold uppercase tracking-wider
                      bg-linear-to-r ${card.linear} bg-clip-text text-transparent
                    `}
                  >
                    {card.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="relative z-10 text-base md:text-lg text-slate-600 leading-relaxed text-center">
                  {card.description}
                </p>

                {/* Bottom decorative elements */}
                <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
                  <div
                    className={`
                      w-16 h-1 rounded-full bg-linear-to-r ${card.linear}
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 origin-center
                    `}
                  />
                  <div
                    className={`
                      w-2 h-2 rounded-full bg-linear-to-r ${card.linear}
                      scale-0 group-hover:scale-100
                      transition-transform duration-500 delay-100
                    `}
                  />
                  <div
                    className={`
                      w-16 h-1 rounded-full bg-linear-to-r ${card.linear}
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-500 origin-center
                    `}
                  />
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8">
                  <svg
                    viewBox="0 0 32 32"
                    className={`
                      w-full h-full text-${card.color}-500 opacity-0
                      group-hover:opacity-100 transition-opacity duration-500
                    `}
                  >
                    <path
                      d="M2 2 L14 2 L2 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8">
                  <svg
                    viewBox="0 0 32 32"
                    className={`
                      w-full h-full text-${card.color}-500 opacity-0
                      group-hover:opacity-100 transition-opacity duration-500
                    `}
                  >
                    <path
                      d="M30 30 L18 30 L30 18"
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

        {/* Bottom call-to-action */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Join us in building a better future through global trade
            </p>
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2 px-8 py-4 rounded-full
                text-base font-bold
                bg-linear-to-r from-emerald-600 to-emerald-700
                text-white shadow-xl shadow-emerald-600/30
                hover:shadow-2xl hover:shadow-emerald-600/40
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Partner With Us
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

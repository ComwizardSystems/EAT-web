import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const CARDS = [
  {
    key: "mission",
    title: "Our Mission",
    description:
      "To promote Indian products globally by delivering value-driven sourcing and export solutions while building long-term partnerships based on trust, quality, and reliability.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
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
  },
  {
    key: "vision",
    title: "Our Vision",
    description:
      "To become a leading global trade partner recognized for excellence in sourcing, exporting, and customer satisfaction.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 md:py-32 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Our Mission & Vision"
          subtitle="Driving Excellence In Global Trade"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {CARDS.map((card, index) => (
            <AnimatedSection
              key={card.key}
              animation="fade-up"
              delay={index * 120}
            >
              <div
                className="
                  group relative h-full p-10 md:p-12 rounded-2xl text-center
                  bg-white border border-slate-200/80
                  shadow-sm hover:shadow-xl hover:shadow-emerald-100/40
                  hover:-translate-y-1.5
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Subtle background decoration */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="
                    relative inline-flex items-center justify-center w-20 h-20 rounded-2xl
                    bg-emerald-50 text-emerald-700 mb-6
                    group-hover:bg-emerald-700 group-hover:text-white
                    transition-colors duration-300
                  "
                >
                  {card.icon}
                </div>

                <h3 className="relative text-2xl md:text-3xl font-bold text-slate-800 mb-5">
                  {card.title}
                </h3>

                <p className="relative text-base md:text-lg text-slate-600 leading-relaxed">
                  {card.description}
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

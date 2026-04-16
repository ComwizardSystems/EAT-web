import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const ADVANTAGES = [
  {
    number: "",
    title: "Four Decades of Trusted Experience",
    description:
      "Serving global markets since 1978 with a proven track record of excellence.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "from-emerald-600 to-emerald-700",
    badge: "Trusted",
  },
  {
    number: "",
    title: "Extensive Supplier Network",
    description:
      "Robust supplier network across India ensuring the best sourcing for every requirement.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    hoverGradient: "from-amber-600 to-amber-700",
    badge: "Networked",
  },
  {
    number: "",
    title: "Quality Assurance & Compliance",
    description:
      "Strict quality control measures meeting global standards at every stage.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "from-emerald-600 to-emerald-700",
    badge: "Certified",
  },
  {
    number: "",
    title: "Competitive Pricing",
    description:
      "Cost efficiency without compromising on quality, backed by strong supplier relationships.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    hoverGradient: "from-amber-600 to-amber-700",
    badge: "Value",
  },
  {
    number: "",
    title: "Timely Delivery",
    description:
      "Reliable logistics support ensuring on-time delivery to any destination worldwide.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "from-emerald-600 to-emerald-700",
    badge: "Reliable",
  },
  {
    number: "",
    title: "Transparent Practices",
    description:
      "Honest and transparent business dealings that build lasting trust with every partner.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    hoverGradient: "from-amber-600 to-amber-700",
    badge: "Honest",
  },
  {
    number: "",
    title: "Customized Solutions",
    description:
      "Tailored solutions for every client's unique needs, from sourcing to delivery.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M11.42 15.17l-5.58 3.27 1.5-6.36L2.25 8.64l6.53-.56L11.42 2.25l2.64 5.83 6.53.56-5.09 4.44 1.5 6.36-5.58-3.27z" />
      </svg>
    ),
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "from-emerald-600 to-emerald-700",
    badge: "Tailored",
  },
  {
    number: "",
    title: "Global Partnerships",
    description:
      "Strategic alliances with trusted partners across multiple continents for seamless operations.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    gradient: "from-amber-500 to-amber-600",
    hoverGradient: "from-amber-600 to-amber-700",
    badge: "Global",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-40 right-0 w-175 h-175 rounded-full opacity-10"
          style={{
            background:
              "radial-linear(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute bottom-40 left-0 w-150 h-150 rounded-full opacity-10"
          style={{
            background:
              "radial-linear(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="The East Asia Advantage"
          description="Discover the benefits of partnering with India's trusted export experts"
        />

        {/* Beautiful grid of advantage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ADVANTAGES.map((advantage, index) => (
            <AnimatedSection
              key={advantage.number}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                className="
                  group relative h-full
                  bg-white/80 backdrop-blur-lg rounded-3xl p-8 text-center
                  border border-white/60 shadow-xl shadow-slate-200/50
                  hover:shadow-2xl hover:shadow-emerald-100/60
                  hover:-translate-y-2
                  transition-all duration-500
                  overflow-hidden
                "
              >
                {/* Number watermark */}
                <div className="absolute top-4 right-4 text-8xl font-extrabold opacity-5 group-hover:opacity-10 transition-opacity duration-500 select-none">
                  {advantage.number}
                </div>

                {/* Top badge */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2">
                  <div
                    className={`
                      inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                      bg-linear-to-r ${advantage.linear} text-white
                      text-xs font-bold uppercase tracking-wider
                      shadow-lg shadow-current/25
                      opacity-0 group-hover:opacity-100
                      transform -translate-y-2 group-hover:translate-y-0
                      transition-all duration-500
                    `}
                  >
                    {advantage.badge}
                  </div>
                </div>

                {/* linear background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br ${advantage.hoverlinear}`}
                  style={{
                    background: `linear-linear(135deg, ${advantage.linear === "from-emerald-500 to-emerald-600" ? "rgba(16, 185, 129, 0.03)" : "rgba(251, 146, 60, 0.03)"} 0%, transparent 100%)`,
                  }}
                />

                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`
                      inline-flex items-center justify-center w-20 h-20 rounded-2xl
                      bg-linear-to-br ${advantage.linear} text-white
                      shadow-lg shadow-current/30
                      group-hover:scale-110 group-hover:rotate-3
                      transition-all duration-500
                    `}
                  >
                    {advantage.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg md:text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors duration-300">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Decorative line */}
                <div
                  className={`
                    absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0
                    bg-linear-to-r ${advantage.linear} rounded-full
                    group-hover:w-16 transition-all duration-500
                  `}
                />

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    viewBox="0 0 50 50"
                    className={`
                      w-full h-full text-emerald-500
                      group-hover:text-amber-500 transition-colors duration-500
                    `}
                  >
                    <path
                      d="M0 50 L50 50 L50 0"
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
        <AnimatedSection animation="fade-up" delay={900}>
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">
              Ready to experience the East Asia advantage?
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
              Get Started Today
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

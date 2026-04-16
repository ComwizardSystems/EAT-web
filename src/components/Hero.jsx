import AnimatedSection from "./AnimatedSection";
import bgpic from "../assets/fruitdance1.png";

const STATS = [
  { number: "20+", label: "Years Experience" },
  { number: "100%", label: "Quality Assured" },
  { number: "Global", label: "Reach" },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgpic}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/70 to-slate-50/90" />
      </div>

      {/* Subtle decorative circles */}
      <div
        className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-32 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <AnimatedSection animation="fade-down" delay={0} duration={600}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold tracking-wide mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Since 1978 &middot; Mumbai, India
            </span>
          </AnimatedSection>

          {/* Heading */}
          <AnimatedSection animation="fade-up" delay={100} duration={700}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
              Fresh Fruits
              <span className="text-emerald-700"> &amp; Vegetables</span>
              <span className="block mt-2 text-slate-800">
                Import &amp; Export Excellence
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fade-up" delay={200} duration={700}>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Two decades of experience delivering quality, consistency, and
              reliability to global markets from India.
            </p>
          </AnimatedSection>

          {/* CTA buttons */}
          <AnimatedSection animation="fade-up" delay={300} duration={700}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("contact")}
                className="
                  group relative inline-flex items-center justify-center gap-2
                  px-8 py-3.5 rounded-full text-base font-semibold
                  bg-emerald-700 text-white shadow-lg shadow-emerald-700/25
                  hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-700/30
                  hover:-translate-y-0.5
                  transition-all duration-300
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
                "
              >
                Get In Touch
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="
                  inline-flex items-center justify-center gap-2
                  px-8 py-3.5 rounded-full text-base font-semibold
                  bg-white text-slate-800 border-2 border-slate-200
                  hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800
                  hover:-translate-y-0.5
                  transition-all duration-300
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
                "
              >
                Learn More
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection animation="fade-up" delay={450} duration={700}>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="
                  relative group bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center
                  border border-slate-200/80 shadow-sm
                  hover:shadow-lg hover:shadow-emerald-100/50 hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="text-3xl md:text-4xl font-extrabold text-emerald-700 leading-none mb-1.5">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-slate-500 tracking-wide">
                  {stat.label}
                </div>
                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 bg-emerald-500 rounded-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection animation="fade" delay={800} duration={1000}>
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => scrollTo("about")}
              aria-label="Scroll to about section"
              className="
                flex flex-col items-center gap-2 text-slate-400
                hover:text-emerald-600 transition-colors duration-300
              "
            >
              <span className="text-xs font-medium tracking-widest uppercase">
                Scroll
              </span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

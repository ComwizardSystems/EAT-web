import AnimatedSection from "./AnimatedSection";
import bgpic from "../assets/fruitdance1.png";

const STATS = [
  { number: "46+", label: "Years Experience", icon: "" },
  { number: "100%", label: "Quality Assured", icon: "" },
  { number: "Global", label: "Reach", icon: "" },
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
      {/* Multi-layered background */}
      <div className="absolute inset-0 z-0">
        {/* Base image */}
        <img
          src={bgpic}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />

        {/* Beautiful linear overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-white/90 via-white/85 to-slate-50/95" />
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-transparent to-white/60" />

        {/* Decorative linear blobs */}
        <div
          className="absolute top-20 right-0 w-150 h-150 rounded-full opacity-30"
          style={{
            background:
              "radial-linear(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-125 h-125 rounded-full opacity-25"
          style={{
            background:
              "radial-linear(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* Floating decorative circles */}
      <AnimatedSection animation="fade" delay={0} duration={1000}>
        <div
          className="absolute top-32 -right-24 w-80 h-80 rounded-full opacity-20 float-animation"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(16, 185, 129, 0.3) 0deg, rgba(251, 146, 60, 0.3) 180deg, rgba(16, 185, 129, 0.3) 360deg)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      <AnimatedSection animation="fade" delay={200} duration={1000}>
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-15 float-animation"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, rgba(251, 146, 60, 0.4) 0deg, rgba(16, 185, 129, 0.4) 180deg, rgba(251, 146, 60, 0.4) 360deg)",
            filter: "blur(35px)",
            animationDelay: "1s",
          }}
          aria-hidden="true"
        />
      </AnimatedSection>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <AnimatedSection animation="fade-down" delay={0} duration={600}>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-linear-to-r from-emerald-50 to-emerald-100/60 border border-emerald-200/80 text-emerald-700 text-sm font-bold tracking-wide mb-8 shadow-sm shadow-emerald-100/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              Since 1978 · Mumbai, India
            </div>
          </AnimatedSection>

          {/* Main heading with linear text */}
          <AnimatedSection animation="fade-up" delay={100} duration={700}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight relative inline-block mb-6">
              <span className="relative inline-block">
                <span
                  className="absolute inset-0 from-emerald-200 to-amber-300 bg-clip-text blur-sm opacity-50"
                  aria-hidden="true"
                >
                  Fresh Fruits
                </span>
                <span className="relative z-10 block from-emerald-500 to-amber-600 bg-clip-text">
                  Fresh Fruits
                </span>
              </span>
              <span className="relative inline-block">
                <span className="relative z-10 from-emerald-500 to-amber-600 bg-clip-text">
                  & Vegetables
                </span>
                <span
                  className="absolute -bottom-2 left-0 w-full h-4 bg-linear-to-r from-emerald-200/60 to-emerald-300/60 rounded-lg z-0 blur-sm"
                  aria-hidden="true"
                />
              </span>
              <span className="relative inline-block mt-3">
                <span
                  className="absolute inset-0 from-emerald-200 to-amber-300 bg-clip-text blur-sm opacity-50"
                  aria-hidden="true"
                >
                  Import &amp; Export Excellence
                </span>
                <span className="relative z-10 block from-emerald-500 to-amber-600 bg-clip-text">
                  Import &amp; Export Excellence
                </span>
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle with beautiful typography */}
          <AnimatedSection animation="fade-up" delay={200} duration={700}>
            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Two decades of experience delivering{" "}
              <span className="font-semibold text-emerald-700">quality</span>,{" "}
              <span className="font-semibold text-emerald-700">
                consistency
              </span>
              , and{" "}
              <span className="font-semibold text-emerald-700">
                reliability
              </span>{" "}
              to global markets from India.
            </p>
          </AnimatedSection>

          {/* Enhanced CTA buttons */}
          <AnimatedSection animation="fade-up" delay={300} duration={700}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollTo("contact")}
                className="
                  group relative inline-flex items-center justify-center gap-3
                  px-10 py-4 rounded-full text-base font-bold
                  bg-linear-to-r from-emerald-600 to-emerald-700
                  text-white shadow-xl shadow-emerald-700/25
                  hover:shadow-2xl hover:shadow-emerald-700/35
                  hover:-translate-y-1
                  transition-all duration-300
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
                  overflow-hidden
                "
              >
                <span className="absolute inset-0 bg-linear-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  Get In Touch
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </button>

              <button
                onClick={() => scrollTo("about")}
                className="
                  group relative inline-flex items-center justify-center gap-3
                  px-10 py-4 rounded-full text-base font-bold
                  bg-linear-to-br from-white to-slate-50
                  text-slate-800 border-2 border-slate-200/80
                  hover:border-emerald-400 hover:bg-linear-to-br hover:from-emerald-50 hover:to-slate-50 hover:text-emerald-800
                  hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-100/40
                  transition-all duration-300
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600
                "
              >
                <span className="flex items-center gap-3">
                  Learn More
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced stats cards */}
        <AnimatedSection animation="fade-up" delay={450} duration={700}>
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="
                  relative group bg-white/80 backdrop-blur-md rounded-3xl p-7 text-center
                  border border-white/60 shadow-lg shadow-slate-200/50
                  hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-2
                  transition-all duration-500
                  overflow-hidden
                "
              >
                {/* Gradient background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(251, 146, 60, 0.05) 100%)",
                  }}
                />

                {/* Animated decorative line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-1 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500" />

                {/* Icon */}
                <div className="relative z-10 text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="relative z-10 text-4xl md:text-5xl font-extrabold bg-clip-text bg-linear-to-br from-emerald-600 to-emerald-800 leading-none mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="relative z-10 text-sm font-semibold text-slate-500 tracking-wide uppercase group-hover:text-emerald-700 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* {/* Scroll indicator */}
        {/*<AnimatedSection animation="fade" delay={800} duration={1000}>
          <div className="mt-20 flex justify-center">
            <button
              onClick={() => scrollTo("about")}
              aria-label="Scroll to about section"
              className="
                group relative flex flex-col items-center gap-3 text-slate-400
                hover:text-emerald-600 transition-colors duration-300
              "
            >
              <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
                Scroll to explore
              </span>
              <div className="relative w-8 h-12 rounded-full border-2 border-slate-300 group-hover:border-emerald-400 transition-colors duration-300">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-emerald-500 animate-bounce" />
              </div>
            </button>
          </div>
        </AnimatedSection>*/}
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-5"
        style={{
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 1) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

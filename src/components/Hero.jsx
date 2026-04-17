import AnimatedSection from "./AnimatedSection";
import bgpic from "../assets/fruitdance1.png";

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgpic}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover animate-[heroParallax_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/70" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-slate-900/40" />
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(234,179,8,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <AnimatedSection animation="fade-down" delay={0} duration={600}>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-sm font-semibold tracking-wide">
                  Since 1978 &#183; Mumbai, India
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100} duration={700}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Certified <span className="text-emerald-400">Export</span> &{" "}
                <span className="text-amber-400">Trading</span> Company
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} duration={700}>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Your trusted partner for sourcing and exporting premium quality
                fresh fruits, vegetables, and consumer products from India to
                global markets for over four decades.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300} duration={700}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-base font-bold bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/40 hover:-translate-y-1 transition-all duration-300"
                >
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
                </button>

                <button
                  onClick={() => scrollTo("about")}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-base font-bold border-2 border-white/20 text-white hover:bg-white/10 hover:border-emerald-400 hover:-translate-y-1 transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
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
                </button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Stats/Badges */}
          <AnimatedSection animation="fade-left" delay={400} duration={700}>
            <div className="hidden lg:grid grid-cols-2 gap-5">
              {/* ISO Badge */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-10 h-10 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">
                  Govt Recognised
                </h3>
                <p className="text-slate-400 text-sm">Certified Export House</p>
              </div>

              {/* Experience Badge */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-10 h-10 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">46+ Years</h3>
                <p className="text-slate-400 text-sm">Of Experience</p>
              </div>

              {/* Operations Badge */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-10 h-10 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.6 9h16.8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.6 15h16.8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3a16.5 16.5 0 014.5 9 16.5 16.5 0 01-4.5 9 16.5 16.5 0 01-4.5-9A16.5 16.5 0 0112 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">
                  Global Reach
                </h3>
                <p className="text-slate-400 text-sm">
                  Middle East, Europe, Africa &amp; Asia
                </p>
              </div>

              {/* Products Badge */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500">
                <div className="flex justify-center mb-3">
                  <svg
                    className="w-10 h-10 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">
                  100+ Products
                </h3>
                <p className="text-slate-400 text-sm">Premium Quality Range</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Stats Bar */}
        <AnimatedSection animation="fade-up" delay={500} duration={700}>
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                { number: "46+", label: "Years Experience" },
                { number: "100+", label: "Products Exported" },
                { number: "20+", label: "Countries Served" },
                { number: "100%", label: "Quality Assured" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

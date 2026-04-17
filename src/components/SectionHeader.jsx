import AnimatedSection from "./AnimatedSection";

/**
 * SectionHeader – a beautiful, reusable section header with animated title,
 * subtitle, optional description, and decorative elements.
 *
 * Props
 * -----
 * @param {string} title       - The main heading text (h2).
 * @param {string} subtitle    - Smaller text shown below the title.
 * @param {string} description - Optional paragraph below the subtitle.
 * @param {string} className   - Additional CSS classes for the outer wrapper.
 * @param {boolean} centered   - Whether to center-align the text. Default true.
 * @param {number}  delay      - Animation delay in ms. Default 0.
 * @param {string} gradient    - Optional gradient class for title text.
 */
export default function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
  centered = true,
  delay = 0,
  gradient = "from-emerald-600 to-emerald-800",
}) {
  return (
    <AnimatedSection
      animation="fade-up"
      delay={delay}
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {/* Decorative elements */}
      {centered && (
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-linear-to-r from-transparent via-emerald-300 to-emerald-400" />
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-emerald-50 to-emerald-100 border border-emerald-200/60 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 animate-pulse" />
          </div>
          <div className="h-px w-16 bg-linear-to-l from-transparent via-emerald-300 to-emerald-400" />
        </div>
      )}

      {/* Title with linear text */}
      {title && (
        <h2
          className={`
            text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-5 tracking-tight
            relative inline-block
          `}
        >
          <span className={`relative z-10 ${gradient} bg-clip-text`}>
            {title}
          </span>
          {/* Text shadow effect */}
          <span
            className="absolute inset-0 bg-linear-to-r from-slate-200 to-slate-300 bg-clip-text blur-sm opacity-50"
            aria-hidden="true"
          >
            {title}
          </span>
        </h2>
      )}

      {/* Subtitle with decorative background */}
      {subtitle && (
        <div className="relative inline-block mb-6">
          <div
            className="absolute inset-0 bg-linear-to-r from-emerald-50 to-emerald-100/60 rounded-full opacity-60 blur-sm"
            aria-hidden="true"
          />
          <p className="relative inline-block px-6 py-2 text-sm font-bold bg-linear-to-r from-emerald-600 to-emerald-700 bg-clip-text uppercase tracking-widest">
            {subtitle}
          </p>
        </div>
      )}

      {/* Description with better typography */}
      {description && (
        <p className="relative text-lg md:text-xl text-slate-600 mt-6 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}

      {/* Optional bottom decorative line for centered layout */}
      {centered && (
        <div className="mt-10 flex items-center justify-center">
          <div className="h-1 w-24 rounded-full bg-linear-to-r from-emerald-500 via-amber-500 to-emerald-500 shadow-lg shadow-emerald-500/20" />
        </div>
      )}
    </AnimatedSection>
  );
}

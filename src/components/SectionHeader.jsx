import AnimatedSection from "./AnimatedSection";

/**
 * SectionHeader – a reusable section header with an animated title, subtitle,
 * and optional description.
 *
 * Props
 * -----
 * @param {string} title       - The main heading text (h2).
 * @param {string} subtitle    - Smaller text shown below the title.
 * @param {string} description - Optional paragraph below the subtitle.
 * @param {string} className   - Additional CSS classes for the outer wrapper.
 * @param {boolean} centered   - Whether to center-align the text. Default true.
 * @param {number}  delay      - Animation delay in ms. Default 0.
 */
export default function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
  centered = true,
  delay = 0,
}) {
  return (
    <AnimatedSection
      animation="fade-up"
      delay={delay}
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-slate-800 font-semibold text-base tracking-widest uppercase">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-lg md:text-xl text-slate-600 mt-4 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}

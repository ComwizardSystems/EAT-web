import useInView from "../hooks/useInView";

const animationMap = {
  "fade-up": "translate-y-12 opacity-0",
  "fade-down": "-translate-y-12 opacity-0",
  "fade-left": "-translate-x-12 opacity-0",
  "fade-right": "translate-x-12 opacity-0",
  fade: "opacity-0",
  scale: "opacity-0 scale-95",
  zoom: "opacity-0 scale-90",
};

const activeOverrides = {
  "fade-up": "translate-y-0 opacity-100",
  "fade-down": "translate-y-0 opacity-100",
  "fade-left": "translate-x-0 opacity-100",
  "fade-right": "translate-x-0 opacity-100",
  fade: "opacity-100",
  scale: "opacity-100 scale-100",
  zoom: "opacity-100 scale-100",
};

/**
 * AnimatedSection – a wrapper that animates its children when they enter
 * the viewport using an IntersectionObserver under the hood.
 *
 * Props
 * -----
 * @param {"fade-up"|"fade-down"|"fade-left"|"fade-right"|"fade"|"scale"|"zoom"} animation
 *   The animation direction/style. Default "fade-up".
 * @param {number} delay
 *   Transition delay in milliseconds. Default 0.
 * @param {number} duration
 *   Transition duration in milliseconds. Default 700.
 * @param {number} threshold
 *   IntersectionObserver threshold (0–1). Default 0.15.
 * @param {string} rootMargin
 *   IntersectionObserver root margin. Default "0px 0px -60px 0px".
 * @param {boolean} triggerOnce
 *   Whether to trigger only the first time. Default true.
 * @param {string} className
 *   Additional CSS classes for the outer wrapper.
 * @param {React.ReactNode} children
 *   The content to render inside the animated container.
 * @param {string} as
 *   The HTML element or component to render as. Default "div".
 */
export default function AnimatedSection({
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
  className = "",
  children,
  as = "div",
  ...rest
}) {
  const { ref, inView } = useInView({ threshold, rootMargin, triggerOnce });

  const hiddenClasses = animationMap[animation] ?? animationMap["fade-up"];
  const activeClasses =
    activeOverrides[animation] ?? activeOverrides["fade-up"];

  const Element = as;

  return (
    <Element
      ref={ref}
      className={`
        transition-all ease-out
        ${inView ? activeClasses : hiddenClasses}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Element>
  );
}

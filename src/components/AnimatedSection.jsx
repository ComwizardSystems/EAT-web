import React from "react";
import useInView from "../hooks/useInView";

/**
 * AnimatedSection – a beautiful, reusable wrapper that animates its children
 * when they enter the viewport using IntersectionObserver under the hood.
 *
 * Features enhanced animations, smooth transitions, and visual effects.
 *
 * Props
 * -----
 * @param {"fade-up"|"fade-down"|"fade-left"|"fade-right"|"fade"|"scale"|"zoom"|"slide-up"|"slide-down"|"slide-left"|"slide-right"|"rotate"|"flip"|"elastic"} animation
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
 * @param {number} stagger
 *   Stagger delay for child elements in milliseconds. Default 0.
 * @param {"ease"|"ease-in"|"ease-out"|"ease-in-out"|"linear"|"spring"|"bounce"} easing
 *   The easing function for the animation. Default "ease-out".
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
  stagger = 0,
  easing = "ease-out",
  ...rest
}) {
  const { ref, inView } = useInView({ threshold, rootMargin, triggerOnce });

  const hiddenClasses = getHiddenClasses(animation);
  const activeClasses = getActiveClasses(animation);

  // Custom easing functions
  const easingFunctions = {
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    linear: "linear",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  };

  const Element = as;

  return (
    <Element
      ref={ref}
      className={`
        transition-all ${easingFunctions[easing]}
        ${inView ? activeClasses : hiddenClasses}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {stagger > 0
        ? React.Children.map(children, (child, index) => (
            <div
              key={index}
              style={{
                transitionDelay: `${delay + index * stagger}ms`,
                transitionDuration: `${duration}ms`,
                transitionTimingFunction: easingFunctions[easing],
              }}
              className={`
                transition-all
                ${inView ? activeClasses : hiddenClasses}
              `}
            >
              {child}
            </div>
          ))
        : children}
    </Element>
  );
}

/* Helper Functions */

function getHiddenClasses(animation) {
  const animationMap = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-down": "-translate-y-12 opacity-0",
    "fade-left": "-translate-x-12 opacity-0",
    "fade-right": "translate-x-12 opacity-0",
    fade: "opacity-0",
    scale: "opacity-0 scale-95",
    zoom: "opacity-0 scale-90",
    "slide-up": "translate-y-20 opacity-0",
    "slide-down": "-translate-y-20 opacity-0",
    "slide-left": "-translate-x-20 opacity-0",
    "slide-right": "translate-x-20 opacity-0",
    rotate: "opacity-0 -rotate-3 scale-95",
    flip: "opacity-0 rotate-y-180",
    elastic: "opacity-0 scale-80",
  };
  return animationMap[animation] ?? animationMap["fade-up"];
}

function getActiveClasses(animation) {
  const animationMap = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-down": "translate-y-0 opacity-100",
    "fade-left": "translate-x-0 opacity-100",
    "fade-right": "translate-x-0 opacity-100",
    fade: "opacity-100",
    scale: "opacity-100 scale-100",
    zoom: "opacity-100 scale-100",
    "slide-up": "translate-y-0 opacity-100",
    "slide-down": "translate-y-0 opacity-100",
    "slide-left": "translate-x-0 opacity-100",
    "slide-right": "translate-x-0 opacity-100",
    rotate: "opacity-0 rotate-0 scale-100",
    flip: "opacity-100 rotate-y-0",
    elastic: "opacity-100 scale-100",
  };
  return animationMap[animation] ?? animationMap["fade-up"];
}

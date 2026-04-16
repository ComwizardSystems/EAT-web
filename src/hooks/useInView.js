import { useState, useEffect, useRef } from "react";

/**
 * Custom hook that tracks whether an element is in the viewport.
 *
 * @param {Object}  options
 * @param {number}  options.threshold   - Visibility percentage (0–1) to trigger. Default 0.15.
 * @param {string}  options.rootMargin  - Root margin string. Default "0px 0px -60px 0px".
 * @param {boolean} options.triggerOnce - If true, observation stops after the first trigger. Default true.
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}

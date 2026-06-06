import { useEffect, useRef, useState } from "react";

/*
  Scroll-into-view helpers — lightweight, dependency-free.
  IntersectionObserver toggles a class so elements animate in as you scroll.
  All effects degrade gracefully (and are disabled for prefers-reduced-motion
  via CSS in index.css).
*/

export function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

/* Wrap anything to fade + rise into view. `delay` (ms) staggers siblings. */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 26,
  className = "",
  children,
  ...props
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`sr ${inView ? "sr-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, "--sr-y": `${y}px` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

/* Animated number that counts up the first time it scrolls into view. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1700,
  className = "",
}) {
  const [ref, inView] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (typeof requestAnimationFrame === "undefined") {
      setVal(to);
      return;
    }
    let raf;
    let startTs;
    const step = (ts) => {
      if (startTs === undefined) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

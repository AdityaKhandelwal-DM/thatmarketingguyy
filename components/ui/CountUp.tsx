"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string; // e.g. "50+", "₹0", "5.8×", "1,200+"
  duration?: number;
  className?: string;
}

/**
 * Animated stat counter. Server-renders the final value (SEO/no-JS safe),
 * then counts up from 0 when scrolled into view. Non-numeric values ("—")
 * and reduced-motion users get the static value.
 */
export default function CountUp({ value, duration = 900, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const m = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!el || !m) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;

    const [, prefix, numStr, suffix] = m;
    const hasComma = numStr.includes(",");
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = (numStr.split(".")[1] || "").length;
    if (target === 0) return;

    const fmt = (n: number) => {
      let s = n.toFixed(decimals);
      if (hasComma) {
        const [i, d] = s.split(".");
        s = Number(i).toLocaleString("en-IN") + (d ? "." + d : "");
      }
      return prefix + s + suffix;
    };

    setDisplay(fmt(0));
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          setDisplay(fmt(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Global scroll-reveal driver. Mounted once in the root layout; finds every
 * `.reveal` element on the page and adds `.in` when it enters the viewport.
 * Falls back to showing everything immediately when IntersectionObserver is
 * unavailable or the user prefers reduced motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (!els.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      // threshold must stay 0: sections are routinely taller than a phone
      // viewport, and any positive threshold can never be met by an element
      // taller than screen/threshold, leaving it invisible forever.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Safety net: anything still hidden after 1.2s gets shown regardless.
    // Nothing should ever be permanently invisible because of an animation.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 1.5) el.classList.add("in");
      });
    }, 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [pathname]);

  return null;
}

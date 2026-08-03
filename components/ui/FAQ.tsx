"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  /** section heading; defaults suit most pages */
  title?: string;
  eyebrow?: string;
  /** alternate background band */
  light?: boolean;
}

/**
 * FAQ accordion + FAQPage JSON-LD in one. The schema is generated from the
 * same items array that renders, so the markup and the structured data can
 * never drift apart — a Google requirement for FAQ rich results.
 */
export default function FAQ({
  items,
  title = "Questions I get asked a lot",
  eyebrow = "Straight answers",
  light = false,
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  // Answers may contain markdown links [text](/path) — rendered as real <a>,
  // stripped to plain text for the JSON-LD.
  const strip = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
  const renderAnswer = (s: string) => {
    const parts = s.split(/(\[[^\]]+\]\([^)]+\))/g);
    return parts.map((p, i) => {
      const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      return m ? (
        <a key={i} href={m[2]} className="text-primary font-medium underline underline-offset-2 hover:text-primary-dark">
          {m[1]}
        </a>
      ) : (
        p
      );
    });
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: strip(i.a) },
    })),
  };

  return (
    <section className={cn("py-10 md:py-16", light && "bg-bg-light")}>
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-[640px] mb-6 md:mb-9 reveal">
          <span className="eyebrow block mb-4">{eyebrow}</span>
          <h2 className="text-[clamp(22px,3.2vw,38px)] font-bold text-text-primary">{title}</h2>
        </div>

        <div className="max-w-[820px] flex flex-col gap-3 reveal">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={cn(
                  "bg-white border rounded-card shadow-card transition-colors duration-[250ms]",
                  isOpen ? "border-primary/40" : "border-border"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5 cursor-pointer"
                >
                  <span className="font-semibold text-text-primary text-[15px] md:text-[16px] leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-primary flex-none transition-transform duration-[250ms]",
                      isOpen && "rotate-180"
                    )}
                    strokeWidth={2}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 md:px-6 pb-5 text-[14px] md:text-[15px] text-text-secondary leading-[1.75] max-w-[70ch]">
                    {renderAnswer(item.a)}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </section>
  );
}

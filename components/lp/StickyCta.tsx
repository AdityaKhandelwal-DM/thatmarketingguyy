"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, MessageCircle } from "lucide-react";

interface StickyCtaProps {
  bookingUrl: string;
  whatsappUrl: string;
}

/**
 * Mobile-only persistent CTA. Appears once the hero CTA has scrolled away, so
 * the page never has a moment where the only action is off-screen. Hidden on
 * desktop, where the CTA repeats often enough down the page.
 */
export default function StickyCta({ bookingUrl, whatsappUrl }: StickyCtaProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-border px-3 py-2.5 flex items-center gap-2.5 transition-transform duration-[250ms] ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="sticky-booking"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold text-[15px] px-5 py-3.5 rounded-btn"
      >
        <CalendarCheck className="w-[18px] h-[18px]" strokeWidth={2} />
        Book free audit
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp"
        data-cta="sticky-whatsapp"
        className="flex-none w-[52px] h-[52px] rounded-btn border-2 border-primary text-primary flex items-center justify-center"
      >
        <MessageCircle className="w-[22px] h-[22px]" strokeWidth={2} />
      </a>
    </div>
  );
}

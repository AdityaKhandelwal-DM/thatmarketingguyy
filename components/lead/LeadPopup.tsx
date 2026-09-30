"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import LeadForm from "@/components/lead/LeadForm";
import { WhatsAppLogo } from "@/components/ui/BrandLogos";
import { OPEN_LEAD_FORM_EVENT, whatsappUrl } from "@/lib/contact";

/*
 * Site-wide lead capture, mounted once in the root layout:
 *
 * 1. Popup lead form. Opens by itself on every page EXCEPT blog posts
 *    (/blog/<slug> — those point readers to /contact instead) and /contact
 *    (which already shows the form). It waits for a real signal of interest,
 *    AUTO_OPEN_MS on the page or AUTO_OPEN_SCROLL of it scrolled, rather
 *    than covering the page on load: Google demotes pages whose content is
 *    hidden behind an instant popup, especially on mobile. Shown once per
 *    browser session; closing it means it stays closed.
 *    Any button can also open it with openLeadForm() from lib/contact.
 *
 * 2. Floating WhatsApp button, bottom-right on every page (except /uae
 *    landing pages, which already have their own sticky WhatsApp bar).
 */

const AUTO_OPEN_MS = 8000;
const AUTO_OPEN_SCROLL = 0.35;
const SEEN_KEY = "tmg_lead_popup_seen";

function autoOpenAllowed(path: string) {
  if (path === "/contact") return false;
  if (path.startsWith("/blog/")) return false;
  if (path.startsWith("/uae")) return false; // campaign landing pages have their own CTAs
  return true;
}

function seen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {}
}

export default function LeadPopup() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const show = useCallback(() => {
    markSeen();
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  // Manual open from any button
  useEffect(() => {
    window.addEventListener(OPEN_LEAD_FORM_EVENT, show);
    return () => window.removeEventListener(OPEN_LEAD_FORM_EVENT, show);
  }, [show]);

  // Automatic open (time on page or scroll depth), once per session
  useEffect(() => {
    if (!autoOpenAllowed(pathname) || seen()) return;
    const timer = window.setTimeout(show, AUTO_OPEN_MS);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= AUTO_OPEN_SCROLL) show();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname, show]);

  // Esc to close, lock page scroll behind the modal, focus the first field
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <>
      {!pathname.startsWith("/uae") && (
      <a
        href={whatsappUrl("Hi Aditya, I found you on thatmarketingguyy.com and want to talk about my ads.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aditya on WhatsApp"
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full shadow-[0_8px_24px_rgba(15,23,42,.22)] hover:scale-105 transition-transform duration-[250ms]"
      >
        <WhatsAppLogo className="w-14 h-14" />
      </a>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[70] bg-text-primary/60 flex items-end sm:items-center justify-center sm:p-6"
          onClick={close}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full sm:max-w-[560px] max-h-[92vh] overflow-y-auto rounded-t-[22px] sm:rounded-[22px] shadow-card animate-fadeInUp"
          >
            <div className="sticky top-0 bg-white px-5 sm:px-7 pt-6 pb-4 border-b border-border flex items-start justify-between gap-4 z-10">
              <div>
                <span className="eyebrow block mb-2">Let&apos;s talk</span>
                <h2 id="lead-popup-title" className="text-[20px] sm:text-[22px] font-bold text-text-primary leading-snug">
                  Tell me about your ads
                </h2>
                <p className="text-[13px] text-text-secondary mt-1">I read every message myself and reply on WhatsApp or email.</p>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="w-9 h-9 rounded-full hover:bg-bg-light flex items-center justify-center flex-none cursor-pointer"
              >
                <X className="w-5 h-5 text-text-secondary" strokeWidth={2} />
              </button>
            </div>
            <div className="px-5 sm:px-7 py-5">
              <LeadForm compact />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

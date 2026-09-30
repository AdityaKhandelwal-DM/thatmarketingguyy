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
 * 1. Popup lead form. NEVER opens by itself (owner's rule: no forcing a form
 *    on someone who is just reading). It opens only when a visitor clicks to
 *    get in touch: any link to /contact ("Work with me", "Tell me about your
 *    ads", "Contact"…) is intercepted and shows the form in place. Links keep
 *    href="/contact", so crawlers and no-JS visitors still reach the page.
 *    Not intercepted on blog posts (they send readers to /contact as an
 *    internal link), on /contact itself, on /uae campaign pages, or on
 *    ctrl/cmd/middle-click (open in new tab still works).
 *    Buttons that aren't links can call openLeadForm() from lib/contact.
 *
 * 2. Floating WhatsApp button, bottom-right on every page (except /uae
 *    landing pages, which already have their own sticky WhatsApp bar).
 */

function interceptAllowed(path: string) {
  if (path === "/contact") return false;
  if (path.startsWith("/blog/")) return false;
  if (path.startsWith("/uae")) return false;
  return true;
}

export default function LeadPopup() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const show = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  // Open from any button via openLeadForm()
  useEffect(() => {
    window.addEventListener(OPEN_LEAD_FORM_EVENT, show);
    return () => window.removeEventListener(OPEN_LEAD_FORM_EVENT, show);
  }, [show]);

  // Open when a visitor clicks a /contact link. Capture phase, so it runs
  // before next/link, which then sees defaultPrevented and doesn't navigate.
  useEffect(() => {
    if (!interceptAllowed(pathname)) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/contact") return;
      e.preventDefault();
      show();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, show]);

  // Esc to close, lock page scroll behind the modal, move focus into the
  // dialog (not an input, which would pop the keyboard up on phones)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
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
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full sm:max-w-[560px] max-h-[92vh] overflow-y-auto outline-none rounded-t-[22px] sm:rounded-[22px] shadow-card animate-fadeInUp"
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

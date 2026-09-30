"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// "Services" replaces "Learn" while the site is focused on winning clients
// (the learning offer returns ~Apr 2027; /learn stays linked from the footer).
const services = [
  { label: "Facebook Ads Expert", href: "/facebook-ads-expert", desc: "Facebook, Instagram & WhatsApp ads" },
  { label: "Google Ads Expert",   href: "/google-ads-expert",   desc: "Search, Maps, Performance Max & YouTube" },
];

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/facebook-ads-expert", children: services },
  { label: "Results",  href: "/results" },
  { label: "Free PDFs", href: "/resources" },
  { label: "Blog",     href: "/blog" },
  { label: "About",    href: "/about" },
  { label: "Careers",  href: "/careers" },
  { label: "Contact",  href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-border transition-shadow duration-[250ms]",
        scrolled && "shadow-[0_2px_16px_rgba(15,23,42,.06)]"
      )}
    >
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="flex items-center justify-between h-[68px] gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 flex-none group" aria-label="thatmarketingguy — Aditya Khandelwal, home">
            <span className="w-[10px] h-[10px] rounded-full bg-primary flex-none" />
            <span className="flex flex-col leading-none">
              <span className="font-sans font-bold text-[17px] sm:text-[19px] text-text-primary">
                thatmarketing<b className="text-primary">guy</b>
              </span>
              {/* Real name carries the professional weight; hidden on the
                  narrowest phones so the nav never wraps. */}
              <span className="hidden min-[380px]:block text-[10.5px] sm:text-[11px] tracking-[.04em] text-text-secondary mt-1">
                Aditya Khandelwal
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) =>
              l.children ? (
                // Hover or keyboard focus opens the menu; no JS state needed.
                <div key={l.label} className="relative group">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className={cn(
                      "inline-flex items-center gap-1 text-[13.5px] font-medium text-text-primary transition-opacity duration-[250ms] cursor-pointer",
                      l.children.some((c) => c.href === pathname)
                        ? "opacity-100 text-primary font-semibold"
                        : "opacity-75 hover:opacity-100 group-focus-within:opacity-100"
                    )}
                  >
                    {l.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-[250ms] group-hover:rotate-180 group-focus-within:rotate-180" strokeWidth={2.25} />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity duration-[200ms]">
                    <div className="w-[280px] bg-white border border-border rounded-card shadow-card p-2">
                      {l.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={cn(
                            "block rounded-btn px-3.5 py-3 hover:bg-bg-light transition-colors duration-[200ms]",
                            pathname === c.href && "bg-bg-light"
                          )}
                        >
                          <span className="block text-[14px] font-semibold text-text-primary">{c.label}</span>
                          <span className="block text-[12px] text-text-secondary mt-0.5">{c.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-[13.5px] font-medium text-text-primary transition-opacity duration-[250ms]",
                    pathname === l.href
                      ? "opacity-100 text-primary font-semibold"
                      : "opacity-75 hover:opacity-100"
                  )}
                >
                  {l.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-none">
            <Link
              href="/contact"
              className="inline-flex items-center font-sans font-semibold text-[14px] px-5 py-3 rounded-btn bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 transition-all duration-[250ms]"
            >
              Work with me
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-2 -mr-1"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cn("w-5 h-[2px] bg-text-primary rounded block transition-all duration-300", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("w-5 h-[2px] bg-text-primary rounded block transition-all duration-300", open && "opacity-0")} />
            <span className={cn("w-5 h-[2px] bg-text-primary rounded block transition-all duration-300", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((l) =>
            l.children ? (
              <div key={l.label} className="py-3 border-b border-border">
                <span className="block text-[11px] tracking-[.08em] uppercase text-text-muted mb-1">{l.label}</span>
                {l.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2 pl-3 text-[15px]",
                      pathname === c.href ? "text-primary font-semibold" : "text-text-primary"
                    )}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 text-[15px] border-b border-border last:border-none",
                  pathname === l.href
                    ? "text-primary font-semibold"
                    : "text-text-primary"
                )}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center items-center font-sans font-semibold text-[15px] px-6 py-3.5 rounded-btn bg-primary text-white"
          >
            Work with me
          </Link>
        </div>
      )}
    </header>
  );
}

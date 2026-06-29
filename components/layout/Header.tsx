"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Results",   href: "/results" },
  { label: "Free PDFs", href: "/resources" },
  { label: "Learn",     href: "/learn" },
  { label: "Blog",      href: "/blog" },
  { label: "About",     href: "/about" },
  { label: "Careers",   href: "/careers" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-cream border-b border-dark/10 transition-shadow duration-300",
        scrolled && "shadow-[0_1px_24px_rgba(13,13,13,.08)]"
      )}
    >
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="flex items-center justify-between h-[60px] gap-6">

          {/* Brand wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-extrabold text-[17px] sm:text-[19px] text-dark flex-none group"
          >
            <span className="relative flex-none">
              <span className="w-[9px] h-[9px] rounded-full bg-ember block" />
              <span className="w-[9px] h-[9px] rounded-full bg-ember/30 block absolute inset-0 scale-150 group-hover:scale-[2.5] transition-transform duration-500 opacity-0 group-hover:opacity-100" />
            </span>
            thatmarketing<span className="text-ember">guy</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "font-sans text-[13.5px] font-medium transition-all duration-150 relative",
                  pathname === l.href
                    ? "text-ember"
                    : "text-ink/60 hover:text-dark"
                )}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-ember rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-none">
            <Link
              href="/contact"
              className="font-sans font-semibold text-[13.5px] px-5 py-2.5 rounded-full bg-dark text-white hover:bg-ember transition-colors duration-200"
            >
              Let&apos;s talk →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-2 -mr-1 flex-none"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cn("w-5 h-[1.5px] bg-dark rounded block transition-all duration-300", open && "translate-y-[6.5px] rotate-45")} />
            <span className={cn("w-5 h-[1.5px] bg-dark rounded block transition-all duration-300", open && "opacity-0")} />
            <span className={cn("w-5 h-[1.5px] bg-dark rounded block transition-all duration-300", open && "-translate-y-[6.5px] -rotate-45")} />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-cream border-t border-dark/10 px-4 py-2 flex flex-col">
          {[{ label: "Home", href: "/" }, ...navLinks].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-3.5 text-[15px] border-b border-dark/[.06] last:border-none",
                pathname === l.href ? "text-ember font-semibold" : "text-ink"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 mb-2 flex justify-center items-center font-sans font-semibold text-[15px] px-6 py-3.5 rounded-full bg-dark text-white"
          >
            Let&apos;s talk →
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Results", href: "/results" },
  { label: "Free PDFs", href: "/resources" },
  { label: "Learn", href: "/learn" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm/85 backdrop-blur-[14px] border-b border-ink/10">
      <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
        <nav className="flex items-center justify-between h-[70px] gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display font-extrabold text-[19px] text-navy flex-none"
          >
            <span className="w-[11px] h-[11px] rounded-full bg-orange shadow-[0_0_0_4px_rgba(205,141,67,.18)] flex-none" />
            thatmarketing<b className="text-orange">guy</b>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[14.5px] font-medium text-navy transition-opacity",
                  pathname === l.href
                    ? "opacity-100 text-orange font-semibold"
                    : "opacity-80 hover:opacity-100"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3.5 flex-none">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 font-display font-bold text-[15px] px-6 py-3.5 rounded-full bg-orange text-white shadow-[0_6px_18px_rgba(205,141,67,.30)] hover:bg-orange-700 hover:-translate-y-0.5 transition-all"
            >
              Get the free guides
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-navy rounded transition-transform duration-250",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-navy rounded transition-opacity duration-250",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-navy rounded transition-transform duration-250",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden flex flex-col border-b border-ink/10 pb-5 gap-0.5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3.5 text-base border-b border-ink/10",
                  pathname === l.href ? "text-orange font-semibold" : "text-navy"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/resources"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center items-center gap-2 font-display font-bold text-[15px] px-6 py-3.5 rounded-full bg-orange text-white"
            >
              Get the free guides
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

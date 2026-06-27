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
    <header className="sticky top-0 z-50 bg-warm/90 backdrop-blur-[14px] border-b border-ink/10">
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-extrabold text-[17px] sm:text-[19px] text-navy flex-none"
          >
            <span className="w-[10px] h-[10px] rounded-full bg-orange shadow-[0_0_0_3px_rgba(205,141,67,.18)] flex-none" />
            thatmarketing<b className="text-orange">guy</b>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[13.5px] font-medium text-navy transition-opacity",
                  pathname === l.href
                    ? "opacity-100 text-orange font-semibold"
                    : "opacity-75 hover:opacity-100"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-none">
            <Link
              href="/resources"
              className="inline-flex items-center font-display font-bold text-[14px] px-5 py-3 rounded-full bg-orange text-white shadow-[0_4px_14px_rgba(205,141,67,.30)] hover:bg-orange-700 hover:-translate-y-0.5 transition-all"
            >
              Get the free guides
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-2 -mr-1"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={cn("w-5 h-[2px] bg-navy rounded block transition-all duration-300", open && "translate-y-[7px] rotate-45")} />
            <span className={cn("w-5 h-[2px] bg-navy rounded block transition-all duration-300", open && "opacity-0")} />
            <span className={cn("w-5 h-[2px] bg-navy rounded block transition-all duration-300", open && "-translate-y-[7px] -rotate-45")} />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-warm border-t border-ink/10 px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "py-3 text-[15px] border-b border-ink/[.07] last:border-none",
                pathname === l.href
                  ? "text-orange font-semibold"
                  : "text-navy"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/resources"
            onClick={() => setOpen(false)}
            className="mt-3 flex justify-center items-center font-display font-bold text-[15px] px-6 py-3.5 rounded-full bg-orange text-white shadow-[0_4px_14px_rgba(205,141,67,.30)]"
          >
            Get the free guides
          </Link>
        </div>
      )}
    </header>
  );
}

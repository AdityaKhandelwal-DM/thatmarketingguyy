"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Results",  href: "/results" },
  { label: "Free PDFs", href: "/resources" },
  { label: "Learn",    href: "/learn" },
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
        <nav className="flex items-center justify-between h-16 gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-sans font-bold text-[17px] sm:text-[19px] text-text-primary flex-none"
          >
            <span className="w-[10px] h-[10px] rounded-full bg-primary flex-none" />
            thatmarketing<b className="text-primary">guy</b>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
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
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center flex-none">
            <Link
              href="/resources"
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
          {navLinks.map((l) => (
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
          ))}
          <Link
            href="/resources"
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

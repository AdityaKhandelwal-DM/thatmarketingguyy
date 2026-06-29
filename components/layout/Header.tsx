"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Results",   href: "/results"   },
  { label: "Free PDFs", href: "/resources" },
  { label: "Learn",     href: "/learn"     },
  { label: "Blog",      href: "/blog"      },
  { label: "About",     href: "/about"     },
];

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_0_#E2E8F0]" : ""
      }`}
    >
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14">

        {/* Logo */}
        <Link
          href="/"
          className="font-sans font-bold text-[15px] text-text tracking-tight hover:text-secondary transition-colors"
        >
          thatmarketingguy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14px] transition-colors duration-150 ${
                path === l.href
                  ? "text-text font-semibold"
                  : "text-secondary hover:text-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center text-[14px] font-semibold bg-text text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Let&apos;s talk
          </Link>
          <button
            className="md:hidden p-1.5 text-secondary hover:text-text transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg">
          <nav className="flex flex-col px-4 py-3 gap-0.5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-[15px] transition-colors ${
                  path === l.href
                    ? "bg-surface-alt text-text font-semibold"
                    : "text-secondary hover:text-text hover:bg-surface-alt"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-3 py-2.5 rounded-lg text-[15px] font-semibold bg-text text-white text-center hover:bg-slate-800 transition-colors"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

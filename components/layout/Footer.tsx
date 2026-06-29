import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-12 md:pt-14 pb-8">
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
        {/* Brand row on mobile — full width */}
        <div className="mb-8">
          <div className="font-display font-extrabold text-xl text-white mb-2">
            thatmarketing<b className="text-orange">guy</b>
          </div>
          <p className="text-sm max-w-[300px] mb-2">
            Marketing, finally made clear. Performance marketing for SME owners — no agency required.
          </p>
          <p className="text-[13px] font-mono text-orange">Aditya Khandelwal</p>
        </div>

        {/* Links grid — 3 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col gap-2.5">
            <h5 className="text-[11px] sm:text-[13px] text-white uppercase tracking-[.08em] font-mono font-medium mb-0.5">
              Explore
            </h5>
            {[
              { label: "Results",   href: "/results" },
              { label: "Free PDFs", href: "/resources" },
              { label: "Learn",     href: "/learn" },
              { label: "Blog",      href: "/blog" },
              { label: "Careers",   href: "/careers" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[13px] sm:text-sm opacity-70 hover:opacity-100 hover:text-mint transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <h5 className="text-[11px] sm:text-[13px] text-white uppercase tracking-[.08em] font-mono font-medium mb-0.5">
              Products
            </h5>
            {[
              { label: "₹99 Blueprints",    href: "/learn" },
              { label: "₹999 Masterclass",  href: "/learn" },
              { label: "Free guides",        href: "/resources" },
              { label: "Workshops",          href: "/#workshops" },
              { label: "About",             href: "/about" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[13px] sm:text-sm opacity-70 hover:opacity-100 hover:text-mint transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <h5 className="text-[11px] sm:text-[13px] text-white uppercase tracking-[.08em] font-mono font-medium mb-0.5">
              Connect
            </h5>
            {[
              { label: "Instagram", href: "#" },
              { label: "YouTube",   href: "#" },
              { label: "LinkedIn",  href: "#" },
              { label: "Contact",   href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[13px] sm:text-sm opacity-70 hover:opacity-100 hover:text-mint transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row sm:justify-between gap-1.5 text-[12px] sm:text-[13px] text-white/50">
          <span>© {new Date().getFullYear()} thatmarketingguy · Aditya Khandelwal · Jaipur</span>
          <span className="font-mono">thatmarketingguy.in</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 pt-14 md:pt-20 pb-8">
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-16 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-[300px]">
            <div className="font-display font-extrabold text-[22px] text-white mb-3">
              thatmarketing<span className="text-ember">guy</span>
            </div>
            <p className="text-[14px] leading-relaxed mb-4">
              Marketing, finally made clear. Performance marketing for SME owners — no agency required.
            </p>
            <p className="font-mono text-[12px] text-ember">Aditya Khandelwal · Jaipur</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-2.5">
              <h5 className="font-mono text-[10px] tracking-[.14em] uppercase text-white/40 mb-2">
                Explore
              </h5>
              {[
                { label: "Results",   href: "/results" },
                { label: "Free PDFs", href: "/resources" },
                { label: "Learn",     href: "/learn" },
                { label: "Blog",      href: "/blog" },
                { label: "Careers",   href: "/careers" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[13px] text-white/50 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h5 className="font-mono text-[10px] tracking-[.14em] uppercase text-white/40 mb-2">
                Products
              </h5>
              {[
                { label: "₹99 Blueprints",   href: "/learn" },
                { label: "₹999 Masterclass", href: "/learn" },
                { label: "Free guides",       href: "/resources" },
                { label: "Workshops",         href: "/#workshops" },
                { label: "About",             href: "/about" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[13px] text-white/50 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h5 className="font-mono text-[10px] tracking-[.14em] uppercase text-white/40 mb-2">
                Connect
              </h5>
              {[
                { label: "Instagram", href: "#" },
                { label: "YouTube",   href: "#" },
                { label: "LinkedIn",  href: "#" },
                { label: "Contact",   href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-[13px] text-white/50 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1.5 text-[12px] text-white/30 font-mono">
          <span>© {new Date().getFullYear()} thatmarketingguy · All rights reserved</span>
          <span>thatmarketingguy.in</span>
        </div>
      </div>
    </footer>
  );
}

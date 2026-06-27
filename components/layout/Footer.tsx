import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-[clamp(40px,5vw,54px)] pb-8">
      <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 mb-9">
          <div>
            <div className="font-display font-extrabold text-xl text-white mb-3">
              thatmarketing<b className="text-orange">guy</b>
            </div>
            <p className="text-sm max-w-[280px] mb-2.5">
              Marketing, finally made clear. Performance marketing for SME owners — no agency required.
            </p>
            <p className="text-[13px] font-mono text-orange">Aditya Khandelwal</p>
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="text-[13px] text-white uppercase tracking-[.08em] font-mono font-medium mb-1">
              Explore
            </h5>
            {[
              { label: "Results", href: "/results" },
              { label: "Free PDFs", href: "/resources" },
              { label: "Learn", href: "/learn" },
              { label: "Blog", href: "/blog" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm opacity-70 hover:opacity-100 hover:text-mint transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="text-[13px] text-white uppercase tracking-[.08em] font-mono font-medium mb-1">
              Products
            </h5>
            {[
              { label: "₹99 Blueprints", href: "/learn" },
              { label: "₹999 Masterclass", href: "/learn" },
              { label: "Free guides", href: "/resources" },
              { label: "About", href: "/about" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm opacity-70 hover:opacity-100 hover:text-mint transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <h5 className="text-[13px] text-white uppercase tracking-[.08em] font-mono font-medium mb-1">
              Connect
            </h5>
            {[
              { label: "Instagram", href: "#" },
              { label: "YouTube", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm opacity-70 hover:opacity-100 hover:text-mint transition-opacity"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-2.5 text-[13px]">
          <span>© {new Date().getFullYear()} thatmarketingguy · Aditya Khandelwal · Jaipur</span>
          <span className="font-mono">thatmarketingguy.in</span>
        </div>
      </div>
    </footer>
  );
}

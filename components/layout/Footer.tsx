import Link from "next/link";

const links = {
  Learn: [
    { label: "Free PDFs",   href: "/resources" },
    { label: "Blueprints",  href: "/learn"      },
    { label: "Masterclass", href: "/learn"      },
    { label: "Workshops",   href: "/learn"      },
  ],
  Work: [
    { label: "Results",  href: "/results"  },
    { label: "About",    href: "/about"    },
    { label: "Careers",  href: "/careers"  },
    { label: "Contact",  href: "/contact"  },
  ],
  Read: [
    { label: "Blog",       href: "/blog"    },
    { label: "Instagram",  href: "#"        },
    { label: "YouTube",    href: "#"        },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border mt-0">
      <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-10 md:gap-8">

          {/* Brand */}
          <div>
            <Link href="/" className="font-bold text-[15px] text-text hover:text-secondary transition-colors block mb-3">
              thatmarketingguy
            </Link>
            <p className="text-[13px] text-secondary leading-relaxed max-w-[220px]">
              Performance marketing for local businesses — no agency jargon.
            </p>
            <p className="text-[12px] text-muted mt-4">Jaipur, India</p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[11px] font-semibold tracking-[.1em] uppercase text-muted mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14px] text-secondary hover:text-text transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[12px] text-muted">
            © {new Date().getFullYear()} thatmarketingguy. All rights reserved.
          </p>
          <p className="text-[12px] text-muted">
            Built without agency jargon.
          </p>
        </div>
      </div>
    </footer>
  );
}

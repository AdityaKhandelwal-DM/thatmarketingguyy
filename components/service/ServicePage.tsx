import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import FAQ, { type FAQItem } from "@/components/ui/FAQ";
import BreadcrumbLd from "@/components/ui/BreadcrumbLd";
import { Check, type LucideIcon } from "lucide-react";

/*
 * Shared layout for the hire-intent service pages (/facebook-ads-expert,
 * /google-ads-expert). Each route passes its own copy and numbers; this file
 * owns only structure, so the two pages can't drift apart visually.
 *
 * Numbers passed in must come from /results (Ads API pulls and exports).
 * Case rows are single campaigns, not account totals — same rule as /results.
 */

const BASE = "https://www.thatmarketingguyy.com";

export interface ServiceCase {
  name: string;
  what: string;
  metrics: { k: string; v: string; sub?: string; highlight?: boolean }[];
}

export interface ServicePageProps {
  path: string;
  crumb: string;
  eyebrow: string;
  /** H1 — must contain the page's target keyword */
  title: React.ReactNode;
  intro: string;
  heroImg: string;
  heroAlt: string;
  PlatformLogo: React.ComponentType<{ className?: string }>;
  platformName: string;
  stats: { k: string; v: string; sub?: string }[];
  statsNote: string;
  services: { icon: LucideIcon; title: string; desc: string }[];
  cases: ServiceCase[];
  casesNote: string;
  remote: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  faqs: FAQItem[];
  sibling: { href: string; label: string };
  serviceLd: { name: string; serviceType: string; description: string };
}

export default function ServicePage(p: ServicePageProps) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.serviceLd.name,
    serviceType: p.serviceLd.serviceType,
    description: p.serviceLd.description,
    url: `${BASE}${p.path}`,
    provider: {
      "@type": "Person",
      name: "Aditya Khandelwal",
      jobTitle: "Performance Marketing Consultant",
      url: BASE,
    },
    areaServed: ["United States", "United Kingdom", "United Arab Emirates", "Australia", "Singapore", "India"].map(
      (name) => ({ "@type": "Country", name })
    ),
  };

  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
            <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link> / {p.crumb}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <span className="eyebrow block mb-5">{p.eyebrow}</span>
              <h1 className="text-[clamp(28px,4.5vw,54px)] font-bold text-text-primary leading-[1.08]">
                {p.title}
              </h1>
              <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[600px] leading-[1.7]">
                {p.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button href="/contact">Tell me about your ads</Button>
                <Button href="/results" variant="secondary">See the results</Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
              <Media
                src={p.heroImg}
                alt={p.heroAlt}
                className="aspect-[4/3] rounded-[22px] shadow-card"
                sizes="(max-width: 1024px) 90vw, 480px"
                priority
              />
              <div className="absolute -bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-card border border-border flex items-center gap-3">
                <p.PlatformLogo className="w-7 h-7" />
                <div>
                  <div className="text-[10px] tracking-[.06em] uppercase text-text-muted">Specialist in</div>
                  <div className="text-[15px] font-bold text-text-primary">{p.platformName}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-12 md:mt-14">
            {p.stats.map((s) => (
              <div key={s.k} className="bg-white border border-border rounded-xl px-4 py-3.5">
                <div className="text-[10px] tracking-[.06em] uppercase text-text-muted">{s.k}</div>
                <div className="tabular-nums text-[22px] md:text-[26px] font-bold text-text-primary mt-1">
                  {s.v}
                  {s.sub && <span className="ml-2 text-[12px] font-medium text-text-muted align-middle">{s.sub}</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-text-muted mt-3 max-w-[820px]">{p.statsNote}</p>
        </div>
      </section>

      {/* ══ WHAT I DO ═════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-8 md:mb-12 reveal">
            <span className="eyebrow block mb-4">What you get</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary">
              The work, not the pitch deck.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {p.services.map((s) => (
              <div key={s.title} className="bg-white border border-border rounded-card shadow-card p-6 reveal">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-text-primary text-[16px] mb-1.5">{s.title}</h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROOF ═════════════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 lg:py-20 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 reveal">
            <div className="max-w-[640px]">
              <span className="eyebrow block mb-4">Proof</span>
              <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary">
                Campaigns I&apos;ve run, with the numbers left in.
              </h2>
            </div>
            <div className="flex-none">
              <Button href="/results" variant="secondary">All results →</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal-stagger">
            {p.cases.map((c) => (
              <div key={c.name} className="bg-white border border-border rounded-card shadow-card p-5 md:p-6 reveal">
                <h3 className="font-bold text-text-primary text-[16px]">{c.name}</h3>
                <p className="text-[14px] text-text-secondary mt-1.5 mb-4 leading-relaxed">{c.what}</p>
                <div className="grid grid-cols-3 gap-2">
                  {c.metrics.map((m) => (
                    <div key={m.k} className="bg-text-primary rounded-xl px-2.5 py-2 md:px-3 md:py-2.5 min-w-0">
                      <div className="text-[10px] tracking-[.06em] uppercase text-white/50">{m.k}</div>
                      <div className={`tabular-nums text-base md:text-lg mt-0.5 font-semibold ${m.highlight ? "text-secondary" : "text-white/85"}`}>
                        {m.v}
                      </div>
                      {m.sub && <div className="text-[11px] text-white/50 tabular-nums">{m.sub}</div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-text-muted mt-4 max-w-[820px]">{p.casesNote}</p>
        </div>
      </section>

      {/* ══ WORKING REMOTELY ══════════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="reveal">
              <span className="eyebrow block mb-4">Working with me from abroad</span>
              <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary mb-6">
                Remote, but never out of reach.
              </h2>
              <ul className="flex flex-col gap-5">
                {p.remote.map((r) => (
                  <li key={r.title} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-none mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="font-bold text-text-primary text-[15px] mb-1">{r.title}</h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed">{r.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <span className="eyebrow block mb-4">How it starts</span>
              <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary mb-6">
                Four steps, no long contract.
              </h2>
              <ol className="flex flex-col gap-4">
                {p.steps.map((s, i) => (
                  <li key={s.title} className="bg-white border border-border rounded-card p-5 flex items-start gap-4">
                    <span className="tabular-nums w-9 h-9 rounded-xl bg-primary text-white font-bold flex items-center justify-center flex-none">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-text-primary text-[15px] mb-1">{s.title}</h3>
                      <p className="text-[14px] text-text-secondary leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={p.faqs} light />

      {/* ══ CTA ═══════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="bg-primary rounded-[22px] px-6 py-10 md:px-12 md:py-14 text-center reveal">
            <h2 className="text-[clamp(22px,3.3vw,40px)] font-bold text-white max-w-[720px] mx-auto">
              Tell me what isn&apos;t working. I&apos;ll tell you honestly if I can fix it.
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] mt-4 max-w-[600px] mx-auto leading-[1.7]">
              Tell me your business, your market and what isn&apos;t working. I reply personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button href="/contact" variant="light">Start the conversation</Button>
            </div>
            <p className="text-white/70 text-[14px] mt-6">
              Also running {p.sibling.label}?{" "}
              <Link href={p.sibling.href} className="text-white underline underline-offset-2 hover:text-secondary">
                {p.sibling.label} →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <BreadcrumbLd trail={[{ name: p.crumb, path: p.path }]} />
      <Footer />
    </>
  );
}

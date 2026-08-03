import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/ui/FAQ";
import BreadcrumbLd from "@/components/ui/BreadcrumbLd";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import {
  BarChart3,
  MapPin,
  Smartphone,
  HeartPulse,
  UtensilsCrossed,
  Package,
  Target,
  type LucideIcon,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const guides: { icon: LucideIcon; title: string }[] = [
  { icon: BarChart3, title: 'The "Stop Wasting Ad Budget" checklist' },
  { icon: MapPin, title: "Google Map Pack ranking guide" },
  { icon: Smartphone, title: "Meta Ads setup for beginners" },
  { icon: HeartPulse, title: "Clinic lead-gen starter pack" },
  { icon: UtensilsCrossed, title: "Restaurant local-ads playbook" },
  { icon: Package, title: "D2C scaling cheat-sheet" },
  { icon: Target, title: "FunZone weekend-fill template" },
];

const steps = [
  { n: "1", text: "Follow @that.marketingguyy" },
  { n: "2", text: "Tell me which guide you want first" },
  { n: "3", text: "It lands in your inbox the day it's ready" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "7 Free Ads & Local SEO Guides",
  description:
    "Seven free ad and local SEO guides in progress: stop wasting ad budget, Meta Ads setup, Google Map Pack ranking, clinic and restaurant playbooks.",
  alternates: { canonical: "/resources" },
};

const faqsResources = [
  { q: "Is there a free Facebook ads checklist for small business?",
    a: "It's being written. The \"Stop Wasting Ad Budget\" checklist is first in the queue of seven, and it covers the mistakes that turn up most often in real accounts: the wrong campaign objective, creative that's gone stale, and results judged before the learning phase has finished. Ask for it and you'll get it the day it's done." },
  { q: "Are the guides really free?",
    a: "They will be. No email wall, no card details, no trial that quietly becomes a charge. They aren't published yet, which is why nothing here asks you to sign up for a download that doesn't exist." },
  { q: "Why Instagram DM instead of a download button?",
    a: "Two reasons. It skips the email-capture routine nobody enjoys, and a DM means I can send one follow-up tip that fits your business rather than a generic sequence. If DMs aren't your thing, the contact page reaches me the same way." },
  { q: "Which guide should I start with?",
    a: "The \"Stop Wasting Ad Budget\" checklist is being written first, because it applies regardless of industry. After that take the one matching your business: clinic lead-gen, restaurant local-ads, D2C scaling, or the FunZone template. If you have no ad budget at all, the Google Map Pack guide is the one you can act on for nothing." },
  { q: "Will I get spammed afterwards?",
    a: "No. The PDF plus one short follow-up tip is the entire scope." },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
                <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link> / Free PDFs
              </div>
              <span className="eyebrow block mb-5">Coming soon, and free when it lands</span>
              <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
7 free guides to stop wasting your ad budget.
              </h1>
              <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[620px] leading-[1.7]">
I&apos;m writing these now. No fluff and no email gymnastics when they land, and
                nothing to pay. Tell me which one you need most and I&apos;ll send it first.
              </p>
            </div>
            <Media
              src="work_analytics"
              alt="Marking up campaign numbers next to an open laptop"
              className="aspect-[4/3] rounded-card shadow-card"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══ GUIDES + HOW IT WORKS ═════════════════════════════════════════════ */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 reveal-stagger">

            {/* Free panel */}
            <div className="bg-secondary/15 border border-border rounded-card p-6 md:p-8 reveal">
              <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <h3 className="text-[22px] md:text-[26px] font-bold text-text-primary">7 free guides</h3>
                <span className="text-[10px] tracking-[.08em] uppercase font-semibold text-text-primary bg-secondary px-2.5 py-1 rounded-md">
                  In progress
                </span>
              </div>
              <p className="text-[14px] text-text-secondary mb-5">Being written now. Free when they land.</p>
              <div className="flex flex-col gap-3 mb-5">
                {guides.map((g) => (
                  <div key={g.title} className="flex items-center gap-3 text-[14px] text-text-primary">
                    <span className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center flex-none">
                      <g.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                    </span>
                    {g.title}
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-text-secondary mb-4">
                None of these are finished yet, so I&apos;m not going to pretend you can download
                one today. Tell me which is most useful to you and it goes to the front of the queue.
              </p>
              <Button href="/contact" variant="primary" fullWidth className="sm:w-auto">Tell me which you need</Button>
            </div>

            {/* How it works */}
            <div className="bg-white border border-border rounded-card p-6 md:p-8 reveal">
              <h3 className="text-[22px] md:text-[26px] font-bold text-text-primary mb-1.5">How it works</h3>
              <p className="text-[14px] text-text-secondary mb-5">When they go live, this is the whole process.</p>
              <div className="flex flex-col gap-3 mb-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-center gap-3 text-[14px] text-text-primary">
                    <span className="w-8 h-8 rounded-lg bg-secondary/25 border border-border flex items-center justify-center text-[13px] font-bold flex-none text-text-primary">
                      {s.n}
                    </span>
                    {s.text}
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-[14px] text-text-secondary mb-4">
                  The paid blueprints will go deeper, step-by-step, once they are built. They are not on sale yet either.
                </p>
                <Button href="/learn" variant="secondary">See what&apos;s planned →</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ items={faqsResources} light />
      <BreadcrumbLd trail={[{ name: "Free PDFs", path: "/resources" }]} />
      <Footer />
    </>
  );
}

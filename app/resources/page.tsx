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
  { n: "2", text: "DM the keyword for the guide you want" },
  { n: "3", text: "Get the PDF + a short follow-up tip" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "7 Free Ads & Local SEO Guides",
  description:
    "Free guides: stop wasting ad budget, Meta Ads setup for beginners, Google Map Pack ranking, clinic and restaurant playbooks. No email wall games.",
  alternates: { canonical: "/resources" },
};

const faqsResources = [
  { q: "Is there a free Facebook ads checklist for small business?",
    a: "Yes — the \"Stop Wasting Ad Budget\" checklist is the first of the 7 free guides, and it's the one I tell everyone to start with. It covers the mistakes I see most across 77 ad accounts: wrong objectives, tired creative, budgets judged in the wrong window. DM the keyword on Instagram and it's yours; no email required." },
  { q: "Are the 7 guides really free, or is there a catch?",
    a: "Really free. No email wall, no card details, no \"free trial.\" You DM the keyword GUIDE to my Instagram and the PDFs land in your inbox. The catch, if you want to call it one: I built them so you'd trust me enough to eventually look at the ₹99 (~$1.20) blueprints on the [learn page](/learn). That's the whole funnel, stated out loud." },
  { q: "Why do I have to DM you on Instagram instead of just downloading them?",
    a: "Two honest reasons. One: no email-gymnastics — no forms, no newsletter you didn't ask for. Two: a DM starts an actual conversation, so I can send a short follow-up tip that fits your business instead of a generic drip sequence. If DMs aren't your thing, the [contact form](/contact) works too." },
  { q: "Which guide should I start with?",
    a: "Start with the \"Stop Wasting Ad Budget\" checklist — it applies to every business and pays for itself (it's free, so instantly). Then take your industry guide: clinic lead-gen, restaurant local-ads, D2C scaling, or the FunZone template. If you're a local business with no ad budget at all, go straight to the Google Map Pack ranking guide instead." },
  { q: "Will you spam me after I DM you?",
    a: "No. You get the PDF plus one short follow-up tip, and that's the promised scope. I'd rather you come back because a guide actually helped than because I drip-fed your inbox. If a guide does help and you want the deeper version, the ₹99 (~$1.20) blueprints on the [learn page](/learn) are the next step — but that move is yours to make." },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
                <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link> / Free PDFs
              </div>
              <span className="eyebrow block mb-5">Start free</span>
              <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
                7 free guides to stop wasting your ad budget.
              </h1>
              <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[620px] leading-[1.7]">
                No fluff, no email gymnastics. DM a keyword on Instagram and they land in your inbox.
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
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 reveal-stagger">

            {/* Free panel */}
            <div className="bg-secondary/15 border border-border rounded-card p-6 md:p-8 reveal">
              <h3 className="text-[22px] md:text-[26px] font-bold text-text-primary mb-1.5">7 free guides</h3>
              <p className="text-[14px] text-text-secondary mb-5">Delivered instantly to your Instagram DM.</p>
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
                DM the keyword{" "}
                <span className="bg-text-primary text-white px-2 py-0.5 rounded-md text-[12px] font-semibold">GUIDE</span>{" "}
                on Instagram to get all 7.
              </p>
              <Button href="/contact" variant="primary" fullWidth className="sm:w-auto">Request them now</Button>
            </div>

            {/* How it works */}
            <div className="bg-white border border-border rounded-card p-6 md:p-8 reveal">
              <h3 className="text-[22px] md:text-[26px] font-bold text-text-primary mb-1.5">How it works</h3>
              <p className="text-[14px] text-text-secondary mb-5">Three steps, zero cost.</p>
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
                  Want everything in one place? The paid blueprints go deeper, step-by-step, for ₹99 each.
                </p>
                <Button href="/learn" variant="secondary">See the blueprints →</Button>
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

import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import { BarChart3, Ban, BookOpen, Handshake, type LucideIcon } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const roles = [
  {
    title: "Video Editor / Reel Creator",
    type: "Part-time · Remote",
    desc: "Edit short-form content (reels, YouTube Shorts) for the thatmarketingguy brand. You should be fast, creative, and understand what makes content hook in the first 3 seconds.",
    requirements: [
      "Strong video editing skills (CapCut, Premiere, or DaVinci Resolve)",
      "Understanding of short-form content formats and pacing",
      "Eye for typography, motion, and visual hierarchy",
    ],
    paid: true,
  },
  {
    title: "Marketing Intern",
    type: "Internship · Hybrid — Jaipur",
    desc: "Learn performance marketing from inside real ad accounts. You'll shadow live campaigns, help with ad copies, and learn what agencies will never teach you in 3 months.",
    requirements: [
      "Curiosity about digital marketing — that's the baseline",
      "Basic understanding of Meta or Google Ads is a plus",
      "Ability to commit for at least 3 months",
    ],
    paid: false,
  },
  {
    title: "Content Writer",
    type: "Freelance · Remote",
    desc: "Write blogs, guides, and educational content in a conversational tone. Marketing jargon is optional. Clarity is not.",
    requirements: [
      "Strong written communication in English and/or Hindi",
      "Ability to explain complex things simply",
      "Prior marketing or startup experience is a bonus",
    ],
    paid: true,
  },
];

const perks: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: BarChart3, title: "Work on real campaigns", desc: "Not fake case studies. Real accounts, real money, real results." },
  { icon: Ban, title: "No corporate fluff", desc: "No pointless meetings. We communicate fast and move faster." },
  { icon: BookOpen, title: "Learn more than you would anywhere", desc: "You'll see what actually happens inside live ad accounts." },
  { icon: Handshake, title: "Get credited for your work", desc: "Your outputs will be real, visible, and something you can proudly show." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Careers — Work With thatmarketingguy",
  description: "Video editing, content and performance marketing roles at thatmarketingguy. Real work, real learning, portfolio-worthy results.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
                <a href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</a> / Careers
              </div>
              <span className="eyebrow block mb-5">
                Join the team
              </span>
              <h1 className="text-[clamp(28px,4.5vw,60px)] font-bold text-text-primary max-w-[800px] leading-[1.08]">
                Work with someone who&apos;s actually{" "}
                <span className="text-primary">doing the thing.</span>
              </h1>
              <p className="text-[17px] md:text-[19px] text-text-secondary mt-5 max-w-[640px] leading-relaxed">
                No corporate structure. No HR fluff. Just real work, real learning, and results you can proudly put in your portfolio.
              </p>
            </div>
            <Media
              src="work_team"
              alt="Team mapping out a campaign plan together"
              className="aspect-[4/3] rounded-card shadow-card"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══ PERKS / CULTURE ═══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">How we work</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary">
              No politics. No jargon. Just work.
            </h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              We move fast, communicate clearly, and care about the output — not the hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal-stagger">
            {perks.map((p) => (
              <Card
                key={p.title}
                className="p-6 hover:-translate-y-1 transition-transform duration-[250ms] reveal"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-bold text-text-primary text-[15px] mb-2">{p.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OPEN ROLES ════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24 bg-bg-light">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14 reveal">
            <span className="eyebrow block mb-4">Open roles</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-text-primary">
              What we&apos;re looking for
            </h2>
            <p className="text-[15px] md:text-[17px] text-text-secondary mt-3">
              Small team, big impact. These roles are real — if you&apos;re a good fit, just reach out directly.
            </p>
          </div>

          <div className="flex flex-col gap-5 reveal-stagger">
            {roles.map((r) => (
              <Card
                key={r.title}
                className="p-7 md:p-8 hover:-translate-y-0.5 transition-transform duration-[250ms] reveal"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-bold text-text-primary text-[20px] md:text-[22px] mb-1.5">{r.title}</h3>
                    <span className="text-[11px] tracking-[.06em] text-text-muted">{r.type}</span>
                  </div>
                  <span
                    className={`flex-none self-start text-[10px] tracking-[.08em] uppercase px-3 py-1.5 rounded-lg font-semibold ${
                      r.paid ? "bg-secondary/25 text-text-primary" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {r.paid ? "Paid" : "Stipend · Internship"}
                  </span>
                </div>

                <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed mb-6">{r.desc}</p>

                <div className="mb-7">
                  <div className="text-[10px] tracking-[.08em] uppercase text-text-muted mb-3 font-semibold">What you bring</div>
                  <div className="flex flex-col gap-2.5">
                    {r.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-3 text-[14px] text-text-secondary">
                        <span className="text-primary mt-0.5 flex-none font-bold">→</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button href="/contact">Apply / Say hello →</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA — the one dark band on this page ════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24 bg-text-primary">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 text-center reveal">
          <span className="eyebrow justify-center mb-5 block" style={{ color: "#FDEA6F" }}>
            Not sure which role fits?
          </span>
          <h2 className="text-[clamp(22px,3.3vw,42px)] font-bold text-white mb-4">
            Just say hello.
          </h2>
          <p className="text-[15px] md:text-[17px] text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
            If you&apos;re smart, hungry, and actually care about doing good work — there&apos;s room for you here.
          </p>
          <Button href="/contact" variant="light">Reach out →</Button>
        </div>
      </section>

      <Footer />
    </>
  );
}

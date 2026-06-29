import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const roles = [
  {
    n: "01",
    title: "Video Editor / Reel Creator",
    type: "Part-time · Remote",
    desc: "Edit short-form content (reels, YouTube Shorts) for the thatmarketingguy brand. You should be fast, know what makes content hook in the first 3 seconds, and care about typography and pacing.",
    requirements: [
      "Strong editing skills — CapCut, Premiere, or DaVinci Resolve",
      "Feel for short-form content formats and retention hooks",
      "Clean eye for visual hierarchy and motion",
    ],
    paid: true,
  },
  {
    n: "02",
    title: "Marketing Intern",
    type: "Internship · Hybrid — Jaipur",
    desc: "Learn performance marketing from inside real ad accounts. You'll shadow live campaigns, help with ad copy, and learn what agencies will never teach you — for free — in 3 months.",
    requirements: [
      "Curiosity about performance marketing — that's the baseline",
      "Basic understanding of Meta or Google Ads is a bonus",
      "Minimum 3-month commitment, showing up matters",
    ],
    paid: false,
  },
  {
    n: "03",
    title: "Content Writer",
    type: "Freelance · Remote",
    desc: "Write blogs, guides, and educational content in a conversational tone. Marketing jargon is optional. Clarity is not.",
    requirements: [
      "Strong written communication in English (and Hindi is a bonus)",
      "Ability to explain complex things simply — no fluff",
      "Prior marketing or startup writing experience preferred",
    ],
    paid: true,
  },
];

const perks = [
  { title: "Work on real campaigns",     desc: "Not case studies or simulations. Real accounts, real money, real results." },
  { title: "No corporate fluff",          desc: "No pointless reviews, no multi-step approvals. Communicate fast, move fast." },
  { title: "Learn more than anywhere",   desc: "You'll see the inside of live ad accounts — the good, the bad, the ugly." },
  { title: "Your name on real work",     desc: "What you create will be visible, credited, and portfolio-worthy." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-dark py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute -right-32 -top-16 w-[600px] h-[600px] rounded-full bg-ember/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] text-white/30 mb-6 uppercase">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>
            Careers
          </div>
          <span className="eyebrow-inv block mb-8">Join the team</span>
          <h1 className="font-display font-extrabold text-white leading-[0.94] tracking-tight text-[clamp(44px,7vw,82px)] max-w-[820px]">
            Work with someone<br />
            who&apos;s actually{" "}
            <span className="text-ember">doing the thing.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/50 mt-8 max-w-[560px] leading-relaxed">
            No HR fluff. No corporate structure. Just real work, real learning, and results you can proudly put in your portfolio.
          </p>
        </div>
      </section>

      {/* ══ HOW WE WORK ═══════════════════════════════════════════════════════ */}
      <section className="bg-cream-alt py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[600px] mb-10 md:mb-12">
            <span className="eyebrow block mb-4">How we work</span>
            <h2 className="font-display font-extrabold text-dark text-[clamp(28px,4vw,46px)] leading-[1.0] tracking-tight">
              No politics. No jargon. Just work.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dark/10 border border-dark/10 rounded-[20px] overflow-hidden">
            {perks.map((p) => (
              <div key={p.title} className="bg-cream-alt p-7">
                <h3 className="font-display font-extrabold text-dark text-[16px] mb-2">{p.title}</h3>
                <p className="text-[13px] text-smoke leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OPEN ROLES ════════════════════════════════════════════════════════ */}
      <section className="bg-cream py-16 md:py-24 lg:py-28">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-12 md:mb-16">
            <span className="eyebrow block mb-5">Open roles</span>
            <h2 className="font-display font-extrabold text-dark text-[clamp(28px,4vw,48px)] leading-[1.0] tracking-tight">
              What we&apos;re looking for.
            </h2>
            <p className="text-[15px] text-smoke mt-4 leading-relaxed">
              Small team, big impact. These are real — reach out directly if you fit.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-dark/10">
            {roles.map((r) => (
              <div key={r.title} className="py-10 md:py-12 group">
                <div className="grid grid-cols-1 md:grid-cols-[72px_1fr] gap-6 md:gap-12">

                  {/* Index */}
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:pt-1">
                    <span className="font-mono text-[11px] text-smoke/35">{r.n}</span>
                    <span className={`font-mono text-[9px] tracking-[.1em] uppercase px-2.5 py-1 rounded-full ${
                      r.paid ? "bg-sage/10 text-sage" : "bg-ember/10 text-ember"
                    }`}>
                      {r.paid ? "Paid" : "Stipend"}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <h3 className="font-display font-extrabold text-dark text-[22px] md:text-[26px] group-hover:text-ember transition-colors">
                        {r.title}
                      </h3>
                      <span className="font-mono text-[11px] text-smoke/60 flex-none">{r.type}</span>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-smoke leading-relaxed mb-6">{r.desc}</p>
                    <div className="mb-8">
                      <div className="font-mono text-[10px] tracking-[.1em] uppercase text-smoke/40 mb-3">
                        What you bring
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {r.requirements.map((req) => (
                          <div key={req} className="flex items-start gap-3">
                            <span className="text-ember text-[13px] flex-none mt-px">→</span>
                            <span className="text-[14px] text-ink">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button href="/contact">Apply / Say hello →</Button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA ═══════════════════════════════════════════════════════ */}
      <section className="bg-night py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-ember/[.06] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-xl">
            <span className="eyebrow-inv block mb-6">Not sure which role?</span>
            <h2 className="font-display font-extrabold text-white text-[clamp(28px,4vw,48px)] leading-[1.0] tracking-tight mb-4">
              Just say hello.
            </h2>
            <p className="text-[15px] md:text-[17px] text-white/45 mb-8 leading-relaxed">
              If you&apos;re curious, hungry, and care about doing good work — there&apos;s room for you here.
            </p>
            <Button href="/contact" variant="light">Reach out →</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

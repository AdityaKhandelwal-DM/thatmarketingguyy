import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

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

const perks = [
  { icon: "📊", title: "Work on real campaigns", desc: "Not fake case studies. Real accounts, real money, real results." },
  { icon: "🚫", title: "No corporate fluff", desc: "No pointless meetings. We communicate fast and move faster." },
  { icon: "📚", title: "Learn more than you would anywhere", desc: "You'll see what actually happens inside live ad accounts." },
  { icon: "🤝", title: "Get credited for your work", desc: "Your outputs will be real, visible, and something you can proudly show." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-navy text-white py-14 md:py-20 lg:py-28 overflow-hidden relative">
        <div className="absolute -right-24 -top-12 w-[420px] h-[420px] rounded-full bg-orange/8 blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Careers
          </div>
          <span className="eyebrow block mb-5" style={{ color: "#F97316" }}>
            Join the team
          </span>
          <h1 className="text-[clamp(28px,4.5vw,60px)] font-extrabold text-white max-w-[800px] leading-[1.08]">
            Work with someone who&apos;s actually{" "}
            <span className="text-orange">doing the thing.</span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-white/60 mt-5 max-w-[640px] leading-relaxed">
            No corporate structure. No HR fluff. Just real work, real learning, and results you can proudly put in your portfolio.
          </p>
        </div>
      </section>

      {/* ══ PERKS / CULTURE ═══════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24 bg-orange/[.04]">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">How we work</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-extrabold text-navy">
              No politics. No jargon. Just work.
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              We move fast, communicate clearly, and care about the output — not the hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-ink/10 rounded-card p-6 hover:-translate-y-1 hover:shadow-card transition-all duration-200"
              >
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <h3 className="font-extrabold text-navy text-[15px] mb-2">{p.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OPEN ROLES ════════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[680px] mb-10 md:mb-14">
            <span className="eyebrow block mb-4">Open roles</span>
            <h2 className="text-[clamp(22px,3.3vw,42px)] font-extrabold text-navy">
              What we&apos;re looking for
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted mt-3">
              Small team, big impact. These roles are real — if you&apos;re a good fit, just reach out directly.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {roles.map((r) => (
              <div
                key={r.title}
                className="bg-white border border-ink/10 rounded-card p-7 md:p-8 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="font-extrabold text-navy text-[20px] md:text-[22px] mb-1.5">{r.title}</h3>
                    <span className="font-mono text-[11px] tracking-[.06em] text-muted">{r.type}</span>
                  </div>
                  <span
                    className={`flex-none self-start font-mono text-[10px] tracking-[.08em] uppercase px-3 py-1.5 rounded-lg ${
                      r.paid ? "bg-mint-soft text-[#065f46]" : "bg-orange/10 text-orange"
                    }`}
                  >
                    {r.paid ? "Paid" : "Stipend · Internship"}
                  </span>
                </div>

                <p className="text-[14px] md:text-[15px] text-muted leading-relaxed mb-6">{r.desc}</p>

                <div className="mb-7">
                  <div className="font-mono text-[10px] tracking-[.08em] uppercase text-muted mb-3">What you bring</div>
                  <div className="flex flex-col gap-2.5">
                    {r.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-3 text-[14px] text-ink">
                        <span className="text-orange mt-0.5 flex-none font-bold">→</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button href="/contact">Apply / Say hello →</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOSING CTA ═══════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24 bg-navy relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-orange/10 blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          <span className="eyebrow justify-center mb-5 block" style={{ color: "#F97316" }}>
            Not sure which role fits?
          </span>
          <h2 className="text-[clamp(22px,3.3vw,42px)] font-extrabold text-white mb-4">
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

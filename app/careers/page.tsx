import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const roles = [
  {
    title: "Video Editor / Reel Creator",
    type: "Part-time · Remote",
    desc: "Edit short-form content (reels, YouTube Shorts) for the thatmarketingguy brand. You should be fast, know what makes content hook in the first 3 seconds, and care about pacing.",
    requirements: [
      "CapCut, Premiere, or DaVinci Resolve",
      "Feel for retention hooks in short-form",
      "Clean eye for visual hierarchy",
    ],
    paid: true,
  },
  {
    title: "Marketing Intern",
    type: "Internship · Hybrid — Jaipur",
    desc: "Learn performance marketing from inside real ad accounts. Shadow live campaigns, help with ad copy, and learn what agencies will never teach you — in 3 months.",
    requirements: [
      "Curiosity about performance marketing",
      "Basic Meta or Google Ads understanding (bonus)",
      "Minimum 3-month commitment",
    ],
    paid: false,
  },
  {
    title: "Content Writer",
    type: "Freelance · Remote",
    desc: "Write blogs, guides, and educational content in a conversational tone. Marketing jargon is optional. Clarity is not.",
    requirements: [
      "Strong written communication in English",
      "Ability to explain complex things simply",
      "Prior marketing writing experience preferred",
    ],
    paid: true,
  },
];

const perks = [
  { title: "Work on real campaigns",  desc: "Real accounts, real money, real results — not simulations." },
  { title: "No corporate fluff",      desc: "No pointless reviews, no multi-step approvals."             },
  { title: "Learn more than anywhere",desc: "You'll see the inside of live ad accounts."                 },
  { title: "Your name on real work",  desc: "Visible, credited, and portfolio-worthy."                   },
];

export default function CareersPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Careers</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(30px,4.5vw,52px)] leading-tight tracking-tight max-w-[600px]">
            Work with someone who&apos;s actually doing the thing.
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[480px] leading-relaxed">
            No HR fluff. No corporate structure. Real work, real learning, results you can put in your portfolio.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 md:py-16 border-b border-border bg-surface-alt">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {perks.map((p) => (
              <div key={p.title} className="bg-surface border border-border rounded-card px-5 py-4">
                <h3 className="font-sans font-semibold text-text text-[14px] mb-1">{p.title}</h3>
                <p className="text-[13px] text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-14 md:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[520px] mb-10">
            <p className="eyebrow mb-4">Open roles</p>
            <h2 className="font-sans font-bold text-text text-[clamp(20px,3vw,30px)] leading-tight tracking-tight">
              Small team. Big impact.
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-border">
            {roles.map((r) => (
              <div key={r.title} className="py-8 md:py-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-sans font-bold text-text text-[18px] md:text-[20px]">{r.title}</h3>
                    <p className="text-[12px] text-muted mt-0.5">{r.type}</p>
                  </div>
                  <span className={`self-start text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                    r.paid ? "bg-sage/10 text-sage" : "bg-surface-alt text-secondary border border-border"
                  }`}>
                    {r.paid ? "Paid" : "Stipend"}
                  </span>
                </div>
                <p className="text-[14px] text-secondary leading-relaxed mb-4 max-w-[600px]">{r.desc}</p>
                <div className="flex flex-col gap-1.5 mb-6">
                  {r.requirements.map((req) => (
                    <div key={req} className="flex items-start gap-2.5">
                      <span className="text-muted mt-1 text-[10px] flex-none">→</span>
                      <span className="text-[13px] text-secondary">{req}</span>
                    </div>
                  ))}
                </div>
                <Button href="/contact">Apply / Say hello</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border bg-text py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-md">
            <h2 className="font-sans font-extrabold text-white text-[clamp(22px,3.5vw,36px)] leading-tight tracking-tight mb-3">
              Not sure which role?
            </h2>
            <p className="text-[15px] text-white/60 mb-6 leading-relaxed">
              If you&apos;re curious, hungry, and care about doing good work — just say hello.
            </p>
            <Button href="/contact" variant="light">Reach out →</Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

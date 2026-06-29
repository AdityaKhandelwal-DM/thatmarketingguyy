import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const guides = [
  { icon: "📊", title: 'The "Stop Wasting Ad Budget" checklist' },
  { icon: "📍", title: "Google Map Pack ranking guide" },
  { icon: "📱", title: "Meta Ads setup for beginners" },
  { icon: "🏥", title: "Clinic lead-gen starter pack" },
  { icon: "🍽️", title: "Restaurant local-ads playbook" },
  { icon: "📦", title: "D2C scaling cheat-sheet" },
  { icon: "🎯", title: "FunZone weekend-fill template" },
];

const steps = [
  { n: "01", text: "Follow @thatmarketingguy on Instagram" },
  { n: "02", text: "DM the keyword for the guide you want" },
  { n: "03", text: "Get the PDF + a short follow-up tip" },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark text-white py-14 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute -right-24 bottom-0 w-[500px] h-[500px] rounded-full bg-sage/[.04] blur-3xl pointer-events-none" />
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="font-mono text-[10px] tracking-[.12em] uppercase text-white/30 mb-6">
            <a href="/" className="hover:text-white/60 transition-colors">Home</a>
            <span className="mx-2 opacity-30">/</span>Free PDFs
          </div>
          <span className="eyebrow-inv block mb-6">Start free</span>
          <h1 className="font-display font-extrabold text-white text-[clamp(36px,5.5vw,68px)] leading-[0.96] tracking-tight max-w-[760px]">
            7 guides to stop wasting your ad budget.
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/50 mt-6 max-w-[520px] leading-relaxed">
            No fluff, no email gymnastics. DM a keyword on Instagram and they land in your inbox.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Guides list */}
            <div className="bg-sage/[.06] border border-sage/15 rounded-[20px] p-7 md:p-8">
              <h3 className="font-display font-extrabold text-dark text-[22px] mb-1.5">7 free guides</h3>
              <p className="text-[14px] text-smoke mb-6">Delivered instantly to your Instagram DM.</p>
              <div className="flex flex-col divide-y divide-dark/8 mb-6">
                {guides.map((g) => (
                  <div key={g.title} className="flex items-center gap-3.5 py-3.5">
                    <span className="text-lg flex-none">{g.icon}</span>
                    <span className="text-[14px] text-ink">{g.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-[14px] text-smoke mb-5">
                DM the keyword{" "}
                <span className="font-mono bg-dark text-white px-2 py-0.5 rounded-md text-[12px]">GUIDE</span>{" "}
                on Instagram to get all 7.
              </p>
              <Button href="/contact" variant="sage" fullWidth>Request them now</Button>
            </div>

            {/* How it works */}
            <div className="bg-cream-alt rounded-[20px] p-7 md:p-8 border border-dark/10">
              <h3 className="font-display font-extrabold text-dark text-[22px] mb-1.5">How it works</h3>
              <p className="text-[14px] text-smoke mb-6">Three steps, zero cost.</p>
              <div className="flex flex-col divide-y divide-dark/8 mb-8">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-center gap-4 py-4">
                    <span className="font-mono text-[11px] text-smoke/35 flex-none">{s.n}</span>
                    <span className="text-[14px] text-ink">{s.text}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-dark/10 pt-6">
                <p className="text-[14px] text-smoke mb-5 leading-relaxed">
                  Want more depth? The paid blueprints go step-by-step for ₹99 each.
                </p>
                <Button href="/learn" variant="ghost">See the blueprints →</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

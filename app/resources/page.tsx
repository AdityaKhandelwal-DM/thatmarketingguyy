import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const guides = [
  'The "Stop Wasting Ad Budget" checklist',
  "Google Map Pack ranking guide",
  "Meta Ads setup for beginners",
  "Clinic lead-gen starter pack",
  "Restaurant local-ads playbook",
  "D2C scaling cheat-sheet",
  "FunZone weekend-fill template",
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Free PDFs
          </div>
          <span className="eyebrow block mb-3" style={{ color: "#CD8D43" }}>Start free</span>
          <h1 className="text-[clamp(26px,4.2vw,52px)] font-extrabold text-white max-w-[760px] leading-tight">
            7 free guides to stop wasting your ad budget.
          </h1>
          <p className="text-base md:text-lg text-white/70 mt-3 max-w-[620px]">
            No fluff, no email gymnastics. DM a keyword on Instagram and they land in your inbox.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Free panel */}
            <div className="bg-mint-soft rounded-[22px] p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-navy mb-1.5">7 free guides</h3>
              <p className="text-sm text-muted mb-5">Delivered instantly to your Instagram DM.</p>
              <div className="flex flex-col gap-3 mb-5">
                {guides.map((g) => (
                  <div key={g} className="flex items-center gap-3 text-[14px] text-ink">
                    <span className="w-6 h-6 rounded-lg bg-white border border-ink/10 flex items-center justify-center text-[12px] flex-none">📄</span>
                    {g}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted mb-4">
                DM the keyword{" "}
                <span className="font-mono bg-navy text-white px-2 py-0.5 rounded-md text-[12px]">GUIDE</span>{" "}
                on Instagram to get all 7.
              </p>
              <Button href="/contact" variant="mint" fullWidth className="sm:w-auto">Request them now</Button>
            </div>

            {/* How it works */}
            <div className="bg-white rounded-[22px] p-6 md:p-8 border border-ink/10">
              <h3 className="text-2xl font-extrabold text-navy mb-1.5">How it works</h3>
              <p className="text-sm text-muted mb-5">Three steps, zero cost.</p>
              <div className="flex flex-col gap-3 mb-5">
                {[
                  { n: "1", text: "Follow @thatmarketingguy" },
                  { n: "2", text: "DM the keyword for the guide you want" },
                  { n: "3", text: "Get the PDF + a short follow-up tip" },
                ].map((s) => (
                  <div key={s.n} className="flex items-center gap-3 text-[14px] text-ink">
                    <span className="w-6 h-6 rounded-lg bg-warm border border-ink/10 flex items-center justify-center text-[13px] font-bold flex-none">{s.n}</span>
                    {s.text}
                  </div>
                ))}
              </div>
              <div className="border-t border-ink/10 pt-5">
                <p className="text-sm text-muted mb-4">
                  Want everything in one place? The paid blueprints go deeper, step-by-step, for ₹99 each.
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

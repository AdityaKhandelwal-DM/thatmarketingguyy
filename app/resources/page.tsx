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
      <section className="bg-navy text-white py-[clamp(54px,7vw,84px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="font-mono text-[12px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Free PDFs
          </div>
          <span className="eyebrow block mb-3.5" style={{ color: "#CD8D43" }}>Start free</span>
          <h1 className="text-[clamp(30px,4.2vw,52px)] font-extrabold text-white max-w-[760px]">
            7 free guides to stop wasting your ad budget.
          </h1>
          <p className="text-[clamp(16px,1.5vw,19px)] text-white/72 mt-4 max-w-[620px]">
            No fluff, no email gymnastics. DM a keyword on Instagram and they land in your inbox.
          </p>
        </div>
      </section>

      <section className="py-[clamp(58px,7vw,86px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free panel */}
            <div className="bg-mint-soft rounded-[22px] p-[clamp(26px,3vw,36px)] border border-transparent">
              <h3 className="text-2xl font-extrabold text-navy mb-1.5">7 free guides</h3>
              <p className="text-[14.5px] text-muted mb-6">Delivered instantly to your Instagram DM.</p>
              <div className="flex flex-col gap-3 mb-6">
                {guides.map((g) => (
                  <div key={g} className="flex items-center gap-3 text-[15px] text-ink">
                    <span className="w-6 h-6 rounded-[7px] bg-white border border-ink/10 flex items-center justify-center text-[13px] flex-none">📄</span>
                    {g}
                  </div>
                ))}
              </div>
              <p className="text-[14.5px] text-muted mb-3.5">
                DM the keyword{" "}
                <span className="font-mono bg-navy text-white px-2 py-0.5 rounded-md text-[13px]">GUIDE</span>{" "}
                on Instagram to get all 7.
              </p>
              <Button href="/contact" variant="mint">Request them now</Button>
            </div>

            {/* How it works */}
            <div className="bg-white rounded-[22px] p-[clamp(26px,3vw,36px)] border border-ink/10">
              <h3 className="text-2xl font-extrabold text-navy mb-1.5">How it works</h3>
              <p className="text-[14.5px] text-muted mb-6">Three steps, zero cost.</p>
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { n: "1", text: "Follow @thatmarketingguy" },
                  { n: "2", text: "DM the keyword for the guide you want" },
                  { n: "3", text: "Get the PDF + a short follow-up tip" },
                ].map((s) => (
                  <div key={s.n} className="flex items-center gap-3 text-[15px] text-ink">
                    <span className="w-6 h-6 rounded-[7px] bg-warm border border-ink/10 flex items-center justify-center text-[13px] font-bold flex-none">{s.n}</span>
                    {s.text}
                  </div>
                ))}
              </div>
              <div className="border-t border-ink/10 pt-5">
                <p className="text-[14.5px] text-muted mb-4">
                  Want everything in one place? The paid blueprints go deeper, step-by-step, for ₹99 each.
                </p>
                <Button href="/learn" variant="ghost">See the blueprints →</Button>
              </div>
              <p className="text-[12.5px] text-muted mt-4 font-mono">
                // Connect this to LinkDM / ConvertKit so delivery is automatic.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

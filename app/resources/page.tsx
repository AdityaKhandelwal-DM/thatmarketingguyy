import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const guides = [
  { icon: "📊", title: 'Stop Wasting Ad Budget — Checklist'    },
  { icon: "📍", title: "Google Map Pack Ranking Guide"         },
  { icon: "📱", title: "Meta Ads Setup for Beginners"          },
  { icon: "🏥", title: "Clinic Lead-Gen Starter Pack"          },
  { icon: "🍽️", title: "Restaurant Local-Ads Playbook"         },
  { icon: "📦", title: "D2C Scaling Cheat-Sheet"              },
  { icon: "🎯", title: "FunZone Weekend-Fill Template"         },
];

const steps = [
  { n: "01", text: "Follow @thatmarketingguy on Instagram" },
  { n: "02", text: "DM the keyword for the guide you want"  },
  { n: "03", text: "Get the PDF + a short follow-up tip"    },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="py-14 md:py-20 border-b border-border">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <p className="eyebrow mb-5">Free PDFs</p>
          <h1 className="font-sans font-extrabold text-text text-[clamp(28px,4.5vw,50px)] leading-tight tracking-tight max-w-[600px]">
            7 guides to stop wasting your ad budget.
          </h1>
          <p className="text-[16px] text-secondary mt-4 max-w-[460px] leading-relaxed">
            No signup forms. DM a keyword on Instagram and they land in your inbox instantly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Guides */}
            <div className="bg-surface border border-border rounded-xl p-6 md:p-7">
              <h3 className="font-sans font-bold text-text text-[18px] mb-1">7 free guides</h3>
              <p className="text-[13px] text-secondary mb-5">Delivered to your Instagram DM.</p>
              <div className="flex flex-col divide-y divide-border mb-5">
                {guides.map((g) => (
                  <div key={g.title} className="flex items-center gap-3 py-3">
                    <span className="text-base flex-none">{g.icon}</span>
                    <span className="text-[13px] text-secondary">{g.title}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-secondary mb-4">
                DM{" "}
                <span className="font-mono bg-surface-alt text-text px-2 py-0.5 rounded border border-border text-[12px]">
                  GUIDE
                </span>{" "}
                on Instagram to get all 7.
              </p>
              <Button href="/contact" variant="sage" fullWidth>Request them now</Button>
            </div>

            {/* How it works */}
            <div className="bg-surface-alt border border-border rounded-xl p-6 md:p-7">
              <h3 className="font-sans font-bold text-text text-[18px] mb-1">How it works</h3>
              <p className="text-[13px] text-secondary mb-5">Three steps, zero cost.</p>
              <div className="flex flex-col divide-y divide-border mb-7">
                {steps.map((s) => (
                  <div key={s.n} className="flex items-center gap-4 py-4">
                    <span className="text-[11px] text-muted flex-none">{s.n}</span>
                    <span className="text-[14px] text-secondary">{s.text}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-[13px] text-secondary mb-4 leading-relaxed">
                  Want more depth? Paid blueprints go step-by-step for ₹99 each.
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

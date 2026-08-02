"use client";

import Link from "next/link";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/ui/FAQ";
import BreadcrumbLd from "@/components/ui/BreadcrumbLd";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import { cn } from "@/lib/utils";
import { Building2, GraduationCap, type LucideIcon } from "lucide-react";

type Intent = "owner" | "learner";

const intents: { key: Intent; icon: LucideIcon; title: string; desc: string }[] = [
  { key: "owner", icon: Building2, title: "I own a business", desc: "I want more leads / customers without an agency." },
  { key: "learner", icon: GraduationCap, title: "I want to learn marketing", desc: "I want to run ads myself or build a career." },
];

const faqsContact = [
  { q: "How do I hire you to manage my ads?",
    a: "Pick \"I own a business\" on this page, tell me your business, city and what you need help with, and send it. I'll come back with questions and an honest recommendation. Done-for-you management is the top of my ladder — under it sit the free guides, ₹99 (~$1.20) blueprints and the ₹999 (~$12) masterclass, so you're never forced into the expensive option." },
  { q: "How fast do you reply?",
    a: "I reply personally — there's no team inbox, no autoresponder, no \"a specialist will contact you.\" That's the honest trade-off of working with one person instead of an agency: you get me, at human speed, not a ticket number. If it's urgent, say so in the message and include WhatsApp; that's the channel I live in between client calls." },
  { q: "What happens after I send the message?",
    a: "I read it myself and reply based on which door you picked. Business owner: I'll ask about your business, city and current ads, then tell you plainly whether done-for-you management, a ₹99 (~$1.20) blueprint, or just the [free guides](/resources) fit — I've told people not to hire me. Learner: I'll point you at the right starting material. No discovery-call funnel." },
  { q: "Do you do one-off ad account audits?",
    a: "My published offers are the ladder: free guides, blueprints, the masterclass, and ongoing management — a standalone audit isn't a listed product. But if you just want a second pair of eyes on your account, message me anyway and describe what's running. After 77 ad accounts I can usually tell you quickly whether something's structurally wrong — and I'll say so either way." },
  { q: "I'm in the US or UK — do timezones make working with you painful?",
    a: "No. I already work remotely from Jaipur with clients in the US, UK, UAE, Australia and Singapore, so overlapping call windows are a solved problem, and most day-to-day runs async over WhatsApp and email anyway. What matters is that reporting is clear enough that you never wait on a call to know what's happening." },
  { q: "I don't know if I need done-for-you or a course — which do I pick?",
    a: "Quick test: if your time is worth more than your ad budget's waste, hire it out; if the budget is small and you want the skill, learn it. Undecided is fine too — start with the [free guides](/resources), see how my head works, then decide. Both doors lead to the same person reading your message." },
];

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("owner");
  const [name, setName] = useState("");
  const [reach, setReach] = useState("");
  const [biz, setBiz] = useState("");
  const [need, setNeed] = useState("");
  const [sent, setSent] = useState(false);

  // No backend: build the message, copy it, open the Instagram DM thread —
  // the channel Aditya actually answers. Honest and zero-dependency.
  const send = async () => {
    const lines = [
      `Hi Aditya — ${name || "a visitor"} here (${intent === "owner" ? "business owner" : "learner"}).`,
      reach && `Reach me: ${reach}`,
      biz && `Business: ${biz}`,
      need && `Need help with: ${need}`,
    ].filter(Boolean);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
    } catch {}
    setSent(true);
    window.open("https://ig.me/m/that.marketingguyy", "_blank", "noopener");
  };

  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
                <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link> / Contact
              </div>
              <span className="eyebrow block mb-5">Let&apos;s talk</span>
              <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
                What brings you here?
              </h1>
              <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[640px] leading-[1.7]">
                Pick one so I send you to the right place.
              </p>
            </div>
            <Media
              src="work_desk"
              alt="Talking through campaign numbers across a desk"
              className="aspect-[4/3] rounded-card shadow-card"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══ INTENT + FORM ═════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-20 lg:py-24">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-6 md:gap-10">
            {/* Intent selector — `reveal` stays on this container only: the buttons'
                className changes on selection, which would wipe the `.in` class and
                leave them stuck invisible. */}
            <div className="flex flex-col gap-3 reveal">
              {intents.map((b) => (
                <button
                  key={b.key}
                  onClick={() => setIntent(b.key)}
                  className={cn(
                    "text-left bg-white border rounded-card p-4 cursor-pointer transition-all duration-[250ms] flex gap-3 items-start",
                    intent === b.key
                      ? "border-primary shadow-[0_4px_18px_rgba(3,109,154,.14)]"
                      : "border-border hover:border-primary"
                  )}
                >
                  <b.icon className="w-6 h-6 text-primary flex-none" strokeWidth={2} />
                  <div>
                    <span className="block text-[15px] font-bold text-text-primary">{b.title}</span>
                    <p className="text-[13px] text-text-secondary mt-0.5">{b.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Form */}
            <Card className="p-5 md:p-8 reveal">
              <div className="mb-4">
                <label htmlFor="name" className="block text-[13px] font-semibold text-text-primary mb-1.5">Your name</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rohan Sharma"
                  className="w-full h-14 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="reach" className="block text-[13px] font-semibold text-text-primary mb-1.5">WhatsApp / Email</label>
                <input
                  id="reach"
                  type="text"
                  value={reach}
                  onChange={(e) => setReach(e.target.value)}
                  placeholder="So I can reach you"
                  className="w-full h-14 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                />
              </div>
              {intent === "owner" && (
                <div className="mb-4">
                  <label htmlFor="biz" className="block text-[13px] font-semibold text-text-primary mb-1.5">Your business &amp; city</label>
                  <input
                    id="biz"
                    type="text"
                    value={biz}
                    onChange={(e) => setBiz(e.target.value)}
                    placeholder="e.g. Dental clinic, Jaipur"
                    className="w-full h-14 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]"
                  />
                </div>
              )}
              <div className="mb-5">
                <label htmlFor="need" className="block text-[13px] font-semibold text-text-primary mb-1.5">What do you need help with?</label>
                <textarea
                  id="need"
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  placeholder="Tell me in one line"
                  rows={4}
                  className="w-full min-h-[120px] py-4 px-4 border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms] resize-y"
                />
              </div>
              <Button type="button" fullWidth onClick={send}>
                {sent ? "Opened Instagram — paste & send" : "Send via Instagram DM"}
              </Button>
              <p className="text-[12px] text-text-muted mt-3 text-center">
                Opens my Instagram DM with your message copied — just paste and send. I read every one myself.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <FAQ items={faqsContact} light />
      <BreadcrumbLd trail={[{ name: "Contact", path: "/contact" }]} />
      <Footer />
    </>
  );
}

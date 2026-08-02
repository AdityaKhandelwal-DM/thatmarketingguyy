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
  { q: "How do I get in touch about my ads?",
    a: "Pick whichever describes you on this page, add your business, city and what isn't working, then send. The message opens in my Instagram DMs, which is where I actually reply. Including your current monthly spend and what you're optimising for saves a round trip." },
  { q: "How fast do you reply?",
    a: "Personally, and at human speed. There's no team inbox and no autoresponder. That's the honest trade-off of dealing with one person rather than an agency. If something's urgent, say so and include a WhatsApp number." },
  { q: "What happens after I send a message?",
    a: "I read it and reply based on what you've told me. If paid management isn't right for your stage, I'll say so and point you at the material that is. I've told people not to hire me before. There's no discovery-call funnel waiting at the end of it." },
  { q: "Do you do one-off ad account audits?",
    a: "A standalone audit isn't a listed offer, but if you want a second pair of eyes, describe what's running and I can usually tell you quickly whether something is structurally wrong." },
  { q: "I'm in the US or UK. Do timezones make this difficult?",
    a: "No. I already work from Jaipur with clients across the US, UK, UAE, Australia and Singapore. Overlapping call windows exist, and most day-to-day work is async regardless. What matters more is reporting clear enough that you never have to wait for a call to know what's happening." },
  { q: "I'm not sure what I need yet. Is it still worth messaging?",
    a: "Yes. \"I don't know where to start\" is a perfectly normal message to send, and the answer is usually a specific free guide rather than anything paid." },
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
      `Hi Aditya, ${name || "a visitor"} here (${intent === "owner" ? "business owner" : "learner"}).`,
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
                {sent ? "Opened Instagram, paste & send" : "Send via Instagram DM"}
              </Button>
              <p className="text-[12px] text-text-muted mt-3 text-center">
                Opens my Instagram DM with your message copied. Just paste and send. I read every one myself.
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

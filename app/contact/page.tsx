"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

type Intent = "owner" | "learner";

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("owner");

  return (
    <>
      <Header />
      <section className="bg-navy text-white py-[clamp(54px,7vw,84px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="font-mono text-[12px] tracking-[.06em] text-white/50 mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Contact
          </div>
          <span className="eyebrow block mb-3.5" style={{ color: "#CD8D43" }}>Let&apos;s talk</span>
          <h1 className="text-[clamp(30px,4.2vw,52px)] font-extrabold text-white max-w-[760px]">
            What brings you here?
          </h1>
          <p className="text-[clamp(16px,1.5vw,19px)] text-white/72 mt-4">
            Pick one so I send you to the right place.
          </p>
        </div>
      </section>

      <section className="py-[clamp(58px,7vw,86px)]">
        <div className="w-full max-w-site mx-auto px-[clamp(18px,4vw,40px)]">
          <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-[clamp(30px,4vw,46px)]">
            {/* Intent selector */}
            <div className="flex flex-col gap-3.5">
              {([
                { key: "owner", icon: "🏢", title: "I own a business", desc: "I want more leads / customers without an agency." },
                { key: "learner", icon: "🎓", title: "I want to learn marketing", desc: "I want to run ads myself or build a career." },
              ] as { key: Intent; icon: string; title: string; desc: string }[]).map((b) => (
                <button
                  key={b.key}
                  onClick={() => setIntent(b.key)}
                  className={cn(
                    "text-left bg-white border rounded-2xl p-[18px_20px] cursor-pointer transition-all flex gap-3.5 items-start",
                    intent === b.key
                      ? "border-orange shadow-[0_6px_22px_rgba(205,141,67,.14)]"
                      : "border-ink/20 hover:border-navy"
                  )}
                >
                  <span className="text-[22px] flex-none">{b.icon}</span>
                  <div>
                    <h4 className="text-[16px] font-bold text-navy">{b.title}</h4>
                    <p className="text-[13.5px] text-muted mt-0.5">{b.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white border border-ink/10 rounded-[22px] p-[clamp(24px,3vw,32px)]">
              <div className="mb-[18px]">
                <label className="block text-[13px] font-semibold text-navy mb-1.5">Your name</label>
                <input
                  type="text"
                  placeholder="e.g. Rohan Sharma"
                  className="w-full px-4 py-3.5 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                />
              </div>
              <div className="mb-[18px]">
                <label className="block text-[13px] font-semibold text-navy mb-1.5">WhatsApp / Email</label>
                <input
                  type="text"
                  placeholder="So I can reach you"
                  className="w-full px-4 py-3.5 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                />
              </div>
              {intent === "owner" && (
                <div className="mb-[18px]">
                  <label className="block text-[13px] font-semibold text-navy mb-1.5">Your business &amp; city</label>
                  <input
                    type="text"
                    placeholder="e.g. Dental clinic, Jaipur"
                    className="w-full px-4 py-3.5 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                  />
                </div>
              )}
              <div className="mb-[18px]">
                <label className="block text-[13px] font-semibold text-navy mb-1.5">What do you need help with?</label>
                <textarea
                  placeholder="Tell me in one line"
                  rows={4}
                  className="w-full px-4 py-3.5 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors resize-y"
                />
              </div>
              <button
                type="button"
                onClick={() => alert("Connect this form to ConvertKit, Formspree, or a WhatsApp link before going live.")}
                className="w-full justify-center inline-flex items-center gap-2 font-display font-bold text-[15px] px-6 py-3.5 rounded-full bg-orange text-white shadow-[0_6px_18px_rgba(205,141,67,.30)] hover:bg-orange-700 hover:-translate-y-0.5 transition-all"
              >
                Send message
              </button>
              <p className="text-[12.5px] text-muted mt-2 font-mono">
                // Front-end only. Wire it to ConvertKit / Formspree / a wa.me WhatsApp link before launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

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
      <section className="bg-navy text-white py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="font-mono text-[11px] tracking-[.06em] text-white/50 mb-3">
            <a href="/" className="hover:text-white transition-colors">Home</a> / Contact
          </div>
          <span className="eyebrow block mb-3" style={{ color: "#F97316" }}>Let&apos;s talk</span>
          <h1 className="text-[clamp(26px,4.2vw,52px)] font-extrabold text-white max-w-[760px] leading-tight">
            What brings you here?
          </h1>
          <p className="text-base md:text-lg text-white/70 mt-3">
            Pick one so I send you to the right place.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-6 md:gap-10">
            {/* Intent selector */}
            <div className="flex flex-col gap-3">
              {([
                { key: "owner", icon: "🏢", title: "I own a business", desc: "I want more leads / customers without an agency." },
                { key: "learner", icon: "🎓", title: "I want to learn marketing", desc: "I want to run ads myself or build a career." },
              ] as { key: Intent; icon: string; title: string; desc: string }[]).map((b) => (
                <button
                  key={b.key}
                  onClick={() => setIntent(b.key)}
                  className={cn(
                    "text-left bg-white border rounded-2xl p-4 cursor-pointer transition-all flex gap-3 items-start",
                    intent === b.key
                      ? "border-orange shadow-[0_4px_18px_rgba(249,115,22,.14)]"
                      : "border-ink/20 hover:border-navy"
                  )}
                >
                  <span className="text-2xl flex-none">{b.icon}</span>
                  <div>
                    <h4 className="text-[15px] font-bold text-navy">{b.title}</h4>
                    <p className="text-[13px] text-muted mt-0.5">{b.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="bg-white border border-ink/10 rounded-[22px] p-5 md:p-8">
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-navy mb-1.5">Your name</label>
                <input
                  type="text"
                  placeholder="e.g. Rohan Sharma"
                  className="w-full px-4 py-3 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[13px] font-semibold text-navy mb-1.5">WhatsApp / Email</label>
                <input
                  type="text"
                  placeholder="So I can reach you"
                  className="w-full px-4 py-3 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                />
              </div>
              {intent === "owner" && (
                <div className="mb-4">
                  <label className="block text-[13px] font-semibold text-navy mb-1.5">Your business &amp; city</label>
                  <input
                    type="text"
                    placeholder="e.g. Dental clinic, Jaipur"
                    className="w-full px-4 py-3 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors"
                  />
                </div>
              )}
              <div className="mb-5">
                <label className="block text-[13px] font-semibold text-navy mb-1.5">What do you need help with?</label>
                <textarea
                  placeholder="Tell me in one line"
                  rows={4}
                  className="w-full px-4 py-3 border border-ink/20 rounded-xl font-sans text-[15px] text-ink bg-warm focus:outline-none focus:border-orange focus:bg-white transition-colors resize-y"
                />
              </div>
              <button
                type="button"
                onClick={() => alert("Connect this form to ConvertKit, Formspree, or a WhatsApp link before going live.")}
                className="w-full justify-center inline-flex items-center gap-2 font-display font-bold text-[15px] px-6 py-3.5 rounded-full bg-orange text-white shadow-[0_4px_14px_rgba(249,115,22,.30)] hover:bg-orange-700 transition-all"
              >
                Send message
              </button>
              <p className="text-[11px] text-muted mt-2.5 font-mono text-center">
                // Wire to ConvertKit / Formspree / WhatsApp before launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

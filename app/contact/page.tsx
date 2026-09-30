"use client";

import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/ui/FAQ";
import BreadcrumbLd from "@/components/ui/BreadcrumbLd";
import Card from "@/components/ui/Card";
import Media from "@/components/ui/Media";
import LeadForm from "@/components/lead/LeadForm";
import { WhatsAppLogo } from "@/components/ui/BrandLogos";
import { CONTACT_EMAIL, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { Mail, Clock, ShieldCheck } from "lucide-react";

const faqsContact = [
  { q: "How do I get in touch about my ads?",
    a: "Fill in the form on this page and press send. It opens WhatsApp with your details already written, so you only have to hit send. Prefer email? Write to info.adityakhandelwal@gmail.com. Including your current monthly spend and what you're optimising for saves a round trip." },
  { q: "How fast do you reply?",
    a: "Personally, and at human speed. There's no team inbox and no autoresponder. That's the honest trade-off of dealing with one person rather than an agency. If something's urgent, say so in your message." },
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
  return (
    <>
      <Header />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-light py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10 animate-fadeInUp">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="text-[11px] tracking-[.06em] text-text-muted mb-4">
                <Link href="/" className="hover:text-primary transition-colors duration-[250ms]">Home</Link> / Contact
              </div>
              <span className="eyebrow block mb-5">Let&apos;s talk</span>
              <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold text-text-primary max-w-[760px] leading-[1.08]">
                Tell me about your business and your ads.
              </h1>
              <p className="text-[17px] md:text-[18px] text-text-secondary mt-5 max-w-[640px] leading-[1.7]">
                Fill in the form and it opens WhatsApp with everything written for you. Wherever you are,
                I read it myself and reply personally.
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

      {/* ══ FORM + OTHER WAYS TO REACH ME ═════════════════════════════════════ */}
      <section className="py-10 md:py-16 lg:py-20">
        <div className="w-full max-w-site mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_.7fr] gap-6 lg:gap-10 items-start">
            <Card className="p-5 md:p-8 reveal">
              <LeadForm />
            </Card>

            <div className="flex flex-col gap-4 reveal">
              <a
                href={whatsappUrl("Hi Aditya, I found you on thatmarketingguyy.com and want to talk about my ads.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-border hover:border-primary rounded-card p-5 flex items-start gap-4 transition-colors duration-[250ms]"
              >
                <WhatsAppLogo className="w-10 h-10 flex-none" />
                <div>
                  <span className="block text-[15px] font-bold text-text-primary">Chat on WhatsApp</span>
                  <span className="block text-[13px] text-text-secondary mt-0.5">Skip the form and message me directly.</span>
                </div>
              </a>
              <a
                href={mailtoUrl("Enquiry from thatmarketingguyy.com")}
                className="bg-white border border-border hover:border-primary rounded-card p-5 flex items-start gap-4 transition-colors duration-[250ms]"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-none">
                  <Mail className="w-5 h-5 text-primary" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <span className="block text-[15px] font-bold text-text-primary">Email me</span>
                  <span className="block text-[13px] text-primary mt-0.5 break-all">{CONTACT_EMAIL}</span>
                </div>
              </a>
              <div className="bg-bg-light rounded-card p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary flex-none mt-0.5" strokeWidth={2} />
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    Based in Jaipur, India (GMT+5:30). Most work is async over WhatsApp and email, so time zones rarely get in the way.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary flex-none mt-0.5" strokeWidth={2} />
                  <p className="text-[13px] text-text-secondary leading-relaxed">
                    Your details are only used to reply to you. No mailing lists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqsContact} light />
      <BreadcrumbLd trail={[{ name: "Contact", path: "/contact" }]} />
      <Footer />
    </>
  );
}

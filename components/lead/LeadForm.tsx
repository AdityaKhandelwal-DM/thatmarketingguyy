"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, Mail } from "lucide-react";
import { WhatsAppLogo } from "@/components/ui/BrandLogos";
import { cn } from "@/lib/utils";
import {
  ALL_COUNTRY_CODES,
  CONTACT_EMAIL,
  PRIORITY_COUNTRIES,
  SERVICES,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/contact";

/*
 * Lead form used on /contact and inside the site-wide popup. No backend:
 * on submit it builds one message and opens a WhatsApp chat with Aditya,
 * prefilled, so the visitor only has to press send. Email is the fallback.
 */

const input =
  "w-full h-12 px-4 bg-white border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms]";
const label = "block text-[13px] font-semibold text-text-primary mb-1.5";

function countryName(code: string, names: Intl.DisplayNames | null) {
  try {
    return names?.of(code) ?? code;
  } catch {
    return code;
  }
}

export default function LeadForm({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [requirement, setRequirement] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const countries = useMemo(() => {
    let names: Intl.DisplayNames | null = null;
    try {
      names = new Intl.DisplayNames(["en"], { type: "region" });
    } catch {}
    const priority = PRIORITY_COUNTRIES.map((c) => countryName(c, names));
    const rest = ALL_COUNTRY_CODES.filter((c) => !PRIORITY_COUNTRIES.includes(c))
      .map((c) => countryName(c, names))
      .sort((a, b) => a.localeCompare(b));
    return { priority, rest };
  }, []);

  const toggle = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const message = () => {
    const fields = [
      `Name: ${name.trim()}`,
      `Country: ${country}`,
      `Email: ${email.trim()}`,
      phone.trim() && `Phone: ${phone.trim()}`,
      `Interested in: ${services.join(", ")}`,
      requirement.trim() && `Requirement: ${requirement.trim()}`,
      pathname && `(Sent from ${pathname})`,
    ].filter(Boolean);
    return `Hi Aditya, I filled in the form on thatmarketingguyy.com.\n\n${fields.join("\n")}`;
  };

  const validate = () => {
    if (!name.trim()) return "Please add your name.";
    if (!country) return "Please choose your country.";
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return "Please add a valid email.";
    if (services.length === 0) return "Pick at least one thing you need help with.";
    return "";
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const problem = validate();
    setError(problem);
    if (problem) return;
    window.open(whatsappUrl(message()), "_blank", "noopener");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-primary" strokeWidth={2.5} />
        </div>
        <h3 className="text-[20px] font-bold text-text-primary">WhatsApp is open with your details.</h3>
        <p className="text-[14px] text-text-secondary mt-2 max-w-[380px] mx-auto leading-relaxed">
          Just press send and I&apos;ll reply personally. Didn&apos;t open, or prefer email?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
          <a
            href={whatsappUrl(message())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-5 py-3 rounded-btn bg-primary text-white hover:bg-primary-dark transition-colors duration-[250ms]"
          >
            <WhatsAppLogo className="w-5 h-5" /> Open WhatsApp again
          </a>
          <a
            href={mailtoUrl("Enquiry from thatmarketingguyy.com", message())}
            className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-5 py-3 rounded-btn border-2 border-primary text-primary hover:bg-primary/5 transition-colors duration-[250ms]"
          >
            <Mail className="w-5 h-5" strokeWidth={2} /> Send by email
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <label htmlFor="lf-name" className={label}>Name *</label>
          <input id="lf-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={input} />
        </div>
        <div>
          <label htmlFor="lf-country" className={label}>Country *</label>
          <select
            id="lf-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={cn(input, "cursor-pointer", !country && "text-text-muted")}
          >
            <option value="" disabled>Select your country</option>
            {countries.priority.map((c) => (
              <option key={`p-${c}`} value={c}>{c}</option>
            ))}
            <option disabled>──────────</option>
            {countries.rest.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lf-email" className={label}>Email *</label>
          <input id="lf-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@business.com" className={input} />
        </div>
        <div>
          <label htmlFor="lf-phone" className={label}>Phone number</label>
          <input id="lf-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="With country code, e.g. +44 7700 900123" className={input} />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={label}>What do you need help with? *</legend>
        <div className="flex flex-col gap-2 mt-1">
          {SERVICES.map((s) => {
            const on = services.includes(s);
            return (
              <label
                key={s}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 bg-white border rounded-btn cursor-pointer transition-colors duration-[250ms]",
                  on ? "border-primary bg-primary/[.04]" : "border-border hover:border-primary/50"
                )}
              >
                <input type="checkbox" checked={on} onChange={() => toggle(s)} className="sr-only" />
                <span
                  aria-hidden="true"
                  className={cn(
                    "w-5 h-5 rounded-[5px] border-2 flex items-center justify-center flex-none transition-colors",
                    on ? "bg-primary border-primary" : "border-border"
                  )}
                >
                  {on && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </span>
                <span className="text-[14px] font-medium text-text-primary">{s}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="lf-req" className={label}>Your requirement</label>
        <textarea
          id="lf-req"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          rows={compact ? 3 : 4}
          placeholder="Your business, monthly ad budget, and what isn't working right now"
          className="w-full py-3 px-4 bg-white border border-border rounded-btn text-[15px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-[250ms] resize-y"
        />
      </div>

      {error && (
        <p role="alert" className="text-[13px] text-accent font-medium mt-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 w-full inline-flex items-center justify-center gap-2.5 font-semibold text-[16px] px-6 py-3.5 rounded-btn bg-primary text-white hover:bg-primary-dark transition-colors duration-[250ms] cursor-pointer"
      >
        <WhatsAppLogo className="w-5 h-5" /> Send on WhatsApp
      </button>
      <p className="text-[12px] text-text-muted mt-3 text-center leading-relaxed">
        Opens WhatsApp with your details filled in. Prefer email?{" "}
        <a href={mailtoUrl("Enquiry from thatmarketingguyy.com")} className="text-primary font-medium hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  );
}

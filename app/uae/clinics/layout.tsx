import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads for Clinics in Dubai | More Patient Calls, Not More Clicks",
  description:
    "Call Ads and Store Visit campaigns for dental and aesthetic clinics in Dubai and Abu Dhabi. Flat fee from AED 2,500/month, you keep the ad account. Free 15-minute audit.",
  alternates: { canonical: "/uae/clinics" },
  // Work in progress: live for review and ads, hidden from Google until the
  // page is finished. Flip to index: true (and add it to app/sitemap.ts) then.
  robots: { index: false, follow: true },
  openGraph: {
    title: "Google Ads for Clinics in Dubai | More Patient Calls",
    description:
      "Call Ads built so the phone rings. Flat monthly fee, weekly WhatsApp reports, no agency in between. Free 15-minute audit.",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

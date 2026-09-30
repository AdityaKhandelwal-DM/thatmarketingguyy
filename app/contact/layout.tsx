import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me on Meta & Google Ads",
  description:
    "Tell me about your business and your Facebook or Google Ads. Send the form on WhatsApp or email info.adityakhandelwal@gmail.com. I reply personally.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me — Meta & Google Ads Help",
  description:
    "Tell me about your business and your ads. I reply personally — whether you want done-for-you management or to learn to run ads yourself.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

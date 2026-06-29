import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "thatmarketingguy — Marketing, Finally Made Clear",
  description:
    "Aditya Khandelwal teaches business owners to run their own ads and rank on Google. Real dashboards, real numbers, no agency jargon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}

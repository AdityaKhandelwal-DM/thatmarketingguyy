import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thatmarketingguyy.com"),
  title: {
    default: "Meta & Google Ads Consultant for Small Business | Aditya K",
    template: "%s | thatmarketingguy",
  },
  description:
    "I run Meta and Google Ads for small businesses worldwide — $88K+ managed, 49,752 leads, 8.2× best ROAS. No agency jargon, no long contracts.",
  alternates: { canonical: "/" },
  openGraph: {
    siteName: "thatmarketingguy",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og-card.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Khandelwal",
  jobTitle: "Performance Marketing Consultant",
  url: "https://www.thatmarketingguyy.com",
  image: "https://www.thatmarketingguyy.com/images/aditya-square.webp",
  sameAs: ["https://www.instagram.com/that.marketingguyy/"],
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "thatmarketingguy",
  url: "https://www.thatmarketingguyy.com",
  founder: { "@type": "Person", name: "Aditya Khandelwal" },
  areaServed: ["US", "GB", "AE", "AU", "SG", "IN"],
  address: { "@type": "PostalAddress", addressLocality: "Jaipur", addressCountry: "IN" },
  serviceType: ["Meta Ads Management", "Google Ads Management", "Local SEO"],
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <ScrollReveal />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
      </body>
    </html>
  );
}

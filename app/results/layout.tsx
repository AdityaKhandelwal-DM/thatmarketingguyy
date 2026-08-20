import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Results: 80 Accounts, 59,417 Leads",
  description:
    "Verified numbers from 80 ad accounts: clinics, restaurants, D2C, venues. Best ROAS 8.2×, cost per lead from ₹34 (~$0.40). Receipts, not promises.",
  alternates: { canonical: "/results" },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

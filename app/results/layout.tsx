import type { Metadata } from "next";
import { stats } from "@/lib/stats";

export const metadata: Metadata = {
  title: `Ad Results: ${stats.accounts} Accounts, ${stats.leads} Leads`,
  description:
    `Verified numbers from ${stats.accounts} ad accounts: clinics, restaurants, D2C, venues. Best ROAS 8.2×, cost per lead from ₹34 (~$0.40). Receipts, not promises.`,
  alternates: { canonical: "/results" },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

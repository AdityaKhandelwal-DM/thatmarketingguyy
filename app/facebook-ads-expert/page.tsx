import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { MetaLogo } from "@/components/ui/BrandLogos";
import { SearchCheck, Target, Clapperboard, Users, TrendingUp, BarChart3 } from "lucide-react";

/*
 * Hire-intent page for "facebook ads expert / specialist / freelancer".
 * Every number here is copied from /results (Meta Ads API, date_preset=maximum,
 * last synced 30 Sep 2026). $ conversions use the site-wide ~₹83.6 = $1.
 */

const services = [
  {
    icon: SearchCheck,
    title: "Account and tracking audit",
    desc: "Pixel, Conversions API and events checked first. If Meta can't see your leads or sales, it can't find more of them, and no campaign fixes that.",
  },
  {
    icon: Target,
    title: "Campaigns built around your goal",
    desc: "Instant-form leads, WhatsApp and Messenger conversations, bookings or online sales. The objective matches what you actually want, not what's easiest to report.",
  },
  {
    icon: Clapperboard,
    title: "Creative testing",
    desc: "Video, image and carousel variations rotated on purpose, so you learn which message sells instead of guessing from one ad.",
  },
  {
    icon: Users,
    title: "Retargeting and lookalikes",
    desc: "Audiences built from people who already visited, messaged or bought, then expanded to people who look like your best customers.",
  },
  {
    icon: TrendingUp,
    title: "Budget and scaling",
    desc: "Spend moves to what's working and gets cut from what isn't. Scaling happens in steps, so cost per result doesn't fall off a cliff.",
  },
  {
    icon: BarChart3,
    title: "Reports you can read",
    desc: "Cost per lead, cost per chat, ROAS. The numbers that connect spend to revenue, plus raw dashboard access so you can check them yourself.",
  },
];

const SERVICE_TITLES = services.map((s) => s.title);

export const metadata: Metadata = {
  // absolute: skip the site-wide " | thatmarketingguy" suffix so the title
  // stays under ~60 characters and isn't cut off in Google's results.
  title: { absolute: "Facebook Ads Expert for Hire | Meta Ads Specialist" },
  description:
    "Hire a Facebook ads expert for your small business in the US, UK, UAE or Australia. $61K+ in Meta ad spend managed, 12,550 leads. You keep the ad account.",
  keywords: [
    "facebook ads expert",
    "facebook ads specialist",
    "hire a facebook ads expert",
    "meta ads specialist",
    "facebook ads consultant",
    "facebook ads freelancer",
    "instagram ads expert",
    "facebook ads manager for small business",
  ],
  alternates: { canonical: "/facebook-ads-expert" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: "Facebook Ads Expert for Hire | Meta Ads Specialist",
    description: "Hire a Facebook ads expert for your small business in the US, UK, UAE or Australia. $61K+ in Meta ad spend managed, 12,550 leads. You keep the ad account.",
    url: "/facebook-ads-expert",
    type: "website",
    siteName: "thatmarketingguy",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads Expert for Hire | Meta Ads Specialist",
    description: "Hire a Facebook ads expert for your small business in the US, UK, UAE or Australia. $61K+ in Meta ad spend managed, 12,550 leads. You keep the ad account.",
  },
};

export default function FacebookAdsExpertPage() {
  return (
    <ServicePage
      path="/facebook-ads-expert"
      crumb="Facebook Ads Expert"
      eyebrow="Facebook & Instagram ads, run remotely"
      title={
        <>
          Facebook ads expert for small businesses, <span className="text-primary">wherever you are.</span>
        </>
      }
      intro="I'm Aditya, a Meta ads specialist working with small businesses in the US, UK, UAE, Australia and Singapore. You get the person who actually builds your campaigns, not an account manager relaying messages, and reports that show what each lead cost you."
      heroImg="work_dashboard"
      heroAlt="Facebook ads expert reviewing an Ads Manager dashboard"
      PlatformLogo={MetaLogo}
      platformName="Meta Ads"
      stats={[
        { k: "Meta spend managed", v: "₹51.4L", sub: "≈ $61K" },
        { k: "Meta ad accounts", v: "69" },
        { k: "Form leads", v: "12,550" },
        { k: "Best ROAS", v: "8.2×", sub: "textile D2C" },
      ]}
      statsNote="Lifetime figures pulled from Meta's own reporting, last synced 30 Sep 2026. The 8.2× ROAS is a pre-2023 engagement reported from my own records, because that ad account has since closed."
      headings={{
        services: "What I do as your Facebook ads specialist",
        industries: "Industries I run Facebook ads for",
        proof: "Facebook ads results from real campaigns",
        remote: "Hiring a remote Facebook ads expert from the US, UK or UAE",
        steps: "How to hire me as your Facebook ads consultant",
        faq: "Facebook ads expert FAQs",
      }}
      industries={[
        { title: "Clinics and healthcare", desc: "Consult and appointment enquiries. For one hair-transplant clinic, cost per chat fell from ₹93 to ₹33 (about $1.11 to $0.39)." },
        { title: "Restaurants, cafés and lounges", desc: "Table reservations, party bookings and local awareness, run through instant forms and WhatsApp ads." },
        { title: "D2C and ecommerce brands", desc: "Catalogue ads, lookalikes and ROAS recovery for online brands, from home textiles to block-print labels." },
        { title: "Hotels, resorts and farm stays", desc: "Booking and wedding enquiries, with off-season offers so weekdays don't sit empty." },
        { title: "Education and training", desc: "Admission leads for institutes: 2,766 leads at ₹34 (about $0.41) each for one career institute." },
        { title: "Real estate and local services", desc: "Lead forms for property and service businesses that need qualified calls, not just clicks." },
      ]}
      services={services}
      cases={[
        {
          name: "Career institute: admission leads",
          what: "Video-first lead ads with creative rotation across two course lines.",
          metrics: [
            { k: "Leads", v: "2,766", highlight: true },
            { k: "Cost / lead", v: "₹34", sub: "≈ $0.41", highlight: true },
            { k: "Spend", v: "₹93K", sub: "≈ $1.1K" },
          ],
        },
        {
          name: "Farm stay: weekend bookings",
          what: "Creator-led video lead ads plus a broad audience build.",
          metrics: [
            { k: "Leads", v: "1,442", highlight: true },
            { k: "Cost / lead", v: "₹45", sub: "≈ $0.54", highlight: true },
            { k: "CTR", v: "1.79%" },
          ],
        },
        {
          name: "D2C home textiles: ROAS rescue",
          what: "Spend was scaling while ROAS slid under breakeven. Restructured budgets, split by city tier, stacked lookalikes on top buyers.",
          metrics: [
            { k: "ROAS", v: "4.26×", highlight: true },
            { k: "CTR", v: "8.42%", highlight: true },
            { k: "Spend", v: "₹2.6L", sub: "≈ $3.1K" },
          ],
        },
        {
          name: "Hair transplant clinic: qualified consults",
          what: "Conversation ads with creative tuned for intent instead of volume, for a high-ticket service.",
          metrics: [
            { k: "Cost / chat", v: "₹33", sub: "≈ $0.39", highlight: true },
            { k: "Was", v: "₹93", sub: "≈ $1.11" },
            { k: "Reach", v: "12.5L", sub: "1.25M" },
          ],
        },
      ]}
      casesNote="Each card is a single campaign, not an account total. These ran in India, where Meta's auction is much cheaper than in the US, UK or UAE, so expect a higher cost per lead in your market. What carries over is the method: the right objective, an offer worth replying to, and cutting what doesn't work."
      remote={[
        {
          title: "You own the ad account",
          desc: "I'm added as a partner to your Business Manager. You keep ownership and full access, and if we stop working together there's nothing to hand back.",
        },
        {
          title: "Day-to-day on WhatsApp and email",
          desc: "Updates, approvals and questions happen in writing, so the time-zone gap matters less than people expect.",
        },
        {
          title: "Numbers you can check yourself",
          desc: "Reports lead with cost per lead or cost per sale, and you can open the same dashboard I'm looking at whenever you like.",
        },
        {
          title: "No long contracts",
          desc: "The work has to keep earning its place. No lock-in periods.",
        },
      ]}
      steps={[
        { title: "Tell me about your business", desc: "Your market, your offer, your current spend and what isn't working." },
        { title: "Account review", desc: "With read access, I look at your campaigns and tracking and show you where the money is going." },
        { title: "Agree the plan", desc: "Scope, budget and the one number we'll judge success on." },
        { title: "Build, test, report", desc: "Campaigns go live, creative gets tested, and every report leads with cost per result." },
      ]}
      faqs={[
        {
          q: "What does a Facebook ads expert actually do?",
          a: "Plans, builds and runs your campaigns across Facebook, Instagram and WhatsApp: tracking set-up, audiences, creative testing, budgets, and cutting whatever isn't paying back. The job is to lower what each lead or sale costs you, and to show you that number plainly. See real campaigns on the [results page](/results).",
        },
        {
          q: "How much does a Facebook ads freelancer cost?",
          a: "Rates vary enormously by market. A US or UK freelancer typically charges several times what an India-based one does for the same work, and most price either a flat monthly retainer or a percentage of ad spend. What matters more than the rate is what's included. Ask three things of anyone you consider: who owns the ad account, do you get raw dashboard access, and does the reporting show cost per lead or just impressions.",
        },
        {
          q: "Do you work with clients outside India?",
          a: "Yes, and I'm actively taking on more of it. So far I've run two Google Ads projects for overseas clients, one in Ontario and one for a film production company in the UK, both of which came to me through a third party. The work translates cleanly, so I'm now looking for clients directly in the US, UK, UAE, Australia and Singapore. You keep ownership of the ad account, and day-to-day runs over WhatsApp and email, so the timezone gap matters less than people expect.",
        },
        {
          q: "Who owns the ad account?",
          a: "You do, always. I work through partner access on your Business Manager, so your ads, audiences, pixel data and history stay yours whether or not we keep working together. Be wary of anyone who wants to run your ads from their own account.",
        },
        {
          q: "What's the difference between hiring a freelancer and an agency?",
          a: "An agency gives you a team, a documented process and usually an account manager sitting between you and whoever actually touches your campaigns. A freelancer gives you direct access to the person in the account, and lower overhead. The trade-off is capacity. One person can't cover everything an agency can. Neither is automatically better; it depends on how much scale you need and how much distance you're willing to accept.",
        },
        {
          q: "How long before Facebook ads start working?",
          a: "Meta needs roughly 50 conversion events a week per ad set before its optimisation settles. That's the learning phase, and judging results before it finishes is the most common mistake I see. On small budgets that usually means two to four weeks before the numbers mean anything.",
        },
        {
          q: "What industries do you run Facebook ads for?",
          a: "Clinics, restaurants and lounges, D2C and ecommerce brands, hotels and resorts, education, real estate and local service businesses. The method carries across: the right objective, an offer worth replying to, and cutting what doesn't pay back.",
        },
        {
          q: "What do you need from me to get started?",
          a: "Partner access to your Meta Business Manager and ad account, your offer and pricing, your monthly budget, and who handles the leads when they arrive. If tracking isn't set up properly, that's the first thing I fix.",
        },
      ]}
      sibling={{ href: "/google-ads-expert", label: "Google Ads" }}
      serviceLd={{
        name: "Facebook & Instagram Ads Management",
        serviceType: "Facebook advertising management",
        alternateName: ["Facebook Ads Specialist", "Meta Ads Specialist", "Facebook Ads Consultant", "Facebook Ads Freelancer"],
        offers: SERVICE_TITLES,
        description:
          "Remote Meta Ads (Facebook, Instagram, WhatsApp) management for small businesses: tracking audit, campaign build, creative testing, retargeting, scaling and cost-per-lead reporting.",
      }}
    />
  );
}

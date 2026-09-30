import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { GoogleAdsLogo } from "@/components/ui/BrandLogos";
import { Search, Store, MapPin, PlayCircle, Gauge, Scissors } from "lucide-react";

/*
 * Hire-intent page for "google ads expert / specialist / consultant".
 * Every number here is copied from /results (Google Ads manager-account
 * exports, last synced 30 Sep 2026). $ conversions use ~₹83.6 = $1.
 */

export const metadata: Metadata = {
  title: "Google Ads Expert for Small Businesses, Worldwide",
  description:
    "Google Ads expert for small businesses in the US, UK, UAE and Australia. ₹17.6L (~$21K) of Google spend managed, 60,287 calls, direction requests and form fills.",
  alternates: { canonical: "/google-ads-expert" },
};

export default function GoogleAdsExpertPage() {
  return (
    <ServicePage
      path="/google-ads-expert"
      crumb="Google Ads Expert"
      eyebrow="Google Search, Maps & YouTube ads, run remotely"
      title={
        <>
          Google Ads expert for small businesses that need <span className="text-primary">calls, not clicks.</span>
        </>
      }
      intro="I'm Aditya, a Google Ads specialist working with small businesses in the US, UK, UAE, Australia and Singapore. I build campaigns around the searches that turn into phone calls, bookings and store visits, and cut the ones that only spend."
      heroImg="work_analytics"
      heroAlt="Analytics report showing campaign performance"
      PlatformLogo={GoogleAdsLogo}
      platformName="Google Ads"
      stats={[
        { k: "Google spend managed", v: "₹17.6L", sub: "≈ $21K" },
        { k: "Google Ads accounts", v: "14" },
        { k: "Conversions", v: "60,287" },
        { k: "Best ROAS", v: "18.6×", sub: "clinic, YouTube" },
      ]}
      statsNote="Lifetime figures from Google Ads manager-account reports, last synced 30 Sep 2026. Conversions are calls, direction requests and form fills."
      services={[
        {
          icon: Search,
          title: "Search campaigns on buying intent",
          desc: "Keywords chosen for people ready to call or book, not people researching. Match types and bids set so you aren't paying for curiosity.",
        },
        {
          icon: Scissors,
          title: "Search-term clean-up",
          desc: "Regular review of what people actually typed, with negatives added so the same wasted searches don't keep charging you.",
        },
        {
          icon: Store,
          title: "Performance Max, set up properly",
          desc: "Asset groups per location or offer, conversion goals that mean something, and store-visit or call tracking so the black box has the right target.",
        },
        {
          icon: MapPin,
          title: "Local ads, calls and directions",
          desc: "Ads tied to your Google Business Profile so you show up on Maps when people nearby search, measured in calls and direction requests.",
        },
        {
          icon: PlayCircle,
          title: "YouTube that converts",
          desc: "Video campaigns optimised for enquiries instead of views, so video budget has something measurable coming back.",
        },
        {
          icon: Gauge,
          title: "Conversion tracking first",
          desc: "Forms, calls and key actions tracked before a rupee or dollar is scaled. Without it, Google's bidding is guessing and so are you.",
        },
      ]}
      cases={[
        {
          name: "Physio clinic: YouTube",
          what: "Video budget was going out with nothing measurable coming back. Re-optimised to conversions instead of views.",
          metrics: [
            { k: "ROAS", v: "18.6×", highlight: true },
            { k: "Cost / conv", v: "₹4.47", sub: "≈ $0.05", highlight: true },
            { k: "Conversions", v: "921" },
          ],
        },
        {
          name: "Hotel: calls and directions",
          what: "Guests found the hotel online but didn't make it to the door. Performance Max plus Search, tuned for calls and 'get directions'.",
          metrics: [
            { k: "Actions", v: "1,170", highlight: true },
            { k: "Cost / action", v: "₹9.87", sub: "≈ $0.12", highlight: true },
            { k: "Conv. rate", v: "47.9%" },
          ],
        },
        {
          name: "Three-store retailer: footfall",
          what: "No idea which ads drove visits to which store. Per-store Search and Performance Max with store-visit tracking.",
          metrics: [
            { k: "Store actions", v: "4,050", highlight: true },
            { k: "Cost / action", v: "₹25.62", sub: "≈ $0.31", highlight: true },
            { k: "Spend", v: "₹1.04L", sub: "≈ $1.2K" },
          ],
        },
        {
          name: "Restaurant: Maps to phone calls",
          what: "Showing up on Maps but the phone wasn't ringing. Business Profile search ads on general local keywords, run per outlet.",
          metrics: [
            { k: "Actions", v: "3,857", highlight: true },
            { k: "Cost / action", v: "₹2.68", sub: "≈ $0.03", highlight: true },
            { k: "CTR", v: "6.05%" },
          ],
        },
      ]}
      casesNote="Each card is a single campaign, not an account total. These ran in India, where clicks cost far less than in the US, UK or UAE, so expect a higher cost per action in your market. What carries over is the structure: intent-led keywords, clean tracking, and cutting searches that don't convert."
      remote={[
        {
          title: "Already running ads for overseas clients",
          desc: "I've run Google Ads for a business in Ontario, Canada and for a film production company in the UK.",
        },
        {
          title: "You own the Google Ads account",
          desc: "I get access through your account or a manager-account link. Billing, data and history stay yours, and you can remove access any time.",
        },
        {
          title: "Day-to-day on WhatsApp and email",
          desc: "Updates, approvals and questions happen in writing, so the time-zone gap matters less than people expect.",
        },
        {
          title: "No long contracts",
          desc: "The work has to keep earning its place. No lock-in periods.",
        },
      ]}
      steps={[
        { title: "Tell me about your business", desc: "Your market, your services, your current spend and what isn't working." },
        { title: "Account review", desc: "With read access, I look at your search terms, tracking and budgets and show you where the money is going." },
        { title: "Agree the plan", desc: "Scope, budget and the one number we'll judge success on: cost per call, lead or sale." },
        { title: "Build, clean up, report", desc: "Campaigns rebuilt or launched, wasted searches cut, and cost per conversion in every report." },
      ]}
      faqs={[
        {
          q: "What does a Google Ads expert actually do?",
          a: "Chooses which searches you should pay for, writes the ads, sets bids and budgets, tracks calls and forms, and removes the searches that spend without converting. The measure is cost per enquiry or sale, not clicks. See real campaigns on the [results page](/results).",
        },
        {
          q: "Is Google Ads worth it for a small business?",
          a: "It's worth it when people already search for what you sell, because Google catches them at the moment they're looking. That suits clinics, local services and anything with clear buying intent. If nobody searches for your product yet, Meta ads usually work better first.",
        },
        {
          q: "How much does it cost to hire a Google Ads expert?",
          a: "Rates vary enormously by market. A US or UK freelancer typically charges several times what an India-based one does for the same work, and most price either a flat monthly retainer or a percentage of ad spend. Whoever you hire, ask who owns the account, whether you get full access, and whether reports show cost per conversion or just clicks.",
        },
        {
          q: "Do you work with clients outside India?",
          a: "Yes, and I'm actively taking on more of it. So far I've run two Google Ads projects for overseas clients, one in Ontario and one for a film production company in the UK, both of which came to me through a third party. The work translates cleanly, so I'm now looking for clients directly in the US, UK, UAE, Australia and Singapore. You keep ownership of the ad account, and day-to-day runs over WhatsApp and email, so the timezone gap matters less than people expect.",
        },
        {
          q: "Meta ads or Google ads: which one does my business need?",
          a: "It depends on whether demand already exists. Google catches people actively searching for what you sell, so it suits clinics, local services and anything with clear buying intent. Meta creates demand. It works when people don't yet know they want you, which is why restaurants, venues and D2C brands lean on it. Plenty of businesses need both, but if budget is tight, start where the intent already is. More on the [Facebook ads side](/facebook-ads-expert).",
        },
        {
          q: "How soon will I see results from Google Ads?",
          a: "Search can show signal within days, because the intent is already there when someone types the query. Automated bidding still needs a few weeks of conversion data to settle, so judge cost per conversion over a month, not a morning.",
        },
      ]}
      sibling={{ href: "/facebook-ads-expert", label: "Facebook ads" }}
      serviceLd={{
        name: "Google Ads Management",
        serviceType: "Pay-per-click advertising management",
        description:
          "Remote Google Ads management for small businesses: Search, Performance Max, local/Maps, YouTube and conversion tracking, reported as cost per call, lead or sale.",
      }}
    />
  );
}

import { ogSize, serviceOgImage } from "@/components/service/serviceOgImage";
import { stats } from "@/lib/stats";

export const alt = "Facebook Ads Expert for Hire: Aditya Khandelwal, thatmarketingguyy.com";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    platform: "meta",
    headline: "Facebook Ads Expert for Hire",
    sub: "Meta ads for small businesses, run remotely by a hands-on specialist.",
    stats: [`${stats.metaSpendUsd}+ ad spend managed`, `${stats.metaLeads} leads`],
  });
}

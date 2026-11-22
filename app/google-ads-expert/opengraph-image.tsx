import { ogSize, serviceOgImage } from "@/components/service/serviceOgImage";
import { stats } from "@/lib/stats";

export const alt = "Google Ads Expert for Hire: Aditya Khandelwal, thatmarketingguyy.com";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    platform: "google",
    headline: "Google Ads Expert for Hire",
    sub: "Google Search, Maps and YouTube ads that bring calls, not clicks.",
    stats: [`${stats.googleSpendUsd}+ ad spend managed`, `${stats.googleConversions} conversions`],
  });
}

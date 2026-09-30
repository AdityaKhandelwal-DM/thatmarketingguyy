import { ogSize, serviceOgImage } from "@/components/service/serviceOgImage";

export const alt = "Google Ads Expert for Hire: Aditya Khandelwal, thatmarketingguyy.com";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    platform: "google",
    headline: "Google Ads Expert for Hire",
    sub: "Google Search, Maps and YouTube ads that bring calls, not clicks.",
    stats: ["$21K+ ad spend managed", "60,287 conversions"],
  });
}

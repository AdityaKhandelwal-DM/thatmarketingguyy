import { ogSize, serviceOgImage } from "@/components/service/serviceOgImage";

export const alt = "Facebook Ads Expert for Hire: Aditya Khandelwal, thatmarketingguyy.com";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    platform: "meta",
    headline: "Facebook Ads Expert for Hire",
    sub: "Meta ads for small businesses, run remotely by a hands-on specialist.",
    stats: ["$61K+ ad spend managed", "12,550 leads"],
  });
}

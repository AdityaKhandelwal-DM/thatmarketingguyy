import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.thatmarketingguyy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/results", "/about", "/learn", "/resources", "/blog", "/contact", "/careers"].map(
    (p) => ({
      url: `${BASE}${p}`,
      lastModified: new Date(),
      changeFrequency: (p === "/blog" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: p === "" ? 1 : p === "/results" ? 0.9 : 0.7,
    })
  );
  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));
  return [...staticRoutes, ...posts];
}

import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { DISCIPLINES } from "@/data/disciplines";

const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
  ["", 1, "weekly"],
  ["/about", 0.9, "monthly"],
  ["/disciplines", 0.9, "monthly"],
  ["/projects", 0.8, "monthly"],
  ["/events", 0.9, "weekly"],
  ["/resources", 0.8, "monthly"],
  ["/roadmaps", 0.8, "monthly"],
  ["/guides", 0.7, "monthly"],
  ["/tools", 0.7, "monthly"],
  ["/vendors", 0.6, "monthly"],
  ["/packs", 0.6, "monthly"],
  ["/members", 0.8, "weekly"],
  ["/opportunities", 0.8, "weekly"],
  ["/female-community", 0.7, "monthly"],
  ["/impact", 0.6, "monthly"],
  ["/advertise", 0.6, "monthly"],
  ["/donate", 0.6, "monthly"],
  ["/join", 0.9, "monthly"],
  ["/contact", 0.8, "monthly"],
  ["/policy", 0.5, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map(([p, priority, changeFrequency]) => ({ url: `${SITE.url}${p}`, lastModified: now, changeFrequency, priority })),
    ...DISCIPLINES.map((d) => ({ url: `${SITE.url}/disciplines/${d.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}

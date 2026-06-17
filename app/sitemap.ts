import { MetadataRoute } from "next";

const slugs = [
  "stellar-tokenization-2025",
  "scaffold-stellar-developer-toolkit",
  "defi-xrpl-compliance-liquidity",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://theaha.co";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

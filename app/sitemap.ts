import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mozotto.ch";
const locales = ["de", "en"] as const;

const routes = [
  { path: "",          priority: 1.0, changeFrequency: "weekly"  as const },
  { path: "/booking",  priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/markets",  priority: 0.8, changeFrequency: "weekly"  as const },
  { path: "/about",    priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/gallery",  priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/faq",      priority: 0.6, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
        ),
      },
    }))
  );
}

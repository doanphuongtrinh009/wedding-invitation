import type { MetadataRoute } from "next";

import { CONFIG, WEDDING_DATE } from "@/app/lib/data";

function resolveSiteUrl() {
  const siteUrl = CONFIG.meta.siteUrl?.trim();

  if (!siteUrl) {
    return undefined;
  }

  try {
    return new URL(siteUrl);
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = resolveSiteUrl();

  if (!siteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl.origin,
      lastModified: new Date(WEDDING_DATE),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

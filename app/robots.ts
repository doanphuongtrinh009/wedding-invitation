import type { MetadataRoute } from "next";

import { CONFIG } from "@/app/lib/data";

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

export default function robots(): MetadataRoute.Robots {
  const siteUrl = resolveSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/demo", "/tool"],
      },
    ],
    sitemap: siteUrl ? `${siteUrl.origin}/sitemap.xml` : undefined,
    host: siteUrl?.origin,
  };
}

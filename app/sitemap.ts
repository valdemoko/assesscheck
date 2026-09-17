import type { MetadataRoute } from "next";
import { SITE_URL_RESOLVED as SITE_URL } from "@/lib/seo/metadata";
import { getSitemapPages } from "@/lib/seo/site-pages";

// Sitemap entries are derived from the central page registry's publication
// gate: only pages whose publishStatus is "ready" or "source-verified" are
// listed. Pages must be registered in lib/seo/site-pages.ts — a route that
// exists but is not registered (or is not yet ready) will not appear here.
export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapPages().map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: new Date(p.lastVerifiedDate),
    changeFrequency: "monthly" as const,
    priority: p.path === "/" ? 1 : 0.7,
  }));
}

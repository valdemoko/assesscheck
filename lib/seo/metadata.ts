import type { Metadata } from "next";
import type { PageMeta } from "./pages";

export const SITE_NAME = "AssessCheck";

/**
 * Production domain is REQUIRED via NEXT_PUBLIC_SITE_URL. There is no
 * production fallback: a missing variable must fail loudly rather than
 * publish canonicals/sitemaps against a placeholder domain
 * (CONTENT-ADSENSE-AUDIT.md P-08). Local development may set
 * NEXT_PUBLIC_SITE_URL_DEV=1 to build against localhost; that flag can never
 * accidentally ship because `next start`/hosting builds do not set it.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  : process.env.NEXT_PUBLIC_SITE_URL_DEV === "1"
    ? "http://localhost:3000"
    : undefined;

if (!SITE_URL) {
  // Runtime guard above must fail the build; this satisfies the type system.
  throw new Error(
    "NEXT_PUBLIC_SITE_URL is not set. Refusing to build with placeholder URLs: " +
      "canonicals, sitemap, robots, and Open Graph would point at an invalid domain. " +
      "Set it in .env.production (or your hosting config), e.g. https://your-domain.com. " +
      "For local builds only, set NEXT_PUBLIC_SITE_URL_DEV=1 to use http://localhost:3000."
  );
}
export const SITE_URL_RESOLVED: string = SITE_URL;

/**
 * Builds per-page metadata. Every page must call this with its own PageMeta so
 * titles/descriptions stay unique and canonicals stay correct.
 */
export function buildMetadata(page: PageMeta, noindex?: boolean): Metadata {
  const robots = noindex || page.publishStatus === "draft" || page.publishStatus === "research-needed"
    ? { index: false, follow: true }
    : { index: true, follow: true };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `${SITE_URL_RESOLVED}${page.path}` },
    robots,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL_RESOLVED}${page.path}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
    },
  };
}

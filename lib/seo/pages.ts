// Page registry: single source of truth for metadata, canonical URLs, and the
// publication gate used by the sitemap. A page with publishStatus !== "ready"
// is not listed in the sitemap and renders with robots noindex.

export type PublishStatus =
  | "draft"
  | "research-needed"
  | "source-verified"
  | "editorial-review"
  | "ready"
  | "needs-update"
  | "archived";

export interface PageMeta {
  path: string; // route path, e.g. "/texas-property-tax/appraised-value-vs-taxable-value/"
  title: string; // <title>
  description: string; // meta description
  publishStatus: PublishStatus;
  lastVerifiedDate?: string; // ISO date the page's facts were last reviewed
  section: string; // IA section for breadcrumbs/nav grouping
}

export function isIndexable(p: PageMeta): boolean {
  return p.publishStatus === "ready" || p.publishStatus === "source-verified";
}

export function toIndexablePages(pages: PageMeta[]): PageMeta[] {
  return pages.filter(isIndexable);
}

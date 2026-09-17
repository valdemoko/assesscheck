// Central page registry — the single source of truth for sitemap inclusion.
// A page enters the sitemap ONLY when publishStatus is "ready" or
// "source-verified" (isIndexableStatus). This replaces the old hand-maintained
// sitemap literal list, which could drift from the actual routes and from
// each page's declared publishStatus (AUDIT-REPORT.md §29.1, §31).
//
// Contract: every content page registers itself here with its real path and
// publishStatus. buildMetadata (used by every page) reads the same
// publishStatus, so the noindex directive and sitemap inclusion can never
// disagree: a non-ready page is both noindex and absent from the sitemap.

export type PublishStatus =
  | "draft"
  | "research-needed"
  | "source-verified"
  | "editorial-review"
  | "ready"
  | "needs-update"
  | "archived";

export interface SitePageRecord {
  path: string; // route path with trailing slash, matching buildMetadata canonicals
  title: string;
  publishStatus: PublishStatus;
  lastVerifiedDate: string; // ISO date of last factual review
}

export const SITE_PAGES: SitePageRecord[] = [
  { path: "/", title: "Home", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/property-tax-checker/", title: "Assessment checker", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/", title: "Texas property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/how-property-value-is-determined/", title: "How property value is determined", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/appraised-value-vs-taxable-value/", title: "Appraised vs taxable value", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/market-value/", title: "Market value", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/exemptions/", title: "Exemptions", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/property-tax-notice/", title: "Property tax notice", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/appraisal-district-vs-taxing-unit/", title: "Appraisal district vs taxing unit", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/appraisal-review-board/", title: "Appraisal Review Board", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/property-owner-rights/", title: "Property owner rights", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/", title: "Protest overview", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/how-it-works/", title: "How the protest works", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/deadlines/", title: "Protest deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/how-to-file/", title: "How to file", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/informal-conference/", title: "Informal conference", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/arb-hearing/", title: "ARB hearing", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/evidence/", title: "Protest evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/after-the-hearing/", title: "After the hearing", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/appeal-options/", title: "Appeal options", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/evidence/", title: "Evidence hub", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/evidence/property-tax-protest-evidence/", title: "Protest evidence guide", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/evidence/property-condition/", title: "Property condition evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/comparables/", title: "Comparable properties", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  // Florida (state-only — no county pages; see docs/florida-expansion-research.md §20)
  { path: "/florida-property-tax/", title: "Florida property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/save-our-homes/", title: "Save Our Homes and caps", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/trim-notice/", title: "Florida TRIM notice", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/vab-petition/", title: "Florida VAB petition", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/vab-evidence/", title: "Florida VAB evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/deadlines/", title: "Florida deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas/harris-county/", title: "Harris County guide", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas/harris-county/property-tax-checker/", title: "Harris County checker", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas/harris-county/faq/", title: "Harris County FAQ", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/resources/", title: "Official resources", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/faq/", title: "Texas FAQ", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/about/", title: "About", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/about/author/", title: "About the author", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/accessibility/", title: "Accessibility", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/methodology/", title: "Methodology", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/editorial-policy/", title: "Editorial policy", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/corrections/", title: "Corrections", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/contact/", title: "Contact", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/disclaimer/", title: "Disclaimer", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/privacy/", title: "Privacy", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/cookie-policy/", title: "Cookie policy", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/terms/", title: "Terms", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/advertising-disclosure/", title: "Advertising disclosure", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/consent-preferences/", title: "Consent preferences", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
];

export function isIndexableStatus(p: PublishStatus): boolean {
  return p === "ready" || p === "source-verified";
}

export function getSitemapPages(): SitePageRecord[] {
  return SITE_PAGES.filter((p) => isIndexableStatus(p.publishStatus));
}

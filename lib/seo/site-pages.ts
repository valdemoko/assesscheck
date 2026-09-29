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
  { path: "/", title: "Home", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/property-tax-checker/", title: "Assessment checker", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/property-value-estimator/", title: "Property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/texas-property-tax/property-value-estimator/", title: "Texas property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/florida-property-tax/property-value-estimator/", title: "Florida property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/ohio-property-tax/property-value-estimator/", title: "Ohio property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/georgia-property-tax/property-value-estimator/", title: "Georgia property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/arizona-property-tax/property-value-estimator/", title: "Arizona property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/nevada-property-tax/property-value-estimator/", title: "Nevada property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/michigan-property-tax/property-value-estimator/", title: "Michigan property value estimator", publishStatus: "ready", lastVerifiedDate: "2026-09-29" },
  { path: "/texas-property-tax/", title: "Texas property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/texas-property-tax/how-property-value-is-determined/", title: "How property value is determined", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/appraised-value-vs-taxable-value/", title: "Appraised vs taxable value", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/market-value/", title: "Market value", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/exemptions/", title: "Exemptions", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/property-tax-notice/", title: "Property tax notice", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/appraisal-district-vs-taxing-unit/", title: "Appraisal district vs taxing unit", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/appraisal-review-board/", title: "Appraisal Review Board", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/property-owner-rights/", title: "Property owner rights", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/", title: "Protest overview", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/texas-property-tax/protest/how-it-works/", title: "How the protest works", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas-property-tax/protest/deadlines/", title: "Protest deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
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
  { path: "/florida-property-tax/non-homestead-cap/", title: "Florida non-homestead 10% cap", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/florida-property-tax/trim-notice/", title: "Florida TRIM notice", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/vab-petition/", title: "Florida VAB petition", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/vab-evidence/", title: "Florida VAB evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/deadlines/", title: "Florida deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/florida-property-tax/checker/", title: "Florida assessment checker", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  // California (state-only — no county pages; a California county page needs the
  // same verification bar as Harris County. See docs/california-expansion-research.md)
  { path: "/california-property-tax/", title: "California property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/california-property-tax/proposition-13-and-8/", title: "Proposition 13 and Proposition 8", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/california-property-tax/decline-in-value/", title: "California decline in value", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/california-property-tax/notice-of-assessed-value/", title: "California notice of assessed value", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/california-property-tax/assessment-appeal/", title: "California assessment appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/california-property-tax/appeal-evidence/", title: "California appeal evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/california-property-tax/deadlines/", title: "California deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  // Arizona (state-only — no county pages; see docs/arizona-expansion-research.md)
  { path: "/arizona-property-tax/", title: "Arizona property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/arizona-property-tax/full-cash-vs-limited-value/", title: "Full cash value vs limited property value", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/arizona-property-tax/notice-of-valuation/", title: "Arizona notice of valuation", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/arizona-property-tax/petition-for-review/", title: "Arizona petition for review", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/arizona-property-tax/appeal-evidence/", title: "Arizona appeal evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/arizona-property-tax/deadlines/", title: "Arizona deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  // Nevada (state-only — no county pages; see docs/nevada-expansion-research.md.
  // Note the different provenance class: the NRS text was not readable from
  // this environment, so every citation is an official Nevada agency page.)
  { path: "/nevada-property-tax/", title: "Nevada property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/nevada-property-tax/tax-cap-abatement/", title: "Nevada property tax cap (partial abatement)", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/nevada-property-tax/primary-residence-abatement/", title: "Nevada 3% primary residence abatement", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/nevada-property-tax/value-notice/", title: "Nevada value notice", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/nevada-property-tax/evidence/", title: "Nevada appeal evidence", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/nevada-property-tax/value-appeal/", title: "Nevada value appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/nevada-property-tax/deadlines/", title: "Nevada deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  // Oregon (state-only — 36 counties, no county pages; see
  // docs/oregon-expansion-research.md)
  // Michigan (state-only — no county pages; see docs/michigan-expansion-research.md)
  { path: "/michigan-property-tax/", title: "Michigan property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/michigan-property-tax/taxable-value/", title: "Michigan taxable value", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/michigan-property-tax/uncapping/", title: "Michigan uncapping", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/michigan-property-tax/notice-of-assessment/", title: "Michigan notice of assessment", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/michigan-property-tax/property-tax-appeal/", title: "Michigan property tax appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/michigan-property-tax/deadlines/", title: "Michigan deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/oregon-property-tax/", title: "Oregon property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/colorado-property-tax/", title: "Colorado property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/colorado-property-tax/assessment-rate/", title: "Colorado actual value and assessment rate", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/colorado-property-tax/notice-of-valuation/", title: "Colorado notice of valuation", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/colorado-property-tax/protest-and-appeal/", title: "Colorado protest and appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/colorado-property-tax/deadlines/", title: "Colorado deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/ohio-property-tax/", title: "Ohio property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/ohio-property-tax/taxable-value-and-cycle/", title: "Ohio taxable value and reappraisal cycle", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/ohio-property-tax/bor-complaint/", title: "Ohio DTE Form 1 complaint", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/ohio-property-tax/bta-appeal/", title: "Ohio Board of Tax Appeals", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/ohio-property-tax/deadlines/", title: "Ohio deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/north-carolina-property-tax/", title: "North Carolina property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/north-carolina-property-tax/revaluation-cycle/", title: "North Carolina revaluation cycle", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/north-carolina-property-tax/appeal-process/", title: "North Carolina appeal process", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/north-carolina-property-tax/deadlines/", title: "North Carolina deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/massachusetts-property-tax/", title: "Massachusetts property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/massachusetts-property-tax/proposition-2-5/", title: "Massachusetts Proposition 2½ and municipal assessment", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/massachusetts-property-tax/abatement-process/", title: "Massachusetts abatement process", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/massachusetts-property-tax/deadlines/", title: "Massachusetts deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/virginia-property-tax/", title: "Virginia property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/virginia-property-tax/assessment-standards/", title: "Virginia 100% standard and assessing officers", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/virginia-property-tax/board-and-court/", title: "Virginia board of equalization and circuit court", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/virginia-property-tax/deadlines/", title: "Virginia deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-york-property-tax/", title: "New York property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-york-property-tax/roll-and-grievance/", title: "New York roll, uniform percentage, and Grievance Day", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-york-property-tax/judicial-review/", title: "New York judicial review: SCAR and certiorari", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-york-property-tax/deadlines/", title: "New York deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/georgia-property-tax/", title: "Georgia property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/georgia-property-tax/annual-assessment-40-percent/", title: "Georgia annual assessment and the 40% ratio", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/georgia-property-tax/appeal-and-bill-of-rights/", title: "Georgia 45-day appeal and the Bill of Rights", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/georgia-property-tax/homestead-and-deadlines/", title: "Georgia homestead and deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/maryland-property-tax/", title: "Maryland property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/maryland-property-tax/triennial-cycle/", title: "Maryland triennial cycle and phase-in", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/maryland-property-tax/notice-of-assessment/", title: "Maryland notice of assessment", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/maryland-property-tax/appeal-ladder/", title: "Maryland appeal ladder", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/maryland-property-tax/homestead-cap/", title: "Maryland homestead cap", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/maryland-property-tax/deadlines/", title: "Maryland deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/indiana-property-tax/", title: "Indiana property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/indiana-property-tax/annual-adjustment/", title: "Indiana annual adjustment and Form 11", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/indiana-property-tax/form-130-appeal/", title: "Indiana Form 130 appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/indiana-property-tax/circuit-breaker-caps/", title: "Indiana circuit breaker caps", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/indiana-property-tax/deadlines/", title: "Indiana deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/washington-property-tax/", title: "Washington property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/washington-property-tax/levy-limit/", title: "Washington levy limit", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/washington-property-tax/change-of-value-notice/", title: "Washington change-of-value notice", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/washington-property-tax/boe-appeal/", title: "Washington BOE and BTA appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/washington-property-tax/deadlines/", title: "Washington deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-jersey-property-tax/", title: "New Jersey property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-jersey-property-tax/chapter-123/", title: "New Jersey Chapter 123 and the common level range", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-jersey-property-tax/appeal-process/", title: "New Jersey appeal process", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/new-jersey-property-tax/deadlines/", title: "New Jersey deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/minnesota-property-tax/", title: "Minnesota property tax", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/minnesota-property-tax/assessment-to-payable-lag/", title: "Minnesota assessment-to-payable year lag", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/minnesota-property-tax/board-appeals/", title: "Minnesota board appeals", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/minnesota-property-tax/tax-court-appeal/", title: "Minnesota Tax Court appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/minnesota-property-tax/deadlines/", title: "Minnesota deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/oregon-property-tax/measure-50-mav/", title: "Measure 50 and the maximum assessed value", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/oregon-property-tax/changed-property-ratio/", title: "Changed property ratio and exception events", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/oregon-property-tax/tax-statement/", title: "Oregon tax statement", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/oregon-property-tax/appeal/", title: "Oregon appeal", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/oregon-property-tax/deadlines/", title: "Oregon deadlines", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  // Cross-state hub — the internal-linking asset that keeps state pages from
  // being orphans as the number of covered states grows.
  { path: "/property-tax-by-state/", title: "Property tax by state", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/texas/harris-county/", title: "Harris County guide", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/texas/dallas-county/", title: "Dallas County guide", publishStatus: "ready", lastVerifiedDate: "2026-09-28" },
  { path: "/texas/harris-county/property-tax-checker/", title: "Harris County checker", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/texas/harris-county/faq/", title: "Harris County FAQ", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/resources/", title: "Official resources", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  // /faq/ is the cross-state FAQ; each state keeps its own FAQ so that state
  // intent is never split by a global page titled after one state.
  { path: "/faq/", title: "Property tax FAQ", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/texas-property-tax/faq/", title: "Texas FAQ", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
  { path: "/about/", title: "About", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/about/author/", title: "About the author", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/accessibility/", title: "Accessibility", publishStatus: "ready", lastVerifiedDate: "2026-09-17" },
  { path: "/methodology/", title: "Methodology", publishStatus: "ready", lastVerifiedDate: "2026-09-23" },
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

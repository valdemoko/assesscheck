// Central site configuration — the single source of truth for identity,
// authorship, contact, and legal metadata. Pages and components import from
// here; never hardcode these values locally. The author information is used
// exactly as provided by the project owner — nothing is invented beyond it.

import { SITE_URL_RESOLVED } from "@/lib/seo/metadata";

export const siteConfig = {
  /** Canonical brand (visible everywhere). */
  name: "AssessCheck",
  /** Descriptive tagline used in the footer. */
  description:
    "Source-driven property tax assessment information, evidence guidance, and a browser-only assessment checker — Texas, Florida, California, Arizona, Nevada and Oregon.",
  /** Domain — re-exported from the SEO layer, which enforces the env var. */
  url: SITE_URL_RESOLVED,

  /**
   * Per-jurisdiction navigation targets used by shared components (checker
   * "next steps", footer, header). Adding a jurisdiction = adding entries
   * here + its pages, not forking components.
   */
  jurisdictions: {
    texas: {
      name: "Texas",
      hubPath: "/texas-property-tax/",
      deadlinesPath: "/texas-property-tax/protest/deadlines/",
      howToFilePath: "/texas-property-tax/protest/how-to-file/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      checkerPath: "/property-tax-checker/",
    },
    florida: {
      name: "Florida",
      hubPath: "/florida-property-tax/",
      deadlinesPath: "/florida-property-tax/deadlines/",
      howToFilePath: "/florida-property-tax/vab-petition/",
      evidenceGuidePath: "/florida-property-tax/vab-evidence/",
      checkerPath: "/property-tax-checker/", // Florida-specific tool is a later phase
    },
    california: {
      name: "California",
      hubPath: "/california-property-tax/",
      deadlinesPath: "/california-property-tax/deadlines/",
      howToFilePath: "/california-property-tax/assessment-appeal/",
      evidenceGuidePath: "/california-property-tax/appeal-evidence/",
      // There is intentionally NO California checker yet: the published tool
      // screens year-over-year changes, which cannot test California's
      // base-year-value limit (see lib/data/jurisdictions.ts, CapBasis
      // "base-year-inflation"). A base-year screen is a later phase.
      checkerPath: "/california-property-tax/proposition-13-and-8/",
    },
    arizona: {
      name: "Arizona",
      hubPath: "/arizona-property-tax/",
      deadlinesPath: "/arizona-property-tax/deadlines/",
      howToFilePath: "/arizona-property-tax/petition-for-review/",
      evidenceGuidePath: "/arizona-property-tax/appeal-evidence/",
      // Same reasoning as California, with an extra trap: Arizona's tax base is
      // the LIMITED property value, while the figure an owner holds is the FULL
      // CASH value, and "assessed value" there means LPV x 10%. A screening tool
      // has to take both values and ask the § 42-13302 questions first.
      checkerPath: "/arizona-property-tax/full-cash-vs-limited-value/",
    },
    nevada: {
      name: "Nevada",
      hubPath: "/nevada-property-tax/",
      deadlinesPath: "/nevada-property-tax/deadlines/",
      howToFilePath: "/nevada-property-tax/value-appeal/",
      evidenceGuidePath: "/nevada-property-tax/value-appeal/",
      // Third state without a checker, and the reason is arithmetic rather than
      // labeling: the published tool compares a value with last year's value,
      // while Nevada caps the TAX BILL. An assessed value may rise by any
      // percentage under a correctly applied abatement, so screening it would
      // produce confident nonsense. Nevada needs the prior year's bill and the
      // current calculated tax (see CapSubject "tax-amount").
      checkerPath: "/nevada-property-tax/tax-cap-abatement/",
    },
    oregon: {
      name: "Oregon",
      hubPath: "/oregon-property-tax/",
      deadlinesPath: "/oregon-property-tax/deadlines/",
      howToFilePath: "/oregon-property-tax/appeal/",
      evidenceGuidePath: "/oregon-property-tax/appeal/",
      // Fourth state without a checker. Oregon caps the MAXIMUM ASSESSED
      // VALUE, not the assessed value the bill uses, and the assessed value
      // can lawfully jump far beyond 3% (RMV recovering above the MAV,
      // exception value, lost compression). A year-over-year screen would fire
      // on correct assessments; a real tool needs RMV, MAV and the exception
      // events as inputs.
      checkerPath: "/oregon-property-tax/measure-50-mav/",
    },
  } as const,

  /** Cross-state hub page (internal linking for every covered state). */
  statesHubPath: "/property-tax-by-state/",

  // Backwards-compatible aliases (Texas launch paths) — shared chrome still
  // defaults to these; per-jurisdiction pages pass their own.
  deadlinesPath: "/texas-property-tax/protest/deadlines/",
  howToFilePath: "/texas-property-tax/protest/how-to-file/",
  evidenceGuidePath: "/evidence/property-tax-protest-evidence/",

  author: {
    name: "Miguel Iglesias Valenzuela",
    role: "Creator and maintainer",
    /** Provided professional profile. Verified format: https://www.linkedin.com/in/<slug>/ */
    linkedin: "https://www.linkedin.com/in/miguel-iglesias-valenzuela-14069b367/",
    linkedinLabel: "Professional profile on LinkedIn",
  },

  contact: {
    /**
     * Contact email from environment, with fallback to generic project contact.
     */
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto.webproyectos@gmail.com",
    purposes: [
      "Incorrect or outdated information on any page",
      "Broken links to official sources",
      "Problems with the assessment checker",
      "Privacy requests (access, correction, deletion)",
      "Cookie or consent questions",
    ],
  },

  legal: {
    /**
     * Last-updated dates for each legal page. Update the date ONLY when the
     * substantive content of that policy actually changes.
     */
    lastUpdated: {
      privacy: "2026-09-17",
      cookies: "2026-09-17",
      terms: "2026-09-17",
      disclaimer: "2026-09-17",
      advertising: "2026-09-17",
      accessibility: "2026-09-17",
    },
    jurisdictionNote:
      "This site is operated on a personal, non-commercial basis at the time of writing. Nothing here constitutes legal, tax, appraisal, or financial advice.",
  },

  ads: {
    /**
     * Real implementation state — legal pages read this instead of claiming
     * things that are not true. AdSense is NOT active: no ad script, no
     * publisher ID configured, no ad slots rendered.
     */
    adsenseActive: false,
    adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? "",
    /**
     * Consent management: no CMP is implemented yet. When one is added, it
     * must become the single source of truth and /consent-preferences must
     * wire into it — never a second banner.
     */
    cmpImplemented: false,
    analyticsActive: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;

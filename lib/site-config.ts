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
    "Source-driven property tax assessment information, evidence guidance, and a browser-only assessment checker — starting with Texas and Florida.",
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
  } as const,

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
     * Contact email comes exclusively from the environment. There is no
     * default and no invented address: when unset, the contact page shows
     * alternative official channels instead of a placeholder email.
     */
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
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

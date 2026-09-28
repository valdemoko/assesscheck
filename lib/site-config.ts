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
      // The Florida edition of the checker. It screens the assessed-value pair
      // against the Save Our Homes limitation, which is one of the two rules on
      // the site that two notices are enough to test (see
      // docs/expansion-roadmap.md). The labels that ask for assessed rather than
      // market value come from valueInputLabels in lib/data/jurisdictions.ts.
      checkerPath: "/florida-property-tax/checker/",
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
    michigan: {
      name: "Michigan",
      hubPath: "/michigan-property-tax/",
      deadlinesPath: "/michigan-property-tax/deadlines/",
      howToFilePath: "/michigan-property-tax/property-tax-appeal/",
      evidenceGuidePath: "/michigan-property-tax/property-tax-appeal/",
      // Fifth state without a checker, and the reason is arithmetic. The limit is
      // the LOWER of the inflation rate or 5%, and the State Tax Commission
      // publishes that rate in a bulletin this site cannot read; and the
      // limitation does not apply at all in the calendar year after a transfer of
      // ownership, which is exactly the year a large increase is lawful. A
      // year-over-year screen would fire on the assessments that are most
      // obviously correct.
      checkerPath: "/michigan-property-tax/taxable-value/",
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
    colorado: {
      name: "Colorado",
      hubPath: "/colorado-property-tax/",
      deadlinesPath: "/colorado-property-tax/",
      howToFilePath: "/colorado-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Eighth state, and the seventh without a checker. Colorado's tax base
      // is actual value × a legislatively-set assessment rate × the mill
      // levy; the rate changes by statute (two residential rates since 2025),
      // and real property revalues only in odd years — so a year-over-year
      // screen would fire in every even year when the notice value simply
      // carried over. A real tool needs the actual value, the applicable
      // rate(s) and the revaluation cycle as inputs.
      checkerPath: "/colorado-property-tax/",
    },
    ohio: {
      name: "Ohio",
      hubPath: "/ohio-property-tax/",
      deadlinesPath: "/ohio-property-tax/",
      howToFilePath: "/ohio-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Ninth state, and the eighth without a checker. Ohio taxes 35% of true
      // value on a six-year reappraisal cycle with triennial updates, so a
      // year-over-year screen would fire on the reappraisal reset itself.
      checkerPath: "/ohio-property-tax/",
    },
    "north-carolina": {
      name: "North Carolina",
      hubPath: "/north-carolina-property-tax/",
      deadlinesPath: "/north-carolina-property-tax/",
      howToFilePath: "/north-carolina-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Tenth state, and the ninth without a checker. Values carry over from
      // the last revaluation (at least every 8 years), so the year-over-year
      // change measures the revaluation cycle, not a limit — and there is no
      // percentage limit to test at all.
      checkerPath: "/north-carolina-property-tax/",
    },
    massachusetts: {
      name: "Massachusetts",
      hubPath: "/massachusetts-property-tax/",
      deadlinesPath: "/massachusetts-property-tax/",
      howToFilePath: "/massachusetts-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Eleventh state, and the tenth without a checker. There is no
      // percentage cap on value at all — Proposition 2 1/2 limits the
      // municipal levy, a revenue limit — so a value comparison has no rule
      // to test against.
      checkerPath: "/massachusetts-property-tax/",
    },
    virginia: {
      name: "Virginia",
      hubPath: "/virginia-property-tax/",
      deadlinesPath: "/virginia-property-tax/",
      howToFilePath: "/virginia-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Twelfth state, and the eleventh without a checker. Assessments are
      // at 100% of fair market value with no cap on the change; the owner's
      // protections are procedural (15-day notice, board, de novo court), so
      // a year-over-year screen has no limit to test against.
      checkerPath: "/virginia-property-tax/",
    },
    "new-york": {
      name: "New York",
      hubPath: "/new-york-property-tax/",
      deadlinesPath: "/new-york-property-tax/",
      howToFilePath: "/new-york-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Thirteenth state, and the twelfth without a checker. Assessments sit
      // at a municipality-chosen uniform percentage of market value with no
      // cap, and the roll already shows the market-value estimate — the
      // meaningful comparison is assessment vs. that estimate, not year over year.
      checkerPath: "/new-york-property-tax/",
    },
    georgia: {
      name: "Georgia",
      hubPath: "/georgia-property-tax/",
      deadlinesPath: "/georgia-property-tax/",
      howToFilePath: "/georgia-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Fourteenth state, and the thirteenth without a checker. Values are
      // reassessed at market every January 1 with no cap (local valuation
      // freezes are the exception), so a year-over-year screen has no limit
      // to test against.
      checkerPath: "/georgia-property-tax/",
    },
    maryland: {
      name: "Maryland",
      hubPath: "/maryland-property-tax/",
      deadlinesPath: "/maryland-property-tax/",
      howToFilePath: "/maryland-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Fifteenth state, and the fourteenth without a checker. The value
      // standard has no year-over-year limit (100% of market, triennial, with
      // a three-year phase-in), and the 10% homestead cap binds the TAXABLE
      // ASSESSMENT change from the prior year's taxable assessment — a
      // phase-in-and-credit interaction a two-notice screen cannot model.
      checkerPath: "/maryland-property-tax/",
    },
    indiana: {
      name: "Indiana",
      hubPath: "/indiana-property-tax/",
      deadlinesPath: "/indiana-property-tax/",
      howToFilePath: "/indiana-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Sixteenth state, and the fifteenth without a checker. The circuit
      // breaker caps the TAX BILL at a percentage of GROSS assessed value —
      // the same capSubject problem as Nevada — and the caps are computed per
      // property class with referendum carve-outs. A value screen cannot test it.
      checkerPath: "/indiana-property-tax/",
    },
    washington: {
      name: "Washington",
      hubPath: "/washington-property-tax/",
      deadlinesPath: "/washington-property-tax/",
      howToFilePath: "/washington-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Seventeenth state, and the sixteenth without a checker. The limit is
      // a LEVY limit — a growth bound on the dollars each district collects,
      // not on any value — so there is no value change to screen at all; the
      // bill side belongs to district budgets (see the capSubject notes on
      // Nevada and Indiana).
      checkerPath: "/washington-property-tax/",
    },
    "new-jersey": {
      name: "New Jersey",
      hubPath: "/new-jersey-property-tax/",
      deadlinesPath: "/new-jersey-property-tax/",
      howToFilePath: "/new-jersey-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Eighteenth state, and the seventeenth without a checker. The Chapter
      // 123 test compares the ASSESSMENT RATIO with a ±15% band around a
      // certified average — it needs the district's average ratio, not two
      // years of the owner's values, so a two-notice screen cannot run it.
      checkerPath: "/new-jersey-property-tax/",
    },
    minnesota: {
      name: "Minnesota",
      hubPath: "/minnesota-property-tax/",
      deadlinesPath: "/minnesota-property-tax/",
      howToFilePath: "/minnesota-property-tax/",
      evidenceGuidePath: "/evidence/property-tax-protest-evidence/",
      // Nineteenth state, and the eighteenth without a checker. There is no
      // value cap anywhere in the system — class rates distribute the levy —
      // so a year-over-year screen has no limit to test against.
      checkerPath: "/minnesota-property-tax/",
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

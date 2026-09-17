// Jurisdiction rule configuration. All business rules that vary by
// jurisdiction (screening-flag thresholds and statute references,
// official property-search links, value-chain terminology) live here — never
// inside components. Adding a jurisdiction = adding a record + researched
// content, not forking components. See AUDIT-REPORT.md §34 and
// docs/florida-implementation-notes.md.
//
// CAPS ARE NOT UNIVERSAL. Texas's homestead cap (10% per-year increase,
// Tax Code § 23.23) and Florida's caps (Save Our Homes: lower of 3% or CPI,
// § 193.155; non-homestead residential: 10% non-school, § 193.1554) are
// semantically DIFFERENT rules with different comparison bases and reset
// behavior. They share a config shape, never a meaning.

import type { SourceReference } from "@/lib/sources/types";

export interface FlagRule {
  /** Stable identifier used for tests and debugging. */
  flagId: string;
  /** Threshold that triggers the flag. Interpretation depends on kind. */
  threshold: number;
  /** Short claim template; {change} is replaced with the calculated percent. */
  titleTemplate: string;
  /** Jurisdiction-specific explanation, including its statute reference. */
  detail: string;
  /** Provenance for the rule itself (statute/official page), not the user's data. */
  sources: SourceReference[];
}

/**
 * One cap rule. `basis` encodes HOW the limit is applied — jurisdictions
 * must never be collapsed into "an increase of X%":
 * - "annual-increase": the limit bounds THIS YEAR's increase over the prior
 *   year's assessed value (Texas § 23.23; Florida non-homestead § 193.1554(3)).
 * - "lower-of-or-cpi": the limit is the LOWER of a fixed percent and the CPI
 *   change (Florida SOH § 193.155(1)). The tool cannot compute the CPI leg
 *   (it is set per calendar year and this site does not publish it), so the
 *   engine screens only the fixed-percent leg and says so.
 */
export type CapBasis = "annual-increase" | "lower-of-or-cpi";

export interface CapRule {
  /** Stable id, e.g. "tx-homestead-cap", "fl-soh-cap". */
  capId: string;
  /** Which branch of property this cap applies to. */
  appliesTo:
    | "homestead" // property receiving the state's homestead exemption
    | "nonhomestead-residential"; // FL § 193.1554: ≤9 units, no homestead exemption
  basis: CapBasis;
  /** Max annual % increase under this cap (the fixed-percent leg). */
  maxAnnualIncreasePercent: number;
  /** User-facing label for the cap concept (e.g. "Save Our Homes"). */
  label: string;
  /** Jurisdiction-specific explanation, including its statute reference. */
  detail: string;
  /**
   * What voids/refreshes the cap (change of ownership, new construction).
   * Informational — the tool does not adjudicate resets.
   */
  resetNote?: string;
  /** Known limits of this screening leg, stated to the user. */
  limitations?: string;
  sources: SourceReference[];
}

export interface ValueChainStep {
  /** Configured term, e.g. "Just value" (FL) vs "Appraised value" (TX). */
  term: string;
  /** One-sentence definition of what this step represents. */
  definition: string;
  sources: SourceReference[];
}

export interface JurisdictionRules {
  jurisdictionId: string; // e.g. "texas" | "florida"
  /** Human label used in UI ("Texas", "Florida"). */
  jurisdictionName: string;
  /**
   * All caps for this jurisdiction. Texas: one (homestead). Florida: two,
   * with different bases — see CapRule. Empty array = no caps defined.
   */
  caps: CapRule[];
  /**
   * How to reach the homestead-branch cap: the checkbox label and the capId
   * to screen when the user indicates the property qualifies.
   */
  homesteadCapQuestion?: {
    capId: string;
    checkboxLabel: string;
  };
  /** Thresholds that are editorial screening heuristics, explicitly labeled as such. */
  largeIncreaseThresholdPercent: number;
  largeDecreaseThresholdPercent: number;
  /** Official public property-search site for this jurisdiction. */
  propertySearch: {
    label: string;
    url: string;
  };
  /** Terminology of the jurisdiction's value chain, in assessment order. */
  valueChain: ValueChainStep[];
  /** Name of the annual notice that starts the process (TRIM, notice of appraised value...). */
  assessmentNoticeName: string;
  /** Board that hears appeals (ARB, VAB...). */
  reviewBoardName: string;
  sourceIds: string[];
}

export const JURISDICTION_RULES: Record<string, JurisdictionRules> = {
  texas: {
    jurisdictionId: "texas",
    jurisdictionName: "Texas",
    caps: [
      {
        capId: "tx-homestead-cap",
        appliesTo: "homestead",
        basis: "annual-increase",
        maxAnnualIncreasePercent: 10,
        label: "residence homestead cap",
        detail:
          "You indicated a residence homestead cap applies. Under Tax Code § 23.23, a qualifying homestead's appraised value generally may not rise more than 10% per year (plus the market value of new improvements). An increase above 10% may reflect new improvements, a cap that took effect this year, or data worth checking with the appraisal district.",
        resetNote:
          "The cap does not limit the value of new improvements, and it begins again if the property qualifies anew after a change of ownership or a lapse in the exemption.",
        sources: [
          {
            sourceId: "tx-tax-code-23-23",
            supports: "10% annual homestead appraisal cap mechanics.",
          },
        ],
      },
    ],
    homesteadCapQuestion: {
      capId: "tx-homestead-cap",
      checkboxLabel:
        "This property had a residence homestead exemption last year and this year",
    },
    largeIncreaseThresholdPercent: 20,
    largeDecreaseThresholdPercent: 20,
    propertySearch: {
      label: "your appraisal district's official property search",
      url: "https://hcad.org/", // Texas launch = Harris County; per-county pages pass their own where applicable
    },
    valueChain: [
      {
        term: "Appraised value",
        definition:
          "The value the appraisal district places on your property (market value or, for capped homesteads, the limited value).",
        sources: [{ sourceId: "tx-comptroller-valuing-property", supports: "Appraised value concept." }],
      },
      {
        term: "Taxable value",
        definition:
          "Appraised value minus applicable exemptions — the figure taxes are calculated on.",
        sources: [{ sourceId: "tx-comptroller-basics", supports: "Taxable value relationship." }],
      },
    ],
    assessmentNoticeName: "notice of appraised value",
    reviewBoardName: "Appraisal Review Board (ARB)",
    sourceIds: ["tx-tax-code-23-23", "tx-comptroller-valuing-property", "tx-comptroller-basics"],
  },

  florida: {
    jurisdictionId: "florida",
    jurisdictionName: "Florida",
    caps: [
      {
        capId: "fl-soh-cap",
        appliesTo: "homestead",
        basis: "lower-of-or-cpi",
        maxAnnualIncreasePercent: 3,
        label: "Save Our Homes assessment limitation",
        detail:
          "You indicated the property has homestead exemption. Under § 193.155, Florida Statutes, a homestead's assessed value may not increase in a year by more than the LOWER of 3% of the prior year's assessed value or the percent change in the CPI. An increase above 3% over the prior year is worth checking — but note this tool screens only the 3% leg; the actual limit each year is the lower of the two.",
        resetNote:
          "The limitation resets to just value on January 1 after a change of ownership (with statutory exceptions, e.g. transfers between spouses), and additions or improvements are assessed at just value. Portability may transfer part of the benefit to a new Florida homestead.",
        limitations:
          "The CPI leg of the limit is not computed here — the statute makes the limit the lower of 3% or the CPI change, and the applicable CPI figure changes every year. This screen also cannot verify how long the cap has been in effect; a large gap between just value and assessed value usually reflects accumulated Save Our Homes benefit, not an error.",
        sources: [
          {
            sourceId: "fl-stat-193-155",
            supports:
              "SOH cap: annual change limited to the lower of 3% of prior assessed value or the CPI change; reset and addition rules.",
          },
        ],
      },
      {
        capId: "fl-nonhomestead-residential-cap",
        appliesTo: "nonhomestead-residential",
        basis: "annual-increase",
        maxAnnualIncreasePercent: 10,
        label: "non-homestead residential assessment cap",
        detail:
          "For non-homestead residential property (nine or fewer dwelling units that do not receive the homestead exemption), § 193.1554, Florida Statutes, limits the annual assessed-value change to 10% of the prior year's assessed value — for all levies other than school district levies. An increase above 10% may reflect a change of ownership, new construction, or data worth checking.",
        resetNote:
          "The limitation resets to just value on January 1 after a change of ownership or control (including transfers of more than 50% of the owning entity), and additions are assessed at just value.",
        limitations:
          "This cap does not apply to school district levies, so a tax bill can still rise more than 10% even when the cap applies. It also does not apply to non-residential property or vacant land that is not zoned and platted for residential use.",
        sources: [
          {
            sourceId: "fl-stat-193-1554",
            supports:
              "Non-homestead residential 10% cap for non-school levies; change-of-ownership reset.",
          },
        ],
      },
    ],
    homesteadCapQuestion: {
      capId: "fl-soh-cap",
      checkboxLabel:
        "This property had the homestead exemption last year and this year",
    },
    largeIncreaseThresholdPercent: 20,
    largeDecreaseThresholdPercent: 20,
    propertySearch: {
      label: "your county property appraiser's official property search",
      url: "https://floridarevenue.com/property/Pages/Home.aspx", // state-level: DOR property tax oversight hub (county offices found from here)
    },
    valueChain: [
      {
        term: "Just value",
        definition:
          "The property appraiser's determination of your property's value as of January 1 — Florida's equivalent of market value.",
        sources: [{ sourceId: "fl-stat-193-011", supports: "Just valuation factors." }],
      },
      {
        term: "Assessed value",
        definition:
          "Just value after any assessment limitation applies (Save Our Homes for homesteads; the 10% cap for certain non-homestead residential). This is NOT the same as Texas 'appraised value' — it is a post-cap figure.",
        sources: [
          { sourceId: "fl-stat-193-155", supports: "Assessed value under SOH." },
          { sourceId: "fl-stat-193-1554", supports: "Assessed value under the non-homestead cap." },
        ],
      },
      {
        term: "Taxable value",
        definition:
          "Assessed value minus applicable exemptions (for example, the homestead exemption) — the figure millage rates are applied to.",
        sources: [{ sourceId: "fl-stat-196-031", supports: "Exemption amounts applied to assessed value." }],
      },
    ],
    assessmentNoticeName: "TRIM notice (Notice of Proposed Property Taxes)",
    reviewBoardName: "Value Adjustment Board (VAB)",
    sourceIds: [
      "fl-stat-193-155",
      "fl-stat-193-1554",
      "fl-stat-196-031",
      "fl-stat-193-011",
      "fl-stat-200-069",
    ],
  },
};

export function getJurisdictionRules(jurisdictionId: string): JurisdictionRules | undefined {
  return JURISDICTION_RULES[jurisdictionId];
}

export function requireJurisdictionRules(jurisdictionId: string): JurisdictionRules {
  const r = JURISDICTION_RULES[jurisdictionId];
  if (!r) {
    throw new Error(
      `Unknown jurisdictionId \"${jurisdictionId}\". Register rules in /lib/data/jurisdictions.ts before using them.`
    );
  }
  return r;
}

/** Find a cap by id within a jurisdiction (used by the engine and tests). */
export function getCap(rules: JurisdictionRules, capId: string): CapRule | undefined {
  return rules.caps.find((c) => c.capId === capId);
}

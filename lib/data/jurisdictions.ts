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
 * WHAT a cap bounds. Until Nevada, every jurisdiction on this site capped a
 * VALUE, so the subject was implicit; Nevada caps the TAX AMOUNT, which makes
 * it explicit:
 * - "assessed-value": the limit applies to a value (Texas appraised value,
 *   Florida assessed value, California base year value, Arizona limited
 *   property value).
 * - "tax-amount": the limit applies to the TAX BILL, as an increase over the
 *   prior year's bill (Nevada's partial abatement, NRS 361.471–361.4735). A
 *   tax-amount cap says nothing about the value — Nevada's own assessor puts it
 *   as "only the amount of increase on your tax bill is capped" — so a value
 *   comparison CANNOT test it.
 */
export type CapSubject = "assessed-value" | "tax-amount";

/**
 * One cap rule. `basis` encodes HOW the limit is applied — jurisdictions
 * must never be collapsed into "an increase of X%":
 * - "annual-increase": the limit bounds THIS YEAR's increase over the prior
 *   year's assessed value (Texas § 23.23; Florida non-homestead § 193.1554(3)).
 * - "lower-of-or-cpi": the limit is the LOWER of a fixed percent and the CPI
 *   change (Florida SOH § 193.155(1); Michigan Proposal A). The tool cannot
 *   compute the CPI leg (it is set per calendar year and this site does not
 *   publish it), so the engine screens only the fixed-percent leg and says so.
 * - "base-year-inflation": the limit bounds the annual increase of a BASE YEAR
 *   value established at a past event (purchase, new construction, 1975
 *   rollback), not of last year's figure (California, Art. XIII A / § 51).
 *   A year-over-year comparison of assessments CANNOT screen this rule: a
 *   lawful increase can far exceed the percent when the property is recovering
 *   from a temporary decline-in-value assessment.
 */
export type CapBasis = "annual-increase" | "lower-of-or-cpi" | "base-year-inflation";

export interface CapRule {
  /** Stable id, e.g. "tx-homestead-cap", "fl-soh-cap". */
  capId: string;
  /** Which branch of property this cap applies to. */
  appliesTo:
    | "homestead" // property receiving the state's homestead exemption
    | "nonhomestead-residential" // FL § 193.1554: ≤9 units, no homestead exemption
    | "all-real-property" // CA Art. XIII A / AZ § 42-13301: not homestead-specific
    | "primary-residence" // NV: the owner's designated residence, claimed (not an exemption)
    | "other-property"; // NV: the general abatement branch, up to 8%
  /** What the limit bounds: a value, or the tax bill itself (see CapSubject). */
  capSubject: CapSubject;
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
        capSubject: "assessed-value",
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
        capSubject: "assessed-value",
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
        capSubject: "assessed-value",
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

  california: {
    jurisdictionId: "california",
    jurisdictionName: "California",
    caps: [
      {
        capId: "ca-prop-13-base-year-cap",
        appliesTo: "all-real-property",
        capSubject: "assessed-value",
        basis: "base-year-inflation",
        maxAnnualIncreasePercent: 2,
        label: "Proposition 13 base year value limit",
        detail:
          "Under Article XIII A of the California Constitution, a property's base year value is its market value as established in 1975 or at the last change in ownership or completed new construction. That base year value is adjusted once a year by the LOWER of the change in the California CPI or 2% — the adjusted figure is the factored base year value. The limit therefore applies to the base year value of the property, NOT to last year's assessment: a year-over-year comparison of two assessments cannot test whether it was applied correctly.",
        resetNote:
          "A change in ownership or completed new construction establishes a NEW base year value at market value, which is why a property purchased recently can show a much higher assessment than a neighbor's identical home.",
        limitations:
          "This site does not screen this limit. Screening it requires the property's factored base year value and the applicable CPI factor, neither of which is an input this tool collects; comparing this year's assessment with last year's would mislead. A California-specific tool is a later phase.",
        sources: [
          {
            sourceId: "ca-boe-decline-in-value",
            supports:
              "Proposition 13: base year value, the LOWER of the CPI change or 2% annual adjustment, and the factored base year value.",
          },
        ],
      },
      {
        capId: "ca-prop-8-decline-in-value",
        appliesTo: "all-real-property",
        capSubject: "assessed-value",
        basis: "base-year-inflation",
        maxAnnualIncreasePercent: 2,
        label: "Proposition 8 decline-in-value reduction",
        detail:
          "Proposition 8 (codified at § 51(a)(2) of the Revenue and Taxation Code) requires the assessor to enroll the LESSER of the factored base year value or the property's market value as of the January 1 lien date. When a decline-in-value reduction is in place, the assessed value may rise by MORE than 2% in a later year — it simply may not exceed the property's existing factored base year value. A reduction here is temporary, and the assessor reviews it every year.",
        resetNote:
          "The reduction ends when the market value recovers to the factored base year value; a change in ownership or new construction establishes a new base year value at market value.",
        limitations:
          "A large gap between your assessment and a neighbor's does not indicate an error in either direction: one property may be assessed at its factored base year value, the other at a temporarily reduced decline-in-value figure.",
        sources: [
          {
            sourceId: "ca-boe-decline-in-value",
            supports:
              "Proposition 8 lesser-of rule, annual review of the reduction, and the fact that an assessed value in decline-in-value status may rise more than 2% without exceeding the factored base year value.",
          },
        ],
      },
    ],
    // NO homesteadCapQuestion on purpose. The engine's cap branch compares the
    // PRIOR-YEAR figure with the CURRENT figure; California's limit is not
    // expressed that way (see CapBasis "base-year-inflation"), so a screened
    // "increase over last year" would mislead. With no question configured,
    // the engine renders no homestead checkbox and fires no cap flag.
    largeIncreaseThresholdPercent: 20,
    largeDecreaseThresholdPercent: 20,
    propertySearch: {
      label:
        "your county assessor's office (California has 58 county assessors; the BOE's Property Tax Department page links the state framework)",
      url: "https://www.boe.ca.gov/proptaxes/proptax.htm",
    },
    valueChain: [
      {
        term: "Base year value",
        definition:
          "The market value of the property as established in 1975 or at the last change in ownership or completed new construction.",
        sources: [
          { sourceId: "ca-boe-decline-in-value", supports: "Base year value definition." },
        ],
      },
      {
        term: "Factored base year value",
        definition:
          "The base year value adjusted each year by the LOWER of the change in the California CPI or 2%.",
        sources: [
          {
            sourceId: "ca-boe-decline-in-value",
            supports: "Annual CPI-or-2% adjustment and the 'factored base year value' term.",
          },
        ],
      },
      {
        term: "Assessed value",
        definition:
          "The LESSER of the factored base year value or the January 1 market value (a Proposition 8 decline-in-value reduction, which is temporary and reviewed every year).",
        sources: [
          {
            sourceId: "ca-boe-decline-in-value",
            supports: "Assessor enrolls the lesser of the factored base year value or market value as of the lien date.",
          },
        ],
      },
      {
        term: "Net taxable value",
        definition:
          "The assessed value after any exemption or exclusion you qualify for (for example the homeowners' exemption, which must be claimed). The 1% general tax rate applies to this figure; the exact amount appears on your tax bill.",
        sources: [
          {
            sourceId: "ca-cdtfa-important-dates",
            supports:
              "Existence and claim deadlines of the homeowners'/disabled veterans' exemptions (February 15 timely, December 10 late).",
          },
        ],
      },
    ],
    assessmentNoticeName: "notice of assessed value",
    reviewBoardName: "county Assessment Appeals Board",
    sourceIds: [
      "ca-boe-decline-in-value",
      "ca-boe-appeals-faq",
      "ca-cdtfa-important-dates",
      "ca-boe-property-tax-hub",
    ],
  },

  arizona: {
    jurisdictionId: "arizona",
    jurisdictionName: "Arizona",
    caps: [
      {
        capId: "az-limited-property-value-cap",
        appliesTo: "all-real-property",
        capSubject: "assessed-value",
        basis: "annual-increase",
        maxAnnualIncreasePercent: 5,
        label: "limited property value (LPV) limit",
        detail:
          "Arizona places two values on the same property, and they do different jobs. The full cash value (FCV) is the assessor's estimate of market value and is the figure an owner appeals. The limited property value (LPV) is defined by statute as the LPV of the PRECEDING valuation year plus 5% of that value, and it may not exceed the current full cash value (§ 42-13301). The constitutional basis is Art. IX § 18(3)(b): for taxes levied beginning in Tax Year 2015 the value used is the lesser of the full cash value or an amount 5% greater than the prior year's value — before that the rule was different (10% growth, or prior value plus one-fourth of the gap to market), which is why older explanations of Arizona still describe a converge-to-market mechanism that no longer applies. Because the formula runs from last year's LPV, an LPV that rises by more than 5% in a year is usually one of the statutory re-establishment situations below rather than an error — and the FCV itself has no limit at all.",
        resetNote:
          "The LPV is re-established at a level comparable to similar property (instead of prior LPV + 5%) when: property was erroneously omitted from the rolls; a change in physical, objectively verifiable use occurred (a change in the occupant or classification of a single-family residence is NOT a change in use); the property was modified by construction, destruction or demolition and the total value of the modification is equal to or greater than 15% of the full cash value; the property was split, subdivided or consolidated; or the property lost property valuation protection under Art. IX § 18(7) or a statutory valuation (§ 42-13302).",
        limitations:
          "Three limits on this screening leg. (1) The 5% applies to the LIMITED property value; it says nothing about the full cash value, which Arizona does not limit. (2) The limitation does not apply to personal property other than mobile homes or to specified class one property, where the full cash value is used instead (§ 42-13304). (3) The percentage is not a promise about the tax bill: rates are set by the taxing jurisdictions in August, and the tax base follows the LPV, so a bill can move differently from either value.",
        sources: [
          {
            sourceId: "az-ars-42-13301",
            supports:
              "LPV = preceding valuation year's LPV + 5%; LPV may not exceed the current FCV.",
          },
          {
            sourceId: "az-ars-42-13302",
            supports:
              "The complete list of situations in which the LPV is re-established, including the 15%-of-FCV construction threshold.",
          },
          {
            sourceId: "az-ars-42-13304",
            supports: "Property to which the LPV limitation does not apply.",
          },
          {
            sourceId: "az-const-art9-s18",
            supports:
              "Art. IX § 18(3)(b): the lesser of the FCV or 5% over the prior year's value for taxes levied from Tax Year 2015, and the pre-2015 rules it replaced.",
          },
          {
            sourceId: "az-cochise-assessor-faq",
            supports:
              "Tax levied on the LPV since Tax Year 2015; LPV increases while the FCV falls, and never exceeds the FCV.",
          },
        ],
      },
    ],
    // NO homesteadCapQuestion on purpose. The shared checker's cap branch labels
    // its inputs and its flag as an "assessed value" changed year over year.
    // In Arizona the figure an owner holds is a FULL CASH VALUE, and "assessed
    // value" means LPV x 10% — a different, much smaller number. A screen built
    // on those inputs would be wrong twice: wrong label, and wrong whenever a
    // § 42-13302 re-establishment (e.g. construction of 15% or more of the FCV)
    // lawfully pushes the LPV above 5%. Arizona needs a tool that takes both
    // values and asks the re-establishment questions first.
    largeIncreaseThresholdPercent: 20,
    largeDecreaseThresholdPercent: 20,
    propertySearch: {
      label:
        "your county assessor's office (Arizona has 15 county assessors; the State Board of Equalization publishes the appeal forms and procedure)",
      url: "https://sboe.az.gov/taxpayers/how-file-appeal",
    },
    valueChain: [
      {
        term: "Full cash value (FCV)",
        definition:
          "The county assessor's estimate of the property's market value as of January 1 of the valuation year. Since Tax Year 2015 no tax is levied on this value — but it is the value an owner challenges on appeal.",
        sources: [
          {
            sourceId: "az-cochise-assessor-faq",
            supports:
              "FCV is the assessor's required estimate of market value and, since Tax Year 2015, carries no tax levy.",
          },
          {
            sourceId: "az-ars-42-15101",
            supports: "The notice must state the property's full cash value.",
          },
        ],
      },
      {
        term: "Limited property value (LPV)",
        definition:
          "The value the tax is levied on. By statute it is the preceding valuation year's LPV plus 5%, and it may not exceed the current full cash value — unless the property falls into one of the re-establishment situations in § 42-13302.",
        sources: [
          {
            sourceId: "az-ars-42-13301",
            supports: "Definition and 5% formula of the LPV, with the FCV ceiling.",
          },
          {
            sourceId: "az-ars-42-13302",
            supports: "The re-establishment situations.",
          },
        ],
      },
      {
        term: "Assessed value (net assessed valuation)",
        definition:
          "The assessment ratio for the property's legal class applied to the limited property value — 10% for class three and class four property. Tax rates are applied to this figure, and taxing jurisdictions receive it as the net assessed valuation.",
        sources: [
          {
            sourceId: "az-ars-42-15003",
            supports: "Class three assessed valuation is 10% of the FCV or limited valuation, as applicable.",
          },
          {
            sourceId: "az-ars-42-15004",
            supports: "Class four assessed valuation is 10% of the FCV or limited valuation, as applicable.",
          },
          {
            sourceId: "az-ars-42-12003",
            supports:
              "Class three is residential property occupied by the owner as the owner's primary residence (a class three error is a factual question).",
          },
          {
            sourceId: "az-pima-treasurer-info",
            supports:
              "Rates set in August are applied to the net assessed limited value; taxes are based on the assessed limited value.",
          },
        ],
      },
    ],
    assessmentNoticeName: "notice of valuation",
    reviewBoardName:
      "county Board of Equalization (and, in Maricopa and Pima counties only, the State Board of Equalization)",
    sourceIds: [
      "az-const-art9-s18",
      "az-ars-42-13301",
      "az-ars-42-13302",
      "az-ars-42-15101",
      "az-ars-42-16051",
      "az-ars-42-12003",
      "az-sboe-how-to-appeal",
      "az-cochise-assessor-faq",
    ],
  },

  nevada: {
    jurisdictionId: "nevada",
    jurisdictionName: "Nevada",
    caps: [
      {
        capId: "nv-primary-residence-abatement",
        appliesTo: "primary-residence",
        capSubject: "tax-amount",
        basis: "annual-increase",
        maxAnnualIncreasePercent: 3,
        label: "partial abatement for a primary residence (3%)",
        detail:
          "Nevada caps the TAX BILL, not a value. For a property the owner has claimed and designated as the owner's primary residence in Nevada, NRS 361.471–361.4735 provides a partial abatement of the ad valorem taxes: the bill may not increase by more than 3% over the prior year's tax amount. In practice the bill is the LOWER of the calculated tax (assessed value x the tax rate) or the prior year's bill plus 3%, and the difference between the two is the abatement, which appears on the tax bill. One property in Nevada may be designated as the owner's primary residence, and the designation must be claimed with a signed form. Because the cap is on the tax amount, it does not limit the increase in assessed value at all — the county assessor states it directly: 'Is My Taxable Value Capped? No, only the amount of increase on your tax bill is capped.'",
        resetNote:
          "Value NEW TO THE ROLL is not abated: new construction and a change in actual or authorized use receive no cap for that fiscal year, and the cap applies from the following fiscal year. A recorded ownership document removes the owner-occupied abatement until a new claim postcard is completed and returned, which is why a buyer can receive a bill that rises by far more than 3%. Qualification is set on July 1 and a mid-year change of status takes effect the following July 1. Most property has a base year of fiscal year 2004/2005, and a parcel created later has its own base year.",
        limitations:
          "Three limits on this rule, all of them stated by the officials who administer it. (1) The 3% is a ceiling, not a promise: where the general abatement calculation yields a smaller increase, that smaller figure applies. (2) A bill can lawfully exceed the cap for reasons that have nothing to do with value — an exemption that was removed, a change in use, new construction or improvement, a new voter-approved levy or annexation, and non-ad valorem items on the bill, which the cap does not touch. (3) Exemptions are applied AFTER the cap, so the exemption amount and the abatement are not computed on the same base.",
        sources: [
          {
            sourceId: "nv-washoe-assessor-faq",
            supports:
              "The lower-of calculation, the abatement as the difference, exemptions applied after the cap, the July 1 status date, the FY 2004/05 base year, and the statement that taxable value is not capped.",
          },
          {
            sourceId: "nv-washoe-abatement-appeal",
            supports:
              "The 3% level for primary residences, the 8% general level, and the rule that a smaller general-abatement increase is applied instead.",
          },
          {
            sourceId: "nv-clark-tax-abatement",
            supports:
              "Who qualifies for 3% (the owner's primary residence, one property per state), the new-construction exclusion, and the loss of the abatement on a recorded ownership document.",
          },
          {
            sourceId: "nv-washoe-assessor-taxcap",
            supports:
              "AB 489 (2005) origin, the claim requirement, and the reset to the higher cap when a new form is generated.",
          },
        ],
      },
      {
        capId: "nv-general-abatement",
        appliesTo: "other-property",
        capSubject: "tax-amount",
        basis: "annual-increase",
        maxAnnualIncreasePercent: 8,
        label: "general partial abatement (up to 8%)",
        detail:
          "Every property that does not carry the low cap receives the general abatement: the tax bill may not increase by more than a percentage that does not exceed 8% over the prior year's tax amount. This branch covers residences that are not owner occupied, land, commercial buildings, business personal property and aircraft. Note the phrase 'up to': the general figure changes from year to year and is published by the Nevada Department of Taxation as abatement factors that county officials apply, so 8% is the ceiling of the range rather than a guaranteed annual allowance.",
        resetNote:
          "As with the low cap, value new to the roll — new construction and changes in actual or authorized use — receives no abatement for that fiscal year, and remainder parcels are handled under NRS 361.4722.",
        limitations:
          "The general percentage is not a fixed statutory constant: the Department publishes the factors each year, and the county application of them determines the actual cap. This page therefore treats 8% as the statutory maximum and points to the county's own determination on the bill, which prints the abatement level.",
        sources: [
          {
            sourceId: "nv-washoe-abatement-appeal",
            supports:
              "The general ('high cap') level limiting the increase to no more than 8% over the prior year's tax bill, and the property it covers.",
          },
          {
            sourceId: "nv-clark-tax-abatement",
            supports:
              "The list of property types receiving up to 8%, and the no-cap-first-year rule for new construction and changes of use.",
          },
          {
            sourceId: "nv-dor-lgs-publications",
            supports:
              "The Department publishes the general abatement (tax cap) factors used by county officials, and describes the tax cap as capping the amount of property taxes that can be assessed.",
          },
        ],
      },
    ],
    // NO homesteadCapQuestion, and here the reason is arithmetic rather than
    // labeling. The shared checker compares a value this year with a value last
    // year and flags a gap above the cap. Nevada's cap is on the TAX AMOUNT: an
    // assessed value may rise by any percentage while the bill is correctly
    // abated, and the county assessor says exactly that ('only the amount of
    // increase on your tax bill is capped'). Screening Nevada would therefore
    // produce confident nonsense. A Nevada tool needs the prior year's TAX BILL
    // and the current calculated tax — different inputs, not a different label.
    // The generic large-change flags below still apply to the VALUE, which in
    // Nevada is separately appealable to the County Board of Equalization.
    largeIncreaseThresholdPercent: 20,
    largeDecreaseThresholdPercent: 20,
    propertySearch: {
      label:
        "your county assessor's office (Nevada's 17 county assessors each publish their own search; the Department of Taxation lists the county websites)",
      url: "https://tax.nv.gov/news-publications/local-government-services-publications/",
    },
    valueChain: [
      {
        term: "Taxable value",
        definition:
          "The assessor's determination of value for real property: the market value of the land plus the current replacement cost of the improvements less statutory depreciation, recomputed as the property is reappraised or its prior value is factored each year.",
        sources: [
          {
            sourceId: "nv-clark-assessor-real-property",
            supports:
              "Taxable value as the assessor's determination under NRS and Department of Taxation regulations, and the cost method with 1.5%-per-year depreciation capped at 50 years.",
          },
          {
            sourceId: "nv-washoe-assessor-faq",
            supports:
              "Land at full cash value plus buildings at replacement cost less depreciation; annual reappraisal or factoring with factors approved by the Nevada Tax Commission.",
          },
        ],
      },
      {
        term: "Assessed value",
        definition:
          "Thirty-five per cent of the taxable value. The tax rate is applied to this figure, and it is the figure the tax cap does NOT limit.",
        sources: [
          {
            sourceId: "nv-clark-assessor-real-property",
            supports:
              "The .35 assessment ratio with a worked example (taxable value x .35 = assessed value).",
          },
          {
            sourceId: "nv-washoe-assessor-faq",
            supports:
              "Assessed value is 35% of the appraised/taxable value, stated in the property and public-service sections.",
          },
        ],
      },
      {
        term: "Tax bill, then the abatement",
        definition:
          "The calculated tax is the assessed value multiplied by the rate per hundred dollars, with rates set in June. The bill you owe is the LOWER of that calculation or the prior year's bill plus the applicable cap (3% for a claimed primary residence, up to 8% otherwise), and the difference is the abatement printed on the bill.",
        sources: [
          {
            sourceId: "nv-washoe-assessor-faq",
            supports:
              "The bill is the calculated tax or the prior bill plus the cap, whichever is lower; the difference is the abatement.",
          },
          {
            sourceId: "nv-clark-assessor-real-property",
            supports:
              "The same lower-of rule stated in the county's own words, with the calculation chain.",
          },
          {
            sourceId: "nv-washoe-treasurer-billing",
            supports:
              "Rates set in June; bills prepared and mailed by August 1; due dates and installment rules.",
          },
        ],
      },
    ],
    assessmentNoticeName: "value notice",
    reviewBoardName:
      "county Board of Equalization for the value (and, for an abatement determination, the county assessor and then the Nevada Tax Commission)",
    sourceIds: [
      "nv-washoe-assessor-taxcap",
      "nv-washoe-assessor-dates",
      "nv-washoe-abatement-appeal",
      "nv-washoe-assessor-faq",
      "nv-washoe-treasurer-billing",
      "nv-clark-assessor-real-property",
      "nv-clark-tax-abatement",
      "nv-dor-lgs-publications",
    ],
  },

  oregon: {
    jurisdictionId: "oregon",
    jurisdictionName: "Oregon",
    caps: [
      {
        capId: "or-maximum-assessed-value-cap",
        appliesTo: "all-real-property",
        capSubject: "assessed-value",
        basis: "annual-increase",
        maxAnnualIncreasePercent: 3,
        label: "maximum assessed value (Measure 50)",
        detail:
          "Since Measure 50 (1997), Oregon property carries a maximum assessed value — a limit on the taxable value — beside the real market value, which is the assessor's opinion of value. Assuming the property has not changed, the MAV is the GREATER of 103% of the prior year's assessed value or 100% of the prior year's MAV, and the assessed value the tax rate is applied to is the LOWER of the current MAV or the current RMV. So the 3% belongs to the MAV, which is a limit, and not to the assessed value, which is what the arithmetic actually produces: a property taxed below its MAV can see its MAV rise by more than 3% with no change to the property at all.",
        resetNote:
          "The MAV may rise by more than 3% for only one reason: an exception event. The published list covers new construction or additions, and remodelling, renovation or rehabilitation, above the thresholds the Department of Revenue publishes and indexes to the CPI ($18,700 in one year or $46,200 over five years at the time of writing); partitioning or subdivision; rezoning where the property is used consistently with the new zoning; discovery of omitted property; and disqualification from an exemption or special assessment. Ordinary ongoing maintenance and repair is not an exception event. Property built or created after 1995 does not start from 1995-96 values: its MAV is the RMV as of the January 1 following construction multiplied by the county's changed property ratio.",
        limitations:
          "Three limits on reading this as a cap on your bill. (1) The 3% applies to the MAXIMUM ASSESSED VALUE only — the counties state it directly: it is the only component where a 3% limit applies, and tax amounts are not limited to a 3% increase. (2) An assessed value can lawfully rise by much more than 3% without any exception event, when the real market value recovers above the MAV after years below it. (3) The exception thresholds above are the published figures and are indexed to the CPI, so they move.",
        sources: [
          {
            sourceId: "or-oar-150-308-0120",
            supports:
              "The 103% test in the rule's own words: the current MAV is the larger of the prior year's AV x 1.03 or the prior year's MAV.",
          },
          {
            sourceId: "or-multco-assessment-faq",
            supports:
              "MAV as the greater of 103% of the prior AV or 100% of the prior MAV; assessed value as the lower of MAV + 3% or the current RMV; the exception-event list and its dollar thresholds; the post-1995 MAV basis; and the statement that MAV is the only component with a 3% limit.",
          },
          {
            sourceId: "or-hood-river-cpr",
            supports:
              "Measure 50's origin of the MAV, the 1995-96 basis, and the rule that the MAV can rise for only two reasons: the 3% annual increase or an exception.",
          },
        ],
      },
    ],
    // NO homesteadCapQuestion, for the same reason as California, Arizona and
    // Nevada but with an Oregon-specific trap. The obvious screen would compare
    // the assessed value year over year against 3%. In Oregon an assessed value
    // may lawfully exceed that (the RMV recovering above the MAV, exception
    // value being added, compression being lost) and may also stay flat while
    // the MAV rises, because the assessed value is the LOWER of MAV and RMV.
    // Screening it would fire on correct assessments. A real Oregon tool has to
    // take RMV, MAV and the exception events as inputs.
    largeIncreaseThresholdPercent: 20,
    largeDecreaseThresholdPercent: 20,
    propertySearch: {
      label:
        "your county assessor's office (Oregon's 36 counties each run their own valuation and payment lookup; the county page cited here documents its own)",
      url: "https://multco.us/info/property-assessment-faqs",
    },
    valueChain: [
      {
        term: "Real market value (RMV)",
        definition:
          "The assessor's opinion of what the property would sell for: the amount in cash that an informed buyer would pay an informed seller, neither acting under compulsion, in an arm's-length transaction as of the assessment date. It is not the tax base unless it is the lower of the two values.",
        sources: [
          {
            sourceId: "or-multco-assessment-faq",
            supports:
              "The ORS 308.205(1) definition of real market value and the appraisal methods used to estimate it.",
          },
        ],
      },
      {
        term: "Maximum assessed value (MAV)",
        definition:
          "A limit created by Measure 50, not an opinion of value: the greater of 103% of the prior year's assessed value or 100% of the prior year's MAV, increased by more than that only through an exception event. Property built after 1995 starts from its market value multiplied by the changed property ratio.",
        sources: [
          {
            sourceId: "or-multco-assessment-faq",
            supports: "The MAV formula, the pre-1995 and post-1995 bases, and the exception events.",
          },
          {
            sourceId: "or-hood-river-cpr",
            supports:
              "The changed property ratio: average MAV divided by average RMV of unchanged property in the same class, and the county's own worked example.",
          },
          {
            sourceId: "or-oar-150-308-0120",
            supports: "The 103% test and how exception value is removed when a structure is demolished.",
          },
        ],
      },
      {
        term: "Assessed value (AV)",
        definition:
          "The lower of the maximum assessed value or the real market value. This is the figure the tax rate is applied to, and it is why a fall in the market can lower the tax base while the MAV limit keeps rising.",
        sources: [
          {
            sourceId: "or-multco-assessment-faq",
            supports:
              "Assessed value as the lower of last year's MAV plus 3% or the current RMV, and the two reasons an assessed value can increase sharply.",
          },
        ],
      },
      {
        term: "Tax bill (after Measure 5 compression)",
        definition:
          "The bill is the LOWER of two calculations: the assessed value multiplied by your levy code area's tax rate plus special assessments, or the real market value multiplied by the Measure 5 limits ($5 per $1,000 for education, $10 per $1,000 for general government) plus the amounts excluded from those limits. When the second is lower the property is compressed, and losing that compression is one of the reasons a bill can rise by more than 3%.",
        sources: [
          {
            sourceId: "or-multco-tax-calculation",
            supports:
              "The two calculations and the lower-of rule, the Measure 5 limits, the excluded items, the definition of compression, and the causes of a larger increase.",
          },
          {
            sourceId: "or-multco-property-taxes",
            supports: "Statement mailing before October 25 and the payment and installment dates.",
          },
        ],
      },
    ],
    assessmentNoticeName: "tax statement",
    reviewBoardName:
      "county Board of Property Tax Appeals (called the Property Valuation Appeals Board in some counties), then the Magistrate Division of the Oregon Tax Court",
    sourceIds: [
      "or-oar-150-308-0120",
      "or-hood-river-cpr",
      "or-multco-assessment-faq",
      "or-multco-tax-calculation",
      "or-multco-property-taxes",
      "or-yamhill-appeals",
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

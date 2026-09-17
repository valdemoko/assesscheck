// Deadline data model. Deadlines are the highest-risk content on the site.
// Rule: no deadline appears on a page unless it carries a source reference and
// a verification date. Relative rules are expressed as rules, not dates.

import type { SourceReference } from "@/lib/sources/types";

export type DeadlineType =
  | "protest-filing"
  | "notice-delivery"
  | "exemption-application"
  | "rendition"
  | "appeal-district-court"
  | "payment"
  | "hearing-scheduling"
  | "vab-petition-filing"
  | "vab-hearing-notice"
  | "vab-evidence-exchange"
  | "petition-payment";

/**
 * How the deadline is legally expressed (FLORIDA-IMPLEMENTATION §3.2):
 * - "fixed-date": the source states a specific calendar date.
 * - "rule-based": the deadline is a rule anchored to another event (e.g.
 *   "25 days after the notice was mailed"). Rule-based deadlines must never
 *   be rendered as a concrete date without the anchor event.
 */
export type DeadlineBasis = "fixed-date" | "rule-based";

export interface DeadlineRecord {
  deadlineId: string;
  jurisdiction: string; // "Texas" | "Harris County, Texas" | "Florida" | ...
  /** Owning jurisdiction id for machine filtering ("texas" | "florida" | ...). */
  jurisdictionId: string;
  /** Tax year this deadline applies to. If the rule is recurring, state the rule. */
  taxYear: string;
  deadlineType: DeadlineType;
  /** fixed-date | rule-based — how the rule below is legally expressed. */
  deadlineBasis: DeadlineBasis;
  /** Human explanation. Prefer stating the RULE over a fixed calendar date. */
  rule: string;
  /** Only set when a source states a fixed calendar date for a given year. */
  fixedDate?: string;
  /** For rule-based deadlines: the event the rule anchors to. */
  anchoredTo?: string;
  sources: SourceReference[];
  lastVerifiedDate: string;
  verificationStatus: "source-verified" | "needs-verification";
}

export const DEADLINES: DeadlineRecord[] = [
  {
    deadlineId: "tx-protest-filing-general",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    rule:
      "In most cases, a property owner has until May 15, or 30 days after the date the appraisal district delivered the notice of appraised value, whichever is LATER.",
    anchoredTo: "delivery of the notice of appraised value",
    sources: [
      {
        sourceId: "tx-tax-code-41-44",
        supports: "Statutory deadline rule, Tax Code § 41.44(a)(1).",
      },
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports:
          "Comptroller restatement of the deadline and the delivery-date nuance.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "tx-notice-delivery",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "fixed-date",
    rule:
      "The chief appraiser must deliver a notice of appraised value by April 1 (or as soon as practicable) for a qualifying single-family residence homestead, and by May 1 (or as soon as practicable) for other property, when the value rose, the value exceeds the owner's rendition, the property is new to the roll, or an exemption was canceled or reduced.",
    sources: [
      {
        sourceId: "tx-tax-code-25-19",
        supports: "Notice-of-appraised-value delivery deadlines, § 25.19(a).",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "tx-late-protest-good-cause",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    rule:
      "A late-filed protest may still be heard if the owner shows good cause before the ARB approves the appraisal records. Certain offshore workers and full-time military members outside the U.S. may file after the deadline under statutory exceptions.",
    sources: [
      {
        sourceId: "tx-tax-code-41-44",
        supports: "§ 41.44(b) good cause; §§ 41.44(c-1), (c-2) exceptions.",
      },
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "Comptroller description of late-filed protests.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "tx-exemption-application",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "exemption-application",
    deadlineBasis: "fixed-date",
    rule:
      "The general deadline for filing a property tax exemption application is before May 1.",
    sources: [
      {
        sourceId: "tx-comptroller-exemptions",
        supports: "Comptroller exemption application deadline statement.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "tx-district-court-appeal",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-district-court",
    deadlineBasis: "rule-based",
    rule:
      "A party appealing an ARB order must file a petition for review with the district court within 60 days after receiving notice that the final order was entered.",
    sources: [
      {
        sourceId: "tx-tax-code-42-21",
        supports: "§ 42.21(a) 60-day petition deadline.",
      },
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "Comptroller description of district court appeals.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "tx-payment-window",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "Property taxes can generally be paid any time after the tax bill is mailed; taxpayers have until January 31 of the following year to pay without penalty and interest, which begin accumulating February 1.",
    sources: [
      {
        sourceId: "tx-comptroller-basics",
        supports: "Comptroller payment timeline statement.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // FLORIDA — every rule below was verified against the cited statute text
  // on 2026-09-17. Deadlines that could NOT be verified this session (e.g.
  // the DR-486 form number, county-specific VAB filing dates, the exact TRIM
  // mailing date rule) are NOT recorded here and must not appear on pages.
  // ------------------------------------------------------------------
  {
    deadlineId: "fl-vab-petition-value",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "vab-petition-filing",
    deadlineBasis: "rule-based",
    rule:
      "A petition to the Value Adjustment Board about VALUATION must be filed at any time during the taxable year on or before the 25th day following the mailing of the property appraiser's assessment notice (§ 194.011(1) notice). The TRIM notice states the petition filing date for that year on its face — use the date printed on your notice.",
    anchoredTo: "mailing of the § 194.011(1) assessment notice (printed on the TRIM notice)",
    sources: [
      {
        sourceId: "fl-stat-194-011",
        supports: "§ 194.011(3)(d): value petitions on or before the 25th day following notice mailing.",
      },
      {
        sourceId: "fl-stat-200-069",
        supports: "§ 200.069(7): the notice states the on-or-before petition filing date.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-vab-petition-exemption-denial",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "vab-petition-filing",
    deadlineBasis: "rule-based",
    rule:
      "A petition to the Value Adjustment Board about a DENIED exemption, agricultural or similar classification application, or deferral must be filed at any time during the taxable year on or before the 30th day following the mailing of the applicable denial notice.",
    anchoredTo: "mailing of the denial notice (§§ 193.461, 193.503, 193.625, 196.173, 196.193, or tax collector notice under § 197.2425)",
    sources: [
      {
        sourceId: "fl-stat-194-011",
        supports: "§ 194.011(3)(d): 30-day rule for exemption/classification/deferral denials.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-homestead-application",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "exemption-application",
    deadlineBasis: "fixed-date",
    rule:
      "An application for a property tax exemption must be filed with the county property appraiser on or before March 1 of each year. Filing late waives the exemption for that year, except under the statute's limited late-filing provisions (for example, the 25-day late application for applicants showing extenuating circumstances, or documented postal error).",
    fixedDate: "March 1 (annually)",
    sources: [
      {
        sourceId: "fl-stat-196-011",
        supports: "§ 196.011(1)(a) March 1 deadline; § 196.011(8)-(9) limited late exceptions.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-trim-notice",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    rule:
      "The property appraiser delivers the Notice of Proposed Property Taxes (TRIM notice) to each taxpayer on the current assessment roll; the notice states the VAB petition filing date on its face. The exact mailing window is set by the statutory process around millage adoption — always rely on the date printed on the notice you receive.",
    anchoredTo: "the annual millage/truth-in-millage process",
    sources: [
      {
        sourceId: "fl-stat-200-069",
        supports: "§ 200.069: notice content, 'THIS IS NOT A BILL', and the on-or-before petition date printed on the form.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-vab-hearing-notice",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "vab-hearing-notice",
    deadlineBasis: "rule-based",
    rule:
      "The VAB clerk must notify each petitioner of the scheduled hearing time at least 25 calendar days before the scheduled appearance. The board hears petitions not earlier than 30 and not later than 60 days after the assessment notice mailing (subject to DOR roll approval).",
    anchoredTo: "scheduled hearing date / assessment notice mailing",
    sources: [
      {
        sourceId: "fl-stat-194-032",
        supports: "§ 194.032(2)(a) 25-day hearing notice; § 194.032(1)(a) 30–60 day hearing window.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-vab-evidence-exchange",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "vab-evidence-exchange",
    deadlineBasis: "rule-based",
    rule:
      "At least 15 days before the hearing, the petitioner must give the property appraiser a list of evidence with copies of all documentation to be considered. If requested in writing, the property appraiser must provide the petitioner's evidence list no later than 7 days before the hearing.",
    anchoredTo: "the VAB hearing date",
    sources: [
      {
        sourceId: "fl-stat-194-011",
        supports: "§ 194.011(4)(a)-(b) 15-day petitioner exchange and 7-day PA response.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-petition-partial-payment",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "petition-payment",
    deadlineBasis: "rule-based",
    rule:
      "A petitioner challenging assessed value must pay all non-ad valorem assessments and at least 75% of the ad valorem taxes (less the applicable early-payment discount) before the taxes become delinquent — otherwise the VAB must deny the petition by written decision by April 20.",
    anchoredTo: "the delinquency date for the tax year",
    sources: [
      {
        sourceId: "fl-stat-194-014",
        supports: "§ 194.014(1)(a) 75% partial payment; § 194.014(1)(c) April 20 denial.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "fl-taxes-due",
    jurisdiction: "Florida",
    jurisdictionId: "florida",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "Taxes are due and payable November 1 of each year (or as soon thereafter as the certified roll reaches the tax collector) and become delinquent April 1 following the year assessed, or immediately after 60 days from the mailing of the original tax notice, whichever is LATER.",
    fixedDate: "November 1 (due) / April 1 (delinquent, with 60-day-rule extension)",
    sources: [
      { sourceId: "fl-stat-197-333", supports: "§ 197.333 due and delinquency dates." },
      { sourceId: "fl-stat-197-322", supports: "§ 197.322 November 1 roll-opening notice." },
    ],
    lastVerifiedDate: "2026-09-17",
    verificationStatus: "source-verified",
  },
];

export function getDeadlines(jurisdictionId: string): DeadlineRecord[] {
  return DEADLINES.filter((d) => d.jurisdictionId === jurisdictionId);
}

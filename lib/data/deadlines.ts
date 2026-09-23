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
  | "petition-payment"
  // Added for California (state-level): the assessment/lien date, a
  // pre-hearing evidence exchange that is not the Florida VAB exchange, and
  // judicial review (California appeals go to superior court, not a district
  // court, so "appeal-district-court" would be the wrong label there).
  | "assessment-date"
  | "evidence-exchange"
  | "judicial-review"
  // Added for Arizona: the assessor's statutory deadline to decide a
  // petition (§ 42-16054) is a decision date, not a hearing or a filing.
  | "decision"
  // Arizona's constitutional property valuation protection option (senior
  // freeze) is an application for relief, not an exemption or a class change.
  | "relief-application"
  // Added for Nevada, whose system has no protest and no VAB:
  // - "abatement-claim": the signed claim/affidavit that establishes or
  //   maintains the low partial abatement (rentals must renew it yearly).
  // - "abatement-review": the NRS 361.4734 petition for review of an
  //   abatement determination, filed with the assessor.
  // - "appeal-higher-board": an appeal from a county-level decision to a
  //   state-level review body (Nevada's State Board of Equalization, or the
  //   Nevada Tax Commission for an abatement determination).
  | "abatement-claim"
  | "abatement-review"
  | "appeal-higher-board"
  // Added for Oregon: counties run a documented informal review of the value
  // before (and instead of) a board petition, closing on a stated date. It is
  // not a petition, a protest or an exemption application, so labeling it as
  // any of those would mis-describe what the owner is actually doing.
  | "informal-review";

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

  // ------------------------------------------------------------------
  // CALIFORNIA — state-level rules, verified 2026-09-23 against official
  // BOE / CDTFA / county pages (NOT against statute text; see
  // docs/california-expansion-research.md §1.2). The filing window is
  // rule-based BY NATURE: it opens July 2 for everyone and closes on one of
  // two dates depending on whether the county mailed value notices by
  // August 1. The operative date is the one your clerk of the board states.
  // ------------------------------------------------------------------
  {
    deadlineId: "ca-lien-date",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "fixed-date",
    rule:
      "The lien of taxes attaches to all taxable property on January 1 at 12:01 a.m., and the property's value for the year is determined as of that lien date — including the Proposition 8 comparison of market value against the factored base year value.",
    fixedDate: "January 1",
    sources: [
      { sourceId: "ca-boe-tax-calendar", supports: "Lien date January 1 (§ 2192 quoted on the BOE calendar)." },
      {
        sourceId: "ca-boe-decline-in-value",
        supports: "The decline-in-value comparison is made as of the lien date, January 1.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-appeal-filing-window",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    rule:
      "Filing an application for changed assessment opens July 2. The last day is September 15 in counties where the assessor sent value notices by August 1 to all assessees of real property on the secured roll; in all other counties the filing period runs through November 30 (the state calendar lists December 1 for 2026 where that applies). The filing period is also extended in certain circumstances when a taxpayer does not receive timely notice of assessment — the date your clerk of the board publishes for your county is the operative one.",
    anchoredTo:
      "whether your county assessor provided value notices to all secured-roll assessees by August 1 (and, where relevant, whether you received timely notice)",
    sources: [
      {
        sourceId: "ca-rtc-1603",
        supports:
          "The statute itself, read 2026-09-23: (b)(1) filing 'within the time period from July 2 to September 15, inclusive', with the postmark rule; (b)(2) the 60-day fallback where the § 619 notice arrived less than 15 calendar days before the deadline; (b)(3) the extension to November 30 where the assessor does not provide that notice by August 1. This is the authority for the county-by-county difference, not the state calendar.",
      },
      {
        sourceId: "ca-cdtfa-important-dates",
        supports:
          "July 2 opening; September 15 where value notices were provided by August 1; November 30 (December 1 in the 2026 list) in all other counties; extension when timely notice was not received.",
      },
      {
        sourceId: "ca-boe-appeals-faq",
        supports:
          "The regular-assessment filing period runs from July 2 to September 15 or July 2 to November 30, depending on the county.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-notice-of-assessed-value",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    rule:
      "By April 1 the county assessor notifies the clerk of the county appeals board and the tax collector whether the notice of assessed value will be sent to all assessees by August 2. California does not send a value notice to every owner every year — your county's answer to that question is what sets the filing deadline, so ask your assessor for your assessed value if you did not receive a notice.",
    anchoredTo: "the county assessor's April 1 determination",
    sources: [
      {
        sourceId: "ca-boe-tax-calendar",
        supports:
          "April 1 assessor notice to the clerk of the county appeals board and tax collector regarding the August 2 mailing (§ 1603(b)(3)(A)).",
      },
      {
        sourceId: "ca-cdtfa-important-dates",
        supports: "The deadline depends on whether value notices were provided by August 1.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-hearing-notice",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "hearing-scheduling",
    deadlineBasis: "rule-based",
    rule:
      "Notice of the hearing date is mailed to the applicant at least 45 days before the hearing. The law allows up to two years to resolve an application; if your application is not heard within two years, your opinion of value may temporarily become the taxable value of the property until the board hears and decides the case.",
    anchoredTo: "your scheduled hearing date",
    sources: [
      {
        sourceId: "ca-boe-appeals-faq",
        supports: "45-day hearing notice; two-year resolution period and its default-value consequence.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-evidence-exchange",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "evidence-exchange",
    deadlineBasis: "rule-based",
    rule:
      "Either party may request an exchange of information. The request must be made at least 30 days before the hearing, with the requestor including their opinion of value and supporting data; the other party must respond at least 15 days before the hearing. Where an exchange has occurred, the evidence at the hearing is largely restricted to what was exchanged. If the assessed value is more than $100,000 the assessor may itself request the exchange of information from the applicant.",
    anchoredTo: "your scheduled hearing date",
    sources: [
      {
        sourceId: "ca-boe-appeals-faq",
        supports: "30-day request / 15-day response exchange of information and the $100,000 threshold.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-payment-installments",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "The first installment of secured property taxes is due November 1 and becomes delinquent December 10 at 5 p.m. The second installment is due February 1 and becomes delinquent April 10 at 5 p.m. If the delinquency date falls on a weekend or holiday, the delinquency is postponed to the next business day.",
    fixedDate: "November 1 / December 10 (delinquent) · February 1 / April 10 (delinquent)",
    sources: [
      { sourceId: "ca-cdtfa-important-dates", supports: "Nov 1 due, Dec 10 delinquent, Feb 1 due, Apr 10 delinquent." },
      {
        sourceId: "ca-boe-tax-calendar",
        supports: "February 1 due (§ 2606) and April 10 delinquency at 5 p.m. (§§ 2618, 2705).",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-pay-during-appeal",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    rule:
      "You must pay your property taxes on time even while an appeal is pending. Failing to pay produces penalties and interest regardless of the outcome; if you are granted a reduction, you receive a refund with interest.",
    anchoredTo: "the ordinary installment delinquency dates",
    sources: [
      {
        sourceId: "ca-boe-appeals-faq",
        supports: "Taxes must be paid despite a pending appeal; reduction yields a refund with interest.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-homeowners-exemption",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "exemption-application",
    deadlineBasis: "fixed-date",
    rule:
      "February 15 is the last day to timely file a claim for the homeowners' exemption or the disabled veterans' exemption. December 10 is the last day to file a LATE homeowners' exemption claim. (The dollar amount of each exemption is not published by this site — it is stated by your county assessor and on your tax bill.)",
    fixedDate: "February 15 (timely) / December 10 (late homeowners' claim)",
    sources: [
      {
        sourceId: "ca-cdtfa-important-dates",
        supports: "February 15 timely exemption claim; December 10 last day to file a late homeowners'/disabled veterans' claim.",
      },
      {
        sourceId: "ca-yolo-important-dates",
        supports: "Independent county-level confirmation of the February 15 and December 10 exemption dates.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ca-judicial-review",
    jurisdiction: "California",
    jurisdictionId: "california",
    taxYear: "recurring annual rule",
    deadlineType: "judicial-review",
    deadlineBasis: "rule-based",
    rule:
      "The appeals board's decision is final. A challenge to that decision must be filed in the superior court of the county within six months of the decision on your application.",
    anchoredTo: "the date of the appeals board's decision",
    sources: [
      {
        sourceId: "ca-boe-appeals-faq",
        supports: "Decision final; challenge filed in superior court within six months.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // ARIZONA — statute text read on azleg.gov plus SBOE procedure and two
  // county offices, verified 2026-09-23. Arizona's deadlines differ in kind:
  // the petition window runs from the CERTIFIED MAILING of the notice (§
  // 42-15101.A/C) and can restart if the assessor issues an amended notice
  // within 60 days of that mailing (§ 42-15101.E / § 42-16051.D).
  // ------------------------------------------------------------------
  {
    deadlineId: "az-valuation-date",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    rule:
      "January 1 is the valuation date, and it values the FOLLOWING tax year: the valuation set as of January 1 of one year appears on the tax bill for the next year. The assessor values using sales data up to the valuation date (in practice a sales study spanning roughly the prior 18 months), so market changes after January 1 are not evidence about a valuation set as of that date.",
    anchoredTo: "January 1 of the valuation year, one year before the tax year it feeds",
    sources: [
      {
        sourceId: "az-sboe-how-to-appeal",
        supports: "January 1 is the property valuation date for the following tax year.",
      },
      {
        sourceId: "az-cochise-assessor-faq",
        supports:
          "Valuation year precedes tax year; the 2027 valuation is set as of January 1, 2026 using 18 months of sales data, and later market conditions are not relevant.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-notice-of-valuation",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "fixed-date",
    rule:
      "The county assessor notifies each owner of record, on any date BEFORE MARCH 1, of the property's full cash value and limited property value to be used for assessment purposes. On the same date each year the assessor certifies the mailing date to the board of supervisors and the department — that certified date is what the petition window runs from. The director may extend the mailing date beyond March 1 by not more than 30 days for an act of God, flood, fire or declared emergency, and the extension applies to all property valued by the assessor.",
    fixedDate: "Before March 1 (extendable by up to 30 days by the director for a declared emergency)",
    sources: [
      {
        sourceId: "az-ars-42-15101",
        supports:
          "§ 42-15101(A) notice before March 1 stating FCV and LPV; (C) certification of the mailing date; (D) the 30-day emergency extension.",
      },
      {
        sourceId: "az-sboe-how-to-appeal",
        supports: "Notice of valuation mailed on any date before March 1, including FCV, LPV and property class.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-petition-for-review",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    rule:
      "A petition for review must be filed with the county assessor within 60 days after the date the assessor mailed the notice of valuation — or the amended notice of valuation, if one is issued. The deadline is printed on the notice, and a United States Postal Service postmark is evidence of the filing date. The petition is filed with the assessor, not with a board, and the form is prescribed by the department.",
    anchoredTo:
      "the certified mailing date of the notice of valuation, or of an amended notice issued within 60 days of that mailing",
    sources: [
      {
        sourceId: "az-ars-42-16051",
        supports:
          "§ 42-16051(D) 60 days from the mailing of the notice or amended notice; postmark as evidence of filing.",
      },
      {
        sourceId: "az-ars-42-15101",
        supports:
          "§ 42-15101(E) the assessor may amend the notice of valuation within 60 days after the original mailing.",
      },
      {
        sourceId: "az-sboe-how-to-appeal",
        supports: "Step 1 petition filed with the county assessor within 60 days of mailing; deadline printed on the notice.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-amended-notice",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    rule:
      "Within 60 days after the mailing of the notice of valuation, the assessor may AMEND the notice if property characteristic data applied to a neighborhood or classification grouping produced an incorrect opinion of value; amended notices are typically sent in late September. An amended notice restarts the 60-day petition window, which is why an owner who has already filed should check whether a later notice was issued.",
    anchoredTo: "the mailing date of the original notice of valuation",
    sources: [
      {
        sourceId: "az-ars-42-15101",
        supports: "§ 42-15101(E) power to amend within 60 days and to re-notify the owner.",
      },
      {
        sourceId: "az-ars-42-16051",
        supports: "§ 42-16051(D) the petition window runs from the mailing of the notice or the amended notice.",
      },
      {
        sourceId: "az-sboe-how-to-appeal",
        supports: "Amended notices are typically sent by the county assessor in late September.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-assessor-decision",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "decision",
    deadlineBasis: "rule-based",
    rule:
      "If the petition asks for a meeting with the assessor's office, the assessor must consider, decide and answer all requests on or before August 15. If the assessor grants the petition, no further appeal is permitted — the matter ends there, and there is nothing left to appeal.",
    anchoredTo: "the assessor's receipt and review of the petition",
    sources: [
      {
        sourceId: "az-sboe-how-to-appeal",
        supports:
          "The assessor must consider, decide and answer all requests on or before August 15 (§§ 42-16054, 42-16055); if the assessor agrees, no further appeal is permitted (§ 42-16056).",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-board-of-equalization-petition",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    rule:
      "If the petitioner does not agree with the assessor's decision, a petition may be filed with the Board of Equalization for that county within 25 days of the date the assessor's decision was mailed. The petitioner may instead bypass the county board and appeal directly to Tax Court within 60 days of that same date. In Maricopa and Pima counties the appeal may continue to the State Board of Equalization.",
    anchoredTo: "the mailing date of the county assessor's decision",
    sources: [
      {
        sourceId: "az-sboe-how-to-appeal",
        supports:
          "25 days to the county Board of Equalization, or 60 days direct to Tax Court, from the mailing of the assessor's decision; SBOE stage in Pima and Maricopa only.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-tax-court",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "judicial-review",
    deadlineBasis: "rule-based",
    rule:
      "An appeal to the Tax Court must be filed within 60 days after the Board of Equalization's decision was mailed. There is also a direct judicial route: an owner who did NOT file a petition with the county assessor may file a petition in Tax Court at any time after receiving the notice of value, but no later than December 15 of the valuation year — the same year the notice of valuation was mailed. All Arizona tax court appeals are heard at Maricopa Superior Court, and the owner is responsible for filing fees.",
    anchoredTo:
      "the mailing date of the board's decision, or December 15 of the valuation year when no administrative appeal was filed",
    sources: [
      {
        sourceId: "az-sboe-how-to-appeal",
        supports:
          "60 days from the board decision; December 15 direct route when no assessor appeal was filed; Maricopa Superior Court venue and filing fees.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-payment-halves",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "Tax statements are mailed in September. The first half is due October 1 and becomes delinquent November 1 at 5 p.m.; the second half is due March 1 and becomes delinquent May 1 at 5 p.m. A full-year payment made by December 31 waives interest on any unpaid first-half balance, and when the total annual tax is $100 or less the entire amount is due December 31. Unpaid balances bear statutory interest of 16% per year (1.333% per month), and if a delinquency date falls on a weekend or legal holiday the tax becomes delinquent at 5 p.m. the next business day. (Published by the Pima County Treasurer; other counties publish the same statutory dates with their own payment options.)",
    fixedDate: "October 1 / November 1 (delinquent) · March 1 / May 1 (delinquent)",
    sources: [
      {
        sourceId: "az-pima-treasurer-info",
        supports:
          "September statements; the two due dates and their delinquency dates; December 31 full-year rule; the $100 rule; 16% statutory interest; next-business-day rule.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-valuation-protection-application",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "relief-application",
    deadlineBasis: "fixed-date",
    rule:
      "A resident aged 65 or older may apply to the county assessor for a property valuation protection option on the primary residence, including not more than ten acres of undeveloped appurtenant land, on or before September 1; the assessor notifies the resident whether the application is accepted or denied on or before December 1. An application filed after September 1 is processed for the following year. Eligibility requires two years of residence in the primary residence, and income is limited by reference to the federal supplemental security income benefit rate (400% of that rate for one owner, 500% where the property is owned by two or more persons) — a limit the assessor reviews every three years on the owner's average income over the previous three years. If approved, the value remains fixed at the limited value in effect in the year the option was filed, the owner must reapply every three years, and if title is conveyed to a person who does not qualify the option terminates and the property reverts to its current full cash value.",
    fixedDate: "September 1 (application) / December 1 (acceptance or denial)",
    sources: [
      {
        sourceId: "az-const-art9-s18",
        supports:
          "Art. IX § 18(7): the September 1 application, the December 1 decision, the two-year residence requirement, the SSI-linked income limits and triennial review, the fixed value while eligible, the three-year reapplication, and termination on conveyance to a non-qualifying person.",
      },
      {
        sourceId: "az-ars-42-13302",
        supports:
          "§ 42-13302(A)(5): loss of the property valuation protection option re-establishes the limited property value.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "az-rate-setting",
    jurisdiction: "Arizona",
    jurisdictionId: "arizona",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    rule:
      "Tax rates are not set by the assessor. The county board of supervisors sets the rates for the taxing jurisdictions that apply to the property on the third Monday in August, and those rates are applied to the property's net assessed limited value from the previous year. This is why appealing a value and disputing a tax bill are two different things: the value is fixed before the rates exist.",
    anchoredTo: "the third Monday in August of the tax year",
    sources: [
      {
        sourceId: "az-pima-treasurer-info",
        supports:
          "Rates set on the third Monday in August and applied to the net assessed limited value from the previous year.",
      },
      {
        sourceId: "az-cochise-assessor-faq",
        supports:
          "The assessor is not a taxing authority; the taxing jurisdictions set rates that produce the bill.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // NEVADA — fiscal year 2026/2027 (July 1, 2026 - June 30, 2027).
  // Nevada's clock is a FISCAL-YEAR clock: the lien date is July 1, not
  // January 1, and a property's qualification status (for example the primary
  // residence designation that carries the 3% abatement) is fixed as of July 1.
  // Dates and their bases come from the Washoe County Assessor's calendar, the
  // Washoe County Treasurer's billing page and the Clark County Assessor; see
  // docs/nevada-expansion-research.md §1.2 on why the statutes themselves are
  // cited through official agencies rather than read directly.
  // ------------------------------------------------------------------
  {
    deadlineId: "nv-lien-date",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule (the Nevada fiscal year runs July 1 - June 30)",
    deadlineType: "assessment-date",
    deadlineBasis: "fixed-date",
    rule:
      "July 1 is the lien date and the first day of Nevada's fiscal year. The assessor's published calendar names July 1 as the lien date and runs the fiscal year from July 1 to June 30, and a property's qualification status (for example whether it is the owner's primary residence, which is what carries the 3% abatement) is fixed as of that date. A mid-year change of status takes effect the following July 1, not immediately.",
    sources: [
      {
        sourceId: "nv-washoe-assessor-dates",
        supports: "July 1 lien date; July 1 - June 30 fiscal year.",
      },
      {
        sourceId: "nv-washoe-assessor-faq",
        supports:
          "The cap is applied based on the status effective July 1 of the fiscal year, and a change of qualification takes effect the following July 1.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-roll-close-value-notices",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "fixed-date",
    rule:
      "The assessor's calendar lists January 1 as the close of the real property roll and the deadline for mailing value notices to owners, and notes that under NRS 361.310 the actual mailing may occur somewhat earlier. In practice the office mails the notices when the roll is completed each November, so the notice that starts your appeal clock usually reaches you before the calendar date.",
    sources: [
      {
        sourceId: "nv-washoe-assessor-dates",
        supports:
          "January 1 close of the real property roll and deadline for mailing value notices, with the NRS 361.310 note that the date may be earlier.",
      },
      {
        sourceId: "nv-washoe-assessor-faq",
        supports:
          "Value change notices are sent when the real property tax roll is completed each November.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-value-appeal-county-board",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "fixed-date",
    rule:
      "An appeal of the assessed value is filed at the county assessor's office by January 15; if January 15 falls on a Saturday, Sunday or legal holiday, the appeal may be filed on the next business day. The appeal goes to the County Board of Equalization, and the burden of proof is on the taxpayer to show that the valuation is in error or that the taxable value exceeds full cash value.",
    sources: [
      {
        sourceId: "nv-washoe-assessor-dates",
        supports: "January 15 deadline and the next-business-day rule.",
      },
      {
        sourceId: "nv-washoe-assessor-faq",
        supports:
          "Appeal filed with the assessor's office by January 15; County Board of Equalization; burden of proof on the taxpayer.",
      },
      {
        sourceId: "nv-clark-assessor-real-property",
        supports:
          "Forms available from the assessor during December; filing deadline January 15, extended to the next business day when it falls on a holiday or weekend.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-state-board-appeal",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "fixed-date",
    rule:
      "A decision of the County Board of Equalization may be appealed to the State Board of Equalization by March 10.",
    sources: [
      {
        sourceId: "nv-washoe-assessor-dates",
        supports: "March 10 deadline to appeal a County Board of Equalization decision.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-exemption-application",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "exemption-application",
    deadlineBasis: "fixed-date",
    rule:
      "Most real property exemptions must be applied for or renewed by June 15, before the start of the new fiscal year. An initial claim for a tax exemption on real property acquired after June 15 and before July 1 must be filed by July 5.",
    sources: [
      {
        sourceId: "nv-washoe-assessor-dates",
        supports: "June 15 exemption deadline; July 5 rule for property acquired June 15 - July 1.",
      },
      {
        sourceId: "nv-washoe-assessor-faq",
        supports:
          "Exemption card signed on or before June 15 for real property, and the July 5 acquisition rule.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-rental-abatement-claim",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "abatement-claim",
    deadlineBasis: "fixed-date",
    rule:
      "Residential rental properties must file a partial abatement claim (the rent affidavit) by June 15 for the coming fiscal year, and must do so EVERY year because the rents are verified annually. Every unit on the parcel must rent at or below the HUD fair market rent for the county, and the county mails the affidavits in April or May.",
    sources: [
      {
        sourceId: "nv-washoe-assessor-dates",
        supports:
          "June 15 deadline for rental properties to file the partial abatement form for the next fiscal year.",
      },
      {
        sourceId: "nv-washoe-assessor-taxcap",
        supports:
          "Affidavits mailed in May and returned by June 15; an affidavit is required every year for residential rentals.",
      },
      {
        sourceId: "nv-washoe-assessor-faq",
        supports: "Every rental unit on the parcel must rent at or below the HUD median market rent.",
      },
      {
        sourceId: "nv-clark-tax-abatement",
        supports: "Rental affidavits sent to owners in April or May with the eligible rent amounts.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-abatement-petition",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "abatement-review",
    deadlineBasis: "fixed-date",
    rule:
      "If the abatement determination on your property is wrong, the petition for review under NRS 361.4734 is filed with the county assessor by June 30 of the fiscal year concerned (for the 2024/2025 fiscal year, by June 30, 2024). The assessor acknowledges within 15 days and decides within 30 days of receiving it. Filing a claim for a status you have not yet claimed is a different step from appealing a determination already made.",
    sources: [
      {
        sourceId: "nv-washoe-abatement-appeal",
        supports:
          "Petition for review under NRS 361.4734, June 30 deadline, 15-day acknowledgment, 30-day decision, and the claim-versus-appeal distinction.",
      },
      {
        sourceId: "nv-washoe-assessor-dates",
        supports: "June 30 deadline to appeal the partial abatement qualification or determination.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-tax-commission-appeal",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    rule:
      "A taxpayer who disagrees with the assessor's decision on an abatement has 30 days after receiving the notice of decision to appeal to the Nevada Tax Commission. A hearing officer conducts the hearing, and the proposed order may be objected to within 20 days.",
    anchoredTo: "receipt of the assessor's notice of decision on the abatement",
    sources: [
      {
        sourceId: "nv-washoe-abatement-appeal",
        supports:
          "30 days to appeal to the Nevada Tax Commission; hearing officer's proposed order and the 20-day objection window.",
      },
      {
        sourceId: "nv-washoe-assessor-faq",
        supports: "The same 30-day rule stated in the county's FAQ.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nv-tax-payment-installments",
    jurisdiction: "Nevada",
    jurisdictionId: "nevada",
    taxYear: "FY 2026/2027 published dates",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    rule:
      "Taxes are due on the third Monday in August, and may be paid in four installments when the taxes on the parcel exceed $100: the third Monday in August, the first Monday in October, the first Monday in January and the first Monday in March. For fiscal year 2026/2027 the treasurer's published dates are August 17, 2026, October 5, 2026, January 4, 2027 and March 1, 2027, and the last day to pay each without penalty is ten days later (August 27, October 15, January 14, March 11). Penalties attach per NRS 361.483, and the county files a trustee's certificate on the first Monday in June against property not paid in full.",
    anchoredTo: "the third Monday in August billing date for the fiscal year",
    sources: [
      {
        sourceId: "nv-washoe-treasurer-billing",
        supports:
          "Rate setting in June, bills mailed by August 1, the third-Monday-in-August due date, the $100 installment threshold, the four statutory dates, the published FY 2026/2027 dates, the ten-day grace period and the trustee's certificate.",
      },
      {
        sourceId: "nv-washoe-assessor-dates",
        supports: "The four quarterly installment dates in rule form.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // OREGON — tax year 2026-2027. The clock is anchored to the TAX STATEMENT
  // mailed by October 25 (Oregon does not run a separate value-notice step in
  // the way the other states here do), and the board deadline is a fixed
  // calendar date, December 31. See docs/oregon-expansion-research.md §1.2 on
  // why the ORS text itself is cited through official pages that name it.
  // ------------------------------------------------------------------
  {
    deadlineId: "or-assessment-date",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "fixed-date",
    rule:
      "The county assessor prepares the assessment roll as of January 1 of each year, and the real market value is the property's value as of that assessment date. Evidence you present about value has to speak to the property as it existed on that date, not to later market movement.",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports: "The roll is prepared as of January 1; evidence must reflect the value as of January 1.",
      },
      {
        sourceId: "or-multco-assessment-faq",
        supports:
          "Real market value is the amount that would be paid as of the assessment date for the tax year.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-business-personal-property-return",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "rendition",
    deadlineBasis: "fixed-date",
    rule:
      "A business owning or possessing taxable business personal property must file a Confidential Personal Property Return (form 150-553-004) with the county assessor by March 15. No late-filing extension is allowed, and the board may waive a late-filing penalty only for good and sufficient cause.",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "March 15 return deadline with no extension, the return form number, and the board's power to hear penalty appeals.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-tax-statement-mailing",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "fixed-date",
    rule:
      "The county mails the property tax statement before October 25 each year. The statement carries the assessed value, the maximum assessed value and the real market value, which is why the appeal clock runs from receiving it rather than from a separate value notice.",
    sources: [
      {
        sourceId: "or-multco-property-taxes",
        supports: "Statements are mailed before October 25 every year.",
      },
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "Board petitions may be filed after tax bills are received in late October, and the appeal deadline is measured from the statement.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-informal-review",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "informal-review",
    deadlineBasis: "fixed-date",
    rule:
      "A request for review of the value may be made to the assessor's office through December 16. The counties ask owners not to wait until that date, because the account has to be reviewed and any warranted reduction processed in time for the tax corrections that must be completed by December 31.",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "Request for review through December 16, the request not to wait, and the December 31 corrections requirement (ORS 308.242).",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-bopta-petition",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "fixed-date",
    rule:
      "A petition to the county Board of Property Tax Appeals (called the Property Valuation Appeals Board in some counties) may be filed once tax statements are received in late October, and must be filed with the county clerk by December 31 — or the next business day if December 31 falls on a weekend or legal holiday. There is no fee at this level. Hearings are held between the first Monday in February and April 15, with written notice at least five days in advance, and the owner is not required to attend.",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "Filing window from late October to December 31 with the next-business-day rule, filed with the county clerk, no fee, the hearing window, the five-day notice and the owner's right not to appear.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-tax-court-magistrate",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "judicial-review",
    deadlineBasis: "fixed-date",
    rule:
      "Some matters go directly to the Magistrate Division of the Oregon Tax Court rather than to the county board — industrial property appraised by the Department of Revenue, and an appeal filed after the board deadline or about a prior year. That filing is also due by December 31, moving to the next business day, and carries a court filing fee ($281 at the time of the county's page). Certain standards must be met for the magistrate to hear the appeal.",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "Direct Magistrate Division route and its December 31 deadline, the fee, and the standards that must be met.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-tax-court-complaint",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "judicial-review",
    deadlineBasis: "rule-based",
    rule:
      "A board decision is appealed to the Magistrate Division of the Oregon Tax Court by filing a written complaint within 30 days — the county stresses that this is 30 days, not one month — after the board's order is mailed. A filing fee applies at this level.",
    anchoredTo: "the mailing date of the board's order",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "Complaint within 30 days (not one month) of the order's mailing, and the filing fee at the Tax Court level.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-tax-court-regular-division",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "judicial-review",
    deadlineBasis: "rule-based",
    rule:
      "A magistrate's decision may be appealed to the Regular Division of the Oregon Tax Court by filing a complaint within 60 days — again, days, not two months — after the date of the magistrate's decision. A Regular Division trial is a formal proceeding, and a decision there can be appealed to the Oregon Supreme Court.",
    anchoredTo: "the date of the magistrate's decision",
    sources: [
      {
        sourceId: "or-yamhill-appeals",
        supports:
          "Complaint within 60 days of the magistrate's decision, the formal nature of the proceeding, and the route to the Supreme Court.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "or-payment-installments",
    jurisdiction: "Oregon",
    jurisdictionId: "oregon",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    rule:
      "Taxes may be paid in full by November 15, or in up to three installments due November 15, February 15 and May 15. When the 15th falls on a weekend or holiday the due date moves to the next business day.",
    anchoredTo: "the tax statement mailed before October 25",
    sources: [
      {
        sourceId: "or-multco-property-taxes",
        supports: "Payment in full by November 15, further installments in February and May, and the next-business-day rule.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
];

export function getDeadlines(jurisdictionId: string): DeadlineRecord[] {
  return DEADLINES.filter((d) => d.jurisdictionId === jurisdictionId);
}

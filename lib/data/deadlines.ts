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
  | "late-remedy"
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
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "tx-missed-deadline-corrections",
    jurisdiction: "Texas",
    jurisdictionId: "texas",
    taxYear: "recurring annual rule",
    deadlineType: "late-remedy",
    deadlineBasis: "rule-based",
    rule:
      "Remedies that survive a missed protest deadline: a protest for failure to receive a required notice (§ 41.411), filed before the delinquency date; a motion for correction of a substantially over-appraised homestead (at least 1/4 over) or non-homestead (at least 1/3 over), filed with the undisputed taxes before the delinquency date; and a motion to correct a clerical error, multiple appraisal, or ownership error, which may cover the current and five preceding tax years. The roll cannot be corrected for a year the property was subject to a protest.",
    anchoredTo: "the delinquency date for the tax year",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports:
          "Comptroller 'Late-Filed Protests' section: failure-to-receive-notice protests, 1/4 and 1/3 correction motions, clerical/ownership motions, joint motions, and the no-correction-after-protest rule.",
      },
      {
        sourceId: "tx-tax-code-41-411",
        supports: "§ 41.411 protest of failure to give notice.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
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
    deadlineId: "mi-tax-day",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "fixed-date",
    rule:
      "Michigan assesses property as of December 31 — the state's tax day — and the assessor's determination of assessed value is made as of that date. The taxes levied on that assessment are billed in the following year, so the values on a bill are the ones the property carried at the end of the previous calendar year.",
    sources: [
      {
        sourceId: "mi-oakland-equalization",
        supports:
          "Assessed value is determined as of December 31 (Tax Day) of the previous year.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mi-notice-of-assessment",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    anchoredTo: "the March meetings of the local boards of review",
    rule:
      "The notice of assessment, taxable valuation and property classification is mailed before the March meetings of the local boards of review. It carries the state equalized value, the principal residence exemption percentage and whether a transfer of ownership occurred, which is the fact that decides whether the taxable value is capped that year.",
    sources: [
      {
        sourceId: "mi-oakland-equalization",
        supports:
          "The notice is mailed prior to the March board meetings and carries the SEV, the principal residence exemption percentage and whether a transfer of ownership occurred.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mi-march-board-protest",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the March Board of Review's meetings",
    rule:
      "A protest to the March Board of Review is the required first step for residential and agricultural property, and making it is what reserves the right to appeal to the Michigan Tax Tribunal. The board meets in March. This site does not state the session requirement or the exact days, because the statute that sets them could not be read from an official source; your city or township publishes its own board schedule.",
    sources: [
      {
        sourceId: "mi-oakland-faq",
        supports:
          "The March Board of Review as the required first stop for residential and agricultural property, and that a board appeal reserves the Tribunal right.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mi-board-written-notification",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "decision",
    deadlineBasis: "fixed-date",
    rule:
      "The board must notify a protester in writing by the first Monday in June of its action on the protest, and that notice must state the right to appeal to the Michigan Tax Tribunal, the time limits for doing so, and the Tribunal's address. The board's decision binds the current assessment year only.",
    sources: [
      {
        sourceId: "mi-oakland-faq",
        supports:
          "Written notification by the first Monday in June, its required contents, and that the decision binds only the current year.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mi-tribunal-residential-agricultural",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "fixed-date",
    rule:
      "Residential and agricultural property must protest to the March Board of Review first, and its appeal to the Michigan Tax Tribunal is due on or before July 31 of the tax year involved.",
    sources: [
      {
        sourceId: "mi-oakland-faq",
        supports:
          "Residential and agricultural property is required to protest to the board first, with a Tribunal deadline of July 31.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mi-tribunal-commercial-industrial",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "fixed-date",
    rule:
      "Since 2007, commercial and industrial real property may appeal directly to the Michigan Tax Tribunal on or before May 31, without petitioning the March Board of Review first. Personal property may also go directly to the Tribunal, provided a personal property statement was filed before the board commences.",
    sources: [
      {
        sourceId: "mi-oakland-faq",
        supports:
          "The direct-to-Tribunal route for commercial and industrial property since 2007, its May 31 deadline, and the personal property condition.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mi-principal-residence-exemption",
    jurisdiction: "Michigan",
    jurisdictionId: "michigan",
    taxYear: "recurring annual rule",
    deadlineType: "exemption-application",
    deadlineBasis: "fixed-date",
    rule:
      "The principal residence exemption affidavit is filed with the city or township by June 1 for the succeeding summer property tax levy, or by November 1 for the succeeding winter property tax levy. Which of the two applies depends on when your local unit collects its school taxes.",
    sources: [
      {
        sourceId: "mi-oakland-equalization",
        supports:
          "The June 1 and November 1 principal residence exemption affidavit deadlines for the succeeding summer and winter levies.",
      },
    ],
    lastVerifiedDate: "2026-09-23",
    verificationStatus: "source-verified",
  },
  // ------------------------------------------------------------------
  // COLORADO — state-level rules, verified 2026-09-28 against the Division
  // of Property Taxation's own pages (dpt.colorado.gov). Two properties of
  // this jurisdiction shape every date below: statutory dates shift for
  // weekends and holidays (the Division's own footnote), and counties over
  // 300,000 population must use an ALTERNATE schedule whose later steps run
  // roughly two months behind the standard one. Real property (below) and
  // personal property (NOV June 15, protest June 30, CBOE July 20) run on
  // different calendars and must never be mixed.
  // ------------------------------------------------------------------
  {
    deadlineId: "co-nov-real-property",
    jurisdiction: "Colorado",
    jurisdictionId: "colorado",
    taxYear: "recurring annual rule (real property revalued in odd-numbered years)",
    deadlineType: "notice-delivery",
    deadlineBasis: "fixed-date",
    rule:
      "Real property Notices of Valuation are mailed by May 1 of each year. The notice lists the location, classification, value-relevant characteristics, and the actual value for the prior and current years. Statutory dates shift for weekends and holidays — the date printed on the notice and the assessor's published dates are the ones to rely on.",
    fixedDate: "By May 1 (annual mailing; real property revalued in odd years)",
    sources: [
      {
        sourceId: "co-dpt-understanding",
        supports:
          "Real property NOV mailed by May 1; contents of the notice; the weekend/holiday footnote.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "co-protest-real-property",
    jurisdiction: "Colorado",
    jurisdictionId: "colorado",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    rule:
      "An owner who disagrees with the actual value or classification presents oral or written objections to the county assessor during the protest period, May 1 through June 8 for real property. Counties with populations over 300,000 are required to use an alternate schedule, and any county may elect it — check the assessor's published dates.",
    anchoredTo: "the May 1 notice mailing window",
    sources: [
      {
        sourceId: "co-dpt-understanding",
        supports:
          "Protest period May 1 - June 8 (real property); alternate schedule required in counties over 300,000 population and elective in others.",
      },
      {
        sourceId: "co-dpt-property-tax-map",
        supports:
          "Appeal of actual value between May 1 and June 8 — second independent DPT confirmation of the deadline.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "co-nod-and-cboe",
    jurisdiction: "Colorado",
    jurisdictionId: "colorado",
    taxYear: "recurring annual rule",
    deadlineType: "decision",
    deadlineBasis: "rule-based",
    rule:
      "The assessor must decide the protest and mail a Notice of Determination. Standard schedule: the county board of equalization sits from July 1 and must conclude hearings and decide by August 5, notifying the owner in writing within five business days. Alternate schedule (large counties): NOD by August 15, hearings from September 1, responses by November 1.",
    anchoredTo: "the protest period; schedule depends on county population",
    sources: [
      {
        sourceId: "co-dpt-understanding",
        supports:
          "The standard/alternate schedule table (NOD, CBOE hearings, CBOE response) for real property.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "co-appeal-beyond-cboe",
    jurisdiction: "Colorado",
    jurisdictionId: "colorado",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-district-court",
    deadlineBasis: "rule-based",
    rule:
      "A county board of equalization decision can be appealed to an arbitrator, the district court, or the state Board of Assessment Appeals within 30 days of the date the decision was mailed.",
    anchoredTo: "the CBOE decision's mailing date",
    sources: [
      {
        sourceId: "co-dpt-understanding",
        supports: "The 30-day appeal to arbitrator / district court / BAA.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "co-payment-installments",
    jurisdiction: "Colorado",
    jurisdictionId: "colorado",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "Tax bills reflecting the prior year's taxes are mailed as soon as possible after January 1. Amounts above $25 may be paid in one payment by April 30 or in two equal halves — the first due by the last day of February, the second by June 15. Amounts of $25 or less are due in full by April 30.",
    fixedDate: "February 28/29 (first half) · April 30 (full or ≤$25) · June 15 (second half)",
    sources: [
      {
        sourceId: "co-dpt-understanding",
        supports: "The payment schedule and the $25 rule.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
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

  // ------------------------------------------------------------------
  // NORTH CAROLINA — tax year 2026. The appeal ladder runs informal review
  // -> county Board of Equalization and Review (BOER) -> Property Tax
  // Commission (PTC) -> courts. The BOER's window is unusual: it convenes on
  // a set date (Orange: April 30, 2026) and the filing window closes when the
  // board ADJOURNS, so the end date is set by the board's own schedule.
  // Verified 2026-09-28 (NCDOR pages + Orange County read in full; ncleg.gov
  // 403, so G.S. sections are cited through official pages that name them).
  // ------------------------------------------------------------------
  {
    deadlineId: "nc-revaluation-date",
    jurisdiction: "North Carolina",
    jurisdictionId: "north-carolina",
    taxYear: "recurring rule (revaluation cycle set per county; Orange County revalues every 4 years)",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the county's most recent revaluation date",
    rule:
      "Real property must be reappraised at least every eight years, and many counties revalue more often — Orange County completed a revaluation effective January 1, 2025, with the next planned January 1, 2029. Between revaluations the value carries over, with changes limited to what the statute allows. Evidence in an appeal must speak to the property's worth on the most recent revaluation date, even if the market has moved since.",
    sources: [
      {
        sourceId: "nc-dor-types-property-taxed",
        supports:
          "Real property reappraised at least every eight years (G.S. 105-286), with off-cycle changes limited by G.S. 105-287.",
      },
      {
        sourceId: "nc-orange-revaluation",
        supports:
          "Orange County's 2025 revaluation (previous 2021, next 2029) and the governing statutes the page itself names (105-283, 105-286, 105-287).",
      },
      {
        sourceId: "nc-orange-appeal",
        supports:
          "January 1, 2025 is the valuation date used for appeals until the next revaluation; evidence must show worth as of that date.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nc-informal-review",
    jurisdiction: "North Carolina",
    jurisdictionId: "north-carolina",
    taxYear: "2026 (Orange County dates)",
    deadlineType: "informal-review",
    deadlineBasis: "rule-based",
    anchoredTo: "the county's published informal-review window",
    rule:
      "The first step is an informal review by the county assessor's staff — a county appraiser, not the board, reviews the evidence and sends a decision. Orange County accepted informal appeals January 1 through March 31, 2026; other counties publish their own windows. If the informal decision is unsatisfying, the formal appeal opens when the board convenes.",
    sources: [
      {
        sourceId: "nc-dor-appeal-process",
        supports: "The informal review as the first step of the appeal ladder.",
      },
      {
        sourceId: "nc-orange-appeal",
        supports:
          "Informal appeals accepted January 1, 2026 through March 31, 2026, reviewed by a county appraiser, with a decision by mail or email.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nc-boer-formal-appeal",
    jurisdiction: "North Carolina",
    jurisdictionId: "north-carolina",
    taxYear: "2026 (Orange County dates)",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the Board of Equalization and Review's convening and adjournment dates",
    rule:
      "A formal appeal is a hearing before the county Board of Equalization and Review, a citizen board appointed by the county commissioners. The board convenes on a published date — the statute expects boards to convene around the first week of April; Orange County's convenes April 30, 2026 — and the filing window closes when the board adjourns. Orange County's formal appeal period runs April 1 through June 30, 2026 ('when the Board adjourns'). The end date is the board's own schedule, so the county's published dates are the operative ones. There is no filing fee and a lawyer is not required.",
    sources: [
      {
        sourceId: "nc-dor-appeal-process",
        supports:
          "The Board of Equalization and Review convenes around the first week in April; the board hears formal appeals.",
      },
      {
        sourceId: "nc-orange-appeal",
        supports:
          "BOER convenes April 30, 2026; formal appeal period April 1 - June 30, 2026 ('when the Board adjourns'); no cost to file.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nc-ptc-appeal",
    jurisdiction: "North Carolina",
    jurisdictionId: "north-carolina",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the date of the Board of Equalization and Review's decision letter",
    rule:
      "A decision of the county board may be appealed to the state Property Tax Commission in Raleigh within 30 days of the decision letter. Instructions are included with the board's notice. A PTC decision can be appealed further to the NC Court of Appeals on legal or procedural issues.",
    sources: [
      {
        sourceId: "nc-dor-appeal-process",
        supports: "PTC appeal within 30 days of the board's decision.",
      },
      {
        sourceId: "nc-orange-appeal",
        supports:
          "PTC appeal due within 30 days of the Board decision letter, with instructions included; further appeal to the Court of Appeals.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nc-personal-property-listing",
    jurisdiction: "North Carolina",
    jurisdictionId: "north-carolina",
    taxYear: "recurring annual rule",
    deadlineType: "rendition",
    deadlineBasis: "fixed-date",
    rule:
      "Personal property is listed (declared) during January of each year with the county assessor. Real property needs no annual listing — it stays on the roll from revaluation to revaluation.",
    fixedDate: "January (annual listing period)",
    sources: [
      {
        sourceId: "nc-dor-types-property-taxed",
        supports: "Personal property is listed during January.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // OHIO — the complaint window is a fixed seasonal window: January 1
  // through March 31 of the following tax year (or the last day to pay the
  // first half, whichever is EARLIER — the two branches the statute and the
  // official DTE Form 1 instructions state). Verified 2026-09-28 against
  // tax.ohio.gov, the BTA's own pages, and Franklin County's BOR page read
  // live; codes.ohio.gov timed out, so ORC sections are cited through
  // official pages that name them.
  // ------------------------------------------------------------------
  {
    deadlineId: "oh-revaluation-cycle",
    jurisdiction: "Ohio",
    jurisdictionId: "ohio",
    taxYear: "recurring rule (six-year cycle per county)",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the county's position in the six-year reappraisal cycle",
    rule:
      "Ohio's 88 counties are reappraised on a six-year cycle, with a triennial update of values in between; the Department of Taxation oversees and approves the county revaluations, which the county auditor carries out. Taxable (assessed) value is 35% of true value. Whether your county was just reappraised, is mid-cycle, or had a triennial update changes what a year-over-year comparison means.",
    sources: [
      {
        sourceId: "oh-dor-reappraisal",
        supports:
          "The six-year (sexennial) reappraisal cycle, the triennial update, the auditor's role, and the 35% assessment ratio.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "oh-bor-complaint-window",
    jurisdiction: "Ohio",
    jurisdictionId: "ohio",
    taxYear: "recurring annual rule (Franklin County: tax year 2026 complaints through March 31, 2027)",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo:
      "the tax year: the complaint runs January 1 through March 31 of the following tax year, or the last day to pay first-half taxes, whichever is earlier",
    rule:
      "A complaint against the valuation of real property (DTE Form 1) is filed with the county auditor for the county Board of Revision. The filing window runs January 1 through March 31 of the following tax year — Franklin County states that tax year 2026 complaints are accepted through March 31, 2027 — with the official complaint form stating the alternative earlier cutoff of the last day to pay first-half taxes where that applies. Electronic filing through the Board of Tax Appeals portal is available alongside the county's own channels.",
    sources: [
      {
        sourceId: "oh-franklin-bor",
        supports:
          "'The Board of Revision (BOR) will be accepting tax year 2026 complaints through March 31, 2027,' with DTE Form 1 and e-filing confirmed.",
      },
      {
        sourceId: "oh-dor-property-tax-hub",
        supports:
          "DTE Form 1 available through the Department's hub; complaints run through the county auditor.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "oh-bta-appeal",
    jurisdiction: "Ohio",
    jurisdictionId: "ohio",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the mailing date of the Board of Revision's decision",
    rule:
      "A Board of Revision decision may be appealed to the state Board of Tax Appeals within 30 days of the decision being mailed, and the notice of appeal must be filed with BOTH the Board of Tax Appeals and the county Board of Revision. The Board also offers a small claims docket for residential appeals below the value threshold, an informal alternative to the standard docket.",
    sources: [
      {
        sourceId: "oh-bta-appeal-info",
        supports:
          "The 30-day window from the BOR decision mailing, the dual-filing requirement, and the small claims docket.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // MASSACHUSETTS — the abatement clock is anchored to the FIRST ACTUAL
  // bill, not to an assessment notice: quarterly municipalities send the
  // abatement deadline with the third quarterly bill (usually February 1).
  // The deemed-denial and ATB rules are three-month counts. Verified
  // 2026-09-28 against the Citizen Information Service's abatement guide
  // read in full; mass.gov and malegislature.gov were not readable.
  // ------------------------------------------------------------------
  {
    deadlineId: "ma-abatement-application",
    jurisdiction: "Massachusetts",
    jurisdictionId: "massachusetts",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the due date of the first actual tax bill of the fiscal year",
    rule:
      "An abatement application (State Tax Form 128) must be filed with the board of assessors by the due date of the first ACTUAL tax bill for the fiscal year. With quarterly billing that is the third quarterly bill, usually February 1. The application must be filed even while an informal discussion with the assessors is under way, and the tax must be paid on time — failing to pay on time can forfeit the appeal rights.",
    sources: [
      {
        sourceId: "ma-cis-abatement",
        supports:
          "The first-actual-bill deadline, the third-quarterly-bill rule (usually February 1), Form 128, and the pay-on-time warning.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ma-deemed-denial",
    jurisdiction: "Massachusetts",
    jurisdictionId: "massachusetts",
    taxYear: "recurring annual rule",
    deadlineType: "decision",
    deadlineBasis: "rule-based",
    anchoredTo: "the filing of the abatement application",
    rule:
      "The assessors have three months to act on an abatement application. They may extend that period in writing, but if they neither grant nor deny the application within three months (or the extended period), the application is DEEMED DENIED — the owner does not have to wait for a letter that never comes.",
    sources: [
      {
        sourceId: "ma-cis-abatement",
        supports:
          "Three months to act, written extension, and deemed denial when no decision issues.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ma-atb-appeal",
    jurisdiction: "Massachusetts",
    jurisdictionId: "massachusetts",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the assessors' decision (or the deemed denial), with the payment precondition for larger appeals",
    rule:
      "An appeal from the assessors' decision — or from a deemed denial — goes to the Appellate Tax Board within three months. For appeals over $5,000, the tax (or, where an abatement was denied in part, the portion not being appealed) must have been PAID and be in the collector's hands by the bill's due date; a lower assessed value is not itself enough.",
    sources: [
      {
        sourceId: "ma-cis-abatement",
        supports:
          "Three-month ATB appeal window and the payment-in-collector's-hands rule for appeals over $5,000.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ma-certification-cycle",
    jurisdiction: "Massachusetts",
    jurisdictionId: "massachusetts",
    taxYear: "recurring rule (three-year certification cycle)",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the Department of Revenue's three-year certification cycle for each municipality",
    rule:
      "Municipal assessors value property locally, and the Department of Revenue's Bureau of Local Assessment certifies those values once every three years. Proposition 2 1/2 separately limits the total levy a municipality may raise. A town three years past its last certification is working from re-certified figures; one freshly certified has just been through a full revaluation.",
    sources: [
      {
        sourceId: "ma-dor-bla",
        supports:
          "The Bureau of Local Assessment's three-year certification of municipal values (stated in the Bureau's own official descriptions; the page itself was not readable from this environment).",
      },
      {
        sourceId: "ma-cis-abatement",
        supports: "Proposition 2 1/2 as the limit on the total levy.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // VIRGINIA — the state sets NO single filing date: the Code requires each
  // locality with a board of equalization to set its own application
  // deadline by ordinance, no earlier than 30 days after the notice hearing
  // (§ 58.1-3330/3378). Verified 2026-09-28 by reading the Code of Virginia
  // sections directly on the official law portal. § 58.1-3983.1 (personal
  // property) is deliberately absent — these records cover real property.
  // ------------------------------------------------------------------
  {
    deadlineId: "va-100-percent-standard",
    jurisdiction: "Virginia",
    jurisdictionId: "virginia",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the locality's annual assessment of real estate",
    rule:
      "All real estate in Virginia is assessed at 100% of fair market value — the state's assessment standard — by the Commissioner of the Revenue or the local assessor. There is no fractional assessment ratio to model and no cap on year-over-year change: a market rise can pass straight through to the assessment.",
    sources: [
      {
        sourceId: "va-code-58-1-3200",
        supports:
          "§ 58.1-3200(A) assessment at 100% of fair market value; § 58.1-3201 the local assessing officer.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "va-notice-of-change",
    jurisdiction: "Virginia",
    jurisdictionId: "virginia",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    anchoredTo: "the hearing before the local board of assessment reviews",
    rule:
      "Where a real estate assessment has been increased, the local board must give the owner notice of the change and an opportunity to be heard. The notice must state the new assessment AND show the two preceding years' assessments, and it must reach the owner at least 15 days before the hearing. That two-year comparison printed on the notice is what makes a year-over-year look at the figures legitimate here.",
    sources: [
      {
        sourceId: "va-code-58-1-3330",
        supports:
          "Notice of an increased assessment showing the new and two prior years' assessments, at least 15 days before the hearing.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "va-boe-application",
    jurisdiction: "Virginia",
    jurisdictionId: "virginia",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the locality's ordinance, no earlier than 30 days after the notice hearing (§ 58.1-3330)",
    rule:
      "An application to the locality's board of equalization is filed by a deadline the LOCALITY sets by ordinance, and the ordinance cannot set it earlier than 30 days after the notice hearing required by § 58.1-3330. There is no single statewide date: read your locality's ordinance or your notice. An application is deemed timely if the postmark falls within the period.",
    sources: [
      {
        sourceId: "va-code-58-1-3378",
        supports:
          "Locality-set deadline by ordinance, the 30-day floor after the notice hearing, and the postmark rule.",
      },
      {
        sourceId: "va-code-58-1-3330",
        supports: "The hearing the 30-day floor is measured from.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "va-circuit-court-appeal",
    jurisdiction: "Virginia",
    jurisdictionId: "virginia",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-district-court",
    deadlineBasis: "rule-based",
    anchoredTo:
      "the first notice of assessment, the tax year, and any board determination — the latest of the statutory limits",
    rule:
      "An appeal of a real property assessment to the circuit court is an original proceeding heard de novo. The filing window is the LATEST of: three years from the last day of the tax year, one year from the first notice of assessment, or one year from the final determination of a board of equalization application. Whether or not an administrative appeal was filed, the circuit court route stays open until those limits close it — and the assessment is presumed correct, with the burden on the taxpayer (§ 58.1-3379).",
    sources: [
      {
        sourceId: "va-code-58-1-3984",
        supports:
          "The circuit court route, the latest-of three limits, and the de novo hearing.",
      },
      {
        sourceId: "va-code-58-1-3379",
        supports: "The presumption of correctness and the taxpayer's burden.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // NEW YORK — tax year 2026 rules. New York's calendar is municipal: the
  // statewide dates below are the "most communities" dates the Department
  // publishes, and every one carries the same instruction — confirm with
  // your assessor (the Municipal Data Portal lists each municipality's
  // actual dates). Verified 2026-09-28 from four tax.ny.gov pages read in
  // full; RPTL sections are cited through pages that name them.
  // ------------------------------------------------------------------
  {
    deadlineId: "ny-valuation-and-taxable-status",
    jurisdiction: "New York",
    jurisdictionId: "new-york",
    taxYear: "recurring annual rule (dates 'in most communities')",
    deadlineType: "assessment-date",
    deadlineBasis: "fixed-date",
    rule:
      "Two dates set what the roll shows: the VALUATION DATE (July 1 of the prior year in most communities) is the date the property's value is measured as of, and the TAXABLE STATUS DATE (March 1 in most communities) is the date its condition and ownership are set as of. Exemption applications are due by Taxable Status Date. A January fire on a home valued the previous July 1 is assessed as a vacant lot; the same fire on March 15 is assessed as a house. The gap between valuation date and tentative roll is deliberate — it lets assessors and taxpayers use all available sales.",
    fixedDate: "Valuation: July 1 (prior year) · Taxable status: March 1 — both 'in most communities'",
    sources: [
      {
        sourceId: "ny-tax-property-tax-calendar",
        supports:
          "The seven owner-facing dates, the valuation-date definition with worked examples, and the confirm-with-your-assessor instruction.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ny-tentative-roll",
    jurisdiction: "New York",
    jurisdictionId: "new-york",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "fixed-date",
    rule:
      "The tentative assessment roll is made public on May 1 in most communities and must be available from the municipal website within ten days. It shows the assessment, the assessor's estimate of market value, and the uniform percentage for every taxable property. Check your assessment soon after Tentative Roll Date and before Grievance Day — only the current TENTATIVE roll can be grieved, and prior years cannot.",
    fixedDate: "May 1 (in most communities)",
    sources: [
      {
        sourceId: "ny-tax-property-tax-calendar",
        supports: "Tentative Roll Date May 1; availability on the municipal website within ten days.",
      },
      {
        sourceId: "ny-tax-grievance-procedures",
        supports: "Only the assessment on the current tentative assessment roll can be grieved.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ny-grievance-day",
    jurisdiction: "New York",
    jurisdictionId: "new-york",
    taxYear: "recurring annual rule (dates vary by municipality)",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo:
      "Grievance Day, the day the Board of Assessment Review meets to hear complaints — the fourth Tuesday in May in most communities, with published exceptions",
    rule:
      "The grievance (Form RP-524) is filed with the assessor or the Board of Assessment Review by GRIEVANCE DAY: the fourth Tuesday in May in most communities. The exceptions are the rule, not the anomaly: New York City (March 15 for Class One, March 1 for other classes), Nassau County (March 1), Suffolk County towns (third Tuesday in May), Westchester County towns (third Tuesday in June), villages that assess (typically the third Tuesday in February), and municipalities sharing an assessor (which may adopt dates between the fourth Tuesday in May and the second Tuesday in June). A mailed form must be RECEIVED by Grievance Day. There is no cost, and a lawyer is not required. On or before Grievance Day the owner and assessor may also stipulate to a reduced assessment — which then bars both further BAR review and judicial review for that year.",
    sources: [
      {
        sourceId: "ny-tax-grievance-procedures",
        supports:
          "Grievance Day definition and exceptions, RP-524 filing, the received-by rule, the stipulation consequence, and the no-cost/no-lawyer statement.",
      },
      {
        sourceId: "ny-tax-property-tax-calendar",
        supports: "Grievance Day as the fourth Tuesday in May in most communities.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ny-judicial-review",
    jurisdiction: "New York",
    jurisdictionId: "new-york",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-district-court",
    deadlineBasis: "rule-based",
    anchoredTo: "the filing of the final assessment roll (July 1 in most communities) or notice of the filing, whichever is later",
    rule:
      "Judicial review must be initiated within 30 DAYS of the filing of the final assessment roll — or of notice of that filing, whichever is later. The small-claims route (SCAR) is available to owners who occupy one-, two- or three-family homes used exclusively for residential purposes (or owners of vacant land too small for such a dwelling), with a $30 filing fee, through the Unified Court System. All other owners proceed by tax certiorari in State Supreme Court under Article 7 of the Real Property Tax Law, where an attorney is strongly recommended.",
    sources: [
      {
        sourceId: "ny-tax-grievance-procedures",
        supports:
          "The 30-day rule, SCAR eligibility and fee, and the certiorari route.",
      },
      {
        sourceId: "ny-tax-property-tax-calendar",
        supports: "Final Roll Date July 1; judicial review within 30 days following.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ny-tax-bills",
    jurisdiction: "New York",
    jurisdictionId: "new-york",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "School property tax bills are mailed at the beginning of September in most communities, and municipal and county bills at the beginning of January; payment deadlines vary among school districts and municipalities. The same assessment feeds both bills, which is why an assessment reduced after Grievance Day shows up in both the September and January figures.",
    fixedDate: "September (school) · January (municipal and county) — mailing, 'in most communities'",
    sources: [
      {
        sourceId: "ny-tax-property-tax-calendar",
        supports: "School bills mailed in the beginning of September; municipal and county bills at the beginning of January.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // GEORGIA — tax year 2026 rules. Every rule below was read on a
  // dor.georgia.gov page (2026-09-28). Georgia's system is county-run on a
  // statewide 40% standard with NO state revaluation schedule — values are
  // set annually as of January 1 — and the appeal route declares itself in
  // the first filing.
  // ------------------------------------------------------------------
  {
    deadlineId: "ga-annual-assessment",
    jurisdiction: "Georgia",
    jurisdictionId: "georgia",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "fixed-date",
    rule:
      "All property is returned and assessed at fair market value every year (O.C.G.A. 48-5-6), with the value established as of January 1 (O.C.G.A. 48-5-2). There is no state-mandated revaluation schedule: counties review their digests annually against sales data and update values at the frequency their market warrants. The assessed value is 40% of fair market value, and the tax is the millage rate applied to assessed value after exemptions.",
    fixedDate: "January 1 (valuation date, annually)",
    sources: [
      {
        sourceId: "ga-dor-property-faq",
        supports:
          "Annual fair-market-value assessment as of January 1, the 40% ratio, the worked $100,000 example, and the no-state-schedule statement.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ga-assessment-notice",
    jurisdiction: "Georgia",
    jurisdictionId: "georgia",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    anchoredTo: "the county board of tax assessors' annual mailing, typically in spring",
    rule:
      "The county board of tax assessors must send an ANNUAL assessment notice for real property (and a notice whenever it disagrees with a personal-property return). When the notice reflects a CHANGE in assessment, it must give the owner a knowledgeable contact and, where the increase exceeds 15%, a non-technical explanation of the basis plus the right to view or copy the records used.",
    sources: [
      {
        sourceId: "ga-dor-property-faq",
        supports: "The annual assessment notice requirement for real property.",
      },
      {
        sourceId: "ga-dor-bill-of-rights",
        supports:
          "The change-of-notice contents: contact person, the 15% explanation threshold, and access to the records used.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ga-45-day-appeal",
    jurisdiction: "Georgia",
    jurisdictionId: "georgia",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the date the Assessment Notice was mailed",
    rule:
      "The written appeal is filed with the county Board of Tax Assessors within 45 DAYS of the date the Assessment Notice was mailed — the Department states plainly that missing it forfeits the appeal rights. The appeal may be based on taxability, value, uniformity and/or a denied exemption, and in the initial written dispute the owner must DECLARE a method: the county Board of Equalization, a Hearing Officer, or an Arbitrator. The state's uniform form is PT-311A; email filing works only where the board has adopted an electronic-submission policy. When the board CHANGED the owner's returned value, the burden of proving the change rests on the board — and stays there even into superior court; and if the final determination lands at 85 percent or less of the appeal-stage valuation, the owner recovers costs and reasonable attorney's fees.",
    sources: [
      {
        sourceId: "ga-dor-pt311a",
        supports: "The 45-day rule, the filing office, and the declared method of appeal.",
      },
      {
        sourceId: "ga-dor-property-faq",
        supports: "The appeal grounds and the three appeal methods.",
      },
      {
        sourceId: "ga-dor-bill-of-rights",
        supports:
          "The board's burden of proof, the bound-grounds rule, the one-time reschedule, and the 85% fee-and-costs provision.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ga-homestead-exemption",
    jurisdiction: "Georgia",
    jurisdictionId: "georgia",
    taxYear: "recurring annual rule",
    deadlineType: "exemption-application",
    deadlineBasis: "fixed-date",
    rule:
      "The homestead exemption requires owning and occupying the home as your legal residence as of January 1 (O.C.G.A. § 48-5-40), with the application filed with the county tax commissioner (or the delegated tax assessor in some counties) by the property-tax-return deadline of April 1. Georgia has extended this: a homeowner may now apply beyond April 1 up to the END of their 45-day appeal window. The state standard exemption is $2,000 deducted from the 40% assessed value; many counties add local exemptions, including valuation-freeze exemptions that hold the assessment at a base year while the owner resides there.",
    fixedDate: "April 1 (historic deadline; now extendable to the end of the 45-day appeal window)",
    sources: [
      {
        sourceId: "ga-dor-homestead",
        supports:
          "January 1 occupancy requirement, the April 1 return-deadline rule, the extended 45-day window, the $2,000 standard exemption, and the local valuation-freeze roster.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ga-tax-payment",
    jurisdiction: "Georgia",
    jurisdictionId: "georgia",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "fixed-date",
    rule:
      "Property taxes are normally due December 20 in most counties, though some counties set a different date; taxpayers have 60 days from the date of billing to pay. The county tax commissioner bills and collects for the county, school and state.",
    fixedDate: "December 20 (most counties) · 60 days from billing",
    sources: [
      {
        sourceId: "ga-dor-property-faq",
        supports: "The December 20 norm, the 60-day window, and the tax commissioner's collection role.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // MARYLAND — tax year 2026 rules. Maryland assesses centrally at the state
  // level on a triennial cycle with a three-year phase-in and a 10%/year
  // homestead cap on the bill side. The appeal ladder is 45 days -> 30 days
  // -> 30 days, stated with statute cites on the Tax Court's own procedures
  // page. Verified 2026-09-28; dat.maryland.gov 403s, so the notice timing is
  // presented as "typically late December" (DLS fiscal note + county pages).
  // ------------------------------------------------------------------
  {
    deadlineId: "md-triennial-cycle",
    jurisdiction: "Maryland",
    jurisdictionId: "maryland",
    taxYear: "recurring rule (triennial cycle)",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the triennial reassessment cycle, with each county divided into three regions",
    rule:
      "Maryland is the only state that assesses centrally at the state level: SDAT appraises all real property at 100% of market value and certifies the values to the counties, which set rates and bill. Real property has been reassessed on a three-year cycle since 1980 — about one-third of each county's properties each year. A NOTICE OF ASSESSMENT (typically mailed in late December for a January 1 date of finality) discloses both the old and new values, and an INCREASE is phased in over three years: a $30,000 increase adds $10,000 per year to the old value. Decreases take full effect immediately.",
    sources: [
      {
        sourceId: "md-archives-sdat-functions",
        supports:
          "State-level centralization, the 100% market-value standard since 2001, the triennial cycle with one-third per year, the three-year phase-in with the $30,000 example, and the notice of any change.",
      },
      {
        sourceId: "md-mgaleg-hb1088",
        supports: "Assessment notices typically mailed in late December (official DLS fiscal note text).",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "md-supervisor-appeal",
    jurisdiction: "Maryland",
    jurisdictionId: "maryland",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the date printed on the notice of assessment",
    rule:
      "The first appeal — on value or classification — goes to the Supervisor of Assessments for the county within 45 DAYS of the notice's date (online filing is available through the state's own appeal form). The Supervisor or a designee holds the hearing and mails a final notice. Separately, in the two years of the cycle when no new assessment notice arrives, a PETITION FOR REVIEW may be filed at any time within three years of the last final notice — but on or before the date of finality for the next taxable year — and it is also heard by the Supervisor. And an owner whose deed was recorded between January 1 and June 30 may appeal within 60 days of the recording date.",
    sources: [
      {
        sourceId: "md-tax-court-procedures",
        supports:
          "The 45-day Supervisor appeal (TP 14-502(a)(1)), the three-year petition for review (TP 14-503), and the hearing-and-final-notice sequence.",
      },
      {
        sourceId: "md-sdat-appeal-form",
        supports: "The state's online appeal form: within 45 days of the notice date.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "md-ptaab-appeal",
    jurisdiction: "Maryland",
    jurisdictionId: "maryland",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the mailing date of the Supervisor's final notice",
    rule:
      "If the Supervisor's final notice does not bring relief, the appeal continues to the county Property Tax Assessment Appeals Board (PTAAB) within 30 DAYS of the final notice. The board schedules and holds its own hearing.",
    sources: [
      {
        sourceId: "md-tax-court-procedures",
        supports: "PTAAB appeal within 30 days of the final notice (TP 14-509).",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "md-tax-court-appeal",
    jurisdiction: "Maryland",
    jurisdictionId: "maryland",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the date of the PTAAB's decision",
    rule:
      "Either party — taxpayer or Supervisor — may appeal the PTAAB's final determination to the Maryland Tax Court within 30 DAYS of the decision. The Tax Court is the top of the administrative ladder: pro se representation is allowed, there is no filing fee, the postmark is the filing date, and the exhaustion of administrative remedies is required before it (counties are excepted).",
    sources: [
      {
        sourceId: "md-tax-court-procedures",
        supports:
          "The 30-day Tax Court appeal (TP 14-512(f)), pro se representation, no fee, the postmark rule, and exhaustion.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "md-homestead-credit",
    jurisdiction: "Maryland",
    jurisdictionId: "maryland",
    taxYear: "recurring annual rule",
    deadlineType: "relief-application",
    deadlineBasis: "rule-based",
    anchoredTo: "the property's status as of July 1 of the application year",
    rule:
      "Every county and municipality must limit taxable-assessment increases on a principal residence to NO MORE THAN 10% per year (some adopt less), and the State applies the same 10% limit to the state portion of the tax. The credit is applied against the tax on the increase above the limit — it does not change the market value. Eligibility: principal residence lived in at least six months of the year including July 1, no transfer of ownership, no owner-requested rezoning that raised value, no substantial use change. Apply ONCE, not yearly — new purchasers are mailed an application after the deed is recorded, and eligibility can be checked on the state's Real Property Data Search.",
    sources: [
      {
        sourceId: "md-montgomery-homestead",
        supports:
          "The 10% requirement on every county and municipality, the eligibility conditions including the July 1 six-month rule, the apply-once rule, and the effect on the bill.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "md-billing",
    jurisdiction: "Maryland",
    jurisdictionId: "maryland",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    anchoredTo: "the local billing cycle — bills are sent in July or August each year",
    rule:
      "Once SDAT certifies the values, the local governments apply their own tax rates and mail the property tax bills in July or August of each year; billing and collection are administered by local finance or treasurer's offices. The assessment and the rate are therefore set by different levels of government — a Maryland appeal changes the value SDAT certified, not the rate the county set.",
    sources: [
      {
        sourceId: "md-archives-sdat-functions",
        supports: "Local jurisdictions send out tax bills in July or August; local rates applied to certified values.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // INDIANA — tax year 2026 rules. Indiana runs annual adjustments
  // ("trending") instead of periodic reassessments, taxes a market-value-in-use
  // standard, and caps the BILL at 1%/2%/3% of gross assessed value — the
  // circuit breaker, with its own credit arithmetic on the DLGF's page.
  // Verified 2026-09-28 from three in.gov pages read in full.
  // ------------------------------------------------------------------
  {
    deadlineId: "in-annual-adjustment",
    jurisdiction: "Indiana",
    jurisdictionId: "indiana",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the annual adjustment cycle (assessment date March 1; taxes paid in arrears the following year)",
    rule:
      "Indiana does not reassess every few years: since 2002 the county assessor applies ANNUAL ADJUSTMENT — or 'trending' — using each year's sales data to move area values toward market, alongside mass-appraisal characteristics (age, grade, condition). The DLGF reviews each county's assessment-to-sales ratio study before certifying the values. The standard is market value in use. The values certified for one assessment date become the bill for the following year, paid in arrears.",
    sources: [
      {
        sourceId: "in-dlgf-citizens-guide",
        supports:
          "Annual adjustment / trending, mass appraisal, the DLGF ratio-study oversight, and the assessment-to-billing cycle.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "in-form11-notice",
    jurisdiction: "Indiana",
    jurisdictionId: "indiana",
    taxYear: "recurring annual rule",
    deadlineType: "notice-delivery",
    deadlineBasis: "rule-based",
    anchoredTo: "the county's notice of assessment (Form 11) or, where none is issued, the tax bill",
    rule:
      "Notice of the assessed value arrives one of two ways: a Form 11 notice of assessment from the county assessor, or — where no Form 11 is issued — the tax bill itself (the TS-1 comparison statement), which serves as the notice of assessment. The 45-day appeal clock runs from the notice's date in either case.",
    sources: [
      {
        sourceId: "in-dlgf-citizens-guide",
        supports: "Notice by Form 11 or by the tax bill (TS-1).",
      },
      {
        sourceId: "in-faqs-appeal",
        supports: "Where no notice of assessment is given, the tax bill serves as the notice.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "in-form130-appeal",
    jurisdiction: "Indiana",
    jurisdictionId: "indiana",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the date of the notice of assessment (Form 11 or the tax bill)",
    rule:
      "An appeal is initiated with Form 130 — the DLGF-prescribed form, filed with the local assessor — within 45 DAYS of the notice-of-assessment date (or, when no Form 11 was mailed, by the later of May 10 of the tax-bill year or 45 days after the bill's date). The state's own FAQ adds the June 15 framing from the DLGF guide: contact the local assessor by June 15 of the year a Form 11 is received, or June 15 of the following year when none was. No appraisal is required; comparable sales, listings, offers, or the property's own sale are acceptable evidence. Where the assessment rose MORE THAN 5% over the prior year, the burden of proof shifts to the county or township assessor. An informal meeting with the assessor comes first; unresolved appeals go to the PTABOA, which must hold a hearing within 180 days and decide within 120 days of the hearing (a $50 penalty can attach for missing the appearance procedures).",
    sources: [
      {
        sourceId: "in-faqs-appeal",
        supports:
          "The 45-day rule, the May 10 alternative, the evidence list, the no-appraisal rule, the 5% burden shift, and the PTABOA timeline.",
      },
      {
        sourceId: "in-dlgf-citizens-guide",
        supports: "The June 15 contact framing and the Form 11 notice.",
      },
      {
        sourceId: "in-dlgf-form130-flowchart",
        supports: "Form 130 as the required DLGF-prescribed initiating form.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "in-ibtr-appeal",
    jurisdiction: "Indiana",
    jurisdictionId: "indiana",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the PTABOA's determination (or its failure to decide within the statutory deadlines)",
    rule:
      "A taxpayer dissatisfied with the PTABOA's decision — or whose PTABOA never held its hearing within 180 days or never determined within 120 days of the hearing — may appeal to the Indiana Board of Tax Review on Form 131. From the Board, review continues to the Indiana Tax Court and then the Indiana Supreme Court.",
    sources: [
      {
        sourceId: "in-faqs-appeal",
        supports: "Form 131 to the Indiana Board of Tax Review, then Tax Court and Supreme Court.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "in-circuit-breaker-caps",
    jurisdiction: "Indiana",
    jurisdictionId: "indiana",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    anchoredTo: "the tax bill's calculation against gross assessed value",
    rule:
      "Indiana caps the BILL, not a value: property taxes may not exceed 1 PERCENT of gross assessed value for homesteads, 2 PERCENT for other residential and agricultural land, and 3 PERCENT for all other property. After deductions, credits, and the rate, any excess over the cap is removed by a cap credit — computed separately for each property class on the parcel — and referendum-approved building projects and school operating funds sit OUTSIDE the caps. Eligible senior citizens get a further credit holding their taxes to 2 percent above the prior year. The caps do not change the local rate; budgets set rates. Taxes are paid in two installments, May 10 and November 10 (moved to the next business day on a weekend or holiday).",
    sources: [
      {
        sourceId: "in-dlgf-tax-bill-101",
        supports:
          "The 1%/2%/3% caps on gross assessed value, the per-class cap-credit arithmetic, the referendum exemption, the senior credit, and the rates-vs-caps distinction.",
      },
      {
        sourceId: "in-dlgf-citizens-guide",
        supports: "The May 10 and November 10 installment due dates.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // WASHINGTON — assessment year 2026 rules. The county assessor values;
  // the state's limit is a LEVY limit (a budget growth limit on each taxing
  // district, 101%/1%), and the appeal deadline is the LATER of July 1 or
  // 30 days from the change-of-value notice. Verified 2026-09-28: DOR HTML
  // (levy limit) and the BTA's filing page read in full; the July 1 / 30-day
  // rule from DOR's own PDFs' official text plus county BOE pages.
  // ------------------------------------------------------------------
  {
    deadlineId: "wa-assessment-date",
    jurisdiction: "Washington",
    jurisdictionId: "washington",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "the January 1 assessment date; change-of-value notices follow the assessor's valuation work",
    rule:
      "The county assessor determines the assessed value — 100% of market value — as of January 1 of each assessment year. When a parcel's value CHANGES from the prior year, the assessor mails a CHANGE OF VALUE NOTICE, and it is that notice that starts the 30-day appeal window (see the BOE deadline below). Revaluation is county-level on a rotating cycle, but every parcel receives a value notice annually.",
    sources: [
      {
        sourceId: "wa-dor-petition-boe",
        supports: "The change-of-value notice as the event that starts the 30-day alternative to the July 1 filing deadline.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "wa-boe-appeal",
    jurisdiction: "Washington",
    jurisdictionId: "washington",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "July 1 of the assessment year, or 30 days from the mailing of the change-of-value notice — whichever is later",
    rule:
      "A petition to the county Board of Equalization must be filed or postmarked by JULY 1 of the current assessment year OR within 30 DAYS of the date the change-of-value notice was mailed — WHICHEVER IS LATER. County legislative authorities may extend the 30-day window (up to 60 days; King County uses a different schedule). The petition form is the DOR's own REV 64-0075, filed with the county BOE.",
    sources: [
      {
        sourceId: "wa-dor-petition-boe",
        supports: "Filed or postmarked by July 1 of the assessment year or 30 days from the notice — the form's own instruction.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "wa-bta-appeal",
    jurisdiction: "Washington",
    jurisdictionId: "washington",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the mailing date of the County Board of Equalization's decision",
    rule:
      "An appeal from a County Board of Equalization decision goes to the Washington State Board of Tax Appeals within 30 DAYS of the decision's mailing date — and the Board cannot extend the deadline or accept late appeals. Property tax valuation appeals use the Board's INFORMAL or FORMAL forms; a direct appeal (assessor and taxpayer jointly skip the county board) is available under RCW 84.40.038 with the assessor's co-signature. Hearings are currently being scheduled 18 to 24 months after filing.",
    sources: [
      {
        sourceId: "wa-bta-how-to-file",
        supports:
          "The 30-day rule from the mailing date, the no-extension rule, the informal/formal/direct appeal forms, and the backlog disclosure.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "wa-levy-limit",
    jurisdiction: "Washington",
    jurisdictionId: "washington",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    anchoredTo: "each taxing district's highest lawful levy since 1985",
    rule:
      "Washington limits the LEVY — the dollars a taxing district collects — not a value: each district's levy may grow by at most 101% of its highest lawful levy since 1985 (districts of 10,000 or more population use 100% plus the Implicit Price Deflator or 101%, whichever is LESS, unless a supermajority adopts a substantial-need resolution). Voters can lift the lid. A constitutional 1% aggregate limit sits on top as the outer bound. The result: your assessment can be cut and your bill can still rise if the levies grow — which is why a Washington appeal is argued on VALUE while the bill is governed by the levy limit.",
    sources: [
      {
        sourceId: "wa-dor-levy-limit",
        supports:
          "The 101% / IPD-or-101%-whichever-is-less limit factors, the since-1985 baseline, the resolution requirements, and levy lid lifts.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // NEW JERSEY — tax year 2026 rules. Assessments are set October 1 of the
  // prior year; the regular appeal deadline is April 1 (May 1 after a
  // revaluation; January 15 in three alternative-calendar counties). The
  // Chapter 123 ±15% common level range is the state's distinctive
  // mechanism. Verified 2026-09-28 from the Division of Taxation's own
  // Assessment and Appeals page read in full.
  // ------------------------------------------------------------------
  {
    deadlineId: "nj-annual-assessment",
    jurisdiction: "New Jersey",
    jurisdictionId: "new-jersey",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "October 1 of the prior year, the statutory valuation date for the following tax year",
    rule:
      "New Jersey values property annually as of OCTOBER 1 of the prior year — the added/omitted mechanism exists precisely because improvements made after October 1 enter the roll later, as a separate added assessment. The assessment on the bill is the assessor's determination of FULL market value; New Jersey has no year-over-year value cap. The county tax boards and the Tax Court run on a statewide calendar set by the Division of Taxation.",
    sources: [
      {
        sourceId: "nj-dor-lpt-appeal",
        supports: "The October 1 valuation date implicit in the added/omitted assessment description.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nj-april-1-appeal",
    jurisdiction: "New Jersey",
    jurisdictionId: "new-jersey",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "fixed-date",
    anchoredTo: "April 1 of the tax year (filed AND received by that date)",
    rule:
      "A petition of appeal (Form A-1 with the A-1 Comp. Sale attachment) must be filed and RECEIVED by APRIL 1 with the County Board of Taxation — or with the Tax Court directly for assessments over $1,000,000. Two statewide variations: MAY 1 where the municipality undertook a revaluation or reassessment, and JANUARY 15 in Burlington, Gloucester and Monmouth Counties, which follow an alternative assessment calendar. The burden is on the petitioner to prove the assessment does not fairly represent market value or the common level range.",
    sources: [
      {
        sourceId: "nj-dor-lpt-appeal",
        supports:
          "April 1 filed-and-received, the May 1 revaluation extension, the January 15 alternative calendar, and the $1M Tax Court threshold.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nj-chapter-123-range",
    jurisdiction: "New Jersey",
    jurisdictionId: "new-jersey",
    taxYear: "recurring annual rule",
    deadlineType: "relief-application",
    deadlineBasis: "rule-based",
    anchoredTo: "the average ratio certified annually for each taxing district by the Division of Taxation",
    rule:
      "New Jersey's distinctive mechanism is the Chapter 123 test: the Division of Taxation certifies an AVERAGE ASSESSMENT RATIO for each taxing district each year, and the COMMON LEVEL RANGE is that ratio plus or minus 15%. An assessment outside the range is presumptively excessive or discriminatory, and the court or board adjusts it to the range — while an assessment inside the range stands unless the owner proves the value itself is wrong. This is a different argument from a pure market-value appeal: a 35% assessment ratio with a ±15% band tolerates assessments from 20% to 50% of market before Chapter 123 even engages.",
    sources: [
      {
        sourceId: "nj-dor-lpt-appeal",
        supports: "The common level range as plus or minus 15% of the district's average ratio.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "nj-tax-court-appeal",
    jurisdiction: "New Jersey",
    jurisdictionId: "new-jersey",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the date of the County Board of Taxation's judgment",
    rule:
      "A taxpayer dissatisfied with a County Board of Taxation judgment may appeal to the Tax Court of New Jersey within 45 DAYS of the judgment's date. Assessments over $1 million (or added/omitted aggregates over $750,000) skip the county board entirely and start in the Tax Court.",
    sources: [
      {
        sourceId: "nj-dor-lpt-appeal",
        supports: "The 45-day Tax Court appeal and the $1M/$750K direct-filing thresholds.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // MINNESOTA — assessment year 2026 rules (taxes payable the following
  // year). Value and classification are set January 2; the local appeal
  // boards meet April–June; the Tax Court deadline is April 30 of the year
  // the taxes are payable. Verified 2026-09-28 from two DOR pages, the Tax
  // Court's home page and Anoka County's page, all read in full.
  // ------------------------------------------------------------------
  {
    deadlineId: "mn-valuation-date",
    jurisdiction: "Minnesota",
    jurisdictionId: "minnesota",
    taxYear: "recurring rule (assessment → payable next year)",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "January 2 of the assessment year; taxes are payable the FOLLOWING year",
    rule:
      "The county assessor sets estimated market value and classification as of JANUARY 2 of each assessment year, and those figures are used to calculate taxes PAYABLE THE FOLLOWING YEAR (Anoka's own example: the 2025 assessment drives taxes payable in 2026, with the Tax Court deadline April 30, 2026). Assessed values derive from a statutory sales-study window of October 1 to September 30. Valuation notices are mailed on or before April 1. No year-over-year value cap exists; the class-rate system does the distributional work.",
    sources: [
      {
        sourceId: "mn-dor-understanding",
        supports: "EMV and classification as of January 2, and the assessment-to-payable year lag.",
      },
      {
        sourceId: "mn-anoka-appeal",
        supports: "Notices mailed on or before April 1 and the assessment-to-payable-year example.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mn-board-appeals",
    jurisdiction: "Minnesota",
    jurisdictionId: "minnesota",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the board meeting dates printed on the valuation notice — Local Board between April 1 and May 31; County Board in June",
    rule:
      "The local appeal boards meet on a STATEWIDE-BOUNDED, locally-set schedule: the LOCAL Board of Appeal and Equalization (usually the city council or town board) meets between APRIL 1 and MAY 31, and the COUNTY Board of Appeal and Equalization (usually the county commissioners) meets in JUNE — the exact dates are printed on each valuation notice. Where a city holds its own LBAE, appealing there is a PREREQUISITE for the county board; cities that transferred their powers to the county hold open book meetings instead. Appeals may be made in person, by letter, or by a representative. There is no fixed filing deadline — the meeting is the deadline.",
    sources: [
      {
        sourceId: "mn-dor-appealing",
        supports: "The April 1 – May 31 local window, the June county window, the LBAE-first prerequisite, and the transfer/open-book alternative.",
      },
      {
        sourceId: "mn-anoka-appeal",
        supports: "The municipality's role in choosing open book vs. LBAE and the LBAE-first rule.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mn-tax-court-appeal",
    jurisdiction: "Minnesota",
    jurisdictionId: "minnesota",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "April 30 of the year the taxes are payable",
    rule:
      "Minnesota allows a DIRECT appeal to the Minnesota Tax Court — no need to exhaust the local boards first. The petition must be filed by APRIL 30 OF THE YEAR THE TAXES ARE PAYABLE (for the 2025 assessment: April 30, 2026). The Court, a specialized executive-branch court under chapter 271, hears petitions on valuation, classification, equalization and exemptions. After the boards, the Tax Court is also the next step for an owner dissatisfied with the county board's outcome.",
    sources: [
      {
        sourceId: "mn-dor-appealing",
        supports: "The April 30 of the following year deadline and the direct-appeal option.",
      },
      {
        sourceId: "mn-tax-court-home",
        supports: "The Court's chapter-271 jurisdiction over valuation, classification, equalization and exemption petitions.",
      },
      {
        sourceId: "mn-anoka-appeal",
        supports: "The payable-year anchoring with its own worked example.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "mn-billing-installments",
    jurisdiction: "Minnesota",
    jurisdictionId: "minnesota",
    taxYear: "recurring annual rule",
    deadlineType: "payment",
    deadlineBasis: "rule-based",
    anchoredTo: "the March 31 statement and the May 15 / October 15 installments",
    rule:
      "Two notices structure the year: Truth in Taxation notices in NOVEMBER (proposed taxes before budgets are finalized) and property tax statements mailed by MARCH 31. Taxes are due in two equal installments, MAY 15 and OCTOBER 15 (November 15 for agricultural property; $100 or less is due in full May 15). The statement uses the PRIOR year's value, so the tax amount itself cannot be appealed — only the value and classification that produced it.",
    sources: [
      {
        sourceId: "mn-dor-understanding",
        supports: "The November Truth in Taxation notice, the March 31 statement, and the May 15 / October 15 installments.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // CONNECTICUT — the October 1 Grand List and the February 20 appeal
  // deadline (March 20 when the assessor's Grand List filing was
  // extended), a municipal BAA meeting in March, and a two-month window
  // to the Superior Court. Verified 2026-09-28 from two municipal BAA
  // pages read in full; the municipalities are the administrators in
  // Connecticut and each names its governing statutes.
  // ------------------------------------------------------------------
  {
    deadlineId: "ct-grand-list",
    jurisdiction: "Connecticut",
    jurisdictionId: "connecticut",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "October 1 of each year, the Grand List valuation date",
    rule:
      "Connecticut's municipalities assess annually as of OCTOBER 1 — the Grand List date — and appeals are argued on the value at the time of the LAST REVALUATION, not current market (Middletown's board states this expressly). Each municipality's assessor certifies the Grand List, normally by January 31; an extension of that filing is what moves the appeal deadline from February 20 to March 20. There is no cap on the assessed value; revaluation cycles are municipal and can be dramatic in a revaluation year.",
    sources: [
      {
        sourceId: "ct-middletown-baa",
        supports: "The last-revaluation-value standard, the Grand List filing tie, and the extension mechanism.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ct-baa-appeal",
    jurisdiction: "Connecticut",
    jurisdictionId: "connecticut",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "fixed-date",
    anchoredTo: "February 20 — or March 20 where the assessor's Grand List filing was extended",
    rule:
      "The application to the municipal Board of Assessment Appeals must be filed with the assessor between FEBRUARY 1 and FEBRUARY 20 for the October 1 Grand List — and the appeal must be RECEIVED by the deadline, because postmarks are not acceptable. Where the assessor received an extension to file the Grand List, the deadline moves to MARCH 20 and the board meets in April. Appeals are in writing, with the owner's estimate of value, reason, and signature (agent authorization allowed). The BAA hears real estate and personal property appeals in MARCH; motor vehicle appeals are heard in SEPTEMBER. Under CGS § 12-111, a board may elect not to hear commercial, industrial, utility or apartment property assessed over $1 million.",
    sources: [
      {
        sourceId: "ct-bridgeport-baa",
        supports: "The February 1–20 application window, the March hearings, the September motor-vehicle session, and the § 12-111 million-dollar exception.",
      },
      {
        sourceId: "ct-middletown-baa",
        supports: "The February 20 / March 20 alternative, the no-postmark rule, and the written-application contents.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "ct-superior-court-appeal",
    jurisdiction: "Connecticut",
    jurisdictionId: "connecticut",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "two months from the date of the BAA's decision",
    rule:
      "An owner aggrieved by the Board of Assessment Appeals' decision appeals to the Connecticut Superior Court by application filed WITHIN TWO MONTHS of the decision's date — the judicial level that takes the place of the tax court other states have. The path to the Superior Court runs through the BAA first; the Judicial Branch's own pathfinder describes the municipal-to-Superior-Court structure.",
    sources: [
      {
        sourceId: "ct-jud-pathfinder",
        supports: "The two-month Superior Court application window from the BAA decision (official search text).",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },

  // ------------------------------------------------------------------
  // WISCONSIN — the Open Book / Board of Review structure: an informal
  // Open Book period, a 48-hour notice of intent, the formal objection
  // heard on sworn testimony, and two second-level routes (DOR review or
  // circuit court). Verified 2026-09-28 from two municipal assessor pages
  // read in full; the DOR's own pages are JS shells and its PDFs are
  // registered for their own stated text only.
  // ------------------------------------------------------------------
  {
    deadlineId: "wi-assessment-date",
    jurisdiction: "Wisconsin",
    jurisdictionId: "wisconsin",
    taxYear: "recurring annual rule",
    deadlineType: "assessment-date",
    deadlineBasis: "rule-based",
    anchoredTo: "January 1 of each year, the assessment date",
    rule:
      "The assessment date is always JANUARY 1 (Sun Prairie states this expressly), and municipalities revalue on their own cycles — the Notice of Changed Assessment must reach owners at least 15 days before the Board of Review's first meeting, 30 days in revaluation years (DOR PB-060's own text). There is no cap on assessed value; the equalization process at the county and state levels adjusts for market swings between municipal revaluations.",
    sources: [
      {
        sourceId: "wi-sun-prairie-appeal",
        supports: "The January 1 assessment date.",
      },
      {
        sourceId: "wi-dor-pb060",
        supports: "The 15-day (30-day in revaluation years) notice of changed assessment before the board's first meeting.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "wi-open-book-bor",
    jurisdiction: "Wisconsin",
    jurisdictionId: "wisconsin",
    taxYear: "recurring annual rule",
    deadlineType: "protest-filing",
    deadlineBasis: "rule-based",
    anchoredTo: "the Open Book period and the Board of Review's first scheduled meeting (dates set locally, published by the municipal clerk)",
    rule:
      "The appeal structure is two-stage and locally scheduled. OPEN BOOK: the assessment roll is open for inspection (at least two hours, per statute, before the board convenes) and owners meet the assessor informally — many disputes end here. BOARD OF REVIEW: a quasi-judicial municipal board hearing formal objections on SWORN oral testimony only — the owner must give the board's clerk a written or oral NOTICE OF INTENT to file an objection at least 48 HOURS before the first scheduled meeting (waivable only in limited cases), then file the Formal Objection Form with the clerk. The burden is on the owner to prove the property is inequitably assessed compared with the general level of assessment in the tax district; recent arm's-length sales are the core evidence, and an appraiser must be available to testify. The board decides validity of the facts presented, not valuation itself.",
    sources: [
      {
        sourceId: "wi-sun-prairie-appeal",
        supports: "The Open Book first step, the formal objection with the clerk, the sworn-testimony format, and the owner's burden.",
      },
      {
        sourceId: "wi-dor-pb060",
        supports: "The PA-115 objection form and the 15/30-day changed-assessment notice.",
      },
      {
        sourceId: "wi-dor-bor-faq",
        supports: "The official DOR page both municipal sources designate for the forms.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
  {
    deadlineId: "wi-dor-or-court-appeal",
    jurisdiction: "Wisconsin",
    jurisdictionId: "wisconsin",
    taxYear: "recurring annual rule",
    deadlineType: "appeal-higher-board",
    deadlineBasis: "rule-based",
    anchoredTo: "the BOR decision (20/30 days) or the BOR's adjournment (90 days)",
    rule:
      "Two routes leave the Board of Review. DOR REVIEW: a written appeal to the Department of Revenue within 20 DAYS of receiving the decision, or within 30 days of the clerk's affidavit — $100 filing fee, appealed value capped at $1 million, and the Department may revalue before November 1 of the assessment year or within 60 days of the appeal, whichever is later, substituting its value for the original. CIRCUIT COURT: an appeal within 90 DAYS after the board's adjournment, where the court decides on the record the board created — which is why what was said (and sworn) at the board hearing matters. From the DOR's decision, review continues to the circuit court.",
    sources: [
      {
        sourceId: "wi-superior-appeal",
        supports: "The 20/30-day DOR route with fee and value cap, the November 1 / 60-day revaluation window, and the 90-day circuit court window on the board record.",
      },
    ],
    lastVerifiedDate: "2026-09-28",
    verificationStatus: "source-verified",
  },
];

export function getDeadlines(jurisdictionId: string): DeadlineRecord[] {
  return DEADLINES.filter((d) => d.jurisdictionId === jurisdictionId);
}

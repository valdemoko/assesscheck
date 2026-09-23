import type { SourceRecord } from "./types";

/**
 * Verification history:
 * - All entries below were retrieved and read on 2026-09-17 (Phase 1 research).
 * - URLs were resolved by fetching them; no URL in this registry is assumed.
 * - Florida entries were read from the cited flsenate.gov statute pages on
 *   2026-09-17 (Florida state-only implementation, C1 verification round).
 */
export const SOURCES: Record<string, SourceRecord> = {
  "tx-comptroller-appraisal-protests": {
    sourceId: "tx-comptroller-appraisal-protests",
    title: "Appraisal Protests and Appeals",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/protests/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "property-tax-protests",
    notes:
      "Primary authority for protest deadline (May 15 / 30 days after notice delivery, whichever is later), notice of protest form, informal conference, ARB hearings, late protests, motion for correction, appeals to district court / SOAH / arbitration.",
    status: "verified",
  },
  "tx-tax-code-41-44": {
    sourceId: "tx-tax-code-41-44",
    title: "Texas Tax Code § 41.44 — Notice of Protest",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm#41.44",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "protest-deadline",
    notes:
      "Statutory deadline: not later than May 15 or the 30th day after the notice of appraised value was delivered, whichever is later (§ 41.44(a)(1)). Good-cause late filing before ARB approves records (§ 41.44(b)). Offshore worker and military exceptions (§§ 41.44(c-1), (c-2)).",
    status: "verified",
  },
  "tx-tax-code-41-41": {
    sourceId: "tx-tax-code-41-41",
    title: "Texas Tax Code § 41.41 — Right of Protest",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm#41.41",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "protest-grounds",
    notes:
      "Lists what a property owner may protest, including appraised value, unequal appraisal, inclusion on the roll, exemption denials, and other adverse actions. Also prohibits protest filing fees.",
    status: "verified",
  },
  "tx-tax-code-25-19": {
    sourceId: "tx-tax-code-25-19",
    title: "Texas Tax Code § 25.19 — Notice of Appraised Value",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.25.htm#25.19",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "notice-of-appraised-value",
    notes:
      "Notice deadlines (April 1 for qualifying single-family homesteads, May 1 for other property, or as soon as practicable), required notice contents, and that failure to receive a notice does not affect the appraisal's validity.",
    status: "verified",
  },
  "tx-tax-code-23-23": {
    sourceId: "tx-tax-code-23-23",
    title: "Texas Tax Code § 23.23 — Limitation on Appraised Value of Residence Homestead",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.23.htm#23.23",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "homestead-cap",
    notes:
      "10% annual homestead appraisal cap mechanics; applies to property receiving a residence homestead exemption.",
    status: "verified",
  },
  "tx-comptroller-valuing-property": {
    sourceId: "tx-comptroller-valuing-property",
    title: "Valuing Property",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/valuing-property.php",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "valuation-methods",
    notes:
      "Market value definition, three appraisal approaches, notice of appraised value, 10% homestead cap, circuit breaker limitation (§ 23.231), rendition.",
    status: "verified",
  },
  "tx-comptroller-basics": {
    sourceId: "tx-comptroller-basics",
    title: "Property Tax System Basics",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/basics.php",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "property-tax-basics",
    notes:
      "Roles of appraisal districts, ARBs, taxing units, assessor-collectors; constitutional requirements (equal and uniform, market value, single appraised value, notice); payment timeline (Jan 31, penalties Feb 1).",
    status: "verified",
  },
  "tx-comptroller-exemptions": {
    sourceId: "tx-comptroller-exemptions",
    title: "Property Tax Exemptions",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/exemptions/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "exemptions",
    notes:
      "Residence homestead exemption ($140,000 school district mandatory; local option up to 20%), age 65/disabled ($60,000 additional school exemption), disabled veteran exemptions, application deadline before May 1.",
    status: "verified",
  },
  "tx-comptroller-arb": {
    sourceId: "tx-comptroller-arb",
    title: "Appraisal Review Boards (ARB)",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/arb/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "arb",
    notes:
      "ARB composition, appointment, hearing procedures, special panels, typical May–July hearing window.",
    status: "verified",
  },
  "tx-tax-code-41-45": {
    sourceId: "tx-tax-code-41-45",
    title: "Texas Tax Code § 41.45 — Hearing on Protest",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm#41.45",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "arb-hearing",
    notes:
      "Hearing scheduling, appearance options (in person, telephone/videoconference with affidavit evidence, affidavit-only), single-member panels, postponements, evidence exchange, missed-hearing remedy.",
    status: "verified",
  },
  "tx-tax-code-41-461": {
    sourceId: "tx-tax-code-41-461",
    title: "Texas Tax Code § 41.461 — Notice of Certain Matters Before Hearing",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm#41.461",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "arb-hearing",
    notes:
      "14-day pre-hearing duties: taxpayer pamphlet, hearing procedures, and entitlement to the chief appraiser's hearing evidence on request at no charge.",
    status: "verified",
  },
  "tx-comptroller-rba": {
    sourceId: "tx-comptroller-rba",
    title: "Regular Binding Arbitration",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/arbitration/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "binding-arbitration",
    notes:
      "Official RBA program page: eligibility (real/personal property; ARB determination on value or unequal appraisal; ARB value ≤ $5 million except homesteads which have no limit; taxes timely paid; no district-court suit pending), 60-day filing deadline from ARB order, online system, 45-day settlement period, deposit refund mechanics, dismissal grounds, Comptroller rules §§9.4201–9.4247.",
    status: "verified",
  },
  "tx-tax-code-41a": {
    sourceId: "tx-tax-code-41a",
    title: "Texas Tax Code Chapter 41A — Binding Arbitration (incl. §§ 41A.09, 41A.10)",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41A.htm",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "binding-arbitration",
    notes:
      "Statutory basis for RBA. § 41A.09: award within 20 days after hearing concludes; award final, appealable only under CPRC § 171.088. § 41A.10: owner must pay taxes on the undisputed portion while the appeal is pending; delinquent taxes bar the appeal and require dismissal. Specific sections 41A.09 and 41A.10 read and verified; chapter cited at chapter level.",
    status: "verified",
  },
  "soah-home": {
    sourceId: "soah-home",
    title: "State Office of Administrative Hearings (SOAH) — Official Website",
    publisher: "State Office of Administrative Hearings",
    authorityLevel: "primary",
    url: "https://www.soah.texas.gov/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "soah",
    notes:
      "Confirms SOAH handles property tax appeal referrals and publishes the official forms 'Notice of Appeal by Property Owner' and 'Request to Docket ARB Hearing'. SOAH homepage does not restate the statutory eligibility criteria; for criteria and deadlines the Comptroller's protests page and Tax Code remain the authorities. SOAH filing-process detail beyond the form's existence NOT VERIFIED and not presented.",
    status: "verified",
  },
  "tx-tax-code-41-411": {
    sourceId: "tx-tax-code-41-411",
    title: "Texas Tax Code § 41.411 — Protest of Failure to Give Notice",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm#41.411",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "late-remedies",
    notes:
      "Right to protest the failure of the chief appraiser or ARB to provide or deliver any notice to which the owner is entitled; payment requirement cross-reference.",
    status: "verified",
  },
  "tx-tax-code-41-47": {
    sourceId: "tx-tax-code-41-47",
    title: "Texas Tax Code § 41.47 — Determination of Protest",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.41.htm#41.47",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "arb-decision",
    notes:
      "ARB written order requirements; ARB may not raise value above chief appraiser's submitted value except as agreed; 30/45-day order deadline after hearing; joint motions.",
    status: "verified",
  },
  "tx-tax-code-42-21": {
    sourceId: "tx-tax-code-42-21",
    title: "Texas Tax Code § 42.21 — Petition for Review",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.42.htm#42.21",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "district-court-appeal",
    notes:
      "60-day deadline to file petition for review in district court after receiving the ARB's final order.",
    status: "verified",
  },
  "tx-tax-code-23-013": {
    sourceId: "tx-tax-code-23-013",
    title: "Texas Tax Code § 23.013 — Market Data Comparison Method of Appraisal",
    publisher: "Texas Legislature (statutes.capitol.texas.gov)",
    authorityLevel: "primary",
    url: "https://statutes.capitol.texas.gov/Docs/TX/htm/TX.23.htm#23.013",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "comparables",
    notes:
      "Comparable sale recency (36 months for residential property in counties over 150,000 population; 24 months otherwise), adjustment requirement, and the factors that determine comparability (location, size, age, condition, access, amenities, views, easements/restrictions).",
    status: "verified",
  },
  "tx-comptroller-forms": {
    sourceId: "tx-comptroller-forms",
    title: "Property Tax Forms (incl. Form 50-132, Property Owner's Notice of Protest)",
    publisher: "Texas Comptroller of Public Accounts",
    authorityLevel: "primary",
    url: "https://comptroller.texas.gov/taxes/property-tax/forms/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Texas",
    topic: "forms",
    notes:
      "Official index of state property tax forms. Form 50-132 is the notice of protest form for counties with populations greater than 120,000 (Harris County qualifies).",
    status: "verified",
  },
  "mi-treasury-change-ownership": {
    sourceId: "mi-treasury-change-ownership",
    title: "Changes in Ownership and Uncapping of Property",
    publisher: "Michigan Department of Treasury",
    authorityLevel: "primary",
    url: "https://www.michigan.gov/taxes/property/change-ownership",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Michigan",
    jurisdictionLevel: "state",
    jurisdictionId: "michigan",
    topic: "uncapping",
    notes:
      "Read in full 2026-09-23 in a browser session: michigan.gov returns 403 to a plain text fetch, so this page is another case for the browser-first method recorded in docs/california-expansion-research.md C2. It states that MCL 211.27a(6) defines 'transfer of ownership' generally as the conveyance of title to, or a present interest in, property where the value is substantially equal to the value of the fee interest, that 211.27a(6) gives examples of what constitutes a transfer, and that 211.27a(7) lists transfers EXEMPT from the definition which therefore do not uncap. Its own words on timing: 'In accordance with the Michigan Constitution as amended by Proposal A of 1994, a transfer of ownership will cause the taxable value of the transferred property to uncap in the calendar year following the year of the transfer of ownership.' No statutory text is quoted on any page until the statute itself has been read; leg.state.mi.us is WAF-blocked (see docs/michigan-expansion-research.md).",
    status: "verified",
  },
  "mi-oakland-faq": {
    sourceId: "mi-oakland-faq",
    title: "Equalization FAQ — I Disagree with My Assessment; March Board of Review; Michigan Tax Tribunal",
    publisher: "Oakland County, Michigan (Equalization Division)",
    authorityLevel: "primary",
    url: "https://www.oaklandcountymi.gov/government/management-budget/equalization/faq",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Michigan",
    jurisdictionLevel: "county",
    jurisdictionId: "michigan",
    topic: "appeal-procedure",
    notes:
      "Read in full 2026-09-23. The source for Michigan's appeal ladder, and the reason the state is buildable despite its statute site being unreachable. Records: the sequence (property record card, then the assessor, then an appointment for the March Board of Review) and that a March Board appeal is what RESERVES the right to go to the Michigan Tax Tribunal; that since 2007 commercial and industrial real property may appeal DIRECTLY to the Tribunal on or before MAY 31 without petitioning the March Board; that personal property may go direct if a Personal Property Statement was filed before the March Board commences (statements due February 20); that RESIDENTIAL and AGRICULTURAL must protest to the Board first and their Tribunal deadline is JULY 31 of the tax year; that the board must notify a protester in writing no later than the FIRST MONDAY IN JUNE, and that the notice must state the right of appeal, the time limits and the Tribunal's address; the grounds (classification — six classes: agricultural, commercial, developmental, industrial, residential, timber cutover; status; equity at a uniform 50% ratio; and the § 211.7u(1) poverty/hardship exemption, which must be filed and approved EVERY year); the evidence rules (assessments rest on sales of similar properties, but a sale price 'cannot be the sole determining factor', and mortgage appraisals may not show true cash value; non-residents may appeal by letter); and the Tribunal's two divisions (Entire Tribunal formal in Lansing; Small Claims informal, about 30 minutes, heard in the county).",
    status: "verified",
  },
  "mi-oakland-equalization": {
    sourceId: "mi-oakland-equalization",
    title: "Real & Personal Property Information",
    publisher: "Oakland County, Michigan (Equalization Division)",
    authorityLevel: "primary",
    url: "https://www.oaklandcountymi.gov/government/management-budget/equalization/real-personal-property-information",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Michigan",
    jurisdictionLevel: "county",
    jurisdictionId: "michigan",
    topic: "taxable-value-cap",
    notes:
      "Read in full 2026-09-23 (oakgov.com redirects here). The most complete official statement of Michigan's mechanism found anywhere readable, and the reason Michigan is buildable at all: every one of the state's central rules is here, though at county level rather than in the statute, which is why Michigan is a Nevada-class state for provenance and not an Arizona-class one. It documents Proposal A (approved March 15, 1994) making taxable value the basis of the tax; the cap as 'the percent of change in the rate of inflation or 5%, whichever is less'; the formula Capped Value = (Prior TV - Losses) x IRM + Additions with the Inflation Rate Multiplier 'capped and cannot be greater than 1.05 (1 + 5%)'; Assessed Value as of December 31 (Tax Day) not exceeding 50% of true cash value; SEV as AV after county and state equalisation; Taxable Value as the LESSER of SEV or Capped Value unless a transfer of ownership occurred; the uncapping rule ('the following year's State Equalized Value (SEV) becomes that year's Taxable Value... then capped for the second year following the transfer of ownership'); the 24-month sales study used in increasing markets with its timeframe set by the State Tax Commission; the Notice of Assessment, Taxable Valuation, and Property Classification mailed before the March boards of review; and the Principal Residence Exemption affidavit deadlines of June 1 for the succeeding summer levy and November 1 for the succeeding winter levy.",
    status: "verified",
  },
  "dcad-protest-deadline": {
    sourceId: "dcad-protest-deadline",
    title: "What is the deadline to file a protest?",
    publisher: "Dallas Central Appraisal District",
    authorityLevel: "primary",
    url: "https://support.dallascad.org/hc/en-us/articles/33688036585371-What-is-the-deadline-to-file-a-protest",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Dallas County, Texas",
    jurisdictionLevel: "county",
    jurisdictionId: "texas",
    topic: "dallas-protest-deadline",
    notes:
      "Read in full, and it is quoted directly: 'A protest must be filed by May 15th, or no later than 30 days after the Appraisal District delivers a Notice of Appraised Value to you, whichever is later. However, if the protest deadline falls on a weekend or holiday, then the protest deadline is the first business day after that date. If mailed, the protest must be postmarked by the deadline date.' Note the two details the statewide pages state less plainly: the weekend/holiday rollover, and the postmark rule. Registered for the county bar in docs/dallas-county-research.md; no Dallas page cites it yet.",
    status: "verified",
  },
  "dcad-protest-questions": {
    sourceId: "dcad-protest-questions",
    title: "I have questions about protesting property value.",
    publisher: "Dallas Central Appraisal District",
    authorityLevel: "primary",
    url: "https://support.dallascad.org/hc/en-us/articles/33693697563931-I-have-questions-about-protesting-property-value",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Dallas County, Texas",
    jurisdictionLevel: "county",
    jurisdictionId: "texas",
    topic: "dallas-protest-procedure",
    notes:
      "Read in full. Protests to the ARB may be filed using uFile, the district's online protest system, 'Beginning on April 15th', or in written form; 'Protests will not be accepted by fax or email'; and 'uFile allows only one protest to be filed at the account level' — so an owner with several accounts must file by mail or in person to have them scheduled together. It also points at the Search Appraisal function on the district's site, which is the lead for the property-search URL but is not itself a URL. Registered for the county bar in docs/dallas-county-research.md; no Dallas page cites it yet.",
    status: "verified",
  },
  "hcad-home": {
    sourceId: "hcad-home",
    title: "Harris Central Appraisal District — Official Website",
    publisher: "Harris Central Appraisal District",
    authorityLevel: "primary",
    url: "https://hcad.org/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Harris County, Texas",
    topic: "hcad",
    notes:
      "Confirms HCAD services: property search, online protest filing (iFile), renditions, homestead exemption filing, exemption wizard, property tax database, electronic communications.",
    status: "verified",
  },
  "hcad-about": {
    sourceId: "hcad-about",
    title: "About HCAD",
    publisher: "Harris Central Appraisal District",
    authorityLevel: "primary",
    url: "https://hcad.org/about/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Harris County, Texas",
    topic: "hcad",
    notes:
      "HCAD is a political subdivision of the State of Texas established in 1980; approximately 1.9 million parcels; largest appraisal district in Texas serving more than 600 taxing units.",
    status: "verified",
  },
  "hcad-ifile": {
    sourceId: "hcad-ifile",
    title: "iFile Protest — HCAD Online Services",
    publisher: "Harris Central Appraisal District",
    authorityLevel: "primary",
    url: "https://hcad.org/hcad-online-services/ifile-protest/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Harris County, Texas",
    topic: "hcad-protest-filing",
    notes:
      "HCAD's official online protest filing entry point (iFile). Confirms online filing exists; account-level filing requires the owner's HCAD account access.",
    status: "verified",
  },
  "hcad-forms": {
    sourceId: "hcad-forms",
    title: "HCAD Forms (All Forms)",
    publisher: "Harris Central Appraisal District",
    authorityLevel: "primary",
    url: "https://hcad.org/hcad-forms/hcad-all-forms/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Harris County, Texas",
    topic: "hcad-forms",
    notes:
      "Official HCAD form index, including Form 50-132 (Notice of Protest), homestead exemption application (11.13), appointment of agent (50-162), and protest-process information sheet.",
    status: "verified",
  },
  "hcad-homestead": {
    sourceId: "hcad-homestead",
    title: "Homestead — HCAD Online Services",
    publisher: "Harris Central Appraisal District",
    authorityLevel: "primary",
    url: "https://hcad.org/hcad-online-services/homestead/",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Harris County, Texas",
    jurisdictionLevel: "county",
    jurisdictionId: "harris-county",
    topic: "hcad-homestead",
    notes:
      "HCAD residential homestead exemption filing options including the HCAD mobile app.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // FLORIDA — primary sources read directly from flsenate.gov on 2026-09-17.
  // Every entry below was verified by reading the statute text this session.
  // Sources NOT verified this session (e.g. DR-486 form, § 193.502 NAL pages,
  // DOR data portal deep pages) are deliberately ABSENT — they cannot back a
  // published claim until verified.
  // ------------------------------------------------------------------
  "fl-dor-property-hub": {
    sourceId: "fl-dor-property-hub",
    title: "Property Tax Oversight — Florida Department of Revenue",
    publisher: "Florida Department of Revenue",
    authorityLevel: "primary",
    url: "https://floridarevenue.com/property/Pages/Home.aspx",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "property-tax-hub",
    notes:
      "DOR's property tax hub (reachable and read during research). Confirms DOR's oversight role. Deep data-portal pages (NAL/SDF) were NOT reachable this session and are NOT relied on.",
    status: "verified",
  },
  "fl-stat-193-011": {
    sourceId: "fl-stat-193-011",
    title: "Florida Statutes § 193.011 — Factors to consider in deriving just valuation",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/193.011",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "valuation",
    notes:
      "Just valuation factors (present cash value, highest and best use, location, size, cost/replacement, condition, income, net sale proceeds). Basis for explaining what Florida just value means.",
    status: "verified",
  },
  "fl-stat-193-155": {
    sourceId: "fl-stat-193-155",
    title: "Florida Statutes § 193.155 — Homestead assessments (Save Our Homes)",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/193.155",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "homestead-cap",
    notes:
      "SOH cap: annual change may not exceed the LOWER of 3% of prior-year assessed value or the CPI change (§ 193.155(1)); assessed value lowered to just value if higher (§ 193.155(2)); reset to just value after change of ownership except enumerated exceptions (§ 193.155(3)); additions assessed at just value (§ 193.155(4)); portability (§ 193.155(8)) assessed at less than just value for qualifying new homesteads.",
    status: "verified",
  },
  "fl-stat-193-1554": {
    sourceId: "fl-stat-193-1554",
    title: "Florida Statutes § 193.1554 — Assessment of nonhomestead residential property",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/193.1554",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "nonhomestead-cap",
    notes:
      "Nonhomestead residential (≤9 dwelling units, incl. vacant platted residential, not receiving § 196.031): annual change capped at 10% of prior-year assessed value for all levies other than school district levies (§ 193.1554(3)); reset to just value after change of ownership or control incl. >50% entity transfers (§ 193.1554(5)). This is a DIFFERENT rule from the SOH 3% cap — never conflate them.",
    status: "verified",
  },
  "fl-stat-196-031": {
    sourceId: "fl-stat-196-031",
    title: "Florida Statutes § 196.031 — Exemption of homesteads",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/196.031",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "exemptions",
    notes:
      "Homestead exemption: $25,000 on the residence for qualifying owners (§ 196.031(1)(a)); additional up to $25,000 on assessed value greater than $50,000 for all levies other than school district levies (§ 196.031(1)(b)). Eligibility: legal or equitable title + permanent residence on January 1.",
    status: "verified",
  },
  "fl-stat-196-011": {
    sourceId: "fl-stat-196-011",
    title: "Florida Statutes § 196.011 — Annual application required for exemption",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/196.011",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "exemption-application-deadline",
    notes:
      "Exemption application must be filed on or before March 1 of each year with the county property appraiser (§ 196.011(1)(a)); late filing = waiver for that year except late-application provision (§ 196.011(9): file within 25 days after the § 194.011(1) notice mailing, with extenuating-circumstances evidence) and postal-error provision (§ 196.011(8)).",
    status: "verified",
  },
  "fl-stat-194-011": {
    sourceId: "fl-stat-194-011",
    title: "Florida Statutes § 194.011 — Assessment notice; objections to assessments",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.011",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "vab-petition",
    notes:
      "Informal conference with the property appraiser (§ 194.011(2)); VAB petition form prescribed by DOR, sworn, filed with the VAB clerk (§ 194.011(3)(a)-(b)); VALUE petitions on or before the 25th day following the mailing of the § 194.011(1) notice (§ 194.011(3)(d)); exemption/classification/deferral denial petitions within 30 days of the applicable notice (§ 194.011(3)(d)); evidence exchange 15 days before hearing / PA response 7 days before (§ 194.011(4)).",
    status: "verified",
  },
  "fl-stat-194-013": {
    sourceId: "fl-stat-194-013",
    title: "Florida Statutes § 194.013 — Filing fees for petitions",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.013",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "vab-petition",
    notes:
      "VAB may require a filing fee not to exceed $15 per parcel by board resolution (§ 194.013(1)); waived for homestead-denial appeals under § 196.151 and tax-deferral appeals; fee waiver for DCF temporary-assistance recipients (§ 194.013(2)); unpaid fee invalidates the petition (§ 194.013(3)).",
    status: "verified",
  },
  "fl-stat-194-032": {
    sourceId: "fl-stat-194-032",
    title: "Florida Statutes § 194.032 — Hearing purposes; timetable",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.032",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "vab-hearing",
    notes:
      "VAB meets not earlier than 30 and not later than 60 days after the § 194.011(1) notice mailing (§ 194.032(1)(a)); clerk notifies petitioners of scheduled appearance at least 25 calendar days before (§ 194.032(2)(a)); PA must provide the property record card on petition receipt unless available online (§ 194.032(2)(a)).",
    status: "verified",
  },
  "fl-stat-194-034": {
    sourceId: "fl-stat-194-034",
    title: "Florida Statutes § 194.034 — Hearing procedures; rules",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.034",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "vab-hearing",
    notes:
      "Written VAB decision with findings of fact and conclusions of law, issued within 20 calendar days after the last day the board is in session (§ 194.034(2)); board may consider assessments among comparable properties within homogeneous areas or neighborhoods (§ 194.034(5)); petitioner may not withhold evidence requested in writing by the PA (§ 194.034(1)(h)). NOTE: the NAL-comparable presumption often attributed to § 194.034 was NOT verified this session and is NOT relied on.",
    status: "verified",
  },
  "fl-stat-194-035": {
    sourceId: "fl-stat-194-035",
    title: "Florida Statutes § 194.035 — Special magistrates; property evaluators",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.035",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "vab-hearing",
    notes:
      "Counties >75,000 population appoint special magistrates who take testimony and make recommendations (§ 194.035(1)); qualification requirements by issue type (attorney for exemptions, state-certified appraiser for real-estate valuation).",
    status: "verified",
  },
  "fl-stat-194-036": {
    sourceId: "fl-stat-194-036",
    title: "Florida Statutes § 194.036 — Appeals",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.036",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "judicial-appeal",
    notes:
      "Taxpayer may bring an action to contest a tax assessment pursuant to § 194.171 (§ 194.036(2)); circuit court proceeding is de novo with burden on the party initiating the action (§ 194.036(3)); PA appeal criteria to circuit court (§ 194.036(1)).",
    status: "verified",
  },
  "fl-stat-194-014": {
    sourceId: "fl-stat-194-014",
    title: "Florida Statutes § 194.014 — Partial payment of ad valorem taxes; proceedings before VAB",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/194.014",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "vab-payment-requirement",
    notes:
      "A petitioner challenging assessed value must pay all non-ad valorem assessments and at least 75% of the ad valorem taxes (less applicable discount) before taxes become delinquent (§ 194.014(1)(a)); VAB must deny the petition by written decision by April 20 if the payment was not made (§ 194.014(1)(c)).",
    status: "verified",
  },
  "fl-stat-200-069": {
    sourceId: "fl-stat-200-069",
    title: "Florida Statutes § 200.069 — Notice of proposed property taxes (TRIM notice)",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/200.069",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "trim-notice",
    notes:
      "Statutorily standardized notice: 'DO NOT PAY—THIS IS NOT A BILL'; columnar taxing-authority table (last year's taxes, adjusted/rolled-back rate, taxes if no budget change, proposed rate, taxes if proposed budget adopted, hearing dates) (§ 200.069(2)-(5)); second page shows market value plus assessed value, exemptions, and taxable value for previous and current year (§ 200.069(6)); instructs taxpayers who dispute market value to contact the property appraiser and states VAB petition forms are available and must be filed ON OR BEFORE a date printed on the notice (§ 200.069(7)).",
    status: "verified",
  },
  "fl-stat-197-322": {
    sourceId: "fl-stat-197-322",
    title: "Florida Statutes § 197.322 — Delivery of tax rolls; notice of taxes",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/197.322",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "tax-billing",
    notes:
      "Tax collector publishes notice that the tax roll is open for collection on November 1 or as soon as the roll is open (§ 197.322(2)); tax notices sent within 20 working days after receipt of the certified roll (§ 197.322(3)).",
    status: "verified",
  },
  "fl-stat-197-333": {
    sourceId: "fl-stat-197-333",
    title: "Florida Statutes § 197.333 — When taxes due; delinquent",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/197.333",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "tax-billing",
    notes:
      "Taxes due and payable November 1 of each year or as soon thereafter as the certified roll is received; taxes become delinquent April 1 following the year assessed or immediately after 60 days from mailing of the original notice, whichever is LATER (§ 197.333).",
    status: "verified",
  },
  "fl-stat-196-151": {
    sourceId: "fl-stat-196-151",
    title: "Florida Statutes § 196.151 — Homestead exemptions; approval, refusal, hearings",
    publisher: "Florida Legislature (The Florida Senate, Florida Statutes)",
    authorityLevel: "primary",
    url: "https://www.flsenate.gov/Laws/Statutes/2024/196.151",
    lastVerifiedDate: "2026-09-17",
    jurisdiction: "Florida",
    jurisdictionLevel: "state",
    jurisdictionId: "florida",
    topic: "exemption-denial",
    notes:
      "PA considers applications filed by March 1 and serves written notice of disapproval with reasons; applicant may appeal to the VAB; board action final unless the applicant files in circuit court within 15 days of the board's refusal (§ 196.151).",    status: "verified",
  },

  // ------------------------------------------------------------------
  // CALIFORNIA — official state/county pages read directly on 2026-09-23.
  // PROVENANCE CAVEAT: leginfo.legislature.ca.gov (the official California
  // Codes site) is a JavaScript application and returned no readable text to
  // this environment, so NO statute text was read at the source. Every entry
  // below is an official government page that STATES the rule (BOE, CDTFA,
  // Yolo County Assessor). Section numbers appear only where the official
  // page itself names them. See docs/california-expansion-research.md §1.2.
  // ------------------------------------------------------------------
  "ca-rtc-51": {
    sourceId: "ca-rtc-51",
    title:
      "California Revenue and Taxation Code § 51 — Taxable value of real property; base year value and full cash value",
    publisher: "California Legislative Counsel (leginfo.legislature.ca.gov)",
    authorityLevel: "primary",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=51",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "statute-base-year-value",
    notes:
      "Read in full, 2026-09-23, and this is the first California source on the site that is the statute rather than a page describing it. Closes open item C1 for § 51. It states the rule the California pages are built on: taxable value is the LESSER of (1) base year value compounded annually by an inflation factor or (2) full cash value as of the lien date taking into account damage, destruction, depreciation, obsolescence, removal or other factors causing a decline in value — statutory paragraph (a)(2), which is the decline-in-value rule. The 2% ceiling is in the statute's own words at (a)(1)(D): 'In no event shall the percentage increase for any assessment year determined pursuant to subparagraph (A), (B), or (C) exceed 2 percent of the prior year's value.' The index is defined at (a)(1)(C): for assessment years from January 1, 1998, the percentage change from OCTOBER of the prior fiscal year to October of the current fiscal year in the California Consumer Price Index for all items, rounded to the nearest one-thousandth of 1 percent, as determined by the Department of Industrial Relations — note October, not December, which is why the CPI factor and the tax year are not the same window. Subdivision (b) and (c) handle disaster-damaged property with and without a § 170 county ordinance; (d) defines 'real property' as the appraisal unit commonly bought and sold as a unit. Subdivision (e) is the one worth knowing beyond the pages: after the first lien date on which value is reduced under (a)(2), the property must be ANNUALLY REAPPRAISED at full cash value until that value exceeds the (a)(1) figure, and 'in no event shall the assessor condition the implementation of the preceding sentence in any year upon the filing of an assessment appeal'. That is the statutory basis for a lawful increase far above 2% in a single year, and the sentence that removes the appeal from the equation. Amended by Stats. 2000, Ch. 647, § 1, effective January 1, 2001.",
    status: "verified",
  },
  "ca-rtc-1603": {
    sourceId: "ca-rtc-1603",
    title:
      "California Revenue and Taxation Code § 1603 — Application for reduction in assessment; filing period",
    publisher: "California Legislative Counsel (leginfo.legislature.ca.gov)",
    authorityLevel: "primary",
    url: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=RTC&sectionNum=1603",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "statute-appeal-window",
    notes:
      "Read in full, 2026-09-23. Closes open item C1 for § 1603 and settles the California filing window from the statute: (b)(1) the application 'shall be filed within the time period from July 2 to September 15, inclusive', with an application mailed and postmarked September 15 or earlier deemed filed in time. Two exceptions the site's deadline record has to carry: (b)(2) if the taxpayer does not receive the § 619 notice of assessment at least 15 calendar days before that deadline, they may file within 60 days of receipt of the notice or 60 days of the mailing of the tax bill, whichever is EARLIER, with an affidavit under penalty of perjury; and (b)(3) the last filing day is extended to NOVEMBER 30 where the county assessor does not provide the § 619 notice to all assessees of real property on the local secured roll by August 1 — including the annual inflation increases, described as not to exceed 2 percent under Article XIII A § 2(b). (b)(3)(A) requires the assessor to tell the clerk of the board of equalization and the county tax collector by April 1 each year whether that notice will be provided by August 1. This is why the 'September 15 or November 30?' question is decided county by county and not by the taxpayer's preference. Also (a): the application must be verified and in writing, stating the facts claimed to require the reduction and the applicant's opinion of the full value, on a form prescribed by the State Board of Equalization.",
    status: "verified",
  },
  "ca-boe-decline-in-value": {
    sourceId: "ca-boe-decline-in-value",
    title: "Decline in Value – Proposition 8",
    publisher: "California State Board of Equalization",
    authorityLevel: "primary",
    url: "https://www.boe.ca.gov/proptaxes/decline-in-value/",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "base-year-value",
    notes:
      "Read in full. Proposition 13's three effects (1975 rollback; 1% rate limit plus voter-approved bonded indebtedness; increases limited to a maximum of 2% per year); base year value = market value established in 1975 or at the last change in ownership or completed new construction; adjusted annually by the LOWER of the California CPI change or 2% (the factored base year value); Proposition 8 (codified at § 51(a)(2) R&TC) — the assessor enrolls the LESSER of the factored base year value or the January 1 market value, the reduction is temporary and reviewed annually, and in decline-in-value status the assessed value may rise by MORE than 2% in a year but may never exceed the existing factored base year value absent a change in ownership or new construction.",
    status: "verified",
  },
  "ca-boe-appeals-faq": {
    sourceId: "ca-boe-appeals-faq",
    title: "Assessment Appeals Frequently Asked Questions (FAQs)",
    publisher: "California State Board of Equalization",
    authorityLevel: "primary",
    url: "https://www.boe.ca.gov/proptaxes/faqs/assessappeals.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "assessment-appeals",
    notes:
      "Read in full. Application form BOE-305-AH obtained from the clerk of the county board of supervisors / assessment appeals board; the board hears evidence and DETERMINES value and may leave, lower, OR RAISE it; the board cannot reduce a value because of prior-year increases and cannot grant or deny exemptions; decision final, challengeable in superior court within SIX MONTHS; burden of proof on the assessor for owner-occupied single-family dwellings (and enumerated other situations) and on the applicant in all other situations; evidence must be presented AT the hearing; comparable sales more than 90 DAYS after the valuation date may not be considered; exchange of information requested at least 30 days before the hearing with a response at least 15 days before ($100,000 threshold for the assessor's own request); hearing notice mailed at least 45 days ahead; up to TWO YEARS to resolve an application (if not heard in two years the applicant's opinion of value may temporarily become the taxable value); taxes must be paid on time despite a pending appeal (a reduction yields a refund with interest); stipulations signed by assessor, county legal officer and applicant settle value without a hearing; failure to appear results in denial for nonappearance.",
    status: "verified",
  },
  "ca-boe-tax-calendar": {
    sourceId: "ca-boe-tax-calendar",
    title: "Property Tax Calendar",
    publisher: "California State Board of Equalization",
    authorityLevel: "primary",
    url: "https://www.boe.ca.gov/proptaxes/calendar.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "deadlines",
    notes:
      "Read (January–April and the structure of the remaining months). Lien of taxes attaches January 1 at 12:01 a.m. for all taxable property (§ 2192); second installment due February 1 (§ 2606); second installment delinquent April 10 at 5:00 p.m. (§§ 2618, 2705); by April 1 the assessor notifies the clerk of the county appeals board and the tax collector whether the notice of assessed value will be sent to all assessees BY AUGUST 2 (§ 1603(b)(3)(A)). The November/December rows were not read in full this session — the first-installment and delinquent dates used on the California pages come from the CDTFA page and the county page below.",
    status: "verified",
  },
  "ca-cdtfa-important-dates": {
    sourceId: "ca-cdtfa-important-dates",
    title: "Property Tax Function Important Dates",
    publisher: "California Department of Tax and Fee Administration (State of California)",
    authorityLevel: "primary",
    url: "https://taxes.ca.gov/other-taxes-and-fees/property-tax-function-important-dates/",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "deadlines",
    notes:
      "Read in full. January 1 lien date; February 1 second installment due; February 15 last day to timely file a homeowners' or disabled veterans' exemption claim; April 10 second installment delinquent at 5 p.m.; July 2 FIRST day to file an application for changed assessment with the clerk of the county board of supervisors or assessment appeals board; September 15 last day to file where the assessor provided value notices by August 1 to all secured-roll assessees of real property, and 'in all other counties, the filing period runs through November 30' (the 2026 list shows December 1); November 1 first installment due; December 10 first installment delinquent and last day for a LATE homeowners'/disabled veterans' exemption claim. Also notes that the filing period is extended under certain circumstances when a taxpayer does not receive timely notice of assessment.",
    status: "verified",
  },
  "ca-yolo-important-dates": {
    sourceId: "ca-yolo-important-dates",
    title: "Important Dates for Property Owners",
    publisher: "Yolo County Assessor (ACE Department), California",
    authorityLevel: "primary",
    url: "https://ace.yolocounty.gov/164/Important-Dates-for-Property-Owners",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "county",
    jurisdictionId: "california",
    topic: "deadlines-county-variation",
    notes:
      "Read in full. Used ONLY as independent evidence that the county-level calendar has this shape and varies: July 2 is the first day the county board accepts applications and, in this county, the period ends November 30; November 1 first installment due (delinquent December 10); February 1 second installment due (delinquent April 10); February 15 timely exemption claims; December 10 late homeowners' exemption claim. No Yolo-specific rule is presented as statewide.",
    status: "verified",
  },
  "ca-boe-property-tax-hub": {
    sourceId: "ca-boe-property-tax-hub",
    title: "Property Tax Department — California State Board of Equalization",
    publisher: "California State Board of Equalization",
    authorityLevel: "primary",
    url: "https://www.boe.ca.gov/proptaxes/proptax.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "California",
    jurisdictionLevel: "state",
    jurisdictionId: "california",
    topic: "property-tax-hub",
    notes:
      "Read (reachable). BOE's Property Tax Department 'acts in an oversight capacity to ensure compliance by the state's 58 County Assessors'. Used as the honest state-level anchor for 'find your county assessor': California has no single statewide parcel search.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // ARIZONA — statute text read directly on azleg.gov on 2026-09-23, plus the
  // State Board of Equalization (the agency that runs the appeal system) and
  // two county offices for operational detail. arizonarevenue.gov returned 403
  // and mcassessor.maricopa.gov failed TLS verification from this environment,
  // so neither is cited. See docs/arizona-expansion-research.md §1.2.
  // ------------------------------------------------------------------
  "az-ars-42-13301": {
    sourceId: "az-ars-42-13301",
    title: "A.R.S. § 42-13301 — Limited property value",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/13301.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "limited-property-value",
    notes:
      "Read in full. (A) The limited property value is the LPV of the preceding valuation year PLUS FIVE PER CENT of that value. (B) The current LPV shall not exceed the current full cash value. (C) The LPV is determined and shown on notices and tax rolls as the total LPV; no separate LPV for land and improvements. This is the statutory core of the 5% limit: it is a formula measured against the prior year's LPV, not a limit on market value.",
    status: "verified",
  },
  "az-ars-42-13302": {
    sourceId: "az-ars-42-13302",
    title:
      "A.R.S. § 42-13302 — Determining limited value in cases of modifications, omissions and changes",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/13302.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "limited-property-value-exceptions",
    notes:
      "Read in full. Lists the situations in which the LPV is established at a level or percentage of full cash value comparable to other property of the same or similar use or classification: property erroneously omitted from the rolls; a change in physical, objectively verifiable use (a change in the OCCUPANT or classification of a single-family residence is NOT a change in use); modification by construction, destruction or demolition where the total value of the modification is EQUAL TO OR GREATER THAN 15% OF THE FULL CASH VALUE; property split, subdivided or consolidated (with Jan 1–Sep 30 vs Oct 1–Dec 31 rules and separate treatment of government-initiated actions); loss of property valuation protection under Art. IX § 18(7); loss of a statutory valuation.",
    status: "verified",
  },
  "az-ars-42-13304": {
    sourceId: "az-ars-42-13304",
    title: "A.R.S. § 42-13304 — Exemptions from limitation",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/13304.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "limited-property-value-exclusions",
    notes:
      "Read in full. The LPV limitation does not apply to (1) personal property other than mobile homes, and (2) property included in class one under § 42-12001 paragraphs 1 through 7, 11 and 14. For that property the FULL CASH VALUE is used for all purposes in lieu of the LPV.",
    status: "verified",
  },
  "az-ars-42-15101": {
    sourceId: "az-ars-42-15101",
    title:
      "A.R.S. § 42-15101 — Annual notice of full cash value; amended notice of valuation",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/15101.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "notice-of-valuation",
    notes:
      "Read in full. (A) On any date before March 1 each year the county assessor notifies each owner of record of the property's full cash value and limited property value, if applicable, to be used for assessment purposes. (B) The notice is mailed, delivered by common carrier, or transmitted electronically on request. (C) The assessor certifies to the board of supervisors and the department the date all notices were mailed. (D) The director may extend the mailing date beyond March 1 by not more than 30 days for acts of God, flood, fire or declared emergency, applied to all property. (E) WITHIN SIXTY DAYS AFTER THE MAILING the assessor may amend the notice of valuation when neighborhood or classification property characteristic data produced an incorrect opinion of value — the reason an owner can receive a second notice and a new sixty-day petition clock. (F) After the mailing, an owner may be advised of the valuation, but the assessor may not change the roll except as provided by law.",
    status: "verified",
  },
  "az-ars-42-16051": {
    sourceId: "az-ars-42-16051",
    title:
      "A.R.S. § 42-16051 — Petition for assessor review of improper valuation or classification",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/16051.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "appeal-filing",
    notes:
      "Read in full. (B) The petition shall state the owner's opinion of the FULL CASH VALUE and substantial information justifying it, by stating the method(s) of valuation: income approach (information required by § 42-16052); market approach including the full cash value of AT LEAST ONE COMPARABLE PROPERTY IN THE SAME GEOGRAPHIC AREA or the sale of the subject property; cost approach (cost to build or rebuild plus land value). (C) Multiple parcels may be joined if same economic unit, owner, use, basis and geographic area. (D) The petition shall be filed WITHIN SIXTY DAYS after the date the assessor mailed the notice of valuation OR THE AMENDED NOTICE OF VALUATION under § 42-15101, and USPS postmark dates are evidence of the filing date. (E) Class three petitions must carry simplified instructions and use a separate form.",
    status: "verified",
  },
  "az-ars-42-15003": {
    sourceId: "az-ars-42-15003",
    title: "A.R.S. § 42-15003 — Assessed valuation of class three property",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/15003.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "assessment-ratio",
    notes:
      "Read in full: the assessed valuation of class three property (described in § 42-12003) is TEN PER CENT of its full cash value OR LIMITED VALUATION, AS APPLICABLE — the statute's own wording confirms the ratio is applied to the LPV wherever the LPV applies.",
    status: "verified",
  },
  "az-ars-42-15004": {
    sourceId: "az-ars-42-15004",
    title: "A.R.S. § 42-15004 — Assessed valuation of class four property",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/15004.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "assessment-ratio",
    notes:
      "Read in full: the assessed valuation of class four property (described in § 42-12004) is TEN PER CENT of its full cash value or limited valuation, as applicable. Class four is where second and vacation homes sit after the 2012 restriction of class three to the owner's primary residence (county source).",
    status: "verified",
  },
  "az-sboe-how-to-appeal": {
    sourceId: "az-sboe-how-to-appeal",
    title: "How to File an Appeal — Arizona State Board of Equalization",
    publisher: "Arizona State Board of Equalization (State of Arizona)",
    authorityLevel: "primary",
    url: "https://sboe.az.gov/taxpayers/how-file-appeal",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "appeal-process",
    notes:
      "Read in full (plus the SBOE 'How To Appeal' page). January 1 is the valuation date for the FOLLOWING tax year; the assessor mails the notice of valuation on any date BEFORE MARCH 1 with FCV, LPV and property class; Step 1 petition for review with the county assessor WITHIN 60 DAYS of mailing (deadline printed on the notice; forms DOR 82130R residential, DOR 82130 commercial, DOR 82530 personal property, DOR 82131 multiple parcels, DOR 82130AA agency authorization); the assessor must consider, decide and answer all requests ON OR BEFORE AUGUST 15 (§§ 42-16054, 42-16055); if the assessor AGREES, NO FURTHER APPEAL is permitted (§ 42-16056); Step 2 petition to the county Board of Equalization WITHIN 25 DAYS of the mailing of the assessor's decision, or a direct appeal to Tax Court WITHIN 60 DAYS of that decision; Pima and Maricopa county appeals may go on to the SBOE; Step 3 Tax Court within 60 days of the SBOE decision; ALL Arizona tax court appeals are heard at Maricopa Superior Court; if no appeal was filed with the assessor, Tax Court no later than DECEMBER 15 of the valuation year. The Board does not accept appeals by fax or email, nor letters in place of forms. Amended notices are typically sent by the county assessor in LATE SEPTEMBER.",
    status: "verified",
  },
  "az-cochise-assessor-faq": {
    sourceId: "az-cochise-assessor-faq",
    title: "Assessor Frequently Asked Questions — Cochise County",
    publisher: "Cochise County Assessor (Cochise County, Arizona)",
    authorityLevel: "primary",
    url: "https://www.cochise.az.gov/faq.aspx?TID=18",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "county",
    jurisdictionId: "arizona",
    topic: "valuation-practice",
    notes:
      "Read in full. Beginning Tax Year 2015 NO tax levy is assessed against the full cash value (Proposition 117); all property taxes are levied against the LIMITED PROPERTY VALUE, which is the value used to calculate the tax bill; the LPV is a statutory calculation based on the previous year's LPV and the new FCV and is 'not subject to discretionary adjustment by the assessor'; when the spread between FCV and LPV is large the LPV increases even when the current year's FCV dropped, and IN NO CASE can the LPV exceed the FCV; the 5% restriction applies provided no change in use or new construction has occurred since the last assessment; since 2012 class three owner-occupied classification is restricted to the owner's PRIMARY RESIDENCE — second and vacation homes are class four, both classes are assessed at a 10% rate, but class three receives a state aid to education reduction on the bill that class four does not; to change to owner-occupied class three, file an Application for Reclassification of Property with the assessor; values are set in the year BEFORE the tax year (the 2027 valuation is set as of January 1, 2026 using 18 months of sales data — 2024 and 2025), and market changes after the valuation date are not relevant; the assessor is not a taxing authority and reports net assessed valuation to the taxing jurisdictions, which set the rates; on an appeal the owner must document why the assessment is incorrect because there is NO limit on increases in the full cash value.",
    status: "verified",
  },
  "az-pima-treasurer-info": {
    sourceId: "az-pima-treasurer-info",
    title: "General Information — Pima County Treasurer's Office",
    publisher: "Pima County Treasurer (Pima County, Arizona)",
    authorityLevel: "primary",
    url: "https://www.to.pima.gov/generalInfo/",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "county",
    jurisdictionId: "arizona",
    topic: "tax-billing",
    notes:
      "Read in full. Taxes are based on the property's assessed limited value; the assessor notifies the owner of the full cash and limited property values BY MARCH 1 and the limited value is used to calculate taxes for the NEXT tax year; the board of supervisors sets tax rates on the THIRD MONDAY IN AUGUST and the rates are applied to the property's net assessed limited value from the previous year; tax statements are mailed each SEPTEMBER; FIRST HALF DUE OCTOBER 1 with delinquency NOVEMBER 1 at 5 p.m.; SECOND HALF DUE MARCH 1 with delinquency MAY 1 at 5 p.m.; a full-year payment by DECEMBER 31 waives interest on any unpaid first-half balance; if the total annual tax is $100 OR LESS the entire amount is due December 31; unpaid balances bear statutory interest of 16% per year (1.333% monthly); when a delinquency date falls on a weekend or legal holiday, taxes become delinquent at 5 p.m. the next business day; mailed payments postmarked after the delinquency date are late; partial payments allowed with a minimum of $10 or 10% of the tax due. These are Pima County's published rules — county-specific, not presented as identical statewide.",
    status: "verified",
  },
  "az-const-art9-s18": {
    sourceId: "az-const-art9-s18",
    title:
      "Arizona Constitution, Article IX, Section 18 — Residential ad valorem tax limits; limit on increase in values; definitions",
    publisher: "Arizona Legislature (Constitution of Arizona)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/const/9/18.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "constitutional-limit",
    notes:
      "Read in full. (1) Ad valorem taxes collected from residential property in any tax year shall not exceed 1% of the property's full cash value as limited by this section, subject to the exclusions in (2) (bonded debt, improvement/special districts, election overrides). (3)(a) THROUGH TAX YEAR 2014 the taxable value was the lesser of the FCV or the GREATER of 10% growth or prior value plus one-fourth of the difference between prior value and current FCV — the historical 'Rule A / Rule B' comparison; (3)(b) FOR TAXES LEVIED BEGINNING IN TAX YEAR 2015 the value is the LESSER of the full cash value or an amount FIVE PER CENT GREATER THAN THE VALUE FOR THE PRIOR YEAR. This is the constitutional basis of the limited property value and of the 5% figure in § 42-13301. (6) The limitation does not apply to producing mines and mills/smelters, producing oil, gas and geothermal interests, telephone/telegraph/gas/water/electric utility property, scheduled airline aircraft, standing timber, pipeline property, and personal property regardless of use except mobile homes. (7) A resident aged 65 or older may apply to the county assessor for a PROPERTY VALUATION PROTECTION OPTION on the primary residence including not more than ten acres of undeveloped appurtenant land: application on or before September 1; the assessor notifies acceptance or denial on or before December 1; the applicant must have resided in the primary residence for two years; income is limited by reference to the federal supplemental security income benefit rate (400% of that rate for one owner, 500% for two or more owners), reviewed every three years on the owner's average income over the previous three years; if approved, the value remains fixed at the subsection (3) valuation in effect in the year the option is filed, for as long as the owner remains eligible; the owner must reapply every three years and the assessor must send a reapplication notice six months before it is due; if title is conveyed to a person who does not qualify, the option terminates and the property reverts to its current full cash value. (9)(b) 'Primary residence' means owner-occupied single family home, condominium or townhouse, or owner-occupied mobile home used for residential purposes.",
    status: "verified",
  },
  "az-ars-42-12003": {
    sourceId: "az-ars-42-12003",
    title: "A.R.S. § 42-12003 — Class three property; definition",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/12003.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "legal-class",
    notes:
      "Read in full. Class three consists of real and personal property and improvements used for residential purposes and OCCUPIED BY THE OWNER AS THE OWNER'S PRIMARY RESIDENCE (as described in § 42-12053), property used for residential purposes and occupied by a RELATIVE of the owner as that relative's primary residence, and property occupied by the owner as the owner's primary residence who also uses the property for lease or rent to lodgers. The homesite may include up to ten acres, or more than ten but not more than forty acres if zoned exclusively residential or subject to legal restrictions or physical conditions preventing division. This is the statutory basis for 'class three is the primary residence', which the county FAQ stated as the effect of the 2012 change that moved second and vacation homes to class four.",
    status: "verified",
  },
  "az-ars-42-12004": {
    sourceId: "az-ars-42-12004",
    title: "A.R.S. § 42-12004 — Class four property",
    publisher: "Arizona Legislature (Arizona Revised Statutes)",
    authorityLevel: "primary",
    url: "https://www.azleg.gov/ars/42/12004.htm",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Arizona",
    jurisdictionLevel: "state",
    jurisdictionId: "arizona",
    topic: "legal-class",
    notes:
      "Read in full. Class four is the residential class that catches what the other classes do not: real and personal property and improvements used for residential purposes (including residential property owned in foreclosure by a financial institution) not otherwise included in another classification; property used for residential purposes and SOLELY LEASED OR RENTED; licensed child care facilities; nonprofit and licensed residential care facilities for persons with disabilities or aged 62 or older; up to eight rooms rented to transient lodgers with a breakfast meal by an owner residing on the property; dwellings for agricultural employees; common areas; timeshare property; and low-income multifamily rental property. Together with § 42-12003 this is what makes the class-three/class-four distinction a factual question an owner can test.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // NEVADA — a DIFFERENT provenance class from Arizona. leg.state.nv.us
  // returned 403 Forbidden to this environment on every path tried (the NRS
  // 361 chapter page, the NRS index and the AB 377 bill PDF), so the statute
  // TEXT was never read: every NRS section number below comes from an official
  // Nevada agency page that names the section for the rule it states. The
  // remaining sources are the county offices that administer the system
  // (Washoe and Clark) and the Nevada Department of Taxation. Several Nevada
  // documents are PDFs (the rate books, the tax cap explanation, county
  // explainers) and could not be extracted, so the numeric rate ceiling is not
  // published on the site. See docs/nevada-expansion-research.md §1.2.
  // ------------------------------------------------------------------
  "nv-washoe-assessor-taxcap": {
    sourceId: "nv-washoe-assessor-taxcap",
    title: "Tax Cap/Abatement Information",
    publisher: "Washoe County Assessor (Nevada)",
    authorityLevel: "primary",
    url: "https://www.washoecounty.gov/assessor/taxcap/index.php",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "abatement-claim",
    notes:
      "Read in full. Assembly Bill 489 (2005) created the partial abatement: a 3% cap on the tax bill of the owner's primary residence and a higher cap on other property, with some rental dwellings qualifying for 3%. Property NEW TO THE TAX ROLL (new parcels, new construction, parcels with a change in use) has NO cap for that year. Affidavits are mailed to residential rentals each May and must be returned by June 15 (annually); affidavits are also generated on change of ownership or when construction is complete enough for occupancy, and when such a form is generated the property's tax cap status is set to the higher general abatement until a qualifying affidavit is filed. The abatement level is printed on the tax bill. The county also publishes the Partial Abatement Claim Form (first claim in a fiscal year) and a separate Petition for Review (appeal) form.",
    status: "verified",
  },
  "nv-washoe-assessor-dates": {
    sourceId: "nv-washoe-assessor-dates",
    title: "Important Dates — real property",
    publisher: "Washoe County Assessor (Nevada)",
    authorityLevel: "primary",
    url: "https://www.washoecounty.gov/assessor/ImportantDates.php",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "deadlines",
    notes:
      "Read in full. The Nevada real property calendar: July 1 lien date; fiscal year July 1–June 30; January 1 close of the real property roll and deadline for mailing value notices (the page notes that under NRS 361.310 the actual date may be earlier); January 15 deadline for appeals to the County Board of Equalization, rolling to the next business day if it falls on a Saturday, Sunday or legal holiday; March 10 deadline to appeal a County Board decision to the State Board of Equalization; June 15 deadline to renew or apply for most exemptions AND for rental properties to file the partial abatement form for the next fiscal year; June 30 deadline to appeal partial abatement qualification or determination for the current fiscal year; July 5 deadline for an exemption on real property acquired after June 15 and before July 1. Quarterly installments: third Monday in August, first Monday in October, first Monday in January, first Monday in March.",
    status: "verified",
  },
  "nv-washoe-abatement-appeal": {
    sourceId: "nv-washoe-abatement-appeal",
    title: "Petition To Review Partial Abatement",
    publisher: "Washoe County Assessor (Nevada)",
    authorityLevel: "primary",
    url: "https://www.washoecounty.gov/assessor/taxcap/abateappeal.php",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "abatement-appeal",
    notes:
      "Read in full. A taxpayer who believes the partial abatement determination is wrong may file a written petition for review under NRS 361.4734; the county calls it an appeal. The two levels: the general abatement ('high cap') limits the increase in the tax bill to no more than 8% over the prior year's bill, while the primary residence and residential rental abatement ('low cap') limits it to no more than 3% — and where the general abatement calculation would produce a smaller increase, that lower figure applies to the low-cap property as well. Value NEW TO THE ROLL (new construction or a change in actual or authorized use) is NOT abated, and remainder parcels are governed by NRS 361.4722. Deadline: filed with the ASSESSOR by June 30 of the fiscal year (June 30, 2024 for FY 2024/2025); acknowledgment letter within 15 days; decision within 30 days of receipt. Appeal of the assessor's decision goes to the Nevada Tax Commission within 30 days of the notice of decision (NAC 361.61064), decided by a hearing officer whose proposed order either party may object to within 20 days (NAC 361.61068). The page also carries the county's statute map: NRS 361.471–361.4721 definitions, .4722 remainder parcels, .4723 primary residences, .4724 residential rentals, .4725 recapture, .4726 and .4728 taxes not subject to the abatement, .4727 effect of tax increases, .4732 annexation, .4734 petitions for review, .4735 penalty for a false claim.",
    status: "verified",
  },
  "nv-washoe-assessor-faq": {
    sourceId: "nv-washoe-assessor-faq",
    title: "Assessor FAQ — real property, tax cap and public service sections",
    publisher: "Washoe County Assessor (Nevada)",
    authorityLevel: "primary",
    url: "https://www.washoecounty.gov/assessor/faq/index.php",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "abatement-mechanics",
    notes:
      "Read in full. The clearest statement of the mechanics found anywhere official: the tax caps 'do not limit the increase in assessed value'; 'Is My Taxable Value Capped? No, only the amount of increase on your tax bill is capped'; 'The 3% tax cap is applied to your tax amount, not the assessed value'. The bill is the calculated tax (assessed value x tax rate) or the prior year's bill plus the cap, WHICHEVER IS LOWER, and the abatement is the difference (worked example: a $1,000 bill can rise to no more than $1,030; if the calculated tax is $1,050 the abatement is $20). FY 2004/05 is the base year for most property, and a parcel created later has its own base year. A decrease in assessed value does not lower the bill 'until the prior year's tax bill plus your tax cap percentage is greater than your actual calculated taxes' — so in a declining market the bill can keep rising until the abatement is exhausted. Reasons a bill can exceed the cap: an exemption removed; a change in use; new construction or improvement; new voter-approved increases or annexation; and NON-AD VALOREM items on the bill, which are not affected by the cap. Exemptions are applied AFTER the cap. Qualification is fixed on July 1 of the fiscal year (a mid-year change of status takes effect the following July 1). Primary residence: designated by the owner, exclusive of any other residence of the owner in Nevada, and not rented or leased to anyone other than the owner and family. A signed claim is required — 'you will not qualify for the primary residence or residential rental (low income rental) tax cap if you do not' — and once a claim is on file the 3% continues unless there is an ownership change, an address change or a notified status change. Rental units qualify only if EVERY unit rents at or below the HUD fair market rent. Value appeal: value change notices when the roll is completed each November, appeal to the County Board of Equalization filed at the Assessor's office by January 15, with the BURDEN OF PROOF ON THE TAXPAYER to show the valuation is in error or that taxable value exceeds full cash value; then the State Board of Equalization, then the courts. Rate setting: the Nevada Tax Commission sets rates in the spring from local budgets; the assessor does not. Rate cap: 'The Partial Abatement does not cap the tax rate, however, other legislation does. The primary statute is NRS 361.453.' Assessed value = 35% of appraised/taxable value.",
    status: "verified",
  },
  "nv-washoe-treasurer-billing": {
    sourceId: "nv-washoe-treasurer-billing",
    title: "Billing Information — Taxes",
    publisher: "Washoe County Treasurer (Nevada)",
    authorityLevel: "primary",
    url: "https://www.washoecounty.gov/treas/Billing.php",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "payment",
    notes:
      "Read in full. Tax rates are set in June, bills are prepared and mailed by August 1, and property taxes are due on the third Monday in August; taxes may be paid in installments when they exceed $100, with the four statutory dates (third Monday in August, first Monday in October, first Monday in January, first Monday in March). The page publishes the resulting dates and the last day to pay without penalty for FY 2026/2027: August 17, 2026 (pay by August 27), October 5, 2026 (by October 15), January 4, 2027 (by January 14) and March 1, 2027 (by March 11); penalties for delinquency are per NRS 361.483. Property not paid in full is advertised as delinquent and a trustee's certificate is filed the first Monday in June, with two years to redeem. Bills are mailed once a year and supplemental bills for improvements discovered late are billed in two installments on the third and fourth dates.",
    status: "verified",
  },
  "nv-clark-assessor-real-property": {
    sourceId: "nv-clark-assessor-real-property",
    title: "Real Property — taxable value, tax calculation and value appeals",
    publisher: "Clark County Assessor (Nevada)",
    authorityLevel: "primary",
    url: "https://www.clarkcountynv.gov/government/assessor/real-property",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "valuation-methods",
    notes:
      "Read in full. Taxable value is determined by the assessor under NRS and Department of Taxation regulations: the market value of the land plus the current replacement cost of improvements less statutory depreciation, with depreciation of 1.5% per year applied to the effective age up to a maximum of 50 years, land from market sales, values updated annually, and replacement costs from the Marshall & Swift service as required by NAC. The page gives the calculation chain with a worked example: taxable value x .35 = ASSESSED VALUE, then assessed value x the tax rate per hundred dollars = the tax for the fiscal year; and states the abatement as 'taxes will be calculated on the assessed value or apply the appropriate tax cap percentage to the tax amount paid in the previous year; whichever is lower'. Value appeals: forms are available from the Assessor's Office during December up to the filing deadline of January 15 (extended to the next business day if it falls on a holiday or weekend), heard by the County Board of Equalization, then the State Board of Equalization, then District Court.",
    status: "verified",
  },
  "nv-clark-tax-abatement": {
    sourceId: "nv-clark-tax-abatement",
    title: "Tax Abatement — eligibility by property type",
    publisher: "Clark County (Nevada)",
    authorityLevel: "primary",
    url: "https://www.clarkcountynv.gov/government/general_information/tax-abatement",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "county",
    jurisdictionId: "nevada",
    topic: "abatement-eligibility",
    notes:
      "Read in full. NRS 361.4723 gives a 3% cap on the tax bill of the owner's primary residence (single-family house, townhouse, condominium or manufactured home) and only ONE property in Nevada may be selected as a primary residence; some rental dwellings meeting the low-income rent limits also qualify for 3%. A cap of up to 8% applies to residences that are not owner occupied, and to land, commercial buildings, business personal property and aircraft. New construction or a change of use (zoning change, manufactured home conversion) qualifies for NO cap for that fiscal year but receives 3% or up to 8% starting the following fiscal year. Postcards are mailed to homeowners, newly built homes and parcels with other changes; rental affidavits go out in April or May with the eligible rents. Rents published for the 2026/2027 year include $1,146 studio, $1,270 one-bedroom, $1,504 two-bedroom, $2,139 three-bedroom, $2,456 four-bedroom, $2,824 five-bedroom and $602 for a mobile home space. On transfers: ANY recorded ownership document removes the owner-occupied 3% abatement until a new postcard is completed and returned (refinancing without an ownership document does not affect it), and new postcards are mailed after July 1 to properties whose document number or ownership changed during the fiscal year.",
    status: "verified",
  },
  "nv-dor-lgs-publications": {
    sourceId: "nv-dor-lgs-publications",
    title: "Local Government Services Publications",
    publisher: "Nevada Department of Taxation",
    authorityLevel: "primary",
    url: "https://tax.nv.gov/news-publications/local-government-services-publications/",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Nevada",
    jurisdictionLevel: "state",
    jurisdictionId: "nevada",
    topic: "abatement-administration",
    notes:
      "Read (the publication index and the descriptions it carries). The Department publishes the GENERAL ABATEMENT FACTORS (tax cap) tables that county officials use to forecast how much property tax must be abated, with the statement that 'the tax cap provides property owners relief from rising property values by capping the amount of property taxes which can be assessed', plus a tax cap explanation. It also publishes the FAIR MARKET RENTS FOR RENTAL ABATEMENT, stating that NRS 361.4724 requires the rents collected on a rental property to be compared with the fair market rent for the county most recently published by HUD. The individual documents are PDFs and were not extractable here, so they are used only for what the index states in text.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // OREGON — the strongest single source here is an ADMINISTRATIVE RULE read
  // in full on the Secretary of State's OARD site (the 103% test and a worked
  // example). The ORS text itself was NOT readable: the Legislature's chapter
  // page for ORS 308 timed out at 20 seconds on every attempt (one very large
  // HTML file), and the Department of Revenue's manuals are PDFs. Every ORS
  // citation below therefore comes from an official page that names the
  // section. See docs/oregon-expansion-research.md §1.2.
  // ------------------------------------------------------------------
  "or-oar-150-308-0120": {
    sourceId: "or-oar-150-308-0120",
    title:
      "OAR 150-308-0120 — Reduction of maximum assessed value when a building is demolished or removed",
    publisher: "Oregon Secretary of State (Administrative Rules), implementing ORS 308.146",
    authorityLevel: "primary",
    url: "https://secure.sos.state.or.us/oard/view.action?ruleNumber=150-308-0120",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Oregon",
    jurisdictionLevel: "state",
    jurisdictionId: "oregon",
    topic: "maximum-assessed-value",
    notes:
      "Read in full, and it is the source that settles Oregon's core formula. Step 1 states the 103% test explicitly: 'Perform the 103% test as if the property had not changed. Multiply the prior year assessed value (AV) by 1.03. Compare the result to the prior year MAV to determine the larger amount. The larger amount becomes the current year MAV (unadjusted) as if the account had not changed.' The rule then works a full example (2007-08 MAV $87,379, prior AV $87,379, RMV $100,000, house demolished on 1 September 2007) through five steps to an adjusted MAV of $22,500 — which is how exception value is removed when part of a property disappears. It also confirms that ORS 308.146(8)(a) is the statutory basis and that ORS 308.146(6) can place the RMV determination date at July 1.",
    status: "verified",
  },
  "or-hood-river-cpr": {
    sourceId: "or-hood-river-cpr",
    title: "What is the Changed Property Ratio and how does it affect property taxes?",
    publisher: "Hood River County (Oregon)",
    authorityLevel: "primary",
    url: "https://www.hoodrivercounty.gov/changed-property-ratio",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Oregon",
    jurisdictionLevel: "county",
    jurisdictionId: "oregon",
    topic: "changed-property-ratio",
    notes:
      "Read in full. Explains Measure 50 (1997-98) as redefining each property's assessed value to 90% of the 1995-96 assessed value and limiting each district to a permanent tax rate; defines the maximum assessed value as the taxable value limit established for each property, first set for 1997-98 as the property's 1995-96 REAL MARKET VALUE MINUS 10 PER CENT; states that 'MAV can increase for only two reasons: a three (3) percent annual increase or specific property events called exceptions (such as new property or improvements, partitions or subdivisions, rezoning, etc.)'; and defines the changed property ratio as average MAV divided by average RMV of ALL UNCHANGED properties in the county within the same property classification. Its own example: Hood River residential CPR has been below 60% for six years and was an all-time low of 42.1% in 2022, so a new residential home valued at $500,000 carried only $210,500 of taxable value ($500,000 x .421). This is the plainest official explanation found of why new construction is not taxed at its value in Oregon.",
    status: "verified",
  },
  "or-multco-assessment-faq": {
    sourceId: "or-multco-assessment-faq",
    title: "Property Assessment FAQs",
    publisher: "Multnomah County (Oregon)",
    authorityLevel: "primary",
    url: "https://multco.us/info/property-assessment-faqs",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Oregon",
    jurisdictionLevel: "county",
    jurisdictionId: "oregon",
    topic: "assessment-values",
    notes:
      "Read in full. Assessed value as 'the lower of last year's Maximum Assessed Value (MAV) plus 3%, or the current Real Market Value (RMV)'; the ORS 308.205(1) RMV definition (cash that an informed buyer would pay an informed seller, neither acting under compulsion, in an arm's-length transaction as of the assessment date); the appraisal methods used; MAV as 'the greater of 103% of the prior year's assessed value (AV), or 100 percent of the prior year's MAV'; the pre-1995 MAV basis (1995-96 RMV less 10%) and the post-1995 basis (RMV as of the January 1 following construction or creation x the CPR for that year); the flat statement that 'MAV is the only component of your property taxes where a 3% increase limit applies'; the two reasons an assessed value can jump; the EXCEPTION EVENT list — new construction/additions and remodelling/renovation/rehabilitation valued at more than $18,700 in one year or $46,200 over five years (indexed annually to the CPI by the Department of Revenue after 2024), partitioning or subdivision, rezoning where the property is used consistently with the new zoning, discovery of omitted property, and disqualification from an exemption or special assessment — citing ORS 308.149 and OAR 150-308-0160; the ongoing-maintenance distinction citing OAR 150-308-0130; and that property values and taxes are tied to the property, not the owner.",
    status: "verified",
  },
  "or-multco-tax-calculation": {
    sourceId: "or-multco-tax-calculation",
    title: "How Your Property Taxes Are Calculated",
    publisher: "Multnomah County (Oregon)",
    authorityLevel: "primary",
    url: "https://multco.us/info/how-your-property-taxes-are-calculated",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Oregon",
    jurisdictionLevel: "county",
    jurisdictionId: "oregon",
    topic: "tax-calculation",
    notes:
      "Read in full. Two calculations are performed each year and 'your tax bill is always the lower of these two amounts': (1) assessed value x the tax rate for your levy code area plus special assessments; (2) real market value x the Measure 5 limits of $5 per $1,000 for education taxes and $10 per $1,000 for general government taxes, plus the amounts for items EXCLUDED from the Measure 5 limits. Compression is defined as the situation where the Measure 5 calculation produces a lower bill than the assessed-value calculation. Excluded items include bond levies and some special assessments, and are computed on assessed value and rate. On why a bill can jump: 'Tax amounts are not limited to a 3% increase from one year to the next. The Maximum Assessed Value is the only place where a 3% limit applies' — listing a change in the levy code area's tax rate, loss of compression savings, an exception event, or a combination.",
    status: "verified",
  },
  "or-multco-property-taxes": {
    sourceId: "or-multco-property-taxes",
    title: "Property Taxes — statements, payment dates and installments",
    publisher: "Multnomah County (Oregon)",
    authorityLevel: "primary",
    url: "https://multco.us/info/property-taxes",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Oregon",
    jurisdictionLevel: "county",
    jurisdictionId: "oregon",
    topic: "payment",
    notes:
      "Read in full. 'Property tax statements are mailed before October 25 every year. Pay your taxes in full by November 15 or make partial payments with further installments due in February and May. If the 15th falls on a weekend or holiday, due date is the next business day.' The county's payment FAQ names the three dates as November 15, February 15 and May 15. Also lists the property types assessed (real property, business personal property, industrial machinery and equipment, manufactured structures, floating property, moorages).",
    status: "verified",
  },
  "or-yamhill-appeals": {
    sourceId: "or-yamhill-appeals",
    title: "Property Valuation & Appeals Process",
    publisher: "Yamhill County Assessor / Tax Collector (Oregon)",
    authorityLevel: "primary",
    url: "https://www.yamhillcounty.gov/729/Property-Valuation-Appeals-Process",
    lastVerifiedDate: "2026-09-23",
    jurisdiction: "Oregon",
    jurisdictionLevel: "county",
    jurisdictionId: "oregon",
    topic: "appeals",
    notes:
      "Read in full. The county prepares the assessment roll as of January 1; a business personal property return (form 150-553-004) is due March 15 with no late-filing extension, and assessments are canceled below $16,500 of value. Informal 'Request for Review' may be made through December 16; after that the owner must file a board petition. Petitions to the Property Valuation Appeals Board (the county's name for BOPTA) may be filed after tax bills are received in late October through December 31, moving to the next business day when December 31 falls on a weekend or legal holiday, and are filed with the COUNTY CLERK, not the assessor. A board appeal is limited to the current tax year's values, and in some cases MAV, SAV and AV may be appealed; the board also hears late-filing penalty appeals and may waive a penalty for good and sufficient cause. Hearings run from the first Monday in February to April 15, with at least five days' written notice, and are informal; there is no board filing fee. A real market value reduction may NOT change the bill, depending on whether the reduced RMV falls below the assessed value or is enough to change the Measure 5 / Measure 50 comparison. The page lists official supporting documentation (arm's-length sale of the property, sales of similar homes close to January 1, a fee appraisal, a broker's market analysis, documented new-construction cost, contractor estimates for major repairs, proof of a listing below the roll value, income and expense data for commercial property) and what is NOT evidence (statistical reports from outside organizations, old listings, sales outside the market area, and comparisons of your value or taxes with your neighbors'). Also: industrial property appraised by the Department of Revenue is appealed directly to the Magistrate Division of the Oregon Tax Court (same December 31 deadline, with a fee, $281 at the time of writing); a complaint against a board order must be filed with the Magistrate Division within 30 days (not one month) of the order's mailing; a magistrate decision may be appealed to the Regular Division within 60 days; then the Supreme Court. Cites ORS 308.242 for tax corrections by December 31 and ORS 309.200 for the ratio-study sales period.",
    status: "verified",
  },
};

export function getSource(sourceId: string): SourceRecord | undefined {
  return SOURCES[sourceId];
}

export function requireSource(sourceId: string): SourceRecord {
  const s = SOURCES[sourceId];
  if (!s) {
    throw new Error(
      `Unknown sourceId "${sourceId}". Register the source in /lib/sources/registry.ts before referencing it.`
    );
  }
  return s;
}

/**
 * Machine-readable partition of sources by jurisdiction. Existing Texas
 * entries predate the field, so their jurisdictionId is derived from the
 * human-readable `jurisdiction` label here rather than editing 20 records.
 */
export function getSourcesForJurisdiction(jurisdictionId: string): SourceRecord[] {
  return Object.values(SOURCES).filter(
    (s) => s.jurisdictionId === jurisdictionId ||
      (s.jurisdictionId === undefined &&
        (s.jurisdiction === "Texas" || s.jurisdiction === "Harris County, Texas") &&
        jurisdictionId === "texas")
  );
}

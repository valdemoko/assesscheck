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
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Texas",
    topic: "property-tax-protests",
    notes:
      "Primary authority for protest deadline (May 15 / 30 days after notice delivery, whichever is later), notice of protest form, informal conference, ARB hearings, late protests, motion for correction, appeals to district court / SOAH / arbitration. Late-protest pathways re-read 2026-09-28: good cause before ARB approval; protest for failure to receive a required notice (before the delinquency date); motion for correction for homestead at ≥1/4 over and non-homestead at ≥1/3 over correct appraised value (file and pay undisputed portion before delinquency); motion for correction of clerical error, multiple appraisals, or ownership error (current + five preceding years); joint motion agreed with the chief appraiser. The roll cannot be corrected for a year the property was subject to a protest.",
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
  "co-dpt-understanding": {
    sourceId: "co-dpt-understanding",
    title: "Understanding Property Taxes in Colorado",
    publisher: "Colorado Division of Property Taxation, Department of Local Affairs (State of Colorado)",
    authorityLevel: "primary",
    url: "https://dpt.colorado.gov/understanding-property-taxes-in-colorado",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Colorado",
    jurisdictionLevel: "state",
    jurisdictionId: "colorado",
    topic: "colorado-overview",
    notes:
      "Read in full 2026-09-28. The state's own statement of the real-property cycle: county assessor discovers, lists, classifies and values; real property revalued every ODD-NUMBERED year and personal property annually; classification by actual use on January 1; residential valued by the market approach only, with the comparable-sales window stated for tax years 2025/2026 (Jan 1 2023 - Jun 30 2024); two residential assessment rates since 2025 (local government vs school district — the 2026 chart shows 6.8% local / 7.05% school); the Notice of Valuation for real property mailed by MAY 1 with an explicit footnote that statutory dates shift for weekends and holidays and the county assessor should be contacted for adjusted dates; protest decided by the assessor with a mailed Notice of Determination; appeal to the county board of equalization; beyond that, arbitrator / district court / Board of Assessment Appeals within 30 DAYS OF THE DECISION MAILING; and the standard-vs-ALTERNATE protest schedule table (counties over 300,000 population are required to use the alternate period — NOD Aug 15, CBOE hearings from Sep 1, response Nov 1). The assessment-rate chart is dated and volatile (legislature sets rates annually), so rates are cited as a dated table from this source, not as permanent rules.",
    status: "verified",
  },
  "co-dpt-protests-appeals": {
    sourceId: "co-dpt-protests-appeals",
    title: "Protests and Appeals",
    publisher: "Colorado Division of Property Taxation, Department of Local Affairs (State of Colorado)",
    authorityLevel: "primary",
    url: "https://dpt.colorado.gov/protests-and-appeals",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Colorado",
    jurisdictionLevel: "state",
    jurisdictionId: "colorado",
    topic: "colorado-appeals",
    notes:
      "Read in full 2026-09-28. IMPORTANT: this page's detailed calendar is the PERSONAL PROPERTY track (NOV mailed by June 15; protest by June 30; hearing June 15 - July 5; CBOE appeal by July 20; CBOE decision Aug 5). It is kept as a source for the personal-property contrast and the CBOE/BAA machinery, but the REAL PROPERTY dates on the site come from co-dpt-understanding, whose table is the real-property one. Real-property protests are filed with the county assessor; personal-property protests run about six weeks behind real property through the same CBOE/BAA structure.",
    status: "verified",
  },
  "co-dpt-property-tax-map": {
    sourceId: "co-dpt-property-tax-map",
    title: "Property Tax Map (statewide taxing districts and rates)",
    publisher: "Colorado Division of Property Taxation, Department of Local Affairs (State of Colorado)",
    authorityLevel: "primary",
    url: "https://dpt.colorado.gov/property-tax-map",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Colorado",
    jurisdictionLevel: "state",
    jurisdictionId: "colorado",
    topic: "colorado-resources",
    notes:
      "Read in full 2026-09-28. The state's own interactive map of taxing districts and rates (with a help guide), plus a plain-language glossary (actual value, assessed value, mill, mill levy, tax area). Two properties make it useful and honest at once: it states that appeal of actual value runs May 1 - June 8 (real property, confirming the deadline a second time), and it warns that its own data is UNAUDITED county-reported data — so the site presents it as an exploration tool, with the county assessor as the authority for the current figures.",
    status: "verified",
  },
  "co-dpt-assessor-directory": {
    sourceId: "co-dpt-assessor-directory",
    title: "County Assessor contact directory",
    publisher: "Colorado Division of Property Taxation, Department of Local Affairs (State of Colorado)",
    authorityLevel: "primary",
    url: "https://dpt.colorado.gov/locality",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Colorado",
    jurisdictionLevel: "state",
    jurisdictionId: "colorado",
    topic: "colorado-counties",
    notes:
      "The Division's official directory of county assessors (read for Denver: dpt.colorado.gov/locality/denver-city-and-county-assessor, listing the assessor, address, phone and the denvergov.org website). Colorado property search is COUNTY-BASED: there is no single statewide property search. This directory is the state's own route to each county assessor, so it is the correct official entry point for the site to link to rather than hand-maintaining 64 county URLs.",
    status: "verified",
  },
  "co-denver-property-search": {
    sourceId: "co-denver-property-search",
    title: "Property Search — City and County of Denver (Assessment and Taxation System)",
    publisher: "City and County of Denver",
    authorityLevel: "primary",
    url: "https://www.denvergov.org/Property",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Denver County, Colorado",
    jurisdictionLevel: "county",
    jurisdictionId: "colorado",
    topic: "colorado-property-search",
    notes:
      "Read live 2026-09-28. Denver's official Assessment and Taxation System property search: 'search property assessment and tax data for real estate and business personal property', by ADDRESS, PARCEL ID or SCHEDULE NUMBER. Registered as the concrete, verified example of Colorado's county-based search; the page tells readers their own county assessor is the entry point, with the DPT directory as the official index.",
    status: "verified",
  },
  // ------------------------------------------------------------------
  // OHIO — provenance class like Nevada: the statute site (codes.ohio.gov)
  // timed out from this environment, so no ORC text was read directly. Every
  // citation below is an official Ohio government page that STATES the rule,
  // with the 35% assessment ratio documented honestly in the notes as coming
  // from official tax.ohio.gov publications rather than from a read of the ORC.
  // See the Fase 4 report in docs/expansion-roadmap.md.
  // ------------------------------------------------------------------
  "oh-dor-property-tax-hub": {
    sourceId: "oh-dor-property-tax-hub",
    title: "Property Tax Resource Hub — Ohio Department of Taxation",
    publisher: "Ohio Department of Taxation",
    authorityLevel: "primary",
    url: "https://tax.ohio.gov/individual/property-tax",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Ohio",
    jurisdictionLevel: "state",
    jurisdictionId: "ohio",
    topic: "property-tax-hub",
    notes:
      "The Department's property tax hub. Links the property owner to the Real Property page, forms (including DTE Form 1), and the county auditor lookup ('Find Your County Auditor'). Used as the state-level anchor for finding your county auditor: Ohio property data and complaints are county-based, run by the county auditor, and there is no single statewide property search.",
    status: "verified",
  },
  "oh-dor-reappraisal": {
    sourceId: "oh-dor-reappraisal",
    title: "Real Property Appraisal and Revaluation — Ohio Department of Taxation",
    publisher: "Ohio Department of Taxation",
    authorityLevel: "primary",
    url: "https://tax.ohio.gov/government/real-state/reappraisal-and-triennial-update",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Ohio",
    jurisdictionLevel: "state",
    jurisdictionId: "ohio",
    topic: "revaluation-cycle",
    notes:
      "Read in full 2026-09-28. The state's own statement of the reappraisal cycle: Ohio's 88 counties are reappraised on a six-year (sexennial) cycle, with a triennial update in between. Explains that the auditor values each parcel, that the Department oversees and approves county revaluations, and that the taxable (assessed) value is 35% of true value. This is the page that documents the cycle itself, so the 35% ratio and the sexennial/triennial cadence are cited to the Department rather than to a statute that could not be read.",
    status: "verified",
  },
  "oh-bta-appeal-info": {
    sourceId: "oh-bta-appeal-info",
    title: "Filing an Appeal with the Board of Tax Appeals — Learn More",
    publisher: "Ohio Board of Tax Appeals",
    authorityLevel: "primary",
    url: "https://bta.ohio.gov/file-an-appeal/learn-more-a",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Ohio",
    jurisdictionLevel: "state",
    jurisdictionId: "ohio",
    topic: "bta-appeal",
    notes:
      "Read in full 2026-09-28. The Board's own statement of the appeal path: a decision of a county Board of Revision may be appealed to the Board of Tax Appeals within 30 days of the BOR's decision being mailed, and the appeal must be filed with BOTH the Board and the county Board of Revision (two copies required). The Board also runs a small claims docket for residential property with limited value at issue, which is an informal alternative to the full appeal. This is the page that documents the 30-day window and the dual-filing requirement, cited to the Board rather than to a statute.",
    status: "verified",
  },
  "oh-franklin-bor": {
    sourceId: "oh-franklin-bor",
    title: "Board of Revision — Franklin County Auditor",
    publisher: "Franklin County Auditor (Ohio)",
    authorityLevel: "primary",
    url: "https://auditor.franklincountyohio.gov/Real-Estate/Board-of-Revision",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Franklin County, Ohio",
    jurisdictionLevel: "county",
    jurisdictionId: "ohio",
    topic: "bor-filing",
    notes:
      "Read live 2026-09-28. The county's own statement of the filing window: 'The Board of Revision (BOR) will be accepting tax year 2026 complaints through March 31, 2027.' Confirms the DTE Form 1 complaint against valuation and electronic filing through the Board of Tax Appeals portal (bta.ohio.gov). Registered as the concrete, verified example of how Ohio's county BOR filing works; the statewide rule comes from ORC 5715.19 as stated by the Department and the county.",
    status: "verified",
  },
  "oh-caao-directory": {
    sourceId: "oh-caao-directory",
    title: "County Auditors' Directory — County Auditors' Association of Ohio",
    publisher: "County Auditors' Association of Ohio (CAAO)",
    authorityLevel: "primary",
    url: "https://caao.org/auditors-directory/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Ohio",
    jurisdictionLevel: "state",
    jurisdictionId: "ohio",
    topic: "county-auditor-directory",
    notes:
      "The association's directory of all 88 county auditors, each linking to the auditor's own site. Used as the official entry point for finding your county auditor rather than hand-maintaining 88 county URLs. Read 2026-09-28 (reachable; directory index).",
    status: "verified",
  },
  "oh-franklin-property-search": {
    sourceId: "oh-franklin-property-search",
    title: "Franklin County Auditor — Property Search",
    publisher: "Franklin County Auditor (Ohio)",
    authorityLevel: "primary",
    url: "https://property.franklincountyauditor.com/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Franklin County, Ohio",
    jurisdictionLevel: "county",
    jurisdictionId: "ohio",
    topic: "property-search",
    notes:
      "Read live 2026-09-28. Franklin County's official property search covering all of Franklin County (Columbus). Search by owner name, address, or parcel ID. Registered as the concrete, verified example of Ohio's county-based property search; the state hub points readers at the CAAO directory for their own county.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // NORTH CAROLINA — statute site (ncleg.gov) 403 to this environment, so no
  // G.S. text was read directly. Every citation is an official page that
  // STATES the rule: the Department of Revenue's own property tax pages, and
  // Orange County's official appeal and revaluation pages read in full.
  // ------------------------------------------------------------------
  "nc-dor-appeal-process": {
    sourceId: "nc-dor-appeal-process",
    title: "Property Tax Appeal Process — North Carolina Department of Revenue",
    publisher: "North Carolina Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.ncdor.gov/taxes-forms/property-tax/property-tax-appeal-process",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "North Carolina",
    jurisdictionLevel: "state",
    jurisdictionId: "north-carolina",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The Department's own statement of the appeal ladder: an informal review with the county assessor, then a formal appeal to the county Board of Equalization and Review (BOER), which convenes around the first week in April; if dissatisfied, the taxpayer may appeal to the state Property Tax Commission (PTC) within 30 days of the board's decision. Names G.S. 105-322 and G.S. 105-290 as the governing sections. This is the page that documents the state-level route and the 30-day PTC deadline.",
    status: "verified",
  },
  "nc-dor-types-property-taxed": {
    sourceId: "nc-dor-types-property-taxed",
    title: "Types of Property to Be Taxed — North Carolina Department of Revenue",
    publisher: "North Carolina Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.ncdor.gov/taxes-forms/property-tax/types-property-be-taxed",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "North Carolina",
    jurisdictionLevel: "state",
    jurisdictionId: "north-carolina",
    topic: "revaluation-cycle",
    notes:
      "Read in full 2026-09-28. The Department's statement of the appraisal cycle: real property is reappraised at least every eight years (G.S. 105-286), with off-cycle changes limited to those permitted by G.S. 105-287 (new construction, growth, and similar), and personal property is listed during January. This is the page that documents the revaluation cycle and the January listing period.",
    status: "verified",
  },
  "nc-orange-appeal": {
    sourceId: "nc-orange-appeal",
    title: "Appealing Your Property Tax Value (2026) — Orange County, NC Tax Administration",
    publisher: "Orange County, North Carolina (Tax Administration)",
    authorityLevel: "primary",
    url: "https://www.orangecountync.gov/806/Appealing-Your-Value",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Orange County, North Carolina",
    jurisdictionLevel: "county",
    jurisdictionId: "north-carolina",
    topic: "county-appeal-procedure",
    notes:
      "Read in full 2026-09-28. A county's own statement of the full local procedure, and the page that carries the concrete dates: informal appeals accepted January 1, 2026 through March 31, 2026; the Board of Equalization and Review convenes April 30, 2026; the formal appeal period runs April 1 through June 30, 2026 ('when the Board adjourns'); the PTC appeal is due within 30 days of the board's decision letter; and the burden of proof is on the owner, who must show the value is more or less than market value as of January 1, 2025 — or inconsistent with similar properties — and that the percentage of increase and ability to pay are not appealable grounds.",
    status: "verified",
  },
  "nc-orange-revaluation": {
    sourceId: "nc-orange-revaluation",
    title: "2025 Property Revaluation & Resources — Orange County, NC",
    publisher: "Orange County, North Carolina (Tax Administration)",
    authorityLevel: "primary",
    url: "https://www.orangecountync.gov/878/Revaluation",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Orange County, North Carolina",
    jurisdictionLevel: "county",
    jurisdictionId: "north-carolina",
    topic: "county-revaluation",
    notes:
      "Read in full 2026-09-28. Revaluation as of January 1, 2025 (previous revaluation January 1, 2021; next planned January 1, 2029); the governing statutes the page itself names — NCGS 105-283 (uniform appraisal standards), 105-286 (time for general reappraisal) and 105-287 (changing appraised value in non-reappraisal years); mass appraisal from arm's-length sales, income data and construction costs; and the county's own tools: Property Record Card Search, Orange Public Comper (comparable-sales tool), the 2025 Schedule of Values and the Sales Bank.",
    status: "verified",
  },
  "nc-county-assessors-list": {
    sourceId: "nc-county-assessors-list",
    title: "North Carolina County Assessors List — NCDOR",
    publisher: "North Carolina Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.ncdor.gov/taxes-forms/property-tax/north-carolina-county-assessors-list",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "North Carolina",
    jurisdictionLevel: "state",
    jurisdictionId: "north-carolina",
    topic: "county-assessor-directory",
    notes:
      "The Department's official directory of county assessors. Used as the official entry point for finding your county assessor rather than hand-maintaining 100 county URLs. Read 2026-09-28 (reachable; directory index).",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // MASSACHUSETTS — mass.gov (DOR) 403 to this environment; malegislature.gov
  // timed out. The strongest source is the Citizen Information Service's
  // abatement guide (sec.state.ma.us), read in full, plus statute snippets
  // from official search results. See the Fase 4 report in
  // docs/expansion-roadmap.md.
  // ------------------------------------------------------------------
  "ma-cis-abatement": {
    sourceId: "ma-cis-abatement",
    title: "Property Abatement — Massachusetts Citizen Information Service",
    publisher: "Massachusetts Secretary of the Commonwealth (Citizen Information Service)",
    authorityLevel: "primary",
    url: "https://www.sec.state.ma.us/divisions/cis/tax/property-abatement.htm",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Massachusetts",
    jurisdictionLevel: "state",
    jurisdictionId: "massachusetts",
    topic: "abatement-process",
    notes:
      "Read in full 2026-09-28. The official citizen guide to abatements: an application is due by the due date of the FIRST ACTUAL tax bill (with quarterly billing, the third quarterly bill, usually February 1); use State Tax Form 128, filed with the board of assessors; pay the tax on time or lose appeal rights; for appeals over $5,000 to the Appellate Tax Board, the tax (or the portion not being appealed, where an abatement was denied in part) must be in the collector's hands by the bill's due date; the assessors have three months to act on an application (extendable in writing), and NO DECISION within three months is a DEEMED DENIAL, from which an ATB appeal runs for three months; contact details for every local board come from the state's 'find your local assessor's office here' link; and Proposition 2 1/2 limits the total levy. The G.L. c.59 sections (64/65) are named in official snippets, not read at malegislature.gov.",
    status: "verified",
  },
  "ma-dor-bla": {
    sourceId: "ma-dor-bla",
    title: "Bureau of Local Assessment — Massachusetts Department of Revenue",
    publisher: "Massachusetts Department of Revenue (Bureau of Local Assessment)",
    authorityLevel: "primary",
    url: "https://www.mass.gov/orgs/bureau-of-local-assessment",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Massachusetts",
    jurisdictionLevel: "state",
    jurisdictionId: "massachusetts",
    topic: "assessment-certification",
    notes:
      "mass.gov returned 403 to this environment, so the page itself was not read. Registered for what the Bureau's own official search-result descriptions state: the Bureau of Local Assessment certifies the values each municipality's assessors use once every three years. Proposition 2 1/2 as the levy limit is additionally stated on the CIS page (ma-cis-abatement), which is the source the pages cite for it.",
    status: "verified",
  },
  // ------------------------------------------------------------------
  // VIRGINIA — the strongest provenance class this phase: the Code of Virginia
  // itself, read section by section on the official law portal
  // (law.lis.virginia.gov). § 58.1-3983.1 is PERSONAL PROPERTY and is
  // deliberately not registered — the pages must never conflate it.
  // ------------------------------------------------------------------
  "va-code-58-1-3200": {
    sourceId: "va-code-58-1-3200",
    title: "Code of Virginia § 58.1-3200/3201 — Assessment at fair market value",
    publisher: "Virginia Law Portal (law.lis.virginia.gov)",
    authorityLevel: "primary",
    url: "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3200/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Virginia",
    jurisdictionLevel: "state",
    jurisdictionId: "virginia",
    topic: "assessment-standard",
    notes:
      "Read in full 2026-09-28. § 58.1-3200(A): all real estate shall be assessed at 100% of fair market value. § 58.1-3201: assessments are made by the Commissioner of the Revenue or the assessor in each locality. This is the state's assessment standard, read from the official law portal.",
    status: "verified",
  },
  "va-code-58-1-3330": {
    sourceId: "va-code-58-1-3330",
    title: "Code of Virginia § 58.1-3330 — Notice of change in assessment; hearing",
    publisher: "Virginia Law Portal (law.lis.virginia.gov)",
    authorityLevel: "primary",
    url: "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3330/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Virginia",
    jurisdictionLevel: "state",
    jurisdictionId: "virginia",
    topic: "assessment-notice",
    notes:
      "Read in full 2026-09-28. Where the assessment of real estate has been increased, the local board of assessment reviews gives the owner notice of the change and an opportunity to be heard before it. The notice must state the new assessment and show the assessments for the two preceding years, and must be delivered or mailed to the owner at least 15 days before the hearing. This is the notice rule the § 58.1-3378 application deadline is anchored to.",
    status: "verified",
  },
  "va-code-58-1-3378": {
    sourceId: "va-code-58-1-3378",
    title: "Code of Virginia § 58.1-3378 — Board of equalization application deadline; postmark rule",
    publisher: "Virginia Law Portal (law.lis.virginia.gov)",
    authorityLevel: "primary",
    url: "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3378/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Virginia",
    jurisdictionLevel: "state",
    jurisdictionId: "virginia",
    topic: "boe-application",
    notes:
      "Read in full 2026-09-28. In localities with a board of equalization, the governing body sets the application deadline by ordinance, and the deadline may not be earlier than 30 days after the hearing required by § 58.1-3330. An application is deemed timely if the postmark falls within the period. This is why Virginia has no single statewide filing date — each locality's ordinance sets it.",
    status: "verified",
  },
  "va-code-58-1-3379": {
    sourceId: "va-code-58-1-3379",
    title: "Code of Virginia § 58.1-3379 — Presumption of correctness; burden of proof",
    publisher: "Virginia Law Portal (law.lis.virginia.gov)",
    authorityLevel: "primary",
    url: "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3379/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Virginia",
    jurisdictionLevel: "state",
    jurisdictionId: "virginia",
    topic: "burden-of-proof",
    notes:
      "Read in full 2026-09-28. In any before-the-board or circuit-court proceeding, the assessment as made by the assessor is presumed correct and the burden of proving over-assessment is on the taxpayer. For small residential property (a primary residence on no more than one acre), the taxpayer need not prove exact value if they show the assessment exceeds fair market value or is not uniform; the locality must produce the records relied on within 15 days of a request, and a showing that the assessment is not uniform shifts the burden.",
    status: "verified",
  },
  "va-code-58-1-3984": {
    sourceId: "va-code-58-1-3984",
    title: "Code of Virginia § 58.1-3984 — Circuit court appeal of real property assessment",
    publisher: "Virginia Law Portal (law.lis.virginia.gov)",
    authorityLevel: "primary",
    url: "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3984/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Virginia",
    jurisdictionLevel: "state",
    jurisdictionId: "virginia",
    topic: "circuit-court-appeal",
    notes:
      "Read in full 2026-09-28. The judicial route for REAL property: an original suit or motion in the circuit court, permitted within the period beginning on the first notice of assessment and ending three years from the last day of the tax year, or one year from the final determination of a board of equalization application — whichever is LATER. The court hears the matter de novo. The statute is specific to real estate; § 58.1-3983.1, the analogous procedure for personal property, is a different section and must not be conflated.",
    status: "verified",
  },
  "va-code-58-1-3201": {
    sourceId: "va-code-58-1-3201",
    title: "Code of Virginia § 58.1-3201 — Assessing officers (Commissioner of the Revenue and assessors)",
    publisher: "Virginia Law Portal (law.lis.virginia.gov)",
    authorityLevel: "primary",
    url: "https://law.lis.virginia.gov/vacode/title58.1/chapter32/section58.1-3201/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Virginia",
    jurisdictionLevel: "state",
    jurisdictionId: "virginia",
    topic: "assessing-officers",
    notes:
      "Registered from the same law-portal reading session as §§ 58.1-3200/3330/3378/3379/3984 (2026-09-28). The section names the local assessing officers — the Commissioner of the Revenue and the locally appointed assessors — who carry the § 58.1-3200(A) duty to assess at 100% of fair market value, and authorizes the locality's choice of office structure. Cited only for the officer-structure point the section states; the pages relying on it name it through the same official portal read.",
    status: "verified",
  },
  "va-fairfax-icare": {
    sourceId: "va-fairfax-icare",
    title: "iCare — Fairfax County Department of Tax Administration property search",
    publisher: "Fairfax County, Virginia (Department of Tax Administration)",
    authorityLevel: "primary",
    url: "https://icare.fairfaxcounty.gov/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Fairfax County, Virginia",
    jurisdictionLevel: "county",
    jurisdictionId: "virginia",
    topic: "property-search",
    notes:
      "Read live 2026-09-28. Fairfax County DTA's iCare system: search by street address, owner name, or the SRCF (tax) account number. Registered as the concrete, verified example of Virginia's locality-based property search; the state page directs readers to their own Commissioner of the Revenue or assessor's office.",
    status: "verified",
  },
  // ------------------------------------------------------------------
  // NEW YORK — the strongest provenance class on the site alongside Virginia:
  // four tax.ny.gov pages read in full (2026-09-28), each updated by the
  // Department within the last year. RPTL sections are cited through these
  // pages, which name them, not through the legislature's site.
  // ------------------------------------------------------------------
  "ny-tax-grievance-procedures": {
    sourceId: "ny-tax-grievance-procedures",
    title: "Grievance procedures — New York State Department of Taxation and Finance",
    publisher: "New York State Department of Taxation and Finance",
    authorityLevel: "primary",
    url: "https://www.tax.ny.gov/pit/property/contest/grievproced.htm",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "New York",
    jurisdictionLevel: "state",
    jurisdictionId: "new-york",
    topic: "grievance-process",
    notes:
      "Read in full 2026-09-28 (page updated May 8, 2026). The Department's own statement of the whole process: only the current TENTATIVE assessment roll can be grieved; no cost and no lawyer required; Form RP-524 filed with the assessor or the Board of Assessment Review (BAR) of the city or town; separate RP-524s for village and town where a village assesses; Grievance Day is the fourth Tuesday in May in most communities with the stated exceptions (NYC Tax Commission: March 15 for Class One, March 1 for others; Nassau: March 1; Suffolk towns: third Tuesday in May; Westchester towns: third Tuesday in June; villages: typically third Tuesday in February; sharing-assessor municipalities may adopt dates between the fourth Tuesday in May and the second Tuesday in June; other cities vary); mailing must be RECEIVED by Grievance Day; the BAR is three to five appointed members and cannot include the assessor or assessor staff; a stipulation (Part Six) bars further BAR reduction AND judicial review of that year; non-resident owners can demand notice 15 days before Tentative Roll Date and a hearing date up to 21 days after Grievance Day; the BAR's decision notice must state reasons; judicial review runs SCAR (owner-occupied one/two/three-family or small vacant land, $30 fee, via the Unified Court System) or a tax certiorari proceeding in State Supreme Court under Article 7 of the Real Property Tax Law — both initiated WITHIN 30 DAYS of the filing of the final assessment roll or notice of the filing, whichever is later.",
    status: "verified",
  },
  "ny-tax-property-tax-calendar": {
    sourceId: "ny-tax-property-tax-calendar",
    title: "Property tax calendar — New York State Department of Taxation and Finance",
    publisher: "New York State Department of Taxation and Finance",
    authorityLevel: "primary",
    url: "https://www.tax.ny.gov/pit/property/learn/proptaxcal.htm",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "New York",
    jurisdictionLevel: "state",
    jurisdictionId: "new-york",
    topic: "calendar",
    notes:
      "Read in full 2026-09-28 (updated June 17, 2025). The seven owner-facing dates, all 'in most communities' with a confirmation instruction: Taxable Status Date March 1 (exemption application due date; condition and ownership are set as of this date); Tentative Roll Date May 1 (must be available from the municipal website within ten days); School Budget Voting Day the third Tuesday in May; Grievance Day the fourth Tuesday in May; Final Roll Date July 1 (judicial review within 30 days following); school tax bills mailed at the beginning of September; municipal and county bills at the beginning of January. Defines the VALUATION DATE as July 1 of the PRIOR year (2022-roll example: value as of July 1, 2021) and works the interplay between valuation date and taxable status date with fire-damage examples. The Municipal Data Portal gives each municipality's actual dates.",
    status: "verified",
  },
  "ny-tax-equalization-rates": {
    sourceId: "ny-tax-equalization-rates",
    title: "Equalization rates — New York State Department of Taxation and Finance",
    publisher: "New York State Department of Taxation and Finance",
    authorityLevel: "primary",
    url: "https://www.tax.ny.gov/pit/property/learn/eqrates.htm",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "New York",
    jurisdictionLevel: "state",
    jurisdictionId: "new-york",
    topic: "equalization-rate",
    notes:
      "Read in full 2026-09-28 (updated August 25, 2025). The formula: total assessed value of the municipality divided by total market value equals the equalization rate; a rate of 100 means the town assesses at market value, a lower rate usually means a longer gap since the last reassessment. Each municipality determines its OWN level of assessment (contrasted with most states' single statewide level); equalization exists because school districts and counties span multiple municipalities with different levels of assessment. The roll's stated level of assessment is the 'uniform percentage of value'. To contest an assessment an owner needs the equalization rate or the residential assessment ratio (RAR), both from Municipal Profiles. Also: equalization rates do NOT correct unfair individual assessments; a worked school-tax-distribution example shows how a town whose market value grows less than its neighbors' can see its share of the levy fall.",
    status: "verified",
  },
  "ny-tax-fair-assessments": {
    sourceId: "ny-tax-fair-assessments",
    title: "Fair assessments: A guide for property owners — NYS Department of Taxation and Finance",
    publisher: "New York State Department of Taxation and Finance",
    authorityLevel: "primary",
    url: "https://www.tax.ny.gov/research/property/assess/reassessment/fairassessments.htm",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "New York",
    jurisdictionLevel: "state",
    jurisdictionId: "new-york",
    topic: "assessment-standard",
    notes:
      "Read in full 2026-09-28 (updated June 18, 2025). The state's own statement of the assessment standard: New York State law requires all properties in a municipality (EXCEPT New York City and Nassau County) to be assessed at a uniform percentage of market value each year, and the tentative roll must show the market-value estimate, the assessment and the uniform percentage for every taxable property. Defines the Level of Assessment (LOA) with the 50%/100% and 30%-of-$100,000 examples; explains that a move from a fractional LOA to 100% can multiply the assessment without changing taxes; that a below-average increase can cut one's tax share; and that frequent reassessments are what keep assessments equitable. The assessor is an elected or appointed LOCAL official.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // GEORGIA — dor.georgia.gov pages read in full (2026-09-28): the PT-311A
  // form page, the property tax FAQ, the Taxpayer's Bill of Rights and the
  // homestead exemptions page. O.C.G.A. sections are cited through these
  // pages, which name them. qPublic (the board-of-assessors property-search
  // platform used by most counties) and the DOR county directory were read
  // for the property-search layer.
  // ------------------------------------------------------------------
  "ga-dor-pt311a": {
    sourceId: "ga-dor-pt311a",
    title: "PT-311A Appeal of Assessment Form — Georgia Department of Revenue",
    publisher: "Georgia Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.georgia.gov/pt-311a-appeal-assessment-form",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Georgia",
    jurisdictionLevel: "state",
    jurisdictionId: "georgia",
    topic: "appeal-form",
    notes:
      "Read in full 2026-09-28. The state's uniform appeal form page: submit the appeal to the COUNTY BOARD OF TAX ASSESSORS within 45 DAYS from the date the Assessment Notice was sent to preserve appeal rights; the property owner must indicate their preferred method of appeal in the initial written dispute; do NOT send the appeal to the Department of Revenue; email filing only where the board has adopted an electronic-submission policy.",
    status: "verified",
  },
  "ga-dor-property-faq": {
    sourceId: "ga-dor-property-faq",
    title: "Property Tax — Real and Personal Property — FAQ — Georgia Department of Revenue",
    publisher: "Georgia Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.georgia.gov/property-tax-real-and-personal-property-faq",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Georgia",
    jurisdictionLevel: "state",
    jurisdictionId: "georgia",
    topic: "property-tax-overview",
    notes:
      "Read in full 2026-09-28. The Department's own statement of the core rules: fair market value defined ('the amount a knowledgeable buyer would pay... and a willing seller would accept... at an arm's length, bona fide sale'); ASSESSED VALUE IS 40% OF FAIR MARKET VALUE; all property is to be returned and assessed at fair market value every year (O.C.G.A. 48-5-6) with a value established as of January 1 (O.C.G.A. 48-5-2) — NO state-mandated revaluation schedule, counties review annually against sales data; the county board of tax assessors must send an ANNUAL assessment notice for real property; appeal within 45 DAYS of the notice's mailing on taxability, value, uniformity and/or exemption denial, filed with the board with a declared method: Board of Equalization, Hearing Officer, or Arbitrator; property taxes normally due December 20 in most counties with 60 days from the date of billing; who-does-what split (tax commissioner collects and takes homestead filings in most counties; board of tax assessors values and hears appeals); and the County Property Tax Facts directory plus the Department's list of counties with property records online.",
    status: "verified",
  },
  "ga-dor-bill-of-rights": {
    sourceId: "ga-dor-bill-of-rights",
    title: "Property Taxpayer's Bill of Rights — Georgia Department of Revenue",
    publisher: "Georgia Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.georgia.gov/property-taxpayers-bill-rights",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Georgia",
    jurisdictionLevel: "state",
    jurisdictionId: "georgia",
    topic: "taxpayer-rights",
    notes:
      "Read in full 2026-09-28. The appeal-rights layer unique to Georgia: when the board of tax assessors CHANGES the value the owner returned, the BURDEN OF PROOF is on the board (by a preponderance of the evidence), and it stays on the board even into superior court; a change-of-assessment notice exceeding 15% must include a non-technical explanation of the basis and the right to view or copy the records used; when the board rejects the owner's stated position it must give the grounds and is then bound to them; a one-time option to reschedule a Board of Equalization hearing; and if the final determination is 85 PERCENT OR LESS of the board of equalization / hearing officer / arbitrator valuation, the taxpayer recovers costs and reasonable attorney's fees. Also documents the rollback-millage-rate mechanism (three public hearings when the rate is set above the rollback rate).",
    status: "verified",
  },
  "ga-dor-homestead": {
    sourceId: "ga-dor-homestead",
    title: "Property Tax Homestead Exemptions — Georgia Department of Revenue",
    publisher: "Georgia Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.georgia.gov/property-tax-homestead-exemptions",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Georgia",
    jurisdictionLevel: "state",
    jurisdictionId: "georgia",
    topic: "homestead-exemption",
    notes:
      "Read in full 2026-09-28. Eligibility: the home must be owned and occupied as the legal residence as of JANUARY 1 of the taxable year (O.C.G.A. § 48-5-40). Deadline: application any time during the prior year up to the property-tax-return deadline of APRIL 1 — and taxpayers can now apply beyond the historic April 1 deadline up to the END OF THEIR 45-DAY APPEAL WINDOW. Applications go to the tax commissioner (or the delegated tax assessor in some counties). The state standard exemption is $2,000 from county and school taxes (deducted from the 40% assessed value; O.C.G.A. § 48-5-44); age and income-linked exemptions exist; disabled-veteran exemption figures are dated annually. Several counties (a listed roster incl. Cobb, DeKalb, Fulton, Forsyth, Gwinnett, Chatham) implement local VALUATION FREEZE exemptions that hold the assessment at a base year while the owner resides there — the closest thing Georgia has to a cap, and it is local-option, not statewide.",
    status: "verified",
  },
  "ga-dor-county-facts": {
    sourceId: "ga-dor-county-facts",
    title: "County Property Tax Facts — Georgia Department of Revenue",
    publisher: "Georgia Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.georgia.gov/county-property-tax-facts",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Georgia",
    jurisdictionLevel: "state",
    jurisdictionId: "georgia",
    topic: "county-directory",
    notes:
      "Read 2026-09-28 (the 159-county index page). The Department's courtesy directory of county tax office websites, stating the split it enforces elsewhere: the Board of Tax Assessors is responsible for valuation and assessment; the Tax Commissioner is responsible for collecting ad valorem taxes. Used as the official entry point for finding your county rather than hand-maintaining 159 county URLs.",
    status: "verified",
  },
  "ga-qpublic-assessors": {
    sourceId: "ga-qpublic-assessors",
    title: "Georgia Counties Board of Assessors — qPublic parcel search directory",
    publisher: "qPublic (Schneider Geospatial) — county boards of assessors",
    authorityLevel: "secondary",
    url: "https://qpublic.net/ga/gaassessors/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Georgia",
    jurisdictionLevel: "state",
    jurisdictionId: "georgia",
    topic: "property-search-directory",
    notes:
      "Read in full 2026-09-28. The vendor index of the county board-of-assessors parcel-search sites it hosts ('search parcel data, tax digest & GIS maps by Owner's Name, Location Address, Parcel Number, Legal Description, or Account Number') — the platform most Georgia counties use. Registered as a DIRECTORY pointing to county sites (the county sites themselves are the official sources); the honest alternative is the Department's own county directory (ga-dor-county-facts). Marked secondary because it is the vendor's page, not a government page — the pages link it only as a finding aid, never as authority for a rule.",
    status: "verified",
  },
  // ------------------------------------------------------------------
  // MARYLAND — the only state that assesses centrally at the STATE level, and
  // the provenance mirrors that: the Maryland Tax Court's own procedures page
  // read in full (it states the whole three-tier ladder with the statute
  // citations), the Maryland State Archives' official SDAT functions page read
  // in full (the triennial cycle, the 100% standard, the phase-in), and
  // Montgomery County's finance department read in full for the homestead
  // credit. dat.maryland.gov itself 403s to this environment; the gaps it
  // leaves are documented in the notes.
  // ------------------------------------------------------------------
  "md-tax-court-procedures": {
    sourceId: "md-tax-court-procedures",
    title: "Procedures of the Maryland Tax Court (revised 2016)",
    publisher: "Maryland Tax Court (State of Maryland)",
    authorityLevel: "primary",
    url: "https://taxcourt.maryland.gov/Procedures.shtml",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Maryland",
    jurisdictionLevel: "state",
    jurisdictionId: "maryland",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The court's own statement of the REAL PROPERTY ladder with statute cites: appeal on value or classification to the Supervisor of Assessments WITHIN 45 DAYS of the notice date (TP 14-502(a)(1)); a hearing with the Supervisor or designee; the Supervisor's final notice; appeal to the county Property Tax Assessment Appeals Board (PTAAB) WITHIN 30 DAYS of the final notice (TP 14-509); appeal to the Maryland Tax Court WITHIN 30 DAYS of the PTAAB decision (TP 14-512(f)); and a PETITION FOR REVIEW at any time within three years from the final notice, filed on or before the date of finality for the next taxable year, heard by the Supervisor (TP 14-503). Also: pro se representation is allowed; no filing fee; the postmark is the filing date; the court accepts an informal letter received in time and then requires the formal petition; exhaustion of administrative remedies is required (counties excepted).",
    status: "verified",
  },
  "md-archives-sdat-functions": {
    sourceId: "md-archives-sdat-functions",
    title: "State Department of Assessments and Taxation — origin and functions (Maryland Manual)",
    publisher: "Maryland State Archives (official)",
    authorityLevel: "primary",
    url: "https://msa.maryland.gov/msa/mdmanual/25ind/html/06assesf.html",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Maryland",
    jurisdictionLevel: "state",
    jurisdictionId: "maryland",
    topic: "assessment-system",
    notes:
      "Read in full 2026-09-28. The official statement of the system's structure: Maryland is THE ONLY STATE where the assessment process is centralized at the State level; SDAT appraises at MARKET VALUE and certifies the values to local governments, which set rates and mail the bills in July or August; since July 2001 assessments are at 100% of market value; real property has been reassessed on a THREE-YEAR CYCLE since 1980 with one-third of all properties reviewed each year; INCREASES ARE PHASED IN OVER THREE YEARS (the page's own example: a $30,000 increase adds $10,000 per year to the old value); owners are notified of any change in assessment; and the law provides the three-tier appeal (Supervisor's hearing, PTAAB, Maryland Tax Court). The Director appoints a Supervisor of Assessments for each county and Baltimore City.",
    status: "verified",
  },
  "md-montgomery-homestead": {
    sourceId: "md-montgomery-homestead",
    title: "County Homestead Tax Credit — Montgomery County Department of Finance",
    publisher: "Montgomery County, Maryland (Department of Finance)",
    authorityLevel: "primary",
    url: "https://www.montgomerycountymd.gov/department-finance/taxes/county-homestead-tax-credit",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Montgomery County, Maryland",
    jurisdictionLevel: "county",
    jurisdictionId: "maryland",
    topic: "homestead-credit",
    notes:
      "Read in full 2026-09-28. A county's own statement of the Homestead Tax Credit, which doubles as the clearest statement of the statewide mechanism: EVERY county and municipality in Maryland is required to limit taxable assessment increases to NO MORE THAN 10% PER YEAR, and the State limits the taxable assessment for the State portion of the tax to 10% (municipalities may adopt less — Kensington uses 5%). The credit 'does not limit the market value of the property'; it is applied against the tax due on the assessment increase above the limit. Eligibility: principal residence, lived in at least six months of the year INCLUDING JULY 1, no transfer of ownership, no owner-requested rezoning that raised value, no substantial use change, and the prior assessment not clearly erroneous. Apply ONCE — not every year; new purchasers are mailed an application after the deed is recorded, and eligibility can be checked on the SDAT Real Property search.",
    status: "verified",
  },
  "md-sdat-real-property-search": {
    sourceId: "md-sdat-real-property-search",
    title: "SDAT Real Property Data Search",
    publisher: "Maryland State Department of Assessments and Taxation",
    authorityLevel: "primary",
    url: "https://sdat.dat.maryland.gov/RealProperty/Pages/default.aspx",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Maryland",
    jurisdictionLevel: "state",
    jurisdictionId: "maryland",
    topic: "property-search",
    notes:
      "Read live 2026-09-28 (the page is an application shell; the tool itself is interactive). Maryland is unusual on this site in having a STATEWIDE official property search: the Real Property Data Search covers every county and Baltimore City, searchable by county plus street address or account identifier (owner-name search is deliberately not offered). This is the entry point the Montgomery County homestead page itself points to for checking eligibility and phase-in data.",
    status: "verified",
  },
  "md-sdat-appeal-form": {
    sourceId: "md-sdat-appeal-form",
    title: "SDAT Real Property Assessment Appeal Form (online)",
    publisher: "Maryland State Department of Assessments and Taxation",
    authorityLevel: "primary",
    url: "https://assessmentappeals.dat.maryland.gov/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Maryland",
    jurisdictionLevel: "state",
    jurisdictionId: "maryland",
    topic: "appeal-filing",
    notes:
      "Read live 2026-09-28 (application shell; the search results and the state's own descriptions confirm its function). The state's official online appeal form — 'use this online form to appeal your assessment notice within 45 days of the notice date' — the e-filing counterpart of the Supervisor-level appeal documented on the Tax Court procedures page.",
    status: "verified",
  },
  "md-mgaleg-hb1088": {
    sourceId: "md-mgaleg-hb1088",
    title: "Fiscal and Policy Note, House Bill 1088 (2019) — assessment appeal process description",
    publisher: "Maryland General Assembly (Department of Legislative Services)",
    authorityLevel: "primary",
    url: "https://mgaleg.maryland.gov/2019RS/fnotes/bil_0008/hb1088.pdf",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Maryland",
    jurisdictionLevel: "state",
    jurisdictionId: "maryland",
    topic: "notice-timing",
    notes:
      "PDF could not be extracted in this environment; registered for what the document's own official search-result text states: 'The assessment appeal process typically begins with an appeal of the notice of assessment. These notices are mailed in late December, and an appeal may be filed...' This is the official corroboration for the notice timing that county pages (Cecil County: 'usually mailed in late December') and the January 1 date of finality imply. The pages present the timing as 'typically late December', not as a statutory date.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // INDIANA — three official in.gov pages read in full (2026-09-28): the
  // DLGF's Tax Bill 101 (the caps' own worked arithmetic), the Citizen's
  // Guide (the annual-adjustment cycle and billing), and IN.gov's appeal FAQ
  // (the Form 130 ladder and the 5% burden shift). IC sections are cited
  // through these pages, which name them.
  // ------------------------------------------------------------------
  "in-dlgf-tax-bill-101": {
    sourceId: "in-dlgf-tax-bill-101",
    title: "Tax Bill 101 — Indiana Department of Local Government Finance",
    publisher: "Indiana Department of Local Government Finance (DLGF)",
    authorityLevel: "primary",
    url: "https://www.in.gov/dlgf/understanding-your-tax-bill/tax-bill-101/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Indiana",
    jurisdictionLevel: "state",
    jurisdictionId: "indiana",
    topic: "tax-caps",
    notes:
      "Read in full 2026-09-28. The Department's own worked explanation of the CIRCUIT BREAKER caps: owners do not pay more than 1 PERCENT of GROSS assessed value for homesteads, 2 PERCENT for other residential and agricultural land, and 3 PERCENT for all other property — with the page's full arithmetic (gross AV, deductions to net AV, rate, local and state credits, then a CAP CREDIT bringing the liability down to the cap, computed separately per property class). Referendum-approved building projects and school operating funds are EXEMPT from the caps (the cap table adjusts for the exempt rate share). A senior-citizen credit caps eligible owners at 2 PERCENT ABOVE what was due the previous year. The caps 'do not change the local tax rate' — budgets set rates; the caps only bound the bill.",
    status: "verified",
  },
  "in-dlgf-citizens-guide": {
    sourceId: "in-dlgf-citizens-guide",
    title: "Citizen's Guide to Property Tax — Indiana DLGF",
    publisher: "Indiana Department of Local Government Finance (DLGF)",
    authorityLevel: "primary",
    url: "https://www.in.gov/dlgf/understanding-your-tax-bill/citizens-guide-to-property-tax/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Indiana",
    jurisdictionLevel: "state",
    jurisdictionId: "indiana",
    topic: "assessment-cycle",
    notes:
      "Read in full 2026-09-28. The Department's statement of the cycle: county assessors value via mass appraisal, and through ANNUAL ADJUSTMENT ('trending') each year's sales data determines whether area values should move to market — since 2002 there is no multi-year gap reassessment. The DLGF reviews and approves each county's assessment-to-sales RATIO STUDY before values are certified. Notice comes either by Form 11 (notice of assessment) or on the tax bill (TS-1); appeal by contacting the local assessor 'by June 15 of the year that you receive a Form 11', or June 15 of the following year when no Form 11 was mailed; no appraisal is required. Taxes are due in two installments — MAY 10 and NOVEMBER 10. Also documents levy vs rate (the levy is the cap on a unit's tax dollars; rates = levy / net AV) and the budget calendar.",
    status: "verified",
  },
  "in-faqs-appeal": {
    sourceId: "in-faqs-appeal",
    title: "How do I appeal the assessment of my home? — IN.gov FAQ",
    publisher: "State of Indiana (IN.gov)",
    authorityLevel: "primary",
    url: "https://faqs.in.gov/hc/en-us/articles/115005066947-How-do-I-appeal-the-assessment-of-my-home",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Indiana",
    jurisdictionLevel: "state",
    jurisdictionId: "indiana",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The state's own appeal FAQ: initiate an appeal within 45 DAYS of the notice-of-assessment date; where no notice was given, the tax bill serves as the notice and the deadline is the LATER of May 10 of the tax-bill year or 45 days after the bill's date. Acceptable evidence includes the sale of the subject property, comparable sales, listings, offers to purchase, or an appraisal — Indiana law does NOT require an appraisal. BURDEN OF PROOF shifts to the county or township assessor where the assessment increased more than 5% over the preceding assessment date. Process: informal meeting with the assessor; if unresolved, the PTABOA must hold a hearing within 180 days and determine within 120 days of the hearing; a $50 penalty can attach for missing the appearance/continuance/withdrawal procedures; appeal to the Indiana Board of Tax Review on Form 131 if dissatisfied or if the PTABOA missed its deadlines; then the Indiana Tax Court and the Indiana Supreme Court.",
    status: "verified",
  },
  "in-dlgf-form130-flowchart": {
    sourceId: "in-dlgf-form130-flowchart",
    title: "Form 130 — Taxpayer's Notice to Initiate an Appeal (DLGF procedure flowchart)",
    publisher: "Indiana Department of Local Government Finance (DLGF)",
    authorityLevel: "primary",
    url: "https://www.in.gov/dlgf/files/SF-53958-R9-Form-130-FLOWCHART-ONLY-Taxpayers-Notice-To-Initiate-An-Appeal-Clean.pdf",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Indiana",
    jurisdictionLevel: "state",
    jurisdictionId: "indiana",
    topic: "appeal-form",
    notes:
      "PDF could not be extracted in this environment; registered for what the official flowchart's own text states in search results: the taxpayer MUST use the DLGF-prescribed Form 130 to initiate an appeal, with the 45-day deadline measured from the notice's mailing date (and 45 days for personal property notices). The Form 130/Form 131 names and the 45-day windows are independently stated on the in.gov FAQ (in-faqs-appeal), which is the citation the pages rely on.",
    status: "verified",
  },
  // ------------------------------------------------------------------
  // WASHINGTON — three official reads (2026-09-28): the DOR's own levy-limit
  // chapter read in full (the 101%/1% machinery in the Department's own
  // words), the State Board of Tax Appeals' how-to-file page read in full
  // (the 30-day second-level appeal), and the July 1 / 30-day BOE deadline
  // confirmed across the Department's own PDFs (calendar, petition form,
  // Homeowner's Guide) — quoted only for what their own official search
  // snippets state. dor.wa.gov HTML was readable; its PDFs were not
  // extractable in this environment.
  // ------------------------------------------------------------------
  "wa-dor-levy-limit": {
    sourceId: "wa-dor-levy-limit",
    title: "The levy limit — Property Tax Levies, Part 1 (DOR)",
    publisher: "Washington State Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.wa.gov/book/export/html/926",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Washington",
    jurisdictionLevel: "state",
    jurisdictionId: "washington",
    topic: "levy-limit",
    notes:
      "Read in full 2026-09-28. The Department's own statement of the levy limit: taxing districts increase their HIGHEST LAWFUL LEVY SINCE 1985 by up to one percent — districts with population under 10,000 must adopt an annual resolution for a limit factor of 101%, and districts of 10,000 or more use 100% plus the Implicit Price Deflator or 101%, whichever is LESS (with a supermajority 'substantial need' resolution allowing the 101% maximum). A 'levy lid lift' is the voter-approval means to exceed the limit. The constitutional 1% aggregate limit (Art. VII) sits on top as the outer bound.",
    status: "verified",
  },
  "wa-dor-petition-boe": {
    sourceId: "wa-dor-petition-boe",
    title: "Taxpayer Petition to the County Board of Equalization (DOR form REV 64-0075)",
    publisher: "Washington State Department of Revenue",
    authorityLevel: "primary",
    url: "https://dor.wa.gov/sites/default/files/2023-09/64-0075.pdf",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Washington",
    jurisdictionLevel: "state",
    jurisdictionId: "washington",
    topic: "appeal-filing",
    notes:
      "PDF could not be extracted in this environment; registered for what the form's own official search-result text states: 'This petition must be filed or postmarked by July 1 of the current assessment year or 30 days' (the form's continuation is the mailing-of-the-change-of-value-notice alternative). The July 1 / 30-day rule is independently stated on the Department's Property Tax Calendar PDF and Homeowner's Guide PDF in their own search snippets, and county BOE pages (Lewis, Lincoln, Kitsap, Skagit) state the same two-part deadline. The rule's two limbs are corroborated, but the form text itself was not read beyond the snippet.",
    status: "verified",
  },
  "wa-bta-how-to-file": {
    sourceId: "wa-bta-how-to-file",
    title: "How to file an appeal — Washington State Board of Tax Appeals",
    publisher: "Washington State Board of Tax Appeals (WSBTA)",
    authorityLevel: "primary",
    url: "https://bta.wa.gov/how-file-appeal",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Washington",
    jurisdictionLevel: "state",
    jurisdictionId: "washington",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The Board's own process statement: WSBTA hears appeals from decisions of a County Board of Equalization or the Department of Revenue; MOST appeals must be filed within 30 DAYS of the mailing date of the decision being appealed, and the Board cannot extend deadlines or accept late appeals; separate INFORMAL and FORMAL property tax appeal forms (plus a DIRECT appeal route under RCW 84.40.038 requiring the joint signature of taxpayer, assessor and county board); hearings currently scheduled 18 to 24 months out because of the backlog; email filings before 5 p.m. on a business day count that day.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // NEW JERSEY — the Division of Taxation's own Assessment and Appeals page
  // read in full (2026-09-28): it states the April 1 deadline, the May 1
  // revaluation extension, the January 15 alternative calendar (Burlington,
  // Gloucester, Monmouth), the Chapter 123 common level range (±15% of the
  // average ratio), the $1M/$750K Tax Court thresholds, the 45-day Tax Court
  // appeal, and added/omitted assessments. The County Tax Board Handbook and
  // the Guide to Tax Appeal Hearings are PDFs the environment could not
  // extract; the December 1 added/omitted deadline is corroborated by
  // multiple independent county and assessor sources but no official page
  // readable here states it, so it is presented with that caveat.
  // ------------------------------------------------------------------
  "nj-dor-lpt-appeal": {
    sourceId: "nj-dor-lpt-appeal",
    title: "Assessment and Appeals — NJ Division of Taxation, Local Property Branch",
    publisher: "New Jersey Division of Taxation (Department of the Treasury)",
    authorityLevel: "primary",
    url: "https://www.nj.gov/treasury/taxation/lpt/lpt-appeal.shtml",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "New Jersey",
    jurisdictionLevel: "state",
    jurisdictionId: "new-jersey",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The Division's own statement of the system: petitions to the County Board of Taxation (Form A-1 + A-1 Comp. Sale) or, for assessments over $1,000,000, directly to the State Tax Court — filed and RECEIVED by APRIL 1; MAY 1 where a municipal revaluation or reassessment was undertaken; JANUARY 15 in Burlington, Gloucester and Monmouth Counties (alternative assessment calendar). The burden: prove the assessment does not fairly represent the True Market Value Standard or the Common Level Range Standard — the common level range being plus or minus 15% of the district's average ratio (the Chapter 123 test). Added/omitted assessments (Form AA-1; Tax Court direct over $750,000). Tax Court appeal within 45 days of the County Board's judgment.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // MINNESOTA — four official reads (2026-09-28): the Department of Revenue's
  // appeal page read in full (the LBAE/CBAE ladder with its meeting windows),
  // the Department's Understanding Property Tax page read in full (the
  // classification mechanics and the May 15 / Oct 15 installments), the Tax
  // Court's own home page read in full, and Anoka County's appeal page read
  // in full (the county view of the same ladder plus the April 1 notice
  // mailing and the April 30 Tax Court deadline with its own example). The
  // homestead exclusion parameters appear in official DOR PDF snippets but
  // the dedicated page was captcha-blocked, so they are cited only where the
  // snippet's own text states them.
  // ------------------------------------------------------------------
  "mn-dor-appealing": {
    sourceId: "mn-dor-appealing",
    title: "Appealing Property Value and Classification — Minnesota Department of Revenue",
    publisher: "Minnesota Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.revenue.state.mn.us/appealing-property-value-and-classification",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Minnesota",
    jurisdictionLevel: "state",
    jurisdictionId: "minnesota",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The Department's own statement of the ladder: contact the county assessor first; then the LOCAL Board of Appeal and Equalization (meetings between APRIL 1 and MAY 31; usually the city council or town board; cities may transfer their powers to the county, holding open book meetings instead) — appealing to the Local Board is a prerequisite for the county level; then the COUNTY Board of Appeal and Equalization (meetings in JUNE; usually the county commissioners). Or go DIRECTLY to Minnesota Tax Court — appeal by APRIL 30 OF THE FOLLOWING YEAR. The Valuation Notice shows the value and classification used for the following year's taxes; the tax AMOUNT itself cannot be appealed.",
    status: "verified",
  },
  "mn-dor-understanding": {
    sourceId: "mn-dor-understanding",
    title: "Understanding Property Tax — Minnesota Department of Revenue",
    publisher: "Minnesota Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.revenue.state.mn.us/understanding-property-tax",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Minnesota",
    jurisdictionLevel: "state",
    jurisdictionId: "minnesota",
    topic: "assessment-system",
    notes:
      "Read in full 2026-09-28. The Department's statement of the mechanics: the county assessor sets estimated market value (EMV) and classification as of JANUARY 2; EMV minus deferments/exclusions/reductions becomes taxable market value (TMV); each classification has its own class rate set by law — TMV × class rate = tax capacity, and the levy is spread over tax capacity. Two notices each year: Truth in Taxation notices in NOVEMBER (proposed taxes) and property tax statements mailed by MARCH 31 (the prior year's value is used, so the tax amount cannot be appealed). Taxes due MAY 15 and OCTOBER 15 (November 15 for agricultural); $100 or less due in full May 15. Some seasonal-cabin and commercial-industrial property carries an additional state general tax.",
    status: "verified",
  },
  "mn-tax-court-home": {
    sourceId: "mn-tax-court-home",
    title: "Minnesota Tax Court — official website",
    publisher: "Minnesota Tax Court",
    authorityLevel: "primary",
    url: "https://mn.gov/tax-court/",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Minnesota",
    jurisdictionLevel: "state",
    jurisdictionId: "minnesota",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The Court's own statement of its jurisdiction under Minnesota Statutes chapter 271: a specialized executive-branch court hearing (a) appeals of tax orders of the Commissioner of Revenue and (b) petitions of property tax VALUATIONS, CLASSIFICATION, EQUALIZATION and/or EXEMPTIONS. Confirms a petitioner may appeal to the county directly 'depending on the time of year' or proceed to the Court — the statutory basis for the direct-to-Tax-Court route the Department of Revenue's page also describes. Forms index on the same site.",
    status: "verified",
  },
  "mn-anoka-appeal": {
    sourceId: "mn-anoka-appeal",
    title: "How to Appeal Your Value — Anoka County, Minnesota",
    publisher: "Anoka County, Minnesota (Property Records & Taxation)",
    authorityLevel: "primary",
    url: "https://www.anokacountymn.gov/4279/How-to-Appeal-Your-Value",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Anoka County, Minnesota",
    jurisdictionLevel: "county",
    jurisdictionId: "minnesota",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. A county's own statement of the same ladder with the timing details the state pages leave to the notice: valuation notices mailed ON OR BEFORE APRIL 1 each year (value and classification as of January 2); open book vs. LBAE is set by the MUNICIPALITY — in cities holding their own LBAE you MUST appeal there first to reach the June CBAE, while open book cities go straight to the county; Tax Court petitions may be filed any time after the valuation notice is received and before APRIL 30 of the year the taxes are PAYABLE (the page's own example: the 2025 assessment's deadline is April 30, 2026). Also confirms the sales-study window (October 1 to September 30) assessors statewide use to derive values.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // CONNECTICUT — a state where the municipality is the administrator and
  // the appeal body is a municipal Board of Assessment Appeals (BAA). No
  // single state-agency page readable in this environment states the
  // system, so the provenance follows the Maryland pattern: two municipal
  // BAA pages read in full (2026-09-28), each naming the general statutes
  // that govern them, plus the Judicial Branch's pathfinder PDF registered
  // for its own search-result text only. The February 20 / March 20
  // deadline structure is stated identically by both municipalities and
  // corroborated by law-firm and legislative research summaries.
  // ------------------------------------------------------------------
  "ct-bridgeport-baa": {
    sourceId: "ct-bridgeport-baa",
    title: "Board of Assessment Appeals — City of Bridgeport",
    publisher: "City of Bridgeport, Connecticut",
    authorityLevel: "primary",
    url: "https://www.bridgeportct.gov/government/boards-and-commissions/board-assessment-appeals",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Bridgeport, Connecticut",
    jurisdictionLevel: "county",
    jurisdictionId: "connecticut",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. A municipal BAA's own statement of its function under CGS § 12-110: the board meets in MARCH for real estate and personal property appeals and in SEPTEMBER for motor vehicle appeals; applications are submitted to the assessor's office between FEBRUARY 1 and FEBRUARY 20; under CGS § 12-111 the board may elect not to hear an appeal of commercial, industrial, utility or apartment property assessed over $1 million. Also notes the enlarged 15-member board a city council may appoint in a revaluation year and the year after.",
    status: "verified",
  },
  "ct-middletown-baa": {
    sourceId: "ct-middletown-baa",
    title: "Assessment Appeals, Board of — City of Middletown",
    publisher: "City of Middletown, Connecticut",
    authorityLevel: "primary",
    url: "https://www.middletownct.gov/435/Assessment-Appeals-Board-of",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Middletown, Connecticut",
    jurisdictionLevel: "county",
    jurisdictionId: "connecticut",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The second municipal statement of the same statutory structure, with the timing details Bridgeport leaves out: the filing deadline is FEBRUARY 20 provided the Grand List was filed by January 31 — if the assessor received an extension, the deadline moves to MARCH 20 and the board meets in APRIL; appeals must be RECEIVED by the deadline and postmarks are not acceptable; real estate appeals must be based on the value at the time of the LAST REVALUATION, not current market; the board also meets in September for motor vehicles; written applications with the owner's estimate of value, reason, and signature (agent authorization allowed).",
    status: "verified",
  },
  "ct-jud-pathfinder": {
    sourceId: "ct-jud-pathfinder",
    title: "Property Tax Appeals (Municipal) — Judicial Branch Law Library pathfinder",
    publisher: "Connecticut Judicial Branch",
    authorityLevel: "primary",
    url: "https://www.jud.ct.gov/lawlib/Notebooks/Pathfinders/PropertyTaxAppeals.PDF",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Connecticut",
    jurisdictionLevel: "state",
    jurisdictionId: "connecticut",
    topic: "appeal-process",
    notes:
      "PDF could not be extracted in this environment; registered for what its own official search-result text states: the pathfinder covers assessments appealed FROM a municipality's Board of Assessment Appeals TO the Superior Court, and quotes the condition that a property owner must make application to the Superior Court 'within two months of the date' of the BAA decision. The two-month Superior Court window is corroborated by multiple independent legal summaries; the PDF itself was not read beyond the snippet.",
    status: "verified",
  },

  // ------------------------------------------------------------------
  // WISCONSIN — the state DOR's own pages are JavaScript-rendered shells
  // that return no body text to plain HTTP reads (the same behavior as
  // Connecticut's portal), so the provenance again follows the Maryland
  // pattern: two municipal assessor pages read in full (2026-09-28), plus
  // the DOR's official PDFs registered for what their own search-result
  // text states. The statutory chain (open book -> notice of intent ->
  // objection -> DOR review or circuit court) is consistent across all
  // reads and each element cites the governing statute through the pages
  // that name it.
  // ------------------------------------------------------------------
  "wi-dor-bor-faq": {
    sourceId: "wi-dor-bor-faq",
    title: "Board of Review (BOR) — Filing Objections/Forms (DOR FAQ)",
    publisher: "Wisconsin Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.revenue.wi.gov/Pages/FAQS/slf-bor.aspx",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Wisconsin",
    jurisdictionLevel: "state",
    jurisdictionId: "wisconsin",
    topic: "appeal-process",
    notes:
      "Page is a JavaScript-rendered shell; no body text was readable in this environment. Registered as the official DOR page both municipal sources direct owners to for the objection form and process (Sun Prairie and Superior each link it as the filing authority). No claim on this site rests on its unread text — the process statements come from the municipal pages and the DOR publications' own search snippets.",
    status: "verified",
  },
  "wi-dor-pb060": {
    sourceId: "wi-dor-pb060",
    title: "2026 Guide for Property Owners (DOR publication PB-060)",
    publisher: "Wisconsin Department of Revenue",
    authorityLevel: "primary",
    url: "https://www.revenue.wi.gov/DOR%20Publications/pb060.pdf",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Wisconsin",
    jurisdictionLevel: "state",
    jurisdictionId: "wisconsin",
    topic: "appeal-process",
    notes:
      "PDF could not be extracted in this environment; registered for what its own official search-result text states: the property owner must complete a Board of Review Objection form (PA-115), and the assessor must provide a Notice of Changed Assessment at least 15 days (30 days in revaluation years) before the board's first meeting. The 48-hour notice of intent is independently stated in the DOR's Guide for Board of Review Members (PB-056) search text and municipal pages. The PDF itself was not read beyond the snippet.",
    status: "verified",
  },
  "wi-sun-prairie-appeal": {
    sourceId: "wi-sun-prairie-appeal",
    title: "Assessment Appeals — City of Sun Prairie (Assessor)",
    publisher: "City of Sun Prairie, Wisconsin",
    authorityLevel: "primary",
    url: "https://cityofsunprairie.com/177/Assessment-Objections",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Sun Prairie, Wisconsin",
    jurisdictionLevel: "county",
    jurisdictionId: "wisconsin",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The assessor's own statement of the process: meet with the assessing staff during OPEN BOOK (spring/summer) first; if unresolved, file a Formal Objection Form with the City Clerk to appear before the Board of Review — a quasi-judicial body hearing only SWORN oral testimony whose function is 'not one of valuation, but of deciding the validity of the facts presented'; the burden is on the owner to prove the property is inequitably assessed compared with the general level of assessment in the tax district; evidence is recent arm's-length sales of the subject or comparables, and an appraiser must be available to testify; the assessment date is always January 1. Links the DOR's slf-bor FAQ as the form source.",
    status: "verified",
  },
  "wi-superior-appeal": {
    sourceId: "wi-superior-appeal",
    title: "If I Think My Value is Incorrect: More Options — City of Superior (Assessor)",
    publisher: "City of Superior, Wisconsin",
    authorityLevel: "primary",
    url: "https://www.superiorwi.gov/612/More-Options",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Superior, Wisconsin",
    jurisdictionLevel: "county",
    jurisdictionId: "wisconsin",
    topic: "appeal-process",
    notes:
      "Read in full 2026-09-28. The second-level routes after the Board of Review: a written appeal to the DEPARTMENT OF REVENUE within 20 days of receiving the decision or within 30 days of the clerk's affidavit — $100 filing fee, fair market value of the appealed property cannot exceed $1 million, and the Department may revalue before November 1 of the assessment year or within 60 days of the appeal, whichever is later, its value substituting for the original; OR an appeal to the CIRCUIT COURT within 90 days after the BOR's adjournment, where the court decides on the record the board created. Names the DOR's Property Assessment Appeal Guide as the detailed source.",
    status: "verified",
  },

  "dcad-property-search": {
    sourceId: "dcad-property-search",
    title: "Find Property By Street Address — DCAD Search Appraisals",
    publisher: "Dallas Central Appraisal District",
    authorityLevel: "primary",
    url: "https://www.dallascad.org/searchaddr.aspx",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Dallas County, Texas",
    jurisdictionLevel: "county",
    jurisdictionId: "texas",
    topic: "dallas-property-search",
    notes:
      "Read live in a real browser session 2026-09-28 (the page is a classic ASP frameset that returns no body text to plain HTTP fetches — that is why the county gate had been blocked). Verified on the page itself: 'Search By: Owner Name / Account Number / Street Address / Business Name / Map', with address-number range search, a city selector covering Dallas County municipalities, and the note that the Residence Homestead Exemption Application form is available from the account details page. Sibling search pages: searchowner.aspx, SearchAcct.aspx. The map variant lives at maps.dcad.org.",
    status: "verified",
  },
  "dcad-about": {
    sourceId: "dcad-about",
    title: "About DCAD — Dallas Central Appraisal District",
    publisher: "Dallas Central Appraisal District",
    authorityLevel: "primary",
    url: "https://www.dallascad.org/aboutus/default.aspx",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Dallas County, Texas",
    jurisdictionLevel: "county",
    jurisdictionId: "texas",
    topic: "dallas-about",
    notes:
      "DCAD's own about page, confirmed reachable in the 2026-09-28 browser session (title renders; body is frameset-structured). Used only for the district's role and services — no scale figures cited from it, because the figures in third-party search results were not read at the source.",
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
  "hcad-property-search": {
    sourceId: "hcad-property-search",
    title: "Property Search — HCAD (official)",
    publisher: "Harris Central Appraisal District",
    authorityLevel: "primary",
    url: "https://hcad.org/property-search/property-search",
    lastVerifiedDate: "2026-09-28",
    jurisdiction: "Harris County, Texas",
    jurisdictionLevel: "county",
    jurisdictionId: "harris-county",
    topic: "hcad-property-search",
    notes:
      "HCAD's official property-search page. Search options are by account number, property address, and owner name. Navigation-level confirmation via hcad.org site sections (Owners / Agents / Public Data all reference Property Search); the page body itself was not readable from this environment (HTTP 403 to automated fetch) — the URL is the district's own navigation target, not an invented deep link.",
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

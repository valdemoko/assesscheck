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
      "PA considers applications filed by March 1 and serves written notice of disapproval with reasons; applicant may appeal to the VAB; board action final unless the applicant files in circuit court within 15 days of the board's refusal (§ 196.151).",
    status: "verified",
  },};

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

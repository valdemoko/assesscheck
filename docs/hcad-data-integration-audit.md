# HCAD Public Data Integration — Pre-Implementation Audit

Status: **RESEARCH ONLY — NO PRODUCTION CONNECTION.**
No code in this repository fetches from, links to, or depends on any HCAD
endpoint. Research verified 2026-09-17. Anything not confirmed from an
official HCAD source is marked **NOT VERIFIED**. HCAD's website exposes most
of its deeper service pages under URL slugs that could not be resolved during
this pass (repeated 404s on candidate paths), which itself is recorded below.

## A. Official HCAD sources

Verified by direct fetch (2026-09-17), all returning HTTP 200 with content:

| Page | URL |
|---|---|
| HCAD homepage (lists Property Search, Property Tax Database, Online Services) | https://hcad.org/ |
| Online Services index (lists **Public Data**, iFile Protest, iFile Rendition, Exemption Wizard, Homestead, Owners, Agents, Tax Deferral, Electronic Notices, workshops) | https://hcad.org/hcad-online-services/ |
| About HCAD (scale: ~1.9M parcels, 600+ taxing units) | https://hcad.org/about/ |
| Property Tax Database (points to Texas.gov/PropertyTaxes; Harris County Tax Assessor-Collector transparency database; email-notification registration; notes the database "will be updated regularly during August and September" as rates are proposed/adopted) | https://hcad.org/hcad-online-services/property-tax-database/ |
| iFile Protest | https://hcad.org/hcad-online-services/ifile-protest/ |
| Homestead online filing | https://hcad.org/hcad-online-services/homestead/ |
| Electronic Notices | https://hcad.org/hcad-online-services/electronic-notices/ |
| All Forms index (incl. Form 50-132 Notice of Protest) | https://hcad.org/hcad-forms/hcad-all-forms/ |
| Contact Us | https://hcad.org/contact-us/ |
| Privacy Policy (effective 2024-08-14; states data is subject to the Texas Public Information Act, Gov. Code ch. 552; references separate "Terms and Conditions") | https://hcad.org/hcad-privacy-policy/ |
| Harris County Tax Office homepage (hosts the Property Tax Transparency Database link) | https://www.hctax.net/ |

Attempted but NOT FOUND (404): a dedicated Public Data service page
(candidate paths under hcad.org/hcad-online-services/public-data*/ and
hcad.org/public-data*/ all 404), a Terms and Conditions page (referenced by
name in the Privacy Policy; its actual URL NOT VERIFIED), any developer/API
documentation page, and any ArcGIS/GIS page. The homepage search-links (e.g.,
"Search Records", "Property Tax Database") are rendered as interactive
elements whose underlying URLs were not capturable by text fetch.

INFERENCE (not verification): the "Public Data" item in the official Online
Services list indicates a public data offering exists; its location, contents,
and terms could not be reached and are NOT VERIFIED.

## B. Available property data

- VERIFIED: HCAD publicly offers a **property search** by account, address, or
  owner name covering real property and business personal property (official
  homepage description).
- VERIFIED: the **Property Tax Database** shows, per property, the taxes each
  taxing unit will impose at proposed/adopted rates.
- VERIFIED (statutory context, not an HCAD data claim): notices of appraised
  value must show prior/current appraised value, taxable value, and exemptions
  (Tax Code § 25.19), so those data points exist in HCAD records.
- NOT VERIFIED: the complete field list exposed publicly (square footage,
  year built, land area, improvement details, condition/quality, sale history,
  neighborhood codes, GIS attributes, etc.).

## C. Assessment/value data

- VERIFIED: current and prior-year values are displayed through the official
  property search and notices (per § 25.19 notice contents; homepage property
  search description).
- NOT VERIFIED: whether values beyond current/prior year are exposed; whether
  land/improvement value splits are exposed outside the mailed notice.

## D. Historical data

- NOT VERIFIED. The Privacy Policy confirms records are subject to the Texas
  Public Information Act (ch. 552), which implies records are public records,
  but no official page reviewed documents multi-year assessment history
  availability through the website or any download.

## E. Comparable-property data

- VERIFIED (statutory frame): Tax Code § 23.013 defines comparable-sale
  recency (36 months residential in counties >150,000) and similarity factors;
  Harris County qualifies.
- NOT VERIFIED: whether HCAD publicly exposes sale dates/prices or the fields
  needed to apply § 23.013 screens programmatically.

## F. APIs

- NOT VERIFIED. No official API, developer documentation, API key process, or
  API terms were found. No hcad.org page reviewed documents programmatic
  access. Treat any third-party "HCAD API" as unverified and unusable.

## G. ArcGIS/services

- NOT VERIFIED. No ArcGIS REST endpoint, map service, or GIS download page
  was verified from hcad.org. (Harris County's own GIS systems are separate
  organizations and out of scope for this HCAD audit.)

## H. Bulk downloads

- NOT VERIFIED. The Online Services list names "Public Data", which is
  consistent with a bulk-data offering, but no dataset catalog, file formats,
  or record layouts were verifiable in this pass.

## I. Update frequency

- VERIFIED (narrow): the Property Tax Database "will be updated regularly
  during August and September" as taxing units propose/adopt rates (official
  page text).
- NOT VERIFIED: update cadence for property/appraisal data or any dataset.

## J. Access/rate limits

- NOT VERIFIED. No documented rate limits, fair-use rules, authentication
  requirements, or access tiers. The Privacy Policy notes site usage data is
  logged, but that is not an access policy for data services.

## K. Terms of use

- NOT VERIFIED. The Privacy Policy (verified) explicitly references HCAD's
  "Terms and Conditions" as governing, but that document's page could not be
  located during this pass. **HCAD's terms are therefore effectively unknown
  and ambiguous by absence — this ambiguity is NOT permission.**

## L. Licensing/reuse

- NOT VERIFIED. No license, copyright statement, attribution requirement, or
  reuse restriction was verified. The Privacy Policy's Public Information Act
  reference concerns disclosure of records, not licensing of a dataset.

## M. Commercial use

- NOT VERIFIED. Nothing verified either permits or prohibits commercial use.

## N. Data storage/caching

- NOT VERIFIED. No official statement on caching, storing, or retaining data.

## O. Data redistribution

- NOT VERIFIED. No official statement on redistribution. The Privacy Policy's
  external-links disclaimer covers liability for third-party sites, not
  redistribution of HCAD data.

## P. Technical feasibility

- UNKNOWN. No documented dataset, API, or endpoint exists in the verified
  record to assess formats, stability, or versioning. Feasibility cannot be
  asserted from a service name alone.

## Q. Legal/permission status

- NOT DETERMINED. The only verified legal materials are: (1) the Privacy
  Policy (governs personal information collected through HCAD's services, and
  cites the Public Information Act) and (2) the referenced-but-unlocated
  Terms and Conditions. None of the verified material addresses data reuse,
  automated access, redistribution, or commercial use. **Do not infer
  permission from public accessibility.**

## R. Recommended integration strategy

**POSSIBLE BUT NOT YET VERIFIED**

Rationale: HCAD's own Online Services index officially lists "Public Data"
(VERIFIED), which makes a future integration plausible; but no dataset,
API, terms, or endpoint has been verified, so integration remains blocked.
Before any implementation: (1) locate the Public Data service page via the
hcad.org navigation (interactive links not capturable by text fetch — a
manual browser session should resolve the real URL immediately); (2) read
the Terms and Conditions page it references; (3) verify dataset formats,
fields, cadence, and any license/attribution/redistribution terms; (4) only
then re-classify.

## S. Open questions

1. What is the actual URL of the Public Data service page? (All guessed paths 404; resolve via the hcad.org Online Services navigation in a browser.)
2. Where are HCAD's Terms and Conditions, and what do they say about data reuse, automated access, and commercial use?
3. Do downloadable datasets exist, in what formats, and with what record layouts?
4. Is any official API documented? If an undocumented endpoint returns JSON, that does NOT make it an authorized API.
5. Does HCAD officially expose ArcGIS services, and under what terms?
6. What is the update cadence for property data (annual certification, interim updates)?
7. Are sale dates/prices and condition indicators published (needed for § 23.013 comparability screening)?
8. Are there rate limits, authentication requirements, or attribution obligations?

**Decision: DATA INTEGRATION NOT VERIFIED. The checker continues to operate
on user-provided values only.**

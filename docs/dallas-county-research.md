# Dallas County — county-page research

Purpose: decide whether Dallas County clears the four-point bar for a county page
set, the same bar Harris County passed and Miami-Dade failed. Written before any
page exists, per `docs/expansion-roadmap.md` §5.

**Verdict: four of four criteria verified 2026-09-28 — Dallas County is published.**
The last blocker was the property-search URL; it was read live in a real browser
session (§4 below). The original three-of-four verdict and its reasoning are
kept below for the record.

## 3.1 What closed the gap (2026-09-28)

A real browser session (not a plain HTTP fetch) on `dallascad.org` confirmed:

- **Search Appraisals works and has five modes**: Owner Name, Account Number,
  Street Address, Business Name, and Map. The address search lives at
  `https://www.dallascad.org/searchaddr.aspx` (registered as
  `dcad-property-search`), with siblings `searchowner.aspx` and
  `SearchAcct.aspx`, and the map variant at `maps.dcad.org`.
- The address search page carries working inputs (address number, direction,
  street name, range search, a city selector listing Dallas County
  municipalities) and states on its face that **the Residence Homestead
  Exemption Application form is available from the account details page**.
- The left navigation confirms the full local apparatus: Protest Process,
  uFILE Online Protest System, Informal Review Process, ARB, Taxpayer Liaison
  Officer, Forms, Exemptions, Property Valuation Process.
- **About DCAD** (`/aboutus/default.aspx`) is reachable; it is used only for the
  district's role and services. No scale figure (parcel count, taxing-unit
  count) is cited anywhere on the new page, because no such figure was read at
  the source — the same discipline that kept "61 local governing bodies" out.

The earlier finding that a plain fetch returns no body text is a property of the
site's classic-ASP frameset, not evidence of a missing service. The gate
requires a *verifiable* URL, and it is now verified.

---

## 1. What was read

| # | Source | What it settles |
|---|---|---|
| 1 | Dallas Central Appraisal District, "What is the deadline to file a protest?" (`support.dallascad.org`) | The protest deadline rule, the weekend/holiday rollover and the postmark requirement |
| 2 | Dallas Central Appraisal District, "I have questions about protesting property value." (`support.dallascad.org`) | The filing channels (uFile from April 15, or written; not fax or email), and the one-protest-per-account limit in uFile |

Both were read in full and are registered as `dcad-protest-deadline` and
`dcad-protest-questions`.

## 2. What could NOT be read

- **`dallascad.org` itself.** The main site (and `oonlineprotest.dallascad.org`)
  answers 200 but hands a text extractor nothing beyond the page title, so its
  content is client-rendered. The same was true of `dcad.org`, which timed out
  entirely. This matters below: the property-search URL has to come from that
  site.
- **DCAD's PDFs.** The protest-procedure and annual-report documents are PDFs,
  which the fetch tool refuses (`application/pdf` unsupported).
- **The "61 local governing bodies" figure** that appears in search results for
  DCAD's homepage. It is very likely correct — it also appears in DCAD annual
  reports — but it was not read at the source, so it is not used. That is the
  project's rule: a snippet is not a read source.

## 3. The four-point bar

| Criterion | Result | Evidence |
|---|---|---|
| 1. The petition procedure is documentable from official county sources | **PASSED** | DCAD's own articles: protests to the ARB are filed using uFile beginning April 15, or in written form; not accepted by fax or email; uFile accepts one protest per account |
| 2. The current-year deadline is verifiable from that page | **PASSED** | May 15 or 30 days after DCAD delivers the Notice of Appraised Value, whichever is later; the deadline rolls to the first business day if it falls on a weekend or holiday; if mailed, postmarked by the deadline |
| 3. The property search is linkable for the `DataIntegrationNotice` | **VERIFIED 2026-09-28** | `https://www.dallascad.org/searchaddr.aspx` read live in a browser session: five search modes, working inputs, homestead form available from account details. Registered as `dcad-property-search`. |
| 4. Local terminology is consistent with state law | **PASSED** | The county says "Notice of Appraised Value", "ARB", "chief appraiser", and names DCAD as the appraisal district — Texas statutory vocabulary, with uFile as the county's own filing-system name |

Two useful local facts came out of this that a Dallas page would carry and that
Harris does not: filing **opens** on April 15 rather than merely closing on May
15, and uFile is limited to **one protest per account**, so an owner with several
parcels has to file by mail or in person to have them heard together.

## 4. What closed it

The one open item was **a verifiable URL for DCAD's property search**, read from
DCAD's own site rather than inferred. A browser session on 2026-09-28 closed it
(§3.1). The county record is now `source-verified` in `lib/data/counties.ts`,
and the page lives at `/texas/dallas-county/`.

## 5. The remaining three placeholders

Tarrant, Bexar and Travis have had no research at all. They are still records
with empty `sources` and no `lastVerifiedDate`, and they exist only so the
architecture is extensible. The same four-point bar applies to each.

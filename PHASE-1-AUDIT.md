# Phase 1 Internal Quality Audit

Date: 2026-09-17 · Build: passing (42 static routes, `tsc --noEmit` clean)

## Correction pass (same day) — status of prior findings

| Finding | Status |
|---|---|
| $/sq ft could be over-read as valuation | **FIXED.** Checker result header and the $/sq ft flag now carry the exact disclaimer: "This is a screening comparison, not an appraisal, valuation, or prediction of your property's market value." No thresholds or calculation changed. |
| SOAH/LBA relied on Comptroller prose summaries | **PARTIALLY RESOLVED.** RBA now verified against the Comptroller's official RBA program page (eligibility, 60-day deadline, $5M/homestead limit, undisputed-taxes requirement, 45-day settlement) and Tax Code Ch. 41A (§§ 41A.09, 41A.10 read directly). SOAH verified at soah.texas.gov for the agency's role and the official 'Notice of Appeal by Property Owner' form; SOAH's own site does not restate the statutory eligibility criteria, so that page still cites the Comptroller/statute for criteria rather than SOAH. |
| HCAD data integration unverified | **DOCUMENTED, NOT IMPLEMENTED.** Full pre-implementation audit at `docs/hcad-data-integration-audit.md`; production code remains unconnected. |
| OG images missing | UNCHANGED — deferred to design phase per no-CSS constraint. |
| FAQPage schema pending editorial review | UNCHANGED — deliberate. |

## Verified strengths

**Source traceability (B, C).** Every factual claim on content pages traces to
a registered source record (`/lib/sources/registry.ts`, 19 entries) carrying
publisher, URL, jurisdiction, authority level, and last-verified date. All
registry URLs were fetched and read during research; none are assumed. Source
sections render on every content page via `SourceList`.

**Texas/Harris accuracy (D, E).** Deadline rule restated as a rule (May 15 or
30 days after notice delivery, whichever is later) from Tax Code § 41.44 and
the Comptroller. Comparable standards cite § 23.013. Homestead 10% cap cites
§ 23.23. Harris-specific facts limited to what HCAD's own pages state. No
invented fixed dates, no county hearing calendars restated.

**Content depth (F, G).** 16 Texas educational/process pages, evidence guide
with 10 sourced categories, Harris County hub, checker, FAQs. Each page states
user problem, limitations, and next actions; internal links are contextual and
non-repetitive.

**Tool logic (H).** Checker performs no valuation. Outputs are labeled
[user-provided] vs [calculated]; insufficient comparable data is stated rather
than simulated; DATA INTEGRATION NOT VERIFIED banner is explicit; nothing is
persisted.

**YMYL trust / privacy (K, M).** No savings claims, no testimonials, no
success statistics, no invented credentials. Contact page scoped honestly.
Privacy page claims no compliance mechanisms it has not implemented.

**Performance (O).** All pages static; first-load JS 103–109 kB; zero CSS
framework weight; no client components on editorial pages.

**County scalability (Q).** `COUNTIES` registry holds Dallas/Tarrant/Bexar/
Travis as `research-needed` records that can never render or reach the
sitemap until their status changes — the gate is in `getPublishedCounties()`.

## Disclosed gaps (not hidden)

| Severity | Location | Problem | Recommended fix |
|---|---|---|---|
| Medium | HCAD data integration | DATA INTEGRATION NOT VERIFIED. No automated HCAD lookup; terms/limits unexamined. | Audit HCAD public data downloads + any ArcGIS endpoints for terms, fields, refresh cadence before wiring ingestion. |
| Medium | checker (~$4,382-style risk) | $/sq ft flag could invite over-reading; labeled as screening but users may treat as valuation. | Add explicit "$X/sq ft is not an appraisal" inline wording on result; consider suppressing under 1,200 sq ft. |
| Low | SOAH/LBA pages | SOAH thresholds and LBA summarized from Comptroller prose; statute text (e.g., § 41.67, SOAH rules) not independently pulled. | Cite SOAH and statute pages directly before publishing final version. |
| Low | Structured data | Only Organization/WebSite JSON-LD; FAQPage markup deliberately omitted until FAQ visible-content review passes. | Add FAQPage schema on /faq after editorial review. |
| Low | OG images | OG image architecture referenced but no images exist in this phase (per no-CSS constraint). | Add static OG images in design phase. |
| Info | Versioned deadlines | Deadline records carry verification date, not tax-year-specific fixed dates, because sources state rules. | Re-verify each protest season; add fixed-date rows when a county publishes a dated calendar that is verified. |

## Explicitly NOT complete (per instructions)

- "DATA INTEGRATION NOT VERIFIED" — HCAD automated lookup.
- Pages exist only for verified content; no placeholder county pages are
  published or indexed. Dallas/Tarrant/Bexar/Travis are registry-only.
- No analytics/ads/consent mechanisms claimed or implemented.

# Dallas County — county-page research

Purpose: decide whether Dallas County clears the four-point bar for a county page
set, the same bar Harris County passed and Miami-Dade failed. Written before any
page exists, per `docs/expansion-roadmap.md` §5.

**Verdict: three of four criteria verified, one still open — so no Dallas page is
published yet.** The gap is narrow and specific, and it is stated at the bottom
rather than smoothed over.

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
| 3. The property search is linkable for the `DataIntegrationNotice` | **NOT VERIFIED** | The articles refer to a "Search Appraisal" function on DCAD's site, but the site itself does not yield readable text, so no stable search URL could be confirmed |
| 4. Local terminology is consistent with state law | **PASSED** | The county says "Notice of Appraised Value", "ARB", "chief appraiser", and names DCAD as the appraisal district — Texas statutory vocabulary, with uFile as the county's own filing-system name |

Two useful local facts came out of this that a Dallas page would carry and that
Harris does not: filing **opens** on April 15 rather than merely closing on May
15, and uFile is limited to **one protest per account**, so an owner with several
parcels has to file by mail or in person to have them heard together.

## 4. What is needed to finish

One thing: **a verifiable URL for DCAD's property search**, read from DCAD's own
site rather than inferred. Everything else for a Dallas page set is in hand — the
statewide rules (Tax Code §§ 23.23, 41.41, 41.44, 23.013) are already registered
and documented on the Texas pages, and the county's procedure and deadline are
now read.

A fetch that returns DCAD's body text — a different tool, a browser session, or
any route that renders client-side content — closes it in one step. Until then,
the county record stays `research-needed` in `lib/data/counties.ts`, with these
findings recorded in its notes, and nothing links to a Dallas page.

## 5. The remaining three placeholders

Tarrant, Bexar and Travis have had no research at all. They are still records
with empty `sources` and no `lastVerifiedDate`, and they exist only so the
architecture is extensible. The same four-point bar applies to each.

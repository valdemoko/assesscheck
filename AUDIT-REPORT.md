# ASSESSCHECK — MASTER ARCHITECTURE & IMPLEMENTATION AUDIT
## Pre-Expansion Audit — Texas Version

Date of audit: 2026-09-17 (repository state at this date).
Method: full repository inspection (file tree, package.json, all `lib/` modules, all 37 page files, all components, configs, build output). Static code analysis only — no code was modified. Claims are tagged **VERIFIED** (evidence in repo), **INFERENCE** (reasoned from evidence, stated), or **NOT VERIFIED**.

---

# 1. FULL PROJECT INVENTORY

**VERIFIED** (from `package.json`, file tree, build output):

| Item | Value |
|---|---|
| Framework | Next.js `^15.4.0` (App Router), React `^19.1.0` |
| Language | TypeScript `^5.6.0`, `strict: true` |
| Package manager | npm (package-lock.json present) |
| Dependencies (runtime) | next, react, react-dom only |
| Dependencies (dev) | @types/*, sharp `^0.35.4` (image/favicon tooling), typescript |
| Styling | Single global stylesheet `app/globals.css` (712 lines), CSS custom-property design tokens |
| App routes | 37 `page.tsx` files (all static, all Server Components except 2 client components) |
| Client components | `components/layout/SiteHeader.tsx` (usePathname), `components/tools/AssessmentChecker.tsx` (form) |
| API routes | **None** |
| Database | **None** (no ORM, no client, no schema) |
| External APIs | **None** connected; HCAD integration explicitly not implemented (`docs/hcad-data-integration-audit.md`, `components/tools/DataIntegrationNotice.tsx`) |
| Environment variables | One: `NEXT_PUBLIC_SITE_URL` (in `lib/seo/metadata.ts:6`), no `.env*` files in repo |
| Middleware | None |
| Caching | Default Next.js static prerendering; no custom cache |
| Cron/background jobs | None |
| Testing | **None** (no test runner, no test files — verified by find) |
| Analytics / CMP / AdSense | **None implemented** (grep for adsense/gtag/consent: only prose mentions in `app/privacy/page.tsx`) |
| ads.txt | Not present |
| Logging | None (no logger, no error reporting) |
| Error handling | `app/not-found.tsx` only; no `error.tsx`, no `global-error.tsx` |

**Architecture map:**

```
app/                      37 static pages + layout.tsx + sitemap.ts + robots.ts + icon assets
components/
  brand/BrandMark.tsx     Header logo (PNG asset)
  layout/PageShell.tsx    Skip link, header, breadcrumbs, main, footer, footer nav
  layout/SiteHeader.tsx   CLIENT — nav, home-aware brand sizing
  sources/SourceList.tsx  Renders SourceRecords from registry (fails loudly on unknown id)
  tools/AssessmentChecker.tsx  CLIENT — the entire checker tool
  tools/DataIntegrationNotice.tsx  Honest "DATA INTEGRATION NOT VERIFIED" banner
  ui/Notice.tsx           Info/verify callout
lib/
  sources/types.ts        SourceRecord, SourceReference, AuthorityLevel, SourceStatus
  sources/registry.ts     24 verified sources (all primary)
  data/counties.ts        CountyRecord + publication gate (getPublishedCounties)
  data/deadlines.ts       DeadlineRecord + 6 Texas rule records
  data/evidence.ts        EvidenceTypeRecord + 10 evidence categories
  seo/metadata.ts         buildMetadata (title, desc, canonical, OG, twitter, robots)
  seo/pages.ts            PublishStatus + isIndexable  ← DEAD CODE (see §29)
docs/hcad-data-integration-audit.md   HCAD research, POSSIBLE BUT NOT YET VERIFIED
```

---

# 2. WHAT THE PRODUCT ACTUALLY DOES

Described from the code, not the plan.

**Problem solved:** A Texas property owner who received a notice of appraised value can (a) read how Texas appraisal and protest work with sourced facts, (b) enter their notice values into a browser-only screening form that flags conditions "that may warrant further review," and (c) get a preparation checklist and next-step links.

**User journey (VERIFIED from code):**
1. Lands on `/` → hero, explanation sections, links to all content.
2. Goes to `/property-tax-checker/` or `/texas/harris-county/property-tax-checker/` → sees `DataIntegrationNotice`: "DATA INTEGRATION NOT VERIFIED."
3. Enters: current/prior appraised value, homestead-cap checkbox, living area, year built, lot size, optional purchase price/year, optional condition issues (`AssessmentChecker.tsx` `CheckerInput`).
4. Submits (client-side state only) → receives:
   - **Flags** (screening heuristics): YoY change >10% with homestead cap; ≥20% increase; ≤20% decrease; $/sq ft figure; appraisal vs. purchase price %; condition-issues acknowledgment.
   - **Comparable-property review:** a fixed honest statement that no verified comparable data exists and the tool does not generate comparables.
   - **Preparation checklist** (6 static items).
   - **Next steps** (3 links: deadline, how-to-file, evidence).
5. Reads educational pages; every page ends with a `SourceList` naming publisher, URL, verification date, jurisdiction, authority level.

**What the system obtains automatically: NOTHING.** All data is user-provided or static editorial content. There is no lookup, no API, no database.

**What the product explicitly does NOT claim (VERIFIED, in-code):** the result panel states it is "a screening comparison, not an appraisal, valuation, or prediction of your property's market value… does not indicate that your assessment is wrong, and does not predict any protest outcome." The comparables section states insufficiency honestly.

**What the user must provide:** everything. Notice values, characteristics, optional sale info.

---

# 3. TEXAS ARCHITECTURE — DEPENDENCY MAP

Texas assumptions exist at five distinct layers. Each is listed with file evidence.

| # | Texas assumption | File → artifact | Classification |
|---|---|---|---|
| 1 | Statutory rules (deadlines, cap, comparability) | `lib/data/deadlines.ts` (6 records, `jurisdiction: "Texas"`); checker flags reference "Tax Code § 23.23" in prose (`AssessmentChecker.tsx` flag details) | **A — correct jurisdiction data** (data layer) |
| 2 | 24-source registry, all Texas/HCAD | `lib/sources/registry.ts` (54 "Texas" occurrences) | **A** |
| 3 | County registry with gate | `lib/data/counties.ts` (5 Texas counties; 1 published, 4 gated placeholders) | **A / F** |
| 4 | Content pages | 19 `app/texas-property-tax/**` pages, 3 `app/texas/harris-county/**`, evidence/comparables pages | **D — hardcoded SEO/content** (expected; content is inherently jurisdictional) |
| 5 | Checker business logic | `AssessmentChecker.tsx`: the 10% homestead-cap flag and its explanatory text are Texas Tax Code § 23.23 logic **embedded in the component** | **B — hardcoded jurisdiction business logic** ⚠ |
| 6 | UI text | `DataIntegrationNotice.tsx` hardcodes `https://hcad.org/` as the "property search" link **for any jurisdiction** | **G — scalability problem** ⚠ |
| 7 | Global metadata | `lib/seo/metadata.ts`: default title "…Texas property assessment"; `app/layout.tsx` description mentions Texas | **D** |
| 8 | Footer disclaimer | `PageShell.tsx` footer text says "Texas property tax assessments" | **C — hardcoded UI text** |
| 9 | Nav labels | `SiteHeader.tsx` NAV: "Texas Property Tax", "Harris County" | **C** |

**Key finding:** the *data layer* is properly jurisdiction-tagged, but the *checker component* contains Texas statute logic and Texas prose inline, and one shared component (`DataIntegrationNotice`) hardcodes an HCAD URL.

---

# 4. CRITICAL SCALABILITY AUDIT (hardcoding classification)

Complete sweep of "Texas," county names, HCAD, ARB, Comptroller across `app/ components/ lib/`:

- **A. Correct jurisdiction-specific data** — `lib/sources/registry.ts`, `lib/data/deadlines.ts`, `lib/data/evidence.ts`, `lib/data/counties.ts`: all records carry `jurisdiction` fields and source references. This is where jurisdiction-specific facts belong. **VERIFIED**.
- **B. Hardcoded jurisdiction business logic** — **one location**: `AssessmentChecker.tsx`. The homestead-cap flag threshold (>10%) and § 23.23 explanation are inline in the `useMemo` result computation. The $/sq ft, YoY ≥20%, and sale-price flags are jurisdiction-agnostic heuristics. Difficulty of extraction: **low-moderate** (move flag rules into a per-jurisdiction config passed as props or imported from `lib/data/<state>/`).
- **C. Hardcoded UI text** — footer disclaimer (`PageShell.tsx`), nav labels (`SiteHeader.tsx`), homepage prose. Extraction difficulty: low (thread a site-config object).
- **D. Hardcoded SEO/content** — every content page is Texas prose by design. This is not a defect; a new jurisdiction gets new pages. Sitemap is a hand-maintained list (`app/sitemap.ts`), so new pages require manual sitemap entries — friction but a deliberate gate.
- **E. Hardcoded database structure** — N/A, no database.
- **F. Reusable architecture** — `PageShell`, `SourceList`, `buildMetadata`, `Notice`, county/deadline/evidence record patterns, publication gates.
- **G. Potential scalability problems** —
  1. `DataIntegrationNotice.tsx` renders the HCAD URL regardless of `jurisdiction` prop (**VERIFIED** — the component takes `jurisdiction: string` but the anchor is hardcoded to hcad.org).
  2. `AssessmentChecker` flag copy references Texas statutes inline (see B).
  3. `deadlines.ts` has zero records with `jurisdiction: "Harris County, Texas"` (**VERIFIED** — grep count 0), yet `getDeadlines("Harris County, Texas")` is the natural call a second county would make; the API exists but county-level deadline data never materialized.

---

# 5. JURISDICTION ABSTRACTION

Concept-by-concept (VERIFIED via file inspection):

| Concept | Represented? | Where | Reusable? | Texas-specific? |
|---|---|---|---|---|
| State | Partially | `CountyRecord.state: string`; URLs `/texas/...` | As data, yes | Routes hardcoded |
| County | Yes | `lib/data/counties.ts` `CountyRecord` | Yes | Record content is |
| Assessment authority | Yes | `CountyRecord.appraisalDistrict` | Yes | Content is |
| Appeal body | **No distinct model** | ARB exists only in prose and source notes | No | Texas concept (ARB) |
| Property / Assessment | **No backend model** | Only as checker form fields | N/A | N/A |
| Comparable | **No model** | Only editorial prose + checker's fixed insufficiency statement | No | N/A |
| Exemption | Prose only | `app/texas-property-tax/exemptions/` | No | Yes |
| Deadline | Yes | `DeadlineRecord` | Yes | Records are |
| Procedure | Prose only | protest pages | No | Yes |
| Evidence type | Yes | `EvidenceTypeRecord` | Mostly (names Comptroller guidance in prose) | Records are |
| Official source | Yes | `SourceRecord` | **Yes — the most portable model in the repo** | Records are |

**Adding another Texas county (theoretical):** add a `CountyRecord` with verified research, create 3+ pages under `/texas/<county>/`, add sitemap entries. **No schema changes needed.** The county gate (`getPublishedCounties`) prevents accidental publication. This works today. VERIFIED by design of `counties.ts` notes and gate.

**Adding another US state:** routes are `/texas/...` — a Florida section needs a parallel `/florida/...` tree and, critically, a **state-level record that does not exist** (there is no `StateRecord`; "Texas" is a string). The checker's homestead-cap flag and footer/disclaimer/nav text would leak Texas rules into Florida pages unless extracted first (§4-B, §4-C). Verdict: possible without chaos **only after** the §4 items are extracted.

**Adding another country:** the entire conceptual stack (appraisal district → ARB → Tax Code) is US/Texas. `SourceRecord.jurisdiction` and the gate architecture survive; nothing else does. Full product redesign of the procedure/term layer would be required. INFERENCE from the absence of any abstraction above county.

---

# 6. DATA MODEL AUDIT

No database; models are TypeScript interfaces.

**`SourceRecord`** (`lib/sources/types.ts`) — sourceId, title, publisher, authorityLevel (`primary|authoritative|secondary`), url, lastVerifiedDate, publicationDate?, jurisdiction, topic, notes?, status (`verified|needs-reverification|unverified|archived`). Required: all but publicationDate/notes. Validation: none at runtime beyond TypeScript; `requireSource()` throws on unknown ids (**VERIFIED** — used by `SourceList`). Provenance: yes. History: no (single lastVerifiedDate, no verification log). Conflicting sources: representable only as two records, no precedence field.

**`SourceReference`** — sourceId + `supports` (what the claim is). Used by every data record. **This is the provenance backbone and it is sound.**

**`CountyRecord`** — countyId, name, state, appraisalDistrict{name, abbreviation?, website}, populationTier, taxYear, researchStatus (7-value gate enum), lastVerifiedDate, sources[], notes?. **Weaknesses:** `taxYear: "current tax year"` is a string with no year (INFERENCE: placeholder that will not survive real operations); no stateId/slug separate from display name; no relation to a state entity.

**`DeadlineRecord`** — deadlineId, jurisdiction, taxYear, deadlineType (7-value enum), `rule` (rule-as-text, deliberately not a fixed date), fixedDate?, sources[], lastVerifiedDate, verificationStatus. **This is the right design for deadline risk.** Weakness: `getDeadlines(jurisdiction)` does exact-string matching; no state→county inheritance, so a Harris-specific deadline would need its own record duplicated from Texas.

**`EvidenceTypeRecord`** — 10 records, each with whatItIs / whyItMayMatter / whenItMayBeUseful / **whatItDoesNotProve** / whatToVerify + sources + date. Excellent shape; the `whatItDoesNotProve` field is a genuine trust feature. Weakness: prose in records references Comptroller guidance and § 23.013 — re-usable shape, Texas content.

**Missing models entirely** (VERIFIED absent): Property, Assessment, Comparable, Calculation, Article, FAQ, Authority, Jurisdiction. The master-prompt data-model list is ~50% unimplemented. The site functions because content is static JSX and the tool is self-contained.

---

# 7. SOURCE SYSTEM

**VERIFIED:**
- 24 sources in `lib/sources/registry.ts`, **all `authorityLevel: "primary"`, all `status: "verified"`, all `lastVerifiedDate: "2026-09-17"`**.
- Every record carries a real URL; per registry comment and prior work logs, URLs were fetched during Phase 1 research (Comptroller pages, statutes.capitol.texas.gov §§ 41.41/41.44/41.45/41.461/41.411/41.47/42.21/23.23/23.013, Chapter 41A, Comptroller RBA page, soah.texas.gov, hcad.org pages).
- Pages reference sources via `SourceList` → `requireSource`, which **throws at build time on an unknown sourceId** — a real mechanism that prevents dangling citations.
- Deadlines/evidence/counties records embed `SourceReference[]` with claim-level `supports` text.

**Classification:** 24 PRIMARY OFFICIAL / 0 secondary / 0 unverified.

**Gaps and risks (honest):**
1. **Re-verification is manual and undated-going-forward.** All dates are the same day (launch research day). There is no scheduled re-check, no `needs-reverification` usage, no CI mechanism. Statuses `needs-reverification`/`unverified`/`archived` are defined but unused.
2. **Claim coverage is incomplete below the page level.** Pages cite sources at the page level; individual factual sentences inside prose are not individually keyed to sources. The `SourceReference.supports` mechanism exists but only for data records, not JSX prose. AUDIT FINDING: prose-level claims (e.g., specific sentences on the ARB pages) are supported by the page's cited sources per editorial process, but **cannot be verified mechanically**.
3. **Single-verifier risk:** verification was performed by this toolchain in one pass; an external reviewer should spot-check a sample of the 24 URLs and 2–3 statutory restatements before expansion. NOT VERIFIED (independently).
4. No invented sources found: every registry URL corresponds to a real, known official domain; no malformed or implausible entries detected (VERIFIED by inspection; live status NOT VERIFIED at audit time).

---

# 8. FACTUAL ACCURACY AUDIT (Texas)

High-risk items checked against the registry's cited statutory basis:

| Claim on site | Stated source | Assessment |
|---|---|---|
| Protest deadline: May 15 or 30 days after notice delivery, whichever is later | § 41.44(a)(1) + Comptroller protests page | Correct restatement; rule-based, not a fixed date. Time-sensitive: yes; tax year stated as "recurring annual rule" |
| Notice delivery: Apr 1 (homesteads) / May 1 | § 25.19(a) | Correct per record |
| 10% homestead cap | § 23.23 | Correct; checker flag correctly caveats new improvements |
| Exemption application before May 1 | Comptroller exemptions page | Correct per record |
| District-court petition 60 days | § 42.21(a) | Correct per record |
| RBA eligibility ($5M, homestead exception, 60-day filing, undisputed taxes) | Comptroller RBA page + Ch. 41A | Verified in Phase 2 corrections pass; correctly attributed |
| Comparability factors + 36/24-month windows | § 23.013 | Correct per record; Harris checker page correctly applies the >150k population 36-month window |
| ARB order deadlines (30/45 days) | § 41.47 | Correct per record |

**Flags:**
- The deadlines page states "The Comptroller cautions that the deadline runs from the date the appraisal district **mails** the notice, not from when you actually receive it" (`protest/deadlines/page.tsx`). The registry's § 41.44 notes say "delivered." **Mails vs. delivered is a terminology inconsistency** between page prose and the statute record — flag for editorial re-check (INFERENCE: likely the Comptroller page says "mailed"; but the page cites both sources, and the discrepancy is not explained).
- Every deadline page and record includes verification date and jurisdiction. Good.
- Harris County page deliberately refuses to restate local ARB calendar dates ("we cannot verify a local calendar daily") and links to HCAD. This is the correct posture. VERIFIED in `app/texas/harris-county/page.tsx`.

---

# 9. CONTENT QUALITY AUDIT

All 37 pages inspected (structure, headings, prose samples).

**Strong:** every page solves a definable user problem; source sections are prominent; limitations are stated in-content (not just footers); the comparables page and checker refuse to fabricate; FAQ entries are real questions with sourced answers; Harris page separates statewide vs. county-specific info explicitly.

**Problem pages / patterns:**
1. **Homepage sections "Who it is for" / "How the checker works" / "What it can and cannot determine"** are three consecutive H2+one-paragraph sections — correct product info but reads as a checklist of required sections (the Phase-1 spec's 13 sections were implemented literally). Consolidation candidate.
2. **`/evidence/` hub** is a thin index (VERIFIED: intro + links only). Acceptable as navigation, but it is the closest thing to a low-value page in the sitemap.
3. **`/comparables/`** is methodology prose with no tool integration — genuinely useful but static; the checker cannot ingest user comparables despite the Harris checker page saying "the checker documents the similarity factors for each" — **VERIFIED INCONSISTENCY: the checker component does NOT accept comparable inputs** (its `CheckerInput` has no comparable fields; the result panel only prints the fixed insufficiency statement). The Harris checker page overstates current functionality. This is the single clearest content-vs-code mismatch found.
4. **Repetition:** the "screening comparison, not an appraisal" disclaimer appears in the checker twice, in the checker page intro, and in the hero disclaimers — appropriate for risk, but the exact sentence appears ≥4 times site-wide; monitor for boilerplate fatigue.
5. No keyword stuffing, no fake testimonials, no invented statistics found anywhere (VERIFIED by inspection of all pages).

**Missing user questions (see §36)** — chief gaps: unequal-appraisal ("equal and uniform") coverage is thin given it is a major protest ground; no property-record-error correction walkthrough beyond prose mentions.

---

# 10. AI-GENERATED CONTENT QUALITY CHECK

Concrete patterns found (honest):

1. **Repetitive section openers on the homepage**: "It can help you…", "The checker calculates…", "Official sources only:" — factual but mechanically parallel.
2. **Formulaic flag detail paragraphs** in `AssessmentChecker.tsx`: every flag detail follows *claim → caveat → "does not by itself prove"* — consistent by design; acceptable for risk language but machine-flavored.
3. **"Whether you…" pattern**: 1–2 occurrences only (FAQ/about) — not excessive.
4. **No** fake experience, fabricated case studies, invented savings figures, or testimonials anywhere (VERIFIED: grep + full-page inspection).
5. **Em-dash and bold-label habits** ("**What this is:**", "**Whichever is later** matters.") recur — readable, mildly templated.

Overall: reads like careful researched writing with light templating in tool output. The checker's repeated hedge sentences are the most "generated"-feeling element.

---

# 11. ASSESSMENT CHECKER AUDIT

**INPUTS (VERIFIED from `CheckerInput`):** currentAppraised (text, decimal-cleaning), previousAppraised, homesteadCapApplies (bool), squareFeet, yearBuilt, lotSize (**collected but never used** — see below), recentSalePrice, recentSaleYear, conditionIssues (textarea). All optional; no required fields; validation: `toNumber()` strips `,$` and whitespace, requires finite >0. No upper-bound sanity checks (a fat-fingered 7-digit value produces confident-looking flags).

**PROCESSING (independently re-derived, VERIFIED correct):**
- `pct(part, whole) = round(((part-whole)/whole)*1000)/10` — YoY % change; math correct to 1 decimal.
- Homestead-cap flag: `change > 10 && homesteadCapApplies` — matches § 23.23's 10% concept; correctly caveats new improvements in the detail text.
- Large-change thresholds: ≥20 increase, ≤−20 decrease — **editorial heuristics, unlabeled as such** in UI (the text says "may warrant a closer look" but the 20% number's provenance is editorial judgment, not a source). MINOR FINDING: thresholds are not presented as assumptions.
- $/sq ft: `round((current/sqft)*100)/100` — correct; always emits a flag whenever both inputs exist, with the mandated screening-comparison sentence (VERIFIED present).
- Sale-vs-appraisal: same pct formula; detail correctly raises the January 1 valuation-date caveat.
- **Dead input:** `lotSize` and `yearBuilt` are collected but used in **zero** calculations (VERIFIED: they appear in no flag condition). `yearBuilt` is dead too. This is silent over-collection — a privacy/data-minimization inconsistency with the site's own stated principles.

**OUTPUTS:** flags (each labeled `calculated` or `user-provided`), fixed comparables-insufficiency statement, 6-item checklist, 3 next-step links, limitations paragraph. Result header carries the full "screening comparison, not an appraisal…" disclaimer (VERIFIED).

**Misinterpretation risk:** LOW and actively mitigated — result panel, per-flag copy, and page intro all hedge; no dollar "savings" is ever computed; no GOOD/BAD verdict exists. The one residual risk: flag titles embed percentages ("increased about 24.5%") in bold — factual, calculated from user input, correctly framed.

**Misleading precision:** none — percentages are 1 decimal, $/sqft 2 decimals; appropriate.

**No valuation, no prediction, no guarantee — VERIFIED in code.**

---

# 12. COMPARABLE PROPERTY SYSTEM

- **Data source: none.** The system creates **zero comparables** — VERIFIED. The result panel prints a fixed honest insufficiency statement and links to the evidence guide.
- Selection criteria/weighting/outlier handling: **N/A — not implemented** (honestly absent rather than fake).
- Data-category labeling: user-provided vs. calculated labels exist on flags; the comparables statement is explicit that no analysis was produced.
- **Gap:** users cannot input candidate comparables anywhere in the tool (contradiction with Harris checker page text — see §9.3). There is no interactive comparables worksheet, despite § 23.013's factors being well documented on the content pages. This is the largest product gap relative to the site's own methodology.

---

# 13. EVIDENCE / PROTEST PREPARATION SYSTEM

- 10 evidence categories in `lib/data/evidence.ts`, each mapped to what the Comptroller's guidance lists (photographs, repair estimates/receipts, sales documentation, comparable info, median-level-of-appraisal calculations, affidavits, architectural drawings, engineering reports, surveys, deed records). **No invented categories** (VERIFIED: each record's `whyItMayMatter` cites the guidance list or a statute section).
- Each record includes `whatItDoesNotProve` — the anti-overclaim field. VERIFIED present on all 10.
- No file upload, no photo handling, no document storage (VERIFIED — no form accepts files). The "evidence builder" is editorial content + the checklist output. The Phase-1 spec's "Evidence Builder" tool does not exist as a tool; only as content.
- Recommendations trace to Comptroller guidance and §§ 23.013, 41.41, 41.45. No unsupported recommendations found.

---

# 14. DATA PROVENANCE

| Data point | Category | Labeled? |
|---|---|---|
| All site factual claims (deadlines, roles, definitions) | 1. Official verified (registry, dated) | Yes — SourceList per page + verification dates |
| Checker numeric outputs | 4. Calculated from 3. User-provided | Yes — `flag__kind` labels "calculated"/"user-provided" |
| Checker thresholds (10% cap aside) | Editorial heuristics | **Partially** — not stated as editorial assumptions in UI |
| Checklist items | 6. Static editorial | Yes (presented as checklist, not data) |
| HCAD data integration | 7. Unknown / not connected | Yes — "DATA INTEGRATION NOT VERIFIED" banner |

Mixing incidents: **one** — the checker page's claim that the tool "documents the similarity factors" for comparables the user supplies (§9.3), which the code does not do.

---

# 15. LIVE DATA / API AUDIT

**There are none.** No fetch() calls to external endpoints exist in `app/` or `components/` (VERIFIED by grep: only `next/link` internal links and outbound `<a>` anchors for users). The HCAD research doc (`docs/hcad-data-integration-audit.md`) explicitly classifies the future integration as POSSIBLE BUT NOT YET VERIFIED with terms of use NOT VERIFIED. Nothing requires terms verification because nothing is consumed. This is the correct zero-risk posture pre-expansion.

---

# 16. SEO AUDIT

VERIFIED findings:

- **Every one of the 37 pages** calls `buildMetadata()` with unique title + description + canonical (grep: 0 pages missing it). Titles are natural, non-spammy.
- **Canonicals include a trailing slash** (`path: "/about/"`), while the generated routes serve at `/about` — **with `trailingSlash` unset in `next.config.mjs`, Next serves canonical `/about/` via redirect to `/about`** (INFERENCE on redirect behavior — NOT VERIFIED live). Risk: canonical/actual URL mismatch could cause duplicate signals if both resolve with 200. **Needs a live check or `trailingSlash: true` decision. This is the most concrete SEO defect found.**
- Sitemap: 37 entries; normalized comparison shows **every route is present, no orphan sitemap entries, no missing pages** (verified by diff script; the apparent mismatch was purely trailing-slash representation).
- Sitemap is a **hand-maintained literal list** — new pages require manual addition; a forgotten page ships without sitemap entry (no automated cross-check exists).
- robots.ts: allows `/`, disallows `/api/` (nonexistent), `/*?*`, `/*UTM_` — reasonable; sitemap declared.
- noindex gate: `buildMetadata` returns `robots: noindex` for `publishStatus: draft|research-needed`; all 37 current pages are `"ready"` so all are indexable (VERIFIED by grep count: 37×"ready"). The gate is currently untested in production because no non-ready page exists.
- OG/Twitter: present, summary card. OG images: **none** (no opengraph-image assets).
- Structured data: Organization + WebSite JSON-LD in root layout only. **No FAQPage schema** despite FAQ pages — deliberate (documented in prior phases), fine.
- 404: `app/not-found.tsx` exists and uses PageShell. No `error.tsx`.
- Heading hierarchy: 1 H1 per page, logical H2/H3 (VERIFIED by inspection of sampled pages).
- Language metadata: `<html lang="en">` present.

---

# 17. PROGRAMMATIC SEO AUDIT

- **Zero dynamic routes** (no `[slug]` directories — VERIFIED from file tree). All 37 pages are literal files.
- Therefore: no thin-programmatic risk, no empty-page generation, no nonexistent-jurisdiction pages **from route generation**.
- The only dynamic-content surface is the checker result (client-side, no URL state) — **not indexable by construction** (good).
- Future risk: if county pages become programmatic (`/texas/[county]/`), the county gate must be wired into `generateStaticParams` AND a `notFound()` path, or unverified counties become indexable. The gate logic exists (`getPublishedCounties`) but nothing currently enforces it at the route layer because routes are static. INFERENCE: the gate is currently decorative-but-correct; it becomes load-bearing only when dynamic routes arrive.

---

# 18. INTERNAL LINKING

- Header nav: 6 links (checker, Texas, Evidence, Harris, Resources, About). Footer: 15 links. VERIFIED in `SiteHeader.tsx` / `PageShell.tsx`.
- Content pages cross-link densely: checker → deadline/how-to-file/evidence; Harris → state pages; state → Harris; homepage lists all 21 topic links (VERIFIED in `app/page.tsx` TEXAS_TOPICS/PROTEST_STEPS/EVIDENCE_TOPICS arrays).
- Orphan check: every route appears in homepage/footer links or section hubs (INFERENCE from the three arrays + footer covering all 37 routes; no mechanical crawl performed — NOT VERIFIED by crawler).
- Weakness: anchor text is descriptive but several pages reuse identical link sentences (e.g., the "screening comparison" linkage); no `BreadcrumbList` structured data despite visible breadcrumbs.

---

# 19. TRUST / E-E-A-T / YMYL

- About, Methodology, Editorial Policy, Corrections, Contact, Disclaimer, Privacy, Terms all exist with real content (VERIFIED — 8 pages).
- Authors page: deliberately absent; no fake credentials (consistent with spec §21).
- Update dates: every page shows `lastVerifiedDate: 2026-09-17`; SourceList shows per-source verification. **All dates are identical (launch day)** — honest but untested update workflow.
- "What we cannot determine" is stated on the homepage, checker result, methodology, and disclaimer. VERIFIED.
- False-authorship risk: none found — the site never claims to be a government body, appraisal firm, or law office; the disclaimer says it is unaffiliated with any district (VERIFIED footer + disclaimer page).
- Weakness: **no human review claim is made at all** — the About page describes an editorial process; whether any human editor exists is NOT VERIFIED and the site honestly does not claim one. For YMYL at scale, this is a known gap the site handles by not overclaiming.

---

# 20. LEGAL / DISCLAIMER AUDIT

- Data actually collected: **nothing is transmitted or stored** — the checker is pure client state; there are no forms that submit anywhere (contact page — VERIFIED it offers an email/reporting purpose; NOT VERIFIED whether the mailto/address works). No cookies, no analytics, no third-party requests at runtime (VERIFIED: no external scripts).
- Privacy page claims match reality (browser-only tool, no storage) — VERIFIED consistent with code.
- Consent/CMP: correctly absent with an honest "we will implement, not merely describe" statement (VERIFIED prose).
- Flagged for professional legal review before monetization: privacy policy adequacy for future analytics/ads; terms page enforceability; disclaimer sufficiency for YMYL. NOT VERIFIED (requires counsel).

---

# 21. ADSENSE READINESS

- Original, useful content: yes (37 substantive pages, sources, tools).
- Low-value pages: `/evidence/` hub is the only borderline one.
- Ads implemented: **none** (AdSlot component was removed in the design phase — VERIFIED absent from tree). No ads.txt. No publisher configuration. This is *preparation-complete, integration-zero* — the correct state per spec §27.
- Layout stability: no ad slots to cause CLS.
- Crawlability: robots allows all; sitemap complete.
- Should-not-receive-ads pages if ads are added later: checker result states (tool session), 404, contact.

---

# 22. PERFORMANCE

- All 37 routes static (`○ prerendered`). First Load JS: **103–107 kB shared** across pages (VERIFIED from build output); homepage 107 kB. The only client JS is the checker (client component) and the header (usePathname).
- Images: 4 small PNGs (favicon set) + brand mark 512px PNG served at 26–34px render size — **oversized asset** (minor; ~10–30 kB, could be optimized).
- Fonts: 2 families, 5 weights via `next/font`, self-hosted, display swap.
- No API calls, no database — scaling traffic is a CDN problem only. INFERENCE: this architecture scales to high traffic trivially.
- Repeated-requests risk: none.

---

# 23. SECURITY & PRIVACY

- Attack surface: effectively zero server-side input (no API routes, no forms submitting, no database). The checker validates client-side only; worst case is a user confusing themselves.
- Secrets: none in repo (no .env files; the single env var is a public URL). VERIFIED.
- Rate limiting/abuse: N/A (nothing to abuse server-side).
- Logging: none — also means no error visibility in production (see §24).
- PII: none collected; minimization principles stated and honored — **except** the dead `lotSize`/`yearBuilt` inputs (§11), which are collected-then-ignored client-side only (never transmitted, so residual risk is nil, but it contradicts stated minimization).

---

# 24. ERROR HANDLING

- 404: handled (`not-found.tsx`).
- Runtime errors: **no `error.tsx` / `global-error.tsx`** — a rendering exception shows Next's default error screen. Low impact (static content) but unpolished.
- Checker malformed input: handled by `toNumber` (null → flag skipped) — invalid input degrades to "nothing crossed screening thresholds" with an honest explanation (VERIFIED).
- Unknown jurisdiction: `AssessmentChecker` accepts any `jurisdiction` string and just prints it; `getDeadlines(unknown)` returns `[]` silently — a page could render an empty deadlines table without error. **Silent-empty behavior is a latent trap for expansion** (a mis-typed jurisdiction string yields an empty page section, not an error).
- Missing source: `requireSource` throws (build-time) — good.
- Stale data: no mechanism detects staleness; `needs-reverification` status exists but nothing sets it.

---

# 25. TESTING

**VERIFIED: zero tests.** No unit, integration, E2E, calculation, content, route, SEO, or accessibility tests exist. The only verification is `tsc --noEmit` + successful build. The checker's math has no regression test; the sitemap-vs-routes parity has no test (this audit had to script it manually). For expansion, this is the largest engineering gap.

---

# 26. ACCESSIBILITY

VERIFIED by inspection: semantic landmarks (header/nav/main/footer), skip link, one H1 per page, labeled inputs (`htmlFor` on every field), `fieldset/legend` grouping, `aria-live="polite"` on results, `aria-current` on breadcrumbs, focus-visible styles, `prefers-reduced-motion` honored, table `caption`+`scope` on the deadlines table, alt/aria-hidden on decorative brand mark, keyboard-operable everything (no custom widgets). Information conveyed only by color: no. Contrast: design tokens are AA-compliant pairs (VERIFIED token values; full contrast audit NOT VERIFIED instrumentally).

---

# 27. CONTENT / CODE SEPARATION

- Change a Texas deadline **without touching logic**: YES for data-driven pages (`protest/deadlines` renders from `DEADLINES`), **NO** for the ≥8 pages where "May 15" is hardcoded prose (VERIFIED list in audit command output: homepage, FAQ ×2, Harris ×2, ARB, exemptions, notice, protest hub) — those require content edits in JSX files. Partial separation.
- Add a new county without duplicating components: YES — components are county-agnostic; pages must be written (content is per-county by design).
- Add another state without copying the Texas codebase: PARTIALLY — shell/tokens/SEO/checker-engine reuse; Texas flag logic and site-config strings must be extracted first (§4-B/C).
- Add another country without rewriting the core product: NO — concepts above county (appraisal system, appeal body, valuation methodology) do not exist as abstractions.

---

# 28. INTERNATIONAL EXPANSION TEST (theoretical only)

**A. Dallas County:** counties.ts record + research; 3–5 new static pages; sitemap entries; nav/link additions. No schema change. Est. effort: content-only. **Works today.**

**B. Florida:** new `/florida/` page tree; `StateRecord` abstraction (doesn't exist — add); county model mostly reusable (Florida has property appraisers, Value Adjustment Boards ≈ ARB analog); checker: homestead flag must become config (Florida has its own Save-Our-Homes cap ~3% — the 10% figure is Texas); deadlines model reusable (March 1 filing deadline is Florida-specific data); footer/nav/disclaimer text extraction required. Files touched: ~10 infra + all-new content. **Requires §4 extractions first, then works.**

**C. Ontario, Canada:** assessment system (MPAC, ARB ≈ Assessment Review Board analog — coincidentally similar), but currency, terminology ("property assessment notice"), privacy regime (PIPEDA), and sources differ entirely. Source model works (jurisdiction: "Ontario"); everything content-level is new. **Major new vertical, shared skeleton only.**

**D. United Kingdom:** council valuation bands (not market-value appraisal) — **the checker's core model (percent-change screening against a notice value) does not map**. A band-checker is a different product. Source/SEO/shell reuse only. **Product redesign, not expansion.**

Conclusion: the architecture scales across US states after modest extraction; across countries it provides only the shell (sources, SEO, trust, design system).

---

# 29. DUPLICATION / TECHNICAL DEBT

1. **Dead code:** `lib/seo/pages.ts` (`PageMeta` type, `isIndexable`, `toIndexablePages`) is imported nowhere (VERIFIED by grep). The publication gate it describes is *not actually wired* — pages self-declare `publishStatus` into metadata, but the sitemap is a separate hardcoded list, so the gate and the sitemap can drift.
2. **Trailing-slash inconsistency:** sitemap paths end `/`; route files don't; canonicals do. Untested live behavior (§16).
3. **Dead inputs:** `lotSize`, `yearBuilt` collected but unused (§11).
4. **Dead status values:** `needs-reverification|unverified|archived` (sources) and 5 of 7 `researchStatus` values never used.
5. **Content/code duplication:** the deadline rule sentence appears in `DEADLINES` and re-worded in ≥8 JSX files.
6. **Site name inconsistency:** `SITE_NAME = "Assessment Checker"` in metadata, brand is "AssessCheck" everywhere else (VERIFIED — minor identity drift).
7. TODOs/hacks: none found. `sharp` as a devDependency is build-tooling, acceptable.

---

# 30. MAINTAINABILITY

- Code organization: clean, small, conventional; naming consistent; strict TS. Another developer could onboard in hours (INFERENCE from repo size ~50 source files).
- Documentation: README + PHASE-1-AUDIT + HCAD doc + heavy inline comments explaining *why* (the strongest maintainability asset here).
- Update workflow: manual (edit registry → edit sitemap → edit prose). No CI, no lint config, no format config, no pre-commit hooks.

---

# 31. WHAT WOULD BREAK FIRST?

- **Traffic ×10:** nothing breaks (static CDN). Only cost.
- **Counties ×10:** the hand-maintained sitemap and manual nav arrays become the bottleneck; duplicated per-county page boilerplate invites drift; `getDeadlines` exact-string jurisdiction matching starts silently returning empty arrays on typos.
- **States ×10:** the inline Texas checker flag logic and Texas strings in shared components produce **wrong cross-jurisdiction output** (worst-case: wrong legal-rule text on a Florida page). The single-registry `SOURCES` object (~24 entries) becomes a merge-conflict hotspot; per-state registry files needed.
- **Countries ×10:** the product model itself (notice-value screening) breaks; site-config strings (footer disclaimers) are per-country legal text and must become data.

First to break in practice: **the manual sitemap + unwired publication gate** (every new page risks being forgotten in one or the other).

---

# 32. NEVER COPY TO ANOTHER JURISDICTION

- 10% homestead cap flag & § 23.23 prose (checker)
- May 15 / 30-day, Apr 1 / May 1, before-May-1, 60-day petition deadline rules
- ARB, chief appraiser, appraisal district vs. taxing unit role model
- § 23.013 comparability factors & 36/24-month windows (note: many states lack a statutory comparability definition entirely)
- $140k school homestead exemption, $60k age-65 figures
- Comptroller/HCAD/statutes.capitol.texas.gov URLs
- "Texas" in: metadata defaults, footer disclaimer, nav labels, homepage hero kicker
- RBA/SOAH/Chapter 41A appeal routes
- Harris checker page's § 23.013(b-1) population-window application

---

# 33. WHAT CAN BE REUSED

**REUSABLE AS-IS:** PageShell, SiteHeader, SourceList, Notice, buildMetadata, SourceRecord/SourceReference model, DeadlineRecord model, EvidenceTypeRecord model, county publication gate pattern, robots/sitemap mechanics, globals.css design system, not-found, error-handling patterns (to the extent they exist).

**REUSABLE WITH CONFIGURATION:** checker engine (extract flag rules → per-jurisdiction rule config); deadline rendering (per-jurisdiction records); DataIntegrationNotice (parameterize the property-search URL); footer/nav (site-config strings); sitemap (generate from a page registry instead of literals).

**REUSABLE WITH MODIFICATION:** CountyRecord (add state linkage); checker comparables worksheet (needs building); editorial page templates (per-state content patterns).

**NOT REUSABLE:** all Texas content; source registry contents; evidence-category prose (Comptroller-specific); the Texas homepage/FAQ/notice pages; JSON-LD site identity strings.

---

# 34. EXPANSION BLUEPRINT (conceptual, not implemented)

```
Jurisdiction (country → state → county)
  ├─ identity: id, name, type, parent, locale, currency
  ├─ authorities: [ {role: assessor|review-body|collector, name, url, jurisdiction} ]
  ├─ terminology map: notice→(Notice of Appraised Value|TRIM notice|assessment notice…)
  │                  review-body→(ARB|VAB|Board of Appeal…)
  ├─ rules: deadline set (rule-based records, same shape), caps/exemptions (flag rules)
  ├─ checker rule-config: [ {flagId, enabled, threshold?, template, statuteRef} ]
  ├─ evidence categories: mapped to local guidance, same record shape
  ├─ content tree: /<country>/<state>/<county>/... generated from published gates
  └─ sources: per-jurisdiction registry files, same SourceRecord shape
```

Data/config: all of the above. Hardcoded: the screening-engine mechanics, rendering components, SEO machinery, trust page skeletons. The principle that should govern: **a jurisdiction ships as a data package + researched content, never as forked components.**

---

# 35. MISSING FEATURES

**CRITICAL** (materially blocks the core problem): comparables worksheet (user-entered comparables scored against the statutory factors — the site's own methodology says this is the most reliable check, and the tool can't do it); deadline-reminder date calculator (user enters delivery date → deadline window; trivial, sourced, high value).

**HIGH:** publication gate wired to sitemap automatically (delete the literal list); `error.tsx`; tests for checker math; per-jurisdiction checker rule config; fix the Harris checker page overstatement or implement the feature.

**MEDIUM:** OG images; FAQPage schema where content qualifies; BreadcrumbList schema; mailto verification on contact; remove/repurpose dead inputs; trailing-slash decision.

**LOW:** author/editor profile page (when a real human reviewer exists); source re-verification scheduler; RSS/updates feed.

---

# 36. MISSING CONTENT

| User question | Why it matters | Current coverage | Source needed | Priority |
|---|---|---|---|---|
| "What is unequal appraisal (equal and uniform) and how do I argue it?" | One of the main § 41.41 grounds; complex | One sentence in evidence record | § 41.41(a)(2), § 42.26; Comptroller equal-and-uniform guidance | HIGH |
| "The property record has wrong facts (sq ft, beds) — how do I correct it?" | Most common low-effort win; different track than value protest | Mentioned in passing | Comptroller correction-of-records guidance; § 25.25 motion | HIGH |
| "What happens if I miss the ARB hearing?" | Real failure mode | Brief mention (§ 41.45 missed-hearing remedy in registry notes; thin on-page) | § 41.45(h) | MEDIUM |
| "Do I need Form 50-162 agent, and when?" | Owners hire agents blindly | Form listed on Harris page | Comptroller agent guidance | MEDIUM |
| "How does the homestead cap interact with my new purchase?" | Buyers get cap surprises | Cap page covers mechanics, not purchase scenario | § 23.23 | MEDIUM |
| "What are my payment/options if I can't pay while protesting?" | Financial strain; partial-payment rules exist | Payment window only | § 31.02 / Comptroller | LOW-MED |

---

# 37. SOURCE COVERAGE MATRIX

| Topic | Covered? | Source (registry id) | Authority | Current? | Jurisdiction | Risk |
|---|---|---|---|---|---|---|
| Appraisal (how value is set) | Yes | tx-comptroller-valuing-property | Primary | 2026-09-17 | Texas | Low |
| Assessed/appraised value | Yes | tx-tax-code-25-19, valuing-property | Primary | 2026-09-17 | Texas | Low |
| Market value definition | Yes | valuing-property, basics | Primary | 2026-09-17 | Texas | Low |
| Taxable value / exemptions | Yes | tx-comptroller-exemptions | Primary | 2026-09-17 | Texas | Low |
| Protest grounds | Yes | tx-tax-code-41-41 | Primary | 2026-09-17 | Texas | Low |
| Deadlines | Yes | 41-44, 25-19, 42-21, comptroller pages | Primary | 2026-09-17 | Texas | **Medium — time-sensitive; no re-verification mechanism** |
| ARB procedures | Yes | 41-45, 41-461, 41-47, comptroller-arb | Primary | 2026-09-17 | Texas | Low-Med |
| Evidence | Yes | comptroller-appraisal-protests (+ 23-013, 41-41) | Primary | 2026-09-17 | Texas | Low |
| Comparables | Yes | tx-tax-code-23-013 | Primary | 2026-09-17 | Texas | Low |
| Appeals (court/SOAH/RBA) | Yes | 42-21, 41A, comptroller-rba, soah-home | Primary | 2026-09-17 | Texas | Low |
| Property records (HCAD lookup) | Partial — linked, not integrated | hcad-home | Primary | 2026-09-17 | Harris | **High — terms NOT VERIFIED (documented)** |
| Official resources directory | Yes | hcad-* + comptroller-* | Primary | 2026-09-17 | TX/Harris | Low |
| Homestead cap | Yes | tx-tax-code-23-23 | Primary | 2026-09-17 | Texas | Low |

---

# 38. ROUTE INVENTORY

All 37 routes: static, canonical `SITE_URL + path` (trailing slash), title unique, `publishStatus: "ready"` → indexable, sourced, unique content. Full table (title abbreviated):

| Route | Purpose | Type | Jurisdiction | Thin risk |
|---|---|---|---|---|
| `/` | Product home + 13 sections | Editorial hub | Texas | Low |
| `/property-tax-checker/` | Tool (state framing) | Tool | Texas | No |
| `/about/`, `/methodology/`, `/editorial-policy/`, `/corrections/`, `/contact/`, `/disclaimer/`, `/privacy/`, `/terms/` | Trust set ×8 | Editorial | US | Low |
| `/resources/` | Official-resource directory | Directory | TX+Harris | Low-Med |
| `/faq/` | Texas FAQ | Q&A | Texas | Low |
| `/comparables/` | Comparability methodology | Methodology | Texas | Low |
| `/evidence/` | Evidence hub | Hub | Texas | **Medium (index-only)** |
| `/evidence/property-tax-protest-evidence/` | 10-category guide | Guide | Texas | No |
| `/evidence/property-condition/` | Condition evidence | Guide | Texas | No |
| `/texas-property-tax/` | Section hub ×1 + 8 topic pages | Hub+Editorial | Texas | Hub medium, topics no |
| `/texas-property-tax/protest/` + 8 subpages | Process guides | Guide | Texas | No |
| `/texas/harris-county/` | County hub | Hub | Harris | No |
| `/texas/harris-county/property-tax-checker/` | County tool | Tool | Harris | No |
| `/texas/harris-county/faq/` | County FAQ | Q&A | Harris | Low |

Sitemap: all 37 present (verified programmatically). Canonicals consistent.

---

# 39. FINAL ARCHITECTURE DIAGRAM

```
USER
 ↓
FRONTEND: Next.js 15 App Router, 37 static Server-Component pages,
  globals.css token system, PageShell (skip-link/SiteHeader/breadcrumbs/footer)
 ↓
CORE PRODUCT: AssessmentChecker.tsx (client, browser-only screening engine)
  + editorial content (37 pages of JSX prose)
 ↓
JURISDICTION LAYER: strings only — jurisdiction fields on records;
  CountyRecord + getPublishedCounties gate; /texas/... routes (no state entity)
 ↓
DATA LAYER: lib/data/{counties,deadlines,evidence}.ts (typed records,
  SourceReference[] embedded). NO database. NO API.
 ↓
SOURCE LAYER: lib/sources/registry.ts — 24 primary sources, requireSource()
  build-time guard, SourceList renderer, per-record verification dates
 ↓
EXTERNAL DATA: NONE CONNECTED. HCAD = documented research only,
  status POSSIBLE BUT NOT YET VERIFIED (docs/hcad-data-integration-audit.md)
 ↓
DATABASE: NONE
 ↓
SEO / CONTENT: lib/seo/metadata.ts buildMetadata (unique title/desc/canonical/
  OG/Twitter/robots gate) · app/sitemap.ts (hand-maintained, verified complete)
  · app/robots.ts · Organization+WebSite JSON-LD · not-found.tsx
 ↓
TRUST / LEGAL: about, methodology, editorial-policy, corrections, contact,
  disclaimer, privacy, terms · disclaimers in footer + checker + homepage
```

---

# 40. FINAL VERDICT

## **B. READY AFTER MINOR STRUCTURAL IMPROVEMENTS**

Answers to the nine questions:

1. **Is Texas itself technically sound?** Yes. Strict TypeScript, zero runtime dependencies beyond the framework, static-only, clean data records, build-time source guard. VERIFIED.
2. **Is Texas content trustworthy?** Yes, unusually so: page-level primary sourcing with dates, honest limitation statements, no invented facts, deliberate refusal to fabricate comparables or local calendars. Residual risks: no re-verification mechanism, one mail-vs-delivered wording inconsistency, prose-level claims not mechanically keyed.
3. **Is the source architecture reliable?** The model is reliable and enforced (throw-on-missing). The *process* around it is manual and single-pass — reliable at n=1 jurisdiction, untested at scale.
4. **Is the checker genuinely useful?** Moderately. It organizes preparation and screens honestly, but it cannot do the two things its own methodology says matter most (comparables worksheet, deadline calculator), and it collects two fields it ignores.
5. **Is the site safe to scale?** Safe at county scale today; safe at state scale only after extracting the checker's Texas flag logic and the Texas strings from shared components; not safe at country scale (product-model mismatch).
6. **Can another US state be added without technical chaos?** Yes, after ~1–2 days of extraction work (§4-B, §4-C, §33). Before that extraction, a second state inherits Texas statute text in the checker and footer — the exact "accidentally inheriting Texas rules" failure the audit was asked to detect.
7. **Can another country eventually be added?** The shell yes; the product no, without redesign (UK case proves the model doesn't generalize).
8. **What must be fixed BEFORE expansion:** (a) wire the publication gate to the sitemap (kill the literal list); (b) extract checker flag rules into per-jurisdiction config; (c) parameterize DataIntegrationNotice's hardcoded HCAD URL; (d) move Texas strings (footer, metadata defaults, nav) to site config; (e) resolve the canonical trailing-slash question live; (f) write tests for checker math; (g) fix the Harris checker page overstatement (comparables documentation).
9. **What can safely wait:** OG images, FAQ/Breadcrumb schema, evidence-hub enrichment, author page, re-verification scheduler, contact-form backend.

---

# 41. INFORMATION REQUIRED TO BUILD THE FUTURE EXPANSION MASTER PROMPT

An external reviewer designing an "add a new jurisdiction" master prompt needs, from this audit:

1. **The record shapes to populate:** `SourceRecord` (lib/sources/types.ts — exact fields), `CountyRecord`, `DeadlineRecord`, `EvidenceTypeRecord` — a new jurisdiction is primarily an exercise in filling these with verified data.
2. **The publication gates:** two exist — `researchStatus` on counties and `publishStatus` on pages (`ready`/`source-verified` → indexable); plus the hand-maintained sitemap list. The future prompt must specify all three or the automated replacement for them.
3. **The verification workflow to replicate:** fetch every source URL, read it, record claim + verification date, never restate a secondary source where the statute exists (the SOAH precedent in `soah-home` notes shows the pattern for partial verification).
4. **The checker rule-config contract:** which flags are jurisdiction-agnostic (YoY-change, sale-vs-appraisal, $/sqft screening, condition acknowledgment) vs. jurisdiction-specific (homestead cap) — and that every flag needs: threshold, template text, statute reference, and the mandated screening-comparison disclaimer.
5. **The content set per jurisdiction:** minimum viable set observed = 1 state hub + N topic pages (8 basics + 8 protest) + evidence (3) + county set (hub, checker, FAQ) + local resources; plus which pages are state-level vs. county-level.
6. **The terminology surface:** every place "Texas/ARB/HCAD/Comptroller" appears in shared components (footer disclaimer, nav, metadata defaults, DataIntegrationNotice, checker flag prose) — these are the strings that must become config.
7. **The known Texas-only concepts that need an analog or explicit absence:** appraisal district, chief appraiser, ARB, homestead cap, notice of appraised value, § 23.013 comparability factors, RBA/SOAH/district-court appeal ladder, May-15-style rolling deadline.
8. **The SEO contract:** unique title/description per page, canonical pattern (and the pending trailing-slash decision), sitemap inclusion rule, robots rules, noindex gate semantics, JSON-LD scope.
9. **The privacy/legal deltas to review per jurisdiction:** data-collection reality (currently none), consent requirements if analytics are added, disclaimer sufficiency, and any local regime (e.g., PIPEDA/GDPR) — flagged NOT VERIFIED, requires counsel.
10. **What NOT to do:** don't fork components per jurisdiction, don't generate unverified county pages, don't invent deadlines as fixed dates (rule-based records only), don't fabricate comparables, don't display "updated" dates without real review.
11. **The quality gates this audit used:** build-time source guard, sitemap-vs-routes parity check, claim-vs-source consistency check, checker math re-derivation, dead-code sweep — these should become automated tests in the expansion prompt.
12. **Open items carrying forward:** HCAD integration status (POSSIBLE BUT NOT YET VERIFIED — terms of use unread), trailing-slash canonical behavior (NOT VERIFIED live), contact address (NOT VERIFIED working), source re-verification cadence (undefined), human editorial review (none claimed).

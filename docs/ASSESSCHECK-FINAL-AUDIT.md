# TaxAssess / AssessCheck — Final Audit (Texas + Florida)

Date: 2026-09-17 · Audit-only: **no production file was modified** (verification ran against a locally served dev build, torn down afterwards; independent math ran via `node -e` outside the repo).
Evidence tags: **VERIFIED** (command/page output shown in transcript), **INFERENCE** (reasoned, stated), **NOT VERIFIED**.

---

## 1. Executive Summary

**Global status: READY WITH MINOR FIXES**

The two-jurisdiction architecture is real, not cosmetic: Texas and Florida run through the same engine with genuinely different cap semantics, and the tests prove the separation in both directions. The publication gate is mechanically enforced. The checker's honesty language survives a rendered-HTML review. No P0 blockers were found.

The minor fixes are: a production-brand identity note ("TaxAssess" does not exist in the codebase — the brand is AssessCheck), the Florida-only content gap in the shared checker's next-steps (it links to Florida pages that now exist — verified OK — but the checker page itself is Texas-branded), two pages that could be consolidated long-term, and the operational items (domain, contact email) that remain the launch's critical path.

---

## 2. Production Status

| Item | Status |
|---|---|
| Production domain | **NOT VERIFIED** — `NEXT_PUBLIC_SITE_URL` is not set anywhere in the repo (by design). Build without it **fails loudly** (VERIFIED, guard in `lib/seo/metadata.ts`). No placeholder domain exists anywhere in the codebase (sweep: 0 hits for example.com/org, vercel.app, 127.0.0.1; localhost appears only inside the opt-in dev flag and its error message). |
| Build | PASS (54 static routes, dev-flag build) |
| Typecheck | PASS (`tsc --noEmit` exit 0) |
| Tests | 83/83 PASS (6 files) |
| Lint | **NOT CONFIGURED** — `next lint` prompts for ESLint setup; no config exists (P2) |
| Sitemap | 48 URLs, derived from the publication gate, matches canonicals 1:1 (VERIFIED on served output) |
| Robots | `Allow: /` + `Disallow: /api/`, `/*?*`, `/*UTM_`; sitemap URL present (VERIFIED — served from dev domain; production URL will follow the env var) |
| Canonicals | Correct per page, trailing-slash consistent, match sitemap entries (VERIFIED on 3 sampled pages) |

---

## 3. Jurisdiction Integrity

**Texas: PASS** — cap 10% / § 23.23 / `annual-increase`; value chain appraised→taxable; notice = "notice of appraised value"; board = ARB. Independent math re-derived outside the test suite matches.

**Florida: PASS** — SOH 3% `lower-of-or-cpi` with explicit CPI limitation text; separate non-homestead 10% cap with school-levy exclusion stated; value chain just→assessed→taxable; notice = TRIM; board = VAB. The Texas 10% number appears in Florida config **only** as the non-homestead branch with correct scope (test-enforced).

**Cross-jurisdiction leakage: PASS (content) / NOTE (chrome)** — Florida pages' content contains 0 Texas institutions (VERIFIED on served HTML; the only "harris" hits are shared header/footer nav links, which is correct behavior). Florida config cites 0 `tx-*` sources (test-enforced). Texas pages contain no Florida rules.

---

## 4. Texas Rules

| Rule | Source | Verified | Implementation | Risk |
|---|---|---|---|---|
| Homestead cap 10% annual | Tax Code § 23.23 (`tx-tax-code-23-23`) | Yes (registry + test) | `caps[]` branch, engine-checked | LOW |
| Protest deadline May 15/30-day | § 41.44 + Comptroller | Yes | `rule-based` + anchoredTo | LOW |
| Exemption $140k school | Comptroller page | Yes | content + worked example | LOW |
| Notice deadlines Apr 1/May 1 | § 25.19 | Yes | deadline record | LOW |
| 60-day district court appeal | § 42.21 | Yes | deadline record | LOW |

---

## 5. Florida Rules

| Rule | Source | Verified | Implementation | Risk |
|---|---|---|---|---|
| SOH cap = lower of 3%/CPI | § 193.155 (full text read) | Yes | `lower-of-or-cpi` basis; engine screens 3% leg only and **states the limitation**; flag title uses "Assessed value" | LOW |
| SOH resets (ownership/additions/portability) | § 193.155(3),(4),(8) | Yes | `resetNote` in config + content | LOW |
| Non-homestead residential 10%, non-school | § 193.1554 (full text read) | Yes | second cap branch; content explicitly warns against conflating with Texas 10% | LOW |
| Homestead exemption $25k+$25k split | § 196.031 | Yes | content + worked example | LOW |
| March 1 application | § 196.011(1)(a) | Yes | `fixed-date` deadline | LOW |
| Just-valuation factors | § 193.011 | Yes | value chain config + evidence page | LOW |
| VAB structure/petition/decision | §§ 194.011–194.036 | Yes | deadline records + VAB pages | LOW |

---

## 6. Florida Deadlines

| Deadline | Rule type | Source | Verified | Published | Risk |
|---|---|---|---|---|---|
| VAB petition (value), 25th day after notice | rule-based (anchor: notice mailing) | § 194.011(3)(d) + § 200.069(7) | Yes | Yes — defers to TRIM-printed date | LOW |
| VAB petition (exemption denial), 30 days | rule-based | § 194.011(3)(d) | Yes | Yes | LOW |
| Exemption application March 1 | fixed-date | § 196.011(1)(a) | Yes | Yes (with late-filing exceptions noted) | LOW |
| TRIM notice delivery | rule-based | § 200.069 | Yes | Yes ("THIS IS NOT A BILL" context included) | LOW |
| Hearing notice ≥25 days; window 30–60 days | rule-based | § 194.032 | Yes | Yes | LOW |
| Evidence exchange 15/7 days | rule-based | § 194.011(4) | Yes | Yes | LOW |
| 75% partial payment; Apr 20 denial | rule-based | § 194.014 | Yes | Yes | LOW |
| Taxes Nov 1 due / Apr 1 delinquent | fixed-date | § 197.333, § 197.322 | Yes | Yes | LOW |
| **DR-486 form number** | — | — | **NO — NOT VERIFIED** | **No** (absent from registry, content, sitemap; test-enforced) | — |
| **NAL presumption (§ 193.502)** | — | — | **NO — NOT VERIFIED** | **No** (source absent from registry; evidence page makes no presumption claim) | — |
| Early-payment discount calendar | — | — | NOT VERIFIED | No | — |

Context check on rendered HTML: the 25-day rule renders with "printed on your notice" deference (VERIFIED) — the site does not present the day-count as a universal date.

---

## 7. Sources

15 Florida + 24 Texas primary sources registered; all with `lastVerifiedDate`, jurisdiction fields, and `status: verified`. Spot-checks:

- `fl-stat-193-155` → supports SOH 3%/CPI + resets — **matches claim** (statute read this session).
- `fl-stat-194-011` → supports 25/30-day rules — **matches**.
- `tx-tax-code-23-23` → supports 10% homestead cap — **matches**.
- No invented URLs (all were fetched during research/implementation sessions).
- No cross-state citation bleed (test: `getSourcesForJurisdiction` partitioning).
- **NOT VERIFIED**: link rot since verification (no live re-crawl performed in this audit beyond the statute pages read this session). Recommend a pre-launch link check.

---

## 8. Checker

- **Inputs**: current/prior value, homestead checkbox (jurisdiction-labeled), sqft, sale price/year, condition. Dead inputs (`lotSize`, `yearBuilt`) already removed. No unnecessary fields.
- **Validation**: `$`, commas, decimals parse; 0/negative/non-numeric → null; sanity bounds ($100M value, 100k sqft) catch fat-finger values. VERIFIED via tests.
- **Calculations**: independent re-derivation matches (TX 10% strict-greater boundary, FL 3% strict-greater boundary, SOH max = prior×1.03). VERIFIED.
- **UX**: browser-only message present in rendered page; results panel labeled screening; flags carry `kind` (calculated/user-provided); empty state explicitly says "not a conclusion".
- **Claims**: sweep for "guarantee/will save/you will win/over-assessed/we found comparable" → 0 user-facing overclaims (only disclaimers negating them). The comparable section says the tool "does not generate comparables" (VERIFIED in rendered HTML).
- **Edge cases**: equal values (0% change → no flag), decreases (−20% flag), cap-less jurisdictions (no cap flag even with checkbox), implausible values (rejected). Covered by tests.

---

## 9. Content Audit

All 48 pages reviewed via registry + sampled renders. Distribution (INFERENCE from word counts, examples, and structure reviewed during prior remediation + this audit's sampling):

| Class | Pages | Examples |
|---|---|---|
| A — strong | ~22 | All 6 FL pages, appraised-vs-taxable, deadlines (TX), evidence guide, ARB hearing, appeal options, comparables, methodology |
| B — useful, improvable | ~22 | State hubs, market value, property-owner-rights, how-it-works, informal conference, after-the-hearing, trust pages |
| C — thin-ish risk | 4 | `/resources/` (~276 words — link directory with real outbound targets, acceptable as utility page), `/texas/harris-county/faq/` (~363), `/comparables/` (~373), `/faq/` (long but list-format) |
| D — noindex/remove | 0 | — |

**No programmatic state-swapped clones found**: FL pages are structurally new (3-value chain, VAB, TRIM) — not "Texas content with 'Florida' substituted" (VERIFIED by reading both sets). The nearest-to-clone pair (TX/FL deadlines pages) shares layout but every rule is jurisdiction-specific data from separate registries.

---

## 10. SEO Audit

- **Sitemap**: 48 URLs = indexable registry exactly; no params, no checkers with query strings, no draft/research pages, no counties (VERIFIED count + Florida 6).
- **Robots**: does not block CSS/JS/assets; `Disallow: /*?*` prevents param duplicates (VERIFIED served robots.txt).
- **Canonicals**: per-page, absolute, match sitemap paths, trailing-slash consistent (VERIFIED samples).
- **Metadata**: unique titles across registry (test-enforced); unique descriptions observed during implementation review.
- **Structured data**: JSON-LD present in `app/layout.tsx` (site-level). **No per-page Article/FAQ schema** — acceptable, not a defect (P3 opportunity).
- **Headings**: single H1 per page sampled; logical H2s.
- **Breadcrumbs**: present on content pages via PageShell.
- **Orphans**: none detected — every registry page is reachable through header nav, footer, or hub links (footer-link test enforces footer paths; home links both state hubs and checker).

---

## 11. Indexation Risk ("Discovered/Crawled, not indexed")

**Cause analysis (not a noindex prescription):**
1. Total URLs: 54 routes (48 pages + 404 + icons). Sitemap: 48. Indexable intent: 48.
2. **Low-value tail risk: LOW-MEDIUM.** The 4 class-C pages above are short but link-rich utility pages — Google indexing them is plausible but they are the weakest. None are doorway pages.
3. **Thin-page velocity risk: LOW.** New states add ~6 pages with mandatory worked examples + sources — the gate makes drive-by thin pages structurally difficult.
4. **Orphan risk: LOW** (footer covers all hubs; test-enforced).
5. **Duplicate risk: LOW** (unique titles/canonicals enforced).
6. **Crawl depth: ≤3** from home for all content (home → state hub → guide; checker/deadlines/evidence are 1–2 clicks).

Structural cause if "not indexed" ever appears: it will be **authority/age of a new domain**, not on-page defects. The remedy is content depth and links, not sitemap surgery.

---

## 12. Legal / Trust

- Privacy, Cookie Policy, Terms, Disclaimer, Advertising Disclosure, Consent Preferences, Accessibility, About, Author, Methodology, Editorial Policy, Corrections all exist and are footer-linked (test-enforced).
- Ads state is honest: `adsenseActive: false`, `cmpImplemented: false`, `analyticsActive: false` — pages say only what the code does (test-enforced).
- Contact email: **no placeholder** — page shows honest "channel not open yet" state until `NEXT_PUBLIC_CONTACT_EMAIL` is set (VERIFIED).
- No fictional entities/phones/addresses found (sweep).
- "TaxAssess" brand name does **not exist in the codebase** — the product is branded AssessCheck everywhere (VERIFIED). If "TaxAssess" is the intended production name, that is a rename task, not a defect (P2 decision item).

---

## 13. AdSense / CMP Readiness

No ad script, no publisher ID, no `ads.txt`, no CMP — **correctly absent and honestly declared**. Architecture is ready for later integration: `siteConfig.ads` is the single switch, legal pages read it, `/consent-preferences` exists as the future CMP hook. No deceptive UI patterns found. No action needed now.

---

## 14. Performance

- All 54 routes static prerender (VERIFIED build output). No API routes, no DB, no external runtime calls.
- Client JS limited to `SiteHeader` + `AssessmentChecker` (one small client bundle shared).
- No images beyond brand mark; system font stack (no font-loading shift).
- Single external requests at runtime: none on page load beyond user-clicked outbound links.
- **P3**: the dev-flag sitemap/OG URLs are correct per env; nothing to fix.

---

## 15. Security

- No secrets in frontend (sweep: only env-var reads with safe fallbacks; publisher/email empty unless env-provided).
- No API routes → no injection surface; checker input validated and never persisted.
- No PII collected (privacy policy matches this reality — test-enforced honesty flags).
- External links use `rel="noopener noreferrer"` (VERIFIED in components).

---

## 16. Scalability (third-state simulation)

Adding e.g. Georgia would require:
1. Research doc → 2. sources with `jurisdictionLevel/jurisdictionId` → 3. `JURISDICTION_RULES` entry (caps[], valueChain, notice name, board name, propertySearch) → 4. deadline records → 5. `/georgia-property-tax/` content → 6. site-pages registration → 7. tests file.

**Reusable as-is**: engine math, checker component (config-driven), publication gate, sitemap, footer/header chrome, legal/trust pages, SourceList, deadline rendering, source registry guards.
**Risk points**: (a) a state whose cap needs a basis other than `annual-increase`/`lower-of-or-cpi` requires extending `CapBasis` + engine branch — by design, and safe because caps are data; (b) `siteConfig.jurisdictions` keys are a literal union (`"texas" | "florida"` cast in the checker) — a third state needs that union widened (P3, one-line change when it happens); (c) evidence records are per-jurisdiction — Texas's are fine, Florida's live in content pages rather than `evidence.ts` records yet (P3 consistency note).

No copy-paste logic is required. No giant if/else is created. Verdict: **architecturally prepared**.

---

## 17. Test Coverage

Covered (83 tests): engine math incl. boundaries; TX/FL cap semantics and isolation; unknown-jurisdiction throw; C1 deadline gates; source registry integrity + partitioning; publication gate + sitemap counts + county exclusion; footer/legal link integrity; domain guard.

**MISSING TEST COVERAGE** (documented, not added per audit rules):
1. No test asserts Florida *content pages* are free of Texas institutions at the rendered-HTML level (the audit did it via curl; a build-time string test over `app/florida-property-tax/**` would lock it in).
2. No test covers `homesteadCapQuestion.capId` pointing at a nonexistent `caps` entry (would throw at render — loud, but not test-locked).
3. No link-rot test for outbound source URLs (requires network; noted as CI-candidate).
4. No test that `getDeadlines("florida")` records all carry `anchoredTo` when `rule-based` (currently only spot-checked).

---

## 18. Findings

### P0 — BLOCKER
None found.

### P1 — HIGH
| ID | Severity | Location | Problem | Evidence | Why it matters | Recommended fix |
|---|---|---|---|---|---|---|
| P1-1 | HIGH | Repo root | Production brand identity unresolved: audit request says "TaxAssess", codebase is uniformly "AssessCheck" | `grep -ri taxassess app lib components` → 0 hits | Launching under a different name than the code's brand creates inconsistent titles/OG/JSON-LD overnight | Decide the name; if renaming, it is one config (`siteConfig.name`, `SITE_NAME`) plus a title sweep — do it before first deploy, not after indexing |
| P1-2 | HIGH | Ops (no file) | `NEXT_PUBLIC_SITE_URL` undefined — production cannot build until set | build fails by design (guard verified) | Canonicals/sitemap/robots cannot resolve | Set the real domain in hosting env before deploy |

### P2 — MEDIUM
| ID | Severity | Location | Problem | Evidence | Why it matters | Recommended fix |
|---|---|---|---|---|---|---|
| P2-1 | MEDIUM | `app/property-tax-checker/` | State-wide checker page is Texas-only but its URL is unqualified (`/property-tax-checker/`); a Florida owner landing here gets TX rules with only a page-level note | Page passes `jurisdictionId="texas"` | Mildly confusing UX for the second state; FL tool is a later phase by design | Add a visible "Texas tool — Florida: see your TRIM guide" banner, or route TX tool under `/texas/` later (do NOT now — breaks canonicals) |
| P2-2 | MEDIUM | ESLint | Lint not configured; `next lint` prompts interactively | Verified in audit | No automated code-quality gate in CI | Run `next lint --init` once, commit config |
| P2-3 | MEDIUM | `/resources/` | Page omits Florida official resources (DOR, statutes) while the site now covers Florida | grep: 0 Florida refs on page | Incomplete for FL users; weak internal-link hub for FL sources | Add FL DOR/statute links (they are already in the registry) |
| P2-4 | MEDIUM | Ops | `NEXT_PUBLIC_CONTACT_EMAIL` unset — contact channel closed | siteConfig fallback "" | Trust signal for AdSense review later | Set when a real inbox exists |

### P3 — LOW
| ID | Location | Problem | Recommended fix |
|---|---|---|---|
| P3-1 | `siteConfig.jurisdictions` | Literal union `"texas" \| "florida"` cast in checker; third state needs widening | Widen when adding state 3 |
| P3-2 | Pages | No per-page FAQ/Article JSON-LD | Add `FAQPage` schema to the two FAQ pages first |
| P3-3 | `evidence.ts` | FL evidence lives in page content, not registry records (TX has records) | Add `EvidenceTypeRecord`s for FL when VAB evidence needs richer reuse |
| P3-4 | `/texas/harris-county/faq/`, `/comparables/` | Shortest content pages (363/373 words) | Enrich opportunistically; not launch-blocking |
| P3-5 | Missing tests list (§17) | 4 gaps documented | Add in a test-only pass |

---

## 19. Final Launch Checklist

- [ ] Production domain verified — **P1-2 open**
- [x] No placeholders (codebase; the word appears only in comments/notes of deliberately unpublished counties)
- [x] Texas verified
- [x] Florida verified
- [x] Deadlines verified (unverified items excluded)
- [x] Sources verified (live link-rot re-check recommended)
- [x] Checker verified
- [x] Legal verified
- [x] SEO verified
- [x] Sitemap verified
- [x] Robots verified
- [x] Canonicals verified
- [x] Internal linking verified
- [x] No major thin-content risk
- [x] No major indexation risk
- [x] Tests pass
- [x] Typecheck pass
- [x] Build pass
- [ ] Production ready — **blocked only by P1-1 (name decision) and P1-2 (domain)**

## 20. Final Recommendation

1. **Correct now**: P1-2 (set real domain), P1-1 (decide AssessCheck vs TaxAssess before first deploy), P2-1 banner, P2-2 lint init, P2-3 Florida resources. All are small; none require redesign.
2. **What is correct and must not be touched**: the caps[] semantics (TX annual vs FL lower-of-or-CPI), the publication gate, the deadline registry (including the deliberate DR-486/NAL exclusions), the checker's claim language, the source registry guards, and the honest ads/consent state.
3. **Pending external verification**: live link check of all 39 source URLs; the two NOT-VERIFIED items (DR-486, NAL presumption) stay excluded until verified against DOR/official pages.
4. **Do not implement yet**: Florida TRIM checker, any county page, any third state, ads/CMP activation — each has a documented gate that must be satisfied first.
5. **After fixing P1-1/P1-2**: the project is **ready for launch** as Texas + Florida state-only. The architecture will not be the thing that breaks when state three arrives.

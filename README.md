# Property Tax Assessment Checker (Phase 1 — Texas / Harris County)

High-trust, source-driven information and tools that help Texas property
owners understand their property tax assessment and prepare for a possible
protest. Not a protest company, not legal advice, not a content farm.

## Stack

- Next.js 15 (App Router, static rendering) · React 19 · TypeScript strict
- No CSS framework in this phase by design (content > IA > data > logic > SEO > trust > design)

## Run

```bash
npm install
npm run dev        # develop
npm run build      # production build (all pages static)
npm run typecheck  # strict typecheck
```

## Architecture

```
app/                    routes (static, semantic HTML, per-page metadata)
  property-tax-checker/ tool landing (client component inside)
  texas-property-tax/   statewide education + protest process
  texas/harris-county/  local hub, local checker, local FAQ
  evidence/             evidence guide + condition guide
  resources/            official-links directory
  about|methodology|editorial-policy|corrections|contact|
  privacy|terms|disclaimer
lib/
  sources/registry.ts   SOURCE REGISTRY — every factual claim traces here
  data/deadlines.ts     rule-based deadline records w/ source + verified date
  data/counties.ts      county registry w/ publication gate (unverified
                        counties can never render or reach the sitemap)
  data/evidence.ts      evidence categories (official-guidance-backed only)
  seo/                  page registry, metadata builder, indexability gate
components/
  sources/SourceList.tsx      readable citations (publisher, URL, verified date)
  tools/AssessmentChecker.tsx browser-only checker, no valuation, labeled data
  tools/DataIntegrationNotice honest DATA INTEGRATION NOT VERIFIED banner
```

## Non-negotiable rules encoded in this codebase

1. **No invented facts.** If a fact isn't in `registry.ts` with a verification
   date, it doesn't go on a page. Relative rules stay rules (never fake dates).
2. **No fake completeness.** Unverified integrations render
   `DATA INTEGRATION NOT VERIFIED`; unverified counties are unrenderable.
3. **No fake precision.** The tool shows screening ranges, never
   authoritative-sounding dollar conclusions; no valuation is performed.
4. **No fake claims.** No savings, no success rates, no testimonials, no
   invented credentials, no claimed compliance.
5. **Indexable = verified.** Sitemap membership is gated on source verification.

## Verification workflow (for future edits)

1. Identify the user problem the page solves.
2. Find the primary official source; read it.
3. Register/refresh the source in `lib/sources/registry.ts`.
4. Write the page citing `SourceList` with the sourceIds.
5. Add the deadline/page record with `lastVerifiedDate` if date-sensitive.
6. Only then add the path to `app/sitemap.ts`.

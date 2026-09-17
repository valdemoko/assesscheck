# Florida Implementation Notes (State-Only)

How the multi-jurisdiction architecture works after the Florida state-only
implementation, and how to avoid the failure modes it was designed to prevent.

## 1. How caps[] are modeled

`lib/data/jurisdictions.ts` → `CapRule`:

```ts
{
  capId: "fl-soh-cap",
  appliesTo: "homestead" | "nonhomestead-residential",
  basis: "annual-increase" | "lower-of-or-cpi",
  maxAnnualIncreasePercent: number,
  label, detail, resetNote?, limitations?,
  sources: SourceReference[],
}
```

A jurisdiction holds an **array** of caps. Texas has one (`tx-homestead-cap`,
10%, `annual-increase`, Tax Code § 23.23). Florida has two with **different
semantics**:

- `fl-soh-cap` — 3%, `lower-of-or-cpi` (§ 193.155). The engine screens only
  the 3% leg and the `limitations` field tells the user the real limit is the
  lower of 3% or the CPI change. The cap is checked against prior-year
  assessed value, and the flag title says **"Assessed value"** (never
  "Appraised value" — Florida's assessed value is the post-cap figure).
- `fl-nonhomestead-residential-cap` — 10%, `annual-increase` (§ 193.1554),
  non-school levies only. **Not** a Texas clone: different property branch,
  different levy scope, different reset rules.

The engine (`checkerEngine.runCheckerWithRules`) reaches the homestead-branch
cap through `rules.homesteadCapQuestion.capId` — the checkbox label and the
target cap are both configuration. A jurisdiction with no caps renders no cap
input and fires no cap flag.

**Never** collapse two states' caps into one number. The config shape is
shared; the meaning never is.

## 2. How deadlines are modeled

`lib/data/deadlines.ts` → `DeadlineRecord`:

- `deadlineBasis: "fixed-date" | "rule-based"` — how the rule is legally
  expressed.
- `anchoredTo` — for rule-based deadlines, the anchor event (e.g. "mailing of
  the § 194.011(1) assessment notice").
- `jurisdictionId` — machine filtering (`getDeadlines("florida")`).
- `verificationStatus` — only `source-verified` records may back public pages.

Florida's VAB deadlines are **rule-based by nature** (25/30 days after a
mailing). The pages always defer to the date printed on the user's TRIM
notice, which the statute itself (§ 200.069(7)) makes the operative date.

**Never** hardcode "25 days", "March 1", or any deadline string in a
component — add a record to the registry instead.

## 3. How source jurisdiction is distinguished

`lib/sources/types.ts` adds two optional fields to `SourceRecord`:

- `jurisdictionLevel: "state" | "county" | "federal"`
- `jurisdictionId: "texas" | "florida" | <countyId>`

Pre-Florida Texas entries predate the field;
`getSourcesForJurisdiction("texas")` infers them from the human-readable
`jurisdiction` label. New entries **must** set both fields explicitly.
`requireSource()` still throws on any unregistered citation — provenance
guarding is unchanged.

## 4. How to add a jurisdiction

1. Research doc first (`docs/florida-expansion-research.md` is the template):
   primary sources read and verified, deadlines C1-checked, verdict recorded.
2. Register **verified** sources in `lib/sources/registry.ts` with
   `jurisdictionLevel`/`jurisdictionId`.
3. Add the record to `JURISDICTION_RULES` (caps, valueChain,
   assessmentNoticeName, reviewBoardName, propertySearch, thresholds).
4. Add deadlines as records (never component strings).
5. Build state-level content under `/florida-property-tax/` (or the new
   state's slug), with worked examples and "what this does not tell you".
6. Register pages in `lib/seo/site-pages.ts` with a `publishStatus` — only
   `ready`/`source-verified` pages enter the sitemap or get indexed.
7. Add `tests/<state>.test.ts` (see `tests/florida.test.ts` as the pattern).

## 5. What is state-only in Florida

Six pages, all state-level: hub/basics, Save Our Homes & caps, TRIM notice,
VAB petition, VAB evidence, deadlines. The checker currently serves Texas
only; the Florida-specific checker (TRIM-review form) is a later phase by
design.

## 6. Why Miami-Dade is blocked

`docs/florida-expansion-research.md` §20: the county's VAB procedure page and
its petition deadline could not be verified from official sources. The
project rule is "no source, no page". Any county page (Florida or Texas)
requires: verified VAB/clerk procedure page, current-year deadline
verifiable, public property search with stable URLs, documented filing
channel, and terminology consistent with state statute. Until then the
publication gate keeps every county out of the sitemap (enforced by
`tests/florida.test.ts` and `tests/publication.test.ts`).

## 7. How to avoid inheriting Texas rules

- Components never contain rules — they read `JURISDICTION_RULES`.
- `requireJurisdictionRules(jurisdictionId)` **throws** on unknown ids; there
  is no default jurisdiction anywhere (`DataIntegrationNotice` takes a
  required `jurisdictionId`).
- Every Florida flag/detail cites a `fl-*` source; tests assert no `tx-*`
  source appears in Florida rules and no "§ 23.23"/"Tax Code" text appears in
  Florida cap details.
- Shared chrome (footer disclaimer, header nav) is neutral; per-state wording
  lives in state pages, not in shared components.

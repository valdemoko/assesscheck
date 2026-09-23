# Expansion roadmap

> Why this file exists. Through the California, Arizona, Nevada and Oregon
> batches, the plan for what to cover next lived in conversations and not in the
> repository. Anyone joining the project could see what was published and nothing
> about what came next, in what order, or by what standard — and a contributor
> who had to choose the next state from scratch would have had to reconstruct the
> reasoning from five separate research docs.
>
> This file records the decisions that ARE established. Where a decision was never
> made, it says so rather than implying one. The candidate list in §3 is
> deliberately not a ranking.

---

## 1. Published coverage

Six states, 75 registered routes, one pilot county. Every state below has a
research doc recording what was read, what could not be read, and the open points
that follow.

| State | Routes | Research doc | Provenance class | Open points |
|---|---|---|---|---|
| Texas | 19 state + 3 Harris County | `docs/florida-expansion-research.md` (shared origin) | Statute and Comptroller text | County layer beyond Harris (§5) |
| Florida | 7 state (incl. checker) | `docs/florida-expansion-research.md` | Statute and DOR text | Miami-Dade county pages, SOH CPI figure |
| California | 6 state | `docs/california-expansion-research.md` | Official pages stating the rule (`leginfo` unreadable) | `C1` statute text |
| Arizona | 6 state | `docs/arizona-expansion-research.md` | Statute text read, plus SBOE and counties | `A3` checker, `A4` counties |
| Nevada | 6 state | `docs/nevada-expansion-research.md` | Agencies naming the rule (`leg.state.nv.us` 403) | `N1`–`N4` |
| Oregon | 6 state | `docs/oregon-expansion-research.md` | An administrative rule in full, plus counties | `O1`–`O4` |

The "provenance class" column matters more than the page count. An Arizona page
cites statute text that was read; a California page cites official pages that
state the rule but was never able to read the statute. Both are honest, and they
are not the same strength of evidence. That distinction is why each research doc
opens with a "what is VERIFIED / what is NOT verified" table.

---

## 2. The bar a new state has to clear

This is not a preference list. It is what every completed batch actually did, and
a batch that skips a line is a batch that has not finished.

1. **A research doc first**, with a `VERIFIED` / `NOT VERIFIED` table written
   before any page exists. If a fact could not be read from an official source,
   it does not go on a page.
2. **Sources registered** in `lib/sources/registry.ts`, all `primary`, each with a
   `lastVerifiedDate`, `jurisdictionId` and `notes` recording what was read and
   what the source itself says.
3. **Jurisdiction rules** in `lib/data/jurisdictions.ts`: the caps with their
   `capSubject`, the value chain, the notice name, the review board name. If the
   state's arithmetic cannot be screened by comparing two years, it gets **no**
   `homesteadCapQuestion` and the pages explain why.
4. **Deadlines** in `lib/data/deadlines.ts`, each `source-verified`, with a
   `deadlineBasis` (`fixed-date` or `rule-based`) and, when rule-based, an
   `anchoredTo` that names the event.
5. **Six pages** minimum: a hub, the state's distinctive rule, the notice, the
   appeal route, the evidence question, and the deadline calendar rendered from
   the registry.
6. **Tests in `tests/<state>.test.ts`** covering: the rules and their semantics,
   zero bleed of other states' law or vocabulary, deadlines, the source
   partition, and the publication gate.
7. **Chrome updated**: nav, footer, home, the by-state hub and `SITE_PAGES`, plus
   the counts asserted in `tests/publication.test.ts` and
   `tests/footer-legal.test.ts` and the state list in
   `tests/cross-state-isolation.test.ts`.
8. **Green**: typecheck, the full suite, lint and a build.

The generic guards added along the way now do part of this work automatically:
`tests/cross-state-isolation.test.ts` fails if a new state's pages use another
state's vocabulary, `tests/american-english.test.ts` fails on dialect drift, and
`tests/checker-coverage.test.ts` fails if the tool's real coverage stops matching
the sentences that promise it.

---

## 3. Candidates (no ranking recorded)

These names appeared during planning. **The ranking was never written down and is
not recoverable from the repository**, so this list is unordered and a state is
started only when a batch is explicitly approved.

- Michigan
- Georgia
- Maryland

Two observations that ARE recorded, because they came out of the modelling work:

- **A state whose cap does not bound a value needs `capSubject` treated as
  non-obvious.** Nevada taught this: its cap applies to the tax amount, and the
  six states that existed at the time had all implicitly assumed a value. Every
  cap now declares `capSubject` and a test enforces that only Nevada says
  `tax-amount`.
- **A state whose limit is a formula rather than a rate needs the mechanism
  explained rather than a number quoted.** Oregon taught this: its 3% is the
  greater of 103% of the prior assessed value or the prior maximum, with the tax
  base at the lower of that and market value.

A useful filter for choosing: does the state have a rule that **no covered state
already has**, and is it stated in a source that can actually be read from here?
Oregon qualified on both and produced the strongest provenance on the site. A
state that works exactly like Florida would add pages without adding answers.

---

## 4. Anatomy of a batch

What a state actually costs, measured on the four that were built:

| Stage | California | Arizona | Nevada | Oregon |
|---|---|---|---|---|
| New model concept needed | yes (`factored-base-year`) | yes (two values) | yes (`capSubject`) | no |
| New `DeadlineType` | yes (2) | yes (2) | yes (3) | yes (1) |
| `homesteadCapQuestion` | no | no | no | no |
| New state routes | 6 | 6 | 6 | 6 |

The checker is a separate axis: it exists for the two states whose limit two
consecutive notices are enough to test (Texas on the appraised value, Florida on
the assessed value). The other four pages explain why the same arithmetic would
mislead there, and `tests/checker-coverage.test.ts` keeps the tool's real
coverage and the sentences that promise it in step.

Oregon was the cheapest because Nevada had already widened the model. The
practical lesson: **the expensive part is the first state that needs a new
concept, not the pages.**

---

## 5. County layer

One county is published (Harris, Texas). `lib/data/counties.ts` holds four more
Texas records. Nothing renders them, and the hub, sitemap and nav must not until
each clears the bar.

| County | Status | What is missing |
|---|---|---|
| Harris | Published (3 pages + checker) | — |
| Dallas | Research under way — 3 of 4 criteria verified | A verifiable DCAD property-search URL; see `docs/dallas-county-research.md` |
| Tarrant, Bexar, Travis | No research at all | Everything. Records with empty `sources` and no verification date |

Dallas is the instructive case: its protest procedure and deadline are now read
from the district's own articles, which is most of the work, and it still does not
clear the bar — because the property-search URL could not be read from a site that
returns no body text to a text extractor. The bar is not a formality.

The bar is the one the project set for itself when Miami-Dade failed it:

1. The county's petition procedure must be documentable from official county
   sources.
2. The current year's petition deadline must be verifiable from that page.
3. The property search must be linkable for the `DataIntegrationNotice`.
4. Local terminology must be consistent with state law.

Miami-Dade fails 1 and 2, and those are **verification failures, not correctness
failures** — which under "no source, no page" is still a failure.

---

## 6. Standing rules

- **No source, no page.** An unverified page is worse than no page.
- **State-only until a county clears the bar.** Florida, California, Arizona,
  Nevada and Oregon have no county pages, deliberately.
- **Do not publish a figure that cannot be read.** Nevada's rate ceiling
  (NRS 361.453) is named without a number for this reason; see open point `N3`.
- **Republished figures are tracked on a schedule.** See
  `lib/data/review-schedule.ts` and `/methodology`. A figure the government
  renews on a calendar is not a rule, and its verification expires.

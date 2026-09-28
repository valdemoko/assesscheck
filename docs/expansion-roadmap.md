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

Nineteen states, 140 registered routes, two pilot counties. Every state below has a
research trail recording what was read, what could not be read, and the open points
that follow. The last eleven (Ohio, North Carolina, Massachusetts, Virginia, New York,
Georgia, Maryland, Indiana, Washington, New Jersey, Minnesota) were verified against
official sources on 2026-09-28 and documented in §7.

| State | Routes | Research doc | Provenance class | Open points |
|---|---|---|---|---|
| Texas | 19 state + 3 Harris County + 1 Dallas County | `docs/florida-expansion-research.md` (shared origin); `docs/dallas-county-research.md` | Statute and Comptroller text | County layer beyond Harris and Dallas (§5) |
| Florida | 8 state (incl. checker) | `docs/florida-expansion-research.md` | Statute and DOR text | Miami-Dade county pages, SOH CPI figure |
| California | 7 state | `docs/california-expansion-research.md` | Statute text read (2026-09-23, via a JS-capable browser) | `C1` Article XIII A § 2 |
| Arizona | 6 state | `docs/arizona-expansion-research.md` | Statute text read, plus SBOE and counties | `A3` checker, `A4` counties |
| Nevada | 7 state | `docs/nevada-expansion-research.md` | Agencies naming the rule (`leg.state.nv.us` 403) | `N1`–`N4` |
| Oregon | 6 state | `docs/oregon-expansion-research.md` | An administrative rule in full, plus counties | `O1`–`O4` |
| Michigan | 6 state | `docs/michigan-expansion-research.md` | An official county, plus Treasury on uncapping (`legislature.mi.gov` WAF-blocked) | The March board's session requirement; the year's inflation rate multiplier; county pages |
| Colorado | 5 state | `docs/fifty-state-coverage.md` §2 | The Division of Property Taxation's own pages read in full (2026-09-28), plus Denver's search read live | Rate table is legislative and volatile (cited as a dated table, not restated); alternate protest schedule in large counties; no county pages |
| Ohio | 5 state | `docs/expansion-roadmap.md` §7 | Official Department of Taxation pages + the Board of Tax Appeals' own pages + Franklin County's BOR page read live (`codes.ohio.gov` timed out; ORC named only where an official page names it) | The ORC text itself; county pages beyond Franklin; the "last day to pay first half" alternative cutoff needs a second official confirmation |
| North Carolina | 4 state | `docs/expansion-roadmap.md` §7 | NCDOR pages + Orange County's appeal and revaluation pages read in full (2026-09-28) (`ncleg.gov` 403; G.S. sections named only where an official page names them) | The G.S. text itself; the other 99 counties' windows; the "board adjourns" end date makes every county's dates its own |
| Massachusetts | 4 state | `docs/expansion-roadmap.md` §7 | The Citizen Information Service abatement guide read in full (2026-09-28); mass.gov and malegislature.gov not readable — G.L. c.59 §§ 64/65 named in official snippets only | The statute text itself; per-municipality quarterly-billing variation; abatement dollar figures deliberately unpublished |
| Virginia | 4 state | `docs/expansion-roadmap.md` §7 | The Code of Virginia read section by section on the official law portal (2026-09-28): §§ 58.1-3200/3201, 3330, 3378, 3379, 3984, plus Fairfax's iCare read live | The strongest provenance of the four; open point is the 95 localities' ordinances (no single statewide date exists to publish) |
| New York | 4 state | `docs/expansion-roadmap.md` §7 | Four tax.ny.gov pages read in full (2026-09-28): grievance procedures (updated May 2026), property tax calendar, equalization rates, fair-assessments guide | Grievance Day is per-municipality (the state page states the exceptions); SCAR forms live on nycourts.gov (read via snippets only); RPTL sections named by the pages |
| Georgia | 4 state | `docs/expansion-roadmap.md` §7 | Four dor.georgia.gov pages read in full (2026-09-28): PT-311A, property tax FAQ, Taxpayer's Bill of Rights, homestead exemptions; county directory + qPublic index for the search layer | Superior court stage named but not read in full; qPublic directory is vendor-run (marked secondary, used only as a finding aid) |
| Maryland | 6 state | `docs/expansion-roadmap.md` §7 | The Maryland Tax Court's procedures page read in full (the whole ladder with statute cites), the Maryland State Archives' SDAT functions page read in full, Montgomery County's homestead page read in full; SDAT's own appeal form and property search read live (`dat.maryland.gov` 403s to this environment) | SDAT's own explanatory pages (homeowners' guide, homestead program page); notice timing presented as "typically late December" per DLS fiscal notes, not as a statutory date |
| Indiana | 5 state | `docs/expansion-roadmap.md` §7 | Three in.gov pages read in full (2026-09-28): DLGF Tax Bill 101 (the caps' worked arithmetic), the Citizen's Guide (trending + billing), and the state appeal FAQ (Form 130 ladder + 5% burden shift) | IC sections named only through the pages; the Form 130 flowchart PDF was not extractable (registered for its own stated text only) |
| Washington | 5 state | `docs/expansion-roadmap.md` §7 | DOR's levy-limit chapter read in full (HTML), the Board of Tax Appeals' how-to-file page read in full, and the July 1 / 30-day BOE deadline from DOR's own form and calendar PDFs' official text (PDFs not extractable; county BOE pages corroborate) | DOR's PDF guides not extractable in full; King County's different schedule and county-by-county BOE variations not enumerated |
| New Jersey | 4 state | `docs/expansion-roadmap.md` §7 | The Division of Taxation's Assessment and Appeals page read in full (2026-09-28): April 1 / May 1 / January 15 deadlines, Chapter 123 ±15% common level range, $1M/$750K Tax Court thresholds, 45-day Tax Court appeal | The County Tax Board Handbook and hearing guide are PDFs not extractable here; the December 1 added/omitted deadline is corroborated by county sources but no readable official page states it |
| Minnesota | 5 state | `docs/expansion-roadmap.md` §7 | Two DOR pages (appealing; understanding) read in full, the Tax Court's home page read in full, and Anoka County's appeal page read in full (2026-09-28) | The DOR's homestead page was captcha-blocked, so the homestead exclusion is described without its figures; per-city open-book vs LBAE election not enumerated |

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
   the registry. The hub is an article *with its index at the top*: the
   explanation the reader came for, and — above it, in "In this section" — a
   link to each of the pages below with a line saying what is in it. Texas wrote
   its hub as a directory and the five states added after it wrote theirs as
   articles with the links at the bottom; that split was never decided and is
   now one shape. A hub that does not link a page in its own cluster is a
   `tests/page-standards.test.ts` failure, not a style question.
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

`tests/page-standards.test.ts` covers three more, all derived from `site-config`
and `SITE_PAGES` rather than from lists that can rot: every page that makes
claims about a state cites at least one registered source, every breadcrumb trail
starts at Home (and only the last crumb is the current page), and every state hub
links every page directly below it. None of the three had any test before, which
is exactly why all three had drifted: three pages cited nothing, every child page
began its trail at its state hub, and two hubs never linked children they had.
The lesson worth keeping is that a suite of 240 tests can be green while an
entire class of promise goes unexamined — the guards are only ever as good as the
question they were asked.

---

## 3. Candidates (no ranking recorded)

These names appeared during planning. **The ranking was never written down and is
not recoverable from the repository**, so this list is unordered and a state is
started only when a batch is explicitly approved.

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

---

## 7. Fase 4 — national expansion, first batch (2026-09-28)

Four states researched and published in one batch, all gate-checked before a
line of code was written. Method: web search to identify the official
administrator, then direct reads of official pages only (`web_search` +
`read_url`; no browser preview).

### The gate results

| State | Administrator (official source read) | Deadlines verified | Property search | Verdict |
|---|---|---|---|---|
| Ohio | Dept. of Taxation hub + reappraisal page; Board of Tax Appeals filing page (read in full); Franklin County BOR page (read live: "tax year 2026 complaints through March 31, 2027") | Jan 1 - Mar 31 of the following tax year (or last day to pay first half), DTE Form 1 to the county auditor; BTA within 30 days, dual filing | County-based; Franklin search read live; CAAO directory + DOR "Find Your County Auditor" | **PUBLISH** (hub-only) |
| North Carolina | NCDOR appeal-process and types-of-property pages (read in full); Orange County appeal page (read in full, 2026 dates) + revaluation page (read in full) | Informal Jan 1 - Mar 31, 2026; BOER convenes Apr 30, 2026, formal window to Jun 30, 2026 "when the Board adjourns"; PTC within 30 days; burden on owner | County-based; NCDOR county assessors list; Orange's PRC/Comper tools named on its own pages | **PUBLISH** (hub-only) |
| Massachusetts | Citizen Information Service abatement guide (read in full, sec.state.ma.us); DOR Bureau of Local Assessment (403'd; cited for what its official descriptions state) | Abatement by the first-actual-bill deadline (usually Feb 1, quarterly); 3-month deemed denial; ATB within 3 months, payment rule over $5,000 | Municipality-based; the CIS guide links every assessor | **PUBLISH** (hub-only) |
| Virginia | Code of Virginia read on law.lis.virginia.gov (§§ 58.1-3200/3201, 3330, 3378, 3379, 3984) + Fairfax iCare read live | Notice ≥15 days before hearing showing new + 2 prior years; BOE deadline set by ordinance ≥30 days after the hearing, postmark rule; § 58.1-3984 latest-of-three court window | Locality-based; Fairfax iCare verified | **PUBLISH** (hub-only) |

### What each state adds that no covered state had

- **Ohio**: a fixed fractional ratio (35%) with a state-supervised county
  revaluation cycle (six-year reappraisal, triennial update).
- **North Carolina**: the convene-and-adjourn appeal window — the deadline is
  the board's own schedule, which is why no county's dates are another's.
- **Massachusetts**: a first-actual-bill abatement deadline and a statutory
  deemed denial (three months) — the appeal clock runs without a decision.
- **Virginia**: 100%-of-market-value assessment with no cap, a 15-day
  pre-hearing notice showing two prior years, and a de novo circuit-court
  appeal with a latest-of-three-years window.

### Honest gaps (recorded, not hidden)

- `codes.ohio.gov`, `ncleg.gov`, `malegislature.gov` were not readable from
  this environment (timeouts / 403), so no statute text was quoted: statute
  sections appear only where an official page names them, and each source
  record's `notes` field says so.
- Massachusetts is the weakest provenance of the four (one fully-read source);
  its page leans on it and on the DOR Bureau's own descriptions.
- No checker was added (none of the four is screenable by comparing two
  years — there is no percentage cap to test), and `tests/checker-coverage`
  still asserts exactly `florida` and `texas`.
- Hub-only, like Colorado: no county pages pass the county bar yet.

### States still unpublished, with the named gap

- Illinois, Pennsylvania: county-dominated structures that would need a
  county-first strategy, not a state page.
- All others: not investigated yet this phase.

### Batch three: Maryland and Indiana (2026-09-28)

- **Maryland**: the Tax Court's procedures page states the whole three-tier
  ladder with statute cites (45 → 30 → 30 days), and the State Archives'
  SDAT page states the system (only fully state-run assessment; 100% of
  market; triennial; three-year phase-in). Montgomery County's page supplies
  the 10% homestead cap's mechanics. Adds: a state-run assessor, a phased-in
  triennial value, and a bill-side cap on the taxable assessment.
- **Indiana**: DLGF's Tax Bill 101 works the 1%/2%/3% caps arithmetic end to
  end, the Citizen's Guide documents annual adjustment ("trending"), and the
  state FAQ documents the Form 130/131 ladder with the 5% burden shift.
  Adds: a second `tax-amount`-adjacent cap regime (caps against gross
  assessed value per class, referendum carve-outs) and a burden-of-proof
  shift that no covered state had.

### Batch four: Washington, New Jersey and Minnesota (2026-09-28)

- **Washington**: the Department of Revenue's levy-limit chapter (read in full)
  states the 101%/1% machinery in its own words — districts under 10,000
  population resolve annually for 101%; larger ones use the IPD or 101%,
  whichever is less, unless a supermajority finds substantial need — and the
  Board of Tax Appeals' how-to-file page (read in full) states the 30-day
  appeal from a county Board of Equalization decision, with no extensions and
  an 18–24 month backlog. The July 1 / 30-day change-of-value deadline is
  quoted only from DOR's own form and calendar PDFs' official text (PDFs not
  extractable here), corroborated by county BOE pages. Adds: a limit on the
  LEVY rather than any value — the third money-not-value regime after Nevada
  and Indiana — and the "later of two dates" deadline structure.
- **New Jersey**: the Division of Taxation's Assessment and Appeals page (read
  in full) states the whole system on one page: April 1 filed-and-received
  (May 1 after revaluation; January 15 in Burlington, Gloucester and
  Monmouth), the Chapter 123 common level range of ±15% around the certified
  average ratio, the $1M/$750K direct-Tax-Court thresholds, and the 45-day
  Tax Court appeal. Adds: a ratio-band mechanism no covered state had — the
  winning argument can be arithmetic about the ratio, not market evidence —
  and a filed-AND-received deadline.
- **Minnesota**: two DOR pages, the Tax Court's home page and Anoka County's
  appeal page (all read in full) document the assessment-to-payable-year lag
  (value set January 2, taxes payable the next year), the Local Board (April
  1 – May 31) → County Board (June) ladder where the meeting dates ARE the
  deadlines, the LBAE-first prerequisite where the city holds its own board,
  and the direct Tax Court route by April 30 of the payable year. Adds: a
  board-meeting deadline structure and the second state (after Georgia) whose
  first-level local boards meet on a bounded but locally-set calendar.

### Batch two: New York and Georgia (2026-09-28)

- **New York**: four Department of Taxation and Finance pages read in full
  (grievance procedures — updated May 2026, so current; property tax calendar;
  equalization rates; fair-assessments guide). Grievance by RP-524 by
  Grievance Day (fourth Tuesday in May in most communities, exceptions
  stated); SCAR/certiorari within 30 days of the final roll. Adds: a
  municipality-chosen uniform percentage of market value, the July 1
  valuation date, and the two-bill year.
- **Georgia**: four Department of Revenue pages read in full (PT-311A, FAQ,
  Bill of Rights, homestead). 45-day appeal from the assessment notice with a
  declared method; burden of proof on the board when it changed the value;
  fees at ≤85% of the appeal-stage value. Adds: annual market assessment as
  of January 1 at a 40% ratio, and the Taxpayer's Bill of Rights.

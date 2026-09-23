# ASSESSCHECK — CALIFORNIA EXPANSION RESEARCH

## Candidate State 3: California · State-level content only (no county pages in this phase)

Date of research: 2026-09-23.
Method: primary-source reading (California State Board of Equalization, California
Department of Tax and Fee Administration, one county assessor page for local
variation) + repository inspection of the Texas/Florida architecture.
Claim tags: **VERIFIED** (read on an official page this session), **INFERENCE**
(reasoned from verified facts, stated), **NOT VERIFIED** (could not confirm;
verification step given).

> **Tooling note.** `leginfo.legislature.ca.gov` (the official California Codes
> site) is a JavaScript application and returned no readable text to this
> environment, so **no Revenue & Taxation Code section text was read directly
> from the statute site**. Everything below is therefore sourced to *official
> government pages that state the rule* (BOE, CDTFA, a county assessor page).
> That is a weaker provenance class than Florida's (`flsenate.gov` statute text
> read directly). Two consequences: (1) nothing in the California pages cites a
> statute section number that was not read on an official page, and (2) the
> statute text verification remains an open item (§6, C1) before any page is
> promoted past `ready`.

---

# 1. Verdict

**GO — state-level only, with the cap modeled as content (not as a checker flag).**

California is the highest-demand market of the candidate states and the one
whose rules are *least* like Texas and Florida, which is exactly why it earns
its own pages instead of an extension of existing ones:

1. **The limit is not a year-over-year limit.** Proposition 13 limits the
   increase of the **factored base year value** (2% or CPI, whichever is lower),
   and that base year value was set in 1975 or at the last change in ownership /
   completed new construction. Texas' `annual-increase` and Florida's SOH both
   compare *last year's figure* to *this year's figure*. California compares a
   1975-anchored (or transfer-anchored) figure to a CPI factor.
2. **California has a second, temporary-value rule with no Texas/Florida
   analogue: Proposition 8 decline-in-value.** When market value on the lien date
   falls below the factored base year value, the assessor enrolls the **lesser**
   of the two. That value can later rise by *more* than 2% in a year and still
   be lawful — it can never exceed the factored base year value.
3. **The appeal is not a protest.** It is an application for changed assessment
   (BOE-305-AH) filed with the **clerk of the county board of supervisors or the
   county assessment appeals board**, in a filing window that depends on the
   county. The board is not bound by either party's opinion of value and **may
   increase** the value.

## 1.1 What is verified (read this session)

- Proposition 13's three effects: rollback to 1975 levels; 1% rate limit plus
  voter-approved bonded indebtedness; increases limited to a maximum of 2% per
  year (BOE, *Decline in Value – Proposition 8*). **VERIFIED**
- Base year value = market value established in 1975 or at the last change in
  ownership or completed new construction; adjusted annually by the **lower** of
  the California CPI change or **2%**; the adjusted figure is the **factored base
  year value** (same BOE page). **VERIFIED**
- Decline in value (Proposition 8, codified at § 51(a)(2) of the Revenue and
  Taxation Code): a decline exists when the lien-date market value is **less
  than** the adjusted base year value; the assessor enrolls the **lesser** of the
  factored base year value or market value; the reduction is **temporary** and
  reviewed **annually**; while in decline-in-value status the assessed value may
  rise **by more than 2%** in a year but **may never exceed the existing factored
  base year value** absent a change in ownership or new construction (same page).
  **VERIFIED**
- Lien date is January 1 (`§ 2192 Rev. & Tax. Code`), and the decline-in-value
  comparison is made "as of the lien date, January 1" (BOE calendar + BOE
  decline-in-value page). **VERIFIED**
- Appeal mechanics (BOE, *Assessment Appeals Frequently Asked Questions*):
  application on **BOE-305-AH** obtained from the **clerk of the board**; the
  board hears evidence and determines value; the board can **leave, lower, or
  raise** the value; the decision is **final** and challengeable only in
  **superior court within six months**; the board has **no authority** to reduce
  a value because of prior-year increases or to grant/deny exemptions.
  **VERIFIED**
- Filing window: the regular-assessment filing period is **July 2 to September
  15**, or **July 2 to November 30**, **depending on the county** — the BOE FAQ
  states both endpoints without the county test; the **CDTFA** *Property Tax
  Function Important Dates* page supplies it: September 15 applies "in counties
  where the assessor has provided value notices by August 1 to all assessees of
  real property on the secured roll. In all other counties, the filing period
  runs through November 30." **VERIFIED**
- Evidence practice (BOE FAQ): the applicant must present the evidence **at the
  hearing** — evidence previously sent to the assessor is not considered unless
  presented; **comparable sales more than 90 days after the valuation date may
  not be considered**; **exchange of information** may be requested at least
  **30 days** before the hearing, with the other party responding at least
  **15 days** before, and evidence at the hearing is then largely restricted to
  what was exchanged; the **burden of proof** is on the assessor for a
  single-family dwelling occupied as the owner's primary residence (and for
  several other enumerated situations), and on the **applicant** in all other
  situations. **VERIFIED**
- Timing/procedural facts (BOE FAQ): a hearing notice is mailed **at least 45
  days** before the hearing; the law allows up to **two years** to resolve an
  application, and if the application is not heard within two years the
  applicant's opinion of value may **temporarily become the taxable value**;
  taxes must be paid **on time despite a pending appeal** (a reduction yields a
  refund with interest); a **stipulation** signed by assessor, county legal
  officer and applicant resolves value without a hearing; failure to appear
  results in **denial for nonappearance**. **VERIFIED**
- Payment calendar: second installment due **February 1** (`§ 2606`),
  delinquent **April 10 at 5 p.m.** (`§§ 2618, 2705`); first installment due
  **November 1** and delinquent **December 10** (CDTFA; county assessor pages).
  **VERIFIED**
- Assessor notice practice: by **April 1** the assessor notifies the clerk of the
  board and the tax collector whether the **notice of assessed value** will be
  sent to all assessees **by August 2** (`§ 1603(b)(3)(A)`, BOE calendar); the
  CDTFA page adds that **December 1** is the last day to file in counties that do
  not provide value notices by August 1 (for the year the page covers).
  **VERIFIED** (as the official pages state it)
- Exemption timing: **February 15** is the last day to timely file a
  homeowners' or disabled veterans' exemption claim; **December 10** is the last
  day for a **late** claim (CDTFA + Yolo County Assessor). **VERIFIED**

## 1.2 What is NOT verified

| Item | Status | Consequence |
|---|---|---|
| R&TC § 51 / § 51(a)(2) / § 1603 statute **text** read at the source | **NOT VERIFIED** (leginfo unreadable) | California pages cite the rule as stated by BOE/CDTFA and name the section only where an official page names it (§ 51(a)(2), § 2192, § 2606, §§ 2618/2705, § 1603(b)(3)(A) all appear on the official pages read). |
| Any **dollar amount** (homeowners' exemption $7,000; disabled veterans' exemption; exemption thresholds) | **NOT VERIFIED** | No dollar figure is published. Pages say an exemption may apply and that the figure appears on the tax bill / with the assessor. |
| County-level appeal procedures, local fees, local filing deadlines by county | **NOT VERIFIED** | No California county page is created in this phase. The pages state the state rule and defer to the clerk of the board. |
| Assessors' Association / per-county property search directory | **NOT VERIFIED** | `propertySearch` points to the BOE Property Tax Department page (verified live) and the copy tells the user to go to their own county assessor. |
| Whether every county's filing window matches the two statutory endpoints | **NOT VERIFIED** | The deadline record is `rule-based`, anchored to the county's notice mailing, and always defers to the clerk of the board's date. |

---

# 2. Why California needs new configuration (not cloning)

## 2.1 `CapBasis` is insufficient for California

`lib/data/jurisdictions.ts` currently types `CapBasis` as
`"annual-increase" | "lower-of-or-cpi"`. California's limit is neither:

- it is not an annual increase over last year's figure (Texas, Florida
  non-homestead), and
- it is not "3% or CPI whichever is lower" (Florida SOH) — it is **2% or CPI,
  whichever is lower, applied to a base year value that can be decades old**.

**Change (additive):** a third basis, `"base-year-inflation"`, documented in the
type so no future editor collapses it into `"annual-increase"`.

**Also additive:** `CapRule.appliesTo` gains `"all-real-property"`. Proposition
13's limit is not homestead-specific (that is Texas/Florida thinking); it applies
to all real property, with the base year value reset by transfer or new
construction.

## 2.2 `homesteadCapQuestion` is deliberately absent for California

The checker's cap branch fires when the percentage change between the
**prior-year** figure and the **current** figure exceeds the cap's percent. For
California that comparison is **meaningless**: a lawful 12% increase over last
year's factual assessment is normal when a property is in decline-in-value
status and the market recovers — the statutory ceiling is the *factored base
year value*, not last year's number.

**Decision (matches the approved plan "content first, checker later"):**
California registers its cap rule (for content, UI explanation and tests) but
**does not** set `homesteadCapQuestion`, so the engine renders **no** homestead
checkbox and fires **no** cap flag for California. The engine already handles a
jurisdiction without a cap question (it falls through to the editorial
`large-increase` / `large-decrease` thresholds). This is honest: the pages say
explicitly that a year-over-year screening tool cannot screen California's limit,
and that a California-specific tool is a later phase.

## 2.3 Terminology (`valueChain`)

The chain is four steps and includes a step neither other state has:

```
Base year value            (1975, or the last change in ownership / new construction)
   └─ factored base year value   (adjusted each year by the LOWER of CPI or 2%)
        └─ assessed value          (the LESSER of the factored base year value or
                                    the January 1 market value — Prop 8 decline-in-value)
             └─ net taxable value  (assessed value minus any exemption you claim)
```

"Appraised value" is **not** California vocabulary and must not appear in
California copy (the same trap Florida's audit flagged for "appraised" vs
"assessed").

## 2.4 Deadlines are county-anchored

The single most important California deadline is **not a statewide date**: the
window opens July 2 for everyone and closes September 15 **or** November 30
depending on whether the county mailed value notices by August 1. The existing
`deadlineBasis: "rule-based"` + `anchoredTo` model expresses this exactly, so
California adds **records**, not code.

---

# 3. Page plan (6 pages, state-level only)

Mirrors Florida's proven shape: hub/basics, the limitation, the notice, the
appeal process, evidence, deadlines.

| # | Path | Why it earns its own URL (anti-clone rule) |
|---|---|---|
| 1 | `/california-property-tax/` | The 4-step chain and the 1% rate/1975-rollback frame — none of the three other states has this. Worked example with a base year value + CPI factor. |
| 2 | `/california-property-tax/proposition-13-and-8/` | The 2%/CPI base year limit **and** the temporary decline-in-value rule, including the counter-intuitive fact that an assessed value in Prop 8 status may rise more than 2% in a year. |
| 3 | `/california-property-tax/notice-of-assessed-value/` | California does **not** mail a value notice to every owner every year — which is exactly why the deadline varies by county. This is a California-only explanation. |
| 4 | `/california-property-tax/assessment-appeal/` | BOE-305-AH, the county board, and the two facts almost no unofficial summary states: the board may **raise** your value, and a denial for **nonappearance** closes the appeal. |
| 5 | `/california-property-tax/appeal-evidence/` | The evidence rules are Californian: present it **at the hearing** or it is not considered; comps more than **90 days after** the valuation date may be excluded; **exchange of information** at 30/15 days; burden of proof **reverses** for owner-occupied single-family homes. |
| 6 | `/california-property-tax/deadlines/` | Rendered from the deadline registry: lien date, the county-dependent filing window, the payment calendar, the 45-day hearing notice, the 2-year rule, the 6-month superior-court window, exemption dates. |

Plus one cross-state asset: `/property-tax-by-state/` (hub that names each
covered state's limitation rule in one line and links it) — this is the internal
linking hub the header/footer/home need once there are more than two states.

**No California county pages** in this phase: the pilot-county bar (verified
local appeal procedure page, current-year deadline verifiable from that page,
public property search with stable URLs, documented filing channel, terminology
consistent with state law) has not been applied to any California county.

---

# 4. Sources registered (all read this session)

| Source ID | Publisher | What it backs |
|---|---|---|
| `ca-boe-decline-in-value` | California State Board of Equalization | Prop 13 limits (1% rate, 2%/CPI factor), base year value, factored base year value, Prop 8 lesser-of rule, annual review, "may rise more than 2% but never above the FBV" |
| `ca-boe-appeals-faq` | California State Board of Equalization | BOE-305-AH, clerk of the board, board powers (can raise), finality + 6-month superior-court challenge, burden of proof, 90-day comps, exchange of information 30/15, 45-day hearing notice, 2-year rule, payment during appeal, stipulations, nonappearance denial |
| `ca-boe-tax-calendar` | California State Board of Equalization | Lien date Jan 1 (§ 2192), Feb 1 second installment (§ 2606), April 10 delinquency (§§ 2618, 2705), April 1 assessor determination re notices by Aug 2 (§ 1603(b)(3)(A)) |
| `ca-cdtfa-important-dates` | California Department of Tax and Fee Administration | July 2 opening, Sept 15 vs Nov 30 (Dec 1) county test, Nov 1 first installment, Dec 10 delinquent/late-claim dates, Feb 15 exemption claim |
| `ca-yolo-important-dates` | Yolo County Assessor (ACE) | Independent confirmation of the county-level calendar shape (July 2 opening, Nov 30 endpoint in that county, Nov 1 / Dec 10, Feb 15, Dec 10 late exemption claim) |
| `ca-boe-property-tax-hub` | California State Board of Equalization | BOE's oversight role over the 58 county assessors — the honest state-level anchor for "find your county assessor" |

---

# 5. Tests plan (`tests/california.test.ts`)

1. Jurisdiction rules exist; cap is `ca-prop-13-base-year-cap`, 2%,
   `basis: "base-year-inflation"`, `appliesTo: "all-real-property"`.
2. California has **no** `homesteadCapQuestion` → `runChecker(..., "california")`
   fires **no** `homestead-cap-exceeded` flag (the deliberate design decision,
   asserted so a future editor cannot silently enable it).
3. Zero Texas/Florida bleed: no `tx-`/`fl-` source ids in California rules, no
   "Tax Code", no "§ 23.23", no "Save Our Homes", no "TRIM".
4. Every California deadline is `source-verified`, carries a resolvable source,
   and the filing-window record is `rule-based` with an anchor.
5. Source partition: `getSourcesForJurisdiction("california")` is non-empty,
   all `primary`, all state-level, all with a verification date; and it never
   contains a `tx-`/`fl-` id.
6. Publication gate: exactly 6 California pages registered, all `ready`, plus the
   `/property-tax-by-state/` hub; and no California **county** page exists.

---

# 6. Open items (carry forward)

- ~~**C1:** read R&TC § 51, § 51(a)(2), § 1603 and Article XIII A on a readable
  official source.~~ **PARTLY CLOSED 2026-09-23.** Two of the four are now read at
  the source and registered:
  - **§ 51** — `ca-rtc-51`. The lesser-of rule, the 2% ceiling in the statute's
    own words at (a)(1)(D), the October-to-October CPI index at (a)(1)(C), the
    decline-in-value rule at (a)(2), the disaster subdivisions, and the
    mechanism in (e) that requires annual reappraisal after a (a)(2) reduction
    and forbids conditioning it on the filing of an appeal. That last one is the
    statutory basis for the page's claim that an assessed value may lawfully rise
    far above 2% in a year.
  - **§ 1603** — `ca-rtc-1603`. The filing window runs July 2 to September 15
    inclusive with the postmark rule; the 60-day fallback applies where the § 619
    notice arrived less than 15 days before the deadline; and the last day moves
    to November 30 where the assessor does not provide that notice by August 1.
    The April 1 notification duty at (b)(3)(A) is what makes the September 15
    versus November 30 question a county-by-county fact rather than a choice.
  - **Still open:** Article XIII A § 2 itself (the constitutional 2% and the
    change-of-ownership rule) was not read. Nothing on the site quotes the
    constitution, so this is a lower priority than it looks — but it is not
    closed, and the California pages still cite the constitution only through
    statutes that reference it.
- ~~**C2:** `leginfo.legislature.ca.gov` readability.~~ **SOLVED 2026-09-23.**
  The section text is rendered client-side, so a text-extracting fetch returns
  only the page title — but a browser that EXECUTES JavaScript reads the section
  in full. That is how § 51 and § 1603 were read. Any future California code
  citation should be taken through a real browser session; do not conclude from
  an empty fetch that leginfo is unavailable.
- **C2:** `leginfo.legislature.ca.gov` readability — needed for every future
  California code citation.
  **Re-attempted 2026-09-23 and confirmed still blocked, with the routes now
  ruled out.** The direct section URL returns HTTP 200 but a body containing only
  "California Code, RTC 51 / Code Section": the text is rendered client-side, so
  a text extractor sees an empty page. The Board of Equalization's Property Tax
  Law Guide, which would be the official HTML alternative, 404s on every path
  tried — `/lawguides/property/current/ptlg/index.html`,
  `/lawguides/property/current/ptlg/rtc/51.html`,
  `/lawguides/property/current/ptlg/rule/461.html` and
  `/lawguides/property/current/ptlg/rule/property-tax-rules.html`. Note that the
  guide's annotation pages under `/ptlg/annt/` do resolve and are indexed, so the
  guide exists — only the routes to statute and rule text failed. A future
  attempt should crawl from an `/ptlg/annt/` page rather than guess sibling
  paths. Until one of those works, California pages keep citing BOE/CDTFA
  statements that state the rule, never a paraphrase of unread statute.
- **C3:** The Californian checker (base year value + CPI factor screening) is a
  later phase: it needs a **factored base year value** input, not a prior-year
  figure. Same conclusion as Florida's TRIM tool.
- **C4:** County pages (Los Angeles, San Diego, Orange, Alameda, Sacramento,
  Contra Costa …) only after the 5-point pilot test — and California counties
  differ on the filing endpoint, so a county page must carry the county's own
  verified date.

# Michigan — expansion research

Written before any page exists, per `docs/expansion-roadmap.md` §2. Michigan is the
first state of Lote 3 and the seventh covered state — published 2026-09-23, from
this doc, without reading anything that was not already recorded here.

**Verdict: buildable, at the Nevada provenance class — not the Arizona one.**
Michigan's distinctive mechanism (Proposal A: a cap on *taxable value* that
uncaps on transfer of ownership) is documented in full by an official **county**
source and in part by the Michigan **Department of Treasury**, while the statute
text itself sits behind a web application firewall and the State Tax Commission's
authoritative guide is a PDF. That is the same evidence class Nevada was built on
and the research doc there takes the same care to say so.

---

## 1. What is VERIFIED

### The mechanism, from Oakland County's Equalization Division

Read in full (`oaklandcountymi.gov`, redirected from `oakgov.com`). It is an
official county government page and it states the whole system:

- **Proposal A**, approved by the voters on **March 15, 1994**, established
  **Taxable Value** as the basis for calculating property taxes, replacing State
  Equalized Value in that role.
- **The cap**: increases in taxable value are limited to *the percent of change
  in the rate of inflation or 5%, whichever is less*, as long as there were no
  losses or additions to the property.
- **The formula**: `Capped Value = (Prior TV − Losses) × IRM + Additions`, where
  the **Inflation Rate Multiplier** "is capped and cannot be greater than 1.05
  (1 + 5%)" and represents the change in the rate of inflation during the
  previous year.
- **The three values**: Assessed Value is determined by the local assessor as of
  **December 31 (Tax Day)** of the previous year and must not exceed **50%** of
  true cash value; State Equalized Value is the Assessed Value adjusted after
  county and state equalisation; and **Taxable Value is the lesser of SEV or
  Capped Value** — unless there was a transfer of ownership.
- **The uncapping**: "When a property, or interest in a property, is transferred,
  the following year's State Equalized Value (SEV) becomes that year's Taxable
  Value (TV)... The Taxable Value will then be 'capped' for the second year
  following the transfer of ownership." The county states it more bluntly
  elsewhere on the same page: "The Capped Value limitation on Taxable Value does
  not apply if you purchased your home last year."
- **Additions are only half-added**: its worked example adds 50% of the addition's
  true cash value, because the addition enters at Assessed Value (half of true
  cash value), not at its full price.
- **The notice**: informational notices — "Notice of Assessment, Taxable
  Valuation, and Property Classification" — are mailed **prior to the March
  meetings of the local boards of review**, and carry SEV, the principal-residence
  exemption percentage and whether a transfer of ownership occurred.
- **The sales study**: a 24-month study is used when markets are increasing, with
  the timeframe set by the State Tax Commission.
- **Principal Residence Exemption deadlines**: file the affidavit with the city or
  township **by June 1** for the succeeding summer tax levy, or **by November 1**
  for the succeeding winter tax levy.

### The appeal ladder and its windows, from Oakland County's FAQ

Read in full (`oaklandcountymi.gov`, same Equalization Division). This is what
unblocked the appeal and deadline pages:

- **The required first stop is the March Board of Review**, and the sequence the
  county gives is: review the property record card, raise it with the assessor,
  then make an appointment for the March Board. A March Board appeal is what
  **reserves** the right to go to the Michigan Tax Tribunal.
- **Two classes are exempt from that first stop.** Since **2007**, commercial and
  industrial real property no longer has to petition the March Board and may
  appeal **directly to the Tax Tribunal on or before May 31**. Personal property
  may also go direct, provided a Personal Property Statement was filed before the
  March Board commences.
- **Residential and agricultural are required to protest to the Board first**, and
  their Tribunal deadline is **July 31** of the tax year involved. So Michigan has
  two Tribunal deadlines that differ by class, and the one most homeowners need is
  the later one.
- **The board must notify a protester in writing by the first Monday in June** of
  its action, and that notice must state the right to appeal to the Tribunal, the
  time limits, and the Tribunal's address. The decision binds the current
  assessment year only.
- **Grounds the county lists**: classification (six classes — agricultural,
  commercial, developmental, industrial, residential, timber cutover), status
  (exempt property), equity (everything assessed at the same 50% ratio), and the
  § 211.7u(1) poverty or hardship exemption, which must be filed and approved
  **every year**.
- **Evidence**: assessments rest on sales of similar properties, but "the sale
  price of a property cannot be the sole determining factor", and mortgage
  appraisals may not show true cash value. Non-resident owners may appeal by
  letter.
- **The Tribunal has two divisions**: an Entire Tribunal (formal, one record,
  usually with attorneys, heard in Lansing) and a Small Claims Division (informal,
  about 30 minutes, parties usually unrepresented, heard in the county).

### The uncapping rule, from the Department of Treasury

Read in full (`michigan.gov/taxes/property/change-ownership`, which refuses a
plain fetch with 403 and was read in a browser session):

- **MCL 211.27a(6)** defines "transfer of ownership" generally as the conveyance
  of title to, or a present interest in, property where the value is
  substantially equal to the value of the fee interest, and gives examples.
- **MCL 211.27a(7)** lists transfers that are **exempt** from the definition and
  therefore do **not** uncap the taxable value.
- "In accordance with the Michigan Constitution as amended by Proposal A of 1994,
  a transfer of ownership will cause the taxable value of the transferred
  property to uncap **in the calendar year following the year of the transfer of
  ownership**."

The two sources agree on the timing, which matters: the uncapping lands in the
calendar year after the transfer, which is why a buyer's first bill is not the
shock — the second one is.

## 2. What is NOT verified

| Item | Status | Consequence |
|---|---|---|
| **MCL 211.27a text itself**, and MCL 211.30 (boards of review) | **NOT VERIFIED** — `legislature.mi.gov` is behind a WAF that returns "Attack blocked by web application protection / Check Point CloudGuard" to both a text fetch and a real browser session | The statute is cited as the *Treasury's* reference (it names § 211.27a(6) and (7)), not quoted. No statutory language is on any page until it is read |
| **The annual Inflation Rate Multiplier for the current year** | **NOT VERIFIED** — published by the State Tax Commission in PDF bulletins, and PDFs cannot be read here (the browser's viewer exposes no text) | The cap is stated as a *rule* ("inflation or 5%, whichever is less") with no number attached, exactly as Nevada's rate ceiling is handled |
| **The State Tax Commission's Property Tax and Equalization Calendar** | **NOT VERIFIED** — Bulletin 11 of 2025 is a PDF | No Michigan date is published from it. Dates must come from HTML sources |
| **The Michigan Tax Tribunal route and its filing window** | **VERIFIED at county level** (see §1) — `michigan.gov/taxtribunal` itself is unreachable (404 behind the site's own router, and the ESA page that does load concerns the EMPP exemption, not real property). The county FAQ states the routes and the class-specific windows | The appeal page can be written, disclosing that the windows come from the county's statement of the procedure rather than from the statute or the Tribunal's own site |
| **County-level procedure** (a specific county's board of review dates, its filing form) | **NOT VERIFIED** — search results show a City of Detroit page with a March 9, 2026 filing deadline, but it was not read | No county page and no county deadline. A snippet is not a source |

Note what the two blocked sources have in common, since it is a pattern worth
recording: the **statute** is unreachable and the **agency's own guidance** is
unreachable, but the **county** documentation of the same system is complete. That
is the reverse of Arizona, where the statutes were readable and the counties were
the weak link.

## 3. Where Michigan differs from the six states already covered

This is the test the roadmap applies — does the state have a rule no covered state
has — and Michigan passes it twice.

1. **The cap does not attach to a value on the notice; it attaches to a figure
   derived from last year's figure, with additions and losses carved out.**
   California computes a base year value, but Michigan's `(Prior TV − Losses) ×
   IRM + Additions` is a different shape again: it is the only covered state where
   *physical changes to the property* enter the cap formula as first-class terms.
2. **The cap is removed by a legal event that has nothing to do with value: the
   transfer of ownership.** No covered state uncaps on sale. Texas, Florida,
   California, Arizona, Oregon and Nevada all carry the limitation with the
   property through a sale, or reset it in a defined way; Michigan's taxable value
   **jumps to the State Equalized Value** the year after a transfer. The practical
   consequence — two identical neighbouring houses with very different tax bases,
   diverging further on every sale — is the kind of thing a reader is looking for
   when they search.

Model implications, to be settled before pages: the cap needs
`capSubject: "assessed-value"` in the sense of *taxable* value, the value chain
gains a fourth term (Assessed Value → SEV → Capped Value → Taxable Value), and
the reset condition is a **legal event**, not a value event, which the existing
`resetNote` field can carry but should carry explicitly. Michigan almost certainly
has **no** `homesteadCapQuestion` for the checker — the taxable-value comparison
that makes Texas and Florida screenable is defeated here by the uncapping rule —
but that is a decision to take deliberately, with the reason written down, as the
other four non-screenable states do.

## 4. What is still missing, and what it blocks

The state now has enough behind it for all six pages, with two disclosures that
have to appear wherever the gap is material:

1. **MCL 211.30's statutory mechanics remain unread** — the exact session
   requirement (the board must hold at least three hours during the week of the
   second Monday in March), and the authority of the **July and December boards**,
   are known only from search snippets and secondary guides. The pages can
   describe the March Board, its notification duty and the Tribunal routes from
   the county's own text, but any sentence about *when in March* the board sits,
   or about what a July board may and may not do, must either wait for a source or
   be left out. Do not fill it from a snippet.
2. **The current year's Inflation Rate Multiplier is unread** (State Tax
   Commission PDF). The cap is published as a rule with no number, the way
   Nevada's rate ceiling is handled.

Neither gap blocks the hub, the taxable-value page, the uncapping page, the
notice page, the appeal page or the deadline page — but the deadline page is the
one to watch, because Michigan's dates run through the boards and the Tribunal
and that is where the unread statute would show.

## 5. Sources registered

| Source ID | Publisher | What it backs |
|---|---|---|
| `mi-treasury-change-ownership` | Michigan Department of Treasury | The definition structure of § 211.27a(6)/(7), and that Proposal A uncapping lands in the calendar year after the transfer |
| `mi-oakland-equalization` | Oakland County (Equalization Division) | Proposal A; the inflation-or-5% cap; the Capped Value formula and the IRM ceiling of 1.05; AV as of December 31 at 50% of true cash value; SEV; TV as the lesser of SEV or CV; the uncapping rule; the 24-month sales study; the notice before the March boards; the PRE affidavit dates of June 1 and November 1 |
| `mi-oakland-faq` | Oakland County (Equalization Division) | The appeal ladder: the March Board first for residential and agricultural with a July 31 Tribunal deadline, direct-to-Tribunal for commercial and industrial by May 31, the first-Monday-in-June notification duty, the grounds, the evidence rules and the Tribunal's two divisions |

All three are `primary` and carry a verification date. The uncapping page cites
the Treasury source for the timing and the county source for the mechanics; the
taxable-value page cites the county for the formula; the appeal and deadlines
pages cite the county FAQ for the ladder. The two items in §4 are still open, and
the pages disclose them where they are material: the March board's session
requirement is stated as unread on the deadlines and appeal pages rather than
filled in from a summary, and the year's inflation rate multiplier is left
unquantified, with an entry in `lib/data/review-schedule.ts` so the decision is
revisited each year.

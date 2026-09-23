# Oregon expansion — research and implementation notes

Scope: adding Oregon alongside Texas, Florida, California, Arizona and Nevada,
at the same standard: official sources read directly, no unsourced numbers, and
an explicit record of what could not be read.

Research date: 2026-09-23. Tax year in view: 2026-2027 (July 1, 2026 –
June 30, 2027), with values determined as of the January 1 assessment date.

---

## 1. Sources read in full

Six, all official: four county offices, one state administrative rule and one
county calculation guide.

| # | Source | Publisher | What it supplied |
|---|---|---|---|
| 1 | Property Valuation & Appeals Process | Yamhill County Assessor / Tax Collector | The whole appeal system: roll prepared as of January 1; the informal review route through December 16; PVAB/BOPTA petitions from late October to December 31 (next business day if it falls on a weekend or holiday) filed with the county clerk, not the assessor; the board hears current-year values (and in some cases MAV, SAV and AV); it also hears late-filing penalty appeals; hearings between the first Monday in February and April 15 with at least five days' written notice; no board filing fee; DOR-appraised industrial property goes straight to the Tax Court's Magistrate Division (December 31, fee); a complaint against a board order within 30 days of its mailing; a magistrate decision appealed to the Regular Division within 60 days; then the Supreme Court. It also states that a real market value reduction may not change the bill, and gives the county's own lists of what is and is not supporting documentation |
| 2 | What is the Changed Property Ratio | Hood River County | Measure 50 (1997-98): assessed value redefined as 90% of 1995-96 assessed value, districts limited to permanent rates; the first MAV set as 1995-96 real market value less 10%; "MAV can increase for only two reasons: a three (3) percent annual increase or specific property events called exceptions (such as new property or improvements, partitions or subdivisions, rezoning, etc.)"; the CPR as average MAV ÷ average RMV of unchanged property by class, with the county's own 2022 residential example (CPR 42.1%: a new $500,000 home carried $210,500 of taxable value) |
| 3 | Property Assessment FAQs | Multnomah County | Assessed value as "the lower of last year's MAV plus 3%, or the current RMV"; the ORS 308.205(1) real market value definition; appraisal methods; MAV as the greater of 103% of the prior year's AV or 100% of the prior year's MAV; the pre-1995 and post-1995 MAV bases; new properties' MAV = RMV as of the January 1 following construction × the CPR; "MAV is the only component of your property taxes where a 3% increase limit applies"; why an assessed value can jump; the exception-event list with the dollar thresholds and its citations to ORS 308.149 and OAR 150-308-0160; the ongoing-maintenance distinction (OAR 150-308-0130); and that values are tied to the property, not the owner |
| 4 | How Your Property Taxes Are Calculated | Multnomah County | The two calculations and the lower-of rule; the Measure 5 limits of $5 per $1,000 of RMV for education and $10 per $1,000 for general government; the items excluded from those limits (bond levies and some special assessments), which are computed on assessed value and rate; levy code areas; and that tax amounts are not limited to a 3% increase, listing the real causes of a larger jump including loss of compression savings |
| 5 | Property Taxes | Multnomah County | Statements mailed before October 25; payment in full due November 15, moving to the next business day when the 15th falls on a weekend or holiday; up to three installments with further payments in February and May |
| 6 | OAR 150-308-0120 — Reduction of MAV when a building is demolished or removed | Oregon Secretary of State (Administrative Rules), implementing ORS 308.146 | The exact 103% test, which is the one thing most explanations of Oregon get wrong: perform the test as if the property had not changed, and the current year's MAV is the **larger of the prior year's AV × 1.03 or the prior year's MAV**. It also gives a complete worked example of adjusting MAV when part of a property is removed, and confirms that ORS 308.146(6) can put the RMV date at July 1 |

## 1.1 What makes Oregon a genuinely different state

1. **Two values, and the tax base is the lesser of them.** The maximum assessed
   value is a limit that grows by 3% a year; the real market value is the
   assessor's opinion of value; the assessed value — the figure the tax rate is
   applied to — is the **lower of the two**. So a property in a falling market
   can be taxed on its RMV while its MAV keeps climbing, and a property whose
   RMV sits far below its MAV is taxed on the RMV.
2. **The 103% test is not "MAV grows 3%".** By rule it is the **greater of**
   prior assessed value × 1.03 **or** the prior MAV, so a property that has been
   taxed below its MAV can see its MAV rise by more than 3% without any change
   to the property at all.
3. **New construction is taxed at a fraction of its value, through the changed
   property ratio.** Because Measure 50 created the gap between MAV and RMV, new
   value is not added at market: it is added at RMV × CPR, where the CPR is the
   county's average MAV-to-RMV ratio for unchanged property of the same class.
   Hood River County's own example: 42.1% for residential in 2022.
4. **A separate cap on the tax itself, from an earlier ballot measure.**
   Measure 5 limits education taxes to $5 per $1,000 of RMV and general
   government taxes to $10 per $1,000 of RMV, with bond levies and some special
   assessments excluded. The bill is the **lower** of the assessed-value
   calculation and the Measure 5 calculation; when the second is lower, the
   property is "compressed". Losing compression savings is one of the reasons a
   bill can rise by more than 3%.
5. **The tax statement is the document.** Oregon does not run a separate annual
   value-notice-then-appeal sequence in the way the other states here do: the
   statement mailed by October 25 carries the values, and the appeal clock runs
   from receiving it, closing on December 31.

## 1.2 What could not be read (provenance class)

- **The Oregon Revised Statutes text.** The Legislature's chapter page for ORS
  308 (`oregonlegislature.gov/bills_laws/ors/ors308.html`) **timed out at 20
  seconds** on every attempt — it is a single very large HTML file — so ORS
  308.146, 308.149, 308.205, 308.242, 309.100 and 309.200 were **not read from
  the statute text**. Every ORS citation in the Oregon content comes from an
  official page that names the section for the rule it states.
- **The Department of Revenue's manuals** (the Maximum Assessed Value Manual
  303-438, Real Property Assessment and Taxation 150-303-670) are PDFs, which
  this environment cannot extract. They are therefore not cited, even though
  they are the authoritative explanation.
- **Better than California and Nevada in one respect:** an official
  administrative rule (OARD) *was* read in full, and it contains the operative
  103% formula and a worked example. So Oregon's core mechanic rests on statute-
  derived rule text rather than only on a county's paraphrase.

Provenance class: **California/Nevada class**, with the OARD rule as the
strongest single piece.

## 1.3 Anti-clone check

Content Oregon must have that no existing state's content has:

- the maximum assessed value as a **limit** separate from the real market value,
  with the assessed value as the lesser of the two;
- the 103% test expressed correctly as the greater of prior AV × 1.03 or prior
  MAV;
- the **changed property ratio** and the exception events, which together
  explain why new construction or an addition raises the taxable value by a
  fraction of what was built;
- Measure 5 limits and **compression**, as a second and independent cap on the
  tax amount;
- the appeal clock anchored to the tax statement mailed by October 25 and
  closing December 31, with petitions filed with the **county clerk**;
- the Oregon-specific evidence lists, including what the counties say is *not*
  evidence (comparisons with neighbors' values or taxes, statistical reports,
  old listings);
- the Tax Court ladder unique to Oregon: BOPTA → Magistrate Division (30 days) →
  Regular Division (60 days) → Supreme Court.

## 2. Decisions taken in the code

### 2.1 The MAV cap is modeled; Measure 5 compression is documented, not modeled

The maximum assessed value limit fits the existing model honestly:
`appliesTo: "all-real-property"`, `capSubject: "assessed-value"`,
`basis: "annual-increase"`, 3%. Measure 5 compression does **not** fit it. It is
not an annual increase measured against last year's figure; it is a dollar
ceiling per $1,000 of real market value, applied to parts of the levy and not
others. Forcing it into `annual-increase` would require inventing a percentage,
and every percentage would be wrong. So compression is carried in the content,
in the value chain (which ends in the lower-of-two-calculations bill) and in the
by-state comparison — and the model change it would need (a basis for
tax-per-value limits, with a cap whose percentage is not meaningful) is recorded
below as an open point rather than pretended away.

### 2.2 No `homesteadCapQuestion` for Oregon

Same reasoning as California, Arizona and Nevada, with an Oregon-specific trap:
the obvious screen would compare the assessed value year over year against 3%.
But an Oregon assessed value may lawfully rise by far more than 3% — when the
real market value recovers above the maximum assessed value, when exception
value is added, or when compression is lost — and it may also legitimately *not*
rise while the MAV does. A screen built on that comparison would generate false
alarms for correct assessments.

### 2.3 One new `DeadlineType`: `informal-review`

Oregon counties run a documented informal review of the value before (and
instead of) a board petition, closing on December 16 in the county read here.
That is not a petition, not a protest, and not an exemption application, so it
gets its own type rather than being mislabelled.

### 2.4 The tax statement is the notice

`assessmentNoticeName` is "tax statement", because that is the document the
counties tell owners to act on, and because modelling Oregon as if it mailed a
separate value notice first would misdescribe the deadline chain. The pages say
plainly that the statement carries the values.

## 3. Open points

- **O1 — the ORS text was not read.** Citations come from official pages naming
  the sections. If a future session can fetch the ORS chapter page (or read the
  DOR PDFs), sections 308.146, 308.149, 308.205, 308.242, 309.100 and 309.200
  should be read and the registry notes upgraded.
- **O2 — compression is not in the data model.** A future extension could add a
  cap basis for "limit per $1,000 of value" with no meaningful percentage, so
  that the by-state table and any future tool can reason about compression
  rather than describing it in prose.
- **O3 — the exception-event dollar thresholds are indexed.** The county page
  states the thresholds as $18,700 in one year and $46,200 over five years, and
  notes that after 2024 the Department of Revenue indexes them to the CPI. The
  content therefore states them as the published figures with that caveat,
  rather than as permanent numbers.
- **O4 — county coverage.** State-level pages only. Oregon has 36 counties and
  the board is named BOPTA in the statutes while some counties call it the
  Property Valuation Appeals Board; no county page is published until a county
  passes the same test used for Harris County.

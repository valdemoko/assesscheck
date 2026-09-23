# ASSESSCHECK — ARIZONA EXPANSION RESEARCH

## Candidate State 4: Arizona · State-level content only (no county pages in this phase)

Date of research: 2026-09-23.
Method: primary-source reading of the Arizona Revised Statutes on azleg.gov
(statute text read directly), the Arizona State Board of Equalization (SBOE),
and two county offices for operational detail (Cochise County Assessor, Pima
County Treasurer). Repository inspection of the Texas/Florida/California
architecture.
Claim tags: **VERIFIED** (read on the page cited), **INFERENCE** (reasoned from
verified facts, stated), **NOT VERIFIED** (could not confirm; verification step
given).

> **Tooling note.** `azdor.gov` (Department of Revenue) returned HTTP 403 and
> `mcassessor.maricopa.gov` failed TLS verification from this environment, so
> neither was used. The JLBC *Tax Handbook* is a PDF and was not readable. The
> effect on provenance is small: the statute text itself **was** read on
> azleg.gov (unlike California, where leginfo.gov was unreadable), and the
> procedural detail comes from the SBOE — the state agency that runs the appeal
> system — plus two county offices.

---

# 1. Verdict

**GO — state-level only, with the cap modeled as content (not as a checker flag).**

Arizona is the most structurally distinct of the four states covered so far, and
that is exactly why it earns its own pages:

1. **There are two values for the same property, and they do different jobs.**
   The *full cash value* (FCV) is the assessor's estimate of market value and is
   the value an owner appeals. The *limited property value* (LPV) is a
   formula-driven value that is the basis of the tax. Since Tax Year 2015 no tax
   levy is assessed against the FCV (Proposition 117; Cochise County Assessor).
   A page that says "your appraised value" and means the market value is
   describing the wrong number for the tax, and a page that appeals the LPV
   instead of the FCV is appealing the wrong figure.
2. **The limit is a formula with named exceptions, not a percentage.** A.R.S.
   § 42-13301(A) defines the LPV as the preceding valuation year's LPV **plus
   5%**, and § 42-13301(B) caps it at the current FCV. § 42-13302
   then lists the situations in which the LPV is *re-established* at a level
   comparable to similar property — construction, destruction or demolition
   worth **15% or more of the FCV**, a change in physical use, a split or
   consolidation, or the loss of valuation protection (the senior/disabled
   freeze). An LPV that jumps by more than 5% is usually one of those, not an
   error.
3. **The LPV can rise while the FCV falls.** Verified on the Cochise County
   Assessor FAQ: when the spread between FCV and LPV is large, the LPV keeps
   increasing even in a declining market — but it can never exceed the FCV.
   This is the single most misunderstood fact about Arizona assessments.
4. **The appeal has a real filing standard, and two routes.** A.R.S. § 42-16051
   requires the petition to state the owner's opinion of the FCV **and**
   substantial information justifying it — by stating the valuation method and,
   under the market approach, the FCV of at least one comparable property in the
   same geographic area (or a sale of the subject property). An owner can go
   administratively (assessor → county Board of Equalization → Tax Court) or
   judicially (straight to Tax Court, no later than December 15 of the valuation
   year).

## 1.1 What is verified

Statute text read on azleg.gov:

- **§ 42-13301** — Limited property value. (A) The LPV is the LPV of the
  preceding valuation year **plus five per cent of that value**. (B) The current
  LPV **shall not exceed** the current full cash value. (C) The LPV is shown on
  notices and tax rolls as the total LPV; no separate LPV for land and
  improvements. **VERIFIED**
- **§ 42-13302** — Determining limited value in cases of modifications,
  omissions and changes. The LPV is **re-established** at a level or percentage
  of FCV "comparable to that of other properties of the same or a similar use or
  classification" when: property was erroneously omitted from the rolls; a
  **change in physical, objectively verifiable use** occurred (a change in the
  occupant or classification of a single-family residence is **not** a change in
  use); the property was modified by construction, destruction or demolition
  since the preceding valuation year and **the total value of the modification is
  equal to or greater than 15% of the full cash value**; the property was split,
  subdivided or consolidated (with timing rules for Jan 1–Sep 30 vs
  Oct 1–Dec 31, and separate treatment for government-initiated actions); the
  property previously qualified for **property valuation protection under
  Art. IX § 18(7)** and no longer qualifies or title passed to a non-qualifying
  person; the property previously qualified for a statutory valuation and no
  longer qualifies. **VERIFIED**
- **§ 42-13304** — Exemptions from the limitation. The LPV limitation does not
  apply to: personal property other than mobile homes; and class one property
  under § 42-12001 paragraphs 1–7, 11 and 14. For those, the **FCV is used for
  all purposes** in lieu of the LPV. **VERIFIED**
- **§ 42-15101** — Annual notice of full cash value; amended notice of
  valuation. On any date **before March 1** each year the assessor notifies each
  owner of record of the property's **full cash value and the limited property
  value**, if applicable, to be used for assessment purposes. The notice is sent
  by mail, common carrier or, on request, electronically. On the same date each
  year the assessor **certifies to the board of supervisors and the department
  the date on which all notices were mailed**. The director may extend the final
  mailing date beyond March 1 by **not more than thirty days** for acts of God,
  flood, fire or a declared state of emergency, and the extension applies to all
  property valued by the assessor. **Within sixty days after the mailing** the
  assessor may issue an **amended notice of valuation** when discovered property
  characteristic data for a neighborhood or classification grouping produced an
  incorrect opinion of value (§ 42-15101(E)). After the mailing date an owner may
  inquire and be advised of the valuation, but the assessor may not change the
  roll except as provided by law. **VERIFIED**
- **§ 42-16051** — Petition for assessor review of improper valuation or
  classification. The owner may file a petition on a form prescribed by the
  department. The petition **shall state the owner's opinion of the full cash
  value** and substantial information justifying it, by stating the method(s) of
  valuation: income approach (with the information required by § 42-16052),
  market approach (**including the FCV of at least one comparable property in the
  same geographic area or the sale of the subject property**), or cost approach
  (cost to build or rebuild plus land value). Multiple parcels may be included if
  they form the same economic unit or share owner, use, basis and geographic
  area. **The petition shall be filed within sixty days after the date the
  assessor mailed the notice of valuation or the amended notice of valuation
  under § 42-15101**, and **USPS postmark dates are evidence of the filing
  date**. Petitions for class three property must carry simplified instructions
  and use a separate form. **VERIFIED**
- **§ 42-15003 / § 42-15004** — The assessed valuation of **class three** and
  **class four** property is **10%** of its full cash value **or limited
  valuation, as applicable**. (So the ratio is applied to the LPV wherever the
  LPV applies.) **VERIFIED**
- **§ 42-15001** — The class one ratio schedule phases from 25% (through 2005)
  down to **15% beginning after December 31, 2026**, with 15.5% for the 2026
  tax year. Read to confirm which ratio is *not* residential; the schedule is
  not reproduced on the Arizona pages because it changes by tax year.
  **VERIFIED**

Official state agency (SBOE) and county pages read:

- **Appeal ladder and deadlines (SBOE, "How to File an Appeal" / "How To
  Appeal")**: the assessor mails the notice of valuation on any date **before
  March 1** containing FCV, LPV and property class; step 1 is a **Petition for
  Review with the county assessor within 60 days of the mailing** (deadline
  printed on the notice; forms DOR 82130R residential, DOR 82130 commercial,
  DOR 82530 personal property, DOR 82131 multiple parcels, DOR 82130AA agency
  authorization); the assessor must **consider, decide and answer all requests on
  or before August 15**; **if the assessor agrees with the appeal, no further
  appeal is permitted**; if the petitioner disagrees, a petition to the **county
  Board of Equalization within 25 days of the mailing of the assessor's
  decision**, or a **direct appeal to Tax Court within 60 days** of that
  decision; in **Pima and Maricopa counties only** the appeal goes on to the
  **State Board of Equalization**; a Tax Court appeal must be filed **within 60
  days of the SBOE decision mailing**, and **all tax court appeals are heard at
  Maricopa Superior Court**; if **no** appeal was filed with the county assessor,
  the owner may file in Tax Court **no later than December 15 of the valuation
  year** — the same year the notice of valuation was mailed. The Board does not
  accept appeals by fax or email, nor letters in place of the required forms.
  Amended notices are typically sent by the county assessor in **late
  September**. **VERIFIED**
- **Operational detail (Cochise County Assessor FAQ)**: since **Tax Year 2015 no
  tax levy is assessed against the full cash value** (Proposition 117); "all
  property taxes will be levied against the limited property value"; the LPV "is
  the value used to calculate the property tax bill"; the LPV is a statutory
  calculation based on the previous year's LPV and the new FCV and "is not
  subject to discretionary adjustment by the assessor"; the LPV can increase even
  when the current year's FCV dropped when the spread is large, and **in no case
  can the LPV exceed the FCV**; the 5% limit applies "provided no change in use
  or new construction has occurred since last year's assessment"; **since 2012
  class three (owner-occupied primary residence) is restricted to the primary
  residence** — second homes and vacation homes are class four, and both classes
  have a 10% assessment ratio, but class three receives a state aid to education
  reduction on the bill that class four does not; to change to owner-occupied
  class three the owner files an Application for Reclassification of Property
  with the assessor; values are set in the year **before** the tax year (the 2027
  valuation is set as of January 1, 2026 using 18 months of sales data, i.e.
  2024–2025); the valuation date's market conditions control, and later market
  changes are irrelevant; the assessor is **not a taxing authority** and reports
  the net assessed valuation to the taxing jurisdictions, which set the rates;
  on an appeal the owner must document why the assessment is incorrect because
  there is **no limit on increases in the full cash value**. **VERIFIED**
- **Payment calendar and consequences (Pima County Treasurer)**: taxes are based
  on the property's **assessed limited value**; the assessor notifies the owner
  of the FCV and LPV **by March 1**; the board of supervisors sets the tax rates
  on the **third Monday in August**; the rates are applied to the property's net
  assessed limited value from the previous year; tax statements are mailed each
  **September**; the **first half is due October 1** with delinquency **November
  1 at 5 p.m.**, and the **second half is due March 1** with delinquency **May 1
  at 5 p.m.**; a full-year payment by **December 31** waives interest on any
  unpaid first-half balance; if the total annual tax is **$100 or less** the
  entire amount is due **December 31**; unpaid balances bear interest at a
  statutory **16% per year (1.333% monthly)**; if a delinquency date falls on a
  weekend or legal holiday, taxes become delinquent at 5 p.m. the next business
  day; partial payments are allowed with a minimum of $10 or 10% of the tax due.
  **VERIFIED**

## 1.2 What is NOT verified

| Item | Status | Consequence |
|---|---|---|
| The full text of **Art. IX § 18** of the Arizona Constitution (Proposition 117) | **VERIFIED** (corrected 2026-09-23) | Read in full at `azleg.gov/const/9/18.htm` and registered as `az-const-art9-s18`. An earlier pass failed on the Secretary of State's 2012 publicity pamphlet (403), and this row kept saying NOT VERIFIED after the statute site served the text. It settles three things the pages rely on: the 1% residential ceiling with its exclusions, the historical "Rule A / Rule B" comparison that ran through tax year 2014, and the five per cent test that replaced it for taxes levied from tax year 2015 — which is the constitutional basis of the LPV and of § 42-13301. It also documents the senior property valuation protection option (§ 18(7): apply by September 1, decision by December 1, reapply every three years) that the state pages describe only as existing. |
| The **LPV re-establishment mechanics** beyond § 42-13302 (the practical "Rule A / Rule B" comparison described in secondary sources and in the JLBC Tax Handbook, a PDF) | **NOT VERIFIED** | The pages describe only what § 42-13301 and § 42-13302 say, plus the county-level operational description. No secondary formula is presented. |
| The **amended-notice** practice dates per county, and whether a given county mails amended notices | **NOT VERIFIED** (SBOE says "typically late September") | The notice page states the statutory 60-day power to amend and the SBOE's general timing, and tells the owner that a second notice can restart the 60-day petition clock. |
| **Exemption and relief amounts** (state aid to education reduction, senior/disabled freeze eligibility) | **NOT VERIFIED** | No dollar amount is published. The pages state only that the class three reduction and the valuation-protection program exists and is administered by the county assessor. |
| The **$100-or-less**, interest and partial-payment rules as applied by every county | **VERIFIED for Pima County only** | Presented as the county treasurer's published rules with the county named; the page tells the reader to confirm with their own treasurer. |

---

# 2. Architecture impact

## 2.1 `CapBasis` — no new member needed this time

A.R.S. § 42-13301(A) literally defines the LPV as "the limited property value of
the property in the preceding valuation year **plus five per cent of that
value**". That is an annual increase measured against the prior year's figure,
so `basis: "annual-increase"` is the accurate existing member — unlike
California, where a new member was required.

What must not be lost is **which** figure it is. The cap is registered as
`az-limited-property-value-cap` with `appliesTo: "all-real-property"`, a
`detail` that names the FCV and the LPV separately, a `resetNote` listing the
§ 42-13302 re-establishment triggers, and a `limitations` field that states
(a) the § 42-13304 carve-outs, (b) that the **FCV is not limited**, and (c) that
the 5% figure is not a promise about the tax bill, because rates and the tax
base change independently.

## 2.2 No `homesteadCapQuestion` for Arizona either

Same conclusion as California, with one extra reason:

1. Enabling the engine's cap branch would produce a flag reading "Assessed value
   increased about X% over the prior year" while the input the owner has in hand
   is a **full cash value** — and in Arizona "assessed value" means
   **LPV × 10%**, a much smaller number. The shared component's labels are
   configured for the state that was launched on it.
2. Even with correct LPV inputs, the screen would be wrong whenever a § 42-13302
   exception applies: a re-established LPV (construction of 15% or more of the
   FCV, a change in physical use, a split) lawfully exceeds 5%.

So Arizona registers its cap as a rule (content, tests, future work) and the
pages state plainly that a year-over-year screen would be misleading here until
a tool that takes **both** values and asks the § 42-13302 questions exists.

## 2.3 Value chain (3 steps, with the ratio made explicit)

```
Full cash value (FCV)          the assessor's estimate of market value as of Jan 1
                               of the valuation year — the value you appeal
   └─ Limited property value   prior valuation year's LPV + 5%, never above the FCV,
      (LPV)                    except when § 42-13302 re-establishes it
        └─ Assessed value      assessment ratio for the legal class (10% for class
           (net assessed        three and class four) applied to the LPV — the figure
           valuation)           the tax rates are applied to
```

## 2.4 Deadlines

Arizona produces a mix the registry already models: a fixed date (notice before
March 1, payment halves), a rule anchored to a mailing (§ 42-16051's 60 days,
which can restart with an amended notice), a short decision window (25 days to
the county Board of Equalization), and a hard fallback (December 15 in Tax
Court if no administrative appeal was filed). One new `DeadlineType` is added
(`"decision"`) for the assessor's August 15 obligation, which is not a hearing
and not a filing.

---

# 3. Page plan (6 pages, state-level only)

| # | Path | Why it earns its own URL |
|---|---|---|
| 1 | `/arizona-property-tax/` | FCV vs LPV vs assessed value, the legal class ratios, and the valuation-year/tax-year offset — none of the other three states has any of this. Worked example computing a tax base from an LPV. |
| 2 | `/arizona-property-tax/full-cash-vs-limited-value/` | § 42-13301's 5% and ceiling, and § 42-13302's complete list of re-establishment triggers including the 15%-of-FCV construction threshold. This is the page that answers "why is my LPV up more than 5%?" |
| 3 | `/arizona-property-tax/notice-of-valuation/` | § 42-15101: the before-March-1 notice, the certified mailing date, the 30-day emergency extension, and the 60-day power to issue an **amended** notice — which resets the petition clock. |
| 4 | `/arizona-property-tax/petition-for-review/` | § 42-16051's filing standard (your opinion of the FCV plus a method plus a comparable in the same geographic area), the forms, the August 15 decision, "if the assessor agrees, no further appeal", then the county Board (25 days), Tax Court (60 days), or the December 15 direct route. |
| 5 | `/arizona-property-tax/appeal-evidence/` | What § 42-16051(B) requires by method, the owner's burden given that the FCV has no cap, the valuation date and the 18-month sales window, and the frequency evidence: class three vs class four. |
| 6 | `/arizona-property-tax/deadlines/` | Rendered from the deadline registry: valuation date, notice, petition, decision, board, Tax Court, and the two payment halves with their consequences. |

**No Arizona county pages.** The pilot-county bar (verified local appeal
procedure page, current-year deadline verifiable from that page, public property
search with stable URLs, documented filing channel, terminology consistent with
state law) has not been applied to Maricopa, Pima or any other Arizona county,
and Maricopa's own site was not readable from this environment.

---

# 4. Sources registered

| Source ID | Publisher | What it backs |
|---|---|---|
| `az-ars-42-13301` | Arizona Legislature (A.R.S. on azleg.gov) | LPV = prior valuation year's LPV + 5%; LPV never exceeds FCV; single total LPV per parcel |
| `az-ars-42-13302` | Arizona Legislature | The complete list of LPV re-establishment triggers, including construction/destruction ≥15% of FCV and the "change of occupant is not a change in use" rule |
| `az-ars-42-13304` | Arizona Legislature | The limitation's carve-outs (personal property; specified class one property) where the FCV is used instead |
| `az-ars-42-15101` | Arizona Legislature | Notice before March 1 with FCV and LPV; certified mailing date; 30-day emergency extension; 60-day power to issue an amended notice |
| `az-ars-42-16051` | Arizona Legislature | 60 days from mailing (or amended mailing); petition must state the owner's opinion of FCV and the method, with at least one comparable in the same geographic area; postmark evidence; class three simplified form |
| `az-ars-42-15003` | Arizona Legislature | Class three assessed valuation = 10% of FCV or limited valuation, as applicable |
| `az-ars-42-15004` | Arizona Legislature | Class four assessed valuation = 10% of FCV or limited valuation, as applicable |
| `az-ars-42-12003` | Arizona Legislature | The class three definition itself, so the primary-residence restriction is quoted from statute and not from a county FAQ |
| `az-ars-42-12004` | Arizona Legislature | The class four definition, including that it catches residential property the other classes do not |
| `az-const-art9-s18` | Arizona Legislature (Constitution of Arizona) | The 1% residential ceiling and its exclusions; the pre-2015 "Rule A / Rule B" comparison; the five per cent test from tax year 2015 that is the constitutional basis of the LPV; the senior property valuation protection option and its deadlines |
| `az-sboe-how-to-appeal` | Arizona State Board of Equalization | The three-step appeal ladder and its windows, the forms, August 15 decision, no-further-appeal when the assessor agrees, the December 15 Tax Court route, Maricopa Superior Court venue |
| `az-cochise-assessor-faq` | Cochise County Assessor | Taxes levied on the LPV since Tax Year 2015; LPV rises while FCV falls and never exceeds FCV; 5% subject to no change in use or new construction; class three restricted to the primary residence since 2012; class ratios; valuation year and 18-month sales data; the owner's burden on appeal |
| `az-pima-treasurer-info` | Pima County Treasurer | Assessment on the assessed limited value; rates set the third Monday in August; September statements; the two payment halves and delinquency dates; full-year by December 31; the $100 rule; 16% interest; next-business-day rule; partial payments |

---

# 5. Tests plan (`tests/arizona.test.ts`)

1. Rules exist; the cap is `az-limited-property-value-cap`, `annual-increase`,
   5%, `appliesTo: "all-real-property"`; the detail names both FCV and LPV.
2. Arizona has **no** `homesteadCapQuestion`, and `runChecker(..., "arizona")`
   fires **no** cap flag — asserted so a future editor cannot enable a screen
   that would mislabel a full cash value as an assessed value.
3. Zero bleed of other states' law or vocabulary: no `tx-`/`fl-`/`ca-` source
   ids, no "Tax Code", no "Save Our Homes", no "TRIM", no "appraisal district",
   no "Proposition 13".
4. The 15%-of-FCV construction threshold and the "no change in use" statement
   are present in the cap's `resetNote` (the two facts a reader needs to know why
   an LPV can exceed 5%).
5. Every Arizona deadline is `source-verified`, resolvable, and the petition
   record is `rule-based` anchored to the certified mailing of the notice or
   amended notice.
6. Sources are partitioned, all primary, all with a verification date, and the
   publishers are only Arizona state government and Arizona county offices.

---

# 6. Open items (carry forward)

- ~~**A1:** read Art. IX § 18 of the Arizona Constitution (Prop 117).~~
  **CLOSED 2026-09-23.** Read in full at `azleg.gov/const/9/18.htm` and
  registered as `az-const-art9-s18`. The SoS pamphlet 403 was a dead end, not a
  blocker: the Legislature serves the constitution itself. This is where the
  five per cent test turns out to live in the constitution rather than only in
  the statute, and where the senior valuation protection option's September 1
  and December 1 dates are stated.
- ~~**A2:** read § 42-12003 and § 42-12004 (the class three and class four
  definitions).~~ **CLOSED 2026-09-23.** Both read and registered
  (`az-ars-42-12003`, `az-ars-42-12004`). The primary-residence restriction on
  class three is now quoted from the statute rather than from a county FAQ.
- **A3 (open):** the Arizona checker: it needs two inputs (FCV and LPV) and the
  § 42-13302 questions before it can screen anything honestly.
- **A4 (open):** county pages (Maricopa, Pima) only after the 5-point pilot
  test, and only then can the county-level amended-notice practice be stated as
  fact.

# Nevada expansion — research and implementation notes

Scope: adding Nevada to the site alongside Texas, Florida, California and
Arizona, at the same standard: primary/official sources read directly, no
unsourced numbers, no borrowed terminology, and an explicit record of what could
not be verified.

Research date: 2026-09-23. Target tax year: Nevada fiscal year 2026/2027
(July 1, 2026 – June 30, 2027).

---

## 1. Sources read in full

All eight are official: Nevada county assessor/treasurer offices and the Nevada
Department of Taxation. Nothing here is a third-party explainer.

| # | Source | Publisher | What it supplied |
|---|---|---|---|
| 1 | Tax Cap/Abatement Information | Washoe County Assessor | AB 489 (2005) origin of the abatement; 3% for the owner's primary residence and a higher cap for other property; property new to the roll (new parcels, new construction, change of use) has no cap; the affidavit/claim cycle; the abatement level appears on the tax bill |
| 2 | Important Dates | Washoe County Assessor | The whole fiscal calendar: July 1 lien date, FY runs July 1–June 30, January 1 close of the roll and deadline for value notices (NRS 361.310), January 15 County Board of Equalization appeal, March 10 State Board appeal, June 15 exemption renewal and rental tax-cap form, June 30 partial-abatement petition for review, July 5 exemption for property acquired June 15–July 1, four installments |
| 3 | Petition To Review Partial Abatement | Washoe County Assessor | NRS 361.4734 petition; the two cap levels (general/"high cap" up to 8%, primary residence and residential rental/"low cap" 3%); new-to-roll values excluded; remainder parcels (NRS 361.4722); June 30 filing deadline; 15-day acknowledgment, 30-day decision, appeal to the Nevada Tax Commission within 30 days (NAC 361.61064); the statute map NRS 361.471–361.4735 and NAC 361.601–361.609 |
| 4 | Assessor FAQ (Real Property / Tax Cap / Public Service sections) | Washoe County Assessor | The mechanics: the bill is the lower of assessed value × rate or the prior year's bill plus the cap; the abatement is the difference; base year FY 2004/05 and per-parcel base years for later parcels; what a decrease in value does and does not do to the bill; why a bill can exceed the cap; exemptions apply after the cap; status is set on July 1; the definition of primary residence; who sets the rate; the value appeal at the County Board of Equalization by January 15 with the burden of proof on the taxpayer; "Is My Taxable Value Capped? No, only the amount of increase on your tax bill is capped." |
| 5 | Billing Information — Taxes | Washoe County Treasurer | Rates set in June, bills mailed by August 1; due the third Monday in August; installments allowed when the taxes exceed $100; FY 2026/2027 installment dates and the last day to pay without penalty (ten days after each date); penalties per NRS 361.483; trustee's certificate filed the first Monday in June and a two-year redemption period |
| 6 | Real Property | Clark County Assessor | Taxable value and the cost method (land at market, improvements at current replacement cost less statutory depreciation of 1.5% per year capped at 50 years, updated annually, Marshall & Swift per NAC); the .35 assessment ratio with a worked example; the abatement as "assessed value or the prior bill plus the cap, whichever is lower"; value appeals at the County Board of Equalization, forms available in December, filing deadline January 15, then the State Board of Equalization, then District Court |
| 7 | Tax Abatement | Clark County | Who gets 3% (owner's primary residence: single-family house, townhouse, condominium or manufactured home — only one property in the state may be designated), who gets up to 8% (non-owner-occupied residences, land, commercial buildings, business personal property, aircraft); new construction and change of use receive no cap for the fiscal year but do from the next one; rental affidavits and the FY 2026/2027 HUD maximum rents; any recorded ownership document removes the owner-occupied 3% abatement until a new postcard is completed; a refinance with no ownership document does not affect it |
| 8 | Local Government Services Publications | Nevada Department of Taxation | The Department publishes the general abatement (tax cap) factors used by county officials and a tax cap explanation; fair market rents for the rental abatement, which NRS 361.4724 ties to the HUD fair market rent for the county |

## 1.1 The two things that make Nevada a genuinely different state

1. **The cap is on the tax bill, not on a value.** Every other jurisdiction on
   the site caps a *value* (Texas the appraised value, Florida the assessed
   value, California the base year value, Arizona the limited property value).
   Nevada caps *the amount of tax*, as an increase over the prior year's bill:
   the bill is the lower of the calculated tax (assessed value × rate) or the
   prior bill plus 3% (or up to 8%). The consequence, stated by the county
   assessor in as many words, is that **the cap does not limit the increase in
   assessed value at all**, and that a fall in assessed value does not
   necessarily lower the bill.
2. **The rate is capped too, separately.** The abatement caps the change in the
   bill; a different statute (NRS 361.453, named by the Washoe County
   Assessor) limits the tax rate itself, and the assessor notes that some rates
   are excluded from that limitation.

That combination — a cap on the bill *and* a cap on the rate — is why a Nevada
bill can behave in ways no other state on this site does, and it is the reason
Nevada earns its own pages rather than being folded into the comparison.

## 1.2 What could not be read (and how that changes the provenance class)

- **The Nevada Revised Statutes text itself.** `leg.state.nv.us` returns **403
  Forbidden** to this environment on every path tried (the chapter page for NRS
  361, the NRS index, and the AB 377 bill PDF). The statute text was therefore
  never read directly. Every NRS section number in the Nevada content comes
  from an official county or Department page that names the section for the rule
  it describes.
- **Assembly Bill 377 (2025).** A secondary report (Bloomberg Tax, 2025-06-06)
  states that it was enacted, took effect May 31, 2025, and prescribes how an
  owner claims a partial abatement; a June 2026 report describes Tax Commission
  regulations implementing it as still being adopted. The bill text and the
  regulations were not readable here. The content therefore states the claim
  rule as the counties document it (a signed claim, maintained until an
  ownership change, address change or notified status change) and **attributes
  nothing specific to AB 377**.
- **PDFs.** The Department's rate books ("Redbook"), its tax-cap explanation and
  the county system explainers are PDFs, which this environment cannot extract.
  The numeric rate ceiling (widely published as $3.64 per $100 of assessed
  value) therefore does **not** appear as a stated figure on the site: the pages
  name the statute that caps the rate and describe the mechanism, and say why
  the number is not published here.

Provenance class: **same as California** (rules documented from official
agencies that restate them), **not** the Arizona class (statute text read
directly). This is recorded so a later reviewer does not over-credit it.

## 1.3 Anti-clone check

What Nevada content must contain that no existing state's content contains:

- the lower-of-two-calculations bill structure and the abatement concept;
- the fiscal-year clock (July 1 lien date, July 1–June 30 year, value notices
  around November/January 1) instead of a January 1 lien date or a July–June
  Texas roll;
- the 35% assessment ratio between value and the taxed figure;
- the primary-residence *claim* and its loss on a recorded ownership document;
- two separate appeal tracks: value to the County Board of Equalization by
  January 15, and the abatement determination to the assessor by June 30;
- the HUD fair-market-rent test for the 3% cap on rentals;
- the "new to the roll" exclusion, which is the Nevada answer to "why did my
  bill jump far beyond the cap?"

If any of those were dropped, the pages would be a re-skin of another state's.
They are the reason the pages exist.

---

## 2. Decisions taken in the code

### 2.1 `capSubject`: the subject of a cap is now explicit

`CapRule` gained a required `capSubject: "assessed-value" | "tax-amount"`.
Until Nevada, "which figure does this percentage limit?" had one answer across
all four states — a value — so the field was implicit. Nevada makes it two:
its caps bound the tax amount. Making the field explicit, and setting it to
`"assessed-value"` on the six existing rules, means a future state cannot
inherit Nevada's shape by silence.

### 2.2 `appliesTo` gained `"primary-residence"` and `"other-property"`

Nevada's low cap is not Florida's homestead cap: it attaches to a
primary-residence *designation/claim* that the owner makes and can lose (Clark
County: a recorded ownership document removes it), not to a homestead exemption.
The general abatement attaches to everything else, so `"other-property"`
describes the second rule honestly rather than calling it "non-homestead
residential" (which is Florida's term for a narrower category).

### 2.3 No `homesteadCapQuestion` for Nevada — and this time the reason is arithmetic

The shared checker compares a value in year *n* against year *n−1* and flags a
gap above the cap. In Nevada that comparison is **meaningless for the cap**: an
assessed value may rise by any percentage while the tax bill is correctly
abated, and the county assessor says so directly ("Is My Taxable Value Capped?
No, only the amount of increase on your tax bill is capped"). Nevada would need
a checker that takes the prior year's *tax bill* and the current calculated tax
— a different input model, not a different label. Until that exists, the pages
say why the screen is not offered, in the same way the California and Arizona
pages do.

### 2.4 New `DeadlineType` members

`assessment-roll` (January 1 close of the roll and the value-notice mailing) and
`abatement-claim` (the June 15 rental claim and the primary-residence claim).
Neither is a protest filing, a VAB petition or an exemption application, and
labelling them as any of those would mis-describe the obligation.

### 2.5 The three installments are recorded as rules with the published year's dates

Nevada's payment dates are rules ("the third Monday in August", "the first
Monday in October", …) and the Washoe County Treasurer publishes the resulting
dates for the fiscal year. The registry keeps `deadlineBasis: "rule-based"` with
the rule text, and carries the published dates for FY 2026/2027 as `fixedDate`
only where the treasurer states them, plus the ten-day penalty grace period the
same page states.

## 3. Open points

- **N1 — the statutes were not read.** All NRS citations come from official
  agency pages that name the section. If a future session can reach
  `leg.state.nv.us`, sections 361.471–361.4735, 361.227, 361.453 and 361.4734
  should be read and the registry notes upgraded.
- **N2 — AB 377 (2025) is not characterised.** The claim mechanism the content
  describes is the one the counties document. What the 2025 legislation changed
  about claiming, and when the implementing regulations took effect, remain
  unverified here.
- **N3 — the rate ceiling is named, not quantified.** NRS 361.453 is named as
  the rate-cap statute because the Washoe County Assessor names it; the dollar
  figure is not published on the site because its sources are PDFs that could
  not be read.
- **N4 — county coverage.** State-level content only. Nevada has 17 county
  assessor offices and the abatement *level* and the appeal windows are
  administered locally; no county page is published until a county passes the
  same test used for Miami-Dade (verified local procedure page + a current-year
  deadline).

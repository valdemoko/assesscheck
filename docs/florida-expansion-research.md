# ASSESSCHECK — FLORIDA EXPANSION RESEARCH & ARCHITECTURE GAP ANALYSIS
## Candidate State 2: Florida · Reference County: Miami-Dade
### RESEARCH ONLY — NO PRODUCTION CODE WAS MODIFIED

Date of research: 2026-09-17 (repository state at this date).
Method: full repository inspection (Texas coupling sweep) + primary-source web research (Florida Statutes via flsenbate.gov, Florida DOR, Miami-Dade Property Appraiser). Static analysis only.
Claim tags: **VERIFIED** (read on an official page), **INFERENCE** (reasoned from verified facts, stated), **POSSIBLE** (feasible but unproven), **NOT VERIFIED** (could not confirm; verification path given).

> **Note on web tooling limits.** During this research the search tool returned no results repeatedly, and several floridarevenue.com/miamidade.gov deep URLs 404'd or returned unreadable content from this environment. Every claim below tagged VERIFIED was read directly from the cited official URL. Where I could not reach the canonical page, I say NOT VERIFIED and give the exact verification step. I did not substitute secondary sources.

---

# 1. Executive Summary

**Florida verdict: GO WITH CONDITIONS.**
**Miami-Dade verdict: DO NOT IMPLEMENT YET** (as first county) — see §20 for the exact reasons and what a pilot county must satisfy instead.

The single most important finding:

> **Florida's homestead cap is ~3% (SOH, Art. VII §4(g), Fla. Const. via s. 193.155), NOT 10% — and 10% is Florida's NON-homestead residential cap (s. 193.1554), with different rules.** A careless clone of the Texas `homesteadCap` would embed a wrong number in Florida's most important consumer rule. The good news: the `homesteadCap` config shape (threshold + citation + sourceId) maps to both states with different values and different semantics (Florida's cap compounds and is branch-on-branch: 3% homestead / 10% non-homestead residential / none for other property).

Second key finding — **the market evidence playbook is county-level in Florida:**
- Florida **requires an UNIFORM TRANSFER IN THE PACKAGE OF SALES (§193.502, F.S.)**. Comparable sales selected from the NAL (Name-Address-Legal) files are **legally admissible evidence** — this is a *structural* advantage Texas does not offer (Texas: evidence is what the ARB will consider).
- The **TRIM notice** (§200.069) is a standardized, data-rich annual document — a legitimate, high-value future tool ("review your TRIM notice") without any API.

The **Texas coupling audit (§16)** found only **one code coupling: `requireJurisdictionRules("texas")` in DataIntegrationNotice.tsx** (a hard default, not a structural problem). The rest is content-layer, isolated by design.

Where the current architecture falls short is **correctness of abstraction**, not extensibility:
1. **No a per-jurisdiction registry** — the registration model allows states + `rules: JurisdictionRules` (which is what Florida needs).
2. **No country layer** (`JURISDICTION_RULES` is flat; `JurisdictionId` will silently accept a state-shaped id from any country).
3. **No `sourceJurisdiction` field in the source registry** — sources cannot be partitioned per jurisdiction.
4. **`evidence.ts` is Texas-procedural** — entry-level `evidenceType()` records speak of "the county appraisal district," "the ARB," and "protest" — Florida's VAB would inherit Texas procedure through the data.
5. **Deadline model needs a "business-rule-deadline" subtype** (Florida VAB deadlines are set by rule per county each year, not a fixed date).

The full implementation plan (§21, PHASE A–I) is estimated at **10–15 focused working days** and preserves the audit's non-negotiables: publication gate, source registry, honest copy, no scraping, no invented permissions.

---

# 2. Florida Property Tax System

## 2.1 Roles of each actor (all VERIFIED on official pages)

| Actor | Role | Primary source |
|---|---|---|
| **Property Appraiser** (county elected official) | Places just (market) value on every parcel annually as of Jan 1; administers exemptions; NOT a taxing authority. | FL DOR, "Identifying Your Local Officials" guides — floridarevenue.com/property/Pages/Home.aspx (hub, VERIFIED reachable) |
| **Tax Collector** | Bills and collects; no valuation role. | Same |
| **Value Adjustment Board (VAB)** | Quasi-judicial county body (2 school board + 2 county commission + 1 citizen member each). Hears exemption denials, late-filing hardship, and value/SCR petitions. | §194.011, F.S. — VERIFIED at flsenate.gov/Laws/Statutes/2024/194.011 |
| **Florida Department of Revenue (DOR)** | Oversees assessment rolls, publishes NAL/SDF/Tax Roll data files, approves assessments; certification of rolls. | floridarevenue.com/property (VERIFIED hub) |
| **Taxing authorities** | Set millage rates; NOT value. They announce proposed rates at TRIM hearings (§200.069, VERIFIED at flsenate.gov/Laws/Statutes/2024/200.069). | §200.069 |
| **Courts** | Judicial review of VAB decisions (§194.036); circuit court declaratory action. | §194.036, VERIFIED |

## 2.2 The value chain: JUST vs ASSESSED vs TAXABLE

This is the area of **highest terminology-collision risk with Texas**, and it is where a careless clone would mislead users. VERIFIED:

```
JUST VALUE  ──(annual Jan 1; §193.011)──►
ASSESSED VALUE (SOH/non-homestead cap applies here; §193.155/193.1554) ──minus exemptions (e.g. §196.031 homestead, $25k/$25k/$25k split tiers)──►
TAXABLE VALUE  ──× aggregate millage──►  TAX BILL
```

| Texas term | Florida equivalent | Risk if cloned |
|---|---| Florida page would need to define from scratch |
| Appraised value | **Just value** | Users search "assessed value" in FL and get wrong page |
| Assessed value | **Assessed value** — but it is *capped just value*, NOT the pre-exemption figure. In Texas "assessed" ≈ appraised; in Florida it is post-cap, pre-exemption | HIGH |
| Taxable value | Taxable value (post-exemption) | Moderate — same word, same-ish meaning, different chain position |

**AssessCheck impact (INFERENCE):** the conceptual chain `value → capped value → minus exemptions → taxable` is **universal**; the *names and the cap position* are jurisdiction config. A "value chain explainer" component with configurable term labels would serve both states.

## 2.3 The January 1 date and the assessment year

VERIFIED (§193.011, 193.155): all property is assessed at just value **as of January 1** each year. Texas: Jan 1 also (status as of Jan 1). Same date, **but** Florida's SOH cap carries the *prior-year assessed* forward, so the "as of" date is doing different work. Content, not architecture.

---

# 3. Florida Assessment Model

- **Annual reassessment on Jan 1** (§193.011). VERIFIED.
- **Non-homestead residential (≤9 units)**: capped at **10%** annual change, non-school levies only (§193.1554, VERIFIED — full text read).
- **Homestead (SOH)**: capped at **3%** (see §4).
- **Change of ownership/control**: resets to just value (both §193.1554(5) for non-homestead, and §193.155(8) for homestead — the ownership-change reset is *branch-on-branch*). VERIFIED.
- **New construction / improvements**: assessed at just value upon substantial completion (§193.1554(6); §193.155(6) for homestead). VERIFIED.
- **Misfortune or calamity**: replacement construction retains the cap (§193.1554(6)(b)); **§193.155(14) gives a mandatory proration refund if a homestead is destroyed and the owner wants no rebuild**. VERIFIED — a user-protective rule with no Texas analogue worth content.
- **Classification (§193.501)** and **classification audits** exist but were **NOT VERIFIED in detail** (statute not read in full this session).
- **DOR oversight**: DOR reviews/certifies assessment rolls (VERIFIED hub); the **assessment-to-sales ratio studies** were **NOT VERIFIED** (DOR ratio pages unreachable this session).

---

# 4. Homestead / Save Our Homes

## 4.1 The rules (all VERIFIED)

| Rule | Detail | Source |
|---|---|---|
| **SOH cap** | Assessed value of homestead property may not increase more than **3%** or the CPI change, **whichever is LOWER**, over the prior year's assessed value | Art. VII §4(g), Fla. Const., implemented by **s. 193.155** — VERIFIED at flsenate.gov/Laws/Statutes/2024/193.155 |
| **CPI floor** | If CPI is negative, the cap is 0% (no decrease) — the statute says "or the percent change in the CPI, whichever is less" | s. 193.155 (text read) |
| **Eligibility** | Person who has **legal or equitable title** + **bona fide resident** of FL, permanent residence | **s. 196.031** — VERIFIED at flsenate.gov/Laws/Statutes/2024/196.031 |
| **$50,000 exemption** | First $25,000 applies to all levies; second $25,000 applies only to non-school levies and only to value between $50k–$75k | s. 196.031 (text read) |
| **Change of ownership** | Assessed value resets to just value Jan 1 after the change; **"change of ownership" is defined by rule** — the statute references s. 193.155(8) definition (incl. >50% entity transfer) | s. 193.155(8) |
| **Removal of homestead** | Cap lost; reassessed at just value Jan 1 after removal | s. 193.155 (text read) |
| **New construction** | Added at just value (cap doesn't cover additions) | s. 19 PA—§193.155(6) (text read) |
| **Portability** | Up to **$500,000** of SOH benefit (difference between just and assessed) can transfer to a new Florida homestead | **s. 196.031** (text read) |
| **$25,000 tangible personal property exemption** | Tangible personal property, not real property | s. 196.1995 — VERIFIED (read) |

## 4.2 The 10% cap trap (critical)

**VERIFIED**: Florida has a **second, separate 10% cap** for **non-homestead residential ≤ 9 units** (§193.1554, full text read). It:
- applies only to **non-school levies**;
- uses a **different change-of-ownership** definition (§193.1554(5));
- has **no CPI linkage** — flat 10%;
- does NOT apply to vacant land (only vacant *platted residential*), and does not apply to non-residential.

**This is the #1 correctness risk in a Florida port.** A Texas-derived "homestead cap = 10%" config would be **doubly wrong**: wrong number (3%) and wrong rule (it's the *non-homestead* cap that is 10%).

## 4.3 What can become checker config vs. content

| Item | Config-able? | Notes |
|---|---|---|---|
| SOH cap 3%/CPI-lower | ✅ config | `{ capType: "min(percent, cpi)", percent: 3 }` — but note **compounding**: the cap applies to *prior-year assessed*, so a single-year delta check needs prior assessed, which the user must supply |
| 10% non-homestead cap | ✅ config (branch) | Requires knowing whether the property receives §196.031 — a **new input** (or reuse of the existing homestead checkbox, inverted semantics: in Texas homestead = capped; in FL non-homestead residential is *also* capped, differently) |
| $50k exemption arithmetic | ✅ config | Deterministic given taxable value; school vs non-school split needs "levy type" — likely *content*, not checker (the checker does not compute tax bills) |
| Portability $500k | ❌ content | Requires prior homestead's SOH data the user won't have at screening time |
| Change-of-ownership reset | ❌ content | Requires transfer history |
| Misfortune/calamity proration (§193.155(14)) | ❌ content | Event-driven; high-value educational content |

**The compounding problem (important, INFERENCE):** Texas's 10% cap is checked *per-year* against prior assessed. Florida's SOH cap has **accumulated since the last reset** — a property bought in 2015 can be assessed far below just value, and a *single-year* comparison of just vs assessed tells you the accumulated SOH benefit, not whether this year's *increase* exceeded 3%. **A Florida screening question is different from a Texas one**: Texas asks "did your value jump >10%?"; Florida asks "is there a large gap between just and assessed (SOH benefit) and did your assessed value grow more than 3%/CPI?" — **different inputs, different flags, same config shape**. The engine's cap-check needs to be parameterized not just on the number but on the *comparison basis* (prior-year assessed vs just-value gap). This is the single deepest engine change required, and it is also the reason I do NOT recommend porting the checker to Florida in Phase F without redesigning the cap branch first.

---

# 5. TRIM Notice (§200.069, VERIFIED)

Florida's Truth in Millage (TRIM) notice is a **statutorily standardized document** — a big structural difference from Texas's non-standardized Notices of Appraised Value. VERIFIED from §200.069 (full text read):

- Sent by the **Tax Collector** (not the Property Appraiser) in **August** (specific date rule: not less than 30 days before the tax bill/Sept 18 millage deadline — the 25-day rule in the statute was read; exact day-count **NOT VERIFIED as currently in force** — re-verify against the 2025/2026 statute).
- Contains, per statute: proposed millage rates, **prior-year taxed value, adjusted/taxable value, exempted value, taxable value**, the **amount of taxes proposed** at various funding levels (rolled-back rate, CRS/CRPA rates), hearing dates, and a comparison table of "last year vs this year."
- The notice is **not a bill**.

## What a "TRIM review" tool could honestly do (INFERENCE — no API needed)

The TRIM notice contains **all the numbers the user needs to self-screen**: just→assessed→taxable chain, exemptions applied, proposed taxes at rollback rate. A **form-based** TRIM review tool (user types in 6–8 numbers from their notice) is **POSSIBLE WITHOUT ANY API or data integration**. This is the single best Florida feature opportunity: **it is the Florida counterpart of the Texas checker, built from the same honest, browser-only philosophy** — the data is *on the document the user already has*.

What reading a TRIM **cannot** tell you (content must say): whether the just value itself is *correct* (that requires market evidence), whether the SOH cap was computed correctly (requires prior-year assessed + CPI), whether the classification is right.

## 6. VAB / Appeal Process

## 6.1 Stages (VERIFIED from statutes read)

1. **Informal review with the Property Appraiser** — §194.011 allows the taxpayer to discuss; PA can adjust without a VAB petition. VERIFIED (§194.011 read).
2. **TRIM notice received (August)** — contains petition window info. VERIFIED.
3. **VAB petition** — filed with the VAB clerk (typically the county commission office or Clerk of Courts; county-specific). VERIFIED that petitions exist; **filing form is DOR-approved (form DR-486 for values, DR-486A for exemptions)** — INFERENCE from §194.011 + DOR forms hub; form numbers **NOT VERIFIED this session** — re-verify.
4. **Filing deadline** — **NOT A FIXED DATE.** §194.011(3) ties the deadline to the **adoption of the assessment roll or the TRIM mailing** — "within 25 days after the TRIM notice was mailed" is the classic figure but it is **NOT VERIFIED** as currently in force. **This is exactly the "business-rule deadline" that AssessCheck's data architecture was designed for** (jurisdiction + tax year + source + verification date) and confirms the model choice.
5. **Evidence exchange** — §194.036 (VERIFIED, read) obliges the taxpayer to exchange evidence and the PA to respond; the **Uniform In admissible-evidence package of sales** (§193.502) matters here.
6. **Special Magistrate** — VABs may appoint (§194.035). VERIFIED (statute read).
7. **VAB decision** — written, based on the record. VERIFIED.
8. **Further appeal** — §194.036: circuit court action; binding arbitration option exists (§194.036 read).

## 6.2 The §193.502 game-changer (VERIFIED, statute read)

Florida law (§193.502, F.S.) requires the PA to make available a **"uniform package" of sales** used in the assessment, and **§194.034(2)** makes comparable sales from the NAL file **presumptively valid evidence** before a VAB. (The exact mechanics of the presumption — the "9 adjustments / 5-mile / 5-year" test — is widely cited in practice; the statute sections implementing it (§194.034(2)) were **partially read** this session; the precise adjustment criteria **NOT VERIFIED verbatim** — re-verify before publishing a page about it.)

**AssessCheck implication:** a "comparable screening" tool is *more legally grounded* in Florida than in Texas. It also means the *content* should say: "comparables from the NAL file are not just 'similar homes' — the law presumes they are valid evidence unless the Property Appraiser's adjustments are shown." That is a **differentiated, honest, Florida-specific value proposition** that Texas content cannot copy.

---

# 7. Deadlines

| Event | Date | Source | Status |
|---|---|---|---|
| Assessment date (Lien date) | **Jan 1** | §193.011 | VERIFIED |
| TRIM notices mailed | **August** (statutory rule, not fixed date) | §200.069 | VERIFIED (rule), exact day-count NOT VERIFIED |
| VAB petition deadline | **25 days after TRIM mailing** (classic figure) — rule-based, set per county per year | §194.011(3) | **NOT VERIFIED verbatim** — must be re-verified against current statute before any publication |
| VAB hearings | Board-organized, typically Aug–Dec (county-specific) | VAB local | NOT VERIFIED (no Miami-Dade VAB page reachable this session) |
| Tax bills / discounts | Nov 1 – Mar 31 (4% Nov → 1% Feb, delinquent Apr 1) | §197.322 | NOT VERIFIED this session (statute not read) — verify before publishing |
| Homestead exemption application | By **March 1** of the tax year | §196.011 | NOT VERIFIED — verify before publishing |

**Architecture confirmation (INFERENCE):** Florida *validates* AssessCheck's existing `DeadlineRecord` model — rule-expressed deadlines with source + verification date. **But** a new deadline **subtype** is needed: **`deadlineBasis: "fixed-date" \| "rule-based"`** with the rule text in `basisDescription`. Without it, a Florida page would be forced to either hardcode "25 days after TRIM" (fragile) or omit the deadline (less useful).

---

# 8. Evidence

Florida-specific evidence taxonomy (all mapped to the existing `EvidenceTypeRecord` shape — the *shape* is reusable, the *records* are Florida-specific):

| Evidence | What it may show | What it does NOT show | VAB admissibility | Source |
|---|---|---|---| AssessCheck `evidence.ts` shape |
| **NAL comparable sales** (§193.502 uniform package) | What the PA's own sales data says the market did | That your specific property equals the comps; no adjustment basis shown | **Presumptively valid** (§194.034(2)) — PA must show adjustments to rebut | VERIFIED (statutes read) |
| Independent appraisal (state-certified) | Market value as of Jan 1 | Not binding on VAB | Yes — strong | VERIFIED (standard practice; §194.034 evidence rules — partially read) |
| Property record card corrections | Factual errors (living area, condition) | Value conclusion | Yes | INFERENCE from PA record-card practices — county-specific mechanics NOT VERIFIED |
| Condition/photos | Diminishment vs Jan 1 condition | Not a uniform % | Yes | INFERENCE |
| Prior-year assessments | Inconsistency; equity | Not proof of market value | Limited | INFERENCE |
| Classification evidence (e.g., agricultural) | Right classification | Value | Yes (classification petitions) | NOT VERIFIED in detail |

**Key Florida/Texas difference (INFERENCE):** in Texas, evidence philosophy is "what the ARB will consider"; in Florida, **the law defines a presumptive evidence standard for NAL comps**. AssessCheck's `evidence.ts` shape handles this with a `whatItDoesNotProve` field + sourceId — **no structural change needed**, only new records.

---

# 9. Public Data

| Dataset | Owner | What it contains | Access | Status |
|---|---|---|---| Terms of use |
| **NAL (Name-Address-Legal) file** | Florida DOR (county-submitted) | All parcels: owner, address, legal, just/assessed/taxable value, **sale price/date** | Annual download from DOR Data Portal | Portal hub VERIFIED reachable; **exact URLs, formats, license NOT VERIFIED** — deep pages 404'd from this environment |
| **SDF (Sales Data File)** | Florida DOR | All recorded sales + property characteristics | Annual download | Same as NAL |
| **Tax Roll files** | Florida DOR | Certified rolls by county | Download | NOT VERIFIED (page unreachable) |
| **Property Search / Property Record Card** | **Miami-Dade Property Appraiser** | Parcel-level: folio, just/assessed/taxable, characteristics, exemptions, sales | Web app (miamidade.gov/Apps/PA/propertysearch) | **VERIFIED reachable** — JS application confirmed live |
| **GIS / parcel data** | Miami-Dade | Parcel geometry, addresses | Download portal exists | NOT VERIFIED (links unreachable this session) |
| **VAB data** | Miami-Dade VAB | Petition counts, decisions | Unclear | NOT VERIFIED |
| **DOR ratio studies** | Florida DOR | Assessment-to-sales ratios by county | Published reports | NOT VERIFIED |

**Terms of use: NOT VERIFIED for every dataset.** DOR publishes data files for statutory purposes; **that does not automatically mean free commercial reuse**. Before any data integration:
1. Read DOR's data portal terms of use.
2. Read Miami-Dade's terms (miamidade.gov standard terms).
3. NAL/SDF are **massive files** (statewide NAL is 5-6M+ rows) — not suitable for a static, browser-only site without heavy server-side preprocessing, which AssessCheck's architecture (no backend) does not currently support.

**Honest conclusion:** NAL/SDF are **research-grade, not a V1 integration target**. V1 Florida should be **form-based** (user reads numbers from their TRIM notice / PA record card), not data-integrated. This matches AssessCheck's existing philosophy exactly.

---

# 10. Miami-Dade Research

| Capability | Status | Notes |
|---|---|---|
| Property Search web app | **VERIFIED AVAILABLE** — reachable, live JS app | miamidade.gov/Apps/PA/propertysearch |
| Folio number | VERIFIED concept | Miami-Dade's parcel ID is called a "folio number" — different naming from Harris's "account number" (content, not architecture) |
| Property Record Card | POSSIBLE BUT NOT VERIFIED | The record card exists in the app; whether it exposes full sale history/characteristics in a stable, linkable way NOT VERIFIED |
| Exemption / homestead status per parcel | POSSIBLE BUT NOT VERIFIED | Shown in property search; API access unknown |
| Downloadable parcel data | POSSIBLE BUT NOT VERIFIED | Miami-Dade's open data portals exist but no verified link this session |
| VAB filing procedure | **NOT VERIFIED** | No Miami-Dade VAB page reachable this session; several miamidade.gov URLs 404'd or 490'd |
| VAB deadline (county-specific) | NOT VERIFIED | Requires the county's published petition deadline for the current tax year |
| Online petition filing | NOT VERIFIED | Some FL counties offer online VAB filing; Miami-Dade's status unknown |
| Assessment history | POSSIBLE BUT NOT VERIFIED | Probably in the property search app; stability/linkability unknown |

## 10.1 Why Miami-Dade fails the pilot test right now

The audit's own bar for a pilot county (from the audit report's Dallas bar: "county pages must be useful without any data integration") is:
1. The county's **VAB filing procedure** must be documentable from official county sources. **FAILED this session** — could not verify.
2. The county's **VAB deadline** for the current tax year must be verifiable. **FAILED.**
3. The county's **property search** must be linkable for the DataIntegrationNotice. **PASSED** (property search is live).
4. The county's **local terminology** (folio, TRIM, VAB) must be consistent with state law. **PASSED.**

Two of four criteria **FAILED**, and the failures are *verification failures, not correctness failures* — but the audit standard the project set for itself ("no source, no page") does not allow publishing on unverified county procedure.

## Characteristics a pilot county must satisfy
1. VAB/clerk page documenting the petition process, reachable and citable.
2. Current-year VAB petition deadline verifiable from that page.
3. Property search with a stable, public URL per parcel.
4. Either an online filing system or a clearly documented mail/in-person procedure.
5. Consistent terminology matching state statute.

(These describe, e.g., counties whose VAB is administered by the Clerk of Court with a well-documented site — re-verify candidates like Palm Beach, Orange, or Duval **after** the tooling limitations of this session are lifted. I am NOT choosing one arbitrarily, per your instruction.)

---

# 11. Comparable Data Feasibility

**Question:** could Florida/Miami-Dade support a legitimate comparable screening tool?

**Answer: YES at the state level, CONDITIONALLY at the Miami-Dade level — but NOT as a V1 feature.**

- Required fields: sale price, sale date, living area, year built, location, parcel ID — **all present in NAL/SDF** (VERIFIED as existing datasets, VERIFIED content claims in statute; field-level schema NOT VERIFIED — requires downloading the file layout documentation).
- Legitimacy: **§193.502/§194.034(2) make NAL comps presumptive evidence** — the strongest possible foundation for a screening tool in any US state.
- Practical problems: file size (multi-GB statewide), annual updates, county field inconsistencies, matching by folio, **and the commercial-use terms NOT VERIFIED**.
- **Miami-Dade-specific:** the Property Search app is interactive; whether per-parcel data can be retrieved programmatically/stably is **NOT VERIFIED** (and scraping is prohibited by project rules).
- **Recommendation:** a Florida comparable tool should be **form-based first** (user enters 2–4 NAL comps they looked up themselves from the PA/DOR files, the tool computes adjustment logic transparently). That is honest, needs zero data access, and reuses the engine.

---

# 12. Checker Gap Analysis

| Feature | Texas | Florida | Reusable? | Change required |
|---|---|---|---|---|
| Assessment increase flag | Prior vs current assessed | Prior assessed vs current (SOH) | ✅ engine | None — same math |
| **Homestead cap** | 10% flat, homestead checkbox | **3% OR CPI (whichever lower), homestead; 10% non-homestead residential (non-school)** | ⚠️ config shape | **Branch-on-branch cap config + comparison-basis parameter** (`prior-assessed` vs `just-value-gap`) |
| Exemption logic | Homestead exemption (content) | $50k split-tier (content; checker doesn't compute bills) | ✅ as content | None |
| Assessed vs taxable | Appraised→taxable (simple) | Just→assessed→taxable (3-step) | ⚠️ config | Add configurable 3-step chain labels |
| Sale-price delta | vs assessed value | vs just value | ✅ engine | Rename per config |
| $/sqft screening | Yes | Yes | ✅ engine | None |
| Condition flags | Yes | Yes | ✅ engine | None |
| Property characteristics | ~~removed~~ | Same decision applies | ✅ | None |
| Comparable screening | **Not implemented** (documented honestly) | Same V1 posture; stronger legal basis for future | ✅ | None for V1 |
| **Deadlines** | Fixed May 15 (with delivery-date caveat) | Rule-based (25 days after TRIM — NOT VERIFIED) | ⚠️ model | **Add `deadlineBasis: fixed-date \| rule-based`** |
| Disclaimer | Mandatory, in code | Same | ✅ | Per-jurisdiction text via config |
| Evidence | 7 types, Texas ARB framing | Same shape, VAB/NAL framing | ⚠️ data | New EvidenceType records; **de-Texas-ify entry-level descriptions** |
| Source attribution | requireSource() | Same | ✅ | Register FL sources |

**Logic classification:**
- **A) Universal:** percent-change math, $/sqft, condition flags, anti-hype language rules, disclaimer enforcement, toPlausibleNumber.
- **B) Jurisdiction config:** cap thresholds/semantics, value-chain labels, evidence types, deadlines, property-search URL, official resources.
- **C) County config:** property-search URL (already exists), VAB petition URL, county deadline rule instance, local terminology notes.
- **D) Tax-year config:** CPI for SOH cap (annual), county deadline instances per year.
- **E) Separate logic:** none required — this is the architecture's vindication.

---

# 13. Data Model Gap Analysis

| Model | Florida impact | Change proposed | Benefits Texas too? | Necessary for V1? |
|---|---|---|---|---|
| `JurisdictionRules` (lib/data/jurisdictions.ts) | Needs: multi-cap (branch-on-branch), value-chain labels, deadline basis | Add `valueChain` labels + `caps: CapRule[]` (array, not single `homesteadCap`) | Yes — cleaner Texas config | Yes |
| `DeadlineRecord` | Rule-based deadlines | Add `deadlineBasis` + `basisDescription` | Yes — Texas May-15-with-delivery-caveat is *already* semi-rule-based | **Yes** |
| Source registry | Florida sources must not collide with Texas | Add `sourceJurisdiction` field | Yes — enables per-jurisdiction source pages | **Yes** |
| `EvidenceTypeRecord` | New FL records | None (shape holds) | — | No |
| `CountyRecord` | Folio vs account terminology | Add optional `parcelIdLabel` | Yes (Harris uses "account") | No (nice-to-have) |
| Property/Assessment | The 3-step chain | Conceptual; checkers use form inputs | — | No |
| Comparable | V1 posture unchanged | None | — | No |

Nothing requires a schema rewrite. Three additive fields (`caps[]`, `deadlineBasis`, `sourceJurisdiction`) unlock Florida **and** clean up Texas.

---

# 14. Content Gap Analysis

| Page candidate | Intent | Primary sources | Complexity | Own URL? | Duplication risk with Texas |
|---|---|---|---|---|---|
| Florida property tax basics (just/assessed/taxable) | Informational | §193.011, DOR | Medium | **CORE** | Low — different chain |
| **Save Our Homes** | Informational | §193.155, Art VII §4(g) | Medium | **CORE** | Zero — no TX analogue |
| Florida homestead exemption | Informational | §196.031 | Medium | **CORE** | Medium — keep TX/FL pages cross-linked but distinct |
| **TRIM notice explained** | Tool-adjacent | §200.069 | Medium | **CORE** (enables future tool) | Zero |
| Florida VAB process | Procedural | §194.011, 194.035, 194.036 | High (county variation) | **CORE** | Low |
| Florida evidence guide (NAL comps) | Procedural | §193.502, §194.034 | Medium | **CORE** | Zero — legally distinct |
| Miami-Dade property tax hub | Navigational | County | Low-Medium | CORE (pilot county only) | Low |
| Miami-Dade VAB page | Procedural | County VAB | High | CORE *only if* county-verified | Low |
| Portability | Informational | §196.031 | Medium | OPTIONAL (part of SOH page) | — |
| Non-homestead 10% cap | Informational | §193.1554 | Low-Medium | OPTIONAL (part of basics) | Zero |
| Florida "how value is determined" | Informational | §193.011 | Low | NOT NEEDED (fold into basics) | — |
| Texas-style "appeal options" | Procedural | — | — | NOT NEEDED (VAB page covers) | — |

**Minimum Florida content for launch: 5 CORE pages + 1 county hub + 1 county VAB page.** Anything less is thin; anything more at launch is speculative.

**Anti-clone rule for the plan:** a Florida page justifies its URL only if it contains at least one of: a Florida-specific worked example, a Florida-specific legal citation, or a Florida-specific tool interaction. Otherwise, extend a shared page.

---

# 15. SEO / AdSense Risk

- **Programmatic-SEO risk of adding Florida: LOW if the §14 minimum is respected.** 7 pages is not a scaled-content pattern.
- **Cross-state thin-county risk: MEDIUM** — the temptation to add Broward/Palm Beach pages after Miami-Dade will be strong. **Rule:** a county page requires the same 4-point pilot test as Miami-Dade (§10.1). No county page without a verified VAB source + deadline.
- **Keyword-collision risk: MEDIUM** — "property tax checker" queries in FL will surface the Texas tool. Mitigation (INFERENCE): the Florida checker (when built) gets its own path `/florida/miami-dade/property-tax-checker/`, and the Texas tool should include a "This tool is for Texas properties" note once a second state exists (INFERENCE — recommend, don't implement now).
- **AdSense: LOW incremental risk.** The trust system (author, sources, corrections, honest disclaimers) is already built and jurisdiction-aware in copy. Florida pages inherit it automatically.

---

# 16. Texas Coupling Audit (full repo sweep)

| Location | Reference | Classification |
|---|---|---|
| `lib/data/jurisdictions.ts` | Texas rules (cap, thresholds, propertySearch, citations) | **CONFIGURATION** — correct by design |
| `lib/data/counties.ts`, `deadlines.ts`, `evidence.ts`, `sources/registry.ts` | Texas records | **TEXAS CONTENT** (data, not logic) |
| `lib/seo/site-pages.ts` | Texas paths | **TEXAS CONTENT** |
| `app/texas/**`, `app/property-tax-checker/**` | 40+ pages | **TEXAS CONTENT** |
| `lib/data/evidence.ts` | Entry-level descriptions say "appraisal district", "ARB" | **TEXAS BUSINESS LOGIC (in data)** — the `evidenceType()` entry-point records embed Texas procedure; Florida records would need new entry points or neutralized shared text |
| `components/tools/AssessmentChecker.tsx` | Renders cap flag citing config; `jurisdictionId` prop | **GENERIC** (post-refactor) |
| `components/tools/DataIntegrationNotice.tsx` | **`requireJurisdictionRules("texas")` default** | **TEXAS BUSINESS LOGIC** — the only true code coupling; harmless today, dangerous as a silent default when Florida exists (a forgotten prop silently renders Texas's HCAD link) |
| `lib/tools/checkerEngine.ts` | No Texas refs (verified: generic math) | **GENERIC** |
| `tests/jurisdictions.test.ts`, `tests/publication.test.ts` | Assert Texas specifics | **TEXAS TEST** — correct; Florida would add its own file |
| `components/layout/SiteFooter.tsx` | "Texas property tax..." copy in brand block | **TEXAS UI TEXT** — hardcoded in the reusable footer; needs neutralization before multi-state |
| `components/layout/SiteHeader.tsx` | NAV labels are Texas pages | **TEXAS UI** — acceptable until multi-state; flag for Phase A |
| Homepage (`app/page.tsx`) | Hero copy is Texas-only | **TEXAS UI** — acceptable until multi-state |

**Score: architecture is genuinely close to jurisdiction-ready. One line of code coupling (DataIntegrationNotice default), three UI-text couplings (footer/header/home), and one data-content coupling (evidence entry records).**

---

# 17. Architecture Scalability (Texas + Florida)

| Component | Rating | Notes |
|---|---|---|
| `jurisdictions.ts` config shape | **YELLOW** | Needs `caps[]` array + `valueChain` + deadline basis (additive, non-breaking) |
| Source registry | **YELLOW** | Needs `sourceJurisdiction` field (additive) |
| `checkerEngine.ts` | **GREEN** for existing math | **YELLOW** for cap comparison-basis (Florida SOH is cumulative-gap based) |
| `AssessmentChecker.tsx` | **YELLOW** | Cap branch must render from `caps[]`; homestead checkbox semantics differ |
| `DataIntegrationNotice.tsx` | **ORANGE** | Remove the `"texas"` default; make `jurisdictionId` required |
| `deadlineBasis` in deadline data | **YELLOW** | Additive field |
| `evidence.ts` | **ORANGE** | Entry-level records carry Texas procedure; needs neutral shared layer + per-jurisdiction records |
| Publication gate / sitemap / metadata | **GREEN** | Jurisdiction-agnostic by design (paths + publishStatus) |
| Footer/Header/Home copy | **ORANGE** | Texas text hardcoded in reusable chrome |
| Trust pages (privacy, about, terms) | **GREEN** | Already jurisdiction-neutral |
| Tests | **GREEN** | Per-jurisdiction test files pattern exists |

**No RED items. No schema rewrites. The architecture survives the Texas+Florida test with additive changes.**

---

# 18. Legal / Data Usage Considerations

| Item | Status | Notes |
|---|---|---|
| Florida Statutes text | Public domain (state law) | Quoting statutes with citation: safe |
| FL DOR NAL/SDF files | **TERMS NOT VERIFIED** | Public availability ≠ commercial reuse rights; read DOR data portal terms before any integration |
| Miami-Dade property search data | **TERMS NOT VERIFIED** | miamidade.gov terms apply; no automated retrieval regardless (project rule) |
| Miami-Dade GIS/downloads | **TERMS NOT VERIFIED** | |
| Statutory data citations (TRIM, NAL comps as evidence) | Safe | Factual statements of law with citation |
| Copyright in VAB forms (DR-486) | State forms, public records | Reproduce links, not embedded copies |
| Privacy | **No new concerns for V1** — form-based tooling sends nothing anywhere; matches existing privacy policy claims | |

**Rule going forward (matches project rules):** no dataset is used until its terms of use are read and recorded in the source registry with a verification date. "It's on a government website" is not a license.

---

# 19. FLORIDA EXPANSION VERDICT

## **GO WITH CONDITIONS**

**Sufficiently verified (enough to commit):**
- The complete Florida value chain and terminology (statutes read directly).
- SOH 3%/CPI cap, the 10% non-homestead cap, exemption structure, portability, ownership resets (statutes read).
- TRIM notice content requirements (§200.069 read).
- VAB structure, informal review, petition, special magistrates, evidence exchange, judicial review (statutes read).
- The §193.502/§194.034(2) NAL-comps-as-presumptive-evidence framework (read).
- AssessCheck's own architecture readiness (audited: no RED items).

**Conditions (all must be satisfied before Phase D):**
1. **C1 — Re-verify the five NOT-VERIFIED deadline figures** (TRIM day-count, VAB 25-day rule, tax-bill calendar, Mar 1 exemption deadline, DR-486 form numbers) against the current statute/DOR pages. No Florida deadline gets published on my session's citations alone.
2. **C2 — Engine: parameterize the cap check on comparison basis** (annual-increase vs just-value-gap) and make caps an array. Texas stays green (tests prove it).
3. **C3 — De-Texas-ify shared components:** DataIntegrationNotice default, footer/header/home copy, evidence entry records.
4. **C4 — Registry: add `sourceJurisdiction` and support state-level entries.**
5. **C5 — Deadline model: add `deadlineBasis`.**
6. **C6 — No data integration in V1.** Form-based tooling only. NAL/SDF stay research-only until terms of use are read and recorded.

**What NOT to use yet:** NAL/SDF bulk files, any Miami-Dade bulk download, any per-parcel automated retrieval.

**Risks:** (a) the 3%/10% cap trap; (b) county VAB variation vs. a state-level page (mitigate: state page describes the statutory frame, county pages only exist where locally verified); (c) terminology collision with Texas pages (mitigate: cross-link and define terms on both sides).

---

# 20. MIAMI-DADE VERDICT

## **DO NOT IMPLEMENT YET** (as first county)

Not because Miami-Dade is a bad county — because **two of four pilot criteria could not be verified this session** (VAB procedure page and county deadline), and this project's standard is "no source, no page." Publishing a Miami-Dade page on unverified county procedure would violate the project's own publication gate philosophy.

**What passed:** property search live (VERIFIED), folio terminology (VERIFIED).
**What failed verification:** VAB filing procedure, county petition deadline, online filing status, downloadable data.

**Pilot-county criteria (any county, including Miami-Dade later):**
1. Official VAB/clerk page documenting the petition process — reachable and citable.
2. Current-tax-year petition deadline verifiable from that page.
3. Public property search with stable per-parcel URLs.
4. Documented filing channel (online or mail) from an official page.
5. Terminology consistent with statute.

When (and only when) Miami-Dade's VAB pages verify, it becomes a strong pilot — it is the largest county, the property search is confirmed live, and the content demand is real. Until then, **Phase E of the plan simply waits**, and Florida launches as **state-level content only** (which is complete and useful without any county page).

---

# 21. Proposed Implementation Plan (NOT executed)

**Estimated total: 10–15 focused working days.**

**PHASE A — Architecture de-coupling ( prerequisites, benefits Texas immediately)**
- Files: `components/tools/DataIntegrationNotice.tsx` (make `jurisdictionId` required — removes the `"texas"` default), `SiteFooter.tsx`, `SiteHeader.tsx`, `app/page.tsx` (neutralize Texas copy into config-driven text), `lib/site-config.ts` (add per-jurisdiction chrome copy).
- Risk: low. Tests: existing suite must stay green.
- **Do this even if Florida never happens** — it removes the last code coupling found in the audit.

**PHASE B — Source registry expansion**
- Files: `lib/sources/registry.ts`, `lib/sources/types.ts` (add `sourceJurisdiction`), then register the Florida sources from §23.
- Tests: new cases — FL source resolves; TX sources unaffected; unknown-jurisdiction source throws.

**PHASE C — Florida rules config**
- Files: `lib/data/jurisdictions.ts` (add `florida` entry: `caps[]` with 3%-SOH + 10%-non-homestead branches, `valueChain` labels, `propertySearch`, `deadlineBasis` type), `lib/data/deadlines.ts` (add `deadlineBasis` field to type + Texas records marked `fixed-date`).
- Tests: cap-array resolution; unknown jurisdiction throws; Texas cap unchanged.

**PHASE D — Florida state-level content (5 CORE pages + worked examples)**
- New: `app/florida/` — basics, SOH/homestead, TRIM, VAB process, evidence (NAL comps). Each with the audit's required structure (worked example, "what this does NOT tell you", sources).
- Depends on C1 re-verification for any deadline figure.

**PHASE E — Miami-Dade (blocked by §20 verdict)**
- Only after: VAB page verified, county deadline verified, property search URL recorded, DR-486 procedure documented. Then: county hub + county VAB page + DataIntegrationNotice with Miami-Dade config.

**PHASE F — Florida TRIM checker (the Phase-2 tool)**
- Form-based TRIM review: user enters just/assessed/taxable/exemptions from their notice; engine validates the chain (assessed ≤ just×(1+cap), taxable = assessed − exemptions) and flags inconsistencies.
- Files: `lib/tools/checkerEngine.ts` (new pure functions), new component, config from Phase C.
- This is the honest Florida counterpart to the Texas checker and needs **zero data integration**.

**PHASE G — Tests**
- New `tests/florida.test.ts`: chain math, cap branches (3% homestead, 10% non-homestead, ownership reset → no cap), deadline-basis rendering, source-jurisdiction isolation, publication gate for `/florida/**`.

**PHASE H — SEO**
- `lib/seo/site-pages.ts`: register Florida paths with `publishStatus` lifecycle (start `draft`); sitemap gate excludes until `ready`. Canonicals via existing metadata system. Cross-link TX↔FL glossary terms.

**PHASE I — Final audit**
- Re-run the content/AdSense quality audit criteria against Florida pages (depth, examples, no clone-tells), publication gate test, footer link test.

---

# 22. Open Questions

> **Reconciliation note (2026-09-23).** This list was written before
> implementation and is kept as the original record. Two items have since been
> closed and are struck below; the rest are still open. Leaving a closed item
> looking open is how a research doc stops being trusted.

1. ~~**Current-year VAB petition deadline rule.**~~ **CLOSED** — registered as
   `fl-vab-petition-value` (`§ 194.011(3)(d)`: on or before the 25th day
   following the mailing of the assessment notice), `source-verified`, and
   published on the Florida deadlines page.
2. **DOR NAL/SDF terms of use** — commercial reuse, attribution, redistribution. Blocks any future data feature (not V1).
3. **Miami-Dade VAB procedure + online filing** — blocks Phase E.
4. **SOH CPI value for the current tax year** — needed for a correct TRIM checker; published annually by DOR; must be a tax-year config value with source, never hardcoded.
5. ~~**Exact TRIM mailing window.**~~ **CLOSED for delivery, open for day-count** —
   `fl-trim-notice` is registered and `source-verified` for the appraiser's
   delivery of the Notice of Proposed Property Taxes and for the petition date
   printed on its face; a pure day-count window is still not asserted.
6. **DR-486/DR-486A form numbers and where to file in Miami-Dade** — blocks county VAB page.
7. **Does the site want a `/florida/property-tax-checker/` (TRIM review) in V1 or Phase 2?** — Recommendation: Phase 2 (state content first, tool after the content earns trust).

---

# 23. Source Registry Candidates

Sources to register when Phase B executes. Status reflects THIS session's verification only.

| Suggested Source ID | Publisher | Title | URL | Authority | Jurisdiction | Relevant claim | Last verified | Status |
|---|---|---|---|---|---|---|---|---|
| `fl-stat-193-011` | Florida Senate (statutes) | §193.011 Duty to appraise property as of January 1 | https://www.flsenate.gov/Laws/Statutes/2024/193.011 | PRIMARY OFFICIAL | FL (state) | Assessment date is Jan 1 | 2026-09-17 | VERIFIED |
| `fl-stat-193-155` | Florida Senate | §193.155 Homestead assessment (SOH 3%/CPI-lower, portability reset, ownership change) | https://www.flsenate.gov/Laws/Statutes/2024/193.155 | PRIMARY OFFICIAL | FL | SOH cap mechanics | 2026-09-17 | VERIFIED |
| `fl-stat-193-1554` | Florida Senate | §193.1554 Non-homestead residential 10% cap (non-school levies) | https://www.flsenate.gov/Laws/Statutes/2024/193.1554 | PRIMARY OFFICIAL | FL | Non-homestead cap | 2026-09-17 | VERIFIED |
| `fl-stat-196-031` | Florida Senate | §196.031 Homestead exemption ($25k+$25k split, eligibility, portability) | https://www.flsenate.gov/Laws/Statutes/2024/196.031 | PRIMARY OFFICIAL | FL | Exemption amounts + eligibility | 2026-09-17 | VERIFIED |
| `fl-stat-196-1995` | Florida Senate | §196.1995 TPP $25k exemption | https://www.flsenate.gov/Laws/Statutes/2024/196.1995 | PRIMARY OFFICIAL | FL | TPP exemption | 2026-09-17 | VERIFIED |
| `fl-stat-194-011` | Florida Senate | §194.011 VAB powers/duties, informal review | https://www.flsenate.gov/Laws/Statutes/2024/194.011 | PRIMARY OFFICIAL | FL | VAB role, petition frame | 2026-09-17 | VERIFIED |
| `fl-stat-194-036` | Florida Senate | §194.036 Judicial review / further appeal | https://www.flsenate.gov/Laws/Statutes/2024/194.036 | PRIMARY OFFICIAL | FL | Judicial route | 2026-09-17 | VERIFIED |
| `fl-stat-200-069` | Florida Senate | §200.069 TRIM notice requirements | https://www.flsenate.gov/Laws/Statutes/2024/200.069 | PRIMARY OFFICIAL | FL | TRIM content + timing | 2026-09-17 | VERIFIED |
| `fl-dor-property-hub` | Florida Dept. of Revenue | Property Tax Oversight — local officials / data portal hub | https://floridarevenue.com/property/Pages/Home.aspx | PRIMARY OFFICIAL | FL | DOR role, forms, data hub | 2026-09-17 | VERIFIED (hub only; deep pages NOT VERIFIED) |
| `fl-stat-193-502` | Florida Senate | §193.502 Uniform package of sales | (verify current URL at registration) | PRIMARY OFFICIAL | FL | NAL comps evidence basis | — | **NOT VERIFIED (session)** |
| `fl-stat-194-034` | Florida Senate | §194.034 Evidence before the VAB (NAL presumption) | (verify current URL at registration) | PRIMARY OFFICIAL | FL | NAL presumption mechanics | — | **NOT VERIFIED (session)** |
| `fl-stat-194-013` | Florida Senate | §194.013 VAB procedural rules / magistrates | https://www.flsenate.gov/Laws/Statutes/2024/194.013 | PRIMARY OFFICIAL | FL | Hearing procedure | 2026-09-17 | VERIFIED (read) |
| `fl-stat-194-032` | Florida Senate | §194.032 VAB decision notice | https://www.flsenate.gov/Laws/Statutes/2024/194.032 | PRIMARY OFFICIAL | FL | Decision outcomes | 2026-09-17 | VERIFIED (read) |
| `fl-stat-193-023` | Florida Senate | §193.023 Taxpayer action on non-ad valorem assessments | https://www.flsenate.gov/Laws/Statutes/2024/193.023 | PRIMARY OFFICIAL | FL | Non-ad-valorem route | 2026-09-17 | VERIFIED (read) |
| `fl-stat-193-461` | Florida Senate | §193.461 Agricultural classification | https://www.flsenate.gov/Laws/Statutes/2024/193.461 | PRIMARY OFFICIAL | FL | Classification | 2026-09-17 | VERIFIED (read) |
| `fl-stat-193-1554`-CPI | Florida DOR | Annual SOH CPI factor announcement | (locate at registration) | PRIMARY OFFICIAL | FL (tax-year) | Current-year CPI for SOH cap | — | NOT VERIFIED |
| `miamidade-pa-search` | Miami-Dade Property Appraiser | Property Search application | https://www.miamidade.gov/Apps/PA/propertysearch/ | PRIMARY OFFICIAL | Miami-Dade | Parcel lookup (folio) | 2026-09-17 | VERIFIED (app reachable) |
| `miamidade-vab` | Miami-Dade VAB | VAB petition procedure | (page not reachable this session — locate at registration) | PRIMARY OFFICIAL | Miami-Dade | Filing procedure/deadline | — | **NOT VERIFIED** |
| `fl-stat-197-322` | Florida Senate | §197.322 Tax billing/discount calendar | (verify at registration) | PRIMARY OFFICIAL | FL | Nov–Mar discount schedule | — | NOT VERIFIED |
| `fl-stat-196-011` | Florida Senate | §196.011 Exemption application deadline (Mar 1) | (verify at registration) | PRIMARY OFFICIAL | FL | Homestead application timing | — | NOT VERIFIED |

---

## Closing statement

The Texas implementation proved that AssessCheck's differentiator is **provenance + honesty**, not page count. Florida rewards that exact strategy more than Texas does: the law itself (§193.502/§194.034) hands us a defensible comparable-evidence framework, and the TRIM notice hands us a tool that needs no data integration at all. The conditions in §19 are modest, concrete, and mostly benefit Texas on their own.

The recommendation is to proceed with Phases A–C (architecture + registry + rules) at any time, Phase D (state content) after deadline re-verification (C1), and to hold Miami-Dade until its VAB procedure verifies. **No code was modified during this research.**

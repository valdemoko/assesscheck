import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/property-tax-by-state/",
  title: "Property Tax by State: How Assessment Limits Differ",
  description:
    "Texas, Florida, Arizona, California, Nevada, Oregon, Michigan, Colorado, Ohio, North Carolina, Massachusetts, Virginia, New York, Georgia, Maryland and Indiana compared: what each state's assessment limit actually caps, what resets it, and where an appeal goes. Covering only the states whose rules are verified against official sources.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "States",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Property Tax by State" }]}
    >
      <h1>Property Tax by State: How Assessment Limits Differ</h1>

      <p>
        &ldquo;2% cap&rdquo;, &ldquo;3% cap&rdquo;, &ldquo;10% cap&rdquo; — these
        phrases travel between states, but they do not mean the same thing. Some
        limit the <em>value</em> the assessor may place on your property; some
        limit the <em>tax bill</em>; some limit the <em>revenue</em> a local
        government may raise. Confusing them is the single most common source of
        wrong advice online.
      </p>
      <p>
        AssessCheck publishes a state only after its rules have been read in
        official sources and its deadlines verified. That is why this page lists
        nineteen states and not fifty: an unverified page is worse than no page.
      </p>

      <h2>Texas — 10% limit on a homestead&rsquo;s appraised value</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> the annual increase in a qualifying
          residence homestead&rsquo;s appraised value — 10% per year, plus the
          value of new improvements, under Tax Code § 23.23.
        </li>
        <li>
          <strong>What resets it:</strong> a new qualification after a change of
          ownership or a lapse in the exemption.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a protest to the appraisal
          district, then an Appraisal Review Board hearing, then district court or
          binding arbitration.
        </li>
        <li>
          <Link href="/texas-property-tax/">Texas property tax →</Link>
        </li>
      </ul>

      <h2>Florida — 3% or CPI for homesteads, 10% for non-homestead residential</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> two <em>different</em> rules. A
          homestead&rsquo;s <em>assessed value</em> may rise by no more than the
          lower of 3% of the prior year&rsquo;s assessed value or the CPI change
          (Save Our Homes, § 193.155). Certain non-homestead residential property
          is capped at 10% for non-school levies only (§ 193.1554).
        </li>
        <li>
          <strong>What resets it:</strong> a change of ownership (with statutory
          exceptions), removal of the homestead exemption, and new construction,
          which is assessed at just value.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a petition to the county Value
          Adjustment Board after the TRIM notice, then circuit court.
        </li>
        <li>
          <Link href="/florida-property-tax/">Florida property tax →</Link>
        </li>
      </ul>

      <h2>Arizona — 5% applied to the limited property value</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> a second value placed on the same
          property. The full cash value is the assessor&rsquo;s market estimate
          and is what an owner appeals; the <em>limited property value</em> is the
          figure the tax is levied on, and by statute it is the preceding
          valuation year&rsquo;s limited value plus 5%, never exceeding the full
          cash value (A.R.S. § 42-13301).
        </li>
        <li>
          <strong>What resets it:</strong> a specific list in § 42-13302 —
          construction, destruction or demolition worth 15% or more of the full
          cash value; a change in physical use (a change of occupant is not a
          change in use); a split or consolidation; lost valuation protection.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a petition for review with the
          county assessor within 60 days of the notice mailing, then the county
          Board of Equalization (25 days) or Tax Court (60 days), or directly to
          Tax Court by December 15 if no assessor petition was filed.
        </li>
        <li>
          <Link href="/arizona-property-tax/">Arizona property tax →</Link>
        </li>
      </ul>

      <h2>California — 2% or CPI applied to a base year value</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> the annual increase of the{" "}
          <em>factored base year value</em> — a figure set in 1975 or at the last
          change in ownership or completed new construction, adjusted each year by
          the lower of the CPI change or 2%. The assessed value enrolled is the
          lesser of that figure or the January 1 market value (Proposition 8
          decline-in-value).
        </li>
        <li>
          <strong>What resets it:</strong> a change in ownership or completed new
          construction, which establishes a new base year value at market value.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> an application for changed
          assessment (BOE-305-AH) to the county Assessment Appeals Board, then
          superior court within six months.
        </li>
        <li>
          <Link href="/california-property-tax/">California property tax →</Link>
        </li>
      </ul>

      <h2>Nevada — 3% or up to 8% applied to the tax bill itself</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> the <em>tax bill</em>, not a value.
          The amount of tax may not rise by more than 3% over the prior
          year&rsquo;s bill for a claimed primary residence (or a rental renting
          at or below the county&rsquo;s fair market rent), or by more than a
          figure of up to 8% for other property. In practice the bill is the
          lower of that capped figure or the calculated tax, and the difference
          is the abatement (NRS 361.471–361.4735).
        </li>
        <li>
          <strong>What resets it:</strong> not a change in value at all — a
          recorded ownership document removes the owner-occupied 3% level until
          a new claim is filed; value new to the roll (new construction and
          changes in use) is not abated at all; and the qualification is fixed as
          of July 1 of the fiscal year.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> the <em>value</em> is appealed
          to the county Board of Equalization by January 15 (then the State Board
          of Equalization by March 10); the <em>abatement determination</em> is a
          separate petition to the county assessor by June 30, then the Nevada
          Tax Commission within 30 days.
        </li>
        <li>
          <Link href="/nevada-property-tax/">Nevada property tax →</Link>
        </li>
      </ul>

      <h2>Oregon — 3% on the maximum assessed value, plus Measure 5 limits on the tax</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> the <em>maximum assessed value</em>,
          a limit created by Measure 50 beside the property&rsquo;s real market
          value. Assuming no change to the property it is the greater of 103% of
          the prior year&rsquo;s assessed value or 100% of the prior MAV, and the
          tax base — the assessed value — is the <strong>lower</strong> of the MAV
          or the real market value.
        </li>
        <li>
          <strong>What resets it:</strong> the limit is not reset, and that is the
          point. It may rise by more than 3% only through an exception event: new
          construction, an addition or a renovation above the published
          thresholds, a partition or subdivision, rezoning, omitted property, or
          loss of a special assessment. New property enters at real market value
          multiplied by the county&rsquo;s changed property ratio, which is why new
          construction is taxed on a fraction of its value.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a petition to the county Board of
          Property Tax Appeals, filed with the county clerk by December 31 after
          the tax statement arrives; then the Oregon Tax Court, Magistrate
          Division (30 days from the order), then the Regular Division (60 days).
        </li>
        <li>
          <strong>A second limit on the tax itself:</strong> Measure 5 caps
          education taxes at $5 and general government taxes at $10 per $1,000 of
          real market value, with bond levies and some special assessments
          excluded. The bill is the lower of that calculation and the assessed
          value multiplied by the rate, so a property can be held down by
          compression — and can rise by more than 3% when compression is lost.
        </li>
        <li>
          <Link href="/oregon-property-tax/">Oregon property tax →</Link>
        </li>
      </ul>

      <h2>Michigan — inflation or 5% on taxable value, and an uncapping on sale</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> <em>taxable value</em>, which under
          Proposal A is the lesser of the state equalized value or the capped
          value. The capped value is not a figure from the notice: it is the prior
          year&rsquo;s taxable value, less losses, multiplied by an inflation rate
          multiplier that may not exceed 1.05, plus additions.
        </li>
        <li>
          <strong>What resets it:</strong> a <em>transfer of ownership</em> — the
          only reset on this page that is a legal event rather than a change in
          value. The taxable value becomes the state equalized value in the
          calendar year after the transfer, and the property is capped again the
          year following that. Additions and losses do not reset the cap; they are
          terms inside it, which is why a lawful increase can exceed 5% in a year
          with no transfer at all.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> the March Board of Review first
          for residential and agricultural property, which is what reserves the
          right to go on to the Michigan Tax Tribunal by July 31. Commercial and
          industrial property may file directly with the Tribunal by May 31.
        </li>
        <li>
          <Link href="/michigan-property-tax/">Michigan property tax →</Link>
        </li>
      </ul>

      <h2>Colorado — no percentage cap on value; the rate is the lever</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the year-over-year
          change in actual value. Colorado&rsquo;s distinctive control is on the
          other factor: the <em>assessment rate</em> the legislature applies to
          actual value (with residential property split into separate
          local-government and school rates since 2025). The bill is the mill
          levy applied to assessed value.
        </li>
        <li>
          <strong>What resets it:</strong> the reassessment cycle — real property
          is revalued every odd-numbered year, so an even-year notice usually
          carries the prior value over. Legislation has adjusted rates and
          valuation mechanics in several recent sessions, which is why the
          current rates are read from the state&rsquo;s own table rather than
          restated here.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> oral or written objection to the
          county assessor between May 1 and June 8 for real property; then the
          county board of equalization; then arbitration, district court, or the
          Board of Assessment Appeals within 30 days of the decision mailing.
        </li>
        <li>
          <Link href="/colorado-property-tax/">Colorado property tax →</Link>
        </li>
      </ul>

      <h2>Ohio — no cap at all; 35% of true value on a county revaluation cycle</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the year-over-year
          change. Ohio taxes a fixed <em>35% of true (market) value</em> —
          the taxable value the rates are applied to — and the county
          auditor reappraises on a six-year state-supervised cycle with a
          triennial update in between.
        </li>
        <li>
          <strong>What resets it:</strong> the reappraisal itself. A full
          reappraisal resets the value from market data; the triennial update
          adjusts it; other years it mostly carries over. There is no
          percentage limit to test.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a DTE Form 1 complaint to
          the county Board of Revision (filed with the county auditor,
          January 1 - March 31 of the following tax year or the last day to
          pay first-half taxes, whichever is earlier); then the state Board
          of Tax Appeals within 30 days of the decision mailing, including a
          small claims docket for residential appeals.
        </li>
        <li>
          <Link href="/ohio-property-tax/">Ohio property tax →</Link>
        </li>
      </ul>

      <h2>North Carolina — no cap; the revaluation date controls the appeal</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the change, but the
          <em> valuation date</em> does the work a limit does elsewhere: real
          property is reappraised at least every eight years and holds that
          value until the next revaluation, so 2026 appeals in a 2025-revalued
          county are argued on January 1, 2025 market value.
        </li>
        <li>
          <strong>What resets it:</strong> the county&rsquo;s next
          revaluation, with off-cycle changes limited to what the statute
          allows (new construction and similar).
        </li>
        <li>
          <strong>Where an appeal goes:</strong> an informal review with the
          assessor&rsquo;s staff, then a formal hearing before the county
          Board of Equalization and Review (convenes around the first week of
          April; the window closes when the board adjourns); then the state
          Property Tax Commission within 30 days of the decision letter.
        </li>
        <li>
          <Link href="/north-carolina-property-tax/">
            North Carolina property tax →
          </Link>
        </li>
      </ul>

      <h2>Massachusetts — no value cap; the levy limit and the abatement clock</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> no cap on a property&rsquo;s
          value. Proposition 2&frac12; limits the <em>total levy</em> a
          municipality may raise — a revenue limit — while the protection an
          owner uses is the abatement process anchored to the first actual
          tax bill (usually February 1 with quarterly billing).
        </li>
        <li>
          <strong>What resets it:</strong> each fiscal year&rsquo;s bills,
          and the Department of Revenue&rsquo;s three-year certification of
          each municipality&rsquo;s values.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> State Tax Form 128 to the
          board of assessors by the first-actual-bill deadline; the
          assessors have three months (or it is deemed denied); then the
          Appellate Tax Board within three months, with the tax paid for
          appeals over $5,000.
        </li>
        <li>
          <Link href="/massachusetts-property-tax/">
            Massachusetts property tax →
          </Link>
        </li>
      </ul>

      <h2>Virginia — 100% of market value, no cap, strong procedure</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the change —
          assessments are at 100% of fair market value by statute. The
          owner&rsquo;s protections are procedural: a notice of any increased
          assessment at least 15 days before a hearing, showing the two prior
          years&rsquo; assessments.
        </li>
        <li>
          <strong>What resets it:</strong> each locality&rsquo;s annual
          assessment; there is no cap to reset.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> an application to the local
          board of equalization by a deadline each locality sets by
          ordinance (no earlier than 30 days after the notice hearing); then
          an original, de novo appeal in the circuit court, open until the
          latest of three years from the tax year&rsquo;s end, one year from
          the first notice, or one year from a board determination.
        </li>
        <li>
          <Link href="/virginia-property-tax/">Virginia property tax →</Link>
        </li>
      </ul>

      <h2>New York — no cap; a municipality-chosen uniform percentage of market value</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the change. Every
          municipality (except NYC and Nassau County) must assess at a uniform
          percentage of market value of its own choosing, so the meaningful
          comparison is assessment against the market-value estimate printed
          on the same roll — never a raw assessment against a raw assessment.
        </li>
        <li>
          <strong>What resets it:</strong> the annual roll. The valuation date
          is July 1 of the prior year (most communities) and the tentative roll
          appears May 1, showing assessment, market estimate and uniform
          percentage together.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a grievance (Form RP-524) to
          the Board of Assessment Review by Grievance Day — the fourth Tuesday
          in May in most communities, with major published exceptions (NYC
          March, Nassau March, Suffolk May, Westchester June, villages
          February); then SCAR (owner-occupied small homes, $30 fee) or tax
          certiorari in State Supreme Court within 30 days of the final roll
          (July 1 in most communities).
        </li>
        <li>
          <Link href="/new-york-property-tax/">New York property tax →</Link>
        </li>
      </ul>

      <h2>Georgia — no cap; annual market reassessment with the burden on the county</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the change — all
          property is assessed at fair market value every year as of January 1
          (no state revaluation schedule), and the tax base is 40% of that
          value. Some counties offer local valuation-freeze exemptions for
          homesteads, which is the closest thing to a cap and is local-option.
        </li>
        <li>
          <strong>What resets it:</strong> each January 1; the county reviews
          its digest against sales data annually.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a written appeal (PT-311A) to
          the county Board of Tax Assessors within 45 days of the assessment
          notice — declaring a method: Board of Equalization, hearing officer,
          or arbitration. The Bill of Rights puts the burden of proof on the
          board when it changed the owner&rsquo;s value, binds the board to
          its stated rejection grounds, and awards fees if the final value is
          85% or less of the appeal-stage figure.
        </li>
        <li>
          <Link href="/georgia-property-tax/">Georgia property tax →</Link>
        </li>
      </ul>

      <h2>Maryland — no value cap; the state assesses and the bill is credit-capped</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> the value standard has no
          year-over-year limit — SDAT assesses at 100% of market value on a
          triennial cycle — but the <em>taxable assessment</em> on a principal
          residence may not rise more than 10% per year (counties may adopt
          less), via the Homestead Property Tax Credit. Meanwhile any
          reassessment increase is phased in over three years anyway.
        </li>
        <li>
          <strong>What resets it:</strong> a transfer of ownership ends the
          homestead protection (apply once, on purchase); the phase-in
          completes over three years.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> to the Supervisor of
          Assessments within 45 days of the notice (or a petition for review
          in off-years); then the county PTAAB within 30 days of the final
          notice; then the Maryland Tax Court within 30 days.
        </li>
        <li>
          <Link href="/maryland-property-tax/">Maryland property tax →</Link>
        </li>
      </ul>

      <h2>Indiana — the bill is capped, not the value: 1%/2%/3% of gross assessed value</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> the <em>tax bill</em>, like Nevada
          but against a value instead of last year&rsquo;s bill: no owner pays
          more than 1% of gross assessed value (homesteads), 2% (other
          residential and agricultural land) or 3% (all other property), with
          a per-class cap credit on the bill. Referendum projects are outside
          the caps. Values themselves are trended annually with no limit.
        </li>
        <li>
          <strong>What resets it:</strong> the annual adjustment — values trend
          to market every year, so there is no cap to reset; the caps apply
          fresh to each year&rsquo;s gross assessed value.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> Form 130 to the local assessor
          within 45 days of the Form 11 notice (or the bill, where no Form 11
          was issued) — with the burden on the county after a 5% increase;
          then the PTABOA, then the Indiana Board of Tax Review (Form 131),
          then the Indiana Tax Court.
        </li>
        <li>
          <Link href="/indiana-property-tax/">Indiana property tax →</Link>
        </li>
      </ul>

      <h2>Washington — no value cap; the levy itself is limited</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> not a value — the <em>levy</em>, the
          dollars each taxing district collects. A district&rsquo;s levy may
          grow to at most 101% of its highest lawful levy since 1985 (larger
          districts use 100% plus the Implicit Price Deflator or 101%,
          whichever is less), with voter-approved levy lid lifts above it and
          a constitutional 1% aggregate limit as the outer bound. Assessments
          themselves are at 100% of market value with no cap.
        </li>
        <li>
          <strong>What resets it:</strong> a levy lid lift approved by voters
          raises a district&rsquo;s limit; the since-1985 baseline otherwise
          rolls forward each year.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> a petition to the county
          Board of Equalization by July 1 of the assessment year or within 30
          days of the change-of-value notice — whichever is later; then the
          state Board of Tax Appeals within 30 days of the decision (no
          extensions, and hearings currently 18–24 months out).
        </li>
        <li>
          <Link href="/washington-property-tax/">Washington property tax →</Link>
        </li>
      </ul>

      <h2>New Jersey — no value cap, but a ±15% band around the average ratio</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> assessments are set annually at the
          assessor&rsquo;s view of full market value with no year-over-year
          limit — but the Chapter 123 test polices the <em>ratio</em>: the
          Division of Taxation certifies an average ratio per district, and an
          assessment outside ±15% of that average is presumptively wrong and
          gets adjusted into the range automatically.
        </li>
        <li>
          <strong>What resets it:</strong> the certified average ratio is
          recalculated every year, so the band moves with the district.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> Form A-1 to the County Board
          of Taxation, filed and received by April 1 (May 1 after a
          revaluation; January 15 in Burlington, Gloucester and Monmouth
          Counties); direct to the Tax Court over $1M; then 45 days to appeal
          the board&rsquo;s judgment to the Tax Court.
        </li>
        <li>
          <Link href="/new-jersey-property-tax/">New Jersey property tax →</Link>
        </li>
      </ul>

      <h2>Minnesota — no value cap; class rates distribute the levy and the boards set the clock</h2>
      <ul>
        <li>
          <strong>What it limits:</strong> nothing limits the value —
          assessments are set January 2 for taxes payable the following year,
          and classification rates (not a cap) determine each property
          type&rsquo;s share. The homestead market value exclusion reduces
          taxable value on a sliding scale that phases out as value rises.
        </li>
        <li>
          <strong>What resets it:</strong> each assessment year&rsquo;s sales
          study (October 1 – September 30); there is no cap to reset.
        </li>
        <li>
          <strong>Where an appeal goes:</strong> the Local Board of Appeal and
          Equalization (meets April 1 – May 31; a prerequisite where the city
          holds its own), then the County Board (June) — the meeting dates on
          your valuation notice <em>are</em> the deadlines. Or skip both:
          direct to the Minnesota Tax Court by April 30 of the year the taxes
          are payable.
        </li>
        <li>
          <Link href="/minnesota-property-tax/">Minnesota property tax →</Link>
        </li>
      </ul>

      <h2>The comparison that matters most</h2>
      <div className="table-wrap">
        <table>
        <caption>
          What each state&rsquo;s limit is measured against — this is what makes
          a year-over-year comparison useful in one state and misleading in
          another.
        </caption>
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Limit applies to</th>
            <th scope="col">Measured against</th>
            <th scope="col">Can a lawful increase exceed the headline %?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arizona</td>
            <td>Limited property value (the tax base)</td>
            <td>Prior year&rsquo;s limited value</td>
            <td>
              Yes — the full cash value is not limited at all, and a
              re-established limited value can exceed 5%
            </td>
          </tr>
          <tr>
            <td>Texas</td>
            <td>Appraised value (homestead)</td>
            <td>Prior year&rsquo;s appraised value</td>
            <td>Yes — new improvements are added outside the cap</td>
          </tr>
          <tr>
            <td>Florida</td>
            <td>Assessed value (homestead)</td>
            <td>Prior year&rsquo;s assessed value, or CPI if lower</td>
            <td>Yes — the lower of the two applies, and new construction is added</td>
          </tr>
          <tr>
            <td>California</td>
            <td>Assessed value (all real property)</td>
            <td>A base year value from 1975 or the last transfer</td>
            <td>
              Yes — an assessment recovering from a decline-in-value reduction may
              rise well above 2% in one year
            </td>
          </tr>
          <tr>
            <td>Nevada</td>
            <td>The tax bill (not a value)</td>
            <td>Prior year&rsquo;s tax bill</td>
            <td>
              Yes — value new to the roll is not abated, and non-ad valorem items
              on the bill are outside the cap
            </td>
          </tr>
          <tr>
            <td>Oregon</td>
            <td>Maximum assessed value (the tax base is the lower of it or market value)</td>
            <td>The greater of prior assessed value &times; 1.03 or the prior MAV</td>
            <td>
              Yes — the assessed value can jump when the market value recovers
              above the MAV, and exception events add value above 3%
            </td>
          </tr>
          <tr>
            <td>Michigan</td>
            <td>Taxable value (the lesser of state equalized value or capped value)</td>
            <td>
              Prior taxable value less losses, &times; the inflation rate
              multiplier (max 1.05), plus additions
            </td>
            <td>
              Yes — a transfer of ownership removes the limitation for a year, and
              additions enter the formula itself
            </td>
          </tr>
          <tr>
            <td>Colorado</td>
            <td>
              No value cap — the legislative lever is the assessment rate applied
              to actual value
            </td>
            <td>
              Not a year-over-year formula; the rate is set by statute each session
            </td>
            <td>
              N/A — actual value can rise by any amount; what the legislature
              adjusts is the rate it is multiplied by
            </td>
          </tr>
          <tr>
            <td>Ohio</td>
            <td>No value cap — taxable value is a fixed 35% of true value</td>
            <td>
              The county&rsquo;s six-year reappraisal cycle and triennial update
            </td>
            <td>
              N/A — but the cycle itself makes big single-year moves lawful: a
              reappraisal reset is not an error
            </td>
          </tr>
          <tr>
            <td>North Carolina</td>
            <td>No value cap — but values hold from revaluation to revaluation</td>
            <td>
              The county&rsquo;s revaluation date (at least every eight years)
            </td>
            <td>
              N/A — appeals are argued on the last revaluation date&rsquo;s
              market, not on the current market
            </td>
          </tr>
          <tr>
            <td>Massachusetts</td>
            <td>No value cap — Proposition 2&frac12; limits the municipal levy</td>
            <td>
              The municipality&rsquo;s levy capacity and DOR&rsquo;s three-year
              certification
            </td>
            <td>
              N/A — the owner&rsquo;s protection is the abatement process and
              its first-actual-bill deadline, not a value limit
            </td>
          </tr>
          <tr>
            <td>Virginia</td>
            <td>No value cap — 100% of fair market value by statute</td>
            <td>The locality&rsquo;s annual assessment</td>
            <td>
              N/A — the protections are procedural: 15-day notice, board
              hearing, and a de novo circuit court appeal
            </td>
          </tr>
          <tr>
            <td>New York</td>
            <td>
              No value cap — a municipality-chosen uniform percentage of market
              value
            </td>
            <td>
              The annual roll (valuation date July 1 of the prior year; tentative
              roll May 1)
            </td>
            <td>
              N/A — the roll itself prints the market-value estimate and the
              uniform percentage, so the honest comparison is against those, not
              against last year
            </td>
          </tr>
          <tr>
            <td>Georgia</td>
            <td>No value cap — annual reassessment at market, 40% ratio</td>
            <td>January 1 of each year</td>
            <td>
              N/A — the offset is procedural and unusually owner-favorable: the
              county carries the burden of proof when it changed your value
            </td>
          </tr>
          <tr>
            <td>Maryland</td>
            <td>
              The taxable assessment of a principal residence (10% per year, via
              the homestead credit; counties may adopt less)
            </td>
            <td>
              The prior year&rsquo;s taxable assessment, after a three-year
              phase-in of any reassessment increase
            </td>
            <td>
              Yes — non-homestead property is uncapped, and the phase-in plus
              credit interaction is easy to misread as an error
            </td>
          </tr>
          <tr>
            <td>Indiana</td>
            <td>The tax bill (1%/2%/3% of gross assessed value by class)</td>
            <td>This year&rsquo;s gross assessed value, not last year&rsquo;s bill</td>
            <td>
              Yes — referendum projects sit outside the caps, and the caps do
              not stop the value from trending every year
            </td>
          </tr>
          <tr>
            <td>Washington</td>
            <td>
              The levy — the dollars a taxing district collects (101% of its
              highest lawful levy since 1985)
            </td>
            <td>The district&rsquo;s own levy history, not any value</td>
            <td>
              Yes — a voter-approved levy lid lift raises the limit, and your
              bill can rise even when your assessment falls
            </td>
          </tr>
          <tr>
            <td>New Jersey</td>
            <td>
              The assessment ratio (Chapter 123: ±15% around the certified
              average ratio)
            </td>
            <td>The district&rsquo;s average ratio, recalculated every year</td>
            <td>
              Yes — an assessment inside the band can still be argued excessive
              on market evidence, and an outside-band adjustment can still leave
              the value wrong
            </td>
          </tr>
          <tr>
            <td>Minnesota</td>
            <td>
              No value cap — class rates set by law determine each property
              type&rsquo;s share of the levy
            </td>
            <td>
              Each assessment year&rsquo;s sales study; value set January 2 for
              taxes payable the next year
            </td>
            <td>
              N/A — the protections are the appeal boards (whose meeting dates
              are the deadlines) and a direct Tax Court route by April 30 of the
              payable year
            </td>
          </tr>
        </tbody>
        </table>
      </div>

      <h2>Why other states are not listed yet</h2>
      <p>
        Several large states are frequently cited in this comparison and are not
        here, for honest reasons:
      </p>
      <ul>
        <li>
          Some states limit <strong>levies or revenue</strong> (the amount a local
          government may raise) rather than the value of an individual property.
          A page about a personal assessment limit would be a misdescription of
          their law.
        </li>
        <li>
          Some states have <strong>no statewide assessment limit</strong>, so the
          content would restate the same principles already covered here without a
          state-specific rule to test against.
        </li>
        <li>
          Some states are <strong>mid-reform</strong>: their rules change every
          legislative session, and a page that cannot be kept accurate should not
          be published.
        </li>
      </ul>
      <p>
        Each one is on the list to research properly — official sources read,
        deadlines verified, and a state-specific page structure — before it
        appears here.
      </p>

      <h2>Where to start</h2>
      <ul>
        <li>
          <Link href="/property-tax-checker/">
            The assessment checker
          </Link>{" "}
          — screens year-over-year changes under the rules it is configured for,
          and says which states those are.
        </li>
        <li>
          <Link href="/evidence/property-tax-protest-evidence/">
            The evidence guide
          </Link>{" "}
          — what each kind of evidence can and cannot show.
        </li>
        <li>
          <Link href="/methodology/">Methodology</Link> — how sources are
          verified and what is published.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "co-dpt-understanding",
          "tx-tax-code-23-23",
          "fl-stat-193-155",
          "ca-boe-decline-in-value",
          "ca-cdtfa-important-dates",
          "az-ars-42-13301",
          "az-ars-42-13302",
          "nv-washoe-abatement-appeal",
          "nv-washoe-assessor-faq",
          "nv-clark-tax-abatement",
          "or-oar-150-308-0120",
          "or-multco-assessment-faq",
          "or-multco-tax-calculation",
          "or-hood-river-cpr",
          "oh-dor-reappraisal",
          "oh-franklin-bor",
          "oh-bta-appeal-info",
          "nc-dor-appeal-process",
          "nc-dor-types-property-taxed",
          "nc-orange-appeal",
          "ma-cis-abatement",
          "ma-dor-bla",
          "va-code-58-1-3200",
          "va-code-58-1-3330",
          "va-code-58-1-3378",
          "va-code-58-1-3984",
          "ny-tax-grievance-procedures",
          "ny-tax-property-tax-calendar",
          "ny-tax-equalization-rates",
          "ny-tax-fair-assessments",
          "ga-dor-pt311a",
          "ga-dor-property-faq",
          "ga-dor-bill-of-rights",
          "ga-dor-homestead",
          "md-tax-court-procedures",
          "md-archives-sdat-functions",
          "md-montgomery-homestead",
          "in-dlgf-tax-bill-101",
          "in-dlgf-citizens-guide",
          "in-faqs-appeal",
          "wa-dor-levy-limit",
          "wa-bta-how-to-file",
          "nj-dor-lpt-appeal",
          "mn-dor-appealing",
          "mn-dor-understanding",
          "mn-tax-court-home",
          "mn-anoka-appeal",
        ]}
      />
    </PageShell>
  );
}

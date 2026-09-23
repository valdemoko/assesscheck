import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/property-tax-by-state/",
  title: "Property Tax by State: How Assessment Limits Differ",
  description:
    "Texas, Florida, Arizona, California, Nevada and Oregon compared: what each state's assessment limit actually caps, what resets it, and where an appeal goes. Covering only the states whose rules are verified against official sources.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
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
        six states and not fifty: an unverified page is worse than no page.
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
        ]}
      />
    </PageShell>
  );
}

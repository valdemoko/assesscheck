import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/colorado-property-tax/",
  title: "Colorado Property Tax",
  description:
    "How Colorado property tax works: actual value and the assessment rate, the odd-year reassessment cycle, the May 1 Notice of Valuation, protesting by June 8, and the county board of equalization appeal path.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Colorado",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Colorado Property Tax" }]}
    >
      <h1>Colorado Property Tax</h1>

      <p>
        Colorado&rsquo;s system turns on a chain most states do not use:
        <strong> actual value</strong> is what the assessor says the property is
        worth, the <strong>assessment rate</strong> set by the legislature turns
        that into assessed value, and the <strong>mill levy</strong> of each
        taxing district is applied to the assessed value. The rate is not a small
        technicality — residential property is assessed at a fraction of its
        actual value, and the rate itself is set fresh by the legislature, so the
        two numbers on your notice interact in a way few other states replicate.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/colorado-property-tax/assessment-rate/">
            Actual value and the assessment rate
          </Link>{" "}
          — the multiplication that defines the Colorado tax base, why
          residential is valued by sales alone, and why the rate is
          legislative and volatile.
        </li>
        <li>
          <Link href="/colorado-property-tax/notice-of-valuation/">
            The Notice of Valuation explained
          </Link>{" "}
          — what arrives by May 1, the two years of value it shows, and the
          odd-year revaluation cycle behind it.
        </li>
        <li>
          <Link href="/colorado-property-tax/protest-and-appeal/">
            Protesting and the appeal path
          </Link>{" "}
          — the May 1 – June 8 protest window, the county board of
          equalization, and the three routes beyond it.
        </li>
        <li>
          <Link href="/colorado-property-tax/deadlines/">
            Colorado property tax deadlines
          </Link>{" "}
          — the full calendar: NOV, protest, Notice of Determination, county
          board, and the payment dates.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> discovers, lists, classifies and
          values every property in the county. The assessor does not set tax
          rates and does not collect taxes.
        </li>
        <li>
          <strong>Taxing authorities</strong> — county, cities, school districts,
          special districts — set the mill levies each fall. School districts are
          levied separately from the other local governments.
        </li>
        <li>
          <strong>The county treasurer</strong> collects the tax. All property
          tax revenue stays within the county; property taxes fund no state
          services.
        </li>
        <li>
          <strong>The Division of Property Taxation</strong> (Department of Local
          Affairs) publishes the state&rsquo;s procedures, calendars and the
          assessment-rate tables the assessors follow.
        </li>
      </ul>

      <h2>The odd-year reassessment cycle</h2>
      <p>
        Real property is revalued every <strong>odd-numbered year</strong>;
        personal property is valued annually. In even years, a real property&rsquo;s
        value carries over from the last revaluation unless a change
        (construction, destruction, ownership use change) requires adjustment.
        For the 2025 and 2026 tax years, the comparable-sales window for
        residential valuation is January 1, 2023 through June 30, 2024 — market
        movements after that window are not, by themselves, evidence about the
        value set from it. The{" "}
        <Link href="/colorado-property-tax/notice-of-valuation/">
          Notice of Valuation page
        </Link>{" "}
        explains what this means for reading your notice.
      </p>

      <h2>Protesting your value</h2>
      <p>
        If you disagree with the actual value or the classification, you may
        present <strong>oral or written objections to the county assessor</strong>{" "}
        during the protest period — <strong>May 1 through June 8</strong> for real
        property. The assessor must decide your protest and mail you a{" "}
        <strong>Notice of Determination</strong>. Counties with populations over
        300,000 are <strong>required</strong> to use an alternate protest schedule
        (later Notice of Determination, later county board hearings), and any
        county may elect it — the two schedules differ by roughly two months at
        every later step. The{" "}
        <Link href="/colorado-property-tax/protest-and-appeal/">
          protest and appeal page
        </Link>{" "}
        walks the full ladder.
      </p>

      <h2>Finding your property: county search</h2>
      <p>
        Colorado has <strong>no single statewide property search</strong> — each
        county assessor runs its own. Denver&rsquo;s official system, for example,
        searches assessment and tax data for real and business personal property
        by address, parcel ID or schedule number. Start from{" "}
        <a
          href="https://www.denvergov.org/Property"
          target="_blank"
          rel="noopener noreferrer"
        >
          Denver&rsquo;s official property search
        </a>{" "}
        if that is your county, or find your county assessor through the{" "}
        <a
          href="https://dpt.colorado.gov/locality"
          target="_blank"
          rel="noopener noreferrer"
        >
          Division&rsquo;s official county-assessor directory
        </a>
        . The state also maintains an interactive{" "}
        <a
          href="https://dpt.colorado.gov/property-tax-map"
          target="_blank"
          rel="noopener noreferrer"
        >
          Property Tax Map
        </a>{" "}
        of districts and rates — useful for exploring, but built on unaudited
        county-reported data, so treat your assessor as the authority for current
        figures.
      </p>

      <h2>Paying the bill</h2>
      <p>
        Tax bills reflecting the prior year&rsquo;s taxes are mailed as soon as
        possible after January 1. Amounts above $25 may be paid in one payment by
        April 30 or in two halves: the first due by the last day of February, the
        second by June 15. Amounts of $25 or less are due in full by April 30.
      </p>

      <h2>What this does not cover</h2>
      <p>
        County-specific protest portals and local dates are not restated here —
        your assessor&rsquo;s notice and site are authoritative for the adjusted
        dates the statute shifts. Senior and disabled veteran exemptions, and
        business personal property procedures, are outside this section.
        AssessCheck has no data connection to any Colorado county or the
        Division.
      </p>

      <SourceList
        sourceIds={[
          "co-dpt-understanding",
          "co-dpt-protests-appeals",
          "co-dpt-property-tax-map",
          "co-dpt-assessor-directory",
          "co-denver-property-search",
        ]}
      />
    </PageShell>
  );
}

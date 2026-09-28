import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/new-jersey-property-tax/",
  title: "New Jersey Property Tax",
  description:
    "How New Jersey property tax works: annual assessments at full market value as of October 1, the April 1 appeal deadline (with May 1 and January 15 variants), and the Chapter 123 common level range of ±15% around the average ratio.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New Jersey",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "New Jersey Property Tax" }]}
    >
      <h1>New Jersey Property Tax</h1>

      <p>
        New Jersey has among the highest property tax bills in the country and
        one of the most rule-bound appeal systems. Assessments are set
        annually at <strong>full market value</strong> as of{" "}
        <strong>October 1 of the prior year</strong>, appeals are due{" "}
        <strong>April 1</strong> — filed and received, not just mailed — and
        the state&rsquo;s signature mechanism is the{" "}
        <strong>Chapter 123 test</strong>: an assessment outside{" "}
        <strong>15% of the district&rsquo;s average ratio</strong> is
        presumptively wrong and gets adjusted automatically.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/new-jersey-property-tax/chapter-123/">
            The Chapter 123 test and the common level range
          </Link>{" "}
          — the ±15% band around the certified average ratio, and why the
          winning argument can be arithmetic rather than market evidence.
        </li>
        <li>
          <Link href="/new-jersey-property-tax/appeal-process/">
            The appeal process and the April 1 deadline
          </Link>{" "}
          — Form A-1, the county boards, the May 1 and January 15 variants,
          and the 45-day Tax Court window.
        </li>
        <li>
          <Link href="/new-jersey-property-tax/deadlines/">
            New Jersey property tax deadlines
          </Link>{" "}
          — the annual calendar from October 1 through the Tax Court window.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The municipal assessor</strong> values property as of
          October 1 of each year.
        </li>
        <li>
          <strong>The County Board of Taxation</strong> (one per county)
          receives petitions of appeal, holds hearings, and issues judgments.
        </li>
        <li>
          <strong>The Tax Court of New Jersey</strong> hears direct appeals of
          assessments over $1 million — and appeals of county board judgments.
        </li>
        <li>
          <strong>The Division of Taxation</strong> certifies the average
          ratio for every taxing district each year — the number the Chapter
          123 test turns on.
        </li>
      </ul>

      <h2>The deadlines: April 1, with two deviations</h2>
      <p>
        A petition of appeal (Form A-1 with the comparable-sales attachment)
        must be <strong>filed and received by April 1</strong> with the County
        Board of Taxation. Two statewide variations exist: <strong>May 1</strong>{" "}
        where the municipality undertook a revaluation or reassessment, and{" "}
        <strong>January 15</strong> in Burlington, Gloucester and Monmouth
        Counties, which follow an alternative assessment calendar. The{" "}
        <Link href="/new-jersey-property-tax/appeal-process/">
          appeal process page
        </Link>{" "}
        walks through the filing and what follows it.
      </p>

      <h2>Finding your property</h2>
      <p>
        New Jersey property records are municipal — each of the 565
        municipalities keeps its own assessment records, and each county tax
        board publishes its forms and hearing calendars. The Division of
        Taxation&rsquo;s Local Property Branch pages are the state-level
        entry point, and the certified average ratios are published
        district-by-district each year for the Chapter 123 test.
      </p>

      <h2>What this does not cover</h2>
      <p>
        Farmland assessment, exemption programs, and the municipal
        revaluation processes themselves are not covered here in detail.
        AssessCheck has no data connection to any New Jersey municipality,
        county board, or the Division of Taxation.
      </p>

      <SourceList sourceIds={["nj-dor-lpt-appeal"]} />
    </PageShell>
  );
}

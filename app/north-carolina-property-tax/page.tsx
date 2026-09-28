import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/north-carolina-property-tax/",
  title: "North Carolina Property Tax",
  description:
    "How North Carolina property tax works: revaluation at least every eight years, the informal review with the county assessor, the Board of Equalization and Review that convenes in April and closes when it adjourns, and the 30-day appeal to the Property Tax Commission.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "North Carolina",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "North Carolina Property Tax" }]}
    >
      <h1>North Carolina Property Tax</h1>

      <p>
        North Carolina runs property tax through its{" "}
        <strong>100 counties</strong>: the county assessor values the property
        and the county (plus municipalities and fire districts) sets the rate
        against it. The state&rsquo;s role is the calendar —{" "}
        <strong>real property must be reappraised at least every eight
        years</strong> — and the appeal ladder: an{" "}
        <strong>informal review</strong> with the assessor&rsquo;s staff, a
        formal hearing before the county&rsquo;s{" "}
        <strong>Board of Equalization and Review</strong>, and a{" "}
        <strong>30-day appeal to the state Property Tax Commission</strong>.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/north-carolina-property-tax/revaluation-cycle/">
            Revaluation and the valuation date
          </Link>{" "}
          — the eight-year ceiling, why appeals are argued on the last
          revaluation date&rsquo;s market, and the burden of proof with its
          two forbidden arguments.
        </li>
        <li>
          <Link href="/north-carolina-property-tax/appeal-process/">
            The appeal process, informal to formal
          </Link>{" "}
          — the informal review, the Board of Equalization and
          Review&rsquo;s convene-and-adjourn window, and the Property Tax
          Commission.
        </li>
        <li>
          <Link href="/north-carolina-property-tax/deadlines/">
            North Carolina property tax deadlines
          </Link>{" "}
          — the revaluation calendar, the informal window, the board&rsquo;s
          schedule and the 30-day PTC appeal.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> (usually inside a Tax
          Administration office) values real and personal property and runs
          the informal review.
        </li>
        <li>
          <strong>The Board of Equalization and Review</strong> (BOER) is a
          citizen board appointed by the county commissioners that hears
          formal valuation appeals.
        </li>
        <li>
          <strong>The Property Tax Commission</strong> (PTC) is the state
          board in Raleigh that hears appeals from county board decisions.
        </li>
        <li>
          <strong>The Department of Revenue</strong> publishes the property
          tax rules, the appeal process, and the directory of county
          assessors.
        </li>
      </ul>

      <h2>Revaluation, and why the valuation date is not today</h2>
      <p>
        Real property is reappraised <strong>at least every eight
        years</strong>; many counties go more often. Between revaluations the
        value carries over, with off-cycle changes limited to what the
        statute allows (new construction, and similar). Orange County, for
        example, completed a revaluation effective{" "}
        <strong>January 1, 2025</strong>, with the previous one in 2021 and
        the next planned for 2029 — so <em>2026 appeals are argued on the
        property&rsquo;s worth on January 1, 2025</em>, not on today&rsquo;s
        market. The{" "}
        <Link href="/north-carolina-property-tax/revaluation-cycle/">
          revaluation page
        </Link>{" "}
        explains what this does to your evidence.
      </p>

      <h2>The burden of proof — and the two arguments that fail</h2>
      <p>
        North Carolina statutes put the <strong>burden of proof on the
        property owner</strong>: the owner must show the assessed value is
        more or less than <strong>market value as of the revaluation
        date</strong>, or that it is <strong>inconsistent with the
        assessments of similar properties</strong>. Two arguments that feel
        natural but are not grounds: the <em>percentage increase or
        decrease</em> in the value, and the owner&rsquo;s <em>ability to
        pay</em> the tax. The counties state both exclusions on their own
        appeal pages.
      </p>

      <h2>Finding your property and your county</h2>
      <p>
        North Carolina has <strong>no single statewide property search</strong>{" "}
        — each county runs its own (Orange County&rsquo;s, for example,
        centers on the Property Record Card and the county&rsquo;s comparable
        sales tool). Find your county assessor through the{" "}
        <a
          href="https://www.ncdor.gov/taxes-forms/property-tax/north-carolina-county-assessors-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Department&rsquo;s official county assessors list
        </a>
        , and the local appeal dates on your own county&rsquo;s tax
        administration pages — the county below is the verified example, not
        a substitute for them.
      </p>

      <h2>What this does not cover</h2>
      <p>
        Present-use value for agricultural land, elderly and disabled
        exclusions, and business personal property schedules are outside
        this section. AssessCheck has no data connection to any North
        Carolina county or the Department of Revenue. The General
        Assembly&rsquo;s statute site was not readable when these pages were
        verified, so General Statute sections are named only where an
        official page names them.
      </p>

      <SourceList
        sourceIds={[
          "nc-dor-appeal-process",
          "nc-dor-types-property-taxed",
          "nc-orange-appeal",
          "nc-orange-revaluation",
          "nc-county-assessors-list",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/value-appeal/",
  title: "Appealing Your Nevada Assessment",
  description:
    "Appealing a Nevada property value: the January 15 filing at the county assessor's office, the county Board of Equalization, the taxpayer's burden of proof, the March 10 state appeal, and the separate June 30 abatement track.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Nevada",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/nevada-property-tax/", label: "Nevada Property Tax" },
        { label: "Appealing your value" },
      ]}
    >
      <h1>Appealing Your Nevada Assessment</h1>

      <p>
        Nevada has <strong>two separate appeal tracks</strong>, and they do not
        share a deadline, a forum or a subject. One is about the{" "}
        <strong>value</strong> and goes to the county Board of Equalization by
        January 15. The other is about the{" "}
        <strong>abatement determination</strong> and goes to the county assessor
        by June 30. Filing the wrong one, or filing one after the other has
        closed, is the most common way an appeal is lost before it is heard.
      </p>

      <h2>The value track</h2>
      <ol>
        <li>
          <strong>Talk to an appraiser first.</strong> The assessor&rsquo;s office
          reviews questions about the appraisal itself and will furnish a copy of
          the most recent appraisal of the property on request. The counties say
          most matters are resolved at this stage.
        </li>
        <li>
          <strong>File with the assessor&rsquo;s office by January 15</strong> —
          the next business day when January 15 falls on a Saturday, Sunday or
          legal holiday. Appeal forms are available from the assessor (Clark
          County makes them available during December) or from the Nevada
          Department of Taxation.
        </li>
        <li>
          <strong>The county Board of Equalization hears it.</strong> The board
          may adjust the assessed value, up or down.
        </li>
        <li>
          <strong>Appeal further to the State Board of Equalization by March 10</strong>{" "}
          if you disagree with the county board&rsquo;s decision. Beyond that,
          the route is the courts.
        </li>
      </ol>

      <h2>Who has to prove what</h2>
      <p>
        In Nevada the <strong>burden of proof is on the taxpayer</strong>: you
        must show that the valuation is in error, or that the taxable value
        exceeds the property&rsquo;s full cash value. That is a higher bar than
        it sounds, and it shapes what evidence is worth bringing, because the
        valuation is built in a defined way:
      </p>
      <ul>
        <li>
          <strong>The land</strong> is valued from market sales and other
          recognized appraisal methods, considering location, zoning and actual
          use.
        </li>
        <li>
          <strong>The improvements</strong> are valued at current replacement
          cost less depreciation: a published annual depreciation factor applied
          to the effective age of the building, capped at fifty years.
        </li>
        <li>
          <strong>Values are updated annually</strong>, either by reappraisal or
          by factoring the prior value with factors approved at state level, and
          replacement costs come from a national cost service.
        </li>
      </ul>
      <p>
        Those inputs are what an owner can actually test. An effective age that
        overstates the condition, a replacement cost applied to a structure that
        is not comparable, square footage or features that do not match the
        record, or land comparables that ignore a real difference are arguments
        about the method the assessor is required to use — not simply a
        statement that the number feels high.
      </p>

      <h2>Two things that decide a lot of Nevada appeals</h2>
      <ul>
        <li>
          <strong>A successful appeal does not automatically lower your bill.</strong>{" "}
          If your bill has been running below the calculated tax because the
          abatement has been binding, reducing the value changes nothing until
          the calculated tax falls below the capped figure. The converse is also
          true: a value increase does not necessarily raise the bill. Only the{" "}
          <em>bill</em> is capped, and only the <em>value</em> is appealable here
          — two facts that fit together awkwardly.
        </li>
        <li>
          <strong>This board is about value, not about taxes.</strong> The
          assessor&rsquo;s office says so directly: its role is property
          valuation, not the tax rate or the tax amount, and questions about
          services or the taxes themselves belong with your county commissioner
          or your state representative. The rate is set by a state body from
          local budgets.
        </li>
      </ul>

      <h2>The abatement track, kept separate</h2>
      <p>
        If what you dispute is the abatement itself — the wrong level, a value
        treated as new to the roll, a remainder-parcel figure — the filing is a
        petition for review under NRS 361.4734 with the{" "}
        <strong>county assessor, by June 30 of the fiscal year concerned</strong>
        . The assessor acknowledges within 15 days and decides within 30 days of
        receiving the petition; an appeal of that decision goes to the{" "}
        <strong>Nevada Tax Commission within 30 days</strong> of the notice of
        decision, where a hearing officer makes findings and a proposed order
        that either side may object to within 20 days. The{" "}
        <Link href="/nevada-property-tax/tax-cap-abatement/">
          abatement page
        </Link>{" "}
        covers the substance, and the{" "}
        <Link href="/nevada-property-tax/deadlines/">
          deadline registry
        </Link>{" "}
        keeps both calendars in one place.
      </p>

      <h2>What this does not tell you</h2>
      <ul>
        <li>
          <strong>What your county&rsquo;s board expects in practice.</strong>{" "}
          Nevada does not publish a statutory pre-hearing evidence exchange of
          the kind some other states impose, and the county material verified for
          this site describes the filing and the burden rather than a required
          document list. Ask the board clerk what it accepts before you rely on a
          format.
        </li>
        <li>
          <strong>Whether your county lets personal property and real property
          follow the same calendar.</strong> They do not: business personal
          property appeals run on the billing date of the bill concerned, with
          their own state-level deadlines.
        </li>
        <li>
          <strong>The outcome.</strong> Nothing here predicts a result, and a
          board may leave the value unchanged.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nv-washoe-assessor-faq",
          "nv-washoe-assessor-dates",
          "nv-clark-assessor-real-property",
          "nv-washoe-abatement-appeal",
        ]}
      />
    </PageShell>
  );
}

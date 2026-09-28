import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/minnesota-property-tax/",
  title: "Minnesota Property Tax",
  description:
    "How Minnesota property tax works: value and classification set January 2 with taxes payable the next year, local boards of appeal that meet in April–June, a direct route to the Minnesota Tax Court by April 30 of the payable year, and class rates instead of a value cap.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Minnesota",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Minnesota Property Tax" }]}
    >
      <h1>Minnesota Property Tax</h1>

      <p>
        Minnesota&rsquo;s system runs one year behind itself: value and
        classification are set <strong>January 2 of the assessment
        year</strong>, but they calculate the taxes you pay the{" "}
        <strong>following year</strong> — and the appeal windows are tied to{" "}
        <strong>board meetings in April, May and June</strong>, not to a
        filing deadline. There is no cap on the value at all: distribution
        between property types is done through{" "}
        <strong>classification rates</strong> set by law, and a{" "}
        <strong>direct appeal to the Minnesota Tax Court</strong> can skip the
        local boards entirely.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/minnesota-property-tax/assessment-to-payable-lag/">
            The assessment-to-payable year lag
          </Link>{" "}
          — why your 2026 notice drives your 2027 taxes, and the three
          notices that structure the year.
        </li>
        <li>
          <Link href="/minnesota-property-tax/board-appeals/">
            The board appeals: local and county
          </Link>{" "}
          — how the meeting-is-the-deadline structure works, and the
          LBAE-first rule.
        </li>
        <li>
          <Link href="/minnesota-property-tax/tax-court-appeal/">
            The direct route to the Minnesota Tax Court
          </Link>{" "}
          — skipping the boards, the April 30 payable-year deadline, and the
          Court&rsquo;s jurisdiction.
        </li>
        <li>
          <Link href="/minnesota-property-tax/deadlines/">
            Minnesota property tax deadlines
          </Link>{" "}
          — the full calendar from January 2 through the installments.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> sets estimated market value
          (EMV) and classification as of January 2, from a statutory
          sales-study window of October 1 to September 30.
        </li>
        <li>
          <strong>The Local Board of Appeal and Equalization (LBAE)</strong> —
          usually the city council or town board — meets between{" "}
          <strong>April 1 and May 31</strong>.
        </li>
        <li>
          <strong>The County Board of Appeal and Equalization (CBAE)</strong> —
          usually the county commissioners — meets in <strong>June</strong>.
        </li>
        <li>
          <strong>The Minnesota Tax Court</strong>, a specialized
          executive-branch court under chapter 271, hears petitions on
          valuation, classification, equalization and exemptions.
        </li>
        <li>
          <strong>The county auditor</strong> computes the tax from the levy,
          the class rates, and your taxable market value.
        </li>
      </ul>

      <h2>The assessment-to-payable year lag</h2>
      <p>
        The 2025 assessment produces the taxes <strong>payable in 2026</strong> —
        and the Tax Court deadline follows the same lag (April 30, 2026, for
        the 2025 assessment). The <strong>Valuation Notice</strong> (mailed on
        or before <strong>April 1</strong>) shows the value and classification
        the following year&rsquo;s taxes will use; then a{" "}
        <strong>Truth in Taxation notice</strong> arrives in November with the
        proposed tax, and the <strong>property tax statement</strong> is
        mailed by <strong>March 31</strong>. Because the statement uses the
        prior year&rsquo;s value, <strong>the tax amount itself cannot be
        appealed</strong> — only the value and classification behind it.
      </p>

      <h2>What the money is: class rates, not a cap</h2>
      <p>
        Minnesota has no limit on how fast assessed value may rise. Instead,
        each classification (homestead, apartment, agricultural, commercial…)
        carries a <strong>class rate</strong> set by law: taxable market value
        × class rate = <strong>tax capacity</strong>, and the local levy is
        spread over the county&rsquo;s total tax capacity. Homesteads benefit
        from lower class rates and a <strong>homestead market value
        exclusion</strong> — a reduction of taxable value that phases out as
        value rises. Taxes are due in two equal installments,{" "}
        <strong>May 15 and October 15</strong>.
      </p>

      <h2>What this does not cover</h2>
      <p>
        The class-rate schedules, the homestead exclusion&rsquo;s exact
        parameters, special taxing districts, and the state general tax are
        not restated here. AssessCheck has no data connection to any Minnesota
        county or the Department of Revenue.
      </p>

      <SourceList
        sourceIds={[
          "mn-dor-appealing",
          "mn-dor-understanding",
          "mn-tax-court-home",
          "mn-anoka-appeal",
        ]}
      />
    </PageShell>
  );
}

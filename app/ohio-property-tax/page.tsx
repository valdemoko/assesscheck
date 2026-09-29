import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/ohio-property-tax/",
  title: "Ohio Property Tax",
  description:
    "How Ohio property tax works: taxable value at 35% of true value, the six-year county reappraisal cycle with triennial updates, the DTE Form 1 complaint to the county Board of Revision filed by March 31, and the Board of Tax Appeals route beyond it.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Ohio",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Ohio Property Tax" }]}
    >
      <h1>Ohio Property Tax</h1>

      <p>
        Ohio&rsquo;s system is county-run on a state calendar. The{" "}
        <strong>county auditor</strong> values every parcel; the{" "}
        <strong>taxable value</strong> the rates are applied to is a fixed{" "}
        <strong>35% of true (market) value</strong>; and the state runs the{" "}
        <strong>88 counties</strong> through a <strong>six-year reappraisal
        cycle</strong> with a <strong>triennial update</strong> in between. The
        appeal route runs through a county <strong>Board of Revision</strong>{" "}
        (a complaint on DTE Form 1) and can continue to the state{" "}
        <strong>Board of Tax Appeals</strong>.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/ohio-property-tax/taxable-value-and-cycle/">
            Taxable value and the reappraisal cycle
          </Link>{" "}
          — the 35% ratio, the six-year reappraisal and triennial update, and
          what each phase means for your year-over-year comparison.
        </li>
        <li>
          <Link href="/ohio-property-tax/bor-complaint/">
            The DTE Form 1 complaint to the Board of Revision
          </Link>{" "}
          — the window, the form, the evidence, and how the hearing works.
        </li>
        <li>
          <Link href="/ohio-property-tax/bta-appeal/">
            Beyond the Board of Revision: the Board of Tax Appeals
          </Link>{" "}
          — the 30-day dual-filing window and the small claims docket.
        </li>
        <li>
          <Link href="/ohio-property-tax/deadlines/">
            Ohio property tax deadlines
          </Link>{" "}
          — the revaluation calendar, the complaint window, and the BTA
          appeal clock.
        </li>
        <li>
          <Link href="/ohio-property-tax/property-value-estimator/">
            Ohio property value estimator
          </Link>{" "}
          — convert a true value into taxable value at the 35% ratio and
          estimate the tax that follows.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county auditor</strong> determines the value of every
          parcel in the county and carries the assessment roll. The complaint
          against a value is filed with the auditor too.
        </li>
        <li>
          <strong>The county Board of Revision</strong> (BOR) hears complaints
          about the auditor&rsquo;s appraised value.
        </li>
        <li>
          <strong>The Ohio Department of Taxation</strong> oversees the county
          revaluations and publishes the forms, including DTE Form 1.
        </li>
        <li>
          <strong>The Board of Tax Appeals</strong> (BTA) is the state body
          that hears appeals from Board of Revision decisions, including a{" "}
          <em>small claims docket</em> for residential appeals.
        </li>
      </ul>

      <h2>Taxable value: 35% of true value</h2>
      <p>
        Ohio does not tax market value directly. The auditor reduces true value
        to taxable value at <strong>35%</strong>, and the voted levies of the
        school districts, cities, townships and counties are applied to that
        reduced figure. Two practical consequences: a &ldquo;small&rdquo; market
        move is even smaller on the tax base, and comparing an Ohio taxable
        value with a neighbor&rsquo;s market estimate will always look wrong —
        the 35% is doing what the law intends. The{" "}
        <Link href="/ohio-property-tax/taxable-value-and-cycle/">
          taxable value page
        </Link>{" "}
        works the arithmetic and the cycle together.
      </p>

      <h2>The complaint window</h2>
      <p>
        The complaint against the valuation of real property —{" "}
        <strong>DTE Form 1</strong> — runs{" "}
        <strong>January 1 through March 31 of the following tax year</strong>,
        or the last day to pay first-half taxes where that date is earlier.
        Franklin County&rsquo;s Board of Revision page states the current
        window plainly — <em>tax year 2026 complaints are accepted through
        March 31, 2027</em> — and confirms electronic filing through the
        Board of Tax Appeals portal. See the{" "}
        <Link href="/ohio-property-tax/bor-complaint/">complaint page</Link>{" "}
        for the process and evidence.
      </p>

      <h2>Finding your property: county search</h2>
      <p>
        Ohio has <strong>no single statewide property search</strong> — each
        county auditor runs its own. Franklin County&rsquo;s official search,
        for example, covers all of Franklin County (Columbus) by owner name,
        address or parcel ID. Start from{" "}
        <a
          href="https://property.franklincountyauditor.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Franklin County&rsquo;s property search
        </a>{" "}
        if that is your county, or find your county auditor through the{" "}
        <a
          href="https://caao.org/auditors-directory/"
          target="_blank"
          rel="noopener noreferrer"
        >
          County Auditors&rsquo; Association directory
        </a>{" "}
        or the{" "}
        <a
          href="https://tax.ohio.gov/individual/property-tax"
          target="_blank"
          rel="noopener noreferrer"
        >
          Department&rsquo;s &ldquo;Find Your County Auditor&rdquo; lookup
        </a>
        .
      </p>

      <h2>What this does not cover</h2>
      <p>
        Voted levy campaigns, the homestead exemption program, and
        current-agricultural-use valuation are outside this section. AssessCheck
        has no data connection to any Ohio county auditor. The Ohio Revised
        Code itself was not readable when these pages were verified, so statute
        sections are named only where an official page names them.
      </p>

      <SourceList
        sourceIds={[
          "oh-dor-property-tax-hub",
          "oh-dor-reappraisal",
          "oh-bta-appeal-info",
          "oh-franklin-bor",
          "oh-caao-directory",
          "oh-franklin-property-search",
        ]}
      />
    </PageShell>
  );
}

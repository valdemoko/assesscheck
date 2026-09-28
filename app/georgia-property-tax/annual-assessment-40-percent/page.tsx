import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/georgia-property-tax/annual-assessment-40-percent/",
  title: "Georgia Annual Assessment and the 40% Ratio",
  description:
    "How Georgia builds its tax base: fair market value assessed every January 1 with no state revaluation schedule, the 40% assessed-value ratio, and the annual digest review the counties run.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Georgia",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/georgia-property-tax/", label: "Georgia Property Tax" },
        { label: "Annual Assessment" },
      ]}
    >
      <h1>Annual Assessment and the 40% Ratio</h1>

      <p>
        Georgia&rsquo;s value chain is annual and simple to state: every
        parcel is assessed at <strong>fair market value as of January
        1</strong> (O.C.G.A. § 48-5-2), and the tax falls on{" "}
        <strong>40% of that value</strong> — the statewide assessed-value
        ratio (O.C.G.A. § 48-5-6 is the return-and-assess requirement).
        What makes Georgia distinctive is what it does{" "}
        <em>not</em> have: <strong>no state revaluation schedule</strong>.
      </p>

      <h2>No revaluation cycle — an annual digest review</h2>
      <p>
        Unlike Ohio (six-year reappraisals) or North Carolina (eight-year
        ceiling), Georgia requires the county board of tax assessors to{" "}
        <strong>review its digest annually against sales data</strong> and
        update values at the frequency the market warrants. In a hot
        market, values can move several years running; in a flat one,
        they may sit. The Department&rsquo;s FAQ states the annual
        January 1 assessment and the absence of a state schedule
        directly.
      </p>
      <p>
        <strong>What this tells you:</strong> Georgia is the mirror image
        of the carryover states. There is no &ldquo;reassessment
        year&rdquo; to brace for and no three-year-old sales window to
        argue within — but also no cycle on which to blame a jump. A big
        increase in any year is, by construction, the digest review
        working; the argument is about the market value itself.
      </p>

      <h2>The 40% ratio, worked</h2>
      <p>
        The Department&rsquo;s own worked example is the cleanest
        statement: a $100,000 home is assessed at{" "}
        <strong>$40,000</strong>, and the millage rate applies to that
        figure after exemptions.
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> market value $400,000; combined
          millage of 25 mills ($25 per $1,000 of assessed value,
          illustrative); standard homestead exemption.
        </li>
        <li>
          <strong>Step — the ratio:</strong> assessed value = $400,000 ×
          40% = <strong>$160,000</strong>.
        </li>
        <li>
          <strong>Step — the exemptions:</strong> the state standard
          homestead exemption ($2,000) comes off the assessed value —
          small against a $160,000 base, which is why the{" "}
          <strong>county-level exemptions</strong> (some counties offer
          valuation freezes that hold the assessment at a base year)
          matter far more.
        </li>
        <li>
          <strong>Step — the tax:</strong> the millage applies to the
          remaining $158,000: 25 mills × $158 = $3,950 (illustrative).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the number to argue is{" "}
        <em>market value</em> — the 40% is uniform statewide and
        unarguable. A market-value cut passes through the ratio
        proportionally: a 10% value reduction is a 10% tax reduction
        before exemptions.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your millage. The
        rate is set separately each year by the county, the school
        district, and the state levies — and Georgia&rsquo;s rollback
        rules require notice when a reassessment-inflated digest is not
        matched by a rate cut.
      </p>

      <h2>The notice that arrives</h2>
      <p>
        The board of tax assessors must send an{" "}
        <strong>annual assessment notice</strong> for real property —
        typically in the spring. Where the notice reflects a{" "}
        <strong>change</strong>, the Taxpayer&rsquo;s Bill of Rights
        adds requirements: a{" "}
        <strong>knowledgeable contact person</strong>, and — where the
        increase exceeds <strong>15%</strong> — a{" "}
        <strong>non-technical explanation of the basis</strong> for the
        change plus the <strong>right to view or copy the records
        used</strong>. The{" "}
        <Link href="/georgia-property-tax/appeal-and-bill-of-rights/">
          appeal page
        </Link>{" "}
        picks up from the notice&rsquo;s mailing date.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        Personal-property returns, conservation-use and brownfield
        covenants, and the freeport exemption are outside this page. The
        Department&rsquo;s FAQ cited below is the authority for the
        annual assessment, the ratio, and the worked example.
      </p>

      <SourceList
        sourceIds={["ga-dor-property-faq", "ga-dor-bill-of-rights"]}
      />
    </PageShell>
  );
}

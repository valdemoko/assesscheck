import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/oregon-property-tax/",
  title: "Oregon Property Tax Basics",
  description:
    "How Oregon property tax works: Measure 50's maximum assessed value versus real market value, the assessed value as the lower of the two, and the Measure 5 limits that can compress your bill.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Oregon",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Oregon Property Tax" }]}
    >
      <h1>Oregon Property Tax Basics</h1>

      <p>
        Oregon runs <strong>two limits from two different ballot measures</strong>
        , and they are routinely confused with each other. <strong>Measure 50</strong>{" "}
        (1997) put a limit on the growth of taxable value. <strong>Measure 5</strong>{" "}
        (1990) put a limit on the tax itself, expressed in dollars per thousand of
        value. A bill can move because of either one, and in opposite directions.
      </p>

      <h2>The three values</h2>
      <ul>
        <li>
          <strong>Real market value (RMV)</strong> — the assessor&rsquo;s opinion
          of what the property would sell for: the amount in cash an informed
          buyer would pay an informed seller, neither acting under compulsion, in
          an arm&rsquo;s-length transaction as of the assessment date.
        </li>
        <li>
          <strong>Maximum assessed value (MAV)</strong> — a <em>limit</em>, not an
          opinion of value. Assuming the property has not changed, it is the
          greater of 103% of the prior year&rsquo;s assessed value or 100% of the
          prior year&rsquo;s MAV.
        </li>
        <li>
          <strong>Assessed value (AV)</strong> — the{" "}
          <strong>lower of the MAV or the RMV</strong>. This is the figure the tax
          rate is applied to.
        </li>
      </ul>

      <h2>The tax is the lower of two calculations</h2>
      <p>Two calculations are performed every year, and your bill is the lower:</p>
      <ol>
        <li>
          <strong>Assessed value &times; your levy code area&rsquo;s tax rate</strong>
          , plus any special assessments; and
        </li>
        <li>
          <strong>Real market value &times; the Measure 5 limits</strong> — $5 per
          $1,000 for education taxes and $10 per $1,000 for general government —
          plus the amounts for items that are <em>excluded</em> from those limits,
          such as bond levies and some special assessments, which are computed on
          the assessed value instead.
        </li>
      </ol>
      <p>
        When the second calculation comes out lower, the property is{" "}
        <strong>compressed</strong>. That is why an Oregon bill can behave in ways
        that neither the 3% limit nor a change in value explains:{" "}
        <em>losing compression savings</em> is one of the stated reasons a bill
        rises by more than 3%, along with a change in your levy code area&rsquo;s
        rate and an exception event on the property.
      </p>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> values the property as of January
          1, computes the maximum assessed value, and prepares the roll. It does
          not set your tax rate.
        </li>
        <li>
          <strong>The Department of Revenue</strong> appraises certain industrial
          and utility property and allocates utility values to county rolls.
          Appeals about DOR-appraised property go straight to the Tax Court, not
          to the county board.
        </li>
        <li>
          <strong>The county Board of Property Tax Appeals</strong> — named the
          Property Valuation Appeals Board in some counties — hears appeals about
          the current year&rsquo;s values, after the tax statement arrives and
          until December 31.
        </li>
        <li>
          <strong>The Oregon Tax Court</strong> takes the case next: the
          Magistrate Division first, then the Regular Division, then the Supreme
          Court.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative numbers only, and the rate is invented — Oregon rates are
          set per levy code area and the Measure 5 amounts below ignore excluded
          items, which are added on top.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> the assessor&rsquo;s real market value is
          $520,000. Last year&rsquo;s assessed value was $310,000 and last
          year&rsquo;s MAV was $330,000. The illustrative tax rate is $18.50 per
          $1,000 of assessed value.
        </li>
        <li>
          <strong>Step — the MAV test:</strong> the greater of $310,000 &times;
          1.03 = $319,300 or $330,000 is <strong>$330,000</strong>.
        </li>
        <li>
          <strong>Step — the assessed value:</strong> the lower of the MAV
          ($330,000) or the RMV ($520,000) is <strong>$330,000</strong>.
        </li>
        <li>
          <strong>Step — calculation 1:</strong> 330 &times; $18.50 ={" "}
          <strong>$6,105</strong>.
        </li>
        <li>
          <strong>Step — calculation 2:</strong> the RMV &times; the Measure 5
          limits is 520 &times; $15.00 = <strong>$7,800</strong>. Calculation 1 is
          lower, so the bill is $6,105 and the property is not compressed.
        </li>
        <li>
          <strong>Change one input:</strong> if the RMV were $380,000 instead,
          calculation 2 would be 380 &times; $15.00 = $5,700, which is lower than
          $6,105 — the bill would be <strong>$5,700</strong> and the property
          would be compressed by $405.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> your bill is not simply your value
        multiplied by a rate, and the 3% everyone quotes applies to only one of
        the three figures. The assessed value is where a fall in the market
        actually reaches your bill, and compression is where the Measure 5 limits
        do.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your RMV is right —
        that is the one figure an appeal to the county board is designed to test,
        and even a successful reduction may not change your bill. The{" "}
        <Link href="/oregon-property-tax/appeal/">appeal page</Link> explains the
        two conditions under which it does.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/oregon-property-tax/measure-50-mav/">
            Measure 50 and the maximum assessed value
          </Link>{" "}
          — the 103% test, and why the MAV is not simply last year&rsquo;s figure
          plus 3%.
        </li>
        <li>
          <Link href="/oregon-property-tax/changed-property-ratio/">
            New construction and the changed property ratio
          </Link>{" "}
          — why a new house is taxed on a fraction of its value, and what counts
          as an exception event.
        </li>
        <li>
          <Link href="/oregon-property-tax/tax-statement/">
            Your tax statement
          </Link>{" "}
          — what arrives before October 25, and how compression appears on it.
        </li>
        <li>
          <Link href="/oregon-property-tax/appeal/">Appealing your value</Link> —
          the board, the Tax Court, and what the counties accept as evidence.
        </li>
        <li>
          <Link href="/oregon-property-tax/deadlines/">
            Oregon property tax deadlines
          </Link>{" "}
          — the assessment date, the statement,          the December 31 filing and the
          installments.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "or-multco-assessment-faq",
          "or-multco-tax-calculation",
          "or-multco-property-taxes",
          "or-hood-river-cpr",
          "or-yamhill-appeals",
        ]}
      />
    </PageShell>
  );
}

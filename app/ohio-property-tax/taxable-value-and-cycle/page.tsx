import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/ohio-property-tax/taxable-value-and-cycle/",
  title: "Ohio Taxable Value and the Reappraisal Cycle",
  description:
    "How Ohio builds its tax base: true value reduced to taxable value at 35%, the six-year county reappraisal cycle with the triennial update, and what each phase of the cycle means for reading your value.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Ohio",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/ohio-property-tax/", label: "Ohio Property Tax" },
        { label: "Taxable Value and Cycle" },
      ]}
    >
      <h1>Taxable Value and the Reappraisal Cycle</h1>

      <p>
        Ohio&rsquo;s tax base has two defining features: a{" "}
        <strong>fixed 35% assessment ratio</strong> — true (market) value
        reduced to taxable value — and a{" "}
        <strong>state-supervised six-year reappraisal cycle</strong> for
        each of the 88 counties, with a <strong>triennial update</strong>{" "}
        at the three-year mark. Both are stated on the Department of
        Taxation&rsquo;s own reappraisal page, and together they explain
        almost every surprising number on an Ohio value notice.
      </p>

      <h2>The 35% ratio, worked</h2>
      <p>
        The auditor determines <strong>true value</strong> — the market
        estimate — and multiplies by <strong>35%</strong> to produce{" "}
        <strong>taxable value</strong>. The voted levies of school
        districts, cities, townships and counties are applied to the{" "}
        <em>taxable</em> figure, in mills ($1 per $1,000 of taxable value).
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> true value $300,000; a combined voted
          levy of 100 mills (illustrative).
        </li>
        <li>
          <strong>Step — the ratio:</strong> taxable value = $300,000 ×
          35% = <strong>$105,000</strong>.
        </li>
        <li>
          <strong>Step — the tax:</strong> 100 mills × $105 = $10,500 of
          gross tax before the reductions Ohio law layers on (the
          10%/2.5% rollback and homestead reductions the state reimburses
          to local governments).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the number to sanity-check is{" "}
        <em>true value</em>, and the complaint (DTE Form 1) argues true
        value. The 35% is not an error when your taxable value looks
        &ldquo;too low&rdquo; against your market estimate — it is the
        statute working. And a 10% true-value cut moves the tax base by
        the same 10% — the ratio is fixed, so the percentage change
        passes straight through.
      </p>
      <p>
        <strong>What it does not tell you:</strong> what your actual bill
        will be — Ohio&rsquo;s levy reductions and rollbacks sit between
        the gross calculation and the bill, and they vary with the levy
        mix.
      </p>

      <h2>The six-year cycle and the triennial update</h2>
      <p>
        Each county is <strong>fully reappraised once every six
        years</strong> — the &ldquo;sexennial&rdquo; reappraisal — and gets
        a <strong>triennial update</strong> three years in. The Department
        of Taxation oversees and approves each county&rsquo;s revaluation;
        the county auditor carries it out. Which phase your county is in
        changes what a year-over-year move means:
      </p>
      <ul>
        <li>
          <strong>Reappraisal year:</strong> the value has just been reset
          from full market data — a big move is the cycle working, not
          necessarily an error.
        </li>
        <li>
          <strong>Triennial update year:</strong> the county adjusts values
          toward current market, class by class — moderate moves are
          normal.
        </li>
        <li>
          <strong>Other years:</strong> values mostly carry over; a change
          usually reflects new construction, a split, or a physical
          change.
        </li>
      </ul>
      <p>
        <strong>What this tells you:</strong> before arguing a value, learn
        your county&rsquo;s phase. The honest comparison in a reappraisal
        year is your value against the sales data the reappraisal used —
        not against last year&rsquo;s value, which the cycle has just
        deliberately replaced.
      </p>

      <h2>Who values what</h2>
      <p>
        The <strong>county auditor</strong> — not a separate assessor —
        carries the valuation duty and the roll, which is also where the{" "}
        <Link href="/ohio-property-tax/bor-complaint/">
          complaint is filed
        </Link>
        . The Department of Taxation&rsquo;s oversight means the county
        does not choose its own calendar or methods: the state approves
        the revaluation plan before the values go out.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        Current agricultural use valuation (CAUV), the homestead
        exemption, and the levy-reduction mechanics (the 10% and 2.5%
        rollbacks) are outside this page. The Department&rsquo;s
        reappraisal page cited below is the authority for the ratio and
        the cycle.
      </p>

      <SourceList sourceIds={["oh-dor-reappraisal"]} />
    </PageShell>
  );
}

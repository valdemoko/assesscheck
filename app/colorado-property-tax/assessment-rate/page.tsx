import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/colorado-property-tax/assessment-rate/",
  title: "Colorado Actual Value and the Assessment Rate",
  description:
    "How Colorado's tax base is built: actual value times a legislatively-set assessment rate times the mill levy, why residential is valued by the market approach only, and why the rate itself changes almost every session.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Colorado",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/colorado-property-tax/", label: "Colorado Property Tax" },
        { label: "Assessment Rate" },
      ]}
    >
      <h1>Actual Value and the Assessment Rate</h1>

      <p>
        In most states, the number the tax is computed on is a fraction of
        market value fixed by constitution or statute, and the interesting
        arguments are about the value. Colorado adds a second moving part:
        the <strong>assessment rate</strong> that turns actual value into
        assessed value is set <strong>by the legislature, and it has moved
        in each of the last several sessions</strong>. Two identical houses
        in two different years can carry different assessed values with
        neither the market nor the assessor changing.
      </p>

      <h2>The chain: actual value × rate × mill levy</h2>
      <ol>
        <li>
          <strong>Actual value</strong> — the assessor&rsquo;s determination
          of what the property is worth, as of the January 1 assessment
          date, classified by its actual use on that date.
        </li>
        <li>
          <strong>Assessed value</strong> — actual value × the assessment
          rate for the property&rsquo;s class. <strong>Residential
          property is assessed at a fraction of its actual value</strong>;
          most other classes (commercial, industrial, vacant land) are
          assessed at a higher share.
        </li>
        <li>
          <strong>The tax</strong> — assessed value × the mill levy of each
          taxing district. One mill is $1 per $1,000 of assessed value, and
          your total levy is the sum of every district that overlaps your
          parcel.
        </li>
      </ol>

      <h2>Residential is valued by sales alone</h2>
      <p>
        Colorado&rsquo;s constitution directs that <strong>residential
        property be valued using the market approach only</strong> —
        comparable sales. Commercial, industrial and vacant land may be
        valued by any of the three approaches (market, cost, income). This
        makes the residential comparable-sales window — the period from
        which sales are drawn — the central fact of a Colorado residential
        appeal: evidence has to speak to that window, not to the market
        today.
      </p>

      <h2>The rate is legislative — and volatile</h2>
      <p>
        The assessment rates change because the legislature recalibrates
        them — partly in response to market swings (a hot market raises
        actual values, and rate cuts are the counterweight), and partly
        through outright policy changes. Since 2025, residential property
        even carries <strong>two different rates</strong>: one applied for
        local-government assessed value and another for school-district
        assessed value — a single property with two assessed values on the
        same bill.
      </p>
      <p>
        <strong>What this tells you:</strong> a year-over-year change in
        your <em>assessed</em> value has two possible causes — your actual
        value moved, or the rate did. Only the first is arguable in a
        protest; the rate is the same for everyone in your class statewide.
        Before comparing years, separate the two effects.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the current-year rates.
        This page deliberately does not restate them as permanent rules;
        the Division&rsquo;s own table (linked from the hub) and your
        notice are the authorities.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up round numbers — not current
          statutory rates.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> actual value $500,000; an illustrative
          residential rate of 6.7% for local-government purposes and 6.95%
          for school purposes; a combined mill levy of 80 mills.
        </li>
        <li>
          <strong>Step — assessed value:</strong> 6.7% of $500,000 is
          $33,500 (local); 6.95% is $34,750 (school) — two bases from one
          property.
        </li>
        <li>
          <strong>Step — the tax:</strong> each base is multiplied by the
          levies of its respective units, then summed. A 10% cut in the
          rate would drop the assessed value by 10% with the actual value
          untouched.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the protest targets{" "}
        <em>actual value</em> — the only number the assessor controls — and
        a successful protest of, say, $40,000 of actual value lowers each
        assessed base proportionally.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The Gallagher-era history and the constitutional amendments behind
        the current rates, and the personal-property valuation rules, are
        outside this page. The Division&rsquo;s pages cited below are the
        authorities for the classification and rate mechanics.
      </p>

      <SourceList
        sourceIds={["co-dpt-understanding", "co-dpt-property-tax-map"]}
      />
    </PageShell>
  );
}

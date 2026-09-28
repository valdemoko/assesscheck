import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/massachusetts-property-tax/proposition-2-5/",
  title: "Massachusetts Proposition 2½ and Municipal Assessment",
  description:
    "How Massachusetts values property: municipal assessors under state supervision, the Proposition 2½ levy limit, the DOR's three-year certification cycle, and why value and rate live in the same municipality.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Massachusetts",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/massachusetts-property-tax/", label: "Massachusetts Property Tax" },
        { label: "Proposition 2½" },
      ]}
    >
      <h1>Proposition 2&frac12; and Municipal Assessment</h1>

      <p>
        Massachusetts has no county assessors and no state assessment
        roll: each of its <strong>351 cities and towns</strong> values its
        own property through an elected or appointed{" "}
        <strong>board of assessors</strong>. What the state contributes is
        supervision — the <strong>Department of Revenue&rsquo;s Bureau of
        Local Assessment</strong> certifies each municipality&rsquo;s
        values on a <strong>three-year cycle</strong> — and the
        constitutionally rooted levy limit of{" "}
        <strong>Proposition 2&frac12;</strong>.
      </p>

      <h2>Proposition 2½ limits the levy, not the value</h2>
      <p>
        Proposition 2&frac12; (adopted 1980) caps what a municipality may
        <em> raise</em>, in two parts: a ceiling on the total property tax
        levy, and a cap on year-over-year levy growth (with voter
        overrides available). It places <strong>no limit on any individual
        property&rsquo;s assessed value</strong> — a home&rsquo;s assessment
        can rise by any percentage lawfully, and the levy limit constrains
        the municipality&rsquo;s budget side instead.
      </p>
      <p>
        <strong>What this tells you:</strong> Massachusetts belongs in the
        same group as Ohio and North Carolina on this site — states with
        no percentage cap on a value, where the honest question is
        &ldquo;does this value reflect market value as of the assessment
        date?&rdquo; rather than &ldquo;is my increase over a cap?&rdquo;.
        The owner&rsquo;s protection is the{" "}
        <Link href="/massachusetts-property-tax/abatement-process/">
          abatement process
        </Link>
        , not a limitation amendment.
      </p>

      <h2>Value and rate in the same hands</h2>
      <p>
        Unlike Texas (appraisal district values, taxing units set rates)
        or Florida (appraiser values, millage hearings), a Massachusetts
        municipality does <em>both</em>: the board of assessors values the
        parcels and sets the rate within the levy limit. That makes the
        abatement argument unusually direct — the body that heard your
        case is the body that both valued your property and set the rate
        that taxed it.
      </p>

      <h2>The three-year certification cycle</h2>
      <p>
        The Bureau of Local Assessment certifies each
        municipality&rsquo;s values once every <strong>three
        years</strong> — a full revaluation review that checks whether
        assessed values still track the market. A town freshly certified
        has just been through that scrutiny; a town three years past it
        is working from re-certified figures with the market drifting
        around them.
      </p>
      <p>
        <strong>What this tells you:</strong> like the odd-year cycle in
        Colorado or the eight-year ceiling in North Carolina, the
        certification calendar shapes what a year-over-year comparison
        means. In a certification year, big value moves are the system
        working; mid-cycle, they are worth a second look.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up round numbers — not your
          municipality.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> a town whose levy limit allows $60
          million; assessed values across town rose 8% in a certification
          year; your home&rsquo;s assessment rose from $500,000 to
          $540,000.
        </li>
        <li>
          <strong>Step — the rate:</strong> because the levy is capped,
          the tax rate falls as values rise — the same $60 million spread
          over a bigger base. Your bill may barely move despite the 8%
          assessment jump.
        </li>
        <li>
          <strong>Step — the argument:</strong> a protest that your
          $540,000 exceeds market value is the only value-side lever —
          complaining that your assessment rose 8% proves nothing by
          itself, because the levy limit already neutralizes much of it.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        The classification system (residential, open space, commercial
        rates), the override and debt-exclusion mechanisms, and
        water/sewer betterments are outside this page. The Bureau of
        Local Assessment source cited below is the authority for the
        certification cycle.
      </p>

      <SourceList sourceIds={["ma-dor-bla", "ma-cis-abatement"]} />
    </PageShell>
  );
}

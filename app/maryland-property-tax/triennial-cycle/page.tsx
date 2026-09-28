import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/maryland-property-tax/triennial-cycle/",
  title: "The Maryland Triennial Cycle and the Three-Year Phase-In",
  description:
    "How Maryland reassesses one-third of each county every year, why increases are phased in over three years, and what the phase-in does and does not change about your bill.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Maryland",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/maryland-property-tax/", label: "Maryland Property Tax" },
        { label: "Triennial Cycle" },
      ]}
    >
      <h1>The Maryland Triennial Cycle and the Three-Year Phase-In</h1>

      <p>
        Every state on this site reassesses on a cycle. Maryland&rsquo;s is
        unusual in two ways: the cycle is run <strong>from the state, not the
        county</strong>, and an increase it produces does not reach your
        taxable assessment all at once — it is <strong>phased in over three
        years</strong> by statute.
      </p>

      <h2>One-third of the county, every year</h2>
      <p>
        Since 1980, Maryland has divided each county (and Baltimore City) into
        <strong> three reassessment regions</strong>. SDAT reviews one region
        per year, so every property is revalued once every three years. The
        review is a full appraisal: SDAT&rsquo;s assessors consider recent
        sales, property characteristics, and neighborhood trends, and they
        value the property at <strong>100% of market value</strong> — the
        standard every Maryland assessment has used since 2001.
      </p>
      <p>
        This is different from the "market arrives in a rush" pattern of a
        six- or eight-year revaluation state like Ohio or North Carolina. In
        Maryland, no property goes more than three years without a review —
        but each individual review sees three years of market movement at
        once, which is precisely why the phase-in exists.
      </p>

      <h2>The phase-in: a $30,000 example, straight from the state</h2>
      <p>
        The Maryland State Archives&rsquo; official description of SDAT uses
        its own worked example, and it is worth reproducing because it is the
        arithmetic owners most often misread:
      </p>
      <ol>
        <li>
          <strong>Old value:</strong> $200,000 (the phased-in value currently
          on the books).
        </li>
        <li>
          <strong>New value:</strong> $230,000 — a $30,000 increase found by
          the triennial review.
        </li>
        <li>
          <strong>Year 1:</strong> taxable assessment becomes $210,000 — the
          old value plus one-third of the increase.
        </li>
        <li>
          <strong>Year 2:</strong> $220,000. <strong>Year 3:</strong>{" "}
          $230,000 — the full new value.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> if your notice shows a
        substantially higher value than your current assessment, your next
        bill reflects only about a third of the change. An owner who sees
        "$230,000" on the notice and sells the house expecting the tax to
        jump the full amount has misread the mechanism — the jump arrives in
        three steps.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the phase-in applies to{" "}
        <em>increases</em> only. A <strong>decrease takes full effect
        immediately</strong>. And the phase-in is on the taxable assessment,
        not the market value — SDAT&rsquo;s records show the full new value
        from the first year.
      </p>

      <h2>How the phase-in interacts with the 10% cap</h2>
      <p>
        The phase-in and the{" "}
        <Link href="/maryland-property-tax/homestead-cap/">
          homestead credit
        </Link>{" "}
        are two separate limits, and they stack:
      </p>
      <ul>
        <li>
          The <strong>phase-in</strong> limits how much of a reassessment
          increase <em>enters</em> the taxable assessment each year (one
          third).
        </li>
        <li>
          The <strong>10% homestead cap</strong> then limits how much the
          taxable assessment may <em>rise from last year&rsquo;s taxable
          assessment</em> — regardless of where the increase came from.
        </li>
      </ul>
      <p>
        In most years the phase-in already holds the increase to about a
        third of the market change, so the cap does little. But in a hot
        market — a region where values jumped 25% — the phased-in one-third
        (~8.3%) still leaves room for the cap to bind on some properties. The
        two mechanisms together are why a Maryland bill often moves far less
        than the market did.
      </p>

      <h2>The two non-reassessment years are not dead years</h2>
      <p>
        In the two years after your region&rsquo;s review, no new assessment
        notice arrives — but your right to challenge the value does not
        pause. Maryland allows a <strong>petition for review</strong> in any
        of those years, filed with the Supervisor of Assessments within three
        years of the last final notice. If you believe the value set at your
        last review no longer reflects the market — a fire, a demolition, a
        market turn — the petition is the mechanism, and it is heard at the
        same first level as a regular appeal. See the{" "}
        <Link href="/maryland-property-tax/appeal-ladder/">
          appeal ladder
        </Link>{" "}
        for the deadlines.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The internal scheduling SDAT uses to sequence the three regions
        within each county, and any county&rsquo;s specific reassessment
        calendar, are published by SDAT and your local office — not restated
        here. The values on your own Notice of Assessment control for your
        property.
      </p>

      <SourceList
        sourceIds={["md-archives-sdat-functions", "md-tax-court-procedures"]}
      />
    </PageShell>
  );
}

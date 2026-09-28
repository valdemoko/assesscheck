import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/washington-property-tax/levy-limit/",
  title: "The Washington Levy Limit: 101% of the Highest Lawful Levy",
  description:
    "How Washington's levy limit works: the 101%/1% growth bound on each taxing district's dollars, the IPD alternative for larger districts, levy lid lifts, and why your bill can rise while your assessment falls.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Washington",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/washington-property-tax/", label: "Washington Property Tax" },
        { label: "Levy Limit" },
      ]}
    >
      <h1>The Washington Levy Limit: 101% of the Highest Lawful Levy</h1>

      <p>
        Every other limit described on this site bounds a <em>value</em>.
        Washington&rsquo;s bounds <em>money</em>: each taxing district&rsquo;s
        regular levy — the dollars it collects — may grow to at most{" "}
        <strong>101% of its highest lawful levy since 1985</strong>. The
        Department of Revenue&rsquo;s own levy manual states the machinery,
        and it is worth understanding before drawing any conclusion from a
        rising bill.
      </p>

      <h2>The two limit factors, by district size</h2>
      <ul>
        <li>
          <strong>Districts under 10,000 population:</strong> the levy may
          grow by 1% — a limit factor of 101% — but only if a majority of the
          district&rsquo;s governing board adopts a resolution each year.
        </li>
        <li>
          <strong>Districts of 10,000 or more:</strong> the levy may grow by
          100% plus the <strong>Implicit Price Deflator (IPD)</strong> or
          101%, <strong>whichever is less</strong> — also by annual
          resolution. A second, supermajority &ldquo;substantial need&rdquo;
          resolution can lift the factor to the 101% maximum.
        </li>
      </ul>
      <p>
        Two outer bounds sit on top: the <strong>constitutional 1%
        aggregate</strong> limit (Article VII), and the statutory maximum
        levy <em>rates</em> each district type carries. And the whole limit
        is beatable by voters: a <strong>levy lid lift</strong> is the
        ballot-measure mechanism that lets a district exceed its limit.
      </p>

      <h2>Why your bill can rise while your assessment falls</h2>
      <p>
        This is the single most misunderstood dynamic in Washington property
        tax, and it follows directly from the levy structure:
      </p>
      <ol>
        <li>
          <strong>The district sets its levy</strong> — up to its limit —
          based on its budget, not on any individual parcel.
        </li>
        <li>
          <strong>Your share</strong> of that levy is your assessed value
          divided by the district&rsquo;s total assessed value.
        </li>
        <li>
          <strong>If total values fall</strong> (a market downturn) but the
          district still levies its full limit, every owner&rsquo;s{" "}
          <em>rate</em> rises to raise the same dollars — so a falling
          assessment can still come with a rising bill.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a successful assessment appeal
        lowers <em>your share</em> of the levy — and that is real money — but
        it does not touch the levy itself. If your bill rose because levies
        grew, the value appeal answers only part of the question.
      </p>
      <p>
        <strong>What it does not tell you:</strong> which of your taxing
        districts (county, city, school, fire, port…) actually grew its levy
        this year, and by how much — that is published by your county
        assessor with the rate detail on your bill.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up round numbers for a single
          district — not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> a school district levied $10,000,000 last
          year; it is a large district and the IPD is low, so this year&rsquo;s
          limit is $10,300,000 (3%). Total assessed value in the district
          fell 2%.
        </li>
        <li>
          <strong>Step — the levy:</strong> the board resolves to levy the
          full $10,300,000.
        </li>
        <li>
          <strong>Step — your share:</strong> your assessment fell 2% with the
          market ($500,000 → $490,000), but total value fell the same 2%, so
          your <em>share</em> is unchanged — and your bill rises the full 3%
          the levy grew.
        </li>
        <li>
          <strong>Step — the appeal:</strong> proving your $490,000 should be
          $460,000 lowers your share by about 6% of what you pay this
          district — the only lever the appeal controls.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        Voted (bond and excess) levies, emergency levies, and the
        district-by-district statutory maximum rates are outside this page;
        the DOR&rsquo;s levy manual cited below is the authority for the
        limit factors and the resolution requirements.
      </p>

      <SourceList sourceIds={["wa-dor-levy-limit"]} />
    </PageShell>
  );
}

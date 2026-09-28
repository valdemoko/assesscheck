import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/new-jersey-property-tax/chapter-123/",
  title: "The New Jersey Chapter 123 Test and the Common Level Range",
  description:
    "How New Jersey's Chapter 123 works: the average ratio certified for each district, the ±15% common level range, and why an assessment outside the band gets adjusted automatically while an inside-band assessment needs a market case.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New Jersey",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/new-jersey-property-tax/", label: "New Jersey Property Tax" },
        { label: "Chapter 123" },
      ]}
    >
      <h1>The Chapter 123 Test and the Common Level Range</h1>

      <p>
        Most New Jersey assessments are not 100% of market value — they sit
        at a fraction of it, and the fraction varies by district and drifts
        between revaluations. <strong>Chapter 123</strong> is the statute
        that turns that drift into an owner&rsquo;s protection: each year the
        Division of Taxation certifies an <strong>average assessment
        ratio</strong> for every taxing district, and the{" "}
        <strong>common level range is that ratio plus or minus 15%</strong>.
        The Division&rsquo;s own appeals page states the rule: to prove an
        assessment excessive or discriminatory, a taxpayer shows it does not
        fairly represent the True Market Value Standard{" "}
        <em>or</em> the Common Level Range Standard.
      </p>

      <h2>The two standards, and what each one asks</h2>
      <ul>
        <li>
          <strong>True Market Value Standard:</strong> the conventional
          argument — your assessment, divided by the district&rsquo;s
          average ratio, implies a market value above what the property is
          really worth. You prove it with market evidence: comparable
          sales, an appraisal.
        </li>
        <li>
          <strong>Common Level Range Standard:</strong> the Chapter 123
          argument — your assessment is outside the ±15% band around the
          average ratio, which makes it presumptively excessive or
          discriminatory <em>regardless of market value</em>. The remedy is
          automatic: the assessment is adjusted into the range.
        </li>
      </ul>
      <p>
        This is a different shape of argument from anything else on this
        site. In Texas or Florida you prove a value; in New Jersey, under
        Chapter 123, you can win by showing the <em>ratio arithmetic</em>{" "}
        puts your assessment outside the band — no opinion of your
        property&rsquo;s market value required.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up round numbers — your
          district&rsquo;s certified ratio and your own assessment control.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> your district&rsquo;s certified average
          ratio is 35%; your assessment is $180,000; your home would sell
          for about $440,000.
        </li>
        <li>
          <strong>Step — the band:</strong> the common level range is 35% ×
          0.85 = <strong>29.75%</strong> to 35% × 1.15 ={" "}
          <strong>40.25%</strong>.
        </li>
        <li>
          <strong>Step — your ratio:</strong> $180,000 ÷ $440,000 = 40.9% —
          <em>above</em> the 40.25% top of the band.
        </li>
        <li>
          <strong>Step — the remedy:</strong> outside the band, the
          assessment is presumptively discriminatory and gets adjusted down
          into the range — to at most 40.25% of market, about $177,000 here,
          with the hearing evidence fixing the final figure.
        </li>
        <li>
          <strong>Contrast — an inside-band case:</strong> if your assessment
          were $160,000 (36.4%), Chapter 123 would do nothing — inside the
          band, the only winning argument is market evidence that the value
          itself is wrong.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> before collecting a single
        comparable sale, compute your ratio: assessment ÷ your estimate of
        market value, compared with the district&rsquo;s certified average.
        In a district with an old revaluation and falling values, many
        assessments sit above the band — and those are the cases Chapter 123
        was designed to catch without any appraisal.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the certified ratio moves
        every year (it is recalculated from the district&rsquo;s sales), and
        the band is a presumption, not a conclusion — the board or court can
        still weigh the evidence. Treat the arithmetic as the first screen,
        not the whole case.
      </p>

      <h2>Where the ratios are published</h2>
      <p>
        The Division of Taxation publishes the certified average ratio for
        every taxing district annually — the same table the county boards
        and the Tax Court apply. Your own assessment is on your assessment
        notice and your tax bill; your market-value estimate is yours to
        support.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The statistical methodology behind the certified ratios, and the
        case law that shapes how the presumption is applied, are outside
        this page. The Division&rsquo;s appeals page cited below states the
        band and the two standards.
      </p>

      <SourceList sourceIds={["nj-dor-lpt-appeal"]} />
    </PageShell>
  );
}

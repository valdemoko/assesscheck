import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/trim-notice/",
  title: "The Florida TRIM Notice Explained",
  description:
    "What the Notice of Proposed Property Taxes (TRIM notice) contains, what each figure means, what you can and cannot conclude from reading it, and the filing date it shows.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Florida",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "TRIM Notice" },
      ]}
    >
      <h1>The Florida TRIM Notice Explained</h1>

      <p>
        Florida's annual notice is formally the{" "}
        <strong>Notice of Proposed Property Taxes</strong>, usually called the{" "}
        <strong>TRIM notice</strong> (Truth in Millage). Unlike Texas's notice
        of appraised value, its form is standardized statewide by statute. Two
        things people commonly get wrong about it:
      </p>
      <ul>
        <li>
          <strong>It is not a bill.</strong> The form itself says "DO NOT
          PAY — THIS IS NOT A BILL."
        </li>
        <li>
          <strong>Most of it is about proposed budgets, not your value.</strong>{" "}
          The first page is a table of taxing authorities and what your taxes
          would be under last year's rate, the rolled-back rate, and the
          proposed rate.
        </li>
      </ul>

      <h2>What is on it</h2>
      <ul>
        <li>
          <strong>Page 1:</strong> for each taxing authority — your taxes last
          year, last year's adjusted (rolled-back) rate, your taxes this year
          if no budget change is adopted, the proposed rate, your taxes if the
          proposed budget is adopted, and the date/time/location of that
          authority's public hearing.
        </li>
        <li>
          <strong>Page 2 (the value page):</strong> the parcel's{" "}
          <strong>market value</strong> and, for each taxing authority, the{" "}
          <strong>assessed value</strong>, <strong>value of exemptions</strong>,
          and <strong>taxable value</strong> for both the previous and the
          current year, plus each assessment reduction and exemption that
          applies.
        </li>
        <li>
          <strong>The petition date:</strong> the notice states that if the
          property appraiser cannot resolve your market-value concern, you may
          file a petition with the Value Adjustment Board, and the form shows{" "}
          <strong>the date petitions must be filed on or before</strong>. That
          printed date is your deadline for that year.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative reading of a value page with made-up numbers — not a
          valuation and not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs from the notice:</strong> market value $410,000;
          assessed value $341,000; exemptions $50,000; taxable value $291,000;
          prior-year assessed value $330,000.
        </li>
        <li>
          <strong>Step — chain check:</strong> assessed ($341,000) is below
          just/market ($410,000), consistent with a Save Our Homes limitation
          at work. Taxable ($291,000) equals assessed minus the exemptions
          listed. The chain adds up.
        </li>
        <li>
          <strong>Step — year-over-year:</strong> assessed rose $330,000 →
          $341,000, about +3.3%.
        </li>
        <li>
          <strong>Interpretation:</strong> slightly above 3% — but the actual
          limit is the lower of 3% or the year's CPI change, so +3.3% may be
          entirely proper. This is a question for the property appraiser, not
          a conclusion.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> reading the notice carefully can
        confirm the value chain is internally consistent and show you the
        exact exemptions applied — useful context before contacting anyone.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the market value
        is correct (that needs market evidence), whether the cap was computed
        right (that needs the year's CPI and your assessment history), or what
        your final bill will be (budgets change at the hearings listed on
        page 1).
      </p>

      <h2>What to do after reading it</h2>
      <ul>
        <li>
          Questions about market value, classification, or exemptions: contact
          the property appraiser first — the notice says so, and informal
          resolution is part of the statutory process.
        </li>
        <li>
          If that does not resolve it and you are within the printed window:{" "}
          <Link href="/florida-property-tax/vab-petition/">
            file a VAB petition
          </Link>
          .
        </li>
      </ul>

      <SourceList sourceIds={["fl-stat-200-069", "fl-stat-194-011"]} />
    </PageShell>
  );
}

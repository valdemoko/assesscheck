import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/vab-evidence/",
  title: "Evidence for a Florida VAB Petition",
  description:
    "What evidence can support a VAB petition — market evidence, property record corrections, condition documentation — what each can and cannot show, and the statutory evidence-exchange rules.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Florida",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "VAB Evidence" },
      ]}
    >
      <h1>Evidence for a Florida VAB Petition</h1>

      <p>
        A VAB petition is only as good as the evidence behind it. This page
        organizes the main evidence types by what you are trying to show —
        and what each one, by itself, does <em>not</em> show.
      </p>

      <h2>Three different jobs for evidence</h2>
      <ul>
        <li>
          <strong>Screening:</strong> deciding whether the assessment is worth
          questioning at all (done privately, before filing).
        </li>
        <li>
          <strong>Appraisal:</strong> determining what the property is worth
          (a professional valuation — the VAB process is not an appraisal).
        </li>
        <li>
          <strong>VAB evidence:</strong> documentation that meets the
          statutory exchange rules and that the special magistrate or board
          will actually weigh.
        </li>
      </ul>
      <p>
        Evidence that helps you screen may not be admissible or persuasive at
        a hearing, and vice versa. Keep the jobs separate.
      </p>

      <h2>Market-value evidence</h2>
      <ul>
        <li>
          <strong>Comparable sales</strong> — what similar properties sold
          for, from public records or your own research. What it can show:
          what the market was doing around your property. What it does not
          show: that any specific number is your property's just value;
          properties are not comparable merely because they are nearby. Florida
          law lists the factors behind just valuation — including location,
          size, condition, and net sale proceeds — which are the same factors
          that make a comparison meaningful or meaningless.
        </li>
        <li>
          <strong>A professional appraisal</strong> — an independent opinion
          of value as of the assessment date. What it can show: a qualified
          opinion. What it does not show: it is still evidence the board
          weighs, not a binding determination.
        </li>
      </ul>

      <h2>Property-record and condition evidence</h2>
      <ul>
        <li>
          <strong>Your property record card</strong> — the property appraiser
          must give it to you when your petition is received (unless it is
          available online). Check the characteristics: living area, year
          built, condition codes. A factual error here is the clearest kind
          of problem to raise.
        </li>
        <li>
          <strong>Photographs and repair documentation</strong> — dated
          photos, contractor estimates, receipts. What they can show:
          condition relative to the January 1 assessment date. What they do
          not show: a fixed dollar reduction — the review body weighs them
          with everything else.
        </li>
      </ul>

      <h2>The exchange rules change how you prepare</h2>
      <p>
        Florida's process is document-driven in a way Texas's is not: at
        least 15 days before the hearing you must deliver your evidence list
        and copies to the property appraiser, and you cannot later present
        evidence you withheld from a written request. Practically:{" "}
        <strong>decide your evidence before the exchange deadline</strong> —
        not at the hearing.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up numbers — not a valuation and not
          a prediction of any outcome.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> your notice shows market value $450,000.
          You find two genuinely similar recent sales nearby at $405,000 and
          $420,000, and your record card shows 2,400 sq ft while your plans
          show 2,150 sq ft.
        </li>
        <li>
          <strong>Reasoning:</strong> the sales suggest the market near your
          property supported values in the low $400,000s around the relevant
          period; the area discrepancy is a checkable fact.
        </li>
        <li>
          <strong>Screening conclusion:</strong> there is a fact worth raising
          (the area) and a market question worth asking (the sales).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> factual record issues and
        market context are different arguments, and both start with documents
        you can obtain yourself.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the sales are
        truly comparable (adjustments matter), whether the area record is
        actually wrong (verify with the appraiser's measurement method), or
        what the VAB will decide.
      </p>

      <h2>Next steps</h2>
      <ul>
        <li>
          Understand the timing in{" "}
          <Link href="/florida-property-tax/vab-petition/">
            filing a VAB petition
          </Link>
          .
        </li>
        <li>
          Read the <Link href="/florida-property-tax/trim-notice/">TRIM notice</Link>{" "}
          page to find the figures these documents should match.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "fl-stat-193-011",
          "fl-stat-194-011",
          "fl-stat-194-032",
          "fl-stat-194-034",
        ]}
      />
    </PageShell>
  );
}

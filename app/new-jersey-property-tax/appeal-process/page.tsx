import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/new-jersey-property-tax/appeal-process/",
  title: "The New Jersey Appeal Process and the April 1 Deadline",
  description:
    "How the New Jersey property tax appeal works: Form A-1 filed and received by April 1 with the County Board of Taxation, the May 1 revaluation and January 15 alternative-calendar variants, the burden of proof, and the 45-day Tax Court window.",
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
        { label: "Appeal Process" },
      ]}
    >
      <h1>The Appeal Process and the April 1 Deadline</h1>

      <p>
        New Jersey&rsquo;s appeal deadline is the strictest kind on this
        site: the petition must be <strong>filed and received by April
        1</strong> — the Division of Taxation&rsquo;s own page states
        &ldquo;filed and received,&rdquo; so a petition mailed on March 31
        and arriving April 2 is late. Two statewide variations and one
        direct route modify the rule, and each is stated on the same
        official page.
      </p>

      <h2>The filing, and its variants</h2>
      <ul>
        <li>
          <strong>The form:</strong> Form A-1 (Petition of Appeal) with the
          Form A-1 Comp. Sale attachment — the comparable-sales schedule
          that comes with the petition, filed with the{" "}
          <strong>County Board of Taxation</strong> for the county where the
          property sits.
        </li>
        <li>
          <strong>April 1:</strong> the standard deadline, for the October 1
          Grand List of the prior year.
        </li>
        <li>
          <strong>May 1:</strong> where the municipality undertook a{" "}
          <strong>revaluation or reassessment</strong> — a month longer to
          react to a whole-town change in values.
        </li>
        <li>
          <strong>January 15:</strong> in{" "}
          <strong>Burlington, Gloucester and Monmouth Counties</strong>,
          which follow an alternative assessment calendar (their hearings
          run correspondingly earlier).
        </li>
        <li>
          <strong>Direct to the Tax Court:</strong> where the assessment
          exceeds <strong>$1,000,000</strong>, the petition may be filed
          directly with the Tax Court of New Jersey instead of the county
          board.
        </li>
      </ul>

      <h2>The burden of proof</h2>
      <p>
        The taxpayer appealing carries the burden: you must prove the
        assessment does not fairly represent the{" "}
        <strong>True Market Value Standard</strong> or the{" "}
        <strong>Common Level Range Standard</strong> — the{" "}
        <Link href="/new-jersey-property-tax/chapter-123/">
          Chapter 123 band
        </Link>{" "}
        being the second route. In practice, a complete petition pairs the
        Comp. Sale schedule (comparable sales) with a ratio computation
        against the certified average — either can win, and together they
        cover both standards.
      </p>

      <h2>Added and omitted assessments</h2>
      <p>
        Improvements made after October 1 — or property the assessor missed —
        enter the roll later as an <strong>added or omitted
        assessment</strong>, with its own appeal form (Form AA-1) and its own
        later deadline, <strong>typically December 1</strong>. One caveat
        this site records honestly: no official page readable in preparing
        that date states it — it is corroborated by county and assessor
        sources — so confirm the current-year deadline with your county
        board. Where the added/omitted aggregate exceeds{" "}
        <strong>$750,000</strong>, the appeal may go directly to the Tax
        Court.
      </p>

      <h2>After the county board: 45 days to the Tax Court</h2>
      <p>
        A County Board of Taxation judgment can be appealed to the{" "}
        <strong>Tax Court of New Jersey within 45 days</strong> of the
        judgment&rsquo;s date. From there, review is judicial — the
        Appellate Division and, in vetted cases, the Supreme Court. The
        county-board level is where most residential cases end, which makes
        the April 1 filing the decision that matters most.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up figures — your county&rsquo;s
          calendar and your own notice control.
        </em>
      </p>
      <ol>
        <li>
          <strong>October 1, 2025:</strong> the valuation date for tax year
          2026; your assessment is set.
        </li>
        <li>
          <strong>February 2026:</strong> assessment notices / postcards
          confirm the assessment; you compute your ratio —{" "}
          <Link href="/new-jersey-property-tax/chapter-123/">
            Chapter 123 screen
          </Link>{" "}
          — and it sits above the band.
        </li>
        <li>
          <strong>By March 15, 2026:</strong> comparable sales gathered for
          the A-1 Comp. Sale schedule; petition completed.
        </li>
        <li>
          <strong>March 25, 2026:</strong> filed — <em>received</em> by the
          county board, well inside April 1.
        </li>
        <li>
          <strong>May–July 2026:</strong> county board hearing; judgment
          issued June 30 reducing the assessment into the range.
        </li>
        <li>
          <strong>By August 14, 2026:</strong> the 45-day Tax Court window
          closes — unused, because the judgment sufficed.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the entire New Jersey appeal
        year compresses into the first half of the calendar — file by April,
        hear by summer, and the 45-day window closes in August. Everything
        else (the bill, the payment) arrives after the appeal window is
        already shut.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        County board hearing procedures (each board publishes its own
        rules), farmland assessment appeals, and Tax Court practice are
        outside this page. The Division&rsquo;s Assessment and Appeals page
        cited below is the authority for the deadlines and thresholds.
      </p>

      <SourceList sourceIds={["nj-dor-lpt-appeal"]} />
    </PageShell>
  );
}

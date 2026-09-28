import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/virginia-property-tax/board-and-court/",
  title: "The Virginia Board of Equalization and the Circuit Court",
  description:
    "Virginia's appeal ladder: the 15-day notice of an increased assessment, the locality-set BOE deadline with its 30-day floor and postmark rule, and the de novo circuit court appeal with its latest-of-three window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Virginia",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/virginia-property-tax/", label: "Virginia Property Tax" },
        { label: "Board and Court" },
      ]}
    >
      <h1>The Board of Equalization and the Circuit Court</h1>

      <p>
        Virginia&rsquo;s appeal ladder has two administrative-shaped steps
        and one judicial one — and its signature feature is at the very
        top: the <strong>circuit court appeal is an original proceeding
        heard de novo</strong>, with a filing window that is the{" "}
        <strong>latest of three</strong> statutory limits. The sections
        below follow the Code of Virginia, which this site read directly
        on the official law portal — the strongest provenance of any
        state here.
      </p>

      <h2>The notice that starts everything (§ 58.1-3330)</h2>
      <p>
        Where a real estate assessment has been <strong>increased</strong>,
        the local board must give the owner notice of the change and an
        opportunity to be heard. The notice must state the{" "}
        <strong>new assessment and show the two preceding years&rsquo;
        assessments</strong>, and it must reach the owner{" "}
        <strong>at least 15 days before the hearing</strong>. The
        two-year comparison printed on the notice is what makes a
        year-over-year look at the figures legitimate here — the statute
        puts it there deliberately.
      </p>

      <h2>The board of equalization (§ 58.1-3377, § 58.1-3378)</h2>
      <p>
        The application to the locality&rsquo;s{" "}
        <strong>board of equalization (BOE)</strong> — a citizen board
        the circuit court appoints — runs on a deadline the{" "}
        <strong>locality sets by ordinance</strong>, with one statutory
        constraint: the ordinance cannot set the deadline{" "}
        <strong>earlier than 30 days after</strong> the § 58.1-3330
        notice hearing. There is <strong>no single statewide
        date</strong> — read your locality&rsquo;s ordinance or your
        notice. One relief valve: an application is{" "}
        <strong>deemed timely if the postmark falls within the
        period</strong>.
      </p>
      <p>
        <strong>What this tells you:</strong> Virginia is the state where
        &ldquo;when is my deadline?&rdquo; has the least uniform answer.
        The 15-day notice and the 30-day floor are statewide; the actual
        date is local. The notice itself — which you are entitled to —
        is the document that carries your dates.
      </p>

      <h2>The circuit court — de novo, latest of three (§ 58.1-3984)</h2>
      <p>
        An assessment appeal to the <strong>circuit court</strong> is an{" "}
        <strong>original proceeding</strong>: the court tries the value
        fresh, on the evidence, without deferring to the BOE&rsquo;s
        result. The window is the <strong>latest of</strong>:
      </p>
      <ul>
        <li>
          <strong>three years</strong> from the last day of the tax
          year;
        </li>
        <li>
          <strong>one year</strong> from the first notice of assessment{" "}
          <em>actually received</em> by the taxpayer;
        </li>
        <li>
          <strong>one year</strong> from the final determination of a BOE
          application (if one was filed).
        </li>
      </ul>
      <p>
        And the route is <strong>open whether or not an administrative
        appeal was ever filed</strong> — a Virginia owner can skip the
        BOE entirely and go straight to the court within the limits.
        The assessment&rsquo;s{" "}
        <Link href="/virginia-property-tax/assessment-standards/">
          presumption of correctness
        </Link>{" "}
        (§ 58.1-3379) carries into the courtroom, with the burden on
        the taxpayer.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up dates — your
          locality&rsquo;s ordinance and notice control.
        </em>
      </p>
      <ol>
        <li>
          <strong>October 15, 2026:</strong> notice of the increased
          assessment arrives, showing $560,000 with two prior years — 15+
          days before the November 4 hearing.
        </li>
        <li>
          <strong>November 4, 2026:</strong> the § 58.1-3330 hearing;
          the BOE&rsquo;s ordinance deadline (say, December 15) now
          runs.
        </li>
        <li>
          <strong>December 12, 2026:</strong> BOE application
          postmarked — timely under the postmark rule.
        </li>
        <li>
          <strong>February 2027:</strong> the BOE reduces the value to
          $535,000. The latest-of-three court window keeps running —
          one year from this determination, until February 2028.
        </li>
        <li>
          <strong>2027:</strong> a de novo circuit court trial on the
          evidence — the presumption of correctness against you, your
          appraisal in front of the judge.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the de novo right means
        Virginia appeals are never lost at the administrative level —
        but the court is also where costs and formality begin. The BOE
        step is worth taking precisely because a good result there ends
        the matter at no cost.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The BOE&rsquo;s hearing procedures (each circuit court appoints
        and orients its own board), appeals beyond the circuit court,
        and the localities&rsquo; ordinances are outside this page. The
        Code sections cited above are the authorities for the ladder.
      </p>

      <SourceList
        sourceIds={["va-code-58-1-3330", "va-code-58-1-3378", "va-code-58-1-3984", "va-code-58-1-3379"]}
      />
    </PageShell>
  );
}

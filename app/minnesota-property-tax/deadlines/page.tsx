import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/minnesota-property-tax/deadlines/",
  title: "Minnesota Property Tax Deadlines",
  description:
    "Minnesota's property tax calendar: the January 2 assessment date, the April 1 valuation notice, board meetings in April–June, the April 30 Tax Court deadline of the payable year, and the May 15 / October 15 installments.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Minnesota",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("minnesota");

const TITLES: Record<string, string> = {
  "assessment-date": "The assessment date",
  "protest-filing": "The board meetings",
  "appeal-higher-board": "The Tax Court deadline",
  payment: "The notices and installments",
};

const ID_TITLES: Record<string, string> = {
  "mn-valuation-date": "January 2: the assessment date",
  "mn-board-appeals": "April–June: the board meetings are the deadlines",
  "mn-tax-court-appeal": "April 30 of the payable year: the Tax Court",
  "mn-billing-installments": "The notices and the May 15 / October 15 installments",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/minnesota-property-tax/", label: "Minnesota Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Minnesota Property Tax Deadlines</h1>

      <p>
        Minnesota&rsquo;s calendar runs a full year ahead of its bills: the
        assessment is set <strong>January 2</strong> for taxes{" "}
        <strong>payable the following year</strong>, and the appeal
        structure stretches across that gap — board meetings in the spring
        of the assessment year, and a Tax Court deadline a full year later.
        It is the only state on this site where the deadlines include{" "}
        <em>meetings you attend</em> rather than only documents you file.
      </p>

      {DEADLINES.map((d) => (
        <section
          key={d.deadlineId}
          aria-label={ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}
        >
          <h2>{ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          {d.anchoredTo && (
            <p className="muted-note">
              <strong>Anchor:</strong> {d.anchoredTo} · <strong>Basis:</strong>{" "}
              {d.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
            </p>
          )}
        </section>
      ))}

      <h2>The shape of a full cycle (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for the 2026 assessment (taxes payable
          2027) — your own notice carries your meeting dates.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 2, 2026:</strong> EMV and classification set, from
          the October 2024 – September 2025 sales study.
        </li>
        <li>
          <strong>By April 1, 2026:</strong> the Valuation Notice arrives —
          with your board meeting dates printed on it.
        </li>
        <li>
          <strong>April 1 – May 31, 2026:</strong> the Local Board&rsquo;s
          meeting window (your city&rsquo;s date is on the notice). Where
          your city holds its own LBAE, this meeting is the prerequisite.
        </li>
        <li>
          <strong>June 2026:</strong> the County Board meets — for owners
          continuing past the LBAE and open-book residents alike.
        </li>
        <li>
          <strong>November 2026:</strong> the Truth in Taxation notice
          proposes the 2027 tax.
        </li>
        <li>
          <strong>By March 31, 2027:</strong> the property tax statement
          arrives — the value on it cannot be appealed; the deadlines that
          mattered were last year&rsquo;s.
        </li>
        <li>
          <strong>April 30, 2027:</strong> the Tax Court deadline for the
          2026 assessment — the direct route&rsquo;s last day.
        </li>
        <li>
          <strong>May 15 and October 15, 2027:</strong> the two installments
          (November 15 for agricultural; $100 or less due in full May 15).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> Minnesota&rsquo;s appeal
        opportunities run <em>backwards</em> relative to the bill — the
        earliest deadlines (the spring meetings) are the cheapest and most
        local, and the latest (the Tax Court) is the heaviest. Every door
        before April 30 of the payable year is open, but each one after the
        meetings costs more to walk through.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your city&rsquo;s board
        meeting date (printed only on your notice) and your county&rsquo;s
        June session date — published by each county.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/minnesota-property-tax/assessment-to-payable-lag/">
            The assessment-to-payable lag
          </Link>{" "}
          — why the calendar runs one year ahead.
        </li>
        <li>
          <Link href="/minnesota-property-tax/board-appeals/">
            The board appeals
          </Link>{" "}
          — the meeting-is-the-deadline structure and the LBAE-first rule.
        </li>
        <li>
          <Link href="/minnesota-property-tax/tax-court-appeal/">
            The Tax Court route
          </Link>{" "}
          — the direct petition and its April 30 deadline.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "mn-dor-appealing",
          "mn-dor-understanding",
          "mn-tax-court-home",
          "mn-anoka-appeal",
        ]}
      />
    </PageShell>
  );
}

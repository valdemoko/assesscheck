import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/new-jersey-property-tax/deadlines/",
  title: "New Jersey Property Tax Deadlines",
  description:
    "New Jersey's property tax calendar: the October 1 valuation date, the April 1 appeal deadline with its May 1 and January 15 variants, the Chapter 123 ratio certification, and the 45-day Tax Court window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New Jersey",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("new-jersey");

const TITLES: Record<string, string> = {
  "assessment-date": "The valuation date",
  "protest-filing": "The April 1 petition",
  "relief-application": "The Chapter 123 ratio",
  "appeal-higher-board": "The Tax Court window",
};

const ID_TITLES: Record<string, string> = {
  "nj-annual-assessment": "October 1: the valuation date",
  "nj-april-1-appeal": "April 1: filed and received",
  "nj-chapter-123-range": "The certified average ratio and the ±15% band",
  "nj-tax-court-appeal": "45 days to the Tax Court",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/new-jersey-property-tax/", label: "New Jersey Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>New Jersey Property Tax Deadlines</h1>

      <p>
        New Jersey runs one of the most compressed calendars on this site:
        the value is set the <strong>October 1</strong> before the tax year,
        and the appeal deadline — <strong>April 1, filed and received</strong>{" "}
        — lands just six months later. Everything that follows (hearings,
        judgments, the Tax Court window) happens before most of the year&rsquo;s
        bills are even paid.
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

      <h2>The shape of a year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for tax year 2026 — confirm your
          municipality&rsquo;s status (revaluation or not, which county) each
          year.
        </em>
      </p>
      <ol>
        <li>
          <strong>October 1, 2025:</strong> valuation date — the assessment
          for tax year 2026 is set.
        </li>
        <li>
          <strong>January 15, 2026:</strong> the deadline if you are in
          Burlington, Gloucester, or Monmouth County.
        </li>
        <li>
          <strong>February 2026:</strong> assessment notices confirm the
          number; the{" "}
          <Link href="/new-jersey-property-tax/chapter-123/">
            ratio screen
          </Link>{" "}
          tells you which standard to argue.
        </li>
        <li>
          <strong>April 1, 2026:</strong> Form A-1 filed <em>and received</em>{" "}
          by the county board — or May 1 in a revaluation municipality.
        </li>
        <li>
          <strong>Spring–summer 2026:</strong> county board hearings; the
          certified average ratios are published for the year.
        </li>
        <li>
          <strong>Within 45 days of the judgment:</strong> the Tax Court
          window, if the board&rsquo;s result is not acceptable.
        </li>
        <li>
          <strong>August 2026 (illustrative):</strong> the tax bill arrives —
          computed on the appealed value if the judgment landed first.
        </li>
        <li>
          <strong>December 1, 2026 (typically — confirm with your county
          board):</strong> the added/omitted assessment deadline for
          improvements made after the prior October 1.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the April 1 deadline governs
        the whole year&rsquo;s opportunity. New Jersey has no second window
        for regular appeals — miss April and the next chance is next
        April, for the next tax year.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your
        municipality revalued this year (moving your deadline to May 1) and
        your county board&rsquo;s hearing calendar — both published by the
        county boards and the Division.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/new-jersey-property-tax/chapter-123/">
            The Chapter 123 test
          </Link>{" "}
          — the ±15% band and the two standards.
        </li>
        <li>
          <Link href="/new-jersey-property-tax/appeal-process/">
            The appeal process
          </Link>{" "}
          — Form A-1, the variants, and the Tax Court window.
        </li>
      </ul>

      <SourceList sourceIds={["nj-dor-lpt-appeal"]} />
    </PageShell>
  );
}

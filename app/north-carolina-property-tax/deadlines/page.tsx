import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/north-carolina-property-tax/deadlines/",
  title: "North Carolina Property Tax Deadlines",
  description:
    "North Carolina's property tax calendar: the revaluation cycle, the county informal-review window, the Board of Equalization and Review's convene-and-adjourn formal window, personal property listing in January, and the 30-day PTC appeal.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "North Carolina",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("north-carolina");

const TITLES: Record<string, string> = {
  "assessment-date": "The revaluation date",
  "informal-review": "The informal review",
  "protest-filing": "The formal board window",
  "appeal-higher-board": "The Property Tax Commission",
  rendition: "Personal property listing",
};

const ID_TITLES: Record<string, string> = {
  "nc-revaluation-date": "The revaluation date: the anchor for everything",
  "nc-informal-review": "January – March: the informal review window",
  "nc-boer-formal-appeal": "The formal window that closes when the board adjourns",
  "nc-ptc-appeal": "30 days: the Property Tax Commission",
  "nc-personal-property-listing": "January: personal property listing",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/north-carolina-property-tax/", label: "North Carolina Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>North Carolina Property Tax Deadlines</h1>

      <p>
        North Carolina&rsquo;s deadline structure has one genuinely unusual
        element: the formal appeal window ends <strong>when the county
        board adjourns</strong> — a date the board&rsquo;s own schedule
        produces, not a statute. Everything else follows the familiar
        seasonal shape: an informal window in late winter, board hearings
        in spring, and a 30-day state appeal after each decision.
      </p>

      {DEADLINES.map((d) => (
        <section
          key={d.deadlineId}
          aria-label={ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}
        >
          <h2>{ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          {d.fixedDate && (
            <p className="muted-note">
              <strong>Date:</strong> {d.fixedDate}
            </p>
          )}
          {d.anchoredTo && (
            <p className="muted-note">
              <strong>Anchor:</strong> {d.anchoredTo} · <strong>Basis:</strong>{" "}
              {d.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
            </p>
          )}
        </section>
      ))}

      <h2>The shape of an appeal year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence using Orange County&rsquo;s published 2026
          dates as the example — your county&rsquo;s dates are its own.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 2026:</strong> personal property listed with the
          county (real property needs no listing); informal appeals open
          January 1.
        </li>
        <li>
          <strong>By March 31, 2026:</strong> informal review filed with
          evidence tied to the January 1, 2025 revaluation date.
        </li>
        <li>
          <strong>April 1 – June 30, 2026:</strong> the formal window —
          closing <em>when the board adjourns</em>, so early filing is the
          safe play.
        </li>
        <li>
          <strong>April 30, 2026:</strong> the board convenes (Orange
          County&rsquo;s date; the statute expects roughly the first week
          of April).
        </li>
        <li>
          <strong>May – June 2026:</strong> board hearings; decision
          letters mail as each case is decided.
        </li>
        <li>
          <strong>Within 30 days of the decision letter:</strong> PTC
          appeal filed in Raleigh.
        </li>
        <li>
          <strong>September 1, 2026 (illustrative):</strong> tax bills —
          computed on the value the process fixed.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> two of these dates are{" "}
        <em>not fixed</em> until your county publishes them: the formal
        window&rsquo;s end (adjournment) and the board&rsquo;s convening
        date. The informal window and the 30-day PTC count are the
        constants; the board&rsquo;s calendar is the variable, and it
        controls your last chance to be heard at the county level.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s
        actual dates and its adjournment schedule — published by your
        county tax administration each year.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/north-carolina-property-tax/revaluation-cycle/">
            Revaluation and the valuation date
          </Link>{" "}
          — the eight-year ceiling and the burden of proof.
        </li>
        <li>
          <Link href="/north-carolina-property-tax/appeal-process/">
            The appeal process
          </Link>{" "}
          — informal review, the board, and the Commission.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nc-dor-appeal-process",
          "nc-dor-types-property-taxed",
          "nc-orange-appeal",
          "nc-orange-revaluation",
        ]}
      />
    </PageShell>
  );
}

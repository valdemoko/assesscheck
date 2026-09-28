import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/virginia-property-tax/deadlines/",
  title: "Virginia Property Tax Deadlines",
  description:
    "Virginia's property tax calendar: the annual assessment, the 15-day notice of an increased assessment, the locality-set BOE deadline with its 30-day floor and postmark rule, and the latest-of-three circuit court window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Virginia",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("virginia");

const TITLES: Record<string, string> = {
  "assessment-date": "The annual assessment",
  "notice-delivery": "The notice of change",
  "protest-filing": "The BOE application",
  "appeal-district-court": "The circuit court appeal",
};

const ID_TITLES: Record<string, string> = {
  "va-100-percent-standard": "The 100% standard: no cap, annual assessment",
  "va-notice-of-change": "15 days: the notice showing two prior years",
  "va-boe-application": "The locality's deadline: ordinance, with a 30-day floor",
  "va-circuit-court-appeal": "The latest of three: the circuit court window",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/virginia-property-tax/", label: "Virginia Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Virginia Property Tax Deadlines</h1>

      <p>
        Virginia&rsquo;s deadlines are the most locally variable on this
        site: the statute sets a <strong>15-day notice floor</strong> and
        a <strong>30-day minimum</strong> between the notice hearing and
        the BOE deadline, but the actual dates come from{" "}
        <strong>your locality&rsquo;s ordinance and your own
        notice</strong>. The one long, uniform window is the{" "}
        <strong>circuit court&rsquo;s</strong> — the latest of three
        statutory limits, open even to owners who never filed with the
        board.
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

      <h2>The shape of an appeal year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence with a locality that assesses January 1
          and hears board matters in the fall — your locality&rsquo;s
          ordinance and notice control.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1:</strong> the annual assessment date — 100% of
          fair market value.
        </li>
        <li>
          <strong>Spring – fall:</strong> assessment notices mail; where an
          assessment <em>increased</em>, the § 58.1-3330 notice shows the
          new value and two prior years, at least 15 days before the
          hearing.
        </li>
        <li>
          <strong>The notice hearing:</strong> the event the 30-day BOE
          floor is measured from.
        </li>
        <li>
          <strong>By your locality&rsquo;s ordinance date:</strong> the BOE
          application — postmark suffices if it falls within the period.
        </li>
        <li>
          <strong>The BOE determination:</strong> a one-year court window
          opens from it (or keep the three-year tax-year window in view).
        </li>
        <li>
          <strong>Within the latest-of-three limits:</strong> the de novo
          circuit court appeal — tried fresh, presumption of correctness
          against the taxpayer.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a Virginia deadline check
        has exactly two documents in it —{" "}
        <strong>your locality&rsquo;s ordinance</strong> (for the BOE
        date) and <strong>your notice</strong> (for the hearing date the
        15-day and 30-day rules anchor to). The court window, by
        contrast, is fully statutory and the most forgiving on this
        site.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your
        locality&rsquo;s actual ordinance date and hearing calendar —
        published by your commissioner of the revenue, assessor, or
        circuit court.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/virginia-property-tax/assessment-standards/">
            The 100% standard and the assessing officers
          </Link>{" "}
          — the statute and the presumption.
        </li>
        <li>
          <Link href="/virginia-property-tax/board-and-court/">
            The board and the circuit court
          </Link>{" "}
          — the notice, the BOE, and the de novo trial.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "va-code-58-1-3200",
          "va-code-58-1-3330",
          "va-code-58-1-3378",
          "va-code-58-1-3984",
        ]}
      />
    </PageShell>
  );
}

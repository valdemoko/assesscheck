import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/deadlines/",
  title: "Florida Property Tax Deadlines",
  description:
    "The statutory rules behind Florida's property tax deadlines: VAB petition windows tied to your notice, the March 1 exemption deadline, evidence exchange, the 75% payment rule, and the Nov 1 / Apr 1 tax calendar.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Florida",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited statute. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("florida");

const TITLES: Record<string, string> = {
  "vab-petition-filing": "Filing a VAB petition",
  "exemption-application": "Applying for an exemption",
  "notice-delivery": "Receiving your TRIM notice",
  "vab-hearing-notice": "Hearing scheduling",
  "vab-evidence-exchange": "Evidence exchange",
  "petition-payment": "Payment required to keep a petition alive",
  payment: "Paying your taxes",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Florida Property Tax Deadlines</h1>

      <p>
        Florida's deadlines are mostly <strong>rules anchored to events</strong>{" "}
        — for example, a number of days after your notice was mailed — rather
        than one statewide calendar date. That means the dates that apply to
        you come from <em>your own documents</em>: the mailing date of your
        notice and, above all, the petition filing date printed on your TRIM
        notice.
      </p>

      {DEADLINES.map((d) => (
        <section key={d.deadlineId} aria-label={TITLES[d.deadlineType] ?? d.deadlineType}>
          <h2>{TITLES[d.deadlineType] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          {d.anchoredTo && (
            <p className="muted-note">
              <strong>Anchor:</strong> {d.anchoredTo} · <strong>Basis:</strong>{" "}
              {d.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
            </p>
          )}
        </section>
      ))}

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates only — the dates that control are the ones printed
          on your notice and the mailing date of your own document.
        </em>
      </p>
      <ol>
        <li>
          <strong>Input:</strong> your TRIM notice shows a petition deadline of
          "on or before September 15" (illustrative).
        </li>
        <li>
          <strong>Why it is a date, not a rule:</strong> the statute sets the
          rule (25 days after the notice was mailed), and the notice applies it
          to your parcel for that year.
        </li>
        <li>
          <strong>After filing:</strong> plan around the 15-day pre-hearing
          evidence exchange and the 75% tax payment requirement before
          delinquency.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> your notice is the primary
        deadline document; the statutes behind it are the fallback.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county's exact dates,
        local fee amounts, or extension rules for specific situations — verify
        with your county VAB clerk and property appraiser.
      </p>

      <h2>Where the review process fits</h2>
      <ul>
        <li>
          The full sequence:{" "}
          <Link href="/florida-property-tax/vab-petition/">VAB petition process</Link>
          .
        </li>
        <li>
          What to prepare:{" "}
          <Link href="/florida-property-tax/vab-evidence/">
            evidence for a VAB petition
          </Link>
          .
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "fl-stat-194-011",
          "fl-stat-196-011",
          "fl-stat-194-014",
          "fl-stat-197-333",
          "fl-stat-200-069",
        ]}
      />
    </PageShell>
  );
}

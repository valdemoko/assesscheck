import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/new-york-property-tax/deadlines/",
  title: "New York Property Tax Deadlines",
  description:
    "New York's property tax calendar: the July 1 valuation date, March 1 taxable status date, the May 1 tentative roll, Grievance Day with its published exceptions, the July final roll, the 30-day judicial-review window, and the two bill seasons.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New York",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("new-york");

const TITLES: Record<string, string> = {
  "assessment-date": "The valuation and taxable status dates",
  "notice-delivery": "The tentative roll",
  "protest-filing": "Grievance Day",
  "appeal-district-court": "Judicial review",
  payment: "The two bill seasons",
};

const ID_TITLES: Record<string, string> = {
  "ny-valuation-and-taxable-status": "July 1 valuation · March 1 taxable status",
  "ny-tentative-roll": "May 1: the tentative roll",
  "ny-grievance-day": "Grievance Day: the fourth Tuesday in May — usually",
  "ny-judicial-review": "30 days from the final roll",
  "ny-tax-bills": "September (school) and January (municipal) bills",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/new-york-property-tax/", label: "New York Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>New York Property Tax Deadlines</h1>

      <p>
        New York&rsquo;s calendar is municipal: the statewide dates below
        are the &ldquo;most communities&rdquo; dates the Department of
        Taxation and Finance publishes, and every one of them carries the
        same instruction — <strong>confirm with your assessor</strong>.
        The exceptions are not edge cases: New York City, Nassau,
        Suffolk, Westchester and assessing villages all run on different
        Grievance Days. What does not vary is the <em>sequence</em>:
        valuation date, tentative roll, grievance, final roll, judicial
        window, bills.
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

      <h2>The shape of a year (illustrative, most communities)</h2>
      <p>
        <em>
          Illustrative sequence — your municipality&rsquo;s published
          dates control, and the exceptions above displace the May dates
          entirely.
        </em>
      </p>
      <ol>
        <li>
          <strong>July 1, 2025 (prior year):</strong> the valuation date —
          the date your value is measured as of.
        </li>
        <li>
          <strong>March 1, 2026:</strong> the taxable status date —
          condition, ownership, and exemption applications set as of this
          day.
        </li>
        <li>
          <strong>May 1, 2026:</strong> the tentative roll publishes —
          check your assessment now, before Grievance Day.
        </li>
        <li>
          <strong>Fourth Tuesday in May 2026:</strong> Grievance Day —
          RP-524 filed and <em>received</em> (or a stipulation agreed).
        </li>
        <li>
          <strong>July 1, 2026:</strong> the final roll is filed — BAR
          outcomes are now fixed, and the 30-day judicial window opens.
        </li>
        <li>
          <strong>Within 30 days:</strong> SCAR ($30) or Article 7
          certiorari — for owner-occupied homes or everyone else.
        </li>
        <li>
          <strong>Beginning of September 2026:</strong> school tax bills —
          computed on the roll.
        </li>
        <li>
          <strong>Beginning of January 2027:</strong> municipal and county
          bills — the same assessment, second season.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the New York year is a{" "}
        <em>two-bill</em> year fed by one roll, and the grievance window
        sits in the narrow band between May 1 and the final roll. An
        owner who checks the roll the week it publishes has months of
        preparation; one who waits for the September school bill has
        until next May for anything but certiorari.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your
        municipality&rsquo;s actual dates — the{" "}
        <strong>Municipal Data Portal</strong> and your assessor&rsquo;s
        office publish each community&rsquo;s real calendar.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/new-york-property-tax/roll-and-grievance/">
            The roll, the uniform percentage, and Grievance Day
          </Link>{" "}
          — reading the roll and filing the grievance.
        </li>
        <li>
          <Link href="/new-york-property-tax/judicial-review/">
            Judicial review: SCAR and certiorari
          </Link>{" "}
          — the two court routes and the 30-day window.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "ny-tax-grievance-procedures",
          "ny-tax-property-tax-calendar",
          "ny-tax-equalization-rates",
        ]}
      />
    </PageShell>
  );
}

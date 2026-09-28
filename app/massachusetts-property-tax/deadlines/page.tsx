import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/massachusetts-property-tax/deadlines/",
  title: "Massachusetts Property Tax Deadlines",
  description:
    "Massachusetts's property tax calendar: the fiscal year, quarterly bills and the February 1 abatement deadline, the three-month deemed denial, the three-month Appellate Tax Board window, and the DOR's three-year certification cycle.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Massachusetts",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("massachusetts");

const TITLES: Record<string, string> = {
  "assessment-date": "The certification cycle",
  "protest-filing": "The abatement application",
  decision: "The deemed denial",
  "appeal-higher-board": "The Appellate Tax Board",
};

const ID_TITLES: Record<string, string> = {
  "ma-certification-cycle": "The DOR's three-year certification cycle",
  "ma-abatement-application": "Form 128 by the first actual bill (usually February 1)",
  "ma-deemed-denial": "Three months of silence, then deemed denial",
  "ma-atb-appeal": "Three months to the ATB — paid, if over $5,000",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/massachusetts-property-tax/", label: "Massachusetts Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Massachusetts Property Tax Deadlines</h1>

      <p>
        Massachusetts&rsquo;s calendar is anchored to the{" "}
        <strong>fiscal year</strong> (July 1 – June 30) and its quarterly
        bills — and the entire abatement structure runs on{" "}
        <strong>three three-month counts</strong> layered one on another:
        the assessors&rsquo;s three months to decide, then the owner&rsquo;s
        three months to appeal. The first date, though, is the one that
        eliminates people: <strong>the first actual bill&rsquo;s due
        date, usually February 1</strong>.
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

      <h2>The shape of a fiscal year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for FY2027 with quarterly billing — your
          municipality&rsquo;s billing calendar controls.
        </em>
      </p>
      <ol>
        <li>
          <strong>July 1, 2026:</strong> the fiscal year begins; the first
          two quarterly bills are preliminary estimates.
        </li>
        <li>
          <strong>November 1, 2026 and February 1, 2027 (illustrative):</strong>{" "}
          the second and third quarterly bills — the third being the{" "}
          <em>first actual bill</em>.
        </li>
        <li>
          <strong>By February 1, 2027:</strong> Form 128 filed — and the
          tax paid on time. The deadline cannot be extended by an
          ongoing conversation with the assessors.
        </li>
        <li>
          <strong>By May 1, 2027:</strong> the assessors&rsquo;s three
          months expire — a decision, a written extension, or a{" "}
          <em>deemed denial</em>.
        </li>
        <li>
          <strong>Within three months of the decision (or the deemed
          denial):</strong> the ATB appeal — with the disputed tax paid
          and in the collector&rsquo;s hands if the claim exceeds
          $5,000.
        </li>
        <li>
          <strong>2027 – 2028:</strong> the ATB hears the appeal; its
          decision sets the assessment (and the refund follows).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the Massachusetts sequence
        is short and back-loaded: everything from filing to a final ATB
        decision typically runs well under two years, and the earliest
        deadline — February 1 — is the only one that cannot be recovered
        from. The two three-month counts then run themselves.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your
        municipality&rsquo;s actual billing dates (communities may differ
        in their quarterly schedule and some do not bill quarterly) —
        published by your local collector and assessors.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/massachusetts-property-tax/proposition-2-5/">
            Proposition 2&frac12; and municipal assessment
          </Link>{" "}
          — the levy limit and the certification cycle.
        </li>
        <li>
          <Link href="/massachusetts-property-tax/abatement-process/">
            The abatement process
          </Link>{" "}
          — Form 128, the deemed denial, and the ATB.
        </li>
      </ul>

      <SourceList sourceIds={["ma-cis-abatement", "ma-dor-bla"]} />
    </PageShell>
  );
}

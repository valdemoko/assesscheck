import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/deadlines/",
  title: "California Property Tax Deadlines",
  description:
    "The rules behind California's property tax deadlines: the January 1 lien date, the July 2 to September 15/November 30 appeal window, the payment calendar, the 45-day hearing notice and the 6-month court window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

// Rendered from the deadline registry — every rule below is verified against
// the cited official source. Deadlines that could not be verified are not in
// the registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("california");

const TITLES: Record<string, string> = {
  "ca-lien-date": "The lien date — January 1",
  "ca-appeal-filing-window": "Filing an application for changed assessment",
  "ca-notice-of-assessed-value": "Value notices (why your deadline depends on your county)",
  "ca-hearing-notice": "Hearing scheduling",
  "ca-evidence-exchange": "Exchange of information",
  "ca-payment-installments": "Paying your taxes",
  "ca-pay-during-appeal": "Paying while an appeal is pending",
  "ca-homeowners-exemption": "Exemption claims",
  "ca-judicial-review": "After the board decides",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/california-property-tax/", label: "California Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>California Property Tax Deadlines</h1>

      <p>
        California has one statewide filing rhythm — the window opens{" "}
        <strong>July 2</strong> — and one point of real local variation:{" "}
        <strong>when it closes</strong>. Everything else on this page is a rule
        tied to an event (a notice, a hearing date, a decision), which is why the
        dates that control are the ones your county publishes and the ones printed
        on your own documents.
      </p>

      {DEADLINES.map((d) => (
        <section key={d.deadlineId} aria-label={TITLES[d.deadlineId] ?? d.deadlineType}>
          <h2>{TITLES[d.deadlineId] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          <p className="muted-note">
            {d.fixedDate && (
              <>
                <strong>Stated date:</strong> {d.fixedDate} ·{" "}
              </>
            )}
            {d.anchoredTo && (
              <>
                <strong>Anchor:</strong> {d.anchoredTo} ·{" "}
              </>
            )}
            <strong>Basis:</strong>{" "}
            {d.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
          </p>
        </section>
      ))}

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates only. The dates that control are the ones your
          county publishes and the ones your assessor sends you.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1:</strong> the lien date. Your value is set as of this
          date, including the Proposition 8 comparison between market value and
          your factored base year value.
        </li>
        <li>
          <strong>April 1:</strong> your assessor tells the county whether value
          notices will go out by August 2 — which decides whether your filing
          deadline is the September one or the November/December one.
        </li>
        <li>
          <strong>July 2:</strong> the window opens for everyone. This is also
          when decline-in-value filings can be made.
        </li>
        <li>
          <strong>At least 30 days before your hearing:</strong> the last good
          moment to request an exchange of information with the assessor.
        </li>
        <li>
          <strong>November 1 / February 1:</strong> the two tax installments, due
          whether or not an appeal is pending.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the only date you must look up
        locally is the closing date of the filing window; the rest is either a
        fixed statewide date or a rule anchored to an event you will be told
        about.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s fee
        schedule, its hearing practices, or whether a hearing officer or the full
        board will decide your application.
      </p>

      <h2>Where the process fits</h2>
      <ul>
        <li>
          The full sequence:{" "}
          <Link href="/california-property-tax/assessment-appeal/">
            filing an application for changed assessment
          </Link>
          .
        </li>
        <li>
          What to prepare:{" "}
          <Link href="/california-property-tax/appeal-evidence/">
            evidence for an assessment appeal
          </Link>
          .
        </li>
        <li>
          What the limit actually is:{" "}
          <Link href="/california-property-tax/proposition-13-and-8/">
            Proposition 13 and Proposition 8
          </Link>
          .
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "ca-boe-tax-calendar",
          "ca-cdtfa-important-dates",
          "ca-boe-appeals-faq",
          "ca-yolo-important-dates",
        ]}
      />
    </PageShell>
  );
}

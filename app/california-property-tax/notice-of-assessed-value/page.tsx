import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/notice-of-assessed-value/",
  title: "California's Notice of Assessed Value (and Why You May Not Get One)",
  description:
    "California does not mail a value notice to every owner every year: by April 1 the assessor tells the county whether notices go out by August 2 — and that answer sets the appeal filing deadline.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

const DEADLINES = getDeadlines("california");
const NOTICE_RECORD = DEADLINES.find((d) => d.deadlineId === "ca-notice-of-assessed-value")!;
const FILING_WINDOW = DEADLINES.find((d) => d.deadlineId === "ca-appeal-filing-window")!;

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/california-property-tax/", label: "California Property Tax" },
        { label: "Notice of Assessed Value" },
      ]}
    >
      <h1>California&rsquo;s Notice of Assessed Value</h1>

      <p>
        Texas and Florida both mail an annual value notice to owners on a
        statutory timetable. California does not. The assessor tells the county
        by <strong>April 1</strong> whether notices will be sent to all
        assessees <strong>by August 2</strong> — and that single decision is what
        produces the two different filing deadlines that confuse owners every
        summer.
      </p>

      <h2>The rule, as the state publishes it</h2>
      <p>{NOTICE_RECORD.rule}</p>
      <p className="muted-note">
        <strong>Anchor:</strong> {NOTICE_RECORD.anchoredTo} ·{" "}
        <strong>Basis:</strong>{" "}
        {NOTICE_RECORD.deadlineBasis === "fixed-date"
          ? "fixed date"
          : "rule tied to an event"}
      </p>
      <p>
        In practice this means the two following facts travel together, and both
        are published by the state:
      </p>
      <p>{FILING_WINDOW.rule}</p>

      <h2>What this means for an owner</h2>
      <ul>
        <li>
          <strong>No notice is not the same as no change.</strong> If your
          assessment changed and you did not receive a notice, ask your county
          assessor for your assessed value and your base year value before the
          filing window closes. The state calendar notes that the filing period
          is extended in certain circumstances when a taxpayer does not receive
          timely notice of assessment — but do not rely on that instead of
          checking.
        </li>
        <li>
          <strong>Your county&rsquo;s date is the operative one.</strong> The
          statute&rsquo;s two endpoints (September 15 / November 30) are the
          state rule; your clerk of the board publishes the date that applies to
          your county and your parcel, and that is the one that counts.
        </li>
        <li>
          <strong>The notice is not a bill.</strong> The tax bill is mailed
          separately by the tax collector and arrives in two installments — and
          paying on time is required even if you have appealed.
        </li>
        <li>
          <strong>A notice showing the same value is still information.</strong>{" "}
          In decline-in-value status the assessor reviews the property every
          year, so an unchanged figure means the reduction was reviewed and kept.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates only — the dates that control are the ones your
          county publishes and the ones on your own documents.
        </em>
      </p>
      <ol>
        <li>
          <strong>Scenario A — county sent notices.</strong> Your assessor
          provided value notices to all secured-roll assessees by August 1, so
          the filing window for the regular assessment runs July 2 to September
          15.
        </li>
        <li>
          <strong>Scenario B — county did not.</strong> The value notices were
          not provided by August 1, so the window runs through November 30 (the
          state calendar lists December 1 for 2026 where that applies).
        </li>
        <li>
          <strong>Same property, different date.</strong> Nothing about the
          property changed — only the county&rsquo;s mailing practice. This is
          the single most common source of missed California appeal deadlines.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> confirm three things from your own
        county before you plan anything — your assessed value, your base year
        value, and the clerk of the board&rsquo;s filing deadline.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your value is
        correct, or whether an appeal is worth filing — that turns on the
        evidence rules and on the value itself.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/california-property-tax/assessment-appeal/">
            Filing an application for changed assessment
          </Link>{" "}
          — the process and what the board can decide.
        </li>
        <li>
          <Link href="/california-property-tax/deadlines/">
            California deadlines
          </Link>{" "}
          — the filing window, the payment calendar, and exemption dates.
        </li>
        <li>
          <Link href="/florida-property-tax/trim-notice/">
            Compare: Florida&rsquo;s TRIM notice
          </Link>{" "}
          — a statutorily standardized notice sent to every owner.
        </li>
      </ul>

      <SourceList
        sourceIds={["ca-boe-tax-calendar", "ca-cdtfa-important-dates"]}
      />
    </PageShell>
  );
}

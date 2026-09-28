import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/maryland-property-tax/deadlines/",
  title: "Maryland Property Tax Deadlines",
  description:
    "Maryland's property tax calendar: the triennial assessment cycle, the 45-day Supervisor appeal, the 30-day PTAAB and Tax Court windows, the petition for review, the homestead credit's July 1 test, and the July/August billing season.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Maryland",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("maryland");

const TITLES: Record<string, string> = {
  "assessment-date": "The assessment cycle",
  "notice-delivery": "Your notice of assessment",
  "protest-filing": "The Supervisor appeal",
  "appeal-higher-board": "The higher levels: PTAAB and Tax Court",
  "relief-application": "The homestead credit",
  payment: "Billing and payment",
};

const ID_TITLES: Record<string, string> = {
  "md-triennial-cycle": "The triennial reassessment cycle",
  "md-supervisor-appeal": "The Supervisor appeal: 45 days",
  "md-ptaab-appeal": "The PTAAB appeal: 30 days",
  "md-tax-court-appeal": "The Maryland Tax Court: 30 days",
  "md-homestead-credit": "The homestead credit and its July 1 test",
  "md-billing": "Billing in July or August",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/maryland-property-tax/", label: "Maryland Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Maryland Property Tax Deadlines</h1>

      <p>
        Maryland&rsquo;s calendar is unusual because the{" "}
        <strong>state</strong> controls the value side: the deadlines that
        matter to you are counted from the{" "}
        <Link href="/maryland-property-tax/notice-of-assessment/">
          Notice of Assessment
        </Link>{" "}
        SDAT mails in your reassessment year, and from each decision that
        follows it. The <strong>45 → 30 → 30</strong> ladder is the spine of
        the year — but only for the roughly one-third of owners whose region
        is up for review.
      </p>
      <p>
        For the other two years of your cycle, the standing mechanisms — the
        petition for review and the homestead credit&rsquo;s July 1 test —
        are the dates that matter instead.
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

      <h2>The shape of a reassessment year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for a property whose region is reviewed with a
          notice dated late December 2026. Your own dates run from your
          notice.
        </em>
      </p>
      <ol>
        <li>
          <strong>Late December 2026:</strong> the Notice of Assessment
          arrives, showing the old and new values and the phase-in.
        </li>
        <li>
          <strong>January 1, 2027:</strong> the date of finality — the value
          locks unless you appeal.
        </li>
        <li>
          <strong>Within 45 days of the notice date (~February 9, 2027):</strong>{" "}
          appeal filed with the Supervisor of Assessments, online or in
          writing.
        </li>
        <li>
          <strong>Spring 2027:</strong> the Supervisor&rsquo;s hearing, then a
          final notice by mail.
        </li>
        <li>
          <strong>Within 30 days of the final notice:</strong> appeal to the
          county PTAAB if the first step did not bring relief.
        </li>
        <li>
          <strong>Within 30 days of the PTAAB decision:</strong> appeal to the
          Maryland Tax Court — no fee, postmark counts.
        </li>
        <li>
          <strong>July 1, 2027:</strong> the homestead credit&rsquo;s
          residence test — six months of the year including this date.
        </li>
        <li>
          <strong>July or August 2027:</strong> your county mails the tax
          bill, applying its rate to the certified (and capped) assessment.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the appeal ladder is finished —
        all three steps — before the first bill of the year even arrives.
        Waiting for the bill to decide whether to appeal is waiting too long;
        the window closed months earlier.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s exact
        billing date and rate (set locally each spring), or the phase-in
        amounts for your property — those are on your own notice and the{" "}
        <a
          href="https://sdat.dat.maryland.gov/RealProperty/Pages/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Real Property Data Search
        </a>
        .
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/maryland-property-tax/triennial-cycle/">
            The triennial cycle and the phase-in
          </Link>{" "}
          — how one-third of the county is reviewed each year.
        </li>
        <li>
          <Link href="/maryland-property-tax/notice-of-assessment/">
            The Notice of Assessment explained
          </Link>{" "}
          — the two values and the date of finality.
        </li>
        <li>
          <Link href="/maryland-property-tax/appeal-ladder/">
            The appeal ladder
          </Link>{" "}
          — the three steps, the petition for review, and the new-owner
          window.
        </li>
        <li>
          <Link href="/maryland-property-tax/homestead-cap/">
            The 10% homestead cap
          </Link>{" "}
          — eligibility, the apply-once rule, and local variations.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "md-tax-court-procedures",
          "md-archives-sdat-functions",
          "md-montgomery-homestead",
          "md-sdat-appeal-form",
          "md-mgaleg-hb1088",
        ]}
      />
    </PageShell>
  );
}

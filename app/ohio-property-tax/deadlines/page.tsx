import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/ohio-property-tax/deadlines/",
  title: "Ohio Property Tax Deadlines",
  description:
    "Ohio's property tax calendar: the six-year reappraisal cycle with triennial updates, the January 1 – March 31 DTE Form 1 complaint window, and the 30-day Board of Tax Appeals window with its dual-filing rule.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Ohio",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("ohio");

const TITLES: Record<string, string> = {
  "assessment-date": "The reappraisal cycle",
  "protest-filing": "The complaint window",
  "appeal-higher-board": "The BTA appeal",
};

const ID_TITLES: Record<string, string> = {
  "oh-revaluation-cycle": "The six-year cycle and the triennial update",
  "oh-bor-complaint-window": "January 1 – March 31: the DTE Form 1 window",
  "oh-bta-appeal": "30 days, filed twice: the BTA appeal",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/ohio-property-tax/", label: "Ohio Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Ohio Property Tax Deadlines</h1>

      <p>
        Ohio&rsquo;s appeal calendar is anchored to the <strong>tax
        year</strong>, not to a notice: every parcel in a county shares the
        same January 1 – March 31 complaint window for the tax year just
        billed, regardless of when (or whether) any notice arrived. That
        makes the Ohio calendar unusually simple to state — and unusually
        unforgiving, because the window does not move for anyone.
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

      <h2>The shape of a complaint year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for tax year 2026 — your county&rsquo;s
          e-filing channels and the official form&rsquo;s alternative cutoff
          control.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1, 2027:</strong> the complaint window opens for
          tax year 2026 values.
        </li>
        <li>
          <strong>January – March 2027:</strong> prepare the DTE Form 1 —
          your opinion of value and the evidence behind it (comparable
          sales, condition, appraisal if used).
        </li>
        <li>
          <strong>By March 31, 2027:</strong> the complaint filed with the
          county auditor — or earlier, if the last day to pay first-half
          taxes falls before it (the form&rsquo;s alternative cutoff).
        </li>
        <li>
          <strong>Spring 2027:</strong> Board of Revision hearings — the
          school district may participate.
        </li>
        <li>
          <strong>The decision mails:</strong> the 30-day BTA window opens —
          file with the BTA <em>and</em> the county BOR.
        </li>
        <li>
          <strong>2027 – 2028:</strong> the BTA (standard or small claims
          docket) hears the appeal; judicial review follows only on the
          narrow grounds the statute allows.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> two dates carry the whole
        Ohio system — <strong>March 31</strong> (the complaint cutoff) and{" "}
        <strong>30 days from the BOR mailing</strong> (the BTA window, filed
        in two places). Everything else is preparation. Owners who learn
        the calendar from their bill are already inside the window when
        they start.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s
        first-half payment date (which can pull the cutoff earlier) and
        the BOR&rsquo;s hearing schedule — both published by your county
        auditor.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/ohio-property-tax/taxable-value-and-cycle/">
            Taxable value and the reappraisal cycle
          </Link>{" "}
          — the 35% ratio and what each phase of the cycle means.
        </li>
        <li>
          <Link href="/ohio-property-tax/bor-complaint/">
            The DTE Form 1 complaint
          </Link>{" "}
          — the form, the hearing, and the evidence.
        </li>
        <li>
          <Link href="/ohio-property-tax/bta-appeal/">
            The Board of Tax Appeals
          </Link>{" "}
          — the 30-day dual filing and the small claims docket.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "oh-dor-reappraisal",
          "oh-franklin-bor",
          "oh-bta-appeal-info",
          "oh-dor-property-tax-hub",
        ]}
      />
    </PageShell>
  );
}

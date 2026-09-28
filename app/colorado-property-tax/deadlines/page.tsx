import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/colorado-property-tax/deadlines/",
  title: "Colorado Property Tax Deadlines",
  description:
    "Colorado's property tax calendar: the May 1 Notice of Valuation, the May 1 – June 8 protest window, the Notice of Determination, both county board schedules, the 30-day appeal beyond, and the February/June payment dates.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Colorado",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("colorado");

const TITLES: Record<string, string> = {
  "notice-delivery": "Your Notice of Valuation",
  "protest-filing": "The protest window",
  decision: "The determination and the county board",
  "appeal-higher-board": "Beyond the county board",
  payment: "Paying the tax",
};

const ID_TITLES: Record<string, string> = {
  "co-nov-real-property": "By May 1: the Notice of Valuation",
  "co-protest-real-property": "May 1 – June 8: the protest window",
  "co-nod-and-cboe": "The Notice of Determination and the county board",
  "co-appeal-beyond-cboe": "30 days: arbitration, district court, or the BAA",
  "co-payment-installments": "The payment dates",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/colorado-property-tax/", label: "Colorado Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Colorado Property Tax Deadlines</h1>

      <p>
        Colorado&rsquo;s calendar runs a full season ahead of the bill: the
        value notice and the entire protest-and-appeal sequence happen in{" "}
        <strong>spring and summer</strong>, the levies are set in the fall,
        and the bill arrives after <strong>January 1</strong> of the next
        year. The calendar also runs on <em>two parallel schedules</em> —
        the standard one and the alternate schedule that large counties
        must use — so confirming which schedule your county is on is the
        first step of any Colorado deadline check.
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

      <h2>The shape of a year (illustrative, standard schedule)</h2>
      <p>
        <em>
          Illustrative sequence for a revaluation year on the standard
          schedule — your assessor&rsquo;s published dates control, and
          statutory dates shift for weekends and holidays.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1:</strong> the assessment date — classification
          by actual use.
        </li>
        <li>
          <strong>By May 1:</strong> the Notice of Valuation arrives, showing
          prior and current actual value.
        </li>
        <li>
          <strong>May 1 – June 8:</strong> the protest window with the
          assessor — oral or written.
        </li>
        <li>
          <strong>Late June:</strong> the Notice of Determination arrives;
          the CBOE appeal window opens from its mailing.
        </li>
        <li>
          <strong>July 1 – August 5:</strong> county board hearings and
          decisions, with written notice within five business days.
        </li>
        <li>
          <strong>Within 30 days of the board&rsquo;s mailed decision:</strong>{" "}
          petition to arbitration, district court, or the Board of
          Assessment Appeals.
        </li>
        <li>
          <strong>Fall:</strong> taxing authorities set the mill levies
          (school districts levied separately).
        </li>
        <li>
          <strong>After January 1:</strong> tax bills mailed; one payment by
          April 30, or half by the last day of February and half by June 15.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the Colorado appeal year is
        effectively over by September — everything after that (levies,
        bills, payments) is arithmetic on the value the process fixed.
        Owners who wait for the bill to decide whether to appeal are a
        full cycle late.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your county is
        on the alternate schedule (mandatory over 300,000 population,
        elective otherwise), and the adjusted dates for weekends and
        holidays — both published by your assessor.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/colorado-property-tax/assessment-rate/">
            Actual value and the assessment rate
          </Link>{" "}
          — the chain that builds the tax.
        </li>
        <li>
          <Link href="/colorado-property-tax/notice-of-valuation/">
            The Notice of Valuation explained
          </Link>{" "}
          — the two values and the sales-study window.
        </li>
        <li>
          <Link href="/colorado-property-tax/protest-and-appeal/">
            Protesting and the appeal path
          </Link>{" "}
          — the ladder and the three routes beyond the county board.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "co-dpt-understanding",
          "co-dpt-protests-appeals",
          "co-dpt-property-tax-map",
        ]}
      />
    </PageShell>
  );
}

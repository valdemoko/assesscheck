import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/washington-property-tax/deadlines/",
  title: "Washington Property Tax Deadlines",
  description:
    "Washington's property tax calendar: the January 1 assessment date, the change-of-value notice, the July 1 / 30-day BOE deadline, the 30-day BTA window, and the levy limit that shapes the bill.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Washington",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("washington");

const TITLES: Record<string, string> = {
  "assessment-date": "The assessment date and the notice",
  "protest-filing": "The BOE petition",
  "appeal-higher-board": "The BTA appeal",
  payment: "The levy limit and the bill",
};

const ID_TITLES: Record<string, string> = {
  "wa-assessment-date": "January 1 and the change-of-value notice",
  "wa-boe-appeal": "The BOE petition: July 1 or 30 days, whichever is later",
  "wa-bta-appeal": "The BTA appeal: 30 days, no extensions",
  "wa-levy-limit": "The levy limit: how the bill is bounded",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/washington-property-tax/", label: "Washington Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Washington Property Tax Deadlines</h1>

      <p>
        Washington&rsquo;s calendar turns on a deadline with a two-part
        structure no other state on this site uses: the BOE petition is due
        the <strong>later</strong> of a fixed date (July 1) or a notice-based
        window (30 days from the change-of-value notice). After that, the
        state level runs on a strict 30-day count from the BOE&rsquo;s
        decision — with no extensions.
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

      <h2>The shape of a year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence with a notice mailed in March — your own
          dates run from your notice and the county&rsquo;s schedule.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1, 2026:</strong> assessment date — value as of
          this day at 100% of market.
        </li>
        <li>
          <strong>March 12, 2026:</strong> change-of-value notice mailed
          (only if the value changed).
        </li>
        <li>
          <strong>July 1, 2026:</strong> the fixed deadline — controlling
          here, because the 30-day window from March 12 expired April 11.
        </li>
        <li>
          <strong>Summer–fall 2026:</strong> BOE hearings; the order is
          mailed after the hearing, starting the 30-day BTA count.
        </li>
        <li>
          <strong>Within 30 days of the order&rsquo;s mailing:</strong> BTA
          Notice of Appeal, if you continue — informal or formal form.
        </li>
        <li>
          <strong>18–24 months later:</strong> the BTA hearing, under the
          current backlog.
        </li>
        <li>
          <strong>February 14, 2027 (illustrative):</strong> the treasurer&rsquo;s
          bill arrives after the levies are set within the levy limit — the
          value appeal has already lowered your share; the levy limit
          determined the rest.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> by the time the bill exists,
        every appeal deadline for the year has passed. The Washington
        calendar front-loads the appeal into the summer after the January 1
        assessment date — owners who wait to see the bill are waiting past
        the window.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s BOE
        hearing schedule, any local extension of the 30-day window, and your
        districts&rsquo; levy decisions — all published locally.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/washington-property-tax/levy-limit/">
            The levy limit
          </Link>{" "}
          — 101% of the highest lawful levy, and why bills rise while values
          fall.
        </li>
        <li>
          <Link href="/washington-property-tax/change-of-value-notice/">
            The change-of-value notice
          </Link>{" "}
          — when it arrives and the deadline it creates.
        </li>
        <li>
          <Link href="/washington-property-tax/boe-appeal/">
            The BOE and BTA appeal
          </Link>{" "}
          — the two steps, the forms, and the no-extension rule.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "wa-dor-levy-limit",
          "wa-bta-how-to-file",
          "wa-dor-petition-boe",
        ]}
      />
    </PageShell>
  );
}

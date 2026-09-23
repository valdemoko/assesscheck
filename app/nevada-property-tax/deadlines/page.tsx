import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/deadlines/",
  title: "Nevada Property Tax Deadlines",
  description:
    "Nevada's property tax calendar: the July 1 lien date and fiscal year, the value notice, the January 15 value appeal, the March 10 state appeal, the June 15 exemption and rental claim deadlines, the June 30 abatement petition, and the four installments.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Nevada",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("nevada");

const TITLES: Record<string, string> = {
  "assessment-date": "The lien date and the start of the fiscal year",
  "notice-delivery": "Your value notice",
  "protest-filing": "Appealing your value to the county board",
  "appeal-higher-board": "Appeals to a state-level body",
  "exemption-application": "Applying for or renewing an exemption",
  "abatement-claim": "Claiming the 3% level for a rental",
  "abatement-review": "Challenging the abatement determination",
  payment: "Paying your taxes",
};

// Two records share the "appeal-higher-board" type but go to different bodies
// with different subjects, so they get their own headings rather than a single
// generic one.
const ID_TITLES: Record<string, string> = {
  "nv-state-board-appeal":
    "Appealing a county board decision about your value to the State Board of Equalization",
  "nv-tax-commission-appeal":
    "Appealing an abatement decision to the Nevada Tax Commission",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/nevada-property-tax/", label: "Nevada Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Nevada Property Tax Deadlines</h1>

      <p>
        Nevada&rsquo;s calendar is a <strong>fiscal-year calendar</strong>: it
        runs July 1 to June 30, not January to December, and the values on a
        notice are for the fiscal year beginning the following July. That is why
        the deadlines below look out of order at first — the lien date comes
        before the notice, and the appeal window closes before the fiscal year it
        concerns has even started.
      </p>
      <p>
        They also fall into <strong>two different clocks</strong>. Value questions
        run through January 15 and then March 10. Abatement questions run through
        June 15 and then June 30. Nothing about the first clock tells you
        anything about the second.
      </p>

      {DEADLINES.map((d) => (
        <section
          key={d.deadlineId}
          aria-label={
            ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType
          }
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

      <h2>The shape of the year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for a fiscal year beginning July 1, 2026. The
          dates that control are the ones your county publishes and the ones on
          your own documents.
        </em>
      </p>
      <ol>
        <li>
          <strong>July 1, 2026:</strong> lien date. Qualification status is fixed
          as of this day.
        </li>
        <li>
          <strong>Autumn 2026 to January 1, 2027:</strong> the assessor completes
          the roll and mails value notices; January 1 is the statutory deadline
          for the mailing and the close of the roll.
        </li>
        <li>
          <strong>December 2026:</strong> appeal forms are available from the
          assessor.
        </li>
        <li>
          <strong>January 15, 2027:</strong> deadline to file a value appeal with
          the county Board of Equalization.
        </li>
        <li>
          <strong>March 10, 2027:</strong> deadline to appeal a county board
          decision to the State Board of Equalization.
        </li>
        <li>
          <strong>June 15, 2027:</strong> exemptions renewed or applied for, and
          rental abatement claims filed for the fiscal year beginning July 1,
          2027.
        </li>
        <li>
          <strong>June 30, 2027:</strong> deadline to challenge the abatement
          determination for the fiscal year that is ending.
        </li>
        <li>
          <strong>August 2027 onward:</strong> the tax bill is due on the third
          Monday in August, in up to four installments when the taxes exceed
          $100.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a Nevada bill that arrives in
        August has already been through both of these processes. The value was
        appealable in January on the previous year&rsquo;s notice, and the
        abatement level was determined from your status on July 1 — before the
        bill reached you.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s mailing
        dates, the general abatement percentage for your year, or your district
        rates. Those come from your county and appear on your bill.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/nevada-property-tax/value-appeal/">
            Appealing your value
          </Link>{" "}
          — the January 15 track, the burden of proof, and the state appeal.
        </li>
        <li>
          <Link href="/nevada-property-tax/primary-residence-abatement/">
            The 3% primary residence abatement
          </Link>{" "}
          — the claim, what removes it, and the rent test for rentals.
        </li>
        <li>
          <Link href="/nevada-property-tax/tax-cap-abatement/">
            The partial abatement
          </Link>{" "}
          — what is capped, what is not, and why a bill can rise when values
          fall.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nv-washoe-assessor-dates",
          "nv-washoe-abatement-appeal",
          "nv-washoe-treasurer-billing",
          "nv-clark-assessor-real-property",
        ]}
      />
    </PageShell>
  );
}

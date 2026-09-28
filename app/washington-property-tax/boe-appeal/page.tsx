import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/washington-property-tax/boe-appeal/",
  title: "Appealing to the Washington Board of Equalization and the BTA",
  description:
    "The two-step Washington appeal: the county Board of Equalization petition on DOR form REV 64-0075, then the State Board of Tax Appeals within 30 days — informal and formal tracks, and the direct-appeal option.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Washington",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/washington-property-tax/", label: "Washington Property Tax" },
        { label: "BOE and BTA Appeal" },
      ]}
    >
      <h1>Appealing to the Board of Equalization and the BTA</h1>

      <p>
        Washington&rsquo;s appeal ladder has two administrative steps: the
        county <strong>Board of Equalization (BOE)</strong>, then the state{" "}
        <strong>Board of Tax Appeals (BTA)</strong>. Each has its own form,
        its own deadline, and — at the state level — a hard no-extension
        rule the Board itself states in capital-letter plainness: it cannot
        extend deadlines or accept late appeals.
      </p>

      <h2>Step 1 — the county Board of Equalization</h2>
      <p>
        The petition is the Department of Revenue&rsquo;s own form,{" "}
        <strong>REV 64-0075</strong>, filed with your county&rsquo;s BOE by
        the{" "}
        <Link href="/washington-property-tax/change-of-value-notice/">
          July 1 / 30-day deadline
        </Link>
        . The BOE hears value petitions for the parcels in its county; it is
        the body that decides whether the assessed value represents fair
        market value. The evidence that moves a BOE is market evidence —
        sales of comparable properties, an appraisal, the condition of the
        property as of the January 1 assessment date.
      </p>

      <h2>Step 2 — the State Board of Tax Appeals</h2>
      <p>
        An appeal from the BOE&rsquo;s decision goes to the{" "}
        <strong>Washington State Board of Tax Appeals (WSBTA)</strong> within{" "}
        <strong>30 days of the decision&rsquo;s mailing date</strong>. The
        Board&rsquo;s how-to-file page, read in full, states the practical
        points:
      </p>
      <ul>
        <li>
          <strong>Most appeals: 30 days from the mailing date</strong> of the
          decision being appealed. The Board cannot extend the deadline or
          accept late appeals — no exception is offered for good cause.
        </li>
        <li>
          <strong>Informal vs. formal tracks.</strong> Property tax valuation
          appeals use the Board&rsquo;s <em>informal</em> form (a simpler
          hearing suited to residential owners) or its <em>formal</em> form
          (full procedure, typically for larger or represented cases). The
          choice of form is made at filing.
        </li>
        <li>
          <strong>The filing packet:</strong> a completed Notice of Appeal, a
          copy of the decision being appealed (the BOE order), and anything
          the form instructions require. Email filings received before 5
          p.m. on a business day count that day.
        </li>
        <li>
          <strong>The backlog, disclosed:</strong> hearings are currently
          being scheduled about <strong>18 to 24 months after filing</strong>.
          An appeal is a long-horizon commitment in Washington right now.
        </li>
      </ul>

      <h2>The direct-appeal option</h2>
      <p>
        One route skips the county board entirely: a{" "}
        <strong>direct appeal</strong> to the BTA under RCW 84.40.038,
        available when the <strong>taxpayer, the assessor, and the county
        board jointly sign</strong> the request, and the Board may accept or
        reject it. It exists for cases where everyone agrees the BOE step
        would add nothing — which in practice means the parties have already
        largely agreed on the path to a number.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up dates — your own run from your
          documents.
        </em>
      </p>
      <ol>
        <li>
          <strong>March 12, 2026:</strong> change-of-value notice mailed
          ($545,000). Filing deadline: the later of July 1 or April 11 —
          July 1.
        </li>
        <li>
          <strong>June 28, 2026:</strong> REV 64-0075 petition filed with the
          county BOE, with three comparable sales attached.
        </li>
        <li>
          <strong>August 2026:</strong> BOE hearing; the order arrives
          August 20 reducing the value to $510,000. The 30-day BTA clock
          starts at mailing.
        </li>
        <li>
          <strong>By September 19, 2026:</strong> informal Notice of Appeal
          filed with the BTA — accepted, with a hearing now likely 18–24
          months out.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the only clock you can act on
        early is the BOE deadline; the BTA window is short but starts from a
        decision you cannot control the timing of. Calendar the 30 days the
        day any BOE order arrives.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the wait is worth
        it — between the backlog and the levy-limit dynamics, a BTA appeal in
        Washington is often about principle or large values, not
        single-year savings. That judgment is yours.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        County BOE hearing procedures (each county&rsquo;s board publishes
        its own rules, and King County&rsquo;s differ), exemption appeals,
        and excise tax matters before the BTA are outside this page. The
        Board&rsquo;s how-to-file page cited below is the authority for the
        state-level process.
      </p>

      <SourceList
        sourceIds={["wa-bta-how-to-file", "wa-dor-petition-boe"]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/minnesota-property-tax/board-appeals/",
  title: "The Minnesota Board Appeals: Local and County",
  description:
    "How Minnesota's Local and County Boards of Appeal and Equalization work: meeting windows in April–May and June, the meeting date as the deadline, the LBAE-first rule, and what to bring.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Minnesota",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/minnesota-property-tax/", label: "Minnesota Property Tax" },
        { label: "Board Appeals" },
      ]}
    >
      <h1>The Board Appeals: Local and County</h1>

      <p>
        Minnesota&rsquo;s first two appeal levels share a structure no other
        state on this site uses: there is <strong>no filing deadline in the
        usual sense — the board meeting is the deadline</strong>. The Local
        Board of Appeal and Equalization meets between{" "}
        <strong>April 1 and May 31</strong>; the County Board meets in{" "}
        <strong>June</strong>; and the exact dates are printed on your
        Valuation Notice.
      </p>

      <h2>The Local Board (April 1 – May 31)</h2>
      <p>
        The <strong>Local Board of Appeal and Equalization (LBAE)</strong> is
        usually the same people as your <strong>city council or town
        board</strong>. It hears the value and classification disagreements of
        its own residents — in person, by letter, or through a
        representative, with the assessor present to answer questions.
      </p>
      <p>
        One structural variation matters before anything else:{" "}
        <strong>cities and towns may transfer their board powers to the
        county</strong>. Where that has happened, the municipality holds{" "}
        <strong>open book meetings</strong> instead — informal sessions with
        the assessor — and their residents go{" "}
        <em>straight to the county board</em>. Which system applies to you is
        stated on your Valuation Notice.
      </p>

      <h2>The LBAE-first rule</h2>
      <p>
        Where your city holds its own LBAE, appealing there is a{" "}
        <strong>prerequisite for the county board</strong> — the
        Department of Revenue states it directly: you must appeal to the
        Local Board before appealing to the County Board. Skipping the local
        meeting forfeits the county level. This makes the April–May meeting
        date, printed on the notice, the single most consequential date on a
        Minnesota assessment calendar.
      </p>

      <h2>The County Board (June)</h2>
      <p>
        The <strong>County Board of Appeal and Equalization (CBAE)</strong> is
        usually the same people as your <strong>county board of
        commissioners</strong> or their appointees, meeting in June. It hears
        two groups: owners unsatisfied with the LBAE&rsquo;s outcome, and the
        open-book residents of cities that transferred their powers. Like the
        local level, appeals may be made in person, by letter, or by a
        representative.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up dates — your own notice carries
          your meetings.
        </em>
      </p>
      <ol>
        <li>
          <strong>By April 1, 2026:</strong> the Valuation Notice arrives
          showing $410,000, with the LBAE meeting printed: April 22, 2026,
          6:30 p.m., city hall.
        </li>
        <li>
          <strong>Early April:</strong> a call to the assessor resolves the
          classification question but not the value — you prepare for the
          meeting.
        </li>
        <li>
          <strong>April 22, 2026:</strong> you appear at the LBAE with three
          neighborhood sales and the home&rsquo;s condition facts; the board
          tables a decision.
        </li>
        <li>
          <strong>June 2026:</strong> unsatisfied with the LBAE&rsquo;s
          result, you attend the County Board&rsquo;s June meeting — the
          same evidence, one more audience.
        </li>
        <li>
          <strong>Still unsatisfied:</strong> the{" "}
          <Link href="/minnesota-property-tax/tax-court-appeal/">
            Tax Court route
          </Link>{" "}
          remains open until April 30 of the payable year.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the boards are meetings, not
        filings — preparation means having your evidence ready by the
        printed date, not mailing something by a deadline. And the
        LBAE-first rule means the meeting you might be tempted to skip is
        the one that gates everything else.
      </p>
      <p>
        <strong>What it does not tell you:</strong> how each board records
        and communicates its decisions (practices vary), and whether your
        evidence moves them — that is a market-evidence question, the same
        one the{" "}
        <Link href="/evidence/property-tax-protest-evidence/">
          evidence guide
        </Link>{" "}
        helps you prepare.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        Special equalization review for certain classes, and the boards&rsquo;
        internal procedures, are outside this page. The Department of
        Revenue&rsquo;s appeal page and Anoka County&rsquo;s page cited below
        are the authorities for the structure.
      </p>

      <SourceList
        sourceIds={["mn-dor-appealing", "mn-anoka-appeal"]}
      />
    </PageShell>
  );
}

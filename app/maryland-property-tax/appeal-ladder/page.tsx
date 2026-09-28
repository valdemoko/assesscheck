import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/maryland-property-tax/appeal-ladder/",
  title: "The Maryland Appeal Ladder: 45 Days, 30 Days, 30 Days",
  description:
    "Maryland's three-step property tax appeal: the Supervisor of Assessments within 45 days, the county PTAAB within 30 days, and the Maryland Tax Court within 30 days — plus the petition for review and the new-owner window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Maryland",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/maryland-property-tax/", label: "Maryland Property Tax" },
        { label: "Appeal Ladder" },
      ]}
    >
      <h1>The Maryland Appeal Ladder: 45 Days, 30 Days, 30 Days</h1>

      <p>
        Maryland&rsquo;s appeal structure is a fixed three-step ladder with
        day-counts stated in statute, on the Maryland Tax Court&rsquo;s own
        procedures page. Every step is counted from the previous
        decision&rsquo;s or notice&rsquo;s date, which makes the whole
        timeline predictable from the moment your{" "}
        <Link href="/maryland-property-tax/notice-of-assessment/">
          Notice of Assessment
        </Link>{" "}
        arrives.
      </p>

      <h2>Step 1 — the Supervisor of Assessments (within 45 days)</h2>
      <p>
        The first appeal — on <strong>value or classification</strong> — is
        filed with the <strong>Supervisor of Assessments</strong> for your
        county within <strong>45 days of the notice&rsquo;s date</strong>.
        Filing is possible online through the state&rsquo;s own appeal form.
        The Supervisor or a designee holds a hearing; the assessor explains
        the valuation and you present yours. Afterward the Supervisor mails a{" "}
        <strong>final notice</strong> with the determination.
      </p>
      <p>
        Two special routes into this same step:
      </p>
      <ul>
        <li>
          <strong>The petition for review.</strong> In the two years of the
          cycle when no new notice arrives, a petition for review may be filed
          at any time <em>within three years of the last final notice</em> —
          but on or before the <em>date of finality for the next taxable
          year</em>. It is heard by the same Supervisor.
        </li>
        <li>
          <strong>The new-owner window.</strong> An owner whose deed was
          recorded between January 1 and June 30 may appeal within{" "}
          <strong>60 days of the recording date</strong> — the one route that
          is anchored to your own transaction rather than to the assessment
          calendar.
        </li>
      </ul>

      <h2>Step 2 — the county PTAAB (within 30 days)</h2>
      <p>
        If the Supervisor&rsquo;s final notice does not bring relief, the
        appeal continues to the county <strong>Property Tax Assessment
        Appeals Board</strong> (PTAAB) within <strong>30 days of the final
        notice</strong>. The PTAAB is a citizen board appointed for each
        county and Baltimore City; it schedules and holds its own hearing,
        and its members are not SDAT employees — a deliberate structural
        separation between the assessor and the second review.
      </p>

      <h2>Step 3 — the Maryland Tax Court (within 30 days)</h2>
      <p>
        Either party — the taxpayer <em>or</em> the Supervisor — may appeal
        the PTAAB&rsquo;s final determination to the{" "}
        <strong>Maryland Tax Court</strong> within <strong>30 days of the
        decision</strong>. The Tax Court is the top of the administrative
        ladder, and its procedures page states the practical points owners
        care about:
      </p>
      <ul>
        <li>
          <strong>Pro se representation is allowed</strong> — you can argue
          your own appeal without a lawyer.
        </li>
        <li>
          <strong>There is no filing fee</strong> at any level of the ladder.
        </li>
        <li>
          <strong>The postmark is the filing date</strong> — a petition mailed
          on the last day counts.
        </li>
        <li>
          The court accepts an <strong>informal letter received in time</strong>{" "}
          and then requires the formal petition.
        </li>
        <li>
          <strong>Exhaustion of administrative remedies is required</strong> —
          you must go through the lower levels first (counties with their own
          appeal boards are excepted).
        </li>
      </ul>
      <p>
        From the Tax Court, further review is judicial (the state&rsquo;s
        circuit courts and beyond) — that is outside the administrative
        ladder this page describes.
      </p>

      <h2>Worked timeline (illustrative)</h2>
      <p>
        <em>
          Illustrative dates with a notice dated December 26, 2026 — your own
          dates run from your notice and each decision.
        </em>
      </p>
      <ol>
        <li>
          <strong>December 26, 2026:</strong> Notice of Assessment arrives.
          The 45-day clock starts.
        </li>
        <li>
          <strong>By ~February 9, 2027:</strong> appeal filed with the
          Supervisor (45 days).
        </li>
        <li>
          <strong>Spring 2027:</strong> Supervisor&rsquo;s hearing; final
          notice mailed. The 30-day clock starts at its mailing.
        </li>
        <li>
          <strong>Within 30 days:</strong> appeal to the PTAAB, which
          schedules its own hearing and issues a final determination.
        </li>
        <li>
          <strong>Within 30 days of the PTAAB decision:</strong> appeal to
          the Maryland Tax Court — postmark counts.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the ladder is long — three
        hearings are possible — but each step&rsquo;s deadline is knowable
        the day the previous decision arrives. Missing the 45-day window
        cannot be fixed later, because the two 30-day windows only open from
        decisions that follow a timely first appeal.
      </p>
      <p>
        <strong>What it does not tell you:</strong> hearing lead times (the
        Tax Court&rsquo;s docket, in particular, can run months), and whether
        the value is worth appealing — that is a question about market
        evidence, which the Supervisor&rsquo;s hearing is where you present.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The three counties that operate their own appeal boards in place of
        the standard ladder, and judicial review after the Tax Court, are
        outside this page. The Tax Court&rsquo;s procedures page, cited
        below, is the authority for the ladder itself.
      </p>

      <SourceList
        sourceIds={["md-tax-court-procedures", "md-sdat-appeal-form"]}
      />
    </PageShell>
  );
}

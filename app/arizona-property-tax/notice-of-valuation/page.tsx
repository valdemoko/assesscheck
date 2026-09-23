import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/notice-of-valuation/",
  title: "Arizona's Notice of Valuation (and the Amended Notice That Resets the Clock)",
  description:
    "Arizona mails the notice of valuation before March 1 with the full cash value, limited property value and property class. An amended notice can be issued within 60 days — and it restarts the appeal window.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Arizona",
});

// Rendered from the deadline registry — the notice rules below are the verified
// records, not strings retyped into this page.
const DEADLINES = getDeadlines("arizona");
const NOTICE = DEADLINES.find((d) => d.deadlineId === "az-notice-of-valuation")!;
const AMENDED = DEADLINES.find((d) => d.deadlineId === "az-amended-notice")!;

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/arizona-property-tax/", label: "Arizona Property Tax" },
        { label: "Notice of Valuation" },
      ]}
    >
      <h1>Arizona&rsquo;s Notice of Valuation</h1>

      <p>
        Once a year the county assessor sends every owner of record a notice of
        valuation. It states three things, and you need all three to work out
        whether you have a case: the <strong>full cash value</strong>, the{" "}
        <strong>limited property value</strong>, and the{" "}
        <strong>property class</strong>.
      </p>

      <h2>When it arrives</h2>
      <p>{NOTICE.rule}</p>
      <p className="muted-note">
        <strong>Stated date:</strong> {NOTICE.fixedDate} · <strong>Basis:</strong>{" "}
        {NOTICE.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
      </p>
      <p>
        Two details of that rule matter more than the date itself. First, the law
        requires the assessor to <strong>certify the mailing date</strong> to the
        board of supervisors and the department each year — which is why the
        deadline printed on your notice can be relied on, and why an appeal
        deadline is not simply &ldquo;sixty days from March 1&rdquo;. Second,
        the mailing date can lawfully move: the director may extend it beyond
        March 1 by up to thirty days for an act of God, flood, fire or a declared
        emergency, and an extension applies to all property the assessor values.
      </p>

      <h2>The amended notice: a second notice, and a new sixty-day window</h2>
      <p>{AMENDED.rule}</p>
      <p className="muted-note">
        <strong>Anchor:</strong> {AMENDED.anchoredTo} · <strong>Basis:</strong>{" "}
        {AMENDED.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
      </p>
      <p>
        This is the part of the Arizona calendar that owners are least prepared
        for, and it cuts both ways:
      </p>
      <ul>
        <li>
          <strong>If a second notice arrives, your window moved.</strong> The
          petition must be filed within sixty days after the mailing of the
          notice <em>or the amended notice</em>, so a late-September amended
          notice gives you a new deadline rather than an expired one. Check
          whether one was issued before assuming you are out of time.
        </li>
        <li>
          <strong>If you already filed, the valuation may change anyway.</strong>{" "}
          An amended notice is the assessor correcting a value that neighborhood
          or classification data had produced incorrectly, and it can move in
          either direction. Read the new figures rather than assuming they match
          what you appealed.
        </li>
      </ul>
      <p>
        A note on what the notice is not: it is not a tax bill, and it does not
        contain rates. Tax rates are set later — in Pima County the board of
        supervisors sets them on the third Monday in August — and the statement
        of taxes is mailed separately in September. The notice you receive now is
        about <em>value and classification</em>, which is exactly what an appeal
        can address.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence only. Your own mailing date is the one printed on
          your notice.
        </em>
      </p>
      <ol>
        <li>
          <strong>Late February:</strong> the notice of valuation arrives showing
          a full cash value of $400,000, a limited property value of $315,000,
          and class three.
        </li>
        <li>
          <strong>Within sixty days of that mailing:</strong> the deadline to
          file a petition for review with the assessor. The date is printed on
          the notice.
        </li>
        <li>
          <strong>Late September (possible):</strong> an amended notice of
          valuation arrives. The sixty-day window runs again from{" "}
          <em>that</em> mailing, so the deadline you had assumed has been
          replaced.
        </li>
        <li>
          <strong>August 15:</strong> if you asked for a meeting with the
          assessor, this is the outside date for the assessor to consider, decide
          and answer your requests.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> diarise the petition deadline from
        the notice in your hand, then check once more in the autumn whether an
        amended notice was issued.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your value is
        correct, or whether the class is right. Those are appeal questions — and
        the classification question has real money attached, because class three
        receives a state aid to education reduction on the bill that class four
        does not.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/arizona-property-tax/petition-for-review/">
            The petition for review
          </Link>{" "}
          — the 60-day filing, the form, and the two appeal routes.
        </li>
        <li>
          <Link href="/arizona-property-tax/appeal-evidence/">
            Evidence for an Arizona appeal
          </Link>{" "}
          — what the petition itself must contain.
        </li>
        <li>
          <Link href="/arizona-property-tax/deadlines/">
            Arizona deadlines
          </Link>{" "}
          — the full calendar, including the two payment halves.
        </li>
      </ul>

      <SourceList
        sourceIds={["az-ars-42-15101", "az-ars-42-16051", "az-sboe-how-to-appeal"]}
      />
    </PageShell>
  );
}

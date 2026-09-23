import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/oregon-property-tax/deadlines/",
  title: "Oregon Property Tax Deadlines",
  description:
    "Oregon's property tax calendar: the January 1 assessment date, the tax statement mailed before October 25, the December 16 informal review, the December 31 board petition, the Tax Court windows and the November, February and May payments.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Oregon",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("oregon");

const TITLES: Record<string, string> = {
  "assessment-date": "The assessment date and the roll",
  rendition: "Business personal property return",
  "notice-delivery": "Your tax statement",
  "informal-review": "Asking the assessor to review the value",
  "protest-filing": "The board petition",
  "judicial-review": "The Oregon Tax Court",
  payment: "Paying your taxes",
};

const ID_TITLES: Record<string, string> = {
  "or-tax-court-magistrate":
    "Going straight to the Tax Court's Magistrate Division",
  "or-tax-court-complaint": "Appealing a board order to the Magistrate Division",
  "or-tax-court-regular-division": "Appealing a magistrate's decision to the Regular Division",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/oregon-property-tax/", label: "Oregon Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Oregon Property Tax Deadlines</h1>

      <p>
        Oregon&rsquo;s calendar runs on a different anchor from the other states
        on this site. There is no separate value notice between the assessment
        date and the tax bill: the <strong>tax statement</strong>, mailed before
        October 25, is what tells you the values, and the appeal window is the
        roughly two months that follow it, closing on{" "}
        <strong>December 31</strong>.
      </p>
      <p>
        Note also that Oregon deadlines are expressed as{" "}
        <strong>days</strong>, and the counties emphasize it. A complaint against
        a board order is due 30 days after the order is mailed; an appeal of a
        magistrate&rsquo;s decision is due 60 days after that decision. Not one
        month, not two months.
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

      <h2>The shape of the year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for the 2026-2027 tax year. The dates that control
          are the ones your county publishes and the ones on your own statement.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1, 2026:</strong> assessment date. The roll and the real
          market value are as of this day, and evidence about value has to speak
          to it.
        </li>
        <li>
          <strong>March 15, 2026:</strong> business personal property returns due,
          with no extension.
        </li>
        <li>
          <strong>Before October 25, 2026:</strong> the county mails the tax
          statement with the three values and the rate.
        </li>
        <li>
          <strong>Through December 16, 2026:</strong> requests for review of the
          value at the assessor&rsquo;s office.
        </li>
        <li>
          <strong>December 31, 2026:</strong> deadline for a board petition (or
          the next business day), and for a direct Tax Court filing where that
          route applies.
        </li>
        <li>
          <strong>November 15, 2026, February 15, 2027 and May 15, 2027:</strong>{" "}
          the payment dates, with installments permitted.
        </li>
        <li>
          <strong>First Monday in February to April 15, 2027:</strong> board
          hearings, on at least five days&rsquo; written notice.
        </li>
        <li>
          <strong>Within 30 days of the board&rsquo;s order:</strong> a complaint
          to the Magistrate Division if you disagree with it.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the whole appeal sequence happens
        in the two months after the statement arrives, and the first payment falls
        inside that window. If you intend to petition and also to pay, do both:
        filing an appeal does not suspend the November 15 date.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s statement
        date, your levy code area&rsquo;s rate, or whether a reduction in value
        would change your bill — that last one depends on your assessed value,
        and the{" "}
        <Link href="/oregon-property-tax/appeal/">appeal page</Link> sets out the
        two conditions.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/oregon-property-tax/measure-50-mav/">
            Measure 50 and the maximum assessed value
          </Link>{" "}
          — the 103% test and why the limit can move more than 3%.
        </li>
        <li>
          <Link href="/oregon-property-tax/changed-property-ratio/">
            New construction and the changed property ratio
          </Link>{" "}
          — exception events and their thresholds.
        </li>
        <li>
          <Link href="/oregon-property-tax/appeal/">Appealing your value</Link> —
          the board, the Tax Court ladder and the counties&rsquo; evidence lists.
        </li>
        <li>
          <Link href="/oregon-property-tax/tax-statement/">
            Your tax statement
          </Link>{" "}
          — what is on it and how compression appears.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "or-multco-property-taxes",
          "or-multco-tax-calculation",
          "or-yamhill-appeals",
          "or-multco-assessment-faq",
        ]}
      />
    </PageShell>
  );
}

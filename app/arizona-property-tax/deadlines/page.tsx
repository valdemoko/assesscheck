import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/deadlines/",
  title: "Arizona Property Tax Deadlines",
  description:
    "The rules behind Arizona's property tax dates: the January 1 valuation date for the following tax year, the notice before March 1, the 60-day petition window, the August 15 decision, the board and court routes, and the two payment halves.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Arizona",
});

// Rendered from the deadline registry — every rule below is verified against its
// cited statute or official page. Deadlines that could not be verified are not
// in the registry and therefore not on this page.
const DEADLINES = getDeadlines("arizona");

const TITLES: Record<string, string> = {
  "az-valuation-date": "The valuation date — January 1, for the following tax year",
  "az-notice-of-valuation": "Receiving the notice of valuation",
  "az-petition-for-review": "Filing the petition for review with the assessor",
  "az-amended-notice": "Amended notices",
  "az-assessor-decision": "The assessor's decision",
  "az-board-of-equalization-petition": "Appealing to the Board of Equalization",
  "az-tax-court": "Tax Court, including the December 15 route",
  "az-payment-halves": "Paying the taxes in two halves",
  "az-valuation-protection-application":
    "The senior property valuation protection option",
  "az-rate-setting": "When the tax rates are set",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/arizona-property-tax/", label: "Arizona Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Arizona Property Tax Deadlines</h1>

      <p>
        Arizona dates are unusually event-driven. The petition window does not
        run from a fixed calendar day: it runs from the date the assessor{" "}
        <strong>certified the mailing</strong> of your notice, and it can start
        again if an <strong>amended notice</strong> is issued. The two payment
        halves, by contrast, are fixed dates with fixed consequences.
      </p>

      {DEADLINES.map((d) => (
        <section key={d.deadlineId} aria-label={TITLES[d.deadlineId] ?? d.deadlineType}>
          <h2>{TITLES[d.deadlineId] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          <p className="muted-note">
            {d.fixedDate && (
              <>
                <strong>Stated date:</strong> {d.fixedDate} ·{" "}
              </>
            )}
            {d.anchoredTo && (
              <>
                <strong>Anchor:</strong> {d.anchoredTo} ·{" "}
              </>
            )}
            <strong>Basis:</strong>{" "}
            {d.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
          </p>
        </section>
      ))}

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates only. The dates that control are the ones printed on
          your notice and published by your county.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1:</strong> the valuation date. It sets the value for
          the <em>following</em> tax year, from sales up to that date.
        </li>
        <li>
          <strong>Before March 1:</strong> the notice of valuation arrives, with
          the full cash value, the limited property value and the class.
        </li>
        <li>
          <strong>Within 60 days of that mailing:</strong> the last day to file a
          petition for review with the assessor. The date is printed on the
          notice.
        </li>
        <li>
          <strong>August 15:</strong> if you requested a meeting, the outside
          date for the assessor to consider, decide and answer your requests.
        </li>
        <li>
          <strong>Third Monday in August:</strong> the board of supervisors sets
          the tax rates, which are applied to the net assessed limited value.
        </li>
        <li>
          <strong>Late September:</strong> possible amended notice — if one
          arrives, the 60-day petition window runs again from its mailing.
        </li>
        <li>
          <strong>October 1 and March 1:</strong> the two payment halves, with
          delinquency on November 1 and May 1 respectively.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the only deadlines you must look up
        locally are the mailing date on your own notice and your county&rsquo;s
        payment options; everything else in the appeal is a rule tied to a
        mailing or a decision.
      </p>
      <p>
        <strong>What it does not tell you:</strong> hearing dates, county
        practice on meetings with the assessor, or the interest and fee amounts a
        later stage may involve. Those come from the county.
      </p>

      <h2>Where the process fits</h2>
      <ul>
        <li>
          The filing standard and the ladder:{" "}
          <Link href="/arizona-property-tax/petition-for-review/">
            the petition for review
          </Link>
          .
        </li>
        <li>
          What to prepare:{" "}
          <Link href="/arizona-property-tax/appeal-evidence/">
            evidence for an Arizona appeal
          </Link>
          .
        </li>
        <li>
          Why the value moved:{" "}
          <Link href="/arizona-property-tax/full-cash-vs-limited-value/">
            full cash value vs limited property value
          </Link>
          .
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "az-const-art9-s18",
          "az-ars-42-15101",
          "az-ars-42-16051",
          "az-sboe-how-to-appeal",
          "az-pima-treasurer-info",
        ]}
      />
    </PageShell>
  );
}

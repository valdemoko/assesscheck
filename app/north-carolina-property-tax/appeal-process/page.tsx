import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/north-carolina-property-tax/appeal-process/",
  title: "The North Carolina Appeal Process: Informal, Board, Commission",
  description:
    "North Carolina's three-step appeal: the informal review by a county appraiser, the formal hearing before the Board of Equalization and Review whose window closes when it adjourns, and the 30-day appeal to the Property Tax Commission.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "North Carolina",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/north-carolina-property-tax/", label: "North Carolina Property Tax" },
        { label: "Appeal Process" },
      ]}
    >
      <h1>The Appeal Process: Informal, Board, Commission</h1>

      <p>
        North Carolina&rsquo;s appeal ladder has a feature no other state on
        this site has: the formal appeal window <strong>closes when the
        board adjourns</strong> — not on a calendar date set by statute, but
        on a date the county board&rsquo;s own schedule produces. Everything
        else (the informal review, the 30-day state appeal) is conventional.
        The Department&rsquo;s appeal-process page and Orange
        County&rsquo;s page, both read in full, supply the structure.
      </p>

      <h2>Step 1 — the informal review</h2>
      <p>
        The first step is an <strong>informal review by the county
        assessor&rsquo;s staff</strong> — a county appraiser, not a board,
        reviews the appeal and the evidence and sends a decision by mail or
        email. Orange County accepted informal appeals{" "}
        <strong>January 1 through March 31, 2026</strong>; other counties
        publish their own windows. The evidence the county asks for is the
        standard set: comparable sales close to the{" "}
        <Link href="/north-carolina-property-tax/revaluation-cycle/">
          revaluation date
        </Link>
        , appraisals, closing statements, photos, condition notes and
        repair estimates.
      </p>
      <p>
        <strong>What this tells you:</strong> the informal step is a real
        review by a professional appraiser — the person most able to
        recognize a valuation error. Treat it as the main event: a
        well-documented informal win ends the matter months before the
        board even convenes.
      </p>

      <h2>Step 2 — the Board of Equalization and Review</h2>
      <p>
        If the informal decision does not bring relief, the{" "}
        <strong>formal appeal</strong> is a hearing before the county{" "}
        <strong>Board of Equalization and Review (BOER)</strong> — a citizen
        board appointed by the county commissioners. The window has two
        anchors:
      </p>
      <ul>
        <li>
          <strong>Convening:</strong> the board convenes on a published
          date — the Department&rsquo;s guidance expects boards to convene
          around the <strong>first week of April</strong> (Orange
          County&rsquo;s convenes April 30, 2026).
        </li>
        <li>
          <strong>Adjournment:</strong> the filing window <em>closes when
          the board adjourns</em> — Orange County&rsquo;s formal period
          runs <strong>April 1 through June 30, 2026</strong>, &ldquo;when
          the Board adjourns.&rdquo;
        </li>
      </ul>
      <p>
        There is no filing fee and a lawyer is not required. But the end
        date is the board&rsquo;s own schedule — a board that finishes its
        docket early closes the window early, which is why your
        county&rsquo;s published dates are the operative ones and why
        filing early in the window is the safe play.
      </p>

      <h2>Step 3 — the Property Tax Commission</h2>
      <p>
        A BOER decision can be appealed to the state{" "}
        <strong>Property Tax Commission (PTC)</strong> in Raleigh{" "}
        <strong>within 30 days of the decision letter</strong>; the
        instructions come with the notice. The PTC is a genuine appellate
        board — it hears evidence and argument afresh — and its decisions
        can be appealed further to the <strong>NC Court of Appeals</strong>{" "}
        on legal or procedural issues.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with Orange County&rsquo;s published 2026
          dates as the example — your county&rsquo;s dates differ.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 5, 2026:</strong> informal appeal filed with
          three sales from early 2025 and a repair-estimate summary.
        </li>
        <li>
          <strong>February 2026:</strong> the county appraiser&rsquo;s
          informal decision arrives — value reduced from $480,000 to
          $465,000. Not enough; you continue.
        </li>
        <li>
          <strong>April 20, 2026:</strong> formal appeal filed — well
          inside the April 1 – June 30 window, avoiding the
          adjournment risk entirely.
        </li>
        <li>
          <strong>May 2026:</strong> BOER hearing; the decision letter
          mails June 10 holding the value.
        </li>
        <li>
          <strong>By July 10, 2026 (30 days):</strong> PTC appeal filed in
          Raleigh.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the informal decision
        anchors everything — it tells you what the assessor&rsquo;s
        office will defend, and the formal window is where that defense
        is tested. Waiting until the board&rsquo;s window is nearly
        closed is the one mistake the adjournment rule does not
        forgive.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        Each county&rsquo;s hearing procedures and PTC practice rules are
        outside this page. The Department&rsquo;s appeal-process page and
        Orange County&rsquo;s appeal page cited below are the authorities
        for the ladder and the example dates.
      </p>

      <SourceList
        sourceIds={["nc-dor-appeal-process", "nc-orange-appeal"]}
      />
    </PageShell>
  );
}

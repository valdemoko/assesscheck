import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/colorado-property-tax/protest-and-appeal/",
  title: "The Colorado Protest and the Appeal Path",
  description:
    "Colorado's appeal ladder: the May 1 – June 8 protest with the assessor, the Notice of Determination, the county board of equalization's two schedules, and the three routes beyond it — arbitration, district court, or the Board of Assessment Appeals.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Colorado",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/colorado-property-tax/", label: "Colorado Property Tax" },
        { label: "Protest and Appeal" },
      ]}
    >
      <h1>The Protest and the Appeal Path</h1>

      <p>
        Colorado&rsquo;s appeal structure starts with a{" "}
        <strong>protest</strong> — a conversation with the assessor, not yet
        a formal appeal — and then offers an unusual choice at the top of
        the ladder: after the county board, the owner picks among{" "}
        <strong>three different routes</strong> (arbitration, district
        court, or the state&rsquo;s Board of Assessment Appeals) with real
        trade-offs in cost, formality, and record.
      </p>

      <h2>Step 1 — the protest (May 1 through June 8)</h2>
      <p>
        An owner who disagrees with the actual value or the classification
        presents <strong>oral or written objections to the county
        assessor</strong> during the protest period —{" "}
        <strong>May 1 through June 8</strong> for real property. This is the
        cheapest, fastest step, and in revaluation years it is where most
        residential cases end: the assessor&rsquo;s staff can correct
        characteristics or correct the value on the spot.
      </p>
      <p>
        <strong>One structural fact to check first:</strong> counties with
        populations over 300,000 are <strong>required</strong> to use an
        alternate schedule, and any county may elect it. The alternate
        schedule moves every later step by roughly two months — the dates
        below are the standard schedule&rsquo;s.
      </p>

      <h2>Step 2 — the Notice of Determination</h2>
      <p>
        The assessor must decide the protest and mail a{" "}
        <strong>Notice of Determination (NOD)</strong>. On the standard
        schedule, the notice arrives in late June. This document — not the
        original NOV — starts the next deadline: the county-board appeal
        runs from its mailing.
      </p>

      <h2>Step 3 — the county board of equalization</h2>
      <p>
        If the NOD leaves you unsatisfied, you appeal to the{" "}
        <strong>county board of equalization (CBOE)</strong> — county
        commissioners or their appointees sitting as the appeal board:
      </p>
      <ul>
        <li>
          <strong>Standard schedule:</strong> the board sits from{" "}
          <strong>July 1</strong>, must conclude hearings and decide by{" "}
          <strong>August 5</strong>, and the owner is notified in writing
          within <strong>five business days</strong> of the decision.
        </li>
        <li>
          <strong>Alternate schedule (large counties):</strong> NOD by{" "}
          <strong>August 15</strong>, hearings from{" "}
          <strong>September 1</strong>, responses by{" "}
          <strong>November 1</strong>.
        </li>
      </ul>

      <h2>Step 4 — the choice: arbitration, district court, or the BAA</h2>
      <p>
        A CBOE decision can be appealed — <strong>within 30 days of the
        date the decision was mailed</strong> — to one of three bodies:
      </p>
      <ul>
        <li>
          <strong>An arbitrator</strong> — a paid, faster, record-limited
          route the owner pays for.
        </li>
        <li>
          <strong>The district court</strong> — the judicial route, formal
          and open-ended in cost, trying the value de novo.
        </li>
        <li>
          <strong>The Board of Assessment Appeals (BAA)</strong> — the
          state&rsquo;s administrative appeal board in Denver; the route
          that stays inside the state&rsquo;s system, at no filing cost,
          with a record the courts can later review.
        </li>
      </ul>
      <p>
        <strong>What this tells you:</strong> the choice is about money and
        formality as much as about the value. For a residential-scale
        dispute, the BAA is the usual recommendation of practice; for
        large commercial values, arbitration and district court exist
        precisely because the stakes justify them.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the 30-day clock from
        the CBOE decision&rsquo;s <em>mailing</em> date is unforgiving at
        every route — calendar it the day the decision arrives.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline on the standard schedule — your county&rsquo;s
          published dates control.
        </em>
      </p>
      <ol>
        <li>
          <strong>May 3, 2027:</strong> NOV arrives showing $512,000 (a
          revaluation year).
        </li>
        <li>
          <strong>May 20, 2027:</strong> written protest filed with
          comparable-sales evidence from the statutory window.
        </li>
        <li>
          <strong>Late June 2027:</strong> NOD arrives — value held. The
          CBOE appeal window is open.
        </li>
        <li>
          <strong>July 2027:</strong> CBOE hearing; decision mailed July 25
          with the value reduced to $495,000.
        </li>
        <li>
          <strong>By August 24, 2027 (30 days):</strong> petition to the BAA
          if the reduction is not enough — the administrative route, at no
          fee.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        The BAA&rsquo;s hearing procedures, arbitration rules, and
        district-court tax-appeal practice are outside this page. The
        Division&rsquo;s protests-and-appeals and understanding-property-taxes
        pages cited below are the authorities for the ladder and both
        schedules.
      </p>

      <SourceList
        sourceIds={["co-dpt-understanding", "co-dpt-protests-appeals", "co-dpt-property-tax-map"]}
      />
    </PageShell>
  );
}

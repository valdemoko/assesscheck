import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/new-york-property-tax/roll-and-grievance/",
  title: "The New York Roll, the Uniform Percentage, and Grievance Day",
  description:
    "How the New York assessment roll works: the valuation date and taxable status date, the uniform percentage and market-value estimate on the roll, the tentative roll on May 1, and the RP-524 grievance by Grievance Day.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New York",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/new-york-property-tax/", label: "New York Property Tax" },
        { label: "Roll and Grievance" },
      ]}
    >
      <h1>The Roll, the Uniform Percentage, and Grievance Day</h1>

      <p>
        Everything in a New York assessment flows from the{" "}
        <strong>assessment roll</strong> — and the roll carries three
        facts most owners never connect: a valuation date in the{" "}
        <em>previous</em> July, a market-value estimate printed next to
        every assessment, and a uniform percentage that varies by
        municipality. Reading those three correctly comes before any
        grievance.
      </p>

      <h2>Two dates, one fire (the Department&rsquo;s own example)</h2>
      <p>
        The <strong>valuation date</strong> — July 1 of the prior year in
        most communities — is the date the property&rsquo;s{" "}
        <em>value</em> is measured as of. The{" "}
        <strong>taxable status date</strong> — March 1 in most
        communities — is the date its <em>condition and ownership</em>{" "}
        are set as of; exemption applications are due by it. The
        Department&rsquo;s calendar gives the worked example: a January
        fire on a home valued the previous July 1 means it is assessed
        as a <em>vacant lot</em>; the same fire on March 15 is assessed
        as a house. The gap between valuation date and tentative roll is
        deliberate — it lets assessors and taxpayers use all available
        sales.
      </p>
      <p>
        <strong>What this tells you:</strong> comparable-sales evidence
        for a New York grievance should cluster around{" "}
        <strong>the prior July 1</strong>, not the present. An argument
        built on the current market is an argument about a date the law
        is not asking about.
      </p>

      <h2>The tentative roll and what is on it</h2>
      <p>
        The <strong>tentative assessment roll</strong> is public on{" "}
        <strong>May 1</strong> in most communities (and on the municipal
        website within ten days). For every taxable property it shows
        the <strong>assessment</strong>, the{" "}
        <strong>assessor&rsquo;s estimate of market value</strong>, and
        the <strong>uniform percentage</strong>. Only the assessment on
        the current <em>tentative</em> roll can be grieved — prior
        years&rsquo; rolls cannot.
      </p>

      <h2>Grievance Day: RP-524 to the Board of Assessment Review</h2>
      <p>
        The grievance — <strong>Form RP-524</strong> — is filed with the
        assessor or the <strong>Board of Assessment Review (BAR)</strong>{" "}
        by <strong>Grievance Day</strong>: the{" "}
        <strong>fourth Tuesday in May</strong> in most communities. The
        exceptions are the rule, not the anomaly, and the
        Department&rsquo;s page states each:
      </p>
      <ul>
        <li>
          <strong>New York City:</strong> March 15 (Class One) / March 1
          (other classes).
        </li>
        <li>
          <strong>Nassau County:</strong> March 1.
        </li>
        <li>
          <strong>Suffolk County towns:</strong> third Tuesday in May.
        </li>
        <li>
          <strong>Westchester County towns:</strong> third Tuesday in
          June.
        </li>
        <li>
          <strong>Villages that assess:</strong> typically the third
          Tuesday in February.
        </li>
        <li>
          <strong>Municipalities sharing an assessor:</strong> dates
          between the fourth Tuesday in May and the second Tuesday in
          June.
        </li>
      </ul>
      <p>
        A mailed form must be <strong>received</strong> by Grievance
        Day. There is no cost, and a lawyer is not required. And one
        option with teeth: on or before Grievance Day the owner and the
        assessor may <strong>stipulate</strong> to a reduced assessment —
        which then <strong>bars both further BAR review and judicial
        review for that year</strong>. A stipulation is a settlement,
        not a stepping stone.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative reading with made-up figures — your own roll
          controls.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs from the tentative roll:</strong> assessment
          $196,000; market-value estimate $490,000; uniform percentage
          40%.
        </li>
        <li>
          <strong>Step — the internal check:</strong> $196,000 ÷ 40% =
          $490,000 — the roll&rsquo;s own arithmetic is consistent.
        </li>
        <li>
          <strong>Step — the real question:</strong> is the{" "}
          <em>$490,000 market estimate</em> right as of last July 1?
          Sales from summer 2025 answer that; the assessment itself is
          just the estimate times the percentage.
        </li>
        <li>
          <strong>Step — the grievance:</strong> RP-524 filed with
          comparable sales near the valuation date, received by Grievance
          Day — and if the assessor offers a stipulated reduction you
          can live with, weigh it against the{" "}
          <Link href="/new-york-property-tax/judicial-review/">
            judicial route
          </Link>{" "}
          it forecloses.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        Small-claims hearings, certiorari, and the BAR&rsquo;s decision
        procedures are outside this page. The Department&rsquo;s
        grievance-procedures and property-tax-calendar pages cited below
        are the authorities for the dates and the exceptions.
      </p>

      <SourceList
        sourceIds={["ny-tax-grievance-procedures", "ny-tax-property-tax-calendar"]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/new-york-property-tax/",
  title: "New York Property Tax",
  description:
    "How New York property tax works: a uniform percentage of market value chosen by each municipality, the July 1 valuation date, the tentative roll on May 1, Grievance Day, and the 30-day judicial review that follows the final roll.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New York",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "New York Property Tax" }]}
    >
      <h1>New York Property Tax</h1>

      <p>
        New York&rsquo;s assessment system is <strong>municipal to its
        core</strong>: each city and town chooses its own{" "}
        <strong>uniform percentage of market value</strong>, values every
        parcel as of a <strong>July 1 valuation date</strong> (in most
        communities), publishes a <strong>tentative roll on May 1</strong>,
        and hears grievances on <strong>Grievance Day</strong> — the fourth
        Tuesday in May in most places, with major published exceptions. The
        roll itself prints the assessor&rsquo;s{" "}
        <strong>estimate of market value</strong> next to the assessment,
        which shapes what an honest appeal argues.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/new-york-property-tax/roll-and-grievance/">
            The roll, the uniform percentage, and Grievance Day
          </Link>{" "}
          — how the roll is built, what the two numbers on it mean, and how
          the grievance works.
        </li>
        <li>
          <Link href="/new-york-property-tax/judicial-review/">
            Judicial review: SCAR and certiorari
          </Link>{" "}
          — the 30-day window after the final roll, the small-claims route,
          and the Article 7 proceeding.
        </li>
        <li>
          <Link href="/new-york-property-tax/deadlines/">
            New York property tax deadlines
          </Link>{" "}
          — the full municipal calendar from July 1 through the two bill
          seasons.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The city or town assessor</strong> values every parcel at
          the municipality&rsquo;s chosen uniform percentage of market
          value and carries the roll.
        </li>
        <li>
          <strong>The Board of Assessment Review (BAR)</strong> — a local
          citizen board — hears grievances on Grievance Day.
        </li>
        <li>
          <strong>The State Department of Taxation and Finance</strong>
          publishes the calendar, the grievance procedures, and the{" "}
          <strong>equalization rates</strong> that reconcile the
          municipalities&rsquo; different uniform percentages.
        </li>
        <li>
          <strong>School districts and counties</strong> levy against the
          same roll — which is why the two bill seasons exist.
        </li>
      </ul>

      <h2>The two numbers on the roll</h2>
      <p>
        Every assessment on the roll sits next to the{" "}
        <strong>assessor&rsquo;s estimate of market value</strong> and the{" "}
        <strong>uniform percentage</strong> the municipality chose: a
        $500,000 house in a 40% town appears as a $200,000 assessment;
        the identical house in a 100% town appears as $500,000. Neither
        number means anything without the other — which is why a raw
        comparison between neighboring towns is meaningless, and why the
        honest grievance compares the assessment against{" "}
        <em>its own roll&rsquo;s</em> market estimate.
      </p>

      <h2>What this does not cover</h2>
      <p>
        New York City&rsquo;s class-based system, cooperative apartments,
        exemption programs (STAR, veterans, agricultural districts), and
        the special taxing districts are outside this section. AssessCheck
        has no data connection to any New York municipality or the
        Department of Taxation and Finance. RPTL sections are cited only
        where an official page names them.
      </p>

      <SourceList
        sourceIds={[
          "ny-tax-grievance-procedures",
          "ny-tax-property-tax-calendar",
          "ny-tax-equalization-rates",
          "ny-tax-fair-assessments",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/north-carolina-property-tax/revaluation-cycle/",
  title: "North Carolina Revaluation and the Valuation Date",
  description:
    "How North Carolina revaluation works: the eight-year statutory ceiling, per-county schedules, why appeals are argued on the last revaluation date's market, and the burden of proof with its two excluded arguments.",
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
        { label: "Revaluation Cycle" },
      ]}
    >
      <h1>Revaluation and the Valuation Date</h1>

      <p>
        North Carolina requires every county to reappraise real property{" "}
        <strong>at least once every eight years</strong> (G.S. 105-286, as
        the Department&rsquo;s page names it), and many counties revalue
        more often. Everything about an appeal — the value you argue, the
        evidence you bring, even which arguments the law allows — flows
        from one date: the county&rsquo;s{" "}
        <strong>most recent revaluation date</strong>.
      </p>

      <h2>Between revaluations, the value holds</h2>
      <p>
        The assessed value carries over from revaluation to revaluation.
        Off-cycle changes are limited by statute (G.S. 105-287) to what the
        property itself does: new construction, demolition, remeasurement,
        or similar physical and legal changes. A market boom or bust after
        the revaluation date does <em>not</em> change the value — by design.
      </p>
      <p>
        Orange County is the verified example: a revaluation effective{" "}
        <strong>January 1, 2025</strong>, the previous in 2021, the next
        planned for <strong>2029</strong>. Every appeal in that window —
        2025, 2026, 2027, 2028 — is argued on the property&rsquo;s worth{" "}
        <strong>as of January 1, 2025</strong>.
      </p>
      <p>
        <strong>What this tells you:</strong> the most common evidence
        mistake in North Carolina is bringing current-market comparables to
        a 2025-date value. Sales must be close to the{" "}
        <em>revaluation date</em> — a sale from last month proves little
        about a value set three years ago, and the board knows it.
      </p>
      <p>
        <strong>What it does not tell you:</strong> when your county
        revalues. The eight-year figure is a ceiling, not a schedule; each
        county&rsquo;s calendar is its own and is published locally.
      </p>

      <h2>The burden of proof is on the owner</h2>
      <p>
        North Carolina statutes put the <strong>burden of proof on the
        property owner</strong>, and the law is specific about what wins:
      </p>
      <ul>
        <li>
          The assessed value is more or less than{" "}
          <strong>market value as of the revaluation date</strong> — a
          market-value argument pinned to that date.
        </li>
        <li>
          Or the value is <strong>inconsistent with the assessments of
          similar properties</strong> — an equity argument, proven with
          sales and assessment data for comparable parcels.
        </li>
      </ul>
      <p>
        And two arguments the counties expressly exclude: the{" "}
        <strong>percentage increase or decrease</strong> in the value (the
        size of the change is not evidence of error — the revaluation
        itself explains it), and the owner&rsquo;s{" "}
        <strong>ability to pay</strong> the tax (irrelevant to value by
        statute).
      </p>
      <p>
        <strong>What this tells you:</strong> North Carolina is the state
        on this site where the evidence brief matters most, because the
        owner starts with the burden and a restricted list of arguments.
        Comparable sales near the revaluation date — or the equity
        comparison — are the two doors; everything else is preparation
        for the{" "}
        <Link href="/north-carolina-property-tax/appeal-process/">
          appeal process
        </Link>
        .
      </p>

      <h2>Personal property: listed every January</h2>
      <p>
        Real property needs no annual listing — it stays on the roll from
        revaluation to revaluation. <strong>Personal property is listed
        during January</strong> of each year with the county assessor: a
        separate obligation with its own deadline, and the trigger for the
        county&rsquo;s personal-property audits.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The reappraisal methodologies (sales, cost, and income approaches)
        and the present-use value program for agricultural and forestland
        are outside this page. The Department&rsquo;s pages and Orange
        County&rsquo;s revaluation page cited below are the authorities for
        the cycle and the statutes it names.
      </p>

      <SourceList
        sourceIds={["nc-dor-types-property-taxed", "nc-orange-revaluation", "nc-orange-appeal"]}
      />
    </PageShell>
  );
}

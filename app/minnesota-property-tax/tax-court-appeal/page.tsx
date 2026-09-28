import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/minnesota-property-tax/tax-court-appeal/",
  title: "The Direct Route to the Minnesota Tax Court",
  description:
    "Minnesota's direct Tax Court appeal: petitioning by April 30 of the year the taxes are payable without using the boards first, the Court's chapter 271 jurisdiction, and when the direct route makes sense.",
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
        { label: "Tax Court Appeal" },
      ]}
    >
      <h1>The Direct Route to the Minnesota Tax Court</h1>

      <p>
        Most states on this site require you to exhaust the administrative
        boards before a court will hear you. Minnesota does not: the{" "}
        <strong>Minnesota Tax Court</strong> accepts property tax petitions{" "}
        <strong>directly</strong>, whether or not the local and county boards
        ever heard the case — and the Department of Revenue&rsquo;s own
        appeal page says so plainly: &ldquo;you may choose to appeal directly
        to the Minnesota Tax Court.&rdquo;
      </p>

      <h2>The deadline: April 30 of the payable year</h2>
      <p>
        The petition must be filed <strong>by April 30 of the year the taxes
        are payable</strong> — the same one-year lag that governs everything
        in Minnesota. Anoka County&rsquo;s page gives the worked example: the
        deadline for the 2025 assessment is April 30, 2026, because 2025
        assessments produce taxes payable in 2026. The window opens when the
        valuation notice is received and runs a full year.
      </p>

      <h2>What the Court hears</h2>
      <p>
        The Tax Court is a <strong>specialized executive-branch court</strong>{" "}
        under <strong>Minnesota Statutes chapter 271</strong>, with three
        judges who have special expertise in tax law. Its own home page
        states its two dockets, and the second is the one that matters here:
        petitions of property tax <strong>valuations, classification,
        equalization, and/or exemptions</strong>. From the Court, review
        continues to the Minnesota Supreme Court.
      </p>
      <p>
        The Court is also the <em>next step after the boards</em>: an owner
        dissatisfied with the County Board&rsquo;s outcome petitions the same
        Court, by the same April 30 deadline. One docket serves both the
        skippers and the losers below.
      </p>

      <h2>When the direct route makes sense — and when it does not</h2>
      <ul>
        <li>
          <strong>Make sense:</strong> you missed the LBAE meeting (in a
          city that holds one) and the county level is closed to you; the
          value is large and you want a judge, not a lay board, from the
          start; or the dispute is legal-classification rather than
          neighborhood evidence.
        </li>
        <li>
          <strong>Does not:</strong> the boards are faster, free, informal,
          and local — the assessor who can correct an honest error sits
          across the table. For a routine residential disagreement, the
          board meetings are the rational first stop even though the law
          does not force them.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up dates — your own notice and the
          Court&rsquo;s forms control.
        </em>
      </p>
      <ol>
        <li>
          <strong>April 1, 2026:</strong> the Valuation Notice arrives
          showing $410,000 — you believe the market evidence supports about
          $370,000.
        </li>
        <li>
          <strong>April 2026 – April 2027:</strong> the petition window —
          open the whole time, boards used or not.
        </li>
        <li>
          <strong>Say you skipped the boards:</strong> file the petition in
          February 2027 (before April 30, 2027, the payable-year deadline)
          with the valuation notice and your sales evidence.
        </li>
        <li>
          <strong>2027:</strong> the Court schedules a trial (traveling
          panels hear cases around the state); its decision replaces the
          assessment for the payable 2027 year.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the year-long window makes the
        Tax Court the most forgiving deadline in the Minnesota system — but
        &ldquo;forgiving&rdquo; only reaches back one assessment year. The
        2024 assessment&rsquo;s window closed April 30, 2026, and no
        mechanism reopens it.
      </p>
      <p>
        <strong>What it does not tell you:</strong> litigation costs and
        timeline at the Court, and whether your case is better settled at a
        board — judgments only you and your advisors can make.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The Court&rsquo;s forms and filing mechanics, its local
        implementation of the settlement conference process, and
        Commissioner-of-Revenue appeals (the Court&rsquo;s other docket) are
        outside this page. The Court&rsquo;s site cited below is the
        authority for its jurisdiction.
      </p>

      <SourceList
        sourceIds={["mn-tax-court-home", "mn-dor-appealing", "mn-anoka-appeal"]}
      />
    </PageShell>
  );
}

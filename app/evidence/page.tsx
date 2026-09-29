import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/evidence/",
  title: "Evidence & Sources — What AssessCheck Relies On",
  description:
    "What evidence means in property-tax research, why it matters, what AssessCheck relies on, when official documentation is essential, and what this site can and cannot establish.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Evidence",
});

export default function EvidencePage() {
  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "Evidence & Sources" }]}>
      <h1>Evidence &amp; Sources</h1>
      <p>
        Every factual claim on AssessCheck is traceable to a source we can name,
        with the date we verified it. This page explains what that means in
        practice: what evidence is in property-tax research, why traceability
        matters, what this site relies on, and — just as important — what it
        cannot establish and when only official documentation will do.
      </p>

      <h2>What is evidence in property-tax research?</h2>
      <p>
        Evidence is information you can point to: the statute that sets a
        deadline, the notice that shows your assessed value, the recorded sale
        that supports an opinion of value, the assessor&rsquo;s own page that
        describes the appeal process. In property-tax work the distinction
        between a claim and evidence is practical, not academic — a review board
        weighs what you can document, and a homeowner comparing two websites
        needs to know which one cites the rule and which one is guessing.
      </p>

      <h2>Why evidence matters</h2>
      <ul>
        <li>
          Property-tax rules are jurisdictional. A percentage that is a cap in
          one state is a ratio in another and nothing at all in a third.
          Traceable sources are the only way to tell which rule actually
          applies to you.
        </li>
        <li>
          Figures change. Rates are adopted annually, exemption amounts move
          with legislation, and CPI-linked limits are recalculated. A claim
          without a verification date cannot be trusted past the moment it was
          written.
        </li>
        <li>
          Decisions with real money ride on this: whether to file a protest,
          which deadline governs, what figure to enter on a form. Those
          decisions deserve better than a number of unknown origin.
        </li>
      </ul>

      <h2>What AssessCheck relies on</h2>
      <p>
        Three layers, in priority order:
      </p>
      <ol>
        <li>
          <strong>Primary official sources.</strong> Statute text on official
          portals (Texas, Virginia, California, Arizona), administrative rules,
          state departments of revenue and taxation, county assessors,
          appraisers, treasurers and appeal boards. Every source we register is
          read — not assumed — and the registry records what was read and when.
        </li>
        <li>
          <strong>Official materials we could not read in full.</strong> Some
          government sites block automated access. Where that happened, we say
          so in the source record and cite only what the source&rsquo;s own
          official text (for example a search-result description) states.
        </li>
        <li>
          <strong>Our own calculations.</strong> The{" "}
          <Link href="/property-value-estimator/">property value estimator</Link>{" "}
          and the <Link href="/property-tax-checker/">assessment checker</Link>{" "}
          apply verified rules to figures you supply. The rules are sourced; the
          inputs are yours; the output is arithmetic, not data.
        </li>
      </ol>

      <h2>When this information can be useful</h2>
      <ul>
        <li>
          Understanding the notice you received — what each value on it means
          and which one the law attaches limits to.
        </li>
        <li>
          Deciding whether your assessment warrants a closer look, and what
          evidence would support your case if it does.
        </li>
        <li>
          Estimating how your state&rsquo;s system turns a value into a tax
          bill, before the bill arrives.
        </li>
        <li>
          Finding the official office, form and deadline that governs your
          situation, in your state.
        </li>
      </ul>

      <h2>When official documentation is essential</h2>
      <p>
        Some questions only the responsible authority can answer. Rely on your
        county assessor, property appraiser, tax collector, board of equalization
        or equivalent office — not this site — for:
      </p>
      <ul>
        <li>Your property&rsquo;s current official value and its history.</li>
        <li>
          The deadline that governs <em>your</em> parcel this year — many
          deadlines anchor to the date your specific notice was mailed or
          delivered.
        </li>
        <li>
          Which exemptions apply to you and their exact amounts, which vary by
          county and by your circumstances.
        </li>
        <li>
          The tax rate actually applied to your parcel, including special
          assessments and fees.
        </li>
        <li>Procedural requirements for filing, evidence exchange and hearings.</li>
      </ul>

      <h2>What AssessCheck can verify</h2>
      <ul>
        <li>
          The rules of each covered state: assessment ratios, cap mechanics,
          exemption structures, notice requirements and appeal ladders, each
          cited to the official source it was verified from.
        </li>
        <li>
          The arithmetic that connects those rules — what the{" "}
          <Link href="/property-value-estimator/">
            property value estimator
          </Link>{" "}
          and <Link href="/property-tax-checker/">assessment checker</Link>{" "}
          compute, shown step by step.
        </li>
        <li>
          Which sources say what, so you can read the primary document yourself
          instead of trusting a summary — ours included.
        </li>
      </ul>

      <h2>What AssessCheck cannot determine</h2>
      <ul>
        <li>
          Your property&rsquo;s correct value. No tool on this site values
          property; the estimator works from a figure you supply.
        </li>
        <li>
          Whether your assessment is wrong, or whether a protest, petition or
          appeal will succeed.
        </li>
        <li>
          Your actual tax bill, which depends on local rates, exemptions and
          special assessments that only your tax office can state.
        </li>
        <li>
          Legal, tax, appraisal or financial advice. This is an informational
          tool, and it is not affiliated with any government agency.
        </li>
      </ul>

      <h2>Our sources</h2>
      <p>
        The registry behind every page holds, for each source: the publisher,
        the exact URL, the date we verified it, what it supports, and notes
        recording what was read. The state-by-state official sources are listed
        on our <Link href="/resources/">resources page</Link>. How we select,
        verify and retire sources is described in our{" "}
        <Link href="/methodology/">methodology</Link>.
      </p>

      <h2>How we use sources</h2>
      <ul>
        <li>
          <strong>Claim-level citation.</strong> Pages that make factual claims
          render a Sources block; each cited source names the specific claim it
          supports.
        </li>
        <li>
          <strong>Verification dates, honestly.</strong> Sources record the date
          they were actually read. Where a page could not be read, the record
          says so rather than implying otherwise.
        </li>
        <li>
          <strong>No substitution.</strong> When a figure cannot be verified — a
          county rate, an exemption amount, a year&rsquo;s inflation multiplier —
          the pages say the figure is not available rather than publishing a
          placeholder. Where a whole tool would require unverified data, the
          tool is not built for that state.
        </li>
        <li>
          <strong>Contrast, not contamination.</strong> Each state&rsquo;s pages
          are written against that state&rsquo;s own vocabulary and statutes,
          and automated tests keep one state&rsquo;s law from drifting into
          another&rsquo;s pages.
        </li>
      </ul>

      <h2>Evidence for a protest or appeal</h2>
      <p>
        If you are preparing a protest, petition or appeal, the practical
        evidence guides cover what each kind of evidence — photographs, repair
        estimates, sales documentation, comparables, surveys — can and cannot
        show, starting with the{" "}
        <Link href="/evidence/property-tax-protest-evidence/">
          property tax protest evidence guide
        </Link>{" "}
        and the state-specific evidence pages linked from each{" "}
        <Link href="/property-tax-by-state/">state</Link>.
      </p>

      <h2>Important disclaimer</h2>
      <p>
        AssessCheck is an informational tool. It does not replace an official
        assessment, appraisal, tax bill, legal advice or professional valuation,
        and it is not affiliated with any appraisal district, property
        appraiser, or government agency. Verify current deadlines, values and
        procedures with the authority that governs your property.{" "}
        <Link href="/disclaimer/">Read the full disclaimer</Link>.
      </p>
    </PageShell>
  );
}

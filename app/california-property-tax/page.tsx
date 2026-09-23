import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/",
  title: "California Property Tax",
  description:
    "How California property tax works: the county assessor, the Proposition 13 base year value system, the Proposition 8 decline-in-value rule, and the difference between assessed and net taxable value.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "California Property Tax" }]}
    >
      <h1>California Property Tax</h1>

      <p>
        California assesses property on an entirely different principle from
        Texas or Florida. It does not reset most properties to market value every
        year. It anchors each property to a <strong>base year value</strong> and
        adjusts that figure annually, so two identical houses on the same street
        can carry very different assessments — lawfully.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/california-property-tax/proposition-13-and-8/">
            Proposition 13 and Proposition 8 explained
          </Link>{" "}
          — the 2%/CPI base year limit and the temporary decline-in-value rule.
        </li>
        <li>
          <Link href="/california-property-tax/decline-in-value/">
            The decline-in-value reduction
          </Link>{" "}
          — why a temporary reduction can move an assessed value well beyond 2%.
        </li>
        <li>
          <Link href="/california-property-tax/notice-of-assessed-value/">
            The notice of assessed value
          </Link>{" "}
          — why California does not send one to every owner every year.
        </li>
        <li>
          <Link href="/california-property-tax/assessment-appeal/">
            Filing an application for changed assessment
          </Link>{" "}
          — the county board, BOE-305-AH, and what the board can decide.
        </li>
        <li>
          <Link href="/california-property-tax/appeal-evidence/">
            Evidence for an assessment appeal
          </Link>{" "}
          — what the board may consider, and the burden-of-proof rules.
        </li>
        <li>
          <Link href="/california-property-tax/deadlines/">
            California property tax deadlines
          </Link>{" "}
          — the July 2 filing window, the payment calendar, and the county
          variable deadline.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> values property as of the January
          1 lien date, applies the base year value rules and exemptions, and does
          not set tax rates. California has 58 county assessors, each with its
          own public records and its own local practices.
        </li>
        <li>
          <strong>Your county&rsquo;s Assessment Appeals Board</strong> — a
          quasi-judicial body, or a hearing officer, under the board of
          supervisors — hears an application for changed assessment and
          determines the value. The application is filed with the{" "}
          <strong>clerk of the board</strong>, not with the assessor.
        </li>
        <li>
          <strong>The county tax collector</strong> mails the tax bill and
          collects the tax; the bill arrives in two installments, after the
          appeals window has already opened.
        </li>
        <li>
          <strong>The State Board of Equalization (BOE)</strong> acts in an
          oversight capacity over the 58 county assessors and publishes the
          statewide property tax guidance and calendar. It does not decide your
          value.
        </li>
      </ul>

      <h2>The four figures behind a California tax bill</h2>
      <ol>
        <li>
          <strong>Base year value</strong> — the market value of the property as
          established in 1975, or at the last change in ownership or completed
          new construction. Everything else is measured from this figure.
        </li>
        <li>
          <strong>Factored base year value</strong> — the base year value
          adjusted each year by the <em>lower</em> of the change in the
          California CPI or 2%. This is the ceiling for the property.
        </li>
        <li>
          <strong>Assessed value</strong> — the <em>lesser</em> of that factored
          base year value or the property&rsquo;s market value on January 1
          (a Proposition 8 decline-in-value reduction, which is temporary and
          reviewed every year).
        </li>
        <li>
          <strong>Net taxable value</strong> — the assessed value after any
          exemption or exclusion you qualify for (for example the
          homeowners&rsquo; exemption, which must be claimed). The general tax
          rate is applied to this figure.
        </li>
      </ol>
      <p>
        Note what is <em>not</em> in that list: the words &ldquo;appraised
        value&rdquo;. California paperwork uses different vocabulary from Texas,
        and mixing the two leads people to compare figures that mean different
        things.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up round numbers — not a valuation, not
          your property, and not a prediction. Real figures depend on your own
          base year value, your county&rsquo;s records, and the CPI factor for
          the year.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> the property was purchased in 2020 for
          $500,000, which established a base year value of $500,000. For this
          example we apply the full 2% factor each year (the real factor is the
          lower of the CPI change or 2%).
        </li>
        <li>
          <strong>Step — the factor:</strong> six annual 2% adjustments bring the
          factored base year value for 2026 to roughly <strong>$563,000</strong>.
          That is the ceiling, not the assessment.
        </li>
        <li>
          <strong>Step — the decline-in-value test:</strong> suppose the January
          1, 2026 market value is $520,000. Because that is <em>less</em> than the
          factored base year value, the assessor enrolls the lesser figure:{" "}
          <strong>$520,000</strong>.
        </li>
        <li>
          <strong>Result:</strong> the property is temporarily assessed below its
          Proposition 13 ceiling. The reduction is reviewed every January 1. If
          the market recovers, the assessed value can return toward the factored
          base year value (about $574,000 for 2027 in this example) — an increase
          far larger than 2% in a single year, and still lawful, because the
          ceiling is the base year value, not last year&rsquo;s assessment.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> in California, a large increase
        between two assessments is not by itself evidence of an error, and a
        large gap between your assessment and a neighbor&rsquo;s is not by itself
        evidence of unfairness either.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your base year value
        is right, whether a change in ownership was correctly recorded, what the
        CPI factor was for the year, or what your final tax bill will be (rates
        are set by local agencies and include voter-approved debt).
      </p>

      <h2>What this does not cover</h2>
      <p>
        County-specific procedures, local filing fees, and the filing deadline
        your own county sets are not covered on this site. AssessCheck has no
        data connection to any California county assessor, and there is no
        California screening tool here yet — see{" "}
        <Link href="/california-property-tax/proposition-13-and-8/">
          why a year-over-year comparison cannot screen California&rsquo;s limit
        </Link>
        .
      </p>

      <SourceList
        sourceIds={[
          "ca-boe-decline-in-value",
          "ca-cdtfa-important-dates",
          "ca-boe-property-tax-hub",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/appraised-value-vs-taxable-value/",
  title: "Appraised Value vs. Taxable Value in Texas",
  description:
    "Your appraised value and taxable value are different numbers. Exemptions and caps sit between them. Here is how the two connect.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Appraised Value vs. Taxable Value" },
      ]}
    >
      <h1>Appraised Value vs. Taxable Value</h1>

      <p>
        These two numbers are easy to conflate, and the distinction matters
        when you are deciding whether an assessment deserves a protest.
      </p>

      <h2>Appraised value</h2>
      <p>
        The appraised value is the appraisal district's determination of your
        property's value — generally its market value as of January 1. For a
        residence homestead, state law caps how much the appraised value can
        rise from one year to the next: for a homeowner who qualifies for the
        homestead exemption, the appraised value may not increase more than 10
        percent per year (plus the value of any new improvements), regardless
        of market value. The cap applies only to property receiving a residence
        homestead exemption and takes effect the January 1 after the first year
        you qualify.
      </p>
      <p>
        A separate "circuit breaker" limitation applies to certain
        non-homestead real property, capping annual appraised-value increases
        at 20 percent for eligible properties, subject to a maximum eligibility
        value that the Comptroller adjusts annually; that limitation is
        scheduled to expire after the 2026 tax year.
      </p>

      <h2>Taxable value</h2>
      <p>
        Taxable value is what your taxes are actually calculated on: the
        appraised value minus any exemptions that apply. A $300,000 home with a
        $140,000 school district homestead exemption is taxed by the school
        district as if it were worth $160,000. Taxing units may offer
        additional optional exemptions.
      </p>

      <h2>Why the difference matters for a protest</h2>
      <p>
        A protest challenges the appraised value. Lowering appraised value can
        lower taxes, but the connection is not one-to-one: exemptions,
        limitations, and each taxing unit's rate all sit between the two
        numbers. Also, the appraisal district does not set your tax rate — the
        governing bodies of your taxing units do. That is why "my taxes are too
        high" and "my appraised value is too high" are different claims, and the
        ARB hears the second one.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up round numbers — not a valuation,
          not your property, and not a prediction of any tax bill. Real bills
          depend on your actual values, exemptions, and each unit's adopted
          rate.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> appraised value $320,000 (up from $300,000
          last year); $100,000 homestead exemption; combined tax rate of
          $2.20 per $100 of taxable value.
        </li>
        <li>
          <strong>Step — taxable value:</strong> $320,000 − $100,000 =
          $220,000 taxable.
        </li>
        <li>
          <strong>Step — bill at current value:</strong> $220,000 × 2.20 / 100
          = <strong>$4,840</strong> (illustrative).
        </li>
        <li>
          <strong>Step — what a successful protest changes:</strong> if the
          appraised value came down to $300,000, taxable value becomes
          $200,000 and the illustrative bill becomes $4,400 — about $440 less
          at the <em>same</em> rates.
        </li>
      </ol>
      <p>
        <strong>What this suggests:</strong> the tax effect of a protest
        equals the value reduction times the combined rate — here 100:2.2, so
        every $1,000 of appraised value is worth about $22/year in this
        example.
      </p>
      <p>
        <strong>What it does NOT show:</strong> whether your value is wrong;
        whether rates would change; the effect of the homestead cap; or any
        guarantee of outcome. Your actual figures come from your notice and
        your taxing units' adopted rates.
      </p>

      <h2>Where to see both numbers</h2>
      <p>
        Your notice of appraised value lists the preceding year's appraised
        value and taxable value, the current year's appraised value, and the
        kind and amount of each exemption. See our page on{" "}
        <Link href="/texas-property-tax/property-tax-notice/">
          reading your property tax notice
        </Link>{" "}
        and on{" "}
        <Link href="/texas-property-tax/exemptions/">exemptions</Link>.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-valuing-property",
          "tx-tax-code-23-23",
          "tx-comptroller-exemptions",
          "tx-tax-code-25-19",
        ]}
      />
    </PageShell>
  );
}

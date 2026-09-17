import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/exemptions/",
  title: "Texas Property Tax Exemptions",
  description:
    "Homestead, age 65 or older, disabled, and veteran exemptions can remove part of your property's value from taxation. Who qualifies and how to apply.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Exemptions" },
      ]}
    >
      <h1>Texas Property Tax Exemptions</h1>

      <p>
        All real property in Texas is taxable in proportion to its appraised
        value unless the Texas Constitution authorizes an exemption. Exemptions
        remove a portion (or all) of a qualifying property's value from
        taxation, which lowers the taxable value your taxes are computed on.
        The chief appraiser determines whether property qualifies.
      </p>

      <h2>Residence homestead</h2>
      <p>
        A general residence homestead exemption applies to a home you own and
        use as your principal residence. School districts must provide a
        $140,000 exemption on a residence homestead. Taxing units may adopt an
        additional local option exemption of up to 20 percent of appraised
        value (not less than $5,000), and counties that collect
        farm-to-market or flood-control taxes must provide a $3,000 exemption.
        You must not claim a homestead exemption on another property in or out
        of Texas.
      </p>
      <p>
        The homestead exemption also activates the 10 percent annual cap on
        appraised-value increases described on our{" "}
        <Link href="/texas-property-tax/appraised-value-vs-taxable-value/">
          appraised vs. taxable value
        </Link>{" "}
        page.
      </p>

      <h2>Age 65 or older, or disabled</h2>
      <p>
        School districts must provide an additional $60,000 residence homestead
        exemption for homeowners who are age 65 or older or disabled. Taxing
        units may adopt additional local option exemptions of at least $3,000.
        For disability, the definition follows disability insurance benefits
        under the Federal Old-Age, Survivors and Disability Insurance Act
        administered by the Social Security Administration; benefits from other
        programs do not automatically qualify.
      </p>

      <h2>Disabled veterans and surviving spouses</h2>
      <p>
        Texas provides partial exemptions for disabled veterans based on a
        disability rating from the U.S. Veterans Administration, and total
        exemptions on a residence homestead in specific circumstances — for
        example, veterans awarded 100 percent disability compensation due to a
        service-connected disability, and surviving spouses of service members
        killed in the line of duty, in each case subject to statutory
        conditions. The application form for the partial exemption is Form
        50-135; the homestead-related exemptions use Form 50-114.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up round numbers — not a valuation,
          not your property, and not a prediction of your tax bill. Real
          amounts depend on your qualifications and each taxing unit's
          adopted exemptions and rates.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> appraised value $450,000; you qualify for
          the $140,000 school-district homestead exemption; the school
          district's rate is $1.00 per $100 of taxable value (illustrative).
        </li>
        <li>
          <strong>Step — school taxable value:</strong> $450,000 − $140,000 =
          $310,000.
        </li>
        <li>
          <strong>Step — school levy:</strong> $310,000 × 1.00 / 100 =
          <strong> $3,100</strong> (illustrative).
        </li>
        <li>
          <strong>Comparison:</strong> without the exemption the school levy
          would be $4,500 — the exemption is worth $1,400/year here at this
          rate.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a fixed-dollar exemption removes
        the same value from the calculation regardless of your home's worth,
        so its relative benefit is larger on a modest home than a costly one.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether you qualify; what
        other units (county, city, college) grant; or your total bill — and
        it does not suggest anything about protesting, which is a separate
        process.
      </p>

      <h2>How to apply</h2>
      <p>
        You generally must apply with the appraisal district in the county
        where the property is located. The general deadline for filing an
        exemption application is before May 1. In Harris County, the Harris
        Central Appraisal District accepts residential homestead applications
        online, including through its mobile app. See our{" "}
        <Link href="/texas/harris-county/">Harris County page</Link> for the
        official links.
      </p>

      <h2>Exemptions and protests are related but distinct</h2>
      <p>
        A protest challenges the appraised value; an exemption dispute concerns
        whether, or how much of, your value is exempt. Texas law (Tax Code
        § 41.41) lets you protest before the ARB the denial, in whole or in
        part, of a partial exemption, among other grounds.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-exemptions",
          "tx-tax-code-41-41",
          "hcad-homestead",
        ]}
      />
    </PageShell>
  );
}

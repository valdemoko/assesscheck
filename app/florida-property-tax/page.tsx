import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/",
  title: "Florida Property Tax",
  description:
    "How Florida property tax works: just value, assessed value, and taxable value, the property appraiser's role, and how the Value Adjustment Board review process differs from Texas.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Florida",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Florida Property Tax" }]}
    >
      <h1>Florida Property Tax</h1>

      <p>
        Florida property tax works differently from Texas, and the vocabulary
        is different too. Before comparing any numbers, it helps to know who
        does what and which of the three "values" on your paperwork is which.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/florida-property-tax/save-our-homes/">
            Save Our Homes and the caps
          </Link>{" "}
          — how the 3%/CPI limitation and the non-homestead 10% cap work.
        </li>
        <li>
          <Link href="/florida-property-tax/trim-notice/">
            The TRIM notice explained
          </Link>{" "}
          — the annual notice that starts the review window.
        </li>
        <li>
          <Link href="/florida-property-tax/vab-petition/">
            Filing a VAB petition
          </Link>{" "}
          — the process, deadlines, and requirements.
        </li>
        <li>
          <Link href="/florida-property-tax/vab-evidence/">
            Evidence for a VAB petition
          </Link>{" "}
          — what each kind of evidence can and cannot show.
        </li>
        <li>
          <Link href="/florida-property-tax/deadlines/">
            Florida property tax deadlines
          </Link>{" "}
          — the TRIM notice, both petition windows, the evidence exchange and
          the day the taxes are due.
        </li>
        <li>
          <Link href="/florida-property-tax/checker/">
            Florida assessment checker
          </Link>{" "}
          — enter two years of assessed values and see whether the change is
          larger than Save Our Homes allows. It runs in your browser and shows
          the arithmetic.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county property appraiser</strong> values every parcel
          each year as of January 1, administers exemptions, and does not set
          tax rates.
        </li>
        <li>
          <strong>Taxing authorities</strong> (county, school board,
          municipalities, special districts) set the tax rates — called
          millage rates — but do not value property.
        </li>
        <li>
          <strong>The tax collector</strong> mails tax bills and collects
          taxes; the bills arrive after the review process has closed.
        </li>
        <li>
          <strong>The Value Adjustment Board (VAB)</strong> is the county body
          that hears petitions disputing assessments and exemption denials.
        </li>
      </ul>

      <h2>The three values: just, assessed, taxable</h2>
      <p>
        This is where Florida most differs from Texas. Florida's chain has
        three steps, and the middle one does not exist in Texas:
      </p>
      <ol>
        <li>
          <strong>Just value</strong> — the property appraiser's determination
          of your property's value as of January 1. Florida law lists the
          factors that go into it: present cash value, highest and best use,
          location, size, cost and replacement value, condition, income, and
          net sale proceeds.
        </li>
        <li>
          <strong>Assessed value</strong> — just value after any{" "}
          <em>assessment limitation</em> applies. For homesteads this is the
          Save Our Homes limitation; for certain non-homestead residential
          property there is a separate 10% cap. In Texas, "assessed value"
          essentially means the appraised value — in Florida it means{" "}
          <em>post-cap</em> value, which is a different thing.
        </li>
        <li>
          <strong>Taxable value</strong> — assessed value minus exemptions
          (for example, the homestead exemption). Millage rates are applied to
          this figure.
        </li>
      </ol>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up round numbers — not a valuation,
          not your property, and not a prediction. Real figures depend on your
          property and your county.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> just value $400,000; last year's assessed
          value $330,000; the property has homestead exemption; your county's
          combined millage is 20 mills ($20 per $1,000 of taxable value,
          illustrative).
        </li>
        <li>
          <strong>Step — the cap:</strong> 3% of $330,000 is $9,900, so the
          highest assessed value allowed this year (before considering the CPI
          leg of the rule) is $339,900. Assessed value stays below just value,
          so the cap is doing work.
        </li>
        <li>
          <strong>Step — the exemption:</strong> the homestead exemption
          removes the first $25,000 of assessed value, plus up to another
          $25,000 of the value between $50,000 and $75,000 for non-school
          levies. Taxable value is $339,900 − $50,000 = <strong>$289,900</strong>{" "}
          (for non-school levies).
        </li>
        <li>
          <strong>Result:</strong> taxes (non-school) are computed on $289,900,
          not on the $400,000 just value — a gap of more than $110,000 created
          by the cap plus the exemption working together.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> in Florida, a big difference
        between just value and assessed value usually means the Save Our Homes
        limitation has been accumulating for years — it is not, by itself, a
        sign of an error.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your just value is
          right (that is a market-value question), what the actual CPI leg of
        the cap was this year, or your final bill (rates are set later, and
        school levies are computed differently).
      </p>

      <h2>What this does not cover</h2>
      <p>
        County-specific procedures, deadlines for a specific county, or any
        property appraiser's local practices are not covered on this site.
        AssessCheck has no data connection to any Florida property appraiser.
      </p>

      <SourceList
        sourceIds={["fl-stat-193-011", "fl-stat-193-155", "fl-stat-196-031"]}
      />
    </PageShell>
  );
}

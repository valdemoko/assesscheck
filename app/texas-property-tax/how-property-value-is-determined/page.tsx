import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/how-property-value-is-determined/",
  title: "How Property Value Is Determined in Texas",
  description:
    "Texas appraisal districts value property at market value as of January 1 using mass appraisal. Here is what that actually means for your assessment.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "How Property Value Is Determined" },
      ]}
    >
      <h1>How Property Value Is Determined in Texas</h1>

      <h2>The January 1 snapshot</h2>
      <p>
        With few exceptions, Texas appraisal districts must appraise taxable
        property at its market value as of January 1 of each tax year. Who owns
        the property on that date, and market conditions on that date, drive
        whether the property is taxable and at what value. Market conditions
        later in the year do not re-open the January 1 value.
      </p>

      <h2>Mass appraisal, not a house-by-house inspection</h2>
      <p>
        Appraisal districts value every parcel in the county — over a million
        properties in large counties — so they use <em>mass appraisal</em>:
        valuing groups of properties as of a common date using standard
        methodology, shared data, and statistical testing. Properties are
        classified by factors such as size, use, construction type, age, and
        location. Recent sales data is used to value typical properties in each
        class, and the district's model is then applied to individual
        properties. State law requires districts using mass appraisal to follow
        Uniform Standards of Professional Appraisal Practice (USPAP) and to use
        the same methods for similar properties.
      </p>
      <p>
        The practical consequence: your value is produced by a model that treats
        similar properties similarly. That is efficient, but it also means the
        model can miss things that make your property different from its class —
        which is exactly the kind of issue a review can surface.
      </p>

      <h2>The three appraisal approaches</h2>
      <p>
        Districts commonly use one or more of three approaches, depending on the
        property type:
      </p>
      <ul>
        <li>
          <strong>Sales comparison (market) approach.</strong> Compares the
          property to similar properties that recently sold, adjusting for
          differences. Typically preferred for single-family homes and vacant
          land when sales data is adequate.
        </li>
        <li>
          <strong>Income approach.</strong> Values a property based on its
          expected income stream. Suited to apartments, retail, and office
          properties.
        </li>
        <li>
          <strong>Cost approach.</strong> Estimates what it would cost to
          replace the improvements, applies depreciation, and adds land value.
          Used where sales and income data are scarce, for unique properties,
          and for new construction.
        </li>
      </ul>

      <h2>Reappraisal</h2>
      <p>
        State law requires appraisal districts to reappraise all property in
        their jurisdiction at least once every three years, though many review
        values more often.
      </p>

      <h2>What this means for you</h2>
      <p>
        Because your value comes from a mass-appraisal model, two checks matter:
        whether the model's <em>characteristics</em> for your property are right
        (square footage, condition, features), and whether the resulting value
        is consistent with genuinely comparable properties. The{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> is built
        around exactly those two checks.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up numbers — not a valuation and not
          a real property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> the model values homes in your class at
          about $185/sq ft of living area (illustrative class average). Your
          record shows 2,000 sq ft. Model-indicated value: 2,000 × 185 ≈
          <strong> $370,000</strong> — which is what appears on your notice.
        </li>
        <li>
          <strong>Step — check the characteristics:</strong> your actual
          living area is 1,750 sq ft; the record overstates it by 250. At the
          same class rate: 1,750 × 185 ≈ $324,000. A $46,000 discrepancy from
          one wrong fact.
        </li>
        <li>
          <strong>Step — check the rate:</strong> even with correct square
          footage, $185/sq ft might be high for your specific condition or
          location within the class — that is where comparable-property
          evidence comes in.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> in mass appraisal, a factual
        error in characteristics flows straight into value, and the class rate
        itself can be argued with comparables.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the actual class rate your
        district uses, whether your record is wrong, or what value an ARB
        would accept — those require your notice, your district's records, and
        evidence.
      </p>

      <SourceList
        sourceIds={["tx-comptroller-valuing-property", "tx-comptroller-basics"]}
      />
    </PageShell>
  );
}

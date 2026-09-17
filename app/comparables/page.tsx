import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/comparables/",
  title: "How Comparable Properties Work in Texas Protests",
  description:
    "Texas law defines comparability: sale recency windows and similarity factors. What counts as comparable — and what does not.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function ComparablesPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Comparable Properties" }]}>
      <h1>Comparable Properties</h1>

      <h2>Why comparability is a legal question in Texas</h2>
      <p>
        Texas law doesn't leave "comparable" to intuition. Tax Code § 23.013
        governs how the chief appraiser must use the market data comparison
        method, and its standards are the same ones worth applying when you
        evaluate your own assessment or assemble evidence.
      </p>

      <h2>The recency windows</h2>
      <p>
        A sale is generally not comparable unless it occurred within 24 months
        of the valuation date — but for residential property in a county with
        more than 150,000 people (Harris County included), the window is 36
        months, and the exception for thin samples does not apply there. Older
        sales must also be adjusted for market change between the sale date and
        the valuation date.
      </p>

      <h2>The similarity factors</h2>
      <p>
        Whether a property is comparable turns on similarities in: location,
        square footage of the lot and improvements, property age, property
        condition, property access, amenities, views, income, operating
        expenses, occupancy, and easements, deed restrictions, or other legal
        burdens affecting marketability. In designated historic districts,
        restrictions on altering property must also be considered.
      </p>

      <h2>What this rules out</h2>
      <p>
        A house three streets away with twice the living area is not comparable
        just because it is close. A renovated flip is not comparable to an
        original-condition home without adjusting for condition. And a listing
        price is not a sale: listings show asking prices, not what a willing
        buyer and seller agreed to.
      </p>

      <h2>How our tool handles comparables</h2>
      <p>
        It doesn't generate them. A comparison built on properties the tool
        cannot verify would be worse than none — it would look authoritative
        while being wrong. The checker instead screens the facts you enter and
        documents similarity factors for comparables you identify through your
        appraisal district's official search. See our{" "}
        <Link href="/methodology/">methodology</Link> and the{" "}
        <Link href="/property-tax-checker/">assessment checker</Link>.
      </p>

      <h2>The most common mistake</h2>
      <p>
        Judging your assessment against the property with the highest value on
        your street. § 23.013 compares your property to genuinely similar
        ones — not to the most expensive neighbor. If the properties you cite
        in a review are bigger, newer, or in better condition, the comparison
        proves the opposite of what you intend, and it can undercut an
        otherwise sound case. Screening your own value with the{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> before
        choosing comparables makes the direction of the comparison explicit.
      </p>

      <SourceList sourceIds={["tx-tax-code-23-013", "tx-comptroller-valuing-property"]} />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/evidence/property-condition/",
  title: "Property Condition Evidence for a Texas Protest",
  description:
    "How to document foundation problems, roof condition, deferred maintenance, and damage for a property tax protest — and why condition does not translate into a fixed percentage.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Evidence",
});

export default function PropertyConditionPage() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/evidence/", label: "Evidence" },
        { label: "Property Condition" },
      ]}
    >
      <h1>Property Condition Evidence</h1>

      <h2>Why condition can matter</h2>
      <p>
        Texas Tax Code § 23.013(d) lists property condition among the factors
        that determine whether properties are comparable, and the Comptroller's
        ARB guidance lists repair receipts and estimates among what owners
        should gather. If your property has a significant condition problem — a
        foundation issue, an aging roof, major deferred maintenance, damage —
        that evidence speaks to what a willing buyer would pay, which is what
        market value measures.
      </p>

      <h2>What condition evidence does not do</h2>
      <p>
        No official Texas source assigns a fixed percentage or dollar reduction
        for a given condition problem, and neither do we. Claims like
        "foundation damage reduces value by 20%" have no basis in the statutes
        or the Comptroller's guidance; value effects depend on the property,
        the market, and the evidence as a whole. Anyone who tells you a
        specific number applies automatically is guessing.
      </p>

      <h2>How to document condition</h2>
      <ul>
        <li>
          <strong>Photographs.</strong> Dated, wide and close, showing the issue
          and its context.
        </li>
        <li>
          <strong>Contractor estimates.</strong> Itemized, signed, and current —
          the Comptroller's guidance lists "receipts or estimates for repairs."
        </li>
        <li>
          <strong>Professional reports.</strong> Engineering reports are named
          in the official guidance for significant structural questions.
        </li>
        <li>
          <strong>Consistency.</strong> Make sure what you document matches the
          property record's description of your property; a mismatch with the
          district's characteristics is itself worth raising.
        </li>
      </ul>

      <h2>Repair now or document first?</h2>
      <p>
        We cannot tell you whether to repair before a hearing — that is a
        judgment about your property and market. What we can say: completed
        repairs with receipts and before/after photographs, and unrepaired
        conditions with estimates, are both recognized evidence forms. What
        tends to weaken an argument is neither: conditions asserted without any
        documentation.
      </p>

      <h2>Where condition fits in the protest</h2>
      <p>
        Condition evidence usually supports a market-value argument: that the
        appraised value exceeds what the property, in its condition, would
        bring under the statutory market-value definition. See the{" "}
        <Link href="/evidence/property-tax-protest-evidence/">evidence
        guide</Link> and the{" "}
        <Link href="/texas-property-tax/market-value/">market value</Link>{" "}
        explainer.
      </p>

      <SourceList
        sourceIds={["tx-comptroller-appraisal-protests", "tx-tax-code-23-013"]}
      />
    </PageShell>
  );
}

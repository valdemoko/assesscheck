import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/market-value/",
  title: "What 'Market Value' Means in Texas Property Tax",
  description:
    "Texas law defines market value as a cash-equivalent price under specific open-market conditions. The definition's details matter when you review an assessment.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Market Value" },
      ]}
    >
      <h1>What "Market Value" Means in Texas</h1>

      <h2>The statutory definition</h2>
      <p>
        Texas Tax Code § 23.01 requires appraisal districts to appraise taxable
        property at market value as of January 1, with exceptions (for example,
        productivity valuation for agricultural and timber land). Market value
        is the price at which a property would transfer for cash or its
        equivalent under prevailing market conditions if:
      </p>
      <ul>
        <li>
          it is offered for sale in the open market with a reasonable time for
          the seller to find a purchaser;
        </li>
        <li>
          both the seller and purchaser know of all the uses and purposes to
          which the property is adapted and for which it is capable of being
          used, and of the enforceable restrictions on its use; and
        </li>
        <li>
          both seek to maximize their gains and neither is in a position to
          take advantage of the other's need or demand.
        </li>
      </ul>

      <h2>What the definition rules out</h2>
      <p>
        The definition is hypothetical but specific. It describes an
        arm's-length sale: a willing seller with reasonable exposure time, a
        willing buyer, full knowledge, and no pressure on either side. A forced
        sale, a sale between relatives, or a distressed transaction does not fit
        the definition neatly. Conversely, conditions only your household
        cares about — what you paid for improvements you enjoy, your personal
        financial situation — are not part of the definition either. The ARB is
        instructed that it cannot take your personal economic situation into
        account.
      </p>

      <h2>Why this matters when reviewing your assessment</h2>
      <p>
        When you gather evidence — a recent sale, comparable properties,
        condition documentation — its relevance flows through this definition.
        Evidence of what a willing buyer and seller would agree to, under
        open-market conditions, speaks to market value. Evidence of personal
        circumstances does not.
      </p>

      <SourceList
        sourceIds={["tx-comptroller-valuing-property", "tx-comptroller-appraisal-protests"]}
      />
    </PageShell>
  );
}

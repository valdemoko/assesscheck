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
        { href: "/", label: "Home" },
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

      <h2>Worked example: testing a comparable against the definition (illustrative)</h2>
      <p>
        <em>
          Illustrative scenario with made-up numbers — not a valuation, not
          your property, and not a prediction of what the ARB will decide.
        </em>
      </p>
      <ol>
        <li>
          <strong>Scenario:</strong> your appraised value is $520,000. You
          find a sale at $455,000 in your neighborhood from eleven months
          ago.
        </li>
        <li>
          <strong>Step — check the sale against the definition:</strong> was
          it an arm's-length sale on the open market (not a relative-to-
          relative transfer, not a foreclosure, not a lease-option)? A
          distressed sale does not evidence the hypothetical transaction
          § 23.01 describes.
        </li>
        <li>
          <strong>Step — check recency and comparability:</strong> the
          statute's comparable-sale method expects sales within the lookback
          window and adjustments for differences in location, size, age,
          condition, access, and amenities. The sale is 11 months old —
          within the window. The comparable has 200 fewer square feet and no
          garage; you note both and adjust rather than ignore them.
        </li>
        <li>
          <strong>Step — state the conclusion:</strong> "An arm's-length sale
          11 months old, adjusted upward for the missing garage, supports a
          market value near $470,000, not $520,000."
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the definition is the test your
        evidence has to pass. A comparable that fails one element — a
        non-arm's-length sale, a sale outside the recency window, a property
        that differs in ways you cannot adjust for — weakens rather than
        supports your case, so it is better to filter your evidence through
        the definition before you file.
      </p>
      <p>
        <strong>What it does not tell you:</strong> what the district's own
        comparables show, how the ARB will weigh your adjustments, or whether
        a different method (income or cost) fits your property type better.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-valuing-property",
          "tx-comptroller-appraisal-protests",
          "tx-tax-code-23-013",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/appeal-evidence/",
  title: "Evidence for an Arizona Assessment Appeal",
  description:
    "What an Arizona petition for review must prove: the valuation method, at least one comparable in the same geographic area, the January 1 valuation date that limits your sales, and why the full cash value has no statutory cap.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Arizona",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/arizona-property-tax/", label: "Arizona Property Tax" },
        { label: "Appeal Evidence" },
      ]}
    >
      <h1>Evidence for an Arizona Assessment Appeal</h1>

      <p>
        Arizona does not simply ask you to disagree with a value. The statute
        requires the petition to state your opinion of the full cash value and
        the information that justifies it, expressed through a recognized
        valuation method. This page sets out what each method requires, and the
        two facts about Arizona evidence that decide most petitions.
      </p>

      <h2>Fact one: the full cash value has no cap, so you carry the burden</h2>
      <p>
        Arizona limits the limited property value, not the full cash value. There
        is no ceiling on how far the market value estimate may move, which means
        a petition cannot succeed by pointing at the size of the increase. The
        owner has to show that the value is above the actual market value — a
        county assessor states it bluntly: because there is no restriction on an
        increase in the full cash value, the owner is required to document why the
        assessment or valuation is incorrect. This is a different starting
        position from Texas, where a capped homestead can raise the size of the
        increase as a screening point, or from Florida, where the Save Our Homes
        limitation is itself part of the case.
      </p>

      <h2>Fact two: the valuation date limits your evidence</h2>
      <p>
        Property is valued as of January 1 of the valuation year, and the
        assessor works from sales up to that date — in practice a study spanning
        roughly the prior eighteen months. Sales that close after the valuation
        date say very little about a value set as of it, and the same is true of a
        market that turned afterwards. If your argument is that the market has
        since fallen, the evidence that matters is the evidence available for the
        valuation date itself.
      </p>

      <h2>What the petition must state, by method</h2>

      <h3>Market approach</h3>
      <p>
        The statute names this method with a specific requirement: it includes the{" "}
        <strong>full cash value of at least one comparable property in the same
        geographic area</strong>, or the sale of the subject property. Two
        practical consequences follow from that wording:
      </p>
      <ul>
        <li>
          <strong>&ldquo;Same geographic area&rdquo; is part of the standard.</strong>{" "}
          A comparable from another part of the county, or from a different
          market segment, is weaker evidence than the statute asks for. Assessors
          divide their counties into market areas precisely because location
          drives value.
        </li>
        <li>
          <strong>You must state a value for the comparable.</strong> A list of
          addresses with sale prices is not the same as the comparable&rsquo;s
          full cash value as the assessor records it. Using the assessor&rsquo;s
          own published records for that property gives you both the number and
          the source.
        </li>
      </ul>

      <h3>Income approach</h3>
      <p>
        Available where the property produces income, and it carries an
        additional information requirement in § 42-16052 — the statute expects the
        income, expense and capitalisation inputs, not a bottom-line opinion.
      </p>

      <h3>Cost approach</h3>
      <p>
        The cost to build or rebuild the property plus the land value. This is
        the method that most often exposes a factual error in the record:
        overstated living area, improvements that no longer exist, or a condition
        problem that the valuation has not reflected.
      </p>

      <h2>The evidence that is specific to Arizona: class and use</h2>
      <p>
        Because the ratio applied to your property depends on its legal class,
        and because the limited property value can be re-established when the
        physical use changes, evidence about class and use is often worth more
        than evidence about the market:
      </p>
      <ul>
        <li>
          <strong>Class three is the owner&rsquo;s primary residence.</strong>{" "}
          The statute defines class three as residential property occupied by
          the owner as the owner&rsquo;s primary residence (it also covers a
          residence occupied by a relative, and an owner-occupied home with
          lodgers), and class four as the residential class that catches what
          the others do not — including property solely leased or rented. A
          second or vacation home therefore belongs in class four, which is
          where county assessors place it following the 2012 change. Both
          classes are assessed at 10%, but class three receives a state aid to
          education reduction on the bill that class four does not, so a
          classification error has a direct monetary effect. To move a property
          to owner-occupied class three, the owner files an application for
          reclassification with the assessor.
        </li>
        <li>
          <strong>A change in occupant is not a change in use.</strong> The
          statute says so directly: a change in the occupant or in the
          classification of a single-family residence is not a change in use in
          itself. If a re-established limited value is attributed to a change of
          use that was really only a change of owner or tenant, that is a factual
          point the petition can make.
        </li>
        <li>
          <strong>Construction has a numeric threshold.</strong> A modification
          by construction, destruction or demolition re-establishes the limited
          value only when the total value of the modification is{" "}
          <strong>equal to or greater than 15% of the full cash value</strong>. A
          project below that threshold does not, and the arithmetic is a fact
          you can check against the notice.
        </li>
      </ul>

      <h2>How to assemble the evidence</h2>
      <ol>
        <li>
          <strong>Start with the notice and the assessor&rsquo;s record.</strong>{" "}
          Full cash value, limited property value, legal class, and the property
          characteristics the assessor used. Errors here are the most common and
          most fixable problem.
        </li>
        <li>
          <strong>Select comparables inside the same geographic area</strong> and
          confirm their full cash values in the assessor&rsquo;s records, not only
          their sale prices.
        </li>
        <li>
          <strong>Fix the valuation date.</strong> Keep sales that closed on or
          before January 1 of the valuation year; treat anything after it as
          background rather than proof.
        </li>
        <li>
          <strong>State your own opinion of the full cash value</strong>, and say
          which method produced it. The petition requires a number and a method,
          not a narrative.
        </li>
        <li>
          <strong>Use the right form.</strong> Class three uses its own form with
          simplified instructions; a letter does not substitute for the required
          form, and the Board of Equalization will not accept one.
        </li>
      </ol>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative preparation only, not a prediction of any outcome.
        </em>
      </p>
      <ol>
        <li>
          <strong>Claim:</strong> the assessor values the property at a full cash
          value of $400,000; the owner believes it is $360,000.
        </li>
        <li>
          <strong>Method stated:</strong> market approach. The owner identifies
          two homes in the same market area with full cash values of $355,000 and
          $365,000, plus a closed sale of the subject property from before the
          valuation date.
        </li>
        <li>
          <strong>Record check:</strong> the owner notices the assessor&rsquo;s
          record shows 2,400 square feet against a measured 2,150, which explains
          part of the gap. That correction is presented as a factual error.
        </li>
        <li>
          <strong>Expectation set correctly:</strong> the owner also checks that
          the limited property value is at the full cash value before assuming a
          reduction will change the bill. Where the limited value sits well below
          it, the appeal may correct the record without changing the tax base.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> in Arizona, the strongest petitions
        combine a small number of genuinely comparable properties with a
        correction of something factual in the record.
      </p>
      <p>
        <strong>What it does not tell you:</strong> how the assessor or a board
        will weigh your comparables, what weight the adjustments between homes
        carry, or whether the classification argument changes the bill.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/arizona-property-tax/petition-for-review/">
            The petition for review
          </Link>{" "}
          — the forms, the 60-day window and the appeal ladder.
        </li>
        <li>
          <Link href="/arizona-property-tax/full-cash-vs-limited-value/">
            Full cash value vs limited property value
          </Link>{" "}
          — the 15% construction threshold and the other re-establishment rules.
        </li>
        <li>
          <Link href="/comparables/">
            How comparable properties work
          </Link>{" "}
          — a general guide to selecting and presenting comparables.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "az-ars-42-16051",
          "az-ars-42-13302",
          "az-ars-42-12003",
          "az-ars-42-12004",
          "az-cochise-assessor-faq",
          "az-sboe-how-to-appeal",
        ]}
      />
    </PageShell>
  );
}

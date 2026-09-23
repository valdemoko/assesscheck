import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/proposition-13-and-8/",
  title: "Proposition 13 and Proposition 8: California's Assessment Limits",
  description:
    "How Proposition 13's 2%-or-CPI base year value limit works, how Proposition 8 decline-in-value reductions work, and why an assessed value can rise more than 2% in a year.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/california-property-tax/", label: "California Property Tax" },
        { label: "Proposition 13 & Proposition 8" },
      ]}
    >
      <h1>Proposition 13 and Proposition 8</h1>

      <p>
        Two voter-approved measures, passed four months apart in 1978, define how
        California property is valued. They are usually described as a
        &ldquo;2% cap&rdquo;, which is where most online explanations go wrong:
        they are not one limit, and the 2% does not apply to what you are
        probably comparing it with.
      </p>

      <h2>Proposition 13: the base year value and the 2% factor</h2>
      <p>
        Proposition 13 added Article XIII A to the California Constitution. The
        Board of Equalization summarises three effects:
      </p>
      <ul>
        <li>
          <strong>Rollback:</strong> most local real property assessments were
          rolled back to 1975 market value levels.
        </li>
        <li>
          <strong>Rate limit:</strong> the property tax rate is limited to 1%
          plus the rate needed to fund local voter-approved bonded indebtedness.
        </li>
        <li>
          <strong>Value limit:</strong> in most cases, future property tax
          increases are limited to a maximum of 2% per year.
        </li>
      </ul>
      <p>
        The figure that carries the 2% is the <strong>base year value</strong>:
        the market value established in 1975, or at the property&rsquo;s most
        recent change in ownership or completed new construction. Once a year
        that base year value is adjusted by the <em>lower</em> of the change in
        the California Consumer Price Index or 2%. The adjusted result has a name
        of its own — the <strong>factored base year value</strong> — and it is
        the ceiling for that property.
      </p>
      <p>
        Two consequences follow, and both matter more than the percentage:
      </p>
      <ul>
        <li>
          <strong>The limit is measured from an event, not from last
          year.</strong> A property bought in 2021 has a base year value from
          2021; the limit applies to that figure. Comparing this year&rsquo;s
          assessment with last year&rsquo;s answers a different question.
        </li>
        <li>
          <strong>The limit resets on transfer or new construction.</strong> A
          change in ownership or completed new construction establishes a new
          base year value at market value, which is why a recently purchased home
          can be assessed far above an identical neighbouring one. That is the
          system working as designed, not an error.
        </li>
      </ul>

      <h2>Proposition 8: the decline-in-value rule</h2>
      <p>
        Proposition 8 was passed later in 1978 and codified at § 51(a)(2) of the
        Revenue and Taxation Code. Its rule is short: if the property&rsquo;s
        market value on the January 1 lien date is <em>less</em> than its
        adjusted base year value, the assessor enrols the{" "}
        <strong>lesser</strong> of the two.
      </p>
      <p>
        Three details of Proposition 8 are routinely misstated, and they are the
        ones that matter when you are deciding whether to appeal:
      </p>
      <ol>
        <li>
          <strong>The reduction is temporary.</strong> The assessor reviews the
          assessment every year to decide whether the property should stay in
          decline-in-value status.
        </li>
        <li>
          <strong>An assessed value in decline-in-value status may rise by more
          than 2% in a year.</strong> The BOE states this explicitly. The
          protection is not &ldquo;no more than 2% each year&rdquo;; it is that
          the assessed value can never exceed the property&rsquo;s existing
          factored base year value absent a change in ownership or new
          construction.
        </li>
        <li>
          <strong>You do not benefit unless the market value falls below the
          ceiling.</strong> A home whose value falls but stays above its factored
          base year value keeps the same assessment.
        </li>
      </ol>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative numbers only. Neither the CPI factor nor your market value
          is published by this site.
        </em>
      </p>
      <ol>
        <li>
          <strong>Ceiling:</strong> base year value $500,000, adjusted at 2% a
          year for six years — factored base year value ≈ <strong>$563,000</strong>.
        </li>
        <li>
          <strong>Decline:</strong> January 1 market value $520,000, which is
          below the ceiling, so the assessor enrols <strong>$520,000</strong>.
        </li>
        <li>
          <strong>Recovery:</strong> the next year market value rises to
          $560,000. The assessment is no longer limited by the decline-in-value
          figure — it returns to the ceiling (≈ <strong>$574,000</strong> after
          another annual factor). Last year&rsquo;s $520,000 becomes $574,000:
          about <strong>10%</strong> in one year, with no rule broken.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> in California, the question to ask
        is not &ldquo;did my value jump more than 2%?&rdquo; but &ldquo;is my
        assessment above the lesser of my factored base year value or the
        property&rsquo;s market value on January 1?&rdquo;
      </p>
      <p>
        <strong>What it does not tell you:</strong> your own factored base year
        value, the CPI factor used for your year, or whether the change in
        ownership record that set your base year value is correct. Those come
        from your county assessor&rsquo;s records.
      </p>

      <h2>Why this site does not screen California values yet</h2>
      <p>
        The assessment checker published here compares{" "}
        <em>last year&rsquo;s figure</em> with <em>this year&rsquo;s figure</em>{" "}
        and flags a change that exceeds a state&rsquo;s statutory cap. That
        comparison is valid in Texas (10% over the prior year) and in Florida
        (Save Our Homes, 3% or CPI, over the prior year). It is{" "}
        <strong>not valid in California</strong>, because the lawful ceiling here
        is the factored base year value — a figure that has nothing to do with
        last year&rsquo;s assessment. Running a California property through that
        screen would produce a confident answer to the wrong question, so the
        tool is not offered for California. A California-specific screen would
        need your factored base year value and the applicable CPI factor, and is
        a later phase.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/california-property-tax/notice-of-assessed-value/">
            The notice of assessed value
          </Link>{" "}
          — when the assessor must (and need not) send one.
        </li>
        <li>
          <Link href="/california-property-tax/assessment-appeal/">
            The application for changed assessment
          </Link>{" "}
          — the only route to challenge the value.
        </li>
        <li>
          <Link href="/property-tax-by-state/">
            How each state limits assessment increases
          </Link>{" "}
          — Texas, Florida and California side by side.
        </li>
      </ul>

      <SourceList sourceIds={["ca-boe-decline-in-value", "ca-boe-appeals-faq"]} />
    </PageShell>
  );
}

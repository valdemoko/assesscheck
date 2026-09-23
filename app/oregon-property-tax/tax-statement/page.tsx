import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/oregon-property-tax/tax-statement/",
  title: "Your Oregon Property Tax Statement",
  description:
    "What Oregon's tax statement shows, when it arrives, how Measure 5 compression appears on it, why a bill can rise by more than 3%, and the November, February and May payment dates.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Oregon",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/oregon-property-tax/", label: "Oregon Property Tax" },
        { label: "Your tax statement" },
      ]}
    >
      <h1>Your Oregon Property Tax Statement</h1>

      <p>
        In Oregon the tax statement is also the document that starts the appeal
        clock. Counties mail it <strong>before October 25</strong>, and the state
        does not run a separate value-notice step of the kind other states use.
        So the statement is worth reading properly: it carries the three values,
        the levy code area that determines your rate, and — itemised — the
        amounts that fall outside the Measure 5 limits.
      </p>

      <h2>What is on it</h2>
      <ul>
        <li>
          <strong>The three values:</strong> real market value, maximum assessed
          value, and the assessed value that the rate is applied to.
        </li>
        <li>
          <strong>Your levy code area.</strong> Oregon properties are taxed by
          several jurisdictions at once, each with its own permanent rate, and the
          combination is your rate. Two identical houses can sit in different code
          areas and pay different rates.
        </li>
        <li>
          <strong>The itemised amounts:</strong> the levies inside the Measure 5
          limits, and separately the items <em>excluded</em> from them — bond
          levies and some special assessments — which are computed on assessed
          value and rate.
        </li>
        <li>
          <strong>The payment schedule:</strong> pay in full by November 15, or in
          up to three installments due November 15, February 15 and May 15. When
          the 15th falls on a weekend or holiday, the due date moves to the next
          business day.
        </li>
      </ul>

      <h2>How the amount was arrived at</h2>
      <p>Two calculations are performed each year and your bill is the lower:</p>
      <ol>
        <li>
          <strong>Assessed value &times; your code area&rsquo;s rate</strong>, plus
          special assessments; or
        </li>
        <li>
          <strong>Real market value &times; the Measure 5 limits</strong> — $5 per
          $1,000 for education and $10 per $1,000 for general government — plus
          the excluded items.
        </li>
      </ol>
      <p>
        When the second is lower, the property is <strong>compressed</strong>.
        Compression is not a discount you applied for and not a tax break for
        anything in particular: it is what happens when the rate applied to your
        assessed value would raise more than the fixed Measure 5 ceilings allow on
        your property&rsquo;s real market value.
      </p>

      <h2>Why your bill can rise by more than 3%</h2>
      <p>
        Because the 3% is not a limit on your bill. As the counties put it: the
        maximum assessed value is the only place a 3% limit applies, and tax
        amounts are not limited to a 3% increase from one year to the next. The
        stated causes of a larger increase are:
      </p>
      <ul>
        <li>
          <strong>A change in the tax rate for your levy code area</strong> — new
          local levies, a district boundary change, or an election result.
        </li>
        <li>
          <strong>Loss of compression savings</strong> — if your real market value
          falls far enough or rates rise enough that the Measure 5 calculation no
          longer limits you, the bill can move up to what the assessed value
          calculation produces.
        </li>
        <li>
          <strong>An exception event</strong> — new construction, an addition,
          renovation above the published threshold, a partition or rezoning, or
          disqualification from a special assessment.{" "}
          <Link href="/oregon-property-tax/changed-property-ratio/">
            The ratio page
          </Link>{" "}
          covers these.
        </li>
        <li>
          <strong>A combination of them</strong>, which is common.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative numbers only, and the rate is invented. Excluded items are
          ignored here, so the comparison is cleaner than a real bill.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> assessed value $330,000, real market value
          $520,000, illustrative rate $18.50 per $1,000.
        </li>
        <li>
          <strong>Calculation 1:</strong> 330 &times; $18.50 ={" "}
          <strong>$6,105</strong>.
        </li>
        <li>
          <strong>Calculation 2:</strong> 520 &times; $15.00 ={" "}
          <strong>$7,800</strong>.
        </li>
        <li>
          <strong>Bill:</strong> $6,105 — calculation 1 is lower, so nothing is
          compressed.
        </li>
        <li>
          <strong>The next year:</strong> the rate rises and the assessed value
          climbs, but the market value falls to $380,000. Calculation 1 is now
          $6,400 and calculation 2 is $5,700, so the bill is{" "}
          <strong>$5,700</strong> — compressed by $700. In the year after that, a
          small further fall in the market can reduce the RMV and therefore
          calculation 2, while a rise in the rate can raise calculation 1: the two
          move in opposite directions and the bill follows whichever is lower.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the two limits act on different
        figures, and a change to either one can be masked by the other. If your
        bill moved in a way that neither your value nor the 3% explains,
        compression is the first thing to check.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether any of the three
        values is right, and whether a correction to the real market value would
        reach your bill. Both questions are answered on the{" "}
        <Link href="/oregon-property-tax/appeal/">appeal page</Link>, including the
        two conditions under which a real market value reduction actually changes
        what you pay.
      </p>

      <h2>What this does not tell you either</h2>
      <ul>
        <li>
          <strong>Your county&rsquo;s exact mailing date.</strong> The statutory
          shape is before October 25; if your statement has not arrived by early
          November, contact the assessor rather than waiting, because the
          December 31 filing deadline does not move.
        </li>
        <li>
          <strong>Interest and penalty amounts for a late payment.</strong> They
          are set by statute and applied by the county; this site does not publish
          figures it has not read in an official source.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "or-multco-property-taxes",
          "or-multco-tax-calculation",
          "or-multco-assessment-faq",
          "or-yamhill-appeals",
        ]}
      />
    </PageShell>
  );
}

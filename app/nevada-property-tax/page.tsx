import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/",
  title: "Nevada Property Tax",
  description:
    "How Nevada property tax works: the July 1 fiscal year, taxable value and the 35% assessment ratio, who sets the rate, and the partial abatement that caps the tax bill rather than the value.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Nevada",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Nevada Property Tax" }]}
    >
      <h1>Nevada Property Tax</h1>

      <p>
        Nevada is the one state on this site whose limit is{" "}
        <strong>not a limit on value</strong>. It caps the{" "}
        <strong>tax bill</strong> — the amount of tax may not rise by more than
        3% a year for a claimed primary residence, or a larger figure for other
        property — and the county assessor says so in as many words: the tax caps
        do not limit the increase in assessed value, only the amount of increase
        on your tax bill. Once that is clear, the rest of the system makes sense,
        including the counterintuitive part: a Nevada bill can go{" "}
        <em>up</em> in a year when your assessed value goes down.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/nevada-property-tax/tax-cap-abatement/">
            The partial abatement
          </Link>{" "}
          — what is capped, what is not, and why a bill can rise when a value
          falls.
        </li>
        <li>
          <Link href="/nevada-property-tax/primary-residence-abatement/">
            The 3% primary residence abatement
          </Link>{" "}
          — how the claim works and what makes a property lose it.
        </li>
        <li>
          <Link href="/nevada-property-tax/value-notice/">
            Your value notice
          </Link>{" "}
          — what the assessor sends, when, and what it does not include.
        </li>
        <li>
          <Link href="/nevada-property-tax/value-appeal/">
            Appealing your value
          </Link>{" "}
          — the January 15 track at the county board, and the separate June 30
          abatement track.
        </li>
        <li>
          <Link href="/nevada-property-tax/evidence/">
            Evidence in a value appeal
          </Link>{" "}
          — the burden on the owner, and the inputs a cost-method figure is
          built from.
        </li>
        <li>
          <Link href="/nevada-property-tax/deadlines/">
            Nevada property tax deadlines
          </Link>{" "}
          — the lien date, the notice, both appeal windows and the four
          installments.
        </li>
      </ul>

      <h2>The fiscal year, not the calendar year</h2>
      <p>
        Nevada runs on a <strong>July 1 to June 30</strong> fiscal year. July 1 is
        the lien date, and a property&rsquo;s qualification status — whether it is
        the owner&rsquo;s primary residence, for example, which is what carries
        the 3% abatement — is set as of that date. A change of status in the
        middle of the year takes effect the following July 1, not immediately.
      </p>

      <h2>Four figures, in order</h2>
      <ul>
        <li>
          <strong>Taxable value</strong> — the assessor&rsquo;s determination of
          the property&rsquo;s value: the land at market value and the
          improvements at current replacement cost less statutory depreciation.
          It is recalculated as the property is reappraised, or factored forward
          using factors approved by the state.
        </li>
        <li>
          <strong>Assessed value</strong> — <strong>35% of the taxable value</strong>
          . This is the figure the tax rate is applied to. It is not the figure
          the tax cap limits.
        </li>
        <li>
          <strong>The calculated tax</strong> — the assessed value multiplied by
          the rate per hundred dollars. Rates are set in June.
        </li>
        <li>
          <strong>The bill you owe</strong> — the <em>lower</em> of the
          calculated tax or the previous year&rsquo;s bill plus the applicable
          cap percentage. The difference between the two is the{" "}
          <strong>abatement</strong>, and it appears on your tax bill.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> determines taxable value, mails
          the value notice, decides claims and abatement determinations, and
          reports assessed values to the taxing entities. The assessor does not
          set your tax rate and does not collect your tax.
        </li>
        <li>
          <strong>The Nevada Tax Commission</strong> sets the tax rates in the
          spring, from the budgets submitted by local governments, school
          districts, fire districts and the rest.
        </li>
        <li>
          <strong>The county treasurer</strong> prepares and mails the tax bill
          and collects it.
        </li>
        <li>
          <strong>The county Board of Equalization</strong> hears appeals about{" "}
          <em>value</em>. Abatement questions are a separate track: the assessor
          first, then the Nevada Tax Commission.
        </li>
      </ul>

      <h2>Two caps, two different things</h2>
      <p>
        Nevada limits the <em>rate</em> by one statute and the{" "}
        <em>change in your bill</em> by another. The Washoe County Assessor names
        the rate limitation as NRS 361.453 and notes that some rates are excluded
        from it; the abatement on the bill comes from NRS 361.471 through
        361.4735. Keeping them apart matters, because a bill can move for reasons
        that have nothing to do with either — see{" "}
        <Link href="/nevada-property-tax/tax-cap-abatement/">
          the partial abatement explained
        </Link>
        .
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative numbers only. The rate shown is made up — Nevada rates
          differ by district and are set each June — and no figure here is a
          valuation of any property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> the assessor&rsquo;s taxable value is
          $567,000. Last year&rsquo;s tax bill on the property was $6,200. The
          property is the owner&rsquo;s claimed primary residence.
        </li>
        <li>
          <strong>Step — assessed value:</strong> $567,000 &times; 35% ={" "}
          <strong>$198,450</strong>.
        </li>
        <li>
          <strong>Step — calculated tax:</strong> at an illustrative $3.50 per
          hundred dollars of assessed value, $198,450 &times; 0.035 ={" "}
          <strong>$6,945.75</strong>.
        </li>
        <li>
          <strong>Step — the cap:</strong> last year&rsquo;s bill plus 3% is
          $6,200 &times; 1.03 = <strong>$6,386.00</strong>.
        </li>
        <li>
          <strong>Result:</strong> the cap figure is lower than the calculated
          tax, so the bill is <strong>$6,386.00</strong> and the abatement is
          about <strong>$559.75</strong>. Note that the taxable value never
          entered that comparison.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> in Nevada the question worth asking
        is not &ldquo;did my value rise too much?&rdquo; but &ldquo;was the cap
        applied to my bill, and did I keep the level I am entitled to?&rdquo; The
        abatement level is printed on the bill itself.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the taxable value is
        correct. That is a separate question with a separate deadline, and it is
        the only one the county Board of Equalization decides. A value increase
        is not by itself a cap violation, and a cap that was applied correctly
        does not make the underlying value right.
      </p>

      <SourceList
        sourceIds={[
          "nv-washoe-assessor-faq",
          "nv-washoe-assessor-dates",
          "nv-washoe-abatement-appeal",
          "nv-clark-assessor-real-property",
          "nv-clark-tax-abatement",
          "nv-washoe-treasurer-billing",
        ]}
      />
    </PageShell>
  );
}

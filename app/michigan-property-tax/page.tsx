import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/",
  title: "Michigan Property Tax",
  description:
    "How Michigan property tax works: taxable value under Proposal A, the inflation-or-5% limit, the uncapping that follows a transfer of ownership, and where an appeal is heard.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Michigan",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Michigan Property Tax" }]}
    >
      <h1>Michigan Property Tax</h1>

      <p>
        Michigan is the one state on this site where the limitation on your taxes
        is removed by <strong>a legal event that has nothing to do with the
        property&rsquo;s value</strong>: a transfer of ownership. Voters approved
        that design in <strong>Proposal A</strong> in March 1994, and it made{" "}
        <strong>taxable value</strong> — not state equalized value — the figure
        the tax is calculated on. Everything else about the system follows from
        those two facts, including the thing that surprises new owners: a rise
        that looks impossible, and then a second bill that rises again.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/michigan-property-tax/taxable-value/">
            Taxable value and the inflation-or-5% limit
          </Link>{" "}
          — the capped value formula, why the multiplier can never exceed 1.05,
          and why additions enter it at half their value.
        </li>
        <li>
          <Link href="/michigan-property-tax/uncapping/">
            Uncapping on a transfer of ownership
          </Link>{" "}
          — why the taxable value becomes the state equalized value the year
          after a sale, and why a buyer&rsquo;s first bill is not the one that
          moves.
        </li>
        <li>
          <Link href="/michigan-property-tax/notice-of-assessment/">
            The notice of assessment
          </Link>{" "}
          — what arrives before the March boards, and the one line on it that
          decides whether the cap applies.
        </li>
        <li>
          <Link href="/michigan-property-tax/property-tax-appeal/">
            The appeal route
          </Link>{" "}
          — the March Board of Review, the two Tribunal windows, and what the
          county says evidence has to show.
        </li>
        <li>
          <Link href="/michigan-property-tax/deadlines/">
            Michigan property tax deadlines
          </Link>{" "}
          — Tax Day, the notice, the boards, both Tribunal dates and the
          principal residence affidavit.
        </li>
      </ul>

      <h2>The four figures, in order</h2>
      <p>
        Michigan puts four numbers between the property and the tax, and the
        order matters because each one is built from the last:
      </p>
      <ol>
        <li>
          <strong>Assessed value (AV)</strong> — determined by the local assessor
          as of <strong>December 31</strong>, and no more than 50% of true cash
          value.
        </li>
        <li>
          <strong>State equalized value (SEV)</strong> — the assessed value after
          county and state equalization.
        </li>
        <li>
          <strong>Capped value</strong> — last year&rsquo;s taxable value, less
          losses, multiplied by an inflation rate multiplier that is never more
          than 1.05, plus additions.
        </li>
        <li>
          <strong>Taxable value (TV)</strong> — the <em>lesser</em> of SEV or
          capped value, unless there was a transfer of ownership, in which case it
          becomes the SEV in the calendar year after the transfer.
        </li>
      </ol>
      <p>
        The millage rate is applied to the fourth figure. A rise in market value
        therefore does not, by itself, move your bill: SEV can climb while taxable
        value stays under the cap and the tax does not follow it.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Made-up round numbers, and an illustrative multiplier — not a
          valuation, not your property, and not a prediction. The multiplier for
          the current year is published by the State Tax Commission and this site
          does not reproduce it.
        </em>
      </p>
      <ol>
        <li>
          <strong>Start:</strong> last year&rsquo;s taxable value is $200,000 and
          the state equalized value is $230,000. The property is taxed on
          $200,000.
        </li>
        <li>
          <strong>The county applies the formula:</strong> with an illustrative
          inflation rate multiplier of 1.03 and no losses, the capped value is
          $200,000 × 1.03 = <strong>$206,000</strong>.
        </li>
        <li>
          <strong>You build a garage.</strong> Its true cash value is $40,000, but
          additions enter the formula at assessed value — half of true cash value
          — so the capped value becomes $206,000 + $20,000 ={" "}
          <strong>$226,000</strong>.
        </li>
        <li>
          <strong>Taxable value:</strong> the SEV is now $250,000, so the lesser
          of the two is $226,000. Your taxable value rose{" "}
          <strong>13%</strong> in a year when the limit is 5% — lawfully, because
          the addition is a term of the formula rather than an exception to it.
        </li>
        <li>
          <strong>Then you sell.</strong> The next calendar year&rsquo;s taxable
          value becomes the state equalized value, $250,000, and the limitation
          begins again from there the year after. That is a{" "}
          <strong>10.6%</strong> increase on the buyer&rsquo;s roll with no
          improvement to the property at all.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a Michigan taxable value that moves
        by more than 5% is not evidence of an error. Additions, losses and
        transfers of ownership all produce increases the limitation is designed to
        permit, and the notice states whether a transfer occurred.
      </p>
      <p>
        <strong>What it does not tell you:</strong> this year&rsquo;s multiplier,
        the millage rate in your city or township, or whether the figures the
        county used are right — that last one is argued at the{" "}
        <Link href="/michigan-property-tax/property-tax-appeal/">
          March Board of Review
        </Link>
        .
      </p>

      <h2>What this does not cover</h2>
      <p>
        Michigan&rsquo;s statute site and the State Tax Commission&rsquo;s
        guidance could not be read from this site, so two things are deliberately
        absent: the exact session requirement and dates of the March Board of
        Review, and the current year&rsquo;s inflation rate multiplier. Both are
        published by your local unit and by the state, and the pages that touch
        them say so rather than filling the gap from a summary.
      </p>

      <SourceList
        sourceIds={["mi-oakland-equalization", "mi-treasury-change-ownership"]}
      />
    </PageShell>
  );
}

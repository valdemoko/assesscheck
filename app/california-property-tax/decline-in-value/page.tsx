import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/decline-in-value/",
  title: "California Decline in Value: Proposition 8 Explained",
  description:
    "How a decline-in-value reduction works in California under Revenue and Taxation Code section 51: why it is temporary, why an assessed value can rise well above 2% in a year, and what it can never exceed.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/california-property-tax/", label: "California Property Tax" },
        { label: "Decline in value" },
      ]}
    >
      <h1>The decline-in-value reduction</h1>

      <p>
        A decline-in-value reduction is the one reason a California assessed
        value can move by much more than the 2% everyone associates with
        Proposition 13 — in both directions. It comes from Proposition 8, passed
        later in 1978 and codified at section 51(a)(2) of the Revenue and
        Taxation Code, and it is temporary by design. This page is about that
        rule on its own; the base year value it is measured against is on the{" "}
        <Link href="/california-property-tax/proposition-13-and-8/">
          Proposition 13 page
        </Link>
        .
      </p>

      <h2>What creates a decline in value</h2>
      <p>
        The test is a comparison, not a judgment about the market in general. If
        the property&rsquo;s market value on the <strong>January 1 lien date</strong>{" "}
        is <em>less</em> than its adjusted base year value for that year, the
        assessor enrolls the lesser of the two figures. The adjusted figure —
        the base year value grown each year by the lower of the California CPI
        change or 2% — is what it is compared against, not last year&rsquo;s
        assessed value.
      </p>
      <p>
        So a property can be in decline-in-value status in one year and out of it
        the next without anything happening to the property. What moves is the
        market value on the lien date, and the comparison is made fresh every
        January 1.
      </p>

      <h2>Why the reduction is temporary, in the statute&rsquo;s own terms</h2>
      <p>
        Subdivision (e) of section 51 is the part that surprises people. After a
        reduction under (a)(2), the property is <strong>reappraised annually</strong>{" "}
        at full cash value until that figure exceeds the value it would have had
        under (a)(1). While it is in that status, an increase above 2% in a
        single year is not a mistake and not a loss of the reduction — it is the
        rule working. The same subdivision also says the assessor{" "}
        <em>may not condition</em> the reappraisal on the filing of an assessment
        appeal, so restoring the value does not depend on whether you protest it.
      </p>
      <p>
        What the temporary reduction can never do is push the assessed value{" "}
        <em>above</em> the existing factored base year value. Absent a change in
        ownership or completed new construction, that figure remains the ceiling
        — which is also the reason a decline-in-value property usually has a
        lower assessment than a neighbor with the same market value and a later
        base year.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Made-up round numbers, chosen to show how the two figures interact —
          not a valuation, not your property, and not a prediction.
        </em>
      </p>
      <ol>
        <li>
          <strong>The two figures:</strong> the base year value is $400,000, and
          after years of annual adjustments the factored base year value for the
          year in question is $588,000. That second number is what the 2% factor
          applies to, and what the market value is compared against.
        </li>
        <li>
          <strong>A year in decline:</strong> the lien-date market value is
          $575,000. It is less than $588,000, so the assessed value is{" "}
          <strong>$575,000</strong> — the lesser of the two.
        </li>
        <li>
          <strong>The next year, the market falls further:</strong> market value
          $540,000, so the assessed value is $540,000. That is a{" "}
          <strong>6.1% decrease</strong> in one year, and no rule prevents it.
          The 2% figure governs how fast the factored base year value grows; it
          does not put a floor under the assessed value.
        </li>
        <li>
          <strong>Then the market recovers sharply:</strong> market value
          $610,000 against a factored base year value of $612,000. Because the
          market figure is still the lower one, the assessed value becomes
          $610,000 — a <strong>13% increase</strong> in one year, still lawful,
          and still below the ceiling.
        </li>
        <li>
          <strong>And then the decline-in-value status ends:</strong> market value
          $650,000. The factored base year value for that year is $624,000, so
          the assessed value returns to <strong>$624,000</strong> — not to
          $650,000. The property is back on the Proposition 13 track, growing
          from there by the lower of the CPI change or 2%.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> if your assessed value fell and then
        jumped, and there was no sale and no new construction, decline-in-value
        status is the usual explanation, and the number to compare against is the
        factored base year value — which appears on your notice or is available
        from the assessor.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the market value the
        assessor used is right. That is a separate question, argued to your
        county&rsquo;s assessment appeals board, and the{" "}
        <Link href="/california-property-tax/assessment-appeal/">
          appeal page
        </Link>{" "}
        covers it.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/california-property-tax/proposition-13-and-8/">
            Proposition 13 and Proposition 8 explained
          </Link>{" "}
          — the base year value, the 2%/CPI factor, and how the two measures fit
          together.
        </li>
        <li>
          <Link href="/california-property-tax/notice-of-assessed-value/">
            The notice of assessed value
          </Link>{" "}
          — when one is sent, and why California does not send one to every owner
          every year.
        </li>
        <li>
          <Link href="/california-property-tax/assessment-appeal/">
            Filing an application for changed assessment
          </Link>{" "}
          — the county board, the form, and what it can decide.
        </li>
        <li>
          <Link href="/california-property-tax/deadlines/">
            California property tax deadlines
          </Link>{" "}
          — the July 2 to September 15 filing window and the payment calendar.
        </li>
      </ul>

      <SourceList sourceIds={["ca-rtc-51", "ca-boe-decline-in-value"]} />
    </PageShell>
  );
}

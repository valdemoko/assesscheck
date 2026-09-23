import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { AssessmentChecker } from "@/components/tools/AssessmentChecker";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/checker/",
  title: "Florida Property Tax Assessment Checker",
  description:
    "Enter the assessed values from two years of TRIM notices and see whether the change exceeds the Save Our Homes limitation, with the arithmetic shown and a preparation checklist if you decide to petition the Value Adjustment Board.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Florida",
});

export default function FloridaCheckerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "Assessment Checker" },
      ]}
    >
      <h1>Florida Property Tax Assessment Checker</h1>

      <p>
        Florida is one of the two states on this site where the limit can be
        tested arithmetically from two notices, so this edition of the checker is
        offered here. It compares the <strong>assessed value</strong> on your
        TRIM notice with the assessed value on last year&rsquo;s, and — if your
        property held the homestead exemption in both years — shows whether the
        change is larger than the Save Our Homes limitation allows. Everything
        runs in your browser. See our <Link href="/privacy/">privacy page</Link>.
      </p>

      <h2>Enter the assessed value, not the market value</h2>
      <p>
        This is the one input this tool can get wrong for you, so it is worth
        stating plainly. Your TRIM notice carries three figures — market value,
        assessed value and taxable value — and Save Our Homes limits the{" "}
        <strong>assessed</strong> value. A homestead&rsquo;s market value may
        rise by far more than three per cent in a year without the limitation
        being breached; that is the entire point of the limitation. Enter the
        market value and the tool will flag an increase the law permits, which is
        worse than no answer at all.
      </p>

      <AssessmentChecker jurisdiction="Florida" jurisdictionId="florida" />

      <h2>What the result does and does not mean</h2>
      <ul>
        <li>
          <strong>It can tell you</strong> whether the change between the two
          assessed values you entered exceeds the lower of three per cent or the
          change in the Consumer Price Index — the two legs of § 193.155 — and
          it shows the arithmetic so you can check it.
        </li>
        <li>
          <strong>It cannot tell you</strong> whether your value is correct.
          Exceeding the limitation is a question about the{" "}
          <em>assessed</em> value; whether the figure was right in the first
          place is a question about the <em>market</em> value, and that is what a
          petition to the Value Adjustment Board is for.
        </li>
        <li>
          <strong>It does not know the year&rsquo;s CPI figure.</strong> The
          limitation is the lower of three per cent or the CPI change, and that
          number is published for each tax year. This site deliberately does not
          print it — a figure superseded every January would be wrong for most of
          the year — so where the CPI leg is the lower one, your own TRIM notice
          is the authority.
        </li>
        <li>
          <strong>It does not read your notice.</strong> You type the numbers.
          Nothing is fetched from a county property appraiser&rsquo;s office, and
          the result is not a valuation, not an appraisal, and not a prediction
          of how a Value Adjustment Board will rule.
        </li>
      </ul>

      <h2>Where the process goes from here</h2>
      <p>
        A petition about <em>valuation</em> goes to the county&rsquo;s Value
        Adjustment Board on or before the 25th day following the mailing of the
        assessment notice, and the TRIM notice states the date — see the{" "}
        <Link href="/florida-property-tax/vab-petition/">
          VAB petition page
        </Link>{" "}
        for what the petition has to say and where it is filed. What the board
        accepts as evidence, and what the counties specifically reject, is on the{" "}
        <Link href="/florida-property-tax/vab-evidence/">evidence page</Link>. If
        you want the whole calendar in one place, including what happens to your
        taxes while a petition is pending, that is the{" "}
        <Link href="/florida-property-tax/deadlines/">deadline page</Link>.
      </p>
      <p>
        One warning worth carrying into that process: a reduction in your{" "}
        <em>market</em> value does not necessarily reduce your{" "}
        <em>assessed</em> value, because the assessed value is already the lower
        of the limited figure and the market figure. If Save Our Homes is holding
        your assessed value well below the market value, winning a market-value
        reduction may change nothing on your bill. The{" "}
        <Link href="/florida-property-tax/save-our-homes/">
          Save Our Homes page
        </Link>{" "}
        sets out the two conditions under which a reduction does reach the bill.
      </p>

      <SourceList
        sourceIds={[
          "fl-stat-193-155",
          "fl-stat-193-1554",
          "fl-stat-194-011",
          "fl-dor-property-hub",
        ]}
      />
    </PageShell>
  );
}

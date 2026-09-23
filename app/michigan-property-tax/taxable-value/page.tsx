import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/taxable-value/",
  title: "Michigan Taxable Value and the Inflation-or-5% Limit",
  description:
    "The capped value formula explained: prior taxable value less losses, times the inflation rate multiplier, plus additions — and why additions enter at half their value.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Michigan",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/michigan-property-tax/", label: "Michigan Property Tax" },
        { label: "Taxable value" },
      ]}
    >
      <h1>Taxable value and the inflation-or-5% limit</h1>

      <p>
        Michigan&rsquo;s limit does not apply to a value on your notice. It
        applies to <strong>taxable value</strong>, and taxable value is
        calculated from last year&rsquo;s taxable value by a formula with four
        terms in it. That is why a Michigan assessment can rise by more than the
        headline percentage without anything being wrong.
      </p>

      <h2>The formula, term by term</h2>
      <p>
        The county states it as{" "}
        <strong>
          capped value = (prior taxable value − losses) × inflation rate
          multiplier + additions
        </strong>
        , and each term does something different:
      </p>
      <ul>
        <li>
          <strong>Prior taxable value</strong> — last year&rsquo;s figure, not the
          state equalized value. A property whose taxable value has drifted well
          below its SEV stays there.
        </li>
        <li>
          <strong>Losses</strong> — value that has come off the property
          (demolition, removal) is subtracted before the multiplier is applied, so
          the limit is not charged on value that no longer exists.
        </li>
        <li>
          <strong>The inflation rate multiplier (IRM)</strong> — the year&rsquo;s
          inflation change, and it{" "}
          <strong>cannot be greater than 1.05</strong>. That ceiling is what makes
          the rule &ldquo;inflation or 5%, whichever is less&rdquo;.
        </li>
        <li>
          <strong>Additions</strong> — new value added to the property, added{" "}
          <em>after</em> the multiplier is applied so that a new building is not
          itself multiplied.
        </li>
      </ul>

      <h2>Why an addition is only half added</h2>
      <p>
        This is the detail that makes the arithmetic look wrong at first.
        Additions enter the formula at <strong>assessed value</strong>, and
        Michigan&rsquo;s assessed value is half of true cash value. A $40,000
        garage therefore enters the capped value as $20,000 — visible in the
        county&rsquo;s own worked example, which adds 50% of the addition&rsquo;s
        true cash value for exactly this reason.
      </p>

      <h2>Taxable value is the lesser of two figures</h2>
      <p>
        Once the capped value is calculated, taxable value is the{" "}
        <strong>lesser of the state equalized value or the capped value</strong>.
        So the formula can only hold the tax base down, never raise it: if the SEV
        falls below the capped value, the SEV is what you are taxed on. The
        exception is a transfer of ownership, which is covered on the{" "}
        <Link href="/michigan-property-tax/uncapping/">uncapping page</Link>.
      </p>

      <h2>Where the state equalized value comes from</h2>
      <p>
        The SEV side of that comparison is not an appraiser&rsquo;s visit. It
        comes from a sales study — Michigan uses a <strong>24-month study</strong>{" "}
        when markets are increasing, with the timeframe set by the State Tax
        Commission — and county and state equalization then correct a local
        unit&rsquo;s assessment level toward the required 50% of true cash value.
        A rising market therefore shows up on this side of the comparison first.
      </p>
      <p>
        The practical consequence: in a rising market your SEV can climb a long
        way while your taxable value stays under the cap, and your bill does not
        follow the SEV at all. It moves when the cap moves.
      </p>

      <h2>What this does not cover</h2>
      <p>
        The multiplier for the current year is not published here. It is issued by
        the State Tax Commission in a bulletin this site cannot read, so the rule
        is stated with its ceiling and the number is left to your notice and to
        the state&rsquo;s own publication. Where the inflation leg is the lower
        one, that number is the one that applies to you.
      </p>
      <p>
        Nor does it cover the exempt transfers that keep a taxable value capped.
        That list is statutory, and the statute text could not be read from this
        site; the uncapping page states the rule and says where its statement of
        it comes from.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/michigan-property-tax/uncapping/">
            Uncapping on a transfer of ownership
          </Link>{" "}
          — the one event that removes the limitation entirely.
        </li>
        <li>
          <Link href="/michigan-property-tax/notice-of-assessment/">
            The notice of assessment
          </Link>{" "}
          — the line on it that says whether a transfer occurred.
        </li>
        <li>
          <Link href="/michigan-property-tax/property-tax-appeal/">
            The appeal route
          </Link>{" "}
          — where a classification, equity or value dispute is heard.
        </li>
        <li>
          <Link href="/michigan-property-tax/deadlines/">
            Michigan property tax deadlines
          </Link>{" "}
          — Tax Day, the notice and the filing windows.
        </li>
      </ul>

      <SourceList sourceIds={["mi-oakland-equalization"]} />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/full-cash-vs-limited-value/",
  title: "Arizona: Full Cash Value vs Limited Property Value",
  description:
    "Why an Arizona limited property value can rise by more than 5%, the complete list of statutory exceptions, and why the limited value can increase while the full cash value falls.",
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
        { label: "Full Cash Value vs Limited Property Value" },
      ]}
    >
      <h1>Full Cash Value vs Limited Property Value</h1>

      <p>
        &ldquo;My limited property value went up more than 5%&rdquo;
        and &ldquo;my full cash value went down but my value still went
        up&rdquo; are the two questions Arizona owners ask most. Both have a
        precise answer in the statute, and knowing which one applies to you
        decides whether you have a case at all.
      </p>

      <h2>What the statute says the limited property value is</h2>
      <p>
        A.R.S. § 42-13301 defines the limited property value in a single
        sentence: it is the limited property value of the property in the{" "}
        <strong>preceding valuation year plus 5% of that value</strong>
        . The next subsection adds the ceiling — the current limited property
        value <strong>may not exceed the current full cash value</strong>. The
        third makes clear that a parcel has one total limited property value:
        there is no separate limited value for the land and the improvements.
      </p>      <p>
        So the 5% is not a promise about your market value, and it is not a cap
        on the full cash value. Arizona does not limit the full cash value at
        all. The percentage applies to one figure only: last
        year&rsquo;s limited value.
      </p>
      <p>
        The same rule appears in the state constitution, which is where it came
        from: Article IX, section 18(3)(b) provides that for taxes levied
        beginning in Tax Year 2015 the value used is the <em>lesser</em> of the
        property&rsquo;s full cash value or an amount 5% greater than the prior
        year&rsquo;s value. That matters when you research your own property,
        because the earlier version of the same subsection used a different
        mechanism — 10% growth, or the prior value plus one-fourth of the gap to
        market, whichever was greater. Explanations written before the change
        still describe that convergence rule as if it applied today. It does not.
      </p>

      <h2>Why the limited value can rise while the full cash value falls</h2>
      <p>
        Because the formula runs from the prior year&rsquo;s limited value, and
        the full cash value is only a ceiling. When the gap between the two has
        grown large — which happens after several years in which the market rose
        faster than 5% a year — the limited value keeps climbing at
        5% even in a declining market, until it meets the full cash
        value. County assessors state this explicitly: the limited value can
        increase even when the current year&rsquo;s full cash value dropped, and
        in no case can the limited value exceed the full cash value.
      </p>
      <p>
        This is not a mistake in your notice. It is the mechanism doing what it
        was built to do, in the direction nobody advertises.
      </p>

      <h2>The complete list of exceptions: when that 5% does not apply</h2>
      <p>
        A.R.S. § 42-13302 lists the situations in which the limited property
        value is instead <strong>re-established</strong> at a level or percentage
        of full cash value that is comparable to other property of the same or a
        similar use or classification. If one of these applies to you, a jump
        larger than 5% is expected rather than anomalous:
      </p>
      <ol>
        <li>
          <strong>Property that was erroneously omitted from the rolls</strong> in
          the preceding tax year.
        </li>
        <li>
          <strong>A change in physical, objectively verifiable use</strong> since
          the preceding tax year. The statute is precise about what does not
          count: a change in the <em>occupant</em> or in the classification of a
          single-family residence is <strong>not</strong> a change in use in
          itself. Selling a house to a new owner does not, by itself, re-establish
          its limited value.
        </li>
        <li>
          <strong>Construction, destruction or demolition</strong> since the
          preceding valuation year, <strong>where the total value of the
          modification is equal to or greater than 15% of the full cash
          value</strong>. This is the threshold that matters most in practice: a
          project below it does not trigger a re-establishment, and a project at
          or above it does.
        </li>
        <li>
          <strong>A split, subdivision or consolidation</strong>, with the timing
          rules set out in the same section: property split between January 1 and
          September 30 of the valuation year is treated differently from property
          split between October 1 and December 31, and government-initiated
          actions are treated differently again.
        </li>
        <li>
          <strong>Loss of property valuation protection</strong> under Article
          IX, section 18(7) of the Arizona Constitution — for example, if title
          passes to a person who does not qualify, or the current owner no longer
          qualifies or did not reapply.
        </li>
        <li>
          <strong>Loss of a statutory valuation</strong> that the property
          previously qualified for.
        </li>
      </ol>

      <h2>Where the limitation does not apply at all</h2>
      <p>
        A.R.S. § 42-13304 excludes two categories from the limitation. For both,
        the <strong>full cash value is used for all purposes in lieu of the
        limited property value</strong>:
      </p>
      <ul>
        <li>personal property other than mobile homes;</li>
        <li>
          property in class one under § 42-12001, paragraphs 1 through 7, 11 and
          14.
        </li>
      </ul>
      <p>
        In other words, a property can be inside the 5% system or
        outside it depending on what it is, and the notice of valuation is where
        that shows up.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>Illustrative figures, with the thresholds applied as the statute states them.</em>
      </p>
      <ol>
        <li>
          <strong>Baseline:</strong> prior limited property value $300,000, no
          change in use and no construction. The new limited value is $315,000.
        </li>
        <li>
          <strong>Same property, with an addition:</strong> the owner builds an
          addition valued at $70,000 against a full cash value of $400,000. That
          is 17.5% of the full cash value — at or above the 15% threshold — so the
          limited value is re-established at a level comparable to similar
          property instead of last year&rsquo;s figure plus 5%. The
          arithmetic of the increase is a different exercise, and the result can
          exceed 5%.
        </li>
        <li>
          <strong>Same property, small project:</strong> an addition valued at
          $50,000 against the same $400,000 full cash value is 12.5% — below the
          threshold — so the 5% formula still governs the limited
          value, and the addition still enters the valuation through the full
          cash value and the assessor&rsquo;s records.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> before treating an LPV increase as
        an error, check the four practical questions — did the property change
        use, was there construction, destruction or demolition at or above 15% of
        the full cash value, was the parcel split or consolidated, and did a
        valuation protection end.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your full cash value
        is correct. That is a market-value question, it has no statutory cap
        behind it, and it is the question an appeal actually decides.
      </p>

      <h2>Why this site does not screen Arizona values yet</h2>
      <p>
        The assessment checker published here compares one year&rsquo;s figure
        with the previous year&rsquo;s and flags a change above a state&rsquo;s
        threshold. In Arizona that would be wrong twice: the label (an owner
        holds a <em>full cash value</em>, while &ldquo;assessed value&rdquo; in
        Arizona means the limited value multiplied by the class ratio, a much
        smaller number), and the logic (a re-established limited value under
        § 42-13302 lawfully exceeds 5%). An Arizona screen has to take
        both values and ask the re-establishment questions first, so it is a
        later phase rather than a checkbox added to a Texas-shaped form.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/arizona-property-tax/notice-of-valuation/">
            The notice of valuation
          </Link>{" "}
          — what arrives before March 1 and why a second notice can arrive later.
        </li>
        <li>
          <Link href="/arizona-property-tax/petition-for-review/">
            The petition for review
          </Link>{" "}
          — how the 60-day window runs.
        </li>
        <li>
          <Link href="/property-tax-by-state/">
            How each state limits assessment increases
          </Link>{" "}
          — Arizona next to Texas, Florida and California.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "az-const-art9-s18",
          "az-ars-42-13301",
          "az-ars-42-13302",
          "az-ars-42-13304",
          "az-cochise-assessor-faq",
        ]}
      />
    </PageShell>
  );
}

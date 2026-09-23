import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/oregon-property-tax/changed-property-ratio/",
  title: "Oregon's Changed Property Ratio and Exception Events",
  description:
    "Why new construction in Oregon is taxed on a fraction of its value: the changed property ratio, exception events and their published thresholds, the maintenance distinction, and what happens when part of a property is removed.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Oregon",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/oregon-property-tax/", label: "Oregon Property Tax" },
        { label: "New construction and the CPR" },
      ]}
    >
      <h1>Oregon&rsquo;s Changed Property Ratio and Exception Events</h1>

      <p>
        If you build in Oregon, the value added to your tax base is usually{" "}
        <strong>nothing like what you spent</strong>. That is not a loophole or a
        favor: it is the deliberate design of Measure 50, which set out to give
        new property the same starting advantage that existing property already
        had. The mechanism is a county ratio, published annually, called the{" "}
        <strong>changed property ratio</strong>.
      </p>

      <h2>What the ratio is</h2>
      <p>
        The changed property ratio is calculated each year by dividing the{" "}
        <strong>average maximum assessed value</strong> of all unchanged
        properties in the county by their{" "}
        <strong>average real market value</strong>, within the same property
        classification. There is a different ratio for residential, commercial,
        industrial and other classes, and it reflects how far the county&rsquo;s
        existing property has drifted from market value under the Measure 50
        limit.
      </p>
      <p>
        Hood River County publishes its own figures as an illustration: the
        residential ratio there has been below 60% for years and reached an
        all-time low of <strong>42.1%</strong> in 2022 — so a new residential home
        valued at $500,000 carried only{" "}
        <strong>$210,500 of taxable value</strong> ($500,000 &times; .421). The
        rest of the value existed, and was real market value, but it was not the
        tax base.
      </p>
      <p>
        One consequence is worth stating because it surprises people comparing
        identical houses: <strong>the same house can carry very different taxable
        values depending on when it was built</strong>. An older home has an MAV
        that has been growing slowly under the 3% formula since 1997; a home built
        last year enters at its market value multiplied by the current ratio.
      </p>

      <h2>What triggers an exception event</h2>
      <p>
        The MAV may rise by more than 3% for one reason only: an exception event.
        The published list is:
      </p>
      <ul>
        <li>
          <strong>New construction or additions</strong> valued above the
          published thresholds.
        </li>
        <li>
          <strong>Remodelling, renovation or rehabilitation</strong> above the
          same thresholds.
        </li>
        <li>
          <strong>Partitioning or subdivision</strong> of the property.
        </li>
        <li>
          <strong>Rezoning</strong>, where the property is used consistently with
          the new zoning.
        </li>
        <li>
          <strong>Discovery of omitted property</strong> that was not on the roll.
        </li>
        <li>
          <strong>Disqualification from an exemption or a special assessment</strong>
          , such as farm or forest use.
        </li>
      </ul>
      <p>
        The thresholds for construction and remodelling are published as dollar
        amounts — $18,700 in one year or $46,200 over five years at the time of
        writing — and the Department of Revenue{" "}
        <strong>indexes them to inflation</strong>, so the figures move and should
        be checked for your year. When an exception applies, the assessor does not
        revalue the whole property: it appraises the change and adds the resulting
        value to the MAV.
      </p>

      <h2>Maintenance is not an exception event</h2>
      <p>
        This is the distinction that decides a large share of Oregon assessment
        disputes, and the counties define it in writing.{" "}
        <strong>General ongoing maintenance and repair</strong> means work done as
        needed over a period of years — replacing a roof, repainting, fixing what
        breaks. <strong>Rehabilitation or renovation</strong> means many
        components replaced within a short period, which is what triggers
        exception value. New construction is appraised at cost in either case, but
        only the second kind adds value to the tax base through an exception.
      </p>

      <h2>&ldquo;I just bought the house and exception value appeared&rdquo;</h2>
      <p>
        Oregon counties answer this one directly, and the answer is structural:{" "}
        <strong>values and taxes are tied to the property, not the owner</strong>.
        A sale does not reset anything. What often happens is that the previous
        owner&rsquo;s unrecorded improvements — an addition, a finished basement,
        a permitted structure that never reached the assessor&rsquo;s file — are
        discovered at the time of transfer, and the exception value shows up on
        the new owner&rsquo;s roll. Reviewing the property record and the
        improvement history is a reasonable first step; the{" "}
        <Link href="/oregon-property-tax/appeal/">appeal page</Link> explains where
        a disagreement about it goes.
      </p>

      <h2>When part of a property disappears</h2>
      <p>
        Exception value can also come off. The administrative rule for demolition
        or removal sets out the five steps the assessor follows: perform the 103%
        test as if nothing had changed; find the real market value of the portion
        that was removed; subtract it from the prior year&rsquo;s total real market
        value to get the unaffected portion; express the unaffected portion as a
        percentage of the total; and apply that percentage to the unadjusted MAV.
      </p>
      <p>
        The rule&rsquo;s own example starts with an MAV of $87,379 and a
        $100,000 real market value, of which $75,000 was a house demolished on 1
        September; the adjusted MAV becomes <strong>$22,500</strong>. The point of
        publishing the arithmetic is that it is reviewable: a demolition does not
        leave the MAV untouched, and the proportion is the thing to check.
      </p>

      <h2>What this does not tell you</h2>
      <ul>
        <li>
          <strong>Your county&rsquo;s ratio.</strong> It is published yearly and
          differs by class and county; a low ratio in one county says nothing
          about the county next door.
        </li>
        <li>
          <strong>Whether an improvement cleared the threshold.</strong> The
          thresholds are indexed and apply per year and per five-year window, with
          the maintenance distinction on top. If you are close to a threshold,
          ask the assessor how the work was classified rather than assuming.
        </li>
        <li>
          <strong>That a high CPR is good news.</strong> A ratio near 100% means
          new construction is taxed close to its full value — which is worse for
          the owner building, and simply reflects how much of the county&rsquo;s
          existing property has drifted away from market value.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "or-hood-river-cpr",
          "or-multco-assessment-faq",
          "or-oar-150-308-0120",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/oregon-property-tax/measure-50-mav/",
  title: "Measure 50 and Oregon's Maximum Assessed Value",
  description:
    "How Oregon's maximum assessed value works: the 103% test as the greater of prior assessed value plus 3% or the prior MAV, the assessed value as the lower of MAV or real market value, and why an assessed value can lawfully jump.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Oregon",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/oregon-property-tax/", label: "Oregon Property Tax" },
        { label: "Measure 50 and the MAV" },
      ]}
    >
      <h1>Measure 50 and Oregon&rsquo;s Maximum Assessed Value</h1>

      <p>
        Measure 50, approved in 1997, replaced Oregon&rsquo;s levy-based system
        with permanent tax rates and created a second value for every property: a{" "}
        <strong>maximum assessed value</strong> that grows on its own schedule,
        separate from what the property is worth. Understanding the one formula
        behind it removes most of the confusion about Oregon assessments — and
        the formula is not the one most explanations give.
      </p>

      <h2>The 103% test, exactly as the rule states it</h2>
      <p>
        The administrative rule implementing the statute describes the test as
        being performed <em>as if the property had not changed</em>:
      </p>
      <ul>
        <li>multiply the <strong>prior year&rsquo;s assessed value</strong> by 1.03; and</li>
        <li>
          compare that with 100% of the <strong>prior year&rsquo;s maximum assessed
          value</strong>;
        </li>
        <li>
          the <strong>larger</strong> of the two becomes the current year&rsquo;s
          unadjusted MAV.
        </li>
      </ul>
      <p>
        That last word matters. Because the test compares against the prior
        year&rsquo;s <em>assessed</em> value as well as the prior MAV, a property
        that has been taxed below its MAV — which happens whenever the real
        market value has been lower than the limit — can see its MAV rise by{" "}
        <strong>more than 3% in a single year with nothing done to the property</strong>
        . The percentage is not a promise that the limit moves by 3%; it is a
        formula, and the formula can outrun 3%.
      </p>

      <h2>And then the assessed value is the lower of two</h2>
      <p>
        The MAV is a ceiling, not a tax base. The figure the tax rate is actually
        applied to is the assessed value:{" "}
        <strong>the lower of the MAV or the real market value</strong>. Two
        consequences follow, and both of them bite in real life:
      </p>
      <ul>
        <li>
          <strong>A falling market does reach your bill</strong> — through the
          assessed value, once the RMV drops below the MAV. It just does not
          lower the MAV, which keeps climbing in the background.
        </li>
        <li>
          <strong>An assessed value can jump far beyond 3%</strong> when the RMV,
          having sat below the MAV for years, rises above it again. The counties
          name that as one of the two reasons an assessed value increases
          sharply, the other being an exception event.
        </li>
      </ul>

      <h2>Where the first MAVs came from</h2>
      <p>
        Measure 50 did not start the limit from each property&rsquo;s market
        value. It redefined assessed value as <strong>90% of the 1995-96 assessed
        value</strong>, and set each property&rsquo;s first MAV for 1997-98 as the{" "}
        <strong>1995-96 real market value less 10%</strong>. Because those two
        bases are different, some properties came into the system with an MAV
        below their market value and some closer to it — which is exactly the gap
        that the changed property ratio later measures and reuses for new
        construction.
      </p>

      <h2>When the MAV may rise by more than 3%</h2>
      <p>
        Only one thing does it: an <strong>exception event</strong>. The
        published list covers new construction or additions, and remodelling,
        renovation or rehabilitation, above thresholds the Department of Revenue
        publishes and indexes to inflation; partitioning or subdivision;
        rezoning where the property is used consistently with the new zoning; the
        discovery of omitted property; and disqualification from an exemption or
        special assessment. Ordinary ongoing maintenance and repair is{" "}
        <em>not</em> an exception event — a distinction the counties spell out
        because it decides a lot of arguments. The{" "}
        <Link href="/oregon-property-tax/changed-property-ratio/">
          changed property ratio page
        </Link>{" "}
        takes that list apart.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative numbers only. This shows how the limit behaves, not what
          any property is worth.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> last year&rsquo;s assessed value was $240,000,
          last year&rsquo;s MAV was $310,000, and this year&rsquo;s real market
          value is $390,000.
        </li>
        <li>
          <strong>Step — the 103% leg:</strong> $240,000 &times; 1.03 = $247,200.
        </li>
        <li>
          <strong>Step — the MAV leg:</strong> $310,000.
        </li>
        <li>
          <strong>Step — the greater:</strong> the MAV is{" "}
          <strong>$310,000</strong>, which is 29% above the prior year&rsquo;s
          assessed value — with no work done to the property.
        </li>
        <li>
          <strong>Step — the assessed value:</strong> the lower of $310,000 (MAV)
          or $390,000 (RMV) is <strong>$310,000</strong>.
        </li>
        <li>
          <strong>Then the market falls:</strong> if the RMV were $280,000, the
          assessed value would be the lower of $310,000 or $280,000 —{" "}
          <strong>$280,000</strong> — so the bill falls even though the MAV
          limit is unchanged.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> &ldquo;the MAV rose 29%,&rdquo;
        &ldquo;the MAV rose 3%&rdquo; and &ldquo;my taxes rose 29%&rdquo; are
        three different statements. Only the last one is about your bill, and it
        depends on the assessed value, your rate and compression.
      </p>
      <p>
        <strong>What it does not tell you:</strong> that disputing the MAV is
        usually the route to a lower bill. It can be, in the situations where the
        county board has jurisdiction over MAV, SAV or AV — but if your MAV sits
        above your RMV, your bill is driven by the RMV, and that is the figure to
        challenge with market evidence.
      </p>

      <h2>What this does not tell you either</h2>
      <ul>
        <li>
          <strong>The size of the exception thresholds in your year.</strong> They
          are published and indexed to inflation, so the figures in circulation
          go stale.
        </li>
        <li>
          <strong>Whether a particular repair or upgrade is maintenance or
          rehabilitation.</strong> The counties describe the difference in terms
          of how many components are replaced and over what period; a
          borderline case is worth asking the assessor about before it becomes
          an appeal.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "or-oar-150-308-0120",
          "or-multco-assessment-faq",
          "or-hood-river-cpr",
        ]}
      />
    </PageShell>
  );
}

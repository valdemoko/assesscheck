import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/save-our-homes/",
  title: "Save Our Homes and Florida's Assessment Caps",
  description:
    "How the Save Our Homes 3%/CPI limitation works for homesteads, how the separate 10% non-homestead residential cap works, and what resets each one.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Florida",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "Save Our Homes & Caps" },
      ]}
    >
      <h1>Save Our Homes and Florida's Assessment Caps</h1>

      <p>
        Florida has <strong>two different assessment caps</strong>, and they
        are not interchangeable. Confusing them is the single most common
        mistake in online explanations of Florida property tax.
      </p>

      <h2>1. Save Our Homes (homestead property)</h2>
      <p>
        For property receiving the homestead exemption, the assessed value may
        not increase in a year by more than the <strong>lower</strong> of:
      </p>
      <ul>
        <li>3% of the assessed value for the prior year, or</li>
        <li>the percent change in the Consumer Price Index (CPI) for the preceding calendar year.</li>
      </ul>
      <p>
        Because the limit is the <em>lower</em> of the two, the effective limit
        changes every year — it is not a flat "3% annual cap" the way Texas's
        10% rule works. If the capped assessed value would ever exceed just
        value, it is lowered to just value.
      </p>

      <h2>What resets Save Our Homes</h2>
      <ul>
        <li>
          <strong>Change of ownership:</strong> the property is assessed at
          just value on January 1 of the year following the change (with
          statutory exceptions, such as transfers between spouses, certain
          transfers to surviving owners, and other enumerated situations).
        </li>
        <li>
          <strong>Additions or improvements:</strong> assessed at just value
          the first January 1 after substantial completion — the cap never
          covered new construction.
        </li>
        <li>
          <strong>Losing the exemption:</strong> ends the limitation.
        </li>
      </ul>
      <p>
        Florida also has a <strong>portability</strong> provision: part of the
        accumulated benefit can transfer to a new Florida homestead. The
        specifics are beyond this site's scope; confirm them with the property
        appraiser.
      </p>

      <h2>2. The non-homestead residential cap</h2>
      <p>
        A separate rule limits residential property with{" "}
        <strong>nine or fewer dwelling units</strong> that does{" "}
        <strong>not</strong> receive the homestead exemption: the assessed
        value may not increase more than <strong>10%</strong> of the prior
        year's assessed value — but only for levies other than{" "}
        <strong>school district</strong> levies. It has its own
        change-of-ownership reset rules, including transfers of more than 50%
        of the owning entity.
      </p>
      <p>
        <strong>Do not confuse this with the Texas 10% homestead cap.</strong>{" "}
        They share a number, nothing else: Florida's 10% cap applies to
        non-homestead residential and excludes schools; Texas's 10% cap
        applies to homesteads.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative example with made-up numbers — the real annual limit
          depends on the applicable CPI change for the year, which this site
          does not publish.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> last year's assessed value $320,000; this
          year's just value $390,000; homestead exemption in place.
        </li>
        <li>
          <strong>Step — the fixed leg:</strong> 3% of $320,000 = $9,600, so
          assessed value could rise to $329,600 before this leg is exceeded.
        </li>
        <li>
          <strong>Interpretation:</strong> if your notice shows an assessed
          value above $329,600, either the CPI leg was higher this year, the
          property lost and regained the exemption, there was a change of
          ownership or an addition, or something is worth checking with the
          property appraiser.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a single-year comparison of
        assessed values can identify when the limitation did not move your
        assessed value as far as you expected — a legitimate starting point
        for a question to the property appraiser.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the just value
        itself is correct, how much accumulated Save Our Homes benefit you
        hold (that needs the just-vs-assessed gap), or whether a specific
        reset applied to your property.
      </p>

      <h2>Common misunderstanding</h2>
      <p>
        A large gap between just value and assessed value on a long-held
        homestead is the <em>normal</em> effect of Save Our Homes compounding
        for years. It is not evidence of an over-assessment by itself. The
        question a review would answer is whether the <em>just value</em> is
        supported by the market — not whether the cap "worked".
      </p>

      <h2>Next steps</h2>
      <ul>
        <li>
          Read the <Link href="/florida-property-tax/trim-notice/">TRIM notice</Link>{" "}
          to see where these figures appear on your notice.
        </li>
        <li>
          Understand the <Link href="/florida-property-tax/vab-petition/">VAB petition process</Link>{" "}
          if you believe the just value is wrong.
        </li>
      </ul>

      <SourceList
        sourceIds={["fl-stat-193-155", "fl-stat-193-1554", "fl-stat-196-031"]}
      />
    </PageShell>
  );
}

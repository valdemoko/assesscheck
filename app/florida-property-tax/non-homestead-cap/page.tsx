import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/non-homestead-cap/",
  title: "Florida's 10% Cap on Non-Homestead Residential Property",
  description:
    "Section 193.1554 explained: which Florida property the 10% cap covers, how it interacts with just value, what ends it, and how it differs from Save Our Homes.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Florida",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "Non-homestead 10% cap" },
      ]}
    >
      <h1>The 10% cap on non-homestead residential property</h1>

      <p>
        Florida has a second assessment limitation, and it is the one that
        applies to most residential property that is not somebody&rsquo;s
        homestead. It is 10% rather than 3%, it lives in its own statute —
        section 193.1554 of the Florida Statutes — and it is written for{" "}
        <em>levies other than school district levies</em>. That last detail is in
        the statute&rsquo;s own words and it is the difference most explanations
        leave out.
      </p>

      <h2>Which property it covers</h2>
      <p>
        The statute defines the term before it uses it.{" "}
        <strong>Nonhomestead residential property</strong> is residential real
        property that contains <strong>nine or fewer dwelling units</strong> —
        including vacant property zoned and platted for residential use — and
        that does <strong>not</strong> receive the homestead exemption under
        section 196.031.
      </p>
      <p>
        So the two limitations divide the residential roll between them by that
        one test: a property that receives the homestead exemption is governed by{" "}
        <Link href="/florida-property-tax/save-our-homes/">
          Save Our Homes
        </Link>{" "}
        instead, at 3% or the CPI change; a residential property without it, and
        with nine or fewer dwelling units, is governed by this section.
      </p>

      <h2>The cap, and the floor underneath it</h2>
      <p>
        The mechanics are two subsections, and the second is what keeps the cap
        from raising a value that the market has already lowered:
      </p>
      <ul>
        <li>
          The property starts at <strong>just value</strong> as of January 1 of
          the year it becomes eligible under the section.
        </li>
        <li>
          From the following year it is <strong>reassessed annually</strong> on
          January 1, and the change <strong>may not exceed 10%</strong> of the
          prior year&rsquo;s assessed value.
        </li>
        <li>
          If the figure produced by that 10% step is <em>higher</em> than just
          value, the assessed value is lowered to just value — the same
          lower-of-two-figures shape as Save Our Homes.
        </li>
      </ul>
      <p>
        Unlike the homestead limitation, there is no CPI leg here: the statute
        says 10%, so a year of high inflation does not narrow the cap the way it
        can narrow the 3%.
      </p>

      <h2>What ends the cap: a change of ownership</h2>
      <p>
        After a change of ownership or control, the property is assessed at just
        value as of January 1 of the following year, and the annual 10% step
        begins again from there. The statute defines the event broadly — a sale,
        a foreclosure, a transfer of legal or beneficial title, or the cumulative
        transfer of control or of more than 50% of the ownership of the legal
        entity that owned the property — and then lists the cases where there is
        no change of ownership:
      </p>
      <ul>
        <li>a transfer of title to correct an error;</li>
        <li>a transfer between legal and equitable title;</li>
        <li>
          a transfer between husband and wife, including to a surviving spouse or
          one made by a dissolution of marriage;
        </li>
        <li>
          for a publicly traded company, the cumulative transfer of more than 50%
          of ownership through buying and selling shares on a public exchange —
          but this exception does not cover a transfer made through a merger with
          or an acquisition by another company.
        </li>
      </ul>

      <h2>Improvements, damage and parcels</h2>
      <ul>
        <li>
          <strong>Changes, additions and improvements</strong> are assessed at
          just value as of the first January 1 after they are substantially
          completed.
        </li>
        <li>
          <strong>Replacing property damaged or destroyed</strong> by misfortune
          or calamity is treated more gently: where the new square footage is not
          more than 110% of what was there before, or the total is not more than
          1,500 square feet, the assessment is calculated from the assessed value
          immediately before the damage and stays subject to the 10% step. Only
          the part above those thresholds is added at just value.
        </li>
        <li>
          <strong>Improvements to common areas</strong> that directly benefit the
          property are assessed at just value, apportioned among the parcels that
          benefit.
        </li>
        <li>
          <strong>Combining or dividing parcels</strong> puts the increase
          attributable to that at just value, apportioned among the parcels
          created.
        </li>
      </ul>

      <h2>What this does not cover</h2>
      <p>
        The rule in this section is written for levies other than school district
        levies, so it is not a promise about the whole of a bill: the
        school-district portion is assessed outside this limitation. This site
        does not state what any particular levy is assessed on beyond what the
        statute says here, and your county property appraiser&rsquo;s office is
        the authority for your own notice.
      </p>
      <p>
        It also does not tell you whether your just value is correct. A
        limitation on how fast the assessed value may move says nothing about
        whether the figure it started from was right — that is the question a
        petition to the Value Adjustment Board answers, and it is argued on the{" "}
        <Link href="/florida-property-tax/vab-petition/">petition page</Link>.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/florida-property-tax/save-our-homes/">
            Save Our Homes and the caps
          </Link>{" "}
          — the 3%/CPI limitation for homesteads, and how the two differ.
        </li>
        <li>
          <Link href="/florida-property-tax/trim-notice/">
            The TRIM notice explained
          </Link>{" "}
          — where the just, assessed and taxable figures appear, and which one
          each limitation moves.
        </li>
        <li>
          <Link href="/florida-property-tax/checker/">
            Florida assessment checker
          </Link>{" "}
          — enter two years of assessed values and see whether the change is
          larger than the limitation allows.
        </li>
        <li>
          <Link href="/florida-property-tax/deadlines/">
            Florida property tax deadlines
          </Link>{" "}
          — the TRIM calendar, both petition windows and the day the taxes are
          due.
        </li>
      </ul>

      <SourceList
        sourceIds={["fl-stat-193-1554", "fl-stat-193-155", "fl-stat-196-031"]}
      />
    </PageShell>
  );
}

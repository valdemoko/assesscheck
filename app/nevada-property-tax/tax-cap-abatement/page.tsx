import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/tax-cap-abatement/",
  title: "Nevada's Property Tax Cap: the Partial Abatement",
  description:
    "Nevada's partial abatement caps the increase in your tax bill, not your assessed value: the 3% and up-to-8% levels, the lower-of calculation, what is exempt from the cap, and why a bill can rise while values fall.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Nevada",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/nevada-property-tax/", label: "Nevada Property Tax" },
        { label: "The partial abatement" },
      ]}
    >
      <h1>Nevada&rsquo;s Property Tax Cap: the Partial Abatement</h1>

      <p>
        The cap most people call the &ldquo;Nevada tax cap&rdquo; is a{" "}
        <strong>partial abatement of the tax itself</strong>, created in 2005 and
        codified at NRS 361.471 through 361.4735. It works on the bill, not on
        the value, and that single fact answers most of the questions owners
        bring to it.
      </p>

      <h2>What the cap actually limits</h2>
      <p>
        Your tax bill is computed two ways, and the law takes the lower of them:
      </p>
      <ol>
        <li>
          <strong>The calculated tax</strong> — assessed value (35% of taxable
          value) multiplied by the rate per hundred dollars; and
        </li>
        <li>
          <strong>The prior year&rsquo;s bill plus the cap</strong> — 3% for a
          claimed primary residence or a qualifying rental, a figure of no more
          than 8% for other property.
        </li>
      </ol>
      <p>
        The difference between the two is the <strong>abatement</strong>. It is
        printed on the tax bill. The county assessor states the consequence
        directly: <em>your taxable value is not capped</em> — only the amount of
        increase on the tax bill is.
      </p>

      <h2>The two levels</h2>
      <ul>
        <li>
          <strong>3% — the primary residence and residential rental level.</strong>{" "}
          It applies to the owner&rsquo;s claimed primary residence (a
          single-family house, townhouse, condominium or manufactured home), and
          to rental dwellings where every unit on the parcel rents at or below
          the HUD fair market rent for the county. Only one property in the state
          may be designated as an owner&rsquo;s primary residence. The claim is a
          step you have to take: see{" "}
          <Link href="/nevada-property-tax/primary-residence-abatement/">
            the primary residence abatement
          </Link>
          .
        </li>
        <li>
          <strong>Up to 8% — the general abatement.</strong> Everything else:
          residences that are not owner occupied, land, commercial buildings,
          business personal property, aircraft. Note the &ldquo;up to&rdquo;. The
          general figure changes from year to year and is published by the Nevada
          Department of Taxation as abatement factors that county officials
          apply, so 8% is the ceiling of the range, not a guaranteed annual
          allowance.
        </li>
      </ul>
      <p>
        The 3% is a ceiling in a second sense too: where the general abatement
        calculation produces a <em>smaller</em> increase, that smaller figure is
        applied to the property instead.
      </p>

      <h2>What is not capped</h2>
      <ul>
        <li>
          <strong>Value new to the roll.</strong> New construction and a change
          in the actual or authorized use of the property receive no abatement
          for that fiscal year. The following year they enter the cap at the
          applicable level.
        </li>
        <li>
          <strong>Remainder parcels</strong>, which are governed separately under
          NRS 361.4722 on the basis of the taxes paid on the parcels they came
          from.
        </li>
        <li>
          <strong>Certain voter-approved taxes</strong> and certain other levies
          that the statutes exclude from the abatement.
        </li>
        <li>
          <strong>Items on your bill that are not ad valorem taxes at all.</strong>{" "}
          These are not affected by the cap and can rise by any amount.
        </li>
      </ul>

      <h2>Why a bill can exceed the cap anyway</h2>
      <p>
        The county assessor lists the situations that produce an increase larger
        than the cap: an exemption that was applied last year and was removed
        this year; a change in use, such as a zoning change or a manufactured
        home conversion; new construction or an improvement to the property; a
        newly approved voter levy, or annexation into a district with a higher
        rate; and the non-ad valorem items above. One further rule belongs in the
        same list: exemptions are applied <em>after</em> the cap, so the two
        pieces of the calculation are not built on the same base.
      </p>

      <h2>Why a bill can rise while values fall</h2>
      <p>
        This is the part of the Nevada system that surprises owners most, and the
        county explains it plainly. Because the cap runs from the prior
        year&rsquo;s bill, and because a property that has been under the cap for
        years has been paying less than its calculated tax, a{" "}
        <strong>reduction in assessed value does not reduce the bill</strong>{" "}
        until the calculated tax falls below the abated amount. In an increasing
        market a property can receive an abatement year after year; in a flat or
        falling market the bill may keep rising until the abatement is used up,
        and only then stop.
      </p>
      <p>
        Two more timing facts follow from the same design. Most Nevada property
        has a base year of fiscal year 2004/2005, the year the abatement began,
        and a parcel created later has its own base year. And qualification runs
        from July 1: renting your home out and then moving back in during the
        same fiscal year does not restore the 3% level until the next July 1.
      </p>

      <h2>If the determination is wrong</h2>
      <p>
        Two different steps are easily confused. If you have{" "}
        <em>not</em> claimed a status you qualify for, you file a claim. If the
        abatement <em>determination</em> on your property is wrong — the wrong
        level, a value treated as new to the roll, a remainder-parcel figure you
        dispute — you file a petition for review under NRS 361.4734 with the
        county assessor{" "}
        <strong>by June 30 of the fiscal year concerned</strong>. The assessor
        acknowledges within 15 days and decides within 30 days of receiving it;
        an appeal of that decision goes to the Nevada Tax Commission within 30
        days of the notice of decision. The{" "}
        <Link href="/nevada-property-tax/deadlines/">
          deadline registry
        </Link>{" "}
        lists both tracks with their anchors.
      </p>

      <h2>What this does not tell you</h2>
      <ul>
        <li>
          <strong>The general percentage for your year.</strong> It is published
          annually as abatement factors and applied by the county, so the
          controlling figure is the one on your own bill, not the ceiling in the
          statute.
        </li>
        <li>
          <strong>Whether your taxable value is right.</strong> That is a value
          question for the county Board of Equalization, with a January 15
          deadline — a different track, and one where the burden of proof is on
          the taxpayer.
        </li>
        <li>
          <strong>The rate ceiling in dollars.</strong> Nevada caps the rate
          itself by a separate statute (NRS 361.453, named by the county), but
          this site does not publish the figure: the documents that state it are
          published as PDFs that our verification process could not read. Your
          tax bill and the county treasurer carry the rates that actually applied
          to you.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nv-washoe-abatement-appeal",
          "nv-washoe-assessor-faq",
          "nv-washoe-assessor-taxcap",
          "nv-clark-tax-abatement",
          "nv-dor-lgs-publications",
        ]}
      />
    </PageShell>
  );
}

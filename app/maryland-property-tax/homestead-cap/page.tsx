import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/maryland-property-tax/homestead-cap/",
  title: "The Maryland 10% Homestead Cap",
  description:
    "Maryland's Homestead Property Tax Credit: the 10% limit every county must apply to taxable-assessment increases, its eligibility rules, the apply-once requirement, and how it interacts with the phase-in.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Maryland",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/maryland-property-tax/", label: "Maryland Property Tax" },
        { label: "Homestead Cap" },
      ]}
    >
      <h1>The Maryland 10% Homestead Cap</h1>

      <p>
        Maryland&rsquo;s bill-side limit is the{" "}
        <strong>Homestead Property Tax Credit</strong>, and its structure is
        unusual: <strong>every county and municipality is required to limit
        taxable-assessment increases on a principal residence to no more than
        10% per year</strong> — some adopt less — and the state applies the
        same 10% limit to its own portion of the tax. A statewide ceiling
        that local governments may only tighten, never loosen, is the
        opposite of most states&rsquo; optional local caps.
      </p>

      <h2>What the credit actually does</h2>
      <p>
        The credit is applied <strong>against the tax on the assessment
        increase above the limit</strong>. It does not change the market
        value, and it does not change the phase-in arithmetic described on
        the{" "}
        <Link href="/maryland-property-tax/triennial-cycle/">
          triennial cycle page
        </Link>
        . What it does is bound the <em>year-over-year</em> growth of your
        taxable assessment: whatever happened in the market, the taxable
        assessment on a capped residence cannot rise more than 10% (or the
        lower local percentage) from one year to the next.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up numbers — not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> last year&rsquo;s taxable assessment
          $250,000; this year&rsquo;s phased-in assessment $290,000 (a
          reassessment increase fully outside a 10% step); a county that
          adopted the standard 10%.
        </li>
        <li>
          <strong>Step — the cap:</strong> 10% of $250,000 is $25,000, so the
          taxable assessment may rise to $275,000. The remaining $15,000 of
          increase is credit-protected: the county computes the tax as if the
          assessment were $275,000 and the credit covers the tax on the
          excess.
        </li>
        <li>
          <strong>Step — the gap:</strong> the market value is untouched. If
          the county rate is $1.00 per $100 (illustrative), the cap saved
          about $150 this year — and the protected gap keeps growing while
          the market outruns 10% a year.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the credit&rsquo;s value grows
        the longer you own and the faster the market moves — which is also
        why the eligibility rules below are strict. It is a long-ownership
        benefit by design.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the credit never applies
        to property that is not your principal residence, and it does not
        survive a transfer — see the reset rules below.
      </p>

      <h2>Eligibility: the six-month July 1 rule and the rest</h2>
      <ul>
        <li>
          <strong>Principal residence:</strong> the property must be where you
          live, and you must have lived there at least{" "}
          <strong>six months of the year, including July 1</strong>.
        </li>
        <li>
          <strong>No transfer of ownership</strong> — a deed transfer breaks
          eligibility (new owners start over, see below).
        </li>
        <li>
          <strong>No owner-requested rezoning</strong> that raised the value.
        </li>
        <li>
          <strong>No substantial change in use</strong> of the property.
        </li>
        <li>
          The prior assessment must not have been <strong>clearly
          erroneous</strong>.
        </li>
      </ul>

      <h2>You apply once — not every year</h2>
      <p>
        Unlike most relief programs, the homestead credit is{" "}
        <strong>not an annual application</strong>. You apply once; eligibility
        continues as long as the conditions hold. <strong>New purchasers are
        mailed an application after the deed is recorded</strong> — if you
        bought a Maryland home and never received or returned one, your
        property may be uncapped, and the fastest check is the state&rsquo;s
        Real Property Data Search, where eligibility and phase-in data can be
        reviewed.
      </p>
      <p>
        <strong>What resets it:</strong> a transfer of ownership ends the
        protection — the new owner&rsquo;s taxable assessment starts from the
        current full value once their own eligibility is established, which
        is why newly purchased homes in fast-moving markets often show bills
        far above their neighbors&rsquo;.
      </p>

      <h2>Local variations</h2>
      <p>
        Counties and municipalities <strong>may adopt a lower percentage</strong>{" "}
        than 10% — Montgomery County&rsquo;s finance department, whose page is
        the clearest statement of the mechanism, notes municipalities adopting
        tighter limits (Kensington uses 5%). Your applicable percentage
        depends on where the property is, and your county finance office
        publishes it.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        Maryland&rsquo;s other major credits (the homeowners&rsquo; property
        tax credit and the renters&rsquo; credit) are income-based relief
        programs outside the assessment process, and are not covered here.
        The homestead credit page cited below is the authority for the
        mechanism and eligibility rules.
      </p>

      <SourceList
        sourceIds={["md-montgomery-homestead", "md-sdat-real-property-search"]}
      />
    </PageShell>
  );
}

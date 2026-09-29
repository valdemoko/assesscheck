import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/georgia-property-tax/",
  title: "Georgia Property Tax",
  description:
    "How Georgia property tax works: annual assessment at fair market value every January 1 at a 40% ratio, the 45-day appeal with a declared method on PT-311A, the Taxpayer's Bill of Rights, and the burden of proof on the board that changed your value.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Georgia",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Georgia Property Tax" }]}
    >
      <h1>Georgia Property Tax</h1>

      <p>
        Georgia reassesses at <strong>fair market value every January
        1</strong> — no state-mandated revaluation cycle, just an annual
        digest review — and taxes <strong>40% of that value</strong>. The
        appeal opens with the assessment notice and runs{" "}
        <strong>45 days</strong>, and it asks the owner to{" "}
        <strong>declare a method</strong> in the first filing: the county
        Board of Equalization, a hearing officer, or an arbitrator. The
        state&rsquo;s <strong>Taxpayer&rsquo;s Bill of Rights</strong>{" "}
        then does what no other state&rsquo;s does: it{" "}
        <strong>puts the burden of proof on the board</strong> when the
        board changed your value — and awards fees if the final number
        lands at 85% or less of the appeal-stage value.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/georgia-property-tax/annual-assessment-40-percent/">
            Annual assessment and the 40% ratio
          </Link>{" "}
          — the January 1 valuation date, the digest review, and the
          arithmetic from market value to tax.
        </li>
        <li>
          <Link href="/georgia-property-tax/appeal-and-bill-of-rights/">
            The 45-day appeal and the Bill of Rights
          </Link>{" "}
          — PT-311A, the three declared methods, the board&rsquo;s burden,
          the bound grounds, and the 85% fee provision.
        </li>
        <li>
          <Link href="/georgia-property-tax/homestead-and-deadlines/">
            Deadlines, homestead, and payment
          </Link>{" "}
          — the notice calendar, the exemption windows, and the December
          20 payment norm.
        </li>
        <li>
          <Link href="/georgia-property-tax/property-value-estimator/">
            Georgia property value estimator
          </Link>{" "}
          — see the 40% ratio and the state standard homestead exemption
          applied to a fair market value, and estimate the tax.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county Board of Tax Assessors</strong> values every
          parcel annually against sales data and mails the assessment
          notice.
        </li>
        <li>
          <strong>The county Board of Equalization</strong> — the owner&rsquo;s
          declared first method — hears valuation, uniformity, and
          taxability appeals.
        </li>
        <li>
          <strong>The county tax commissioner</strong> bills and collects
          for the county, school, and state (and receives homestead
          applications).
        </li>
        <li>
          <strong>The Department of Revenue</strong> publishes the forms
          (PT-311A), the FAQ, the homestead roster, and the Taxpayer&rsquo;s
          Bill of Rights.
        </li>
      </ul>

      <h2>The appeal that declares itself</h2>
      <p>
        Most states assign your first appeal to a specific body. Georgia
        makes the owner <strong>choose the forum in the initial written
        dispute</strong>: the <strong>Board of Equalization</strong> (the
        citizen route), a <strong>hearing officer</strong> (for larger
        parcels), or <strong>binding arbitration</strong> (the owner pays
        the arbitrator, but the result binds). The choice is made on{" "}
        <strong>Form PT-311A</strong> within <strong>45 days of the
        notice&rsquo;s mailing date</strong> — and the Department states
        plainly that missing it forfeits the appeal rights. The{" "}
        <Link href="/georgia-property-tax/appeal-and-bill-of-rights/">
          appeal page
        </Link>{" "}
        works through the choice and the burden rules.
      </p>

      <h2>What this does not cover</h2>
      <p>
        The counties&rsquo; individual local exemptions and freeze
        amounts, conservation-use covenants, and the freeport exemption
        are outside this section. AssessCheck has no data connection to
        any Georgia county or the Department of Revenue. The superior
        court stage of the appeal ladder is named in the official pages
        but was not read in full as an independent source.
      </p>

      <SourceList
        sourceIds={[
          "ga-dor-pt311a",
          "ga-dor-property-faq",
          "ga-dor-bill-of-rights",
          "ga-dor-homestead",
        ]}
      />
    </PageShell>
  );
}

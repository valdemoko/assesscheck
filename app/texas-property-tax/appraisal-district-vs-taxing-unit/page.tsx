import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/appraisal-district-vs-taxing-unit/",
  title: "Appraisal District vs. Taxing Unit in Texas",
  description:
    "The appraisal district values your property; taxing units set tax rates and collect taxes. Knowing who does what tells you where a protest belongs.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Appraisal District vs. Taxing Unit" },
      ]}
    >
      <h1>Appraisal District vs. Taxing Unit</h1>

      <p>
        "The appraisal district raised my taxes" mixes up two different
        organizations with two different jobs. Keeping the roles straight tells
        you where a problem belongs: a value dispute goes to the appraisal
        district and the ARB; a rate dispute belongs with the governing body
        that set the rate.
      </p>

      <h2>The appraisal district</h2>
      <p>
        The appraisal district, administered by a chief appraiser, determines
        the value of all taxable property in the county as of January 1,
        processes exemption and special-appraisal applications, and prepares
        the appraisal roll. It is governed by a board of directors. The
        appraisal district does not levy a property tax, does not set tax
        rates, and does not decide how much money local governments collect.
      </p>

      <h2>Taxing units</h2>
      <p>
        Taxing units — school districts, cities, counties, and special
        districts — set their own tax rates each year to raise the revenue
        their budgets require. Several types of taxing units can tax the same
        property. Many taxing units contract with the county's
        tax assessor-collector to collect their taxes; the assessor-collector
        then transfers the appropriate amounts to each unit. Taxpayers
        generally have until January 31 of the following year to pay before
        penalty and interest begin accruing on February 1.
      </p>

      <h2>The Appraisal Review Board (ARB)</h2>
      <p>
        The ARB is a board of local citizens that hears disagreements between
        property owners and the appraisal district about value and taxability.
        It is described in detail on our{" "}
        <a href="/texas-property-tax/appraisal-review-board/">ARB page</a>.
      </p>

      <h2>Who to contact for what</h2>
      <ul>
        <li>
          Value questions, exemptions, property records: the appraisal
          district.
        </li>
        <li>
          Tax rates, budgets, tax bills, payment: the individual taxing unit or
          the tax assessor-collector.
        </li>
        <li>
          Disputes about value after the appraisal district's process: the ARB.
        </li>
      </ul>

      <SourceList sourceIds={["tx-comptroller-basics"]} />
    </PageShell>
  );
}

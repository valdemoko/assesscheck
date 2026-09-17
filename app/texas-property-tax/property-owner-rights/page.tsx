import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/property-owner-rights/",
  title: "Texas Property Owner Rights",
  description:
    "Texas law gives property owners rights to equal and uniform taxation, notice of value increases, and protest before the ARB. What those rights cover.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Property Owner Rights" },
      ]}
    >
      <h1>Property Owner Rights in Texas</h1>

      <h2>Constitutional foundations</h2>
      <p>
        The Texas Constitution sets out five basic rules for property taxes:
        taxation must be equal and uniform; property generally must be taxed at
        market value (with defined exceptions such as productivity valuation);
        each property in a county has a single appraised value used by all
        taxing units; all property is taxable unless federal or state law
        exempts it; and property owners are entitled to reasonable notice of
        increases in their property's appraised value.
      </p>

      <h2>The right to protest</h2>
      <p>
        Texas Tax Code § 41.41 entitles a property owner to protest before the
        ARB a range of actions, including the determination of the property's
        appraised value, unequal appraisal, inclusion of the property on the
        appraisal records, denial in whole or in part of a partial exemption,
        determination that land does not qualify for special appraisal, and any
        other action of the chief appraiser, appraisal district, or ARB that
        applies to and adversely affects the owner. The law also prohibits an
        appraisal district or ARB from charging a fee to file a protest.
      </p>

      <h2>Notice rights</h2>
      <p>
        You are entitled to reasonable notice of increases in your property's
        appraised value. The notice of appraised value and its required
        contents are covered on our{" "}
        <Link href="/texas-property-tax/property-tax-notice/">
          property tax notice
        </Link>{" "}
        page.
      </p>

      <h2>Representation</h2>
      <p>
        Property owners may appoint an agent to represent them in property tax
        matters using the Comptroller's Appointment of Agent form (50-162), and
        may represent themselves if they prefer. Lessees who are contractually
        responsible for the owner's taxes have their own protest rights under
        specified conditions.
      </p>

      <h2>Exercising these rights</h2>
      <p>
        Rights come with deadlines: the protest filing window is generally May
        15 or 30 days after the notice was delivered, whichever is later. See
        the{" "}
        <Link href="/texas-property-tax/protest/how-it-works/">
          protest process
        </Link>{" "}
        and{" "}
        <Link href="/texas-property-tax/protest/deadlines/">deadlines</Link>{" "}
        pages.
      </p>

      <SourceList
        sourceIds={["tx-comptroller-basics", "tx-tax-code-41-41", "tx-comptroller-forms"]}
      />
    </PageShell>
  );
}

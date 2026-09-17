import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/how-to-file/",
  title: "How to File a Texas Property Tax Protest",
  description:
    "What a notice of protest must contain, which form to use, and how filing works — per official Texas Comptroller guidance.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas Protest",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { href: "/texas-property-tax/protest/", label: "Protest" },
        { label: "How to File" },
      ]}
    >
      <h1>How to File a Protest</h1>

      <h2>What you file: the notice of protest</h2>
      <p>
        You protest by filing a written <em>notice of protest</em> with the
        appraisal review board for your county. State law sets a low bar for
        what counts: a notice is sufficient if it identifies the protesting
        property owner, identifies the property, and indicates apparent
        dissatisfaction with some determination of the appraisal office. The
        notice need not be on an official form — a letter meeting that standard
        is valid. Filing a protest carries no fee; charging one is prohibited.
      </p>

      <h2>The official form</h2>
      <p>
        The Comptroller prescribes Form 50-132, <em>Property Owner's Notice of
        Protest</em>, for counties with populations greater than 120,000 (which
        includes Harris County). The form asks you to check the grounds for
        your protest — for example, that the value exceeds market value, that
        the property was appraised unequally, or both. Your notice of appraised
        value includes a protest form and instructions. See our{" "}
        <Link href="/resources/">official resources directory</Link> for the
        form links.
      </p>

      <h2>Choosing your grounds</h2>
      <p>
        The two most common value grounds are distinct: that the appraised
        value <em>exceeds market value</em>, and that the property was{" "}
        <em>appraised unequally</em> compared with comparable properties. The
        form permits a single selection protesting both. Which ground (or
        grounds) fits depends on your evidence — see our{" "}
        <Link href="/evidence/property-tax-protest-evidence/">evidence
        guide</Link>.
      </p>

      <h2>Where and when to file</h2>
      <p>
        File with the ARB in the county where the property is located, within
        the deadline: generally May 15 or 30 days after the notice of appraised
        value was delivered, whichever is later. Your notice of appraised value
        includes the ARB's filing address and instructions. Many appraisal
        districts, including HCAD in Harris County, offer online protest filing
        through their official websites.
      </p>

      <h2>Using an agent</h2>
      <p>
        You may represent yourself, or appoint someone to represent you by
        filing Form 50-162, <em>Appointment of Agent for Property Tax
        Matters</em>. If someone represents you, the ARB's notices go to them.
      </p>

      <h2>Keep proof of filing</h2>
      <p>
        Whatever filing method you use, keep a dated copy of what you filed and
        any confirmation. If a question later arises about whether your protest
        was timely, your proof matters.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-appraisal-protests",
          "tx-tax-code-41-44",
          "tx-tax-code-41-41",
          "tx-comptroller-forms",
          "hcad-ifile",
        ]}
      />
    </PageShell>
  );
}

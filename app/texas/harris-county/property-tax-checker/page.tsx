import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { AssessmentChecker } from "@/components/tools/AssessmentChecker";
import { DataIntegrationNotice } from "@/components/tools/DataIntegrationNotice";

export const metadata: Metadata = buildMetadata({
  path: "/texas/harris-county/property-tax-checker/",
  title: "Harris County Property Tax Checker",
  description:
    "Review your Harris County assessment: enter your notice values and property characteristics and get a structured, source-based review with a preparation checklist.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Harris County",
});

export default function HarrisCountyCheckerPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Texas" },
        { href: "/texas/harris-county/", label: "Harris County" },
        { label: "Property Tax Checker" },
      ]}
    >
      <h1>Harris County Property Tax Checker</h1>

      <DataIntegrationNotice
        jurisdiction="Harris County"
        jurisdictionId="texas"
        integrationStatus="not-verified"
      />

      <p>
        Until an automated HCAD data integration is verified, this checker works
        from what you enter: the values on your HCAD notice of appraised value
        and your property's characteristics. Everything runs in your browser —
        see our <Link href="/privacy/">privacy page</Link>.
      </p>

      <AssessmentChecker
        jurisdiction="Harris County, Texas"
        jurisdictionId="texas"
      />

      <h2>Comparables in Harris County: what applies and what this tool does</h2>
      <p>
        Harris County is a county with a population greater than 150,000, so
        the statutory comparable-sale window for residential property is 36
        months (Tax Code § 23.013(b-1)), and comparability turns on location,
        size, age, condition, access, amenities, and legal restrictions
        (§ 23.013(d)).
      </p>
      <p>
        <strong>The checker does not analyze comparables.</strong> It does not
        accept comparable entries, does not fetch or generate them, and does
        not connect to HCAD. A comparison built on properties the tool cannot
        verify would be worse than no comparison. What you can do today: use
        HCAD's official property search to identify candidate properties,
        screen them yourself against the § 23.013(d) factors and the 36-month
        window, and note the ones that genuinely match — our{" "}
        <Link href="/comparables/">comparable-properties methodology</Link>{" "}
        page walks through that screen.
      </p>

      <h2>Filing in Harris County</h2>
      <p>
        The statewide deadline rule applies: May 15 or 30 days after HCAD
        delivered your notice of appraised value, whichever is later. HCAD's
        official online filing entry point is iFile, and Form 50-132 (Notice
        of Protest) is available from HCAD's forms page. Harris-specific
        hearing calendars and local ARB procedures appear on HCAD's own site;
        we link rather than restate them because we cannot verify a local
        calendar daily.
      </p>

      <SourceList
        sourceIds={[
          "hcad-home",
          "hcad-about",
          "hcad-ifile",
          "tx-tax-code-23-013",
          "tx-comptroller-appraisal-protests",
        ]}
      />
    </PageShell>
  );
}

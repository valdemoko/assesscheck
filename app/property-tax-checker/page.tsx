import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { AssessmentChecker } from "@/components/tools/AssessmentChecker";
import { DataIntegrationNotice } from "@/components/tools/DataIntegrationNotice";

export const metadata: Metadata = buildMetadata({
  path: "/property-tax-checker/",
  title: "Property Tax Assessment Checker",
  description:
    "Enter the values from your notice of appraised value and get a structured review: year-over-year change, screening flags, and a protest preparation checklist.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Tool",
});

export default function CheckerPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Assessment Checker" }]}>
      <h1>Property Tax Assessment Checker</h1>
      <p>
        This tool organizes a review of your assessment. You enter the values
        from your notice of appraised value and your property's characteristics;
        it calculates the year-over-year change, screens for conditions that may
        warrant further review, and builds a preparation checklist. It runs
        entirely in your browser and stores nothing.
      </p>

      <DataIntegrationNotice
        jurisdiction="Texas"
        jurisdictionId="texas"
        integrationStatus="not-verified"
      />

      <h2>What it can and cannot determine</h2>
      <ul>
        <li>
          <strong>Can:</strong> calculate changes between values you provide,
          screen for issues worth checking (large increases, cap interactions,
          sale-price relationships, condition documentation needs), and organize
          your evidence and preparation.
        </li>
        <li>
          <strong>Cannot:</strong> determine your property's market value,
          verify your inputs against official records (yet), produce comparable
          properties, or tell you whether a protest will succeed.
        </li>
      </ul>

      <AssessmentChecker jurisdiction="Texas" jurisdictionId="texas" />

      <p>
        Harris County owner? The Harris County edition includes local data notes:{" "}
        <Link href="/texas/harris-county/property-tax-checker/">
          Harris County property tax checker
        </Link>
        .
      </p>
    </PageShell>
  );
}

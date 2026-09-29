import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/property-value-estimator/",
  title: "Arizona Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "Work from your Arizona notice of valuation — full cash value and limited property value — to the 10% assessed value the rates apply to, and estimate potential property taxes.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Arizona",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Arizona" },
      ]}
      jurisdictionId="arizona"
      metaTitle="Arizona Property Value Estimator"
      sourceIds={SOURCE_IDS["arizona"]}
      metaDescription="Estimate an Arizona property's assessed value and potential property taxes using verified state rules."
    />
  );
}

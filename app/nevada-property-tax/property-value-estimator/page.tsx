import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/property-value-estimator/",
  title: "Nevada Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "Convert a Nevada property's taxable value into its 35% assessed value and estimate potential property taxes at your own rate, with the tax-cap abatement explained.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Nevada",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Nevada" },
      ]}
      jurisdictionId="nevada"
      metaTitle="Nevada Property Value Estimator"
      sourceIds={SOURCE_IDS["nevada"]}
      metaDescription="Estimate a Nevada property's assessed value and potential property taxes using verified state rules."
    />
  );
}

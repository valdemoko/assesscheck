import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/ohio-property-tax/property-value-estimator/",
  title: "Ohio Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "Convert an Ohio property's true value into its taxable value at the fixed 35% assessment ratio and estimate potential property taxes at your own effective millage.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Ohio",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Ohio" },
      ]}
      jurisdictionId="ohio"
      metaTitle="Ohio Property Value Estimator"
      sourceIds={SOURCE_IDS["ohio"]}
      metaDescription="Estimate an Ohio property's taxable value and potential property taxes using verified state rules."
    />
  );
}

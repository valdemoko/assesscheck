import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/property-value-estimator/",
  title: "Texas Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "See how a Texas property's appraised value becomes its taxable value, with the homestead exemption computed, and estimate potential property taxes at your own tax rate.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Texas",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Texas" },
      ]}
      jurisdictionId="texas"
      metaTitle="Texas Property Value Estimator"
      sourceIds={SOURCE_IDS["texas"]}
      metaDescription="Estimate a Texas property's taxable value and potential property taxes using verified state rules."
    />
  );
}

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/property-value-estimator/",
  title: "Florida Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "Estimate a Florida property's taxable value from its just value with the two-tier homestead exemption computed, and estimate potential property taxes at your own millage rate.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Florida",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Florida" },
      ]}
      jurisdictionId="florida"
      metaTitle="Florida Property Value Estimator"
      sourceIds={SOURCE_IDS["florida"]}
      metaDescription="Estimate a Florida property's taxable value and potential property taxes using verified state rules."
    />
  );
}

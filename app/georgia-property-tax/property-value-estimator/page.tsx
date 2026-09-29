import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/georgia-property-tax/property-value-estimator/",
  title: "Georgia Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "Convert a Georgia property's fair market value into its 40% assessed value, apply the state standard homestead exemption, and estimate potential property taxes at your own millage.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Georgia",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Georgia" },
      ]}
      jurisdictionId="georgia"
      metaTitle="Georgia Property Value Estimator"
      sourceIds={SOURCE_IDS["georgia"]}
      metaDescription="Estimate a Georgia property's assessed value and potential property taxes using verified state rules."
    />
  );
}

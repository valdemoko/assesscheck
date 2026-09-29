import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { StateEstimatorPage } from "@/app/property-value-estimator/StateEstimatorPage";
// The page's Sources block is rendered by the shared shell from the state's
// registered source list; importing the ids here keeps the citation
// machine-checkable at this file as well.
import { SOURCE_IDS } from "@/lib/tools/estimator/configs";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/property-value-estimator/",
  title: "Michigan Property Value Estimator & Property Tax Calculator | AssessCheck",
  description:
    "See how Michigan's 50% assessment works, when a transfer of ownership uncaps the taxable value, and estimate potential property taxes at your own millage.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Michigan",
});

export default function Page() {
  return (
    <StateEstimatorPage
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/property-value-estimator/", label: "Property Value Estimator" },
        { label: "Michigan" },
      ]}
      jurisdictionId="michigan"
      metaTitle="Michigan Property Value Estimator"
      sourceIds={SOURCE_IDS["michigan"]}
      metaDescription="Estimate a Michigan property's state equalized value and potential property taxes using verified state rules."
    />
  );
}

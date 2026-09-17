import { requireJurisdictionRules } from "@/lib/data/jurisdictions";

export function DataIntegrationNotice({
  jurisdiction,
  jurisdictionId,
  integrationStatus,
}: {
  jurisdiction: string;
  /** REQUIRED — never defaulted. A page that forgets it fails loudly. */
  jurisdictionId: string;
  integrationStatus: "not-verified" | "verified" | "unavailable";
}) {
  // The official property-search link comes from the jurisdiction config —
  // never hardcoded per component (AUDIT-REPORT.md §4-G). There is NO
  // default jurisdiction: an omitted jurisdictionId throws at render time
  // rather than silently rendering Texas rules.
  const rules = requireJurisdictionRules(jurisdictionId);

  if (integrationStatus === "verified") return null;

  return (
    <aside aria-label="Data integration status">
      <p>
        <strong>
          {integrationStatus === "unavailable"
            ? "OFFICIAL DATA CURRENTLY UNAVAILABLE"
            : "DATA INTEGRATION NOT VERIFIED"}
        </strong>{" "}
        — {jurisdiction} public property data has not yet been connected to this
        tool. We do not fetch or display automated property records until the
        data source's terms, accuracy, and update frequency have been verified.
        You can still complete the review below using the values from your{" "}
        {rules.assessmentNoticeName} and{" "}
        <a
          href={rules.propertySearch.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {rules.propertySearch.label}
        </a>
        .
      </p>
    </aside>
  );
}

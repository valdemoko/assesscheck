import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/methodology/",
  title: "Methodology",
  description:
    "How this site selects sources, defines comparability, performs calculations, handles limitations, and corrects errors.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Trust",
});

export default function MethodologyPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Methodology" }]}>
      <h1>Methodology</h1>

      <h2>Data sources and hierarchy</h2>
      <p>
        We rank sources in three levels. Primary sources (Texas statutes, the
        Texas Comptroller of Public Accounts, official appraisal district
        publications) always govern. Authoritative professional sources are used
        only where primary sources do not cover a subject. Secondary sources are
        used only for context and never override a government source.
      </p>

      <h2>Source traceability</h2>
      <p>
        Every important factual claim on this site is tied to a registered source
        record that stores the publisher, URL, jurisdiction, verification date,
        and what the source supports. Source sections appear at the bottom of
        content pages. Deadlines additionally record the tax year and rule they
        apply to. If a claim cannot be verified, we omit it or label it as not
        yet verified.
      </p>

      <h2>Comparable-property methodology</h2>
      <p>
        We do not call two properties "comparable" merely because they are
        nearby. Texas Tax Code § 23.013(d) identifies the factors that determine
        comparability: location, square footage of lot and improvements, property
        age, property condition, property access, amenities, views, income,
        operating expenses, occupancy, and easements or restrictions. Section
        23.013(b-1) sets sale-recency windows: for residential property in a
        county with more than 150,000 people, a comparable sale must have
        occurred within 36 months of the valuation date (24 months otherwise),
        subject to a narrower exception.
      </p>
      <p>
        When verified comparable data is available, our tool shows each
        candidate with its characteristics, its source, and the similarity
        factors it matches. When verified data is insufficient, the tool says so
        rather than producing a misleading comparison.
      </p>

      <h2>Calculations</h2>
      <p>
        Every calculation the site performs shows its inputs, assumptions,
        formula, output, source, and limitations. Estimates are labeled as
        estimates, user-provided values are labeled as user-provided, and
        official values are labeled with their source. We do not display false
        precision: if the data only supports an approximate range, we present a
        range.
      </p>

      <h2>Limitations</h2>
      <p>
        This site is an informational research layer. It cannot determine the
        legally correct value of a property, cannot interpret contested legal
        standards, and cannot predict how an Appraisal Review Board will rule.
        Its comparisons are informational only.
      </p>

      <h2>Update process</h2>
      <p>
        Pages and data records carry a last-verified date and review status. We
        re-verify deadline-sensitive content before each protest season. Pages
        whose underlying facts have not been re-checked are flagged internally
        and are not presented as current.
      </p>

      <h2>How errors are corrected</h2>
      <p>
        See our <a href="/corrections/">corrections policy</a>. In short: we
        verify reports against primary sources, correct confirmed errors, and
        record what changed.
      </p>

      <SourceList
        sourceIds={[
          "tx-tax-code-23-013",
          "tx-comptroller-appraisal-protests",
          "tx-tax-code-41-44",
        ]}
      />
    </PageShell>
  );
}

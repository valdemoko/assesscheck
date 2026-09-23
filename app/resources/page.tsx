import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/resources/",
  title: "Official Property Tax Resources",
  description:
    "Verified official resources by state: Texas Comptroller, Tax Code, HCAD protest filing and forms; Florida Statutes and the Department of Revenue property tax hub.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Resources",
});

export default function ResourcesPage() {
  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "Official Resources" }]}>
      <h1>Official Resources</h1>
      <p>
        Every link below goes to an official government source. Where an
        official source exists for information, we link to it rather than to
        unofficial summaries — including our own pages.
      </p>

      <h2>Texas — statewide</h2>
      <dl>
        <dt>
          <a href="https://comptroller.texas.gov/taxes/property-tax/" target="_blank" rel="noopener noreferrer">
            Texas Comptroller — Property Tax Assistance
          </a>
        </dt>
        <dd>
          The state's hub for property tax information, publications, forms,
          and calendars.
        </dd>

        <dt>
          <a href="https://comptroller.texas.gov/taxes/property-tax/protests/" target="_blank" rel="noopener noreferrer">
            Appraisal Protests and Appeals (Comptroller)
          </a>
        </dt>
        <dd>
          The Comptroller's official guide to protesting, ARB hearings, and
          appeal options.
        </dd>

        <dt>
          <a href="https://comptroller.texas.gov/taxes/property-tax/forms/" target="_blank" rel="noopener noreferrer">
            Property Tax Forms (Comptroller)
          </a>
        </dt>
        <dd>
          Official forms index, including Form 50-132 (Notice of Protest) and
          Form 50-162 (Appointment of Agent).
        </dd>

        <dt>
          <a href="https://comptroller.texas.gov/taxes/property-tax/exemptions/" target="_blank" rel="noopener noreferrer">
            Property Tax Exemptions (Comptroller)
          </a>
        </dt>
        <dd>Official exemption guidance, including homestead exemptions.</dd>

        <dt>
          <a href="https://comptroller.texas.gov/taxes/property-tax/arb/" target="_blank" rel="noopener noreferrer">
            Appraisal Review Boards (Comptroller)
          </a>
        </dt>
        <dd>ARB composition, procedures, and training materials.</dd>

        <dt>
          <a href="https://statutes.capitol.texas.gov/Docs/TX/htm/TX.1.htm" target="_blank" rel="noopener noreferrer">
            Texas Tax Code (official statutes site)
          </a>
        </dt>
        <dd>
          The statutes themselves, maintained by the Texas Legislature. Key
          chapters: Chapter 23 (appraisal), Chapter 25 (local appraisal),
          Chapter 41 (protests), Chapter 42 (appeals).
        </dd>
      </dl>

      <h2>Harris County</h2>
      <dl>
        <dt>
          <a href="https://hcad.org/" target="_blank" rel="noopener noreferrer">
            Harris Central Appraisal District (HCAD)
          </a>
        </dt>
        <dd>
          Official site: property search, online services, forms, and district
          information.
        </dd>
        <dt>
          <a href="https://hcad.org/hcad-online-services/ifile-protest/" target="_blank" rel="noopener noreferrer">
            HCAD iFile Protest
          </a>
        </dt>
        <dd>HCAD's official online protest filing entry point.</dd>
        <dt>
          <a href="https://hcad.org/hcad-forms/hcad-all-forms/" target="_blank" rel="noopener noreferrer">
            HCAD Forms
          </a>
        </dt>
        <dd>
          Official local forms, including the Notice of Protest and homestead
          exemption applications.
        </dd>
      </dl>

      <h2>Florida — statewide</h2>
      <dl>
        <dt>
          <a href="https://floridarevenue.com/property/Pages/Home.aspx" target="_blank" rel="noopener noreferrer">
            Florida Department of Revenue — Property Tax
          </a>
        </dt>
        <dd>
          The state's property tax oversight hub: forms, publications, and
          guidance for taxpayers and local officials.
        </dd>

        <dt>
          <a href="https://www.flsenate.gov/Laws/Statutes/2024/Chapter193" target="_blank" rel="noopener noreferrer">
            Florida Statutes, Chapter 193 — Assessments
          </a>
        </dt>
        <dd>
          Just valuation (§ 193.011), the Save Our Homes homestead cap
          (§ 193.155), and the non-homestead residential cap (§ 193.1554).
        </dd>

        <dt>
          <a href="https://www.flsenate.gov/Laws/Statutes/2024/Chapter194" target="_blank" rel="noopener noreferrer">
            Florida Statutes, Chapter 194 — Administrative and Judicial Review
          </a>
        </dt>
        <dd>
          The Value Adjustment Board process: petitions (§ 194.011), hearings
          (§§ 194.032–194.035), and appeals (§ 194.036).
        </dd>

        <dt>
          <a href="https://www.flsenate.gov/Laws/Statutes/2024/Chapter196" target="_blank" rel="noopener noreferrer">
            Florida Statutes, Chapter 196 — Exemptions
          </a>
        </dt>
        <dd>
          The homestead exemption (§ 196.031) and the March 1 application
          requirement (§ 196.011).
        </dd>

        <dt>
          <a href="https://www.flsenate.gov/Laws/Statutes/2024/Chapter200" target="_blank" rel="noopener noreferrer">
            Florida Statutes, Chapter 200 — Millage (TRIM)
          </a>
        </dt>
        <dd>
          § 200.069: the standardized Notice of Proposed Property Taxes
          (TRIM notice) and what it must contain.
        </dd>
      </dl>

      <p>
        County-level pages (a Florida property appraiser's office, a county
        Value Adjustment Board) are not listed here yet: AssessCheck does not
        publish a county page until its local procedure and deadlines have
        been verified from official sources.
      </p>

      <p>
        Found a broken link or a better official source? Please{" "}
        <a href="/contact/">tell us</a>.
      </p>

      <SourceList
        sourceIds={[
          // Texas
          "tx-comptroller-appraisal-protests",
          "tx-comptroller-forms",
          "tx-comptroller-exemptions",
          "tx-comptroller-arb",
          "hcad-home",
          "hcad-ifile",
          "hcad-forms",
          // Florida (state-level only — no county sources verified yet)
          "fl-dor-property-hub",
          "fl-stat-193-011",
          "fl-stat-193-155",
          "fl-stat-193-1554",
          "fl-stat-196-031",
          "fl-stat-196-011",
          "fl-stat-194-011",
          "fl-stat-200-069",
        ]}
      />
    </PageShell>
  );
}

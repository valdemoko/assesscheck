import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";
import { getCounty } from "@/lib/data/counties";

export const metadata: Metadata = buildMetadata({
  path: "/texas/harris-county/",
  title: "Harris County Property Tax Assessment Guide",
  description:
    "How Harris County property assessment works: HCAD's role, the protest process, official deadlines, official forms, and verified resources for property owners.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Harris County",
});

export default function HarrisCountyPage() {
  const county = getCounty("harris-county");
  const txDeadlines = getDeadlines("texas");
  const localIds = new Set<string>(["hcad-home", "hcad-about"]);
  txDeadlines.forEach((d) => d.sources.forEach((s) => localIds.add(s.sourceId)));
  if (county) county.sources.forEach((s) => localIds.add(s.sourceId));

  return (
    <PageShell
      breadcrumbs={[
        { label: "Texas" },
        { label: "Harris County" },
      ]}
    >
      <h1>Harris County Property Tax Assessment</h1>
      <p>
        Harris County property values are determined by the Harris Central
        Appraisal District (HCAD), a political subdivision of the State of Texas
        created in 1980. HCAD describes itself as the largest appraisal district
        in Texas: roughly 1.9 million parcels of property, serving more than 600
        taxing units, with a total market value of nearly $905 billion. Texas
        statewide rules — the same statutes and deadlines described in our{" "}
        <Link href="/texas-property-tax/">Texas property tax section</Link> —
        govern what HCAD does; this page is the Harris County starting point.
      </p>

      <h2>What HCAD determines (and what it does not)</h2>
      <p>
        HCAD discovers and appraises property for ad valorem tax purposes for
        each taxing unit within the district. It processes exemption and
        special-appraisal applications and prepares the appraisal roll. It does
        not set tax rates and does not collect property taxes — the taxing
        units and the county tax assessor-collector do that. Value disputes go
        to HCAD and the Appraisal Review Board (ARB); rate and billing questions
        go to your taxing units.
      </p>

      <h2>Protests in Harris County</h2>
      <p>
        The statewide protest sequence and deadline apply: file a written notice
        of protest with the ARB by <strong>May 15 or 30 days after HCAD
        delivered your notice of appraised value, whichever is later</strong>.
        HCAD offers online protest filing through its official iFile system, and
        its forms page provides the current Form 50-132 (Notice of Protest) and
        protest-process information. See our{" "}
        <Link href="/texas-property-tax/protest/how-it-works/">protest
        process</Link> and{" "}
        <Link href="/texas-property-tax/protest/deadlines/">deadlines</Link>{" "}
        pages for the details.
      </p>
      <p>
        <Link href="/texas/harris-county/property-tax-checker/">
          Run the Harris County assessment checker →
        </Link>
      </p>

      <h2>Key dates for the current tax year</h2>
      <ul>
        {txDeadlines
          .filter((d) =>
            ["protest-filing", "exemption-application", "payment"].includes(
              d.deadlineType
            )
          )
          .map((d) => (
            <li key={d.deadlineId}>
              <strong>
                {d.deadlineType === "protest-filing"
                  ? "Protest filing: "
                  : d.deadlineType === "exemption-application"
                    ? "Exemption application: "
                    : "Tax payment: "}
              </strong>
              {d.rule} <em>(verified {d.lastVerifiedDate})</em>
            </li>
          ))}
      </ul>
      <p>
        Harris-specific dates — such as when the HCAD ARB begins hearing
        protests — appear on your notice of appraised value and on HCAD's
        official site. We link to HCAD rather than restating those dates,
        because we cannot verify a local calendar daily.
      </p>

      <h2>Official forms</h2>
      <ul>
        <li>
          Form 50-132, Property Owner's Notice of Protest — available from{" "}
          <a href="https://hcad.org/hcad-forms/hcad-all-forms/" target="_blank" rel="noopener noreferrer">
            HCAD's official forms page
          </a>{" "}
          and the{" "}
          <a href="https://comptroller.texas.gov/taxes/property-tax/forms/" target="_blank" rel="noopener noreferrer">
            Comptroller's forms index
          </a>
          .
        </li>
        <li>
          Homestead exemption application (Form 11.13/50-114) — file with HCAD,
          including through its official mobile app; the general deadline is
          before May 1.
        </li>
        <li>
          Form 50-162, Appointment of Agent, if someone represents you.
        </li>
      </ul>

      <h2>Official property information</h2>
      <p>
        HCAD provides a public property search by account, address, or owner
        name for real and business personal property, plus a property tax
        database showing taxes each taxing unit will impose. Start from{" "}
        <a href="https://hcad.org/" target="_blank" rel="noopener noreferrer">
          hcad.org
        </a>
        .
      </p>

      <h2>Evidence and hearing preparation</h2>
      <p>
        Harris County ARB hearings follow the adopted procedures described on
        our <Link href="/texas-property-tax/protest/arb-hearing/">ARB hearing
        page</Link>. Build your evidence with the{" "}
        <Link href="/evidence/property-tax-protest-evidence/">evidence
        guide</Link>, and see our{" "}
        <Link href="/texas/harris-county/property-tax-checker/">
          Harris County comparable-property notes
        </Link>{" "}
        for how the checker treats Harris County data availability.
      </p>

      <h2>Methodology and update date</h2>
      <p>
        This page reflects HCAD and Comptroller sources verified on September
        17, 2026. See our <Link href="/methodology/">methodology</Link> and{" "}
        <Link href="/corrections/">corrections</Link> policies. HCAD-specific
        procedures beyond what HCAD's own pages state have not been verified and
        are not presented here.
      </p>

      <SourceList sourceIds={[...localIds]} />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";
import { ESTIMATOR_CONFIGS } from "@/lib/tools/estimator/configs";
import {
  getSourcesForJurisdiction,
  SOURCES,
} from "@/lib/sources/registry";

export const metadata: Metadata = buildMetadata({
  path: "/resources/",
  title: "Official Property Tax Resources by State",
  description:
    "Verified official property tax resources for every state AssessCheck covers: statutes, departments of revenue, county assessors, appeal boards, forms, and property searches — with our own guides for each state.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Resources",
});

// State-oriented resource directory. The entries are derived from
// siteConfig.jurisdictions (the states the site actually covers) and the
// source registry (what has actually been verified), so the page cannot list a
// state that has no pages, or a source that was never read. County-level
// sources are included where the site cites them (Harris, Dallas, Franklin,
// Orange, Fairfax, Denver, Anoka, Montgomery); a state with no verified county
// layer says so rather than inventing local links.

const estimatorPaths = new Set(Object.values(ESTIMATOR_CONFIGS).map((c) => c.jurisdictionId));

// One-line description of what each state's resource set covers, written from
// the state's own system (not generic filler).
const STATE_DESCRIPTIONS: Record<string, string> = {
  texas:
    "Texas Comptroller guidance, the Tax Code, appraisal district forms, and county pages for Harris and Dallas.",
  florida:
    "Florida Statutes chapters on assessment, exemptions and VAB review, plus the Department of Revenue's property tax hub.",
  california:
    "Board of Equalization and CDTFA calendars, Revenue and Taxation Code sections, and the base-year/decline-in-value framework.",
  arizona:
    "Arizona Revised Statutes sections on valuation and appeals, the State Board of Equalization's procedure, and county assessor guidance.",
  nevada:
    "Nevada county assessor and treasurer pages, the Department of Taxation's abatement factors, and the NRS framework as stated by officials.",
  oregon:
    "The administrative rule behind Measure 50, Multnomah County's assessment and tax-calculation guides, and county appeal routes.",
  michigan:
    "Treasury's uncapping guidance, Oakland County's equalization documentation of Proposal A, and the Tax Tribunal route.",
  colorado:
    "The Division of Property Taxation's guides, the property tax map, the county assessor directory, and Denver's search as the verified example.",
  ohio:
    "The Department of Taxation's hub and reappraisal pages, the Board of Tax Appeals' filing guide, and Franklin County's Board of Revision.",
  "north-carolina":
    "NCDOR's appeal-process and revaluation pages, the county assessors list, and Orange County's own appeal calendar.",
  massachusetts:
    "The Citizen Information Service abatement guide, the DOR Bureau of Local Assessment, and Proposition 2½ as stated by officials.",
  virginia:
    "The Code of Virginia sections on assessment, notice, boards of equalization, and circuit-court appeal, plus Fairfax's iCare search.",
  "new-york":
    "The Department of Taxation and Finance's grievance, calendar, equalization-rate and fair-assessments pages.",
  georgia:
    "The Department of Revenue's FAQ, homestead, PT-311A and Taxpayer's Bill of Rights pages, plus the county directory.",
  maryland:
    "The Tax Court's procedures page (the whole 45-30-30 ladder), the State Archives' SDAT functions page, and Montgomery County's homestead page.",
  indiana:
    "DLGF's Tax Bill 101 (the caps' arithmetic), the Citizen's Guide, and the state appeal FAQ covering the Form 130 ladder.",
  washington:
    "DOR's levy-limit chapter, the Board of Tax Appeals' how-to-file page, and the change-of-value notice deadline from DOR's own forms.",
  "new-jersey":
    "The Division of Taxation's Assessment and Appeals page: April 1 deadline, Chapter 123 range, and Tax Court thresholds.",
  minnesota:
    "DOR's appealing and understanding pages, the Tax Court's home page, and Anoka County's appeal guide.",
};

interface StateEntry {
  id: string;
  name: string;
  hubPath: string;
  description: string;
  // Selected source ids (state-level first, then the county examples the site
  // actually cites). Capped to keep the page a directory, not a wall of links.
  sourceIds: string[];
}

function sourcesFor(id: string): string[] {
  const all = getSourcesForJurisdiction(id);
  // Prefer state-level sources; keep at most six, prioritized by order in the
  // registry (which is research order, roughly hub-first).
  const state = all.filter((s) => s.jurisdictionLevel === "state");
  const county = all.filter((s) => s.jurisdictionLevel === "county");
  const picked = [...state.slice(0, 5), ...county.slice(0, 2)].map((s) => s.sourceId);
  if (picked.length === 0) {
    throw new Error(
      `Resources page: no verified sources registered for jurisdiction "${id}".`
    );
  }
  return picked;
}

const STATE_ENTRIES: StateEntry[] = Object.entries(siteConfig.jurisdictions).map(
  ([id, j]) => ({
    id,
    name: j.name,
    hubPath: j.hubPath,
    description: STATE_DESCRIPTIONS[id] ?? "",
    sourceIds: sourcesFor(id),
  })
);


function estimatorLink(id: string) {
  return estimatorPaths.has(id) ? ESTIMATOR_CONFIGS[id].path : null;
}

export default function ResourcesPage() {
  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "Resources" }]}>
      <h1>Official Property Tax Resources</h1>
      <p>
        Every resource below is either an official government source — statute,
        department of revenue, county assessor, appeal board — or an
        AssessCheck guide built from those sources. Nothing here is a
        third-party summary: where an official source exists for information, we
        link to it, including rather than to our own pages.
      </p>

      <h2>Browse by state</h2>
      <p>
        AssessCheck covers {STATE_ENTRIES.length} states. Each state below links
        its guide hub, its official sources, and — where the state&rsquo;s data
        supports one — its property value estimator.
      </p>
      <ul className="resource-state-list">
        {STATE_ENTRIES.map((s) => {
          const est = estimatorLink(s.id);
          return (
            <li key={s.id}>
              <strong>
                <Link href={s.hubPath}>{s.name} property tax</Link>
              </strong>{" "}
              — {s.description}
              {est && (
                <>
                  {" "}
                  See also the <Link href={est}>{s.name} property value estimator</Link>.
                </>
              )}
              <ul>
                {s.sourceIds.map((sid) => {
                  const src = SOURCES[sid];
                  return (
                    <li key={sid}>
                      <a href={src.url} target="_blank" rel="noopener noreferrer">
                        {src.publisher}: {src.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <h2>Cross-state resources</h2>
      <ul>
        <li>
          <Link href="/property-tax-by-state/">Property tax by state</Link> —
          what each state&rsquo;s limit actually measures, side by side.
        </li>
        <li>
          <Link href="/property-value-estimator/">Property value estimator</Link>{" "}
          — the value chain and an optional tax estimate, state by state.
        </li>
        <li>
          <Link href="/property-tax-checker/">Assessment checker</Link> — screen
          two years of notice values (Texas and Florida editions).
        </li>
        <li>
          <Link href="/evidence/">Evidence &amp; sources</Link> — what the site
          relies on and when official documentation is essential.
        </li>
        <li>
          <Link href="/faq/">Property tax FAQ</Link> — cross-state questions.
        </li>
      </ul>

      <h2>What is not here, deliberately</h2>
      <p>
        County-level links appear only where the site has verified them (for
        example Harris and Dallas in Texas, Franklin in Ohio, Fairfax in
        Virginia). For other counties, start from the state-level directory
        above — each state&rsquo;s department or association directory is the
        official route to your county office. Found a broken link or a better
        official source? Please <Link href="/contact/">tell us</Link>.
      </p>

      <SourceList
        heading="About the sources on this page"
        sourceIds={[...new Set(STATE_ENTRIES.flatMap((s) => s.sourceIds))]}
      />
    </PageShell>
  );
}

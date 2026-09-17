// County registry. A county becomes publicly listed ONLY when its records
// carry verified local research. The gate() helpers below are used by the
// sitemap and county hub so unverified counties cannot leak into production
// pages. Phase 1 ships Harris County only; other Texas counties are
// intentionally absent.

import type { SourceReference } from "@/lib/sources/types";

export interface CountyRecord {
  countyId: string; // url slug, e.g. "harris-county"
  name: string;
  state: string;
  appraisalDistrict: {
    name: string;
    abbreviation?: string;
    website: string;
  };
  populationTier: string; // factual descriptor sourced from official material
  taxYear: string;
  researchStatus:
    | "research-needed"
    | "source-verified"
    | "editorial-review"
    | "ready"
    | "needs-update";
  lastVerifiedDate: string;
  sources: SourceReference[];
  notes?: string;
}

export const COUNTIES: CountyRecord[] = [
  {
    countyId: "harris-county",
    name: "Harris County",
    state: "Texas",
    appraisalDistrict: {
      name: "Harris Central Appraisal District",
      abbreviation: "HCAD",
      website: "https://hcad.org/",
    },
    populationTier:
      "HCAD describes itself as the largest appraisal district in Texas, serving more than 600 taxing units and approximately 1.9 million parcels.",
    taxYear: "current tax year",
    researchStatus: "source-verified",
    lastVerifiedDate: "2026-09-17",
    sources: [
      {
        sourceId: "hcad-about",
        supports:
          "HCAD's establishment, scale, parcel count, and number of taxing units.",
      },
      { sourceId: "hcad-home", supports: "Official HCAD website and services." },
    ],
    notes:
      "Texas-wide rules apply (state statute). County-specific pages cite HCAD official pages. HCAD-specific protest-filing instructions beyond what HCAD's own pages state have NOT been verified and are not presented.",
  },
  {
    countyId: "dallas-county",
    name: "Dallas County",
    state: "Texas",
    appraisalDistrict: {
      name: "Dallas Central Appraisal District",
      abbreviation: "DCAD",
      website: "https://www.dcad.org/",
    },
    populationTier: "",
    taxYear: "current tax year",
    researchStatus: "research-needed",
    lastVerifiedDate: "",
    sources: [],
    notes:
      "PLACEHOLDER — NOT PUBLISHED. Dallas County has not been researched. This record exists only to keep the architecture extensible; the hub, sitemap, and nav must never render it until its researchStatus reaches 'source-verified'.",
  },
  {
    countyId: "tarrant-county",
    name: "Tarrant County",
    state: "Texas",
    appraisalDistrict: {
      name: "Tarrant Appraisal District",
      abbreviation: "TAD",
      website: "https://www.tad.org/",
    },
    populationTier: "",
    taxYear: "current tax year",
    researchStatus: "research-needed",
    lastVerifiedDate: "",
    sources: [],
    notes: "PLACEHOLDER — NOT PUBLISHED. Local research not started.",
  },
  {
    countyId: "bexar-county",
    name: "Bexar County",
    state: "Texas",
    appraisalDistrict: {
      name: "Bexar Appraisal District",
      abbreviation: "BCAD",
      website: "https://www.bcad.org/",
    },
    populationTier: "",
    taxYear: "current tax year",
    researchStatus: "research-needed",
    lastVerifiedDate: "",
    sources: [],
    notes: "PLACEHOLDER — NOT PUBLISHED. Local research not started.",
  },
  {
    countyId: "travis-county",
    name: "Travis County",
    state: "Texas",
    appraisalDistrict: {
      name: "Travis Central Appraisal District",
      abbreviation: "TCAD",
      website: "https://traviscad.org/",
    },
    populationTier: "",
    taxYear: "current tax year",
    researchStatus: "research-needed",
    lastVerifiedDate: "",
    sources: [],
    notes: "PLACEHOLDER — NOT PUBLISHED. Local research not started.",
  },
];

export function getPublishedCounties(): CountyRecord[] {
  // Only counties whose local research has been verified may appear publicly.
  return COUNTIES.filter(
    (c) => c.researchStatus === "source-verified" || c.researchStatus === "ready"
  );
}

export function getCounty(countyId: string): CountyRecord | undefined {
  return COUNTIES.find((c) => c.countyId === countyId);
}

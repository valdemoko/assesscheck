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
    // Still research-needed, and deliberately so: three of the four county-bar
    // criteria are verified, but DCAD's property-search URL could not be read
    // from the district's site (it returns no body text), and the bar requires
    // all four. See docs/dallas-county-research.md §3.
    researchStatus: "research-needed",
    lastVerifiedDate: "2026-09-23",
    sources: [
      {
        sourceId: "dcad-protest-deadline",
        supports:
          "May 15 or 30 days after delivery of the Notice of Appraised Value, whichever is later; first business day if the date falls on a weekend or holiday; postmark rule.",
      },
      {
        sourceId: "dcad-protest-questions",
        supports:
          "uFile filing opens April 15; written protests accepted, not fax or email; one uFile protest per account.",
      },
    ],
    notes:
      "NOT PUBLISHED. Research started: the protest procedure and the deadline are read from DCAD's own articles (three of the four county-bar criteria pass — see docs/dallas-county-research.md). The open criterion is a verifiable DCAD property-search URL, so nothing links to a Dallas page and the hub, sitemap and nav must not render it until researchStatus reaches 'source-verified'. The '61 local governing bodies' figure that appears in search results is deliberately not used: it was not read at the source.",
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

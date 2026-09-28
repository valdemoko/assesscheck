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
    populationTier:
      "DCAD appraises property for the City of Dallas and surrounding Dallas County cities; the district publishes its own annual report and certified value summaries.",
    taxYear: "current tax year",
    // Verified 2026-09-28: all four county-bar criteria now pass. The last one
    // (a verifiable DCAD property-search URL) was read live in a real browser
    // session: the district's Search Appraisals pages work at
    // dallascad.org/searchaddr.aspx, /searchowner.aspx and /SearchAcct.aspx
    // (Owner Name / Account Number / Street Address / Business Name / Map),
    // and the account details page exposes the homestead exemption form. See
    // docs/dallas-county-research.md §3 for the full trail.
    researchStatus: "source-verified",
    lastVerifiedDate: "2026-09-28",
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
      {
        sourceId: "dcad-property-search",
        supports:
          "Official property search by owner name, account number, street address, business name, or map, read live in a browser session on 2026-09-28.",
      },
      {
        sourceId: "dcad-about",
        supports:
          "DCAD's role, services, and self-description as the county's appraisal district.",
      },
    ],
    notes:
      "PUBLISHED 2026-09-28. All four county-bar criteria verified: (1) protest deadline from DCAD's own articles, (2) protest procedure incl. uFile from DCAD's own articles, (3) official search pages read live in a browser, (4) district scale/role from DCAD's own site. The '61 local governing bodies' figure that appears in search results is deliberately not used: it was not read at the source.",
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

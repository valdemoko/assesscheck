// Source registry types — every factual claim on this site must trace to a
// registered source. See /methodology for the public-facing explanation.

export type AuthorityLevel = "primary" | "authoritative" | "secondary";

export type SourceStatus =
  | "verified"
  | "needs-reverification"
  | "unverified"
  | "archived";

export type SourceJurisdictionLevel = "state" | "county" | "federal";

export interface SourceRecord {
  /** Stable ID used by pages/deadlines to reference the source. */
  sourceId: string;
  title: string;
  publisher: string;
  authorityLevel: AuthorityLevel;
  /** Official URL. Never a fabricated URL — verified before entry. */
  url: string;
  /** ISO date the source content was last reviewed by our editors. */
  lastVerifiedDate: string;
  /** ISO date the source itself was published/updated, ONLY if the source states it. */
  publicationDate?: string;
  jurisdiction: string; // e.g. "Texas" | "Harris County, Texas" | "Florida"
  /**
   * Machine-readable jurisdiction partition (FLORIDA-IMPLEMENTATION §3.3):
   * lets code ask "sources for Florida" without string-matching the human
   * `jurisdiction` label. Sources registered before multi-jurisdiction
   * support default to their state below.
   */
  jurisdictionLevel?: SourceJurisdictionLevel;
  /** Owning jurisdiction id: "texas" | "florida" | ... (state scope) or a county id. */
  jurisdictionId?: string;
  topic: string;
  notes?: string;
  status: SourceStatus;
}

export interface SourceReference {
  sourceId: string;
  /** Short note on what this specific source supports. */
  supports: string;
}

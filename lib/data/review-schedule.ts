// Review schedule for figures that move on their own.
//
// Most of what this site publishes is a rule, and rules change slowly and
// loudly: a statute is amended, a page is corrected. A smaller set is
// different — it is a figure that the government REPUBLISHES on a calendar,
// which means the page stays consistent with itself while quietly becoming
// wrong. Nevada's published installment dates expire with the fiscal year.
// Clark County's maximum rents for the 3% rental abatement are federal fair
// market rents, renewed every year. Oregon's exception thresholds are indexed
// to the CPI, so their whole point is that they move.
//
// A date on a source record does not catch this. `lastVerifiedDate` says when
// an editor read the page; it says nothing about whether the number on it was
// still the current number a year later, and nothing fails when it is not. So
// the volatile figures are listed here, with the interval a verification can
// stand and the source that republishes it, and `tests/review-schedule.test.ts`
// fails once an entry passes its interval. That makes the schedule the thing an
// editor has to answer to, rather than a good intention in a research doc.
//
// This file deliberately does NOT hold the figures themselves. It points at
// where they are used, so a figure cannot drift between two copies of itself.

export type ReviewTrigger =
  /** The body republishes the figures for a new fiscal year (Nevada: July 1). */
  | "each-fiscal-year"
  /** The body republishes the figures for a new tax year (assessment or billing cycle). */
  | "each-tax-year"
  /** The figure itself moves with an index (Oregon's CPI-indexed thresholds). */
  | "cpi-indexed"
  /** The figure is a statute that only a legislative session can change. */
  | "each-legislative-session";

export interface ReviewScheduleEntry {
  reviewId: string;
  jurisdictionId: string;
  /** The volatile figure, in the terms a reader would see it. */
  what: string;
  /** Where our content states it, so an editor knows what to change. */
  statedIn: string;
  trigger: ReviewTrigger;
  /** How long one verification can stand before it must be re-read. */
  intervalDays: number;
  /** The source that republishes the current figure. */
  sourceId: string;
  /** ISO date the figure was last read from the source. */
  lastVerifiedDate: string;
  /** Set when the figure lives inside a deadline record. */
  deadlineId?: string;
  note?: string;
}

export const REVIEW_SCHEDULE: ReviewScheduleEntry[] = [
  {
    reviewId: "nv-fy-installment-dates",
    jurisdictionId: "nevada",
    what:
      "the four published installment dates for the current fiscal year and the ten-day period before each penalty attaches (for FY 2026/2027: August 17, October 5, January 4 and March 1)",
    statedIn:
      "lib/data/deadlines.ts → nv-tax-payment-installments, rendered on /nevada-property-tax/deadlines/",
    trigger: "each-fiscal-year",
    intervalDays: 240,
    sourceId: "nv-washoe-treasurer-billing",
    lastVerifiedDate: "2026-09-23",
    deadlineId: "nv-tax-payment-installments",
    note:
      "The statutory rule (third Monday in August, first Monday in October, first Monday in January, first Monday in March) does not expire, but the published dates do. The interval is shorter than a year because the treasurer publishes the new dates in June and the first one falls in August.",
  },
  {
    reviewId: "nv-rental-maximum-rents",
    jurisdictionId: "nevada",
    what:
      "the maximum rents a residential rental may charge and still take the 3% abatement — federal fair market rents for the county, by unit size",
    statedIn: "app/nevada-property-tax/primary-residence-abatement/page.tsx",
    trigger: "each-fiscal-year",
    intervalDays: 365,
    sourceId: "nv-clark-tax-abatement",
    lastVerifiedDate: "2026-09-23",
    note:
      "HUD republishes these annually and the county reposts them for its own year. The page states them with the year attached and tells the reader the controlling figures are on their own affidavit, which limits the damage if this entry goes overdue — it does not remove the need to re-read them.",
  },
  {
    reviewId: "or-exception-thresholds",
    jurisdictionId: "oregon",
    what:
      "the dollar thresholds above which remodelling or rehabilitation becomes an exception event ($18,700 in one year, $46,200 over five years at the time of writing)",
    statedIn: "lib/data/jurisdictions.ts → or-maximum-assessed-value-cap resetNote",
    trigger: "cpi-indexed",
    intervalDays: 365,
    sourceId: "or-multco-assessment-faq",
    lastVerifiedDate: "2026-09-23",
    note:
      "The county says the Department of Revenue indexes these to the CPI each year after 2024. This is the clearest case on the site of a figure whose accuracy decays by design: the law has not changed, the number has.",
  },
  {
    reviewId: "nv-rate-ceiling",
    jurisdictionId: "nevada",
    what:
      "the statutory ceiling on the property tax RATE (NRS 361.453), which the content names without giving a figure",
    statedIn:
      "lib/data/jurisdictions.ts → nevada limits, and docs/nevada-expansion-research.md open point N3",
    trigger: "each-legislative-session",
    intervalDays: 730,
    sourceId: "nv-washoe-treasurer-billing",
    lastVerifiedDate: "2026-09-23",
    note:
      "Deliberately unquantified: the statute is named because official county pages name it, but its figure could not be read from this environment, and publishing an unread number would be worse than publishing none. This entry exists so the decision is revisited rather than forgotten — either the statute is read and the figure added, or N3 is closed as permanently out of scope. The interval matches Nevada's biennial sessions.",
  },
  {
    reviewId: "fl-soh-cpi-leg",
    jurisdictionId: "florida",
    what:
      "the CPI change that forms one leg of the Save Our Homes limit, and the decision not to publish a figure for it",
    statedIn:
      "app/florida-property-tax/save-our-homes/page.tsx and docs/florida-expansion-research.md open question 4",
    trigger: "each-tax-year",
    intervalDays: 365,
    sourceId: "fl-stat-193-155",
    lastVerifiedDate: "2026-09-23",
    note:
      "No figure is stated anywhere on the site, and that is the deliberate position: the pages point the reader at their own TRIM notice instead of a national number that is superseded every January. Re-check that no later edit has quietly hardcoded a CPI figure, which is exactly what the Florida research doc warned against.",
  },
];

/** Days between two ISO dates (UTC), so time zones cannot shift the result. */
function daysBetween(fromIso: string, toIso: string): number {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  if (Number.isNaN(from) || Number.isNaN(to)) return Number.NaN;
  return Math.round((to - from) / 86_400_000);
}

function addDays(iso: string, days: number): string {
  const base = Date.parse(`${iso}T00:00:00Z`);
  if (Number.isNaN(base)) return "";
  return new Date(base + days * 86_400_000).toISOString().slice(0, 10);
}

export interface ReviewStatus {
  entry: ReviewScheduleEntry;
  /** The date this entry becomes due. */
  dueOn: string;
  /** Negative when overdue. */
  daysRemaining: number;
  overdue: boolean;
}

export function getReviewSchedule(jurisdictionId?: string): ReviewScheduleEntry[] {
  return jurisdictionId
    ? REVIEW_SCHEDULE.filter((e) => e.jurisdictionId === jurisdictionId)
    : REVIEW_SCHEDULE;
}

export function getReviewStatus(entry: ReviewScheduleEntry, asOf: string): ReviewStatus {
  const dueOn = addDays(entry.lastVerifiedDate, entry.intervalDays);
  const daysRemaining = daysBetween(asOf, dueOn);
  return { entry, dueOn, daysRemaining, overdue: daysRemaining < 0 };
}

/** Entries whose verification has expired as of `asOf` (an ISO date). */
export function getDueForReview(asOf: string): ReviewStatus[] {
  return REVIEW_SCHEDULE.map((e) => getReviewStatus(e, asOf)).filter((s) => s.overdue);
}

export function getUpcomingReviews(asOf: string, withinDays: number): ReviewStatus[] {
  return REVIEW_SCHEDULE.map((e) => getReviewStatus(e, asOf))
    .filter((s) => !s.overdue && s.daysRemaining <= withinDays)
    .sort((a, b) => a.daysRemaining - b.daysRemaining);
}

/**
 * Today, as an ISO date.
 *
 * The suite checks the schedule against the REAL date rather than a pinned one,
 * and that is a deliberate trade-off worth stating so nobody "fixes" it later by
 * pinning it. A pinned date would make `getDueForReview` unreachable in
 * practice — the alarm would never ring, which is the failure mode this file
 * exists to prevent.
 *
 * The cost is that one day the suite goes red on a date no code change caused.
 * That failure is the mechanism working: the message names the figure, the
 * source to re-read and the file to update. Resolving it is editorial work
 * (re-read, then move `lastVerifiedDate`) or a decision to widen the interval
 * with a reason. Both beat a page that quietly disagrees with the county.
 */
export function todayIso(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}

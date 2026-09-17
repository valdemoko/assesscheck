// Pure screening engine for the assessment checker. No React, no DOM —
// so the math and flag logic can be unit-tested directly. The component in
// components/tools/AssessmentChecker.tsx renders these results; it must not
// contain business rules itself.

import {
  requireJurisdictionRules,
  getCap,
  type JurisdictionRules,
  type CapRule,
} from "../data/jurisdictions";

export interface CheckerInput {
  currentAppraised: string;
  previousAppraised: string;
  homesteadCapApplies: boolean;
  squareFeet: string;
  conditionIssues: string;
  recentSalePrice: string;
  recentSaleYear: string;
}

export const EMPTY_INPUT: CheckerInput = {
  currentAppraised: "",
  previousAppraised: "",
  homesteadCapApplies: false,
  squareFeet: "",
  conditionIssues: "",
  recentSalePrice: "",
  recentSaleYear: "",
};

export interface CheckerFlag {
  flagId: string;
  title: string;
  detail: string;
  kind: "calculated" | "user-provided";
}

export interface CheckerResult {
  flags: CheckerFlag[];
  checklist: string[];
}

export function toNumber(v: string): number | null {
  if (!v.trim()) return null;
  const n = Number(v.replace(/[,$\s]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

/**
 * Sanity bound: flags computed from implausible inputs (fat-fingered extra
 * digits) look authoritative while being meaningless, so values above the
 * bound are treated as invalid. Bounds are generous — they catch typos, not
 * legitimately expensive properties.
 */
const MAX_PLAUSIBLE = {
  value: 100_000_000, // $100M — far above any single-family screening use case
  area: 100_000, // 100k sq ft living area
};

export function toPlausibleNumber(v: string, max: number): number | null {
  const n = toNumber(v);
  return n !== null && n <= max ? n : null;
}

/** Percent change from `whole` to `part`, rounded to 1 decimal. */
export function pct(part: number, whole: number): number {
  return Math.round(((part - whole) / whole) * 1000) / 10;
}

export function runChecker(
  input: CheckerInput,
  jurisdictionId: string
): CheckerResult {
  return runCheckerWithRules(input, requireJurisdictionRules(jurisdictionId));
}

export function runCheckerWithRules(
  input: CheckerInput,
  rules: JurisdictionRules
): CheckerResult {
  const current = toPlausibleNumber(input.currentAppraised, MAX_PLAUSIBLE.value);
  const previous = toPlausibleNumber(input.previousAppraised, MAX_PLAUSIBLE.value);
  const sqft = toPlausibleNumber(input.squareFeet, MAX_PLAUSIBLE.area);
  const sale = toPlausibleNumber(input.recentSalePrice, MAX_PLAUSIBLE.value);
  const saleYear = toNumber(input.recentSaleYear);

  const flags: CheckerFlag[] = [];

  if (current && previous) {
    const change = pct(current, previous);

    // Homestead-branch cap: reached through the jurisdiction's configured
    // question. Caps are per-jurisdiction RULES with a comparison basis —
    // never a universal number (Texas § 23.23 annual-increase vs Florida
    // SOH lower-of-3%-or-CPI are different rules, not the same check).
    const cap: CapRule | undefined = rules.homesteadCapQuestion
      ? getCap(rules, rules.homesteadCapQuestion.capId)
      : undefined;
    if (cap && change > cap.maxAnnualIncreasePercent && input.homesteadCapApplies) {
      flags.push({
        flagId: "homestead-cap-exceeded",
        kind: "calculated",
        title: `Assessed value increased about ${change}% over the prior year`,
        detail:
          cap.basis === "lower-of-or-cpi" && cap.limitations
            ? `${cap.detail} ${cap.limitations}`
            : cap.detail,
      });
    } else if (change >= rules.largeIncreaseThresholdPercent) {
      flags.push({
        flagId: "large-increase",
        kind: "calculated",
        title: `Large year-over-year increase (about ${change}%)`,
        detail:
          "A change of this size may warrant a closer look at the property record and how the value compares with similar properties. It is not, by itself, evidence of an incorrect value. The threshold this tool uses is an editorial screening choice, not a statutory rule.",
      });
    } else if (change <= -rules.largeDecreaseThresholdPercent) {
      flags.push({
        flagId: "large-decrease",
        kind: "calculated",
        title: `Large year-over-year decrease (about ${Math.abs(change)}%)`,
        detail:
          "A large decrease can indicate a data correction or characteristic change. Confirm the property record is accurate. The threshold this tool uses is an editorial screening choice, not a statutory rule.",
      });
    }
  }

  if (current && sqft && current / sqft > 0) {
    const ppsf = Math.round((current / sqft) * 100) / 100;
    flags.push({
      flagId: "price-per-sqft",
      kind: "calculated",
      title: `Your appraised value works out to about $${ppsf}/sq ft`,
      detail:
        "Price per square foot is only a screening figure — it ignores location, age, condition, and lot. This is a screening comparison, not an appraisal, valuation, or prediction of your property's market value. Compare it with genuinely similar properties through official property records before drawing any conclusion; a figure like this, by itself, does not indicate whether your assessment is correct or incorrect.",
    });
  }

  if (sale && current && saleYear) {
    const diff = pct(current, sale);
    flags.push({
      flagId: "sale-price-delta",
      kind: "calculated",
      title: `Appraised value is about ${diff}% ${diff >= 0 ? "above" : "below"} your recorded sale price`,
      detail:
        "A recent arm's-length sale is one piece of market evidence official protest guidance recognizes (sales price documentation such as closing statements). The appraisal is set as of a single annual date, so the sale's timing relative to that date matters, and one sale does not automatically control the outcome.",
    });
  }

  if (input.conditionIssues.trim().length > 0) {
    flags.push({
      flagId: "condition-issues",
      kind: "user-provided",
      title: "You described condition issues",
      detail:
        "Documented condition problems (with photographs, repair estimates, or engineering reports) are among the evidence categories official guidance lists for review hearings. Condition documentation does not convert into a fixed dollar reduction — the review body weighs it with everything else.",
    });
  }

  const checklist = [
    `Your ${rules.assessmentNoticeName} (current and prior-year values)`,
    "Photographs of the property's condition, dated",
    "Repair estimates or receipts, if condition is part of your review",
    "Sales documentation (listing or closing statement) if you bought recently",
    `Notes on 3–5 genuinely similar properties from ${rules.propertySearch.label}`,
    "Your filing confirmation and any hearing notices",
  ];

  return { flags, checklist };
}

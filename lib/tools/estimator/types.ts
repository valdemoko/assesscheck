// Estimator data model.
//
// The estimator is NOT an appraisal and NOT an automated valuation model. It
// takes a market-value figure the USER supplies (from their own research, a
// recent purchase, or their assessment notice) and derives the state's value
// chain from it — assessed value, exemptions, taxable value, and, only when the
// user supplies a tax rate from their own tax bill, an estimated tax.
//
// Every rule number in a config traces to a registered source in
// lib/sources/registry.ts. Where a state's data is not sufficient to support a
// step (for example local tax rates), the config omits the step and says so —
// it never substitutes a placeholder. States without enough verified numeric
// rules have NO estimator at all (see configs.ts).

import type { SourceReference } from "@/lib/sources/types";

/** Raw form input. All numeric fields stay strings until the engine parses them. */
export interface EstimatorInput {
  /** The user's estimate of market value (state vocabulary varies; see config). */
  marketValue: string;
  /** Whether the property receives the state's homestead exemption. */
  homestead: boolean;
  /**
   * Michigan only: a transfer of ownership occurred, so taxable value uncaps
   * to the state equalized value in the calendar year after the transfer.
   */
  transferOfOwnership: boolean;
  /** Arizona only: optional user-provided limited property value. */
  limitedPropertyValue: string;
  /**
   * User-provided combined tax rate, taken from the user's own tax bill or
   * county rate publication. NEVER a built-in rate: rates are local and no
   * verified statewide dataset exists for any state on this site.
   */
  rate: string;
}

/** One row of the value chain shown in the result. */
export interface EstimateLine {
  term: string;
  amount?: number;
  description: string;
  sources: SourceReference[];
}

export interface EstimateResult {
  ok: boolean;
  error?: string;
  /** The market value actually used, after parsing. */
  marketValue?: number;
  /** Ordered value-chain lines (market value first, taxable value last). */
  lines: EstimateLine[];
  /** The taxable value the rate would be applied to (all levies). */
  taxableValue?: number;
  /**
   * Texas and Florida apply different exemption amounts to school and
   * non-school levies. When set, this is the school-district taxable value;
   * `taxableValue` is the non-school one. The tax estimate uses
   * `taxableValue` and the notes explain the school difference.
   */
  schoolTaxableValue?: number;
  /** Present only when the user supplied a rate. */
  estimatedAnnualTax?: number;
  estimatedMonthlyTax?: number;
  /**
   * Annual tax recomputed at 90% and 110% of the user's market value — a
   * sensitivity band on the USER'S OWN estimate, not a valuation range.
   */
  sensitivity?: { low: number; high: number };
  notes: string[];
}

/** How the user-supplied rate is denominated. */
export type RateUnit = "per-thousand" | "per-hundred";

export interface StateEstimatorConfig {
  jurisdictionId: string;
  jurisdictionName: string;
  /** Route of the state's estimator page. */
  path: string;
  /** Page H1/SEO name, e.g. "Ohio Property Value Estimator". */
  toolTitle: string;
  /** One-sentence description of what the tool does in this state. */
  intro: string;
  /** Label for the market-value input, in the state's own vocabulary. */
  marketValueLabel: string;
  marketValueHelp: string;
  /** Checkbox label, or undefined when the state's exemption does not vary. */
  homesteadQuestion?: string;
  homesteadHelp?: string;
  /** Michigan only. */
  transferQuestion?: string;
  transferHelp?: string;
  /** Arizona only. */
  lpvQuestion?: string;
  lpvHelp?: string;
  rateLabel: string;
  rateHelp: string;
  rateUnit: RateUnit;
  /** State-specific computation. Pure — same input, same output. */
  compute(input: EstimatorInput): EstimateResult;
  /** State-specific limitations shown with the result and on the page. */
  limitations: string[];
  /** FAQs rendered on the page and in FAQPage structured data. */
  faqs: { question: string; answer: string }[];
}

export function parseMoney(raw: string): number | undefined {
  const cleaned = raw.replace(/[$,\s]/g, "");
  if (cleaned === "") return undefined;
  const n = Number(cleaned);
  return Number.isFinite(n) && n >= 0 ? n : undefined;
}

export function parseRate(raw: string): number | undefined {
  const cleaned = raw.replace(/[$,\s]/g, "");
  if (cleaned === "") return undefined;
  const n = Number(cleaned);
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

// Per-state estimator configurations.
//
// The states below are the ONLY ones with enough verified numeric rules —
// assessment ratios, exemption amounts, cap mechanics — already registered in
// lib/sources/registry.ts to run a value-chain derivation from a user-supplied
// market value. The other covered states (California, Colorado, Oregon, North
// Carolina, Massachusetts, Virginia, New York, Maryland, Indiana, Washington,
// New Jersey, Minnesota) have no estimator: their value chains depend on
// figures this site has not verified (local millage, class rates, municipal
// rates, levy structures) and inventing a substitute would break the project's
// no-fabrication rule. See docs/estimator-data-requirements.md.
//
// No config contains a tax rate. Rates are set locally in every state; none has
// a verified statewide dataset. The rate input is the user's own figure.

import type { SourceReference } from "@/lib/sources/types";
import {
  type EstimatorInput,
  type EstimateLine,
  type StateEstimatorConfig,
  parseMoney,
  parseRate,
  round2,
} from "./types";

const ref = (sourceId: string, supports: string): SourceReference => ({
  sourceId,
  supports,
});

function errorResult(error: string): import("./types").EstimateResult {
  return { ok: false, error, lines: [], notes: [] };
}

// ---------------------------------------------------------------------------
// Texas
// ---------------------------------------------------------------------------
// Chain: market value (user) -> exemptions -> taxable value. No assessment
// ratio: Texas taxes appraised value directly. The $140,000 mandatory school
// homestead exemption is a statutory figure verified from the Comptroller.
function computeTexas(input: EstimatorInput): import("./types").EstimateResult {
  const mv = parseMoney(input.marketValue);
  if (mv === undefined) return errorResult("Enter a market value.");
  if (mv === 0) return errorResult("Market value must be greater than zero.");

  const lines: EstimateLine[] = [
    {
      term: "Appraised value (market value you entered)",
      amount: mv,
      description:
        "Texas calculates taxes on the appraised value; there is no assessment ratio.",
      sources: [ref("tx-comptroller-valuing-property", "Appraised value is the tax base; market value definition.")],
    },
  ];

  const notes: string[] = [];
  let taxable = mv;
  let schoolTaxable = mv;
  if (input.homestead) {
    const SCHOOL_HOMESTEAD_EXEMPTION = 140000;
    const exempt = Math.min(SCHOOL_HOMESTEAD_EXEMPTION, mv);
    schoolTaxable = round2(mv - exempt);
    lines.push({
      term: "School district homestead exemption",
      amount: -exempt,
      description:
        "The mandatory residence homestead exemption removes $140,000 of appraised value for SCHOOL DISTRICT taxes (2026-09-17 verification of the Comptroller's exemption guidance). Taxing units other than school districts may offer their own, often smaller, exemptions; only the school exemption is computed here.",
      sources: [ref("tx-comptroller-exemptions", "Mandatory $140,000 school district residence homestead exemption.")],
    });
    notes.push(
      "Only the school district exemption is computed. County, city and other taxing units set their own optional homestead exemptions, which can be smaller."
    );
    taxable = mv; // non-school taxable depends on local option amounts; left at mv with a note
    notes.push(
      "For non-school taxing units the calculator keeps the full appraised value as the base, because their exemption amounts vary by unit and are not computed here. Your actual non-school taxable value may be lower."
    );
  } else {
    lines.push({
      term: "Exemptions",
      amount: 0,
      description: "No homestead exemption selected, so no exemption is applied.",
      sources: [],
    });
  }

  lines.push({
    term: "Taxable value",
    amount: taxable,
    description: "Appraised value minus applicable exemptions — the figure tax rates are applied to.",
    sources: [ref("tx-comptroller-basics", "Taxable value relationship.")],
  });

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined) {
    // School taxable carries the exemption; the tool computes the school-side
    // arithmetic when homestead is on and explains the difference. For the
    // combined figure the user's rate covers ALL units, so the exemption-aware
    // base is used only when homestead is off; this is stated in the notes.
    const base = input.homestead ? schoolTaxable : taxable;
    estimatedAnnualTax = round2((base * rate) / 100);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
    if (input.homestead) {
      notes.push(
        "The tax estimate applies your rate to the school-exempt base. If your rate figure combines every taxing unit, your real bill will differ: non-school units may exempt less than the school does."
      );
    }
  }

  return {
    ok: true,
    marketValue: mv,
    lines,
    taxableValue: taxable,
    schoolTaxableValue: schoolTaxable,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Florida
// ---------------------------------------------------------------------------
// Chain: just value (user) -> Save Our Homes is NOT simulated (it needs the
// prior assessed value) -> homestead exemption (two tiers) -> taxable value.
function computeFlorida(input: EstimatorInput): import("./types").EstimateResult {
  const mv = parseMoney(input.marketValue);
  if (mv === undefined) return errorResult("Enter a just value.");
  if (mv === 0) return errorResult("Just value must be greater than zero.");

  const lines: EstimateLine[] = [
    {
      term: "Just value (value you entered)",
      amount: mv,
      description:
        "The property appraiser's determination of value as of January 1 — Florida's equivalent of market value.",
      sources: [ref("fl-stat-193-011", "Just valuation factors.")],
    },
  ];

  const notes: string[] = [
    "Save Our Homes is not simulated: it limits the ASSESSED value of an existing homestead based on the prior year's assessed value, which this tool does not ask for. On a newly purchased home the assessed value starts at just value anyway.",
  ];

  let taxable = mv;
  let schoolTaxable = mv;
  if (input.homestead) {
    const TIER1 = 25000;
    const TIER2_CAP = 50000; // additional exemption begins at assessed value over $50,000
    const tier1 = Math.min(TIER1, mv);
    schoolTaxable = round2(mv - tier1);
    // Tier 2: up to $25,000 of the value between $50,000 and $75,000, for
    // non-school levies only — i.e. the lesser of $25,000 and (just value −
    // $50,000), floored at zero. At $60,000 just value it removes $10,000;
    // at $75,000 and above it removes the full $25,000.
    const tier2 = Math.min(TIER2_CAP / 2, Math.max(0, mv - TIER2_CAP));
    taxable = round2(mv - tier1 - tier2);
    lines.push(
      {
        term: "Homestead exemption — first $25,000 (all levies)",
        amount: -tier1,
        description:
          "Applies to every levy, including school districts.",
        sources: [ref("fl-stat-196-031", "§ 196.031(1)(a): $25,000 homestead exemption.")],
      },
      {
        term: "Homestead exemption — additional up to $25,000 (non-school levies)",
        amount: -tier2,
        description:
          "Applies to assessed value between $50,000 and $75,000, for all levies EXCEPT school districts.",
        sources: [ref("fl-stat-196-031", "§ 196.031(1)(b): additional up to $25,000 on value over $50,000, non-school levies.")],
      }
    );
    notes.push(
      "The two-tier homestead exemption is computed exactly: the first $25,000 comes off for every levy; the second up-to-$25,000 comes off value between $50,000 and $75,000 for non-school levies only, so school taxes are computed on the higher base."
    );
  } else {
    lines.push({
      term: "Exemptions",
      amount: 0,
      description: "No homestead exemption selected.",
      sources: [],
    });
  }

  lines.push({
    term: "Taxable value",
    amount: taxable,
    description: "Just value minus exemptions — the figure millage rates are applied to.",
    sources: [ref("fl-stat-196-031", "Exemptions applied to just/assessed value.")],
  });

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined) {
    estimatedAnnualTax = round2((taxable * rate) / 1000);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
    notes.push(
      "Your rate is applied to the non-school taxable value. School mills apply to the higher base of $" +
        schoolTaxable.toLocaleString("en-US") +
        " when the homestead exemption is on, so a combined-rate figure will overstate the school portion's exemption benefit."
    );
  }

  return {
    ok: true,
    marketValue: mv,
    lines,
    taxableValue: taxable,
    schoolTaxableValue: schoolTaxable,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Ohio
// ---------------------------------------------------------------------------
// Chain: true value (user) -> 35% assessment ratio -> taxable value. Exemptions
// are NOT computed: Ohio's homestead exemption is income-tested with
// locally-varying reduction amounts, and no verified figure set is registered.
function computeOhio(input: EstimatorInput): import("./types").EstimateResult {
  const mv = parseMoney(input.marketValue);
  if (mv === undefined) return errorResult("Enter a true value.");
  if (mv === 0) return errorResult("True value must be greater than zero.");

  const RATIO = 0.35;
  const taxable = round2(mv * RATIO);
  const lines: EstimateLine[] = [
    {
      term: "True value (value you entered)",
      amount: mv,
      description:
        "The county auditor's determination of your property's market value, set during reappraisal or triennial update.",
      sources: [ref("oh-dor-reappraisal", "The auditor values each parcel; Department oversees revaluations.")],
    },
    {
      term: "Assessment ratio",
      amount: RATIO,
      description: "Ohio taxes 35% of true value — fixed by law, the same in every county.",
      sources: [ref("oh-dor-reappraisal", "Taxable (assessed) value is 35% of true value.")],
    },
    {
      term: "Taxable value",
      amount: taxable,
      description: "True value × 35%. Voted levies are applied to this figure.",
      sources: [ref("oh-dor-reappraisal", "Taxable value at 35% of true value.")],
    },
  ];

  const notes: string[] = [
    "Exemptions are not computed. Ohio's homestead exemption is income-tested and its reduction amounts vary; no verified figure set is registered on this site, so the calculator leaves the base untouched rather than guessing.",
  ];

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined) {
    // Ohio "effective" voted rates are applied inside the 10-mill unvoted
    // floor; effective rates are already reduced, so applying the user's
    // effective-millage figure to the 35% base is the correct mechanics.
    estimatedAnnualTax = round2((taxable * rate) / 1000);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
  }

  return {
    ok: true,
    marketValue: mv,
    lines,
    taxableValue: taxable,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Georgia
// ---------------------------------------------------------------------------
// Chain: fair market value (user) -> 40% assessment ratio -> homestead
// exemption ($2,000 state standard, off the ASSESSED value) -> taxable value.
function computeGeorgia(input: EstimatorInput): import("./types").EstimateResult {
  const mv = parseMoney(input.marketValue);
  if (mv === undefined) return errorResult("Enter a fair market value.");
  if (mv === 0) return errorResult("Fair market value must be greater than zero.");

  const RATIO = 0.4;
  const assessed = round2(mv * RATIO);
  const lines: EstimateLine[] = [
    {
      term: "Fair market value (value you entered)",
      amount: mv,
      description:
        "Reassessed every January 1; there is no statewide cap on the annual change.",
      sources: [ref("ga-dor-property-faq", "Annual assessment at fair market value as of January 1.")],
    },
    {
      term: "Assessed value (40% of fair market value)",
      amount: assessed,
      description: "Georgia taxes 40% of fair market value.",
      sources: [ref("ga-dor-property-faq", "Assessed value is 40% of fair market value.")],
    },
  ];

  const notes: string[] = [];
  let taxable = assessed;
  if (input.homestead) {
    const STATE_STANDARD = 2000;
    const exempt = Math.min(STATE_STANDARD, assessed);
    taxable = round2(assessed - exempt);
    lines.push({
      term: "State standard homestead exemption",
      amount: -exempt,
      description:
        "$2,000 deducted from the 40% assessed value for county and school taxes (O.C.G.A. § 48-5-44). Many counties offer larger local exemptions and some hold a valuation freeze; none of those is computed here.",
      sources: [ref("ga-dor-homestead", "State standard exemption: $2,000 from county and school taxes, deducted from assessed value.")],
    });
    notes.push(
      "Only the $2,000 state standard exemption is computed. County-level exemptions and local valuation freezes can be worth far more; your county tax commissioner's office is the authority for what applies to you."
    );
  }
  lines.push({
    term: "Taxable value",
    amount: taxable,
    description: "Assessed value minus the state standard exemption where it applies.",
    sources: [ref("ga-dor-homestead", "Exemption deducted from the 40% assessed value.")],
  });

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined) {
    estimatedAnnualTax = round2((taxable * rate) / 1000);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
  }

  return {
    ok: true,
    marketValue: mv,
    lines,
    taxableValue: taxable,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Arizona
// ---------------------------------------------------------------------------
// Chain: full cash value (user) -> LPV ceiling -> 10% class ratio -> assessed
// value. The LPV formula (prior LPV + 5%) cannot be simulated without the
// prior LPV, so the tool accepts the LPV from the owner's notice instead.
function computeArizona(input: EstimatorInput): import("./types").EstimateResult {
  const fcv = parseMoney(input.marketValue);
  if (fcv === undefined) return errorResult("Enter a full cash value.");
  if (fcv === 0) return errorResult("Full cash value must be greater than zero.");

  const lines: EstimateLine[] = [
    {
      term: "Full cash value (value you entered)",
      amount: fcv,
      description:
        "The assessor's estimate of market value. Since Tax Year 2015 no tax is levied on this value.",
      sources: [ref("az-cochise-assessor-faq", "FCV is the market estimate; tax levied on LPV since TY2015.")],
    },
  ];

  const notes: string[] = [];
  let taxBase = fcv;
  const lpv = parseMoney(input.limitedPropertyValue);
  if (lpv !== undefined) {
    if (lpv > fcv) {
      return errorResult(
        "The limited property value cannot exceed the full cash value. Check the two figures on your notice of valuation."
      );
    }
    taxBase = lpv;
    lines.push({
      term: "Limited property value (from your notice)",
      amount: lpv,
      description:
        "By statute the prior year's LPV plus 5%, never above the current full cash value. The tool uses YOUR notice's LPV because the formula needs the prior year's LPV, which a single value cannot supply.",
      sources: [
        ref("az-ars-42-13301", "LPV = prior LPV + 5%, capped at FCV."),
      ],
    });
  } else {
    notes.push(
      "You did not enter a limited property value, so the full cash value is used as the tax base. That OVERSTATES the base in most cases, because the LPV is usually below the FCV. Enter the LPV from your notice of valuation for a closer figure."
    );
  }

  const RATIO = 0.1;
  const assessed = round2(taxBase * RATIO);
  lines.push({
    term: "Assessed value (10% of the limited value)",
    amount: assessed,
    description:
      "Class three (owner-occupied primary residence) and class four (other residential) property are assessed at 10% of the limited property value.",
    sources: [
      ref("az-ars-42-15003", "Class three assessed valuation is 10%."),
      ref("az-ars-42-15004", "Class four assessed valuation is 10%."),
    ],
  });

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined) {
    // Arizona rates are per $100 of assessed value.
    estimatedAnnualTax = round2((assessed * rate) / 100);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
    notes.push(
      "Your rate is applied to the assessed value per $100, which is how Arizona rates are set in August by each taxing jurisdiction."
    );
  }

  return {
    ok: true,
    marketValue: fcv,
    lines,
    taxableValue: assessed,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Nevada
// ---------------------------------------------------------------------------
// Chain: taxable value (user, from the assessor's record) -> 35% ratio ->
// assessed value. The tax-cap abatement is NOT simulated: it needs the prior
// year's bill, which a single market value cannot supply.
function computeNevada(input: EstimatorInput): import("./types").EstimateResult {
  // Nevada's assessors determine taxable value by formula (land at market +
  // replacement cost less depreciation), not from a user's market estimate.
  // The "market value" input is therefore labeled as taxable value.
  const tv = parseMoney(input.marketValue);
  if (tv === undefined) return errorResult("Enter a taxable value.");
  if (tv === 0) return errorResult("Taxable value must be greater than zero.");

  const RATIO = 0.35;
  const assessed = round2(tv * RATIO);
  const lines: EstimateLine[] = [
    {
      term: "Taxable value (value you entered)",
      amount: tv,
      description:
        "The assessor's figure: land at market value plus the current replacement cost of improvements less statutory depreciation (1.5% per year of effective age, capped at 50 years). Enter it from your assessor's record rather than estimating.",
      sources: [ref("nv-clark-assessor-real-property", "Taxable value determination and 1.5%/50-year depreciation.")],
    },
    {
      term: "Assessed value (35% of taxable value)",
      amount: assessed,
      description: "Nevada taxes 35% of taxable value. The rate is applied to this figure.",
      sources: [ref("nv-clark-assessor-real-property", "Worked example: taxable value x .35 = assessed value.")],
    },
  ];

  const notes: string[] = [
    "The partial abatement (tax cap) is not simulated: it caps the TAX BILL at the prior year's bill plus 3% (primary residence) or up to 8% (other property), and that calculation needs the prior year's bill, which this tool does not ask for. Where the cap binds, your actual bill is LOWER than the estimate here.",
  ];

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined) {
    estimatedAnnualTax = round2((assessed * rate) / 100);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
    notes.push(
      "Your rate is per $100 of assessed value, matching how Nevada's rates are expressed and set each June."
    );
  }

  return {
    ok: true,
    marketValue: tv,
    lines,
    taxableValue: assessed,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Michigan
// ---------------------------------------------------------------------------
// Chain: true cash value (user) -> 50% -> state equalized value; taxable value
// is SEV unless capped (Proposal A), in which case the tool cannot compute the
// capped figure (it needs the prior taxable value and the year's inflation
// multiplier) and says so. Transfer of ownership uncaps: TV = SEV.
function computeMichigan(input: EstimatorInput): import("./types").EstimateResult {
  const tcv = parseMoney(input.marketValue);
  if (tcv === undefined) return errorResult("Enter a true cash value.");
  if (tcv === 0) return errorResult("True cash value must be greater than zero.");

  const RATIO = 0.5;
  const sev = round2(tcv * RATIO);
  const lines: EstimateLine[] = [
    {
      term: "True cash value (value you entered)",
      amount: tcv,
      description:
        "The assessor's determination of what the property is worth as of December 31 (tax day).",
      sources: [ref("mi-oakland-equalization", "Assessed value as of December 31 at 50% of true cash value.")],
    },
    {
      term: "Assessed value / state equalized value (50%)",
      amount: sev,
      description:
        "Assessed value is 50% of true cash value; after county and state equalization it becomes the state equalized value (SEV).",
      sources: [ref("mi-oakland-equalization", "AV at 50% of TCV; SEV after equalization.")],
    },
  ];

  const notes: string[] = [];
  let taxable = sev;
  if (input.transferOfOwnership) {
    lines.push({
      term: "Taxable value (uncapped by a transfer of ownership)",
      amount: taxable,
      description:
        "A transfer of ownership removes the Proposal A limitation: in the calendar year after the transfer, taxable value becomes the state equalized value.",
      sources: [ref("mi-treasury-change-ownership", "Transfer uncaps taxable value to SEV the following calendar year.")],
    });
    notes.push(
      "You indicated a transfer of ownership occurred, so taxable value equals the SEV for the year after the transfer. The cap applies again the year following that."
    );
  } else {
    lines.push({
      term: "Taxable value (capped — not computed)",
      description:
        "Without a transfer of ownership, taxable value is the LESSER of the SEV or the capped value, and the capped value is built from the PRIOR year's taxable value × the year's inflation rate multiplier (at most 1.05), plus additions and minus losses. This tool does not collect the prior taxable value and does not publish the year's inflation multiplier, so it cannot compute the capped figure — your Notice of Assessment states the taxable value directly. Use that figure.",
      sources: [ref("mi-oakland-equalization", "Capped value formula and the lower-of rule.")],
    });
    taxable = undefined as unknown as number;
    notes.push(
      "No taxable value is shown: under the cap it comes from the capped-value formula, not from the SEV alone, and the honest answer is the figure on your Notice of Assessment."
    );
  }

  const rate = parseRate(input.rate);
  let estimatedAnnualTax: number | undefined;
  let estimatedMonthlyTax: number | undefined;
  if (rate !== undefined && taxable !== undefined) {
    estimatedAnnualTax = round2((taxable * rate) / 1000);
    estimatedMonthlyTax = round2(estimatedAnnualTax / 12);
  }

  return {
    ok: true,
    marketValue: tcv,
    lines,
    taxableValue: taxable,
    estimatedAnnualTax,
    estimatedMonthlyTax,
    notes,
  };
}

// ---------------------------------------------------------------------------
// Config registry
// ---------------------------------------------------------------------------

export const ESTIMATOR_CONFIGS: Record<string, StateEstimatorConfig> = {
  texas: {
    jurisdictionId: "texas",
    jurisdictionName: "Texas",
    path: "/texas-property-tax/property-value-estimator/",
    toolTitle: "Texas Property Value Estimator",
    intro:
      "See how a Texas property's appraised value becomes a taxable value, and estimate the property tax that follows — using the homestead exemption rules verified from the Texas Comptroller.",
    marketValueLabel: "Appraised / market value ($)",
    marketValueHelp:
      "Enter the value you believe the property is worth — from a recent purchase, your own research, or the notice of appraised value. The estimator uses YOUR figure; it does not value the property.",
    homesteadQuestion: "This property receives the residence homestead exemption",
    homesteadHelp:
      "The mandatory school district exemption of $140,000 is computed. Other taxing units may offer their own exemption amounts, which vary.",
    rateLabel: "Combined tax rate (per $100 of value, optional)",
    rateHelp:
      "Take this from your own tax bill (it is usually shown as a rate) or your county's published rate table. There is no single Texas rate: each taxing unit sets its own. Leave blank to see only the value chain.",
    rateUnit: "per-hundred",
    compute: computeTexas,
    limitations: [
      "This is not an appraisal, and it is not an automated valuation model: the value you enter is assumed, not estimated by the tool.",
      "Only the mandatory $140,000 school district homestead exemption is computed. County, city and other local exemptions vary and are not modeled.",
      "The tax estimate is only as good as the rate you supply. Taxing-unit rates differ, and Texas's § 23.231 circuit breaker for certain non-homestead properties is not modeled.",
      "The 10% homestead appraisal cap is not simulated; it requires the prior year's appraised value.",
    ],
    faqs: [
      {
        question: "Is this a Texas property appraisal?",
        answer:
          "No. The estimator takes a value you provide and works out what the Texas property tax system does with it — exemptions, taxable value, and an optional tax estimate at the rate you supply. A licensed appraiser or your county appraisal district determines official values.",
      },
      {
        question: "How does Texas calculate property taxes?",
        answer:
          "Each taxing unit applies its rate to your property's taxable value — appraised value minus exemptions. Texas has no assessment ratio: the appraised value is the tax base. Rates are set separately by every county, city, school district and special district.",
      },
      {
        question: "Why can my actual tax bill be different?",
        answer:
          "The estimator only computes the mandatory school district homestead exemption; your other taxing units may exempt less. Your combined rate figure may also differ from the rate that actually applies to each unit, and values can change through the protest process.",
      },
      {
        question: "Does the calculator include the 10% homestead cap?",
        answer:
          "No. The cap (Tax Code § 23.23) limits how fast a homestead's appraised value can rise, and testing it requires two consecutive years' values. That is what the assessment checker does — this estimator answers a different question.",
      },
    ],
  },

  florida: {
    jurisdictionId: "florida",
    jurisdictionName: "Florida",
    path: "/florida-property-tax/property-value-estimator/",
    toolTitle: "Florida Property Value Estimator",
    intro:
      "See how a Florida property's just value becomes a taxable value — with the two-tier homestead exemption computed exactly — and estimate the property tax that follows.",
    marketValueLabel: "Just value / estimated market value ($)",
    marketValueHelp:
      "Enter the value you believe the property is worth as of January 1 — from a recent purchase, your own research, or the just value on your TRIM notice. The estimator uses YOUR figure.",
    homesteadQuestion: "This property receives the homestead exemption",
    homesteadHelp:
      "The first $25,000 comes off for every levy; an additional up-to-$25,000 comes off value between $50,000 and $75,000 for non-school levies.",
    rateLabel: "Combined millage rate (mills, optional)",
    rateHelp:
      "One mill is $1 per $1,000 of taxable value. Take the combined rate from your own TRIM notice or tax bill. Rates are set separately by your county, school board, municipalities and special districts.",
    rateUnit: "per-thousand",
    compute: computeFlorida,
    limitations: [
      "This is not an appraisal and not an automated valuation model: the just value you enter is assumed, not estimated by the tool.",
      "Save Our Homes is not simulated: it limits the assessed value of an existing homestead based on the prior year's assessed value. On a long-held homestead, taxable value will be much lower than the just value you entered.",
      "The non-homestead 10% cap (§ 193.1554) is not modeled; it also requires a prior-year value.",
      "The tax estimate is only as good as the combined millage you supply, and it applies the exemption structure to non-school levies — school taxes are computed on the higher base, as stated in the result notes.",
    ],
    faqs: [
      {
        question: "What is my property worth in Florida?",
        answer:
          "This tool cannot tell you — it works from a value you supply. Your county property appraiser determines the official just value every January 1, and it is on your TRIM notice. To estimate what a property would sell for, compare recent sales of genuinely similar properties nearby.",
      },
      {
        question: "How does Florida calculate property taxes?",
        answer:
          "Millage rates set by your county, school board, municipalities and special districts are applied to taxable value — just value minus any assessment limitation and minus exemptions. The homestead exemption removes the first $25,000 of value for every levy, plus up to $25,000 more of the value between $50,000 and $75,000 for non-school levies.",
      },
      {
        question: "Why is the estimate higher than my actual bill?",
        answer:
          "If the property is a long-held homestead, Save Our Homes has been holding the assessed value below just value for years — sometimes far below. The estimator works from just value and cannot reproduce that accumulated benefit without your prior assessed values.",
      },
      {
        question: "Is this a Florida property appraisal?",
        answer:
          "No. It is an educational calculation of the value chain your county property appraiser and tax collector use. Official values come from the property appraiser; your bill comes from the tax collector.",
      },
    ],
  },

  ohio: {
    jurisdictionId: "ohio",
    jurisdictionName: "Ohio",
    path: "/ohio-property-tax/property-value-estimator/",
    toolTitle: "Ohio Property Value Estimator",
    intro:
      "See how an Ohio property's true value becomes the taxable value the levies are applied to — the fixed 35% ratio computed exactly — and estimate the property tax that follows.",
    marketValueLabel: "True value / estimated market value ($)",
    marketValueHelp:
      "Enter the value you believe the property is worth — from a recent purchase, your own research, or the auditor's appraised value. The estimator uses YOUR figure.",
    rateLabel: "Effective tax rate (mills, optional)",
    rateHelp:
      "Use the total effective millage from your own tax bill or your county auditor's rate publication. Rates differ by school district, city, township and county, and voted levies change them. Leave blank to see only the value chain.",
    rateUnit: "per-thousand",
    compute: computeOhio,
    limitations: [
      "This is not an appraisal: the true value you enter is assumed, not estimated by the tool.",
      "Exemptions are not computed — Ohio's homestead exemption is income-tested with locally varying amounts, and no verified figure set is registered on this site.",
      "Your rate figure must be an effective rate; using a voted (gross) millage total will overstate the estimate inside the 10-mill floor.",
      "The tax estimate is only as good as the rate you supply, and only applies to the parcel base — special assessments on your bill are not modeled.",
    ],
    faqs: [
      {
        question: "How does Ohio calculate property taxes?",
        answer:
          "The county auditor sets each parcel's true value on the state's reappraisal calendar, and the taxable value is fixed by law at 35% of true value. School districts, cities, townships and the county apply their levies to that taxable value.",
      },
      {
        question: "Why is the taxable value only about a third of the market value?",
        answer:
          "Because Ohio's assessment ratio is 35%. The reduction is intentional and uniform statewide — a taxable value near one third of market value does not indicate an error.",
      },
      {
        question: "Does the calculator include the homestead exemption?",
        answer:
          "No. Ohio's homestead exemption is income-tested and its dollar reduction varies, so the estimator leaves the base untouched rather than guessing. Your county auditor administers the program and can tell you what applies to you.",
      },
      {
        question: "Is this an appraisal?",
        answer:
          "No. It is an educational calculation of Ohio's value chain. Official values come from your county auditor; appeals run through the county Board of Revision on DTE Form 1.",
      },
    ],
  },

  georgia: {
    jurisdictionId: "georgia",
    jurisdictionName: "Georgia",
    path: "/georgia-property-tax/property-value-estimator/",
    toolTitle: "Georgia Property Value Estimator",
    intro:
      "See how a Georgia property's fair market value becomes its assessed value at the 40% ratio, apply the state standard homestead exemption, and estimate the property tax that follows.",
    marketValueLabel: "Fair market value ($)",
    marketValueHelp:
      "Enter the value you believe the property is worth as of January 1 — from a recent purchase, your own research, or the board of tax assessors' notice. The estimator uses YOUR figure.",
    homesteadQuestion: "This property receives the standard homestead exemption",
    homesteadHelp:
      "The state standard exemption is $2,000 off the assessed value for county and school taxes. Many counties offer larger local exemptions or valuation freezes, which are not computed.",
    rateLabel: "Combined millage rate (mills, optional)",
    rateHelp:
      "One mill is $1 per $1,000 of assessed value. Take the combined rate from your own county digest or your tax bill. Leave blank to see only the value chain.",
    rateUnit: "per-thousand",
    compute: computeGeorgia,
    limitations: [
      "This is not an appraisal: the fair market value you enter is assumed, not estimated by the tool.",
      "Only the $2,000 state standard exemption is computed. County homestead exemptions, local option exemptions and valuation freezes can be worth far more and vary by county.",
      "The tax estimate is only as good as the combined millage you supply; millage is adopted separately by the county board of commissioners, school board and any city.",
      "Fees imposed at 85% of the appeal-stage value and other county-specific charges are not modeled.",
    ],
    faqs: [
      {
        question: "How does Georgia calculate property taxes?",
        answer:
          "The county board of tax assessors values property at fair market value as of January 1 each year, and the taxable base is 40% of that figure. Millage rates set by the county, school board and cities are applied to the assessed value minus exemptions.",
      },
      {
        question: "What is the 40% assessment ratio?",
        answer:
          "Georgia law taxes 40% of fair market value, so a $300,000 home carries an assessed value of $120,000. The homestead exemption is deducted from that assessed figure, not from market value.",
      },
      {
        question: "Why can my actual tax bill be different?",
        answer:
          "Your county may offer exemptions worth much more than the state standard, or a local valuation freeze that holds your assessment at an old base year. Your combined millage figure may also differ from what each authority adopted.",
      },
      {
        question: "Is this an appraisal?",
        answer:
          "No. Official values come from your county board of tax assessors, appeals are filed with them within 45 days of the annual notice, and the tax commissioner bills and collects.",
      },
    ],
  },

  arizona: {
    jurisdictionId: "arizona",
    jurisdictionName: "Arizona",
    path: "/arizona-property-tax/property-value-estimator/",
    toolTitle: "Arizona Property Value Estimator",
    intro:
      "Arizona taxes the limited property value at a 10% assessment ratio — not the full cash value. Enter the values from your notice of valuation and estimate the property tax that follows.",
    marketValueLabel: "Full cash value (FCV) ($)",
    marketValueHelp:
      "The full cash value from your notice of valuation is the assessor's estimate of market value. The estimator uses YOUR figure; it does not value the property.",
    lpvQuestion: "Limited property value (LPV) from your notice ($, optional but recommended)",
    lpvHelp:
      "The LPV is the value the tax is actually levied on. Enter it for a closer estimate; leaving it blank makes the tool use the FCV, which usually overstates the tax base.",
    rateLabel: "Combined tax rate (per $100 of assessed value, optional)",
    rateHelp:
      "Take this from your own tax bill or your county treasurer's rate publication. Rates are set each August by every taxing jurisdiction. Leave blank to see only the value chain.",
    rateUnit: "per-hundred",
    compute: computeArizona,
    limitations: [
      "This is not an appraisal: the full cash value you enter is assumed, not estimated by the tool.",
      "The LPV formula (prior LPV + 5%, capped at FCV) cannot be simulated without the prior year's LPV; the tool uses the LPV from your notice instead, or the FCV if you leave it blank.",
      "The 10% ratio applies to class three and class four residential property; other classes use different ratios and are not modeled.",
      "Rates are set per $100 of assessed value by each jurisdiction in August; your combined figure may differ from the sum that actually applies.",
    ],
    faqs: [
      {
        question: "Why does Arizona tax a different value than my market value?",
        answer:
          "Since Tax Year 2015, Arizona has levied no tax on the full cash value. The tax base is the limited property value — the prior year's LPV plus 5%, never above the current FCV — and the rate is applied to 10% of that figure.",
      },
      {
        question: "Why is my assessed value only 10% of my property's value?",
        answer:
          "Arizona's class three and class four residential assessment ratio is 10% of the limited property value. The small number is intentional; rates are correspondingly expressed per $100 of assessed value.",
      },
      {
        question: "Why can my actual tax bill be different?",
        answer:
          "Without the LPV from your notice the tool uses the full cash value, which usually overstates the base. Rates also differ by jurisdiction, and the bill can include non-ad valorem items this estimator does not model.",
      },
      {
        question: "Is this an appraisal?",
        answer:
          "No. The full cash value and limited property value come from your county assessor's notice of valuation, and appeals of the full cash value run through the assessor's petition for review.",
      },
    ],
  },

  nevada: {
    jurisdictionId: "nevada",
    jurisdictionName: "Nevada",
    path: "/nevada-property-tax/property-value-estimator/",
    toolTitle: "Nevada Property Value Estimator",
    intro:
      "Nevada taxes 35% of the assessor's taxable value. Enter the taxable value from your assessor's record and estimate the property tax that follows — with the tax-cap abatement explained where it applies.",
    marketValueLabel: "Taxable value ($, from your assessor's record)",
    marketValueHelp:
      "Nevada's taxable value is the assessor's figure — land at market value plus replacement cost less depreciation. Look it up in your county assessor's property record rather than estimating, because the formula does not track resale prices.",
    rateLabel: "Combined tax rate (per $100 of assessed value, optional)",
    rateHelp:
      "Take this from your own tax bill. Nevada rates are per $100 of assessed value and are set each June. Leave blank to see only the value chain.",
    rateUnit: "per-hundred",
    compute: computeNevada,
    limitations: [
      "This is not an appraisal: the taxable value you enter is assumed, not estimated by the tool.",
      "The partial abatement (tax cap) is not simulated: it caps the bill at the prior year's bill plus 3% (claimed primary residence) or up to 8% (other property), and requires the prior year's bill.",
      "The 3% primary-residence cap requires a claimed designation; a recorded ownership document removes it until a new claim is filed.",
      "Exemptions are applied after the abatement in Nevada's own process and are not modeled here.",
    ],
    faqs: [
      {
        question: "How does Nevada calculate property taxes?",
        answer:
          "The county assessor determines a taxable value (land at market value plus replacement cost less depreciation), the assessed value is 35% of it, and the rate per $100 of assessed value is applied. The bill is the lower of that calculation or the prior year's bill plus your abatement cap.",
      },
      {
        question: "Why is the estimate higher than my actual bill?",
        answer:
          "Probably the abatement. If the calculated tax exceeds the prior year's bill plus your cap (3% for a claimed primary residence, up to 8% otherwise), the abatement lowers the bill — and this estimator does not know your prior bill.",
      },
      {
        question: "Why can't I just enter my home's market value?",
        answer:
          "Because Nevada's taxable value is built by formula — replacement cost less statutory depreciation — it can diverge from resale market value. The assessor's record is the authoritative figure.",
      },
      {
        question: "Is this an appraisal?",
        answer:
          "No. Values come from your county assessor, and value appeals run through the County Board of Equalization each January.",
      },
    ],
  },

  michigan: {
    jurisdictionId: "michigan",
    jurisdictionName: "Michigan",
    path: "/michigan-property-tax/property-value-estimator/",
    toolTitle: "Michigan Property Value Estimator",
    intro:
      "Michigan assesses at 50% of true cash value and taxes taxable value. See how the two figures relate, when a transfer of ownership uncaps the taxable value, and estimate the tax that follows.",
    marketValueLabel: "True cash value ($)",
    marketValueHelp:
      "Enter the value you believe the property is worth — from a recent purchase, your own research, or the SEV doubled on your Notice of Assessment. The estimator uses YOUR figure.",
    transferQuestion: "A transfer of ownership occurred (purchase, deed, etc.)",
    transferHelp:
      "A transfer uncaps the taxable value: in the calendar year after the transfer, taxable value becomes the state equalized value. Without a transfer, the capped-value formula governs and the tool declines to compute it.",
    rateLabel: "Total millage rate (mills, optional)",
    rateHelp:
      "Take the total millage from your own tax bill (summer and winter combined). Rates differ by school district, city or township, and county. Leave blank to see only the value chain.",
    rateUnit: "per-thousand",
    compute: computeMichigan,
    limitations: [
      "This is not an appraisal: the true cash value you enter is assumed, not estimated by the tool.",
      "Without a transfer of ownership the capped value cannot be computed here — it needs the prior year's taxable value and the year's inflation rate multiplier, which this site does not publish. Your Notice of Assessment states the taxable value directly.",
      "Additions and losses enter the capped-value formula and are not modeled.",
      "Principal residence exemption (PRE) millage differences are not modeled.",
    ],
    faqs: [
      {
        question: "How does Michigan calculate property taxes?",
        answer:
          "Assessed value is 50% of true cash value, equalized to the state equalized value (SEV). The millage applies to taxable value — the lesser of the SEV or the capped value — unless a transfer of ownership uncapped it, in which case taxable value is the SEV for the year after the transfer.",
      },
      {
        question: "Why is my taxable value lower than half the market value?",
        answer:
          "Proposal A. Since 1994 the capped-value formula has limited how fast taxable value can rise — at most the change in inflation or 5%, whichever is less. Long-held properties accumulate a large gap between taxable value and SEV.",
      },
      {
        question: "I just bought the house. What happens to the taxable value?",
        answer:
          "It uncaps. In the calendar year after the transfer, taxable value becomes the state equalized value — often far higher than the seller's capped figure. The cap resumes the following year. This is the calculator's transfer checkbox.",
      },
      {
        question: "Is this an appraisal?",
        answer:
          "No. Official values come from your city or township assessor, appeals run through the March Board of Review, and the Michigan Tax Tribunal is the state-level route.",
      },
    ],
  },
};

export function getEstimatorConfig(jurisdictionId: string): StateEstimatorConfig | undefined {
  return ESTIMATOR_CONFIGS[jurisdictionId];
}

export function estimatorJurisdictionIds(): string[] {
  return Object.keys(ESTIMATOR_CONFIGS);
}

// Per-state source lists for the estimator pages: exactly the registered
// sources each state's computation and FAQ claims rest on. Kept next to the
// configs they support rather than duplicated in each page file.
export const SOURCE_IDS: Record<string, string[]> = {
  texas: [
    "tx-comptroller-valuing-property",
    "tx-comptroller-exemptions",
    "tx-comptroller-basics",
    "tx-tax-code-23-23",
  ],
  florida: [
    "fl-stat-193-011",
    "fl-stat-193-155",
    "fl-stat-193-1554",
    "fl-stat-196-031",
    "fl-stat-200-069",
  ],
  ohio: ["oh-dor-reappraisal", "oh-dor-property-tax-hub", "oh-bta-appeal-info"],
  georgia: ["ga-dor-property-faq", "ga-dor-homestead", "ga-dor-bill-of-rights"],
  arizona: [
    "az-ars-42-13301",
    "az-ars-42-15003",
    "az-ars-42-15004",
    "az-cochise-assessor-faq",
    "az-pima-treasurer-info",
  ],
  nevada: [
    "nv-clark-assessor-real-property",
    "nv-washoe-assessor-faq",
    "nv-clark-tax-abatement",
  ],
  michigan: ["mi-oakland-equalization", "mi-treasury-change-ownership", "mi-oakland-faq"],
};

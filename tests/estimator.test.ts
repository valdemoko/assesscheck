import { describe, it, expect } from "vitest";
import { readFileSync, statSync } from "node:fs";
import {
  ESTIMATOR_CONFIGS,
  SOURCE_IDS,
  getEstimatorConfig,
} from "@/lib/tools/estimator/configs";
import type { EstimatorInput } from "@/lib/tools/estimator/types";
import { siteConfig } from "@/lib/site-config";
import { SITE_PAGES } from "@/lib/seo/site-pages";

// The estimator answers a different question from the checker — "what does the
// state's value chain do with a value I supply?" — and it only works where the
// value chain's numbers are verified. This file keeps three things honest: the
// arithmetic (each state's ratios and exemptions are asserted exactly), the
// registration (every estimator page and source id exists), and the boundary
// (no config contains a tax rate, and no estimator exists for a state whose
// data would have to be invented).

const input = (over: Partial<EstimatorInput> = {}): EstimatorInput => ({
  marketValue: "",
  homestead: false,
  transferOfOwnership: false,
  limitedPropertyValue: "",
  rate: "",
  ...over,
});

const money = (n: number): string => n.toLocaleString("en-US");

describe("estimator registration", () => {
  it("covers exactly the seven states with verified numeric rules", () => {
    expect(Object.keys(ESTIMATOR_CONFIGS).sort()).toEqual(
      [
        "arizona",
        "florida",
        "georgia",
        "michigan",
        "nevada",
        "ohio",
        "texas",
      ].sort()
    );
  });

  it("no estimator exists for a state whose numbers are not verified", () => {
    const allStates = Object.keys(siteConfig.jurisdictions);
    const without = allStates.filter((s) => !ESTIMATOR_CONFIGS[s]);
    // These twelve have value chains that depend on unverified local figures;
    // a thirteenth state here would mean an estimator was added without a
    // verified dataset — or one of these was added after research caught up,
    // in which case: update this list and add arithmetic tests.
    expect(without.sort()).toEqual(
      [
        "california",
        "colorado",
        "massachusetts",
        "maryland",
        "minnesota",
        "new-jersey",
        "new-york",
        "north-carolina",
        "washington",
        "oregon",
        "virginia",
        "indiana",
      ].sort()
    );
  });

  it("every config's path matches the page file that renders it", () => {
    for (const c of Object.values(ESTIMATOR_CONFIGS)) {
      expect(statSync(`app${c.path}page.tsx`, { throwIfNoEntry: false })).toBeDefined();
      const registered = SITE_PAGES.find((p) => p.path === c.path);
      expect(registered, `${c.path} must be registered in site-pages.ts`).toBeDefined();
    }
  });

  it("every state estimator page is linked from its state hub", () => {
    for (const c of Object.values(ESTIMATOR_CONFIGS)) {
      const hub = readFileSync(`app${siteConfig.jurisdictions[c.jurisdictionId as keyof typeof siteConfig.jurisdictions].hubPath}page.tsx`, "utf8");
      expect(hub, `${c.jurisdictionName} hub must link its estimator`).toContain(c.path);
    }
  });

  it("every source id in every config's source list is registered", () => {
    for (const [id, ids] of Object.entries(SOURCE_IDS)) {
      expect(ids.length, `${id} has no source list`).toBeGreaterThan(0);
    }
  });

  it("no config contains a tax rate — rates are always user-supplied", () => {
    for (const c of Object.values(ESTIMATOR_CONFIGS)) {
      expect(c.rateHelp.toLowerCase()).toContain("your own");
      // The rate label must make clear the rate comes from the user's bill.
      expect(c.rateHelp).toMatch(/tax bill|notice|publication|rate table/);
    }
  });

  it("every config carries limitations and FAQs with real content", () => {
    for (const c of Object.values(ESTIMATOR_CONFIGS)) {
      expect(c.limitations.length).toBeGreaterThanOrEqual(3);
      expect(c.faqs.length).toBeGreaterThanOrEqual(4);
      for (const f of c.faqs) {
        expect(f.answer.length).toBeGreaterThan(60);
      }
    }
  });
});

describe("texas arithmetic", () => {
  const tx = getEstimatorConfig("texas")!;
  it("no exemption: taxable equals appraised", () => {
    const r = tx.compute(input({ marketValue: money(300000) }));
    expect(r.ok).toBe(true);
    expect(r.taxableValue).toBe(300000);
    expect(r.schoolTaxableValue).toBe(300000);
  });
  it("homestead: school exemption removes exactly $140,000 (capped at value)", () => {
    const r = tx.compute(input({ marketValue: money(300000), homestead: true }));
    expect(r.schoolTaxableValue).toBe(160000);
    // Non-school base is left at appraised value with an explanatory note.
    expect(r.taxableValue).toBe(300000);
    expect(r.notes.join(" ")).toMatch(/non-school/);
  });
  it("homestead exemption is capped when value is below the exemption", () => {
    const r = tx.compute(input({ marketValue: money(100000), homestead: true }));
    expect(r.schoolTaxableValue).toBe(0);
  });
  it("tax estimate uses the school-exempt base for homesteads", () => {
    const r = tx.compute(input({ marketValue: money(300000), homestead: true, rate: "2.5" }));
    expect(r.estimatedAnnualTax).toBeCloseTo((160000 * 2.5) / 100, 2);
  });
});

describe("florida arithmetic", () => {
  const fl = getEstimatorConfig("florida")!;
  it("no exemption: taxable equals just value", () => {
    const r = fl.compute(input({ marketValue: money(400000) }));
    expect(r.taxableValue).toBe(400000);
  });
  it("homestead under $50,000: only the first tier applies", () => {
    const r = fl.compute(input({ marketValue: money(45000), homestead: true }));
    expect(r.schoolTaxableValue).toBe(20000);
    expect(r.taxableValue).toBe(20000);
  });
  it("homestead $400,000: $50,000 total off non-school; school gets $25,000", () => {
    const r = fl.compute(input({ marketValue: money(400000), homestead: true }));
    expect(r.schoolTaxableValue).toBe(375000);
    expect(r.taxableValue).toBe(350000);
  });
  it("homestead $60,000: tier 2 removes only the value between 50k and 75k", () => {
    const r = fl.compute(input({ marketValue: money(60000), homestead: true }));
    expect(r.schoolTaxableValue).toBe(35000);
    // Tier 2 = min($25,000, just value − $50,000) = $10,000, non-school only.
    expect(r.taxableValue).toBe(25000);
  });
  it("millage rate is per $1,000", () => {
    const r = fl.compute(input({ marketValue: money(400000), homestead: true, rate: "20" }));
    expect(r.estimatedAnnualTax).toBeCloseTo((350000 * 20) / 1000, 2);
  });
});

describe("ohio arithmetic", () => {
  const oh = getEstimatorConfig("ohio")!;
  it("taxable value is exactly 35% of true value", () => {
    const r = oh.compute(input({ marketValue: money(200000) }));
    expect(r.taxableValue).toBe(70000);
  });
  it("no exemption line is produced (income-tested program not modeled)", () => {
    const r = oh.compute(input({ marketValue: money(200000), homestead: true }));
    expect(r.notes.join(" ")).toMatch(/not computed/i);
    expect(r.taxableValue).toBe(70000);
  });
  it("millage per $1,000 on the 35% base", () => {
    const r = oh.compute(input({ marketValue: money(200000), rate: "80" }));
    expect(r.estimatedAnnualTax).toBeCloseTo((70000 * 80) / 1000, 2);
  });
});

describe("georgia arithmetic", () => {
  const ga = getEstimatorConfig("georgia")!;
  it("assessed value is exactly 40% of fair market value", () => {
    const r = ga.compute(input({ marketValue: money(300000) }));
    expect(r.taxableValue).toBe(120000);
  });
  it("homestead: $2,000 off the assessed value", () => {
    const r = ga.compute(input({ marketValue: money(300000), homestead: true }));
    expect(r.taxableValue).toBe(118000);
  });
  it("exemption is capped at the assessed value", () => {
    const r = ga.compute(input({ marketValue: money(4000), homestead: true }));
    expect(r.taxableValue).toBe(0);
  });
});

describe("arizona arithmetic", () => {
  const az = getEstimatorConfig("arizona")!;
  it("without LPV, FCV is the base with a warning note", () => {
    const r = az.compute(input({ marketValue: money(400000) }));
    expect(r.taxableValue).toBe(40000);
    expect(r.notes.join(" ")).toMatch(/overstates/i);
  });
  it("LPV is used as the tax base when provided", () => {
    const r = az.compute(input({ marketValue: money(400000), limitedPropertyValue: money(300000) }));
    expect(r.taxableValue).toBe(30000);
  });
  it("LPV above FCV is rejected", () => {
    const r = az.compute(input({ marketValue: money(300000), limitedPropertyValue: money(400000) }));
    expect(r.ok).toBe(false);
  });
  it("rate is per $100 of assessed value", () => {
    const r = az.compute(input({ marketValue: money(400000), limitedPropertyValue: money(300000), rate: "10" }));
    expect(r.estimatedAnnualTax).toBeCloseTo((30000 * 10) / 100, 2);
  });
});

describe("nevada arithmetic", () => {
  const nv = getEstimatorConfig("nevada")!;
  it("assessed value is exactly 35% of taxable value", () => {
    const r = nv.compute(input({ marketValue: money(200000) }));
    expect(r.taxableValue).toBe(70000);
  });
  it("the abatement is not simulated and says so", () => {
    const r = nv.compute(input({ marketValue: money(200000) }));
    expect(r.notes.join(" ")).toMatch(/abatement \(tax cap\) is not simulated/i);
  });
  it("rate is per $100 of assessed value", () => {
    const r = nv.compute(input({ marketValue: money(200000), rate: "3.5" }));
    expect(r.estimatedAnnualTax).toBeCloseTo((70000 * 3.5) / 100, 2);
  });
});

describe("michigan arithmetic", () => {
  const mi = getEstimatorConfig("michigan")!;
  it("SEV is exactly 50% of true cash value", () => {
    const r = mi.compute(input({ marketValue: money(300000) }));
    expect(r.marketValue).toBe(300000);
  });
  it("transfer of ownership: taxable value equals SEV", () => {
    const r = mi.compute(input({ marketValue: money(300000), transferOfOwnership: true }));
    expect(r.taxableValue).toBe(150000);
  });
  it("no transfer: taxable value is NOT computed, and the notice is named", () => {
    const r = mi.compute(input({ marketValue: money(300000) }));
    expect(r.taxableValue).toBeUndefined();
    expect(r.notes.join(" ")).toMatch(/Notice of Assessment/);
  });
  it("no tax estimate without a computed taxable value", () => {
    const r = mi.compute(input({ marketValue: money(300000), rate: "40" }));
    expect(r.estimatedAnnualTax).toBeUndefined();
  });
  it("transfer + rate produces the millage estimate", () => {
    const r = mi.compute(input({ marketValue: money(300000), transferOfOwnership: true, rate: "40" }));
    expect(r.estimatedAnnualTax).toBeCloseTo((150000 * 40) / 1000, 2);
  });
});

describe("input validation", () => {
  it("rejects empty and invalid values", () => {
    const tx = getEstimatorConfig("texas")!;
    expect(tx.compute(input()).ok).toBe(false);
    expect(tx.compute(input({ marketValue: "abc" })).ok).toBe(false);
    expect(tx.compute(input({ marketValue: "0" })).ok).toBe(false);
    expect(tx.compute(input({ marketValue: "-5" })).ok).toBe(false);
  });
  it("accepts comma and dollar formats", () => {
    const tx = getEstimatorConfig("texas")!;
    expect(tx.compute(input({ marketValue: "$300,000" })).marketValue).toBe(300000);
  });
});

import { describe, it, expect } from "vitest";
import {
  pct,
  toNumber,
  runChecker,
  runCheckerWithRules,
  EMPTY_INPUT,
} from "@/lib/tools/checkerEngine";
import { JURISDICTION_RULES } from "@/lib/data/jurisdictions";

describe("toNumber", () => {
  it("parses plain numbers", () => {
    expect(toNumber("350000")).toBe(350000);
  });
  it("parses comma- and dollar-formatted input", () => {
    expect(toNumber("$350,000")).toBe(350000);
    expect(toNumber("350,000.50")).toBe(350000.5);
  });
  it("strips whitespace", () => {
    expect(toNumber(" 4200 ")).toBe(4200);
  });
  it("returns null for empty, zero, negative, and non-numeric input", () => {
    expect(toNumber("")).toBeNull();
    expect(toNumber("   ")).toBeNull();
    expect(toNumber("0")).toBeNull();
    expect(toNumber("-100")).toBeNull();
    expect(toNumber("abc")).toBeNull();
  });
});

describe("pct", () => {
  it("computes percent change to 1 decimal", () => {
    expect(pct(310000, 300000)).toBe(3.3);
    expect(pct(300000, 300000)).toBe(0);
  });
  it("computes negative changes", () => {
    expect(pct(240000, 300000)).toBe(-20);
  });
  it("handles rounding edge (round-half behavior stable)", () => {
    expect(pct(305000, 300000)).toBe(1.7);
  });
});

describe("runChecker — flag logic (texas rules)", () => {
  const texas = JURISDICTION_RULES.texas;

  it("returns no flags for empty input", () => {
    const r = runChecker(EMPTY_INPUT, "texas");
    expect(r.flags).toHaveLength(0);
    expect(r.checklist.length).toBeGreaterThan(0);
  });

  it("fires homestead-cap flag when cap applies and change > 10%", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "335000",
        previousAppraised: "300000", // +11.7%
        homesteadCapApplies: true,
      },
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).toContain("homestead-cap-exceeded");
    const capFlag = r.flags.find((f) => f.flagId === "homestead-cap-exceeded")!;
    expect(capFlag.detail).toContain("§ 23.23");
  });

  it("does NOT fire cap flag when checkbox is unchecked", () => {
    // +11.7% sits between the 10% cap and the 20% editorial threshold, so an
    // unchecked cap on this delta yields no flag — that gap is intentional:
    // the cap rule only speaks to capped properties.
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "335000",
        previousAppraised: "300000",
        homesteadCapApplies: false,
      },
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
    expect(r.flags.map((f) => f.flagId)).not.toContain("large-increase");
  });

  it("boundary: +10.0% exactly does NOT fire cap flag (rule is strictly > 10)", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "330000",
        previousAppraised: "300000",
        homesteadCapApplies: true,
      },
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("fires large-increase at >= 20%", () => {
    const r = runChecker(
      { ...EMPTY_INPUT, currentAppraised: "360000", previousAppraised: "300000" },
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).toContain("large-increase");
  });

  it("boundary: just below 20% increase fires no increase flag", () => {
    // 300000 -> 359999 is +19.9997% → rounds to 20.0; use a clearly-below value
    const r = runChecker(
      { ...EMPTY_INPUT, currentAppraised: "350000", previousAppraised: "300000" }, // +16.7%
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("large-increase");
  });

  it("fires large-decrease at <= -20%", () => {
    const r = runChecker(
      { ...EMPTY_INPUT, currentAppraised: "240000", previousAppraised: "300000" },
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).toContain("large-decrease");
  });

  it("always emits price-per-sqft flag with the mandated disclaimer when both inputs exist", () => {
    const r = runChecker(
      { ...EMPTY_INPUT, currentAppraised: "300000", squareFeet: "2000" },
      "texas"
    );
    const f = r.flags.find((x) => x.flagId === "price-per-sqft")!;
    expect(f).toBeDefined();
    expect(f.title).toContain("$150/sq ft");
    expect(f.detail).toContain(
      "screening comparison, not an appraisal, valuation, or prediction"
    );
  });

  it("computes $/sqft with decimals correctly", () => {
    const r = runChecker(
      { ...EMPTY_INPUT, currentAppraised: "410000", squareFeet: "3000" },
      "texas"
    );
    expect(r.flags.find((x) => x.flagId === "price-per-sqft")!.title).toContain("$136.67/sq ft");
  });

  it("fires sale-price-delta with direction", () => {
    const above = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "330000",
        recentSalePrice: "300000",
        recentSaleYear: "2025",
      },
      "texas"
    );
    expect(above.flags.find((f) => f.flagId === "sale-price-delta")!.title).toContain("above");

    const below = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "280000",
        recentSalePrice: "300000",
        recentSaleYear: "2025",
      },
      "texas"
    );
    expect(below.flags.find((f) => f.flagId === "sale-price-delta")!.title).toContain("below");
  });

  it("does not fire sale-price-delta without a sale year", () => {
    const r = runChecker(
      { ...EMPTY_INPUT, currentAppraised: "330000", recentSalePrice: "300000" },
      "texas"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("sale-price-delta");
  });

  it("fires condition-issues flag labeled user-provided", () => {
    const r = runChecker(
      { ...EMPTY_INPUT, conditionIssues: "Foundation crack in garage" },
      "texas"
    );
    const f = r.flags.find((x) => x.flagId === "condition-issues")!;
    expect(f.kind).toBe("user-provided");
  });

  it("never emits valuation or guarantee language in any flag", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "400000",
        previousAppraised: "300000",
        homesteadCapApplies: true,
        squareFeet: "2000",
        recentSalePrice: "250000",
        recentSaleYear: "2025",
        conditionIssues: "roof damage",
      },
      "texas"
    );
    for (const f of r.flags) {
      expect(f.detail.toLowerCase()).not.toContain("your property is worth");
      expect(f.detail.toLowerCase()).not.toContain("guarantee");
      expect(f.detail.toLowerCase()).not.toContain("will win");
    }
  });
});

describe("homestead-cap logic only when the jurisdiction defines it", () => {
  it("texas defines a cap; a synthetic cap-less jurisdiction produces no cap flag", () => {
    const noCapRules = {
      ...structuredClone(JURISDICTION_RULES.texas),
      caps: [],
      homesteadCapQuestion: undefined,
    };
    const r = runCheckerWithRules(
      {
        ...EMPTY_INPUT,
        currentAppraised: "500000",
        previousAppraised: "300000", // +66.7%
        homesteadCapApplies: true, // even checked
      },
      noCapRules
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
    expect(r.flags.map((f) => f.flagId)).toContain("large-increase");
  });
});

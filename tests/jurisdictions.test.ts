import { describe, it, expect } from "vitest";
import {
  JURISDICTION_RULES,
  getJurisdictionRules,
  requireJurisdictionRules,
} from "@/lib/data/jurisdictions";
import { requireSource } from "@/lib/sources/registry";

describe("Texas jurisdiction rules", () => {
  const texas = JURISDICTION_RULES.texas;

  it("exists and is registered under 'texas'", () => {
    expect(texas).toBeDefined();
    expect(getJurisdictionRules("texas")).toBe(texas);
  });

  it("homestead cap is 10% with § 23.23 provenance (via caps[])", () => {
    const cap = texas.caps.find((c) => c.capId === "tx-homestead-cap");
    expect(cap).toBeDefined();
    expect(cap!.maxAnnualIncreasePercent).toBe(10);
    expect(cap!.sources.map((s) => s.sourceId)).toContain(
      "tx-tax-code-23-23"
    );
  });

  it("editorial screening thresholds are 20/20", () => {
    expect(texas.largeIncreaseThresholdPercent).toBe(20);
    expect(texas.largeDecreaseThresholdPercent).toBe(20);
  });

  it("has an official property search with https URL and label", () => {
    expect(texas.propertySearch.url).toMatch(/^https:\/\//);
    expect(texas.propertySearch.label.length).toBeGreaterThan(3);
  });

  it("every rule source reference points to a registered source", () => {
    // Guard against dangling citations (mirrors requireSource behavior).
    expect(() => {
      for (const cap of texas.caps) for (const s of cap.sources) requireSource(s.sourceId);
      for (const id of texas.sourceIds) requireSource(id);
    }).not.toThrow();
  });
});

describe("requireJurisdictionRules", () => {
  it("returns rules for a registered jurisdiction", () => {
    expect(requireJurisdictionRules("texas").jurisdictionId).toBe("texas");
  });

  it("throws on an unregistered jurisdiction (no silent-empty behavior)", () => {
    expect(() => requireJurisdictionRules("georgia")).toThrow(/Unknown jurisdictionId/);
    expect(() => requireJurisdictionRules("")).toThrow(/Unknown jurisdictionId/);
  });

  it("getJurisdictionRules returns undefined (not throw) for unregistered — for optional use", () => {
    expect(getJurisdictionRules("georgia")).toBeUndefined();
  });
});

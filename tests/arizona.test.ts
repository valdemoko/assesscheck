import { describe, it, expect } from "vitest";
import {
  JURISDICTION_RULES,
  getCap,
  requireJurisdictionRules,
} from "@/lib/data/jurisdictions";
import { runChecker, EMPTY_INPUT } from "@/lib/tools/checkerEngine";
import { getDeadlines } from "@/lib/data/deadlines";
import {
  requireSource,
  getSourcesForJurisdiction,
} from "@/lib/sources/registry";
import { SITE_PAGES } from "@/lib/seo/site-pages";

describe("Arizona jurisdiction rules", () => {
  const arizona = JURISDICTION_RULES.arizona;

  it("exists and is registered under 'arizona'", () => {
    expect(arizona).toBeDefined();
    expect(requireJurisdictionRules("arizona").jurisdictionId).toBe("arizona");
    expect(arizona.jurisdictionName).toBe("Arizona");
  });

  it("limits the limited property value at 5% per year over the prior year's LPV", () => {
    const cap = getCap(arizona, "az-limited-property-value-cap")!;
    expect(cap).toBeDefined();
    expect(cap.basis).toBe("annual-increase");
    expect(cap.maxAnnualIncreasePercent).toBe(5);
    expect(cap.appliesTo).toBe("all-real-property");
    // The two values must be named distinctly: the cap must not read as a
    // limit on market value.
    expect(cap.detail).toContain("full cash value");
    expect(cap.detail).toContain("limited property value");
    expect(cap.detail).toContain("42-13301");
  });

  it("records the 15%-of-FCV construction threshold and the 'occupant is not use' rule", () => {
    const cap = getCap(arizona, "az-limited-property-value-cap")!;
    expect(cap.resetNote).toContain("15%");
    expect(cap.resetNote).toContain("42-13302");
    expect(cap.resetNote).toContain("occupant");
  });

  it("states the § 42-13304 carve-outs and that the FCV is not limited", () => {
    const cap = getCap(arizona, "az-limited-property-value-cap")!;
    expect(cap.limitations).toBeTruthy();
    expect(cap.limitations).toContain("42-13304");
    expect(cap.limitations).toContain("full cash value");
  });

  it("has a 3-step value chain: FCV → LPV → assessed value", () => {
    expect(arizona.valueChain.map((v) => v.term)).toEqual([
      "Full cash value (FCV)",
      "Limited property value (LPV)",
      "Assessed value (net assessed valuation)",
    ]);
  });

  it("does NOT inherit Texas, Florida or California law or terminology", () => {
    const all = JSON.stringify(arizona);
    for (const forbidden of [
      "23.23",
      "Tax Code",
      "Save Our Homes",
      "TRIM",
      "193.155",
      "appraisal district",
      "Appraisal Review Board",
      "Proposition 13",
      "Value Adjustment Board",
      "base year value",
    ]) {
      expect(all, `Arizona rules must not contain "${forbidden}"`).not.toContain(forbidden);
    }
    const sourceIds = [
      ...arizona.sourceIds,
      ...arizona.caps.flatMap((c) => c.sources.map((s) => s.sourceId)),
      ...arizona.valueChain.flatMap((v) => v.sources.map((s) => s.sourceId)),
    ];
    expect(sourceIds.some((id) => id.startsWith("tx-"))).toBe(false);
    expect(sourceIds.some((id) => id.startsWith("fl-"))).toBe(false);
  });

  it("every Arizona rule source resolves in the registry and belongs to Arizona", () => {
    expect(() => {
      for (const cap of arizona.caps) for (const s of cap.sources) requireSource(s.sourceId);
      for (const v of arizona.valueChain) for (const s of v.sources) requireSource(s.sourceId);
      for (const id of arizona.sourceIds) requireSource(id);
    }).not.toThrow();
    for (const id of arizona.sourceIds) {
      expect(requireSource(id).jurisdiction).toBe("Arizona");
    }
  });
});

describe("Arizona checker semantics (deliberate absence of a cap screen)", () => {
  it("has NO homesteadCapQuestion: the shared form would mislabel a full cash value", () => {
    expect(JURISDICTION_RULES.arizona.homesteadCapQuestion).toBeUndefined();
  });

  it("fires NO homestead-cap-exceeded flag on a large year-over-year increase", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "400000",
        previousAppraised: "315000", // +27% — a lawful LPV re-establishment in AZ
        homesteadCapApplies: true,
      },
      "arizona"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("uses Arizona's notice name and no other state's institutions", () => {
    const r = runChecker({ ...EMPTY_INPUT }, "arizona");
    const all = JSON.stringify(r);
    expect(all).toContain("notice of valuation");
    expect(all).not.toContain("appraisal district");
    expect(all).not.toContain("TRIM");
    expect(all).not.toContain("notice of assessed value");
  });
});

describe("Arizona deadlines (verification gate)", () => {
  const az = getDeadlines("arizona");

  it("has verified deadlines only, each with a resolvable source", () => {
    expect(az.length).toBeGreaterThanOrEqual(9);
    for (const d of az) {
      expect(d.verificationStatus).toBe("source-verified");
      expect(d.jurisdictionId).toBe("arizona");
      for (const s of d.sources) requireSource(s.sourceId);
    }
  });

  it("anchors the petition window to the certified mailing of the notice or amended notice", () => {
    const d = az.find((x) => x.deadlineId === "az-petition-for-review")!;
    expect(d.deadlineBasis).toBe("rule-based");
    expect(d.rule).toContain("60 days");
    expect(d.rule).toContain("amended notice");
    expect(d.anchoredTo).toBeTruthy();
  });

  it("records the statutory power to issue an amended notice within 60 days", () => {
    const d = az.find((x) => x.deadlineId === "az-amended-notice")!;
    expect(d.rule).toContain("AMEND");
    expect(d.rule).toContain("60 days");
  });

  it("records both payment halves with their delinquency dates", () => {
    const d = az.find((x) => x.deadlineId === "az-payment-halves")!;
    expect(d.rule).toContain("October 1");
    expect(d.rule).toContain("November 1");
    expect(d.rule).toContain("March 1");
    expect(d.rule).toContain("May 1");
  });

  it("records the December 15 direct court route and the county-level stages", () => {
    expect(az.find((x) => x.deadlineId === "az-tax-court")!.rule).toContain("December 15");
    expect(az.find((x) => x.deadlineId === "az-board-of-equalization-petition")!.rule).toContain("25 days");
    expect(az.find((x) => x.deadlineId === "az-assessor-decision")!.rule).toContain("August 15");
  });

  it("states that rates are set in August by the taxing jurisdictions, not the assessor", () => {
    const d = az.find((x) => x.deadlineId === "az-rate-setting")!;
    expect(d.rule).toContain("third Monday in August");
    expect(d.rule).toContain("not set by the assessor");
  });
});

describe("Arizona source registry", () => {
  it("all Arizona sources are primary, verified, and carry a verification date", () => {
    const sources = getSourcesForJurisdiction("arizona");
    expect(sources.length).toBeGreaterThanOrEqual(10);
    for (const s of sources) {
      expect(s.authorityLevel).toBe("primary");
      expect(s.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.status).toBe("verified");
    }
  });

  it("registers only Arizona state government and Arizona county publishers", () => {
    for (const s of getSourcesForJurisdiction("arizona")) {
      const isArizonaState = s.publisher === "Arizona Legislature (Arizona Revised Statutes)" ||
        s.publisher === "Arizona Legislature (Constitution of Arizona)" ||
        s.publisher === "Arizona State Board of Equalization (State of Arizona)";
      const isArizonaCounty = s.publisher.includes("Cochise County") ||
        s.publisher.includes("Pima County");
      expect(
        isArizonaState || isArizonaCounty,
        `Unexpected publisher: ${s.publisher}`
      ).toBe(true);
    }
  });

  it("is partitioned from Texas, Florida and California", () => {
    for (const other of ["texas", "florida", "california"]) {
      expect(
        getSourcesForJurisdiction(other).every((s) => !s.sourceId.startsWith("az-"))
      ).toBe(true);
    }
    expect(
      getSourcesForJurisdiction("arizona").every(
        (s) => !s.sourceId.startsWith("tx-") && !s.sourceId.startsWith("fl-") && !s.sourceId.startsWith("ca-")
      )
    ).toBe(true);
  });

  it("cites the statute text directly (this state's statutes were readable)", () => {
    const ids = getSourcesForJurisdiction("arizona").map((s) => s.sourceId);
    for (const statute of [
      "az-ars-42-13301",
      "az-ars-42-13302",
      "az-ars-42-13304",
      "az-ars-42-15101",
      "az-ars-42-16051",
      "az-ars-42-15003",
      "az-ars-42-15004",
    ]) {
      expect(ids).toContain(statute);
      expect(requireSource(statute).url).toContain("azleg.gov");
    }
  });
});

describe("Arizona publication gate", () => {
  it("all six Arizona pages are ready and in the sitemap", () => {
    const pages = SITE_PAGES.filter((p) => p.path.startsWith("/arizona-property-tax/"));
    expect(pages).toHaveLength(6);
    expect(pages.every((p) => p.publishStatus === "ready")).toBe(true);
  });

  it("no Arizona county page exists anywhere in the registry", () => {
    const paths = SITE_PAGES.map((p) => p.path).join("\n");
    for (const county of ["maricopa", "pima", "pinal", "yavapai", "coconino", "yuma"]) {
      expect(paths).not.toContain(county);
    }
  });
});

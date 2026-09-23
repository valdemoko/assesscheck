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
  SOURCES,
} from "@/lib/sources/registry";
import { SITE_PAGES } from "@/lib/seo/site-pages";

describe("Florida jurisdiction rules", () => {
  const florida = JURISDICTION_RULES.florida;

  it("exists and is registered under 'florida'", () => {
    expect(florida).toBeDefined();
    expect(requireJurisdictionRules("florida").jurisdictionId).toBe("florida");
  });

  it("has exactly two caps: SOH (homestead, 3%) and non-homestead residential (10%)", () => {
    expect(florida.caps).toHaveLength(2);
    const soh = getCap(florida, "fl-soh-cap")!;
    const nh = getCap(florida, "fl-nonhomestead-residential-cap")!;
    expect(soh.appliesTo).toBe("homestead");
    expect(soh.basis).toBe("lower-of-or-cpi");
    expect(soh.maxAnnualIncreasePercent).toBe(3);
    expect(nh.appliesTo).toBe("nonhomestead-residential");
    expect(nh.basis).toBe("annual-increase");
    expect(nh.maxAnnualIncreasePercent).toBe(10);
  });

  it("does NOT inherit the Texas cap or the Texas statutory source", () => {
    const capIds = florida.caps.map((c) => c.capId);
    expect(capIds).not.toContain("tx-homestead-cap");
    const allSourceIds = florida.caps.flatMap((c) => c.sources.map((s) => s.sourceId));
    expect(allSourceIds).not.toContain("tx-tax-code-23-23");
    expect(florida.sourceIds).not.toContain("tx-tax-code-23-23");
  });

  it("does NOT use § 23.23 language in any cap detail", () => {
    for (const cap of florida.caps) {
      expect(cap.detail).not.toContain("23.23");
      expect(cap.detail).not.toContain("Tax Code");
    }
  });

  it("SOH cap records the CPI leg and its limitation (never a bare 3% claim)", () => {
    const soh = getCap(florida, "fl-soh-cap")!;
    expect(soh.basis).toBe("lower-of-or-cpi");
    expect(soh.detail).toContain("lower");
    expect(soh.detail).toContain("CPI");
    expect(soh.limitations).toBeTruthy();
    expect(soh.limitations).toContain("CPI");
    expect(soh.resetNote).toBeTruthy();
  });

  it("has a 3-step value chain: just → assessed → taxable", () => {
    expect(florida.valueChain.map((v) => v.term)).toEqual([
      "Just value",
      "Assessed value",
      "Taxable value",
    ]);
  });

  it("every Florida rule source resolves in the registry and belongs to Florida", () => {
    expect(() => {
      for (const cap of florida.caps) for (const s of cap.sources) requireSource(s.sourceId);
      for (const id of florida.sourceIds) requireSource(id);
    }).not.toThrow();
    for (const id of florida.sourceIds) {
      expect(requireSource(id).jurisdiction).toBe("Florida");
    }
  });
});

describe("Texas regression — rules unchanged by the caps[] refactor", () => {
  const texas = JURISDICTION_RULES.texas;

  it("still has exactly one homestead cap at 10% via § 23.23", () => {
    expect(texas.caps).toHaveLength(1);
    const cap = getCap(texas, "tx-homestead-cap")!;
    expect(cap.maxAnnualIncreasePercent).toBe(10);
    expect(cap.basis).toBe("annual-increase");
    expect(cap.sources[0].sourceId).toBe("tx-tax-code-23-23");
  });

  it("homesteadCapQuestion wires the checkbox to the Texas cap id", () => {
    expect(texas.homesteadCapQuestion?.capId).toBe("tx-homestead-cap");
  });
});

describe("Florida checker semantics (runChecker)", () => {
  it("fires the SOH cap flag at >3% when the homestead checkbox is checked, citing § 193.155", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "339000",
        previousAppraised: "325000", // +4.3%
        homesteadCapApplies: true,
      },
      "florida"
    );
    const f = r.flags.find((x) => x.flagId === "homestead-cap-exceeded")!;
    expect(f).toBeDefined();
    expect(f.detail).toContain("193.155");
    // The SOH detail must state the lower-of rule, not a bare 3% cap claim.
    expect(f.detail).toContain("lower");
    expect(f.detail).toContain("CPI");
  });

  it("does NOT fire the SOH cap flag when the checkbox is unchecked", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "360000",
        previousAppraised: "325000", // +10.8%
        homesteadCapApplies: false,
      },
      "florida"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("boundary: exactly +3.0% does NOT fire the SOH flag", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "309000",
        previousAppraised: "300000",
        homesteadCapApplies: true,
      },
      "florida"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("never uses the word 'appraised' for the cap flag title in Florida (terminology correctness)", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "400000",
        previousAppraised: "300000",
        homesteadCapApplies: true,
      },
      "florida"
    );
    const f = r.flags.find((x) => x.flagId === "homestead-cap-exceeded")!;
    expect(f.title).not.toContain("Appraised");
    expect(f.title).toContain("Assessed");
  });

  it("no Florida flag or checklist references Texas institutions", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "400000",
        previousAppraised: "300000",
        homesteadCapApplies: true,
        squareFeet: "2000",
        conditionIssues: "roof",
      },
      "florida"
    );
    const all = JSON.stringify(r);
    expect(all).not.toContain("Texas");
    expect(all).not.toContain("appraisal district");
    expect(all).not.toContain("ARB");
    expect(all).toContain("TRIM");
  });
});

describe("Florida deadlines (C1 verification gate)", () => {
  const fl = getDeadlines("florida");

  it("has verified deadlines only", () => {
    expect(fl.length).toBeGreaterThan(5);
    for (const d of fl) {
      expect(d.verificationStatus).toBe("source-verified");
      for (const s of d.sources) requireSource(s.sourceId); // no ghost citations
    }
  });

  it("encodes the 25-day value-petition rule as rule-based, anchored to notice mailing", () => {
    const d = fl.find((x) => x.deadlineId === "fl-vab-petition-value")!;
    expect(d.deadlineBasis).toBe("rule-based");
    expect(d.anchoredTo).toBeTruthy();
    expect(d.rule).toContain("25th day");
    expect(d.rule).toContain("printed on your notice"); // defers to the TRIM-printed date
  });

  it("encodes March 1 as a fixed-date exemption deadline", () => {
    const d = fl.find((x) => x.deadlineId === "fl-homestead-application")!;
    expect(d.deadlineBasis).toBe("fixed-date");
    expect(d.fixedDate).toContain("March 1");
  });

  it("encodes the Nov 1 / Apr 1 tax calendar and the 75% payment rule", () => {
    expect(fl.find((x) => x.deadlineId === "fl-taxes-due")!.rule).toContain("November 1");
    expect(fl.find((x) => x.deadlineId === "fl-petition-partial-payment")!.rule).toContain("75%");
  });

  it("records NO deadline that failed verification (DR-486 absent)", () => {
    const all = JSON.stringify(getDeadlines("florida"));
    expect(all).not.toContain("DR-486");
    expect(all).not.toContain("DR-486A");
  });
});

describe("Florida source registry", () => {
  it("all Florida sources are primary, state-level, and carry a verification date", () => {
    const flSources = getSourcesForJurisdiction("florida");
    expect(flSources.length).toBeGreaterThanOrEqual(14);
    for (const s of flSources) {
      expect(s.authorityLevel).toBe("primary");
      expect(s.jurisdictionLevel).toBe("state");
      expect(s.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.status).toBe("verified");
    }
  });

  it("Texas sources are partitioned separately (no cross-jurisdiction bleed)", () => {
    const txSources = getSourcesForJurisdiction("texas");
    expect(txSources.every((s) => !s.sourceId.startsWith("fl-"))).toBe(true);
    expect(getSourcesForJurisdiction("florida").every((s) => !s.sourceId.startsWith("tx-"))).toBe(true);
  });

  it("unverified items from the research phase are NOT registered", () => {
    // § 193.502 / NAL presumption, DOR data portal, DR-486: NOT VERIFIED this
    // session, therefore absent from the registry by design.
    const all = Object.keys(SOURCES).join(" ");
    expect(all).not.toContain("fl-stat-193-502");
    expect(all).not.toContain("dr-486");
  });
});

describe("Florida publication gate", () => {
  it("all seven Florida pages are ready and in the sitemap", () => {
    // Six content pages plus the state's edition of the assessment checker,
    // which is the only state edition outside Texas (see
    // tests/checker-coverage.test.ts for why only these two qualify).
    const ready = SITE_PAGES.filter((p) => p.path.startsWith("/florida-property-tax/"));
    expect(ready).toHaveLength(7);
    expect(ready.every((p) => p.publishStatus === "ready")).toBe(true);
    expect(ready.map((p) => p.path)).toContain("/florida-property-tax/checker/");
  });

  it("no Miami-Dade or other Florida county page exists anywhere in the registry", () => {
    const paths = SITE_PAGES.map((p) => p.path).join("\n");
    expect(paths).not.toContain("miami-dade");
    expect(paths).not.toContain("miami");
  });
});

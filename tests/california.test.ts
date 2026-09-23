import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
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

describe("California jurisdiction rules", () => {
  const california = JURISDICTION_RULES.california;

  it("exists and is registered under 'california'", () => {
    expect(california).toBeDefined();
    expect(requireJurisdictionRules("california").jurisdictionId).toBe("california");
    expect(california.jurisdictionName).toBe("California");
  });

  it("models Proposition 13 as a base-year-inflation limit, not an annual increase", () => {
    const cap = getCap(california, "ca-prop-13-base-year-cap")!;
    expect(cap).toBeDefined();
    expect(cap.basis).toBe("base-year-inflation");
    expect(cap.basis).not.toBe("annual-increase");
    expect(cap.basis).not.toBe("lower-of-or-cpi");
    expect(cap.maxAnnualIncreasePercent).toBe(2);
    // The limit is not homestead-specific (Texas/Florida thinking).
    expect(cap.appliesTo).toBe("all-real-property");
  });

  it("models Proposition 8 decline-in-value as its own rule with the more-than-2% caveat", () => {
    const prop8 = getCap(california, "ca-prop-8-decline-in-value")!;
    expect(prop8).toBeDefined();
    expect(prop8.detail).toContain("LESSER");
    expect(prop8.detail).toMatch(/more than 2%/i);
    expect(prop8.detail).toContain("51(a)(2)");
  });

  it("has a 4-step value chain: base year → factored base year → assessed → net taxable", () => {
    expect(california.valueChain.map((v) => v.term)).toEqual([
      "Base year value",
      "Factored base year value",
      "Assessed value",
      "Net taxable value",
    ]);
  });

  it("publishes NO dollar exemption amounts (none were verified)", () => {
    const all = JSON.stringify(california);
    expect(all).not.toContain("$7,000");
    expect(all).not.toContain("7,000");
  });

  it("does NOT inherit Texas or Florida law or terminology", () => {
    const all = JSON.stringify(california);
    for (const forbidden of [
      "23.23",
      "Tax Code",
      "Save Our Homes",
      "TRIM",
      "193.155",
      "appraisal district",
      "Appraisal Review Board",
    ]) {
      expect(all, `California rules must not contain "${forbidden}"`).not.toContain(forbidden);
    }
    const sourceIds = [
      ...california.sourceIds,
      ...california.caps.flatMap((c) => c.sources.map((s) => s.sourceId)),
    ];
    expect(sourceIds.some((id) => id.startsWith("tx-"))).toBe(false);
    expect(sourceIds.some((id) => id.startsWith("fl-"))).toBe(false);
  });

  it("every California rule source resolves in the registry and belongs to California", () => {
    expect(() => {
      for (const cap of california.caps) for (const s of cap.sources) requireSource(s.sourceId);
      for (const v of california.valueChain) for (const s of v.sources) requireSource(s.sourceId);
      for (const id of california.sourceIds) requireSource(id);
    }).not.toThrow();
    for (const id of california.sourceIds) {
      expect(requireSource(id).jurisdiction).toBe("California");
    }
  });
});

describe("California checker semantics (deliberate absence of a cap screen)", () => {
  it("has NO homesteadCapQuestion: a year-over-year comparison cannot screen § 51", () => {
    expect(JURISDICTION_RULES.california.homesteadCapQuestion).toBeUndefined();
  });

  it("fires NO homestead-cap-exceeded flag even on a very large year-over-year increase", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "560000",
        previousAppraised: "520000", // +7.7% — lawful in CA (decline-in-value recovery)
        homesteadCapApplies: true,
      },
      "california"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("still fires the editorial large-increase flag above the configured threshold", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "700000",
        previousAppraised: "500000", // +40%
        homesteadCapApplies: true,
      },
      "california"
    );
    expect(r.flags.map((f) => f.flagId)).toContain("large-increase");
  });

  it("uses California's notice name in the checklist, never Texas/Florida institutions", () => {
    const r = runChecker({ ...EMPTY_INPUT }, "california");
    const all = JSON.stringify(r);
    expect(all).toContain("notice of assessed value");
    expect(all).not.toContain("appraisal district");
    expect(all).not.toContain("TRIM");
  });
});

describe("California deadlines (verification gate)", () => {
  const ca = getDeadlines("california");

  it("has verified deadlines only, each with a resolvable source", () => {
    expect(ca.length).toBeGreaterThanOrEqual(9);
    for (const d of ca) {
      expect(d.verificationStatus).toBe("source-verified");
      expect(d.jurisdictionId).toBe("california");
      for (const s of d.sources) requireSource(s.sourceId);
    }
  });

  it("encodes the filing window as rule-based and defers to the county's date", () => {
    const d = ca.find((x) => x.deadlineId === "ca-appeal-filing-window")!;
    expect(d.deadlineBasis).toBe("rule-based");
    expect(d.anchoredTo).toBeTruthy();
    expect(d.rule).toContain("July 2");
    expect(d.rule).toContain("September 15");
    expect(d.rule).toContain("November 30");
    expect(d.rule).toContain("clerk of the board");
  });

  it("encodes January 1 as the lien date and the two tax installments", () => {
    const lien = ca.find((x) => x.deadlineId === "ca-lien-date")!;
    expect(lien.deadlineBasis).toBe("fixed-date");
    expect(lien.fixedDate).toContain("January 1");
    const pay = ca.find((x) => x.deadlineId === "ca-payment-installments")!;
    expect(pay.rule).toContain("November 1");
    expect(pay.rule).toContain("April 10");
  });

  it("records the 30/15-day exchange of information and the 6-month court window", () => {
    expect(ca.find((x) => x.deadlineId === "ca-evidence-exchange")!.rule).toContain("30 days");
    expect(ca.find((x) => x.deadlineId === "ca-evidence-exchange")!.rule).toContain("15 days");
    expect(ca.find((x) => x.deadlineId === "ca-judicial-review")!.rule).toContain("six months");
  });

  it("never states an exemption dollar amount", () => {
    const all = JSON.stringify(ca);
    expect(all).not.toContain("$7,000");
    expect(all).toContain("not published by this site");
  });
});

describe("California source registry", () => {
  it("all California sources are primary, carry a verification date, and are verified", () => {
    const sources = getSourcesForJurisdiction("california");
    expect(sources.length).toBeGreaterThanOrEqual(6);
    for (const s of sources) {
      expect(s.authorityLevel).toBe("primary");
      expect(s.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.status).toBe("verified");
    }
  });

  it("is partitioned from Texas and Florida (no cross-jurisdiction bleed)", () => {
    expect(getSourcesForJurisdiction("california").every((s) => !s.sourceId.startsWith("tx-"))).toBe(true);
    expect(getSourcesForJurisdiction("california").every((s) => !s.sourceId.startsWith("fl-"))).toBe(true);
    expect(getSourcesForJurisdiction("texas").every((s) => !s.sourceId.startsWith("ca-"))).toBe(true);
    expect(getSourcesForJurisdiction("florida").every((s) => !s.sourceId.startsWith("ca-"))).toBe(true);
  });

  it("registers only official government publishers for California", () => {
    const allowed = [
      "California State Board of Equalization",
      "California Department of Tax and Fee Administration (State of California)",
      "Yolo County Assessor (ACE Department), California",
      // The statute itself: leginfo is published by the Legislative Counsel of
      // California. Added 2026-09-23 with ca-rtc-51 and ca-rtc-1603.
      "California Legislative Counsel (leginfo.legislature.ca.gov)",
    ];
    for (const s of getSourcesForJurisdiction("california")) {
      expect(allowed, `Unexpected publisher: ${s.publisher}`).toContain(s.publisher);
    }
  });
});

describe("California publication gate", () => {
  it("all seven California pages are ready and in the sitemap", () => {
    const pages = SITE_PAGES.filter((p) => p.path.startsWith("/california-property-tax/"));
    expect(pages).toHaveLength(7);
    expect(pages.every((p) => p.publishStatus === "ready")).toBe(true);
  });

  it("no California county page exists anywhere in the registry", () => {
    const paths = SITE_PAGES.map((p) => p.path).join("\n");
    for (const county of ["los-angeles", "san-diego", "orange-county", "alameda", "sacramento", "contra-costa"]) {
      expect(paths).not.toContain(county);
    }
  });

  it("the cross-state hub is registered so state pages are not orphans", () => {
    const hub = SITE_PAGES.find((p) => p.path === "/property-by-state/") ??
      SITE_PAGES.find((p) => p.path === "/property-tax-by-state/");
    expect(hub).toBeDefined();
    expect(hub!.publishStatus).toBe("ready");
  });
});

describe("California is cited from statute, not only from pages describing it", () => {
  // California was for a long time the weakest provenance on the site: every
  // citation was an official page STATING the rule, because leginfo hands a text
  // extractor nothing but the section title. On 2026-09-23 the statute text was
  // finally read through a browser that executes JavaScript, and these sections
  // were registered. This test is what stops that from quietly reverting to the
  // weaker class — deleting either source, or dropping it from the page that
  // depends on it, fails here.
  const STATUTE_SOURCES = [
    ["ca-rtc-51", "/california-property-tax/proposition-13-and-8/"],
    ["ca-rtc-1603", "/california-property-tax/deadlines/"],
  ] as const;

  it("registers both statute sections as primary California sources read in full", () => {
    for (const [id] of STATUTE_SOURCES) {
      const s = requireSource(id);
      expect(s.jurisdiction).toBe("California");
      expect(s.jurisdictionId).toBe("california");
      expect(s.authorityLevel).toBe("primary");
      expect(s.status).toBe("verified");
      expect(s.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.url).toContain("leginfo.legislature.ca.gov");
      expect(s.notes).toMatch(/Read in full/);
    }
  });

  it("cites each section on the page whose claim depends on it", () => {
    for (const [id, page] of STATUTE_SOURCES) {
      const source = readFileSync(`app${page}page.tsx`, "utf8");
      expect(source, `${page} should cite ${id}`).toContain(`"${id}"`);
    }
  });

  it("records what § 51 actually says, so the notes cannot drift from the statute", () => {
    const notes = requireSource("ca-rtc-51").notes!;
    expect(notes).toContain("exceed 2 percent");
    expect(notes).toMatch(/OCTOBER of the prior fiscal year/);
    expect(notes).toMatch(/ANNUALLY REAPPRAISED/);
    const window = requireSource("ca-rtc-1603").notes!;
    expect(window).toContain("July 2 to September 15");
    expect(window).toContain("NOVEMBER 30");
  });
});

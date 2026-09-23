import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  JURISDICTION_RULES,
  getCap,
  requireJurisdictionRules,
} from "@/lib/data/jurisdictions";
import { runChecker, EMPTY_INPUT } from "@/lib/tools/checkerEngine";
import { getDeadlines } from "@/lib/data/deadlines";
import { requireSource, getSourcesForJurisdiction } from "@/lib/sources/registry";
import { SITE_PAGES } from "@/lib/seo/site-pages";

const OREGON_PAGES = SITE_PAGES.filter((p) => p.path.startsWith("/oregon-property-tax/"));

function oregonPageFiles(): string[] {
  const dir = "app/oregon-property-tax";
  const out: string[] = [];
  for (const entry of readdirSync(dir, { recursive: true }) as string[]) {
    const p = join(dir, entry).replace(/\\/g, "/");
    if (!p.endsWith(".tsx")) continue;
    if (statSync(p).isDirectory()) continue;
    out.push(p);
  }
  return out;
}

describe("Oregon jurisdiction rules", () => {
  const oregon = JURISDICTION_RULES.oregon;

  it("exists and is registered under 'oregon'", () => {
    expect(oregon).toBeDefined();
    expect(requireJurisdictionRules("oregon").jurisdictionId).toBe("oregon");
    expect(oregon.jurisdictionName).toBe("Oregon");
  });

  it("caps the MAXIMUM ASSESSED VALUE, which is a limit and not the tax base", () => {
    expect(oregon.caps).toHaveLength(1);
    const cap = getCap(oregon, "or-maximum-assessed-value-cap")!;
    expect(cap.capSubject).toBe("assessed-value");
    expect(cap.basis).toBe("annual-increase");
    expect(cap.maxAnnualIncreasePercent).toBe(3);
    expect(cap.appliesTo).toBe("all-real-property");
  });

  it("states the 103% test itself rather than calling it a flat 3%", () => {
    const cap = getCap(oregon, "or-maximum-assessed-value-cap")!;
    expect(cap.detail).toContain("GREATER of 103%");
    expect(cap.detail).toContain("LOWER of the current MAV or the current RMV");
    // The distinction that makes Oregon's 3% different from the other states.
    expect(cap.detail).toMatch(/can see its MAV rise by more than 3%/i);
  });

  it("states on the cap itself that the tax bill is not limited to 3%", () => {
    const cap = getCap(oregon, "or-maximum-assessed-value-cap")!;
    expect(cap.limitations).toMatch(/tax amounts are not limited to a 3% increase/i);
    expect(cap.limitations).toMatch(/MAXIMUM ASSESSED VALUE only/i);
  });

  it("records the exception events with their published and indexed thresholds", () => {
    const cap = getCap(oregon, "or-maximum-assessed-value-cap")!;
    expect(cap.resetNote).toContain("exception event");
    expect(cap.resetNote).toContain("$18,700");
    expect(cap.resetNote).toContain("$46,200");
    expect(cap.resetNote).toMatch(/indexes to the CPI/i);
    expect(cap.resetNote).toMatch(/Ordinary ongoing maintenance and repair is not an exception event/i);
    expect(cap.resetNote).toMatch(/does not start from 1995-96 values/i);
  });

  it("carries a four-step value chain that ends at compression, not at a value", () => {
    expect(oregon.valueChain.map((v) => v.term)).toEqual([
      "Real market value (RMV)",
      "Maximum assessed value (MAV)",
      "Assessed value (AV)",
      "Tax bill (after Measure 5 compression)",
    ]);
    const mav = oregon.valueChain[1];
    expect(mav.definition).toMatch(/not an opinion of value/i);
    const av = oregon.valueChain[2];
    expect(av.definition).toMatch(/lower of the maximum assessed value or the real market value/i);
    const bill = oregon.valueChain[3];
    expect(bill.definition).toContain("$5 per $1,000");
    expect(bill.definition).toContain("$10 per $1,000");
    expect(bill.definition).toMatch(/losing that compression/i);
  });

  it("does NOT inherit Texas, Florida, California, Arizona or Nevada law or terminology", () => {
    const all = JSON.stringify(oregon);
    for (const forbidden of [
      "23.23",
      "41.44",
      "Tax Code",
      "Save Our Homes",
      "TRIM",
      "193.155",
      "appraisal district",
      "Appraisal Review Board",
      "Proposition 13",
      "Value Adjustment Board",
      "base year value",
      "limited property value",
      "42-13301",
      "partial abatement",
      "361.4723",
      "recorded ownership document",
      "full cash value",
    ]) {
      expect(all, `Oregon rules must not contain "${forbidden}"`).not.toContain(forbidden);
    }
    const sourceIds = [
      ...oregon.sourceIds,
      ...oregon.caps.flatMap((c) => c.sources.map((s) => s.sourceId)),
      ...oregon.valueChain.flatMap((v) => v.sources.map((s) => s.sourceId)),
    ];
    for (const prefix of ["tx-", "fl-", "ca-", "az-", "nv-"]) {
      expect(sourceIds.some((id) => id.startsWith(prefix))).toBe(false);
    }
  });

  it("every Oregon rule source resolves in the registry and belongs to Oregon", () => {
    expect(() => {
      for (const cap of oregon.caps) for (const s of cap.sources) requireSource(s.sourceId);
      for (const v of oregon.valueChain) for (const s of v.sources) requireSource(s.sourceId);
      for (const id of oregon.sourceIds) requireSource(id);
    }).not.toThrow();
    for (const id of oregon.sourceIds) {
      expect(requireSource(id).jurisdiction).toBe("Oregon");
    }
  });
});

describe("Oregon checker semantics (deliberate absence of a cap screen)", () => {
  it("has NO homesteadCapQuestion: a screen comparing one value cannot see MAV, RMV and exceptions", () => {
    expect(JURISDICTION_RULES.oregon.homesteadCapQuestion).toBeUndefined();
  });

  it("fires NO homestead-cap-exceeded flag on a large year-over-year value increase", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "683000",
        previousAppraised: "470000", // +45% — lawful when the RMV recovers above the MAV
        homesteadCapApplies: true,
      },
      "oregon"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("uses Oregon's own notice name and none of the other states' institutions", () => {
    const r = runChecker({ ...EMPTY_INPUT }, "oregon");
    const all = JSON.stringify(r);
    expect(all).toContain("tax statement");
    expect(all).not.toContain("notice of appraised value");
    expect(all).not.toContain("TRIM");
    expect(all).not.toContain("notice of assessed value");
    expect(all).not.toContain("notice of valuation");
    expect(all).not.toContain("value notice");
  });
});

describe("Oregon deadlines (verification gate)", () => {
  const or = getDeadlines("oregon");

  it("has verified deadlines only, each with a resolvable source", () => {
    expect(or.length).toBeGreaterThanOrEqual(9);
    for (const d of or) {
      expect(d.verificationStatus).toBe("source-verified");
      expect(d.jurisdictionId).toBe("oregon");
      expect(d.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const s of d.sources) requireSource(s.sourceId);
    }
  });

  it("anchors the year on January 1 and puts no value notice before the statement", () => {
    const d = or.find((x) => x.deadlineId === "or-assessment-date")!;
    expect(d.deadlineType).toBe("assessment-date");
    expect(d.deadlineBasis).toBe("fixed-date");
    expect(d.rule).toContain("January 1");
    expect(or.filter((x) => x.deadlineType === "notice-delivery")).toHaveLength(1);
  });

  it("records the tax statement mailing and makes the statement the appeal trigger", () => {
    const d = or.find((x) => x.deadlineId === "or-tax-statement-mailing")!;
    expect(d.deadlineType).toBe("notice-delivery");
    expect(d.rule).toContain("October 25");
    expect(d.rule).toContain("assessed value");
    expect(d.rule).toMatch(/appeal clock runs from receiving it/i);
  });

  it("keeps the informal review and the board petition as separate steps with separate dates", () => {
    const informal = or.find((x) => x.deadlineId === "or-informal-review")!;
    expect(informal.deadlineType).toBe("informal-review");
    expect(informal.rule).toContain("December 16");
    const board = or.find((x) => x.deadlineId === "or-bopta-petition")!;
    expect(board.deadlineType).toBe("protest-filing");
    expect(board.rule).toContain("December 31");
    expect(board.rule).toContain("next business day");
    expect(board.rule).toMatch(/county clerk/i);
    expect(board.rule).toMatch(/first Monday in February and April 15/i);
    expect(board.rule).toContain("no fee");
  });

  it("expresses the Tax Court windows in DAYS, not months", () => {
    const complaint = or.find((x) => x.deadlineId === "or-tax-court-complaint")!;
    expect(complaint.deadlineBasis).toBe("rule-based");
    expect(complaint.rule).toContain("30 days");
    expect(complaint.rule).toMatch(/30 days, not one month/i);
    expect(complaint.anchoredTo).toBe("the mailing date of the board's order");
    const regular = or.find((x) => x.deadlineId === "or-tax-court-regular-division")!;
    expect(regular.rule).toContain("60 days");
    expect(regular.rule).toMatch(/days, not two months/i);
    expect(regular.anchoredTo).toBe("the date of the magistrate's decision");
  });

  it("records the direct Magistrate Division route as its own December 31 filing", () => {
    const d = or.find((x) => x.deadlineId === "or-tax-court-magistrate")!;
    expect(d.deadlineType).toBe("judicial-review");
    expect(d.deadlineBasis).toBe("fixed-date");
    expect(d.rule).toContain("December 31");
    expect(d.rule).toMatch(/Department of Revenue/);
    const judicial = or.filter((d) => d.deadlineType === "judicial-review");
    expect(judicial).toHaveLength(3);
  });

  it("records the March 15 business personal property return with no extension", () => {
    const d = or.find((x) => x.deadlineId === "or-business-personal-property-return")!;
    expect(d.deadlineType).toBe("rendition");
    expect(d.rule).toContain("March 15");
    expect(d.rule).toContain("150-553-004");
    expect(d.rule).toMatch(/No late-filing extension/i);
  });

  it("records the three payment dates with the next-business-day rule", () => {
    const d = or.find((x) => x.deadlineId === "or-payment-installments")!;
    expect(d.deadlineType).toBe("payment");
    expect(d.deadlineBasis).toBe("rule-based");
    expect(d.rule).toContain("November 15");
    expect(d.rule).toContain("February 15");
    expect(d.rule).toContain("May 15");
    expect(d.rule).toContain("next business day");
    expect(d.anchoredTo).toBe("the tax statement mailed before October 25");
  });

  it("imports no other state's deadline text", () => {
    const all = or.map((d) => `${d.rule} ${d.anchoredTo ?? ""}`).join(" ").toLowerCase();
    // Word boundaries matter here: a bare "may 1" would match Oregon's own
    // "May 15" payment installment, which is correct text. Only the whole date
    // counts, so every pattern is bounded and barred from a following digit.
    const foreign: [RegExp, string][] = [
      [/\bmay 1\b(?!\d)/, "texas/florida exemption and protest dates"],
      [/\bseptember 15\b(?!\d)/, "florida VAB and Arizona notice dates"],
      [/\bmarch 1\b(?!\d)/, "florida exemption deadline and Texas notice date"],
      [/\b25th day following\b/, "Texas notice-of-protest deadline"],
      [/\b60 days after the date the assessor mailed\b/, "Arizona petition deadline"],
      [/\bjanuary 15\b(?!\d)/, "Nevada county board filing"],
      [/\bjune 30\b(?!\d)/, "Nevada abatement petition"],
      [/\bjuly 1\b(?!\d)/, "Nevada lien date"],
      [/\bthird monday in august\b/, "Nevada installment date"],
    ];
    for (const [pattern, what] of foreign) {
      expect(all, `Oregon deadlines must not import ${what}`).not.toMatch(pattern);
    }
  });
});

describe("Oregon source registry", () => {
  it("all Oregon sources are primary, verified, and carry a verification date", () => {
    const sources = getSourcesForJurisdiction("oregon");
    expect(sources.length).toBeGreaterThanOrEqual(6);
    for (const s of sources) {
      expect(s.authorityLevel).toBe("primary");
      expect(s.status).toBe("verified");
      expect(s.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("registers Oregon state and Oregon county publishers only", () => {
    for (const s of getSourcesForJurisdiction("oregon")) {
      const isState = s.publisher.startsWith("Oregon Secretary of State");
      const isCounty = s.publisher.endsWith("(Oregon)");
      expect(isState || isCounty, `Unexpected publisher: ${s.publisher}`).toBe(true);
    }
  });

  it("reads the core formula from an administrative rule, not just from a county", () => {
    // Unlike the other states, Oregon's central formula is quotable from a
    // primary rule (OARD). That is the strongest provenance on the site and it
    // should not be lost in a later rewrite.
    const rule = requireSource("or-oar-150-308-0120");
    expect(rule.url).toContain("sos.state.or.us");
    expect(rule.notes).toContain("103% test");
    expect(rule.notes).toMatch(/Multiply the prior year assessed value \(AV\) by 1\.03/);
  });

  it("records the county sources that state the exception thresholds and the 3% limit", () => {
    const faq = requireSource("or-multco-assessment-faq");
    expect(faq.notes).toContain("$18,700");
    expect(faq.notes).toContain("$46,200");
    expect(faq.notes).toMatch(/only component of your property taxes where a 3% increase limit applies/i);
    const calc = requireSource("or-multco-tax-calculation");
    expect(calc.notes).toMatch(/lower of these two amounts/i);
    expect(calc.notes).toMatch(/Tax amounts are not limited to a 3% increase/i);
  });

  it("is partitioned from the five states already covered", () => {
    for (const other of ["texas", "florida", "california", "arizona", "nevada"]) {
      expect(
        getSourcesForJurisdiction(other).every((s) => !s.sourceId.startsWith("or-"))
      ).toBe(true);
    }
    expect(
      getSourcesForJurisdiction("oregon").every(
        (s) =>
          !s.sourceId.startsWith("tx-") &&
          !s.sourceId.startsWith("fl-") &&
          !s.sourceId.startsWith("ca-") &&
          !s.sourceId.startsWith("az-") &&
          !s.sourceId.startsWith("nv-")
      )
    ).toBe(true);
  });
});

describe("Oregon publication gate", () => {
  it("all six Oregon pages are ready and in the sitemap", () => {
    expect(OREGON_PAGES).toHaveLength(6);
    expect(OREGON_PAGES.every((p) => p.publishStatus === "ready")).toBe(true);
  });

  it("no Oregon county page exists anywhere in the registry", () => {
    const paths = SITE_PAGES.map((p) => p.path).join("\n");
    for (const county of ["multnomah", "yamhill", "hood-river", "washington-county", "lane"]) {
      expect(paths).not.toContain(county);
    }
  });

  it("every source cited by an Oregon page is an Oregon source", () => {
    const foreignIds = [
      ...getSourcesForJurisdiction("texas"),
      ...getSourcesForJurisdiction("florida"),
      ...getSourcesForJurisdiction("california"),
      ...getSourcesForJurisdiction("arizona"),
      ...getSourcesForJurisdiction("nevada"),
    ].map((s) => s.sourceId);
    const violations: string[] = [];
    for (const file of oregonPageFiles()) {
      const text = readFileSync(file, "utf8");
      for (const id of foreignIds) {
        if (text.includes(`"${id}"`)) violations.push(`${file} cites ${id}`);
      }
    }
    expect(violations).toEqual([]);
  });

  it("every or- identifier an Oregon page cites is a registered source or a registered deadline", () => {
    const known = new Set([
      ...getSourcesForJurisdiction("oregon").map((s) => s.sourceId),
      ...getDeadlines("oregon").map((d) => d.deadlineId),
    ]);
    const violations: string[] = [];
    for (const file of oregonPageFiles()) {
      const text = readFileSync(file, "utf8");
      for (const match of text.matchAll(/"(or-[a-z0-9-]+)"/g)) {
        if (!known.has(match[1])) violations.push(`${file} cites unknown ${match[1]}`);
      }
    }
    expect(violations).toEqual([]);
  });
});

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

const NEVADA_PAGES = SITE_PAGES.filter((p) => p.path.startsWith("/nevada-property-tax/"));

function nevadaPageFiles(): string[] {
  const dir = "app/nevada-property-tax";
  const out: string[] = [];
  for (const entry of readdirSync(dir, { recursive: true }) as string[]) {
    const p = join(dir, entry).replace(/\\/g, "/");
    if (!p.endsWith(".tsx")) continue;
    if (statSync(p).isDirectory()) continue;
    out.push(p);
  }
  return out;
}

describe("Nevada jurisdiction rules", () => {
  const nevada = JURISDICTION_RULES.nevada;

  it("exists and is registered under 'nevada'", () => {
    expect(nevada).toBeDefined();
    expect(requireJurisdictionRules("nevada").jurisdictionId).toBe("nevada");
    expect(nevada.jurisdictionName).toBe("Nevada");
  });

  it("caps the TAX AMOUNT, not a value: both caps declare capSubject 'tax-amount'", () => {
    expect(nevada.caps).toHaveLength(2);
    for (const cap of nevada.caps) {
      expect(cap.capSubject).toBe("tax-amount");
      expect(cap.basis).toBe("annual-increase");
    }
    const low = getCap(nevada, "nv-primary-residence-abatement")!;
    const general = getCap(nevada, "nv-general-abatement")!;
    expect(low.maxAnnualIncreasePercent).toBe(3);
    expect(low.appliesTo).toBe("primary-residence");
    expect(general.maxAnnualIncreasePercent).toBe(8);
    expect(general.appliesTo).toBe("other-property");
  });

  it("states on the cap itself that the value is not capped", () => {
    const low = getCap(nevada, "nv-primary-residence-abatement")!;
    expect(low.detail).toContain("tax bill");
    expect(low.detail).toContain("361.471");
    expect(low.detail).toMatch(/does not limit the increase in assessed value/i);
  });

  it("records the triggers that are NOT value-related: new to the roll, recorded ownership document, July 1 status", () => {
    const low = getCap(nevada, "nv-primary-residence-abatement")!;
    expect(low.resetNote).toContain("NEW TO THE ROLL");
    expect(low.resetNote).toContain("recorded ownership document");
    expect(low.resetNote).toContain("July 1");
  });

  it("keeps the three stated limits on the low cap (ceiling, lawful causes, exemptions after the cap)", () => {
    const low = getCap(nevada, "nv-primary-residence-abatement")!;
    expect(low.limitations).toContain("ceiling");
    expect(low.limitations).toMatch(/non-ad valorem/i);
    expect(low.limitations).toMatch(/AFTER the cap/i);
  });

  it("treats the general abatement as a ceiling of a range, not a fixed constant", () => {
    const general = getCap(nevada, "nv-general-abatement")!;
    expect(general.detail).toContain("up to");
    expect(general.limitations).toMatch(/not a fixed statutory constant/i);
  });

  it("has a 3-step value chain ending in the abated bill, with the 35% ratio asserted", () => {
    expect(nevada.valueChain.map((v) => v.term)).toEqual([
      "Taxable value",
      "Assessed value",
      "Tax bill, then the abatement",
    ]);
    const assessed = nevada.valueChain[1];
    expect(assessed.definition).toContain("Thirty-five per cent");
    const bill = nevada.valueChain[2];
    expect(bill.definition).toMatch(/LOWER of that calculation or the prior year's bill/i);
  });

  it("does NOT inherit Texas, Florida, California or Arizona law or terminology", () => {
    const all = JSON.stringify(nevada);
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
      "notice of valuation",
    ]) {
      expect(all, `Nevada rules must not contain "${forbidden}"`).not.toContain(forbidden);
    }
    const sourceIds = [
      ...nevada.sourceIds,
      ...nevada.caps.flatMap((c) => c.sources.map((s) => s.sourceId)),
      ...nevada.valueChain.flatMap((v) => v.sources.map((s) => s.sourceId)),
    ];
    for (const prefix of ["tx-", "fl-", "ca-", "az-"]) {
      expect(sourceIds.some((id) => id.startsWith(prefix))).toBe(false);
    }
  });

  it("every Nevada rule source resolves in the registry and belongs to Nevada", () => {
    expect(() => {
      for (const cap of nevada.caps) for (const s of cap.sources) requireSource(s.sourceId);
      for (const v of nevada.valueChain) for (const s of v.sources) requireSource(s.sourceId);
      for (const id of nevada.sourceIds) requireSource(id);
    }).not.toThrow();
    for (const id of nevada.sourceIds) {
      expect(requireSource(id).jurisdiction).toBe("Nevada");
    }
  });
});

describe("cap subject is declared everywhere (the Nevada lesson)", () => {
  it("every cap in every jurisdiction declares what it bounds", () => {
    for (const [id, rules] of Object.entries(JURISDICTION_RULES)) {
      for (const cap of rules.caps) {
        expect(
          cap.capSubject,
          `${id}/${cap.capId} must declare capSubject`
        ).toMatch(/^(assessed-value|tax-amount)$/);
      }
    }
  });

  it("only Nevada caps a tax amount; every other state caps a value", () => {
    for (const [id, rules] of Object.entries(JURISDICTION_RULES)) {
      for (const cap of rules.caps) {
        if (id === "nevada") continue;
        expect(
          cap.capSubject,
          `${id}/${cap.capId} should cap a value`
        ).toBe("assessed-value");
      }
    }
  });
});

describe("Nevada checker semantics (deliberate absence of a cap screen)", () => {
  it("has NO homesteadCapQuestion: the shared form compares values, which Nevada does not cap", () => {
    expect(JURISDICTION_RULES.nevada.homesteadCapQuestion).toBeUndefined();
  });

  it("fires NO homestead-cap-exceeded flag on a large year-over-year value increase", () => {
    const r = runChecker(
      {
        ...EMPTY_INPUT,
        currentAppraised: "264600",
        previousAppraised: "198450", // +33% — a lawful value move under a correct abatement
        homesteadCapApplies: true,
      },
      "nevada"
    );
    expect(r.flags.map((f) => f.flagId)).not.toContain("homestead-cap-exceeded");
  });

  it("uses Nevada's notice name and no other state's institutions", () => {
    const r = runChecker({ ...EMPTY_INPUT }, "nevada");
    const all = JSON.stringify(r);
    expect(all).toContain("value notice");
    expect(all).not.toContain("notice of appraisal");
    expect(all).not.toContain("TRIM");
    expect(all).not.toContain("notice of assessed value");
    expect(all).not.toContain("notice of valuation");
  });
});

describe("Nevada deadlines (verification gate)", () => {
  const nv = getDeadlines("nevada");

  it("has verified deadlines only, each with a resolvable source", () => {
    expect(nv.length).toBeGreaterThanOrEqual(9);
    for (const d of nv) {
      expect(d.verificationStatus).toBe("source-verified");
      expect(d.jurisdictionId).toBe("nevada");
      expect(d.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      for (const s of d.sources) requireSource(s.sourceId);
    }
  });

  it("runs on the fiscal year: the lien date is July 1, not January 1", () => {
    const d = nv.find((x) => x.deadlineId === "nv-lien-date")!;
    expect(d.deadlineBasis).toBe("fixed-date");
    expect(d.rule).toContain("July 1");
    expect(d.rule).toContain("July 1 to June 30");
  });

  it("records the January 15 value appeal with its next-business-day rule", () => {
    const d = nv.find((x) => x.deadlineId === "nv-value-appeal-county-board")!;
    expect(d.deadlineType).toBe("protest-filing");
    expect(d.rule).toContain("January 15");
    expect(d.rule).toContain("next business day");
    expect(d.rule).toMatch(/burden of proof is on the taxpayer/i);
  });

  it("records the March 10 state appeal separately from the January 15 county filing", () => {
    const d = nv.find((x) => x.deadlineId === "nv-state-board-appeal")!;
    expect(d.deadlineType).toBe("appeal-higher-board");
    expect(d.rule).toContain("March 10");
  });

  it("records the June 30 abatement petition and the 30-day Tax Commission appeal", () => {
    const petition = nv.find((x) => x.deadlineId === "nv-abatement-petition")!;
    expect(petition.deadlineType).toBe("abatement-review");
    expect(petition.rule).toContain("June 30");
    expect(petition.rule).toContain("361.4734");
    const commission = nv.find((x) => x.deadlineId === "nv-tax-commission-appeal")!;
    expect(commission.deadlineBasis).toBe("rule-based");
    expect(commission.rule).toContain("30 days");
    expect(commission.anchoredTo).toBeTruthy();
  });

  it("keeps the value clock and the abatement clock as different records", () => {
    const valueIds = nv.filter((d) => d.deadlineType === "protest-filing").map((d) => d.deadlineId);
    const abatementIds = nv.filter((d) => d.deadlineType === "abatement-review").map((d) => d.deadlineId);
    expect(valueIds).toHaveLength(1);
    expect(abatementIds).toHaveLength(1);
    expect(valueIds[0]).not.toBe(abatementIds[0]);
  });

  it("records the June 15 rental claim as an obligation that repeats every year", () => {
    const d = nv.find((x) => x.deadlineId === "nv-rental-abatement-claim")!;
    expect(d.deadlineType).toBe("abatement-claim");
    expect(d.rule).toContain("June 15");
    expect(d.rule).toMatch(/EVERY year/i);
  });

  it("records the installments as rules, with the published dates for the fiscal year", () => {
    const d = nv.find((x) => x.deadlineId === "nv-tax-payment-installments")!;
    expect(d.deadlineType).toBe("payment");
    expect(d.deadlineBasis).toBe("rule-based");
    expect(d.rule).toContain("third Monday in August");
    expect(d.rule).toContain("first Monday in March");
    expect(d.rule).toContain("August 17, 2026");
    expect(d.rule).toContain("$100");
  });

  it("imports no other state's deadline text", () => {
    const all = nv.map((d) => `${d.rule} ${d.anchoredTo ?? ""}`).join(" ").toLowerCase();
    for (const foreign of [
      "may 15",
      "30 days after the date the appraisal district",
      "25th day following",
      "september 15",
      "60 days after the date the assessor mailed",
      "march 1 exemption",
    ]) {
      expect(all, `Nevada deadlines must not contain "${foreign}"`).not.toContain(foreign);
    }
  });
});

describe("Nevada source registry", () => {
  it("all Nevada sources are primary, verified, and carry a verification date", () => {
    const sources = getSourcesForJurisdiction("nevada");
    expect(sources.length).toBeGreaterThanOrEqual(8);
    for (const s of sources) {
      expect(s.authorityLevel).toBe("primary");
      expect(s.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(s.status).toBe("verified");
    }
  });

  it("registers only Nevada state and Nevada county publishers", () => {
    for (const s of getSourcesForJurisdiction("nevada")) {
      const isState = s.publisher === "Nevada Department of Taxation";
      const isCounty =
        s.publisher.startsWith("Washoe County") || s.publisher.startsWith("Clark County");
      expect(isState || isCounty, `Unexpected publisher: ${s.publisher}`).toBe(true);
    }
  });

  it("is partitioned from Texas, Florida, California and Arizona", () => {
    for (const other of ["texas", "florida", "california", "arizona"]) {
      expect(
        getSourcesForJurisdiction(other).every((s) => !s.sourceId.startsWith("nv-"))
      ).toBe(true);
    }
    expect(
      getSourcesForJurisdiction("nevada").every(
        (s) =>
          !s.sourceId.startsWith("tx-") &&
          !s.sourceId.startsWith("fl-") &&
          !s.sourceId.startsWith("ca-") &&
          !s.sourceId.startsWith("az-")
      )
    ).toBe(true);
  });

  it("records that the statutes themselves were NOT readable and what was read instead", () => {
    // The provenance class is the California class, not the Arizona one. These
    // notes are the audit trail that keeps a later reviewer from over-crediting
    // the citations: no source here is a leg.state.nv.us URL.
    for (const s of getSourcesForJurisdiction("nevada")) {
      expect(s.url).not.toContain("leg.state.nv.us");
    }
    const dor = requireSource("nv-dor-lgs-publications");
    expect(dor.notes).toContain("361.4724");
    const faq = requireSource("nv-washoe-assessor-faq");
    expect(faq.notes).toMatch(/only the amount of increase on your tax bill is capped/i);
  });
});

describe("Nevada publication gate", () => {
  it("all six Nevada pages are ready and in the sitemap", () => {
    expect(NEVADA_PAGES).toHaveLength(6);
    expect(NEVADA_PAGES.every((p) => p.publishStatus === "ready")).toBe(true);
  });

  it("no Nevada county page exists anywhere in the registry", () => {
    const paths = SITE_PAGES.map((p) => p.path).join("\n");
    for (const county of ["clark-county", "washoe-county", "carson-city", "elko", "nye"]) {
      expect(paths).not.toContain(county);
    }
  });

  it("every source cited by a Nevada page is a Nevada source", () => {
    const foreignIds = [
      ...getSourcesForJurisdiction("texas"),
      ...getSourcesForJurisdiction("florida"),
      ...getSourcesForJurisdiction("california"),
      ...getSourcesForJurisdiction("arizona"),
    ].map((s) => s.sourceId);
    const violations: string[] = [];
    for (const file of nevadaPageFiles()) {
      const text = readFileSync(file, "utf8");
      for (const id of foreignIds) {
        if (text.includes(`"${id}"`)) violations.push(`${file} cites ${id}`);
      }
    }
    expect(violations).toEqual([]);
  });

  it("every nv- identifier a Nevada page cites is a registered source or a registered deadline", () => {
    // Pages reference two kinds of Nevada machine identifiers: source ids for
    // citations and deadline ids when a page looks one up by id. Anything else
    // with the nv- prefix is a typo or a stale reference, either of which would
    // silently drop a citation.
    const known = new Set([
      ...getSourcesForJurisdiction("nevada").map((s) => s.sourceId),
      ...getDeadlines("nevada").map((d) => d.deadlineId),
    ]);
    const violations: string[] = [];
    for (const file of nevadaPageFiles()) {
      const text = readFileSync(file, "utf8");
      for (const match of text.matchAll(/"(nv-[a-z0-9-]+)"/g)) {
        if (!known.has(match[1])) violations.push(`${file} cites unknown ${match[1]}`);
      }
    }
    expect(violations).toEqual([]);
  });
});

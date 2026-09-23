import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { JURISDICTION_RULES, requireJurisdictionRules, getCap } from "@/lib/data/jurisdictions";
import { getDeadlines } from "@/lib/data/deadlines";
import { requireSource, getSourcesForJurisdiction } from "@/lib/sources/registry";
import { SITE_PAGES } from "@/lib/seo/site-pages";

const michigan = requireJurisdictionRules("michigan");
const DEADLINES = getDeadlines("michigan");
const MICHIGAN_PAGES = SITE_PAGES.filter((p) => p.path.startsWith("/michigan-property-tax/"));

describe("Michigan rules", () => {
  it("declares the state and resolves every source it cites", () => {
    expect(michigan.jurisdictionName).toBe("Michigan");
    for (const cap of michigan.caps) for (const s of cap.sources) requireSource(s.sourceId);
    for (const v of michigan.valueChain) for (const s of v.sources) requireSource(s.sourceId);
    for (const id of michigan.sourceIds) requireSource(id);
  });

  it("caps taxable value as the LOWER of inflation or 5%, not as a flat percentage", () => {
    const cap = getCap(michigan, "mi-taxable-value-cap");
    expect(cap).toBeDefined();
    // The basis is what stops this being rendered as "a 5% cap": the rule is the
    // lower of the inflation rate change and 5%, and the tool can only test the
    // fixed leg, which the detail has to say.
    expect(cap!.basis).toBe("lower-of-or-cpi");
    expect(cap!.capSubject).toBe("assessed-value");
    expect(cap!.maxAnnualIncreasePercent).toBe(5);
    expect(cap!.detail).toMatch(/change in the rate of inflation or 5%, whichever is less/i);
    expect(cap!.limitations).toMatch(/5% leg only/i);
  });

  it("says the uncapping follows a transfer of ownership, which is not a value event", () => {
    const cap = getCap(michigan, "mi-taxable-value-cap");
    expect(cap!.resetNote).toMatch(/transfer of ownership/i);
    expect(cap!.resetNote).toMatch(/state equalized value/i);
  });

  it("describes the capped value formula in the county's own terms", () => {
    const cap = getCap(michigan, "mi-taxable-value-cap");
    expect(cap!.detail).toMatch(/inflation rate multiplier/i);
    expect(cap!.detail).toMatch(/1\.05/);
    expect(cap!.detail).toMatch(/additions/i);
    expect(cap!.detail).toMatch(/lesser of that capped value or the state equalized value/i);
  });

  it("has no checker question, and says why", () => {
    // Five states now: California, Arizona, Nevada, Oregon and Michigan. The
    // comparison the checker performs cannot screen Michigan — the limitation
    // does not apply at all in the year after a transfer of ownership — so this
    // is a deliberate absence rather than an omission.
    expect(michigan.homesteadCapQuestion).toBeUndefined();
    const source = readFileSync("lib/data/jurisdictions.ts", "utf8");
    expect(source).toMatch(/NO homesteadCapQuestion[\s\S]{0,700}Michigan/);
  });

  it("carries the four values in assessment order", () => {
    expect(michigan.valueChain.map((v) => v.term)).toEqual([
      "Assessed value (AV)",
      "State equalized value (SEV)",
      "Capped value",
      "Taxable value (TV)",
    ]);
  });

  it("names the notice, the review board and a real property-search target", () => {
    expect(michigan.assessmentNoticeName).toMatch(/property classification/i);
    expect(michigan.reviewBoardName).toBe("March Board of Review");
    expect(michigan.propertySearch.url).toMatch(/^https:\/\//);
  });
});

describe("Michigan deadlines", () => {
  it("every deadline is source-verified and cites a source that resolves", () => {
    expect(DEADLINES.length).toBeGreaterThan(0);
    for (const d of DEADLINES) {
      expect(d.verificationStatus).toBe("source-verified");
      expect(d.jurisdictionId).toBe("michigan");
      expect(d.lastVerifiedDate).toBeTruthy();
      expect(d.sources.length).toBeGreaterThan(0);
      for (const s of d.sources) expect(requireSource(s.sourceId).jurisdictionId).toBe("michigan");
    }
  });

  it("separates the two Tribunal windows by class", () => {
    const residential = DEADLINES.find(
      (d) => d.deadlineId === "mi-tribunal-residential-agricultural",
    );
    const commercial = DEADLINES.find(
      (d) => d.deadlineId === "mi-tribunal-commercial-industrial",
    );
    expect(residential?.rule).toMatch(/July 31/);
    expect(commercial?.rule).toMatch(/May 31/);
    // The distinction is the point of the pair: one class must use the board
    // first, the other may go straight to the Tribunal.
    expect(residential?.rule).toMatch(/Board of Review first/i);
    expect(commercial?.rule).toMatch(/directly to the Michigan Tax Tribunal/i);
  });

  it("states the March board's session requirement as unread rather than guessing it", () => {
    const board = DEADLINES.find((d) => d.deadlineId === "mi-march-board-protest");
    expect(board?.deadlineBasis).toBe("rule-based");
    expect(board?.rule).toMatch(/could not be read/i);
  });

  it("carries the board's notification duty as a dated rule", () => {
    const notification = DEADLINES.find((d) => d.deadlineId === "mi-board-written-notification");
    expect(notification?.rule).toMatch(/first Monday in June/);
    expect(notification?.rule).toMatch(/right to appeal/i);
  });
});

describe("Michigan source partition", () => {
  it("keeps Michigan sources out of every other jurisdiction", () => {
    for (const other of ["texas", "florida", "california", "arizona", "nevada", "oregon"]) {
      expect(
        getSourcesForJurisdiction(other).every((s) => !s.sourceId.startsWith("mi-")),
      ).toBe(true);
    }
    expect(
      getSourcesForJurisdiction("michigan").every((s) =>
        ["mi-"].some((prefix) => s.sourceId.startsWith(prefix)),
      ),
    ).toBe(true);
  });

  it("every Michigan source is primary and carries a verification date", () => {
    const sources = getSourcesForJurisdiction("michigan");
    expect(sources.length).toBeGreaterThan(0);
    for (const s of sources) {
      expect(s.authorityLevel).toBe("primary");
      expect(s.lastVerifiedDate).toBeTruthy();
    }
  });
});

describe("Michigan publication gate", () => {
  it("all six Michigan pages are ready and in the sitemap", () => {
    expect(MICHIGAN_PAGES).toHaveLength(6);
    expect(MICHIGAN_PAGES.every((p) => p.publishStatus === "ready")).toBe(true);
  });

  it("no Michigan county page exists anywhere in the registry", () => {
    // The county layer is the state's documented gap: the state-only batch is
    // what the research supports, and a county page needs its own sources.
    const paths = SITE_PAGES.map((p) => p.path).join("\n");
    for (const county of ["oakland", "wayne", "kent", "washtenaw"]) {
      expect(paths).not.toContain(`/michigan/${county}-county/`);
    }
  });

  it("every Michigan page names the state's own vocabulary, not another state's", () => {
    // The cross-state guard covers the whole tree; this asserts the Michigan
    // pages specifically carry their own terms, so a rewrite cannot quietly
    // rebrand them.
    const dir = "app/michigan-property-tax";
    const files: string[] = [];
    const walk = (d: string) => {
      for (const entry of readdirSync(d, { withFileTypes: true })) {
        const full = join(d, entry.name).replace(/\\/g, "/");
        if (entry.isDirectory()) walk(full);
        else if (entry.name === "page.tsx") files.push(full);
      }
    };
    walk(dir);
    expect(files.length).toBe(6);

    const all = files.map((f) => readFileSync(f, "utf8")).join("\n");
    expect(all).toMatch(/taxable value/i);
    expect(all).toMatch(/state equalized value/i);
    for (const foreign of [
      "appraised value",
      "Save Our Homes",
      "TRIM notice",
      "measure 50",
      "limited property value",
    ]) {
      expect(all.toLowerCase()).not.toContain(foreign.toLowerCase());
    }
  });
});

import { describe, it, expect } from "vitest";
import { COUNTIES, getPublishedCounties, getCounty } from "@/lib/data/counties";
import {
  SITE_PAGES,
  getSitemapPages,
  isIndexableStatus,
} from "@/lib/seo/site-pages";

const UNPUBLISHED = ["dallas-county", "tarrant-county", "bexar-county", "travis-county"];

describe("county publication gate", () => {
  it("harris-county is published", () => {
    const published = getPublishedCounties().map((c) => c.countyId);
    expect(published).toContain("harris-county");
  });

  it("dallas, tarrant, bexar, travis are NOT published", () => {
    const published = getPublishedCounties().map((c) => c.countyId);
    for (const id of UNPUBLISHED) {
      expect(published).not.toContain(id);
    }
  });

  it("unpublished counties remain in the registry as research-needed placeholders", () => {
    for (const id of UNPUBLISHED) {
      const c = getCounty(id);
      expect(c).toBeDefined();
      expect(c!.researchStatus).toBe("research-needed");
    }
  });

  it("every published county has at least one source reference and a verification date", () => {
    for (const c of getPublishedCounties()) {
      expect(c.sources.length).toBeGreaterThan(0);
      expect(c.lastVerifiedDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("sitemap publication gate", () => {
  it("isIndexableStatus allows only ready and source-verified", () => {
    expect(isIndexableStatus("ready")).toBe(true);
    expect(isIndexableStatus("source-verified")).toBe(true);
    for (const s of ["draft", "research-needed", "editorial-review", "needs-update", "archived"] as const) {
      expect(isIndexableStatus(s)).toBe(false);
    }
  });

  it("sitemap contains exactly the indexable subset of the registry", () => {
    const expected = SITE_PAGES.filter((p) => isIndexableStatus(p.publishStatus));
    expect(getSitemapPages()).toEqual(expected);
  });

  it("all 74 expected URLs are present in the registry", () => {
    expect(SITE_PAGES).toHaveLength(74);
    expect(getSitemapPages()).toHaveLength(74);
  });

  it("oregon state pages are published; no oregon county pages exist in the registry", () => {
    const listed = SITE_PAGES.map((p) => p.path);
    for (const p of [
      "/oregon-property-tax/",
      "/oregon-property-tax/measure-50-mav/",
      "/oregon-property-tax/changed-property-ratio/",
      "/oregon-property-tax/tax-statement/",
      "/oregon-property-tax/appeal/",
      "/oregon-property-tax/deadlines/",
    ]) {
      expect(listed).toContain(p);
    }
    // Oregon counties are BLOCKED until they pass the pilot-county test.
    expect(listed.join("\n")).not.toContain("multnomah");
    expect(listed.join("\n")).not.toContain("yamhill");
  });

  it("nevada state pages are published; no nevada county pages exist in the registry", () => {
    const listed = SITE_PAGES.map((p) => p.path);
    for (const p of [
      "/nevada-property-tax/",
      "/nevada-property-tax/tax-cap-abatement/",
      "/nevada-property-tax/primary-residence-abatement/",
      "/nevada-property-tax/value-notice/",
      "/nevada-property-tax/value-appeal/",
      "/nevada-property-tax/deadlines/",
    ]) {
      expect(listed).toContain(p);
    }
    // Nevada counties are BLOCKED until they pass the pilot-county test
    // (verified local procedure page + a current-year deadline).
    expect(listed.join("\n")).not.toContain("clark-county");
    expect(listed.join("\n")).not.toContain("washoe");
  });

  it("the global FAQ is not titled after a single state, and each state has its own FAQ", () => {
    const faq = SITE_PAGES.find((p) => p.path === "/faq/");
    expect(faq).toBeDefined();
    expect(faq!.title).toBe("Property tax FAQ");
    expect(SITE_PAGES.map((p) => p.path)).toContain("/texas-property-tax/faq/");
    // A page titled "Texas FAQ" must not live at the cross-state /faq/ path.
    for (const p of SITE_PAGES) {
      if (p.path === "/faq/") continue;
      if (p.title.includes("FAQ")) expect(p.path).not.toBe("/faq/");
    }
  });

  it("california state pages are published; no california county pages exist in the registry", () => {
    const listed = SITE_PAGES.map((p) => p.path);
    for (const p of [
      "/california-property-tax/",
      "/california-property-tax/proposition-13-and-8/",
      "/california-property-tax/notice-of-assessed-value/",
      "/california-property-tax/assessment-appeal/",
      "/california-property-tax/appeal-evidence/",
      "/california-property-tax/deadlines/",
      "/property-tax-by-state/",
    ]) {
      expect(listed).toContain(p);
    }
    // California counties are BLOCKED until they pass the pilot-county test
    // (verified appeal procedure page + current-year deadline).
    expect(listed.join("\n")).not.toContain("los-angeles");
    expect(listed.join("\n")).not.toContain("san-diego");
  });

  it("arizona state pages are published; no arizona county pages exist in the registry", () => {
    const listed = SITE_PAGES.map((p) => p.path);
    for (const p of [
      "/arizona-property-tax/",
      "/arizona-property-tax/full-cash-vs-limited-value/",
      "/arizona-property-tax/notice-of-valuation/",
      "/arizona-property-tax/petition-for-review/",
      "/arizona-property-tax/appeal-evidence/",
      "/arizona-property-tax/deadlines/",
    ]) {
      expect(listed).toContain(p);
    }
    // Arizona counties are BLOCKED until they pass the pilot-county test
    // (verified local appeal procedure page + current-year deadline).
    expect(listed.join("\n")).not.toContain("maricopa");
    expect(listed.join("\n")).not.toContain("pima");
  });

  it("florida state pages are published; no florida county pages exist in the registry", () => {
    const listed = SITE_PAGES.map((p) => p.path);
    for (const p of [
      "/florida-property-tax/",
      "/florida-property-tax/save-our-homes/",
      "/florida-property-tax/trim-notice/",
      "/florida-property-tax/vab-petition/",
      "/florida-property-tax/vab-evidence/",
      "/florida-property-tax/deadlines/",
    ]) {
      expect(listed).toContain(p);
    }
    // Miami-Dade and every other Florida county are BLOCKED (research §20).
    expect(listed.join("\n")).not.toContain("miami-dade");
    expect(listed.join("\n")).not.toContain("broward");
    expect(listed.join("\n")).not.toContain("palm-beach");
  });

  it("no draft/research-needed page can reach the sitemap", () => {
    // Simulate a page being demoted: filter logic must exclude it.
    const withDraft = [
      ...SITE_PAGES,
      {
        path: "/texas/dallas-county/",
        title: "Dallas County (draft)",
        publishStatus: "research-needed" as const,
        lastVerifiedDate: "2026-09-17",
      },
    ];
    const listed = withDraft.filter((p) => isIndexableStatus(p.publishStatus));
    expect(listed.map((p) => p.path)).not.toContain("/texas/dallas-county/");
  });

  it("paths are unique and carry trailing slashes (canonical consistency)", () => {
    const paths = SITE_PAGES.map((p) => p.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const p of paths) {
      if (p !== "/") expect(p.endsWith("/")).toBe(true);
    }
  });

  it("no unpublished county appears anywhere in the sitemap registry", () => {
    const listed = getSitemapPages().map((p) => p.path).join("\n");
    for (const id of UNPUBLISHED) {
      expect(listed).not.toContain(id);
    }
  });
});

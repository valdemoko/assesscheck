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

  it("all 48 expected URLs are present in the registry", () => {
    expect(SITE_PAGES).toHaveLength(48);
    expect(getSitemapPages()).toHaveLength(48);
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

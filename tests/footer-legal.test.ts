import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { SITE_PAGES, getSitemapPages, isIndexableStatus } from "@/lib/seo/site-pages";
import { siteConfig } from "@/lib/site-config";

// Extract footer hrefs from the component source (static data — no DOM needed).
const footerSource = readFileSync(
  join(__dirname, "../components/layout/SiteFooter.tsx"),
  "utf8"
);
const footerHrefs = [...footerSource.matchAll(/href: "([^"]+)"/g)].map((m) => m[1]);
const registeredPaths = new Set(SITE_PAGES.map((p) => p.path));

function routeExists(path: string): boolean {
  // "/" -> app/page.tsx ; "/x/y/" -> app/x/y/page.tsx
  const rel = path === "/" ? "" : path.replace(/\/$/, "");
  return statSync(join(__dirname, "../app", rel, "page.tsx"), { throwIfNoEntry: false }) !== undefined;
}

describe("footer link audit", () => {
  it("every footer href points to a registered page", () => {
    const bad = footerHrefs.filter((h) => !registeredPaths.has(h));
    expect(bad, `Unregistered footer links: ${bad.join(", ")} — register them in lib/seo/site-pages.ts`).toEqual([]);
  });

  it("every footer href resolves to an actual page.tsx file (no 404s)", () => {
    const broken = footerHrefs.filter((h) => !routeExists(h));
    expect(broken, `Footer links to nonexistent routes: ${broken.join(", ")}`).toEqual([]);
  });

  it("no duplicate hrefs within footer columns (bottom bar may echo them)", () => {
    const columnBlock = footerSource.slice(0, footerSource.indexOf("BOTTOM_LINKS"));
    const colHrefs = [...columnBlock.matchAll(/href: "([^"]+)"/g)].map((m) => m[1]);
    expect(new Set(colHrefs).size).toBe(colHrefs.length);
  });

  it("privacy policy is reachable from the footer (not hidden)", () => {
    expect(footerHrefs).toContain("/privacy/");
    expect(footerHrefs).toContain("/cookie-policy/");
    expect(footerHrefs).toContain("/consent-preferences/");
  });
});

describe("legal page audit", () => {
  const REQUIRED_LEGAL = [
    "/privacy/",
    "/cookie-policy/",
    "/terms/",
    "/disclaimer/",
    "/advertising-disclosure/",
    "/consent-preferences/",
    "/about/",
    "/about/author/",
    "/contact/",
    "/accessibility/",
  ];

  it("all required legal/institutional pages exist as routes", () => {
    const missing = REQUIRED_LEGAL.filter((p) => !routeExists(p));
    expect(missing).toEqual([]);
  });

  it("all required legal/institutional pages are registered for the sitemap", () => {
    const missing = REQUIRED_LEGAL.filter((p) => !registeredPaths.has(p));
    expect(missing).toEqual([]);
  });

  it("all pages carry a unique title in the registry", () => {
    const titles = SITE_PAGES.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("legal pages state a last-updated date in siteConfig", () => {
    for (const key of ["privacy", "cookies", "terms", "disclaimer", "advertising", "accessibility"] as const) {
      expect(siteConfig.legal.lastUpdated[key]).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("siteConfig integrity", () => {
  it("has a valid author name and LinkedIn URL", () => {
    expect(siteConfig.author.name).toBe("Miguel Iglesias Valenzuela");
    expect(siteConfig.author.linkedin).toMatch(/^https:\/\/(www\.)?linkedin\.com\/in\/[^/]+\/$/);
  });

  it("never contains an invented email: contact.email comes only from env", () => {
    if (siteConfig.contact.email) {
      expect(siteConfig.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      expect(siteConfig.contact.email).not.toContain("example.");
    }
  });

  it("brand is AssessCheck", () => {
    expect(siteConfig.name).toBe("AssessCheck");
  });

  it("ads state is honest: AdSense/CMP/analytics marked inactive", () => {
    expect(siteConfig.ads.adsenseActive).toBe(false);
    expect(siteConfig.ads.cmpImplemented).toBe(false);
    expect(siteConfig.ads.analyticsActive).toBe(false);
  });
});

describe("no visible placeholder content", () => {
  function walk(dir: string): string[] {
    return readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });
  }

  function normalizeRoute(file: string): string {
    // file: <appDir>/x/y/page.tsx (any path separator) -> "/x/y/"
    const parts = file.split(/[\\/]/).filter(Boolean);
    const pageIdx = parts.indexOf("page.tsx");
    const segs = parts.slice(0, pageIdx === -1 ? undefined : pageIdx);
    // Drop a leading "app" segment if present
    if (segs[0] === "app") segs.shift();
    if (segs.length === 0) return "/";
    return "/" + segs.join("/") + "/";
  }

  it("no lorem ipsum visible in user-facing page source", () => {
    const pages = walk(join(__dirname, "../app")).filter((f) => f.endsWith("page.tsx"));
    const offenders: string[] = [];
    for (const f of pages) {
      const src = readFileSync(f, "utf8");
      if (/lorem ipsum/i.test(src)) offenders.push(f);
    }
    expect(offenders).toEqual([]);
  });

  it("sitemap registry matches actual routes in both directions", () => {
    const appDir = join(__dirname, "..", "app");
    const routes = walk(appDir)
      .filter((f) => f.endsWith("page.tsx") && !f.includes("not-found"))
      .map((f) => {
        // Take everything after the last "app" path segment, normalize to "/x/y/".
        const parts = f.split(/[\\/]/).filter(Boolean);
        const appIdx = parts.lastIndexOf("app");
        const segs = parts.slice(appIdx + 1, parts.indexOf("page.tsx"));
        return segs.length === 0 ? "/" : "/" + segs.join("/") + "/";
      });
    const unregistered = routes.filter((r) => !registeredPaths.has(r));
    expect(unregistered, `Routes not registered in site-pages.ts: ${unregistered.join(", ")}`).toEqual([]);
  });

  it("sitemap contains exactly the expected count (74 pages)", () => {
    expect(SITE_PAGES).toHaveLength(74);
    expect(getSitemapPages()).toHaveLength(74);
    expect(getSitemapPages().every((p) => isIndexableStatus(p.publishStatus))).toBe(true);
  });
});

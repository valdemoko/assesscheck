import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";
import { SITE_PAGES } from "@/lib/seo/site-pages";

/**
 * Three structural promises every page on this site makes, none of which any
 * other suite was checking.
 *
 * They are the same kind of promise: not about what a page says, but about
 * whether it carries the parts a reader and a crawler rely on. Each had already
 * drifted by the time this file was written — three pages cited no source, and
 * nineteen began their breadcrumb trail somewhere other than Home — because a
 * suite of 240 tests had nothing to say about either. A page added without them
 * looked exactly like a page added with them.
 */

function pageFiles(dir: string): string[] {
  const found: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name).replace(/\\/g, "/");
    if (entry.isDirectory()) found.push(...pageFiles(full));
    else if (entry.name === "page.tsx") found.push(full);
  }
  return found;
}

const PAGES = pageFiles("app");

function read(file: string): string {
  return readFileSync(file, "utf8");
}

/** "app/florida-property-tax/page.tsx" -> "/florida-property-tax/" */
function routeOf(file: string): string {
  return file.replace(/^app/, "").replace(/\/page\.tsx$/, "/");
}

/**
 * Routes whose pages make factual claims about a state's property tax and so
 * have to cite what those claims rest on.
 *
 * The state hubs come from site-config, so a seventh state is covered the
 * moment it is declared rather than when someone remembers to add it here. The
 * county layer sits outside its state's hub path — /texas/harris-county/ is not
 * under /texas-property-tax/ — so it is named explicitly, and a second state's
 * county pages belong here with it.
 */
const CLAIM_ROUTES = [
  ...Object.values(siteConfig.jurisdictions).map((j) => j.hubPath),
  siteConfig.statesHubPath,
  "/property-tax-checker/",
  "/texas/",
];

describe("pages that make claims cite their sources", () => {
  const claimPages = PAGES.filter((f) =>
    CLAIM_ROUTES.some((route) => routeOf(f).startsWith(route)),
  );

  it("covers the clusters and tools, not a hand-picked list", () => {
    // If a refactor moves the pages and this filter stops matching, an empty
    // list would pass every assertion below, so the size is asserted too.
    expect(claimPages.length).toBeGreaterThan(40);
  });

  it("every one of them renders a Sources block with ids in it", () => {
    // Both shapes the site actually uses: a literal list, and a spread of one
    // computed from the deadline registry. An empty literal fails here, and
    // SourceList itself throws on an empty list, so `[]` cannot slip through.
    const IDS = /sourceIds=\{\s*\[(\s*"|\.\.\.)/;
    const missing: string[] = [];
    for (const file of claimPages) {
      const source = read(file);
      if (!source.includes("<SourceList") || !IDS.test(source)) {
        missing.push(routeOf(file));
      }
    }
    expect(
      missing,
      `Pages making claims with no cited source:\n${missing.join("\n")}`,
    ).toEqual([]);
  });
});

describe("an empty Sources block cannot be built", () => {
  // A page can pass a computed list, so the static rule above cannot know at
  // read time whether it ends up empty. SourceList itself refuses one, the same
  // way lib/seo/metadata.ts refuses to build without a domain: the failure has
  // to be loud, because a Sources heading with nothing under it still reads as
  // a citation. Rendering the component here is not possible (the test runner
  // cannot transform .tsx under `jsx: preserve`), so what is asserted is that
  // the refusal is still in the component.
  const component = read("components/sources/SourceList.tsx");

  it("SourceList still refuses an empty list", () => {
    expect(component).toMatch(/sourceIds\.length === 0/);
    expect(component).toMatch(/throw new Error\(/);
  });
});

describe("every page says where it is", () => {
  const HOME_CRUMB = /\{\s*href:\s*"\/",\s*label:\s*"Home"\s*\}/;

  it("renders a trail everywhere except the home page itself", () => {
    const withoutTrail = PAGES.filter((f) => !read(f).includes("breadcrumbs={[")).map(
      routeOf,
    );
    expect(withoutTrail).toEqual(["/"]);
  });

  it("starts the trail at Home, once, on every page", () => {
    const wrong: string[] = [];
    for (const file of PAGES) {
      const source = read(file);
      const marker = "breadcrumbs={[";
      const start = source.indexOf(marker);
      if (start === -1) continue; // the home page, checked above
      const first = source.slice(start + marker.length, source.indexOf("}", start) + 1);
      // The first crumb has to be the link back to the root, not the page's own
      // label or a section name: "Home › Legal › Privacy" is a hierarchy a
      // reader can climb, "Legal › Privacy" is a fragment of one.
      if (!HOME_CRUMB.test(first) || (source.match(/label:\s*"Home"/g) ?? []).length > 1) {
        wrong.push(routeOf(file));
      }
    }
    expect(
      wrong,
      `Pages whose trail does not start at Home:\n${wrong.join("\n")}`,
    ).toEqual([]);
  });
});

describe("every state hub indexes its own cluster", () => {
  for (const jurisdiction of Object.values(siteConfig.jurisdictions)) {
    it(`${jurisdiction.name} links every page directly below it`, () => {
      const file = `app${jurisdiction.hubPath}page.tsx`;
      const source = read(file);
      const direct = SITE_PAGES.filter(
        (p) =>
          p.path.startsWith(jurisdiction.hubPath) &&
          p.path !== jurisdiction.hubPath &&
          p.path.slice(jurisdiction.hubPath.length).split("/").filter(Boolean).length === 1,
      );
      expect(direct.length, `${jurisdiction.name} has no pages below its hub`).toBeGreaterThan(0);

      // Both syntaxes count: the hubs that write their index as data use
      // `href: "..."`, the ones that write it as markup use `href="..."`.
      const missing = direct
        .filter(
          (p) =>
            !source.includes(`href="${p.path}"`) && !source.includes(`href: "${p.path}"`),
        )
        .map((p) => p.path);

      expect(
        missing,
        `${jurisdiction.name}'s hub does not link these pages:\n${missing.join("\n")}`,
      ).toEqual([]);
    });
  }
});

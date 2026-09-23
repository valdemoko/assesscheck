import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import {
  primaryNav,
  stateNav,
  statesNavGroup,
  activeStateLabel,
  allNavHrefs,
} from "@/lib/nav";
import { SITE_PAGES } from "@/lib/seo/site-pages";
import { siteConfig } from "@/lib/site-config";

/**
 * The header is the most crawled and most clicked surface on the site. A link
 * to a page that does not exist is worse there than anywhere else, and it is
 * also the easiest mistake to make while adding a state, so this file checks
 * the navigation against the registry rather than trusting it.
 */

describe("primary navigation", () => {
  const registered = new Set(SITE_PAGES.map((p) => p.path));

  it("every link points at a registered route", () => {
    const unknown = allNavHrefs().filter((href) => !registered.has(href));
    expect(unknown, `Nav links with no registered page:\n${unknown.join("\n")}`).toEqual([]);
  });

  it("has no duplicate destinations", () => {
    const hrefs = allNavHrefs();
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("has no duplicate labels either, which would read as a mistake", () => {
    const labels = [
      ...primaryNav.map((l) => l.label),
      ...stateNav.map((l) => l.label),
    ];
    expect(new Set(labels).size).toBe(labels.length);
  });

  it("keeps the top row short enough to stay on one line", () => {
    // The states live inside a disclosure for exactly this reason. Six
    // top-level state links wrapped to three lines; the limit is enforced so
    // the seventh state cannot quietly undo it.
    expect(primaryNav.length + 1).toBeLessThanOrEqual(6);
  });
});

describe("state navigation is derived, not hand-maintained", () => {
  it("lists every registered jurisdiction, in the order site-config declares", () => {
    const configured = Object.values(siteConfig.jurisdictions).map((j) => j.name);
    expect(stateNav.map((l) => l.label)).toEqual(configured);
  });

  it("does not repeat the comparison hub that is already a top-level link", () => {
    expect(stateNav.map((l) => l.href)).not.toContain(siteConfig.statesHubPath);
    // ...and instead says where the comparison is, so the group is not a dead end
    // for a reader who wants all six side by side.
    expect(statesNavGroup.description).toContain("By State");
  });

  it("uses each jurisdiction's own hub path rather than a guessed one", () => {
    for (const j of Object.values(siteConfig.jurisdictions)) {
      expect(stateNav.map((l) => l.href)).toContain(j.hubPath);
    }
  });

  it("gives every state exactly one directory of pages", () => {
    for (const j of Object.values(siteConfig.jurisdictions)) {
      const statePages = SITE_PAGES.filter((p) => p.path.startsWith(j.hubPath));
      expect(statePages.length, `${j.name} has no registered pages`).toBeGreaterThan(0);
    }
  });

  it("the group itself carries a description, so an opened menu explains itself", () => {
    expect(statesNavGroup.description.length).toBeGreaterThan(20);
    expect(statesNavGroup.links).toBe(stateNav);
  });
});

describe("the header knows which state you are in", () => {
  it("resolves a state hub and its child pages", () => {
    expect(activeStateLabel("/florida-property-tax/")).toBe("Florida");
    expect(activeStateLabel("/florida-property-tax/deadlines/")).toBe("Florida");
    expect(activeStateLabel("/oregon-property-tax/measure-50-mav/")).toBe("Oregon");
  });

  it("resolves Texas county pages, which live outside the state hub", () => {
    // The one case where the state's pages are not under its hub path, so a
    // naive prefix match would leave the reader thinking they are nowhere.
    expect(activeStateLabel("/texas/harris-county/")).toBe("Texas");
    expect(activeStateLabel("/texas/harris-county/faq/")).toBe("Texas");
  });

  it("returns nothing for shared pages", () => {
    for (const p of ["/", "/faq/", "/property-tax-by-state/", "/methodology/"]) {
      expect(activeStateLabel(p), `${p} should not claim a state`).toBeUndefined();
    }
  });

  it("does not confuse a state with a similarly named one", () => {
    expect(activeStateLabel("/california-property-tax/")).toBe("California");
    expect(activeStateLabel("/texas-property-tax/protest/deadlines/")).toBe("Texas");
  });
});

describe("the header component uses the shared nav data", () => {
  const source = readFileSync("components/layout/SiteHeader.tsx", "utf8");

  it("does not hardcode its own link list", () => {
    expect(source).toContain("@/lib/nav");
    // A state href written literally into the component is the drift this
    // refactor removed.
    expect(source).not.toMatch(/\/[a-z]+-property-tax\//);
  });

  it("renders the states through a native disclosure, not a hover menu", () => {
    expect(source).toContain("<details");
    expect(source).toContain("<summary");
  });
});

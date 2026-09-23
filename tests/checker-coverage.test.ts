import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { JURISDICTION_RULES } from "@/lib/data/jurisdictions";
import { siteConfig } from "@/lib/site-config";

/**
 * What the site claims the assessment checker covers must be what it renders.
 *
 * This guard exists because those two things drifted. The home page and the
 * general FAQ both said the checker "is offered for Texas and Florida
 * properties" while the only pages that render the tool are
 * /property-tax-checker/, hardcoded to Texas, and the Harris County edition.
 * Florida was genuinely supported underneath — the registry has a
 * `homesteadCapQuestion` for it and the component has a Florida branch — so
 * the claim looked true from inside the code and was false from outside it: no
 * Florida owner could reach a Florida checker. Nothing failed, because no test
 * read the coverage claim against the pages that actually render the component.
 *
 * So the coverage is now a machine-checked fact. If an edition is added or
 * removed, this fails and sends the author to the sentences that promise
 * coverage: the "How the assessment checker works" section of app/page.tsx and
 * the "Should I check my own numbers before hiring anyone?" answer in
 * app/faq/page.tsx.
 *
 * Editions are counted per STATE, not per page: a state and one of its counties
 * legitimately both render the same state's rules, which is why Texas appears
 * twice below without that being duplication.
 */

const APP_COMPONENT = "AssessmentChecker";

function pageFiles(): string[] {
  const out: string[] = [];
  for (const entry of readdirSync("app", { recursive: true }) as string[]) {
    const p = join("app", entry).replace(/\\/g, "/");
    if (!p.endsWith(".tsx")) continue;
    if (statSync(p).isDirectory()) continue;
    out.push(p);
  }
  return out;
}

/** Every `<AssessmentChecker ... />` render in the app tree, as [file, id]. */
const RENDERED: [string, string][] = pageFiles().flatMap((file) => {
  const source = readFileSync(file, "utf8");
  if (!source.includes(`<${APP_COMPONENT}`)) return [];
  return [...source.matchAll(/<AssessmentChecker[\s\S]{0,240}?\/>/g)].map((m) => {
    const id = m[0].match(/jurisdictionId="([a-z-]+)"/);
    expect(id, `${file} renders the checker without a jurisdictionId`).not.toBeNull();
    return [file, id![1]] as [string, string];
  });
});

const RENDERED_IDS = RENDERED.map(([, id]) => id);
const RENDERED_STATES = [...new Set(RENDERED_IDS)].sort();

describe("assessment checker coverage claims", () => {
  it("finds the pages that render the tool itself, not a hand-maintained list", () => {
    expect(RENDERED.length).toBeGreaterThanOrEqual(2);
    expect(RENDERED.map(([f]) => f)).toContain("app/property-tax-checker/page.tsx");
  });

  it("passes only registered jurisdictions to the tool", () => {
    for (const id of RENDERED_IDS) {
      expect(Object.keys(JURISDICTION_RULES), `unknown jurisdictionId "${id}"`).toContain(id);
    }
  });

  it("is offered for Texas and Florida, and for nothing else", () => {
    // The set is asserted exactly, so this fails whether an edition is added
    // without updating the prose or removed while the prose still promises it.
    expect(RENDERED_STATES).toEqual(["florida", "texas"]);

    expect(
      JURISDICTION_RULES.florida.homesteadCapQuestion,
      "Florida is expected to support the screen the tool runs"
    ).toBeDefined();
    for (const id of ["california", "arizona", "nevada", "oregon"]) {
      expect(
        JURISDICTION_RULES[id].homesteadCapQuestion,
        `${id} is deliberately not screenable by comparing two years`
      ).toBeUndefined();
    }
  });

  it("names the states whose rule the tool tests, without promising more", () => {
    const home = readFileSync("app/page.tsx", "utf8");
    const faq = readFileSync("app/faq/page.tsx", "utf8");

    // The claim that IS true, so a later edit cannot delete the coverage
    // statement instead of correcting it.
    expect(home).toMatch(/offered for <strong>Texas and Florida<\/strong>/);
    expect(faq).toMatch(/florida-property-tax\/checker\//);

    // Any state named after a NON-negated "offered for" must have an edition.
    // The negation has to be read, because "not offered for California" is a
    // true and useful sentence: the original bug was the opposite claim, made
    // while no Florida edition existed, and a plain pattern match cannot tell
    // the two apart.
    const prose = `${home}\n${faq}`;
    const withoutEdition = ["California", "Arizona", "Nevada", "Oregon"];
    // The clause stops at a comma or a full stop. Without that, a long sentence
    // that mentions a state much later — "offered for Texas and Florida ... and
    // the California pages explain why" — reads as a claim about California.
    const claims = [...prose.matchAll(/(.{0,40})offered for\s+([^.,]{0,160})/g)];
    expect(claims.length, "no coverage sentence found to check").toBeGreaterThan(0);
    for (const [, prefix, clause] of claims) {
      const negated = /(?:not|never|n\u2019t)\s*$/i.test(prefix.trim());
      for (const id of withoutEdition) {
        if (!clause.includes(id)) continue;
        expect(
          negated,
          `"offered for ... ${id}" must be a negated statement, because ${id} has no edition`
        ).toBe(true);
      }
    }
  });

  it("gives each edition labels in its own vocabulary, not a shared one", () => {
    // The reason a Florida edition needed a model change: Texas caps the
    // appraised value and Florida caps the assessed value, so a shared input
    // label would invite a Florida owner to type the wrong figure and be shown a
    // flag the law does not support.
    for (const id of ["texas", "florida"]) {
      const labels = JURISDICTION_RULES[id].valueInputLabels;
      expect(labels, `${id} must declare its value labels`).toBeDefined();
      expect(labels!.current).not.toBe(labels!.previous);
      expect(labels!.help && labels!.help.length).toBeGreaterThan(40);
    }
    expect(JURISDICTION_RULES.texas.valueInputLabels!.current).toContain("appraised");
    expect(JURISDICTION_RULES.florida.valueInputLabels!.current).toContain("Assessed");
    expect(JURISDICTION_RULES.florida.valueInputLabels!.help).toMatch(/not the just or market value/i);
  });

  it("renders the checker on the page each jurisdiction's config points at", () => {
    // A config entry pointing at a page that does not render the tool (or at
    // the wrong state's edition) would send readers somewhere useless.
    const floridaPage = readFileSync("app/florida-property-tax/checker/page.tsx", "utf8");
    expect(floridaPage).toContain('jurisdictionId="florida"');
    expect(siteConfig.jurisdictions.florida.checkerPath).toBe("/florida-property-tax/checker/");
  });
});

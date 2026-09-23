import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { JURISDICTION_RULES } from "@/lib/data/jurisdictions";

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

  it("is offered for TEXAS ONLY — Florida is supported underneath but has no edition", () => {
    // This is the assertion that would have caught the drift. Florida appears
    // here as a negative: the engine can screen it, but no page renders it, so
    // no public sentence may say it is offered.
    expect(RENDERED_STATES).toEqual(["texas"]);

    expect(
      JURISDICTION_RULES.florida.homesteadCapQuestion,
      "Florida is expected to support the screen the tool runs"
    ).toBeDefined();
    expect(
      JURISDICTION_RULES.california.homesteadCapQuestion,
      "California is deliberately not screenable this way"
    ).toBeUndefined();
  });

  it("keeps the public coverage sentences free of editions that do not exist", () => {
    const prose = ["app/page.tsx", "app/faq/page.tsx"]
      .map((f) => readFileSync(f, "utf8"))
      .join("\n");
    expect(prose).not.toMatch(/offered for[^.]{0,140}Florida/i);
    expect(prose).not.toMatch(/checker[^.]{0,200}Texas and Florida/i);
    expect(prose).not.toMatch(/assessment checker[^.]{0,200}Florida today/i);

    // And the claim that IS true should be there, so a later edit cannot simply
    // delete the coverage statement instead of correcting it.
    expect(prose).toMatch(/offered for <strong>Texas<\/strong>/);
  });
});

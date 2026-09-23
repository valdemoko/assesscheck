import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Cross-state vocabulary isolation.
 *
 * Each state's pages are written against that state's own statutes, agencies
 * and forms. The risk as coverage grows is silent contamination: a deadline or
 * a term from one state drifting into another state's pages, where it would be
 * wrong and unverifiable. The per-state test files check this for their own
 * state; this file enforces it once for all of them, and covers any state added
 * later without a new bespoke check.
 */

const STATE_DIRS: Record<string, string[]> = {
  texas: ["app/texas-property-tax", "app/texas"],
  florida: ["app/florida-property-tax"],
  california: ["app/california-property-tax"],
  arizona: ["app/arizona-property-tax"],
  nevada: ["app/nevada-property-tax"],
};

// Signature phrases that belong to exactly one covered state. Terminology that
// several states genuinely share is deliberately absent — "taxable value",
// "board of equalization" (California's State Board, Arizona's county boards),
// "board of supervisors", "protest", "non-homestead" (Texas Tax Code § 23.231
// uses it too), "petition for review" (also Texas Tax Code § 42.21) and "full
// cash value" (Nevada's assessors use it for the market value of the land, as
// NRS 361 does) — because banning shared words would only make the rule
// dishonest. Each of these was found by this test flagging correct text.
const SIGNATURE_PHRASES: Record<string, string[]> = {
  texas: [
    "appraisal district",
    "appraisal review board",
    "notice of appraised value",
    "form 50-162",
    "rendition",
    "texas tax code",
  ],
  florida: [
    "just value",
    "save our homes",
    "trim notice",
    "truth in millage",
    "value adjustment board",
  ],
  california: [
    "base year value",
    "factored base year",
    "decline-in-value",
    "proposition 13",
    "proposition 8",
    "assessment appeals board",
    "cdtfa",
  ],
  arizona: [
    "limited property value",
    "notice of valuation",
    "class three",
    "class four",
  ],
  nevada: [
    "partial abatement",
    "tax cap",
    "remainder parcel",
    "recorded ownership document",
    "fair market rent",
    "nrs 361",
  ],
};

const STATE_NAMES: Record<string, string> = {
  texas: "texas",
  florida: "florida",
  california: "california",
  arizona: "arizona",
};

// A foreign term is contamination only when it is presented as this state's own
// vocabulary. Naming the state it belongs to nearby is a deliberate contrast,
// which is legitimate and often useful for a reader comparing states.
const CONTRAST_WINDOW = 320;

function contextAround(text: string, index: number): string {
  return text.slice(Math.max(0, index - CONTRAST_WINDOW), index + CONTRAST_WINDOW);
}

function pageFiles(dirs: string[]): string[] {
  const out: string[] = [];
  for (const dir of dirs) {
    let entries: string[];
    try {
      entries = readdirSync(dir, { recursive: true }) as string[];
    } catch {
      continue;
    }
    for (const e of entries) {
      const p = join(dir, e);
      if (!p.endsWith(".tsx") && !p.endsWith(".ts")) continue;
      if (statSync(p).isDirectory()) continue;
      out.push(p.replace(/\\/g, "/"));
    }
  }
  return out;
}

describe("cross-state vocabulary isolation", () => {
  for (const [state, dirs] of Object.entries(STATE_DIRS)) {
    it(`${state} pages contain no other state's signature vocabulary`, () => {
      const forbidden = Object.entries(SIGNATURE_PHRASES)
        .filter(([s]) => s !== state)
        .flatMap(([owner, phrases]) => phrases.map((phrase) => ({ owner, phrase })));

      const violations: string[] = [];
      for (const file of pageFiles(dirs)) {
        const text = readFileSync(file, "utf8").toLowerCase();
        for (const { owner, phrase } of forbidden) {
          let at = text.indexOf(phrase);
          while (at !== -1) {
            const context = contextAround(text, at);
            if (!context.includes(STATE_NAMES[owner])) {
              const excerpt = text
                .slice(Math.max(0, at - 120), at + 120)
                .replace(/\s+/g, " ")
                .trim();
              violations.push(`${file} → "${phrase}" (${owner}): ...${excerpt}...`);
            }
            at = text.indexOf(phrase, at + phrase.length);
          }
        }
      }
      expect(violations, `Cross-state vocabulary found:\n${violations.join("\n")}`).toEqual([]);
    });
  }

  it("every state directory in the repository has an isolation rule", () => {
    const claimed = new Set(Object.values(STATE_DIRS).flat());
    const dirs = readdirSync("app").filter((d) => d.endsWith("-property-tax"));
    for (const d of dirs) {
      expect(
        claimed.has(`app/${d}`),
        `app/${d} is not covered by the isolation test — add it to STATE_DIRS`
      ).toBe(true);
    }
  });
});

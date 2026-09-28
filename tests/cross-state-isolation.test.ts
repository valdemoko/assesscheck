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
  oregon: ["app/oregon-property-tax"],
  michigan: ["app/michigan-property-tax"],
  colorado: ["app/colorado-property-tax"],
  ohio: ["app/ohio-property-tax"],
  "north-carolina": ["app/north-carolina-property-tax"],
  massachusetts: ["app/massachusetts-property-tax"],
  virginia: ["app/virginia-property-tax"],
  "new-york": ["app/new-york-property-tax"],
  georgia: ["app/georgia-property-tax"],
  maryland: ["app/maryland-property-tax"],
  indiana: ["app/indiana-property-tax"],
  washington: ["app/washington-property-tax"],
  "new-jersey": ["app/new-jersey-property-tax"],
  minnesota: ["app/minnesota-property-tax"],
};

// Signature phrases that belong to exactly one covered state. Terminology that
// several states genuinely share is deliberately absent — "taxable value",
// "board of equalization" (California's State Board, Arizona's county boards),
// "board of supervisors", "protest", "non-homestead" (Texas Tax Code § 23.231
// uses it too), "petition for review" (also Texas Tax Code § 42.21) and "full
// cash value" (Nevada's assessors use it for the market value of the land, as
// NRS 361 does) — because banning shared words would only make the rule
// dishonest. Each of these was found by this test flagging correct text.
//
// "rendition" is the same case: it is a shared value of DeadlineType in
// lib/data/deadlines.ts, so it appears in every state's deadlines page as a
// lookup key. Texas and Oregon both file a rendition of business personal
// property, so the word carries no ownership.
//
// "notice of valuation" joined that list when Colorado was added: it is
// Colorado's statutory notice name (capitalized by the Division as "Notice of
// Valuation") just as it is Arizona's, so the phrase belongs to both and can
// arbitrate neither.
//
// "board of equalization", "de novo", "revaluation" and "assessment appeals
// board" joined that list when Ohio, North Carolina, Massachusetts, Virginia,
// Maryland and Indiana were added: "board of equalization" names the appeal
// board in California, Arizona, Nevada, Colorado AND Virginia (and North
// Carolina's is the "Board of Equalization and Review"), "de novo" is the
// standard description of Virginia's circuit court appeal AND Florida's
// § 194.036(3) circuit-court proceeding, "revaluation" is North Carolina's
// statutory term (G.S. 105-286) that Ohio's and Colorado's own pages also use
// for their reappraisal cycles, and Maryland's county boards are formally the
// "Property Tax Assessment Appeals Boards" — the same words California uses
// for its county panels. Each is the honest name of a mechanism several
// states share, so none can arbitrate.
//
// Three more joined that list when Washington, New Jersey and Minnesota were
// added: "change of value notice" is Washington's statutory notice name but
// describes what several county assessors do; "classification" is
// Minnesota's statutory pairing with value — Oregon's and Florida's pages
// use the same word for their own class systems; and "average ratio" is New
// Jersey's Chapter 123 term that Indiana's DLGF pages also use for its ratio
// studies. None of the three can arbitrate between the states that use them
// honestly.
//
// Two of this batch's own candidates failed the same way and joined the
// shared list: "board of tax appeals" cannot be Washington's signature
// because OHIO's state appeal body has been the Board of Tax Appeals since
// before Washington was covered (oh-bta-appeal-info) — two different bodies
// with the same generic name; and "tax cap" cannot stay in Nevada's list
// because it is a substring of Minnesota's statutory term "tax capacity"
// (TMV × class rate), which appears throughout Minnesota's honest
// explanation of its own system.
const SIGNATURE_PHRASES: Record<string, string[]> = {
  texas: [
    "appraisal district",
    "appraisal review board",
    "notice of appraised value",
    "form 50-162",
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
    "cdtfa",
  ],
  arizona: [
    "limited property value",
    "class three",
    "class four",
  ],
  nevada: [
    "partial abatement",
    "remainder parcel",
    "recorded ownership document",
    "fair market rent",
    "nrs 361",
  ],
  oregon: [
    "measure 50",
    "maximum assessed value",
    "changed property ratio",
    "exception event",
    "compression",
    "board of property tax appeals",
    "levy code area",
    "bopta",
  ],
  ohio: [
    "dte form 1",
    "board of revision",
    "triennial update",
    "sexennial",
  ],
  "north-carolina": [
    "board of equalization and review",
    "property tax commission",
  ],
  massachusetts: [
    "appellate tax board",
    "deemed denied",
    "state tax form 128",
  ],
  virginia: [
    "commissioner of the revenue",
    "fairfax",
  ],
  "new-york": [
    "grievance day",
    "rp-524",
    "small claims assessment review",
    "equalization rate",
  ],
  georgia: [
    "board of tax assessors",
    "pt-311a",
    "tax commissioner",
  ],
  maryland: [
    "sdat",
    "supervisor of assessments",
    "maryland tax court",
    "homestead property tax credit",
  ],
  indiana: [
    "form 130",
    "form 131",
    "ptaboa",
    "gross assessed value",
  ],
  washington: [
    "levy lid lift",
    "highest lawful levy",
    "64-0075",
  ],
  "new-jersey": [
    "common level range",
    "chapter 123",
    "form a-1",
    "county board of taxation",
    "added or omitted",
  ],
  minnesota: [
    "board of appeal and equalization",
    "estimated market value",
    "taxable market value",
    "tax capacity",
    "valuation notice",
  ],
};

// Every covered state must be listed here. A missing entry makes
// `context.includes(STATE_NAMES[owner])` compare against undefined, so a page
// that legitimately contrasts with that state by name would still be flagged.
const STATE_NAMES: Record<string, string> = {
  texas: "texas",
  florida: "florida",
  california: "california",
  arizona: "arizona",
  nevada: "nevada",
  oregon: "oregon",
  michigan: "michigan",
  colorado: "colorado",
  ohio: "ohio",
  "north-carolina": "north carolina",
  massachusetts: "massachusetts",
  virginia: "virginia",
  "new-york": "new york",
  georgia: "georgia",
  maryland: "maryland",
  indiana: "indiana",
  washington: "washington",
  "new-jersey": "new jersey",
  minnesota: "minnesota",
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

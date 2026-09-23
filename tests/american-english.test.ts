import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * The content on this site is written in American English, because it is about
 * American property tax law: the forms, agencies and statutes are American, and
 * a reader comparing their own county's paperwork to the page should not be
 * reading a different dialect.
 *
 * This guard exists because the drift is silent and repeated. The Oregon pages
 * were written in British spellings ("instalments", "favour", "organisations",
 * "authorise") while the other five states were already American, and the
 * California, Nevada and Arizona pages carried "judgement", "enrolment" and
 * "recognised" from the same handwriting. Nothing failed: typecheck, lint and
 * the per-state suites passed, because none of them look at spelling. A reader
 * notices in the first sentence.
 *
 * The rule covers the prose we write ourselves — page copy, registry notes,
 * deadline rules, source descriptions. Quoted statute text is a different
 * matter and would keep its own conventions, but the site paraphrases rather
 * than block-quoting, so nothing here is exempt.
 *
 * Words that are correct in BOTH dialects are deliberately absent, because a
 * guard that flags correct text gets deleted and then guards nothing:
 * "analysis"/"analyses" (only the verb forms "analyse", "analysed" and
 * "analysing" are British), "cancellation" (American doubles the l in the
 * noun, unlike "canceled" and "canceling"), "dialogue" (accepted in American
 * usage) and "argument"/"judgment" variants that are American already.
 */

const BRITISH: [RegExp, string][] = [
  // -our spellings
  [/\b(behaviour|colour|favour|honour|neighbour|harbour|labour|rigour|savour|odour|vapour|armour|rumour|humour|flavour)\w*\b/i, "American drops the u"],
  // -re spellings
  [/\b(centre|metre|litre|theatre|fibre|sombre|spectre)\w*\b/i, "American ends in -er"],
  // -ence / -ise / -yse
  [/\b(defence|offence|pretence|licence|practise)\w*\b/i, "American ends in -se or -ce"],
  [/\b(organis|recognis|authoris|standardis|utilis|emphasis(e|ed|ing)|apologis|criticis|minimis|maximis|prioritis|summaris|specialis)\w*/i, "American uses -ize"],
  [/\b(analyse|analysed|analysing)\b/i, "American uses analyze"],
  // doubled consonants American writes singly
  [/\bcancel(led|ling)\b/i, "American uses canceled / canceling"],
  [/\b(travell|modell|labell|signall|counsell|marvell)\w*\b/i, "American doubles the l only before a suffix starting with a vowel in these words"],
  [/\benrolment\b/i, "American uses enrollment"],
  [/\b(fulfil|skilful|wilful|instalment|instalments)\b/i, "American uses fulfill / skillful / willful / installment"],
  // already-plainer American forms
  [
    /\b(cheque|kerb|tyre|storey|plough|draught|grey|programme|judgement\w*)\b/i,
    "American uses check / curb / tire / story / plow / draft / gray / program / judgment",
  ],
];

const SCAN_DIRS = ["app", "lib", "components"];

function sourceFiles(): string[] {
  const out: string[] = [];
  for (const dir of SCAN_DIRS) {
    for (const entry of readdirSync(dir, { recursive: true }) as string[]) {
      const p = join(dir, entry).replace(/\\/g, "/");
      if (!p.endsWith(".ts") && !p.endsWith(".tsx")) continue;
      try {
        if (statSync(p).isDirectory()) continue;
      } catch {
        continue;
      }
      out.push(p);
    }
  }
  return out;
}

describe("American English in user-facing content", () => {
  it("scans the whole content surface, not a hand-picked list of files", () => {
    const files = sourceFiles();
    expect(files.length).toBeGreaterThan(50);
    for (const expected of [
      "app/oregon-property-tax/page.tsx",
      "lib/data/deadlines.ts",
      "lib/sources/registry.ts",
      "lib/data/jurisdictions.ts",
    ]) {
      expect(files, `${expected} must be scanned`).toContain(expected);
    }
  });

  it("contains no British spelling in any page, rule or source note", () => {
    const violations: string[] = [];
    for (const file of sourceFiles()) {
      const lines = readFileSync(file, "utf8").split(/\r?\n/);
      lines.forEach((line, i) => {
        for (const [pattern, why] of BRITISH) {
          const match = line.match(pattern);
          if (match) {
            violations.push(`${file}:${i + 1} "${match[0]}" — ${why}`);
          }
        }
      });
    }
    expect(violations, `British spellings found:\n${violations.join("\n")}`).toEqual([]);
  });
});

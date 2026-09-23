"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  runChecker,
  EMPTY_INPUT,
  type CheckerInput,
} from "@/lib/tools/checkerEngine";
import { requireJurisdictionRules } from "@/lib/data/jurisdictions";
import { siteConfig } from "@/lib/site-config";

// Client wrapper around the pure checker engine (lib/tools/checkerEngine.ts).
// All business rules live in lib/data/jurisdictions.ts and the engine — this
// component only renders form + results.

export function AssessmentChecker({
  jurisdiction,
  jurisdictionId,
}: {
  jurisdiction: string;
  jurisdictionId: string;
}) {
  const [input, setInput] = useState<CheckerInput>(EMPTY_INPUT);
  const [submitted, setSubmitted] = useState(false);

  // Fail loudly at render time if a page passes an unregistered jurisdiction.
  const rules = requireJurisdictionRules(jurisdictionId);

  // The figures the limit is tested against are named by the jurisdiction, not
  // here: "appraised value" is correct in Texas and wrong in Florida, where the
  // limitation attaches to the assessed value. The fallback keeps a future
  // jurisdiction rendering rather than crashing, and a test requires every
  // jurisdiction with a checker to declare its own labels explicitly.
  const valueLabels = rules.valueInputLabels ?? {
    current: "Current value ($)",
    previous: "Prior-year value ($)",
  };

  const set = (k: keyof CheckerInput) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    setInput((prev) => ({ ...prev, [k]: value }));
  };

  const result = useMemo(() => runChecker(input, jurisdictionId), [input, jurisdictionId]);

  return (
    <section aria-label="Assessment checker">
      <h2>Enter your information</h2>
      <p className="muted-note">
        <strong>{jurisdiction} rules apply.</strong> This tool screens your
        figures against {jurisdiction} assessment rules only — a different
        state's caps, notice, and deadlines do not apply here.
      </p>
      <p className="muted-note">
        Everything runs in your browser. Nothing you enter is stored or sent
        anywhere.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <fieldset className="fieldset">
          <legend>
            From your {rules.assessmentNoticeName} (user-provided)
          </legend>
          <p>
            <label htmlFor="currentAppraised">
              {valueLabels.current}
            </label>
            <input
              id="currentAppraised"
              type="text"
              inputMode="decimal"
              value={input.currentAppraised}
              onChange={set("currentAppraised")}
              autoComplete="off"
            />
          </p>
          <p>
            <label htmlFor="previousAppraised">
              {valueLabels.previous}
            </label>
            <input
              id="previousAppraised"
              type="text"
              inputMode="decimal"
              value={input.previousAppraised}
              onChange={set("previousAppraised")}
              autoComplete="off"
            />
          </p>
          {valueLabels.help && <p className="muted-note">{valueLabels.help}</p>}
          {rules.homesteadCapQuestion && (
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={input.homesteadCapApplies}
                  onChange={set("homesteadCapApplies")}
                />{" "}
                {rules.homesteadCapQuestion.checkboxLabel}
              </label>
            </p>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend>Property characteristics (user-provided)</legend>
          <p>
            <label htmlFor="squareFeet">Living area (square feet)</label>
            <input
              id="squareFeet"
              type="text"
              inputMode="numeric"
              value={input.squareFeet}
              onChange={set("squareFeet")}
              autoComplete="off"
            />
          </p>
        </fieldset>

        <fieldset className="fieldset">
          <legend>Optional context (user-provided)</legend>
          <p>
            <label htmlFor="recentSalePrice">
              Recent purchase price ($, if you bought this property)
            </label>
            <input
              id="recentSalePrice"
              type="text"
              inputMode="decimal"
              value={input.recentSalePrice}
              onChange={set("recentSalePrice")}
              autoComplete="off"
            />
          </p>
          <p>
            <label htmlFor="recentSaleYear">Year of purchase</label>
            <input
              id="recentSaleYear"
              type="text"
              inputMode="numeric"
              value={input.recentSaleYear}
              onChange={set("recentSaleYear")}
              autoComplete="off"
            />
          </p>
          <p>
            <label htmlFor="conditionIssues">
              Condition issues worth documenting (foundation, roof, major
              systems, damage)
            </label>
            <textarea
              id="conditionIssues"
              rows={3}
              value={input.conditionIssues}
              onChange={set("conditionIssues")}
            />
          </p>
        </fieldset>

        <button type="submit" className="button">Review my assessment</button>
      </form>

      {submitted && (
        <section aria-label="Assessment review" aria-live="polite" className="result-panel">
          <h2>Assessment review ({jurisdiction})</h2>
          <p className="result-panel__disclaimer">
            <strong>What this is:</strong> an informational screen of the facts
            you entered. Every figure below — including any per-square-foot
            comparison — is a screening comparison, not an appraisal,
            valuation, or prediction of your property's market value. This
            review does not determine your property's correct value, does not
            indicate that your assessment is wrong, and does not predict any
            protest outcome.
          </p>

          <h3>Potential review flags</h3>
          {result.flags.length === 0 ? (
            <p>
              Based on what you entered, nothing crossed this tool's screening
              thresholds. That is not a conclusion that your value is correct —
              the most reliable next step is comparing your property with
              genuinely similar properties in the appraisal district's official
              records.
            </p>
          ) : (
            <ul className="flag-list" style={{ listStyle: "none", padding: 0 }}>
              {result.flags.map((f) => (
                <li key={f.flagId} className="flag">
                  <span className="flag__kind">{f.kind}</span>
                  <br />
                  <strong>{f.title}</strong>
                  <p>{f.detail}</p>
                </li>
              ))}
            </ul>
          )}

          <h3>Comparable-property review</h3>
          <p>
            Not enough verified comparable data is available to produce a
            reliable comparable-property analysis. The checker does not generate
            comparables. You can identify candidate properties through{" "}
            <a
              href={rules.propertySearch.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {rules.propertySearch.label}
            </a>{" "}
            and screen them for similarity — see{" "}
            <Link href={siteConfig.jurisdictions[jurisdictionId as "texas" | "florida"].evidenceGuidePath ?? siteConfig.evidenceGuidePath}>
              comparable-property evidence
            </Link>
            .
          </p>

          <h3>Preparation checklist</h3>
          <ul>
            {result.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3>Next steps</h3>
          <ul>
            <li>
              Check the{" "}
              <Link href={siteConfig.jurisdictions[jurisdictionId as "texas" | "florida"].deadlinesPath ?? siteConfig.deadlinesPath}>
                review deadlines
              </Link>{" "}
              that apply to your {rules.assessmentNoticeName}.
            </li>
            <li>
              Read{" "}
              <Link href={siteConfig.jurisdictions[jurisdictionId as "texas" | "florida"].howToFilePath ?? siteConfig.howToFilePath}>
                {jurisdiction === "Florida" ? "how to file a VAB petition" : "how to file a protest"}
              </Link>
              .
            </li>
            <li>
              Build your evidence with the{" "}
              <Link href={siteConfig.jurisdictions[jurisdictionId as "texas" | "florida"].evidenceGuidePath ?? siteConfig.evidenceGuidePath}>
                evidence guide
              </Link>
              .
            </li>
          </ul>

          <p>
            <em>
              Limitations: values were not verified against any official source;
              this tool performs no valuation; the flags above are screening
              heuristics, not appraisal conclusions.
            </em>
          </p>
        </section>
      )}
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import {
  type EstimatorInput,
  parseRate,
} from "@/lib/tools/estimator/types";
import { getEstimatorConfig } from "@/lib/tools/estimator/configs";

// Client wrapper around the pure estimator config (lib/tools/estimator/configs.ts).
// The component receives only the jurisdiction id and imports the config
// itself: a config contains its compute function, which cannot be serialized
// across the server/client boundary. Every state-specific rule, label,
// limitation and FAQ lives in the config. Like the assessment checker,
// everything runs in the browser and nothing is stored.

const EMPTY_INPUT: EstimatorInput = {
  marketValue: "",
  homestead: false,
  transferOfOwnership: false,
  limitedPropertyValue: "",
  rate: "",
};

const money = (n: number): string =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const money2 = (n: number): string =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });

const num = (n: number): string => n.toLocaleString("en-US");

function formatRate(raw: string, unit: string): string {
  const r = parseRate(raw);
  if (r === undefined) return "";
  return unit === "per-hundred" ? `$${r} per $100` : `${r} mills ($${r} per $1,000)`;
}

export function ValueEstimator({ jurisdictionId }: { jurisdictionId: string }) {
  const [input, setInput] = useState<EstimatorInput>(EMPTY_INPUT);
  const [submitted, setSubmitted] = useState(false);

  // Fail loudly at render time if a page passes an unregistered jurisdiction.
  const config = getEstimatorConfig(jurisdictionId);
  if (!config) {
    throw new Error(
      `No estimator config registered for "${jurisdictionId}". Add one in lib/tools/estimator/configs.ts before rendering the tool for it.`
    );
  }

  const set = (k: keyof EstimatorInput) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    setInput((prev) => ({ ...prev, [k]: value }));
  };

  const result = useMemo(() => config.compute(input), [config, input]);
  const showResult = submitted && result.ok;
  const rateEntered = parseRate(input.rate) !== undefined;

  return (
    <section aria-label={config.toolTitle}>
      <h2>Enter your information</h2>
      <p className="muted-note">
        <strong>{config.jurisdictionName} rules apply.</strong> This tool works
        through {config.jurisdictionName}&rsquo;s value chain only — a different
        state&rsquo;s ratios, exemptions and rates do not apply here.
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
          <legend>Value (user-provided)</legend>
          <p>
            <label htmlFor="ev-market">{config.marketValueLabel}</label>
            <input
              id="ev-market"
              type="text"
              inputMode="decimal"
              value={input.marketValue}
              onChange={set("marketValue")}
              autoComplete="off"
            />
          </p>
          <p className="muted-note">{config.marketValueHelp}</p>

          {config.homesteadQuestion && (
            <>
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={input.homestead}
                    onChange={set("homestead")}
                  />{" "}
                  {config.homesteadQuestion}
                </label>
              </p>
              {config.homesteadHelp && (
                <p className="muted-note">{config.homesteadHelp}</p>
              )}
            </>
          )}

          {config.transferQuestion && (
            <>
              <p>
                <label>
                  <input
                    type="checkbox"
                    checked={input.transferOfOwnership}
                    onChange={set("transferOfOwnership")}
                  />{" "}
                  {config.transferQuestion}
                </label>
              </p>
              {config.transferHelp && (
                <p className="muted-note">{config.transferHelp}</p>
              )}
            </>
          )}

          {config.lpvQuestion && (
            <>
              <p>
                <label htmlFor="ev-lpv">{config.lpvQuestion}</label>
                <input
                  id="ev-lpv"
                  type="text"
                  inputMode="decimal"
                  value={input.limitedPropertyValue}
                  onChange={set("limitedPropertyValue")}
                  autoComplete="off"
                />
              </p>
              <p className="muted-note">{config.lpvHelp}</p>
            </>
          )}
        </fieldset>

        <fieldset className="fieldset">
          <legend>Optional: tax rate (user-provided)</legend>
          <p>
            <label htmlFor="ev-rate">{config.rateLabel}</label>
            <input
              id="ev-rate"
              type="text"
              inputMode="decimal"
              value={input.rate}
              onChange={set("rate")}
              autoComplete="off"
            />
          </p>
          <p className="muted-note">{config.rateHelp}</p>
        </fieldset>

        <button type="submit" className="button">
          Calculate my estimate
        </button>
      </form>

      {submitted && !result.ok && (
        <p role="alert" className="result-panel__disclaimer">
          {result.error}
        </p>
      )}

      {showResult && result.marketValue !== undefined && (
        <section
          aria-label="Estimate"
          aria-live="polite"
          className="result-panel"
        >
          <h2>Your {config.jurisdictionName} value-chain estimate</h2>
          <p className="result-panel__disclaimer">
            <strong>What this is:</strong> an educational calculation of what{" "}
            {config.jurisdictionName}&rsquo;s property tax system does with the
            value you entered. It is not an appraisal, not an assessed value,
            not a tax bill, and not professional advice. Actual values and
            taxes can differ.
          </p>

          <table className="est-table">
            <caption className="muted-note">The value chain, step by step</caption>
            <tbody>
              {result.lines.map((line) => (
                <tr key={line.term}>
                  <th scope="row">{line.term}</th>
                  <td className="est-table__amount">
                    {line.amount !== undefined
                      ? line.term.includes("ratio") || line.amount < 1
                        ? num(line.amount) + "%"
                        : money2(line.amount)
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {result.taxableValue !== undefined && (
            <p className="est-headline">
              <strong>Taxable value: {money(result.taxableValue)}</strong>
              {result.schoolTaxableValue !== undefined &&
                result.schoolTaxableValue !== result.taxableValue && (
                  <> · school-district taxable value: {money(result.schoolTaxableValue)}</>
                )}
            </p>
          )}

          {result.estimatedAnnualTax !== undefined &&
            result.estimatedMonthlyTax !== undefined && (
            <>
              <h3>Estimated property tax</h3>
              <p className="est-headline">
                <strong>{money2(result.estimatedAnnualTax)} / year</strong> ·{" "}
                {money2(result.estimatedMonthlyTax)} / month
              </p>
              <p className="muted-note">
                Computed at your rate ({formatRate(input.rate, config.rateUnit)})
                applied to the taxable value above.
              </p>
            </>
          )}
          {!rateEntered && (
            <p className="muted-note">
              No rate was entered, so no tax estimate is shown. Enter the rate
              from your own tax bill to add one — the site does not supply rates,
              because every jurisdiction sets its own.
            </p>
          )}

          <h3>How this estimate was calculated</h3>
          <ul>
            {result.lines.map((line) => (
              <li key={line.term + "-desc"}>
                <strong>{line.term}:</strong> {line.description}
              </li>
            ))}
          </ul>

          {result.notes.length > 0 && (
            <>
              <h3>Notes on your inputs</h3>
              <ul>
                {result.notes.map((n) => (
                  <li key={n.slice(0, 40)}>{n}</li>
                ))}
              </ul>
            </>
          )}

          <h3>Important limitation</h3>
          <p>
            This is an estimate based on the information and data available to
            AssessCheck. It is not an official appraisal, assessed value, tax
            bill, or professional valuation, and actual property taxes and
            values can differ.
          </p>

          <details className="est-limitations">
            <summary>State-specific limitations of this estimator</summary>
            <ul>
              {config.limitations.map((l) => (
                <li key={l.slice(0, 40)}>{l}</li>
              ))}
            </ul>
          </details>
        </section>
      )}
    </section>
  );
}

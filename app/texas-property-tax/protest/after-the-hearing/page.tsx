import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/after-the-hearing/",
  title: "After the ARB Hearing: Orders, Effects, and Late Remedies",
  description:
    "What the ARB's written order means, how a changed value reaches your tax bill, and the limited late remedies Texas law provides.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas Protest",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { href: "/texas-property-tax/protest/", label: "Protest" },
        { label: "After the Hearing" },
      ]}
    >
      <h1>After the Hearing</h1>

      <h2>The written order</h2>
      <p>
        The ARB determines a protest by written order, delivered by certified
        mail or electronically if you have elected electronic communications.
        The order states the appraised value as finally determined, alongside
        the value the chief appraiser submitted. The ARB must issue the order
        within 30 days after the hearing concludes in most counties (45 days in
        counties with four million or more people).
      </p>

      <h2>What the order changes</h2>
      <p>
        If the ARB finds the appraisal records incorrect on an issue you raised,
        it corrects them. When the ARB rules in your favor, it instructs the
        chief appraiser to notify the taxing units of the change, and your tax
        bills for that year are computed on the corrected value. If you already
        paid taxes based on the higher value, the taxing units refund the
        difference resulting from the change. The ARB's decision binds only for
        the tax year in question — next year's assessment starts fresh.
      </p>

      <h2>If the order is not what you wanted</h2>
      <p>
        You still have options, on a clock: a petition for review in district
        court within 60 days of receiving the final order, or arbitration
        routes in qualifying cases. See{" "}
        <Link href="/texas-property-tax/protest/appeal-options/">
          appeal options
        </Link>
        . The order itself must prominently state your appeal rights and
        deadlines.
      </p>

      <h2>Late remedies, narrowly defined</h2>
      <p>
        Texas law provides a few ways to act after the normal protest window,
        each with strict conditions:
      </p>
      <ul>
        <li>
          <strong>Good-cause late protest.</strong> The ARB may hear a late-filed
          protest before it approves the appraisal records if you show good
          cause.
        </li>
        <li>
          <strong>Failure-to-receive-notice protest.</strong> You may protest the
          failure to deliver a notice you were entitled to; that protest must be
          filed before the taxes become delinquent.
        </li>
        <li>
          <strong>Motion for correction (over-appraisal).</strong> If a
          residence homestead was appraised at least one-fourth above its
          correct value (or non-homestead property at least one-third above),
          you may file a motion to correct — before the delinquency date, and
          after paying the taxes on the undisputed portion. Not available if the
          property was subject to a protest that year.
        </li>
        <li>
          <strong>Clerical errors and ownership errors.</strong> Motions to
          correct clerical errors, multiple appraisals, or ownership errors can
          reach the current year and the five preceding years. Chief appraisers
          and owners can also jointly move to correct by agreement.
        </li>
      </ul>

      <h2>Worked example: reading the order and the refund arithmetic (illustrative)</h2>
      <p>
        <em>
          Illustrative scenario with made-up numbers — actual refunds depend
          on each taxing unit's rate and your payment timing.
        </em>
      </p>
      <ol>
        <li>
          <strong>Scenario:</strong> the ARB's order reduces your value from
          $520,000 to $480,000, and you had already paid taxes computed on
          $520,000 at an (illustrative) combined rate of $2.10 per $100.
        </li>
        <li>
          <strong>Step — check the order's two values:</strong> the order
          shows the ARB's determination alongside the chief appraiser's
          submitted value. Confirm the $480,000 appears as the determination
          for the correct tax year, and note the appeal-rights block the
          order must state prominently.
        </li>
        <li>
          <strong>Step — what happens mechanically:</strong> the ARB
          instructs the chief appraiser to notify the taxing units; the
          corrected value flows into your bill. Taxing units refund the
          difference resulting from the change if you already paid.
        </li>
        <li>
          <strong>Step — the arithmetic behind the refund:</strong> the
          $40,000 reduction is worth $40,000 × 2.10 / 100 = <strong>$840</strong>
          at this rate — but only units' actual adopted rates determine your
          real refund, and only for this tax year.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a $40,000 reduction is not a
        $40,000 refund — the value change, the rate, and the tax year are
        three different numbers, and the order's binding effect ends with
        the year in question.
      </p>
      <p>
        <strong>What it does not tell you:</strong> when your refund arrives
        (units and collector practices vary), or whether the late remedies
        above could still reach a different year's problem.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-appraisal-protests",
          "tx-tax-code-41-47",
          "tx-tax-code-41-44",
          "tx-tax-code-41-411",
        ]}
      />
    </PageShell>
  );
}

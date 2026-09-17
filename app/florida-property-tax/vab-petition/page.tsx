import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/florida-property-tax/vab-petition/",
  title: "Filing a Florida VAB Petition",
  description:
    "How the Value Adjustment Board process works: informal review with the property appraiser, the 25/30-day petition windows, filing requirements, the 75% payment rule, hearings, and decisions.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Florida",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/florida-property-tax/", label: "Florida Property Tax" },
        { label: "VAB Petition" },
      ]}
    >
      <h1>Filing a Florida VAB Petition</h1>

      <p>
        The Value Adjustment Board (VAB) is each county's quasi-judicial body
        for hearing property tax disputes. Here is the process from reading
        your notice to a decision.
      </p>

      <h2>Step 1 — Informal review with the property appraiser</h2>
      <p>
        Before any petition, you may ask the property appraiser to informally
        confer about the assessment and present the facts supporting your
        view. Nothing requires this step, but the TRIM notice directs market-
        value questions to the appraiser first, and many disputes end here.
      </p>

      <h2>Step 2 — File the petition on time</h2>
      <ul>
        <li>
          <strong>Valuation disputes:</strong> file at any time during the
          taxable year, on or before the{" "}
          <strong>25th day after the assessment notice was mailed</strong>. The
          petition date for the year is printed on your TRIM notice — use it.
        </li>
        <li>
          <strong>Exemption denials, agricultural classifications, deferrals:</strong>{" "}
          file within <strong>30 days</strong> of the mailing of the applicable
          denial notice.
        </li>
        <li>
          The petition must be on the form prescribed by the Department of
          Revenue, sworn, describe the property by parcel number, and be filed
          with the VAB clerk. A filing fee of up to $15 per parcel may apply
          (by VAB resolution); some appeal types are fee-exempt, and fees are
          waived for recipients of temporary assistance.
        </li>
      </ul>

      <h2>Step 3 — Pay the required amount</h2>
      <p>
        A petitioner challenging assessed value must pay all non-ad valorem
        assessments and <strong>at least 75% of the ad valorem taxes</strong>{" "}
        (less the applicable early-payment discount) before the taxes become
        delinquent. If the required payment is not made, the VAB must deny the
        petition by written decision by April 20.
      </p>

      <h2>Step 4 — Exchange evidence</h2>
      <p>
        At least <strong>15 days before the hearing</strong>, the petitioner
        gives the property appraiser a list of evidence with copies of the
        documentation to be considered. On written request, the property
        appraiser must provide their evidence list no later than{" "}
        <strong>7 days before</strong> the hearing. The property appraiser
        must also provide your property record card when the petition is
        received (unless it is available online). Note: you may not withhold
        from the hearing evidence the property appraiser requested in writing
        and you denied.
      </p>

      <h2>Step 5 — Hearing and decision</h2>
      <p>
        The clerk notifies you of the hearing at least 25 calendar days in
        advance; hearings occur no earlier than 30 and no later than 60 days
        after the assessment notice mailing (subject to roll approval). In
        larger counties, a <strong>special magistrate</strong> (an attorney for
        exemption issues, a state-certified appraiser for valuation issues)
        takes testimony and recommends a decision. The VAB issues a written
        decision with findings of fact and conclusions of law within 20
        calendar days after its last session day.
      </p>

      <h2>Step 6 — After the decision</h2>
      <p>
        A taxpayer may contest the assessment in circuit court (the
        proceeding is de novo, and the burden of proof is on the party
        initiating the action). Deadlines and procedures for judicial review
        are beyond this site's scope — confirm them with an attorney if you
        are considering it.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates only — count from the mailing date shown for YOUR
          notice, and rely on the filing date printed on your TRIM notice.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> your TRIM notice is mailed August 20; the
          printed petition deadline is September 15 (illustrative); your
          hearing is scheduled for October 10.
        </li>
        <li>
          <strong>Count:</strong> 25 days after August 20 is September 14 — the
          printed September 15 date controls, per the notice.
        </li>
        <li>
          <strong>Evidence:</strong> deliver your evidence list and copies by
          September 25 (15 days before the hearing).
        </li>
        <li>
          <strong>Payment:</strong> budget to pay at least 75% of the ad
          valorem taxes (less the discount) before April 1 delinquency.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the VAB calendar is driven by
        dates on your own documents — notice mailing, printed deadline,
        hearing notice — not by a single statewide date.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county's actual
        dates, whether your specific petition type has a local fee or
        procedure, or any prediction of the outcome.
      </p>

      <h2>What AssessCheck cannot do</h2>
      <p>
        This site has no connection to any VAB or property appraiser, does
        not file petitions, and does not verify county-specific procedures.
        Always confirm the current year's dates with your county VAB clerk.
      </p>

      <SourceList
        sourceIds={[
          "fl-stat-194-011",
          "fl-stat-194-032",
          "fl-stat-194-034",
          "fl-stat-194-035",
          "fl-stat-194-036",
          "fl-stat-194-014",
          "fl-stat-194-013",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/appeal-options/",
  title: "Appeal Options After a Texas ARB Decision",
  description:
    "District court review, binding arbitration, and SOAH appeal routes after an ARB order, with their statutory deadlines.",
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
        { label: "Appeal Options" },
      ]}
    >
      <h1>Appeal Options After the ARB</h1>

      <p>
        If you are dissatisfied with the ARB's findings, Texas law provides
        appeal routes. Each has its own deadline and its own trade-offs, and
        some require professional judgment about whether you have a case. We
        describe what the official sources say; we do not advise on which route
        fits your situation.
      </p>

      <h2>District court</h2>
      <p>
        You may appeal the ARB's decision to state district court in the county
        where the property is located. A party appealing must file a petition
        for review with the district court within 60 days after receiving notice
        that the final order was entered; missing that deadline bars the
        appeal. Before filing, the Comptroller advises consulting an attorney
        about whether you have a case. The Tax Code also requires a partial
        payment of taxes — usually the amount not in dispute — before the
        delinquency date, with a statutory procedure to ask the court to excuse
        prepayment on an inability-to-pay oath. Within the court process, you
        may seek resolution by arbitration, jury, judge, or settlement
        discussions.
      </p>

      <h2>Regular binding arbitration (RBA)</h2>
      <p>
        Instead of district court, certain ARB determinations may be appealed
        to regular binding arbitration under Tax Code Chapter 41A, conducted
        by an independent neutral arbitrator whose decision is binding on all
        parties. To qualify, the property must be real or personal property, the
        ARB must have determined the appraised or market value or an unequal
        appraisal, the ARB-determined value must not exceed $5 million (no value
        limit for residence homesteads), taxes must have been timely paid, and
        no district-court suit may be pending on the same matter. The request
        and deposit are due within 60 days of receiving the ARB order — the
        same window as the district-court petition. While the appeal is
        pending, the owner must pay taxes on the undisputed portion of the
        taxable value, and delinquent taxes bar the appeal. The Comptroller
        maintains the arbitrator registry and processes requests, deposits, and
        refunds, but is prohibited from advising on a pending arbitration.
      </p>

      <h2>State Office of Administrative Hearings (SOAH)</h2>
      <p>
        If the ARB-determined value exceeds $1 million, you may be able to
        appeal to SOAH on the determination of appraised or market value or on
        an unequal appraisal (industrial property is excluded). To do so, file
        a Notice of Appeal by Property Owner — an official SOAH form — with
        the chief appraiser within 30 days of receiving the ARB order, and a
        $1,500 deposit with the chief appraiser within 90 days. SOAH
        administrative law judges' decisions are final and may not be
        appealed.
      </p>

      <h2>Limited binding arbitration (LBA)</h2>
      <p>
        Separate from value appeals: after filing a protest, if you believe the
        ARB or chief appraiser failed to comply with a procedural requirement
        relating to your protest, you may request limited binding arbitration
        to compel compliance.
      </p>

      <h2>One clock to watch above all</h2>
      <p>
        Every route runs from the ARB's final order, so note the date you
        receive it. These appeal windows do not extend because you were busy
        or found the order confusing — if preserving appeal rights matters to
        you, act well before the deadline and confirm the current procedure
        with the applicable authority.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-appraisal-protests",
          "tx-tax-code-42-21",
          "tx-comptroller-rba",
          "tx-tax-code-41a",
          "soah-home",
          "tx-comptroller-basics",
        ]}
      />
    </PageShell>
  );
}

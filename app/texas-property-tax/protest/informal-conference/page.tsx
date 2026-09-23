import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/informal-conference/",
  title: "The Informal Conference Before an ARB Hearing",
  description:
    "Most Texas protests can be discussed with the appraisal district informally before the ARB hearing. What the conference is, and what agreeing means.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas Protest",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { href: "/texas-property-tax/protest/", label: "Protest" },
        { label: "Informal Conference" },
      ]}
    >
      <h1>The Informal Conference</h1>

      <h2>What it is</h2>
      <p>
        After you file a protest, you may request an informal conference with
        the appraisal district to try to resolve the protest before your formal
        ARB hearing. The notice of appraised value must explain that this
        option exists and its purpose. It is a conversation between you (or
        your agent) and the appraisal district's staff — not a hearing, and not
        before the ARB itself.
      </p>

      <h2>Why owners use it</h2>
      <p>
        The conference is where factual corrections often happen quickly: an
        error in square footage, a condition the district's model did not
        capture, documentation the appraiser had not seen. It is also where the
        district may propose a value compromise. If you and the district
        resolve the protest, you can avoid the formal hearing altogether.
      </p>

      <h2>How to prepare</h2>
      <p>
        Bring the same evidence you would bring to a hearing, in a form you can
        leave or send: photographs, repair estimates or receipts, sales
        documentation, comparable property data. Know your two or three
        strongest points and lead with them. Our{" "}
        <Link href="/evidence/property-tax-protest-evidence/">evidence
        guide</Link> and{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> can help
        you organize both.
      </p>

      <h2>If you agree to a value</h2>
      <p>
        If the informal conference resolves the protest, the resolution is
        documented and the ARB issues an agreed order reflecting the terms. Read
        anything you are asked to sign before signing, and keep a copy. Once an
        agreed disposition is in place, that is the value for the tax year.
      </p>

      <h2>If you do not agree</h2>
      <p>
        Declining a proposed value does not forfeit anything: if you cannot
        resolve the protest informally, you can continue it to the formal ARB
        hearing, which is scheduled separately.
      </p>

      <h2>Worked example: a conference in three moves (illustrative)</h2>
      <p>
        <em>
          Illustrative scenario — not a script, and not a prediction of what
          any district will offer.
        </em>
      </p>
      <ol>
        <li>
          <strong>Scenario:</strong> your assessment is $520,000 and your
          strongest evidence is an adjusted comparable sale near $470,000.
          The district's staff opens by checking your square footage against
          their card and finds it is overstated by 150 sq ft.
        </li>
        <li>
          <strong>Move — lead with your point, let them check theirs:</strong>
          present the comparable first; the factual correction the staff
          found on their own is now working in the same direction as your
          evidence instead of against a number you defended.
        </li>
        <li>
          <strong>Move — evaluate the offer against your evidence, not
          against the assessment:</strong> a settlement at $495,000 is a
          $25,000 reduction, but it is still $25,000 above what your
          comparable supports — decide whether the certainty of settling is
          worth that gap, since declining does not forfeit your hearing.
        </li>
        <li>
          <strong>Move — read the disposition before signing:</strong>
          confirm the value, the year, and that the document is what you
          agreed to; keep a copy, because the agreed order sets the value for
          the tax year.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the informal conference rewards
        the same preparation as the hearing — and settling is a choice to
        weigh, not an obligation.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether your district
        offers conferences at all, what its staff will propose, or how a
        settled value interacts with next year's assessment.
      </p>

      <SourceList sourceIds={["tx-comptroller-appraisal-protests"]} />
    </PageShell>
  );
}

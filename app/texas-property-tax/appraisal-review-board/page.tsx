import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/appraisal-review-board/",
  title: "The Texas Appraisal Review Board (ARB)",
  description:
    "The ARB is the citizen board that hears property tax protests. Who serves on it, what it can decide, and what its decisions do.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Appraisal Review Board" },
      ]}
    >
      <h1>The Appraisal Review Board (ARB)</h1>

      <h2>What the ARB is</h2>
      <p>
        The ARB is a group of local citizens authorized to resolve disputes
        between property owners and the appraisal district. Members are
        appointed locally to two-year terms. In counties with a population of
        75,000 or more, the appraisal district's board of directors appoints
        ARB members; in smaller counties, the local administrative district
        judge does. ARB hearings typically run from May through July, and in
        larger counties hearings may continue beyond July.
      </p>

      <h2>What the ARB decides</h2>
      <p>
        After listening to the property owner and the appraisal district
        representative, the ARB determines the issues heard in the protest —
        for example, the appraised value or an exemption question. ARB
        decisions are binding only for the tax year in question. The board must
        make its determination by written order, and it may not determine the
        appraised value to be higher than the value submitted by the chief
        appraiser unless the owner requests and agrees to it.
      </p>

      <h2>Hearing procedures</h2>
      <p>
        Each ARB adopts hearing procedures based on model procedures the
        Comptroller prepares; local procedures may add to but not contradict
        the model. The ARB must hold a public meeting on its proposed
        procedures before adopting them by May 15, and must post the adopted
        procedures in hearing rooms and on the appraisal district website. Read
        your county's adopted procedures before your hearing — they govern
        evidence submission and hearing conduct. Our{" "}
        <Link href="/texas-property-tax/protest/arb-hearing/">ARB hearing
        guide</Link> walks through what to expect.
      </p>

      <h2>Special panels in large counties</h2>
      <p>
        In very large counties, complex properties — commercial real and
        personal property, utilities, industrial and manufacturing property,
        and multifamily residential — with appraised values above an annually
        adjusted minimum can be heard by special ARB panels whose members must
        meet professional qualification requirements. The property owner can
        request a special panel on the protest form.
      </p>

      <h2>Independence and limits</h2>
      <p>
        State law establishes separation requirements between ARB members and
        appraisal district staff, and prohibits the Comptroller's office from
        advising anyone about a matter under protest. The ARB is not part of
        the appraisal district; it exists to hear disputes with it.
      </p>

      <SourceList
        sourceIds={["tx-comptroller-arb", "tx-tax-code-41-47", "tx-comptroller-basics"]}
      />
    </PageShell>
  );
}

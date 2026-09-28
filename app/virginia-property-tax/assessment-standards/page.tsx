import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/virginia-property-tax/assessment-standards/",
  title: "Virginia's 100% Standard and the Assessing Officers",
  description:
    "Virginia's assessment standard: 100% of fair market value by statute, the Commissioner of the Revenue and local assessors who apply it, the presumption of correctness, and what no cap means for owners.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Virginia",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/virginia-property-tax/", label: "Virginia Property Tax" },
        { label: "Assessment Standards" },
      ]}
    >
      <h1>The 100% Standard and the Assessing Officers</h1>

      <p>
        Virginia&rsquo;s assessment standard is one sentence long and
        unusually strict: real estate is assessed at{" "}
        <strong>100% of fair market value</strong> (§ 58.1-3200(A)) — no
        fractional ratio, no classification discount, and{" "}
        <strong>no cap on year-over-year change</strong>. The market moves,
        the assessment moves with it. What Virginia offers instead is the
        strongest procedural protection on this site — and a presumption
        that the assessment is correct until the owner proves otherwise.
      </p>

      <h2>Who assesses</h2>
      <p>
        Virginia&rsquo;s assessing officers are <em>local</em>, and the
        office varies by locality: the{" "}
        <strong>Commissioner of the Revenue</strong> — an elected
        constitutional officer — or a professional{" "}
        <strong>local assessor</strong> appointed under § 58.1-3201. Some
        localities split the work (the commissioner assessing, a
        professional assessor handling real estate or supervising
        reassessments). Either way, the officer is accountable to the
        locality, and the reassessment schedule is the
        locality&rsquo;s — Virginia requires general reassessments on a
        regular schedule but lets each locality set it.
      </p>

      <h2>The presumption of correctness</h2>
      <p>
        An assessment is <strong>presumed correct</strong>, and the{" "}
        <strong>burden is on the taxpayer</strong> to overcome it (§
        58.1-3379). The presumption is overcome by probative evidence of
        the value — an appraisal, comparable sales — not by opinion or by
        the size of the increase. This is the mirror image of Indiana&rsquo;s
        5% burden shift: Virginia never shifts the burden, whatever the
        percentage change.
      </p>
      <p>
        <strong>What this tells you:</strong> a Virginia appeal is an
        evidence exercise from the first filing. The{" "}
        <Link href="/virginia-property-tax/board-and-court/">
          procedural ladder
        </Link>{" "}
        (notice, board, court) protects <em>when and how</em> you are
        heard; the evidence protects <em>whether</em> you win.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up figures — not your
          locality.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> assessments rise with a hot market —
          $480,000 → $560,000 (+16.7%) in one year, no improvements.
        </li>
        <li>
          <strong>Step — the cap question:</strong> unlike Arizona (5% LPV
          limit) or Texas (10% homestead cap), there is no limit the
          increase could breach. +16.7% is lawful if the market supports
          it.
        </li>
        <li>
          <strong>Step — the notice:</strong> because the assessment
          increased, § 58.1-3330 entitles you to a notice showing $560,000{" "}
          <em>and</em> the two prior years ($480,000, $470,000), at least
          15 days before the hearing — the comparison is on the
          notice&rsquo;s face.
        </li>
        <li>
          <strong>Step — the argument:</strong> the winning case is
          market evidence that $560,000 exceeds fair market value — with
          the presumption working against you until that evidence is in.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the two-year comparison on
        the notice makes Virginia the one state where a year-over-year
        look at the figures is <em>built into the process</em> — but the
        comparison is context, not proof. The proof is value evidence as
        of the assessment date.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        Land-use (agricultural/forestal) assessment, the elderly and
        disabled relief programs, and the special assessment districts
        are outside this page. The Code sections cited above, read on
        the official law portal, are the authorities for the standard
        and the officers.
      </p>

      <SourceList
        sourceIds={["va-code-58-1-3200", "va-code-58-1-3379"]}
      />
    </PageShell>
  );
}

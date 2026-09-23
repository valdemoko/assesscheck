import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { EVIDENCE_TYPES } from "@/lib/data/evidence";

export const metadata: Metadata = buildMetadata({
  path: "/evidence/property-tax-protest-evidence/",
  title: "Property Tax Protest Evidence Guide (Texas)",
  description:
    "Photographs, repair estimates, sales documentation, comparables, surveys, engineering reports, and more: what official Texas guidance says about protest evidence.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Evidence",
});

export default function EvidenceGuidePage() {
  const sourceIds = new Set<string>();
  EVIDENCE_TYPES.forEach((e) => e.sources.forEach((s) => sourceIds.add(s.sourceId)));

  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/evidence/", label: "Evidence" },
        { label: "Property Tax Protest Evidence" },
      ]}
    >
      <h1>Property Tax Protest Evidence</h1>

      <p>
        At an ARB hearing, it is up to you to have what you need to prove your
        case — "you cannot go to the hearing and just say the appraisal district
        is wrong," as the Comptroller puts it. This guide covers each evidence
        category that the official Texas guidance names. For each, it explains
        what it is, why it may matter, when it may be useful, and — just as
        important — what it does <em>not</em> prove by itself.
      </p>

      <p>
        Before your hearing, check your county ARB's adopted hearing procedures
        for how many copies of evidence to bring and what electronic presentation
        is allowed. See the{" "}
        <Link href="/texas-property-tax/protest/arb-hearing/">ARB hearing
        guide</Link> and build your packet with the{" "}
        <Link href="/property-tax-checker/">assessment checker</Link>.
      </p>

      {EVIDENCE_TYPES.map((e) => (
        <section key={e.evidenceId} aria-label={e.name}>
          <h2>{e.name}</h2>
          <dl>
            <dt>What it is</dt>
            <dd>{e.whatItIs}</dd>
            <dt>Why it may matter</dt>
            <dd>{e.whyItMayMatter}</dd>
            <dt>When it may be useful</dt>
            <dd>{e.whenItMayBeUseful}</dd>
            <dt>What it does not prove by itself</dt>
            <dd>{e.whatItDoesNotProve}</dd>
            <dt>What to verify</dt>
            <dd>{e.whatToVerify}</dd>
          </dl>
        </section>
      ))}

      <SourceList sourceIds={[...sourceIds]} />
    </PageShell>
  );
}

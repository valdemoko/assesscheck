import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/virginia-property-tax/",
  title: "Virginia Property Tax",
  description:
    "How Virginia property tax works: assessments at 100% of fair market value with no cap, the 15-day notice of an increased assessment showing two prior years, the locality-set board of equalization deadline, and the de novo circuit court appeal.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Virginia",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Virginia Property Tax" }]}
    >
      <h1>Virginia Property Tax</h1>

      <p>
        Virginia assesses every parcel at{" "}
        <strong>100% of fair market value</strong> — by statute, with no
        fractional ratio and no cap on year-over-year change — and protects
        the owner with <strong>procedure</strong> instead: a{" "}
        <strong>15-day notice</strong> of any increased assessment showing
        two prior years, a locality-run{" "}
        <strong>board of equalization</strong>, and an{" "}
        <strong>original, de novo appeal to the circuit court</strong> whose
        window is the <em>latest of three</em> statutory limits.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/virginia-property-tax/assessment-standards/">
            The 100% standard and the assessing officers
          </Link>{" "}
          — what the statute requires, who assesses, and why no cap means
          procedure is the protection.
        </li>
        <li>
          <Link href="/virginia-property-tax/board-and-court/">
            The board of equalization and the circuit court
          </Link>{" "}
          — the 15-day notice, the locality-set deadline with its 30-day
          floor and postmark rule, and the latest-of-three court window.
        </li>
        <li>
          <Link href="/virginia-property-tax/deadlines/">
            Virginia property tax deadlines
          </Link>{" "}
          — the notice clock, the ordinance deadline, and the three court
          limits.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The Commissioner of the Revenue or the local assessor</strong>{" "}
          assesses real estate in each locality — which officer depends on
          the locality&rsquo;s structure (§ 58.1-3201).
        </li>
        <li>
          <strong>The local board of assessment reviews (BOE)</strong> —
          a citizen board appointed under § 58.1-3377 — hears applications
          contesting assessments, including a catch-all any-year
          application.
        </li>
        <li>
          <strong>The circuit court</strong> hears assessment appeals as
          original, de novo proceedings under § 58.1-3984.
        </li>
        <li>
          <strong>The locality&rsquo;s governing body</strong> sets the
          tax rate and, by ordinance, the BOE application deadline —
          within the statutory floor.
        </li>
      </ul>

      <h2>No cap — procedure is the protection</h2>
      <p>
        Virginia is one of the states on this site with{" "}
        <strong>no percentage limit on an assessment</strong>: a market
        rise passes straight through to the assessment (§ 58.1-3200(A)
        requires 100% of fair market value). The protections are
        procedural, and they are strong: the{" "}
        <strong>notice of an increased assessment must show the new figure
        and the two preceding years&rsquo; assessments</strong>, and reach
        the owner at least <strong>15 days before the hearing</strong>{" "}
        (§ 58.1-3330) — a built-in year-over-year comparison on the
        notice&rsquo;s own face. The{" "}
        <Link href="/virginia-property-tax/board-and-court/">
          board and court page
        </Link>{" "}
        walks the ladder.
      </p>

      <h2>Finding your property</h2>
      <p>
        Virginia property records are locality-run — each of the
        independent cities and counties keeps its own assessment records.
        Fairfax County&rsquo;s <em>iCare</em> portal, verified live when
        this section was prepared, is the example: it searches real and
        personal property assessments and exposes the assessment history
        the notice shows. Your own commissioner of the revenue or
        assessor&rsquo;s site is the entry point for your locality.
      </p>

      <h2>What this does not cover</h2>
      <p>
        Personal property assessment (§ 58.1-3983.1 is deliberately
        outside these pages), relief and exemption programs, and the 95
        localities&rsquo; individual ordinances are not restated here.
        AssessCheck has no data connection to any Virginia locality. The
        Code sections cited throughout were read on the official law
        portal — the strongest provenance on this site.
      </p>

      <SourceList
        sourceIds={[
          "va-code-58-1-3200",
          "va-code-58-1-3330",
          "va-code-58-1-3378",
          "va-code-58-1-3984",
        ]}
      />
    </PageShell>
  );
}

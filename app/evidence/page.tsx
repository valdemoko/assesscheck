import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/evidence/",
  title: "Evidence for a Property Tax Protest",
  description:
    "What evidence may be relevant in a Texas property tax protest, organized by what you are trying to show — with what each type does and does not prove.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Evidence",
});

const PATHS: {
  situation: string;
  evidence: { href: string; label: string }[];
  note: string;
}[] = [
  {
    situation:
      "You believe your property would not sell for the appraised value in its current condition",
    evidence: [
      { href: "/evidence/property-condition/", label: "Condition evidence" },
      { href: "/evidence/property-tax-protest-evidence/", label: "Photographs, repair estimates, engineering reports" },
    ],
    note: "Condition arguments need documentation of the specific problems — an assertion alone rarely moves a hearing.",
  },
  {
    situation: "You recently bought or sold the property",
    evidence: [
      { href: "/evidence/property-tax-protest-evidence/", label: "Sales price documentation" },
    ],
    note: "The sale's date relative to January 1 matters, and one sale does not automatically control the outcome.",
  },
  {
    situation: "You believe similar properties are valued lower",
    evidence: [
      { href: "/comparables/", label: "Comparable-properties methodology" },
      { href: "/evidence/property-tax-protest-evidence/", label: "Comparable-property information" },
    ],
    note: "Similarity is statutory (location, size, age, condition and more) — proximity alone is not enough.",
  },
  {
    situation: "You believe your property was appraised unequally compared with similar ones",
    evidence: [
      { href: "/evidence/property-tax-protest-evidence/", label: "Median level of appraisal calculations" },
    ],
    note: "This is a distinct protest ground with its own standard; confirm it applies before relying on it.",
  },
  {
    situation: "The appraisal record contains factual errors (size, features, age)",
    evidence: [
      { href: "/evidence/property-tax-protest-evidence/", label: "Surveys, drawings, deed records" },
      { href: "/texas-property-tax/faq/", label: "Record-error FAQ" },
    ],
    note: "Correcting the record can affect value without a formal value argument.",
  },
];

export default function EvidenceLandingPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Evidence" }]}>
      <h1>Evidence</h1>
      <p>
        Evidence is what turns a disagreement about your assessment into
        something a review board can weigh. Texas guidance is specific about
        what owners may bring to support a protest — and this section is
        organized around what you are trying to show, because the evidence
        that helps depends entirely on that.
      </p>

      <h2>Start from your situation</h2>
      <dl>
        {PATHS.map((p) => (
          <div key={p.situation}>
            <dt>{p.situation}</dt>
            <dd>
              <ul>
                {p.evidence.map((e) => (
                  <li key={e.href + e.label}>
                    <Link href={e.href}>{e.label}</Link>
                  </li>
                ))}
              </ul>
              <p>{p.note}</p>
            </dd>
          </div>
        ))}
      </dl>

      <h2>The full evidence guide</h2>
      <p>
        Every evidence category the official Texas guidance names — what it is,
        why it may matter, when it is useful, and what it does{" "}
        <em>not</em> prove by itself — is in the{" "}
        <Link href="/evidence/property-tax-protest-evidence/">
          property tax protest evidence guide
        </Link>
        . The{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> builds a
        preparation checklist from your own situation.
      </p>

      <h2>Two rules that hold for every category</h2>
      <ul>
        <li>
          Evidence documents facts; it rarely proves a value by itself. A
          repair estimate shows a defect, not a dollar reduction. Be ready for
          the board to weigh everything together.
        </li>
        <li>
          Follow your county's ARB procedures on form (copies, electronic
          submission, deadlines). Well-chosen evidence can be excluded for
          procedural reasons — check the rules before your hearing.
        </li>
      </ul>
    </PageShell>
  );
}

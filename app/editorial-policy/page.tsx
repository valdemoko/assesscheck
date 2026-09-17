import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/editorial-policy/",
  title: "Editorial Policy",
  description:
    "Our standards for factual accuracy, source verification, corrections, updates, and the separation of editorial content from advertising.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Trust",
});

export default function EditorialPolicyPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Editorial Policy" }]}>
      <h1>Editorial Policy</h1>

      <h2>Factual accuracy</h2>
      <p>
        Every important factual claim is supported by a source we have read.
        Primary official sources (statutes, the Texas Comptroller, appraisal
        districts) govern. Where a source states a rule rather than a fixed
        date, we restate the rule. We distinguish official facts from our own
        calculations and interpretations, and we label illustrative examples as
        such.
      </p>

      <h2>Source verification</h2>
      <p>
        Sources are recorded with their publisher, URL, jurisdiction, and the
        date we last verified them. We do not cite a URL we have not resolved,
        and we do not cite secondary sources where an official source covers the
        same subject.
      </p>

      <h2>Independence</h2>
      <p>
        This site is not affiliated with, endorsed by, or operated on behalf of
        any appraisal district, taxing unit, or government agency. We are not a
        property tax protest company and do not act as agents for property
        owners.
      </p>

      <h2>Corrections and updates</h2>
      <p>
        Confirmed errors are corrected promptly and documented on our{" "}
        <a href="/corrections/">corrections page</a>. Deadline-sensitive content
        is re-verified before each protest season. We do not display an
        "updated" date unless the content was actually reviewed or changed.
      </p>

      <h2>Advertising separation</h2>
      <p>
        If advertising is ever displayed, it will be clearly separated from
        editorial content. Advertisers have no influence over what we publish,
        how pages are written, or which sources we cite. During the current
        content-development phase the site carries no advertising at all.
      </p>

      <h2>Authorship</h2>
      <p>
        We do not invent professional credentials. Content is produced through
        the research and review process described on our{" "}
        <a href="/methodology/">methodology page</a> and this policy. We do not
        claim first-hand experience with protests that we do not have, and we
        do not publish fabricated case studies or testimonials.
      </p>
    </PageShell>
  );
}

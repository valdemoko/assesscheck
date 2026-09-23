import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/disclaimer/",
  title: "Disclaimer",
  description:
    "This site provides general educational information and data analysis, not individualized legal, tax, appraisal, or financial advice.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Legal",
});

export default function DisclaimerPage() {
  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "Legal" }, { label: "Disclaimer" }]}>
      <h1>Disclaimer</h1>
      <p>
        Last updated: <time dateTime={siteConfig.legal.lastUpdated.disclaimer}>{siteConfig.legal.lastUpdated.disclaimer}</time>
      </p>

      <h2>Educational information only</h2>
      <p>
        The information on this site is general educational information and data
        analysis about Texas property tax assessments and the protest process.
        It is not individualized legal, tax, appraisal, or financial advice, and
        no attorney-client, fiduciary, or professional relationship is created
        by using this site.
      </p>

      <h2>What we do not determine</h2>
      <p>
        We do not determine the legally correct value of any property, predict
        or guarantee protest outcomes, or promise savings. Statements that an
        assessment "appears higher than" a comparison, or "may warrant further
        review," are informational observations based on the public data
        available to us at the time — they are not conclusions about what the
        law requires.
      </p>

      <h2>Accuracy and currency</h2>
      <p>
        We work from official sources and verify what we publish, but laws,
        deadlines, procedures, and data change, and errors can occur despite
        careful work. Always verify current deadlines, forms, and procedures
        with the applicable appraisal district or an official source before
        acting. Report errors through our <a href="/corrections/">corrections
        process</a> so we can fix them.
      </p>

      <h2>Not a substitute for professionals</h2>
      <p>
        For advice about your specific situation, consult the appraisal
        district's official information channels, a licensed Texas property tax
        consultant or attorney, or another qualified professional. Where a
        legal issue is complicated, our role is to direct you toward the
        appropriate official resource or professional — not to answer it
        ourselves.
      </p>

      <h2>About the checker specifically</h2>
      <p>
        The assessment checker is a screening tool. Its outputs are computed
        from the values you enter and are labeled as calculated or
        user-provided on screen. A flag it raises is a suggestion to look
        further, not a finding that anything is wrong; the absence of flags is
        not a finding that your value is correct. It computes no valuation and
        predicts no outcome.
      </p>
    </PageShell>
  );
}

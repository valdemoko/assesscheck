import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/terms/",
  title: "Terms of Use",
  description:
    "Terms governing use of this website, including limitations of liability and the informational nature of its content and tools.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Legal",
});

export default function TermsPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Legal" }, { label: "Terms of use" }]}>
      <h1>Terms of Use</h1>
      <p>
        Last updated: <time dateTime={siteConfig.legal.lastUpdated.terms}>{siteConfig.legal.lastUpdated.terms}</time>
      </p>

      <h2>Acceptance</h2>
      <p>
        By using this website you agree to these terms. If you do not agree,
        please do not use the site.
      </p>

      <h2>Informational purpose</h2>
      <p>
        The site and its tools are provided for general informational and
        educational purposes only. Nothing on the site constitutes legal, tax,
        appraisal, or financial advice, and the tools do not determine the
        legally correct value of any property. See the{" "}
        <a href="/disclaimer/">disclaimer</a>.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided "as is" and "as available." We work from official
        sources and verify what we publish, but we do not warrant that the
        content is complete, current, or error-free. Deadlines and procedures
        change; you must verify them with the applicable appraisal district or
        an official source before acting.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any loss
        arising from use of, or reliance on, this site or its tools, including
        decisions about whether to file a protest or how to prepare for one.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not attempt to disrupt or overload the site.</li>
        <li>
          Do not scrape or redistribute the site's content in bulk without
          permission; official government sources remain freely available
          directly.
        </li>
        <li>
          Do not represent the site's output as an official determination of
          value.
        </li>
      </ul>

      <h2>Your responsibility for decisions</h2>
      <p>
        You are responsible for verifying any deadline, procedure, or figure
        with the applicable official source before acting on it, and for
        deciding — ideally with qualified professional input — whether and how
        to act on anything you read here.
      </p>

      <h2>External links</h2>
      <p>
        We link to official government sources because they are the authority
        for their own information. We do not control those sites and are not
        responsible for their availability or content.
      </p>

      <h2>Availability and modifications</h2>
      <p>
        We may modify, suspend, or discontinue any part of the site — pages,
        tools, or the whole service — at any time. We do not promise
        uninterrupted availability.
      </p>

      <h2>Who operates this site</h2>
      <p>
        {siteConfig.name} is created and maintained by{" "}
        <a href={siteConfig.author.linkedin} target="_blank" rel="noopener noreferrer">{siteConfig.author.name}</a>{" "}
        (see <a href="/about/author/">about the author</a>). Questions about
        these terms go through the <a href="/contact/">contact page</a>.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. Material changes will be reflected in the
        review date above.
      </p>
    </PageShell>
  );
}

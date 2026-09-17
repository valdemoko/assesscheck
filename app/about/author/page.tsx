import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/about/author/",
  title: "About the Author",
  description:
    "Who creates and maintains AssessCheck: the person responsible for the site's tools, content, and corrections process.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "About",
});

export default function AuthorPage() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/about/", label: "About" }, { label: "Author" }]}
    >
      <h1>About the Author</h1>

      <h2>{siteConfig.author.name}</h2>
      <p>
        {siteConfig.author.name} is the creator and person responsible for this
        project. He develops and maintains the tools and resources available on
        this site and reviews the content to keep it useful, clear, and up to
        date.
      </p>
      <p>
        <a
          href={siteConfig.author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.author.linkedinLabel}
        </a>
      </p>

      <h2>Responsibility for this site</h2>
      <p>
        Questions about the site itself — corrections, source suggestions, or
        privacy requests — go through the{" "}
        <a href="/contact/">contact page</a>. Editorial standards are described
        in the <a href="/editorial-policy/">editorial policy</a>, and how facts
        are verified in the <a href="/methodology/">methodology</a>. This site
        is not affiliated with any appraisal district or government agency.
      </p>
    </PageShell>
  );
}

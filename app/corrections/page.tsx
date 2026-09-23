import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/corrections/",
  title: "Corrections",
  description:
    "How to report an error on this site and how we verify, correct, and document confirmed errors.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Trust",
});

export default function CorrectionsPage() {
  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "Corrections" }]}>
      <h1>Corrections</h1>

      <h2>Reporting an error</h2>
      <p>
        If you find a factual error, an outdated deadline, or a broken official
        link, please report it through the <a href="/contact/">contact page</a>.
        Include the page address, the statement you believe is wrong, and, if
        possible, the official source that contradicts it.
      </p>

      <h2>How we handle reports</h2>
      <ol>
        <li>We check the reported statement against primary official sources.</li>
        <li>
          If the statement is wrong or outdated, we correct it and update the
          page's verification date.
        </li>
        <li>
          Material corrections to deadline or procedure information are noted
          below with the date of the change and what changed.
        </li>
      </ol>

      <h2>Correction log</h2>
      <p>
        No corrections have been logged yet. This log records material
        corrections once the site is live and errors are reported.
      </p>
    </PageShell>
  );
}

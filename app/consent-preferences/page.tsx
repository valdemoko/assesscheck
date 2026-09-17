import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/consent-preferences/",
  title: "Consent Preferences",
  description:
    "Review or change your consent choices for cookies, analytics, and advertising on AssessCheck. Current status: no consent-requiring technologies are active.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Legal",
  // Low SEO value as a functional page, but indexable so users can find it
  // from search alongside privacy resources. Kept out of the sitemap? No —
  // registered in the sitemap gate as ready; see lib/seo/site-pages.ts.
});

export default function ConsentPreferencesPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Legal" }, { label: "Consent preferences" }]}
    >
      <h1>Consent Preferences</h1>

      <h2>Current status</h2>
      <p>
        <strong>
          There is nothing to consent to on {siteConfig.name} right now.
        </strong>{" "}
        This site sets no cookies, uses no local storage, runs no analytics,
        and displays no advertising (see the{" "}
        <a href="/cookie-policy/">cookie policy</a> for the full picture).
        Your assessment-checker inputs stay in your browser's memory and are
        discarded when you close the page.
      </p>

      <h2>When a consent mechanism exists</h2>
      <p>
        If {siteConfig.name} enables analytics or advertising — technologies
        that require consent for visitors in the EEA, the United Kingdom, and
        Switzerland — this page will become the control point where you can:
      </p>
      <ul>
        <li>review what each consent category covers;</li>
        <li>accept or refuse non-essential technologies;</li>
        <li>
          change or withdraw your choice at any time, with the same effect as
          the original banner choice.
        </li>
      </ul>
      <p>
        The consent mechanism will be a single system across the site: the
        first-choice banner, this page, and any embedded consent checks will
        read and write the same state. Refusing will never block access to any
        page or tool.
      </p>

      <h2>Your rights in the meantime</h2>
      <p>
        Privacy requests (access, correction, deletion of anything you have
        sent us voluntarily) are handled through the <a href="/contact/">contact
        page</a>. Because nothing is stored about you by this site today, there
        is generally nothing to delete — but the channel exists and is honored.
      </p>
    </PageShell>
  );
}

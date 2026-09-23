import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/contact/",
  title: "Contact",
  description:
    "How to reach AssessCheck: report errors, broken official links, checker problems, privacy requests, or suggest a source.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "About",
});

export default function ContactPage() {
  const email = siteConfig.contact.email;

  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}>
      <h1>Contact</h1>

      <p>
        This contact channel exists for a specific set of purposes. It is not a
        support desk, and we cannot respond to individual questions about your
        property or protest.
      </p>

      <h2>What to contact us about</h2>
      <ul>
        {siteConfig.contact.purposes.map((p) => (
          <li key={p}>{p}.</li>
        ))}
        <li>A suggestion for an official source we should review.</li>
        <li>An accessibility barrier — see our{" "}
          <a href="/accessibility/">accessibility statement</a>.
        </li>
      </ul>

      <h2>What we cannot do</h2>
      <ul>
        <li>
          Advise you about your specific property, protest, or hearing.
        </li>
        <li>File protests or act as your agent.</li>
        <li>Provide legal, tax, or appraisal advice.</li>
      </ul>

      <h2>How to reach us</h2>
      {email ? (
        <p>
          Email: <a href={`mailto:${email}`}>{email}</a>
          <br />
          Please include the page address and a description of the issue. We
          review reports against primary official sources before making
          changes.
        </p>
      ) : (
        <p>
          <em>
            A direct contact address is being set up for this site and is not
            published yet. We are not displaying a placeholder address because
            mail sent to a placeholder would silently fail — the honest state
            is that this channel is not open yet.
          </em>{" "}
          Until it is live, factual corrections can still be described to us
          once the address appears here; the site also lists the official
          sources behind every page so you can verify anything directly against
          the authority that published it.
        </p>
      )}

      <h2>Questions about your own assessment</h2>
      <p>
        Use your appraisal district's official contact channels. For Harris
        County, that is the{" "}
        <a href="https://hcad.org/" target="_blank" rel="noopener noreferrer">
          Harris Central Appraisal District (hcad.org)
        </a>
        . Statewide questions are answered by the{" "}
        <a
          href="https://comptroller.texas.gov/taxes/property-tax/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Texas Comptroller of Public Accounts
        </a>
        .
      </p>
    </PageShell>
  );
}

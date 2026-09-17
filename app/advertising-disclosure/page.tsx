import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/advertising-disclosure/",
  title: "Advertising Disclosure",
  description:
    "How advertising does and does not work on AssessCheck, including the current status of advertising and what will govern it if enabled.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Legal",
});

export default function AdvertisingDisclosurePage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Legal" }, { label: "Advertising disclosure" }]}
    >
      <h1>Advertising Disclosure</h1>
      <p>
        Last updated:{" "}
        <time dateTime={siteConfig.legal.lastUpdated.advertising}>
          {siteConfig.legal.lastUpdated.advertising}
        </time>
      </p>

      <h2>Current status</h2>
      <p>
        <strong>
          {siteConfig.name} does not currently display advertising.
        </strong>{" "}
        There is no advertising script on this site today. This page explains
        the advertising model so it is clear before any change.
      </p>

      <h2>If advertising is enabled</h2>
      <p>
        {siteConfig.name} may display advertising to support the free
        availability of its tools and guides. If advertising is enabled:
      </p>
      <ul>
        <li>
          it is expected to be served through{" "}
          <strong>Google AdSense</strong>, which places third-party
          advertising technologies on pages;
        </li>
        <li>
          Google and its partners may use cookies or similar technologies to
          serve ads, measure performance, and — depending on your consent and
          settings — personalize them;
        </li>
        <li>
          where consent is required, ads will respect the choice you record in
          the consent mechanism, and you will be able to change it at any time
          via <a href="/consent-preferences/">consent preferences</a>;
        </li>
        <li>
          the specific cookies and providers involved will be listed in the{" "}
          <a href="/cookie-policy/">cookie policy</a> when advertising is
          actually enabled — not before.
        </li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>
          We do not control which specific ads appear; ad selection belongs to
          the ad network. An ad on this site is not an endorsement.
        </li>
        <li>
          We do not design layouts to encourage accidental clicks, and we do
          not ask, incentivize, or reward clicking ads.
        </li>
        <li>
          Ad placements, when they exist, will be visually distinct from
          content and navigation and labeled as advertising.
        </li>
        <li>
          Advertising does not influence the site's factual content, sources,
          or tool logic — see the <a href="/editorial-policy/">editorial
          policy</a>.
        </li>
      </ul>

      <h2>Google's use of data</h2>
      <p>
        Google describes how it uses data from sites and apps that use its
        partners' services on its official page:{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          &ldquo;How Google uses information from sites or apps that use our
          services&rdquo;
        </a>
        . See also the privacy-related sections of our{" "}
        <a href="/privacy/">privacy policy</a>.
      </p>
    </PageShell>
  );
}

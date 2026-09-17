import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/cookie-policy/",
  title: "Cookie Policy",
  description:
    "What cookies and local storage AssessCheck uses today (none by default), and exactly what will change if advertising or analytics are ever enabled.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Legal",
});

export default function CookiePolicyPage() {
  return (
    <PageShell
      breadcrumbs={[{ label: "Legal" }, { label: "Cookie policy" }]}
    >
      <h1>Cookie Policy</h1>
      <p>
        Last updated:{" "}
        <time dateTime={siteConfig.legal.lastUpdated.cookies}>
          {siteConfig.legal.lastUpdated.cookies}
        </time>
      </p>

      <h2>What this site uses today</h2>
      <p>
        <strong>
          {siteConfig.name} currently sets no cookies and uses no local
          storage
        </strong>
        . The assessment checker runs entirely in your browser memory; nothing
        you enter is written to your device or transmitted to us. There is no
        analytics script and no advertising script on this site at the time of
        this update.
      </p>

      <h2>Cookie categories, and whether they exist here</h2>
      <table>
        <caption>Cookie categories and current status on this site</caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Purpose</th>
            <th scope="col">Status on {siteConfig.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary</td>
            <td>
              Required for basic site function (for example, security or
              load-balancing cookies on some hosts).
            </td>
            <td>
              Not set by this site's own code. Static hosting infrastructure
              may generate technical logs (see the{" "}
              <a href="/privacy/">privacy policy</a>).
            </td>
          </tr>
          <tr>
            <td>Functional</td>
            <td>Remember preferences between visits.</td>
            <td>Not used. The checker intentionally stores nothing.</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Measure traffic and usage.</td>
            <td>
              Not implemented. If analytics are added, this table will list the
              exact cookies and this policy will be updated first.
            </td>
          </tr>
          <tr>
            <td>Advertising</td>
            <td>
              Deliver and, where consented, personalize ads; measure ad
              performance.
            </td>
            <td>
              Not active. See{" "}
              <a href="/advertising-disclosure/">advertising disclosure</a>. If
              advertising is enabled, third-party ad cookies will be listed
              here and governed by the consent mechanism described below.
            </td>
          </tr>
        </tbody>
      </table>

      <h2>If advertising or analytics are enabled later</h2>
      <p>
        If {siteConfig.name} ever enables advertising or analytics, the
        following will happen <em>before</em> any non-essential cookie is set
        for visitors in the EEA, the United Kingdom, and Switzerland:
      </p>
      <ul>
        <li>
          a consent mechanism will be implemented and will be the single way to
          accept, refuse, or change non-essential cookie use;
        </li>
        <li>
          this page will list every cookie by name, provider, purpose, and
          duration — no placeholder entries;
        </li>
        <li>
          consent can be withdrawn at any time via the{" "}
          <a href="/consent-preferences/">consent preferences</a> page.
        </li>
      </ul>

      <h2>Managing cookies in your browser</h2>
      <p>
        Your browser's settings let you block or delete cookies for any site.
        Because this site sets none of its own, there is nothing to delete
        here today. Blocking cookies from third-party services (if any are
        ever listed above) is done either through your browser or through the
        consent preferences page once a consent mechanism exists.
      </p>

      <h2>Questions</h2>
      <p>
        Cookie and privacy questions go through the <a href="/contact/">contact
        page</a>.
      </p>
    </PageShell>
  );
}

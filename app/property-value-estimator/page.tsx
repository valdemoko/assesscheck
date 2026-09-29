import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";
import { ESTIMATOR_CONFIGS } from "@/lib/tools/estimator/configs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/property-value-estimator/",
  title: "Property Value Estimator & Property Tax Calculator",
  description:
    "See how a property's value becomes its taxable value and estimate potential property taxes, state by state. Choose your state to use the rules that actually apply.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-29",
  section: "Tool",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AssessCheck Property Value Estimator",
  url: `${siteConfig.url}/property-value-estimator/`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "An educational estimator that shows how a property value becomes a taxable value under each covered state's assessment rules, with an optional property-tax estimate at a user-supplied rate. Not an appraisal.",
};

export default function PropertyValueEstimatorPage() {
  const states = Object.values(ESTIMATOR_CONFIGS);
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Property Value Estimator" }]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>Property Value Estimator</h1>
      <p>
        This estimator takes a property value you provide and works it through
        the value chain of the state you choose — assessment ratio, exemptions,
        taxable value — and, if you supply the tax rate from your own bill, an
        estimated annual property tax.
      </p>
      <p>
        It is an educational calculation, not an appraisal and not an automated
        valuation model: the tool does not estimate what a property is worth.
        Each state&rsquo;s edition uses that state&rsquo;s own verified rules,
        because assessment systems differ far more than they resemble each other.
      </p>

      <h2>Choose your state</h2>
      <p>
        Seven states are supported, each with rules verified from official
        sources. A state without an edition does not yet have enough verified
        numeric data — the site does not publish a generic page pretending
        otherwise.
      </p>
      <ul>
        {states.map((c) => (
          <li key={c.jurisdictionId}>
            <Link href={c.path}>{c.toolTitle}</Link> — {c.intro}
          </li>
        ))}
      </ul>

      <h2>What this tool can and cannot do</h2>
      <ul>
        <li>
          <strong>Can:</strong> compute assessment ratios, exemption amounts and
          taxable values from verified state rules, and estimate a tax at the
          rate you supply.
        </li>
        <li>
          <strong>Cannot:</strong> value your property, verify your inputs
          against official records, model every local exemption or special
          assessment, or replace your tax bill.
        </li>
      </ul>

      <h2>Where the state rules come from</h2>
      <p>
        Every ratio, exemption amount and cap mechanic in the calculators is
        cited to the official source it was verified from — statute text,
        departments of revenue, or county officials. See our{" "}
        <Link href="/methodology/">methodology</Link> and the{" "}
        <Link href="/evidence/">evidence and sources page</Link>. For the rules
        that limit how fast values can rise, use the{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> (Texas and
        Florida).
      </p>
    </PageShell>
  );
}

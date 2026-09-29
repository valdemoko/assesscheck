import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { ValueEstimator } from "@/components/tools/ValueEstimator";
import {
  ESTIMATOR_CONFIGS,
  SOURCE_IDS,
  getEstimatorConfig,
} from "@/lib/tools/estimator/configs";
import { requireJurisdictionRules } from "@/lib/data/jurisdictions";
import { siteConfig } from "@/lib/site-config";
import type { StateEstimatorConfig } from "@/lib/tools/estimator/types";

// Shared server shell for every state estimator page: one implementation, one
// set of structured data and layout conventions, with every state-specific
// word, number and FAQ coming from the config. Adding a state estimator means
// adding a config, not forking this file.

export function StateEstimatorPage({
  jurisdictionId,
  metaTitle,
  metaDescription,
  breadcrumbs,
  sourceIds,
}: {
  jurisdictionId: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: { href?: string; label: string }[];
  sourceIds: string[];
}) {
  const config: StateEstimatorConfig | undefined = getEstimatorConfig(jurisdictionId);
  if (!config) {
    throw new Error(
      `No estimator config registered for "${jurisdictionId}". Add one in lib/tools/estimator/configs.ts before publishing a page for it.`
    );
  }

  const j = siteConfig.jurisdictions[jurisdictionId as keyof typeof siteConfig.jurisdictions];

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: config.toolTitle,
    url: `${siteConfig.url}${config.path}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: metaDescription,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Property Value Estimator",
        item: `${siteConfig.url}/property-value-estimator/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: config.toolTitle,
        item: `${siteConfig.url}${config.path}`,
      },
    ],
  };

  const otherStates = Object.values(ESTIMATOR_CONFIGS).filter(
    (c) => c.jurisdictionId !== jurisdictionId
  );

  // The property-search link comes from the jurisdiction rules where they
  // exist, and from the estimator config otherwise: Ohio and Georgia are
  // estimator states but not checker states, so JURISDICTION_RULES has no
  // record for them — their searches were verified during the estimator work
  // and are carried by the estimator config instead.
  const propertySearchUrl =
    requireJurisdictionRulesSafe(jurisdictionId) ??
    PROPERTY_SEARCH_FALLBACKS[jurisdictionId];
  if (!propertySearchUrl) {
    throw new Error(
      `No property-search URL for estimator state "${jurisdictionId}".`
    );
  }

  return (
    <PageShell breadcrumbs={breadcrumbs}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <h1>{config.toolTitle}</h1>
      <p>{config.intro}</p>

      <p className="muted-note">
        <strong>This is an estimate, not an appraisal.</strong> The tool does not
        value your property; it works through {config.jurisdictionName}
        &rsquo;s value chain from a figure you supply. It is not an official
        assessment, tax bill, or professional valuation.
      </p>

      <ValueEstimator jurisdictionId={jurisdictionId} />

      <h2>How the {config.jurisdictionName} estimate is calculated</h2>
      <p>
        The estimator applies {config.jurisdictionName}&rsquo;s verified value
        chain to the value you enter: the figures that convert a market value
        into the taxable value the rates apply to, using the state&rsquo;s own
        assessment ratio, exemption amounts and cap mechanics. The state does
        not supply rates — rates are local — so the optional tax estimate uses
        the rate from your own bill. Every rule number is cited below and was
        verified from the official source listed.
      </p>

      <h2>Limitations</h2>
      <ul>
        {config.limitations.map((l) => (
          <li key={l.slice(0, 40)}>{l}</li>
        ))}
      </ul>

      <h2>Frequently asked questions</h2>
      <dl>
        {config.faqs.map((f) => (
          <div key={f.question}>
            <dt>
              <strong>{f.question}</strong>
            </dt>
            <dd>{f.answer}</dd>
          </div>
        ))}
      </dl>

      <h2>Related {config.jurisdictionName} resources</h2>
      <ul>
        <li>
          <Link href={j.hubPath}>{config.jurisdictionName} property tax overview</Link> — the
          state&rsquo;s system, its notice, and its appeal route.
        </li>
        <li>
          <Link href={j.deadlinesPath}>{config.jurisdictionName} deadlines</Link> —
          the dates that govern the review window.
        </li>
        <li>
          <Link href="/evidence/">Evidence &amp; sources</Link> — what the site
          relies on, and when official documentation is essential.
        </li>
        <li>
          <Link href="/property-tax-checker/">Assessment checker</Link> — the
          companion tool for states whose limits two notices can test (Texas and
          Florida).
        </li>
        <li>
          <a href={propertySearchUrl} target="_blank" rel="noopener noreferrer">
            Official {config.jurisdictionName} property search
          </a>{" "}
          — look up the official record for your parcel.
        </li>
      </ul>

      <h2>Other state estimators</h2>
      <ul>
        {otherStates.map((c) => (
          <li key={c.jurisdictionId}>
            <Link href={c.path}>{c.toolTitle}</Link>
          </li>
        ))}
      </ul>

      <SourceList sourceIds={sourceIds} />
    </PageShell>
  );
}

// Per-state source lists live in lib/tools/estimator/configs.ts next to the
// configs they support; see SOURCE_IDS there. sourceIdsFor re-exports the
// lookup for the tests.
export function sourceIdsFor(jurisdictionId: string): string[] {
  const ids = SOURCE_IDS[jurisdictionId];
  if (!ids || ids.length === 0) {
    throw new Error(`No source list registered for estimator "${jurisdictionId}".`);
  }
  return ids;
}

// Property-search lookup that tolerates estimator states with no entry in
// JURISDICTION_RULES (the rules registry only covers checker states plus the
// states documented before the estimator existed).
function requireJurisdictionRulesSafe(jurisdictionId: string): string | undefined {
  try {
    return requireJurisdictionRules(jurisdictionId).propertySearch.url;
  } catch {
    return undefined;
  }
}

// Verified official property-search entry points for the two estimator states
// that are not registered in JURISDICTION_RULES. Both were read during the
// 2026-09-28 verification rounds and are cited by the state's estimator
// sources (oh-caao-directory / oh-dor-property-tax-hub for Ohio;
// ga-dor-county-facts / ga-qpublic-assessors for Georgia).
const PROPERTY_SEARCH_FALLBACKS: Record<string, string> = {
  ohio: "https://caao.org/auditors-directory/",
  georgia: "https://dor.georgia.gov/county-property-tax-facts",
};

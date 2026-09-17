import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/",
  title: "Texas Property Tax — How the System Works",
  description:
    "Who determines your Texas property value, how appraisal districts and taxing units differ, what an ARB does, and where a protest fits in.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

const TOPICS = [
  {
    href: "/texas-property-tax/how-property-value-is-determined/",
    label: "How property value is determined",
    blurb:
      "Market value as of January 1, mass appraisal, and the three appraisal approaches.",
  },
  {
    href: "/texas-property-tax/appraised-value-vs-taxable-value/",
    label: "Appraised value vs. taxable value",
    blurb:
      "Why the value on your notice and the value your taxes are based on are different numbers.",
  },
  {
    href: "/texas-property-tax/market-value/",
    label: "What 'market value' means in Texas",
    blurb: "The statutory definition and what it does and does not cover.",
  },
  {
    href: "/texas-property-tax/exemptions/",
    label: "Exemptions",
    blurb:
      "Homestead, age 65 or older, disabled, and veteran exemptions, and the May 1 application deadline.",
  },
  {
    href: "/texas-property-tax/property-tax-notice/",
    label: "Your property tax notice",
    blurb: "When you get a notice of appraised value and what must be on it.",
  },
  {
    href: "/texas-property-tax/appraisal-district-vs-taxing-unit/",
    label: "Appraisal district vs. taxing unit",
    blurb:
      "Who values your property versus who sets the tax rate and collects the tax.",
  },
  {
    href: "/texas-property-tax/appraisal-review-board/",
    label: "The Appraisal Review Board (ARB)",
    blurb:
      "The citizen board that hears protests and makes determinations for the tax year.",
  },
  {
    href: "/texas-property-tax/property-owner-rights/",
    label: "Property owner rights",
    blurb:
      "Equal and uniform taxation, notice of increases, and the right to protest.",
  },
];

export default function TexasPropertyTaxPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Texas Property Tax" }]}>
      <h1>Texas Property Tax</h1>
      <p>
        Texas has no state property tax. Property taxes are locally assessed and
        locally administered: appraisal districts determine values, taxing units
        set rates and collect taxes, and an Appraisal Review Board hears
        disagreements between the two sides. This section explains each piece of
        that system and how they fit together.
      </p>
      <ul>
        {TOPICS.map((t) => (
          <li key={t.href}>
            <Link href={t.href}>{t.label}</Link>
            <p>{t.blurb}</p>
          </li>
        ))}
      </ul>
      <p>
        Ready to look at your own situation? Start with the{" "}
        <Link href="/property-tax-checker/">assessment checker</Link>, or go
        straight to your county's page:{" "}
        <Link href="/texas/harris-county/">Harris County</Link>.
      </p>
    </PageShell>
  );
}

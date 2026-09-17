import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "Understand Your Property Assessment — Texas",
  description:
    "Understand your property assessment, compare the public evidence, and prepare for a property tax protest with reliable, sourced Texas information.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Home",
});

const TEXAS_TOPICS = [
  {
    href: "/texas-property-tax/how-property-value-is-determined/",
    label: "How property value is determined",
  },
  {
    href: "/texas-property-tax/appraised-value-vs-taxable-value/",
    label: "Appraised value vs. taxable value",
  },
  { href: "/texas-property-tax/market-value/", label: "What market value means" },
  { href: "/texas-property-tax/exemptions/", label: "Exemptions" },
  { href: "/texas-property-tax/property-tax-notice/", label: "Your property tax notice" },
  {
    href: "/texas-property-tax/appraisal-district-vs-taxing-unit/",
    label: "Appraisal district vs. taxing unit",
  },
  {
    href: "/texas-property-tax/appraisal-review-board/",
    label: "The Appraisal Review Board",
  },
  { href: "/texas-property-tax/property-owner-rights/", label: "Property owner rights" },
];

const PROTEST_STEPS = [
  { href: "/texas-property-tax/protest/how-it-works/", label: "How the process works" },
  { href: "/texas-property-tax/protest/deadlines/", label: "Deadlines" },
  { href: "/texas-property-tax/protest/how-to-file/", label: "How to file" },
  {
    href: "/texas-property-tax/protest/informal-conference/",
    label: "The informal conference",
  },
  { href: "/texas-property-tax/protest/arb-hearing/", label: "The ARB hearing" },
  { href: "/texas-property-tax/protest/evidence/", label: "Evidence for a protest" },
  { href: "/texas-property-tax/protest/after-the-hearing/", label: "After the hearing" },
  { href: "/texas-property-tax/protest/appeal-options/", label: "Appeal options" },
];

const EVIDENCE_TOPICS = [
  {
    href: "/evidence/property-tax-protest-evidence/",
    label: "Full evidence guide",
  },
  { href: "/evidence/property-condition/", label: "Property condition evidence" },
  { href: "/comparables/", label: "How comparable properties work" },
  { href: "/faq/", label: "Texas property tax FAQ" },
  { href: "/resources/", label: "Official resources directory" },
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero" aria-label="Introduction">
        <div className="hero__content">
          <p className="hero__kicker">Texas property tax · Harris County first</p>
          <h1>Understand your property assessment</h1>
          <p className="hero__lede">
            You got your assessment notice and it might be too high. Work out
            whether it warrants a closer look, what evidence matters, how the
            protest process works, and when the deadline is — with reliable,
            sourced public information.
          </p>
          <div className="hero__actions">
            <Link href="/property-tax-checker/" className="button">
              Start with the assessment checker
            </Link>
            <Link href="/florida-property-tax/" className="button button--inverse">
              Florida property tax
            </Link>
          </div>
        </div>
      </section>

      <div className="prose">

        <section aria-label="Who it is for">
          <h2>Who it is for</h2>
          <p>
            Texas and Florida property owners — starting with Harris County —
            who want to understand their assessment before deciding anything.
            If you already know you want a professional to handle a protest or
            VAB petition, this site will still help you understand what that
            process involves.
          </p>
        </section>

        <section aria-label="Florida property tax">
          <h2>Florida property tax</h2>
          <p>
            Florida's system is different: just value, assessed value, and
            taxable value are three different figures, the Save Our Homes
            limitation and the non-homestead cap work differently from Texas's
            10% rule, and appeals go through a Value Adjustment Board after a
            TRIM notice. Start with{" "}
            <Link href="/florida-property-tax/">Florida property tax basics</Link>,
            the <Link href="/florida-property-tax/trim-notice/">TRIM notice</Link>,
            or <Link href="/florida-property-tax/save-our-homes/">Save Our Homes</Link>.
          </p>
        </section>

        <section aria-label="How the assessment checker works">
          <h2>How the assessment checker works</h2>
          <p>
            You enter the values from your notice of appraised value and your
            property's characteristics. The checker calculates the year-over-year
            change, screens for conditions that may warrant further review, and
            builds an evidence and preparation checklist. It runs in your browser
            and stores nothing.
          </p>
        </section>

        <section aria-label="What information it uses">
          <h2>What information it uses</h2>
          <p>
            Official sources only: the Texas Comptroller of Public Accounts, Texas
            statutes, and official appraisal district materials. Every important
            factual claim on this site links to its source with the date we
            verified it. See our <Link href="/methodology/">methodology</Link>.
          </p>
        </section>

        <section aria-label="What it can and cannot determine">
          <h2>What it can and cannot determine</h2>
          <p>
            It can help you understand your assessment, check it against
            verified public rules, and prepare evidence. It cannot determine your
            property's correct value, cannot predict whether a protest will
            succeed, and cannot promise savings. Comparisons it produces are
            informational, not legal conclusions.
          </p>
        </section>

        <section aria-label="Texas property tax basics">
          <h2>Texas property tax basics</h2>
          <p>
            How values are set as of January 1, what "market value" legally
            means, why appraised and taxable value differ, and who does what
            between the appraisal district, taxing units, and the ARB.
          </p>
          <ul>
            {TEXAS_TOPICS.map((t) => (
              <li key={t.href}>
                <Link href={t.href}>{t.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="The protest process, step by step">
          <h2>The protest process, step by step</h2>
          <p>
            From the notice of appraised value to the ARB's written order — and
            the appeal routes that exist if you disagree with it. The filing
            deadline is generally May 15 or 30 days after your notice was
            delivered, whichever is later.
          </p>
          <ul>
            {PROTEST_STEPS.map((t) => (
              <li key={t.href}>
                <Link href={t.href}>{t.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Harris County starting point">
          <h2>Harris County starting point</h2>
          <p>
            The Harris Central Appraisal District (HCAD) determines values for
            roughly 1.9 million parcels across more than 600 taxing units. Our{" "}
            <Link href="/texas/harris-county/">Harris County guide</Link> covers
            the local starting points — HCAD's role, filing a protest, official
            forms, and the local FAQ — and the{" "}
            <Link href="/texas/harris-county/property-tax-checker/">
              Harris County checker
            </Link>{" "}
            is the local edition of the tool.
          </p>
        </section>

        <section aria-label="Evidence and preparation">
          <h2>Evidence and preparation</h2>
          <p>
            Photographs, repair estimates, sales documentation, comparable
            properties, surveys, engineering reports — what official guidance
            says about each, and what each does not prove by itself.
          </p>
          <ul>
            {EVIDENCE_TOPICS.map((t) => (
              <li key={t.href}>
                <Link href={t.href}>{t.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Sources and methodology">
          <h2>Sources and methodology</h2>
          <p>
            Source hierarchy, comparable-property standards, calculation
            transparency, and how errors get corrected:{" "}
            <Link href="/methodology/">methodology</Link> ·{" "}
            <Link href="/editorial-policy/">editorial policy</Link> ·{" "}
            <Link href="/corrections/">corrections</Link>.
          </p>
        </section>

        <section aria-label="Disclaimer">
          <h2>Disclaimer</h2>
          <p>
            This site provides general educational information, not individualized
            legal, tax, appraisal, or financial advice. It is not affiliated with
            any appraisal district or government agency.{" "}
            <Link href="/disclaimer/">Read the full disclaimer</Link>.
          </p>
        </section>

        <section aria-label="About the site">
          <h2>About the site</h2>
          <p>
            Why this site exists, how information is reviewed, and what we do not
            do: <Link href="/about/">about</Link>.
          </p>
        </section>
      </div>
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "Understand Your Property Assessment — TX, FL, CA & AZ",
  description:
    "Understand your property assessment, compare the public evidence, and prepare for a property tax protest, assessment appeal or abatement claim with reliable, sourced information for Texas, Florida, California, Arizona and Nevada.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
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
  { href: "/texas-property-tax/faq/", label: "Texas property tax FAQ" },
  { href: "/faq/", label: "General property tax FAQ" },
  { href: "/resources/", label: "Official resources directory" },
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero" aria-label="Introduction">
        <div className="hero__content">
          <p className="hero__kicker">
            Texas · Florida · California · Arizona · Nevada · Oregon · Michigan
            property tax
          </p>
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
            Property owners in Texas, Florida, California, Arizona, Nevada,
            Oregon and Michigan — starting with Harris County — who want to understand their
            assessment before deciding anything. If you already know you want a
            professional to handle a protest, VAB petition, assessment appeal,
            abatement claim or board petition, this site will still help you
            understand what that process involves.
          </p>
        </section>

        <section aria-label="States covered">
          <h2>States covered</h2>
          <p>
            Seven states, each documented from its own statutes and official
            guidance — because a rule that is correct in one is usually wrong in
            the next:
          </p>
          <ul>
            <li>
              <Link href="/texas-property-tax/">Texas</Link> — appraisal
              districts, notice of appraised value, protests to the Appraisal
              Review Board, and the 10 percent homestead limitation.
            </li>
            <li>
              <Link href="/florida-property-tax/">Florida</Link> — property
              appraisers, TRIM notices, the Save Our Homes limitation, and value
              adjustment board petitions.
            </li>
            <li>
              <Link href="/california-property-tax/">California</Link> — base
              year values under Proposition 13, decline-in-value assessments
              under Proposition 8, and assessment appeals boards.
            </li>
            <li>
              <Link href="/arizona-property-tax/">Arizona</Link> — full cash
              value versus limited property value, notices of valuation, and
              petitions for review to the county assessor.
            </li>
            <li>
              <Link href="/nevada-property-tax/">Nevada</Link> — the July 1
              fiscal year, the 35% assessment ratio, and a partial abatement
              that caps the tax bill rather than the value.
            </li>
            <li>
              <Link href="/oregon-property-tax/">Oregon</Link> — Measure 50&rsquo;s
              maximum assessed value against real market value, the changed
              property ratio for new construction, and Measure 5 limits that can
              compress the bill.
            </li>
            <li>
              <Link href="/michigan-property-tax/">Michigan</Link> — taxable value
              under Proposal A, an inflation-or-5% limit built from a formula, and
              an uncapping that follows a transfer of ownership.
            </li>
          </ul>
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

        <section aria-label="California property tax">
          <h2>California property tax</h2>
          <p>
            California does not reassess most property to market value every
            year: it anchors each property to a base year value and adjusts that
            figure by the lower of the CPI change or 2%. That is why a lawful
            assessment can jump far more than 2% in one year, why two identical
            neighboring houses can carry very different values, and why the
            checker published here does not screen California properties. Start
            with{" "}
            <Link href="/california-property-tax/">California property tax basics</Link>,
            the{" "}
            <Link href="/california-property-tax/proposition-13-and-8/">
              Proposition 13 and Proposition 8 rules
            </Link>{" "}
            or the{" "}
            <Link href="/california-property-tax/deadlines/">California deadlines</Link>.
          </p>
        </section>

        <section aria-label="Arizona property tax">
          <h2>Arizona property tax</h2>
          <p>
            Arizona puts two values on the same property. The full cash value is
            the assessor&rsquo;s market estimate and is what you appeal; the
            limited property value is the figure the tax is levied on, set as the
            prior year&rsquo;s limited value plus 5% and never above the full cash
            value. That is also why a limited value can climb in a falling market
            — and why a reduction of the full cash value alone does not always
            change the bill. Start with{" "}
            <Link href="/arizona-property-tax/">Arizona property tax basics</Link>,
            the{" "}
            <Link href="/arizona-property-tax/full-cash-vs-limited-value/">
              full cash vs limited value rules
            </Link>{" "}
            or the{" "}
            <Link href="/arizona-property-tax/petition-for-review/">
              petition for review
            </Link>.
          </p>
        </section>

        <section aria-label="Nevada property tax">
          <h2>Nevada property tax</h2>
          <p>
            Nevada caps the <em>tax bill</em>, not a value: the amount you owe may
            not rise by more than 3% a year for a claimed primary residence, or a
            larger figure for other property, and the county takes the lower of
            that figure and the calculated tax. The 3% level is something you
            claim and can lose — most often when an ownership document is
            recorded against the property. That is also why a Nevada bill can
            rise while values fall. Start with{" "}
            <Link href="/nevada-property-tax/">Nevada property tax basics</Link>,
            the{" "}
            <Link href="/nevada-property-tax/tax-cap-abatement/">partial abatement</Link>{" "}
            or the{" "}
            <Link href="/nevada-property-tax/deadlines/">Nevada deadlines</Link>.
          </p>
        </section>

        <section aria-label="Oregon property tax">
          <h2>Oregon property tax</h2>
          <p>
            Oregon carries two limits from two ballot measures. Measure 50 gives
            every property a maximum assessed value that grows on its own
            schedule, and the tax base is the <em>lower</em> of that limit or the
            real market value — which is why a falling market does reach the bill
            even though the limit keeps rising. New construction enters at a
            fraction of its value through the county&rsquo;s changed property
            ratio, and Measure 5 caps the tax itself at $5 and $10 per $1,000 of
            real market value: when that calculation is lower, your property is
            compressed. Start with{" "}
            <Link href="/oregon-property-tax/">Oregon property tax basics</Link>,
            the{" "}
            <Link href="/oregon-property-tax/measure-50-mav/">maximum assessed value</Link>{" "}
            or the{" "}
            <Link href="/oregon-property-tax/deadlines/">Oregon deadlines</Link>.
          </p>
        </section>

        <section aria-label="Compare the states">
          <h2>Compare the states</h2>
          <p>
            &ldquo;2% cap&rdquo;, &ldquo;3% cap&rdquo;, &ldquo;10% cap&rdquo; —
            the same phrase means different things in different states. See what
            each state&rsquo;s limit actually measures in{" "}
            <Link href="/property-tax-by-state/">property tax by state</Link>.
          </p>
        </section>

        <section aria-label="How the assessment checker works">
          <h2>How the assessment checker works</h2>
          <p>
            You enter the values from your notice and your property's
            characteristics. The checker calculates the year-over-year change,
            compares it with the rule that applies to your property, screens for
            conditions that may warrant further review, and builds an evidence
            and preparation checklist. It runs in your browser and stores
            nothing.
          </p>
          <p>
            It is offered for <strong>Texas and Florida</strong> properties,
            where the question &ldquo;did this year&rsquo;s figure move more
            than the law allows?&rdquo; can be answered from the notice itself —
            in Texas on the appraised value, in Florida on the assessed value,
            because those are the figures each state&rsquo;s limitation attaches
            to. The California, Arizona, Nevada and Oregon pages explain why the
            same arithmetic would give a misleading answer there, and what to
            check instead.
          </p>
        </section>

        <section aria-label="What information it uses">
          <h2>What information it uses</h2>
          <p>
            Official sources only: state statutes and departments of revenue
            (including the Texas Comptroller, the Florida Legislature and
            Department of Revenue, the California State Board of Equalization
            and CDTFA, the Arizona Revised Statutes, State Board of Equalization
            and county assessors, the Nevada Department of Taxation and Nevada
            county assessors and treasurers, and Oregon&rsquo;s Secretary of
            State administrative rules and county assessors), plus official
            appraisal district and county assessor materials. Every important factual claim on this site links
            to its source with the date we verified it. See our{" "}
            <Link href="/methodology/">methodology</Link>.
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

        <section aria-label="The Texas protest process">
          <h2>The Texas protest process, step by step</h2>
          <p>
            From the notice of appraised value to the ARB's written order — and
            the appeal routes that exist if you disagree with it. The filing
            deadline is generally May 15 or 30 days after your notice was
            delivered, whichever is later. These pages are specific to Texas;
            for the equivalent steps in the other three states, follow the
            state pages above or the{" "}
            <Link href="/property-tax-by-state/">by-state comparison</Link>.
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

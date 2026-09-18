import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/evidence/",
  title: "Evidence for a Texas Property Tax Protest",
  description:
    "What evidence the Comptroller says may support a Texas property tax protest, how to organize it, and what each type of evidence does not prove.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas Protest",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { href: "/texas-property-tax/protest/", label: "Protest" },
        { label: "Evidence" },
      ]}
    >
      <h1>Evidence for a Protest</h1>

      <p>
        "You cannot go to the hearing and just say the appraisal district is
        wrong." That is the Comptroller's own framing: it is up to you to have
        what you need to prove your case. The full guide — including what each
        evidence category is, when it helps, and what it does not prove by
        itself — lives in our{" "}
        <Link href="/evidence/property-tax-protest-evidence/">
          property tax protest evidence guide
        </Link>
        . This page is the short version for the protest sequence.
      </p>

      <h2>The categories the state names</h2>
      <p>
        In its guidance on ARB hearings, the Comptroller lists the kinds of
        information owners should gather to establish value: property
        photographs (yours and comparables'), receipts or estimates for repairs,
        sales price documentation such as listings and closing statements,
        calculations of median level of appraisal (for unequal-appraisal
        protests), affidavits, newspaper articles, architectural drawings or
        blueprints, engineering reports, property surveys, and deed records.
        Each of these has its own page in the evidence guide, drawn from the
        same official sources.
      </p>

      <h2>Organizing evidence around your grounds</h2>
      <p>
        Match evidence to the ground you are protesting. A market-value protest
        leans on sales documentation and comparable properties. An
        unequal-appraisal protest leans on comparisons of appraised value
        against market indicators across comparable properties. A
        condition-based argument leans on photographs, repair estimates, and
        engineering or contractor documentation. Evidence that does not speak to
        the ground you selected mostly adds noise.
      </p>

      <h2>Exchange rules</h2>
      <p>
        Before or at the start of the hearing, each side must give the other a
        copy of the written material it intends to offer to the ARB, in the
        manner and form prescribed by Comptroller rule. Plan your packet so it
        can be shared and retained as the hearing record requires.
      </p>

      <h2>Build your packet</h2>
      <p>
        Our{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> produces a
        preparation checklist you can bring to an informal conference or
        hearing, organized by evidence category.
      </p>

      <h2>Worked example: sorting a packet for one ground (illustrative)</h2>
      <p>
        <em>
          Illustrative scenario — not advice on what your protest should
          claim, and not a prediction of any hearing outcome.
        </em>
      </p>
      <ol>
        <li>
          <strong>Scenario:</strong> you plan to protest on market value
          only. Your folder currently holds a closing statement from your own
          2019 purchase, three neighbor opinions, a contractor's roof
          estimate, and a comparable sale from last year at $455,000 against
          your $520,000 assessment.
        </li>
        <li>
          <strong>Step — filter by ground:</strong> the 2019 closing
          statement is six years old and speaks to what you paid, not what a
          buyer would pay now; the neighbor opinions are not sales
          documentation. Both go to the bottom of the folder.
        </li>
        <li>
          <strong>Step — keep what speaks to the ground:</strong> the recent
          comparable sale is your primary exhibit; the contractor's estimate
          stays because condition can affect what a buyer would pay, and you
          can present it as a secondary factor.
        </li>
        <li>
          <strong>Step — prepare for exchange:</strong> the material you
          intend to offer must be shared with the other side at or before the
          hearing, so make two identical packets and label every exhibit.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a smaller packet where every
        exhibit maps to your stated ground reads better than a large folder of
        loosely related documents — and matches the exchange rule you must
        follow anyway.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the comparable you
        chose survives the comparability test (see{" "}
        <Link href="/texas-property-tax/market-value/">market value</Link>),
        or how the ARB will weigh each exhibit.
      </p>

      <SourceList sourceIds={["tx-comptroller-appraisal-protests", "tx-tax-code-41-45"]} />
    </PageShell>
  );
}

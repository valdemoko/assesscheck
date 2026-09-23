import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/faq/",
  title: "Texas Property Tax FAQ",
  description:
    "Straight answers to common Texas property tax questions: protests, deadlines, evidence, ARB hearings, exemptions, and what an assessment can and cannot mean.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

const FAQS = [
  {
    q: "What is a property tax assessment?",
    a: (
      <>
        In Texas, the key document is the notice of appraised value, which the
        appraisal district sends when your value rises, when the property is new
        to the roll, when an exemption changed, or when your value exceeds your
        rendition. It states the district's determination of your property's
        value as of January 1.
      </>
    ),
  },
  {
    q: "Does a higher assessment automatically mean higher taxes?",
    a: (
      <>
        No. Your tax bill is the taxable value (appraised value minus
        exemptions) multiplied by each taxing unit's rate — and taxing units set
        their rates every year, sometimes lower when values rise. The appraisal
        district determines value; the taxing units determine rates. That is
        why the notice itself states that the appraisal district only
        determines value.
      </>
    ),
  },
  {
    q: "Can I protest my property value?",
    a: (
      <>
        Yes. Texas Tax Code § 41.41 entitles a property owner to protest before
        the ARB, including the determination of appraised value and unequal
        appraisal, and the law forbids charging a fee to file. See{" "}
        <Link href="/texas-property-tax/protest/how-it-works/">
          how the process works
        </Link>
        .
      </>
    ),
  },
  {
    q: "What is the protest deadline?",
    a: (
      <>
        Generally May 15, or 30 days after the appraisal district delivered
        your notice of appraised value — whichever is later. Details and edge
        cases (late filing, military and offshore exceptions) are on our{" "}
        <Link href="/texas-property-tax/protest/deadlines/">deadlines page</Link>.
      </>
    ),
  },
  {
    q: "What evidence can I use?",
    a: (
      <>
        The Comptroller's guidance lists property photographs, repair estimates
        or receipts, sales price documentation, comparable-property information,
        median-level-of-appraisal calculations (for unequal appraisal),
        affidavits, architectural drawings, engineering reports, surveys, and
        deed records. Each is explained in our{" "}
        <Link href="/evidence/property-tax-protest-evidence/">evidence guide</Link>.
      </>
    ),
  },
  {
    q: "How do comparable properties work?",
    a: (
      <>
        Texas law defines what makes a sale comparable: for residential
        property in counties over 150,000 population, the sale must have
        occurred within 36 months of the valuation date, and comparability
        turns on location, size, age, condition, access, amenities, and legal
        restrictions — not just proximity. See our{" "}
        <Link href="/methodology/">comparable methodology</Link>.
      </>
    ),
  },
  {
    q: "What happens at an ARB hearing?",
    a: (
      <>
        A panel hears both sides: you and the appraisal district's
        representative each present evidence and may state an opinion of value.
        You can appear in person, remotely, or by affidavit. The panel does not
        rule on the spot; the ARB issues a written order afterward. Details:{" "}
        <Link href="/texas-property-tax/protest/arb-hearing/">the ARB hearing</Link>.
      </>
    ),
  },
  {
    q: "What happens after the protest?",
    a: (
      <>
        The ARB's written order states the final value for the tax year. If the
        value changed, the taxing units are notified and your bills reflect it,
        with refunds if you already paid. If you disagree with the order, appeal
        routes exist on a 60-day (or shorter) clock:{" "}
        <Link href="/texas-property-tax/protest/appeal-options/">appeal options</Link>.
      </>
    ),
  },
  {
    q: "Can I represent myself, or do I need an agent?",
    a: (
      <>
        You can represent yourself. If you want representation, you appoint an
        agent with Form 50-162. Owners and lessees may appoint someone to
        handle hearings concerning their property.
      </>
    ),
  },
  {
    q: "What if I miss the protest deadline?",
    a: (
      <>
        The ARB can hear a late protest if you show good cause before it
        approves the appraisal records; offshore workers and deployed military
        members have specific statutory exceptions. If those windows close,
        narrow correction remedies (clerical errors, gross over-appraisal
        motions) may still exist:{" "}
        <Link href="/texas-property-tax/protest/after-the-hearing/">late remedies</Link>.
      </>
    ),
  },
  {
    q: "What if the property record contains an error — wrong square footage, wrong features?",
    a: (
      <>
        Characteristic errors are exactly what the review process is for. Raise
        them at an informal conference with documentation, and include them as
        grounds in your protest. A correction to the record can affect the
        value without a formal value argument.
      </>
    ),
  },
  {
    q: "Can I protest an exemption denial?",
    a: (
      <>
        Yes — Tax Code § 41.41 includes denial, in whole or in part, of a
        partial exemption among the protestable actions. Exemption
        qualifications are described on our{" "}
        <Link href="/texas-property-tax/exemptions/">exemptions page</Link>.
      </>
    ),
  },
  {
    q: "What should I bring to a hearing?",
    a: (
      <>
        Your evidence packet (photographs, estimates, sales documentation,
        comparable data), copies in the form your ARB's procedures require, and
        your own notes on your two or three strongest points. The{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> produces a
        checklist you can work from.
      </>
    ),
  },
];

export default function TexasFAQPage() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "FAQ" },
      ]}
    >
      <h1>Texas Property Tax FAQ</h1>
      <p>
        These answers apply to <strong>Texas</strong> only. Texas procedures,
        terminology and deadlines are not interchangeable with other states, so
        every question below is scoped to Texas law and Texas institutions. For
        questions that work the same way in every state we cover, see the{" "}
        <Link href="/faq/">general property tax FAQ</Link>; for how Texas
        compares with Florida, California, Arizona, Nevada and Oregon, see{" "}
        <Link href="/property-tax-by-state/">property tax by state</Link>.
      </p>
      {FAQS.map((f, i) => (
        <section key={i}>
          <h2>{f.q}</h2>
          <p>{f.a}</p>
        </section>
      ))}
      <SourceList sourceIds={["tx-comptroller-appraisal-protests"]} />
    </PageShell>
  );
}

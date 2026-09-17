import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/how-it-works/",
  title: "How the Texas Property Tax Protest Works",
  description:
    "The sequence of a Texas property tax protest: notice, filing, informal conference, ARB hearing, written order, and what each step requires of you.",
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
        { label: "How It Works" },
      ]}
    >
      <h1>How the Protest Process Works</h1>

      <h2>Step 1. The notice of appraised value arrives</h2>
      <p>
        The process begins when the appraisal district sends its notice of
        appraised value — by April 1 for most homesteads, May 1 for other
        property, or as soon as practicable thereafter. The notice states the
        current and prior values and explains how to protest. Read it against
        your own records: are the property's characteristics right? Does the
        change from last year make sense? Our{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> organizes
        that review.
      </p>

      <h2>Step 2. You file a notice of protest</h2>
      <p>
        To be heard, you must file a written notice of protest with the ARB
        within the deadline — generally May 15 or 30 days after the notice was
        delivered, whichever is later. The filing can be as simple as a letter
        identifying you, the property, and what you disagree with; the official
        form is not required. See{" "}
        <Link href="/texas-property-tax/protest/how-to-file/">how to file</Link>.
      </p>

      <h2>Step 3. The informal conference (optional but common)</h2>
      <p>
        After filing, you may request an informal conference with the appraisal
        district to try to resolve the protest before the formal ARB hearing.
        Many protests end here, by agreement. See{" "}
        <Link href="/texas-property-tax/protest/informal-conference/">
          the informal conference
        </Link>.
      </p>

      <h2>Step 4. The ARB schedules your hearing</h2>
      <p>
        If the protest is not resolved informally, the ARB must send you notice
        of the hearing date, time, place, and subject matter at least 15 days
        in advance, along with information on accessing your property's
        estimated taxes. At least 14 days before the hearing, the appraisal
        district must send you the Comptroller's Taxpayer Assistance Pamphlet,
        the ARB's adopted hearing procedures, and information on requesting the
        evidence the district will introduce.
      </p>

      <h2>Step 5. The hearing</h2>
      <p>
        At the formal hearing, the ARB panel listens to both sides. You may
        appear in person, by telephone or videoconference, or by written
        affidavit. You and the district each present evidence and argument, and
        each may state an opinion of value. See{" "}
        <Link href="/texas-property-tax/protest/arb-hearing/">the ARB
        hearing</Link>.
      </p>

      <h2>Step 6. The written order</h2>
      <p>
        The ARB determines the protest by written order, delivered electronically
        (if you elected electronic delivery) or by certified mail. The order
        states the ARB's determination, including the appraised value it found.
        Once the ARB rules, its decision is binding for that tax year — but
        appeal options exist, described on our{" "}
        <Link href="/texas-property-tax/protest/appeal-options/">
          appeal options
        </Link>{" "}
        page.
      </p>

      <h2>Step 7. Afterward</h2>
      <p>
        If the ARB changes your value, the chief appraiser notifies the taxing
        units, and your tax bills reflect the corrected value. Refunds apply if
        you already paid. See{" "}
        <Link href="/texas-property-tax/protest/after-the-hearing/">
          after the hearing
        </Link>.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-appraisal-protests",
          "tx-tax-code-25-19",
          "tx-tax-code-41-44",
          "tx-tax-code-41-47",
        ]}
      />
    </PageShell>
  );
}

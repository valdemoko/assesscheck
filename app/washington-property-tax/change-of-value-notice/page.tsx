import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/washington-property-tax/change-of-value-notice/",
  title: "The Washington Change-of-Value Notice Explained",
  description:
    "What the Washington change-of-value notice is, when the county assessor mails it, and why the 30-day window it opens matters even after July 1 has passed.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Washington",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/washington-property-tax/", label: "Washington Property Tax" },
        { label: "Change-of-Value Notice" },
      ]}
    >
      <h1>The Washington Change-of-Value Notice Explained</h1>

      <p>
        Washington assesses every parcel at <strong>100% of market value
        each January 1</strong>, but owners do not get a value notice every
        year — only when the value <em>changes</em>. Then the county assessor
        mails a <strong>change-of-value notice</strong>, and that notice is
        what opens the 30-day alternative to the July 1 appeal deadline.
      </p>

      <h2>When one arrives — and when it does not</h2>
      <ul>
        <li>
          <strong>A value change triggers it:</strong> a reassessment on the
          county&rsquo;s rotating cycle, new construction, a removed
          exemption, or a correction all produce a change — and a notice.
        </li>
        <li>
          <strong>No change, no notice:</strong> if your assessed value is
          unchanged from last year, you generally receive no separate value
          notice. This is why Washington&rsquo;s appeal deadline has the
          &ldquo;whichever is later&rdquo; structure — it has to work for
          owners who never see a notice at all.
        </li>
        <li>
          <strong>The notice is not a bill.</strong> Taxes are billed later,
          by the county treasurer, after the levies are set. The notice
          states the new value; what it will do to your bill depends on the{" "}
          <Link href="/washington-property-tax/levy-limit/">
            levy limit
          </Link>{" "}
          arithmetic that year.
        </li>
      </ul>

      <h2>The deadline it creates</h2>
      <p>
        A petition to the county Board of Equalization must be filed or
        postmarked by <strong>July 1 of the assessment year OR within 30
        days of the date the change-of-value notice was mailed — whichever
        is LATER</strong>. The Department&rsquo;s own petition form (REV
        64-0075) states the rule on its face. County legislative authorities
        may extend the 30-day window (up to 60 days), and King County uses a
        different schedule.
      </p>
      <p>
        <strong>What this tells you:</strong> the two-part deadline protects
        two different situations. If your notice arrived in February, July 1
        is probably later — you have months. If it arrived in June, the
        30-day window runs into July and is the one that counts. Owners who
        assume a single fixed date miss appeals in both directions.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the mailing date of
        <em>your</em> notice controls the 30-day count — check the date on
        the notice itself, not the postmark on the envelope, and confirm any
        county extension with your county&rsquo;s BOE clerk before counting
        on it.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates — your own deadline runs from your notice.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> the assessor mails a change-of-value
          notice on June 5, 2026, showing the assessment rising from
          $520,000 to $610,000 after a revaluation.
        </li>
        <li>
          <strong>Step — the two dates:</strong> July 1, 2026 is 26 days
          after the notice; the 30-day window runs to July 5, 2026.
        </li>
        <li>
          <strong>Step — the later one:</strong> July 5 controls. An owner
          who filed by July 1 made it; an owner who assumed July 1 was the
          last day and filed July 3 also made it — but one who assumed the
          30-day window from a February notice and filed July 3 against a
          notice mailed in February did not.
        </li>
      </ol>

      <h2>What to do after reading it</h2>
      <ul>
        <li>
          Questions about the value: contact the county assessor first — the
          notice lists the contact, and a conversation resolves many
          disputes without a petition.
        </li>
        <li>
          If the value is wrong and time remains: file the petition with the
          BOE — see the{" "}
          <Link href="/washington-property-tax/boe-appeal/">
            appeal process
          </Link>
          .
        </li>
      </ul>

      <SourceList sourceIds={["wa-dor-petition-boe", "wa-dor-levy-limit"]} />
    </PageShell>
  );
}

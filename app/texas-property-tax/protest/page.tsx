import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/",
  title: "The Texas Property Tax Protest Process",
  description:
    "How a Texas property tax protest works from start to finish: grounds, filing, deadlines, the informal conference, the ARB hearing, and what happens after.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

const PAGES = [
  { href: "/texas-property-tax/protest/how-it-works/", label: "How the protest process works" },
  { href: "/texas-property-tax/protest/deadlines/", label: "Protest deadlines" },
  { href: "/texas-property-tax/protest/how-to-file/", label: "How to file a protest" },
  { href: "/texas-property-tax/protest/informal-conference/", label: "The informal conference" },
  { href: "/texas-property-tax/protest/arb-hearing/", label: "The ARB hearing" },
  { href: "/texas-property-tax/protest/evidence/", label: "Evidence for a protest" },
  { href: "/texas-property-tax/protest/after-the-hearing/", label: "After the hearing" },
  { href: "/texas-property-tax/protest/appeal-options/", label: "Appeal options" },
];

export default function ProtestHubPage() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Protest" },
      ]}
    >
      <h1>The Texas Property Tax Protest Process</h1>
      <p>
        One of a Texas property owner's most important rights is the right to
        protest to the appraisal review board (ARB). You may protest if you
        disagree with the appraisal district's value or any of its actions
        concerning your property.
      </p>

      <h2>The process at a glance</h2>
      <ol>
        <li>
          <strong>Your notice arrives.</strong> The appraisal district sends a
          notice of appraised value when your value rises (by April 1 for most
          homesteads, May 1 otherwise). Read the value and the property
          description on it — both are protestable.
        </li>
        <li>
          <strong>Decide whether to protest.</strong> Compare the value with
          your own knowledge of the property and genuinely similar properties.
          The <Link href="/property-tax-checker/">assessment checker</Link>{" "}
          organizes this first pass.
        </li>
        <li>
          <strong>File on time.</strong> Generally May 15 or 30 days after the
          notice was delivered — whichever is later (see{" "}
          <Link href="/texas-property-tax/protest/deadlines/">deadlines</Link>,{" "}
          <Link href="/texas-property-tax/protest/how-to-file/">how to
          file</Link>).
        </li>
        <li>
          <strong>Prepare your evidence.</strong> Photographs, estimates, sales
          documents, comparable data — whatever supports your specific case
          (<Link href="/evidence/">evidence section</Link>).
        </li>
        <li>
          <strong>Informal conference, then hearing.</strong> Many protests
          settle informally with the appraisal district; otherwise an ARB
          panel hears both sides and issues a written order later ({" "}
          <Link href="/texas-property-tax/protest/arb-hearing/">the
          hearing</Link>).
        </li>
        <li>
          <strong>After the order.</strong> The order sets the value for the
          year; appeal routes exist if you disagree with it ({" "}
          <Link href="/texas-property-tax/protest/after-the-hearing/">after
          the hearing</Link>,{" "}
          <Link href="/texas-property-tax/protest/appeal-options/">appeal
          options</Link>).
        </li>
      </ol>

      <h2>The section in detail</h2>
      <ul>
        {PAGES.map((p) => (
          <li key={p.href}>
            <Link href={p.href}>{p.label}</Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

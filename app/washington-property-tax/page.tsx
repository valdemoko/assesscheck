import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/washington-property-tax/",
  title: "Washington Property Tax",
  description:
    "How Washington property tax works: 100% of market value assessed annually, a levy limit that caps the dollars collected rather than the value, the July 1 / 30-day Board of Equalization deadline, and the State Board of Tax Appeals.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Washington",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Washington Property Tax" }]}
    >
      <h1>Washington Property Tax</h1>

      <p>
        Washington assesses every parcel at <strong>100% of market value</strong>,
        but the state&rsquo;s signature limit does not touch the value at all:
        it caps the <strong>levy</strong> — the dollars each taxing district
        collects — at a growth rate of roughly <strong>1% per year</strong>.
        The appeal deadline is likewise distinctive: the later of{" "}
        <strong>July 1 of the assessment year or 30 days after the
        change-of-value notice</strong>, filed with a county{" "}
        <strong>Board of Equalization</strong>, with appeals going up to the
        state <strong>Board of Tax Appeals</strong>.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/washington-property-tax/levy-limit/">
            The levy limit: 101% of the highest lawful levy
          </Link>{" "}
          — why the limit is on the dollars a district collects, not on your
          value, and what a levy lid lift does.
        </li>
        <li>
          <Link href="/washington-property-tax/change-of-value-notice/">
            The change-of-value notice explained
          </Link>{" "}
          — the notice that starts the 30-day window, and why it matters even
          when July 1 has passed.
        </li>
        <li>
          <Link href="/washington-property-tax/boe-appeal/">
            Appealing to the Board of Equalization and the BTA
          </Link>{" "}
          — the two-step ladder, the petition form, and the no-extension rule
          at the state level.
        </li>
        <li>
          <Link href="/washington-property-tax/deadlines/">
            Washington property tax deadlines
          </Link>{" "}
          — the July 1 / 30-day rule, the BTA window, and the levy calendar.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The county assessor</strong> determines the assessed value
          each January 1 and mails a <strong>change-of-value notice</strong>{" "}
          whenever a parcel&rsquo;s value changes.
        </li>
        <li>
          <strong>The county Board of Equalization (BOE)</strong> is the first
          appeal level — a county body that hears value petitions on the
          Department of Revenue&rsquo;s own petition form.
        </li>
        <li>
          <strong>The Washington State Board of Tax Appeals (WSBTA)</strong> is
          the second level, hearing BOE appeals within 30 days of the decision.
        </li>
        <li>
          <strong>Taxing districts</strong> set their levies within the state
          levy limit; <strong>the Department of Revenue</strong> oversees the
          levy system and publishes the forms and manuals.
        </li>
      </ul>

      <h2>The limit is on the levy, not the value</h2>
      <p>
        Each taxing district&rsquo;s levy may grow to at most{" "}
        <strong>101% of its highest lawful levy since 1985</strong> — smaller
        districts (under 10,000 population) adopt an annual resolution to take
        the 1%; larger ones use 100% plus the Implicit Price Deflator or 101%,
        <strong> whichever is less</strong>, unless a supermajority adopts a
        substantial-need resolution. Voters can approve a{" "}
        <strong>levy lid lift</strong> to exceed the limit, and a
        constitutional 1% aggregate limit sits on top as the outer bound. The{" "}
        <Link href="/washington-property-tax/levy-limit/">
          levy limit page
        </Link>{" "}
        works through what this means for an individual bill.
      </p>

      <h2>Finding your property</h2>
      <p>
        Washington&rsquo;s property searches are county-run — each of the 39
        county assessors maintains its own records, and there is no statewide
        search. Your county assessor&rsquo;s site is also where the
        change-of-value notice and BOE contact information originate; the
        Department of Revenue&rsquo;s property tax pages link each county.
      </p>

      <h2>What this does not cover</h2>
      <p>
        County-specific BOE procedures (King County runs its own schedule),
        senior and disabled-person exemption programs, and district-by-district
        levy details are not covered here. AssessCheck has no data connection
        to any Washington county or the Department of Revenue.
      </p>

      <SourceList
        sourceIds={[
          "wa-dor-levy-limit",
          "wa-bta-how-to-file",
          "wa-dor-petition-boe",
        ]}
      />
    </PageShell>
  );
}

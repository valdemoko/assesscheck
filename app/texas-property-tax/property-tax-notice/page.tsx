import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/property-tax-notice/",
  title: "Your Texas Property Tax Notice (Notice of Appraised Value)",
  description:
    "When the appraisal district must send a notice of appraised value, what it must contain, and why not receiving one does not stop the clock.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { label: "Property Tax Notice" },
      ]}
    >
      <h1>Your Notice of Appraised Value</h1>

      <h2>When you receive one</h2>
      <p>
        The chief appraiser must send a written notice of appraised value by
        April 1 (or as soon as practicable) if the property is a single-family
        residence qualifying for the homestead exemption, and by May 1 (or as
        soon as practicable) for other property. A notice is required when:
      </p>
      <ul>
        <li>the appraised value is greater than the preceding year's;</li>
        <li>
          the appraised value is greater than the value the owner rendered;
        </li>
        <li>the property was not on the appraisal roll the preceding year; or</li>
        <li>
          an exemption approved for the preceding year was canceled or reduced.
        </li>
      </ul>
      <p>
        The district's board of directors may dispense with a notice for an
        increase of $1,000 or less. Owners of real property that was
        reappraised, changed ownership, or requested one can receive a notice
        under a separate provision even when no increase occurred.
      </p>

      <h2>What the notice must contain</h2>
      <p>
        For real property, the notice must include, among other items: the
        taxing units in which the property is taxable; the preceding year's
        appraised and taxable values; the current year's appraised value and
        exemptions; whether the property qualifies for the circuit-breaker
        limitation; the market value of land and of improvements listed
        separately; the five-year percentage change in appraised value; a
        detailed explanation of how and when to protest; the date and place the
        ARB will begin hearing protests; an explanation of the informal
        conference option; and a notice of the estimated taxes and the
        no-new-revenue and voter-approval tax rates used to calculate them.
      </p>

      <h2>Worked example: reading your notice (illustrative)</h2>
      <p>
        <em>
          Illustrative notice with made-up figures — compare the same lines on
          YOUR notice, which controls.
        </em>
      </p>
      <ol>
        <li>
          <strong>Prior year:</strong> appraised $300,000 / taxable $160,000.
        </li>
        <li>
          <strong>This year:</strong> appraised <strong>$345,000</strong>,
          exemptions listed at $100,000 → taxable $245,000.
        </li>
        <li>
          <strong>Step — change in appraised:</strong> $345,000 vs $300,000 =
          +15%. If this is your homestead and the cap applied, only part of
          that jump could carry into taxable value — check both lines.
        </li>
        <li>
          <strong>Step — change in taxable:</strong> $245,000 vs $160,000 =
          +53% — larger than the appraised change, which usually means an
          exemption shrank or fell off (the notice lists kind and amount).
          That is often worth checking before arguing value at all.
        </li>
        <li>
          <strong>Step — the 5-year change line:</strong> a large five-year
          percentage is context, not by itself evidence of an error.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> read appraised and taxable
        changes <em>separately</em> — they answer different questions
        ("is my value right?" vs "is my exemption right?").
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the appraised
        value is defensible — that takes comparable evidence — or what your
        final bill will be, which depends on rates set later by your taxing
        units.
      </p>

      <h2>The deadline is tied to the notice</h2>
      <p>
        The protest deadline is generally May 15 or 30 days after the notice
        was <em>delivered</em> to you, whichever is later. Read our{" "}
        <Link href="/texas-property-tax/protest/deadlines/">
          protest deadlines
        </Link>{" "}
        page before relying on any date.
      </p>

      <h2>If you did not receive a notice</h2>
      <p>
        State law is blunt on this point: failure to receive a required notice
        does not affect the validity of the appraisal, the tax, or the tax lien,
        and it does not change the exemption application deadline. There is a
        separate statutory remedy: a property owner may protest the failure to
        provide or deliver a required notice, which our{" "}
        <Link href="/texas-property-tax/protest/after-the-hearing/">
          late-protest discussion
        </Link>{" "}
        covers.
      </p>

      <SourceList
        sourceIds={[
          "tx-tax-code-25-19",
          "tx-comptroller-valuing-property",
          "tx-tax-code-41-44",
        ]}
      />
    </PageShell>
  );
}

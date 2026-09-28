import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/maryland-property-tax/notice-of-assessment/",
  title: "The Maryland Notice of Assessment Explained",
  description:
    "What the Maryland Notice of Assessment contains, when it arrives, the date of finality it creates, and what you can and cannot conclude from reading it.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Maryland",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/maryland-property-tax/", label: "Maryland Property Tax" },
        { label: "Notice of Assessment" },
      ]}
    >
      <h1>The Maryland Notice of Assessment Explained</h1>

      <p>
        In a reassessment year, SDAT mails every property owner in the region
        under review a <strong>Notice of Assessment</strong> — typically in{" "}
        <strong>late December</strong>. The notice is the document that starts
        the 45-day appeal clock, and it is also the single most misread
        document in the Maryland system, because it shows{" "}
        <strong>two different values</strong> that mean two different things.
      </p>

      <h2>What is on it</h2>
      <ul>
        <li>
          <strong>The old value and the new value, side by side.</strong> The
          notice discloses both the current (phased-in) assessment and the
          value SDAT found at the review. This pairing is Maryland&rsquo;s
          signature: no other state&rsquo;s notice shows the phase-in
          arithmetic on its face.
        </li>
        <li>
          <strong>The phase-in schedule.</strong> If the new value is higher,
          the amount that will be added to your taxable assessment each year
          for the next three years follows from it — one-third of the increase
          per year.
        </li>
        <li>
          <strong>The date of finality.</strong> The notice establishes{" "}
          <strong>January 1</strong> as the date of finality for the coming
          taxable year — the moment the new value becomes legally fixed unless
          you appeal. Your 45 days to file with the Supervisor of Assessments
          run from the notice&rsquo;s date, and the value is locked when the
          finality date passes without an appeal.
        </li>
        <li>
          <strong>Your appeal rights.</strong> The notice states the 45-day
          window and how to file — including SDAT&rsquo;s online appeal form.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative reading with made-up numbers — not a valuation and not
          your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs from the notice:</strong> old assessment $240,000
          (fully phased in); new value $280,000 — a $40,000 increase; notice
          dated December 26, 2026.
        </li>
        <li>
          <strong>Step — the phase-in:</strong> one-third of $40,000 is about
          $13,333, so the taxable assessment becomes roughly $253,333 in the
          first year, $266,667 in the second, $280,000 in the third.
        </li>
        <li>
          <strong>Step — the cap:</strong> if you have the homestead credit,
          the 10% limit on last year&rsquo;s taxable assessment ($240,000 ×
          1.10 = $264,000) does not bind in year one or two — the phase-in is
          already holding the increase below 10% per year. The two mechanisms
          are complementary, not duplicative.
        </li>
        <li>
          <strong>Step — the clock:</strong> an appeal must be filed with the
          Supervisor within 45 days of December 26 — around February 9, 2027.
          The value is final for the year on January 1 only if no appeal is
          filed.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the number to compare with your
        current bill is the <em>first-year phased-in</em> assessment, not the
        new value. And the appeal deadline is anchored to the{" "}
        <em>notice date</em>, not to January 1 — so a notice that arrives
        late still holds you to 45 days from its own date.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your tax rate (your county
        sets that later), what your bill will be (the phase-in and the cap
        both apply between the value and the bill), or whether the new value
        is right — that is a market-evidence question, the same kind of
        question an appeal answers.
      </p>

      <h2>Years without a notice</h2>
      <p>
        Two years out of every three, no notice arrives for your property. That
        does not reset anything: the value from your last notice continues
        (through its phase-in), and the{" "}
        <strong>petition for review</strong> is the standing mechanism for
        challenging it in an off-year. See the{" "}
        <Link href="/maryland-property-tax/triennial-cycle/">
          triennial cycle
        </Link>{" "}
        for how the regions rotate.
      </p>

      <h2>What to do after reading it</h2>
      <ul>
        <li>
          Questions about the value or the property data: contact the
          Supervisor of Assessments for your county — informal resolution is
          part of the process, and the supervisor&rsquo;s office holds the
          first hearing anyway.
        </li>
        <li>
          If that does not resolve it and you are within 45 days of the notice
          date: file the appeal —{" "}
          <Link href="/maryland-property-tax/appeal-ladder/">
            the ladder and its deadlines are here
          </Link>
          .
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "md-archives-sdat-functions",
          "md-tax-court-procedures",
          "md-sdat-appeal-form",
          "md-mgaleg-hb1088",
        ]}
      />
    </PageShell>
  );
}

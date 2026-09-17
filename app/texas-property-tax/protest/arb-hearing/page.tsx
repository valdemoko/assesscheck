import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/arb-hearing/",
  title: "The Texas ARB Hearing: What to Expect",
  description:
    "AR hearing notice requirements, appearance options (in person, video, affidavit), how evidence is exchanged, and how the panel reaches its decision.",
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
        { label: "ARB Hearing" },
      ]}
    >
      <h1>The ARB Hearing</h1>

      <h2>Before the hearing</h2>
      <p>
        The ARB must send you notice of the hearing date, time, place, and
        subject matter at least 15 days in advance, with information on how to
        access your property's estimated taxes. At least 14 days before the
        hearing, the appraisal district must send you the Comptroller's
        Taxpayer Assistance Pamphlet, the ARB's adopted hearing procedures, and
        a statement that you can request copies of the information the
        district will use at the hearing. Request that information — you are
        entitled to the data, schedules, formulas, and other information the
        chief appraiser will introduce, at no charge.
      </p>

      <h2>How you can appear</h2>
      <ul>
        <li>
          <strong>In person.</strong> The traditional format, before a panel of
          ARB members.
        </li>
        <li>
          <strong>By telephone or videoconference.</strong> You must notify the
          ARB in your protest or at least 10 days before the hearing. If you
          appear remotely, evidence must be offered by affidavit.
        </li>
        <li>
          <strong>By written affidavit.</strong> You may offer evidence and
          argument by sworn affidavit without appearing, using the Comptroller's
          affidavit form or your own. If you submit an affidavit and do not
          state an intent to appear, the ARB may treat the affidavit as your
          entire presentation.
        </li>
      </ul>
      <p>
        You may also request (in the protest or 10 days ahead) that a
        single-member panel hear your protest, and, for qualifying properties in
        large counties, a special panel.
      </p>

      <h2>What happens at the hearing</h2>
      <p>
        ARBs try to conduct hearings informally, but they deserve the respect of
        a court proceeding: be on time, be prepared, and address the panel. You
        and the appraisal district's representative each present evidence,
        examine witnesses, and may state an opinion of the property's value. You
        generally choose whether to present first. Before or at the start of the
        hearing, each side must give the other a copy of the written material it
        intends to offer.
      </p>
      <p>
        A hearing has two parts: evidence and argument. Present your evidence
        clearly and concisely, and keep the argument on the property and the
        market — not on your personal financial situation, which the ARB cannot
        consider. Emotional arguments and baseless claims carry no weight; the
        ARB's job is to determine the property's value based on the market.
      </p>

      <h2>The decision</h2>
      <p>
        The panel does not announce the final decision at the table; the ARB
        determines the protest by written order delivered afterward, within
        statutory deadlines (30 days after the hearing concludes in most
        counties; 45 in counties of four million or more). See{" "}
        <Link href="/texas-property-tax/protest/after-the-hearing/">
          after the hearing
        </Link>.
      </p>

      <h2>Worked example: structuring a five-minute presentation (illustrative)</h2>
      <p>
        <em>
          Illustrative scenario with made-up numbers — not a real property and
          not a suggestion about what any ARB will decide.
        </em>
      </p>
      <ol>
        <li>
          <strong>Your position:</strong> notice says $410,000; you will state
          an opinion of value of $380,000 — pick one number and be able to
          say it plainly.
        </li>
        <li>
          <strong>Evidence item 1 (record error):</strong> district records
          show 2,400 sq ft; your survey shows 2,150. Point: the model
          overstates size by ~11%.
        </li>
        <li>
          <strong>Evidence item 2 (comparable sales):</strong> two genuinely
          similar sales (same subdivision, similar age and size, within the
          statutory window) at $365,000 and $372,000.
        </li>
        <li>
          <strong>Evidence item 3 (condition):</strong> dated photos plus a
          repair estimate for a documented foundation issue.
        </li>
        <li>
          <strong>Argument:</strong> one sentence per item, ending with your
          stated value: "Between the size correction, the two sales, and the
          documented condition, I believe the market value is $380,000."
        </li>
      </ol>
      <p>
        <strong>What this illustrates:</strong> each item maps to a specific
        legal factor (characteristics, comparability, condition) and ends at a
        concrete number — the structure is the point, not the numbers.
      </p>
      <p>
        <strong>What it does not show:</strong> how the district will respond,
        what value the panel will settle on, or that your evidence will be
        admitted in the form you bring — follow your ARB's procedures.
      </p>

      <h2>If you cannot attend</h2>
      <p>
        A property owner (without an agent) is entitled to one postponement
        without showing cause if requested before the hearing date; postponements
        for good cause are also available. If you or your agent misses the
        hearing, a written request showing good cause filed within four days can
        earn a new hearing.
      </p>

      <SourceList
        sourceIds={[
          "tx-comptroller-appraisal-protests",
          "tx-comptroller-arb",
          "tx-tax-code-41-45",
          "tx-tax-code-41-461",
        ]}
      />
    </PageShell>
  );
}

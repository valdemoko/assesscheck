import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { DEADLINES } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/texas-property-tax/protest/deadlines/",
  title: "Texas Property Tax Protest Deadlines",
  description:
    "The Texas protest deadline is May 15 or 30 days after the notice of appraised value was delivered, whichever is later — plus late-protest options, correction motions, and the other dates that matter.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Texas Protest",
});

export default function Page() {
  const ids = new Set<string>();
  DEADLINES.forEach((d) => d.sources.forEach((s) => ids.add(s.sourceId)));

  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/texas-property-tax/", label: "Texas Property Tax" },
        { href: "/texas-property-tax/protest/", label: "Protest" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Protest Deadlines</h1>

      <p>
        Deadlines in this section are stated as rules, with the source and the
        date we verified it. Deadlines are the highest-risk information on this
        site: verify the current rule with the appraisal district before you
        rely on it.
      </p>

      <h2>The protest filing deadline</h2>
      <p>
        In most cases, you have until <strong>May 15, or 30 days after the
        date the appraisal district delivered the notice of appraised value to
        you, whichever is later</strong>. Two details commonly trip people up:
      </p>
      <ul>
        <li>
          <strong>"Whichever is later" matters.</strong> If your notice was
          delivered in mid-April, 30 days after delivery can fall after May 15
          — the later date controls.
        </li>
        <li>
          <strong>The 30 days run from delivery.</strong> The Comptroller
          cautions that the deadline runs from the date the appraisal district
          mails the notice, not from when you actually receive or open it.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative dates only — count from the delivery date printed on or
          with YOUR notice, and verify the resulting date with your appraisal
          district before relying on it.
        </em>
      </p>
      <ol>
        <li>
          <strong>Input:</strong> your notice of appraised value was delivered
          on <strong>April 20</strong> (illustrative date).
        </li>
        <li>
          <strong>Step — count 30 days:</strong> 30 days after April 20 is
          May 20.
        </li>
        <li>
          <strong>Step — compare with May 15:</strong> May 20 is later than
          May 15, so <strong>your deadline is May 20</strong> — the later date
          controls.
        </li>
        <li>
          <strong>Contrast:</strong> if the notice had been delivered April 1,
          30 days later is May 1, which is <em>earlier</em> than May 15 — so
          the May 15 rule would control instead.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> owners of late-arriving notices
        usually get more time than May 15 — but the count starts at the
        district's delivery/mailing date, not when you opened the envelope.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your actual delivery date
        (check your notice and any district correspondence), exceptions that
        might extend the deadline, or a safe "last day to act." File early.
      </p>

      <h2>What if I missed the Texas property tax protest deadline?</h2>
      <p>
        Missing the May 15 / 30-day deadline does not always end the matter,
        but the options that remain are specific and none of them is a general
        "late protest." These are the pathways the Comptroller documents:
      </p>
      <ul>
        <li>
          <strong>Good-cause late protest (§ 41.44(b)).</strong> The ARB can
          grant a hearing to owners who filed late if they show good cause for
          missing the deadline — and only before the ARB approves the appraisal
          records. Missing the good-cause window, or filing after approval,
          can forfeit the right to protest for that year. Offshore workers and
          full-time military members serving outside the United States have
          their own statutory exceptions (§§ 41.44(c-1), (c-2)), in each case
          before the taxes become delinquent and with evidence.
        </li>
        <li>
          <strong>You did not receive a required notice (§ 41.411).</strong> If
          the appraisal district or ARB failed to send you a notice it was
          required to send — for example a notice of appraised value — you may
          protest that failure. You must file before the delinquency date and
          must not let your property taxes become delinquent.
        </li>
        <li>
          <strong>Motion to correct a substantially over-appraised property
          (§ 25.25(c), (c-1)).</strong> If a residence homestead was appraised
          at least one-fourth higher (or a non-homestead property at least
          one-third higher) than its correct appraised value, you may file a
          motion for correction. The motion — and payment of taxes on the
          undisputed portion of the value — must reach the ARB before the
          delinquency date. Important limit: the appraisal roll cannot be
          corrected for a tax year in which the property was already subject
          to a property value protest.
        </li>
        <li>
          <strong>Motion to correct a clerical error, multiple appraisal of
          the same property, or an ownership error (§ 25.25(c)).</strong> This
          late-correction motion may cover the current year and the five
          preceding tax years.
        </li>
        <li>
          <strong>Joint motion with the chief appraiser.</strong> If you and
          the chief appraiser agree on the correction, a joint motion goes to
          the ARB for approval.
        </li>
      </ul>
      <p>
        (Correction motions are filed on Comptroller Form 50-771 — Property
        Owner's Motion for Correction of Appraisal Roll — available from the{" "}
        <a
          href="https://comptroller.texas.gov/forms/50-771.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comptroller's official forms
        </a>
        .)
      </p>
      <p>
        A motion that changes the appraisal roll can carry a late-correction
        penalty on the affected taxes, and every one of these routes has its
        own conditions and deadlines. Because eligibility turns on the details
        of your specific situation — what kind of property, what kind of error,
        whether a protest was already filed — confirm your options with your
        appraisal district or the ARB before relying on any of them. This page
        is general information, not legal advice.
      </p>

      <h2>Other dates that matter</h2>
      <table>
        <caption>Sourced Texas property tax deadlines</caption>
        <thead>
          <tr>
            <th scope="col">Deadline</th>
            <th scope="col">Rule</th>
            <th scope="col">Verified</th>
          </tr>
        </thead>
        <tbody>
          {DEADLINES.map((d) => (
            <tr key={d.deadlineId}>
              <th scope="row">{d.deadlineType.replace(/-/g, " ")}</th>
              <td>{d.rule}</td>
              <td>{d.lastVerifiedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        For a fixed calendar date for the current tax year — for example, the
        exact date ARB hearings begin — check your notice of appraised value or
        your appraisal district's official website. We do not publish county
        hearing calendars because we cannot verify them daily. Harris County
        owners should confirm through{" "}
        <Link href="/texas/harris-county/">HCAD's official resources</Link>.
      </p>

      <SourceList sourceIds={[...ids]} />
    </PageShell>
  );
}

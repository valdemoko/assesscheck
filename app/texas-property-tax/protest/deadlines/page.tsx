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
    "The Texas protest deadline is May 15 or 30 days after the notice of appraised value was delivered, whichever is later — plus the other dates that matter.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-17",
  section: "Texas Protest",
});

export default function Page() {
  const ids = new Set<string>();
  DEADLINES.forEach((d) => d.sources.forEach((s) => ids.add(s.sourceId)));

  return (
    <PageShell
      breadcrumbs={[
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

      <h2>If you missed the deadline</h2>
      <p>
        The ARB can grant a hearing to owners who filed late if they show good
        cause before the ARB approves the appraisal records. Missing the good-cause
        window, or filing after the ARB approves the records, can forfeit the
        right to protest for that year. Specific statutory exceptions allow
        late filing for offshore workers and for members of the military
        serving outside the United States, in each case before the taxes become
        delinquent and with evidence.
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

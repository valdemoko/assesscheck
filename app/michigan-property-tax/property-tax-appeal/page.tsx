import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/property-tax-appeal/",
  title: "Appealing a Michigan Property Tax Assessment",
  description:
    "The Michigan appeal ladder: the March Board of Review first for residential and agricultural property, direct access to the Tax Tribunal for commercial and industrial, the two deadlines, the grounds and what evidence has to show.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Michigan",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/michigan-property-tax/", label: "Michigan Property Tax" },
        { label: "The appeal route" },
      ]}
    >
      <h1>The appeal route</h1>

      <p>
        Michigan has one appeal ladder with <strong>two entrances</strong>, and
        which one is yours depends on what kind of property you own. Residential
        and agricultural property must go to the March Board of Review first.
        Commercial and industrial real property has been able to skip the board
        and file directly with the Michigan Tax Tribunal since 2007. That single
        difference means two different filing deadlines, two months apart.
      </p>

      <h2>The March Board of Review, for residential and agricultural property</h2>
      <p>
        The county gives a sequence rather than a single filing step, and it is
        worth following in order: <strong>review the property record card</strong>{" "}
        to check the facts the assessment rests on, <strong>raise it with the
        assessor</strong> to see whether it can be corrected without a hearing,
        and then <strong>make an appointment for the March Board</strong>. The
        board meets in March, and its meeting is what the notice is timed to
        precede.
      </p>
      <p>
        One consequence is easy to miss: the board appeal is not merely the first
        attempt at a fix, it is what <strong>reserves your right</strong> to go on
        to the Tribunal. Residential and agricultural owners therefore cannot
        begin at the Tribunal, and the deadline they need is the later one.
      </p>

      <h2>The two Tribunal deadlines</h2>
      <ul>
        <li>
          <strong>July 31</strong> — residential and agricultural property, after
          a March Board of Review appeal.
        </li>
        <li>
          <strong>May 31</strong> — commercial and industrial real property, filing
          directly with the Tax Tribunal. Personal property may also file directly,
          provided a personal property statement was filed before the board
          commences.
        </li>
      </ul>
      <p>
        After the March board acts, it must notify a protester{" "}
        <strong>in writing by the first Monday in June</strong>, and that notice
        has to state the right to appeal to the Tribunal, the time limits for
        doing so, and the Tribunal&rsquo;s address. The board&rsquo;s decision
        binds the current assessment year only — next year is a new assessment and
        a new protest.
      </p>

      <h2>The grounds the county lists</h2>
      <ul>
        <li>
          <strong>Classification</strong> — the property is in the wrong class
          among the six: agricultural, commercial, developmental, industrial,
          residential and timber cutover.
        </li>
        <li>
          <strong>Status</strong> — property that should be exempt is not being
          treated as exempt.
        </li>
        <li>
          <strong>Equity</strong> — the property is not assessed at the same 50%
          ratio as everything else, which is the argument that comparisons between
          properties can support.
        </li>
        <li>
          <strong>The poverty or hardship exemption</strong> — under the
          statute&rsquo;s hardship provision, which is not a one-time
          application: it must be filed and approved <em>every year</em>.
        </li>
      </ul>

      <h2>What evidence has to show</h2>
      <p>
        The county&rsquo;s own guidance is more restrictive than most owners
        expect, and it is worth reading before assembling a folder:
      </p>
      <ul>
        <li>
          Assessments rest on <strong>sales of similar properties</strong>, but
          the sale price of a property{" "}
          <strong>cannot be the sole determining factor</strong> of its value.
        </li>
        <li>
          <strong>Mortgage appraisals</strong> may not show{" "}
          <strong>true cash value</strong> — the standard Michigan assesses
          against — so a refinancing appraisal is not automatically evidence of
          it.
        </li>
        <li>
          <strong>Non-resident owners may appeal by letter</strong>, so attendance
          is not a precondition for a hearing.
        </li>
      </ul>

      <h2>The Tribunal&rsquo;s two divisions</h2>
      <p>
        Where an appeal reaches the Michigan Tax Tribunal, it is heard in one of
        two ways. The <strong>Entire Tribunal</strong> is the formal route: one
        record, parties usually represented by attorneys, and hearings in Lansing.
        The <strong>Small Claims Division</strong> is informal — roughly thirty
        minutes, the parties are usually unrepresented, and it is heard in the
        county. The choice affects how much preparation a case needs, and it is
        the difference between a hearing you can attend as yourself and one that
        usually is not.
      </p>

      <h2>What this does not cover</h2>
      <p>
        The exact dates the March Board of Review sits, and the Tribunal&rsquo;s
        own forms, fees and procedural rules. Michigan&rsquo;s statute that sets
        the board&rsquo;s session requirement could not be read from this site,
        and the Tribunal&rsquo;s own site could not be reached; the ladder above is
        stated as the county documents it, which is where these windows come from.
        For a filing you intend to make, the Tribunal&rsquo;s materials and your
        local board&rsquo;s schedule are the authority.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/michigan-property-tax/deadlines/">
            Michigan property tax deadlines
          </Link>{" "}
          — every date above, rendered from the registry that cites it.
        </li>
        <li>
          <Link href="/michigan-property-tax/notice-of-assessment/">
            The notice of assessment
          </Link>{" "}
          — what the notice has to carry, including the classification.
        </li>
        <li>
          <Link href="/michigan-property-tax/taxable-value/">
            Taxable value and the inflation-or-5% limit
          </Link>{" "}
          — how the capped value is built.
        </li>
        <li>
          <Link href="/michigan-property-tax/uncapping/">
            Uncapping on a transfer of ownership
          </Link>{" "}
          — the increase that is scheduled rather than contestable.
        </li>
      </ul>

      <SourceList sourceIds={["mi-oakland-faq", "mi-oakland-equalization"]} />
    </PageShell>
  );
}

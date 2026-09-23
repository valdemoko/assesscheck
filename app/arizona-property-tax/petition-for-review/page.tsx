import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/arizona-property-tax/petition-for-review/",
  title: "Arizona Petition for Review: Filing an Assessment Appeal",
  description:
    "How to appeal an Arizona valuation: the petition for review filed with the county assessor within 60 days, what it must contain, the August 15 decision, then the county Board of Equalization or Tax Court.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Arizona",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/arizona-property-tax/", label: "Arizona Property Tax" },
        { label: "Petition for Review" },
      ]}
    >
      <h1>Arizona Petition for Review</h1>

      <p>
        An Arizona appeal starts with a <strong>petition for review</strong> filed
        with the <strong>county assessor</strong> — not with a board, and not with
        the tax collector. It has a filing window of sixty days, a required
        content that catches people out, and two routes after the assessor
        decides.
      </p>

      <h2>What you are appealing, and what you are not</h2>
      <p>
        The petition challenges the <strong>full cash value</strong> and/or the{" "}
        <strong>legal classification</strong> of the property. The statute is
        framed for an owner who believes the property "has been valued too high
        or otherwise improperly valued or listed on the roll".
      </p>
      <p>
        What the petition does not do is challenge the limited property value as
        a number in its own right: the limited value is a formula
        (§ 42-13301), and it is not subject to discretionary adjustment. When a
        limited value has been re-established above 5%, what you are
        really testing is whether the trigger for that — new construction, a
        change in use, a split — actually applied. That is a fact question, and
        it belongs in the petition.
      </p>

      <h2>The filing window</h2>
      <p>
        The petition must be filed within <strong>sixty days</strong> after the
        date the assessor mailed the notice of valuation,{" "}
        <em>or the amended notice of valuation</em> if one was issued. A United
        States Postal Service postmark is evidence of the filing date, so a
        mailed petition that is postmarked inside the window is filed on time.
      </p>
      <p>
        The deadline is printed on the notice. Because the assessor must certify
        the mailing date each year, and because a late amended notice restarts
        the window, the printed date on the notice in your hand is the operative
        one.
      </p>

      <h2>What the petition must contain</h2>
      <p>
        This is the requirement that separates a petition that can succeed from
        one that cannot. It is not enough to say the value is too high. The
        statute requires the petition to state:
      </p>
      <ol>
        <li>
          <strong>your opinion of the full cash value</strong> — a number, not a
          complaint; and
        </li>
        <li>
          <strong>substantial information that justifies that opinion</strong>,
          given by stating the method or methods of valuation on which the
          opinion is based:
          <ul>
            <li>
              <strong>market approach</strong> — including the full cash value of
              at least one comparable property in the same geographic area, or
              the sale of the subject property;
            </li>
            <li>
              <strong>income approach</strong> — with the additional information
              § 42-16052 requires;
            </li>
            <li>
              <strong>cost approach</strong> — the cost to build or rebuild the
              property plus the land value.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        In practice, for a residence, that means naming at least one comparable
        property in the same geographic area with its full cash value. A letter
        saying the value rose too much does not meet the standard, and the Board
        of Equalization will not accept letters in place of the required forms.
      </p>

      <h2>The forms</h2>
      <ul>
        <li>
          <strong>DOR 82130R</strong> — residential petition for review of
          valuation. Class three property has its own form with simplified
          instructions.
        </li>
        <li>
          <strong>DOR 82130</strong> — real property (commercial, multi-family,
          industrial, retail and similar).
        </li>
        <li>
          <strong>DOR 82530</strong> — personal property, including mobile and
          manufactured housing and business personal property.
        </li>
        <li>
          <strong>DOR 82131</strong> — multiple parcels, where the parcels form
          the same economic unit or share owner, use, appeal basis and geographic
          area.
        </li>
        <li>
          <strong>DOR 82130AA</strong> — agency authorization, required if someone
          represents you.
        </li>
      </ul>
      <p>
        The forms are prescribed by the state and filed with the county assessor
        of the county where the property is located.
      </p>

      <h2>What happens after you file</h2>
      <ol>
        <li>
          <strong>The assessor reviews the petition.</strong> You can ask for a
          meeting, in which case the assessor must consider, decide and answer
          all requests <strong>on or before August 15</strong>.
        </li>
        <li>
          <strong>If the assessor agrees, that ends it.</strong> When the
          assessor grants the petition, no further appeal is permitted. That is a
          benefit and a limit worth knowing before you decide what to ask for.
        </li>
        <li>
          <strong>If you disagree with the decision, you have two options.</strong>{" "}
          File a petition with the <strong>county Board of Equalization within 25
          days</strong> of the date the assessor&rsquo;s decision was mailed, or
          bypass the board and go <strong>directly to Tax Court within 60
          days</strong> of that same date.
        </li>
        <li>
          <strong>In Maricopa and Pima counties only</strong>, the appeal can
          continue to the <strong>State Board of Equalization</strong>, and from
          there to Tax Court within 60 days of the board&rsquo;s decision.
        </li>
        <li>
          <strong>If you never filed with the assessor</strong>, there is a
          direct judicial route: a petition in Tax Court any time after receiving
          the notice, but no later than <strong>December 15 of the valuation
          year</strong> — the same year the notice was mailed. Filing fees apply.
        </li>
      </ol>
      <p>
        All Arizona tax court appeals are heard at Maricopa Superior Court,
        whichever county the property is in.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence. Your own mailing dates and deadlines come from
          your notice.
        </em>
      </p>
      <ol>
        <li>
          <strong>February:</strong> the notice shows a full cash value of
          $400,000 and a limited value of $315,000, class three.
        </li>
        <li>
          <strong>March:</strong> you file DOR 82130R with the assessor, stating
          your opinion of the full cash value at $360,000 and naming two
          comparable properties in the same area with their full cash values.
        </li>
        <li>
          <strong>May:</strong> the assessor&rsquo;s office reviews the records
          with you and adjusts a recorded improvement — for example, a
          measurement that was overstated. If the assessor grants the petition
          in full, the matter closes here.
        </li>
        <li>
          <strong>June:</strong> the decision is mailed. If you disagree with it,
          the county Board of Equalization clock is 25 days from that mailing,
          and the Tax Court clock is 60 days.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the earliest, cheapest and most
        decisive stage is the petition to the assessor, and its power comes from
        documentation rather than from argument.
      </p>
      <p>
        <strong>What it does not tell you:</strong> what the outcome will be, or
        whether a corrected full cash value will even change your tax base — the
        tax is levied on the limited value, so a full cash value that stays above
        it does not by itself move the bill.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/arizona-property-tax/appeal-evidence/">
            Evidence for an Arizona appeal
          </Link>{" "}
          — what each method requires, and the valuation date that limits your
          comparables.
        </li>
        <li>
          <Link href="/arizona-property-tax/full-cash-vs-limited-value/">
            Full cash value vs limited property value
          </Link>{" "}
          — why the limited value moved, which is often the real question.
        </li>
        <li>
          <Link href="/arizona-property-tax/deadlines/">
            Arizona deadlines
          </Link>{" "}
          — every window including the December 15 court route.
        </li>
      </ul>

      <SourceList
        sourceIds={["az-ars-42-16051", "az-sboe-how-to-appeal", "az-ars-42-13301"]}
      />
    </PageShell>
  );
}

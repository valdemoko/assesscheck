import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/appeal-evidence/",
  title: "Evidence for a California Assessment Appeal",
  description:
    "Evidence rules for a California assessment appeal: evidence must be presented at the hearing, comparable sales more than 90 days after the valuation date may be excluded, the 30/15-day exchange of information, and the burden of proof.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/california-property-tax/", label: "California Property Tax" },
        { label: "Appeal Evidence" },
      ]}
    >
      <h1>Evidence for a California Assessment Appeal</h1>

      <p>
        California&rsquo;s evidence rules are set out by the Board of
        Equalization and they are stricter than most owners expect. Three of them
        decide appeals before the value is even discussed.
      </p>

      <h2>Rule 1: only what you present at the hearing counts</h2>
      <p>
        The board may consider <em>only</em> the evidence you and the assessor
        present at the hearing. Documents you previously sent the assessor, or
        that the assessor previously sent you, or anything you attached to your
        application, are <strong>not</strong> considered unless it is also
        presented at the hearing. Practically: send the assessor your evidence to
        encourage agreement, then bring it to the hearing and present it again.
      </p>

      <h2>Rule 2: comparable sales have a time boundary</h2>
      <p>
        Sales may be from any time <em>before</em> the valuation date, and the
        closest in time are the best indicators of value — but an appeals board{" "}
        <strong>
          may not consider comparable sales that occurred more than 90 days after
          the date your value was set by the county assessor
        </strong>
        . A market that fell after the lien date is therefore not, by itself,
        evidence about the lien date value. That is a genuinely different posture
        from Texas, where the protest is about the value on January 1 too, but the
        comparable-selection discussion is framed around what the review board
        will consider rather than a stated time boundary.
      </p>

      <h2>Rule 3: the exchange of information narrows the hearing</h2>
      <p>
        Regardless of the value of the property, you may request an{" "}
        <strong>exchange of information</strong> with the assessor: the request
        must be made at least <strong>30 days before the hearing</strong> and must
        include your opinion of value and the data supporting it; the other party
        must respond at least <strong>15 days before</strong> the hearing with the
        same. If the assessed value is more than $100,000, the assessor may also
        request the exchange from you. Once an exchange has happened, the hearing
        evidence is largely restricted to what was exchanged.
      </p>

      <h2>Who has to prove what</h2>
      <p>
        This is the part owners most often get backwards. The <strong>assessor</strong>{" "}
        carries the burden of proving its opinion of value is correct in these
        situations:
      </p>
      <ul>
        <li>an appeal of a single-family dwelling occupied by the owner as a primary residence;</li>
        <li>non-enrollment of purchase prices, if you timely filed a Change in Ownership Statement;</li>
        <li>the assessor asking to enrol a <em>higher</em> value than the roll shows;</li>
        <li>escape assessments not caused by your failure to file a Change in Ownership Statement, business property statement or new-construction permits;</li>
        <li>penalty assessments.</li>
      </ul>
      <p>
        In <strong>all other</strong> situations — including a vacation or
        secondary home — the <strong>applicant</strong> has the burden and must be
        the first to present evidence. Knowing which side of that line you are on
        changes both your preparation and the order of the hearing.
      </p>

      <h2>Kinds of evidence the board may hear</h2>
      <ul>
        <li>
          <strong>Comparable sales</strong> — the BOE calls this the best
          supporting documentation for a residential property. Your assessor may
          publish sales information for properties sold in the last two years, and
          it is also available in person; title companies and real estate agents
          are commonly used sources.
        </li>
        <li>
          <strong>An appraisal or other written report</strong> — submitted in
          writing, though the county board may require the person who prepared it
          to attend the hearing to answer questions.
        </li>
        <li>
          <strong>Testimony</strong> — from you, your agent or attorney, the
          assessor&rsquo;s staff, or an expert or other witness.
        </li>
        <li>
          <strong>A valuation approach</strong> — any relevant evidence admitted
          under customary appraisal practice is admissible; the income and
          replacement-cost approaches may be used where they are the most
          appropriate method for the property.
        </li>
      </ul>
      <p>
        <strong>Depositions are not admissible</strong> and will not be considered
        by the appeals board.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative preparation sequence, not a prediction of any outcome.
        </em>
      </p>
      <ol>
        <li>
          <strong>Collect:</strong> three to five closed sales of genuinely
          similar homes, dated on or before the lien date, with the data that
          makes them comparable (location, size, age, condition, date of sale).
        </li>
        <li>
          <strong>Check the window:</strong> exclude any sale that closed more
          than 90 days after the valuation date — it may not be considered.
        </li>
        <li>
          <strong>Request the exchange:</strong> at least 30 days before the
          hearing, with your opinion of value and your data, forcing the assessor
          to state its opinion and its data 15 days before.
        </li>
        <li>
          <strong>Re-present at the hearing:</strong> everything you want
          considered, even if you already sent it — including anything you
          attached to the application.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> a strong California appeal is built
        on date-appropriate comparables, presented in person, exchanged properly.
      </p>
      <p>
        <strong>What it does not tell you:</strong> what your property is worth,
        whether the assessor&rsquo;s adjustment methodology is wrong, or whether
        the board will accept your comparables as genuinely similar. Those are
        judgments made on the record at the hearing.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/california-property-tax/assessment-appeal/">
            The application for changed assessment
          </Link>{" "}
          — filing, the board&rsquo;s powers, and judicial review.
        </li>
        <li>
          <Link href="/comparables/">How comparable properties work</Link> — a
          general guide to selecting and presenting comparables.
        </li>
        <li>
          <Link href="/california-property-tax/deadlines/">
            California deadlines
          </Link>{" "}
          — including the 30/15-day exchange dates.
        </li>
      </ul>

      <SourceList sourceIds={["ca-boe-appeals-faq", "ca-boe-decline-in-value"]} />
    </PageShell>
  );
}

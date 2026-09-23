import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/oregon-property-tax/appeal/",
  title: "Appealing Your Oregon Property Value",
  description:
    "Oregon's appeal route: the December 31 board petition filed with the county clerk, the Tax Court ladder after that, the two conditions under which a real market value reduction changes your bill, and the evidence counties accept.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Oregon",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/oregon-property-tax/", label: "Oregon Property Tax" },
        { label: "Appealing your value" },
      ]}
    >
      <h1>Appealing Your Oregon Property Value</h1>

      <p>
        Oregon&rsquo;s appeal clock does not start with a value notice. It starts
        with the <strong>tax statement</strong> that arrives before October 25,
        and it closes on <strong>December 31</strong> — or the next business day
        when that date falls on a weekend or legal holiday. The petition goes to
        the <strong>county clerk</strong>, not to the assessor&rsquo;s office, and
        the board that hears it is the county Board of Property Tax Appeals
        (called the Property Valuation Appeals Board in some counties).
      </p>

      <h2>Before you file: the informal review</h2>
      <p>
        Every county here tells owners to talk to the assessor first, and one
        publishes a deadline for it: a <strong>request for review</strong> can be
        made through <strong>December 16</strong>. The county also asks owners not
        to leave it to the last week, because a warranted reduction has to be
        reviewed and processed in time for the tax corrections that must be
        completed by December 31. After the 16th, the route is a board petition.
      </p>

      <h2>The board petition</h2>
      <ol>
        <li>
          <strong>Filed with the county clerk</strong> between late October (when
          statements arrive) and December 31.
        </li>
        <li>
          <strong>No filing fee</strong> at this level.
        </li>
        <li>
          <strong>Limited to the current tax year&rsquo;s values.</strong> In some
          cases the maximum assessed value, a specially assessed value or the
          assessed value can also be appealed — but an earlier year&rsquo;s value
          is not what this board decides.
        </li>
        <li>
          <strong>Also hears late-filing penalty appeals</strong>, and may waive
          all or part of a penalty where the owner shows good and sufficient cause
          for a late return.
        </li>
        <li>
          <strong>Hearings run from the first Monday in February to April 15</strong>
          , with written notice at least five days ahead. The hearing is informal
          and you are not required to attend.
        </li>
      </ol>

      <h2>Who can sign, and who can represent you</h2>
      <p>
        The owner may sign the petition and appear, or authorize certain other
        persons to do so — the categories are set out on the petition form itself,
        which is the document a representative has to work from. A property tax
        representative who files for you is also the person responsible for
        telling you the outcome; the clerk and the assessor notify the
        representative, not the owner.
      </p>

      <h2>Two conditions decide whether a win changes your bill</h2>
      <p>
        This is the part of the Oregon system that surprises owners most, and the
        counties state it plainly:{" "}
        <strong>a reduction in real market value may not change your tax bill.</strong>{" "}
        It depends on whether:
      </p>
      <ol>
        <li>
          the reduced real market value falls <em>below the assessed value</em>{" "}
          shown on your statement — because if the assessed value is still the
          lower of the two, it remains the tax base; or
        </li>
        <li>
          the reduction is enough to change the comparison between the Measure 5
          calculation and the Measure 50 calculation — which is what governs a
          property held down by compression.
        </li>
      </ol>
      <p>
        So a successful appeal on a property whose assessed value is well below
        its real market value can leave the bill unchanged, and the same is true
        of a compressed property whose reduction is not large enough to move the
        lower calculation. That is a reason to know your assessed value before you
        spend money on evidence, not a reason to skip the appeal.
      </p>

      <h2>Evidence: the official lists</h2>
      <p>
        Oregon counties publish both sides of this, which is unusual and useful.
        Supporting documentation is:
      </p>
      <ul>
        <li>documentation of a recent arm&rsquo;s-length sale of the property;</li>
        <li>
          sales of homes similar in size, quality and location, close to the
          January 1 assessment date;
        </li>
        <li>a fee appraisal establishing market value as of that date;</li>
        <li>
          a detailed market analysis from a licensed agent or broker, again as of
          the assessment date;
        </li>
        <li>
          the cost of new construction carried out close to January 1 by a
          professional contractor;
        </li>
        <li>
          estimates or receipts from a licensed contractor for major repairs,
          with the county&rsquo;s own caveat that cost does not necessarily equal
          market value;
        </li>
        <li>
          proof that the property was listed on the open market for a reasonable
          period below the value on the roll; and
        </li>
        <li>income and expense data or a comparable sales analysis for commercial property.</li>
      </ul>
      <p>And, in the counties&rsquo; own words, what is not evidence:</p>
      <ul>
        <li>statistical reports and analyses from state agencies, counties, magazines, newspapers, universities or industry organizations;</li>
        <li>old listings;</li>
        <li>sales from outside your market area;</li>
        <li>
          comparisons of your real market value with your neighbors&rsquo;, your
          assessed value with your neighbors&rsquo;, or your taxes with your
          neighbors&rsquo;.
        </li>
      </ul>
      <p>
        The last three are the ones owners bring most often, and the reason they
        fail is the same in each case: they do not speak to your property&rsquo;s
        market value on the assessment date. The petition form asks you to be
        specific about the value you want and to support it.
      </p>

      <h2>After the board: the Tax Court ladder</h2>
      <ol>
        <li>
          <strong>Magistrate Division of the Oregon Tax Court.</strong> A written
          complaint within <strong>30 days</strong> — days, not one month — after
          the board&rsquo;s order is mailed. A filing fee applies.
        </li>
        <li>
          <strong>Regular Division.</strong> A complaint within{" "}
          <strong>60 days</strong> of the magistrate&rsquo;s decision. This is a
          formal proceeding; you may represent yourself, but most people do not.
        </li>
        <li>
          <strong>Oregon Supreme Court</strong>, from a Regular Division decision.
        </li>
      </ol>
      <p>
        Two matters can go to the Magistrate Division <em>without</em> a board
        petition, and both are due by December 31 with a filing fee: industrial
        property appraised by the Department of Revenue, and an appeal filed after
        the board deadline or about a prior year. The court&rsquo;s own standards
        decide whether the magistrate will hear it.
      </p>

      <h2>What this does not tell you</h2>
      <ul>
        <li>
          <strong>Which of MAV, SAV or AV your county board will take up.</strong>{" "}
          The counties phrase this as &ldquo;in some cases&rdquo; rather than a
          list, so the reliable move is to ask the assessor or the clerk what your
          board hears before you frame the petition.
        </li>
        <li>
          <strong>Whether your appeal is worth it.</strong> Check the assessed
          value on your statement against your opinion of value first: if the gap
          you are disputing sits above the assessed value, the two conditions
          above apply and the bill may not move.
        </li>
        <li>
          <strong>Court fees and current thresholds.</strong> They change; the
          figures quoted on county pages carry their own dates, and the court or
          the clerk is the authority.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "or-yamhill-appeals",
          "or-multco-assessment-faq",
          "or-multco-tax-calculation",
          "or-multco-property-taxes",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/faq/",
  title: "Property Tax FAQ",
  description:
    "Questions that work the same way in every state we cover — Texas, Florida, California, Arizona, Nevada and Oregon — and where each one answers differently: who sets value versus rates, where appeals are filed, and what a percentage cap really limits.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "FAQ",
});

const APPEAL_ROUTES = [
  {
    state: "Texas",
    href: "/texas-property-tax/",
    notice: "Notice of appraised value",
    filedWith: "The appraisal district",
    decidedBy: "Appraisal Review Board",
    window:
      "May 15, or 30 days after the district delivered your notice, whichever is later",
    basis: "Anchored to the delivery of your notice",
  },
  {
    state: "Florida",
    href: "/florida-property-tax/",
    notice: "TRIM notice",
    filedWith: "The value adjustment board clerk",
    decidedBy: "Value Adjustment Board",
    window: "On or before the 25th day after the notice is mailed",
    basis: "Anchored to the mailing of your notice",
  },
  {
    state: "California",
    href: "/california-property-tax/",
    notice: "Notice of assessed value",
    filedWith: "The clerk of the board of supervisors",
    decidedBy: "County assessment appeals board",
    window:
      "A fixed seasonal window: from July 2 to September 15, or to November 30 in counties that have adopted the longer period",
    basis: "A calendar window, not a count of days from your notice",
  },
  {
    state: "Arizona",
    href: "/arizona-property-tax/",
    notice: "Notice of valuation",
    filedWith: "The county assessor, as a petition for review",
    decidedBy:
      "The assessor first, then the county board of equalization or Tax Court",
    window: "Within 60 days after the notice is mailed",
    basis: "Anchored to the mailing of your notice",
  },
  {
    state: "Nevada",
    href: "/nevada-property-tax/",
    notice: "Value notice",
    filedWith: "The county assessor's office",
    decidedBy: "County Board of Equalization (then the State Board of Equalization)",
    window:
      "By January 15, moving to the next business day when that date falls on a weekend or holiday",
    basis: "A fixed calendar date, not a count of days from your notice",
  },
  {
    state: "Oregon",
    href: "/oregon-property-tax/",
    notice: "Tax statement",
    filedWith: "The county clerk",
    decidedBy:
      "County Board of Property Tax Appeals, then the Oregon Tax Court",
    window:
      "By December 31, moving to the next business day when that date falls on a weekend or holiday",
    basis: "A fixed calendar date measured from the statement mailed before October 25",
  },
];

export default function FAQPage() {
  return (
    <PageShell breadcrumbs={[{ label: "FAQ" }]}>
      <h1>Property Tax FAQ</h1>
      <p>
        These are the questions that produce the same kind of answer in every
        state we cover — <strong>Texas, Florida, California, Arizona, Nevada and
        Oregon</strong>{" "}
        — with the differences stated where they matter. Questions that only
        make sense inside one state&apos;s procedure are kept on that state&apos;s
        own page, starting with the{" "}
        <Link href="/texas-property-tax/faq/">Texas FAQ</Link>. Nothing here
        substitutes for your own notice, your county&apos;s instructions or
        advice from a professional who practices in your state.
      </p>

      <h2>Who decides what my property is worth, and who decides what I pay?</h2>
      <p>
        They are different bodies in all six states, and that separation is the
        single most useful thing to understand before you read any notice.
      </p>
      <ul>
        <li>
          <strong>Texas:</strong> the appraisal district determines value; the
          taxing units set the rates. The notice of appraised value says so on
          its face.
        </li>
        <li>
          <strong>Florida:</strong> the county property appraiser values the
          property; the taxing authorities set millage.
        </li>
        <li>
          <strong>California:</strong> the county assessor sets value, while the
          general levy is limited to 1 percent of taxable value plus the rate
          needed to pay debt approved by local voters — so what moves your bill
          is mostly the value side.
        </li>
        <li>
          <strong>Arizona:</strong> the county assessor determines the full cash
          value and the limited property value; the taxing jurisdictions set the
          rates that are applied to the limited property value.
        </li>
        <li>
          <strong>Nevada:</strong> the county assessor determines taxable value,
          but the tax rates are set by the Nevada Tax Commission in the spring
          from local budgets, and the county treasurer bills and collects.
        </li>
        <li>
          <strong>Oregon:</strong> the county assessor sets the real market value
          and computes the maximum assessed value as of January 1, and the rate
          comes from the individual taxing jurisdictions combined in your levy
          code area — with the Measure 5 limits then applied to cap the tax
          itself.
        </li>
      </ul>
      <p>
        The practical consequence: <strong>a valuation notice is not a tax
        bill.</strong> A rising value and a rising bill are not the same event,
        and in every state here except California the rate decision happens later
        and elsewhere — California is the exception, because its general levy is
        fixed by the constitution at 1 percent of taxable value rather than set
        annually by a local body.
      </p>

      <h2>Where do I file an appeal, and what is the deadline?</h2>
      <p>
        Every state here routes the first appeal somewhere different, and no two
        deadlines are counted the same way. This table is the fastest way to see
        which state you are actually dealing with.
      </p>
      <div className="table-wrap">
      <table>
        <caption>
          First-level appeal route and deadline basis by state, as documented on
          each state&apos;s pages.
        </caption>
        <thead>
          <tr>
            <th scope="col">State</th>
            <th scope="col">Notice</th>
            <th scope="col">Filed with</th>
            <th scope="col">Decided by</th>
            <th scope="col">When</th>
          </tr>
        </thead>
        <tbody>
          {APPEAL_ROUTES.map((r) => (
            <tr key={r.state}>
              <th scope="row">
                <Link href={r.href}>{r.state}</Link>
              </th>
              <td>{r.notice}</td>
              <td>{r.filedWith}</td>
              <td>{r.decidedBy}</td>
              <td>
                {r.window} <span className="muted-note">({r.basis})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <p>
        Note the difference in kind: in Texas, Florida and Arizona the clock
        starts with a notice, while California sets a seasonal window and Nevada
        and Oregon fixed dates (Oregon's measured from the tax statement rather
        than from a separate value notice). That is why advice copied from one state (&quot;you have 30
        days from delivery&quot;) is simply wrong in another. Nevada adds a
        second track on top of the table above — an abatement determination is
        challenged with the assessor by June 30, not with a board. Each state
        page states the rule it comes from.
      </p>

      <h2>Why doesn&apos;t the same percentage mean the same thing everywhere?</h2>
      <p>
        Because the caps in these six states do not limit the same quantity.
        The number is only meaningful together with what it is applied to:
      </p>
      <ul>
        <li>
          <strong>Texas</strong> limits the annual increase in a homestead&apos;s{" "}
          <em>appraised value</em> (Tax Code § 23.23), before exemptions are
          subtracted.
        </li>
        <li>
          <strong>Florida</strong> limits the annual increase in a homestead&apos;s{" "}
          <em>assessed value</em> to the lower of 3 percent or the change in the
          Consumer Price Index (§ 193.155).
        </li>
        <li>
          <strong>California</strong> limits the increase in a property&apos;s{" "}
          <em>base year value</em> to no more than 2 percent a year, and a
          separate rule allows a temporary lower assessment when the market
          falls below the base year value.
        </li>
        <li>
          <strong>Arizona</strong> limits the{" "}
          <em>limited property value</em> — the figure the tax is actually
          computed on — to a 5 percent annual increase, while the full cash
          value, the market estimate you appeal, has no cap at all.
        </li>
        <li>
          <strong>Nevada</strong> limits neither a value nor a rate of increase
          in a value: it limits the <em>tax bill</em>, to 3 percent a year over
          the prior bill for a claimed primary residence and to no more than 8
          percent for other property, and it takes the lower of that figure and
          the calculated tax. Nevada&rsquo;s assessors state the consequence
          plainly: the cap does not limit the increase in assessed value.
        </li>
        <li>
          <strong>Oregon</strong> limits the <em>maximum assessed value</em> at
          3 percent — but as a formula, not a flat rate: the greater of 103
          percent of the prior assessed value or the prior maximum. The tax base
          is the <em>lower</em> of that limit or the real market value, and a
          separate limit from a different ballot measure then caps the tax
          itself at $5 and $10 per $1,000 of real market value. So an Oregon
          bill can rise by far more than 3 percent while the 3 percent limit was
          applied correctly.
        </li>
      </ul>
      <p>
        So a &quot;5 percent cap&quot; in Arizona can leave your bill unchanged
        if your limited value is already far below your full cash value, and a
        &quot;3 percent cap&quot; in Florida says nothing about your school
        levy. The{" "}
        <Link href="/property-tax-by-state/">
          by-state comparison of the limitation rules
        </Link>{" "}
        puts all six side by side.
      </p>

      <h2>Should I check my own numbers before hiring anyone?</h2>
      <p>
        Yes, and it is free. Our{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> works where
        the rule can be tested arithmetically from the numbers on your notice.
        That is Texas today. Florida is the other rule on this site that two
        consecutive notices are enough to test, but a Florida edition of the tool
        is not built yet. It is deliberately not offered for California,
        Arizona, Nevada or Oregon, because the check those states need cannot be
        made by comparing one year to the next: California measures against a
        base year value, Arizona measures the limited property value while you
        appeal the full cash value, Nevada caps the tax bill rather than any
        value at all, and Oregon caps the maximum assessed value while the tax
        base is the lower of that limit or the real market value. Each of those
        state pages explains the limit rather than offering an answer that would
        be wrong.
      </p>

      <h2>Where do I find the questions specific to my state?</h2>
      <ul>
        <li>
          <Link href="/texas-property-tax/faq/">Texas property tax FAQ</Link> —
          protests, ARB hearings, evidence and exemptions under the Texas Tax
          Code.
        </li>
        <li>
          <Link href="/florida-property-tax/">Florida property tax</Link> —
          TRIM notices, the save-our-homes limitation and VAB petitions.
        </li>
        <li>
          <Link href="/california-property-tax/">California property tax</Link> —
          Proposition 13 and Proposition 8, assessed value notices and
          assessment appeals boards.
        </li>
        <li>
          <Link href="/arizona-property-tax/">Arizona property tax</Link> — full
          cash value versus limited property value, notices of valuation and
          petitions for review.
        </li>
        <li>
          <Link href="/nevada-property-tax/">Nevada property tax</Link> — the
          fiscal-year clock, value notices, the partial abatement that caps the
          tax bill and the claim that keeps the 3% level.
        </li>
        <li>
          <Link href="/oregon-property-tax/">Oregon property tax</Link> — the
          maximum assessed value under Measure 50, the changed property ratio
          for new construction, Measure 5 compression and the December 31 board
          petition.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "tx-tax-code-23-23",
          "tx-comptroller-appraisal-protests",
          "fl-stat-193-155",
          "fl-stat-194-011",
          "ca-boe-property-tax-hub",
          "ca-boe-appeals-faq",
          "az-ars-42-13301",
          "az-ars-42-16051",
        ]}
      />
    </PageShell>
  );
}

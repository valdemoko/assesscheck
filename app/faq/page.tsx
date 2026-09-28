import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/faq/",
  title: "Property Tax FAQ",
  description:
    "Questions that work the same way in every state we cover — Texas, Florida, California, Arizona, Nevada, Oregon, Michigan, Colorado, Ohio, North Carolina, Massachusetts, Virginia, New York, Georgia, Maryland and Indiana — and where each one answers differently: who sets value versus rates, where appeals are filed, and what a percentage cap really limits.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
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
  {
    state: "Michigan",
    href: "/michigan-property-tax/",
    notice: "Notice of assessment, taxable valuation and property classification",
    filedWith: "The March Board of Review (residential and agricultural property)",
    decidedBy:
      "The March Board of Review, then the Michigan Tax Tribunal — or the Tribunal directly for commercial and industrial property",
    window:
      "In March for the board, then July 31 for the Tribunal; May 31 for the direct commercial and industrial route",
    basis:
      "A month for the board rather than a date, and two class-specific dates for the Tribunal",
  },
  {
    state: "Colorado",
    href: "/colorado-property-tax/",
    notice: "Notice of Valuation",
    filedWith: "The county assessor, as an oral or written objection",
    decidedBy:
      "The assessor first (Notice of Determination), then the county board of equalization",
    window: "Between May 1 and June 8 for real property",
    basis: "A fixed window after the May 1 notice mailing — with an alternate, later schedule in large counties",
  },
  {
    state: "Ohio",
    href: "/ohio-property-tax/",
    notice: "The county auditor's appraised value",
    filedWith: "The county auditor, as a DTE Form 1 complaint",
    decidedBy: "County Board of Revision (then the Board of Tax Appeals)",
    window:
      "January 1 through March 31 of the following tax year, or the last day to pay first-half taxes when that is earlier",
    basis: "A fixed seasonal window, not a count of days from a notice",
  },
  {
    state: "North Carolina",
    href: "/north-carolina-property-tax/",
    notice: "The revaluation notice (the value set at the last revaluation)",
    filedWith: "The county assessor informally; the Board of Equalization and Review formally",
    decidedBy: "The board (then the state Property Tax Commission)",
    window:
      "Informal through March 31 in Orange County; formal from April 1 until the board adjourns (June 30 there)",
    basis:
      "A convening-and-adjournment window set by the board's own schedule, so county dates are the operative ones",
  },
  {
    state: "Massachusetts",
    href: "/massachusetts-property-tax/",
    notice: "The actual tax bill",
    filedWith: "The board of assessors, on State Tax Form 128",
    decidedBy: "The assessors (then the Appellate Tax Board)",
    window:
      "By the due date of the first actual tax bill — usually February 1 with quarterly billing",
    basis: "A fixed deadline anchored to the bill, not to an assessment notice",
  },
  {
    state: "Virginia",
    href: "/virginia-property-tax/",
    notice: "Notice of an increased assessment",
    filedWith: "The local board of equalization, by application",
    decidedBy: "The local board (and, de novo, the circuit court)",
    window:
      "By the deadline your locality's ordinance sets — no earlier than 30 days after the notice hearing",
    basis:
      "A locality-set deadline anchored to the notice hearing; the circuit court window runs for years",
  },
  {
    state: "New York",
    href: "/new-york-property-tax/",
    notice: "The tentative assessment roll (published May 1 in most communities)",
    filedWith: "The assessor or Board of Assessment Review, on Form RP-524",
    decidedBy: "The Board of Assessment Review (then SCAR or State Supreme Court)",
    window:
      "By Grievance Day — the fourth Tuesday in May in most communities, with major exceptions (NYC and Nassau in March, Suffolk in May, Westchester in June, villages in February)",
    basis:
      "A board-meeting date set per municipality; the mailing must be received by the day",
  },
  {
    state: "Georgia",
    href: "/georgia-property-tax/",
    notice: "The county's annual assessment notice",
    filedWith: "The county Board of Tax Assessors, on form PT-311A",
    decidedBy:
      "The Board of Equalization, a hearing officer, or an arbitrator — the owner declares which, in the first filing",
    window: "Within 45 days of the date the assessment notice was mailed",
    basis: "Anchored to the mailing of your notice",
  },
  {
    state: "Maryland",
    href: "/maryland-property-tax/",
    notice: "The Notice of Assessment (triennial; typically mailed late December)",
    filedWith: "The Supervisor of Assessments for the county",
    decidedBy: "The Supervisor, then the county PTAAB, then the Maryland Tax Court",
    window:
      "Within 45 days of the notice date; then 30 days to the PTAAB and 30 days to the Tax Court",
    basis: "A three-step count of days, each anchored to the previous decision or notice",
  },
  {
    state: "Washington",
    href: "/washington-property-tax/",
    notice: "The change-of-value notice from the county assessor",
    filedWith: "The county Board of Equalization, on DOR form REV 64-0075",
    decidedBy: "The county Board of Equalization, then the state Board of Tax Appeals",
    window:
      "By July 1 of the assessment year or within 30 days of the notice — whichever is later",
    basis: "A fixed date and a notice-based window, taking the later of the two",
  },
  {
    state: "New Jersey",
    href: "/new-jersey-property-tax/",
    notice: "The annual assessment notice (value set as of October 1 of the prior year)",
    filedWith: "The County Board of Taxation, on Form A-1 (direct to the Tax Court over $1M)",
    decidedBy: "The County Board of Taxation, then the Tax Court of New Jersey",
    window:
      "Filed and received by April 1 — May 1 after a revaluation or reassessment, and January 15 in Burlington, Gloucester and Monmouth Counties",
    basis: "A fixed statewide date with two named deviations",
  },
  {
    state: "Minnesota",
    href: "/minnesota-property-tax/",
    notice: "The Valuation Notice (mailed on or before April 1; value set January 2)",
    filedWith: "The Local Board of Appeal and Equalization, then the County Board — or directly to the Minnesota Tax Court",
    decidedBy: "The local and county boards, or the Minnesota Tax Court",
    window:
      "The board meeting dates printed on your notice (local boards April 1 – May 31; county boards in June) — or April 30 of the year the taxes are payable for the Tax Court",
    basis: "Meeting dates as deadlines, plus a fixed Tax Court date one year after the assessment",
  },
];

export default function FAQPage() {
  return (
    <PageShell breadcrumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}>
      <h1>Property Tax FAQ</h1>
      <p>
        These are the questions that produce the same kind of answer in every
        state we cover — <strong>Texas, Florida, California, Arizona, Nevada,
        Oregon, Michigan, Colorado, Ohio, North Carolina, Massachusetts,
        Virginia, New York, Georgia, Maryland, Indiana, Washington, New Jersey
        and Minnesota</strong>{" "}
        — with the differences stated where they matter. Questions that only
        make sense inside one state&apos;s procedure are kept on that state&apos;s
        own page, starting with the{" "}
        <Link href="/texas-property-tax/faq/">Texas FAQ</Link>. Nothing here
        substitutes for your own notice, your county&apos;s instructions or
        advice from a professional who practices in your state.
      </p>

      <h2>Who decides what my property is worth, and who decides what I pay?</h2>
      <p>
        They are different bodies in all nineteen states, and that separation is the
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
        <li>
          <strong>Michigan:</strong> the local assessor determines assessed value
          as of December 31, county and state equalization produce the state
          equalized value, and the taxing units set the millage rate that is
          applied to taxable value.
        </li>
        <li>
          <strong>Colorado:</strong> the county assessor sets actual value and
          the legislature sets the assessment rate that turns it into assessed
          value — so both sides of the multiplication move independently of
          each other.
        </li>
        <li>
          <strong>Ohio:</strong> the county auditor values every parcel and
          applies the state&rsquo;s fixed 35% ratio; the levies are set by
          the school districts, cities, townships and counties, and voted in
          many cases.
        </li>
        <li>
          <strong>North Carolina:</strong> the county assessor values the
          property on the revaluation cycle and the county, municipalities
          and fire districts set the rates against it.
        </li>
        <li>
          <strong>Massachusetts:</strong> the city or town&rsquo;s board of
          assessors values property and sets the rate within the levy limit
          of Proposition 2&frac12; — value and rate live in the same
          municipality, supervised by the Department of Revenue.
        </li>
        <li>
          <strong>Virginia:</strong> the Commissioner of the Revenue or
          assessor of each locality assesses at 100% of fair market value,
          and the locality&rsquo;s governing body sets the rate.
        </li>
        <li>
          <strong>New York:</strong> the city or town assessor assesses at a
          uniform percentage of market value the municipality chooses, and the
          school districts and counties split their levies using the
          state&rsquo;s equalization rates — which is why two neighboring
          towns can show very different numbers for identical houses.
        </li>
        <li>
          <strong>Georgia:</strong> the county Board of Tax Assessors values
          property at market as of January 1 and applies the statewide 40%
          ratio; the county Tax Commissioner bills and collects, and the
          levying authorities set the millage (with a rollback mechanism when
          reassessment inflates the digest).
        </li>
        <li>
          <strong>Maryland:</strong> the assessment is made by the STATE —
          SDAT values every parcel at 100% of market and certifies the values
          — while the counties set the rates and mail the bills. The appeal
          bodies are also state-appointed: the Supervisor, the county PTAAB,
          and the Maryland Tax Court.
        </li>
        <li>
          <strong>Indiana:</strong> the county and township assessors value
          with annual adjustment; the state DLGF approves each county&rsquo;s
          ratio study and converts local budgets into tax rates, and the
          circuit-breaker caps are applied on the bill itself.
        </li>
        <li>
          <strong>Washington:</strong> the county assessor values at 100% of
          market, but the limit that shapes the bill is the LEVY limit — each
          taxing district&rsquo;s dollars may grow by about 1% a year, so your
          bill can rise even when your assessment falls.
        </li>
        <li>
          <strong>New Jersey:</strong> the municipal assessor values as of
          October 1 of the prior year and the county boards and Tax Court
          decide appeals on a statewide Division-set calendar; the certified
          average ratio drives the Chapter 123 band on top.
        </li>
        <li>
          <strong>Minnesota:</strong> the county assessor sets value and
          classification as of January 2 for the FOLLOWING year&rsquo;s taxes;
          local boards (city councils) and the county board hold the appeal
          meetings, and the class rates set by law do the distributional work
          no cap does elsewhere.
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
        Because the caps in these nineteen states do not limit the same quantity.
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
        <li>
          <strong>Michigan</strong> limits <em>taxable value</em> to the change
          in the rate of inflation or 5 percent, whichever is less — but through a
          formula whose other terms are part of the cap: the prior year&rsquo;s
          taxable value less losses, multiplied by an inflation rate multiplier
          that cannot exceed 1.05, plus additions. And the limit is removed
          entirely for a year by a transfer of ownership, so a Michigan          increase of more than 5 percent is often the rule working rather than failing.
        </li>
        <li>
          <strong>Ohio</strong>, <strong>North Carolina</strong>,{" "}
          <strong>Massachusetts</strong> and <strong>Virginia</strong> have no
          percentage cap on a property&rsquo;s value at all — which is itself
          the answer to &ldquo;is my increase over the limit?&rdquo;: there is
          no limit. Ohio taxes a fixed 35% of true value on a county
          revaluation calendar, North Carolina holds values from revaluation
          to revaluation (at least every eight years), Massachusetts limits
          the municipal levy rather than the assessment, and Virginia
          assesses at 100% of fair market value with procedural protections
          instead. In these states the useful question is not &ldquo;over the
          cap?&rdquo; but &ldquo;does this value reflect market value as of
          the date the law set?&rdquo; — and the appeal routes differ
          accordingly. New York and Georgia belong in this group too: New
          York&rsquo;s honest comparison is the assessment against the
          market-value estimate on the same roll (the uniform percentage makes
          raw year-over-year numbers meaningless across towns), and Georgia
          reassesses at market every January 1 with no cap — its offset is
          that the county carries the burden of proof when it changed your
          value. Maryland limits the <em>taxable assessment</em> of a
          principal residence to 10% a year via the homestead credit (on top
          of a three-year phase-in), and Indiana limits the <em>bill</em> to
          1%, 2% or 3% of gross assessed value by property class — two more
          answers to &ldquo;what does the cap actually touch?&rdquo; Washington
          belongs with Indiana in limiting the money rather than a value — its
          101% levy limit bounds what each district collects, not what your
          property is worth. New Jersey has no value cap but polices the
          assessment <em>ratio</em> through the Chapter 123 band (±15% around
          the certified average), and Minnesota has no cap anywhere — class
          rates set by law distribute the levy instead.
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
        puts all nineteen side by side.
      </p>

      <h2>Should I check my own numbers before hiring anyone?</h2>
      <p>
        Yes, and it is free. Our{" "}
        <Link href="/property-tax-checker/">assessment checker</Link> works where
        the rule can be tested arithmetically from the numbers on your notice —
        in <Link href="/property-tax-checker/">Texas</Link> and{" "}
        <Link href="/florida-property-tax/checker/">Florida</Link> today. The two
        ask for different figures, because the limitations attach to different
        ones: the appraised value in Texas, the assessed value in Florida. It is
        deliberately not offered for California,
        Arizona, Nevada or Oregon, because the check those states need cannot be
        made by comparing one year to the next: California measures against a
        base year value, Arizona measures the limited property value while you
        appeal the full cash value, Nevada caps the tax bill rather than any
        value at all, and Oregon caps the maximum assessed value while the tax
        base is the lower of that limit or the real market value. It is not
        offered for Ohio, North Carolina, Massachusetts, Virginia, New York,
        Georgia, Maryland, Indiana, Washington, New Jersey or Minnesota either,
        for a simpler reason: none of
        those states has a percentage cap on a value that a two-notice screen
        could test (Maryland&rsquo;s 10% cap works through a credit on a
        phased-in assessment, Indiana caps the bill against a value, not a
        change, Washington limits the levy rather than any value, New
        Jersey&rsquo;s test turns on the district&rsquo;s certified ratio, and
        Minnesota has no cap at all). Each of those state
        pages explains the limit — or the absence of one — rather than offering
        an answer that would be wrong.
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
        <li>
          <Link href="/ohio-property-tax/">Ohio property tax</Link> — the 35%
          ratio, the six-year reappraisal cycle, and the DTE Form 1 complaint
          window.
        </li>
        <li>
          <Link href="/north-carolina-property-tax/">
            North Carolina property tax
          </Link>{" "}
          — the revaluation cycle, the Board of Equalization and Review, and
          the 30-day Property Tax Commission appeal.
        </li>
        <li>
          <Link href="/massachusetts-property-tax/">
            Massachusetts property tax
          </Link>{" "}
          — the first-actual-bill abatement deadline, the three-month deemed
          denial, and the Appellate Tax Board.
        </li>
        <li>
          <Link href="/virginia-property-tax/">Virginia property tax</Link> —
          the 100%-of-market-value standard, the 15-day notice, and the de
          novo circuit court appeal.
        </li>
        <li>
          <Link href="/new-york-property-tax/">New York property tax</Link> —
          the uniform percentage of market value, the July 1 valuation date,
          Grievance Day and the 30-day judicial-review window.
        </li>
        <li>
          <Link href="/georgia-property-tax/">Georgia property tax</Link> —
          the annual market standard with the 40% ratio, the 45-day appeal
          window with a declared method, and the Bill of Rights.
        </li>
        <li>
          <Link href="/maryland-property-tax/">Maryland property tax</Link> —
          the state-run assessment, the triennial cycle with the three-year
          phase-in, and the 45-30-30 day appeal ladder.
        </li>
        <li>
          <Link href="/indiana-property-tax/">Indiana property tax</Link> —
          annual adjustment, the Form 130 appeal with the 5% burden shift, and
          the circuit-breaker caps.
        </li>
        <li>
          <Link href="/washington-property-tax/">Washington property tax</Link> —
          the levy limit, the July 1 / 30-day Board of Equalization deadline,
          and the Board of Tax Appeals.
        </li>
        <li>
          <Link href="/new-jersey-property-tax/">New Jersey property tax</Link> —
          the April 1 deadline and its variants, and the Chapter 123 common
          level range.
        </li>
        <li>
          <Link href="/minnesota-property-tax/">Minnesota property tax</Link> —
          the assessment-to-payable-year lag, the board-meeting appeal
          deadlines, and the direct Tax Court route.
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
          "wa-dor-levy-limit",
          "wa-bta-how-to-file",
          "nj-dor-lpt-appeal",
          "mn-dor-appealing",
          "mn-dor-understanding",
          "mn-tax-court-home",
          "mn-anoka-appeal",
        ]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/maryland-property-tax/",
  title: "Maryland Property Tax",
  description:
    "How Maryland property tax works: the only state-run assessment system, 100% of market value on a triennial cycle with a three-year phase-in, the 45-30-30 day appeal ladder from the Supervisor to the Maryland Tax Court, and the 10% homestead cap.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Maryland",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Maryland Property Tax" }]}
    >
      <h1>Maryland Property Tax</h1>

      <p>
        Maryland is <strong>the only state where the assessment process is
        centralized at the state level</strong>. The State Department of
        Assessments and Taxation (<strong>SDAT</strong>) appraises every parcel
        at <strong>100% of market value</strong> and certifies the values to
        the counties; the counties and Baltimore City set their own rates on
        top and mail the bills. Real property is reassessed on a{" "}
        <strong>three-year cycle</strong>, increases are{" "}
        <strong>phased in over three years</strong>, and the appeal ladder —
        <strong> 45 days, then 30, then 30</strong> — runs from the local
        Supervisor all the way to the Maryland Tax Court.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/maryland-property-tax/triennial-cycle/">
            The triennial cycle and the phase-in
          </Link>{" "}
          — how one-third of each county is reassessed every year, and why a
          $30,000 increase raises your taxable assessment by only $10,000 a
          year.
        </li>
        <li>
          <Link href="/maryland-property-tax/notice-of-assessment/">
            The Notice of Assessment explained
          </Link>{" "}
          — what arrives in late December, the old and new values it shows,
          and the date of finality it creates.
        </li>
        <li>
          <Link href="/maryland-property-tax/appeal-ladder/">
            The appeal ladder: 45 days, 30 days, 30 days
          </Link>{" "}
          — the Supervisor, the county PTAAB, and the Maryland Tax Court,
          including the petition for review and the 60-day new-owner window.
        </li>
        <li>
          <Link href="/maryland-property-tax/homestead-cap/">
            The 10% homestead cap
          </Link>{" "}
          — the Homestead Property Tax Credit every county must offer, its
          eligibility rules, and why you apply once, not yearly.
        </li>
        <li>
          <Link href="/maryland-property-tax/deadlines/">
            Maryland property tax deadlines
          </Link>{" "}
          — the assessment cycle, all three appeal windows, the homestead
          application and the July/August billing season.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>SDAT</strong> (state) values all real and personal property,
          runs the triennial reassessment, and directs the major tax-credit
          programs.
        </li>
        <li>
          <strong>The Supervisor of Assessments</strong> in each county (and
          Baltimore City) mails the notices, holds first-level hearings, and
          receives petitions for review.
        </li>
        <li>
          <strong>The county Property Tax Assessment Appeals Board
          (PTAAB)</strong> is the second-level citizen board.
        </li>
        <li>
          <strong>The Maryland Tax Court</strong> is the top administrative
          level — appointed judges, no filing fee, and pro se representation
          is expressly allowed.
        </li>
        <li>
          <strong>Local governments</strong> set the rates, send the bills in
          July or August, and collect.
        </li>
      </ul>

      <h2>The shape of a reassessment</h2>
      <p>
        Each county is divided into three reassessment regions, so about{" "}
        <strong>one-third of the properties</strong> in every jurisdiction are
        reviewed each year. A reassessment year brings a Notice of Assessment
        — typically mailed in <strong>late December</strong> for a{" "}
        <strong>January 1 date of finality</strong> — showing both the old and
        the new value. An <strong>increase is phased in over three
        years</strong>: the state&rsquo;s own example has a $30,000 increase
        adding $10,000 per year to the old value. A decrease takes effect in
        full at once.
      </p>
      <p>
        Two consequences matter before you argue about a number. First, the
        notice value is not the bill: the phase-in spreads the change, and the
        <Link href="/maryland-property-tax/homestead-cap/">
          {" "}homestead cap{" "}
        </Link>
        further limits what the tax can do. Second, the two{" "}
        <em>non</em>-reassessment years are not dead years — a{" "}
        <strong>petition for review</strong> can be filed in any of them (see
        the <Link href="/maryland-property-tax/appeal-ladder/">
          appeal ladder
        </Link>
        ).
      </p>

      <h2>Finding your property</h2>
      <p>
        Maryland has what most states on this site lack: a{" "}
        <strong>single statewide official property search</strong>. The{" "}
        <a
          href="https://sdat.dat.maryland.gov/RealProperty/Pages/default.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          SDAT Real Property Data Search
        </a>{" "}
        covers every county and Baltimore City (search is by county plus
        address or account — owner-name search is deliberately not offered).
        It is also where the homestead eligibility and phase-in data can be
        checked.
      </p>

      <h2>What this does not cover</h2>
      <p>
        County-specific procedures, Baltimore City&rsquo;s local variations,
        and the tax-credit programs that sit outside the assessment process
        are not covered here in detail. AssessCheck has no data connection to
        SDAT or any county finance office.
      </p>

      <SourceList
        sourceIds={[
          "md-tax-court-procedures",
          "md-archives-sdat-functions",
          "md-montgomery-homestead",
          "md-sdat-real-property-search",
          "md-sdat-appeal-form",
        ]}
      />
    </PageShell>
  );
}

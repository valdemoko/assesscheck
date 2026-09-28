import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";
import { getCounty } from "@/lib/data/counties";

export const metadata: Metadata = buildMetadata({
  path: "/texas/dallas-county/",
  // Same naming logic as Harris County: name what the searcher asks about
  // (DCAD, Dallas County appraisal) and frame it as a guide, so it neither
  // competes with a tool page nor impersonates the agency.
  title: "Dallas County Property Tax & DCAD Appraisal Guide",
  description:
    "AssessCheck's independent guide to Dallas County property taxes: what DCAD does, how your appraisal is set, the official DCAD property search, protest deadlines, and links to every official resource.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Dallas County",
});

export default function DallasCountyPage() {
  const county = getCounty("dallas-county");
  const txDeadlines = getDeadlines("texas");
  const localIds = new Set<string>([
    "dcad-property-search",
    "dcad-about",
  ]);
  txDeadlines.forEach((d) => d.sources.forEach((s) => localIds.add(s.sourceId)));
  if (county) county.sources.forEach((s) => localIds.add(s.sourceId));

  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { label: "Texas" },
        { label: "Dallas County" },
      ]}
    >
      <h1>Dallas County Property Tax Assessment</h1>
      <p>
        Dallas County property values are determined by the Dallas Central
        Appraisal District (DCAD), the appraisal district responsible for
        appraising property across the county for the taxing units that serve
        it. Texas statewide rules — the same statutes and deadlines described in
        our <Link href="/texas-property-tax/">Texas property tax section</Link>{" "}
        — govern what DCAD does; this page is the Dallas County starting point.
      </p>

      <h2>What this page is — and is not</h2>
      <p>
        This is an independent guide published by AssessCheck. It explains how
        Dallas County appraisal and property tax works and links to official
        sources. AssessCheck is <strong>not</strong> DCAD and not affiliated
        with any government agency: we do not keep property records, cannot
        look up an individual account, do not issue tax bills, and do not set
        values. Your official records live with DCAD, and the links below take
        you there directly.
      </p>

      <h2>What DCAD determines (and what it does not)</h2>
      <p>
        Like every Texas appraisal district, DCAD discovers and appraises
        property for ad valorem tax purposes and prepares the appraisal roll for
        its taxing units. It does not set tax rates and does not collect
        property taxes — the taxing units and the county tax offices do that.
        Value disputes go to DCAD and the Appraisal Review Board (ARB); rate
        and billing questions go to your taxing units.
      </p>

      <h2>Protests in Dallas County</h2>
      <p>
        The statewide protest deadline applies, and DCAD states it with two
        details worth noting: the protest must be filed by{" "}
        <strong>
          May 15, or no later than 30 days after DCAD delivers your Notice of
          Appraised Value, whichever is later
        </strong>{" "}
        — and if that date falls on a weekend or holiday, the deadline is the{" "}
        <strong>first business day after</strong> it. If you mail the protest,
        it must be <strong>postmarked by the deadline date</strong>.
      </p>
      <p>
        DCAD accepts protest filings through <strong>uFile</strong>, its online
        protest system, beginning April 15, or in written form — the district
        states that protests are <em>not</em> accepted by fax or email. uFile
        allows only one protest per account, so an owner with several accounts
        who wants them scheduled together must file by mail or in person. See
        our <Link href="/texas-property-tax/protest/how-it-works/">protest
        process</Link> and{" "}
        <Link href="/texas-property-tax/protest/deadlines/">deadlines</Link>{" "}
        pages for the statewide rules behind all of this.
      </p>

      <h2>Key dates for the current tax year</h2>
      <ul>
        {txDeadlines
          .filter((d) =>
            ["protest-filing", "exemption-application", "payment"].includes(
              d.deadlineType
            )
          )
          .map((d) => (
            <li key={d.deadlineId}>
              <strong>
                {d.deadlineType === "protest-filing"
                  ? "Protest filing: "
                  : d.deadlineType === "exemption-application"
                    ? "Exemption application: "
                    : "Tax payment: "}
              </strong>
              {d.rule} <em>(verified {d.lastVerifiedDate})</em>
            </li>
          ))}
      </ul>
      <p>
        Dallas-specific dates — such as when the DCAD ARB begins hearing
        protests — appear on your notice of appraised value and on DCAD's
        official site. We link to DCAD rather than restating those dates,
        because we cannot verify a local calendar daily.
      </p>

      <h2>Official property information (DCAD)</h2>
      <p>
        DCAD's official Search Appraisals service lets you look up a property{" "}
        <strong>by owner name</strong>, <strong>by account number</strong>,{" "}
        <strong>by street address</strong> (including address-range search),{" "}
        <strong>by business name</strong>, or <strong>on a map</strong>. The
        search — and the values and parcel details it returns — is an official
        DCAD service; AssessCheck does not host or mirror it. DCAD also notes
        that the residence homestead exemption application form is available
        from the account details page of a property you look up.
      </p>
      <p>
        <a
          className="button"
          href="https://www.dallascad.org/searchaddr.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Official DCAD property search →
        </a>
      </p>

      <h2>Evidence and hearing preparation</h2>
      <p>
        Dallas County ARB hearings follow the adopted procedures described on
        our <Link href="/texas-property-tax/protest/arb-hearing/">ARB hearing
        page</Link>. Build your evidence with the{" "}
        <Link href="/evidence/property-tax-protest-evidence/">evidence
        guide</Link>, and screen candidate comparables with our{" "}
        <Link href="/comparables/">comparable-properties methodology</Link>.
      </p>

      <h2>Methodology and update date</h2>
      <p>
        This page reflects DCAD and Comptroller sources verified on September
        28, 2026. See our <Link href="/methodology/">methodology</Link> and{" "}
        <Link href="/corrections/">corrections</Link> policies. DCAD-specific
        procedures beyond what DCAD's own pages state have not been verified and
        are not presented here.
      </p>

      <SourceList sourceIds={[...localIds]} />
    </PageShell>
  );
}

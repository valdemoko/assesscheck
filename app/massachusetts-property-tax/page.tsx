import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/massachusetts-property-tax/",
  title: "Massachusetts Property Tax",
  description:
    "How Massachusetts property tax works: municipal assessors under Proposition 2½, the abatement application due with the first actual tax bill, the three-month deemed denial, and the Appellate Tax Board.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Massachusetts",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[{ href: "/", label: "Home" }, { label: "Massachusetts Property Tax" }]}
    >
      <h1>Massachusetts Property Tax</h1>

      <p>
        Massachusetts runs property tax through its{" "}
        <strong>351 cities and towns</strong>: the municipal board of
        assessors values property and sets the rate within the levy limit
        of <strong>Proposition 2&frac12;</strong>, supervised by the state
        Department of Revenue. The abatement structure has a feature no
        other state on this site has: the deadline is anchored to the{" "}
        <strong>first <em>actual</em> tax bill</strong>, and if the
        assessors never answer your application,{" "}
        <strong>the law denies it for them</strong> after three months.
      </p>

      <h2>In this section</h2>
      <ul>
        <li>
          <Link href="/massachusetts-property-tax/proposition-2-5/">
            Proposition 2&frac12; and municipal assessment
          </Link>{" "}
          — the levy limit, the DOR&rsquo;s three-year certification cycle,
          and who actually values your property.
        </li>
        <li>
          <Link href="/massachusetts-property-tax/abatement-process/">
            The abatement process and the Appellate Tax Board
          </Link>{" "}
          — the first-actual-bill deadline, Form 128, the deemed denial,
          and the payment precondition.
        </li>
        <li>
          <Link href="/massachusetts-property-tax/deadlines/">
            Massachusetts property tax deadlines
          </Link>{" "}
          — the fiscal-year calendar, quarterly billing, and the three
          three-month counts that run the process.
        </li>
      </ul>

      <h2>Who does what</h2>
      <ul>
        <li>
          <strong>The city or town board of assessors</strong> values every
          parcel and sets the rate within the levy limit — value and rate
          live in the same municipality, which is unusual on this site.
        </li>
        <li>
          <strong>The Department of Revenue&rsquo;s Bureau of Local
          Assessment</strong> supervises municipal assessing and certifies
          each municipality&rsquo;s values once every three years.
        </li>
        <li>
          <strong>The collector</strong> mails the bills (quarterly in most
          municipalities) and receives the payments whose timeliness can
          decide an appeal.
        </li>
        <li>
          <strong>The Appellate Tax Board (ATB)</strong> is the state body
          that hears abatement appeals from the assessors&rsquo;
          decisions.
        </li>
      </ul>

      <h2>The deadline that runs on the bill, not a notice</h2>
      <p>
        Most states on this site anchor the appeal to a value notice.
        Massachusetts anchors it to the <strong>first actual tax bill of
        the fiscal year</strong> — with quarterly billing, that is the
        <strong> third quarterly bill, usually February 1</strong>. The
        abatement application (State Tax Form 128) must be filed by that
        date even while an informal discussion with the assessors is under
        way — and the tax must be <strong>paid on time</strong>, because
        late payment can forfeit the appeal rights. The{" "}
        <Link href="/massachusetts-property-tax/abatement-process/">
          abatement page
        </Link>{" "}
        walks the process.
      </p>

      <h2>The deemed denial</h2>
      <p>
        The assessors have <strong>three months</strong> to act on an
        application (extendable in writing). If they neither grant nor
        deny within that period, the application is{" "}
        <strong>deemed denied</strong> — the owner does not wait for a
        letter that never comes, and the three-month clock to the
        Appellate Tax Board starts running on its own. This is the
        second distinctive mechanism in the Massachusetts system: the
        appeal clock runs whether or not the municipality does.
      </p>

      <h2>What this does not cover</h2>
      <p>
        Residential exemptions (the up-to-50%-of-value local option),
        personal property, tax-deferral and exemption programs for
        seniors and veterans, and chapter land are outside this section.
        AssessCheck has no data connection to any Massachusetts
        municipality or the Department of Revenue. mass.gov and
        malegislature.gov were not readable when these pages were
        verified, so statute sections are named only where an official
        page names them.
      </p>

      <SourceList
        sourceIds={["ma-cis-abatement", "ma-dor-bla"]}
      />
    </PageShell>
  );
}

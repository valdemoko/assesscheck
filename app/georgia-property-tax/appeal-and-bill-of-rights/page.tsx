import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/georgia-property-tax/appeal-and-bill-of-rights/",
  title: "The Georgia 45-Day Appeal and the Taxpayer's Bill of Rights",
  description:
    "How the Georgia appeal works: PT-311A within 45 days of the notice's mailing, the three declared methods (Board of Equalization, hearing officer, arbitration), the board's burden of proof, the bound grounds, and the 85% fee provision.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Georgia",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/georgia-property-tax/", label: "Georgia Property Tax" },
        { label: "Appeal and Bill of Rights" },
      ]}
    >
      <h1>The 45-Day Appeal and the Taxpayer&rsquo;s Bill of Rights</h1>

      <p>
        Georgia&rsquo;s appeal is unusual twice over. First, the owner{" "}
        <strong>declares the forum</strong> in the initial filing — no
        other state on this site makes the first appellant pick the
        method. Second, the <strong>Taxpayer&rsquo;s Bill of Rights</strong>{" "}
        shifts the burden of proof to the county when the county changed
        the value, binds the board to its stated rejection grounds, and
        attaches <strong>attorney&rsquo;s fees and costs</strong> if the
        final number lands at <strong>85% or less</strong> of the
        appeal-stage value. Both structures are stated on the
        Department&rsquo;s own pages, read in full.
      </p>

      <h2>The filing: PT-311A within 45 days</h2>
      <p>
        The written appeal — on the state&rsquo;s uniform form,{" "}
        <strong>PT-311A</strong> — is filed with the county{" "}
        <strong>Board of Tax Assessors</strong> within{" "}
        <strong>45 days of the date the Assessment Notice was
        mailed</strong>. The Department&rsquo;s PT-311A page states the
        window and its consequence plainly: missing it{" "}
        <strong>forfeits the appeal rights</strong>. Email filing works
        only where the board has adopted an electronic-submission
        policy; otherwise the form goes in person or by mail.
      </p>
      <p>
        The appeal may be based on <strong>taxability, value,
        uniformity, and/or a denied exemption</strong> — uniformity
        (your value against similar properties&rsquo;) is a distinct
        Georgia ground that can win even where your market value is
        defensible.
      </p>

      <h2>Declare your method</h2>
      <p>
        In the initial written dispute the owner must choose one of
        three:
      </p>
      <ul>
        <li>
          <strong>The county Board of Equalization</strong> — the citizen
          board route, no cost, the standard residential choice.
        </li>
        <li>
          <strong>A hearing officer</strong> — available for certain
          larger parcels (non-homestead over $500,000, generally); a
          certified professional hears the matter.
        </li>
        <li>
          <strong>Arbitration</strong> — the owner selects and pays a
          certified arbitrator, and the award is{" "}
          <em>binding</em> — the highest-risk, fastest route.
        </li>
      </ul>
      <p>
        <strong>What this tells you:</strong> the declared method is a
        real strategy decision, made under the 45-day clock. Most
        residential owners choose the Board of Equalization — free,
        local, and reversible into the superior court stage; arbitration
        trades reversibility for speed.
      </p>

      <h2>What the Bill of Rights does in the hearing</h2>
      <ul>
        <li>
          <strong>The board carries the burden</strong> of proving its
          value when it <em>changed</em> the owner&rsquo;s returned value
          — and the burden <strong>stays with the board even into
          superior court</strong>.
        </li>
        <li>
          <strong>The board is bound to its stated grounds:</strong> if
          the assessors reject your appeal, they must state the grounds
          — and they are bound by them thereafter.
        </li>
        <li>
          <strong>One reschedule:</strong> the owner is entitled to a
          one-time reschedule of the hearing without penalty.
        </li>
        <li>
          <strong>The 85% provision:</strong> if the final determination
          lands at <strong>85% or less</strong> of the value in dispute
          at the appeal stage, the owner recovers{" "}
          <strong>costs and reasonable attorney&rsquo;s fees</strong>.
        </li>
      </ul>
      <p>
        <strong>What this tells you:</strong> Georgia&rsquo;s fee
        provision changes the economics of a strong case — an owner with
        solid evidence that the county&rsquo;s number is 15%+ too high
        can pursue the appeal knowing the fee exposure runs the other
        way. It is the only state on this site with that structure.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up figures — your county&rsquo;s
          notice and calendar control.
        </em>
      </p>
      <ol>
        <li>
          <strong>April 10:</strong> the assessment notice mails — value
          raised from $380,000 to $455,000 (+19.7%), so the notice must
          carry the non-technical explanation and the records-access
          right.
        </li>
        <li>
          <strong>April 20:</strong> PT-311A filed declaring the{" "}
          <strong>Board of Equalization</strong>, on value and
          uniformity; the board&rsquo;s 45-day clock (from the mailing
          date) is met with room to spare.
        </li>
        <li>
          <strong>June:</strong> the BOE hearing — the board presents its
          evidence <em>first</em>, carrying the burden; your comparable
          sales answer it.
        </li>
        <li>
          <strong>The outcome:</strong> a final value of $380,000 — 83.5%
          of the $455,000 in dispute — puts you under the{" "}
          <strong>85%</strong> line: costs and fees recoverable.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        The superior court stage (de novo, where the board&rsquo;s burden
        continues), the hearing-officer program&rsquo;s eligibility
        mechanics, and arbitrator certification are outside this page.
        The Department&rsquo;s PT-311A, FAQ, and Bill of Rights pages
        cited below are the authorities for the process.
      </p>

      <SourceList
        sourceIds={["ga-dor-pt311a", "ga-dor-property-faq", "ga-dor-bill-of-rights"]}
      />
    </PageShell>
  );
}

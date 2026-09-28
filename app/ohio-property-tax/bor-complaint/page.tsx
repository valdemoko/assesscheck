import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/ohio-property-tax/bor-complaint/",
  title: "The Ohio DTE Form 1 Complaint to the Board of Revision",
  description:
    "How the Ohio property tax complaint works: DTE Form 1 filed with the county auditor January 1 – March 31, the Board of Revision hearing, the evidence that moves it, and the counter-appeal rule for owners who do not file.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Ohio",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/ohio-property-tax/", label: "Ohio Property Tax" },
        { label: "BOR Complaint" },
      ]}
    >
      <h1>The DTE Form 1 Complaint to the Board of Revision</h1>

      <p>
        The complaint against the valuation of real property —{" "}
        <strong>DTE Form 1</strong> — is Ohio&rsquo;s universal first appeal.
        It is filed with the <strong>county auditor</strong> (the same office
        that valued the property) for hearing by the county{" "}
        <strong>Board of Revision (BOR)</strong>, in a fixed seasonal
        window: <strong>January 1 through March 31 of the following tax
        year</strong> — or the <strong>last day to pay first-half taxes</strong>{" "}
        where that date is earlier, an alternative cutoff the official form
        states on its face.
      </p>

      <h2>The window, in practice</h2>
      <p>
        The window is anchored to the <em>tax year</em>, not to a notice:
        complaints about <strong>tax year 2026</strong> values are accepted{" "}
        <strong>through March 31, 2027</strong> — Franklin County&rsquo;s
        Board of Revision page states exactly that, and confirms{" "}
        <strong>electronic filing through the Board of Tax Appeals
        portal</strong> alongside the county&rsquo;s own channels. Your own
        county auditor publishes the same rule with your county&rsquo;s
        details.
      </p>
      <p>
        <strong>What this tells you:</strong> Ohio&rsquo;s complaint season
        is a single winter–spring window for the tax year just billed.
        There is no notice-triggered deadline to track — the calendar is
        the same for every parcel in the county. The flip side: miss
        March 31 and the value stands for the year, with no late route.
      </p>

      <h2>The form and what it asks</h2>
      <ul>
        <li>
          <strong>Your opinion of value</strong> — a specific figure, not a
          complaint about the amount of the tax (taxes themselves are not
          complainable; values are).
        </li>
        <li>
          <strong>The basis for your opinion</strong> — recent arm&rsquo;s-length
          sales, comparable sales, an appraisal, or the property&rsquo;s
          condition.
        </li>
        <li>
          <strong>Parcel identification</strong> and the value as the
          auditor carries it.
        </li>
      </ul>

      <h2>The hearing</h2>
      <p>
        The BOR — typically the county auditor, treasurer, and a
        commissioner — holds a short hearing where you present your
        evidence and the school district (which has a financial interest
        in the roll) may appear and even <strong>counter your evidence
        or seek an increase</strong>. Bring copies of everything you want
        considered; the board&rsquo;s decision is a formal record that
        either side can carry to the{" "}
        <Link href="/ohio-property-tax/bta-appeal/">Board of Tax
        Appeals</Link>.
      </p>
      <p>
        <strong>What this tells you:</strong> the school board&rsquo;s
        presence is not hostility — it is how Ohio&rsquo;s system balances
        the roll — but it does mean a complaint is a real evidentiary
        hearing, not an informal chat. A written file with comparable
        sales and condition evidence is the preparation that matters.
      </p>
      <p>
        <strong>What it does not tell you:</strong> whether the board
        will grant a change. Ohio&rsquo;s boards see a steady stream of
        owner opinions; sales evidence anchored near the lien date is
        what distinguishes a complaint that moves.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up figures — your county&rsquo;s
          dates and channels control.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 2027:</strong> the 2026 tax year bill arrives; the
          true value is $340,000 — you believe $310,000 is right for the
          lien date.
        </li>
        <li>
          <strong>January 15, 2027:</strong> DTE Form 1 filed electronically
          through the BTA portal, with three comparable sales and a
          condition summary.
        </li>
        <li>
          <strong>March 2027:</strong> BOR hearing — the school
          district&rsquo;s representative cross-examines your sales; the
          board reserves decision.
        </li>
        <li>
          <strong>April 2027:</strong> the board&rsquo;s decision mails,
          reducing true value to $318,000. The{" "}
          <Link href="/ohio-property-tax/bta-appeal/">30-day BTA
          window</Link>{" "}
          opens from the mailing.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        Valuation complaints filed by parties other than the owner,
        counter-complaints by taxing districts, and the boards&rsquo;
        local scheduling rules are outside this page. The Department&rsquo;s
        property tax hub and Franklin County&rsquo;s BOR page cited below
        are the authorities for the form and the window.
      </p>

      <SourceList
        sourceIds={["oh-dor-property-tax-hub", "oh-franklin-bor", "oh-bta-appeal-info"]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/massachusetts-property-tax/abatement-process/",
  title: "The Massachusetts Abatement Process and the Appellate Tax Board",
  description:
    "How the Massachusetts abatement works: State Tax Form 128 filed by the first actual bill's due date, the three-month deemed denial, the Appellate Tax Board's three-month window, and the payment precondition for appeals over $5,000.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Massachusetts",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/massachusetts-property-tax/", label: "Massachusetts Property Tax" },
        { label: "Abatement Process" },
      ]}
    >
      <h1>The Abatement Process and the Appellate Tax Board</h1>

      <p>
        Massachusetts appeals property tax by{" "}
        <strong>abatement application</strong> — a petition to your own
        board of assessors — and the structure is built around{" "}
        <strong>three three-month counts</strong> and one deadline that
        runs on the tax bill itself. The Citizen Information
        Service&rsquo;s abatement guide, read in full, is the source for
        all of it; the structure below follows its statements.
      </p>

      <h2>The deadline: the first actual bill</h2>
      <p>
        The abatement application (<strong>State Tax Form 128</strong>)
        must be filed with the board of assessors by the due date of the{" "}
        <strong>first ACTUAL tax bill for the fiscal year</strong>. With
        quarterly billing — the norm — that is the{" "}
        <strong>third quarterly bill, usually February 1</strong>: the
        first two quarterly bills are estimates from the prior year, and
        the third is the first one carrying the year&rsquo;s real
        figures.
      </p>
      <p>
        Two warnings the guide states directly:
      </p>
      <ul>
        <li>
          <strong>File even if you are talking.</strong> An informal
          discussion with the assessors does not extend the deadline —
          the application must be filed anyway.
        </li>
        <li>
          <strong>Pay on time.</strong> Failing to pay the tax when due
          can forfeit the appeal rights — an abatement application is
          not a payment shield.
        </li>
      </ul>

      <h2>Three months to decide — then the law decides</h2>
      <p>
        The assessors have <strong>three months</strong> to act (they may
        extend the period in writing). If they neither grant nor deny
        within three months — or the extended period — the application is{" "}
        <strong>DEEMED DENIED</strong>. Nothing else happens on the
        municipal side; the next step is yours.
      </p>
      <p>
        <strong>What this tells you:</strong> the deemed denial is
        Massachusetts&rsquo;s answer to the silent municipality. You
        never wait on an administrative body that has stopped
        responding — the calendar converts its silence into the decision
        you need to appeal.
      </p>

      <h2>The Appellate Tax Board — and the payment precondition</h2>
      <p>
        An appeal from the assessors&rsquo; decision — or from a deemed
        denial — goes to the <strong>Appellate Tax Board (ATB)</strong>{" "}
        within <strong>three months</strong>. One condition is
        value-dependent: for appeals <strong>over $5,000</strong>, the
        tax (or the portion not being appealed) must have been{" "}
        <strong>paid and be in the collector&rsquo;s hands by the
        bill&rsquo;s due date</strong>. A lower assessed value on its own
        does not satisfy the rule — the money has to have arrived.
      </p>
      <p>
        <strong>What this tells you:</strong> the $5,000 payment rule
        makes <em>paying the bill under protest</em> part of the appeal
        itself in Massachusetts. An owner planning an ATB appeal on a
        large abatement claim pays first and argues second — the reverse
        of states where filing the appeal suspends collection.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up figures — your
          municipality&rsquo;s billing dates control.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 31, 2027:</strong> the third quarterly bill (the
          first actual bill of FY2027) is due February 1 — your Form 128
          goes in January 31, with the payment.
        </li>
        <li>
          <strong>March 2027:</strong> the assessors hold an informal
          hearing — no decision issues.
        </li>
        <li>
          <strong>May 1, 2027 (three months):</strong> no decision and no
          extension — the application is <em>deemed denied</em>.
        </li>
        <li>
          <strong>By August 1, 2027 (three months from the denial):</strong>{" "}
          ATB appeal filed — with the paid tax in the
          collector&rsquo;s hands, which it was from February.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        The ATB&rsquo;s hearing procedures, abatements of personal
        property, and the residential exemption are outside this page.
        The Citizen Information Service&rsquo;s guide cited below is the
        authority for the deadlines and both three-month rules.
      </p>

      <SourceList sourceIds={["ma-cis-abatement"]} />
    </PageShell>
  );
}

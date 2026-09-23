import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/california-property-tax/assessment-appeal/",
  title: "Filing a California Assessment Appeal (Application for Changed Assessment)",
  description:
    "How a California assessment appeal works: the BOE-305-AH application filed with the clerk of the board, what the appeals board can decide (including raising your value), stipulations, and judicial review.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "California",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/california-property-tax/", label: "California Property Tax" },
        { label: "Assessment Appeal" },
      ]}
    >
      <h1>Filing a California Assessment Appeal</h1>

      <p>
        In California the challenge is called an{" "}
        <strong>application for changed assessment</strong>. It is filed with the
        clerk of your county&rsquo;s board of supervisors or assessment appeals
        board on <strong>form BOE-305-AH</strong> — not with the assessor, and not
        in the form of a letter. Three features of this process are regularly
        left out of unofficial guides, and each one can decide the outcome.
      </p>

      <h2>The three features that are usually omitted</h2>
      <ol>
        <li>
          <strong>The board can raise your value.</strong> The board determines
          the value from the evidence; it is not bound by the assessor&rsquo;s
          opinion or by yours, and it may leave the value, lower it, or increase
          it.
        </li>
        <li>
          <strong>Missing the hearing closes the appeal.</strong> If you or your
          representative do not appear, the application is denied for
          nonappearance and a notice of denial is mailed. Some boards allow a
          written request for reconsideration within a set number of days —
          typically 30 to 60, never more than 60 — and grant it only for
          extraordinary circumstances.
        </li>
        <li>
          <strong>The board cannot fix what you may actually be angry about.</strong>{" "}
          It has no authority to reduce an assessment because of value or tax
          increases from prior years, to grant or deny exemptions, to reduce
          taxes because of an inability to pay, or to direct how tax money is
          spent.
        </li>
      </ol>

      <h2>How the process runs</h2>
      <ol>
        <li>
          <strong>Talk to the assessor first — informally.</strong> The BOE
          advises contacting the county assessor before filing. Many assessors
          accept a short informal review form with your supporting data, and may
          agree with you; that resolves the matter without a hearing.
        </li>
        <li>
          <strong>File the application in the window.</strong> The regular
          filing window opens July 2 and closes on your county&rsquo;s date
          (September 15 or November 30 — see{" "}
          <Link href="/california-property-tax/deadlines/">deadlines</Link>). The
          form must be the one your county uses, obtained from the clerk of the
          board; some counties charge a filing or processing fee.
        </li>
        <li>
          <strong>Consider an exchange of information.</strong> Either party may
          request it — at least 30 days before the hearing, with the other party
          responding at least 15 days before. It is the mechanism that forces the
          assessor to state its opinion of value and the data behind it, and once
          it happens the hearing evidence is largely limited to what was
          exchanged.
        </li>
        <li>
          <strong>Wait for the hearing notice.</strong> It is mailed at least 45
          days before the hearing. The law allows up to two years to resolve an
          application; if yours is not heard within two years, your opinion of
          value may temporarily become the taxable value until the board decides.
        </li>
        <li>
          <strong>Present your evidence at the hearing.</strong> What you sent
          the assessor earlier is not evidence unless it is presented then (see{" "}
          <Link href="/california-property-tax/appeal-evidence/">evidence</Link>
          ).
        </li>
        <li>
          <strong>Pay your taxes on time regardless.</strong> A pending appeal
          does not postpone the November 1 / February 1 installments. A reduction
          produces a refund with interest; non-payment produces penalties either
          way.
        </li>
      </ol>

      <h2>A stipulation can end it without a hearing</h2>
      <p>
        If you and the assessor agree on a value after the application is filed
        but before the hearing, the matter is resolved by a{" "}
        <strong>stipulation</strong>: a written agreement signed by the county
        assessor, the county legal officer and you (or your agent) that sets out
        the full and assessed values and the facts the reduction rests on. You
        still need to appear at the hearing unless the stipulation is properly
        signed — which is why the BOE warns that agreement alone is not enough.
      </p>

      <h2>If you disagree with the outcome</h2>
      <p>
        The appeals board&rsquo;s decision is final. The only route is a
        challenge filed in the <strong>superior court of your county within six
        months</strong> of the decision. There is no intermediate administrative
        appeal in California — which is a real difference from Texas (ARB, then
        district court or arbitration) and Florida (VAB, then circuit court).
      </p>

      <h2>Representation</h2>
      <p>
        You may represent yourself. If someone other than you, your spouse, your
        child, your parent or a California-licensed attorney will appear for you,
        you must sign a written authorization before the hearing. An authorized
        agent may be a corporation or entity rather than a named individual, but
        the authorization block on the application itself must be signed by the
        applicant (or an officer or authorized employee of the applicant) — if
        the agent signs it, the application is invalid.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence, not advice about your property or your county.
        </em>
      </p>
      <ol>
        <li>
          <strong>July 2:</strong> the filing window opens. You send the assessor
          an informal review request with three comparable sales.
        </li>
        <li>
          <strong>August:</strong> the assessor declines to change the value. You
          file BOE-305-AH with the clerk of the board before your county&rsquo;s
          deadline.
        </li>
        <li>
          <strong>~30 days before the hearing:</strong> you request an exchange
          of information; the assessor must state its opinion of value and its
          data, and you must state yours.
        </li>
        <li>
          <strong>Hearing:</strong> you present the comparables and the
          assessor&rsquo;s exchanged data. The board may reduce, confirm, or
          increase the value, and it must state the value it determines.
        </li>
        <li>
          <strong>After:</strong> if you disagree, a superior court challenge
          within six months of the decision — and the refund, if any, comes back
          with interest because you kept paying on time.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the two things you control are
        filing inside the window with your county&rsquo;s form, and appearing at
        the hearing with evidence.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s exact
        filing date and fee, whether a hearing officer or the full board will
        hear you (counties differ, and a hearing officer&rsquo;s decision may be
        binding or a recommendation depending on the county&rsquo;s rules), or
        what your property is worth.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/california-property-tax/appeal-evidence/">
            Evidence for an assessment appeal
          </Link>{" "}
          — the 90-day comparable rule, the exchange of information, and the
          burden of proof.
        </li>
        <li>
          <Link href="/california-property-tax/proposition-13-and-8/">
            Proposition 13 and Proposition 8
          </Link>{" "}
          — what the board is actually measuring your value against.
        </li>
      </ul>

      <SourceList sourceIds={["ca-boe-appeals-faq", "ca-boe-decline-in-value"]} />
    </PageShell>
  );
}

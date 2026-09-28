import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/indiana-property-tax/form-130-appeal/",
  title: "The Indiana Form 130 Appeal and the 5% Burden Shift",
  description:
    "How the Indiana property tax appeal works: Form 130 within 45 days, acceptable evidence without an appraisal, the 5% burden shift to the county, the PTABOA hearing timeline, and the Form 131 route to the Indiana Board of Tax Review.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Indiana",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/indiana-property-tax/", label: "Indiana Property Tax" },
        { label: "Form 130 Appeal" },
      ]}
    >
      <h1>The Indiana Form 130 Appeal and the 5% Burden Shift</h1>

      <p>
        An Indiana appeal is initiated with <strong>Form 130 — the
        Taxpayer&rsquo;s Notice to Initiate an Appeal</strong> — a form the
        DLGF prescribes statewide, filed with the local (county or township)
        assessor within <strong>45 days</strong> of the notice date. What
        makes Indiana&rsquo;s process distinctive is not the form but a
        burden-of-proof rule no other state on this site has:{" "}
        <strong>if the assessment rose more than 5% over the prior year, the
        county has to prove the value — not you</strong>.
      </p>

      <h2>The process, step by step</h2>
      <ol>
        <li>
          <strong>File Form 130</strong> with the local assessor within 45
          days of the notice-of-assessment date (or the bill-based window —
          see the{" "}
          <Link href="/indiana-property-tax/annual-adjustment/">
            annual adjustment page
          </Link>
          ). No fee is mentioned in the state&rsquo;s materials.
        </li>
        <li>
          <strong>The informal meeting.</strong> The process is designed to
          start with a meeting with the assessor — many appeals end here,
          with a corrected characteristic or an agreed value.
        </li>
        <li>
          <strong>The PTABOA hearing.</strong> Unresolved appeals go to the
          county <strong>Property Tax Assessment Board of Appeals
          (PTABOA)</strong>, which must <strong>hold a hearing within 180
          days</strong> and <strong>issue its determination within 120 days
          of the hearing</strong>. A $50 penalty can attach for missing the
          appearance, continuance, or withdrawal procedures.
        </li>
        <li>
          <strong>Form 131 — the Indiana Board of Tax Review.</strong> If you
          are dissatisfied with the PTABOA&rsquo;s decision —{" "}
          <em>or</em> if the board never held its hearing within 180 days or
          never determined within 120 days of the hearing — you may appeal to
          the Indiana Board of Tax Review (IBTR) on Form 131. From the Board,
          review continues to the <strong>Indiana Tax Court</strong> and then
          the <strong>Indiana Supreme Court</strong>.
        </li>
      </ol>
      <p>
        Note the middle of that list: Indiana turns the board&rsquo;s own
        missed deadlines into your right to move up immediately. A PTABOA
        that lets the calendar lapse does not stall your appeal — it
        accelerates it.
      </p>

      <h2>What counts as evidence (an appraisal is not required)</h2>
      <p>
        The state&rsquo;s own appeal FAQ lists the acceptable evidence, and
        the list is broader than most owners expect:
      </p>
      <ul>
        <li>
          <strong>The sale of the subject property</strong> — your own
          purchase, if recent, is direct evidence of value.
        </li>
        <li>
          <strong>Comparable sales</strong> of similar properties.
        </li>
        <li>
          <strong>Listings and offers to purchase</strong> — not just closed
          sales.
        </li>
        <li>
          <strong>A professional appraisal</strong> — acceptable, but{" "}
          <strong>Indiana law does not require one</strong>.
        </li>
      </ul>
      <p>
        <strong>What this tells you:</strong> the evidence gate in Indiana is
        unusually low. An owner with their own closing statement and three
        neighborhood sales has a complete evidentiary package under the
        state&rsquo;s own list; no expert is required by law.
      </p>
      <p>
        <strong>What it does not tell you:</strong> how much weight each kind
        of evidence carries at a PTABOA hearing (boards differ), and how the
        evidence interacts with the burden — if the county carries the burden
        after a 5%+ increase, your evidence answers theirs rather than
        carrying your case alone.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative scenario with made-up figures — not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> assessment rose from $240,000 to $262,000
          (+9.2%) after the annual adjustment; Form 11 dated April 10, 2027.
        </li>
        <li>
          <strong>Step — the shift:</strong> +9.2% exceeds 5%, so at the
          PTABOA the <em>county</em> must prove the $262,000. Your
          preparation focuses on their evidence, not on proving a number
          yourself.
        </li>
        <li>
          <strong>Step — your file:</strong> your own purchase 18 months ago
          at $250,000, plus two comparable sales at $248,000 and $255,000 —
          complete under the state&rsquo;s evidence list, no appraisal
          needed.
        </li>
        <li>
          <strong>Step — the clock:</strong> appeal filed by May 25, 2027
          (45 days). The PTABOA must hear within 180 days and decide within
          120 days of the hearing; any lapse opens the Form 131 route.
        </li>
      </ol>

      <h2>What this page does not cover</h2>
      <p>
        The PTABOA&rsquo;s local hearing rules, business personal property
        appeals (which use a different track), and judicial practice at the
        Indiana Tax Court are outside this page. The state FAQ cited below is
        the authority for the process, evidence, and burden rules.
      </p>

      <SourceList
        sourceIds={["in-faqs-appeal", "in-dlgf-form130-flowchart"]}
      />
    </PageShell>
  );
}

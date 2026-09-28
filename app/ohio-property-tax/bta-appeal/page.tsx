import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/ohio-property-tax/bta-appeal/",
  title: "Beyond the Ohio Board of Revision: the Board of Tax Appeals",
  description:
    "The Ohio Board of Tax Appeals: the 30-day window from a Board of Revision decision, the dual-filing requirement, the small claims docket for residential appeals, and what review beyond the BTA looks like.",
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
        { label: "BTA Appeal" },
      ]}
    >
      <h1>Beyond the Board of Revision: the Board of Tax Appeals</h1>

      <p>
        A county <strong>Board of Revision</strong> decision is not the end
        of an Ohio appeal. The state&rsquo;s{" "}
        <strong>Board of Tax Appeals (BTA)</strong> — a statewide body in
        Columbus — hears BOR appeals, and its own filing information states
        the two rules owners most need to know: a{" "}
        <strong>30-day window</strong> and a{" "}
        <strong>dual-filing requirement</strong>.
      </p>

      <h2>The 30-day window — and filing in two places</h2>
      <p>
        The notice of appeal must be filed <strong>within 30 days of the
        decision being mailed</strong> — and, unusually, it must be filed{" "}
        <strong>with both the Board of Tax Appeals and the county Board of
        Revision</strong>. Filing with the BTA alone does not perfect the
        appeal; the county board must receive its copy too. Miss either
        copy or the 30 days, and the BOR decision stands.
      </p>
      <p>
        <strong>What this tells you:</strong> the moment a BOR decision
        arrives, calendar two filings and one deadline — BTA copy, county
        copy, both within 30 days of the mailing date. The dual requirement
        is the trap that catches self-represented owners most often.
      </p>

      <h2>The small claims docket</h2>
      <p>
        For residential appeals below the value threshold, the Board runs a{" "}
        <strong>small claims docket</strong> — an informal alternative to
        the standard docket, designed for owner-represented residential
        cases. The election is made at filing, and the trade-offs are the
        usual ones: the small claims track is faster and less formal, but
        its procedures (and what can be appealed onward) differ from the
        standard track. A large-value or evidence-heavy residential case
        may be better on the standard docket despite the formality.
      </p>

      <h2>What the BTA reviews — and what comes next</h2>
      <p>
        The BTA reviews whether the BOR&rsquo;s determination was reasonable
        and lawful on the record and the evidence presented to it — the
        hearing is genuine, not a rubber stamp, and new evidence can be
        taken. From the BTA, further review is judicial: appeal to an
        Ohio court of appeals on questions the statute permits. Each step
        up narrows what is actually in dispute, which is why the evidence
        you present at the{" "}
        <Link href="/ohio-property-tax/bor-complaint/">
          Board of Revision
        </Link>{" "}
        remains the foundation of every later stage.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up dates — the Board&rsquo;s
          current e-filing rules and forms control.
        </em>
      </p>
      <ol>
        <li>
          <strong>April 10, 2027:</strong> the BOR&rsquo;s decision mails,
          holding true value at $318,000 — you believe $310,000.
        </li>
        <li>
          <strong>By May 10, 2027 (30 days):</strong> notice of appeal filed
          with the BTA <em>and</em> a copy with the county BOR — electing
          the small claims docket for a residential-scale dispute.
        </li>
        <li>
          <strong>Late 2027:</strong> small claims hearing (or standard
          docket trial); the Board weighs the same comparable sales the
          BOR saw, plus anything new.
        </li>
        <li>
          <strong>The decision:</strong> a BTA determination either sustains
          the BOR or sets the value itself — subject to judicial review.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the BTA stage is where an
        Ohio appeal stops being local. The value at stake, the strength of
        the sales evidence, and the procedural formality all matter more;
        for most residential owners the small claims election is what
        keeps the step proportionate.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The BTA&rsquo;s rules of practice and evidence, its current
        e-filing portal mechanics, and judicial review standards are
        outside this page. The Board&rsquo;s own filing-information page
        cited below is the authority for the window, the dual filing, and
        the small claims docket.
      </p>

      <SourceList sourceIds={["oh-bta-appeal-info", "oh-franklin-bor"]} />
    </PageShell>
  );
}

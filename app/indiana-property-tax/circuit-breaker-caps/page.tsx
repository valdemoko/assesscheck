import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/indiana-property-tax/circuit-breaker-caps/",
  title: "The Indiana Circuit Breaker: 1%, 2%, 3% Caps on the Bill",
  description:
    "How Indiana's circuit breaker works: caps of 1%, 2% and 3% of gross assessed value by property class, the per-class cap credit on the bill, the referendum carve-outs, and why the value itself has no limit.",
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
        { label: "Circuit Breaker Caps" },
      ]}
    >
      <h1>The Indiana Circuit Breaker: 1%, 2%, 3% Caps on the Bill</h1>

      <p>
        Indiana&rsquo;s constitutional cap — the <strong>circuit
        breaker</strong> — works on the <em>bill</em>, not on any value. That
        placement is the whole mechanism: local budgets set rates, rates are
        applied to assessed values, and only then does the cap check the
        result. A property&rsquo;s assessed value can rise by any percentage
        lawfully; what is bounded is what its owner can be made to pay.
      </p>

      <h2>The three caps, measured against gross assessed value</h2>
      <ul>
        <li>
          <strong>1%</strong> of gross assessed value for{" "}
          <strong>homesteads</strong> (homestead, residential, and
          long-term care property).
        </li>
        <li>
          <strong>2%</strong> for <strong>other residential and agricultural
          land</strong>.
        </li>
        <li>
          <strong>3%</strong> for <strong>all other property</strong> —
          commercial, industrial, and business personal property.
        </li>
      </ul>
      <p>
        The base matters as much as the percentages: the caps are computed
        against <strong>gross assessed value</strong> — before deductions
        like the standard or homestead deductions reduce it. The DLGF&rsquo;s
        Tax Bill 101 works the sequence in full: gross AV → deductions → net
        AV → × rate → local and state credits → then the cap check.
      </p>

      <h2>The cap credit: computed per property class</h2>
      <p>
        If the computed tax exceeds the cap, the excess is removed by a{" "}
        <strong>cap credit</strong> on the bill. The comparison is made{" "}
        <strong>separately for each property class on the parcel</strong> — a
        homestead with a garage apartment, or a farm with commercial outbuildings,
        runs the test once per class, not once for the whole parcel. This is
        why two owners in the same taxing district with the same total
        assessment can have different cap outcomes: the mix of classes
        differs.
      </p>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative arithmetic with made-up round numbers — modeled on the
          DLGF&rsquo;s own worked structure, not your property.
        </em>
      </p>
      <ol>
        <li>
          <strong>Inputs:</strong> homestead with gross assessed value
          $250,000, no other classes; net AV after deductions $225,000; the
          district&rsquo;s rate produces a tax of $2,700 before the cap
          check; 1% of gross AV is $2,500.
        </li>
        <li>
          <strong>Step — the test:</strong> $2,700 &gt; $2,500, so the cap
          binds.
        </li>
        <li>
          <strong>Step — the credit:</strong> a $200 cap credit brings the
          bill to $2,500 — exactly 1% of gross assessed value.
        </li>
        <li>
          <strong>Step — the shift:</strong> the $200 does not vanish: it
          becomes a charge the local units&rsquo; levies absorb, and the
          state&rsquo;s Aid to Local Governments flow addresses. The rate
          on the bill is unchanged; the cap credit is doing the limiting.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the cap is checked against{" "}
        <em>gross</em> value while the tax is computed on <em>net</em> value
        after deductions — which is why a homestead can pay well under 1% of
        its market value after deductions stack, and why the cap may never
        appear on your bill at all in a low-rate district.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your bill depends on your
        district&rsquo;s rate and your deductions; the cap only bounds the
        result. And because the caps do not change the local rate, an appeal
        that lowers your assessment still lowers your bill — the{" "}
        <Link href="/indiana-property-tax/form-130-appeal/">
          Form 130 process
        </Link>{" "}
        remains worth running even in a capped district.
      </p>

      <h2>Outside the caps: referendum projects</h2>
      <p>
        Two categories sit <strong>outside</strong> the caps entirely, and
        they explain bills that seem to break the rules:
      </p>
      <ul>
        <li>
          <strong>Referendum-approved building projects</strong> — capital
          projects voters approved by referendum are exempt.
        </li>
        <li>
          <strong>School operating funds</strong> approved by referendum —
          the caps table adjusts for the exempt rate share.
        </li>
      </ul>
      <p>
        A bill that exceeds 1%/2%/3% of gross value is not necessarily wrong;
        check whether a referendum rate is on it before concluding an error.
      </p>

      <h2>Senior citizens: one more layer</h2>
      <p>
        Eligible senior citizens can take an additional credit holding their
        taxes to <strong>2 percent above what was due the previous
        year</strong> — a year-over-year bound on top of the gross-value
        caps, and the only place in the Indiana system where last
        year&rsquo;s bill controls anything.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        The deduction programs themselves (standard, homestead, mortgage,
        over-65) and the state&rsquo;s levy-growth controls on the spending
        side are outside this page. The DLGF&rsquo;s Tax Bill 101, cited
        below, is the authority for the caps&rsquo; arithmetic.
      </p>

      <SourceList
        sourceIds={["in-dlgf-tax-bill-101", "in-dlgf-citizens-guide"]}
      />
    </PageShell>
  );
}

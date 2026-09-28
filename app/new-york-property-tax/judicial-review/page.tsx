import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/new-york-property-tax/judicial-review/",
  title: "New York Judicial Review: SCAR and Certiorari",
  description:
    "The 30-day window after the final roll, the Small Claims Assessment Review route for owner-occupied homes ($30 fee), and the Article 7 certiorari proceeding in State Supreme Court.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "New York",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/new-york-property-tax/", label: "New York Property Tax" },
        { label: "Judicial Review" },
      ]}
    >
      <h1>Judicial Review: SCAR and Certiorari</h1>

      <p>
        A BAR decision — or a BAR that never acts — is not the end of a
        New York grievance. Judicial review must be initiated{" "}
        <strong>within 30 days of the filing of the final assessment
        roll</strong> (July 1 in most communities) or of{" "}
        <strong>notice</strong> of that filing, whichever is later. Two
        routes exist, and the choice between them is made for you by the
        property you own: <strong>SCAR</strong> for owner-occupied homes,
        <strong> tax certiorari</strong> for everything else.
      </p>

      <h2>SCAR: the small-claims route</h2>
      <p>
        <strong>Small Claims Assessment Review (SCAR)</strong> is a
        simplified judicial proceeding, run by the Unified Court System,
        for owners who <strong>occupy one-, two- or three-family homes
        used exclusively for residential purposes</strong> — plus owners
        of vacant land too small for such a dwelling. The filing fee is{" "}
        <strong>$30</strong>. The hearing is informal by judicial
        standards: the owner presents comparable sales and the
        municipality responds, and the hearing officer or referee issues
        a determination.
      </p>
      <p>
        <strong>What this tells you:</strong> SCAR is the reason a New
        York residential grievance is affordable all the way through —
        no lawyer required at the BAR, $30 to the courthouse. The
        eligibility line is strict, though: a mixed-use two-family, or a
        home owned by an LLC, can fall outside it.
      </p>

      <h2>Tax certiorari: Article 7 in Supreme Court</h2>
      <p>
        Everyone else proceeds by <strong>tax certiorari</strong> under{" "}
        <strong>Article 7 of the Real Property Tax Law</strong>, in{" "}
        <strong>State Supreme Court</strong> — the formal route for
        commercial property, multi-family buildings, and owners who do
        not fit SCAR&rsquo;s eligibility. An attorney is{" "}
        <strong>strongly recommended</strong>; the proceeding is a
        full litigation with its own discovery, valuation evidence, and
        timeline. Certiorari is also the route behind most large New
        York assessment settlements.
      </p>

      <h2>The 30-day clock, and what it runs from</h2>
      <p>
        The window is anchored to the{" "}
        <strong>filing of the final assessment roll</strong> — or to{" "}
        <strong>notice</strong> of that filing, whichever is later. Two
        practical consequences:
      </p>
      <ul>
        <li>
          The clock runs from a public event (the roll&rsquo;s filing),
          not from your personal notice — a BAR decision that arrives
          late does not extend the window.
        </li>
        <li>
          In most communities the window opens and closes in{" "}
          <strong>July</strong> — a month after Grievance Day. Deciding
          whether to go to court happens on a five-week clock.
        </li>
      </ul>

      <h2>Worked example (illustrative)</h2>
      <p>
        <em>
          Illustrative timeline with made-up dates — your municipality&rsquo;s
          final-roll filing controls.
        </em>
      </p>
      <ol>
        <li>
          <strong>May 26, 2026 (Grievance Day):</strong> RP-524 filed;
          the BAR reviews through the summer.
        </li>
        <li>
          <strong>July 1, 2026:</strong> the final roll is filed — the
          BAR&rsquo;s reduction (or its silence) is now fixed on it, and
          the 30-day clock runs.
        </li>
        <li>
          <strong>July 28, 2026:</strong> SCAR petition filed by the
          owner-occupant of the one-family home — $30 fee, comparable
          sales attached.
        </li>
        <li>
          <strong>2026 – 2027:</strong> the SCAR hearing; a reduction
          on the final roll refunds through the school bill (September)
          and the municipal bill (January).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the judicial stage is
        where the <em>refund</em> mechanics become real — a reduction
        won after the final roll flows back through both bill seasons.
        But the 30-day window is the gate, and it does not wait for
        anyone&rsquo;s paperwork.
      </p>

      <h2>What this page does not cover</h2>
      <p>
        SCAR&rsquo;s hearing rules and forms, certiorari practice, and
        small-claims appeals are outside this page. The
        Department&rsquo;s grievance-procedures page cited below states
        the eligibility rules, the fee, and the 30-day rule; the
        Unified Court System hosts the SCAR forms themselves.
      </p>

      <SourceList
        sourceIds={["ny-tax-grievance-procedures", "ny-tax-property-tax-calendar"]}
      />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/deadlines/",
  title: "Michigan Property Tax Deadlines",
  description:
    "Michigan's property tax calendar: December 31 Tax Day, the notice before the March boards, the protest to the March Board of Review, the first Monday in June for the board's decision, both Tax Tribunal deadlines and the principal residence affidavit.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Michigan",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("michigan");

const TITLES: Record<string, string> = {
  "assessment-date": "Tax Day and the assessment",
  "notice-delivery": "Your notice of assessment",
  "protest-filing": "Protesting to the March Board of Review",
  decision: "The board's written decision",
  "appeal-higher-board": "The Michigan Tax Tribunal",
  "exemption-application": "The principal residence exemption affidavit",
};

const ID_TITLES: Record<string, string> = {
  "mi-tribunal-residential-agricultural":
    "The Tribunal deadline for residential and agricultural property",
  "mi-tribunal-commercial-industrial":
    "The Tribunal deadline for commercial and industrial property",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/michigan-property-tax/", label: "Michigan Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Michigan Property Tax Deadlines</h1>

      <p>
        Michigan&rsquo;s calendar has an unusual shape: the dates run through the
        local boards before they reach the state tribunal, and which of the two
        Tribunal deadlines applies to you depends on the class your property is
        in. Residential and agricultural owners get the later one — and only after
        the March Board of Review has heard the protest.
      </p>
      <p>
        Note also that the assessment date is at the <strong>end</strong> of the
        year rather than at the start of it. Michigan assesses as of December 31,
        and the taxes levied on that assessment arrive the following year.
      </p>

      {DEADLINES.map((d) => (
        <section
          key={d.deadlineId}
          aria-label={ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}
        >
          <h2>{ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          {d.anchoredTo && (
            <p className="muted-note">
              <strong>Anchor:</strong> {d.anchoredTo} · <strong>Basis:</strong>{" "}
              {d.deadlineBasis === "fixed-date" ? "fixed date" : "rule tied to an event"}
            </p>
          )}
        </section>
      ))}

      <h2>The shape of the year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for one assessment year. The dates that control
          are the ones your city or township and the Tribunal publish.
        </em>
      </p>
      <ol>
        <li>
          <strong>December 31:</strong> Tax Day. The assessor determines assessed
          value as of this date.
        </li>
        <li>
          <strong>Before the March board meetings:</strong> the notice of
          assessment, taxable valuation and property classification reaches you,
          carrying the transfer of ownership line.
        </li>
        <li>
          <strong>In March:</strong> the Board of Review meets, and the protest is
          made — the step that reserves the Tribunal right for residential and
          agricultural property.
        </li>
        <li>
          <strong>By the first Monday in June:</strong> the board notifies you in
          writing of its action, and that notice states the appeal right and the
          time limits.
        </li>
        <li>
          <strong>July 31:</strong> the Tribunal deadline for residential and
          agricultural property. Commercial and industrial property, which may
          skip the board, had a May 31 date instead.
        </li>
        <li>
          <strong>June 1 or November 1, for the following levy:</strong> the
          principal residence exemption affidavit is filed with your city or
          township — June 1 where the local unit collects school taxes in summer,
          November 1 where it collects them in winter.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the two things that decide your year
        arrive before any hearing — the transfer of ownership line on the notice,
        which decides whether the taxable value is capped at all, and the
        appointment for the March board, which decides whether you can still reach
        the Tribunal.
      </p>
      <p>
        <strong>What it does not tell you:</strong> the days in March your own
        board sits. That schedule is published by your city or township, and this
        site does not state it: the statute that sets the session requirement
        could not be read from an official source. The{" "}
        <Link href="/michigan-property-tax/property-tax-appeal/">appeal page</Link>{" "}
        says the same about the rest of the ladder.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/michigan-property-tax/taxable-value/">
            Taxable value and the inflation-or-5% limit
          </Link>{" "}
          — the capped value formula and its terms.
        </li>
        <li>
          <Link href="/michigan-property-tax/uncapping/">
            Uncapping on a transfer of ownership
          </Link>{" "}
          — the increase that is scheduled rather than contested.
        </li>
        <li>
          <Link href="/michigan-property-tax/notice-of-assessment/">
            The notice of assessment
          </Link>{" "}
          — what arrives before the boards, and the line that decides the year.
        </li>
        <li>
          <Link href="/michigan-property-tax/property-tax-appeal/">
            The appeal route
          </Link>{" "}
          — the March board, both Tribunal windows, the grounds and the evidence
          rules.
        </li>
      </ul>

      <SourceList
        sourceIds={["mi-oakland-equalization", "mi-oakland-faq"]}
      />
    </PageShell>
  );
}

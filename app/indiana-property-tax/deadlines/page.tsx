import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/indiana-property-tax/deadlines/",
  title: "Indiana Property Tax Deadlines",
  description:
    "Indiana's property tax calendar: the annual adjustment cycle, the Form 11 notice, the 45-day Form 130 window, the PTABOA's 180/120-day obligations, and the May 10 and November 10 installments.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Indiana",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("indiana");

const TITLES: Record<string, string> = {
  "assessment-date": "The annual adjustment cycle",
  "notice-delivery": "Your notice of assessment",
  "protest-filing": "The Form 130 appeal",
  "appeal-higher-board": "The higher levels: IBTR and the courts",
  payment: "The circuit breaker and your installments",
};

const ID_TITLES: Record<string, string> = {
  "in-annual-adjustment": "Annual adjustment: the cycle with no off-year",
  "in-form11-notice": "Form 11, or the bill itself",
  "in-form130-appeal": "Form 130: the 45-day window and the burden shift",
  "in-ibtr-appeal": "Form 131 and the Indiana Board of Tax Review",
  "in-circuit-breaker-caps": "The caps and the May 10 / November 10 installments",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/indiana-property-tax/", label: "Indiana Property Tax" },
        { label: "Deadlines" },
      ]}
    >
      <h1>Indiana Property Tax Deadlines</h1>

      <p>
        Indiana&rsquo;s calendar repeats <strong>every year</strong> — the
        state&rsquo;s trending system has no off-year, so the same sequence
        of notice, 45-day window, and installment dates applies annually to
        every owner. The one variable is <strong>which kind of notice you
        receive</strong>: a Form 11 starts a clean 45-day count, while
        owners who only receive the bill get a bill-anchored window instead.
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

      <h2>The shape of a year (illustrative)</h2>
      <p>
        <em>
          Illustrative sequence for the assessment year 2027 (taxes payable
          in 2028). Your own dates run from your notice or bill.
        </em>
      </p>
      <ol>
        <li>
          <strong>March 1, 2027:</strong> the assessment date — value as of
          this day, after the year&rsquo;s trending.
        </li>
        <li>
          <strong>Spring 2027:</strong> Form 11 notices are mailed where
          individual notice is required (including any increase over 5%).
          Owners without a Form 11 receive no separate value notice.
        </li>
        <li>
          <strong>Within 45 days of the notice (or the bill-anchored
          window):</strong> Form 130 filed with the local assessor — the{" "}
          <Link href="/indiana-property-tax/form-130-appeal/">
            appeal process
          </Link>{" "}
          starts.
        </li>
        <li>
          <strong>June 15, 2027:</strong> the DLGF guide&rsquo;s June 15
          framing — contact the assessor by this date in the year of the
          Form 11.
        </li>
        <li>
          <strong>Within 180 days of filing:</strong> the PTABOA holds its
          hearing, then determines within 120 days of the hearing — any
          lapse opens the Form 131 route.
        </li>
        <li>
          <strong>May 10, 2028:</strong> the first installment of the bill
          computed on the certified assessment — the circuit breaker caps
          the result.
        </li>
        <li>
          <strong>November 10, 2028:</strong> the second installment (moved
          to the next business day on a weekend or holiday).
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> the appeal runs in the same
        season the bill is computed, not after it — by the time the May 10
        installment arrives, the PTABOA&rsquo;s process is underway but the
        45-day filing window is long gone. Filing on time preserves your
        rights for both installments.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s exact
        Form 11 mailing date (counties vary within the spring window), or
        whether your bill will actually hit the cap — the{" "}
        <Link href="/indiana-property-tax/circuit-breaker-caps/">
          caps arithmetic
        </Link>{" "}
        runs on your own bill.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/indiana-property-tax/annual-adjustment/">
            Annual adjustment and the Form 11 notice
          </Link>{" "}
          — trending, and the two notice routes.
        </li>
        <li>
          <Link href="/indiana-property-tax/form-130-appeal/">
            The Form 130 appeal and the 5% burden shift
          </Link>{" "}
          — process, evidence, and the PTABOA timeline.
        </li>
        <li>
          <Link href="/indiana-property-tax/circuit-breaker-caps/">
            The 1%/2%/3% circuit breaker caps
          </Link>{" "}
          — what is capped and what is outside.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "in-dlgf-tax-bill-101",
          "in-dlgf-citizens-guide",
          "in-faqs-appeal",
          "in-dlgf-form130-flowchart",
        ]}
      />
    </PageShell>
  );
}

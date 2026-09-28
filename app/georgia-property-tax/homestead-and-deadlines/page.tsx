import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";
import { getDeadlines } from "@/lib/data/deadlines";

export const metadata: Metadata = buildMetadata({
  path: "/georgia-property-tax/homestead-and-deadlines/",
  title: "Georgia Deadlines: Homestead, Appeal Window, and Payment",
  description:
    "Georgia's property tax calendar: the January 1 valuation date, the annual assessment notice, the 45-day appeal window, the homestead exemption's April 1 rule with its extended window, and the December 20 payment norm.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-28",
  section: "Georgia",
});

// Rendered from the deadline registry — every rule below is verified against
// its cited source. Deadlines that could not be verified are not in the
// registry and therefore not on this page (publication gate for dates).
const DEADLINES = getDeadlines("georgia");

const TITLES: Record<string, string> = {
  "assessment-date": "The valuation date",
  "notice-delivery": "The assessment notice",
  "protest-filing": "The 45-day appeal",
  "exemption-application": "The homestead exemption",
  payment: "Paying the tax",
};

const ID_TITLES: Record<string, string> = {
  "ga-annual-assessment": "January 1: the annual valuation date",
  "ga-assessment-notice": "The annual assessment notice",
  "ga-45-day-appeal": "45 days from the mailing date",
  "ga-homestead-exemption": "April 1 — now extendable to the appeal window",
  "ga-tax-payment": "December 20 in most counties",
};

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/georgia-property-tax/", label: "Georgia Property Tax" },
        { label: "Homestead and Deadlines" },
      ]}
    >
      <h1>Deadlines: Homestead, Appeal Window, and Payment</h1>

      <p>
        Georgia&rsquo;s calendar runs on <strong>fixed dates with one
        variable window</strong>: January 1 fixes the value, the spring
        notice opens the appeal, the <strong>45-day count from the
        notice&rsquo;s mailing date</strong> closes it, and December 20
        (in most counties) ends the year with payment. The homestead
        exemption rides the same calendar — with a recent extension that
        ties its deadline to the appeal window itself.
      </p>

      {DEADLINES.map((d) => (
        <section
          key={d.deadlineId}
          aria-label={ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}
        >
          <h2>{ID_TITLES[d.deadlineId] ?? TITLES[d.deadlineType] ?? d.deadlineType}</h2>
          <p>{d.rule}</p>
          {d.fixedDate && (
            <p className="muted-note">
              <strong>Date:</strong> {d.fixedDate}
            </p>
          )}
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
          Illustrative sequence — your county&rsquo;s notice mailing and
          payment date control the middle and the end.
        </em>
      </p>
      <ol>
        <li>
          <strong>January 1:</strong> the valuation date — market value as
          of this day, for this year&rsquo;s digest.
        </li>
        <li>
          <strong>April 1:</strong> the historic property-tax-return and
          homestead-application deadline — now extendable, for homestead,
          up to the <strong>end of the 45-day appeal window</strong>.
        </li>
        <li>
          <strong>Spring (say, April 10):</strong> the assessment notice
          mails — with the Bill of Rights contents if the value changed.
        </li>
        <li>
          <strong>Within 45 days of the mailing (say, May 25):</strong>{" "}
          PT-311A filed — declaring your method — and the extended
          homestead window closes with it.
        </li>
        <li>
          <strong>Summer – fall:</strong> the declared method hears the
          appeal (Board of Equalization, hearing officer, or
          arbitration); unresolved cases continue toward superior court.
        </li>
        <li>
          <strong>By December 20 (most counties):</strong> the tax is due
          — computed on the final value, with 60 days from billing as the
          alternative count in counties that bill later.
        </li>
      </ol>
      <p>
        <strong>What this tells you:</strong> Georgia&rsquo;s deadlines
        are all <em>front-loaded relative to the bill</em> — the appeal
        is fully underway months before payment. The extended homestead
        window is the quiet gift in the calendar: a new homeowner who
        missed April 1 can still file while the appeal window is open.
      </p>
      <p>
        <strong>What it does not tell you:</strong> your county&rsquo;s
        notice mailing date and payment date (some counties set a
        different due date than December 20) — both published by your
        county tax commissioner.
      </p>

      <h2>Where the processes are explained</h2>
      <ul>
        <li>
          <Link href="/georgia-property-tax/annual-assessment-40-percent/">
            Annual assessment and the 40% ratio
          </Link>{" "}
          — the value chain and the notice contents.
        </li>
        <li>
          <Link href="/georgia-property-tax/appeal-and-bill-of-rights/">
            The 45-day appeal and the Bill of Rights
          </Link>{" "}
          — PT-311A, the three methods, and the burden rules.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "ga-dor-pt311a",
          "ga-dor-property-faq",
          "ga-dor-bill-of-rights",
          "ga-dor-homestead",
        ]}
      />
    </PageShell>
  );
}

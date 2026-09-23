import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/notice-of-assessment/",
  title: "Michigan Notice of Assessment, Taxable Valuation and Property Classification",
  description:
    "What the Michigan notice carries, when it arrives, why the transfer of ownership line decides whether your taxable value is capped, and the two principal residence exemption deadlines.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Michigan",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/", label: "Home" },
        { href: "/michigan-property-tax/", label: "Michigan Property Tax" },
        { label: "Notice of assessment" },
      ]}
    >
      <h1>The notice of assessment</h1>

      <p>
        Michigan&rsquo;s annual notice has a long name and does three jobs: it
        tells you the values, it tells you the property&rsquo;s classification,
        and it tells you whether a transfer of ownership occurred — which is the
        fact that decides whether the inflation-or-5% limit applied to you this
        year. It arrives{" "}
        <strong>before the March meetings of the local boards of review</strong>,
        so reading it is what makes the March window usable.
      </p>

      <h2>What it carries</h2>
      <ul>
        <li>
          <strong>The state equalized value</strong> — the figure your taxable
          value is compared against.
        </li>
        <li>
          <strong>The taxable value</strong> — the figure the millage rate is
          applied to, and the one the cap moves.
        </li>
        <li>
          <strong>The property classification</strong> — one of six classes:
          agricultural, commercial, developmental, industrial, residential, and
          timber cutover.
        </li>
        <li>
          <strong>The principal residence exemption percentage</strong> — the
          share of the property treated as your principal residence for the year.
        </li>
        <li>
          <strong>Whether a transfer of ownership occurred</strong> — the line to
          read first.
        </li>
      </ul>

      <h2>Why the transfer line decides your year</h2>
      <p>
        If no transfer occurred, the taxable value is the lesser of the state
        equalized value or the capped value, and the inflation-or-5% limit is in
        force. If a transfer occurred, the limitation does not apply in the
        calendar year following the transfer, and the taxable value becomes the
        state equalized value — the{" "}
        <Link href="/michigan-property-tax/uncapping/">uncapping</Link>. An
        increase that looks impossible is usually this line, and it is on the
        notice rather than something you have to infer from the arithmetic.
      </p>

      <h2>Two things on it that can be appealed</h2>
      <p>
        The notice is not only about value. The county lists the grounds a
        protest can be based on, and two of them are properties of the notice
        itself: <strong>classification</strong>, if the class assigned to the
        property is wrong, and <strong>status</strong>, if property that should be
        exempt is not being treated as exempt. Both are decided at the March Board
        of Review alongside a value dispute — the{" "}
        <Link href="/michigan-property-tax/property-tax-appeal/">
          appeal page
        </Link>{" "}
        sets out the whole ladder.
      </p>

      <h2>The principal residence exemption, and its two dates</h2>
      <p>
        The exemption is claimed by affidavit filed with your city or township,
        and Michigan runs two deadlines because local units collect school taxes
        on different schedules: file by <strong>June 1</strong> for the succeeding
        summer tax levy, or by <strong>November 1</strong> for the succeeding
        winter tax levy. Which one applies to you depends on when your local unit
        collects.
      </p>

      <h2>What this does not cover</h2>
      <p>
        The exact dates the March Board of Review sits. Michigan&rsquo;s statute
        that sets the board&rsquo;s session requirement could not be read from
        this site, so no date is published here; your city or township publishes
        its own board schedule, and the notice arrives before the board meets
        precisely so you can use it. Nor does this page say whether the values on
        your notice are right — that is what the protest is for.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/michigan-property-tax/taxable-value/">
            Taxable value and the inflation-or-5% limit
          </Link>{" "}
          — how the capped value is built.
        </li>
        <li>
          <Link href="/michigan-property-tax/uncapping/">
            Uncapping on a transfer of ownership
          </Link>{" "}
          — what the transfer line means for the following year.
        </li>
        <li>
          <Link href="/michigan-property-tax/property-tax-appeal/">
            The appeal route
          </Link>{" "}
          — the March board, the grounds and the Tribunal.
        </li>
        <li>
          <Link href="/michigan-property-tax/deadlines/">
            Michigan property tax deadlines
          </Link>{" "}
          — Tax Day, the notice, the boards and the affidavit dates.
        </li>
      </ul>

      <SourceList sourceIds={["mi-oakland-equalization", "mi-oakland-faq"]} />
    </PageShell>
  );
}

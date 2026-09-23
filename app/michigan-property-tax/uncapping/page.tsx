import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/michigan-property-tax/uncapping/",
  title: "Michigan Uncapping: What a Transfer of Ownership Does",
  description:
    "Why Michigan taxable value uncaps after a transfer of ownership, when it lands, why two identical neighboring houses can carry very different tax bases, and why a buyer's second bill is the one that moves.",
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
        { label: "Uncapping" },
      ]}
    >
      <h1>Uncapping on a transfer of ownership</h1>

      <p>
        A sale does not just hand the property to a new owner in Michigan; it
        removes the limitation on the taxable value. The taxable value becomes the{" "}
        <strong>state equalized value</strong>, which is what the property is
        actually worth at the required 50% assessment level, and the cap starts
        again from that higher figure. No covered state does this, and it is the
        reason two identical houses on the same street can carry tax bases that
        differ by more than the houses are worth.
      </p>

      <h2>What happens, and in which year</h2>
      <p>
        The timing is the part to get right, and both the county and the state
        Treasury state it: the taxable value uncaps in the{" "}
        <strong>calendar year following the year of the transfer</strong>. The
        county puts the mechanics plainly — the following year&rsquo;s state
        equalized value becomes that year&rsquo;s taxable value, and the taxable
        value is capped again for the second year after the transfer.
      </p>
      <p>
        The county also says the blunt version of it: the capped value limitation
        on taxable value <em>does not apply</em> if you purchased your home last
        year. Since the notice is mailed before the March boards and states
        whether a transfer of ownership occurred, that notice is where you find
        out whether the current year is a capped year for your property.
      </p>

      <h2>Why a buyer&rsquo;s second bill is the one that moves</h2>
      <p>
        A transfer late in a calendar year does not change the bill you receive
        first, because the uncapping lands the following calendar year. The bill
        that follows is the one built on the uncapped figure, and it can rise by
        far more than the inflation-or-5% limit — because in that year the limit
        is not being applied at all. For an owner who has just stretched to buy,
        that is the increase worth planning for, and it is a scheduled event
        rather than something to contest.
      </p>

      <h2>Which transfers count</h2>
      <p>
        Michigan defines &ldquo;transfer of ownership&rdquo; in its statute as the
        conveyance of title to, or a present interest in, property where the value
        is substantially equal to the value of the fee interest — and then the
        statute lists the transfers that are <em>exempt</em> from that definition,
        which therefore do <strong>not</strong> uncap the taxable value. That
        second list is what decides whether a particular transaction uncapped a
        parcel, and it is exactly the list this site could not read.
      </p>
      <p>
        This site names the structure of the rule as the Department of Treasury
        states it — the general definition and the existence of an exempt list —
        and does not reproduce the categories. The statute text itself could not be
        read from this site (the legislature&rsquo;s site refuses automated
        access), and a summary is not a substitute for the section that decides
        your case. Where the question matters, the county equalization department
        is the office that states whether a transfer uncapped a parcel.
      </p>

      <h2>What this does not cover</h2>
      <p>
        Whether <em>your</em> transaction is exempt, and what your uncapped taxable
        value will be next year: both depend on facts the county holds — the
        recorded transfer document and the equalization study. The rule is annual
        and the uncapping is not something an appeal can undo, because nothing
        about it is a valuation decision the board reviews.
      </p>

      <h2>Where to go next</h2>
      <ul>
        <li>
          <Link href="/michigan-property-tax/taxable-value/">
            Taxable value and the inflation-or-5% limit
          </Link>{" "}
          — the formula the uncapping suspends.
        </li>
        <li>
          <Link href="/michigan-property-tax/notice-of-assessment/">
            The notice of assessment
          </Link>{" "}
          — where the transfer of ownership is disclosed.
        </li>
        <li>
          <Link href="/michigan-property-tax/property-tax-appeal/">
            The appeal route
          </Link>{" "}
          — the March Board of Review and the two Tribunal windows.
        </li>
        <li>
          <Link href="/michigan-property-tax/deadlines/">
            Michigan property tax deadlines
          </Link>{" "}
          — Tax Day, the notice, the boards and the principal residence
          affidavit.
        </li>
      </ul>

      <SourceList
        sourceIds={["mi-treasury-change-ownership", "mi-oakland-equalization"]}
      />
    </PageShell>
  );
}

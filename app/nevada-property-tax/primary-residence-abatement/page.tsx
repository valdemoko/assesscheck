import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SourceList } from "@/components/sources/SourceList";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/nevada-property-tax/primary-residence-abatement/",
  title: "The 3% Primary Residence Abatement in Nevada",
  description:
    "How to claim Nevada's 3% tax cap on a primary residence, what counts as a primary residence, what makes a property lose the abatement, and how rentals qualify at or below HUD fair market rent.",
  publishStatus: "ready",
  lastVerifiedDate: "2026-09-23",
  section: "Nevada",
});

export default function Page() {
  return (
    <PageShell
      breadcrumbs={[
        { href: "/nevada-property-tax/", label: "Nevada Property Tax" },
        { label: "The 3% primary residence abatement" },
      ]}
    >
      <h1>The 3% Primary Residence Abatement in Nevada</h1>

      <p>
        The lower cap in Nevada — 3% instead of up to 8% — is not automatic. It
        attaches to a status you declare on a signed form, and{" "}
        <strong>the county will not give it to you if you do not claim it</strong>
        . That is the first thing to know. The second is what removes it, because
        the most common Nevada bill shock has nothing to do with the assessor
        changing a value: it comes from an ownership document recorded against
        the property.
      </p>

      <h2>What counts as a primary residence</h2>
      <p>The county&rsquo;s working definition has three parts:</p>
      <ul>
        <li>
          a residence the owner <strong>designates</strong> as the owner&rsquo;s
          primary residence in Nevada;
        </li>
        <li>
          <strong>exclusive of any other residence</strong> the owner has in the
          state — only one property in Nevada can hold the designation; and
        </li>
        <li>
          <strong>not rented, leased or otherwise made available</strong> to
          anyone other than the owner and the owner&rsquo;s family.
        </li>
      </ul>
      <p>
        Single-family houses, townhouses, condominiums and manufactured homes
        all qualify. The claim is a matter of fact backed by your signature, and
        the same county page notes the practical consequence of a sloppy one:
        incomplete or unsigned forms can leave the property at the higher cap,
        which means a higher bill.
      </p>

      <h2>What makes a property lose it</h2>
      <p>
        Once a claim for an owner-occupied primary residence is on file, the 3%
        level continues — until one of these happens:
      </p>
      <ul>
        <li>
          <strong>An ownership document is recorded.</strong> Any recorded
          ownership document removes the owner-occupied abatement until a new
          claim is completed and returned. This is why a purchase, a transfer
          into a trust, or a change in the named owner can move a property to the
          general cap in one fiscal year.{" "}
          <strong>
            A refinance does not affect it if no ownership document is recorded.
          </strong>{" "}
          That distinction is the answer to a question owners ask constantly.
        </li>
        <li>
          <strong>The mailing address on the account changes</strong>, or the
          owner notifies the assessor of a status change.
        </li>
        <li>
          <strong>The property is no longer used as the owner&rsquo;s primary
          residence</strong> — owners are required to notify the assessor when
          that happens.
        </li>
        <li>
          <strong>A new form is generated for another reason</strong> — for
          example when construction on a residence becomes complete enough for
          occupancy. When such a form is produced, the property&rsquo;s cap
          status is set to the general abatement until a qualifying claim is
          filed. Counties mail these claim postcards in cycles, including after
          July 1 to properties whose recorded document number or ownership
          changed during the year.
        </li>
      </ul>
      <p>
        The status is fixed on <strong>July 1</strong> and runs for the fiscal
        year. Moving back into a property mid-year does not restore the 3% level
        until the following July 1.
      </p>

      <h2>Rentals: the same 3%, on a rent test</h2>
      <p>
        Residential rentals can also receive 3%, but the test is the rent
        charged: <strong>every unit on the parcel</strong> must rent at or below
        the HUD fair market rent for the county, and the claim (the rent
        affidavit) must be filed{" "}
        <strong>every year, by June 15</strong>, because the rents are verified
        annually. Clark County publishes the applicable maximum rents, which for
        the 2026/2027 year include $1,146 for a studio, $1,270 for one bedroom,
        $1,504 for two, $2,139 for three, $2,456 for four, $2,824 for five, and
        $602 for a mobile home space. The authoritative figures for your county
        are the ones on your own affidavit.
      </p>

      <h2>Situations the counties answer directly</h2>
      <ul>
        <li>
          <strong>Renting a room in the home you live in</strong> does not
          disqualify the property — it is still your primary residence.
        </li>
        <li>
          <strong>A guesthouse or casita</strong> rented out is measured against
          the HUD rent like any other rental unit.
        </li>
        <li>
          <strong>Short-term or transient lodging does not qualify</strong>, at
          any rate. The counties give the arithmetic: renting at a nightly rate
          is treated as transient, and the monthly equivalent would exceed the
          HUD figure.
        </li>
        <li>
          <strong>A business in the home does not disqualify it</strong> while
          the parcel carries a residential land-use code; a commercial-coded
          parcel that also contains the residence can be split between its
          commercial and residential portions, each receiving the appropriate
          level.
        </li>
        <li>
          <strong>Land under a manufactured home</strong> follows the same logic
          in four cases — owning both and occupying the home, owning only the
          home, owning only the land, and owning both as a rental — and the level
          for the land depends on the space rent charged.
        </li>
        <li>
          <strong>A trust</strong> whose beneficiary occupies the property as a
          primary residence can qualify for the 3% level.
        </li>
        <li>
          <strong>More than one home in Nevada.</strong> Only one can be the
          owner&rsquo;s primary residence; a second home occupied full time and
          rent-free by a family member can qualify as a rental instead, at $0
          rent against the HUD benchmark.
        </li>
      </ul>

      <h2>How to file</h2>
      <p>
        The claim must be signed, so it cannot be handled over the phone. County
        assessors publish a partial abatement claim form for the first claim in a
        fiscal year, and a separate petition for review for challenging a
        determination already made — two different documents for two different
        situations, and the{" "}
        <Link href="/nevada-property-tax/tax-cap-abatement/">
          abatement page
        </Link>{" "}
        explains which one applies. The relevant windows are in the{" "}
        <Link href="/nevada-property-tax/deadlines/">deadline registry</Link>.
      </p>

      <h2>What this does not tell you</h2>
      <ul>
        <li>
          <strong>The level actually applied to your parcel.</strong> That is
          printed on your tax bill and shown in the county&rsquo;s assessment
          data; it is the record that matters if you and the county disagree.
        </li>
        <li>
          <strong>Whether your county uses the same forms and mailing cycle.</strong>{" "}
          Nevada administers this through 17 county assessors. The rules above
          are drawn from Washoe and Clark County documentation and from the
          statutes those counties cite; your own assessor&rsquo;s form is what
          you file.
        </li>
        <li>
          <strong>What the abatement is worth to you.</strong> It depends on your
          prior bill, your rate district and how long the property has been under
          the cap. Two identical houses in the same district can have different
          abatements for that reason alone.
        </li>
      </ul>

      <SourceList
        sourceIds={[
          "nv-washoe-assessor-taxcap",
          "nv-washoe-assessor-faq",
          "nv-clark-tax-abatement",
          "nv-washoe-abatement-appeal",
        ]}
      />
    </PageShell>
  );
}

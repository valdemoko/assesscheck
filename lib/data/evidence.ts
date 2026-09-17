// Evidence category model. The records below are TEXAS records — restricted
// to categories the Texas Comptroller's ARB-hearing guidance explicitly names
// as things owners may bring. No category is invented; no adjustment
// percentages are asserted. Florida will get its own records (VAB evidence,
// incl. the DOR-prescribed evidence-exchange rules) under separate evidence
// IDs once verified; the record SHAPE is jurisdiction-neutral and reusable.

import type { SourceReference } from "@/lib/sources/types";

export interface EvidenceTypeRecord {
  evidenceId: string;
  name: string;
  whatItIs: string;
  whyItMayMatter: string;
  whenItMayBeUseful: string;
  whatItDoesNotProve: string;
  whatToVerify: string;
  sources: SourceReference[];
  lastVerifiedDate: string;
}

export const EVIDENCE_TYPES: EvidenceTypeRecord[] = [
  {
    evidenceId: "property-photographs",
    name: "Property photographs",
    whatItIs:
      "Dated photographs of your property's condition, and, where relevant, photographs of comparable properties.",
    whyItMayMatter:
      "The Comptroller's guidance on ARB hearings lists property photographs (yours and comparables') among the information owners should gather to help establish value.",
    whenItMayBeUseful:
      "When physical condition, deferred maintenance, or damage is part of your argument, or when showing how your property differs from comparables the district may rely on.",
    whatItDoesNotProve:
      "Photographs alone do not establish a specific market value, and they do not by themselves prove that an appraised value is incorrect.",
    whatToVerify:
      "Confirm current evidence submission rules (copies, electronic devices, timing) in the ARB hearing procedures for your county before your hearing.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports:
          "List of items owners should gather, including property photographs.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "repair-estimates-and-receipts",
    name: "Repair estimates and repair receipts",
    whatItIs:
      "Written estimates from contractors or receipts for completed repairs addressing deficiencies in the property.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'receipts or estimates for repairs' among the information owners should gather. Condition is one of the factors Texas Tax Code § 23.013 says distinguishes comparable properties.",
    whenItMayBeUseful:
      "When you contend the property's condition reduces its market value relative to properties in average condition.",
    whatItDoesNotProve:
      "A repair estimate does not translate mechanically into a specific dollar reduction in appraised value, and it does not prove the assessment is wrong by itself.",
    whatToVerify:
      "Whether the appraisal district or ARB requires the estimate to be signed, itemized, or accompanied by photographs.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including repair receipts or estimates.",
      },
      {
        sourceId: "tx-tax-code-23-013",
        supports: "Condition as a comparability factor under § 23.013(d).",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "sales-documentation",
    name: "Sales price documentation",
    whatItIs:
      "Listings, closing statements, and other documentation of the price your property sold for, or of prices for comparable properties.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'sales price documentation, such as listings, closing statements and other information' among what owners should bring to support their case.",
    whenItMayBeUseful:
      "When your property sold recently in an arm's-length transaction, or when you rely on recent sales of similar properties.",
    whatItDoesNotProve:
      "A single sale price does not automatically control the appraised value; market value is defined by statute and the ARB weighs the evidence as a whole.",
    whatToVerify:
      "The sale's date relative to the appraisal date, and whether the transaction reflects open-market conditions.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including sales price documentation.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "comparable-property-information",
    name: "Comparable property information",
    whatItIs:
      "Documented details of similar properties — location, size, age, condition, and recorded values or sales — used to argue value by comparison.",
    whyItMayMatter:
      "Texas Tax Code § 23.013 defines what makes a sale comparable (recency windows and similarity factors). The Comptroller's hearing guidance expects owners to present a clear, evidence-based case.",
    whenItMayBeUseful:
      "When you contend the appraised value exceeds the value supported by genuinely similar properties.",
    whatItDoesNotProve:
      "Properties are not comparable merely because they are nearby; a comparison built on dissimilar properties proves nothing.",
    whatToVerify:
      "Each comparable's similarity on the § 23.013 factors and the applicable sale-recency window.",
    sources: [
      { sourceId: "tx-tax-code-23-013", supports: "Comparability factors and recency windows." },
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "Expectation that owners prove their case with evidence.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "level-of-appraisal-calculations",
    name: "Calculations of median level of appraisal",
    whatItIs:
      "Calculations comparing your property's appraised value with its market value, used when protesting unequal appraisal.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'calculations of median level of appraisal, if protesting equal and uniform appraisal' among the evidence owners may bring.",
    whenItMayBeUseful:
      "Only when the protest ground is unequal appraisal — that your property was appraised unequally compared with comparable properties.",
    whatItDoesNotProve:
      "Such calculations address uniformity, not market value directly, and the legal standard is set by statute and case law this site does not interpret.",
    whatToVerify:
      "Whether an unequal-appraisal ground applies to your situation before relying on this category.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including median level of appraisal calculations.",
      },
      { sourceId: "tx-tax-code-41-41", supports: "Unequal appraisal as a protest ground, § 41.41(a)(2)." },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "affidavits",
    name: "Affidavits",
    whatItIs:
      "Sworn written statements, notarized before an officer authorized to administer oaths, containing evidence or argument.",
    whyItMayMatter:
      "Texas Tax Code § 41.45(b) allows a property owner to offer evidence or argument by affidavit without personally appearing, and the Comptroller's guidance lists affidavits among useful evidence.",
    whenItMayBeUseful:
      "When you cannot attend in person, or to preserve a statement of fact for the hearing record.",
    whatItDoesNotProve:
      "An affidavit is still just evidence; the ARB weighs it like any other evidence.",
    whatToVerify:
      "The affidavit's required contents and the deadline for submitting it under your county's ARB procedures.",
    sources: [
      { sourceId: "tx-comptroller-appraisal-protests", supports: "Affidavits in the evidence list." },
      { sourceId: "tx-tax-code-41-41", supports: "Right to appear and offer evidence." },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "architectural-drawings",
    name: "Architectural drawings or blueprints",
    whatItIs:
      "Plans, drawings, or blueprints describing the property's structures and improvements.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'architectural drawings or blueprints' among the information owners should gather.",
    whenItMayBeUseful:
      "When the record's description of the improvements (size, layout, quality) is disputed or needs documentation.",
    whatItDoesNotProve:
      "Drawings document characteristics; they do not by themselves establish a value.",
    whatToVerify:
      "That the drawings match the property's current condition rather than an earlier design.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including architectural drawings or blueprints.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "engineering-reports",
    name: "Engineering reports",
    whatItIs:
      "Reports by licensed engineers addressing structural or physical conditions of the property.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'engineering reports' among the information owners should gather.",
    whenItMayBeUseful:
      "When a significant physical issue (for example, a structural or foundation condition) is documented and bears on value.",
    whatItDoesNotProve:
      "A report documents condition. It does not convert into a specific appraisal adjustment, and this site does not assign percentage impacts.",
    whatToVerify:
      "The report's authorship, licensure, and date relative to the appraisal date.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including engineering reports.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "property-surveys",
    name: "Property surveys",
    whatItIs:
      "Licensed surveys establishing the property's boundaries, acreage, and improvements' placement.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'property surveys' among the information owners should gather.",
    whenItMayBeUseful:
      "When lot size, boundaries, or the existence of improvements are in question.",
    whatItDoesNotProve:
      "A survey documents physical facts, not value.",
    whatToVerify:
      "That the survey is current and reflects the property as appraised.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including property surveys.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
  {
    evidenceId: "deed-records",
    name: "Deed records",
    whatItIs:
      "Recorded deeds and related county records establishing ownership and, sometimes, transaction history.",
    whyItMayMatter:
      "The Comptroller's guidance lists 'deed records' among the information owners should gather.",
    whenItMayBeUseful:
      "When ownership, ownership date, or a recorded transaction is relevant to the protest.",
    whatItDoesNotProve:
      "A deed records title events; it does not determine the correct appraised value.",
    whatToVerify:
      "That the recorded information matches the appraisal district's records for your account.",
    sources: [
      {
        sourceId: "tx-comptroller-appraisal-protests",
        supports: "List of items owners should gather, including deed records.",
      },
    ],
    lastVerifiedDate: "2026-09-17",
  },
];

export function getEvidenceType(evidenceId: string): EvidenceTypeRecord | undefined {
  return EVIDENCE_TYPES.find((e) => e.evidenceId === evidenceId);
}

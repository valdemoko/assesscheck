import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Single reusable footer for every page (rendered by PageShell). Four link
// groups + bottom bar with dynamic year and author attribution. Every href
// is verified by tests/footer-links.test.ts — never add a link here without
// creating the target page in the same change.

type FooterLink = { href: string; label: string };

const COLUMNS: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Assess",
    links: [
      { href: "/property-tax-checker/", label: "Assessment checker" },
      { href: "/texas/harris-county/property-tax-checker/", label: "Harris County checker" },
      { href: "/texas-property-tax/protest/deadlines/", label: "Texas deadlines" },
      { href: "/florida-property-tax/deadlines/", label: "Florida deadlines" },
      { href: "/texas-property-tax/protest/how-to-file/", label: "Texas: how to file" },
      { href: "/florida-property-tax/vab-petition/", label: "Florida: VAB petition" },
      { href: "/california-property-tax/deadlines/", label: "California deadlines" },
      { href: "/california-property-tax/assessment-appeal/", label: "California: appeal" },
      { href: "/arizona-property-tax/deadlines/", label: "Arizona deadlines" },
      { href: "/arizona-property-tax/petition-for-review/", label: "Arizona: petition" },
      { href: "/nevada-property-tax/deadlines/", label: "Nevada deadlines" },
      { href: "/nevada-property-tax/tax-cap-abatement/", label: "Nevada tax cap" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { href: "/property-tax-by-state/", label: "Property tax by state" },
      { href: "/texas-property-tax/", label: "Texas property tax" },
      { href: "/florida-property-tax/", label: "Florida property tax" },
      { href: "/california-property-tax/", label: "California property tax" },
      { href: "/arizona-property-tax/", label: "Arizona property tax" },
      { href: "/nevada-property-tax/", label: "Nevada property tax" },
      { href: "/arizona-property-tax/full-cash-vs-limited-value/", label: "Arizona: LPV limit" },
      { href: "/texas-property-tax/protest/", label: "Protest process (TX)" },
      { href: "/texas-property-tax/faq/", label: "Texas FAQ" },
      { href: "/evidence/property-tax-protest-evidence/", label: "Evidence guide" },
      { href: "/comparables/", label: "Comparable properties" },
      { href: "/texas/harris-county/", label: "Harris County" },
      { href: "/resources/", label: "Official resources" },
      { href: "/faq/", label: "FAQ" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/about/", label: "About AssessCheck" },
      { href: "/about/author/", label: "About the author" },
      { href: "/methodology/", label: "Methodology" },
      { href: "/editorial-policy/", label: "Editorial policy" },
      { href: "/corrections/", label: "Corrections" },
      { href: "/accessibility/", label: "Accessibility" },
      { href: "/contact/", label: "Contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy/", label: "Privacy policy" },
      { href: "/cookie-policy/", label: "Cookie policy" },
      { href: "/terms/", label: "Terms of use" },
      { href: "/disclaimer/", label: "Disclaimer" },
      { href: "/advertising-disclosure/", label: "Advertising disclosure" },
      { href: "/consent-preferences/", label: "Consent preferences" },
    ],
  },
];

const BOTTOM_LINKS: FooterLink[] = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/cookie-policy/", label: "Cookies" },
  { href: "/terms/", label: "Terms" },
  { href: "/disclaimer/", label: "Disclaimer" },
  { href: "/contact/", label: "Contact" },
  { href: "/consent-preferences/", label: "Consent preferences" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{siteConfig.name}</p>
          <p className="site-footer__desc">{siteConfig.description}</p>
          <p className="site-footer__author">
            Created and maintained by{" "}
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.author.name}
            </a>
            .
          </p>
        </div>

        <nav className="site-footer__columns" aria-label="Footer">
          {COLUMNS.map((col) => (
            <section key={col.heading} className="site-footer__col">
              <h2>{col.heading}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p className="site-footer__copyright">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <ul className="site-footer__bottom-links">
            {BOTTOM_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="site-footer__disclaimer">
          {siteConfig.name} provides general educational information about
          property tax assessments and the review process — Texas, Florida,
          California, Arizona and Nevada. It is not legal, tax, appraisal, or financial
          advice, and it is not affiliated with any appraisal district, property
          appraiser, or government agency. Verify current deadlines and
          procedures with the applicable authority and official sources.
        </p>
      </div>
    </footer>
  );
}

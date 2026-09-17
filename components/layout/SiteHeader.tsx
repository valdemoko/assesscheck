"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand/BrandMark";

const NAV = [
  { href: "/property-tax-checker/", label: "Assessment Checker" },
  { href: "/texas-property-tax/", label: "Texas" },
  { href: "/florida-property-tax/", label: "Florida" },
  { href: "/evidence/property-tax-protest-evidence/", label: "Evidence" },
  { href: "/texas/harris-county/", label: "Harris County" },
  { href: "/resources/", label: "Resources" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="site-header" data-home={isHome ? "true" : undefined}>
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="AssessCheck home">
          <BrandMark size={isHome ? 34 : 26} />
          <span className="site-header__title">AssessCheck</span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

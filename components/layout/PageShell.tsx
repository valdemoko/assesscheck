import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function PageShell({
  children,
  breadcrumbs,
}: {
  children: ReactNode;
  breadcrumbs?: { href?: string; label: string }[];
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <SiteHeader />

      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            {breadcrumbs.map((b, i) => (
              <li key={`${b.label}-${i}`}>
                {b.href ? (
                  <Link href={b.href}>{b.label}</Link>
                ) : (
                  <span aria-current="page">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <main id="main" className="page-main">
        {children}
      </main>

      <SiteFooter />
    </>
  );
}

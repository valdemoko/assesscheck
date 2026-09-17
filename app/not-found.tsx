import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell breadcrumbs={[{ label: "Page not found" }]}>
      <h1>Page not found (404)</h1>
      <p>
        The page you requested does not exist. Try one of these instead:
      </p>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/property-tax-checker/">Assessment checker</Link></li>
        <li><Link href="/texas-property-tax/">Texas property tax</Link></li>
        <li><Link href="/texas/harris-county/">Harris County</Link></li>
        <li><Link href="/resources/">Official resources</Link></li>
      </ul>
    </PageShell>
  );
}

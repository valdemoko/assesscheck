import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { SITE_NAME, SITE_URL_RESOLVED } from "@/lib/seo/metadata";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL_RESOLVED),
  title: {
    // Not "your Texas property assessment": this is the title a page without its
    // own falls back to (the 404 page, for one), and the site covers seven
    // states. A state named here is a claim that goes wrong every expansion.
    default: `${SITE_NAME} — Understand your property tax assessment`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Understand your property assessment, compare the public evidence, and prepare for a property tax protest with reliable, sourced information.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL_RESOLVED,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL_RESOLVED,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plex.variable} ${serif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

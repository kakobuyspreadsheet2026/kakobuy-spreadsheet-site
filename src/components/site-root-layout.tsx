import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import type { SupportedLocale } from "@/lib/locales";
import { buildMetadata, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

import { JsonLd } from "./json-ld";
import { SiteFooter, SiteHeader } from "./site-chrome";

export const siteMetadata: Metadata = {
  ...buildMetadata({
    title: "Kakobuy Spreadsheet 2026 | Better Picks, QC Help, and Buying Paths",
    description:
      "Find better Kakobuy picks with category shortcuts, QC help, shipping answers, and cleaner next steps.",
  }),
  icons: {
    icon: "/tab-k-logo.png",
    shortcut: "/tab-k-logo.png",
    apple: "/tab-k-logo.png",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
  metadataBase: new URL(siteConfig.domain),
};

export const siteFontClassName = "";

export function SiteShell({
  children,
  lang,
}: Readonly<{
  children: React.ReactNode;
  lang: SupportedLocale;
}>) {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={organizationJsonLd()} />
      <div lang={lang} className="flex min-h-screen flex-col">
        <SiteHeader locale={lang} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={lang} />
      </div>
    </>
  );
}

import type { Metadata } from "next";

import { SiteShell, siteMetadata } from "@/components/site-root-layout";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  ...siteMetadata,
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteShell lang="en">{children}</SiteShell>;
}

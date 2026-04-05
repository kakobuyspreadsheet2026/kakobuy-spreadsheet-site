import type { Metadata } from "next";

import "./globals.css";

import { siteMetadata, siteFontClassName } from "@/components/site-root-layout";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  ...siteMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={siteFontClassName} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-amber-50 text-slate-950">{children}</body>
    </html>
  );
}

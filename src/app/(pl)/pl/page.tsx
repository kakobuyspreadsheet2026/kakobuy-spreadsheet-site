import type { Metadata } from "next";

import { HomePage } from "@/components/page-builders";
import { homepageCopy } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: homepageCopy.pl.title,
  description: homepageCopy.pl.description,
  path: "/pl",
  languages: getLanguageAlternates("/"),
});

export default function PolishHomePage() {
  return <HomePage locale="pl" />;
}

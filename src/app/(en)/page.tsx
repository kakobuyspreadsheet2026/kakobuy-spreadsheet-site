import type { Metadata } from "next";

import { HomePage } from "@/components/page-builders";
import { homepageCopy } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: homepageCopy.en.title,
  description: homepageCopy.en.description,
  path: "/",
  languages: getLanguageAlternates("/"),
});

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}

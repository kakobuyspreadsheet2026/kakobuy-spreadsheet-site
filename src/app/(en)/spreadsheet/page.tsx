import type { Metadata } from "next";

import { SpreadsheetPage } from "@/components/page-builders";
import { spreadsheetPageCopy } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: spreadsheetPageCopy.en.title,
  description: spreadsheetPageCopy.en.description,
  path: "/spreadsheet",
  languages: getLanguageAlternates("/spreadsheet"),
});

export default function EnglishSpreadsheetPage() {
  return <SpreadsheetPage locale="en" />;
}

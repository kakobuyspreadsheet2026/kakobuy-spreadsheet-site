import type { Metadata } from "next";

import { SpreadsheetPage } from "@/components/page-builders";
import { spreadsheetPageCopy } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: spreadsheetPageCopy.pl.title,
  description: spreadsheetPageCopy.pl.description,
  path: "/pl/spreadsheet",
  languages: getLanguageAlternates("/spreadsheet"),
});

export default function PolishSpreadsheetPage() {
  return <SpreadsheetPage locale="pl" />;
}

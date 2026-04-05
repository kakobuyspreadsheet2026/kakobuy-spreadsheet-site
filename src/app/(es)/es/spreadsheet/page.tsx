import type { Metadata } from "next";

import { SpreadsheetPage } from "@/components/page-builders";
import { spreadsheetPageCopy } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: spreadsheetPageCopy.es.title,
  description: spreadsheetPageCopy.es.description,
  path: "/es/spreadsheet",
  languages: getLanguageAlternates("/spreadsheet"),
});

export default function SpanishSpreadsheetPage() {
  return <SpreadsheetPage locale="es" />;
}

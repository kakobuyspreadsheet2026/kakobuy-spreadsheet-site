import type { Metadata } from "next";

import { HomePage } from "@/components/page-builders";
import { homepageCopy } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: homepageCopy.es.title,
  description: homepageCopy.es.description,
  path: "/es",
  languages: getLanguageAlternates("/"),
});

export default function SpanishHomePage() {
  return <HomePage locale="es" />;
}

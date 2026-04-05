import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GuidePageView } from "@/components/page-builders";
import { guides } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata, getCoreRouteSocialMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);
  const social = getCoreRouteSocialMetadata("pl", slug);

  return buildMetadata({
    title: guide?.body.pl.title ?? "Nie znaleziono poradnika",
    description: guide?.body.pl.description ?? "Nie znaleziono wybranego poradnika.",
    socialTitle: social?.title,
    socialDescription: social?.description,
    path: `/pl/guides/${slug}`,
    languages: getLanguageAlternates(`/guides/${slug}`),
  });
}

export default async function PolishGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuidePageView locale="pl" guide={guide} />;
}

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
  const social = getCoreRouteSocialMetadata("es", slug);

  return buildMetadata({
    title: guide?.body.es.title ?? "Guia no encontrada",
    description: guide?.body.es.description ?? "No se encontro la guia solicitada.",
    socialTitle: social?.title,
    socialDescription: social?.description,
    path: `/es/guides/${slug}`,
    languages: getLanguageAlternates(`/guides/${slug}`),
  });
}

export default async function SpanishGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuidePageView locale="es" guide={guide} />;
}

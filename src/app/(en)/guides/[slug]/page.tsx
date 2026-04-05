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
  const social = getCoreRouteSocialMetadata("en", slug);

  return buildMetadata({
    title: guide?.body.en.title ?? "Guide Not Found",
    description: guide?.body.en.description ?? "The requested guide could not be found.",
    socialTitle: social?.title,
    socialDescription: social?.description,
    path: `/guides/${slug}`,
    languages: getLanguageAlternates(`/guides/${slug}`),
  });
}

export default async function EnglishGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((entry) => entry.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuidePageView locale="en" guide={guide} />;
}

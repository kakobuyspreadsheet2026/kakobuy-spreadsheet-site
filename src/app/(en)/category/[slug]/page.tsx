import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryPageView } from "@/components/page-builders";
import { categories } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata, getCoreRouteSocialMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((entry) => entry.slug === slug);
  const social = getCoreRouteSocialMetadata("en", slug);

  return buildMetadata({
    title: category?.body.en.title ?? "Category Not Found",
    description: category?.body.en.description ?? "The requested category page could not be found.",
    socialTitle: social?.title,
    socialDescription: social?.description,
    path: `/category/${slug}`,
    languages: getLanguageAlternates(`/category/${slug}`),
  });
}

export default async function EnglishCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((entry) => entry.slug === slug);

  if (!category) {
    notFound();
  }

  return <CategoryPageView locale="en" category={category} />;
}

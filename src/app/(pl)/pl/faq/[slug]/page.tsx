import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FaqPageView } from "@/components/page-builders";
import { faqPages } from "@/data/site";
import { getLanguageAlternates } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return faqPages.map((faq) => ({ slug: faq.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faq = faqPages.find((entry) => entry.slug === slug);

  return buildMetadata({
    title: faq?.body.pl.title ?? "FAQ nie znalezione",
    description: faq?.body.pl.description ?? "Nie znaleziono wybranej strony FAQ.",
    path: `/pl/faq/${slug}`,
    languages: getLanguageAlternates(`/faq/${slug}`),
  });
}

export default async function PolishFaqPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = faqPages.find((entry) => entry.slug === slug);

  if (!faq) {
    notFound();
  }

  return <FaqPageView locale="pl" faq={faq} />;
}

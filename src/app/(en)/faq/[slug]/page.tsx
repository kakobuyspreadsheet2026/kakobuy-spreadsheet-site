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
    title: faq?.body.en.title ?? "FAQ Not Found",
    description: faq?.body.en.description ?? "The requested FAQ page could not be found.",
    path: `/faq/${slug}`,
    languages: getLanguageAlternates(`/faq/${slug}`),
  });
}

export default async function EnglishFaqPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const faq = faqPages.find((entry) => entry.slug === slug);

  if (!faq) {
    notFound();
  }

  return <FaqPageView locale="en" faq={faq} />;
}

import { categories, faqPages, guides } from "@/data/site";
import type { CategoryPage, FaqPage, Guide } from "@/data/types";

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getFaqPage(slug: string): FaqPage | undefined {
  return faqPages.find((faq) => faq.slug === slug);
}

export function getCategory(slug: string): CategoryPage | undefined {
  return categories.find((category) => category.slug === slug);
}

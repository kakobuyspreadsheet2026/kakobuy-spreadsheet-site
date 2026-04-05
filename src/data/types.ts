import type { SupportedLocale } from "@/lib/locales";

export type LocalizedText = Record<SupportedLocale, string>;

export type PageBody = Record<
  SupportedLocale,
  {
    title: string;
    description: string;
    intro: string;
    paragraphs: string[];
    bullets?: string[];
  }
>;

export type Guide = {
  slug: string;
  body: PageBody;
  relatedFaqSlugs: string[];
  relatedCategorySlugs: string[];
};

export type FaqPage = {
  slug: string;
  body: Record<
    SupportedLocale,
    {
      title: string;
      description: string;
      question: string;
      answer: string;
      supportingPoints: string[];
    }
  >;
  relatedGuideSlugs: string[];
};

export type CategoryPage = {
  slug: string;
  body: Record<
    SupportedLocale,
    {
      title: string;
      description: string;
      intro: string;
      highlights: string[];
      bestFor: string[];
      whatToCheck: string[];
      watchOutFor: string[];
      nextSteps: string[];
    }
  >;
  relatedGuideSlugs: string[];
};

export type NavItem = {
  label: LocalizedText;
  href: string;
};

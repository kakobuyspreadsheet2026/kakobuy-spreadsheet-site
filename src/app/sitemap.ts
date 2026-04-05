import type { MetadataRoute } from "next";

import { categories, faqPages, guides, siteConfig } from "@/data/site";
import { supportedLocales, withLocalePath } from "@/lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildTimestamp = new Date();
  const baseRoutes = ["/", "/spreadsheet"];
  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
  const faqRoutes = faqPages.map((faq) => `/faq/${faq.slug}`);
  const categoryRoutes = categories.map((category) => `/category/${category.slug}`);

  const routes = [...baseRoutes, ...guideRoutes, ...faqRoutes, ...categoryRoutes];

  return routes.flatMap((route) =>
    supportedLocales.map((locale) => {
      const path = withLocalePath(locale, route);

      return {
        url: new URL(path, siteConfig.domain).toString(),
        lastModified: buildTimestamp,
        changeFrequency: route === "/" ? "daily" : "weekly",
        priority: route === "/" ? 1 : 0.8,
      };
    }),
  );
}

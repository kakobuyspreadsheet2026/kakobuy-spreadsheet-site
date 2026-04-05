import Image from "next/image";
import Link from "next/link";

import { categories, navigation, siteConfig } from "@/data/site";
import type { SupportedLocale } from "@/lib/locales";
import { withLocalePath } from "@/lib/locales";

import { LanguageSwitcher } from "./language-switcher";
import { TrackedLink } from "./tracked-link";

function getCategoryNavLabel(locale: SupportedLocale, slug: string) {
  const labels: Record<string, Record<SupportedLocale, string>> = {
    shoes: { en: "Shoes", pl: "Buty", es: "Shoes" },
    bags: { en: "Bags", pl: "Torby", es: "Bags" },
    hoodies: { en: "Hoodies", pl: "Bluzy", es: "Hoodies" },
    sneakers: { en: "Sneakers", pl: "Sneakers", es: "Sneakers" },
    jackets: { en: "Jackets", pl: "Kurtki", es: "Jackets" },
    tshirts: { en: "T-Shirts", pl: "T-Shirty", es: "T-Shirts" },
    shorts: { en: "Shorts", pl: "Shorts", es: "Shorts" },
    pants: { en: "Pants", pl: "Spodnie", es: "Pants" },
    sweatpants: { en: "Sweatpants", pl: "Sweatpants", es: "Sweatpants" },
    accessories: { en: "Accessories", pl: "Akcesoria", es: "Accessories" },
  };

  return labels[slug]?.[locale] ?? slug;
}

function getCategoriesMenuLabel(locale: SupportedLocale) {
  return {
    en: "Categories",
    pl: "Kategorie",
    es: "Categorias",
  }[locale];
}

export function SiteHeader({ locale }: { locale: SupportedLocale }) {
  const primaryNavigation = navigation.filter((item) => item.href !== "/category/shoes");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12090b]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-6">
        <div className="flex items-center justify-between gap-4">
          <Link href={withLocalePath(locale, "/")} className="flex items-center gap-3">
            <Image src="/kakobuy-logo.png" alt="Kakobuy" width={152} height={40} className="h-8 w-auto md:h-9" priority />
            <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-white/55 md:inline">Best Picks</span>
          </Link>
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70 lg:min-w-0 lg:flex-nowrap lg:justify-center lg:gap-3">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={withLocalePath(locale, item.href)} className="hover:text-white">
              {item.label[locale]}
            </Link>
          ))}
          <details className="group relative z-50">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/12 px-3 py-2 text-white/80 transition hover:border-rose-300/60 hover:text-white">
              <span>{getCategoriesMenuLabel(locale)}</span>
              <span className="text-[10px] text-white/55 transition group-open:rotate-180">v</span>
            </summary>
            <div className="absolute left-0 top-full z-[70] mt-3 w-56 overflow-hidden rounded-2xl border border-rose-200 bg-[#fff7f8] p-2 text-slate-900 shadow-[0_24px_60px_rgba(22,10,14,0.28)]">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={withLocalePath(locale, `/category/${category.slug}`)}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-rose-50 hover:text-rose-700"
                >
                  {getCategoryNavLabel(locale, category.slug)}
                </Link>
              ))}
            </div>
          </details>
          <TrackedLink
            href={siteConfig.primaryCta.href}
            trackingLabel={siteConfig.primaryCta.label[locale]}
            trackingLocation="header"
            className="shrink-0 rounded-full border border-rose-400/40 bg-rose-800 px-4 py-2 text-white transition hover:bg-rose-700"
          >
            {siteConfig.primaryCta.label[locale]}
          </TrackedLink>
        </nav>

        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: SupportedLocale }) {
  return (
    <footer className="border-t border-white/10 bg-[#12090b] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Image src="/kakobuy-logo.png" alt="Kakobuy" width={176} height={46} className="h-10 w-auto" />
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-white/45">Best Picks</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">{siteConfig.description}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-rose-200">Browse</p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link href={withLocalePath(locale, item.href)} className="hover:text-white">
                  {item.label[locale]}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm text-white/65">
          <p>{siteConfig.independenceNotice[locale]}</p>
          <p className="mt-3">{siteConfig.affiliateDisclosure[locale]}</p>
        </div>
      </div>
    </footer>
  );
}

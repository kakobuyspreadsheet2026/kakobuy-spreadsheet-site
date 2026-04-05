export const supportedLocales = ["en", "pl", "es"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const localeLabels: Record<SupportedLocale, string> = {
  en: "English",
  pl: "Polski",
  es: "Español",
};

export function getLocalePrefix(locale: SupportedLocale) {
  return locale === "en" ? "" : `/${locale}`;
}

export function withLocalePath(locale: SupportedLocale, path: string) {
  const normalizedPath = path === "/" ? "" : path;
  const localizedPath = `${getLocalePrefix(locale)}${normalizedPath}`;

  return localizedPath || "/";
}

export function getLanguageAlternates(path: string) {
  return {
    en: withLocalePath("en", path),
    pl: withLocalePath("pl", path),
    es: withLocalePath("es", path),
  };
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/pl" || pathname === "/es") {
    return "/";
  }

  return pathname.replace(/^\/(pl|es)(?=\/|$)/, "") || "/";
}

export function getLocaleFromPathname(pathname: string): SupportedLocale {
  if (pathname === "/pl" || pathname.startsWith("/pl/")) {
    return "pl";
  }

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return "es";
  }

  return "en";
}

export function switchLocalePath(pathname: string, locale: SupportedLocale) {
  return withLocalePath(locale, stripLocalePrefix(pathname));
}

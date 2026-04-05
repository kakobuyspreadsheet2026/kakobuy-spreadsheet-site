import type { NavItem } from "./types";

export const siteConfig = {
  name: "Kakobuy Spreadsheet 2026",
  description:
    "Browse better Kakobuy picks with category shortcuts, QC help, shipping answers, and cleaner next steps.",
  domain: "https://kakobuyspreadsheet.com",
  socialImagePath: "/opengraph-image",
  independenceNotice: {
    en: "Not the official Kakobuy site.",
    pl: "To nie jest oficjalna strona Kakobuy.",
    es: "Este no es el sitio oficial de Kakobuy.",
  },
  affiliateDisclosure: {
    en: "Some outbound links may be affiliate links.",
    pl: "Niektore linki wychodzace moga byc linkami afiliacyjnymi.",
    es: "Algunos enlaces salientes pueden ser enlaces de afiliado.",
  },
  primaryCta: {
    label: {
      en: "Browse Kakobuy Spreadsheet",
      pl: "Przegladaj Kakobuy Spreadsheet",
      es: "Explora Kakobuy Spreadsheet",
    },
    href: "https://maisonlooks.com",
  },
  registerCta: {
    label: {
      en: "Create Kakobuy Account",
      pl: "Zaloz konto Kakobuy",
      es: "Crear cuenta de Kakobuy",
    },
    href: "https://kakobuy.com/register",
  },
};

export const navigation: NavItem[] = [
  {
    label: { en: "Spreadsheet", pl: "Spreadsheet", es: "Spreadsheet" },
    href: "/spreadsheet",
  },
  {
    label: { en: "Guides", pl: "Poradniki", es: "Guias" },
    href: "/guides/what-is-kakobuy-spreadsheet",
  },
  {
    label: { en: "FAQ", pl: "FAQ", es: "FAQ" },
    href: "/faq/is-kakobuy-safe",
  },
  {
    label: { en: "Shoes", pl: "Buty", es: "Zapatos" },
    href: "/category/shoes",
  },
];

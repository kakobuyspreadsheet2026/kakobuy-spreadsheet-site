import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export function buildMetadata({
  title,
  description,
  socialTitle,
  socialDescription,
  path = "/",
  languages,
}: {
  title: string;
  description: string;
  socialTitle?: string;
  socialDescription?: string;
  path?: string;
  languages?: Record<string, string>;
}): Metadata {
  const url = new URL(path, siteConfig.domain).toString();
  const socialImageUrl = new URL(siteConfig.socialImagePath, siteConfig.domain).toString();
  const resolvedSocialTitle = socialTitle ?? title;
  const resolvedSocialDescription = socialDescription ?? description;

  return {
    metadataBase: new URL(siteConfig.domain),
    title,
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: resolvedSocialTitle,
      description: resolvedSocialDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: socialImageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedSocialTitle,
      description: resolvedSocialDescription,
      images: [socialImageUrl],
    },
  };
}

export function getCoreRouteSocialMetadata(
  locale: "en" | "pl" | "es",
  slug: string,
): { title: string; description: string } | undefined {
  const values = {
    en: {
      shoes: {
        title: "Kakobuy Spreadsheet Shoes | Start Here Before QC",
        description:
          "Compare a few real pairs first, then move into QC and the final before-paying check with less guesswork.",
      },
      "kakobuy-qc-guide": {
        title: "Kakobuy QC Guide | Check The Listing Before Payment",
        description:
          "Use QC after narrowing the product choice and before the final payment check so weak listings drop out earlier.",
      },
      "what-to-check-before-paying-on-kakobuy": {
        title: "Before Paying On Kakobuy | Final Check After QC",
        description:
          "Use this final check after QC to confirm the order still makes sense once cost, shipping pressure, and doubt are reviewed together.",
      },
    },
    pl: {
      shoes: {
        title: "Kakobuy Spreadsheet Buty | Zacznij Tu Przed QC",
        description:
          "Najpierw porownaj kilka prawdziwych par, a potem przejdz do QC i finalnego checku przed platnoscia z mniejsza iloscia zgadywania.",
      },
      "kakobuy-qc-guide": {
        title: "Poradnik QC Kakobuy | Sprawdz Oferte Przed Platnoscia",
        description:
          "Uzyj QC po zawezeniu wyboru produktu i przed finalnym checkiem platnosci, aby slabsze oferty odpadly wczesniej.",
      },
      "what-to-check-before-paying-on-kakobuy": {
        title: "Przed Platnoscia W Kakobuy | Finalny Check Po QC",
        description:
          "Uzyj tego finalnego checku po QC, aby potwierdzic, ze order nadal ma sens po spojrzeniu razem na koszt, presje shippingu i reszte watpliwosci.",
      },
    },
    es: {
      shoes: {
        title: "Kakobuy Spreadsheet Shoes | Empieza Aqui Antes Del QC",
        description:
          "Compara primero unos pocos pares reales y luego pasa al QC y al check final antes de pagar con menos suposiciones.",
      },
      "kakobuy-qc-guide": {
        title: "Guia De QC De Kakobuy | Revisa El Listado Antes De Pagar",
        description:
          "Usa el QC despues de reducir la eleccion del producto y antes del check final de pago para que los listados debiles caigan antes.",
      },
      "what-to-check-before-paying-on-kakobuy": {
        title: "Antes De Pagar En Kakobuy | Check Final Despues Del QC",
        description:
          "Usa este check final despues del QC para confirmar que el pedido todavia tiene sentido cuando coste, presion de shipping y dudas se miran juntos.",
      },
    },
  } as const;

  return values[locale][slug as keyof (typeof values)[typeof locale]];
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
  };
}

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: new URL(path, siteConfig.domain).toString(),
    publisher: organizationJsonLd(),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.domain).toString(),
    })),
  };
}

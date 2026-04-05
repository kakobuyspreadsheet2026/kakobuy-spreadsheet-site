import { categories, faqPages, guides, homepageCopy, siteConfig, spreadsheetPageCopy } from "@/data/site";
import type { CategoryPage, FaqPage, Guide } from "@/data/types";
import type { SupportedLocale } from "@/lib/locales";
import { withLocalePath } from "@/lib/locales";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

import { JsonLd } from "./json-ld";
import {
  ActionRow,
  BreadcrumbTrail,
  BulletList,
  Callout,
  CardGrid,
  EditorialHero,
  FindsSurface,
  HighlightCard,
  LinkCard,
  MiniStatGrid,
  PageShell,
  RouteActionCard,
  Section,
  SpreadsheetPreview,
  TextStack,
} from "./page-sections";
import { TrackedLink } from "./tracked-link";

function getGuideHref(locale: SupportedLocale, slug: string) {
  return withLocalePath(locale, `/guides/${slug}`);
}

function getFaqHref(locale: SupportedLocale, slug: string) {
  return withLocalePath(locale, `/faq/${slug}`);
}

function getCategoryHref(locale: SupportedLocale, slug: string) {
  return withLocalePath(locale, `/category/${slug}`);
}

function renderPrimaryCtas(locale: SupportedLocale, tone: "light" | "dark" = "light") {
  const primaryClassName =
    tone === "dark"
      ? "rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-50"
      : "rounded-full bg-rose-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700";
  const secondaryClassName =
    tone === "dark"
      ? "rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-200 hover:bg-white/6"
      : "rounded-full border border-rose-200 px-5 py-3 text-sm font-semibold text-rose-900 transition hover:border-rose-400";

  return (
    <ActionRow>
      <TrackedLink
        href={siteConfig.primaryCta.href}
        trackingLabel={siteConfig.primaryCta.label[locale]}
        trackingLocation="hero"
        className={primaryClassName}
      >
        {siteConfig.primaryCta.label[locale]}
      </TrackedLink>
      <TrackedLink
        href={siteConfig.registerCta.href}
        trackingLabel={siteConfig.registerCta.label[locale]}
        trackingLocation="hero-secondary"
        className={secondaryClassName}
      >
        {siteConfig.registerCta.label[locale]}
      </TrackedLink>
    </ActionRow>
  );
}

function getLocalizedLabel(
  locale: SupportedLocale,
  values: { en: string; pl: string; es: string },
) {
  return values[locale];
}

function getSpreadsheetPreviewRows(locale: SupportedLocale) {
  const values = {
    en: [
      {
        keyword: "Best first order on Kakobuy",
        intent: "first order",
        bestPage: "first-order guide",
        nextStep: "tshirts or shoes",
      },
      {
        keyword: "Kakobuy spreadsheet shoes",
        intent: "product choice",
        bestPage: "shoes category",
        nextStep: "qc guide",
      },
      {
        keyword: "Kakobuy qc guide",
        intent: "qc",
        bestPage: "qc guide",
        nextStep: "before paying page",
      },
      {
        keyword: "What to check before paying on Kakobuy",
        intent: "late stage",
        bestPage: "before paying guide",
        nextStep: "shipping cost page",
      },
    ],
    pl: [
      {
        keyword: "Najlepszy pierwszy order w Kakobuy",
        intent: "pierwsze zamowienie",
        bestPage: "poradnik pierwszego zamowienia",
        nextStep: "t-shirty albo shoes",
      },
      {
        keyword: "kakobuy spreadsheet shoes",
        intent: "produkt",
        bestPage: "strona shoes",
        nextStep: "poradnik qc",
      },
      {
        keyword: "Poradnik Kakobuy qc",
        intent: "qc",
        bestPage: "poradnik qc",
        nextStep: "strona przed platnoscia",
      },
      {
        keyword: "Co sprawdzic przed platnoscia w Kakobuy",
        intent: "koncowka",
        bestPage: "strona przed platnoscia",
        nextStep: "poradnik kosztu shippingu",
      },
    ],
    es: [
      {
        keyword: "Mejor primer pedido en Kakobuy",
        intent: "primer pedido",
        bestPage: "guia de primer pedido",
        nextStep: "t-shirts o shoes",
      },
      {
        keyword: "kakobuy spreadsheet shoes",
        intent: "producto",
        bestPage: "pagina shoes",
        nextStep: "guia qc",
      },
      {
        keyword: "Guia Kakobuy qc",
        intent: "qc",
        bestPage: "guia de qc",
        nextStep: "pagina antes de pagar",
      },
      {
        keyword: "Que revisar antes de pagar en Kakobuy",
        intent: "etapa final",
        bestPage: "guia antes de pagar",
        nextStep: "guia de coste de shipping",
      },
    ],
  };

  return values[locale];
}

function getFirstClickHighlights(locale: SupportedLocale) {
  const values = {
    en: [
      {
        eyebrow: "First Click",
        title: "Start At The Spreadsheet Hub",
        body: "Start here when you still need one place that connects categories, QC, shipping, and buying steps more clearly.",
      },
      {
        eyebrow: "Fastest Path",
        title: "Jump Straight To A Category",
        body: "Best for product-led searches like shoes, bags, or hoodies where a broad intro would only slow the user down.",
      },
      {
        eyebrow: "Trust Check",
        title: "Use QC Or FAQ Before You Leave",
        body: "Open this when you are almost ready to move on but still need a fast answer on safety, legitimacy, or inspection steps.",
      },
    ],
    pl: [
      {
        eyebrow: "Pierwszy Klik",
        title: "Zacznij Od Hubu Spreadsheet",
        body: "Najlepsze dla odwiedzajacych, ktorzy nadal chca zrozumiec, jak lacza sie linki, kategorie, QC i kolejne kroki zakupu.",
      },
      {
        eyebrow: "Najszybsza Sciezka",
        title: "Przejdz Od Razu Do Kategorii",
        body: "Najlepsze dla wyszukiwan produktowych jak shoes, bags lub hoodies, gdzie szerokie intro tylko spowalnia ruch.",
      },
      {
        eyebrow: "Kontrola Zaufania",
        title: "Uzyj QC Lub FAQ Przed Wyjsciem",
        body: "Najlepsze dla odwiedzajacych, ktorzy sa blisko klikniecia na zewnatrz, ale nadal potrzebuja jasnosci o bezpieczenstwie lub kontroli.",
      },
    ],
    es: [
      {
        eyebrow: "Primer Clic",
        title: "Empieza En El Hub Principal",
        body: "Ideal para visitantes que todavia necesitan entender como encajan los links, categorias, QC y pasos de compra.",
      },
      {
        eyebrow: "Ruta Mas Rapida",
        title: "Entra Directo En Una Categoria",
        body: "Ideal para busquedas de producto como shoes, bags o hoodies donde una introduccion amplia solo retrasa la decision.",
      },
      {
        eyebrow: "Control De Confianza",
        title: "Usa QC O FAQ Antes De Salir",
        body: "Ideal para visitantes que casi estan listos para salir del sitio pero aun necesitan claridad sobre seguridad o revision.",
      },
    ],
  };

  return values[locale];
}

function getHomepageAdvantageCards(locale: SupportedLocale) {
  const values = {
    en: [
      {
        eyebrow: "Scale",
        title: "60,000+ Products After You Narrow Down",
        body: "You do not have to start cold in a huge catalog. Use the route here first, then open a much bigger product pool on Maisonlooks.",
      },
      {
        eyebrow: "Precision",
        title: "More Accurate Search Than A Raw Spreadsheet",
        body: "Once the category or product direction is clear, keyword search becomes much easier than digging through scattered spreadsheet rows.",
      },
      {
        eyebrow: "Image Search",
        title: "Image Search When Words Are Too Loose",
        body: "If you know the look but not the exact name, image search gives you a faster way to turn visual reference into a product path.",
      },
      {
        eyebrow: "Inspiration",
        title: "Outfit Inspiration For Full-Look Browsing",
        body: "When you want more than one isolated item, outfit-led discovery helps keep the browse coherent instead of random.",
      },
    ],
    pl: [
      {
        eyebrow: "Skala",
        title: "60 000+ Produktow Po Zawężeniu Drogi",
        body: "Nie musisz wchodzic od razu w ogromny katalog. Najpierw uporzadkuj trase tutaj, a potem otworz duzo wieksza pule produktow w Maisonlooks.",
      },
      {
        eyebrow: "Precyzja",
        title: "Dokladniejszy Search Niz Surowy Spreadsheet",
        body: "Gdy kategoria albo kierunek produktu jest juz jasny, keyword search staje sie duzo prostszy niz kopanie po rozproszonych wierszach spreadsheetu.",
      },
      {
        eyebrow: "Image Search",
        title: "Image Search Gdy Slowa Sa Zbyt Ogolne",
        body: "Jesli znasz look, ale nie nazwe, image search daje szybsza droge od referencji wizualnej do konkretnej sciezki produktowej.",
      },
      {
        eyebrow: "Inspiracja",
        title: "Inspiracje Outfitowe Dla Pelniejszego Browse",
        body: "Gdy nie szukasz jednego samotnego itemu, odkrywanie przez outfity pomaga utrzymac przegladanie w jednym spojnyn kierunku.",
      },
    ],
    es: [
      {
        eyebrow: "Escala",
        title: "60,000+ Productos Despues De Afinar La Ruta",
        body: "No necesitas entrar en frio a un catalogo enorme. Primero ordena la ruta aqui y luego abre un pool mucho mas grande de productos en Maisonlooks.",
      },
      {
        eyebrow: "Precision",
        title: "Busqueda Mas Precisa Que Un Spreadsheet Crudo",
        body: "Cuando la categoria o direccion del producto ya esta clara, la busqueda por keyword se vuelve mucho mas facil que revisar filas dispersas del spreadsheet.",
      },
      {
        eyebrow: "Image Search",
        title: "Image Search Cuando Las Palabras No Bastan",
        body: "Si conoces el look pero no el nombre exacto, image search te da una via mas rapida desde la referencia visual hasta una ruta de producto concreta.",
      },
      {
        eyebrow: "Inspiracion",
        title: "Inspiracion De Outfit Para Un Browse Mas Completo",
        body: "Cuando no buscas solo una pieza aislada, descubrir por outfits ayuda a mantener la navegacion en una sola direccion coherente.",
      },
    ],
  };

  return values[locale];
}

function getHomepageRouteExplainCards(locale: SupportedLocale) {
  const values = {
    en: [
      {
        eyebrow: "Step 01",
        title: "Start With A Better Product Path",
        body: "Use categories, QC help, shipping answers, and first-order pages to cut out weak options before the browse gets bigger.",
        href: withLocalePath(locale, "/spreadsheet"),
        hrefLabel: "Open spreadsheet",
      },
      {
        eyebrow: "Step 02",
        title: "Keep Browsing In A Bigger Catalog",
        body: "Once the direction feels right, Maisonlooks gives you much more room to search, compare, and keep building the order.",
        href: siteConfig.primaryCta.href,
        hrefLabel: siteConfig.primaryCta.label[locale],
      },
      {
        eyebrow: "Step 03",
        title: "Search By Keyword, Image, Or Outfit Direction",
        body: "Browse the way you naturally shop when one keyword, one photo, or one look leads to the next product.",
        href: siteConfig.primaryCta.href,
        hrefLabel: siteConfig.primaryCta.label[locale],
      },
    ],
    pl: [
      {
        eyebrow: "Krok 01",
        title: "Zacznij Od Lepszej Drogi Do Produktu",
        body: "Uzyj kategorii, QC, shipping help i stron pierwszego orderu, aby odciac slabsze opcje zanim przegladanie zrobi sie wieksze.",
        href: withLocalePath(locale, "/spreadsheet"),
        hrefLabel: "Otworz spreadsheet",
      },
      {
        eyebrow: "Krok 02",
        title: "Przegladaj Dalej W Wiekszym Katalogu",
        body: "Gdy kierunek jest juz dobry, Maisonlooks daje duzo wiecej miejsca do searchu, porownan i dalszego budowania orderu.",
        href: siteConfig.primaryCta.href,
        hrefLabel: siteConfig.primaryCta.label[locale],
      },
      {
        eyebrow: "Krok 03",
        title: "Szukaj Po Keywordzie, Obrazie Albo Kierunku Outfitu",
        body: "Przegladaj tak, jak naturalnie kupujesz, gdy jeden keyword, jedno zdjecie albo jeden look prowadzi do kolejnego produktu.",
        href: siteConfig.primaryCta.href,
        hrefLabel: siteConfig.primaryCta.label[locale],
      },
    ],
    es: [
      {
        eyebrow: "Paso 01",
        title: "Empieza Con Una Mejor Ruta De Producto",
        body: "Usa categorias, ayuda de QC, respuestas de shipping y paginas de primer pedido para quitar opciones flojas antes de entrar en un catalogo mas grande.",
        href: withLocalePath(locale, "/spreadsheet"),
        hrefLabel: "Abrir spreadsheet",
      },
      {
        eyebrow: "Paso 02",
        title: "Sigue Navegando En Un Catalogo Mas Grande",
        body: "Cuando la direccion ya se siente correcta, Maisonlooks te da mucho mas espacio para buscar, comparar y seguir construyendo el pedido.",
        href: siteConfig.primaryCta.href,
        hrefLabel: siteConfig.primaryCta.label[locale],
      },
      {
        eyebrow: "Paso 03",
        title: "Busca Por Keyword, Imagen O Direccion De Outfit",
        body: "Navega como realmente compras cuando una keyword, una foto o un look te lleva al siguiente producto.",
        href: siteConfig.primaryCta.href,
        hrefLabel: siteConfig.primaryCta.label[locale],
      },
    ],
  };

  return values[locale];
}

function getHeroNavCards(locale: SupportedLocale) {
  return [
    {
      eyebrow: getLocalizedLabel(locale, { en: "Entry 01", pl: "Wejscie 01", es: "Entrada 01" }),
      title: getLocalizedLabel(locale, {
        en: "Shoes",
        pl: "Shoes",
        es: "Shoes",
      }),
      description: getLocalizedLabel(locale, {
        en: "Open the strongest product-intent category when you already know shoes are the first thing you want to compare.",
        pl: "Otworz najmocniejsza kategorie produktowa, gdy od razu wiesz, ze chcesz porownywac shoes.",
        es: "Abre la categoria de mayor intencion de producto cuando ya sabes que shoes es lo primero que quieres comparar.",
      }),
      href: getCategoryHref(locale, "shoes"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open shoes",
        pl: "Otworz shoes",
        es: "Abrir shoes",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Entry 02", pl: "Wejscie 02", es: "Entrada 02" }),
      title: getLocalizedLabel(locale, {
        en: "Kakobuy Spreadsheet",
        pl: "Kakobuy Spreadsheet",
        es: "Kakobuy Spreadsheet",
      }),
      description: getLocalizedLabel(locale, {
        en: "Open the main Kakobuy Spreadsheet route when you still need the clearest next click.",
        pl: "Otworz glowna trase Kakobuy Spreadsheet, gdy nadal potrzebujesz najczystszego kolejnego kliku.",
        es: "Abre la ruta principal de Kakobuy Spreadsheet cuando todavia necesites el siguiente clic mas claro.",
      }),
      href: withLocalePath(locale, "/spreadsheet"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open Kakobuy Spreadsheet",
        pl: "Otworz Kakobuy Spreadsheet",
        es: "Abrir Kakobuy Spreadsheet",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Entry 03", pl: "Wejscie 03", es: "Entrada 03" }),
      title: "QC Guide",
      description: getLocalizedLabel(locale, {
        en: "Open Kakobuy QC help when trust in the batch or listing is still low.",
        pl: "Otworz pomoc Kakobuy QC, gdy zaufanie do batcha lub oferty nadal jest niskie.",
        es: "Abre ayuda de Kakobuy QC cuando la confianza en el batch o listado sigue siendo baja.",
      }),
      href: getGuideHref(locale, "kakobuy-qc-guide"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open QC guide",
        pl: "Otworz poradnik QC",
        es: "Abrir guia de QC",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Entry 04", pl: "Wejscie 04", es: "Entrada 04" }),
      title: "Shipping",
      description: getLocalizedLabel(locale, {
        en: "Check Kakobuy shipping cost, timing, and risk before the external click.",
        pl: "Sprawdz koszt, czas i ryzyko shippingu Kakobuy przed kliknieciem na zewnatrz.",
        es: "Revisa coste, tiempos y riesgo del shipping de Kakobuy antes del clic externo.",
      }),
      href: getGuideHref(locale, "kakobuy-shipping-guide"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open shipping guide",
        pl: "Otworz poradnik shippingu",
        es: "Abrir guia de shipping",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Entry 05", pl: "Wejscie 05", es: "Entrada 05" }),
      title: getLocalizedLabel(locale, {
        en: "Trust Check",
        pl: "Kontrola Zaufania",
        es: "Control De Confianza",
      }),
      description: getLocalizedLabel(locale, {
        en: "Read the short safety answer if you need quick reassurance first.",
        pl: "Przeczytaj krotka odpowiedz o bezpieczenstwie, jesli najpierw potrzebujesz upewnienia.",
        es: "Lee la respuesta corta de seguridad si primero necesitas tranquilidad.",
      }),
      href: getFaqHref(locale, "is-kakobuy-safe"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open safety FAQ",
        pl: "Otworz FAQ o bezpieczenstwie",
        es: "Abrir FAQ de seguridad",
      }),
    },
  ];
}

function getFeaturedFindRows(locale: SupportedLocale) {
  return [
    {
      slot: getLocalizedLabel(locale, { en: "01", pl: "01", es: "01" }),
      category: getLocalizedLabel(locale, { en: "First Order", pl: "Pierwsze Zamowienie", es: "Primer Pedido" }),
      angle: getLocalizedLabel(locale, {
        en: "Start here when you want the safest first move before QC, sizing, or shipping questions get heavier.",
        pl: "Zacznij tutaj, jesli chcesz najbezpieczniejszego pierwszego ruchu zanim QC, rozmiar albo shipping stana sie trudniejsze.",
        es: "Empieza aqui cuando quieras el primer paso mas seguro antes de que QC, talla o shipping se vuelvan mas pesados.",
      }),
      nextHref: withLocalePath(locale, "/guides/best-first-order-on-kakobuy"),
      nextLabel: getLocalizedLabel(locale, {
        en: "Open first-order guide",
        pl: "Otworz poradnik pierwszego zamowienia",
        es: "Abrir guia de primer pedido",
      }),
    },
    {
      slot: getLocalizedLabel(locale, { en: "02", pl: "02", es: "02" }),
      category: getLocalizedLabel(locale, { en: "Shoes", pl: "Buty", es: "Shoes" }),
      angle: getLocalizedLabel(locale, {
        en: "Open this when you already know the product type and want a cleaner route than a broad intro.",
        pl: "Otworz to, gdy znasz juz typ produktu i chcesz czystszej sciezki niz szerokie intro.",
        es: "Abre esto cuando ya conoces el tipo de producto y quieres una ruta mas limpia que una intro amplia.",
      }),
      nextHref: withLocalePath(locale, "/category/shoes"),
      nextLabel: getLocalizedLabel(locale, {
        en: "Open shoes category",
        pl: "Otworz kategorie shoes",
        es: "Abrir categoria shoes",
      }),
    },
    {
      slot: getLocalizedLabel(locale, { en: "03", pl: "03", es: "03" }),
      category: "QC",
      angle: getLocalizedLabel(locale, {
        en: "Use this when you found a listing but still do not trust the batch, seller, or photos enough.",
        pl: "Uzyj tego, gdy znalazles oferte, ale nadal nie ufasz batchowi, sellerowi ani zdjeciom.",
        es: "Usa esto cuando encontraste un listado, pero todavia no confias lo suficiente en batch, seller o fotos.",
      }),
      nextHref: withLocalePath(locale, "/guides/kakobuy-qc-guide"),
      nextLabel: getLocalizedLabel(locale, {
        en: "Read QC guide",
        pl: "Czytaj poradnik QC",
        es: "Leer guia de QC",
      }),
    },
    {
      slot: getLocalizedLabel(locale, { en: "04", pl: "04", es: "04" }),
      category: getLocalizedLabel(locale, { en: "Shipping Cost", pl: "Koszt Shippingu", es: "Coste De Shipping" }),
      angle: getLocalizedLabel(locale, {
        en: "Open this when you are close to acting but delivery cost, parcel size, or timing is still blocking you.",
        pl: "Otworz to, gdy jestes blisko decyzji, ale koszt dostawy, wielkosc paczki albo timing nadal Cie blokuja.",
        es: "Abre esto cuando ya estas cerca de actuar, pero coste de envio, tamano del paquete o tiempos todavia te frenan.",
      }),
      nextHref: withLocalePath(locale, "/guides/how-to-estimate-kakobuy-shipping-cost"),
      nextLabel: getLocalizedLabel(locale, {
        en: "Read shipping-cost guide",
        pl: "Czytaj poradnik kosztu shippingu",
        es: "Leer guia de coste de shipping",
      }),
    },
  ];
}

function getBlockerRoutes(locale: SupportedLocale) {
  return [
    {
      eyebrow: getLocalizedLabel(locale, { en: "Blocked By Trust", pl: "Blokuje Zaufanie", es: "Bloqueado Por Confianza" }),
      title: getLocalizedLabel(locale, {
        en: "Still Unsure If Kakobuy Is Safe?",
        pl: "Nadal Nie Wiesz, Czy Kakobuy Jest Bezpieczne?",
        es: "Todavia No Sabes Si Kakobuy Es Seguro?",
      }),
      body: getLocalizedLabel(locale, {
        en: "Start with the shortest trust answer, then move into QC if you still need a stronger reason to continue.",
        pl: "Zacznij od krotkiej odpowiedzi o zaufaniu, a potem przejdz do QC, jesli nadal potrzebujesz mocniejszego powodu, by isc dalej.",
        es: "Empieza por la respuesta corta de confianza y luego pasa a QC si todavia necesitas una razon mas fuerte para seguir.",
      }),
      href: withLocalePath(locale, "/faq/is-kakobuy-safe"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Go to safety FAQ",
        pl: "Przejdz do FAQ o bezpieczenstwie",
        es: "Ir al FAQ de seguridad",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Blocked By Process", pl: "Blokuje Proces", es: "Bloqueado Por Proceso" }),
      title: getLocalizedLabel(locale, {
        en: "Need The Buying Flow Explained?",
        pl: "Potrzebujesz Wyjasnienia Procesu Zakupu?",
        es: "Necesitas Que Se Explique El Flujo De Compra?",
      }),
      body: getLocalizedLabel(locale, {
        en: "Use the buying guide if you know what you want but still want a calmer order from browse to payment.",
        pl: "Uzyj poradnika zakupu, jesli wiesz juz czego chcesz, ale nadal potrzebujesz spokojniejszej kolejnosci od przegladania do platnosci.",
        es: "Usa la guia de compra si ya sabes lo que quieres, pero todavia prefieres un orden mas calmado desde la navegacion hasta el pago.",
      }),
      href: withLocalePath(locale, "/guides/how-to-buy-from-kakobuy"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open buying guide",
        pl: "Otworz poradnik zakupu",
        es: "Abrir guia de compra",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Blocked By Product Choice", pl: "Blokuje Wybor Produktu", es: "Bloqueado Por Eleccion De Producto" }),
      title: getLocalizedLabel(locale, {
        en: "Already Know The Product Type?",
        pl: "Znasz Juz Typ Produktu?",
        es: "Ya Sabes El Tipo De Producto?",
      }),
      body: getLocalizedLabel(locale, {
        en: "Skip the broad overview and move into an easier first-order category where the next click is more obvious.",
        pl: "Pomin szerokie intro i przejdz do latwiejszej kategorii na pierwsze zamowienie, gdzie kolejny klik jest bardziej oczywisty.",
        es: "Salta la vista general y entra en una categoria mas facil para primer pedido donde el siguiente clic sea mas obvio.",
      }),
      href: withLocalePath(locale, "/category/tshirts"),
      hrefLabel: getLocalizedLabel(locale, {
        en: "Open category path",
        pl: "Otworz sciezke kategorii",
        es: "Abrir ruta de categoria",
      }),
    },
  ];
}

function getHubStatItems(locale: SupportedLocale) {
  return [
    {
      label: getLocalizedLabel(locale, {
        en: "Best For",
        pl: "Najlepsze Dla",
        es: "Mejor Para",
      }),
      value: getLocalizedLabel(locale, {
        en: "Kakobuy Spreadsheet Searches",
        pl: "Szukania Kakobuy Spreadsheet",
        es: "Busquedas De Kakobuy Spreadsheet",
      }),
      description: getLocalizedLabel(locale, {
        en: "Open this when the phrase is clear but the strongest next page still is not.",
        pl: "Otworz to, gdy fraza jest juz jasna, ale nadal nie wiesz, ktora kolejna strona jest najmocniejsza.",
        es: "Abre esto cuando la frase ya esta clara, pero la siguiente pagina mas fuerte todavia no.",
      }),
    },
    {
      label: getLocalizedLabel(locale, {
        en: "Strongest Routes",
        pl: "Najmocniejsze Trasy",
        es: "Rutas Mas Fuertes",
      }),
      value: getLocalizedLabel(locale, {
        en: "Shoes, QC, Before Paying",
        pl: "Shoes, QC, Przed Platnoscia",
        es: "Shoes, QC, Antes De Pagar",
      }),
      description: getLocalizedLabel(locale, {
        en: "Use this hub when one of these is probably the next stop but you still want the cleanest route into it.",
        pl: "Uzyj tego hubu, gdy jedna z tych tras jest pewnie kolejnym krokiem, ale nadal chcesz najczystszej drogi do niej.",
        es: "Usa este hub cuando una de estas rutas probablemente sea el siguiente paso, pero todavia quieres la entrada mas limpia.",
      }),
    },
    {
      label: getLocalizedLabel(locale, {
        en: "What It Does",
        pl: "Co To Robi",
        es: "Que Hace",
      }),
      value: getLocalizedLabel(locale, {
        en: "Turns Search Into A Decision",
        pl: "Zamienia Search W Decyzje",
        es: "Convierte La Busqueda En Decision",
      }),
      description: getLocalizedLabel(locale, {
        en: "It narrows broad spreadsheet intent into a guide, a FAQ, or a category page with less wasted motion.",
        pl: "Zawęza szeroka intencje spreadsheet do poradnika, FAQ albo kategorii z mniejsza strata ruchu.",
        es: "Reduce la intencion amplia del spreadsheet a una guia, una FAQ o una categoria con menos movimiento perdido.",
      }),
    },
  ];
}

function getHubRoleHighlights(locale: SupportedLocale) {
  return [
    {
      eyebrow: getLocalizedLabel(locale, { en: "Best Use", pl: "Najlepsze Uzycie", es: "Mejor Uso" }),
      title: getLocalizedLabel(locale, {
        en: "Use This Hub When The Next Step Still Feels Mixed",
        pl: "Uzyj Tego Hubu, Gdy Kolejny Krok Nadal Sie Miesza",
        es: "Usa Este Hub Cuando El Siguiente Paso Aun Se Mezcla",
      }),
      body: getLocalizedLabel(locale, {
        en: "Some moments clearly need shoes, others need QC, shipping, or the final check before paying. This helps sort that quickly.",
        pl: "Czasem ewidentnie potrzebujesz shoes, innym razem QC, shippingu albo finalnego checku przed platnoscia. To pomaga szybko to rozdzielic.",
        es: "A veces esta claro que necesitas shoes, otras QC, shipping o la revision final antes de pagar. Esto ayuda a separarlo rapido.",
      }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Why It Helps", pl: "Dlaczego Pomaga", es: "Por Que Ayuda" }),
      title: getLocalizedLabel(locale, {
        en: "It Pushes You Toward The Strongest Page",
        pl: "Pcha Cie W Strone Najmocniejszej Strony",
        es: "Te Empuja Hacia La Pagina Mas Fuerte",
      }),
      body: getLocalizedLabel(locale, {
        en: "The point is not coverage for its own sake. It is to reach the strongest page faster and waste less intent on broad browsing.",
        pl: "Nie chodzi o sam zasieg. Chodzi o szybsze dojscie do najmocniejszej strony i marnowanie mniejszej ilosci intencji na szerokie przegladanie.",
        es: "La idea no es cubrir por cubrir. Es llegar antes a la pagina mas fuerte y desperdiciar menos intencion en una navegacion demasiado amplia.",
      }),
    },
  ];
}

function getHubStructureCards(locale: SupportedLocale) {
  return spreadsheetPageCopy[locale].sections.map((section, index) => ({
    eyebrow: getLocalizedLabel(locale, {
      en: `Step 0${index + 1}`,
      pl: `Warstwa 0${index + 1}`,
      es: `Capa 0${index + 1}`,
    }),
    title: section.heading,
    body: section.body,
  }));
}

function getWhyChooseSpreadsheetCards(locale: SupportedLocale) {
  const values = {
    en: [
      {
        eyebrow: "Why Maisonlooks 01",
        title: "Arrive With A Better Filter",
        body: "You arrive with cleaner product direction instead of dropping into a huge catalog with no filter at all.",
      },
      {
        eyebrow: "Why Maisonlooks 02",
        title: "Use A Bigger Catalog Without Losing Focus",
        body: "A large product pool works best when you already know the category, style, or order plan you want to keep pushing.",
      },
      {
        eyebrow: "Why Maisonlooks 03",
        title: "Search The Way You Actually Browse",
        body: "Keyword search, image search, and outfit-led discovery give you more than one natural way to keep finding better products.",
      },
      {
        eyebrow: "Why Maisonlooks 04",
        title: "Turn Research Into Better Product Discovery",
        body: "The research gets cleaner here. The deeper product browse starts there.",
      },
    ],
    pl: [
      {
        eyebrow: "Maisonlooks 01",
        title: "Wchodzisz Z Lepszym Filtrem",
        body: "Wchodzisz z czystszym kierunkiem produktu zamiast wpasc w ogromny katalog bez zadnego filtra.",
      },
      {
        eyebrow: "Maisonlooks 02",
        title: "Wiekszy Katalog Ma Sens Gdy Wiesz Czego Chcesz",
        body: "Duza pula produktow dziala najlepiej wtedy, gdy wiesz juz jaka kategorie, styl albo plan orderu chcesz dalej pchac.",
      },
      {
        eyebrow: "Maisonlooks 03",
        title: "Szukaj Tak, Jak Naprawde Przegladasz",
        body: "Keyword search, image search i odkrywanie przez outfity daja wiecej niz jeden naturalny sposob znajdowania lepszych produktow.",
      },
      {
        eyebrow: "Maisonlooks 04",
        title: "Zamien Research W Lepsze Odkrywanie Produktow",
        body: "Research robi sie czystszy tutaj. Glebsze przegladanie produktow zaczyna sie tam.",
      },
    ],
    es: [
      {
        eyebrow: "Maisonlooks 01",
        title: "Llegas Con Un Filtro Mejor",
        body: "Llegas con una direccion de producto mas clara en vez de caer en un catalogo enorme sin ningun filtro.",
      },
      {
        eyebrow: "Maisonlooks 02",
        title: "Un Catalogo Grande Ayuda Mas Cuando Ya Sabes Que Quieres",
        body: "Un pool grande de productos funciona mejor cuando ya conoces la categoria, el estilo o el plan de pedido que quieres seguir empujando.",
      },
      {
        eyebrow: "Maisonlooks 03",
        title: "Busca Como De Verdad Navegas",
        body: "Keyword search, image search y descubrimiento por outfits te dan mas de una forma natural de seguir encontrando mejores productos.",
      },
      {
        eyebrow: "Maisonlooks 04",
        title: "Convierte La Investigacion En Mejor Descubrimiento",
        body: "La investigacion se vuelve mas clara aqui. La exploracion profunda de productos empieza alli.",
      },
    ],
  };

  return values[locale];
}

function getHomepagePopularEntryCards(locale: SupportedLocale) {
  return [
    {
      eyebrow: getLocalizedLabel(locale, { en: "Popular 01", pl: "Popularne 01", es: "Popular 01" }),
      title: getLocalizedLabel(locale, { en: "Kakobuy Spreadsheet Shoes", pl: "Kakobuy Spreadsheet Shoes", es: "Kakobuy Spreadsheet Shoes" }),
      body: getLocalizedLabel(locale, {
        en: "Open the highest-intent category when you already know the first comparison should start with shoes.",
        pl: "Otworz kategorie o najwyzszej intencji, gdy od razu wiesz, ze pierwsze porownanie powinno zaczac sie od shoes.",
        es: "Abre la categoria de mayor intencion cuando ya sabes que la primera comparacion debe empezar por shoes.",
      }),
      href: getCategoryHref(locale, "shoes"),
      hrefLabel: getLocalizedLabel(locale, { en: "Open shoes route", pl: "Otworz trase shoes", es: "Abrir ruta shoes" }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Popular 02", pl: "Popularne 02", es: "Popular 02" }),
      title: getLocalizedLabel(locale, { en: "Kakobuy Spreadsheet T-Shirts", pl: "Kakobuy Spreadsheet T-Shirty", es: "Kakobuy Spreadsheet T-Shirts" }),
      body: getLocalizedLabel(locale, {
        en: "Use this when you want one of the easiest first-order clothing routes with lighter parcel pressure.",
        pl: "Uzyj tego, gdy chcesz jednej z najprostszych tras odziezowych na pierwszy order z lzejsza presja paczki.",
        es: "Usa esto cuando quieras una de las rutas de ropa mas simples para primer pedido y con menos presion de paquete.",
      }),
      href: getCategoryHref(locale, "tshirts"),
      hrefLabel: getLocalizedLabel(locale, { en: "Open t-shirts route", pl: "Otworz trase t-shirtow", es: "Abrir ruta de t-shirts" }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Popular 03", pl: "Popularne 03", es: "Popular 03" }),
      title: getLocalizedLabel(locale, {
        en: "Best First Order",
        pl: "Najlepszy Pierwszy Order",
        es: "Mejor Primer Pedido",
      }),
      body: getLocalizedLabel(locale, {
        en: "Start here if you want the safest first move before QC, shipping, and payment start stacking up.",
        pl: "Zacznij tutaj, jesli chcesz najbezpieczniejszego pierwszego ruchu zanim QC, shipping i platnosc zaczna sie nakladac.",
        es: "Empieza aqui si quieres el primer paso mas seguro antes de que QC, shipping y pago empiecen a acumularse.",
      }),
      href: getGuideHref(locale, "best-first-order-on-kakobuy"),
      hrefLabel: getLocalizedLabel(locale, { en: "Open first-order guide", pl: "Otworz poradnik pierwszego orderu", es: "Abrir guia de primer pedido" }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Popular 04", pl: "Popularne 04", es: "Popular 04" }),
      title: "Kakobuy QC Guide",
      body: getLocalizedLabel(locale, {
        en: "Open this when the product looks close but trust in the listing, batch, or photos still needs real checking.",
        pl: "Otworz to, gdy produkt wyglada blisko decyzji, ale zaufanie do listingu, batcha albo zdjec nadal wymaga prawdziwego sprawdzenia.",
        es: "Abre esto cuando el producto parece cerca, pero la confianza en el listado, batch o fotos todavia necesita una revision real.",
      }),
      href: getGuideHref(locale, "kakobuy-qc-guide"),
      hrefLabel: getLocalizedLabel(locale, { en: "Open Kakobuy QC guide", pl: "Otworz poradnik Kakobuy QC", es: "Abrir guia Kakobuy QC" }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Popular 05", pl: "Popularne 05", es: "Popular 05" }),
      title: getLocalizedLabel(locale, {
        en: "Kakobuy Before Paying",
        pl: "Przed Platnoscia",
        es: "Antes De Pagar",
      }),
      body: getLocalizedLabel(locale, {
        en: "Use the late-stage checkpoint when the order looks almost ready but you still want one cleaner final review.",
        pl: "Uzyj tego poznego checkpointu, gdy order wyglada prawie gotowo, ale nadal chcesz jednego czystszego finalnego review.",
        es: "Usa este checkpoint final cuando el pedido parece casi listo, pero todavia quieres una revision final mas limpia.",
      }),
      href: getGuideHref(locale, "what-to-check-before-paying-on-kakobuy"),
      hrefLabel: getLocalizedLabel(locale, { en: "Open before-paying guide", pl: "Otworz poradnik przed platnoscia", es: "Abrir guia antes de pagar" }),
    },
    {
      eyebrow: getLocalizedLabel(locale, { en: "Popular 06", pl: "Popularne 06", es: "Popular 06" }),
      title: getLocalizedLabel(locale, {
        en: "Kakobuy Shipping Cost",
        pl: "Koszt Shippingu",
        es: "Coste De Shipping",
      }),
      body: getLocalizedLabel(locale, {
        en: "Open this when parcel size, timing, or total delivery pressure is now the part slowing the order down.",
        pl: "Otworz to, gdy wielkosc paczki, timing albo pelna presja dostawy sa teraz tym, co spowalnia order.",
        es: "Abre esto cuando tamano del paquete, tiempos o la presion total del envio ya es lo que esta frenando el pedido.",
      }),
      href: getGuideHref(locale, "how-to-estimate-kakobuy-shipping-cost"),
      hrefLabel: getLocalizedLabel(locale, { en: "Open shipping-cost guide", pl: "Otworz poradnik kosztu shippingu", es: "Abrir guia de coste de shipping" }),
    },
  ];
}

function getHowToBuySteps(locale: SupportedLocale) {
  const values = {
    en: [
      {
        eyebrow: "Step 01",
        title: "Start With A Category",
        body: "Open a focused category first when you already know the kind of product you want to browse.",
      },
      {
        eyebrow: "Step 02",
        title: "Check QC Before Trusting",
        body: "Use QC pages to review shape, quality, and listing confidence before you move any closer to payment.",
      },
      {
        eyebrow: "Step 03",
        title: "Estimate Shipping Early",
        body: "Think about shipping cost, parcel size, and timing before you lock yourself into the wrong order setup.",
      },
      {
        eyebrow: "Step 04",
        title: "Then Move To Kakobuy",
        body: "Once the route feels clean, go to the Kakobuy official site to register or continue the order with fewer mistakes.",
      },
    ],
    pl: [
      {
        eyebrow: "Krok 01",
        title: "Zacznij Od Kategorii",
        body: "Najpierw otworz konkretna kategorie, jesli wiesz juz jaki typ produktu chcesz przegladac.",
      },
      {
        eyebrow: "Krok 02",
        title: "Sprawdz QC Zanim Zaufasz",
        body: "Uzyj stron QC, aby ocenic ksztalt, jakosc i poziom zaufania do oferty zanim zblizysz sie do platnosci.",
      },
      {
        eyebrow: "Krok 03",
        title: "Wczesniej Ocen Shipping",
        body: "Pomysl o koszcie shippingu, wielkosci paczki i czasie dostawy zanim wejdziesz w zly uklad zamowienia.",
      },
      {
        eyebrow: "Krok 04",
        title: "Dopiero Potem Idz Do Kakobuy",
        body: "Gdy trasa jest juz czytelna, przejdz na oficjalna strone Kakobuy, aby zalozyc konto albo kontynuowac zakup z mniejsza liczba bledow.",
      },
    ],
    es: [
      {
        eyebrow: "Paso 01",
        title: "Empieza Por Una Categoria",
        body: "Abre primero una categoria concreta si ya sabes el tipo de producto que quieres revisar.",
      },
      {
        eyebrow: "Paso 02",
        title: "Revisa QC Antes De Confiar",
        body: "Usa las paginas de QC para revisar forma, calidad y confianza del listado antes de acercarte al pago.",
      },
      {
        eyebrow: "Paso 03",
        title: "Calcula Shipping Antes",
        body: "Piensa en coste de shipping, tamano del paquete y tiempos antes de meterte en una configuracion de pedido equivocada.",
      },
      {
        eyebrow: "Paso 04",
        title: "Luego Ve A Kakobuy",
        body: "Cuando la ruta ya se vea clara, pasa al sitio oficial de Kakobuy para registrarte o seguir el pedido con menos errores.",
      },
    ],
  };

  return values[locale];
}

function getFeaturedGuideSlugs() {
  return [
    "best-shoes-on-kakobuy",
    "how-to-qc-shoes-on-kakobuy",
    "best-first-shoes-order-on-kakobuy",
    "kakobuy-shoes-size-guide",
    "best-first-order-on-kakobuy",
    "kakobuy-qc-guide",
    "when-should-you-pay-on-kakobuy",
    "kakobuy-shipping-after-qc",
    "how-to-estimate-kakobuy-shipping-cost",
    "what-to-check-before-paying-on-kakobuy",
  ];
}

function getHomepageFeaturedRouteCards(locale: SupportedLocale) {
  const categorySlugs = ["shoes", "tshirts"];
  const guideSlugs = [
    "best-shoes-on-kakobuy",
    "how-to-qc-shoes-on-kakobuy",
    "when-should-you-pay-on-kakobuy",
    "kakobuy-shipping-after-qc",
  ];
  const faqSlugs = ["is-kakobuy-safe", "when-should-you-use-qc-on-kakobuy"];

  const categoryCards = categories
    .filter((category) => categorySlugs.includes(category.slug))
    .map((category) => ({
      href: getCategoryHref(locale, category.slug),
      title: category.body[locale].title,
      description: category.body[locale].description,
    }));

  const guideCards = guides
    .filter((guide) => guideSlugs.includes(guide.slug))
    .map((guide) => ({
      href: getGuideHref(locale, guide.slug),
      title: guide.body[locale].title,
      description: guide.body[locale].description,
    }));

  const faqCards = faqPages
    .filter((faq) => faqSlugs.includes(faq.slug))
    .map((faq) => ({
      href: getFaqHref(locale, faq.slug),
      title: faq.body[locale].question,
      description: faq.body[locale].description,
    }));

  return [...categoryCards, ...guideCards, ...faqCards];
}

function getHomepageCategorySlugs() {
  return ["shoes", "tshirts", "hoodies", "pants"];
}

function getHomepageFaqSlugs() {
  return [
    "is-kakobuy-safe",
    "when-should-you-use-qc-on-kakobuy",
    "is-kakobuy-expensive",
    "how-long-does-kakobuy-shipping-take",
  ];
}

function getSpreadsheetCategorySlugs() {
  return ["shoes", "tshirts", "hoodies", "pants", "shorts", "accessories"];
}

function getSpreadsheetGuideSlugs() {
  return [
    "best-shoes-on-kakobuy",
    "how-to-qc-shoes-on-kakobuy",
    "best-first-shoes-order-on-kakobuy",
    "kakobuy-shoes-size-guide",
    "how-to-avoid-bad-shoes-on-kakobuy",
    "kakobuy-shipping-after-qc",
    "when-should-you-pay-on-kakobuy",
    "best-first-order-on-kakobuy",
    "kakobuy-qc-guide",
    "how-to-estimate-kakobuy-shipping-cost",
    "what-to-check-before-paying-on-kakobuy",
  ];
}

function getSpreadsheetFaqSlugs() {
  return ["is-kakobuy-safe", "when-should-you-use-qc-on-kakobuy"];
}

export function HomePage({ locale }: { locale: SupportedLocale }) {
  const copy = homepageCopy[locale];
  const heroFaqs = faqPages.slice(0, 3).map((faq) => {
    const body = faq.body[locale];
    return { question: body.question, answer: body.answer };
  });

  return (
    <>
      <JsonLd data={faqJsonLd(heroFaqs)} />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-8 md:py-12">
        <EditorialHero
          eyebrow={getLocalizedLabel(locale, {
            en: "Start Here",
            pl: "Zacznij Tutaj",
            es: "Empieza Aqui",
          })}
          title={copy.heroTitle}
          description={copy.heroBody}
          badges={copy.heroBadges}
          actions={renderPrimaryCtas(locale, "dark")}
          stats={copy.heroStats}
          cards={getHeroNavCards(locale)}
        />

        <Section
          title={getLocalizedLabel(locale, {
            en: "Shop More Clearly And Find Better Products",
            pl: "Kupuj Czytelniej I Znajduj Lepsze Produkty",
            es: "Compra Con Mas Claridad Y Encuentra Mejores Productos",
          })}
          intro={getLocalizedLabel(locale, {
            en: "Start with the right Kakobuy Spreadsheet path, then keep going with stronger search, image search, and outfit-led browsing.",
            pl: "Zacznij od wlasciwej drogi Kakobuy Spreadsheet, a potem idz dalej z mocniejszym search, image search i przegladaniem przez outfity.",
            es: "Empieza con la ruta correcta de Kakobuy Spreadsheet y luego sigue con mejor search, image search y navegacion guiada por outfits.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {getHomepageAdvantageCards(locale).map((item) => (
              <HighlightCard
                key={`${item.eyebrow}-${item.title}`}
                eyebrow={item.eyebrow}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-4 xl:grid-cols-3">
            {getHomepageRouteExplainCards(locale).map((item) => (
              <RouteActionCard
                key={`${item.eyebrow}-${item.title}`}
                eyebrow={item.eyebrow}
                title={item.title}
                body={item.body}
                href={item.href}
                hrefLabel={item.hrefLabel}
              />
            ))}
          </div>
          <div className="mt-6">
            <Callout
              title={getLocalizedLabel(locale, {
                en: "Why It Feels Better",
                pl: "Dlaczego To Dziala Lepiej",
                es: "Por Que Se Siente Mejor",
              })}
              body={getLocalizedLabel(locale, {
                en: "You spend less time wandering through loose rows and more time browsing with a better category, better filter, and better product direction.",
                pl: "Spedzasz mniej czasu na bladzeniu po luznych wierszach, a wiecej na przegladaniu z lepsza kategoria, lepszym filtrem i lepszym kierunkiem produktu.",
                es: "Pasas menos tiempo perdiendote entre filas sueltas y mas tiempo navegando con mejor categoria, mejor filtro y mejor direccion de producto.",
              })}
            />
          </div>
        </Section>

        <Section
          title={getLocalizedLabel(locale, {
            en: "Choose Your First Click",
            pl: "Wybierz Pierwszy Klik",
            es: "Elige Tu Primer Clic",
          })}
          intro={getLocalizedLabel(locale, {
            en: "Start with the Kakobuy Spreadsheet route that matches what you need next instead of opening pages at random.",
            pl: "Zacznij od trasy Kakobuy Spreadsheet, ktora pasuje do tego, czego potrzebujesz dalej, zamiast otwierac strony przypadkowo.",
            es: "Empieza por la ruta de Kakobuy Spreadsheet que mejor encaja con lo que necesitas ahora en lugar de abrir paginas al azar.",
          })}
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-[1.75rem] border border-rose-100 bg-[#fffafa] p-6 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                {getFirstClickHighlights(locale).map((item) => (
                  <HighlightCard
                    key={`${item.eyebrow}-${item.title}`}
                    eyebrow={item.eyebrow}
                    title={item.title}
                    body={item.body}
                  />
                ))}
                <Callout
                  title={getLocalizedLabel(locale, {
                    en: "What Makes This Useful",
                    pl: "Co Tu Najbardziej Pomaga",
                    es: "Que Hace Esto Util",
                  })}
                  body={getLocalizedLabel(locale, {
                    en: "It keeps the next step clearer, so you can compare routes, check QC, and move forward with less noise.",
                    pl: "Pomaga utrzymac jasniejszy kolejny krok, dzieki czemu latwiej porownac trasy, sprawdzic QC i ruszyc dalej z mniejszym chaosem.",
                    es: "Mantiene mas claro el siguiente paso, asi que puedes comparar rutas, revisar QC y seguir adelante con menos ruido.",
                  })}
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-slate-700">{copy.guideIntro}</p>
              <BulletList items={copy.whyUsePoints} />
              <Callout
                title={getLocalizedLabel(locale, {
                  en: "Trust Note",
                  pl: "Nota Zaufania",
                  es: "Nota De Confianza",
                })}
                body={`${siteConfig.independenceNotice[locale]} ${siteConfig.affiliateDisclosure[locale]}`}
              />
            </div>
          </div>
        </Section>

        <Section
          title={getLocalizedLabel(locale, {
            en: "Popular Kakobuy Spreadsheet Categories And Guides",
            pl: "Popularne Kategorie I Poradniki Kakobuy Spreadsheet",
            es: "Categorias Y Guias Populares De Kakobuy Spreadsheet",
          })}
          intro={getLocalizedLabel(locale, {
            en: "Open these when you want the strongest product categories, the safest first moves, and the most useful Kakobuy Spreadsheet checkpoints in one place.",
            pl: "Otworz to, gdy chcesz miec w jednym miejscu najmocniejsze kategorie produktowe, najbezpieczniejsze starty i najbardziej przydatne checkpointy Kakobuy Spreadsheet.",
            es: "Abre esto cuando quieras en un solo lugar las categorias mas fuertes, los inicios mas seguros y los checkpoints mas utiles de Kakobuy Spreadsheet.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {getHomepagePopularEntryCards(locale).map((item) => (
              <RouteActionCard
                key={`${item.href}-${item.title}`}
                eyebrow={item.eyebrow}
                title={item.title}
                body={item.body}
                href={item.href}
                hrefLabel={item.hrefLabel}
              />
            ))}
          </div>
        </Section>

        <Section
          title={getLocalizedLabel(locale, {
            en: "How To Buy From Kakobuy",
            pl: "Jak Kupowac Przez Kakobuy",
            es: "Como Comprar En Kakobuy",
          })}
          intro={getLocalizedLabel(locale, {
            en: "If you only want the short version, follow this order before you leave the site.",
            pl: "Jesli chcesz tylko krotka wersje, przejdz przez te kroki przed wyjsciem ze strony.",
            es: "Si solo quieres la version corta, sigue estos pasos antes de salir del sitio.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {getHowToBuySteps(locale).map((item) => (
              <HighlightCard
                key={`${item.eyebrow}-${item.title}`}
                eyebrow={item.eyebrow}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <RouteActionCard
              eyebrow={getLocalizedLabel(locale, {
                en: "Full Guide",
                pl: "Pelny Poradnik",
                es: "Guia Completa",
              })}
              title={getLocalizedLabel(locale, {
                en: "Need The Full Buying Flow?",
                pl: "Potrzebujesz Pelnej Sciezki Zakupu?",
                es: "Necesitas La Ruta Completa De Compra?",
              })}
              body={getLocalizedLabel(locale, {
                en: "Open the buying guide if you want the whole route from first browse to payment and shipping.",
                pl: "Otworz poradnik zakupu, jesli chcesz zobaczyc cala droge od pierwszego przegladania do platnosci i shippingu.",
                es: "Abre la guia de compra si quieres ver toda la ruta desde la primera exploracion hasta pago y shipping.",
              })}
              href={withLocalePath(locale, "/guides/how-to-buy-from-kakobuy")}
              hrefLabel={getLocalizedLabel(locale, {
                en: "Open buying guide",
                pl: "Otworz poradnik zakupu",
                es: "Abrir guia de compra",
              })}
            />
            <RouteActionCard
              eyebrow={getLocalizedLabel(locale, {
                en: "Ready To Go",
                pl: "Gotowy Do Dalszego Kroku",
                es: "Listo Para Seguir",
              })}
              title={getLocalizedLabel(locale, {
                en: "Go To Kakobuy Official Site",
                pl: "Przejdz Na Oficjalna Strone Kakobuy",
                es: "Ir Al Sitio Oficial De Kakobuy",
              })}
              body={getLocalizedLabel(locale, {
                en: "When you have already sorted category, QC, and shipping questions, move on to the official Kakobuy site.",
                pl: "Gdy masz juz uporzadkowane kategorie, QC i pytania o shipping, przejdz na oficjalna strone Kakobuy.",
                es: "Cuando ya tengas resueltas categoria, QC y dudas de shipping, pasa al sitio oficial de Kakobuy.",
              })}
              href={siteConfig.registerCta.href}
              hrefLabel={siteConfig.registerCta.label[locale]}
            />
          </div>
        </Section>

        <FindsSurface
          title={getLocalizedLabel(locale, {
            en: "More Spreadsheet Paths",
            pl: "Wiecej Sciezek Spreadsheet",
            es: "Mas Rutas Del Spreadsheet",
          })}
          description={getLocalizedLabel(locale, {
            en: "If you still want more options after the featured picks above, use these spreadsheet-style routes to keep narrowing down.",
            pl: "Jesli po wyroznionych wejsciach nadal chcesz zobaczyc jeszcze kilka opcji, uzyj tych sciezek w stylu spreadsheet.",
            es: "Si despues de las rutas destacadas todavia quieres ver algunas opciones mas, usa estas rutas estilo spreadsheet.",
          })}
          rows={getFeaturedFindRows(locale)}
        />

        <Section
          title={getLocalizedLabel(locale, {
            en: "Best Categories To Open First",
            pl: "Najlepsze Kategorie Na Start",
            es: "Mejores Categorias Para Empezar",
          })}
          intro={getLocalizedLabel(locale, {
            en: "These are the homepage category picks that usually make the cleanest first move.",
            pl: "To sa kategorie, ktore zwykle daja najczystszy pierwszy ruch.",
            es: "Estas categorias suelen dar el primer paso mas claro.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {categories
              .filter((category) => getHomepageCategorySlugs().includes(category.slug))
              .map((category) => (
              <LinkCard
                key={category.slug}
                href={getCategoryHref(locale, category.slug)}
                title={category.body[locale].title}
                description={category.body[locale].description}
              />
            ))}
          </div>
        </Section>

        <Section
          title={getLocalizedLabel(locale, {
            en: "Best Guides To Open Next",
            pl: "Najlepsze Poradniki Na Kolejny Krok",
            es: "Mejores Guias Para El Siguiente Paso",
          })}
          intro={getLocalizedLabel(locale, {
            en: "Use these when the product route is clear but the process still is not.",
            pl: "Uzyj ich wtedy, gdy droga produktowa jest juz jasna, ale proces nadal nie.",
            es: "Usalas cuando la ruta de producto ya esta clara, pero el proceso todavia no.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {guides
              .filter((guide) => getFeaturedGuideSlugs().includes(guide.slug))
              .map((guide) => (
              <LinkCard
                key={guide.slug}
                href={getGuideHref(locale, guide.slug)}
                title={guide.body[locale].title}
                description={guide.body[locale].description}
              />
            ))}
          </div>
        </Section>

        <Section
          title={getLocalizedLabel(locale, {
            en: "Quick Questions Worth Checking",
            pl: "Szybkie Pytania Warte Sprawdzenia",
            es: "Preguntas Rapidas Que Vale La Pena Revisar",
          })}
          intro={getLocalizedLabel(locale, {
            en: "These are the shortest answers that help before you go deeper.",
            pl: "To sa najkrotsze odpowiedzi, ktore pomagaja przed dalszym krokiem.",
            es: "Estas son las respuestas mas cortas que ayudan antes del siguiente paso.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {faqPages
              .filter((faq) => getHomepageFaqSlugs().includes(faq.slug))
              .map((faq) => (
              <LinkCard
                key={faq.slug}
                href={getFaqHref(locale, faq.slug)}
                title={faq.body[locale].question}
                description={faq.body[locale].description}
              />
            ))}
          </div>
        </Section>

        <Section
          title={getLocalizedLabel(locale, {
            en: "Why Keep Browsing On Maisonlooks",
            pl: "Dlaczego Warto Przegladac Dalej W Maisonlooks",
            es: "Por Que Vale La Pena Seguir En Maisonlooks",
          })}
          intro={getLocalizedLabel(locale, {
                        en: "Once the product direction feels right, Maisonlooks gives you a bigger catalog and better ways to keep finding what fits.",
                        pl: "Gdy kierunek produktu jest juz dobry, Maisonlooks daje wiekszy katalog i lepsze sposoby dalszego znajdowania tego, co pasuje.",
                        es: "Cuando la direccion del producto ya se siente correcta, Maisonlooks te da un catalogo mas grande y mejores formas de seguir encontrando lo que encaja.",
          })}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {getWhyChooseSpreadsheetCards(locale).map((item) => (
              <HighlightCard
                key={`${item.eyebrow}-${item.title}`}
                eyebrow={item.eyebrow}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
          <div className="mt-6">
            <Callout
              title={getLocalizedLabel(locale, {
                en: "What Gets Better There",
                pl: "Co Dziala Tam Lepiej",
                es: "Que Mejora Alli",
              })}
              body={getLocalizedLabel(locale, {
                            en: "You browse with clearer intent, stronger filters, and a much better chance of finding the right products faster.",
                            pl: "Przegladasz z czystszym zamiarem, mocniejszymi filtrami i duzo wieksza szansa na szybsze znalezienie wlasciwych produktow.",
                            es: "Navegas con una intencion mas clara, filtros mas fuertes y muchas mas posibilidades de encontrar los productos correctos mas rapido.",
              })}
            />
          </div>
        </Section>

        <Section title={copy.trustTitle}>
          <div className="space-y-3 text-slate-700">
            <p>{siteConfig.independenceNotice[locale]}</p>
            <p>{siteConfig.affiliateDisclosure[locale]}</p>
          </div>
          <div className="mt-6">
            <BulletList items={copy.trustPoints} />
          </div>
        </Section>
      </div>
    </>
  );
}

export function SpreadsheetPage({ locale }: { locale: SupportedLocale }) {
  const copy = spreadsheetPageCopy[locale];

  return (
    <PageShell eyebrow="Spreadsheet Hub" title={copy.title} description={copy.intro}>
      <Section
        eyebrow={getLocalizedLabel(locale, {
          en: "Main Route",
          pl: "Glowna Trasa",
          es: "Ruta Principal",
        })}
        title={copy.quickStartTitle}
        intro={getLocalizedLabel(locale, {
          en: "Use the Kakobuy Spreadsheet hub when you want the cleanest route into shoes, QC, shipping, or the last check before paying.",
          pl: "Uzyj hubu Kakobuy Spreadsheet, gdy chcesz najczystszej drogi do shoes, QC, shippingu albo ostatniego checku przed platnoscia.",
          es: "Usa el hub de Kakobuy Spreadsheet cuando quieras la ruta mas limpia hacia shoes, QC, shipping o la ultima revision antes de pagar.",
        })}
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[1.75rem] border border-rose-100 bg-[#fffafa] p-6 shadow-[0_14px_40px_rgba(74,22,33,0.05)]">
            <BulletList items={copy.quickStartSteps} />
            <div className="mt-6">{renderPrimaryCtas(locale)}</div>
          </div>
          <div className="space-y-4">
            <MiniStatGrid items={getHubStatItems(locale)} />
            <div className="grid gap-4 md:grid-cols-2">
              {getHubRoleHighlights(locale).map((item) => (
                <HighlightCard
                  key={`${item.eyebrow}-${item.title}`}
                  eyebrow={item.eyebrow}
                  title={item.title}
                  body={item.body}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
        <SpreadsheetPreview
          title={getLocalizedLabel(locale, {
            en: "Best Next Clicks From Kakobuy Spreadsheet",
            pl: "Najlepsze Kolejne Kliki Z Kakobuy Spreadsheet",
            es: "Mejores Siguientes Clics Desde Kakobuy Spreadsheet",
          })}
          description={getLocalizedLabel(locale, {
            en: "Use this when the search is broad but the next click needs to be specific.",
            pl: "Uzyj tego, gdy search jest szeroki, ale kolejny klik musi byc konkretny.",
            es: "Usa esto cuando la busqueda es amplia, pero el siguiente clic tiene que ser especifico.",
          })}
          rows={getSpreadsheetPreviewRows(locale)}
        />

        <Section
          tone="dark"
          eyebrow={getLocalizedLabel(locale, {
            en: "How To Use The Hub",
            pl: "Jak Uzywac Hubu",
            es: "Como Usar El Hub",
          })}
          title={getLocalizedLabel(locale, {
            en: "Use This Before You Commit To One Path",
            pl: "Uzyj Tego Zanim Zobowiazesz Sie Do Jednej Trasy",
            es: "Usa Esto Antes De Comprometerte Con Una Ruta",
          })}
          intro={getLocalizedLabel(locale, {
            en: "This hub works best when the main job is choosing the strongest next page, not reading everything at once.",
            pl: "Ten hub dziala najlepiej wtedy, gdy glownym zadaniem jest wybranie najmocniejszej kolejnej strony, a nie czytanie wszystkiego naraz.",
            es: "Este hub funciona mejor cuando el trabajo principal es elegir la pagina siguiente mas fuerte y no leerlo todo de una vez.",
          })}
        >
          <div className="grid gap-4">
            {getHubStructureCards(locale).map((item) => (
              <HighlightCard
                key={`${item.eyebrow}-${item.title}`}
                eyebrow={item.eyebrow}
                title={item.title}
                body={item.body}
                tone="dark"
              />
            ))}
          </div>
        </Section>
      </div>

      <Section
        eyebrow={getLocalizedLabel(locale, {
          en: "Category Paths",
          pl: "Sciezki Kategorii",
          es: "Rutas De Categoria",
        })}
        title={getLocalizedLabel(locale, {
          en: "Start With The Strongest Product Categories",
          pl: "Zacznij Od Najmocniejszych Kategorii Produktowych",
          es: "Empieza Con Las Categorias De Producto Mas Fuertes",
        })}
      >
        <CardGrid>
          {categories
            .filter((category) => getSpreadsheetCategorySlugs().includes(category.slug))
            .map((category) => (
            <LinkCard
              key={category.slug}
              href={getCategoryHref(locale, category.slug)}
              title={category.body[locale].title}
              description={category.body[locale].description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section
        eyebrow={getLocalizedLabel(locale, {
          en: "Support Pages",
          pl: "Strony Wsparcia",
          es: "Paginas De Apoyo",
        })}
        title={getLocalizedLabel(locale, {
          en: "Open The Strongest QC, Shipping, And Payment Checks",
          pl: "Otworz Najmocniejsze Checki QC, Shippingu I Platnosci",
          es: "Abre Los Mejores Checks De QC, Shipping Y Pago",
        })}
          intro={getLocalizedLabel(locale, {
            en: "Use these when the product route is mostly clear, but trust, shipping, or the final payment decision still needs one stronger page.",
            pl: "Uzyj ich wtedy, gdy droga produktowa jest juz w miare jasna, ale zaufanie, shipping albo finalna decyzja o platnosci nadal potrzebuja jednej mocniejszej strony.",
            es: "Usalas cuando la ruta de producto ya este bastante clara, pero confianza, shipping o la decision final de pago todavia necesiten una pagina mas fuerte.",
          })}
      >
        <CardGrid>
          {guides
            .filter((guide) => getSpreadsheetGuideSlugs().includes(guide.slug))
            .map((guide) => (
            <LinkCard
              key={guide.slug}
              href={getGuideHref(locale, guide.slug)}
              title={guide.body[locale].title}
              description={guide.body[locale].description}
            />
          ))}
          {faqPages
            .filter((faq) => getSpreadsheetFaqSlugs().includes(faq.slug))
            .map((faq) => (
            <LinkCard
              key={faq.slug}
              href={getFaqHref(locale, faq.slug)}
              title={faq.body[locale].question}
              description={faq.body[locale].description}
            />
          ))}
        </CardGrid>
      </Section>

      <Section
        tone="dark"
        eyebrow={getLocalizedLabel(locale, {
          en: "What You Might Need Most",
          pl: "Czego Mozesz Potrzebowac Najbardziej",
          es: "Lo Que Mas Puedes Necesitar",
        })}
        title={getLocalizedLabel(locale, {
          en: "Route By Your Blocker",
          pl: "Wybierz Wedlug Blokady",
          es: "Elige Segun Tu Bloqueo",
        })}
        intro={getLocalizedLabel(locale, {
            en: "Sometimes the main need is trust, sometimes it is process, and sometimes it is simply finding the right product path.",
            pl: "Czasem najwazniejsze jest zaufanie, czasem proces, a czasem po prostu znalezienie wlasciwej drogi do produktu.",
            es: "A veces lo principal es la confianza, otras el proceso, y otras simplemente encontrar la ruta correcta al producto.",
        })}
      >
        <div className="grid gap-4 md:grid-cols-3">
          {getBlockerRoutes(locale).map((item) => (
            <RouteActionCard
              key={`${item.eyebrow}-${item.title}`}
              eyebrow={item.eyebrow}
              title={item.title}
              body={item.body}
              href={item.href}
              hrefLabel={item.hrefLabel}
              tone="dark"
            />
          ))}
        </div>
      </Section>

      <Callout
        title={getLocalizedLabel(locale, {
          en: "Why This Helps",
          pl: "Dlaczego To Pomaga",
          es: "Por Que Esto Ayuda",
        })}
        body={getLocalizedLabel(locale, {
          en: "This hub works best when it turns a broad Kakobuy Spreadsheet search into the one page that should really get the next click.",
          pl: "Ten hub dziala najlepiej wtedy, gdy zamienia szerokie szukanie Kakobuy Spreadsheet w te jedna strone, ktora naprawde powinna dostac kolejny klik.",
          es: "Este hub funciona mejor cuando convierte una busqueda amplia de Kakobuy Spreadsheet en la unica pagina que de verdad deberia llevarse el siguiente clic.",
        })}
        tone="dark"
      />
    </PageShell>
  );
}

export function GuidePageView({
  locale,
  guide,
}: {
  locale: SupportedLocale;
  guide: Guide;
}) {
  const body = guide.body[locale];
  const relatedFaqs = faqPages.filter((faq) => guide.relatedFaqSlugs.includes(faq.slug));
  const relatedCategories = categories.filter((category) =>
    guide.relatedCategorySlugs.includes(category.slug),
  );
  const path = getGuideHref(locale, guide.slug);
  const isQcGuide = guide.slug === "kakobuy-qc-guide";
  const isBeforePayingGuide = guide.slug === "what-to-check-before-paying-on-kakobuy";
  const shoesCategory = categories.find((category) => category.slug === "shoes");
  const qcGuide = guides.find((entry) => entry.slug === "kakobuy-qc-guide");
  const beforePayingGuide = guides.find(
    (entry) => entry.slug === "what-to-check-before-paying-on-kakobuy",
  );

  return (
    <>
      <JsonLd data={articleJsonLd({ title: body.title, description: body.description, path })} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: withLocalePath(locale, "/") },
          { name: "Guides", path: getGuideHref(locale, "what-is-kakobuy-spreadsheet") },
          { name: body.title, path },
        ])}
      />
      <PageShell eyebrow="Guide" title={body.title} description={body.intro}>
        <BreadcrumbTrail
          items={[
            { label: getLocalizedLabel(locale, { en: "Home", pl: "Start", es: "Inicio" }), href: withLocalePath(locale, "/") },
            {
              label: getLocalizedLabel(locale, { en: "Spreadsheet", pl: "Spreadsheet", es: "Spreadsheet" }),
              href: withLocalePath(locale, "/spreadsheet"),
            },
            { label: body.title, href: path },
          ]}
        />
        {isQcGuide ? (
          <Section
            title={
              locale === "en"
                ? "Use This QC Guide In This Order"
                : locale === "pl"
                  ? "Uzyj Tego Poradnika QC W Tej Kolejnosci"
                  : "Usa Esta Guia De QC En Este Orden"
            }
          >
            <div className="grid gap-4 md:grid-cols-3">
              <HighlightCard
                eyebrow={locale === "en" ? "Step 01" : locale === "pl" ? "Krok 01" : "Paso 01"}
                title={
                  locale === "en"
                    ? "Find A Pair Worth Slowing Down For"
                    : locale === "pl"
                      ? "Znajdz Pare Dla Ktorej Warto Zwolnic"
                      : "Encuentra Un Par Por El Que Merece Frenar"
                }
                body={
                  locale === "en"
                    ? "Use this guide after the listing starts looking real, not before you even know what you want."
                    : locale === "pl"
                      ? "Uzyj tego poradnika dopiero wtedy, gdy oferta zaczyna wydawac sie realna, a nie zanim w ogole wiesz czego chcesz."
                      : "Usa esta guia cuando el listado ya empieza a parecer real y no antes de saber siquiera que quieres."
                }
              />
              <HighlightCard
                eyebrow={locale === "en" ? "Step 02" : locale === "pl" ? "Krok 02" : "Paso 02"}
                title={
                  locale === "en"
                    ? "Compare Promise Against Real QC"
                    : locale === "pl"
                      ? "Porownaj Obietnice Z Prawdziwym QC"
                      : "Compara La Promesa Con El QC Real"
                }
                body={
                  locale === "en"
                    ? "Check whether shape, finish, color, and visible details still match the confidence created by the listing."
                    : locale === "pl"
                      ? "Sprawdz czy ksztalt, wykonczenie, kolor i widoczne detale nadal wspieraja zaufanie zbudowane przez listing."
                      : "Revisa si forma, acabado, color y detalles visibles siguen sosteniendo la confianza creada por el listado."
                }
              />
              <HighlightCard
                eyebrow={locale === "en" ? "Step 03" : locale === "pl" ? "Krok 03" : "Paso 03"}
                title={
                  locale === "en"
                    ? "Only Then Decide To Keep Going"
                    : locale === "pl"
                      ? "Dopiero Potem Zdecyduj Czy Iść Dalej"
                      : "Solo Entonces Decide Si Sigues"
                }
                body={
                  locale === "en"
                    ? "If the listing still holds up, move toward shipping or payment. If not, this is the right moment to stop."
                    : locale === "pl"
                      ? "Jesli oferta nadal sie broni, przejdz dalej do shippingu albo platnosci. Jesli nie, to jest dobry moment zeby sie zatrzymac."
                      : "Si el listado sigue aguantando, pasa hacia shipping o pago. Si no, este es el momento correcto para parar."
                }
              />
            </div>
          </Section>
        ) : isBeforePayingGuide ? (
          <Section
            title={
              locale === "en"
                ? "Use This Before-Paying Check In This Order"
                : locale === "pl"
                  ? "Uzyj Tego Checku Przed Platnoscia W Tej Kolejnosci"
                  : "Usa Esta Revision Antes De Pagar En Este Orden"
            }
          >
            <div className="grid gap-4 md:grid-cols-3">
              <HighlightCard
                eyebrow={locale === "en" ? "Step 01" : locale === "pl" ? "Krok 01" : "Paso 01"}
                title={
                  locale === "en"
                    ? "Confirm The Product Still Holds Up"
                    : locale === "pl"
                      ? "Potwierdz Ze Produkt Nadal Sie Broni"
                      : "Confirma Que El Producto Sigue Aguantando"
                }
                body={
                  locale === "en"
                    ? "Do not pay just because the item still looks exciting. Pay only if the listing, size logic, and QC still support the same yes."
                    : locale === "pl"
                      ? "Nie plac tylko dlatego, ze produkt nadal ekscytuje. Plac dopiero wtedy, gdy listing, logika rozmiaru i QC nadal wspieraja to samo tak."
                      : "No pagues solo porque el item siga emocionando. Paga solo si listado, logica de talla y QC siguen sosteniendo el mismo si."
                }
              />
              <HighlightCard
                eyebrow={locale === "en" ? "Step 02" : locale === "pl" ? "Krok 02" : "Paso 02"}
                title={
                  locale === "en"
                    ? "Check The Full Order Picture"
                    : locale === "pl"
                      ? "Sprawdz Pelny Obraz Zamowienia"
                      : "Revisa La Imagen Completa Del Pedido"
                }
                body={
                  locale === "en"
                    ? "Look at fees, likely shipping pressure, parcel weight, and whether this order still makes sense once the total becomes real."
                    : locale === "pl"
                      ? "Sprawdz oplaty, prawdopodobna presje shippingu, wage paczki i to, czy ten order nadal ma sens, gdy laczny koszt staje sie realny."
                      : "Mira comisiones, posible presion de shipping, peso del paquete y si este pedido sigue teniendo sentido cuando el total se vuelve real."
                }
              />
              <HighlightCard
                eyebrow={locale === "en" ? "Step 03" : locale === "pl" ? "Krok 03" : "Paso 03"}
                title={
                  locale === "en"
                    ? "Decide Cleanly Or Step Back"
                    : locale === "pl"
                      ? "Zdecyduj Czysto Albo Zrob Krok Wstecz"
                      : "Decide Con Claridad O Da Un Paso Atras"
                }
                body={
                  locale === "en"
                    ? "If the order still feels clean, move forward. If one weak point keeps repeating, stop before payment turns a maybe into a headache."
                    : locale === "pl"
                      ? "Jesli order nadal wyglada czysto, idz dalej. Jesli jeden slaby punkt ciagle wraca, zatrzymaj sie zanim platnosc zmieni moze w problem."
                      : "Si el pedido sigue viendose limpio, sigue adelante. Si un punto debil sigue repitiendose, para antes de que el pago convierta un tal vez en problema."
                }
              />
            </div>
          </Section>
        ) : null}
        <Section
          title={
            locale === "en" ? "What This Page Clarifies" : locale === "pl" ? "Co Warto Wiedziec" : "Que Debes Saber"
          }
        >
          <TextStack paragraphs={body.paragraphs} />
        </Section>

        {body.bullets ? (
          <Section
            title={
              locale === "en"
                ? "Key Takeaways"
                : locale === "pl"
                  ? "Najwazniejsze Wnioski"
                  : "Conclusiones Rapidas"
            }
          >
            <BulletList items={body.bullets} />
          </Section>
        ) : null}

        <Section
          title={
            isQcGuide
              ? locale === "en"
                ? "Main Route Around QC"
                : locale === "pl"
                  ? "Glowna Trasa Wokol QC"
                  : "Ruta Principal Alrededor Del QC"
              : isBeforePayingGuide
                ? locale === "en"
                  ? "Main Route Before Payment"
                  : locale === "pl"
                    ? "Glowna Trasa Przed Platnoscia"
                    : "Ruta Principal Antes De Pagar"
              : locale === "en"
                ? "Best Next Clicks"
                : locale === "pl"
                  ? "Powiazane Kolejne Kroki"
                  : "Siguientes Clics Relacionados"
          }
        >
          <CardGrid>
            {isQcGuide && shoesCategory ? (
              <LinkCard
                href={getCategoryHref(locale, shoesCategory.slug)}
                title={shoesCategory.body[locale].title}
                description={getLocalizedLabel(locale, {
                  en: "Go back to the strongest product-intent route if you still need to narrow the pair list before trusting QC.",
                  pl: "Wroc do najmocniejszej trasy produktowej, jesli nadal musisz zawezic liste par zanim zaufasz QC.",
                  es: "Vuelve a la ruta de producto mas fuerte si todavia necesitas reducir la lista de pares antes de confiar en el QC.",
                })}
              />
            ) : null}
            {isQcGuide && beforePayingGuide ? (
              <LinkCard
                href={getGuideHref(locale, beforePayingGuide.slug)}
                title={beforePayingGuide.body[locale].title}
                description={getLocalizedLabel(locale, {
                  en: "Open the final payment checkpoint once QC still supports the listing and the order feels close.",
                  pl: "Otworz finalny checkpoint przed platnoscia, gdy QC nadal wspiera listing i order jest juz blisko.",
                  es: "Abre el checkpoint final antes de pagar cuando el QC siga apoyando el listado y el pedido ya se sienta cerca.",
                })}
              />
            ) : null}
            {isBeforePayingGuide && shoesCategory ? (
              <LinkCard
                href={getCategoryHref(locale, shoesCategory.slug)}
                title={shoesCategory.body[locale].title}
                description={getLocalizedLabel(locale, {
                  en: "Go back to shoes if the order stops feeling clean and you need to rebuild the short list from the product level.",
                  pl: "Wroc do shoes, jesli order przestaje wygladac czysto i musisz odbudowac krotka liste od poziomu produktu.",
                  es: "Vuelve a shoes si el pedido deja de sentirse limpio y necesitas reconstruir la lista corta desde el nivel de producto.",
                })}
              />
            ) : null}
            {isBeforePayingGuide && qcGuide ? (
              <LinkCard
                href={getGuideHref(locale, qcGuide.slug)}
                title={qcGuide.body[locale].title}
                description={getLocalizedLabel(locale, {
                  en: "Step back into QC if one weak point in photos, shape, or flaws keeps stopping the payment decision.",
                  pl: "Wroc do QC, jesli jeden slaby punkt w zdjeciach, ksztalcie albo wadach nadal blokuje decyzje o platnosci.",
                  es: "Vuelve al QC si un punto debil en fotos, forma o fallos sigue bloqueando la decision de pago.",
                })}
              />
            ) : null}
            {isQcGuide || isBeforePayingGuide ? null : (
              <>
                <LinkCard
                  href={withLocalePath(locale, "/")}
                  title={homepageCopy[locale].heroTitle}
                  description={homepageCopy[locale].description}
                />
                <LinkCard
                  href={withLocalePath(locale, "/spreadsheet")}
                  title={spreadsheetPageCopy[locale].title}
                  description={spreadsheetPageCopy[locale].description}
                />
              </>
            )}
            {relatedFaqs.map((faq) => (
              <LinkCard
                key={faq.slug}
                href={getFaqHref(locale, faq.slug)}
                title={faq.body[locale].question}
                description={faq.body[locale].description}
              />
            ))}
            {relatedCategories.map((category) => (
              <LinkCard
                key={category.slug}
                href={getCategoryHref(locale, category.slug)}
                title={category.body[locale].title}
                description={category.body[locale].description}
              />
            ))}
          </CardGrid>
        </Section>
        <Callout
          title={getLocalizedLabel(locale, {
            en: "Why This Helps",
            pl: "Dlaczego To Pomaga",
            es: "Por Que Esto Ayuda",
          })}
          body={getLocalizedLabel(locale, {
            en: isQcGuide
              ? "This page works best as the trust checkpoint between shoes and the final before-paying decision."
              : isBeforePayingGuide
                ? "This page works best as the last clean checkpoint after QC and before money moves."
                : "This page helps you answer one question clearly, then move on with less doubt.",
            pl: isQcGuide
              ? "Ta strona dziala najlepiej jako checkpoint zaufania pomiedzy shoes a finalna decyzja przed platnoscia."
              : isBeforePayingGuide
                ? "Ta strona dziala najlepiej jako ostatni czysty checkpoint po QC i przed ruchem pieniedzy."
                : "Ta strona pomaga jasno odpowiedziec na jedno pytanie, a potem ruszyc dalej z mniejsza liczba watpliwosci.",
            es: isQcGuide
              ? "Esta pagina funciona mejor como checkpoint de confianza entre shoes y la decision final antes de pagar."
              : isBeforePayingGuide
                ? "Esta pagina funciona mejor como el ultimo checkpoint limpio despues del QC y antes de mover dinero."
                : "Esta pagina ayuda a responder una sola duda con claridad y seguir adelante con menos inseguridad.",
          })}
        />
      </PageShell>
    </>
  );
}

export function FaqPageView({
  locale,
  faq,
}: {
  locale: SupportedLocale;
  faq: FaqPage;
}) {
  const body = faq.body[locale];
  const relatedGuides = guides.filter((guide) => faq.relatedGuideSlugs.includes(guide.slug));
  const path = getFaqHref(locale, faq.slug);

  return (
    <>
      <JsonLd data={faqJsonLd([{ question: body.question, answer: body.answer }])} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: withLocalePath(locale, "/") },
          { name: "FAQ", path: getFaqHref(locale, "is-kakobuy-safe") },
          { name: body.question, path },
        ])}
      />
      <PageShell eyebrow="FAQ" title={body.question} description={body.description}>
        <BreadcrumbTrail
          items={[
            { label: getLocalizedLabel(locale, { en: "Home", pl: "Start", es: "Inicio" }), href: withLocalePath(locale, "/") },
            {
              label: getLocalizedLabel(locale, { en: "FAQ", pl: "FAQ", es: "FAQ" }),
              href: getFaqHref(locale, "is-kakobuy-safe"),
            },
            { label: body.question, href: path },
          ]}
        />
        <Section title={locale === "en" ? "Quick Answer" : locale === "pl" ? "Krotka Odpowiedz" : "Respuesta Corta"}>
          <p className="text-slate-700">{body.answer}</p>
        </Section>

        <Section
          title={
            locale === "en" ? "Why That Answer Matters" : locale === "pl" ? "Punkty Wsparcia" : "Puntos De Apoyo"
          }
        >
          <BulletList items={body.supportingPoints} />
        </Section>

        <Section
          title={
            locale === "en" ? "Best Pages To Read Next" : locale === "pl" ? "Przeczytaj Dalej" : "Lee Esto Despues"
          }
        >
          <CardGrid>
            <LinkCard
              href={withLocalePath(locale, "/")}
              title={homepageCopy[locale].heroTitle}
              description={homepageCopy[locale].description}
            />
            <LinkCard
              href={withLocalePath(locale, "/spreadsheet")}
              title={spreadsheetPageCopy[locale].title}
              description={spreadsheetPageCopy[locale].description}
            />
            {relatedGuides.map((guide) => (
              <LinkCard
                key={guide.slug}
                href={getGuideHref(locale, guide.slug)}
                title={guide.body[locale].title}
                description={guide.body[locale].description}
              />
            ))}
          </CardGrid>
        </Section>
        <Callout
          title={getLocalizedLabel(locale, {
            en: "Why This Helps",
            pl: "Dlaczego To Pomaga",
            es: "Por Que Esto Ayuda",
          })}
          body={getLocalizedLabel(locale, {
            en: "Use this page when you want a quick answer before moving into the guide that fits best.",
            pl: "Skorzystaj z tej strony, gdy chcesz szybkiej odpowiedzi zanim wejdziesz w poradnik, ktory najlepiej pasuje.",
            es: "Usa esta pagina cuando quieras una respuesta rapida antes de entrar en la guia que mejor encaja.",
          })}
        />
      </PageShell>
    </>
  );
}

export function CategoryPageView({
  locale,
  category,
}: {
  locale: SupportedLocale;
  category: CategoryPage;
}) {
  const body = category.body[locale];
  const relatedGuides = guides.filter((guide) => category.relatedGuideSlugs.includes(guide.slug));
  const path = getCategoryHref(locale, category.slug);
  const isShoesPage = category.slug === "shoes";
  const qcGuide = guides.find((guide) => guide.slug === "kakobuy-qc-guide");
  const beforePayingGuide = guides.find(
    (guide) => guide.slug === "what-to-check-before-paying-on-kakobuy",
  );
  const visibleRelatedGuides = isShoesPage
    ? relatedGuides.filter(
        (guide) =>
          guide.slug !== "kakobuy-qc-guide" &&
          guide.slug !== "what-to-check-before-paying-on-kakobuy",
      )
    : relatedGuides;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: withLocalePath(locale, "/") },
          { name: "Spreadsheet", path: withLocalePath(locale, "/spreadsheet") },
          { name: body.title, path },
        ])}
      />
      <PageShell eyebrow="Category" title={body.title} description={body.intro}>
        <BreadcrumbTrail
          items={[
            { label: getLocalizedLabel(locale, { en: "Home", pl: "Start", es: "Inicio" }), href: withLocalePath(locale, "/") },
            {
              label: getLocalizedLabel(locale, { en: "Spreadsheet", pl: "Spreadsheet", es: "Spreadsheet" }),
              href: withLocalePath(locale, "/spreadsheet"),
            },
            { label: body.title, href: path },
          ]}
        />
        {isShoesPage ? (
          <Section
            title={
              locale === "en"
                ? "Use This Shoes Route In This Order"
                : locale === "pl"
                  ? "Uzyj Tej Trasy Shoes W Tej Kolejnosci"
                  : "Usa Esta Ruta De Shoes En Este Orden"
            }
          >
            <div className="grid gap-4 md:grid-cols-3">
              <HighlightCard
                eyebrow={locale === "en" ? "Step 01" : locale === "pl" ? "Krok 01" : "Paso 01"}
                title={
                  locale === "en"
                    ? "Narrow To A Few Real Pairs"
                    : locale === "pl"
                      ? "Zejdz Do Kilku Prawdziwych Par"
                      : "Baja A Unos Pocos Pares Reales"
                }
                body={
                  locale === "en"
                    ? "Use this page to move from broad spreadsheet intent into a short list that is serious enough to deserve QC."
                    : locale === "pl"
                      ? "Uzyj tej strony, aby przejsc od szerokiej intencji spreadsheet do krotkiej listy, ktora jest juz na tyle powazna, by zaslugiwac na QC."
                      : "Usa esta pagina para pasar de una intencion amplia de spreadsheet a una lista corta que ya merezca QC."
                }
              />
              <HighlightCard
                eyebrow={locale === "en" ? "Step 02" : locale === "pl" ? "Krok 02" : "Paso 02"}
                title={
                  locale === "en"
                    ? "Send The Short List Into QC"
                    : locale === "pl"
                      ? "Przepusc Krotka Liste Przez QC"
                      : "Pasa La Lista Corta Por QC"
                }
                body={
                  locale === "en"
                    ? "Treat QC as the real trust filter, especially when shape, finish, and size confidence still decide the buy."
                    : locale === "pl"
                      ? "Traktuj QC jako prawdziwy filtr zaufania, szczegolnie wtedy, gdy o zakupie nadal decyduja ksztalt, wykonczenie i pewnosc rozmiaru."
                      : locale === "es"
                        ? "Trata el QC como el filtro real de confianza, sobre todo cuando forma, acabado y confianza de talla siguen decidiendo la compra."
                        : ""
                }
              />
              <HighlightCard
                eyebrow={locale === "en" ? "Step 03" : locale === "pl" ? "Krok 03" : "Paso 03"}
                title={
                  locale === "en"
                    ? "Only Then Open Before Paying"
                    : locale === "pl"
                      ? "Dopiero Potem Otworz Strone Przed Platnoscia"
                      : "Solo Entonces Abre La Guia Antes De Pagar"
                }
                body={
                  locale === "en"
                    ? "Move to the final payment checkpoint only after the pair still makes sense in real photos, size notes, and total order context."
                    : locale === "pl"
                      ? "Przejdz do finalnego checkpointu przed platnoscia dopiero wtedy, gdy para nadal broni sie na prawdziwych zdjeciach, w notatkach o rozmiarze i w kontekscie calego orderu."
                      : "Pasa al checkpoint final antes de pagar solo cuando el par siga teniendo sentido en fotos reales, notas de talla y contexto total del pedido."
                }
              />
            </div>
          </Section>
        ) : null}
        <Section
          title={
            locale === "en"
              ? "Why This Category Is Worth Opening"
              : locale === "pl"
                ? "Dlaczego Ta Kategoria Ma Znaczenie"
                : "Por Que Importa Esta Categoria"
          }
        >
          <BulletList items={body.highlights} />
        </Section>

        <Section
          title={
            locale === "en"
              ? "Good First Picks In This Category"
              : locale === "pl"
                ? "Od Czego Warto Tu Zaczac"
                : "Por Donde Conviene Empezar"
          }
        >
          <BulletList items={body.bestFor} />
        </Section>

        <Section
          title={
            locale === "en"
              ? "What To Check Before You Continue"
              : locale === "pl"
                ? "Co Sprawdzic Zanim Pojdziesz Dalej"
                : "Que Revisar Antes De Seguir"
          }
        >
          <BulletList items={body.whatToCheck} />
        </Section>

        <Section
          title={
            locale === "en"
              ? "Common Mistakes To Avoid Here"
              : locale === "pl"
                ? "Na Co Latwo Tu Wpasc"
                : "Errores Comunes Que Conviene Evitar"
          }
        >
          <BulletList items={body.watchOutFor} />
        </Section>

        <Section
          title={
            locale === "en" ? "Best Next Steps From Here" : locale === "pl" ? "Najlepsze Kolejne Kroki" : "Mejores Siguientes Pasos"
          }
        >
          <BulletList items={body.nextSteps} />
        </Section>

        <Section
          title={
            isShoesPage
              ? locale === "en"
                ? "Main Route After Shoes"
                : locale === "pl"
                  ? "Glowna Trasa Po Shoes"
                  : "Ruta Principal Despues De Shoes"
              : locale === "en"
                ? "Guides That Support This Category"
                : locale === "pl"
                  ? "Powiazane Poradniki"
                  : "Guias Relacionadas"
          }
        >
          <CardGrid>
            {isShoesPage && qcGuide ? (
              <LinkCard
                href={getGuideHref(locale, qcGuide.slug)}
                title={qcGuide.body[locale].title}
                description={getLocalizedLabel(locale, {
                  en: "Use QC as the next serious filter once the shoes list is short enough to inspect properly.",
                  pl: "Uzyj QC jako kolejnego powaznego filtra, gdy lista shoes jest juz na tyle krotka, by dac sie dobrze sprawdzic.",
                  es: "Usa el QC como el siguiente filtro serio cuando la lista de shoes ya sea lo bastante corta para revisarla bien.",
                })}
              />
            ) : null}
            {isShoesPage && beforePayingGuide ? (
              <LinkCard
                href={getGuideHref(locale, beforePayingGuide.slug)}
                title={beforePayingGuide.body[locale].title}
                description={getLocalizedLabel(locale, {
                  en: "Use the final payment checkpoint only after QC still supports the pair and the order still feels clean.",
                  pl: "Uzyj finalnego checkpointu przed platnoscia dopiero wtedy, gdy QC nadal wspiera pare i order nadal wyglada czysto.",
                  es: "Usa el checkpoint final antes de pagar solo cuando el QC siga apoyando el par y el pedido siga viendose limpio.",
                })}
              />
            ) : null}
            {isShoesPage ? null : (
              <>
                <LinkCard
                  href={withLocalePath(locale, "/")}
                  title={homepageCopy[locale].heroTitle}
                  description={homepageCopy[locale].description}
                />
                <LinkCard
                  href={withLocalePath(locale, "/spreadsheet")}
                  title={spreadsheetPageCopy[locale].title}
                  description={spreadsheetPageCopy[locale].description}
                />
              </>
            )}
            {visibleRelatedGuides.map((guide) => (
              <LinkCard
                key={guide.slug}
                href={getGuideHref(locale, guide.slug)}
                title={guide.body[locale].title}
                description={guide.body[locale].description}
              />
            ))}
          </CardGrid>
        </Section>
        <Callout
          title={getLocalizedLabel(locale, {
            en: "Why This Helps",
            pl: "Dlaczego To Pomaga",
            es: "Por Que Esto Ayuda",
          })}
          body={getLocalizedLabel(locale, {
            en: isShoesPage
              ? "This page works best as the product-intent step between the spreadsheet hub and the QC guide."
              : "Use this page when broad browsing feels too loose and you want a cleaner product path.",
            pl: isShoesPage
              ? "Ta strona dziala najlepiej jako krok produktowy pomiedzy hubem spreadsheet a poradnikiem QC."
              : "Skorzystaj z tej strony, gdy szerokie przegladanie wydaje sie zbyt luzne i potrzebujesz czystszej drogi do produktu.",
            es: isShoesPage
              ? "Esta pagina funciona mejor como el paso de producto entre el hub spreadsheet y la guia de QC."
              : "Usa esta pagina cuando la navegacion amplia se sienta demasiado abierta y quieras una ruta de producto mas clara.",
          })}
        />
      </PageShell>
    </>
  );
}

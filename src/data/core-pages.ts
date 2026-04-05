import type { SupportedLocale } from "@/lib/locales";

export const homepageCopy: Record<
  SupportedLocale,
  {
    title: string;
    description: string;
    heroTitle: string;
    heroBody: string;
    ctaLabel: string;
    heroBadges: string[];
    heroStats: Array<{ label: string; value: string; description: string }>;
    categoryTitle: string;
    categoryIntro: string;
    guideTitle: string;
    guideIntro: string;
    howItWorksTitle: string;
    howItWorksSteps: string[];
    whyUseTitle: string;
    whyUsePoints: string[];
    faqTitle: string;
    trustTitle: string;
    trustPoints: string[];
  }
> = {
  en: {
    title: "Kakobuy Spreadsheet 2026 | Best Finds, Spreadsheet Links, QC Guides, and Buying Help",
    description:
      "Browse Kakobuy Spreadsheet paths with best finds, category shortcuts, QC help, shipping answers, and clearer next steps.",
    heroTitle: "Find Better Kakobuy Picks Faster",
    heroBody:
      "Start here when you want a clearer way into Kakobuy Spreadsheet picks. Compare categories, sort out QC and shipping questions, then keep browsing on Maisonlooks with a larger catalog, more precise search, image search, and outfit inspiration.",
    ctaLabel: "Browse Kakobuy Spreadsheet",
    heroBadges: ["Better Product Paths", "QC + Shipping Help", "Updated For 2026"],
    heroStats: [
      {
        label: "Start With",
        value: "Kakobuy Spreadsheet Paths",
        description: "Choose categories, QC help, or shipping help from the Kakobuy Spreadsheet route before you dive deeper.",
      },
      {
        label: "Browse More",
        value: "60,000+ Products",
        description: "When you know what you want, Maisonlooks gives you a much bigger pool to search.",
      },
      {
        label: "Search Better",
        value: "Keyword + Image Search",
        description: "Use text or image-led discovery when you want to move from idea to product faster.",
      },
    ],
    categoryTitle: "Browse By Category",
    categoryIntro:
      "Start with a category if you already know the product type you want. It is the fastest way to move from broad browsing into something more specific.",
    guideTitle: "Start With The Most Useful Guides",
    guideIntro:
      "Open these guides when QC, shipping, first-order, or payment questions are still slowing you down.",
    howItWorksTitle: "Buy With Less Guesswork",
    howItWorksSteps: [
      "Start with the spreadsheet page if you still need help picking the best next stop.",
      "Jump into a category when you already know the product type you want to browse.",
      "Use the guides when QC, shipping, payment, or buying-flow questions are still blocking the next click.",
      "Check the FAQ pages when you only need a short answer on safety, legitimacy, or spreadsheet availability before moving on.",
    ],
    whyUseTitle: "Why Start Here",
    whyUsePoints: [
      "Move from a broad spreadsheet search into a cleaner product path faster.",
      "Keep categories, QC help, shipping answers, and buying support close together while you compare.",
      "Reach Maisonlooks with a better idea of what you actually want to search.",
    ],
    faqTitle: "Quick Answers Before You Browse",
    trustTitle: "Before You Move On",
    trustPoints: [
      "This is not the official Kakobuy site.",
      "Use the pages here to compare options, check QC, and clear up shipping questions before buying.",
      "When you want more product search and browsing, continue to Maisonlooks.",
      "Always double-check product details, sizing, and shipping before paying.",
    ],
  },
  pl: {
    title: "Kakobuy Spreadsheet 2026 | Najlepsze znaleziska, QC i linki kategorii",
    description:
      "Poznaj niezalezna strone Kakobuy Spreadsheet z najlepszymi znaleziskami, skrotami do kategorii, poradami QC, shippingu i dalszymi krokami zakupowymi.",
    heroTitle: "Znajdz Lepsze Piki Kakobuy Szybciej",
    heroBody:
      "Zacznij tutaj, jesli chcesz szybciej wejsc w lepsze piki z Kakobuy Spreadsheet. Porownaj kategorie, uporzadkuj QC i shipping, a potem przegladaj dalej w Maisonlooks z wiekszym katalogiem, dokladniejszym search, image search i inspiracjami outfitowymi.",
    ctaLabel: "Przegladaj Kakobuy Spreadsheet",
    heroBadges: ["Lepsze Sciezki Produktowe", "QC + Shipping Help", "Aktualne Na 2026"],
    heroStats: [
      {
        label: "Zacznij Od",
        value: "Sciezek Kakobuy Spreadsheet",
        description: "Wybierz kategorie, QC albo shipping help z drogi Kakobuy Spreadsheet zanim wejdziesz glebiej.",
      },
      {
        label: "Przegladaj Wiecej",
        value: "60 000+ Produktow",
        description: "Gdy juz wiesz czego chcesz, Maisonlooks daje duzo wieksza pule produktow do searchu.",
      },
      {
        label: "Szukaj Lepiej",
        value: "Search + Image Search",
        description: "Przechodz od pomyslu do produktu szybciej dzieki dokladniejszemu searchowi i wyszukiwaniu po obrazie.",
      },
    ],
    categoryTitle: "Przegladaj Wedlug Kategorii",
    categoryIntro:
      "Jesli od razu wiesz, czego szukasz, zacznij od kategorii. To najszybszy sposob, by przejsc od szerokiego przegladania do bardziej konkretnej strony.",
    guideTitle: "Zacznij Od Najbardziej Przydatnych Poradnikow",
    guideIntro:
      "Otworz te poradniki, gdy QC, shipping, pierwsze zamowienie albo platnosc nadal spowalniaja kolejny krok.",
    howItWorksTitle: "Kupuj Z Mniejsza Liczba Bledow",
    howItWorksSteps: [
      "Zacznij od strony spreadsheet, jesli nadal potrzebujesz pomocy w wyborze najlepszego kolejnego kroku.",
      "Przejdz do kategorii, jesli interesuje Cie juz konkretny typ produktu.",
      "Skorzystaj z poradnikow, gdy pytania o shipping, QC, platnosc lub konto blokuja kolejny krok.",
      "Sprawdz FAQ, jesli potrzebujesz szybkiej odpowiedzi o bezpieczenstwie, wiarygodnosci i samym spreadsheet.",
    ],
    whyUseTitle: "Dlaczego Warto Zaczac Tutaj",
    whyUsePoints: [
      "Pomaga szybciej przejsc od szerokiego searchu spreadsheet do czystszej drogi produktowej.",
      "Trzyma blisko siebie kategorie, QC, shipping i buying help, gdy porownujesz opcje.",
      "Pozwala wejsc do Maisonlooks z lepszym pomyslem czego tak naprawde chcesz szukac.",
    ],
    faqTitle: "Szybkie Odpowiedzi Przed Przegladaniem",
    trustTitle: "Zanim Pojdziesz Dalej",
    trustPoints: [
      "To nie jest oficjalna strona Kakobuy.",
      "Korzystaj z tych stron, aby porownac opcje, sprawdzic QC i wyjasnic shipping przed zakupem.",
      "Gdy chcesz wiecej searchu i przegladania produktow, przejdz do Maisonlooks.",
      "Przed platnoscia zawsze sprawdz szczegoly produktu, rozmiar i shipping.",
    ],
  },
  es: {
    title: "Kakobuy Spreadsheet 2026 | Mejores finds, QC y enlaces por categoria",
    description:
      "Explora una guia independiente de Kakobuy Spreadsheet con mejores finds, accesos por categoria, ayuda de QC, respuestas sobre shipping y siguientes pasos de compra.",
    heroTitle: "Encuentra Mejores Picks De Kakobuy Mas Rapido",
    heroBody:
      "Empieza aqui si quieres entrar mas rapido en mejores picks de Kakobuy Spreadsheet. Compara categorias, ordena QC y shipping, y luego sigue en Maisonlooks con un catalogo mas grande, busqueda mas precisa, image search e inspiracion de outfits.",
    ctaLabel: "Explora Kakobuy Spreadsheet",
    heroBadges: ["Mejores Rutas De Producto", "QC + Shipping Help", "Actualizado Para 2026"],
    heroStats: [
      {
        label: "Empieza Con",
        value: "Rutas De Kakobuy Spreadsheet",
        description: "Elige categorias, QC o shipping help desde la ruta de Kakobuy Spreadsheet antes de entrar mas a fondo.",
      },
      {
        label: "Explora Mas",
        value: "60,000+ Productos",
        description: "Cuando ya sabes lo que quieres, Maisonlooks te da un pool mucho mas grande de productos para buscar.",
      },
      {
        label: "Busca Mejor",
        value: "Search + Image Search",
        description: "Pasa de una idea al producto mas rapido con busqueda mas precisa y busqueda por imagen.",
      },
    ],
    categoryTitle: "Explorar Por Categoria",
    categoryIntro:
      "Si ya sabes el tipo de producto que quieres revisar, entra primero por una categoria concreta. Es la forma mas rapida de pasar de una navegacion amplia a una pagina mas especifica.",
    guideTitle: "Empieza Por Las Guias Mas Utiles",
    guideIntro:
      "Abre estas guias cuando QC, shipping, primer pedido o pago todavia frenan el siguiente paso.",
    howItWorksTitle: "Compra Con Menos Dudas",
    howItWorksSteps: [
      "Empieza en la pagina spreadsheet si todavia necesitas ayuda para elegir el mejor siguiente paso.",
      "Entra en una categoria si ya sabes el tipo de producto que quieres revisar.",
      "Usa las guias cuando shipping, QC, pago o la cuenta te impidan dar el siguiente paso.",
      "Consulta las FAQ si solo necesitas respuestas rapidas sobre seguridad, legitimidad y la idea del spreadsheet.",
    ],
    whyUseTitle: "Por Que Empezar Aqui",
    whyUsePoints: [
      "Te ayuda a pasar de una busqueda amplia del spreadsheet a una ruta de producto mas clara.",
      "Mantiene categorias, QC, shipping y buying help mas cerca mientras comparas opciones.",
      "Te deja llegar a Maisonlooks con una mejor idea de lo que realmente quieres buscar.",
    ],
    faqTitle: "Respuestas Rapidas Antes De Navegar",
    trustTitle: "Antes De Seguir",
    trustPoints: [
      "Este no es el sitio oficial de Kakobuy.",
      "Usa estas paginas para comparar opciones, revisar QC y aclarar shipping antes de comprar.",
      "Cuando quieras mas busqueda y navegacion de productos, sigue a Maisonlooks.",
      "Antes de pagar, revisa siempre detalles del producto, talla y shipping.",
    ],
  },
};

export const spreadsheetPageCopy: Record<
  SupportedLocale,
  {
    title: string;
    description: string;
    intro: string;
    quickStartTitle: string;
    quickStartSteps: string[];
    sections: Array<{ heading: string; body: string; bullets: string[] }>;
  }
> = {
  en: {
    title: "Browse Kakobuy Spreadsheet | Spreadsheet Links, Best Finds, QC Help, and Buying Steps",
    description:
      "Open the Kakobuy Spreadsheet hub to find your next page faster, whether you need categories, QC help, shipping answers, or buying guidance.",
    intro:
      "Start here when Kakobuy Spreadsheet is the search, but shoes, QC, shipping, or the safest next move is still the real question.",
    quickStartTitle: "Pick The Best Kakobuy Spreadsheet Path",
    quickStartSteps: [
      "Open shoes or another category when you already know the product type you want first.",
      "Open QC or before-paying help when the listing looks close but trust still needs work.",
      "Open shipping help when parcel pressure, timing, or total cost is slowing the order down.",
    ],
    sections: [
      {
        heading: "Start With The Page That Matches The Real Question",
        body: "The best move here is not opening everything. It is reaching the one page that fits the decision in front of you right now.",
        bullets: [
          "Open shoes when product choice is already clear and comparison should start there.",
          "Open the QC guide when the listing still needs a real trust check.",
          "Open the before-paying guide when the order feels close but not fully clean.",
          "Open the FAQ pages when one short answer is enough to keep moving.",
        ],
      },
      {
        heading: "The Strongest Pages From Here",
        body: "This hub works best when it sends you straight into the pages that carry the most buying intent and the clearest next steps.",
        bullets: [
          "Category shortcuts like shoes, t-shirts, hoodies, and other focused product routes.",
          "Guides for first orders, QC, shipping cost, and the last check before paying.",
          "FAQ answers for safety, legitimacy, and quick blockers that should not slow the whole order down.",
          "A cleaner bridge from broad spreadsheet intent into stronger product or support pages.",
        ],
      },
      {
        heading: "Why This Hub Converts Better Than A Flat List",
        body: "A broad spreadsheet can show a lot of rows. This hub helps you turn those rows into a decision and then into the next right click.",
        bullets: [
          "Choose faster between product pages and support pages.",
          "Move from the spreadsheet term into shoes, QC, shipping, or before-paying help with less guesswork.",
          "Keep the strongest next pages close instead of bouncing through random results.",
        ],
      },
    ],
  },
  pl: {
    title: "Przegladaj Kakobuy Spreadsheet | Kategorie, QC i etapy zakupu",
    description:
      "Otworz hub Kakobuy Spreadsheet, aby szybciej trafic na wlasciwa strone, niezaleznie od tego czy potrzebujesz kategorii, QC, shippingu czy buying help.",
    intro:
      "Zacznij tutaj, gdy ogromna lista spreadsheet wydaje sie zbyt szeroka i potrzebujesz czystszego kolejnego kroku.",
    quickStartTitle: "Zacznij Od Wlasciwego Kliku",
    quickStartSteps: [
      "Wejdz w kategorie, gdy wiesz juz jaki typ produktu chcesz sprawdzic.",
      "Otworz QC albo shipping help, gdy produkt wyglada blisko decyzji, ale zaufanie, timing albo laczny koszt nadal wymagaja sprawdzenia.",
      "Uzyj szybkiej odpowiedzi, gdy potrzebujesz tylko jednego krotkiego checku przed dalszym ruchem.",
    ],
    sections: [
      {
        heading: "Zacznij Od Tego, Co Jest Najblizej",
        body: "Nie musisz otwierac tutaj wszystkiego. Wybierz strone, ktora pasuje do pytania, ktore masz teraz przed soba.",
        bullets: [
          "Wejdz w kategorie, jesli znasz juz typ produktu i chcesz bardziej konkretnej sciezki.",
          "Przeczytaj poradnik zakupu, jesli proces nadal blokuje kolejny ruch.",
          "Skorzystaj z poradnika QC zanim zaufasz ofercie albo batchowi.",
          "Uzyj FAQ, gdy potrzebujesz tylko krotkiej odpowiedzi o bezpieczenstwie, wiarygodnosci lub spreadsheet.",
        ],
      },
      {
        heading: "Co Mozesz Otworzyc Od Razu",
        body: "Stad mozesz przejsc od razu do kategorii produktowych, poradnikow zakupowych, QC, shippingu i szybkich odpowiedzi.",
        bullets: [
          "Skroty do kategorii shoes, bags, hoodies, sneakers i jackets.",
          "Poradniki o pierwszym zamowieniu, zakupie, shippingu i QC.",
          "FAQ o bezpieczenstwie, wiarygodnosci, oplatach, czasie i innych szybkich pytaniach.",
          "Szybki powrot do strony glownej, gdy chcesz znow spojrzec szerzej.",
        ],
      },
      {
        heading: "Dlaczego Kolejny Ruch Jest Tu Latwiejszy",
        body: "Cel jest prosty: przestac bladzc po szerokich listach i szybciej trafic na strone, ktora pasuje do kolejnej decyzji.",
        bullets: [
          "Szybciej wybieraj miedzy stronami produktowymi a dodatkowymi poradnikami.",
          "Trzymaj QC, shipping i buying help blisko pytan, ktore wracaja najczesciej.",
          "Porownuj kolejny ruch bez skakania po przypadkowych stronach.",
        ],
      },
    ],
  },
  es: {
    title: "Explora Kakobuy Spreadsheet | Categorias, QC y pasos de compra",
    description:
      "Abre el hub de Kakobuy Spreadsheet para llegar mas rapido a la pagina correcta, tanto si necesitas categorias como QC, shipping o buying help.",
    intro:
      "Empieza aqui cuando una lista enorme del spreadsheet se siente demasiado abierta y quieres un siguiente paso mas claro.",
    quickStartTitle: "Empieza Con El Clic Correcto",
    quickStartSteps: [
      "Abre una categoria cuando ya sabes que tipo de producto quieres revisar.",
      "Abre QC o shipping help cuando el item parece cerca, pero confianza, tiempos o coste total todavia necesitan trabajo.",
      "Usa una respuesta rapida cuando solo necesitas un chequeo corto antes de seguir.",
    ],
    sections: [
      {
        heading: "Empieza Por Lo Que Sientes Mas Cerca",
        body: "No necesitas abrirlo todo aqui. Elige la pagina que mejor encaja con la duda que tienes ahora mismo.",
        bullets: [
          "Abre una categoria si ya sabes el tipo de producto y quieres una ruta mas dirigida.",
          "Lee la guia de compra si el proceso todavia esta frenando el siguiente paso.",
          "Consulta la guia de QC antes de confiar en un listado o batch.",
          "Usa las FAQ si solo necesitas una respuesta breve sobre seguridad, legitimidad o spreadsheet.",
        ],
      },
      {
        heading: "Que Puedes Abrir Ahora Mismo",
        body: "Desde aqui puedes saltar directo a categorias de producto, guias de compra, ayuda de QC, respuestas de shipping y chequeos rapidos.",
        bullets: [
          "Atajos a categorias como shoes, bags, hoodies, sneakers y jackets.",
          "Guias sobre primer pedido, compra, shipping y QC.",
          "FAQ sobre seguridad, legitimidad, tarifas, tiempo y otras dudas rapidas.",
          "Una ruta rapida de vuelta a la homepage si quieres volver a abrir el enfoque.",
        ],
      },
      {
        heading: "Por Que El Siguiente Paso Se Siente Mas Facil",
        body: "La idea es simple: dejar de perderte en listas amplias y llegar mas rapido a la pagina que encaja con tu siguiente decision.",
        bullets: [
          "Elige mas rapido entre paginas de producto y paginas de apoyo.",
          "Mantiene QC, shipping y buying help cerca de las dudas que suelen aparecer.",
          "Compara tu siguiente movimiento sin saltar por paginas al azar.",
        ],
      },
    ],
  },
};

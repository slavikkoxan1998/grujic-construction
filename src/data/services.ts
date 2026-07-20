import type { Lang } from "../lib/i18n";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  cardTitle: string; // label shown on homepage service card
  h1: string;
  metaTitle: string;
  metaDescription: string;
  imageKey:
    | "house"
    | "reconstruction"
    | "facade"
    | "drywall"
    | "tiles"
    | "painting"
    | "demolition"
    | "earthworks"
    | "foil"
    | "cleaning";
  intro: string[];
  benefits: string[];
  faq: ServiceFaq[];
}

export const services: Record<Lang, ServiceContent[]> = {
  cs: [
    {
      slug: "vystavba-domu",
      cardTitle: "Výstavba domů",
      h1: "Výstavba rodinných domů v Brně a okolí",
      metaTitle: "Výstavba domů Brno – stavba na klíč | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Výstavba rodinných domů v Brně od základů po střechu. Vlastní tým, kvalitní materiály, garance a dodržení termínů. Nezávazná konzultace zdarma.",
      imageKey: "house",
      intro: [
        "Stavíme rodinné domy v Brně a Jihomoravském kraji od základové desky až po předání klíčů. Každý projekt vedeme s vlastním týmem řemeslníků, takže máte jednoho partnera pro celou stavbu a nemusíte koordinovat desítky různých firem.",
        "Před zahájením stavby projdeme s klientem projektovou dokumentaci, navrhneme reálný harmonogram a rozpočet bez skrytých položek. Během výstavby probíhá průběžná kontrola kvality na každé fázi – hrubá stavba, izolace, rozvody, dokončovací práce.",
      ],
      benefits: [
        "Kompletní realizace od základů po střechu",
        "Vlastní tým, žádní nekontrolovaní subdodavatelé",
        "Pevný harmonogram a rozpočet bez skrytých nákladů",
        "Garance na provedené práce",
      ],
      faq: [
        {
          question: "Jak dlouho trvá výstavba rodinného domu?",
          answer:
            "Standardní rodinný dům o velikosti 120–150 m² realizujeme obvykle za 8–12 měsíců v závislosti na složitosti projektu a počasí.",
        },
        {
          question: "Zajišťujete i projektovou dokumentaci?",
          answer:
            "Stavíme podle hotové projektové dokumentace klienta nebo spolupracujeme s projektanty, se kterými dokumentaci připravíme na míru.",
        },
      ],
    },
    {
      slug: "rekonstrukce",
      cardTitle: "Rekonstrukce",
      h1: "Rekonstrukce bytů a rodinných domů Brno",
      metaTitle: "Rekonstrukce bytů a domů Brno | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Kompletní rekonstrukce bytů, rodinných domů a komerčních prostor v Brně. Bourací práce, rozvody, dokončovací práce na klíč. Nezávazná nabídka zdarma.",
      imageKey: "reconstruction",
      intro: [
        "Provádíme kompletní i dílčí rekonstrukce bytů, rodinných domů a komerčních prostor v Brně a okolí. Řešíme bourací práce, nové rozvody elektřiny a vody, jádra bytů, podlahy i finální dokončovací práce.",
        "Rekonstrukci vždy zahajujeme prohlídkou na místě a nezávaznou cenovou nabídkou. Klient dostává jasný harmonogram prací, takže ví, kdy bude byt nebo dům znovu obyvatelný.",
      ],
      benefits: [
        "Rekonstrukce bytových jader i celých bytů",
        "Bourací a zednické práce",
        "Nové elektroinstalace a vodoinstalace",
        "Práce v obydlených i prázdných objektech",
      ],
      faq: [
        {
          question: "Rekonstruujete i byty v obydlených domech?",
          answer:
            "Ano, práce plánujeme tak, abychom minimalizovali hluk a nepořádek pro sousedy, a dodržujeme domovní řád.",
        },
        {
          question: "Je prohlídka a nabídka zdarma?",
          answer:
            "Ano, prohlídku objektu a nezávaznou cenovou nabídku poskytujeme zdarma.",
        },
      ],
    },
    {
      slug: "zatepleni-fasad",
      cardTitle: "Zateplení a izolace fasád",
      h1: "Zateplení fasád a izolace domů Brno",
      metaTitle: "Zateplení fasád Brno – zateplovací systémy | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Zateplení fasád rodinných, bytových i panelových domů v Brně. Moderní zateplovací systémy, nižší náklady na energie, dlouhá životnost. Poptejte cenu.",
      imageKey: "facade",
      intro: [
        "Zateplujeme fasády rodinných domů, bytových jednotek i panelových domů v Brně pomocí certifikovaných zateplovacích systémů. Kvalitní zateplení snižuje náklady na vytápění a prodlužuje životnost fasády.",
        "Součástí realizace je i řešení tepelných mostů, izolace soklu a v případě potřeby i výměna oken a dveří, aby celý plášť budovy fungoval jako jeden systém.",
      ],
      benefits: [
        "Certifikované zateplovací systémy",
        "Nižší náklady na vytápění",
        "Řešení tepelných mostů a soklu",
        "Vhodné pro rodinné i panelové domy",
      ],
      faq: [
        {
          question: "O kolik se sníží náklady na vytápění po zateplení?",
          answer:
            "V závislosti na stavu původní fasády a tloušťce izolace klienti obvykle vidí úsporu 20–40 % nákladů na vytápění.",
        },
        {
          question: "Je na zateplení možné čerpat dotaci?",
          answer:
            "Ano, zateplení fasád je často možné kombinovat s dotačními programy typu Nová zelená úsporám – rádi poradíme s podklady.",
        },
      ],
    },
    {
      slug: "sadrokartony",
      cardTitle: "Sádrokartony",
      h1: "Sádrokartonářské práce a montované příčky Brno",
      metaTitle: "Sádrokartony Brno – podhledy, příčky | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Sádrokartonářské práce v Brně: podhledy, příčky, předstěny a designové prvky. Rychlá a čistá montáž bez zbytečného bourání. Poptejte realizaci.",
      imageKey: "drywall",
      intro: [
        "Montujeme sádrokartonové podhledy, příčky a předstěny pro byty, rodinné domy i komerční prostory v Brně. Sádrokarton umožňuje rychlé úpravy dispozice bez rozsáhlého bourání.",
        "Využíváme kvalitní desky vhodné i do vlhkých prostor (koupelny) a řešíme i designové prvky – světelné rampy, obklady sloupů, akustické podhledy.",
      ],
      benefits: [
        "Podhledy, příčky i předstěny",
        "Desky vhodné do vlhkých prostor",
        "Rychlá montáž bez nadměrného nepořádku",
        "Designové a akustické řešení interiérů",
      ],
      faq: [
        {
          question: "Lze sádrokarton použít v koupelně?",
          answer:
            "Ano, používáme desky s protivlhkostní úpravou určené přímo do koupelen a dalších vlhkých prostor.",
        },
      ],
    },
    {
      slug: "obklady-a-dlazby",
      cardTitle: "Obklady a dlažby",
      h1: "Pokládka obkladů a dlažby Brno",
      metaTitle: "Obklady a dlažba Brno – pokládka na klíč | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Pokládka obkladů a dlažby v Brně – koupelny, kuchyně, komerční prostory. Přesná práce s různými materiály a formáty dlaždic. Poptejte cenu.",
      imageKey: "tiles",
      intro: [
        "Pokládáme obklady a dlažby v koupelnách, kuchyních i komerčních prostorách v Brně a okolí. Pracujeme s keramickými i velkoformátovými dlaždicemi a dbáme na přesné spárování a hydroizolaci pod dlažbou.",
        "Před pokládkou vždy zkontrolujeme rovinnost podkladu a v případě potřeby provedeme vyrovnání, aby výsledná plocha byla bez vlnění a prasklin.",
      ],
      benefits: [
        "Práce s keramickými i velkoformátovými dlaždicemi",
        "Hydroizolace pod dlažbou v mokrých provozech",
        "Vyrovnání podkladu před pokládkou",
        "Koupelny, kuchyně i komerční prostory",
      ],
      faq: [
        {
          question: "Řešíte i hydroizolaci v koupelně před pokládkou?",
          answer:
            "Ano, hydroizolační stěrku a pásky v mokrých provozech aplikujeme jako standardní součást přípravy podkladu.",
        },
      ],
    },
    {
      slug: "malby-a-natery",
      cardTitle: "Malby a nátěry",
      h1: "Malířské a natěračské práce Brno",
      metaTitle: "Malby a nátěry Brno – malířské práce | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Malířské a lakýrnické práce v Brně – interiéry, fasády, nátěry dřevěných a kovových konstrukcí. Čistá a rychlá realizace. Poptejte termín.",
      imageKey: "painting",
      intro: [
        "Provádíme malířské práce v interiérech i nátěry fasád, dřevěných a kovových konstrukcí v Brně. Před malováním vždy připravíme povrch – tmelení, broušení, penetrace – aby výsledný nátěr dlouho vydržel.",
        "Nabízíme i speciální nátěry (protiplísňové, omyvatelné) pro prostory s vyšší vlhkostí nebo provozem, jako jsou kanceláře a společné prostory bytových domů.",
      ],
      benefits: [
        "Malby interiérů i nátěry fasád",
        "Příprava podkladu (tmelení, broušení, penetrace)",
        "Protiplísňové a omyvatelné nátěry",
        "Nátěry dřevěných a kovových konstrukcí",
      ],
      faq: [
        {
          question: "Malujete i společné prostory bytových domů?",
          answer:
            "Ano, realizujeme malby a nátěry chodeb, schodišť a dalších společných prostor bytových domů a SVJ.",
        },
      ],
    },
    {
      slug: "demolice",
      cardTitle: "Demolice",
      h1: "Demoliční práce Brno – bourání staveb",
      metaTitle: "Demolice Brno – demoliční a bourací práce | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Profesionální a bezpečné demoliční práce v Brně – bourání interiérů, staveb i menších objektů. Odvoz suti a ekologická likvidace odpadu.",
      imageKey: "demolition",
      intro: [
        "Provádíme demoliční práce v Brně a okolí – od bourání interiérových příček po demolice menších staveb. Práce probíhají v souladu s bezpečnostními předpisy a s ohledem na okolní zástavbu.",
        "Součástí služby je i odvoz stavební suti a ekologická likvidace odpadu, takže se po demolici nemusíte starat o vyklizení pozemku.",
      ],
      benefits: [
        "Bourání interiérů i menších staveb",
        "Dodržení bezpečnostních předpisů",
        "Odvoz suti a likvidace odpadu",
        "Šetrný přístup k okolní zástavbě",
      ],
      faq: [
        {
          question: "Zajišťujete i odvoz suti po demolici?",
          answer:
            "Ano, odvoz a ekologickou likvidaci stavební suti a odpadu zajišťujeme jako standardní součást demoličních prací.",
        },
      ],
    },
    {
      slug: "zemni-prace",
      cardTitle: "Zemní práce",
      h1: "Zemní a výkopové práce Brno",
      metaTitle: "Zemní práce Brno – výkopy, terénní úpravy | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Zemní a výkopové práce v Brně – základové výkopy, inženýrské sítě, terénní úpravy pozemků. Vlastní technika, rychlá realizace.",
      imageKey: "earthworks",
      intro: [
        "Realizujeme zemní a výkopové práce pro výstavbu rodinných domů i komerčních objektů v Brně – základové výkopy, výkopy pro inženýrské sítě a terénní úpravy pozemků.",
        "Díky vlastní technice dokážeme práce naplánovat flexibilně a navázat je přímo na další fáze výstavby, aby nedocházelo ke zbytečným prostojům.",
      ],
      benefits: [
        "Základové výkopy pro novostavby",
        "Výkopy pro inženýrské sítě",
        "Terénní úpravy a srovnání pozemku",
        "Vlastní stavební technika",
      ],
      faq: [
        {
          question: "Provádíte i terénní úpravy po výstavbě?",
          answer:
            "Ano, po dokončení stavby zajistíme i finální terénní úpravy a přípravu pozemku pro zahradní úpravy.",
        },
      ],
    },
    {
      slug: "hydroizolacni-folie",
      cardTitle: "Hydroizolační fólie",
      h1: "Hydroizolační fólie Brno – ochrana proti vodě",
      metaTitle: "Hydroizolační fólie Brno – ploché střechy, spodní stavba | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Hydroizolace plochých střech a podzemních staveb pomocí fóliových systémů v Brně. Spolehlivá ochrana proti vodě a vlhkosti.",
      imageKey: "foil",
      intro: [
        "Provádíme hydroizolace plochých střech a podzemních staveb pomocí fóliových hydroizolačních systémů. Realizace v Brně zahrnuje přípravu podkladu, pokládku fólie a kontrolu spojů.",
        "Kvalitní hydroizolace je základem ochrany budovy proti vodě a vlhkosti – řešíme jak novostavby, tak opravy stávajících hydroizolací u plochých střech.",
      ],
      benefits: [
        "Hydroizolace plochých střech",
        "Ochrana podzemních staveb proti vlhkosti",
        "Kontrola a těsnění spojů fólie",
        "Novostavby i opravy stávající izolace",
      ],
      faq: [
        {
          question: "Opravujete i starší hydroizolaci ploché střechy?",
          answer:
            "Ano, provádíme diagnostiku stávající hydroizolace a její opravu nebo kompletní výměnu podle stavu střechy.",
        },
      ],
    },
    {
      slug: "uklid",
      cardTitle: "Úklid",
      h1: "Profesionální úklidové služby Brno – kanceláře i po stavbě",
      metaTitle: "Úklid Brno – kanceláře a po rekonstrukci | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Profesionální úklidové služby v Brně – úklid kancelářských prostor a generální úklid po rekonstrukci nebo výstavbě. Rychle, spolehlivě, na klíč.",
      imageKey: "cleaning",
      intro: [
        "Nabízíme profesionální úklidové služby pro kancelářské prostory i generální úklid po rekonstrukci nebo novostavbě v Brně a okolí. Naším cílem je předat vám prostor čistý, uklizený a připravený k okamžitému užívání.",
        "Úklid po stavbě zahrnuje odstranění stavebního prachu, zbytků materiálů, čištění podlah, oken, dveří i sanitárních prostor. Pro kanceláře nabízíme pravidelný i jednorázový úklid přizpůsobený vašemu provozu.",
      ],
      benefits: [
        "Generální úklid po rekonstrukci a výstavbě",
        "Pravidelný i jednorázový úklid kanceláří",
        "Odstranění stavebního prachu a zbytků materiálů",
        "Čištění podlah, oken, dveří a sanitárních prostor",
      ],
      faq: [
        {
          question: "Provádíte úklid i po větší rekonstrukci bytu?",
          answer:
            "Ano, specializujeme se na generální úklid po stavebních pracích – odstraníme stavební prach, zbytky materiálů a předáme vám prostor v bezvadném stavu.",
        },
        {
          question: "Nabízíte pravidelný úklid kanceláří?",
          answer:
            "Ano, pro firmy zajišťujeme pravidelný úklid kancelářských prostor podle domluveného harmonogramu – denní, týdenní i měsíční frekvence.",
        },
      ],
    },
  ],

  en: [
    {
      slug: "vystavba-domu",
      cardTitle: "House construction",
      h1: "New house construction in Brno and the surrounding area",
      metaTitle: "House construction Brno – turnkey building | GRUJIČ CONSTRUCTION",
      metaDescription:
        "New family house construction in Brno, from the foundations to the roof. Our own crew, quality materials, guarantees and deadlines kept. Free, no-obligation consultation.",
      imageKey: "house",
      intro: [
        "We build family houses in Brno and the South Moravian Region, from the foundation slab all the way to handing over the keys. Every project is run by our own team of craftsmen, so you have a single partner for the whole build instead of coordinating dozens of different contractors.",
        "Before construction starts, we go through the project documentation with the client, put together a realistic schedule and budget with no hidden items. Quality is checked continuously at every stage of the build — shell construction, insulation, wiring and plumbing, finishing works.",
      ],
      benefits: [
        "Complete build from foundations to roof",
        "Our own crew, no uncontrolled subcontractors",
        "Fixed schedule and budget with no hidden costs",
        "Warranty on completed work",
      ],
      faq: [
        {
          question: "How long does building a family house take?",
          answer:
            "A standard family house of 120–150 m² typically takes 8–12 months, depending on the complexity of the project and the weather.",
        },
        {
          question: "Do you also provide project documentation?",
          answer:
            "We build according to the client's finished project documentation, or we work with architects to prepare documentation tailored to your needs.",
        },
      ],
    },
    {
      slug: "rekonstrukce",
      cardTitle: "Renovations",
      h1: "Apartment and house renovations in Brno",
      metaTitle: "Apartment & house renovations Brno | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Complete renovations of apartments, family houses and commercial spaces in Brno. Demolition, wiring and plumbing, turnkey finishing works. Free, no-obligation quote.",
      imageKey: "reconstruction",
      intro: [
        "We carry out complete and partial renovations of apartments, family houses and commercial spaces in Brno and the surrounding area. We handle demolition work, new electrical and water lines, apartment cores, flooring and final finishing works.",
        "Every renovation starts with an on-site inspection and a no-obligation price quote. The client receives a clear work schedule, so you know exactly when the apartment or house will be livable again.",
      ],
      benefits: [
        "Renovation of apartment cores and whole apartments",
        "Demolition and bricklaying work",
        "New electrical wiring and plumbing",
        "Work in both occupied and vacant buildings",
      ],
      faq: [
        {
          question: "Do you renovate apartments in occupied buildings?",
          answer:
            "Yes, we plan the work to minimise noise and mess for the neighbours, and we follow the building's house rules.",
        },
        {
          question: "Is the inspection and quote free of charge?",
          answer:
            "Yes, the on-site inspection and the no-obligation price quote are both free of charge.",
        },
      ],
    },
    {
      slug: "zatepleni-fasad",
      cardTitle: "Facade insulation",
      h1: "Facade insulation and building insulation in Brno",
      metaTitle: "Facade insulation Brno – insulation systems | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Facade insulation for family houses, apartment buildings and panel buildings in Brno. Modern insulation systems, lower energy costs, long service life. Get a quote.",
      imageKey: "facade",
      intro: [
        "We insulate the facades of family houses, apartment units and panel buildings in Brno using certified insulation systems. Quality insulation lowers heating costs and extends the life of the facade.",
        "The work also covers thermal bridges and plinth insulation, and, if needed, window and door replacement, so the whole building envelope works as a single system.",
      ],
      benefits: [
        "Certified insulation systems",
        "Lower heating costs",
        "Thermal bridge and plinth solutions",
        "Suitable for family houses and panel buildings alike",
      ],
      faq: [
        {
          question: "How much do heating costs drop after insulation?",
          answer:
            "Depending on the condition of the original facade and the insulation thickness, clients typically see a 20–40% reduction in heating costs.",
        },
        {
          question: "Can I get a subsidy for facade insulation?",
          answer:
            "Yes, facade insulation can often be combined with subsidy programmes such as New Green Savings — we're happy to help with the paperwork.",
        },
      ],
    },
    {
      slug: "sadrokartony",
      cardTitle: "Drywall / plasterboard",
      h1: "Drywall installation and partition walls in Brno",
      metaTitle: "Drywall Brno – ceilings, partition walls | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Drywall installation in Brno: suspended ceilings, partition walls, pre-wall systems and design features. Fast, clean installation with no unnecessary demolition. Get a quote.",
      imageKey: "drywall",
      intro: [
        "We install drywall suspended ceilings, partition walls and pre-wall systems for apartments, family houses and commercial spaces in Brno. Drywall allows quick layout changes without extensive demolition.",
        "We use quality boards suitable for damp areas (bathrooms) as well, and we also handle design features — light coves, column cladding, acoustic ceilings.",
      ],
      benefits: [
        "Suspended ceilings, partitions and pre-wall systems",
        "Boards suitable for damp areas",
        "Fast installation with minimal mess",
        "Design and acoustic interior solutions",
      ],
      faq: [
        {
          question: "Can drywall be used in a bathroom?",
          answer:
            "Yes, we use moisture-resistant boards designed specifically for bathrooms and other damp areas.",
        },
      ],
    },
    {
      slug: "obklady-a-dlazby",
      cardTitle: "Tiling",
      h1: "Tile and floor tiling installation in Brno",
      metaTitle: "Tiling Brno – turnkey tile installation | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Wall and floor tiling in Brno — bathrooms, kitchens, commercial spaces. Precise work with a wide range of materials and tile formats. Get a quote.",
      imageKey: "tiles",
      intro: [
        "We install wall and floor tiles in bathrooms, kitchens and commercial spaces in Brno and the surrounding area. We work with both ceramic and large-format tiles, with careful attention to grouting and waterproofing under the tiles.",
        "Before tiling, we always check the flatness of the substrate and level it if needed, so the finished surface is free of waviness and cracks.",
      ],
      benefits: [
        "Work with ceramic and large-format tiles",
        "Waterproofing under tiles in wet areas",
        "Substrate levelling before tiling",
        "Bathrooms, kitchens and commercial spaces",
      ],
      faq: [
        {
          question: "Do you also handle waterproofing in the bathroom before tiling?",
          answer:
            "Yes, we apply waterproofing membrane and tape in wet areas as a standard part of substrate preparation.",
        },
      ],
    },
    {
      slug: "malby-a-natery",
      cardTitle: "Painting",
      h1: "Painting and coating work in Brno",
      metaTitle: "Painting Brno – interior & exterior painting | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Painting and coating work in Brno — interiors, facades, wood and metal structure coatings. Clean, fast execution. Get a date booked.",
      imageKey: "painting",
      intro: [
        "We carry out interior painting as well as facade, wood and metal structure coatings in Brno. Before painting we always prepare the surface — filling, sanding, priming — so the finished coat lasts a long time.",
        "We also offer special coatings (anti-mould, washable) for spaces with higher humidity or foot traffic, such as offices and the common areas of apartment buildings.",
      ],
      benefits: [
        "Interior painting and facade coatings",
        "Surface preparation (filling, sanding, priming)",
        "Anti-mould and washable coatings",
        "Wood and metal structure coatings",
      ],
      faq: [
        {
          question: "Do you also paint the common areas of apartment buildings?",
          answer:
            "Yes, we paint and coat hallways, staircases and other common areas of apartment buildings and owners' associations.",
        },
      ],
    },
    {
      slug: "demolice",
      cardTitle: "Demolition",
      h1: "Demolition work in Brno – tearing down structures",
      metaTitle: "Demolition Brno – demolition work | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Professional and safe demolition work in Brno — interior demolition, buildings and smaller structures. Debris removal and eco-friendly waste disposal.",
      imageKey: "demolition",
      intro: [
        "We carry out demolition work in Brno and the surrounding area — from tearing down interior partitions to demolishing smaller structures. Work is carried out in line with safety regulations and with care for the surrounding buildings.",
        "The service also includes removal of construction debris and eco-friendly waste disposal, so you don't have to worry about clearing the site after demolition.",
      ],
      benefits: [
        "Demolition of interiors and smaller structures",
        "Compliance with safety regulations",
        "Debris removal and waste disposal",
        "Careful approach to surrounding buildings",
      ],
      faq: [
        {
          question: "Do you also handle debris removal after demolition?",
          answer:
            "Yes, debris removal and eco-friendly disposal of construction waste is a standard part of our demolition service.",
        },
      ],
    },
    {
      slug: "zemni-prace",
      cardTitle: "Groundworks",
      h1: "Groundworks and excavation in Brno",
      metaTitle: "Groundworks Brno – excavation, land grading | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Groundworks and excavation in Brno — foundation excavation, utility trenches, land grading. Our own machinery, fast execution.",
      imageKey: "earthworks",
      intro: [
        "We carry out groundworks and excavation for the construction of family houses and commercial buildings in Brno — foundation excavation, utility trenches and land grading.",
        "Thanks to our own machinery, we can plan the work flexibly and link it directly to the next stages of construction, avoiding unnecessary downtime.",
      ],
      benefits: [
        "Foundation excavation for new builds",
        "Trenches for utility connections",
        "Land grading and levelling",
        "Our own construction machinery",
      ],
      faq: [
        {
          question: "Do you also handle land grading after construction?",
          answer:
            "Yes, once construction is finished we also handle final land grading and prepare the site for landscaping.",
        },
      ],
    },
    {
      slug: "hydroizolacni-folie",
      cardTitle: "Waterproofing membranes",
      h1: "Waterproofing membranes in Brno – protection against water",
      metaTitle: "Waterproofing membranes Brno – flat roofs, foundations | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Waterproofing of flat roofs and underground structures using membrane systems in Brno. Reliable protection against water and moisture.",
      imageKey: "foil",
      intro: [
        "We carry out waterproofing of flat roofs and underground structures using membrane-based waterproofing systems. Work in Brno includes substrate preparation, membrane installation and seam inspection.",
        "Quality waterproofing is the foundation of protecting a building against water and moisture — we handle both new builds and repairs of existing flat-roof waterproofing.",
      ],
      benefits: [
        "Flat roof waterproofing",
        "Protection of underground structures against moisture",
        "Inspection and sealing of membrane seams",
        "New builds and repairs of existing waterproofing",
      ],
      faq: [
        {
          question: "Do you also repair older flat-roof waterproofing?",
          answer:
            "Yes, we diagnose the condition of existing waterproofing and either repair it or replace it completely, depending on the state of the roof.",
        },
      ],
    },
    {
      slug: "uklid",
      cardTitle: "Cleaning",
      h1: "Professional cleaning services in Brno – offices and post-construction",
      metaTitle: "Cleaning Brno – offices and post-renovation cleaning | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Professional cleaning services in Brno — office cleaning and deep cleaning after renovation or construction. Fast, reliable, turnkey.",
      imageKey: "cleaning",
      intro: [
        "We offer professional cleaning services for office spaces as well as deep cleaning after renovation or new construction in Brno and the surrounding area. Our goal is to hand you a space that is clean, tidy and ready for immediate use.",
        "Post-construction cleaning includes removal of construction dust and material residue, and cleaning of floors, windows, doors and sanitary areas. For offices, we offer both regular and one-off cleaning tailored to your operation.",
      ],
      benefits: [
        "Deep cleaning after renovation and construction",
        "Regular and one-off office cleaning",
        "Removal of construction dust and material residue",
        "Cleaning of floors, windows, doors and sanitary areas",
      ],
      faq: [
        {
          question: "Do you also clean after a larger apartment renovation?",
          answer:
            "Yes, we specialise in deep cleaning after construction work — we remove construction dust and material residue and hand over the space in flawless condition.",
        },
        {
          question: "Do you offer regular office cleaning?",
          answer:
            "Yes, for companies we provide regular office cleaning on an agreed schedule — daily, weekly or monthly.",
        },
      ],
    },
  ],

  sk: [
    {
      slug: "vystavba-domu",
      cardTitle: "Výstavba domov",
      h1: "Výstavba rodinných domov v Brne a okolí",
      metaTitle: "Výstavba domov Brno – stavba na kľúč | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Výstavba rodinných domov v Brne od základov po strechu. Vlastný tím, kvalitné materiály, garancia a dodržanie termínov. Nezáväzná konzultácia zadarmo.",
      imageKey: "house",
      intro: [
        "Staviame rodinné domy v Brne a Juhomoravskom kraji od základovej dosky až po odovzdanie kľúčov. Každý projekt vedieme s vlastným tímom remeselníkov, takže máte jedného partnera pre celú stavbu a nemusíte koordinovať desiatky rôznych firiem.",
        "Pred začatím stavby prejdeme s klientom projektovú dokumentáciu, navrhneme reálny harmonogram a rozpočet bez skrytých položiek. Počas výstavby prebieha priebežná kontrola kvality v každej fáze – hrubá stavba, izolácia, rozvody, dokončovacie práce.",
      ],
      benefits: [
        "Kompletná realizácia od základov po strechu",
        "Vlastný tím, žiadni nekontrolovaní subdodávatelia",
        "Pevný harmonogram a rozpočet bez skrytých nákladov",
        "Garancia na vykonané práce",
      ],
      faq: [
        {
          question: "Ako dlho trvá výstavba rodinného domu?",
          answer:
            "Štandardný rodinný dom s rozlohou 120–150 m² realizujeme zvyčajne za 8–12 mesiacov v závislosti od zložitosti projektu a počasia.",
        },
        {
          question: "Zabezpečujete aj projektovú dokumentáciu?",
          answer:
            "Staviame podľa hotovej projektovej dokumentácie klienta alebo spolupracujeme s projektantmi, s ktorými dokumentáciu pripravíme na mieru.",
        },
      ],
    },
    {
      slug: "rekonstrukce",
      cardTitle: "Rekonštrukcie",
      h1: "Rekonštrukcie bytov a rodinných domov Brno",
      metaTitle: "Rekonštrukcie bytov a domov Brno | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Kompletné rekonštrukcie bytov, rodinných domov a komerčných priestorov v Brne. Búracie práce, rozvody, dokončovacie práce na kľúč. Nezáväzná ponuka zadarmo.",
      imageKey: "reconstruction",
      intro: [
        "Vykonávame kompletné aj čiastočné rekonštrukcie bytov, rodinných domov a komerčných priestorov v Brne a okolí. Riešime búracie práce, nové rozvody elektriny a vody, jadrá bytov, podlahy aj finálne dokončovacie práce.",
        "Rekonštrukciu vždy začíname obhliadkou na mieste a nezáväznou cenovou ponukou. Klient dostane jasný harmonogram prác, takže vie, kedy bude byt alebo dom znova obývateľný.",
      ],
      benefits: [
        "Rekonštrukcie bytových jadier aj celých bytov",
        "Búracie a murárske práce",
        "Nové elektroinštalácie a vodoinštalácie",
        "Práce v obývaných aj prázdnych objektoch",
      ],
      faq: [
        {
          question: "Rekonštruujete aj byty v obývaných domoch?",
          answer:
            "Áno, práce plánujeme tak, aby sme minimalizovali hluk a neporiadok pre susedov, a dodržiavame domový poriadok.",
        },
        {
          question: "Je obhliadka a ponuka zadarmo?",
          answer:
            "Áno, obhliadku objektu a nezáväznú cenovú ponuku poskytujeme zadarmo.",
        },
      ],
    },
    {
      slug: "zatepleni-fasad",
      cardTitle: "Zateplenie a izolácia fasád",
      h1: "Zateplenie fasád a izolácia domov Brno",
      metaTitle: "Zateplenie fasád Brno – zatepľovacie systémy | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Zateplenie fasád rodinných, bytových aj panelových domov v Brne. Moderné zatepľovacie systémy, nižšie náklady na energie, dlhá životnosť. Vyžiadajte si cenu.",
      imageKey: "facade",
      intro: [
        "Zatepľujeme fasády rodinných domov, bytových jednotiek aj panelových domov v Brne pomocou certifikovaných zatepľovacích systémov. Kvalitné zateplenie znižuje náklady na vykurovanie a predlžuje životnosť fasády.",
        "Súčasťou realizácie je aj riešenie tepelných mostov, izolácia soklu a v prípade potreby aj výmena okien a dverí, aby celý plášť budovy fungoval ako jeden systém.",
      ],
      benefits: [
        "Certifikované zatepľovacie systémy",
        "Nižšie náklady na vykurovanie",
        "Riešenie tepelných mostov a soklu",
        "Vhodné pre rodinné aj panelové domy",
      ],
      faq: [
        {
          question: "O koľko sa znížia náklady na vykurovanie po zateplení?",
          answer:
            "V závislosti od stavu pôvodnej fasády a hrúbky izolácie klienti zvyčajne vidia úsporu 20–40 % nákladov na vykurovanie.",
        },
        {
          question: "Je na zateplenie možné čerpať dotáciu?",
          answer:
            "Áno, zateplenie fasád je často možné kombinovať s dotačnými programami typu Nová zelená úsporám – radi poradíme s podkladmi.",
        },
      ],
    },
    {
      slug: "sadrokartony",
      cardTitle: "Sadrokartóny",
      h1: "Sadrokartonárske práce a montované priečky Brno",
      metaTitle: "Sadrokartóny Brno – podhľady, priečky | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Sadrokartonárske práce v Brne: podhľady, priečky, predsteny a dizajnové prvky. Rýchla a čistá montáž bez zbytočného búrania. Vyžiadajte si realizáciu.",
      imageKey: "drywall",
      intro: [
        "Montujeme sadrokartónové podhľady, priečky a predsteny pre byty, rodinné domy aj komerčné priestory v Brne. Sadrokartón umožňuje rýchle úpravy dispozície bez rozsiahleho búrania.",
        "Využívame kvalitné dosky vhodné aj do vlhkých priestorov (kúpeľne) a riešime aj dizajnové prvky – svetelné rampy, obklady stĺpov, akustické podhľady.",
      ],
      benefits: [
        "Podhľady, priečky aj predsteny",
        "Dosky vhodné do vlhkých priestorov",
        "Rýchla montáž bez nadmerného neporiadku",
        "Dizajnové a akustické riešenie interiérov",
      ],
      faq: [
        {
          question: "Dá sa sadrokartón použiť v kúpeľni?",
          answer:
            "Áno, používame dosky s protivlhkostnou úpravou určené priamo do kúpeľní a ďalších vlhkých priestorov.",
        },
      ],
    },
    {
      slug: "obklady-a-dlazby",
      cardTitle: "Obklady a dlažby",
      h1: "Pokladanie obkladov a dlažby Brno",
      metaTitle: "Obklady a dlažba Brno – pokladanie na kľúč | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Pokladanie obkladov a dlažby v Brne – kúpeľne, kuchyne, komerčné priestory. Presná práca s rôznymi materiálmi a formátmi dlaždíc. Vyžiadajte si cenu.",
      imageKey: "tiles",
      intro: [
        "Pokladáme obklady a dlažby v kúpeľniach, kuchyniach aj komerčných priestoroch v Brne a okolí. Pracujeme s keramickými aj veľkoformátovými dlaždicami a dbáme na presné škárovanie a hydroizoláciu pod dlažbou.",
        "Pred pokladaním vždy skontrolujeme rovinnosť podkladu a v prípade potreby vykonáme vyrovnanie, aby výsledná plocha bola bez vlnenia a prasklín.",
      ],
      benefits: [
        "Práca s keramickými aj veľkoformátovými dlaždicami",
        "Hydroizolácia pod dlažbou v mokrých priestoroch",
        "Vyrovnanie podkladu pred pokladaním",
        "Kúpeľne, kuchyne aj komerčné priestory",
      ],
      faq: [
        {
          question: "Riešite aj hydroizoláciu v kúpeľni pred pokladaním?",
          answer:
            "Áno, hydroizolačnú stierku a pásky v mokrých priestoroch aplikujeme ako štandardnú súčasť prípravy podkladu.",
        },
      ],
    },
    {
      slug: "malby-a-natery",
      cardTitle: "Maľby a nátery",
      h1: "Maliarske a natieračské práce Brno",
      metaTitle: "Maľby a nátery Brno – maliarske práce | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Maliarske a lakýrnické práce v Brne – interiéry, fasády, nátery drevených a kovových konštrukcií. Čistá a rýchla realizácia. Vyžiadajte si termín.",
      imageKey: "painting",
      intro: [
        "Vykonávame maliarske práce v interiéroch aj nátery fasád, drevených a kovových konštrukcií v Brne. Pred maľovaním vždy pripravíme povrch – tmelenie, brúsenie, penetrácia – aby výsledný náter dlho vydržal.",
        "Ponúkame aj špeciálne nátery (protiplesňové, umývateľné) pre priestory s vyššou vlhkosťou alebo prevádzkou, ako sú kancelárie a spoločné priestory bytových domov.",
      ],
      benefits: [
        "Maľby interiérov aj nátery fasád",
        "Príprava podkladu (tmelenie, brúsenie, penetrácia)",
        "Protiplesňové a umývateľné nátery",
        "Nátery drevených a kovových konštrukcií",
      ],
      faq: [
        {
          question: "Maľujete aj spoločné priestory bytových domov?",
          answer:
            "Áno, realizujeme maľby a nátery chodieb, schodísk a ďalších spoločných priestorov bytových domov a spoločenstiev vlastníkov.",
        },
      ],
    },
    {
      slug: "demolice",
      cardTitle: "Demolácie",
      h1: "Demolačné práce Brno – búranie stavieb",
      metaTitle: "Demolácie Brno – demolačné a búracie práce | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Profesionálne a bezpečné demolačné práce v Brne – búranie interiérov, stavieb aj menších objektov. Odvoz sute a ekologická likvidácia odpadu.",
      imageKey: "demolition",
      intro: [
        "Vykonávame demolačné práce v Brne a okolí – od búrania interiérových priečok po demolácie menších stavieb. Práce prebiehajú v súlade s bezpečnostnými predpismi a s ohľadom na okolitú zástavbu.",
        "Súčasťou služby je aj odvoz stavebnej sute a ekologická likvidácia odpadu, takže sa po demolácii nemusíte starať o vypratanie pozemku.",
      ],
      benefits: [
        "Búranie interiérov aj menších stavieb",
        "Dodržiavanie bezpečnostných predpisov",
        "Odvoz sute a likvidácia odpadu",
        "Šetrný prístup k okolitej zástavbe",
      ],
      faq: [
        {
          question: "Zabezpečujete aj odvoz sute po demolácii?",
          answer:
            "Áno, odvoz a ekologickú likvidáciu stavebnej sute a odpadu zabezpečujeme ako štandardnú súčasť demolačných prác.",
        },
      ],
    },
    {
      slug: "zemni-prace",
      cardTitle: "Zemné práce",
      h1: "Zemné a výkopové práce Brno",
      metaTitle: "Zemné práce Brno – výkopy, terénne úpravy | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Zemné a výkopové práce v Brne – základové výkopy, inžinierske siete, terénne úpravy pozemkov. Vlastná technika, rýchla realizácia.",
      imageKey: "earthworks",
      intro: [
        "Realizujeme zemné a výkopové práce pre výstavbu rodinných domov aj komerčných objektov v Brne – základové výkopy, výkopy pre inžinierske siete a terénne úpravy pozemkov.",
        "Vďaka vlastnej technike dokážeme práce naplánovať flexibilne a nadviazať ich priamo na ďalšie fázy výstavby, aby nedochádzalo k zbytočným prestojom.",
      ],
      benefits: [
        "Základové výkopy pre novostavby",
        "Výkopy pre inžinierske siete",
        "Terénne úpravy a zarovnanie pozemku",
        "Vlastná stavebná technika",
      ],
      faq: [
        {
          question: "Vykonávate aj terénne úpravy po výstavbe?",
          answer:
            "Áno, po dokončení stavby zabezpečíme aj finálne terénne úpravy a prípravu pozemku na záhradné úpravy.",
        },
      ],
    },
    {
      slug: "hydroizolacni-folie",
      cardTitle: "Hydroizolačné fólie",
      h1: "Hydroizolačné fólie Brno – ochrana proti vode",
      metaTitle: "Hydroizolačné fólie Brno – ploché strechy, spodná stavba | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Hydroizolácia plochých striech a podzemných stavieb pomocou fóliových systémov v Brne. Spoľahlivá ochrana proti vode a vlhkosti.",
      imageKey: "foil",
      intro: [
        "Vykonávame hydroizoláciu plochých striech a podzemných stavieb pomocou fóliových hydroizolačných systémov. Realizácia v Brne zahŕňa prípravu podkladu, pokladanie fólie a kontrolu spojov.",
        "Kvalitná hydroizolácia je základom ochrany budovy proti vode a vlhkosti – riešime tak novostavby, ako aj opravy existujúcich hydroizolácií plochých striech.",
      ],
      benefits: [
        "Hydroizolácia plochých striech",
        "Ochrana podzemných stavieb proti vlhkosti",
        "Kontrola a tesnenie spojov fólie",
        "Novostavby aj opravy existujúcej izolácie",
      ],
      faq: [
        {
          question: "Opravujete aj staršiu hydroizoláciu plochej strechy?",
          answer:
            "Áno, vykonávame diagnostiku existujúcej hydroizolácie a jej opravu alebo kompletnú výmenu podľa stavu strechy.",
        },
      ],
    },
    {
      slug: "uklid",
      cardTitle: "Upratovanie",
      h1: "Profesionálne upratovacie služby Brno – kancelárie aj po stavbe",
      metaTitle: "Upratovanie Brno – kancelárie a po rekonštrukcii | GRUJIČ CONSTRUCTION",
      metaDescription:
        "Profesionálne upratovacie služby v Brne – upratovanie kancelárskych priestorov a generálne upratovanie po rekonštrukcii alebo výstavbe. Rýchlo, spoľahlivo, na kľúč.",
      imageKey: "cleaning",
      intro: [
        "Ponúkame profesionálne upratovacie služby pre kancelárske priestory aj generálne upratovanie po rekonštrukcii alebo novostavbe v Brne a okolí. Naším cieľom je odovzdať vám priestor čistý, uprataný a pripravený na okamžité používanie.",
        "Upratovanie po stavbe zahŕňa odstránenie stavebného prachu, zvyškov materiálov, čistenie podláh, okien, dverí aj sanitárnych priestorov. Pre kancelárie ponúkame pravidelné aj jednorazové upratovanie prispôsobené vašej prevádzke.",
      ],
      benefits: [
        "Generálne upratovanie po rekonštrukcii a výstavbe",
        "Pravidelné aj jednorazové upratovanie kancelárií",
        "Odstránenie stavebného prachu a zvyškov materiálov",
        "Čistenie podláh, okien, dverí a sanitárnych priestorov",
      ],
      faq: [
        {
          question: "Vykonávate upratovanie aj po väčšej rekonštrukcii bytu?",
          answer:
            "Áno, špecializujeme sa na generálne upratovanie po stavebných prácach – odstránime stavebný prach, zvyšky materiálov a odovzdáme vám priestor v bezchybnom stave.",
        },
        {
          question: "Ponúkate pravidelné upratovanie kancelárií?",
          answer:
            "Áno, pre firmy zabezpečujeme pravidelné upratovanie kancelárskych priestorov podľa dohodnutého harmonogramu – dennú, týždennú aj mesačnú frekvenciu.",
        },
      ],
    },
  ],
};

export function getServiceBySlug(slug: string, lang: Lang) {
  return services[lang].find((s) => s.slug === slug);
}

export interface FeaturedProject {
  slug: string;
  name: string;
  location: string;
  // Real client photos (received 2026-07-22), stored in
  // public/images/projects/<slug>/NN.webp - values here are paths
  // relative to images/projects/, resolved via projectImage().
  images: string[];
  // Short paragraph shown under the hero on the project subpage;
  // written from the actual client photos of the realization.
  description?: string;
  workItems: string[];
  // Not yet available for any project - client hasn't provided video
  // footage. Once supplied, add a path here and ProjectPage will render
  // the video block automatically.
  video?: string;
}

const gallery = (slug: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `${slug}/${String(i + 1).padStart(2, "0")}.webp`);

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "zatepleni-fasady-nova-zbrojovka",
    name: "Zateplení fasády – Nová Zbrojovka",
    location: "Brno-Zábrdovice (Nová Zbrojovka)",
    images: gallery("zatepleni-fasady-nova-zbrojovka", 3),
    description:
      "Zateplení fasád v rámci moderního developerského areálu Nová Zbrojovka v Brně. Na betonové a zděné konstrukce jsme aplikovali kontaktní zateplovací systém z minerální vaty — včetně kotvení talířovými hmoždinkami, soklových partií z XPS a napojení na navazující prosklené a plechové fasády okolních objektů. Následně byla natažena armovací tkanina (perlinka) a zastěrkována do lepicí stěrky — vznikla tak kompletní armovací vrstva připravená pod finální omítku.",
    workItems: [
      "Kontaktní zateplovací systém (ETICS) z desek minerální vaty",
      "Kotvení izolace talířovými hmoždinkami",
      "Soklové partie a detaily z extrudovaného polystyrenu (XPS)",
      "Natažení armovací tkaniny (perlinky) na celou plochu zateplení",
      "Zastěrkování perlinky do lepicí stěrky (armovací vrstva)",
      "Napojení zateplení na navazující konstrukce (prosklené stěny, klempířské prvky)",
      "Práce ve výškách z lešení v zastavěném areálu",
      "Příprava podkladu pod finální omítku",
    ],
  },
  {
    slug: "zatepleni-fasady-zabovresky",
    name: "Zateplení fasády Brno-Žabovřesky",
    location: "Brno-Žabovřesky",
    images: gallery("zatepleni-fasady-zabovresky", 2),
    description:
      "Kompletní zateplení a nová fasáda třípodlažního rodinného domu. Dům dostal zateplovací systém na obvodové zdi, novou probarvenou fasádní omítku a novou střešní krytinu — z omšelého domu je moderní, energeticky úsporné bydlení.",
    workItems: [
      "Zateplovací systém (ETICS) na obvodové zdi celého domu",
      "Nová probarvená fasádní omítka",
      "Osazení parapetů a klempířské prvky (oplechování, svody)",
      "Nová střešní krytina",
      "Práce z lešení kolem celého objektu",
    ],
  },
  {
    slug: "rekonstrukce-domu-kralovo-pole",
    name: "Rekonstrukce domu Brno-Královo Pole",
    location: "Brno-Královo Pole",
    images: gallery("rekonstrukce-domu-kralovo-pole", 24),
    description:
      "Kompletní rekonstrukce staršího rodinného domu od hrubé stavby po finální povrchy. Interiér byl vybourán až na cihelné zdivo, původní střecha stržena a nahrazena novým krovem, podkroví přestavěno na obytnou vestavbu z pórobetonových tvárnic — včetně zateplení, nových stropů, oken a sádrokartonových podhledů.",
    workItems: [
      "Vybourání interiérů až na nosné cihelné zdivo",
      "Demontáž původní střešní krytiny a stržení starého krovu",
      "Nový dřevěný krov a laťování s pojistnou hydroizolací",
      "Půdní vestavba z pórobetonových tvárnic (Ytong)",
      "Nové stropní konstrukce s dřevěnými trámy",
      "Zateplení střechy a stěn minerální vatou",
      "Osazení nových oken včetně parotěsných pásek",
      "Sádrokartonové podhledy a šikminy v podkroví",
      "Rozvody elektroinstalace v celém domě",
    ],
  },
  {
    slug: "demolice-stareho-plotu",
    name: "Demolice starého plotu",
    location: "Brno a okolí",
    images: gallery("demolice-stareho-plotu", 7),
    description:
      "Kompletní výměna oplocení u rodinného domu — demolice původního zděného a dřevěného plotu, zemní práce a výkop pro nový základ podél hranice pozemku a montáž nového betonového plotu z dekorativních panelů v imitaci kamene.",
    workItems: [
      "Demolice původního zděného a dřevěného oplocení",
      "Odvoz a ekologická likvidace suti",
      "Výkop rýhy a příprava základu pro nové oplocení",
      "Montáž betonových sloupků a dekorativních panelů (imitace kamene)",
      "Úprava terénu podél nového plotu",
    ],
  },
];

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}

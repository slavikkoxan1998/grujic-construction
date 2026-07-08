import { images } from "../lib/images";

export interface FeaturedProject {
  name: string;
  // Single real photo per project for now. Once real jobsite photos from
  // multiple angles are available, add more URLs here - ProjectShowcase
  // will automatically cross-fade between them instead of just animating one.
  images: string[];
}

export interface GalleryProject {
  slug: string;
  name: string;
  location: string;
  image: keyof typeof images;
  workItems: string[];
  // Not yet available for any project - client hasn't provided video
  // footage. Once supplied, add a path here and ProjectPage will render
  // the video block automatically.
  video?: string;
}

// These 4 already had photos before - now named and given the Ken Burns
// pan/zoom effect. Replace/add photos in `images` once real project photos
// (ideally 3-5 angles each) are available.
export const featuredProjects: FeaturedProject[] = [
  { name: "Rodinný dům s bazénem", images: ["project1"] },
  { name: "Rezidenční komplex", images: ["project2"] },
  { name: "Rekonstrukce interiéru", images: ["project3"] },
  { name: "Průmyslová hala", images: ["project4"] },
];

// The 10 "Realizované projekty" (contract cl. 1.2) - each gets its own
// gallery subpage at /projekty/{slug}. TEMPORARY: only 1 placeholder photo
// per project (reused from the services section stock images) and no video
// yet - client hasn't supplied the 5-10 real jobsite photos + 1 video per
// project called for in the contract. Swap `image` for a real `images:
// string[]` array and add `video` once materials arrive; see
// Grujic_Wireframes.md section 3 for the target structure.
export const moreProjects: GalleryProject[] = [
  {
    slug: "rodinny-dum-brno-bystrc",
    name: "Rodinný dům Brno-Bystrc",
    location: "Brno-Bystrc",
    image: "house",
    workItems: [
      "Kompletní hrubá stavba rodinného domu",
      "Vnitřní rozvody a instalace",
      "Finální povrchové úpravy a předání",
    ],
  },
  {
    slug: "zatepleni-fasady-zabovresky",
    name: "Zateplení fasády Brno-Žabovřesky",
    location: "Brno-Žabovřesky",
    image: "facade",
    workItems: [
      "Zateplovací systém (ETICS) na obvodové zdi",
      "Nová fasádní omítka a nátěr",
      "Osazení parapetů a oplechování",
    ],
  },
  {
    slug: "rekonstrukce-koupelny-kralovo-pole",
    name: "Rekonstrukce koupelny Brno-Královo Pole",
    location: "Brno-Královo Pole",
    image: "tiles",
    workItems: [
      "Demontáž původní koupelny",
      "Nové obklady a dlažba",
      "Výměna sanity a rozvodů vody",
    ],
  },
  {
    slug: "kancelar-brno-stred",
    name: "Podhledy a příčky – kancelář Brno-střed",
    location: "Brno-střed",
    image: "drywall",
    workItems: [
      "Sádrokartonové příčky a podhledy",
      "Elektroinstalace v podhledu",
      "Povrchová úprava a malba",
    ],
  },
  {
    slug: "zemni-prace-slapanice",
    name: "Zemní práce a základy Šlapanice",
    location: "Šlapanice",
    image: "earthworks",
    workItems: [
      "Výkopové práce a základové pásy",
      "Odvodnění pozemku",
      "Příprava pro betonáž",
    ],
  },
  {
    slug: "demolice-brno-turany",
    name: "Demolice objektu Brno-Tuřany",
    location: "Brno-Tuřany",
    image: "demolition",
    workItems: [
      "Demolice stávající stavby",
      "Třídění a odvoz stavební sutě",
      "Úklid a příprava pozemku",
    ],
  },
  {
    slug: "vodoinstalace-modrice",
    name: "Vodoinstalace – novostavba Modřice",
    location: "Modřice",
    image: "plumbing",
    workItems: [
      "Kompletní rozvody vody a odpadů",
      "Zapojení sanitárních zařízení",
      "Tlaková zkouška rozvodů",
    ],
  },
  {
    slug: "malby-a-natery-brno",
    name: "Malby a nátěry – bytový dům Brno",
    location: "Brno",
    image: "painting",
    workItems: [
      "Penetrace a vyrovnání povrchů",
      "Malby interiérových prostor",
      "Nátěry společných prostor",
    ],
  },
  {
    slug: "napinane-stropy-reckovice",
    name: "Napínané stropy – byt Brno-Řečkovice",
    location: "Brno-Řečkovice",
    image: "ceiling",
    workItems: [
      "Montáž napínaného stropu",
      "Zabudované LED osvětlení",
      "Finální úprava a předání",
    ],
  },
  {
    slug: "hydroizolace-brno-lisen",
    name: "Hydroizolace ploché střechy Brno-Líšeň",
    location: "Brno-Líšeň",
    image: "foil",
    workItems: [
      "Hydroizolační fólie na ploché střeše",
      "Ošetření prostupů a detailů",
      "Kontrola vodotěsnosti",
    ],
  },
];

export function getProjectBySlug(slug: string): GalleryProject | undefined {
  return moreProjects.find((p) => p.slug === slug);
}

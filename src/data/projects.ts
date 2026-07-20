export interface FeaturedProject {
  slug: string;
  name: string;
  location: string;
  // TEMPORARY placeholder photo per project - client to supply real
  // text/photos for each of these 4 confirmed projects (2026-07-20).
  images: string[];
  workItems: string[];
  // Not yet available for any project - client hasn't provided video
  // footage. Once supplied, add a path here and ProjectPage will render
  // the video block automatically.
  video?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "rodinny-dum-brno-bystrc",
    name: "Rodinný dům Brno-Bystrc",
    location: "Brno-Bystrc",
    images: ["house"],
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
    images: ["facade"],
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
    images: ["tiles"],
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
    images: ["drywall"],
    workItems: [
      "Sádrokartonové příčky a podhledy",
      "Elektroinstalace v podhledu",
      "Povrchová úprava a malba",
    ],
  },
];

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return featuredProjects.find((p) => p.slug === slug);
}

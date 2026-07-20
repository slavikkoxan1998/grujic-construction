export interface FeaturedProject {
  name: string;
  // TEMPORARY placeholder photo per project - client to supply real
  // text/photos for each of these 4 confirmed projects (2026-07-20).
  images: string[];
}

export const featuredProjects: FeaturedProject[] = [
  { name: "Rodinný dům Brno-Bystrc", images: ["house"] },
  { name: "Zateplení fasády Brno-Žabovřesky", images: ["facade"] },
  { name: "Rekonstrukce koupelny Brno-Královo Pole", images: ["tiles"] },
  { name: "Podhledy a příčky – kancelář Brno-střed", images: ["drywall"] },
];

// import.meta.env.BASE_URL reflects the `base` set in vite.config.ts
// ("/grujic-construction/" in production, "/" in local dev).
// Plain string paths like "/logo.png" do NOT get this prefix automatically
// from Vite (only real imports/index.html references do), so we prepend
// it ourselves - otherwise images 404 once deployed under a subpath.
const base = import.meta.env.BASE_URL;

export const images = {
  bg_hero: `${base}images/bg_hero.png`,
  logo: `${base}logo.png`,
  workers: `${base}images/workers.png`,
  facade: `${base}images/facade.png`,
  ceiling: `${base}images/ceiling.png`,
  foil: `${base}images/foil.png`,
  house: `${base}images/house.png`,
  drywall: `${base}images/drywall.png`,
  tiles: `${base}images/tiles.png`,
  painting: `${base}images/painting.png`,
  insulation: `${base}images/insulation.png`,
  reconstruction: `${base}images/reconstruction.png`,
  plumbing: `${base}images/plumbing.png`,
  demolition: `${base}images/demolition.png`,
  earthworks: `${base}images/earthworks.png`,
  project1: `${base}images/project1.png`,
  project2: `${base}images/project2.png`,
  project3: `${base}images/project3.png`,
  project4: `${base}images/project4.png`,
};

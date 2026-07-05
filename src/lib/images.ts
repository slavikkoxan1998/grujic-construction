// import.meta.env.BASE_URL reflects the `base` set in vite.config.ts
// ("/grujic-construction/" in production, "/" in local dev).
// Plain string paths like "/logo.png" do NOT get this prefix automatically
// from Vite (only real imports/index.html references do), so we prepend
// it ourselves - otherwise images 404 once deployed under a subpath.
const base = import.meta.env.BASE_URL;

export const images = {
  bg_hero: `${base}images/bg_hero.webp`,
  logo: `${base}logo.png`,
  logo_new: `${base}logo_new.png?v=2`,
  workers: `${base}images/workers.webp`,
  facade: `${base}images/facade.webp`,
  ceiling: `${base}images/ceiling.webp`,
  foil: `${base}images/foil.webp`,
  house: `${base}images/house.webp`,
  drywall: `${base}images/drywall.webp`,
  tiles: `${base}images/tiles.webp`,
  painting: `${base}images/painting.webp`,
  insulation: `${base}images/insulation.webp`,
  reconstruction: `${base}images/reconstruction.webp`,
  plumbing: `${base}images/plumbing.webp`,
  demolition: `${base}images/demolition.webp`,
  earthworks: `${base}images/earthworks.webp`,
  project1: `${base}images/project1.webp`,
  project2: `${base}images/project2.webp`,
  project3: `${base}images/project3.webp`,
  project4: `${base}images/project4.webp`,
};

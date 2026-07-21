import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { images } from "../lib/images";
import { business, SITE_URL, NOTIFY_EMAIL } from "../lib/business";
import { services } from "../data/services";
import { featuredProjects } from "../data/projects";
import { testimonials } from "../data/testimonials";
import ProjectShowcase from "../components/ProjectShowcase";
import { useLang } from "../contexts/LanguageContext";

const OG_LOCALE: Record<string, string> = { cs: "cs_CZ", en: "en_US", sk: "sk_SK" };

const HOME_META: Record<string, { title: string; description: string }> = {
  cs: {
    title: "GRUJIČ CONSTRUCTION – Stavební firma Brno | Rekonstrukce, zateplení, výstavba domů",
    description:
      "GRUJIČ CONSTRUCTION s.r.o. – stavební firma v Brně. Výstavba domů, rekonstrukce, zateplení fasád, sádrokartony, obklady a dlažby, zemní práce a demolice.",
  },
  en: {
    title: "GRUJIČ CONSTRUCTION – Construction company Brno | Renovations, insulation, house building",
    description:
      "GRUJIČ CONSTRUCTION s.r.o. – construction company in Brno. House building, renovations, facade insulation, drywall, tiling, groundworks and demolition.",
  },
  sk: {
    title: "GRUJIČ CONSTRUCTION – Stavebná firma Brno | Rekonštrukcie, zateplenie, výstavba domov",
    description:
      "GRUJIČ CONSTRUCTION s.r.o. – stavebná firma v Brne. Výstavba domov, rekonštrukcie, zateplenie fasád, sadrokartóny, obklady a dlažby, zemné práce a demolácie.",
  },
};

export default function Index() {
  const location = useLocation();
  const { t, lang } = useLang();
  const reviews = testimonials[lang];
  const langServices = services[lang];
  const meta = HOME_META[lang];

  // Support cross-page anchor links like <Link to="/#contact">.
  // A stale hash left in the URL from a previous visit must NOT scroll
  // the page on a plain refresh - so the initial load strips it and
  // stays at the top; only in-app navigation scrolls to the anchor.
  const isInitialLoad = useRef(true);
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      if (location.hash) {
        window.history.replaceState(null, "", location.pathname);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      return;
    }
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet htmlAttributes={{ lang }}>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={OG_LOCALE[lang]} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`${SITE_URL}/`} />
      </Helmet>

      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[750px] overflow-hidden flex items-center">
          <img
            src={images.bg_hero}
            alt={t.alt.hero}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 sm:py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                {t.hero.h1}
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 font-light">
                {t.hero.subtitle}
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#D4A574] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C89860] transition-colors text-lg"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-6">{t.about.title}</h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#D4A574] mb-6">{t.about.mission}</h3>
                <p className="text-lg text-[#555555] leading-relaxed mb-6">{t.about.p1}</p>
                <p className="text-lg text-[#555555] leading-relaxed">{t.about.p2}</p>
              </div>
              <div className="relative">
                <img
                  src={images.workers}
                  alt={t.alt.about}
                  className="w-full h-auto rounded-xl shadow-xl object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 md:py-32 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-8 sm:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">{t.sections.services}</h2>
              <p className="text-xl text-[#555555] font-light">{t.sections.servicesSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-5">
              {langServices.map((s) => (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  title={s.cardTitle}
                  image={images[s.imageKey]}
                  description={s.metaDescription}
                  learnMore={t.service.learnMore}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-8 sm:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">{t.sections.projects}</h2>
              <p className="text-xl text-[#555555] font-light">{t.sections.projectsSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {featuredProjects.map((p) => (
                <Link key={p.slug} to={`/projekty/${p.slug}`} className="block">
                  <ProjectShowcase name={p.name} imageKeys={p.images} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-32 bg-[#3a3a3a] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Contact Info */}
              <div className="text-center flex flex-col items-center">
                <img src={images.logo} alt="GRUJIČ CONSTRUCTION logo" className="h-24 mb-6 object-contain" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{business.name}</h2>
                <p className="text-[#D4A574] text-lg mb-8 font-light">{t.contact.tagline}</p>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-[#D4A574] font-semibold text-sm mb-2">{t.contact.address}</h3>
                    <p className="text-[#D4A574]/90">{business.street}</p>
                    <p className="text-[#D4A574]/90">
                      {business.city}, {business.postalCode}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#D4A574] font-semibold text-sm mb-2">{t.contact.contactLabel}</h3>
                    <p className="text-[#D4A574]/90">
                      <a href={`tel:${business.phone}`} className="hover:text-white transition-colors">
                        {t.contact.phone}: {business.phoneDisplay}
                      </a>
                    </p>
                    <p className="text-[#D4A574]/90">
                      <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                        {t.contact.email}: {business.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[#D4A574] font-semibold text-sm mb-2">{t.contact.details}</h3>
                    <p className="text-[#D4A574]/90">{t.contact.owner}: {business.owner}</p>
                    <p className="text-[#D4A574]/90">IČO: {business.ico}</p>
                    <p className="text-[#D4A574]/90">DIČ: {business.dic}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center" aria-label="TikTok">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                  </a>
                  {/* Google Maps */}
                  <a
                    href="https://www.google.com/maps/search/Körnerova+455%2F7,+Brno-Zábrdovice,+602+00,+Czech+Republic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4A574] transition-colors flex items-center justify-center"
                    aria-label={t.contact.mapAriaLabel}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Form — standard POST */}
              <div className="bg-white/5 p-6 sm:p-8 md:p-10 rounded-xl border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{t.form.title}</h3>
                <p className="text-white/60 text-sm mb-8">
                  ✉{" "}
                  <a href={`mailto:${business.email}`} className="text-amber-400 hover:text-amber-300 transition-colors">
                    {business.email}
                  </a>
                </p>

                <form
                  className="space-y-6"
                  action={`https://formsubmit.co/${NOTIFY_EMAIL}`}
                  method="POST"
                >
                  <input type="hidden" name="_subject" value="Nová poptávka z webu GRUJIČ CONSTRUCTION" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://slavikkoxan1998.github.io/grujic-construction/#contact" />
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <input
                    type="text"
                    name="Jméno"
                    placeholder={t.form.name}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder={t.form.email}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    name="Telefon"
                    placeholder={t.form.phone}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors"
                  />
                  <textarea
                    name="Zpráva"
                    placeholder={t.form.message}
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A574] transition-colors resize-none"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#D4A574] text-white py-3 rounded-lg font-semibold hover:bg-[#C89860] transition-colors"
                  >
                    {t.form.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 sm:py-16 md:py-32 bg-[#f8f7f5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-8 sm:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-4">{t.sections.testimonials}</h2>
              <p className="text-xl text-[#555555] font-light">{t.testimonials.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 sm:mb-16">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-[#eee] flex flex-col"
                >
                  <div className="flex gap-1 text-[#D4A574] mb-4" aria-label={`${review.rating} / 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 20 20"
                        className={`w-5 h-5 ${i < review.rating ? "fill-current" : "fill-[#e5e0da]"}`}
                      >
                        <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#555555] leading-relaxed flex-1 mb-6">"{review.text}"</p>
                  <div>
                    <p className="text-[#3a3a3a] font-semibold">{review.name}</p>
                    <p className="text-[#999999] text-sm">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Leave a review CTA — links out to Google, where reviews are actually verified/hosted */}
            <div className="bg-white rounded-xl border border-[#eee] shadow-md p-6 sm:p-8 md:p-10 text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#3a3a3a] mb-3">{t.testimonials.ctaTitle}</h3>
              <p className="text-[#555555] mb-6">{t.testimonials.ctaText}</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GRUJI%C4%8C+CONSTRUCTION+s.r.o.+K%C3%B6rnerova+455%2F7+Brno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A574] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#C89860] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.27l-6.18 3.23L7 13.63l-5-4.87 6.91-1z" />
                </svg>
                {t.testimonials.ctaButton}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function ServiceCard({
  slug,
  title,
  image,
  description,
  learnMore,
}: {
  slug: string;
  title: string;
  image: string;
  description: string;
  learnMore: string;
}) {
  return (
    <Link
      to={`/${slug}`}
      className="group flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#eee] h-full"
    >
      <div className="h-28 sm:h-40 md:h-64 lg:h-32 xl:h-40 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-3 sm:p-5 md:p-6 lg:p-3 xl:p-4 flex flex-col flex-1">
        <h3 className="text-[#D4A574] text-sm sm:text-lg md:text-xl lg:text-sm xl:text-base font-bold mb-1.5 sm:mb-3">{title}</h3>
        <p className="text-[#555555] text-xs sm:text-sm leading-relaxed line-clamp-3">{description}</p>
        <span className="mt-auto pt-2 text-[#D4A574] text-xs sm:text-sm font-semibold group-hover:underline">
          {learnMore}
        </span>
      </div>
    </Link>
  );
}



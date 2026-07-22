import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getServiceBySlug, services } from "../data/services";
import { images } from "../lib/images";
import { SITE_URL } from "../lib/business";
import { useLang } from "../contexts/LanguageContext";

const OG_LOCALE: Record<string, string> = { cs: "cs_CZ", en: "en_US", sk: "sk_SK" };

export default function ServicePage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const service = slug ? getServiceBySlug(slug, lang) : undefined;
  const langServices = services[lang];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const pageUrl = `${SITE_URL}/${service.slug}`;
  const image = images[service.imageKey];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: t.service.breadcrumbServices, item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: service.cardTitle, item: pageUrl },
    ],
  };

  const faqSchema =
    service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet htmlAttributes={{ lang }}>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={OG_LOCALE[lang]} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={image} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 text-sm text-[#777]">
          <Link to="/" className="hover:text-[#D4A574]">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <Link to="/#services" className="hover:text-[#D4A574]">
            {t.service.breadcrumbServices}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#3a3a3a]">{service.cardTitle}</span>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-6">
                {service.h1}
              </h1>
              {service.intro.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-[#555555] leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              <Link
                to="/#contact"
                className="inline-block mt-4 bg-[#D4A574] text-[#CD1D14] px-8 py-4 rounded-lg font-semibold hover:bg-[#C89860] transition-colors"
              >
                {t.service.inquiry}
              </Link>
            </div>
            <div>
              <img
                src={image}
                alt={service.h1}
                className="w-full h-auto rounded-xl shadow-xl object-cover aspect-[4/3]"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-[#f8f7f5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3a3a] mb-8">
              {t.service.whyUs}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#eee]"
                >
                  <span className="text-[#D4A574] font-bold">✓</span>
                  <span className="text-[#555555]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        {service.faq.length > 0 && (
          <section className="py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3a3a] mb-8">{t.service.faq}</h2>
              <div className="space-y-6">
                {service.faq.map((f, i) => (
                  <div key={i} className="border-b border-[#eee] pb-6">
                    <h3 className="text-lg font-semibold text-[#3a3a3a] mb-2">{f.question}</h3>
                    <p className="text-[#555555] leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Other services */}
        <section className="bg-[#f8f7f5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3a3a] mb-8">{t.service.otherServices}</h2>
            <div className="flex flex-wrap gap-3">
              {langServices
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="bg-white border border-[#eee] px-4 py-2 rounded-lg text-sm text-[#3a3a3a] hover:border-[#D4A574] hover:text-[#D4A574] transition-colors"
                  >
                    {s.cardTitle}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

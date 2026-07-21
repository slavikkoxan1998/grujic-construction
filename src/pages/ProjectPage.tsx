import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getProjectBySlug } from "../data/projects";
import { projectImage } from "../lib/images";
import { SITE_URL } from "../lib/business";
import { useLang } from "../contexts/LanguageContext";

const OG_LOCALE: Record<string, string> = { cs: "cs_CZ", en: "en_US", sk: "sk_SK" };

export default function ProjectPage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const pageUrl = `${SITE_URL}/projekty/${project.slug}`;
  const galleryImages = project.images.map(projectImage);
  const heroImage = galleryImages[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.nav.home, item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: t.project.breadcrumbProjects, item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 3, name: project.name, item: pageUrl },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet htmlAttributes={{ lang }}>
        <title>{`${project.name} | GRUJIČ CONSTRUCTION`}</title>
        <meta name="description" content={`${project.name} — ${project.location}. ${project.workItems.join(", ")}.`} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={OG_LOCALE[lang]} />
        <meta property="og:title" content={project.name} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={heroImage} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 text-sm text-[#777]">
          <Link to="/" className="hover:text-[#D4A574]">
            {t.nav.home}
          </Link>
          <span className="mx-2">/</span>
          <Link to="/#projects" className="hover:text-[#D4A574]">
            {t.project.breadcrumbProjects}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#3a3a3a]">{project.name}</span>
        </div>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 sm:py-12 md:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3a3a3a] mb-3">
            {project.name}
          </h1>
          <p className="text-lg text-[#D4A574] font-medium mb-6">{project.location}</p>
          {project.description && (
            <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-4xl mb-8">
              {project.description}
            </p>
          )}
          <img
            src={heroImage}
            alt={project.name}
            className="w-full h-auto rounded-xl shadow-xl object-cover aspect-video"
            loading="eager"
          />
        </section>

        {/* Video block - only rendered once real footage is supplied per project */}
        {project.video && (
          <section className="max-w-7xl mx-auto px-4 md:px-8 pb-12 sm:pb-16">
            <video controls className="w-full rounded-xl shadow-xl" src={project.video} />
          </section>
        )}

        {/* Gallery */}
        <section className="bg-[#f8f7f5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3a3a] mb-8">{t.project.gallery}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <div key={src + i} className="rounded-xl overflow-hidden shadow-md aspect-square">
                  <img src={src} alt={project.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work done */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3a3a3a] mb-8">{t.project.workDone}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.workItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[#eee]"
                >
                  <span className="text-[#D4A574] font-bold">✓</span>
                  <span className="text-[#555555]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Back / CTA */}
        <section className="bg-[#f8f7f5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link to="/#projects" className="text-[#3a3a3a] hover:text-[#D4A574] font-medium transition-colors">
              {t.project.backToProjects}
            </Link>
            <Link
              to="/#contact"
              className="inline-block bg-[#D4A574] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C89860] transition-colors"
            >
              {t.project.inquiry}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { SITE_URL } from "../lib/business";
import { useLang } from "../contexts/LanguageContext";
import type { LegalDoc } from "../data/legal";

export default function LegalPage({ doc, path }: { doc: LegalDoc; path: string }) {
  const { t, lang } = useLang();
  const pageUrl = `${SITE_URL}${path}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet htmlAttributes={{ lang }}>
        <title>{`${doc.title} | GRUJIČ CONSTRUCTION`}</title>
        <meta name="description" content={doc.intro} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <SiteHeader />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 sm:py-16">
          <Link to="/" className="text-sm text-[#D4A574] hover:underline">
            ← {t.legal.backHome}
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#3a3a3a] mt-4 mb-6">{doc.title}</h1>
          <p className="text-[#555555] leading-relaxed mb-10">{doc.intro}</p>

          <div className="space-y-8">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold text-[#3a3a3a] mb-3">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#555555] leading-relaxed mb-3">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <p className="text-sm text-[#999999] mt-12">
            {t.legal.lastUpdated}: {doc.effectiveDate}
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

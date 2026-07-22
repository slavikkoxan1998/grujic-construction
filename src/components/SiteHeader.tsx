import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../lib/images";
import { business } from "../lib/business";
import { useLang } from "../contexts/LanguageContext";
import type { Lang } from "../lib/i18n";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "cs", flag: "🇨🇿", label: "CS" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "sk", flag: "🇸🇰", label: "SK" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  // Desktop: past this scroll depth the full header row collapses into a
  // burger; its menu opens as a left-aligned column panel.
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Returning to the top restores the full header - close the collapsed menu.
  useEffect(() => {
    if (!scrolled) setDesktopMenuOpen(false);
  }, [scrolled]);

  const currentLang = LANGS.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#D4A574]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={images.logo}
            alt="GRUJIČ CONSTRUCTION - stavební firma Brno"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop burger (appears next to the logo once scrolled) */}
        <button
          className={`hidden ${scrolled ? "md:flex" : "md:hidden"} items-center justify-center w-11 h-11 ml-3 mr-auto rounded-lg hover:bg-white/20 transition-colors`}
          onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={desktopMenuOpen}
        >
          <svg className="w-7 h-7 text-[#CD1D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {desktopMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation (full row - hidden once scrolled) */}
        <nav className={`hidden ${scrolled ? "md:hidden" : "md:flex"} items-center gap-2 text-[#CD1D14]`}>
          <Link to="/" className="px-4 py-2 text-[#CD1D14] hover:text-[#CD1D14]/70 transition-colors text-base font-extrabold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            {t.nav.home}
          </Link>
          <Link to="/#about" className="px-4 py-2 hover:text-[#CD1D14]/70 transition-colors text-base font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            {t.nav.about}
          </Link>
          <Link to="/#services" className="px-4 py-2 hover:text-[#CD1D14]/70 transition-colors text-base font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            {t.nav.services}
          </Link>
          <Link to="/#projects" className="px-4 py-2 hover:text-[#CD1D14]/70 transition-colors text-base font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            {t.nav.projects}
          </Link>
          <Link to="/#testimonials" className="px-4 py-2 hover:text-[#CD1D14]/70 transition-colors text-base font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            {t.nav.reviews}
          </Link>
          <Link to="/#contact" className="px-4 py-2 hover:text-[#CD1D14]/70 transition-colors text-base font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            {t.nav.contact}
          </Link>
        </nav>

        {/* Desktop right side (hidden once scrolled) */}
        <div className={`hidden ${scrolled ? "md:hidden" : "md:flex"} items-center gap-3`}>
          <Link
            to="/#contact"
            className="bg-white/90 text-[#CD1D14] px-5 py-2 rounded-lg font-bold text-base hover:bg-white transition-colors"
          >
            {t.nav.writeUs}
          </Link>
          <a
            href={`tel:${business.phone}`}
            className="text-[#CD1D14] font-bold text-base hover:text-[#CD1D14]/70 transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
          >
            {business.phoneDisplay}
          </a>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-lg text-[#CD1D14] text-base font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
              aria-label="Change language"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[110px]">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-[#f8f7f5] transition-colors ${
                      lang === l.code ? "bg-[#D4A574]/10 text-[#D4A574] font-semibold" : "text-[#3a3a3a]"
                    }`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile: lang + burger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile lang switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-white/20 px-2.5 py-2 rounded-lg text-[#CD1D14] text-sm font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
            >
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[100px]">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-[#f8f7f5] transition-colors ${
                      lang === l.code ? "bg-[#D4A574]/10 text-[#D4A574] font-semibold" : "text-[#3a3a3a]"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Burger */}
          <button
            className="p-2.5 -mr-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#CD1D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop collapsed menu - left-aligned column panel */}
      {scrolled && desktopMenuOpen && (
        <div className="hidden md:block absolute top-full left-0 w-80 bg-[#D4A574] shadow-2xl border-t border-white/20 rounded-br-2xl">
          <nav className="flex flex-col px-6 py-3">
            {[
              { to: "/", label: t.nav.home, bold: true },
              { to: "/#about", label: t.nav.about },
              { to: "/#services", label: t.nav.services },
              { to: "/#projects", label: t.nav.projects },
              { to: "/#testimonials", label: t.nav.reviews },
              { to: "/#contact", label: t.nav.contact },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block text-[#CD1D14] py-3 border-b border-white/15 hover:text-[#CD1D14]/70 transition-colors ${item.bold ? "font-extrabold" : "font-semibold"} [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]`}
                onClick={() => setDesktopMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/#contact"
              className="mt-4 bg-white/90 text-[#CD1D14] px-4 py-3 rounded-lg font-bold text-base hover:bg-white transition-colors text-center"
              onClick={() => setDesktopMenuOpen(false)}
            >
              {t.nav.writeUs}
            </Link>
            <a
              href={`tel:${business.phone}`}
              className="py-3 text-[#CD1D14] text-center font-bold text-base [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
            >
              {business.phoneDisplay}
            </a>

            {/* Language switcher - bottom left */}
            <div className="flex items-center gap-2 pt-2 pb-3">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                    lang === l.code
                      ? "bg-white/90 text-[#CD1D14]"
                      : "bg-white/20 text-[#CD1D14] hover:bg-white/30 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D4A574] border-t border-white/20">
          <div className="px-4 py-2">
            <Link to="/" className="block text-[#CD1D14] py-3.5 border-b border-white/15 hover:text-[#CD1D14]/70 transition-colors font-extrabold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.home}
            </Link>
            <Link to="/#about" className="block text-[#CD1D14] py-3.5 border-b border-white/15 hover:text-[#CD1D14]/70 transition-colors font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.about}
            </Link>
            <Link to="/#services" className="block text-[#CD1D14] py-3.5 border-b border-white/15 hover:text-[#CD1D14]/70 transition-colors font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.services}
            </Link>
            <Link to="/#projects" className="block text-[#CD1D14] py-3.5 border-b border-white/15 hover:text-[#CD1D14]/70 transition-colors font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.projects}
            </Link>
            <Link to="/#testimonials" className="block text-[#CD1D14] py-3.5 border-b border-white/15 hover:text-[#CD1D14]/70 transition-colors font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.reviews}
            </Link>
            <Link to="/#contact" className="block text-[#CD1D14] py-3.5 hover:text-[#CD1D14]/70 transition-colors font-semibold [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.contact}
            </Link>
            <div className="flex flex-col gap-2.5 pt-3 pb-2">
              <Link
                to="/#contact"
                className="w-full bg-white/90 text-[#CD1D14] px-4 py-3 rounded-lg font-bold text-base hover:bg-white transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.writeUs}
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="w-full py-2 text-[#CD1D14] text-center font-bold text-base [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
              >
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

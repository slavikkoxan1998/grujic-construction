import { useState } from "react";
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
  const { lang, setLang, t } = useLang();

  const currentLang = LANGS.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#D4A574]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={images.logo_new}
            alt="GRUJIČ CONSTRUCTION - stavební firma Brno"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 font-medium text-white/95">
          <Link to="/" className="px-4 py-2 hover:text-white transition-colors text-sm">
            {t.nav.home}
          </Link>
          <Link to="/#about" className="px-4 py-2 hover:text-white transition-colors text-sm">
            {t.nav.about}
          </Link>
          <Link to="/#services" className="px-4 py-2 hover:text-white transition-colors text-sm">
            {t.nav.services}
          </Link>
          <Link to="/#projects" className="px-4 py-2 hover:text-white transition-colors text-sm">
            {t.nav.projects}
          </Link>
          <Link to="/#contact" className="px-4 py-2 hover:text-white transition-colors text-sm">
            {t.nav.contact}
          </Link>
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/#contact"
            className="bg-white/90 text-[#3a3a3a] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors"
          >
            {t.nav.writeUs}
          </Link>
          <a
            href={`tel:${business.phone}`}
            className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
          >
            {business.phoneDisplay}
          </a>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors px-3 py-1.5 rounded-lg text-white text-sm font-semibold"
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
              className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg text-white text-xs font-semibold"
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
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D4A574] border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white py-2 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.home}
            </Link>
            <Link to="/#about" className="block text-white py-2 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.about}
            </Link>
            <Link to="/#services" className="block text-white py-2 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.services}
            </Link>
            <Link to="/#projects" className="block text-white py-2 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.projects}
            </Link>
            <Link to="/#contact" className="block text-white py-2 hover:text-white/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>
              {t.nav.contact}
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/#contact"
                className="w-full bg-white/90 text-[#3a3a3a] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.writeUs}
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="w-full text-white text-center font-semibold text-sm"
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

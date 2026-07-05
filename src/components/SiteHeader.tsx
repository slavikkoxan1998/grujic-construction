import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../lib/images";
import { business } from "../lib/business";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            Domů
          </Link>
          <Link to="/#about" className="px-4 py-2 hover:text-white transition-colors text-sm">
            O nás
          </Link>
          <Link to="/#services" className="px-4 py-2 hover:text-white transition-colors text-sm">
            Služby
          </Link>
          <Link to="/#projects" className="px-4 py-2 hover:text-white transition-colors text-sm">
            Projekty
          </Link>
          <Link to="/#contact" className="px-4 py-2 hover:text-white transition-colors text-sm">
            Kontakt
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/#contact"
            className="bg-white/90 text-[#3a3a3a] px-5 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors"
          >
            Napište nám
          </Link>
          <a
            href={`tel:${business.phone}`}
            className="text-white font-semibold text-sm hover:text-white/80 transition-colors"
          >
            {business.phoneDisplay}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D4A574] border-t border-white/20">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white py-2 hover:text-white/80 transition-colors">
              Domů
            </Link>
            <Link to="/#about" className="block text-white py-2 hover:text-white/80 transition-colors">
              O nás
            </Link>
            <Link to="/#services" className="block text-white py-2 hover:text-white/80 transition-colors">
              Služby
            </Link>
            <Link to="/#projects" className="block text-white py-2 hover:text-white/80 transition-colors">
              Projekty
            </Link>
            <Link to="/#contact" className="block text-white py-2 hover:text-white/80 transition-colors">
              Kontakt
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                to="/#contact"
                className="w-full bg-white/90 text-[#3a3a3a] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white transition-colors text-center"
              >
                Napište nám
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

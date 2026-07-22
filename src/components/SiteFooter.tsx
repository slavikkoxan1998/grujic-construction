import { Link } from "react-router-dom";
import { business } from "../lib/business";
import { useLang } from "../contexts/LanguageContext";

export default function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="bg-[#1a1a1a] text-[#CD1D14]/60 py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 GRUJIČ CONSTRUCTION s.r.o. {t.footer.rights}.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a
              href={`mailto:${business.email}`}
              className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
            >
              ✉ {business.email}
            </a>
            <div className="flex gap-6">
              <Link to="/obchodni-podminky" className="text-[#CD1D14]/60 hover:text-[#CD1D14] transition-colors text-sm">
                {t.footer.terms}
              </Link>
              <Link to="/zasady-ochrany-osobnich-udaju" className="text-[#CD1D14]/60 hover:text-[#CD1D14] transition-colors text-sm">
                {t.footer.privacy}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="mailto:slavikkoxan1998@gmail.com"
            className="text-[#CD1D14]/30 hover:text-[#CD1D14]/60 transition-colors text-xs"
          >
            Web vytvořil Jaroslav →
          </a>
        </div>
      </div>
    </footer>
  );
}

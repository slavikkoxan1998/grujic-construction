import { createContext, useContext, useState, type ReactNode } from "react";
import type { Lang, Translations } from "../lib/i18n";
import { translations } from "../lib/i18n";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "cs",
  setLang: () => {},
  t: translations.cs,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("cs");

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as Translations }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

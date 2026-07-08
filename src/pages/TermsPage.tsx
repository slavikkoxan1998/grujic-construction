import LegalPage from "./LegalPage";
import { terms } from "../data/legal";
import { useLang } from "../contexts/LanguageContext";

export default function TermsPage() {
  const { lang } = useLang();
  return <LegalPage doc={terms[lang]} path="/obchodni-podminky" />;
}

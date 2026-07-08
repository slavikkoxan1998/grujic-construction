import LegalPage from "./LegalPage";
import { privacy } from "../data/legal";
import { useLang } from "../contexts/LanguageContext";

export default function PrivacyPage() {
  const { lang } = useLang();
  return <LegalPage doc={privacy[lang]} path="/zasady-ochrany-osobnich-udaju" />;
}

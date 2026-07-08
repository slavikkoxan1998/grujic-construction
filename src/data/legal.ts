import type { Lang } from "../lib/i18n";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: LegalSection[];
  effectiveDate: string;
}

const COMPANY_CS =
  "GRUJIČ CONSTRUCTION s.r.o., se sídlem Körnerova 455/7, Brno-Zábrdovice, 602 00, Česká republika, IČO: 10840648, DIČ: CZ10840648, e-mail: Grujic.construction@gmail.com";
const COMPANY_EN =
  "GRUJIČ CONSTRUCTION s.r.o., registered office at Körnerova 455/7, Brno-Zábrdovice, 602 00, Czech Republic, Company ID (IČO): 10840648, VAT ID: CZ10840648, e-mail: Grujic.construction@gmail.com";
const COMPANY_SK =
  "GRUJIČ CONSTRUCTION s.r.o., so sídlom Körnerova 455/7, Brno-Zábrdovice, 602 00, Česká republika, IČO: 10840648, DIČ: CZ10840648, e-mail: Grujic.construction@gmail.com";

export const terms: Record<Lang, LegalDoc> = {
  cs: {
    title: "Obchodní podmínky",
    intro:
      "Tyto obchodní podmínky upravují užívání webových stránek grujic-construction (dále jen „web“) provozovaných společností " +
      COMPANY_CS +
      " (dále jen „provozovatel“).",
    sections: [
      {
        heading: "1. Úvodní ustanovení",
        paragraphs: [
          "Web slouží k prezentaci stavební firmy GRUJIČ CONSTRUCTION s.r.o. a jejích služeb a k příjmu nezávazných poptávek prostřednictvím kontaktního formuláře.",
          "Používáním webu uživatel souhlasí s těmito obchodními podmínkami.",
        ],
      },
      {
        heading: "2. Charakter kontaktního formuláře",
        paragraphs: [
          "Odeslání kontaktního formuláře je nezávaznou poptávkou a nezakládá smluvní vztah mezi uživatelem a provozovatelem.",
          "Konkrétní rozsah, cena a podmínky poskytnutí stavebních prací se řídí výhradně samostatnou smlouvou o dílo uzavřenou individuálně mezi provozovatelem a klientem.",
        ],
      },
      {
        heading: "3. Autorská práva",
        paragraphs: [
          "Veškerý obsah webu – texty, fotografie, grafika, logo a zdrojový kód – je chráněn autorským právem a je vlastnictvím provozovatele nebo je užíván na základě licence, není-li uvedeno jinak.",
          "Kopírování, šíření nebo jiné užití obsahu webu bez předchozího písemného souhlasu provozovatele je zakázáno.",
        ],
      },
      {
        heading: "4. Omezení odpovědnosti",
        paragraphs: [
          "Provozovatel usiluje o aktuálnost a správnost informací na webu, negarantuje však jeho nepřetržitou dostupnost ani bezchybnost a vyhrazuje si právo obsah webu kdykoli změnit.",
          "Provozovatel neodpovídá za škody vzniklé v souvislosti s užíváním webu, s výjimkou případů stanovených zákonem.",
        ],
      },
      {
        heading: "5. Odkazy na služby třetích stran",
        paragraphs: [
          "Web obsahuje odkazy na externí služby (např. Google Maps, Google recenze, e-mailový klient). Za obsah a fungování těchto externích služeb provozovatel neodpovídá.",
        ],
      },
      {
        heading: "6. Rozhodné právo a řešení sporů",
        paragraphs: [
          "Tyto obchodní podmínky i vztahy jimi neupravené se řídí právním řádem České republiky.",
          "Případné spory budou řešeny přednostně jednáním, v případě nedohody příslušným soudem v Brně nebo Boskovicích.",
        ],
      },
      {
        heading: "7. Kontakt",
        paragraphs: [
          "V případě dotazů k těmto obchodním podmínkám nás kontaktujte na e-mailu Grujic.construction@gmail.com.",
        ],
      },
    ],
    effectiveDate: "8. 7. 2026",
  },

  en: {
    title: "Terms of Service",
    intro:
      "These Terms of Service govern the use of the grujic-construction website (the “website”) operated by " +
      COMPANY_EN +
      " (the “operator”).",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          "The website presents the construction company GRUJIČ CONSTRUCTION s.r.o. and its services, and collects non-binding inquiries through the contact form.",
          "By using the website, the user agrees to these Terms of Service.",
        ],
      },
      {
        heading: "2. Nature of the contact form",
        paragraphs: [
          "Submitting the contact form is a non-binding inquiry and does not create a contractual relationship between the user and the operator.",
          "The specific scope, price and conditions of any construction work are governed exclusively by a separate works contract concluded individually between the operator and the client.",
        ],
      },
      {
        heading: "3. Copyright",
        paragraphs: [
          "All website content — text, photographs, graphics, the logo and source code — is protected by copyright and is owned by the operator or used under licence, unless stated otherwise.",
          "Copying, distributing or otherwise using the website content without the operator's prior written consent is prohibited.",
        ],
      },
      {
        heading: "4. Limitation of liability",
        paragraphs: [
          "The operator strives to keep the information on the website accurate and up to date, but does not guarantee uninterrupted availability or error-free content, and reserves the right to change the website content at any time.",
          "The operator is not liable for damages arising from the use of the website, except as required by law.",
        ],
      },
      {
        heading: "5. Links to third-party services",
        paragraphs: [
          "The website contains links to external services (e.g. Google Maps, Google reviews, e-mail client). The operator is not responsible for the content or functioning of these external services.",
        ],
      },
      {
        heading: "6. Governing law and dispute resolution",
        paragraphs: [
          "These Terms of Service, and any matters not covered by them, are governed by the laws of the Czech Republic.",
          "Any disputes will primarily be resolved through negotiation; failing agreement, by the competent court in Brno or Boskovice.",
        ],
      },
      {
        heading: "7. Contact",
        paragraphs: [
          "If you have any questions about these Terms of Service, please contact us at Grujic.construction@gmail.com.",
        ],
      },
    ],
    effectiveDate: "8 Jul 2026",
  },

  sk: {
    title: "Obchodné podmienky",
    intro:
      "Tieto obchodné podmienky upravujú používanie webovej stránky grujic-construction (ďalej len „web“) prevádzkovanej spoločnosťou " +
      COMPANY_SK +
      " (ďalej len „prevádzkovateľ“).",
    sections: [
      {
        heading: "1. Úvodné ustanovenia",
        paragraphs: [
          "Web slúži na prezentáciu stavebnej firmy GRUJIČ CONSTRUCTION s.r.o. a jej služieb a na príjem nezáväzných dopytov prostredníctvom kontaktného formulára.",
          "Používaním webu užívateľ súhlasí s týmito obchodnými podmienkami.",
        ],
      },
      {
        heading: "2. Charakter kontaktného formulára",
        paragraphs: [
          "Odoslanie kontaktného formulára je nezáväzným dopytom a nezakladá zmluvný vzťah medzi užívateľom a prevádzkovateľom.",
          "Konkrétny rozsah, cena a podmienky poskytnutia stavebných prác sa riadia výhradne samostatnou zmluvou o dielo uzavretou individuálne medzi prevádzkovateľom a klientom.",
        ],
      },
      {
        heading: "3. Autorské práva",
        paragraphs: [
          "Všetok obsah webu – texty, fotografie, grafika, logo a zdrojový kód – je chránený autorským právom a je vlastníctvom prevádzkovateľa alebo je používaný na základe licencie, ak nie je uvedené inak.",
          "Kopírovanie, šírenie alebo iné použitie obsahu webu bez predchádzajúceho písomného súhlasu prevádzkovateľa je zakázané.",
        ],
      },
      {
        heading: "4. Obmedzenie zodpovednosti",
        paragraphs: [
          "Prevádzkovateľ sa usiluje o aktuálnosť a správnosť informácií na webe, negarantuje však jeho nepretržitú dostupnosť ani bezchybnosť a vyhradzuje si právo obsah webu kedykoľvek zmeniť.",
          "Prevádzkovateľ nezodpovedá za škody vzniknuté v súvislosti s používaním webu, s výnimkou prípadov ustanovených zákonom.",
        ],
      },
      {
        heading: "5. Odkazy na služby tretích strán",
        paragraphs: [
          "Web obsahuje odkazy na externé služby (napr. Google Maps, Google recenzie, e-mailový klient). Za obsah a fungovanie týchto externých služieb prevádzkovateľ nezodpovedá.",
        ],
      },
      {
        heading: "6. Rozhodné právo a riešenie sporov",
        paragraphs: [
          "Tieto obchodné podmienky, ako aj vzťahy nimi neupravené, sa riadia právnym poriadkom Českej republiky.",
          "Prípadné spory budú riešené prednostne rokovaním, v prípade nedohody príslušným súdom v Brne alebo Boskoviciach.",
        ],
      },
      {
        heading: "7. Kontakt",
        paragraphs: [
          "V prípade otázok k týmto obchodným podmienkam nás kontaktujte na e-maile Grujic.construction@gmail.com.",
        ],
      },
    ],
    effectiveDate: "8. 7. 2026",
  },
};

export const privacy: Record<Lang, LegalDoc> = {
  cs: {
    title: "Zásady ochrany osobních údajů",
    intro:
      "Tyto zásady popisují, jak společnost " +
      COMPANY_CS +
      " (dále jen „správce“) zpracovává osobní údaje návštěvníků webu grujic-construction v souladu s Nařízením (EU) 2016/679 (GDPR).",
    sections: [
      {
        heading: "1. Správce osobních údajů",
        paragraphs: [COMPANY_CS + "."],
      },
      {
        heading: "2. Jaké údaje zpracováváme",
        paragraphs: [
          "Prostřednictvím kontaktního formuláře zpracováváme údaje, které nám sami poskytnete: jméno, e-mail, telefonní číslo a obsah zprávy.",
          "Při procházení webu mohou být zpracovávány základní technické údaje (např. IP adresa) v rozsahu běžných záznamů poskytovatele hostingu (GitHub Pages).",
        ],
      },
      {
        heading: "3. Účel a právní základ zpracování",
        paragraphs: [
          "Údaje z kontaktního formuláře zpracováváme za účelem vyřízení vaší poptávky a případného jednání o uzavření smlouvy (čl. 6 odst. 1 písm. b) GDPR – jednání o smlouvě na žádost subjektu údajů).",
        ],
      },
      {
        heading: "4. Zpracovatelé a příjemci údajů",
        paragraphs: [
          "Ke zpracování a doručení zprávy z kontaktního formuláře využíváme externí službu FormSubmit.co.",
          "Web je hostován na platformě GitHub Pages (GitHub, Inc.).",
          "Web obsahuje cookie lištu s možností souhlasu s analytickými cookies (Google Analytics). Tento nástroj zatím není aktivně nasazen; pokud bude v budoucnu zprovozněn, data budou zpracovávána pouze po udělení souhlasu a tyto zásady budou odpovídajícím způsobem aktualizovány.",
        ],
      },
      {
        heading: "5. Doba uchování údajů",
        paragraphs: [
          "Údaje z kontaktního formuláře uchováváme pouze po dobu nezbytnou k vyřízení poptávky a případnému jednání o smlouvě, nejdéle však 2 roky od posledního kontaktu, pokud nevznikne smluvní vztah vyžadující delší uchování (např. z důvodu účetních nebo daňových předpisů).",
        ],
      },
      {
        heading: "6. Vaše práva",
        paragraphs: [
          "Máte právo na přístup ke svým osobním údajům, jejich opravu či výmaz, omezení zpracování, přenositelnost údajů a právo vznést námitku proti zpracování.",
          "Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz), pokud se domníváte, že zpracování vašich osobních údajů porušuje GDPR.",
        ],
      },
      {
        heading: "7. Kontakt",
        paragraphs: [
          "Svá práva můžete uplatnit na e-mailu Grujic.construction@gmail.com.",
        ],
      },
    ],
    effectiveDate: "8. 7. 2026",
  },

  en: {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy describes how " +
      COMPANY_EN +
      " (the “controller”) processes the personal data of visitors to the grujic-construction website, in accordance with Regulation (EU) 2016/679 (GDPR).",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [COMPANY_EN + "."],
      },
      {
        heading: "2. What data we process",
        paragraphs: [
          "Through the contact form we process the data you provide yourself: name, e-mail, phone number and message content.",
          "While browsing the website, basic technical data (e.g. IP address) may be processed within the standard logs of our hosting provider (GitHub Pages).",
        ],
      },
      {
        heading: "3. Purpose and legal basis of processing",
        paragraphs: [
          "We process contact-form data to handle your inquiry and any subsequent negotiation of a contract (Art. 6(1)(b) GDPR — steps taken at the data subject's request prior to entering into a contract).",
        ],
      },
      {
        heading: "4. Processors and recipients",
        paragraphs: [
          "We use the external service FormSubmit.co to process and deliver contact-form messages.",
          "The website is hosted on the GitHub Pages platform (GitHub, Inc.).",
          "The website includes a cookie banner allowing consent to analytics cookies (Google Analytics). This tool is not yet actively deployed; if activated in the future, data will only be processed after consent is given, and this policy will be updated accordingly.",
        ],
      },
      {
        heading: "5. Data retention period",
        paragraphs: [
          "We keep contact-form data only for as long as necessary to handle your inquiry and any related contract negotiation, for a maximum of 2 years from the last contact, unless a contractual relationship requiring longer retention arises (e.g. for accounting or tax reasons).",
        ],
      },
      {
        heading: "6. Your rights",
        paragraphs: [
          "You have the right to access, rectify or erase your personal data, to restrict processing, to data portability, and to object to processing.",
          "You also have the right to lodge a complaint with the Czech Office for Personal Data Protection (www.uoou.cz) if you believe the processing of your personal data violates the GDPR.",
        ],
      },
      {
        heading: "7. Contact",
        paragraphs: [
          "You can exercise your rights by e-mailing Grujic.construction@gmail.com.",
        ],
      },
    ],
    effectiveDate: "8 Jul 2026",
  },

  sk: {
    title: "Zásady ochrany osobných údajov",
    intro:
      "Tieto zásady popisujú, ako spoločnosť " +
      COMPANY_SK +
      " (ďalej len „prevádzkovateľ“) spracúva osobné údaje návštevníkov webu grujic-construction v súlade s Nariadením (EÚ) 2016/679 (GDPR).",
    sections: [
      {
        heading: "1. Prevádzkovateľ osobných údajov",
        paragraphs: [COMPANY_SK + "."],
      },
      {
        heading: "2. Aké údaje spracúvame",
        paragraphs: [
          "Prostredníctvom kontaktného formulára spracúvame údaje, ktoré nám sami poskytnete: meno, e-mail, telefónne číslo a obsah správy.",
          "Pri prehliadaní webu môžu byť spracúvané základné technické údaje (napr. IP adresa) v rozsahu bežných záznamov poskytovateľa hostingu (GitHub Pages).",
        ],
      },
      {
        heading: "3. Účel a právny základ spracúvania",
        paragraphs: [
          "Údaje z kontaktného formulára spracúvame na účely vybavenia vášho dopytu a prípadného rokovania o uzavretí zmluvy (čl. 6 ods. 1 písm. b) GDPR – rokovanie o zmluve na žiadosť dotknutej osoby).",
        ],
      },
      {
        heading: "4. Sprostredkovatelia a príjemcovia údajov",
        paragraphs: [
          "Na spracovanie a doručenie správy z kontaktného formulára využívame externú službu FormSubmit.co.",
          "Web je hostovaný na platforme GitHub Pages (GitHub, Inc.).",
          "Web obsahuje cookie lištu s možnosťou súhlasu s analytickými cookies (Google Analytics). Tento nástroj zatiaľ nie je aktívne nasadený; ak bude v budúcnosti sprevádzkovaný, dáta budú spracúvané iba po udelení súhlasu a tieto zásady budú zodpovedajúco aktualizované.",
        ],
      },
      {
        heading: "5. Doba uchovávania údajov",
        paragraphs: [
          "Údaje z kontaktného formulára uchovávame iba počas doby nevyhnutnej na vybavenie dopytu a prípadné rokovanie o zmluve, najdlhšie však 2 roky od posledného kontaktu, ak nevznikne zmluvný vzťah vyžadujúci dlhšie uchovávanie (napr. z dôvodu účtovných alebo daňových predpisov).",
        ],
      },
      {
        heading: "6. Vaše práva",
        paragraphs: [
          "Máte právo na prístup k svojim osobným údajom, ich opravu či výmaz, obmedzenie spracúvania, prenosnosť údajov a právo namietať proti spracúvaniu.",
          "Máte tiež právo podať sťažnosť na Úrad na ochranu osobných údajov SR alebo príslušný orgán, ak sa domnievate, že spracúvanie vašich osobných údajov porušuje GDPR.",
        ],
      },
      {
        heading: "7. Kontakt",
        paragraphs: [
          "Svoje práva môžete uplatniť na e-maile Grujic.construction@gmail.com.",
        ],
      },
    ],
    effectiveDate: "8. 7. 2026",
  },
};

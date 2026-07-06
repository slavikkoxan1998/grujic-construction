export interface Testimonial {
  name: string;
  location: string;
  rating: number; // 1-5
  text: string;
}

// NOTE: These are DRAFT/placeholder reviews written to match the tone of a
// real Brno construction client. Replace with the client's actual verbatim
// reviews (e.g. copied from Google/Facebook) before launch — publishing
// invented reviews as if they were real customer feedback is not something
// we want to ship as final content.
export const testimonials: Record<"cs" | "en" | "sk", Testimonial[]> = {
  cs: [
    {
      name: "Petr Novák",
      location: "Rekonstrukce koupelny, Brno-Královo Pole",
      rating: 5,
      text: "Práce byla odvedena rychle, čistě a přesně podle domluvy. Komunikace s týmem byla bezproblémová a cena odpovídala nabídce bez žádných skrytých poplatků.",
    },
    {
      name: "Jana Svobodová",
      location: "Zateplení fasády, Brno-Žabovřesky",
      rating: 5,
      text: "Fasáda vypadá skvěle a dům je teď mnohem tepleji. Pan Grujič osobně dohlížel na každý krok, což nám dodalo klid, že je vše v dobrých rukou.",
    },
    {
      name: "Martin Dvořák",
      location: "Výstavba rodinného domu, Šlapanice",
      rating: 5,
      text: "Od základů po předání klíčů proběhlo vše přesně podle harmonogramu. Doporučuji všem, kdo hledají spolehlivého partnera na stavbu domu na klíč.",
    },
    {
      name: "Lucie Procházková",
      location: "Sádrokartony a podhledy, Brno-střed",
      rating: 5,
      text: "Rychlá realizace, čistá práce a vstřícný přístup celého týmu. Kancelář jsme mohli znovu plně používat už za pár dní.",
    },
    {
      name: "Tomáš Kučera",
      location: "Zemní práce a základy, Brno-Bystrc",
      rating: 5,
      text: "Profesionální přístup od začátku do konce, dodržený termín i rozpočet. Práce odvedena na jedničku, určitě se na firmu obrátíme znovu.",
    },
  ],
  en: [
    {
      name: "Petr Novák",
      location: "Bathroom renovation, Brno-Královo Pole",
      rating: 5,
      text: "The work was done quickly, cleanly and exactly as agreed. Communication with the team was smooth and the price matched the quote with no hidden fees.",
    },
    {
      name: "Jana Svobodová",
      location: "Facade insulation, Brno-Žabovřesky",
      rating: 5,
      text: "The facade looks great and the house is now much warmer. Mr. Grujič personally supervised every step, which gave us real peace of mind.",
    },
    {
      name: "Martin Dvořák",
      location: "New family house, Šlapanice",
      rating: 5,
      text: "From the foundations to handing over the keys, everything ran exactly on schedule. I recommend them to anyone looking for a reliable turnkey building partner.",
    },
    {
      name: "Lucie Procházková",
      location: "Drywall and ceilings, Brno city centre",
      rating: 5,
      text: "Fast execution, clean work and a helpful attitude from the whole team. We were able to fully use our office again after just a few days.",
    },
    {
      name: "Tomáš Kučera",
      location: "Groundworks and foundations, Brno-Bystrc",
      rating: 5,
      text: "Professional approach from start to finish, on schedule and on budget. Excellent work — we'll definitely use this company again.",
    },
  ],
  sk: [
    {
      name: "Petr Novák",
      location: "Rekonštrukcia kúpeľne, Brno-Královo Pole",
      rating: 5,
      text: "Práca bola odvedená rýchlo, čisto a presne podľa dohody. Komunikácia s tímom bola bezproblémová a cena zodpovedala ponuke bez skrytých poplatkov.",
    },
    {
      name: "Jana Svobodová",
      location: "Zateplenie fasády, Brno-Žabovřesky",
      rating: 5,
      text: "Fasáda vyzerá skvele a dom je teraz oveľa teplejší. Pán Grujič osobne dohliadal na každý krok, čo nám dodalo istotu, že je všetko v dobrých rukách.",
    },
    {
      name: "Martin Dvořák",
      location: "Výstavba rodinného domu, Šlapanice",
      rating: 5,
      text: "Od základov po odovzdanie kľúčov prebehlo všetko presne podľa harmonogramu. Odporúčam každému, kto hľadá spoľahlivého partnera na stavbu domu na kľúč.",
    },
    {
      name: "Lucie Procházková",
      location: "Sadrokartóny a podhľady, Brno-centrum",
      rating: 5,
      text: "Rýchla realizácia, čistá práca a ústretový prístup celého tímu. Kanceláriu sme mohli opäť naplno používať už o pár dní.",
    },
    {
      name: "Tomáš Kučera",
      location: "Zemné práce a základy, Brno-Bystrc",
      rating: 5,
      text: "Profesionálny prístup od začiatku do konca, dodržaný termín aj rozpočet. Práca odvedená na jednotku, určite firmu oslovíme znova.",
    },
  ],
};

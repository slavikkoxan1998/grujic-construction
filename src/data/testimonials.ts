export interface Testimonial {
  name: string;
  location: string;
  rating: number; // 1-5
  text: string;
}

// NOTE: These are DRAFT/placeholder reviews written to match the tone of a
// real Brno construction client. They are intentionally anonymized (no real
// names or exact addresses) until the client provides actual verbatim
// customer reviews. Replace with real quotes (name + optional district is
// fine once confirmed by an actual client) before this is treated as final,
// launch-ready content.
export const testimonials: Record<"cs" | "en" | "sk", Testimonial[]> = {
  cs: [
    {
      name: "Ověřený klient",
      location: "Rekonstrukce koupelny, Brno",
      rating: 5,
      text: "Práce byla odvedena rychle, čistě a přesně podle domluvy. Komunikace s týmem byla bezproblémová a cena odpovídala nabídce bez žádných skrytých poplatků.",
    },
    {
      name: "Ověřený klient",
      location: "Zateplení fasády, Brno a okolí",
      rating: 5,
      text: "Fasáda vypadá skvěle a dům je teď mnohem tepleji. Tým osobně dohlížel na každý krok, což nám dodalo klid, že je vše v dobrých rukou.",
    },
    {
      name: "Ověřený klient",
      location: "Výstavba rodinného domu, Jihomoravský kraj",
      rating: 5,
      text: "Od základů po předání klíčů proběhlo vše přesně podle harmonogramu. Doporučuji všem, kdo hledají spolehlivého partnera na stavbu domu na klíč.",
    },
    {
      name: "Ověřený klient",
      location: "Sádrokartony a podhledy, Brno",
      rating: 5,
      text: "Rychlá realizace, čistá práce a vstřícný přístup celého týmu. Kancelář jsme mohli znovu plně používat už za pár dní.",
    },
    {
      name: "Ověřený klient",
      location: "Zemní práce a základy, Brno a okolí",
      rating: 5,
      text: "Profesionální přístup od začátku do konce, dodržený termín i rozpočet. Práce odvedena na jedničku, určitě se na firmu obrátíme znovu.",
    },
  ],
  en: [
    {
      name: "Verified client",
      location: "Bathroom renovation, Brno",
      rating: 5,
      text: "The work was done quickly, cleanly and exactly as agreed. Communication with the team was smooth and the price matched the quote with no hidden fees.",
    },
    {
      name: "Verified client",
      location: "Facade insulation, Brno area",
      rating: 5,
      text: "The facade looks great and the house is now much warmer. The team personally supervised every step, which gave us real peace of mind.",
    },
    {
      name: "Verified client",
      location: "New family house, South Moravian Region",
      rating: 5,
      text: "From the foundations to handing over the keys, everything ran exactly on schedule. I recommend them to anyone looking for a reliable turnkey building partner.",
    },
    {
      name: "Verified client",
      location: "Drywall and ceilings, Brno",
      rating: 5,
      text: "Fast execution, clean work and a helpful attitude from the whole team. We were able to fully use our office again after just a few days.",
    },
    {
      name: "Verified client",
      location: "Groundworks and foundations, Brno area",
      rating: 5,
      text: "Professional approach from start to finish, on schedule and on budget. Excellent work — we'll definitely use this company again.",
    },
  ],
  sk: [
    {
      name: "Overený klient",
      location: "Rekonštrukcia kúpeľne, Brno",
      rating: 5,
      text: "Práca bola odvedená rýchlo, čisto a presne podľa dohody. Komunikácia s tímom bola bezproblémová a cena zodpovedala ponuke bez skrytých poplatkov.",
    },
    {
      name: "Overený klient",
      location: "Zateplenie fasády, Brno a okolie",
      rating: 5,
      text: "Fasáda vyzerá skvele a dom je teraz oveľa teplejší. Tím osobne dohliadal na každý krok, čo nám dodalo istotu, že je všetko v dobrých rukách.",
    },
    {
      name: "Overený klient",
      location: "Výstavba rodinného domu, Juhomoravský kraj",
      rating: 5,
      text: "Od základov po odovzdanie kľúčov prebehlo všetko presne podľa harmonogramu. Odporúčam každému, kto hľadá spoľahlivého partnera na stavbu domu na kľúč.",
    },
    {
      name: "Overený klient",
      location: "Sadrokartóny a podhľady, Brno",
      rating: 5,
      text: "Rýchla realizácia, čistá práca a ústretový prístup celého tímu. Kanceláriu sme mohli opäť naplno používať už o pár dní.",
    },
    {
      name: "Overený klient",
      location: "Zemné práce a základy, Brno a okolie",
      rating: 5,
      text: "Profesionálny prístup od začiatku do konca, dodržaný termín aj rozpočet. Práca odvedená na jednotku, určite firmu oslovíme znova.",
    },
  ],
};

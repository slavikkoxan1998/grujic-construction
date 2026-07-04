import { useState } from 'react';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <AboutPage />;
      case 'Services':
        return <ServicesPage />;
      case 'Projects':
        return <ProjectsPage />;
      case 'Contacts':
        return <ContactsPage />;
      case 'Home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#BC9706]/95 backdrop-blur-sm shadow-md">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[86px] flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setCurrentPage('Home'); }}
            className="flex items-center flex-shrink-0 cursor-pointer"
            aria-label="Home"
          >
            {/* Added logo per user request */}
            <img src="/logo.png" alt="Logo" className="h-[60px] object-contain" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-semibold text-white/90">
            <button onClick={() => setCurrentPage('Home')} className="hover:text-white transition-colors">Domů</button>
            <button onClick={() => setCurrentPage('About')} className="hover:text-white transition-colors">O nás</button>
            <button onClick={() => setCurrentPage('Services')} className="hover:text-white transition-colors">Služby</button>
            <button onClick={() => setCurrentPage('Projects')} className="hover:text-white transition-colors">Projekty</button>
            <button onClick={() => setCurrentPage('Contacts')} className="hover:text-white transition-colors">Kontakt</button>
          </nav>

          <div className="hidden md:flex items-center gap-3 ml-7">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setCurrentPage('Contacts'); }}
              className="bg-[#242121] text-white text-sm font-medium flex items-center px-4 h-[38px] hover:bg-[#3a3737] transition-colors uppercase tracking-wider"
            >
              Napište nám
            </a>
            <a
              href="tel:+420608411169"
              className="bg-[#242121] text-white text-sm font-medium flex items-center px-4 h-[38px] hover:bg-[#3a3737] transition-colors tracking-wider"
            >
              +420 608 411 169
            </a>
          </div>

          <div className="md:hidden ml-auto">
            <button className="flex flex-col gap-[5px] p-2" aria-label="Open menu">
              <span className="w-6 h-0.5 bg-black block"></span>
              <span className="w-6 h-0.5 bg-black block"></span>
              <span className="w-6 h-0.5 bg-black block"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-[#242121] text-white pt-16 pb-12 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3 flex flex-col items-center text-center">
            <img src="/logo.png" alt="Logo" className="h-[76px] w-auto object-contain mb-8" />
            
            <p className="text-xl text-[#BC9706] mb-2 font-medium">Stavební firma</p>
            <h2 className="text-3xl font-bold text-[#BC9706] mb-3">GRUJIČ CONSTRUCTION s.r.o.</h2>
            <p className="text-xl text-[#BC9706] mb-10">Vše v jednom...výstavba od A do Z</p>
            
            <h3 className="text-4xl font-light text-[#BC9706] mb-8">Kontakt</h3>
            
            <div className="text-gray-300 space-y-2 mb-8 text-lg">
              <a href="tel:+420608411169" className="block hover:text-white transition-colors">Telefon: +420 608 411 169</a>
              <a href="mailto:grujic@mail.cz" className="block hover:text-white transition-colors">E-mail: grujic@mail.cz</a>
            </div>

            <div className="text-gray-300 space-y-1 mb-8 text-lg">
              <p>Körnerova 455/7</p>
              <p>Zábrdovice (Brno-střed), 602 00 Brno</p>
            </div>

            <div className="text-gray-300 space-y-1 mb-12 text-lg">
              <p>Jednatel: SAŠA GRUJIĆ</p>
              <p>IČO: 10840648</p>
              <p>DIČ: CZ10840648</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 items-center justify-center">
              <a href="#" className="text-white hover:text-[#BC9706] transition-colors" aria-label="Instagram">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-[#BC9706] transition-colors" aria-label="TikTok">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-[#BC9706] transition-colors" aria-label="Facebook">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col bg-white text-black p-8 md:p-12 rounded shadow-lg">
            <h2 className="text-3xl font-light mb-8 tracking-wide">KONTAKTUJTE NÁS</h2>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Jméno a příjmení *" className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors" required />
              <input type="tel" placeholder="Telefon" className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors" />
              <input type="email" placeholder="Email *" className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors" required />
              <textarea placeholder="Napište nám..." rows={4} className="border-b border-gray-300 py-3 outline-none focus:border-[#BC9706] transition-colors resize-none"></textarea>
              <button type="submit" className="mt-4 bg-black text-white px-8 py-3 rounded-full hover:bg-[#BC9706] transition-colors self-start font-medium tracking-wide">Odeslat</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative w-full min-h-[700px] overflow-hidden pt-[140px] pb-[100px] flex justify-start items-start">
        <img
          src="/images/bg_hero.png"
          alt="Luxury villa with pool"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col items-start">
          <div className="bg-white/20 backdrop-blur-sm p-8 md:p-12 inline-flex flex-col items-start rounded-xl border border-white/20 shadow-2xl max-w-[650px]">
            <img src="/logo.png" alt="Logo" className="h-[70px] object-contain mb-6" />
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight drop-shadow-md">
              Kvalitní stavební řešení
            </h1>
            <p className="text-white text-xl md:text-2xl font-medium tracking-wide drop-shadow-sm">
              Spolehlivé, odolné a profesionální
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      <section className="bg-white py-24 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-[55%]">
            <h2 className="text-[#A97C50] text-5xl md:text-6xl font-bold tracking-tight mb-4">O nás</h2>
            <h3 className="text-[#242121] text-3xl font-medium mb-6">Naše mise</h3>
            <p className="text-[#242121] text-xl leading-relaxed opacity-90">
              Naše společnost je stavební firma, která se specializuje na realizaci stavebních projektů, jako jsou domy, byty, kanceláře a chaty. S mnohaletými zkušenostmi ve stavebnictví a desítkami úspěšně dokončených zakázek garantuje spokojenost zákazníků. Pracujeme s kvalitními materiály a disponujeme profesionálně vyškoleným týmem, který zajistí špičkovou kvalitu každé realizace.
            </p>
          </div>
          <div className="md:w-[45%]">
            <img
              src="/images/workers.png"
              alt="Construction workers"
              className="w-full h-auto shadow-2xl rounded-lg object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] py-24 w-full relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-[#242121] text-5xl md:text-6xl font-bold tracking-tight mb-4">Služby</h2>
            <p className="text-[#242121] text-2xl font-medium opacity-80">Naše stavební služby</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Zateplení a fasády" img="/images/facade.png" desc="Provádíme zateplení fasád rodinných, bytových i panelových domů." />
            <ServiceCard title="Napínané stropy" img="/images/ceiling.png" desc="Moderní a elegantní řešení pro vaše stropy s dlouhou životností." />
            <ServiceCard title="Hydroizolační Fólie" img="/images/foil.png" desc="Spolehlivá ochrana proti vodě a vlhkosti pro ploché střechy." />
            <ServiceCard title="Výstavba domů" img="/images/house.png" desc="Váš vysněný dům postavený k dokonalosti, od základu po střechu." />
            <ServiceCard title="Sádrokartony" img="/images/drywall.png" desc="Desky mají využití téměř u všech druhů staveb, kde je kladen důraz na kvalitu." />
            <ServiceCard title="Obklady a dlažby" img="/images/tiles.png" desc="Zaměřujeme se na pokládku obkladů a dlažeb z různých materiálů." />
            <ServiceCard title="Malby a nátěry" img="/images/painting.jpg" desc="Specializujeme se na malířské a lakýrnické práce, včetně nátěrů fasád a střech." />
            <ServiceCard title="Zateplení a fasády" img="/images/insulation.jpg" desc="Provádíme zateplení fasád rodinných, bytových i panelových domů." />
            <ServiceCard title="Rekonstrukce" img="/images/reconstruction.png" desc="Specializujeme se na kompletní rekonstrukce bytů, rodinných domů a firem." />
            <ServiceCard title="Vodoinstalatérské a topenářské práce" img="/images/plumbing.jpg" desc="Zajišťujeme kompletní vodoinstalatérské a topenářské práce." />
            <ServiceCard title="Demolice" img="/images/demolition.jpg" desc="Nabízíme profesionální a bezpečné demoliční práce všeho druhu." />
            <ServiceCard title="Zemní práce" img="/images/earthworks.jpg" desc="Provádíme veškeré zemní a výkopové práce spolehlivě a rychle." />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-16">
            <h2 className="text-[#242121] text-5xl md:text-6xl font-bold tracking-tight mb-4">Projekty</h2>
            <p className="text-[#242121] text-2xl font-medium opacity-80">Naše práce</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProjectCard img="/images/project1.png" />
            <ProjectCard img="/images/project2.png" />
            <ProjectCard img="/images/project3.png" />
            <ProjectCard img="/images/project4.png" />
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, img, desc }: { title: string, img: string, desc?: string }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100">
      <div className="h-[280px] overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
      </div>
      <div className="p-8 flex flex-col items-center flex-1 bg-white relative z-20">
        <h3 className="text-[#A97C50] text-2xl md:text-3xl font-bold text-center mb-4">{title}</h3>
        {desc && <p className="text-gray-600 text-center text-lg">{desc}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ img }: { img: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/3] group cursor-pointer relative">
      <div className="absolute inset-0 bg-[#A97C50]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
      <img src={img} alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">O nás</h1>
      <div className="prose prose-lg max-w-none text-gray-800">
        <p>This is an example of a page. Unlike posts, which are displayed on your blog's front page in the order they're published, pages are better suited for more timeless content that you want to be easily accessible, like your About or Contact information.</p>
        <p className="mt-4">Jsme moderní stavební firma s hlubokými kořeny v oboru. Zaměřujeme se na poskytování špičkových stavebních a rekonstrukčních prací. Naším cílem je přetvořit vize našich klientů v realitu s důrazem na kvalitu, spolehlivost a inovace.</p>
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">Služby</h1>
      <p className="text-xl mb-12 text-gray-600">Nabízíme široké spektrum stavebních prací.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard title="Zateplení a fasády" img="/images/facade.png" desc="Provádíme zateplení fasád rodinných, bytových i panelových domů." />
        <ServiceCard title="Napínané stropy" img="/images/ceiling.png" desc="Moderní a elegantní řešení pro vaše stropy s dlouhou životností." />
        <ServiceCard title="Hydroizolační Fólie" img="/images/foil.png" desc="Spolehlivá ochrana proti vodě a vlhkosti pro ploché střechy." />
        <ServiceCard title="Výstavba domů" img="/images/house.png" desc="Váš vysněný dům postavený k dokonalosti, od základu po střechu." />
        <ServiceCard title="Sádrokartony" img="/images/drywall.png" desc="Desky mají využití téměř u všech druhů staveb, kde je kladen důraz na kvalitu." />
        <ServiceCard title="Obklady a dlažby" img="/images/tiles.png" desc="Zaměřujeme se na pokládku obkladů a dlažeb z různých materiálů." />
        <ServiceCard title="Malby a nátěry" img="/images/painting.jpg" desc="Specializujeme se na malířské a lakýrnické práce, včetně nátěrů fasád a střech." />
        <ServiceCard title="Zateplení a fasády" img="/images/insulation.jpg" desc="Provádíme zateplení fasád rodinných, bytových i panelových domů." />
        <ServiceCard title="Rekonstrukce" img="/images/reconstruction.png" desc="Specializujeme se na kompletní rekonstrukce bytů, rodinných domů a firem." />
        <ServiceCard title="Vodoinstalatérské a topenářské práce" img="/images/plumbing.jpg" desc="Zajišťujeme kompletní vodoinstalatérské a topenářské práce." />
        <ServiceCard title="Demolice" img="/images/demolition.jpg" desc="Nabízíme profesionální a bezpečné demoliční práce všeho druhu." />
        <ServiceCard title="Zemní práce" img="/images/earthworks.jpg" desc="Provádíme veškeré zemní a výkopové práce spolehlivě a rychle." />
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">Projekty</h1>
      <p className="text-xl mb-12 text-gray-600">Prohlédněte si naše úspěšné realizace.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProjectCard img="/images/project1.png" />
        <ProjectCard img="/images/project2.png" />
        <ProjectCard img="/images/project3.png" />
        <ProjectCard img="/images/project4.png" />
      </div>
    </div>
  );
}

function ContactsPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 animate-fade-in">
      <h1 className="text-5xl font-bold text-[#A97C50] mb-8">Kontakt</h1>
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-[#242121]">GRUJIČ CONSTRUCTION s.r.o.</h2>
          <p className="text-lg text-gray-700 mb-2">Körnerova 455/7, Zábrdovice (Brno-střed)</p>
          <p className="text-lg text-gray-700 mb-6">602 00 Brno</p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Fakturační údaje:</h3>
          <p className="text-gray-700">Jednatel: SAŠA GRUJIĆ</p>
          <p className="text-gray-700">IČO: 10840648</p>
          <p className="text-gray-700">DIČ: CZ10840648</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Zavolejte nám</h3>
          <p className="text-2xl text-[#BC9706] font-bold mb-8">+420 608 411 169</p>

          <h3 className="text-xl font-semibold mb-4">Napište nám</h3>
          <p className="text-2xl text-[#BC9706] font-bold">grujic@mail.cz</p>
        </div>
      </div>
    </div>
  );
}

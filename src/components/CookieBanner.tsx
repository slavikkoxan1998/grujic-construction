import { useState, useEffect } from "react";
import { useLang } from "../contexts/LanguageContext";

// TODO: Замінити на реальний Google Analytics ID після реєстрації
const GA_ID = "G-XXXXXXXXXX";

const cookieText = {
  cs: {
    text: "Tento web používá cookies pro analytické účely.",
    accept: "Přijmout",
    decline: "Odmítnout",
  },
  en: {
    text: "This website uses cookies for analytics.",
    accept: "Accept",
    decline: "Decline",
  },
  sk: {
    text: "Táto stránka používa cookies na analytické účely.",
    accept: "Prijať",
    decline: "Odmietnuť",
  },
};

function loadGA() {
  if (GA_ID === "G-XXXXXXXXXX") return; // не підключено ще
  if (document.getElementById("ga-script")) return; // вже завантажено

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(script2);
}

export default function CookieBanner() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      loadGA();
    }
  }, []);

  function handleAccept() {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
    loadGA();
  }

  function handleDecline() {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  const c = cookieText[lang as keyof typeof cookieText] ?? cookieText.cs;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-3xl mx-auto bg-[#2a2a2a] text-[#CD1D14] rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-white/10">
        <div className="text-3xl flex-shrink-0">🍪</div>

        <p className="text-sm text-[#CD1D14]/80 flex-1 leading-relaxed">
          {c.text}
        </p>

        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-white/20 text-[#CD1D14]/70 text-sm hover:border-white/40 hover:text-[#CD1D14] transition-colors"
          >
            {c.decline}
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-5 py-2 rounded-lg bg-[#D4A574] text-[#CD1D14] text-sm font-semibold hover:bg-[#C89860] transition-colors"
          >
            {c.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

import { business } from "../lib/business";

export default function CallButton() {
  return (
    <a
      href={`tel:${business.phone}`}
      aria-label={`Zavolat na ${business.phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#D4A574] shadow-xl flex items-center justify-center hover:bg-[#C89860] transition-colors animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
      </svg>
    </a>
  );
}

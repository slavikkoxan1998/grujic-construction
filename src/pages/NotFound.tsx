import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-[#D4A574] mb-4">404</h1>
      <p className="text-lg text-[#555555] mb-6">Stránka nebyla nalezena.</p>
      <Link
        to="/"
        className="bg-[#D4A574] text-[#CD1D14] px-6 py-3 rounded-lg font-semibold hover:bg-[#C89860] transition-colors"
      >
        Zpět na hlavní stránku
      </Link>
    </div>
  );
}

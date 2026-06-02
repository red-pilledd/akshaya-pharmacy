import Link from "next/link";
import { Cross, Home, MapPin, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-gray-50">
      <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
        <Cross className="w-8 h-8 text-emerald-700" />
      </div>

      <div className="text-7xl font-black text-emerald-700 mb-3">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. It may have moved or the link might be incorrect.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors"
        >
          <Home className="w-4 h-4" /> Go Home
        </Link>
        <Link
          href="/stores"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-emerald-300 hover:text-emerald-700 transition-colors bg-white"
        >
          <MapPin className="w-4 h-4" /> Find a Store
        </Link>
        <a
          href="tel:+919207856815"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-emerald-300 hover:text-emerald-700 transition-colors bg-white"
        >
          <Phone className="w-4 h-4" /> Call Us
        </a>
      </div>
    </div>
  );
}

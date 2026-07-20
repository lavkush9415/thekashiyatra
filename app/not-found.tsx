import Link from "next/link";
import Image from "next/image";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* Mandala / Om decoration */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-amber-200 dark:border-amber-500/30 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-amber-300 dark:border-amber-500/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "8s" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-6xl text-amber-500/30 dark:text-amber-500/20 select-none">ॐ</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-4xl gradient-text">404</span>
          </div>
        </div>

        <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white mb-3">
          This Path Leads Nowhere
        </h1>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          Like a wanderer who has strayed from the sacred ghats, this page cannot be found.
          Let us guide you back to your divine journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            <Home size={16} /> Return Home
          </Link>
          <Link
            href="/packages"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-amber-400 text-amber-700 dark:text-amber-400 rounded-full font-semibold hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-colors"
          >
            <Search size={16} /> Explore Packages
          </Link>
        </div>

        {/* Quick navigation */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Hotels", href: "/hotels", emoji: "🏨" },
            { label: "Boat Rides", href: "/boats", emoji: "⛵" },
            { label: "Experiences", href: "/experiences", emoji: "🙏" },
            { label: "Contact", href: "/contact", emoji: "📞" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{item.emoji}</span>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

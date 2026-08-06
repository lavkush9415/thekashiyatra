import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data/packages";
import { formatPrice } from "@/lib/utils";
import { Star, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Varanasi Tour Packages — 1 Day to 5 Day Spiritual Tours",
  description:
    "Choose from our curated Varanasi tour packages. 1 Day TheKashiYatra, Heritage tours, Kashi-Prayagraj combo, Kashi-Ayodhya pilgrimages. Best prices.",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="bg-gradient-to-br from-[#8B4513] to-[#FF9933] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            ✦ Curated Journeys
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Tour Packages
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-white/70 text-lg">✦</span>
            <span className="h-px w-12 bg-white/40" />
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            From quick day trips to extended luxury pilgrimages — discover the perfect Kashi journey for you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => {
            const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);
            return (
              <Link
                href={`/packages/${pkg.slug}`}
                key={pkg.id}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {discount > 0 && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">{discount}% OFF</span>
                  )}
                  {pkg.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-xs font-bold rounded-full">{pkg.badge}</span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-white text-xs px-2.5 py-1 bg-black/50 rounded-full"><Clock size={11} />{pkg.duration}</span>
                    <span className="flex items-center gap-1 text-white text-xs"><Star size={11} className="fill-amber-400 text-amber-400" />{pkg.rating}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-[#FF9933] transition-colors">{pkg.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-1 line-clamp-1">{pkg.subtitle}</p>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                    <span className="capitalize px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">{pkg.category}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {pkg.services.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                        <Check size={11} className="text-green-500 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 line-through">{formatPrice(pkg.originalPrice)}</p>
                      <p className="font-bold text-[#8B4513] dark:text-amber-400 text-xl">{formatPrice(pkg.price)}<span className="text-xs font-normal text-gray-400">/person</span></p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
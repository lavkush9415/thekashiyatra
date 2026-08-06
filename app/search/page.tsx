"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, MapPin, Clock } from "lucide-react";
import { hotels } from "@/lib/data/hotels";
import { boatRides } from "@/lib/data/boats";
import { packages } from "@/lib/data/packages";
import { experiences } from "@/lib/data/experiences";
import { formatPrice } from "@/lib/utils";

const allResults = [
  ...hotels.map((h) => ({
    id: h.slug,
    type: "Hotel" as const,
    name: h.name,
    description: h.description,
    image: h.image,
    price: h.pricePerNight,
    rating: h.rating,
    href: `/hotels/${h.slug}`,
    badge: h.badge,
    location: h.location,
  })),
  ...boatRides.map((b) => ({
    id: b.slug,
    type: "Boat" as const,
    name: b.title,
    description: b.description,
    image: b.image,
    price: b.price,
    rating: 0,
    href: `/boats/${b.slug}`,
    badge: b.badge,
    location: "Varanasi Ghats",
  })),
  ...packages.map((p) => ({
    id: p.slug,
    type: "Package" as const,
    name: p.title,
    description: p.subtitle,
    image: p.image,
    price: p.price,
    rating: p.rating,
    href: `/packages/${p.slug}`,
    badge: p.badge,
    location: "Varanasi",
  })),
  ...experiences.map((e) => ({
    id: e.slug,
    type: "Experience" as const,
    name: e.name,
    description: e.description,
    image: e.image,
    price: e.price,
    rating: e.rating,
    href: e.slug === "ganga-aarti-ceremony" ? "/ganga-aarti" : `/experiences/${e.slug}`,
    badge: e.badge,
    location: "Varanasi",
  })),
];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeType, setActiveType] = useState("All");

  const types = ["All", "Hotel", "Boat", "Package", "Experience"];

  const results = allResults.filter((item) => {
    const matchType = activeType === "All" || item.type === activeType;
    const matchQuery =
      !query ||
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.location?.toLowerCase().includes(query.toLowerCase());
    return matchType && matchQuery;
  });

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      {/* Search Header */}
      <div className="bg-gradient-to-br from-[#8B4513] to-[#FF9933] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-6">Search TheKashiYatra</h1>
          <div className="relative">
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search hotels, boats, packages, experiences..."
              className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/95 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl"
              autoFocus
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeType === type
                  ? "bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-amber-300"
              }`}
            >
              {type}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500 self-center">
            {results.length} result{results.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {results.map((item) => (
              <Link
                key={`${item.type}-${item.id}`}
                href={item.href}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-luxury border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-0.5 bg-white/90 dark:bg-gray-900/90 text-xs font-bold text-gray-700 dark:text-gray-200 rounded-full">
                      {item.type}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-xs font-bold rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-1">
                    <Star size={11} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{item.rating}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-[#FF9933] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  {item.location && (
                    <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                      <MapPin size={10} />
                      <span className="line-clamp-1">{item.location}</span>
                    </div>
                  )}
                  <p className="font-bold text-[#8B4513] dark:text-amber-400">
                    {item.price === 0 ? "Free" : formatPrice(item.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="font-semibold text-gray-700 dark:text-gray-300 text-xl mb-2">
              No results found
            </h2>
            <p className="text-gray-500 mb-6">
              Try searching for &quot;hotel&quot;, &quot;sunrise boat&quot;, or &quot;Ganga Aarti&quot;
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Hotels", "Boat Rides", "Packages", "Ganga Aarti"].map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-4 py-2 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-sm border border-amber-200 dark:border-amber-500/20 hover:bg-amber-100 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center"><div className="animate-spin w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full" /></div>}>
      <SearchContent />
    </Suspense>
  );
}

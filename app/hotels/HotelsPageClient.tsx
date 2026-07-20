"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, MapPin, Filter, Search } from "lucide-react";
import { Hotel } from "@/lib/data/hotels";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/providers/ToastProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "luxury", "heritage", "premium", "standard"];

export function HotelsPageClient({ hotels }: { hotels: Hotel[] }) {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { showToast } = useToast();

  const toggleWishlist = (id: string, name: string) => {
    setWishlist((p) => p.includes(id) ? p.filter((i) => i !== id) : [...p, id]);
    showToast(
      wishlist.includes(id) ? `💔 ${name} removed` : `❤️ ${name} saved!`,
      wishlist.includes(id) ? "info" : "success"
    );
  };

  const filtered = hotels.filter((h) => {
    const matchCat = category === "All" || h.category === category;
    const matchSearch = h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#8B4513] to-[#FF9933] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Premium Stays"
            title="Hotels in"
            highlightedWord=" Varanasi"
            subtitle="From river-facing heritage palaces to modern luxury — your perfect stay awaits."
            light={true}
          />

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mt-4">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search hotels by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/95 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <Filter size={16} className="text-gray-500" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                category === cat
                  ? "bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-amber-300"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-500">{filtered.length} properties found</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {hotel.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-xs font-bold rounded-full">
                    {hotel.badge}
                  </span>
                )}
                <button
                  onClick={() => toggleWishlist(hotel.id, hotel.name)}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all ${
                    wishlist.includes(hotel.id) ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:text-red-500"
                  }`}
                >
                  <Heart size={16} className={wishlist.includes(hotel.id) ? "fill-current" : ""} />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold">{hotel.rating}</span>
                  <span className="text-gray-400 text-xs">({hotel.reviews.toLocaleString()})</span>
                  <span className="ml-auto capitalize text-xs px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full">{hotel.category}</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#FF9933] transition-colors">{hotel.name}</h3>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                  <MapPin size={11} />
                  {hotel.location}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">{hotel.description}</p>
                <div className="flex gap-1.5 mb-4 flex-wrap">
                  {hotel.amenities.slice(0, 4).map((a) => (
                    <span key={a} className="px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs rounded-full">{a}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div>
                    <p className="text-xs text-gray-400 line-through">{formatPrice(hotel.originalPrice)}</p>
                    <p className="font-bold text-[#8B4513] dark:text-amber-400 text-lg">{formatPrice(hotel.price)}<span className="text-xs font-normal text-gray-400">/night</span></p>
                  </div>
                  <Link href={`/hotels/${hotel.id}`} className="px-5 py-2.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all">
                    View & Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-4">🏨</p>
            <p className="text-lg">No hotels found for your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, MapPin, Wifi, Coffee, Car, Waves, ChevronRight } from "lucide-react";
import { hotels } from "@/lib/data/hotels";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/providers/ToastProvider";

const amenityIcons: Record<string, React.ReactNode> = {
  "WiFi": <Wifi size={12} />,
  "Restaurant": <Coffee size={12} />,
  "Parking": <Car size={12} />,
  "Pool": <Waves size={12} />,
};

export function FeaturedHotels() {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const { showToast } = useToast();

  const toggleWishlist = (id: string, name: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
    const isAdding = !wishlist.includes(id);
    showToast(
      isAdding ? `❤️ ${name} added to wishlist!` : `💔 ${name} removed from wishlist`,
      isAdding ? "success" : "info"
    );
  };

  const displayHotels = hotels.slice(0, 4);

  return (
    <section className="py-24 bg-[#FFF8F0] dark:bg-gray-950 dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Curated Stays"
            title="Featured"
            highlightedWord=" Hotels"
            subtitle="Handpicked luxury and heritage properties in Varanasi."
            centered={false}
          />
          <Link
            href="/hotels"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            View All Hotels <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayHotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              {/* Image — fixed aspect ratio */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge */}
                {hotel.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-xs font-semibold rounded-full">
                    {hotel.badge}
                  </span>
                )}

                {/* Wishlist Button */}
                <button
                  onClick={(e) => { e.preventDefault(); toggleWishlist(hotel.id, hotel.name); }}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
                    wishlist.includes(hotel.id)
                      ? "bg-red-500 text-white"
                      : "bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} className={wishlist.includes(hotel.id) ? "fill-current" : ""} />
                </button>

                {/* Category tag */}
                <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full capitalize opacity-0 group-hover:opacity-100 transition-opacity">
                  {hotel.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-2">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">{hotel.rating}</span>
                  <span className="text-gray-400 text-xs">({hotel.reviews.toLocaleString()})</span>
                </div>

                <h3 className="font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-[#FF9933] transition-colors line-clamp-1">
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs mb-3">
                  <MapPin size={12} />
                  <span className="line-clamp-1">{hotel.location}</span>
                </div>

                {/* Amenities */}
                <div className="flex gap-1.5 mb-4 flex-wrap">
                  {hotel.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="flex items-center gap-1 px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs rounded-full"
                    >
                      {amenityIcons[amenity] || null}
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 text-xs rounded-full">
                      +{hotel.amenities.length - 3}
                    </span>
                  )}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 line-through">
                      {formatPrice(hotel.originalPrice)}
                    </p>
                    <p className="font-bold text-[#8B4513] dark:text-amber-400 text-lg">
                      {formatPrice(hotel.price)}
                      <span className="text-xs font-normal text-gray-400">/night</span>
                    </p>
                  </div>
                  <Link
                    href={`/hotels/${hotel.id}`}
                    className="px-4 py-2 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

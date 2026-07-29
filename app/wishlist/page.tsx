"use client";

import { useState } from "react";
import { Heart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { hotels } from "@/lib/data/hotels";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/providers/ToastProvider";
import { getWhatsAppUrl, hotelBookingMessage } from "@/lib/whatsapp";

export default function WishlistPage() {
  // Demo: show first 2 hotels as wishlist
  const [wishlistIds, setWishlistIds] = useState<string[]>([hotels[0].slug, hotels[1].slug]);
  const { showToast } = useToast();

  const remove = (slug: string, name: string) => {
    setWishlistIds((prev) => prev.filter((i) => i !== slug));
    showToast(`💔 ${name} removed from wishlist`, "info");
  };

  const wishlistHotels = hotels.filter((h) => wishlistIds.includes(h.slug));

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Heart size={24} className="text-red-500 fill-red-500" />
          <h1 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">My Wishlist</h1>
          <span className="ml-auto px-3 py-1 bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-medium rounded-full">
            {wishlistHotels.length} saved
          </span>
        </div>

        {wishlistHotels.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h2 className="font-semibold text-gray-700 dark:text-gray-300 text-xl mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Save hotels, boats, and packages you love</p>
            <Link href="/hotels" className="px-6 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full font-semibold hover:shadow-lg transition-all">
              Explore Hotels
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {wishlistHotels.map((hotel) => (
              <div key={hotel.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row">
                <div className="relative w-full h-48 sm:w-36 sm:h-auto shrink-0">
                  <Image src={hotel.image} alt={hotel.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 144px" />
                </div>
                <div className="p-4 flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{hotel.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">{hotel.location}</p>
                  <p className="font-bold text-[#8B4513] dark:text-amber-400">{formatPrice(hotel.pricePerNight)}<span className="text-xs font-normal text-gray-400">/night</span></p>
                  <div className="flex gap-2 mt-3">
                    <a
                      href={getWhatsAppUrl(hotelBookingMessage({ hotelName: hotel.name, price: hotel.pricePerNight }))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-lg text-xs font-semibold text-center"
                    >
                      Book Now
                    </a>
                    <button
                      onClick={() => remove(hotel.slug, hotel.name)}
                      className="px-2.5 py-1.5 border border-red-200 dark:border-red-500/30 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

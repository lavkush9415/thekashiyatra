"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users, MapPin, ChevronRight, Check } from "lucide-react";
import { packages } from "@/lib/data/packages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

export function TourPackages() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Curated Packages"
            title="Tour"
            highlightedWord=" Packages"
            subtitle="From quick day trips to extended spiritual pilgrimages — we have it all."
            centered={false}
          />
          <Link
            href="/packages"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            All Packages <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.slice(0, 6).map((pkg, index) => {
            const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-400 border border-gray-100 dark:border-gray-700 flex flex-col ${
                  index === 5 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Discount Badge */}
                  {discount > 0 && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      {discount}% OFF
                    </div>
                  )}

                  {/* Package badge */}
                  {pkg.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-xs font-bold rounded-full">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Duration overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white text-xs">
                      <Clock size={12} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white text-xs">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span>{pkg.rating} ({pkg.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1.5 group-hover:text-[#FF9933] transition-colors">
                    {pkg.name}
                  </h3>

                  {/* Destinations */}
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs mb-3">
                    <MapPin size={11} />
                    <span>{pkg.destinations.join(" + ")}</span>
                    <span className="ml-auto px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-xs capitalize">
                      {pkg.category}
                    </span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  {/* Includes */}
                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {pkg.includes.slice(0, 4).map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
                        <Check size={11} className="text-green-500 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 line-through">{formatPrice(pkg.originalPrice)}</p>
                      <p className="font-bold text-[#8B4513] dark:text-amber-400 text-xl">
                        {formatPrice(pkg.price)}
                        <span className="text-xs font-normal text-gray-500">/person</span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users size={11} />
                        Max {pkg.maxGuests}
                      </div>
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="px-4 py-2 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users, ChevronRight, Anchor } from "lucide-react";
import { boats } from "@/lib/data/boats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

export function BoatBooking() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-[#111827] to-gray-900 relative overflow-hidden">
      {/* Decorative waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 60C1200 60 1320 45 1380 37.5L1440 30V120H0Z" fill="rgba(255,153,51,0.05)" />
          <path d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 75C840 75 960 75 1080 78.75C1200 82.5 1320 90 1380 93.75L1440 97.5V120H0Z" fill="rgba(255,153,51,0.03)" />
        </svg>
      </div>

      {/* Floating Anchor Icon — hidden on mobile to avoid overflow */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-16 right-10 opacity-10 hidden lg:block pointer-events-none"
      >
        <Anchor size={120} className="text-amber-500" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Sacred Waters"
            title="Boat Rides on"
            highlightedWord=" Mother Ganga"
            subtitle="Each ripple of the Ganga carries a thousand years of prayers."
            centered={false}
            light={true}
          />
          <Link
            href="/boats"
            className="flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            View All Boats <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boats.slice(0, 3).map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Image — fixed aspect ratio */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={boat.image}
                  alt={boat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${boat.color} opacity-30`} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                {/* Badge */}
                {boat.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full">
                    {boat.badge}
                  </span>
                )}

                {/* Timing */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 text-white/90 text-xs">
                    <Clock size={12} />
                    <span>{boat.timing}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-white">{boat.rating}</span>
                  <span className="text-gray-500 text-xs">({boat.reviews.toLocaleString()})</span>
                  <span className="ml-auto text-xs text-gray-500 capitalize">{boat.type}</span>
                </div>

                <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {boat.name}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {boat.description}
                </p>

                {/* Includes */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {boat.includes.slice(0, 3).map((item) => (
                    <span key={item} className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20">
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                      <Users size={11} />
                      <span>Up to {boat.capacity} guests</span>
                    </div>
                    <p className="font-bold text-amber-400 text-xl">
                      {formatPrice(boat.price)}
                      {boat.pricePerPerson ? (
                        <span className="text-xs font-normal text-gray-500">/person</span>
                      ) : (
                        <span className="text-xs font-normal text-gray-500">/boat</span>
                      )}
                    </p>
                  </div>
                  <Link
                    href={`/boats/${boat.id}`}
                    className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
                  >
                    Book Ride
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional boat cards - horizontal scroll on mobile */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {boats.slice(3).map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-center bg-gray-800/40 border border-gray-700/50 rounded-2xl p-4 hover:border-amber-500/30 transition-all group"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={boat.image}
                  alt={boat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-white text-sm mb-1 group-hover:text-amber-400 transition-colors">
                  {boat.name}
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Clock size={10} />{boat.duration}</span>
                  <span className="flex items-center gap-1"><Users size={10} />{boat.capacity} pax</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-amber-400 text-base">{formatPrice(boat.price)}</p>
                <Link href={`/boats/${boat.id}`} className="text-xs text-gray-400 hover:text-amber-400 transition-colors">
                  Book →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

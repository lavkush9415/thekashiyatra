"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, ChevronRight } from "lucide-react";
import { boatRides } from "@/lib/data/boats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

export function BoatBooking() {
  return (
    <section className="py-24 bg-[#FFF8F0] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Sacred Waters"
            title="Boat Rides on"
            highlightedWord=" Mother Ganga"
            subtitle="Each ripple of the Ganga carries a thousand years of prayers."
            centered={false}
          />
          <Link
            href="/boats"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            View All Boats <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {boatRides.slice(0, 3).map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-card hover:border-amber-300 hover:shadow-luxury transition-all duration-300 flex flex-col"
            >
              {/* Image — fixed aspect ratio */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={boat.image}
                  alt={boat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

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
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-[#FF9933] transition-colors">
                  {boat.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                  {boat.description}
                </p>

                {/* Features */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {boat.features.slice(0, 3).map((item) => (
                    <span key={item} className="px-2 py-0.5 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200">
                      ✓ {item}
                    </span>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1">
                      <Users size={11} />
                      <span>{boat.capacity}</span>
                    </div>
                    <p className="font-bold text-amber-600 text-xl">
                      {formatPrice(boat.price)}
                      <span className="text-xs font-normal text-gray-400">/person</span>
                    </p>
                  </div>
                  <Link
                    href={`/boats/${boat.slug}`}
                    className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional boat cards - horizontal scroll on mobile */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {boatRides.slice(3).map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 items-center bg-white border border-gray-100 rounded-2xl p-4 shadow-card hover:border-amber-300 hover:shadow-card transition-all group"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={boat.image}
                  alt={boat.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-sm mb-1 group-hover:text-[#FF9933] transition-colors">
                  {boat.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={10} />{boat.duration}</span>
                  <span className="flex items-center gap-1"><Users size={10} />{boat.capacity}</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-amber-600 text-base">{formatPrice(boat.price)}</p>
                <Link
                  href={`/boats/${boat.slug}`}
                  className="text-xs text-gray-400 hover:text-amber-600 transition-colors"
                >
                  View →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
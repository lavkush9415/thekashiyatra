"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Users, Check } from "lucide-react";
import { Boat } from "@/lib/data/boats";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BoatsPageClient({ boats }: { boats: Boat[] }) {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Ganga River"
            fill
            className="object-cover brightness-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            badge="Sacred Waters"
            title="Boat Rides on"
            highlightedWord=" Mother Ganga"
            subtitle="Choose from our curated selection of sacred river experiences."
            light={true}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boats.map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={boat.image}
                  alt={boat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${boat.color} opacity-20`} />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                {boat.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full">
                    {boat.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                    ⏰ {boat.timing}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-2">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-white text-sm font-semibold">{boat.rating}</span>
                  <span className="text-gray-500 text-xs">({boat.reviews.toLocaleString()})</span>
                </div>
                <h3 className="font-semibold text-white text-xl mb-2 group-hover:text-amber-400 transition-colors">
                  {boat.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{boat.description}</p>

                <div className="flex gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5"><Clock size={11} />{boat.duration}</span>
                  <span className="flex items-center gap-1.5"><Users size={11} />Up to {boat.capacity}</span>
                  <span className="capitalize px-2 py-0.5 bg-gray-700 rounded-full">{boat.type}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {boat.includes.slice(0, 3).map((item) => (
                    <span key={item} className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20">
                      <Check size={10} /> {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-amber-400 text-2xl">{formatPrice(boat.price)}</p>
                    <p className="text-gray-500 text-xs">{boat.pricePerPerson ? "per person" : "per boat"}</p>
                  </div>
                  <Link
                    href={`/boats/${boat.id}`}
                    className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all"
                  >
                    Book Ride
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

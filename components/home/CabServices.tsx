"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Car } from "lucide-react";
import { cabServices } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CabServices() {
  return (
    <section className="py-24 bg-[#FFF8F0] dark:bg-gray-950 mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Get Around"
            title="Cab &"
            highlightedWord=" Transport"
            subtitle="Comfortable, safe, and reliable transportation across Varanasi and beyond."
            centered={false}
          />
          <Link
            href="/cabs"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            View All Services <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cabServices.map((cab, index) => (
            <motion.div
              key={cab.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cab.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${cab.color}`} />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-4xl mb-4 block"
              >
                {cab.icon}
              </motion.div>

              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-[#FF9933] transition-colors">
                {cab.name}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3">
                {cab.description}
              </p>

              {/* Vehicles */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {cab.vehicles.map((v) => (
                  <span key={v} className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                    {v}
                  </span>
                ))}
              </div>

              <p className={`font-bold text-sm bg-gradient-to-r ${cab.color} bg-clip-text text-transparent mb-4`}>
                {cab.price}
              </p>

              <Link
                href="/cabs"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r ${cab.color} text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105`}
              >
                <Car size={12} /> Book Now
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F] rounded-3xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=white fill-opacity=0.05%3E%3Ccircle cx=20 cy=20 r=3/%3E%3C/g%3E%3C/svg%3E')]" />
          <h3 className="font-serif text-2xl font-bold mb-2">Need a Custom Transport Plan?</h3>
          <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
            Planning a group pilgrimage or corporate event? Get a personalized quote for buses, tempo travellers, or luxury fleet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8B4513] rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Custom Quote <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

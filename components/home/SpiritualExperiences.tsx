"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, ChevronRight } from "lucide-react";
import { experiences } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";

export function SpiritualExperiences() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 dark:bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Sacred Encounters"
            title="Spiritual"
            highlightedWord=" Experiences"
            subtitle="Immerse yourself in the living traditions that have defined Kashi for millennia."
            centered={false}
          />
          <Link
            href="/experiences"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            All Experiences <ChevronRight size={16} />
          </Link>
        </div>

        {/* Layout: Featured card left (1/3 width) + 2×3 grid right (2/3 width) */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-gray-900 rounded-3xl overflow-hidden cursor-pointer lg:w-1/3 shrink-0 min-h-[420px]"
          >
            <Image
              src={experiences[0].image}
              alt={experiences[0].name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-60"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-5xl mb-4 block">{experiences[0].icon}</span>
              {experiences[0].badge && (
                <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-3 w-fit">
                  {experiences[0].badge}
                </span>
              )}
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {experiences[0].name}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                {experiences[0].description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-white text-sm font-semibold">{experiences[0].rating}</span>
                  <span className="text-white/50 text-xs">({experiences[0].reviews.toLocaleString()})</span>
                </div>
                <span className="text-amber-400 font-bold text-lg">
                  {experiences[0].price === 0 ? "Free" : formatPrice(experiences[0].price)}
                </span>
              </div>
              <Link
                href={experiences[0].slug === "ganga-aarti-ceremony" ? "/ganga-aarti" : `/experiences/${experiences[0].slug}`}
                className="mt-4 w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl text-sm font-semibold text-center hover:shadow-xl hover:shadow-amber-500/30 transition-all"
              >
                View Details
              </Link>
            </div>
          </motion.div>

          {/* Grid of 6 smaller cards — 2 columns, 3 rows */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {experiences.slice(1, 7).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-card hover:shadow-luxury transition-all duration-300 overflow-hidden"
              >
                {/* Image section */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 text-3xl">{exp.icon}</div>
                  {exp.badge && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 text-xs font-bold text-gray-700 rounded-full">
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* Content section */}
                <div className="p-5 relative z-10">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1.5 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {exp.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Clock size={10} />{exp.duration}</span>
                    <span className="capitalize px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">{exp.category}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className={`font-bold text-base ${exp.color}`}>
                      {exp.price === 0 ? "Free" : formatPrice(exp.price)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Star size={11} className="text-amber-400 fill-amber-400" />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{exp.rating}</span>
                      <span className="text-gray-400 text-xs">({exp.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                  <Link
                    href={exp.slug === "ganga-aarti-ceremony" ? "/ganga-aarti" : `/experiences/${exp.slug}`}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl text-sm font-semibold text-center block hover:shadow-xl hover:shadow-amber-500/30 transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

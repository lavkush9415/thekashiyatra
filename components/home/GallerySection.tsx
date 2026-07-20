"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "ghats", "aarti", "temples", "boats", "wellness", "culture", "hotels"];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const lightboxImage = galleryImages.find((img) => img.src === lightbox);

  return (
    <section className="py-24 bg-[#FFF8F0] dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionHeading
            badge="Visual Story"
            title="Kashi Through"
            highlightedWord=" Our Lens"
            subtitle="Each frame is a prayer. Each moment, eternal."
            centered={false}
          />
          <Link
            href="/gallery"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            Full Gallery <ChevronRight size={16} />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative break-inside-avoid cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setLightbox(img.src)}
              >
                <div
                  style={{ aspectRatio: `${img.width}/${img.height}` }}
                  className="relative"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Category tag */}
                  <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full capitalize">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={lightboxImage.width}
                height={lightboxImage.height}
                className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
              />
              <p className="text-center text-white/70 text-sm mt-3">{lightboxImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

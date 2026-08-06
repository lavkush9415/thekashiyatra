import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/data/experiences";

export const metadata: Metadata = {
  title: "Photo Gallery — TheKashiYatra Varanasi",
  description:
    "Explore the beauty of Varanasi through our photo gallery. Ghats, Ganga Aarti, temples, boat rides, and spiritual moments captured in stunning photography.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            📸 Visual Story
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Every frame a prayer. Every moment, divine.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {[...galleryImages, ...galleryImages].map((img, index) => (
            <div
              key={`${img.id}-${index}`}
              className="group break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ aspectRatio: `${img.width}/${img.height}` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs capitalize">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroImageSliderProps {
  images: string[];
  name: string;
  location: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export function HeroImageSlider({ images, name, location, rating, reviews, badge }: HeroImageSliderProps) {
  const slides = images.length > 0 ? images : ["/dh1.jpeg"];
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(goNext, 5000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  return (
    <div className="group relative h-80 sm:h-[450px] rounded-3xl overflow-hidden mb-6">
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index]}
            alt={`${name} photo ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {badge && (
        <span className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-sm font-bold rounded-full">
          {badge}
        </span>
      )}

      {slides.length > 1 && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/30 backdrop-blur-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      )}

      {slides.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={goNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">{name}</h1>
          <div className="flex items-center gap-2 text-white/80 text-sm mt-1">
            <MapPin size={14} />
            {location}
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl">
          <Star size={16} className="text-amber-400 fill-amber-400" />
          <span className="text-white font-bold">{rating}</span>
          <span className="text-white/70 text-xs">({reviews.toLocaleString()})</span>
        </div>
      </div>
    </div>
  );
}

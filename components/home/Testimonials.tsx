"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from "lucide-react";
import { testimonials } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#FF9933] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floating Om symbols */}
      {["top-10 left-10", "bottom-10 right-20", "top-1/2 right-10"].map((pos, i) => (
        <motion.div
          key={i}
          animate={{ y: [-5, 5, -5], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
          className={`absolute ${pos} text-white font-serif text-6xl pointer-events-none`}
        >
          ॐ
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <SectionHeading
            badge="What Pilgrims Say"
            title="Voices of"
            highlightedWord=" Divine Journeys"
            subtitle="Thousands of pilgrims have trusted TheKashiYatra for their sacred travels."
            light={true}
          />
        </div>

        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glass card */}
              <div className="glass rounded-4xl p-8 sm:p-12 text-white">
                {/* Quote icon */}
                <Quote size={48} className="text-amber-300/30 mb-6" />

                <p className="text-lg sm:text-xl leading-relaxed text-white/90 mb-8 font-light italic">
                  &ldquo;{current.review}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-300/50">
                        <Image
                          src={current.avatar}
                          alt={current.name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      </div>
                      {current.verified && (
                        <BadgeCheck
                          size={18}
                          className="absolute -bottom-1 -right-1 text-blue-400 fill-blue-500"
                        />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-white">{current.name}</p>
                      </div>
                      <p className="text-amber-200/70 text-sm">{current.location}</p>
                      <p className="text-white/50 text-xs mt-0.5">{current.service}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex gap-1 justify-end mb-1">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} size={16} className="text-amber-300 fill-amber-300" />
                      ))}
                    </div>
                    <p className="text-white/50 text-xs">{current.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex ? "w-8 h-2.5 bg-amber-300" : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* All avatars strip */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => { setDirection(i > currentIndex ? 1 : -1); setCurrentIndex(i); }}
              className={`transition-all duration-300 ${i === currentIndex ? "scale-110 ring-2 ring-amber-300" : "opacity-60 hover:opacity-80"} rounded-full overflow-hidden`}
            >
              <Image src={t.avatar} alt={t.name} width={36} height={36} className="rounded-full" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

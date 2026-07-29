"use client";

import { useState } from "react";
import { X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

const announcements = [
  { text: "🎉 Dev Deepawali Special: Up to 30% off on all packages!", href: "/packages", cta: "Book Now", whatsapp: true },
  { text: "🚢 New luxury boat launched — Private Ganga Cruise!", href: "/boats", cta: "View Boat", whatsapp: false },
  { text: "🕌 Maha Shivaratri packages available — Fill up fast!", href: "/packages", cta: "Reserve Now", whatsapp: true },
];

export function AnnouncementBanner() {
  const [current, setCurrent] = useState(0);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const ann = announcements[current];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-gradient-to-r from-[#8B4513] via-[#d4630a] to-[#FF9933] text-white text-xs sm:text-sm relative z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
          {/* Prev */}
          <button
            onClick={() => setCurrent((c) => (c - 1 + announcements.length) % announcements.length)}
            className="opacity-60 hover:opacity-100 transition-opacity hidden sm:block"
          >
            ‹
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="flex items-center gap-2 text-center"
            >
              <span className="text-white/90">{ann.text}</span>
              {ann.whatsapp ? (
                <a
                  href={getWhatsAppUrl(genericInquiryMessage(`this offer: ${ann.text}`))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-0.5 font-semibold text-amber-200 hover:text-white underline underline-offset-2 transition-colors"
                >
                  {ann.cta} <ChevronRight size={12} />
                </a>
              ) : (
                <Link href={ann.href} className="flex items-center gap-0.5 font-semibold text-amber-200 hover:text-white underline underline-offset-2 transition-colors">
                  {ann.cta} <ChevronRight size={12} />
                </Link>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <button
            onClick={() => setCurrent((c) => (c + 1) % announcements.length)}
            className="opacity-60 hover:opacity-100 transition-opacity hidden sm:block"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex gap-1 ml-2">
            {announcements.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white" : "bg-white/40"}`}
              />
            ))}
          </div>

          {/* Close */}
          <button
            onClick={() => setClosed(true)}
            className="absolute right-3 p-1 opacity-60 hover:opacity-100 transition-opacity"
          >
            <X size={14} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

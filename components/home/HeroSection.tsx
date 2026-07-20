"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Calendar, Users, Search, ChevronDown, Star, ArrowRight
} from "lucide-react";

const heroImages = [
  "/bg1.png",
  "/aarti.jpg",
  "/bg-111.jpg",
];

const floatingStats = [
  { icon: "🏨", value: "120+", label: "Hotels" },
  { icon: "⛵", value: "5K+", label: "Boat Rides" },
  { icon: "😊", value: "50K+", label: "Pilgrims" },
];

export function HeroSection() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [bgIndex, setBgIndex] = useState(0);

  // Auto-cycle background images
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    window.location.href = `/search${destination ? `?q=${encodeURIComponent(destination)}` : ""}`;
  };

  return (
    /* pt-16 accounts for fixed Navbar (h-16/h-20 = 80px). The AnnouncementBanner is 40px
       and is part of document flow so adds natural spacing. min-h-screen keeps it full. */
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-0">
        {heroImages.map((img, i) => (
          <motion.div
            key={img}
            initial={false}
            animate={{ opacity: i === bgIndex ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
      </div>

      {/* Floating Mandala Rings — purely decorative, pointer-events-none */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] rounded-full border border-white/5 shrink-0"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[480px] h-[480px] rounded-full border border-amber-500/10 shrink-0"
        />
      </div>

      {/* Main Content — padded top for fixed navbar (80px) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Text block */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-sm font-medium mb-6"
          >
            <span className="animate-pulse w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            Kashi — City of Light &amp; Liberation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-4"
          >
            Discover Kashi
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-300">
              Like Never Before
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6"
          >
            Where ancient spirituality meets modern comfort. Book premium hotels, sacred boat rides, and curated pilgrimage experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white/80 text-sm">4.9/5 from 50,000+ pilgrims</span>
          </motion.div>
        </div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {/* Destination */}
              <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-2xl p-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin size={12} />
                  Destination
                </div>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Varanasi, India"
                  className="w-full bg-transparent text-white placeholder-white/50 text-sm font-medium outline-none"
                />
              </div>

              {/* Check In */}
              <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-2xl p-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={12} />
                  Check In
                </div>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-white/80 text-sm font-medium outline-none [color-scheme:dark]"
                />
              </div>

              {/* Check Out */}
              <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-2xl p-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={12} />
                  Check Out
                </div>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-white/80 text-sm font-medium outline-none [color-scheme:dark]"
                />
              </div>

              {/* Guests */}
              <div className="bg-white/10 hover:bg-white/15 transition-colors rounded-2xl p-4">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Users size={12} />
                  Guests
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-white font-medium text-sm">{guests} Guests</span>
                  <button
                    onClick={() => setGuests(guests + 1)}
                    className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-3">
              <button
                onClick={handleSearch}
                className="w-full py-4 bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F] text-white rounded-2xl font-semibold text-base flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-[1.01]"
              >
                <Search size={20} />
                Search Available Experiences
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick search tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-2 mt-4"
          >
            {["Sunrise Boat Ride", "Ganga Aarti", "Heritage Hotels", "Temple Tour", "Yoga Retreat"].map((tag) => (
              <button
                key={tag}
                onClick={() => { window.location.href = `/search?q=${encodeURIComponent(tag)}`; }}
                className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 mt-14"
        >
          {floatingStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-white font-bold text-xl leading-none">{stat.value}</div>
              <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50 mt-10"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </motion.div>
      </div>

      {/* Image cycle dots — fixed to bottom of section */}
      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              i === bgIndex
                ? "w-8 h-2 bg-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Background image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

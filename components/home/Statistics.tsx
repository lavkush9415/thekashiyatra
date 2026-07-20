"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString("en-IN")}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <SectionHeading
            badge="Our Milestones"
            title="Numbers That"
            highlightedWord=" Tell Our Story"
            subtitle="A legacy of trust, devotion, and unforgettable spiritual journeys."
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="group text-center relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group-hover:-translate-y-2">
                {/* Gradient top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F]" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:to-orange-500/5 rounded-3xl transition-all duration-300 blur-xl" />

                {/* Number */}
                <p className="font-serif text-4xl sm:text-5xl font-bold gradient-text mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>

                {/* Om decoration */}
                <div className="absolute bottom-3 right-4 font-serif text-3xl text-amber-500/10 select-none">
                  ॐ
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          {[
            { icon: "🏆", label: "Best Travel Agency — Varanasi 2023" },
            { icon: "⭐", label: "TripAdvisor Excellence Award" },
            { icon: "🛡️", label: "Ministry of Tourism Certified" },
            { icon: "💯", label: "99.2% Satisfaction Rate" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

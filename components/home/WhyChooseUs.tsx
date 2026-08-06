"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Tag, Headphones, Zap, Lock, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Partners",
    description: "All hotels, boats, and service providers are personally verified by our expert team.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50 dark:bg-green-500/10",
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll match it. No questions asked.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description: "Round-the-clock assistance in Hindi and English. Never travel alone.",
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-50 dark:bg-purple-500/10",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description: "Bookings confirmed in under 60 seconds with immediate email & WhatsApp confirmation.",
    color: "from-yellow-500 to-orange-600",
    bg: "bg-yellow-50 dark:bg-yellow-500/10",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "256-bit SSL encryption with UPI, cards, net banking, and EMI options.",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50 dark:bg-red-500/10",
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Certified guides who know every temple, every ghat, and every story of Kashi.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-500/10",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <SectionHeading
            badge="Why Choose Us"
            title="TheKashiYatra"
            highlightedWord=" Promise"
            subtitle="We don't just book trips — we craft sacred journeys. Here's what sets us apart."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-7 shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${feature.color}`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon
                  size={26}
                  className={`bg-gradient-to-r ${feature.color} bg-clip-text`}
                  style={{
                    stroke: "url(#gradient)",
                  }}
                />
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF9933" />
                      <stop offset="100%" stopColor="#8B4513" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

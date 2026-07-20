"use client";

import { motion } from "framer-motion";

const trustItems = [
  { icon: "🏆", text: "Best Travel Agency — Varanasi 2023" },
  { icon: "⭐", text: "4.9/5 on Google — 8,900+ Reviews" },
  { icon: "🛡️", text: "Ministry of Tourism Certified" },
  { icon: "💳", text: "100% Secure Payments" },
  { icon: "🔄", text: "Free Cancellation Available" },
  { icon: "📞", text: "24×7 Customer Support" },
  { icon: "✈️", text: "50,000+ Happy Pilgrims" },
  { icon: "🏅", text: "TripAdvisor Excellence Award" },
];

export function TrustBar() {
  return (
    <div className="bg-amber-50 dark:bg-gray-900 border-y border-amber-100 dark:border-gray-800 py-3 overflow-hidden">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {[...trustItems, ...trustItems].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 px-8 text-sm text-gray-600 dark:text-gray-400"
          >
            <span className="text-base">{item.icon}</span>
            <span className="font-medium">{item.text}</span>
            <span className="text-amber-300 dark:text-amber-600 ml-6">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

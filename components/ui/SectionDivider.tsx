"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-300 to-amber-500" />
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-amber-500 text-xl">✦</span>
          <span className="w-2 h-2 rounded-full bg-amber-400" />
        </div>
        <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-amber-300 to-amber-500" />
      </div>
    </motion.div>
  );
}
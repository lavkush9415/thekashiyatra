"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  highlightedWord,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(centered && "text-center", className)}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {badge}
        </motion.span>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-white" : "text-gray-900 dark:text-white"
        )}
      >
        {highlightedWord ? (
          <>
            {title}
            <span className="gradient-text">{highlightedWord}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {/* Decorative divider */}
      <div className={cn("flex items-center gap-3 mt-4", centered && "justify-center")}>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
        <span className="text-amber-500 text-lg">✦</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/70" : "text-gray-500 dark:text-gray-400"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

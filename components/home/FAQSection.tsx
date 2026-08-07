"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked"
            highlightedWord=" Questions"
            subtitle="Everything you need to know before your Kashi journey begins."
          />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-amber-300 dark:border-amber-500/50 shadow-md"
                  : "border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-500/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span className={`font-medium text-sm sm:text-base pr-4 transition-colors ${
                  openIndex === index
                    ? "text-[#8B4513] dark:text-amber-400"
                    : "text-gray-800 dark:text-gray-200"
                }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-br from-[#8B4513] to-[#FF9933] text-white rotate-0"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <div className="h-px bg-amber-100 dark:bg-amber-500/20 mb-4" />
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center p-8 bg-amber-50 dark:bg-amber-500/10 rounded-3xl border border-amber-200 dark:border-amber-500/20"
        >
          <p className="text-2xl mb-2">🙋</p>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-5">
            Our pilgrimage experts are available 24×7 to help you plan your perfect Kashi journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={getWhatsAppUrl(genericInquiryMessage("planning my Kashi trip"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="tel:+919838043996"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

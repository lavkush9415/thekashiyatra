"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Car, Check, Users } from "lucide-react";
import { cabServices } from "@/lib/data/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

const vehicleImages: Record<string, string> = {
  "/dzire.jpg": "/dzire.jpg",
  "/carens.jpg": "/carens.jpg",
  "/urbania1.jpg": "/urbania1.jpg",
  "/crysta1.jpg": "/crysta1.jpg",
};

export function CabServices() {
  return (
    <section className="py-24 bg-[#FFF8F0] dark:bg-gray-950 mandala-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <SectionHeading
            badge="Get Around"
            title="Cab &"
            highlightedWord=" Transport"
            subtitle="Comfortable, safe, and reliable transportation across Varanasi and beyond."
            centered={false}
          />
          <Link
            href="/cabs"
            className="flex items-center gap-2 text-sm font-semibold text-[#FF9933] hover:text-[#8B4513] transition-colors whitespace-nowrap"
          >
            View All Services <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cabServices.map((cab, index) => (
            <motion.div
              key={cab.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={vehicleImages[cab.image] || cab.image}
                  alt={cab.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-serif text-base font-bold text-white">{cab.title}</h3>
                  <p className="text-white/70 text-xs">{cab.subtitle}</p>
                </div>
                {cab.badge && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-amber-500 text-white text-[10px] font-semibold rounded-full">
                    {cab.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Price + Vehicle */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                      ₹{cab.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-xs ml-1">/ {cab.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
                    <Users size={13} />
                    <span>{cab.vehicleType}</span>
                  </div>
                </div>

                {/* Features (show first 3) */}
                <ul className="space-y-1.5 mb-4">
                  {cab.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <Check size={13} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Now button */}
                <a
                  href={getWhatsAppUrl(
                    `Hi! I'm interested in booking the *${cab.title}* (${cab.vehicleType}) for *${cab.duration}*. Please share details and availability.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all w-full justify-center"
                >
                  <Car size={13} /> Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F] rounded-3xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=white fill-opacity=0.05%3E%3Ccircle cx=20 cy=20 r=3/%3E%3C/g%3E%3C/svg%3E')]" />
          <h3 className="font-serif text-2xl font-bold mb-2">Need a Custom Transport Plan?</h3>
          <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
            Planning a group pilgrimage or corporate event? Get a personalized quote for buses, tempo travellers, or luxury fleet.
          </p>
          <a
            href={getWhatsAppUrl(genericInquiryMessage("a custom transport plan for a group or corporate trip"))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#8B4513] rounded-full font-semibold text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Get Custom Quote <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { cabServices } from "@/lib/data/experiences";
import { Car, Phone, Check, Clock, Users } from "lucide-react";
import { getWhatsAppUrl, genericInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Cab Services in Varanasi — Dzire, Ertiga, Tempo Traveller",
  description:
    "Book reliable cabs in Varanasi. Dzire, Carens/Ertiga, 8-Seater for local sightseeing, outstation trips to Prayagraj, Ayodhya, Bodhgaya. Tour packages available.",
};

const vehicleImages: Record<string, string> = {
  "/dzire.jpg": "/dzire.jpg",
  "/carens.jpg": "/carens.jpg",
  "/urbania1.jpg": "/urbania1.jpg",
  "/crysta1.jpg": "/crysta1.jpg",
};

export default function CabsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="relative h-[420px] overflow-hidden">
  <img
    src="/cabs.jpg"
    alt="Cab Service in Varanasi"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-4">
        🚗 Get Around
      </span>

      <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
        Cab Services
      </h1>

      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="h-px w-12 bg-white/30" />
        <span className="text-white/60 text-lg">✦</span>
        <span className="h-px w-12 bg-white/30" />
      </div>

      <p className="text-white/80 text-lg max-w-2xl mx-auto">
        Safe, reliable, and comfortable transport across Varanasi and beyond.
      </p>
    </div>
  </div>
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cabServices.map((cab) => (
            <Link
  href={`/cabs/${cab.slug}`}
  key={cab.id}
  className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
>
  {/* Image */}
  <div className="relative h-52 sm:h-56 overflow-hidden">
    <img
      src={vehicleImages[cab.image] || cab.image}
      alt={cab.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="font-serif text-xl font-bold text-white">{cab.title}</h3>
      <p className="text-white/80 text-sm">{cab.subtitle}</p>
    </div>
    {cab.badge && (
      <span className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
        {cab.badge}
      </span>
    )}
  </div>

  {/* Content */}
  <div className="p-6">
    <div className="flex items-center justify-between mb-4">
      <div>
        <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
          ₹{cab.price.toLocaleString()}
        </span>
        <span className="text-gray-400 text-sm ml-1">/ {cab.duration}</span>
      </div>

      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-sm">
        <Users size={15} />
        <span>{cab.vehicleType}</span>
      </div>
    </div>

    <ul className="space-y-2 mb-6">
      {cab.features.map((feature, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
        >
          <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>


                {/* Action buttons */}
                <div className="flex flex-wrap gap-2">
                  <span className="flex-1 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                    <Car size={15} /> View Details
                  </span>
                  <a
                    href="tel:+919838043996"
                    className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl text-xs sm:text-sm hover:border-amber-300 hover:text-amber-600 transition-colors flex items-center gap-1.5"
                  >
                    <Phone size={14} /> +91 9838043996
                  </a>
                  <a
                    href="tel:+919277414831"
                    className="px-3 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl text-xs sm:text-sm hover:border-amber-300 hover:text-amber-600 transition-colors flex items-center gap-1.5"
                  >
                    <Phone size={14} /> +91 92774 14831
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Custom enquiry */}
        <div className="bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F] rounded-3xl p-8 sm:p-12 text-center text-white mt-10">
          <h2 className="font-serif text-3xl font-bold mb-3">Need a Custom Fleet?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Group pilgrimages, corporate events, or airport-to-ghats for your entire family. Get a custom quote instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl(genericInquiryMessage("a custom fleet or group booking quote"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#8B4513] rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              💬 WhatsApp Now
            </a>
            <a href="tel:+919838043996" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              📞 +91 9838043996
            </a>
            <a href="tel:+919277414831" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              📞 +91 92774 14831
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
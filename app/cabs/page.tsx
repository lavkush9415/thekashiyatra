import type { Metadata } from "next";
import { cabServices } from "@/lib/data/experiences";
import { Car, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Cab Services in Varanasi — Airport Pickup, Sightseeing & Outstation",
  description:
    "Book reliable cabs in Varanasi. Airport transfers, local sightseeing, outstation trips to Sarnath, Prayagraj, Ayodhya. Tempo traveller & luxury cars available.",
};

export default function CabsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="bg-gradient-to-br from-gray-900 to-[#1F2937] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            🚗 Get Around
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Cab Services</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-white/20" />
            <span className="text-white/40 text-lg">✦</span>
            <span className="h-px w-12 bg-white/20" />
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Safe, reliable, and comfortable transport across Varanasi and beyond.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cabServices.map((cab, index) => (
            <div
              key={cab.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-7 shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cab.color}`} />
              <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${cab.color} opacity-5 group-hover:opacity-10 transition-opacity`} />

              <div className="text-5xl mb-5">{cab.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-xl mb-2">{cab.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{cab.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {cab.vehicles.map((v) => (
                  <span key={v} className="px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-full border border-gray-200 dark:border-gray-600">
                    {v}
                  </span>
                ))}
              </div>

              <p className={`font-bold text-lg bg-gradient-to-r ${cab.color} bg-clip-text text-transparent mb-5`}>
                {cab.price}
              </p>

              <div className="flex gap-2">
                <button className={`flex-1 py-2.5 bg-gradient-to-r ${cab.color} text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2`}>
                  <Car size={15} /> Book Now
                </button>
                <a
                  href="tel:+919876543210"
                  className="px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-xl text-sm hover:border-amber-300 hover:text-amber-600 transition-colors flex items-center gap-1.5"
                >
                  <Phone size={14} /> Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom enquiry */}
        <div className="bg-gradient-to-r from-[#8B4513] via-[#FF9933] to-[#FFD54F] rounded-3xl p-8 sm:p-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-3">Need a Custom Fleet?</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Group pilgrimages, corporate events, or airport-to-ghats for your entire family. Get a custom quote instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919876543210" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#8B4513] rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
              💬 WhatsApp Now
            </a>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              📞 +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

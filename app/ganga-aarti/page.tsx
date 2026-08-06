import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/lib/data/experiences";
import { Star, Clock, Check, ArrowLeft, Info, Calendar, AlertCircle, HelpCircle } from "lucide-react";
import { getWhatsAppUrl, aartiBookingMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Ganga Aarti Varanasi — Timings, Seating & Booking",
  description:
    "Witness the spectacular Ganga Aarti at Dashashwamedh Ghat, Varanasi. Best timings, seating information, included services, and WhatsApp booking.",
};

const aartiFaqs = [
  {
    question: "What time does the Ganga Aarti start?",
    answer: "The Ganga Aarti at Dashashwamedh Ghat starts at 6:30 PM in winter and 7:00 PM in summer. It lasts approximately 45 minutes. We recommend arriving 30 minutes early for the best viewing spot.",
  },
  {
    question: "Is the Ganga Aarti free to attend?",
    answer: "Yes, the Ganga Aarti is completely free to attend from the ghat. Premium viewing spots and boat viewing options are available at an additional cost.",
  },
  {
    question: "Can I watch the Aarti from a boat?",
    answer: "Yes! Watching the Aarti from a boat on the Ganga is a magical experience. Our Ganga Aarti Evening Ride offers the best vantage point on the water.",
  },
  {
    question: "What should I bring?",
    answer: "Bring a camera (no flash during the ceremony), modest clothing, and comfortable shoes. You may also bring flowers or diyas for offering.",
  },
];

export default function GangaAartiPage() {
  const aarti = experiences.find((e) => e.slug === "ganga-aarti-ceremony")!;

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <Link href="/experiences" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Experiences
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Hero */}
            <div className="relative h-80 sm:h-[450px] rounded-3xl overflow-hidden mb-6">
              <Image src={aarti.image} alt={aarti.name} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-4 left-4 text-5xl">{aarti.icon}</div>
              {aarti.badge && <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-gray-700 text-xs font-bold rounded-full">{aarti.badge}</span>}
              <div className="absolute bottom-5 left-5 right-5">
                <h1 className="font-serif text-3xl font-bold text-white mb-2">{aarti.name}</h1>
                <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><Clock size={14} />{aarti.duration}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} />{aarti.timing}</span>
                  <span className="flex items-center gap-1.5"><Star size={14} className="text-amber-400 fill-amber-400" />{aarti.rating} ({aarti.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {aarti.gallery.map((img, i) => (
                  <div key={i} className="relative h-32 rounded-xl overflow-hidden">
                    <Image src={img} alt={`${aarti.name} photo ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">About the Ganga Aarti</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{aarti.fullDescription}</p>
            </div>

            {/* Best Timings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock size={16} className="text-amber-500" /> Best Timings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Winter (Oct - Mar)", value: "6:30 PM - 7:15 PM" },
                  { label: "Summer (Apr - Sep)", value: "7:00 PM - 7:45 PM" },
                  { label: "Arrival Time", value: "30 minutes before start" },
                  { label: "Duration", value: "45 minutes" },
                ].map((info) => (
                  <div key={info.label} className="px-4 py-3 bg-amber-50/60 dark:bg-amber-500/5 rounded-xl border border-amber-100 dark:border-amber-500/10">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{info.label}</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seating Information */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Info size={16} className="text-amber-500" /> Seating Information
              </h2>
              <ul className="space-y-2">
                {[
                  "Free seating available on the ghat steps — arrive early for the best view",
                  "Premium paid seating available closer to the ceremony area",
                  "Boat viewing offers the most spectacular vantage point on the water",
                  "Wheelchair accessible viewing areas available on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={14} className="text-green-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Included Services */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Check size={16} className="text-green-500" /> Included Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aarti.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={15} className="text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <AlertCircle size={16} className="text-amber-500" /> Important Notes
              </h2>
              <ul className="space-y-2">
                {aarti.importantNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <Info size={14} className="text-amber-500 shrink-0 mt-0.5" /> {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <HelpCircle size={16} className="text-amber-500" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {aartiFaqs.map((faq) => (
                  <div key={faq.question} className="p-4 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{faq.question}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-luxury border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <p className="font-serif text-4xl font-bold text-orange-500">
                  {aarti.price === 0 ? "Free" : `₹${aarti.price}`}
                </p>
                <p className="text-xs text-gray-500">per person</p>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Date</label>
                  <input type="date" className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Number of Persons</label>
                  <select className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                      <option key={n}>{n} Person{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(aartiBookingMessage({ packageName: aarti.name, price: aarti.price }))}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all mb-3"
              >
                Book Ganga Aarti
              </a>
              <a
                href={getWhatsAppUrl(aartiBookingMessage({ packageName: aarti.name, price: aarti.price }))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-green-500 text-green-600 dark:text-green-400 rounded-2xl text-sm font-medium hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp Inquiry
              </a>

              <div className="mt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-amber-500" />
                  Duration: {aarti.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-amber-500" />
                  Timing: {aarti.timing}
                </div>
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-amber-500" />
                  {aarti.rating} rating ({aarti.reviews.toLocaleString()} reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
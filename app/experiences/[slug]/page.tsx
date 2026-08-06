import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/lib/data/experiences";
import { formatPrice } from "@/lib/utils";
import { Star, Clock, Check, ArrowLeft, Info, Calendar, AlertCircle } from "lucide-react";
import { getWhatsAppUrl, experienceBookingMessage, aartiBookingMessage, isGangaAarti } from "@/lib/whatsapp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) return { title: "Experience Not Found" };
  return {
    title: `${exp.name} — Spiritual Experience Varanasi`,
    description: exp.description,
  };
}

export async function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) notFound();

  const whatsappMessage = isGangaAarti(exp.name)
    ? aartiBookingMessage({ packageName: exp.name, price: exp.price })
    : experienceBookingMessage({ experienceName: exp.name, price: exp.price });

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
              <Image src={exp.image} alt={exp.name} fill className="object-cover" priority />
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient} opacity-30`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-4 left-4 text-5xl">{exp.icon}</div>
              {exp.badge && <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-gray-700 text-xs font-bold rounded-full">{exp.badge}</span>}
              <div className="absolute bottom-5 left-5 right-5">
                <h1 className="font-serif text-3xl font-bold text-white mb-2">{exp.name}</h1>
                <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><Clock size={14} />{exp.duration}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} />{exp.timing}</span>
                  <span className="flex items-center gap-1.5"><Star size={14} className="text-amber-400 fill-amber-400" />{exp.rating} ({exp.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {exp.gallery.map((img, i) => (
                  <div key={i} className="relative h-32 rounded-xl overflow-hidden">
                    <Image src={img} alt={`${exp.name} photo ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">About This Experience</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.fullDescription}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Highlights</h2>
              <ul className="space-y-2">
                {exp.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <Star size={14} className="text-amber-500 shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Check size={16} className="text-green-500" /> What's Included
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exp.includes.map((item) => (
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
                {exp.importantNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <Info size={14} className="text-amber-500 shrink-0 mt-0.5" /> {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Calendar size={16} className="text-amber-500" /> Booking Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.bookingInfo}</p>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-luxury border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <p className={`font-serif text-4xl font-bold ${exp.color}`}>
                  {exp.price === 0 ? "Free" : formatPrice(exp.price)}
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
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all mb-3"
              >
                Book This Experience
              </a>
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-green-500 text-green-600 dark:text-green-400 rounded-2xl text-sm font-medium hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp Inquiry
              </a>

              <div className="mt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-amber-500" />
                  Duration: {exp.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-amber-500" />
                  Timing: {exp.timing}
                </div>
                <div className="flex items-center gap-2">
                  <Star size={12} className="text-amber-500" />
                  {exp.rating} rating ({exp.reviews.toLocaleString()} reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
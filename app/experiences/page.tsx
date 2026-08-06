import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/lib/data/experiences";
import { formatPrice } from "@/lib/utils";
import { Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Spiritual Experiences in Varanasi — Ganga Aarti, Puja, Yoga & More",
  description:
    "Book unique spiritual experiences in Kashi. Ganga Aarti viewing, Rudrabhishek puja, Pind Daan, yoga at Assi Ghat, Subah-e-Banaras & heritage walks.",
};

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="bg-gradient-to-br from-purple-900 via-[#8B4513] to-[#FF9933] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 text-9xl font-serif text-white flex items-center justify-center pointer-events-none">ॐ</div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            🙏 Sacred Encounters
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Spiritual Experiences</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-white/40" />
            <span className="text-white/70 text-lg">✦</span>
            <span className="h-px w-12 bg-white/40" />
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Immerse yourself in the living traditions that have defined Kashi for over 3,000 years.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <Link
              href={exp.slug === "ganga-aarti-ceremony" ? "/ganga-aarti" : `/experiences/${exp.slug}`}
              key={exp.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.bgGradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3 text-3xl">{exp.icon}</div>
                {exp.badge && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 text-xs font-bold text-gray-700 rounded-full">
                    {exp.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <Star size={12} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">{exp.rating}</span>
                  <span className="text-gray-400 text-xs">({exp.reviews.toLocaleString()})</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1.5 group-hover:text-[#FF9933] transition-colors">{exp.name}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1"><Clock size={10} />{exp.duration}</span>
                  <span className="capitalize px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full">{exp.category}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">{exp.description}</p>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-lg ${exp.color}`}>
                    {exp.price === 0 ? "Free" : formatPrice(exp.price)}
                  </p>
                  <span className="px-4 py-2 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

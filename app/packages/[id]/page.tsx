import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data/packages";
import { formatPrice } from "@/lib/utils";
import { Star, Clock, Check, ArrowLeft } from "lucide-react";
import { getWhatsAppUrl, packageBookingMessage } from "@/lib/whatsapp";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === Number(id));
  if (!pkg) return { title: "Package Not Found" };
  return {
    title: `${pkg.title} — Varanasi Tour Package`,
    description: pkg.subtitle,
  };
}

export async function generateStaticParams() {
  return packages.map((p) => ({ id: String(p.id) }));
}

export default async function PackageDetailPage({ params }: Props) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === Number(id));
  if (!pkg) notFound();

  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <Link href="/packages" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Packages
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Hero */}
            <div className="relative h-80 sm:h-[450px] rounded-3xl overflow-hidden mb-6">
              <Image src={pkg.image} alt={pkg.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {pkg.badge && <span className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white font-bold rounded-full">{pkg.badge}</span>}
              {discount > 0 && <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">{discount}% OFF</span>}
              <div className="absolute bottom-5 left-5 right-5">
                <h1 className="font-serif text-3xl font-bold text-white mb-2">{pkg.title}</h1>
                <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><Clock size={14} />{pkg.duration}</span>
                  <span className="flex items-center gap-1.5"><Star size={14} className="text-amber-400 fill-amber-400" />{pkg.rating} ({pkg.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">Package Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pkg.subtitle}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Highlights</h2>
              <ul className="space-y-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-amber-500">✦</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Includes</h2>
              <ul className="space-y-2">
                {pkg.services.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={14} className="text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-luxury border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <p className="text-xs text-gray-400 line-through">{formatPrice(pkg.originalPrice)}/person</p>
                <p className="font-serif text-4xl font-bold gradient-text">{formatPrice(pkg.price)}</p>
                <p className="text-xs text-gray-500">per person, all inclusive</p>
                {discount > 0 && <span className="inline-block mt-2 px-3 py-1 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold rounded-full">Save {discount}%</span>}
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Travel Date</label>
                  <input type="date" className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Number of Persons</label>
                  <select className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500">
                    {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                      <option key={n}>{n} Person{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>
              </div>

              <a
                href={getWhatsAppUrl(packageBookingMessage({ packageName: pkg.title, price: pkg.price }))}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all mb-3"
              >
                Book This Package
              </a>
              <a
                href={getWhatsAppUrl(packageBookingMessage({ packageName: pkg.title, price: pkg.price }))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-green-500 text-green-600 dark:text-green-400 rounded-2xl text-sm font-medium hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors"
              >
                💬 Customise This Package
              </a>

              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span className="capitalize">{pkg.category}</span> category
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                <Check size={12} />
                Free cancellation up to 48 hours before departure
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
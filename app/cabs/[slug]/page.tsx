import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cabServices } from "@/lib/data/experiences";
import { formatPrice } from "@/lib/utils";
import { Check, ArrowLeft, Users, Car, ShieldCheck, User, MapPin } from "lucide-react";
import { getWhatsAppUrl, cabBookingMessage } from "@/lib/whatsapp";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cab = cabServices.find((c) => c.slug === slug);
  if (!cab) return { title: "Cab Not Found" };
  return {
    title: `${cab.title} — Cab Service Varanasi`,
    description: cab.description,
  };
}

export async function generateStaticParams() {
  return cabServices.map((c) => ({ slug: c.slug }));
}

export default async function CabDetailPage({ params }: Props) {
  const { slug } = await params;
  const cab = cabServices.find((c) => c.slug === slug);
  if (!cab) notFound();

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <Link href="/cabs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Cab Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Hero */}
            <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden mb-6">
              <Image src={cab.image} alt={cab.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {cab.badge && <span className="absolute top-4 left-4 px-4 py-1.5 bg-amber-500 text-white font-bold rounded-full">{cab.badge}</span>}
              <div className="absolute bottom-5 left-5 right-5">
                <h1 className="font-serif text-3xl font-bold text-white mb-2">{cab.title}</h1>
                <p className="text-white/80 text-sm">{cab.subtitle}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-6">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Vehicle Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cab.gallery.map((img, i) => (
                  <div key={i} className="relative h-32 rounded-xl overflow-hidden">
                    <Image src={img} alt={`${cab.title} photo ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3">About This Vehicle</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{cab.description}</p>
            </div>

            {/* Vehicle Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {[
                { label: "Vehicle Type", value: cab.vehicleType },
                { label: "Seating Capacity", value: cab.seatingCapacity },
                { label: "Duration", value: cab.duration },
              ].map((info) => (
                <div key={info.label} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{info.label}</p>
                  <p className="text-amber-600 dark:text-amber-400 font-semibold text-sm">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Route Pricing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin size={16} className="text-amber-500" /> Route Pricing
              </h2>
              <div className="space-y-2">
                {cab.routePricing.map((rp) => (
                  <div key={rp.route} className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{rp.route}</span>
                    <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{rp.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included Services */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Check size={16} className="text-green-500" /> Included Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cab.includedServices.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <Check size={15} className="text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Driver Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <User size={16} className="text-amber-500" /> Driver Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{cab.driverInfo}</p>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-luxury border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-6">
                <p className="font-serif text-4xl font-bold gradient-text">{formatPrice(cab.price)}</p>
                <p className="text-xs text-gray-500">per {cab.duration.toLowerCase()}</p>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Travel Date</label>
                  <input type="date" className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Pickup Location</label>
                  <input type="text" placeholder="Hotel / Airport / Station" className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500" />
                </div>
              </div>

              <a
                href={getWhatsAppUrl(cabBookingMessage({ cabName: cab.title, price: cab.price }))}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all mb-3"
              >
                Book Now
              </a>
              <a
                href={getWhatsAppUrl(cabBookingMessage({ cabName: cab.title, price: cab.price }))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-green-500 text-green-600 dark:text-green-400 rounded-2xl text-sm font-medium hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors"
              >
                💬 WhatsApp Inquiry
              </a>

              <div className="mt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Users size={12} className="text-amber-500" />
                  {cab.seatingCapacity}
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} className="text-green-500" />
                  Verified & insured vehicles
                </div>
                <div className="flex items-center gap-2">
                  <Car size={12} className="text-amber-500" />
                  {cab.vehicleType}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
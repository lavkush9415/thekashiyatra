import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { boats } from "@/lib/data/boats";
import { formatPrice } from "@/lib/utils";
import { Star, Clock, Users, Check, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const boat = boats.find((b) => b.id === id);
  if (!boat) return { title: "Boat Not Found" };
  return {
    title: `${boat.name} — Ganga Boat Ride Varanasi`,
    description: boat.description,
  };
}

export async function generateStaticParams() {
  return boats.map((b) => ({ id: b.id }));
}

export default async function BoatDetailPage({ params }: Props) {
  const { id } = await params;
  const boat = boats.find((b) => b.id === id);
  if (!boat) notFound();

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/boats" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Boats
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden mb-6">
              <Image
                src={boat.image}
                alt={boat.name}
                fill
                className="object-cover brightness-80"
                priority
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${boat.color} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              {boat.badge && (
                <span className="absolute top-4 left-4 px-4 py-1.5 bg-amber-500 text-white font-bold rounded-full">{boat.badge}</span>
              )}
              <div className="absolute bottom-5 left-5 right-5">
                <h1 className="font-serif text-3xl font-bold text-white mb-2">{boat.name}</h1>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span className="flex items-center gap-1"><Clock size={14} />{boat.timing}</span>
                  <span className="flex items-center gap-1"><Star size={14} className="text-amber-400 fill-amber-400" />{boat.rating}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-700">
              <h2 className="font-semibold text-white mb-3">About This Ride</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{boat.description}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {[
                { label: "Duration", value: boat.duration },
                { label: "Timing", value: boat.timing },
                { label: "Capacity", value: `${boat.capacity} persons` },
                { label: "Type", value: boat.type },
                { label: "Rating", value: `${boat.rating}/5` },
                { label: "Reviews", value: boat.reviews.toLocaleString() },
              ].map((info) => (
                <div key={info.label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-500 text-xs mb-1">{info.label}</p>
                  <p className="text-amber-400 font-semibold text-sm capitalize">{info.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="font-semibold text-white mb-4">What&apos;s Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {boat.includes.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-400 text-sm">
                    <Check size={15} className="text-green-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-800 rounded-3xl p-6 border border-gray-700 shadow-2xl">
              <div className="text-center mb-6">
                <p className="font-serif text-4xl font-bold text-amber-400">{formatPrice(boat.price)}</p>
                <p className="text-gray-500 text-xs">{boat.pricePerPerson ? "per person" : "per boat"}</p>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-1 block">Date</label>
                  <input type="date" className="w-full px-3 py-2.5 border border-gray-600 rounded-xl text-sm bg-gray-700 text-gray-200 focus:outline-none focus:border-amber-500 [color-scheme:dark]" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-300 mb-1 block">Persons</label>
                  <select className="w-full px-3 py-2.5 border border-gray-600 rounded-xl text-sm bg-gray-700 text-gray-200 focus:outline-none focus:border-amber-500">
                    {Array.from({ length: boat.capacity }, (_, i) => i + 1).map(n => (
                      <option key={n}>{n} Person{n > 1 ? "s" : ""}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] transition-all mb-3">
                Book Now
              </button>

              <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-2 w-full py-3 border border-green-500 text-green-400 rounded-2xl text-sm font-medium hover:bg-green-500/10 transition-colors">
                💬 WhatsApp Inquiry
              </a>

              <div className="mt-4 text-xs text-gray-500 text-center">
                <Check size={12} className="inline text-green-400 mr-1" />
                Free cancellation up to 24 hours before
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

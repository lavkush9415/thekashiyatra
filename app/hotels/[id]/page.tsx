import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { hotels } from "@/lib/data/hotels";
import { ArrowLeft } from "lucide-react";
import { HotelDetailClient } from "@/components/hotels/HotelDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const hotel = hotels.find((h) => h.slug === id);
  if (!hotel) return { title: "Hotel Not Found" };
  return {
    title: `${hotel.name} — Varanasi Hotel Booking`,
    description: hotel.description,
  };
}

export async function generateStaticParams() {
  return hotels.map((h) => ({ id: h.slug }));
}

export default async function HotelDetailPage({ params }: Props) {
  const { id } = await params;
  const hotel = hotels.find((h) => h.slug === id);
  if (!hotel) notFound();

  return (
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-gray-950 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <span>/</span>
          <Link href="/hotels" className="hover:text-amber-600">Hotels</Link>
          <span>/</span>
          <span className="text-[#8B4513] dark:text-amber-400 font-medium">{hotel.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Link href="/hotels" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Hotels
        </Link>

        <HotelDetailClient hotel={hotel} />
      </div>
    </div>
  );
}

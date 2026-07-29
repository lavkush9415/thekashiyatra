"use client";

import { useMemo, useState } from "react";
import { Star, MapPin, Clock, Check, Users, ShieldCheck, CreditCard, Baby, CalendarX2 } from "lucide-react";
import { Hotel, RoomType } from "@/lib/data/hotels";
import { formatPrice } from "@/lib/utils";
import { useToast } from "@/components/providers/ToastProvider";
import { HeroImageSlider } from "@/components/hotels/HeroImageSlider";
import { RoomTypeCard } from "@/components/hotels/RoomTypeCard";
import { RoomGalleryLightbox } from "@/components/hotels/RoomGalleryLightbox";
import { openWhatsAppBooking, getWhatsAppUrl, hotelBookingMessage } from "@/lib/whatsapp";

interface GalleryState {
  open: boolean;
  images: string[];
  roomName: string;
}

const policyIcons = {
  cancellation: CalendarX2,
  payment: CreditCard,
  children: Baby,
} as const;

const policyLabels: Record<keyof typeof policyIcons, string> = {
  cancellation: "Cancellation Policy",
  payment: "Payment",
  children: "Children & Extra Beds",
};

export function HotelDetailClient({ hotel }: { hotel: Hotel }) {
  const { showToast } = useToast();

  const [selectedRoomType, setSelectedRoomType] = useState(hotel.roomTypes[0]?.type ?? "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [gallery, setGallery] = useState<GalleryState>({ open: false, images: [], roomName: "" });

  const selectedRoom = useMemo(
    () => hotel.roomTypes.find((r) => r.type === selectedRoomType) ?? hotel.roomTypes[0],
    [hotel.roomTypes, selectedRoomType]
  );

  const openGallery = (room: RoomType) => {
    setGallery({ open: true, images: room.images, roomName: room.type });
  };

  const handleBookNow = (room: RoomType) => {
    setSelectedRoomType(room.type);

    openWhatsAppBooking(
      hotelBookingMessage({ hotelName: hotel.name, roomType: room.type, price: room.price })
    );

    showToast(`💬 Opening WhatsApp to book ${room.type} at ${hotel.name}...`, "success");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Details */}
      <div className="lg:col-span-2">
        <HeroImageSlider
          images={hotel.images}
          name={hotel.name}
          location={hotel.location}
          rating={hotel.rating}
          reviews={hotel.reviews}
          badge={hotel.badge}
        />

        {/* Description */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">About This Property</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{hotel.fullDescription}</p>
        </div>

        {/* Room Types */}
        <div className="mb-4">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">Choose Your Room</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {hotel.roomTypes.length} room type{hotel.roomTypes.length > 1 ? "s" : ""} available
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {hotel.roomTypes.map((room, i) => (
              <RoomTypeCard
                key={room.type}
                room={room}
                index={i}
                isSelected={room.type === selectedRoomType}
                onSelect={() => setSelectedRoomType(room.type)}
                onViewPhotos={() => openGallery(room)}
                onBookNow={() => handleBookNow(room)}
              />
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Amenities</h2>
          <div className="flex flex-wrap gap-3">
            {hotel.amenities.map((a) => (
              <span
                key={a}
                className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm rounded-xl border border-amber-200 dark:border-amber-500/20"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <ShieldCheck size={18} className="text-amber-500" /> Hotel Policies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className="px-4 py-3 bg-amber-50/60 dark:bg-amber-500/5 rounded-xl border border-amber-100 dark:border-amber-500/10">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Check-In</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{hotel.policies.checkIn}</p>
            </div>
            <div className="px-4 py-3 bg-amber-50/60 dark:bg-amber-500/5 rounded-xl border border-amber-100 dark:border-amber-500/10">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Check-Out</p>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{hotel.policies.checkOut}</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {(Object.keys(policyIcons) as (keyof typeof policyIcons)[]).map((key) => {
              const Icon = policyIcons[key];
              return (
                <li key={key} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <Icon size={15} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{policyLabels[key]}: </span>
                    {hotel.policies[key]}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Nearby Attractions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Nearby Attractions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hotel.nearbyAttractions.map((a) => (
              <div
                key={a.name}
                className="flex items-center justify-between gap-3 px-4 py-3 bg-amber-50/60 dark:bg-amber-500/5 rounded-xl border border-amber-100 dark:border-amber-500/10"
              >
                <span className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <MapPin size={14} className="text-amber-500 shrink-0" />
                  <span>
                    {a.name}
                    <span className="block text-xs text-gray-400">{a.type}</span>
                  </span>
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{a.distance}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Reviews */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Guest Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hotel.guestReviews.map((r) => (
              <div key={`${r.name}-${r.date}`} className="p-4 bg-gray-50 dark:bg-gray-900/40 rounded-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8B4513] to-[#FF9933] flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.city} · {r.date}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Star size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{r.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{r.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Map */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Location</h2>
          <div className="rounded-xl overflow-hidden h-72 border border-gray-100 dark:border-gray-700">
            <iframe
              title={`Map showing ${hotel.name}`}
              src={`https://www.google.com/maps?q=${hotel.coordinates.lat},${hotel.coordinates.lng}&z=15&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Right: Booking Card */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-luxury border border-gray-100 dark:border-gray-700">
          {selectedRoom && (
            <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-500/10 rounded-xl border border-amber-100 dark:border-amber-500/20">
              <p className="text-xs text-gray-500 dark:text-gray-400">Selected Room</p>
              <p className="text-sm font-semibold text-[#8B4513] dark:text-amber-400">{selectedRoom.type}</p>
            </div>
          )}

          <div className="text-center mb-6">
            <p className="font-serif text-4xl font-bold gradient-text">
              {formatPrice(selectedRoom?.price ?? hotel.pricePerNight)}
            </p>
            <p className="text-xs text-gray-500">per night, including taxes</p>
          </div>

          <div className="space-y-3 mb-5">
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Check-In</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Check-Out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl text-sm bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Guest{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => selectedRoom && handleBookNow(selectedRoom)}
            disabled={!selectedRoom}
            className="w-full py-4 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-[1.02] transition-all mb-3 disabled:opacity-50 disabled:pointer-events-none"
          >
            Book Now
          </button>

          <a
            href={getWhatsAppUrl(
              hotelBookingMessage({
                hotelName: hotel.name,
                roomType: selectedRoom?.type,
                price: selectedRoom?.price ?? hotel.pricePerNight,
              })
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 border border-green-500 text-green-600 dark:text-green-400 rounded-2xl text-sm font-medium hover:bg-green-50 dark:hover:bg-green-500/10 transition-colors"
          >
            💬 Enquire on WhatsApp
          </a>

          <div className="mt-4 space-y-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-amber-500" />
              Check-in: {hotel.policies.checkIn} · Check-out: {hotel.policies.checkOut}
            </div>
            {selectedRoom && (
              <div className="flex items-center gap-2">
                <Users size={12} className="text-amber-500" />
                {selectedRoom.capacity}
              </div>
            )}
            <div className="flex items-center gap-2 text-green-600">
              <Check size={12} />
              {hotel.policies.cancellation}
            </div>
          </div>
        </div>
      </div>

      <RoomGalleryLightbox
        images={gallery.images}
        roomName={gallery.roomName}
        open={gallery.open}
        onOpenChange={(open) => setGallery((g) => ({ ...g, open }))}
      />
    </div>
  );
}

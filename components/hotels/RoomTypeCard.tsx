"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Maximize2, ImageIcon, Check } from "lucide-react";
import { RoomType } from "@/lib/data/hotels";
import { formatPrice, cn } from "@/lib/utils";

interface RoomTypeCardProps {
  room: RoomType;
  isSelected: boolean;
  index: number;
  onSelect: () => void;
  onViewPhotos: () => void;
  onBookNow: () => void;
}

export function RoomTypeCard({ room, isSelected, index, onSelect, onViewPhotos, onBookNow }: RoomTypeCardProps) {
  const cover = room.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      onClick={onSelect}
      className={cn(
        "group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 border cursor-pointer",
        isSelected
          ? "border-amber-500 ring-2 ring-amber-500/40"
          : "border-gray-100 dark:border-gray-700"
      )}
    >
      <div className="relative h-56 overflow-hidden">
        {cover && (
          <Image
            src={cover}
            alt={room.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        {room.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white text-xs font-bold rounded-full">
            {room.badge}
          </span>
        )}
        {room.images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewPhotos();
            }}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full hover:bg-black/70 transition-colors"
          >
            <ImageIcon size={13} />
            {room.images.length} Photos
          </button>
        )}
        {isSelected && (
          <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white">
            <Check size={14} />
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#FF9933] transition-colors">
            {room.name}
          </h3>
        </div>

        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <Users size={12} /> {room.capacity}
          </span>
          {room.size && (
            <span className="flex items-center gap-1">
              <Maximize2 size={12} /> {room.size}
            </span>
          )}
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-4 line-clamp-2">
          {room.description}
        </p>

        <div className="flex gap-1.5 mb-4 flex-wrap">
          {room.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="px-2 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs rounded-full"
            >
              {a}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-500 text-xs rounded-full">
              +{room.amenities.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700 mb-4">
          <div>
            {room.originalPrice && room.originalPrice > room.price && (
              <p className="text-xs text-gray-400 line-through">{formatPrice(room.originalPrice)}</p>
            )}
            <p className="font-bold text-[#8B4513] dark:text-amber-400 text-lg">
              {formatPrice(room.price)}
              <span className="text-xs font-normal text-gray-400">/night</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewPhotos();
            }}
            className="py-2.5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-semibold hover:border-amber-400 hover:text-amber-600 transition-colors"
          >
            View Photos
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
              onBookNow();
            }}
            className="py-2.5 bg-gradient-to-r from-[#8B4513] to-[#FF9933] text-white rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

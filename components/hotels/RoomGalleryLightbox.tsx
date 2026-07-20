"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoomGalleryLightboxProps {
  images: string[];
  roomName: string;
  open: boolean;
  initialIndex?: number;
  onOpenChange: (open: boolean) => void;
}

export function RoomGalleryLightbox({
  images,
  roomName,
  open,
  initialIndex = 0,
  onOpenChange,
}: RoomGalleryLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setIndex(initialIndex);
      setZoomed(false);
    }
  }

  const goNext = () => {
    setZoomed(false);
    setIndex((i) => (i + 1) % images.length);
  };

  const goPrev = () => {
    setZoomed(false);
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length]);

  if (images.length === 0) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/90 z-[100] data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className="fixed inset-0 z-[101] flex flex-col outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">{roomName} photo gallery</Dialog.Title>

          {/* Top bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white shrink-0">
            <div>
              <p className="font-serif text-lg sm:text-xl font-semibold">{roomName}</p>
              <p className="text-xs text-white/60">
                {index + 1} / {images.length}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomed((z) => !z)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label={zoomed ? "Zoom out" : "Zoom in"}
              >
                {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
              </button>
              <Dialog.Close asChild>
                <button
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close gallery"
                >
                  <X size={18} />
                </button>
              </Dialog.Close>
            </div>
          </div>

          {/* Main image */}
          <div className="relative flex-1 flex items-center justify-center overflow-hidden px-2 sm:px-16">
            {images.length > 1 && (
              <button
                onClick={goPrev}
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                drag={zoomed ? false : "x"}
                dragElastic={0.2}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) goNext();
                  else if (info.offset.x > 80) goPrev();
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative w-full max-w-4xl h-[45vh] sm:h-[65vh] touch-pan-y",
                  zoomed ? "cursor-zoom-out" : "cursor-grab active:cursor-grabbing"
                )}
                onClick={() => setZoomed((z) => !z)}
              >
                <Image
                  src={images[index]}
                  alt={`${roomName} photo ${index + 1}`}
                  fill
                  className={cn(
                    "object-contain transition-transform duration-300",
                    zoomed && "scale-150"
                  )}
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <button
                onClick={goNext}
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-colors z-10"
                aria-label="Next photo"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>

          {/* Mobile prev/next */}
          {images.length > 1 && (
            <div className="flex sm:hidden justify-between px-6 pb-2 shrink-0">
              <button
                onClick={goPrev}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                aria-label="Previous photo"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
                aria-label="Next photo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="shrink-0 px-4 sm:px-6 pb-6 pt-2">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={img + i}
                    onClick={() => {
                      setZoomed(false);
                      setIndex(i);
                    }}
                    className={cn(
                      "relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all",
                      i === index ? "border-amber-500 ring-2 ring-amber-500/40" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                    aria-label={`View photo ${i + 1}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

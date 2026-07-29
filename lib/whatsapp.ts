const WHATSAPP_NUMBER = "919838043996";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Single reusable trigger for every booking CTA that isn't a plain <a> link. */
export function openWhatsAppBooking(message: string): void {
  if (typeof window === "undefined") return;
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function isGangaAarti(name: string): boolean {
  return name.toLowerCase().includes("aarti");
}

export function hotelBookingMessage(params: { hotelName: string; roomType?: string; price: number }): string {
  const { hotelName, roomType, price } = params;
  return [
    "Hello,",
    "",
    "I want to book a room.",
    "",
    `Hotel: ${hotelName}`,
    `Room: ${roomType ?? "Please suggest availability"}`,
    `Price: ₹${price}/night`,
    "",
    "Please share availability and booking details.",
  ].join("\n");
}

export function packageBookingMessage(params: { packageName: string; price: number }): string {
  return [
    "Hello,",
    "",
    "I want to book this tour package.",
    "",
    `Package: ${params.packageName}`,
    `Price: ₹${params.price}`,
    "",
    "Please share itinerary and availability.",
  ].join("\n");
}

export function cabBookingMessage(params: { cabName: string; price: string | number }): string {
  const priceLabel = typeof params.price === "number" ? `₹${params.price}` : params.price;
  return [
    "Hello,",
    "",
    "I want to book a cab.",
    "",
    `Cab Type: ${params.cabName}`,
    `Price: ${priceLabel}`,
    "",
    "Please share availability.",
  ].join("\n");
}

export function boatBookingMessage(params: { boatName: string; price: number }): string {
  return [
    "Hello,",
    "",
    "I want to book a boat ride.",
    "",
    `Boat: ${params.boatName}`,
    `Price: ₹${params.price}`,
    "",
    "Please share available timings.",
  ].join("\n");
}

export function aartiBookingMessage(params: { packageName: string; price: number }): string {
  return [
    "Hello,",
    "",
    "I want to book Ganga Aarti.",
    "",
    `Package: ${params.packageName}`,
    `Price: ₹${params.price}`,
    "",
    "Please share available slots.",
  ].join("\n");
}

export function experienceBookingMessage(params: { experienceName: string; price: number }): string {
  return [
    "Hello,",
    "",
    "I want to book this experience.",
    "",
    `Experience: ${params.experienceName}`,
    `Price: ${params.price === 0 ? "Free" : `₹${params.price}`}`,
    "",
    "Please share available slots.",
  ].join("\n");
}

export function genericInquiryMessage(context: string): string {
  return `Hello,\n\nI'm interested in ${context}.\n\nPlease share more details.`;
}

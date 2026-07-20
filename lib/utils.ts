// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = "₹"): string {
  return `${currency}${price.toLocaleString("en-IN")}`;
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function generateStars(rating: number): string {
  return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
}

export const SITE_NAME = "Kashi Darshan";
export const SITE_URL = "https://kashidarshan.com";
export const SITE_DESCRIPTION =
  "Experience the Soul of Kashi — Premium travel and pilgrimage booking for Varanasi. Hotels, Boat Rides, Temple Tours, Packages & more.";

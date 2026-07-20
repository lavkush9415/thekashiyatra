import type { Metadata } from "next";
import { hotels } from "@/lib/data/hotels";
import { HotelsPageClient } from "./HotelsPageClient";

export const metadata: Metadata = {
  title: "Hotels in Varanasi — Luxury, Heritage & Budget Stays",
  description:
    "Browse 120+ verified hotels in Varanasi. From luxury palaces and Ganga-view heritage properties to comfortable budget stays. Best price guarantee.",
};

export default function HotelsPage() {
  return <HotelsPageClient hotels={hotels} />;
}

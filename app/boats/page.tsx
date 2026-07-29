import type { Metadata } from "next";
import { boatRides } from "@/lib/data/boats";
import { BoatsPageClient } from "./BoatsPageClient";

export const metadata: Metadata = {
  title: "Boat Rides on Ganga — Sunrise, Aarti & Private Cruises in Varanasi",
  description:
    "Book sacred boat rides on the Ganges. Sunrise cruises, Ganga Aarti viewing, private luxury boats, and meditation sails. Best rates guaranteed.",
};

export default function BoatsPage() {
  return <BoatsPageClient boats={boatRides} />;
}

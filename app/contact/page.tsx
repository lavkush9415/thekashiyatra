import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Contact Kashi Darshan — Varanasi Travel Experts",
  description:
    "Get in touch with Kashi Darshan for hotel bookings, boat rides, tour packages, or custom pilgrimage plans. Available 24×7 on WhatsApp and phone.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#8B4513] to-[#FF9933] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4">
            📞 Reach Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            We&apos;re here 24×7 to help you plan the perfect Kashi experience.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}

import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedHotels } from "@/components/home/FeaturedHotels";
import { BoatBooking } from "@/components/home/BoatBooking";
import { TourPackages } from "@/components/home/TourPackages";
import { CabServices } from "@/components/home/CabServices";
import { SpiritualExperiences } from "@/components/home/SpiritualExperiences";
import { Testimonials } from "@/components/home/Testimonials";
import { Statistics } from "@/components/home/Statistics";
import { GallerySection } from "@/components/home/GallerySection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Kashi Darshan — Experience the Soul of Kashi | Varanasi Travel & Pilgrimage",
  description:
    "Book premium hotels, sacred boat rides, temple tours, and spiritual experiences in Varanasi. Your trusted pilgrimage partner since 2016.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <FeaturedHotels />
      <BoatBooking />
      <TourPackages />
      <CabServices />
      <SpiritualExperiences />
      <Testimonials />
      <Statistics />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

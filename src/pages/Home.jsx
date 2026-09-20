import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BookingBar from "@/components/landing/BookingBar";
import AboutSection from "@/components/landing/AboutSection";
import RoomsGrid from "@/components/landing/RoomsGrid";
import ExperienceSection from "@/components/landing/ExperienceSection";
import AttractionsSection from "@/components/landing/AttractionsSection";
import GallerySection from "@/components/landing/GallerySection";
import TestimonialsSlider from "@/components/landing/TestimonialsSlider";
import LocationSection from "@/components/landing/LocationSection";
import FooterSection from "@/components/landing/FooterSection";
import VoiceConcierge from "@/components/landing/VoiceConcierge";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";
import ReviewsFloat from "@/components/landing/ReviewsFloat";

const VIDEOS = {
  hero: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/847c6a708_WhatsappImage2026-07-03At63646Pm.mp4",
  about: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/3a00f0beb_WhatsappImage2026-07-03At63646Pm1.mp4",
  rooms: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/b5aafbe55_WhatsappImage2026-07-03At63648Pm1.mp4",
  attractions: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/7cc03ab83_WhatsappImage2026-07-03At63648Pm2.mp4",
  terrace: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/41c102bf4_WhatsappImage2026-07-03At63648Pm.mp4",
  gallery1: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/aa2d5922e_WhatsappImage2026-07-03At63649Pm1.mp4",
  gallery2: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/c3c25ed65_WhatsappImage2026-07-03At63649Pm2.mp4",
  gallery3: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/72e20ca1d_WhatsappImage2026-07-03At63649Pm3.mp4",
  gallery4: "https://media.base44.com/videos/public/6a4afbac50ba66c95d50b45e/96a83b907_WhatsappImage2026-07-03At63649Pm.mp4",
};

export default function Home() {
  return (
    <div className="bg-bone min-h-screen">
      <Navbar />
      <HeroSection heroVideo={VIDEOS.hero} />
      <BookingBar />
      <TestimonialsSlider />
      <LocationSection />
      <AboutSection aboutVideo={VIDEOS.rooms} />
      <RoomsGrid />
      <ExperienceSection roomVideo={VIDEOS.about} />
      <AttractionsSection attractionsVideo={VIDEOS.attractions} />
      <GallerySection />
      <FooterSection />
      <VoiceConcierge />
      <WhatsAppFloat />
      <ReviewsFloat />
    </div>
  );
}
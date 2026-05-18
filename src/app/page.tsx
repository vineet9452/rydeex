import HeroSlider from "@/components/HeroSlider";
import BrandMarquee from "@/components/sections/BrandMarquee";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ModelsSection from "@/components/sections/ModelsSection";
import GallerySection from "@/components/sections/GallerySection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TestRideSection from "@/components/sections/TestRideSection";
import LocationSection from "@/components/sections/LocationSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "RYDEEX Showroom Greater Noida",
      "image": "https://placehold.co/800x600/121212/FFF?text=RYDEEX+Showroom",
      "@id": "https://rydeex.placeholder/#business",
      "url": "https://rydeex.placeholder",
      "telephone": "+919876543210",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Knowledge Park III",
        "addressLocality": "Greater Noida",
        "postalCode": "201310",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "Product",
      "name": "RYDEEX X1 Pro",
      "image": "https://placehold.co/600x400/121212/FFF?text=RYDEEX+X1",
      "description": "Premium High-Speed electric scooter with zero emissions.",
      "brand": { "@type": "Brand", "name": "RYDEEX" }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSlider />
      <BrandMarquee />
      <FeaturesSection />
      <ModelsSection />
      <GallerySection />
      <StatsSection />
      <TestimonialsSection />
      <TestRideSection />
      <LocationSection />
    </>
  );
}

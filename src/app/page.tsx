import Hero from "@/components/home/Hero";
import FeatureBadges from "@/components/home/FeatureBadges";
import SignatureDishes from "@/components/home/SignatureDishes";
import AmbientQuote from "@/components/home/AmbientQuote";
import MenuTeaser from "@/components/home/MenuTeaser";
import ReviewsMarquee from "@/components/home/ReviewsMarquee";
import LocationCTA from "@/components/home/LocationCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeatureBadges />
      <SignatureDishes />
      <AmbientQuote />
      <MenuTeaser />
      <ReviewsMarquee />
      <LocationCTA />
    </div>
  );
}

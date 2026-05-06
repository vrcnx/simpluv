import Hero from "@/components/Hero";
import CategoryHero from "@/components/CategoryHero";
import FullBleedBanner from "@/components/FullBleedBanner";
import TwoUpGrid from "@/components/TwoUpGrid";
import FeatureBanner from "@/components/FeatureBanner";
import Trending from "@/components/Trending";
import BrandStatement from "@/components/BrandStatement";

export default function Home() {
  return (
    <div>
      <Hero />
      <CategoryHero />
      <FullBleedBanner
        src="/images/banner-polos.png"
        alt="SIMPL UV Polo Shop"
        title="The Polo Shop"
        subtitle="Iconic styles made to perform on and off the course."
        href="/polos"
      />
      <TwoUpGrid />
      <FeatureBanner />
      <Trending />
      <BrandStatement />
    </div>
  );
}

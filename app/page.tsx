import PromotionalBanner from "@/components/promotional-banner/PromotionalBanner";
import SliderComponent from "@/components/slider/Slider";
import HoneyBee from "@/public/honey-jar.jpg";

export default function Home() {
  return (
    <>
      <SliderComponent />
      <PromotionalBanner
        title="New Arrival"
        description="Check out our latest honey bee products."
        backgroundImage="/honey-for-soul.jpg"
        product={{
          image: HoneyBee,
          name: "Organic Honey",
          price: 25.99,
          description: "Pure, raw, and organic honey from our best hives.",
        }}
      />
    </>
  );
}

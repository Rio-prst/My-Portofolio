import HeroContent from "./HeroContent"
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="flex items-center place-content-between">
      <HeroContent/>
      <HeroVisual/>
    </section>
  )
}

export default HeroSection;
import HeroContent from "./HeroContent"
import HeroVisual from "./HeroVisual";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-0 container mx-auto mt-0 md:-mt-0 lg:-mt-10 px-6 lg:py-0">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <HeroContent/>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <HeroVisual/>
      </div>
    </section>
  )
}

export default HeroSection;
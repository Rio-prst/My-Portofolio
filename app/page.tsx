import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="pt-24 md:pt-32 w-[85%] mx-auto">
        <Hero/>
      </main>
    </>
  )
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import { MySkills } from "@/components/sections/skills/MySkills";
import { FeaturedProjects } from "@/components/sections/projects/FeaturedProjects";
import { ContactCTA } from "@/components/sections/contact/ContactCTA";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="pt-24 w-[85%] mx-auto">
        <Hero/>
        <FeaturedProjects/>
        <MySkills/>
        <ContactCTA/>
      </main>
    </>
  )
}

import Navbar from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getAllProjects } from "@/lib/data/projects/getProjects";

const ProjectsPage = async () => {
  const allProjects = await getAllProjects();

  return (
    <>
      <Navbar/>
      <section className="pt-30">
        <SectionTitle title="Projects"/>

        <div className="flex flex-wrap justify-center gap-8 w-[85%] mx-auto mb-8">
          {allProjects.map((project) => (
            <div key={project.id} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage;
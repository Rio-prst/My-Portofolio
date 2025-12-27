import Navbar from "@/components/layout/Navbar";
import projects from "@/lib/data/projects.json";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const ProjectsPage = () => {
  return (
    <>
      <Navbar/>
      <section className="pt-30">
        <SectionTitle title="Projects"/>

        {/* Grid: Responsive 1 ke 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%] mx-auto mb-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsPage;
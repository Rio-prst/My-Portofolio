import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const FeaturedProjects = async () => {
  const featuredProjects = await db
    .select()
    .from(projects)
    .where(eq(projects.featured, true))
    .orderBy(desc(projects.createdAt))
    .limit(3);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="container mx-auto mt-[100px] px-4">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionTitle title="Featured Projects" />
        <p className="text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Selected works that showcase my expertise and passion in data science and web development.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <div key={project.id} className="flex justify-center h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-12">
        <Link
          href="/projects"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 font-semibold transition-all group shadow-lg"
        >
          View All Projects
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};
"use client"

import { ProjectFromDB } from "@/lib/types/projects";
import { Github, ExternalLink, Users } from "lucide-react";
import { RoleBadge } from "@/components/ui/RoleBadge";
import { useState } from "react";

type Props = {
  project: ProjectFromDB;
};

export const ProjectCard = ({ project }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group flex flex-col h-full bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-cyan-500/50 w-full mb-6">
      <div className="relative h-48 bg-slate-800 flex items-center justify-center text-slate-500">
        {project.coverImage ? (
          project.coverImage.startsWith("http") ||
          project.coverImage.startsWith("/") ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{project.coverImage} Preview</span>
          )
        ) : (
          <span>No Image</span>
        )}

        <span
          className={`
            absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full
            font-semibold uppercase tracking-wide
            ${
              project.status?.toLowerCase() === "completed"
                ? "bg-green-500/20 text-green-400 border border-green-500/40"
                : project.status === "in-progress"
                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/40"
                : "bg-slate-500/20 text-slate-400 border border-slate-500/40"
            }
          `}
        >
          {project.status}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.roles.map((role) => (
            <RoleBadge key={role} label={role}/>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p
          className={`text-sm text-slate-400 mb-2 transition-all ${
            expanded ? "" : "line-clamp-2"
          }`}
        >
          {project.description}
        </p>
        {project.description.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-cyan-400 hover:text-cyan-300 self-start mb-4"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-1 rounded border border-slate-700 bg-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-slate-800 mt-auto">
          <div className="flex gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )}
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-slate-500">
            <Users size={14} />
            <span className="text-xs">{project.peopleInProject}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
"use server";

import { unstable_cache } from "next/cache";
import { fetchAllProjects, fetchFeaturedProjects } from "./fetchProjects";
import { DatabaseError, ServerError } from "@/lib/errors";

export const getAllProjects = unstable_cache(
  async () => {
    try {
      return await fetchAllProjects();
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw error;
      }

      console.error("Unexpected server error:", error);
      throw new ServerError();
    }
  },
  ["projects:all"],
  {
    revalidate: 3600,
    tags: ["projects", "projects:all"],
  }
);

export const getFeaturedProjects = unstable_cache(
  async () => {
    try {
      return await fetchFeaturedProjects(); 
    } catch (error) {
      console.error("Featured projects error:", error);
      return [];
    }
  },
  ["projects:featured"],
  {
    revalidate: 3600,
    tags: ["projects", "projects:featured"],
  }
);
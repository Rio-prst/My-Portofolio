"use server";

import { unstable_cache } from "next/cache";
import { fetchAllProjects } from "./fetchProjects";
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

import { db } from "@/db";
import { projects } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { DatabaseError } from "@/lib/errors";

export function fetchAllProjects() {
  try {
    const allProjects = db
      .select()
      .from(projects)
      .orderBy(desc(projects.createdAt));

    return allProjects;
  } catch (error) {
    console.error("Drizzle error:", error);
    throw new DatabaseError("Failed to fetch projects from database");
  }
}

export function fetchFeaturedProjects() {
  try {
    const featuredProjects = db
      .select()
      .from(projects)
      .where(eq(projects.featured, true))
      .orderBy(desc(projects.createdAt))
      .limit(3)

    return featuredProjects;
  } catch (error) {
    console.error('Drizzle error:', error);
    throw new DatabaseError('Failed to fetch projects from database');
  }
}

import { 
  pgTable, 
  serial, 
  text, 
  varchar, 
  boolean, 
  integer, 
  jsonb, 
  timestamp 
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  coverImage: text("cover_image"),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  
  // use jsonb to store array string
  roles: jsonb("roles").$type<string[]>().default([]).notNull(),
  techStack: jsonb("tech_stack").$type<string[]>().default([]).notNull(),
  
  peopleInProject: integer("people_in_project").default(1),
  status: varchar("status", { length: 50 }).default("completed").notNull(), // completed, in-progress, archived
  featured: boolean("featured").default(false),
  pinned: boolean("pinned").default(false),
  
  createdAt: timestamp("created_at").defaultNow(),
});

export const certifications = pgTable("certifications", {
  title: varchar("title").notNull(),
  issuer: varchar("issuer").notNull(),
  date: varchar("date").notNull(),
  credentialUrl: text("credential_url"),
  logo: text("logo"),
});
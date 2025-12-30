import { projects } from "@/db/schema";

//for get data
export type ProjectFromDB = typeof projects.$inferSelect;

//for insert data
export type NewProject = typeof projects.$inferInsert;
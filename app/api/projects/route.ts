import { db } from "@/db";
import { projects } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allProjects = await db.select().from(projects);
    return NextResponse.json(allProjects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to get data" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.description) {
      return NextResponse.json({ error: "Title and description are required" }, { status: 400 });
    }

    const newProject = await db.insert(projects).values({
      title: body.title,
      description: body.description,
      techStack: body.techStack || [],
      roles: body.roles || [],
      githubUrl: body.githubUrl,
      demoUrl: body.demoUrl,
      status: body.status || "completed",
    }).returning(); 

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menambah data" }, { status: 500 });
  }
}
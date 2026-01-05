import { db } from '@/db';
import { certifications } from '@/db/schema';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const allCertifications = await db.select().from(certifications);
    return NextResponse.json(allCertifications);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get data' }, { status: 500 });
  }
}

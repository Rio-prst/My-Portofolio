import { db } from "@/db";
import { certifications } from "@/db/schema";
import { DatabaseError } from "@/lib/errors";

export function fetchAllCertificates() {
  try {
    const allCertificates = db
      .select()
      .from(certifications);

    return allCertificates;
  } catch (error) {
    console.error("Drizzle error:", error);
    throw new DatabaseError("Failed to fetch certificates from database");
  }
}

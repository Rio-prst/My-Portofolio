"use server";

import { unstable_cache } from "next/cache";
import { fetchAllCertificates } from "./fetchCertificates";
import { DatabaseError, ServerError } from "@/lib/errors";

export const getAllCertificates = unstable_cache(
  async () => {
    try {
      return await fetchAllCertificates();
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw error;
      }

      console.error("Unexpected server error:", error);
      throw new ServerError();
    }
  },
  ["certificates:all"],
  {
    revalidate: 3600,
    tags: ["certificates", "certificates:all"],
  }
);

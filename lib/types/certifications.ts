import { certifications } from '@/db/schema';

export type CertificationsFromDB = typeof certifications.$inferInsert;
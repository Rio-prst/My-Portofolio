import { CertificationCard } from "./CertificationCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { db } from '@/db';
import { certifications as certSchema } from '@/db/schema';
import { desc } from 'drizzle-orm';

export const Certifications = async () => {
  const allCertifications = await db.select().from(certSchema);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 w-[85%]">
        <SectionTitle title="Certifications" />
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {allCertifications.map((cert, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-12px)] lg:max-w-[500px]"
            >
              <CertificationCard cert={cert} />
            </div>
          ))}
        </div>
        
        {allCertifications.length === 0 ? (
          <p className="text-center text-slate-500 mt-10">No certifications yet.</p>
        ) : allCertifications.length < 3 && (
          <div className="flex justify-center mt-12 text-slate-600 italic text-sm border-t border-slate-900/50 pt-8">
            More certifications coming soon...
          </div>
        )}
      </div>
    </section>
  );
};
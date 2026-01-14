import { CertificationCard } from "@/components/sections/certifications/CertificationCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getAllCertificates } from "@/lib/data/certificates/getCertificates";
import Navbar from "@/components/layout/Navbar";

const CertificatesPage = async () => {
  const allCertifications = await getAllCertificates();

  return (
    <>
      <Navbar/>
      <section className="pt-24 mb-[100px]">
        <div className="container mx-auto px-4 w-[85%]">
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {allCertifications.map((cert, index) => (
              <div
                key={cert.certificateId || index}
                className="w-full md:w-[calc(50%-12px)] lg:max-w-[500px]"
              >
                <CertificationCard cert={cert} />
              </div>
            ))}
          </div>

          {allCertifications.length === 0 ? (
            <p className="text-center text-slate-500 mt-10 font-sans">
              No certifications yet.
            </p>
          ) : (
            allCertifications.length < 3 && (
              <div className="flex justify-center mt-12 text-slate-600 italic text-sm border-t border-slate-900/50 pt-8 font-sans">
                More certifications coming soon...
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default CertificatesPage;

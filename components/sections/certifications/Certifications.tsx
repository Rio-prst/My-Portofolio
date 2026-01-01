import { CertificationCard } from "./CertificationCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

const certifications = [
  {
    title: "Fullstack Web Development",
    issuer: "Digitalent Kominfo",
    date: "Dec 2024",
    credentialUrl: "",
    logo: "",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Aug 2024",
    credentialUrl: "",
    logo: "",
  },
];

export const Certifications = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4 w-[85%]">
        <SectionTitle title="Certifications" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 justify-center">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
        
        {certifications.length === 1 && (
            <div className="flex justify-center mt-8 text-slate-500 italic text-sm">
                More certifications coming soon...
            </div>
        )}
      </div>
    </section>
  );
};
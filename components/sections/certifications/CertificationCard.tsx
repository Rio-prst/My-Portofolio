import { ExternalLink, Award } from "lucide-react";
import { CertificationsFromDB } from "@/lib/types/certifications";

interface Props {
  cert: CertificationsFromDB;
}

export const CertificationCard = ({ cert }: Props) => {
  return (
    <div className="group bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative w-full h-48 bg-slate-800 overflow-hidden">
        {cert.coverImage ? (
          <img 
            src={cert.coverImage} 
            alt={cert.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-700">
             <Award size={64} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors leading-tight">
            {cert.title}
          </h3>
          <p className="text-slate-400 text-sm mt-2 flex items-center gap-2">
            {cert.issuer}
          </p>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/50">
          <span className="text-xs text-slate-500 font-mono">
           {cert.date}
          </span>
          
          {cert.credentialUrl && (
            <a 
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-500 hover:text-cyan-300 transition-colors bg-cyan-500/10 px-3 py-1.5 rounded-full"
            >
              See Credentials <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
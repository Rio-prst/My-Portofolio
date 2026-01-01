import { ExternalLink, Award } from "lucide-react";

export const CertificationCard = ({ cert }: { cert: any }) => {
  return (
    <div className="group bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
        {cert.logo ? (
          <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain" />
        ) : (
          <Award size={24} />
        )}
      </div>
      
      <div className="flex-grow">
        <h3 className="text-white font-bold group-hover:text-cyan-400 transition-colors">
          {cert.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-slate-500 font-medium">{cert.date}</span>
          <a 
            href={cert.credentialUrl}
            target="_blank"
            className="text-cyan-500 hover:text-cyan-300 flex items-center gap-1 text-xs font-semibold"
          >
            Show Credential <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
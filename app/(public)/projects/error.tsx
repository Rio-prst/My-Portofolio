"use client";

import { useEffect } from "react";
import { RefreshCcw, AlertCircle, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Portfolio Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#020617] font-sans px-6 relative overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-3xl bg-slate-900/50 border border-slate-800 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <AlertCircle className="w-10 h-10 text-red-500" strokeWidth={1.5} />
        </div>

        <h2 className="text-[32px] md:text-[48px] font-[800] text-white mb-4 tracking-tight leading-tight">
          Oops! Something <span className="text-cyan-400">went wrong.</span>
        </h2>

        <div className="max-w-md mb-12">
          <p className="text-slate-400 text-[16px] md:text-[18px] leading-relaxed">
            {error.name === "DatabaseError" || error.message.includes("max clients")
              ? "The database is currently reaching its connection limit. Please wait a moment and try again."
              : "An unexpected error occurred while loading this page. Don't worry, it's not you, it's me."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-[700] text-[15px] transition-all hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] active:scale-95 group"
          >
            <RefreshCcw size={18} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-slate-800 text-white font-[700] text-[15px] transition-all hover:bg-slate-900 hover:border-slate-700 active:scale-95"
          >
            <Home size={18} strokeWidth={2.5} />
            Back to Home
          </Link>
        </div>

        {error.digest && (
          <p className="mt-12 text-slate-600 text-[12px] font-mono opacity-50">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
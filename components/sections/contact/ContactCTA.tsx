"use client";
import React from 'react';
import { Mail, FileText, ArrowRight } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/80 border border-slate-800 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-10">
          <Mail className="w-6 h-6 text-cyan-400" strokeWidth={2} />
        </div>
        <h2 className="text-5xl font-bold mb-12">
          Interested in <span className="text-cyan-400">working together?</span>
        </h2>
        <p className="text-slate-400 mt-1 max-w-2xl mb-12">
          I&apos;m always open to discussing new opportunities, creative ideas, or ways to contribute to your team.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="/resume.pdf"
            className="font-sans flex items-center gap-2 px-8 py-3.5 rounded-xl bg-cyan-400 text-slate-950 font-[700] text-[15px] transition-all hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <FileText size={19} strokeWidth={2.5} />
            View Resume
            <ArrowRight size={19} strokeWidth={2.5} className="ml-1" />
          </a>
          <a
            href="mailto:your@email.com"
            className="font-sans flex items-center gap-2 px-8 py-3.5 rounded-xl bg-transparent border border-slate-800 text-white font-[700] text-[15px] transition-all hover:bg-slate-900 hover:border-slate-700 active:scale-95"
          >
            <Mail size={19} strokeWidth={2.5} />
            Contact Me
          </a>
        </div>
        <div className="text-slate-400 max-w-xl mt-12">
          Currently based in Indonesia • Open to remote opportunities
        </div>
      </div>
    </section>
  );
};
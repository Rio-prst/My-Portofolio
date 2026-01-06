"use client";
import React from "react";

type SectionTitleProps = {
  title: string;
  className?: string;
};

export const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
  const words = title.split(" ");
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(" ");

  return (
    <div className={`mb-12 w-[85%] mx-auto text-center ${className}`}>
      <div className="relative inline-block px-8 py-3">
        <h2 className="relative z-10 text-3xl font-bold text-white mb-0">
          {firstWord}
          {remainingWords && (
            <span className="text-cyan-500"> {remainingWords}</span>
          )}
        </h2>
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full overflow-visible">
            <defs>
              <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              strokeWidth="1"
              rx="12"
            />
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke="#06b6d4" 
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#neon-glow)"
              style={{
                strokeDasharray: "80 250", 
                animation: "infinity-run 4s linear infinite",
              }}
              rx="12"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinity-run {
          0% {
            stroke-dashoffset: 330; /* Mulai dari satu titik */
          }
          100% {
            stroke-dashoffset: 0; /* Berputar penuh kembali ke awal */
          }
        }
      `}</style>
    </div>
  );
};
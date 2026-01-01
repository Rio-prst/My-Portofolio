// components/sections/skills/SkillIcon.tsx
"use client";

type SkillProps = {
  name: string;
  icon: string;
  color: string;
};

export const SkillIcon = ({ name, icon, color }: SkillProps) => {
  return (
    <div className="group relative flex flex-col items-center justify-center w-32 h-32 flex-shrink-0 transition-all duration-300">
      <div className={`flex items-center justify-center text-5xl transition-all duration-500 grayscale group-hover:grayscale-0 ${color} group-hover:scale-125`}>
        <i className={icon}></i>
      </div>
      <span className="absolute bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-300 text-[10px] font-bold uppercase tracking-widest text-white bg-slate-800/80 px-2 py-1 rounded backdrop-blur-sm">
        {name}
      </span>
    </div>
  );
};
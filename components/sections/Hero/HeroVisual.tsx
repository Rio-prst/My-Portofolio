import Image from "next/image";

const HeroVisual = () => {
  const techLogos = [
    { name: "React", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", delay: "0s" },
    { name: "Next", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", delay: "-3.33s" },
    { name: "Tailwind", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", delay: "-6.66s" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", delay: "-9.99s" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", delay: "-13.32s" },
    { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", delay: "-16.65s" },
  ];

  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px] aspect-square scale-[0.7] sm:scale-90 lg:scale-100 transition-transform duration-500">
      <div className="absolute w-[350px] h-[350px] bg-cyan-500/30 blur-[60px] rounded-full animate-pulse z-0" />
      <div className="absolute w-[320px] h-[320px] border border-cyan-500/20 rounded-full z-10" />
      <div className="absolute w-[420px] h-[420px] border border-white/5 rounded-full z-0" />
      <div className="relative z-20 p-4 bg-slate-950 rounded-full border border-white/10 shadow-2xl animate-float">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500/50">
          <Image
            src="/images/profile+.jpeg"
            alt="Rio Prasetio"
            width={256}
            height={256}
            className="w-full h-full aspect-square object-cover object-center"
            priority
          />
        </div>
      </div>

      {techLogos.map((logo, index) => (
        <div
          key={index}
          className="absolute z-30 animate-orbit"
          style={{ animationDelay: logo.delay }}
        >
          <div className="bg-slate-900/80 backdrop-blur-sm p-3 rounded-2xl border border-white/10 shadow-xl hover:scale-110 transition-transform cursor-pointer">
            <Image
              src={logo.src}
              alt="tech"
              width={32}
              height={32}
              className="drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroVisual;
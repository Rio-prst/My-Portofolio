import Image from 'next/image';

const HeroVisual = () => {
  const techLogos = [
    { src: '/icons/react.svg', delay: '0s', pos: 'top-0' },
    { src: '/icons/nextjs.svg', delay: '-5s', pos: 'right-0' },
    { src: '/icons/tailwind.svg', delay: '-10s', pos: 'bottom-0' },
    { src: '/icons/typescript.svg', delay: '-15s', pos: 'left-0' },
  ];

  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px] aspect-square">
      
      {/* 1. Efek Glow Cahaya Biru di Background */}
      <div className="absolute w-72 h-72 bg-primary/30 blur-[100px] rounded-full z-0" />

      {/* 2. Lingkaran Orbit (Garis Dekoratif) */}
      <div className="absolute w-[320px] h-[320px] border border-primary/20 rounded-full z-10" />
      <div className="absolute w-[420px] h-[420px] border border-white/5 rounded-full z-0" />

      {/* 3. Foto Profil Utama */}
      <div className="relative z-20 p-4 bg-dark rounded-full border border-white/10 shadow-2xl animate-float">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/50">
          <Image 
            src="/images/profile.jpg" // Pastikan file ini ada di folder public/images/
            alt="Rio Prasetio"
            width={256}
            height={256}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 4. Logo Framework yang Mengorbit */}
      {techLogos.map((logo, index) => (
        <div
          key={index}
          className="absolute z-30 animate-orbit"
          style={{ animationDelay: logo.delay }}
        >
          <div className="bg-card/80 backdrop-blur-sm p-3 rounded-2xl border border-white/10 shadow-xl hover:scale-110 transition-transform cursor-pointer">
            <Image 
              src={logo.src} // Taruh file SVG di public/icons/
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
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-fit font-sans">
      <div className="bg-[#0f172a]/60 backdrop-blur-md border border-white/10 px-16 py-4 rounded-2xl shadow-2xl">
        <ul className="flex items-center justify-center gap-14 text-[15px] font-medium tracking-wide">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`relative py-1 transition-all duration-300 font-[500] ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)] ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ width: isActive ? '100%' : '0' }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
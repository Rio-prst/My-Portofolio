"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'; 
import { MobileMenu } from './MobileMenu';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] w-fit font-sans">
        <div className="hidden md:block bg-[#0f172a]/60 backdrop-blur-md border border-white/10 px-16 py-4 rounded-2xl shadow-2xl">
          <ul className="flex items-center justify-center gap-14 text-[15px] font-medium tracking-wide">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`relative py-1 transition-all duration-300 font-[500] ${
                    pathname === link.href ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-cyan-400 transition-all duration-300 ${pathname === link.href ? "w-full opacity-100" : "w-0 opacity-0"}`} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-between w-[380px] gap-3 bg-[#0f172a]/60 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-2xl text-white shadow-2xl active:scale-95 transition-all duration-300"
        >
          <span className="text-sm font-bold tracking-wide">Menu</span>
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        navLinks={navLinks}
        pathname={pathname}
      />
    </>
  );
};

export default Navbar;
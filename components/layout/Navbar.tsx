"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-7xl">
      <div className="bg-slate-900/60 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-white">
          <span className="text-cyan-400">Dev</span>Portfolio
        </div>

        {/* Menu Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`relative py-1 transition-all duration-300 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  
                  <span 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.8)] ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/chatbot"
          className="bg-cyan-400 text-slate-950 font-bold py-2 px-6 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform active:scale-95"
        >
          <MessageSquare size={18} />
          <span className="text-sm">Chat with Me</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
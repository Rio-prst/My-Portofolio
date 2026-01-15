"use client";

import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  pathname: string;
}

export const MobileMenu = ({ isOpen, onClose, navLinks, pathname }: MobileMenuProps) => {
  return (
    <>
      <div 
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-md transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div className={`fixed left-1/2 -translate-x-1/2 z-[101] w-[90%] max-w-[400px] transition-all duration-500 md:hidden ${
        isOpen ? "top-24 scale-100 opacity-100" : "top-16 scale-90 opacity-0 pointer-events-none"
      }`}>
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="pt-5 pb-8">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`relative block py-6 text-center text-l font-medium transition-all duration-300 ${
                        isActive ? "text-white bg-white/5" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
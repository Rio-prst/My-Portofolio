import Link from 'next/link';
import {MessageSquare} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-7xl">
      <div className="bg-card/50 backdrop-blur-md border border-white/10 px-8 py-3 rounded-2xl flex items-center justify-between shadow-2xl">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <span className="text-primary">Dev</span>Portfolio
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="text-white hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-secondary hover:text-white transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-secondary hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-secondary hover:text-white transition-colors">
              Resume
            </Link>
          </li>
        </ul>

        <Link
          href="/chatbot"
          className="bg-primary text-dark font-bold py-2 px-6 rounded-xl flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform active:scale-95"
        >
          <MessageSquare />
          <span className="text-sm">Chat with Me</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
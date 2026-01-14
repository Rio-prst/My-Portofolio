"use client"

import {Linkedin, Github, Mail, Instagram, MessageSquare} from 'lucide-react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const HeroContent = () => {
  return (
    <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
      <ul className="flex items-center gap-6">
        <li>
          <Link href="https://linkedin.com/in/rio-prasetio" className="inline-flex items-center justify-center p-3 rounded-full hover:bg-[#0A66C2] transition text-white">
            <Linkedin size={20}/>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Rio-prst" className="inline-flex items-center justify-center p-3 rounded-full hover:bg-[#181717] transition text-white">
            <Github size={20}/>
          </Link>
        </li>
        <li>
          <Link href="/" className='inline-flex items-center justify-center p-3 rounded-full hover:bg-[#EA4335] transition text-white'>
            <Mail size={20}/>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/azumii.exe" className='inline-flex items-center justify-center p-3 rounded-full hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] transition text-white'>
            <Instagram size={20}/>
          </Link>
        </li>
      </ul>

      <h1 className="text-4xl md:text-5xl font-bold pt-4 text-white">
        Hi, I'm <span className="text-cyan-400">Rio Prasetio</span><br />
      </h1>

      <h2 className='text-lg md:text-2xl pt-5 text-slate-300'>
        Informatics Student | Asah Cohort <br className="hidden lg:block" />
        Path React and Backend with AI
      </h2>

      <div className="w-full max-w-xl min-h-[100px] lg:min-h-fit">
        <p className="text-cyan-400 font-mono text-2xl md:text-4xl tracking-widest pt-3 font-medium">
          <span className="mr-2">&gt;</span>
          <Typewriter
            words={['Full-Stack Web Developer', 'Data Science Enthusiast', 'I Love Learning']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>
      </div>

      <div className='flex flex-col sm:flex-row items-center gap-4 pt-8 w-full sm:w-auto'>
        <Link
          href="/chatbot"
          className="bg-cyan-400 text-slate-950 font-bold py-2 px-6 rounded-xl flex items-center justify-center w-full sm:w-64 h-12 gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform active:scale-95"
        >
          <MessageSquare size={18} />
          <span className="text-sm">Chat with My Assistant</span>
        </Link>

        <Link 
          href="/projects"
          className="flex bg-slate-900/50 backdrop-blur border border-white/10 w-full sm:w-56 h-12 font-bold py-2 px-6 items-center justify-center rounded-xl text-white hover:bg-slate-800 transition-all"
        >
          View Projects
        </Link>
      </div>
    </div>
  )
}

export default HeroContent;
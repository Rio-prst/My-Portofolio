"use client"

import {Linkedin, Github, Mail, Instagram, MessageSquare} from 'lucide-react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const HeroContent = () => {
  return (
    <div className='flex flex-col'>
      <ul className="md:flex items-center gap-6">
        <li>
          <Link href="https://linkedin.com/in/rio-prasetio" className="inline-flex items-center justify-center p-3 rounded-full hover:bg-[#0A66C2] transition text-white">
            <Linkedin size={20}/>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/Rio-prst" className="inline-flex items-center justify-center p-3 rounded-full hover:bg-[#181717] transition text-white">
            <Github/>
          </Link>
        </li>
        <li>
          <Link href="/" className='inline-flex items-center justify-center p-3 rounded-full hover:bg-[#EA4335] transtion text-white'>
            <Mail/>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/azumii.exe" className='inline-flex items-center justify-center p-3 rounded-full hover:bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#515BD4] transtion text-white'>
            <Instagram/>
          </Link>
        </li>
      </ul>
      <h1 className="text-5xl font-bold pt-4">
        Hi, I'm <span className="text-primary">Rio Prasetio</span><br />
      </h1>
      <h2 className='text-2xl pt-5'>
        Informatics Student | Asah Cohort <br />
         Path React and Backend with AI
      </h2>
      <div className="w-full max-w-xl">
        <p className="text-primary font-mono text-4xl tracking-widest pt-3 font-medium">
          <span className="mr-2">&gt;</span>
          <Typewriter
            words={['Junior Full-Stack Web Developer', 'Data Science Enthusiast', 'I Love Learning']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>
      </div>
      <div className='md:flex items-center gap-4 pt-5'>
        <Link
          href="/chatbot"
          className="bg-primary text-dark font-bold py-2 px-6 rounded-xl flex items-center w-64 h-12 gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 transition-transform active:scale-95"
        >
          <MessageSquare />
          <span className="text-sm">Chat with My Assistant</span>
        </Link>

        <Link 
          href="/projects"
          className="flex bg-card/50 backdrop-blur border border-white/10 w-56 h-12 font-bold py-2 px-6 items-center justify-center rounded-xl"
        >
          View Projects
        </Link>
      </div>
    </div>
  )
}

export default HeroContent;
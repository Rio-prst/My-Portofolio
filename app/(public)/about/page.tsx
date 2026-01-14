"use client";
import React from "react";
import { User, Heart, Code2, Music, Play, Mail } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <section className="pt-40 bg-[#020617] font-sans overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-[800] text-white tracking-tight">
                Rio <span className="text-cyan-400">Prasetio</span>
              </h1>
              <div className="space-y-4 text-slate-300 text-[16px] md:text-[18px] leading-relaxed">
                <p>
                  Hi, I&apos;m <span className="text-white font-semibold">
                    Rio Prasetio.{" "}
                  </span>
                  I&apos;m a student at UPN Veteran Yogyakarta majoring in
                  Informatics, and I&apos;m from Indonesia.
                </p>
                <p>
                  I&apos;m passionate about building modern, user-focused web
                  applications with clean interfaces and thoughtful user
                  experiences. I enjoy turning ideas into functional and
                  visually engaging products using modern web technologies.
                </p>
                <p>
                  Beyond web development, I have a strong interest in Data
                  Science, Machine Learning, and Artificial Intelligence. I&apos;m
                  currently exploring these fields and continuously learning how
                  they can be integrated into real-world applications.
                </p>
                <p>
                  When I&apos;m coding, music is always part of my workflow, it
                  helps me stay focused, creative, and enjoy the process even
                  more.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[400px] shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <img
                  src="images/profile+.jpeg"
                  alt="Profile"
                  className="relative rounded-[2.5rem] w-full object-cover border border-white/10 shadow-2xl max-h-[450px]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[100px]">
            {/* <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-cyan-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  What I&apos;m Passionate About
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                I&apos;m deeply passionate about the intersection of AI and web
                development, exploring how we can leverage machine learning to
                create smarter, more intuitive user experiences.
              </p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-cyan-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Technical Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Python",
                  "PostgreSQL",
                  "Next.js",
                  "TailwindCSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}
            <div className="md:col-span-2 bg-slate-900/40 border border-slate-800 p-8 rounded-[2rem] hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Music className="text-cyan-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  My favorite songs
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center">
                        <Music className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold">
                          Stop The World...
                        </h4>
                        <p className="text-slate-500 text-[11px]">
                          Arctic Monkeys
                        </p>
                      </div>
                    </div>
                    <button className="w-8 h-8 bg-cyan-400/10 hover:bg-cyan-400 rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                      <Play className="text-cyan-400 group-hover:text-slate-950 fill-current w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

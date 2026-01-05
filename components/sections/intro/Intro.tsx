"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    desc: "Building modern, responsive, and user-friendly web interfaces using the latest technologies.",
    icon: <Code2 className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Backend Development",
    desc: "Developing scalable, secure, and efficient APIs and backend systems for your data needs.",
    icon: <Server className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Data Analysis",
    desc: "Transforming raw data into actionable insights through statistical modeling and visualization.",
    icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
  },
];

export const IntroSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full -z-10" 
      />
      <div className="container mx-auto md:px-0 mt-20 w-[85%]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start w-[100%]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[40%] space-y-6 text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              What Can <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                I Do
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              I provide specialized services in web development and data processing to help build robust, data-driven digital solutions.
            </p>
          </motion.div>
          <div className="lg:w-[60%] flex flex-col gap-5 w-full">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 12, backgroundColor: "rgba(15, 23, 42, 0.6)" }}
                className="group relative p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center gap-6">
                  <div className="flex-shrink-0 p-3 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
                    {service.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
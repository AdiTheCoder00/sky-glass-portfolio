"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerFast, viewportOnce, skyEasing } from "@/lib/animations";

export default function SkillsSection() {
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(progressRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-8">
      {/* Section Header */}
      <motion.div
        className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        <motion.div className="max-w-2xl" variants={fadeInUp}>
          <span className="text-primary font-label uppercase tracking-widest text-sm font-semibold mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface leading-[1.1]">
            My Skills
          </h2>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="text-on-surface-variant text-lg font-body max-w-md leading-relaxed"
        >
          Building expansive digital environments through precise engineering
          and atmospheric design principles.
        </motion.p>
      </motion.div>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-24 md:mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerFast}
      >
        {/* React & Next.js */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: skyEasing } }}
          className="sm:col-span-2 lg:col-span-2 glass-card p-6 md:p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between aspect-auto sm:aspect-square group hover:bg-surface-container-lowest transition-colors duration-500 transform-gpu"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">deployed_code</span>
          </div>
          <div className="mt-4 sm:mt-0">
            <h3 className="text-xl md:text-2xl font-bold font-headline mb-2">React & Next.js</h3>
            <p className="text-on-surface-variant text-sm">
              Building high-performance, SEO-optimized web applications with
              server-side rendering and hydration.
            </p>
          </div>
        </motion.div>

        {/* Python */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: skyEasing } }}
          className="sm:col-span-1 lg:col-span-1 glass-card p-6 md:p-8 rounded-xl border border-outline-variant/15 flex flex-col items-center justify-center text-center group hover:bg-surface-container-lowest transition-colors duration-500 transform-gpu"
        >
          <div className="mb-4 text-primary">
            <span className="material-symbols-outlined text-4xl">data_object</span>
          </div>
          <h3 className="text-xl font-bold font-headline">Python</h3>
          <div className="mt-4 flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary-container/20" />
          </div>
        </motion.div>

        {/* Atmospheric UI */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: skyEasing } }}
          className="sm:col-span-2 lg:col-span-3 glass-card p-6 md:p-8 rounded-xl border border-outline-variant/15 flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-gradient-to-br from-white/40 to-primary-container/5"
        >
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-4">Atmospheric UI</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Focusing on clarity, depth, and intentional asymmetry to create
              digital spaces that breathe.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Figma", "Tailwind", "Motion"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/50 rounded-full text-xs font-label font-medium border border-outline-variant/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:block w-40 h-40 relative shrink-0">
            <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-2xl" />
            <div className="relative z-10 w-full h-full glass-card border border-white/40 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-5xl">
                auto_awesome
              </span>
            </div>
          </div>
        </motion.div>

        {/* C++ & Systems */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: skyEasing } }}
          className="sm:col-span-1 lg:col-span-2 glass-card p-6 md:p-8 rounded-xl border border-outline-variant/15 flex flex-col justify-between group hover:bg-surface-container-lowest transition-colors duration-500 transform-gpu"
        >
          <div className="flex justify-between items-start">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">memory</span>
            </div>
            <span className="text-[10px] font-bold tracking-tighter text-outline bg-surface-container px-2 py-1 rounded">
              SYSTEMS
            </span>
          </div>
          <div className="mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-bold font-headline mb-2">C++ & Systems</h3>
            <p className="text-on-surface-variant text-sm">
              Low-level architecture and memory management for
              performance-critical engines.
            </p>
          </div>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: skyEasing } }}
          className="sm:col-span-1 lg:col-span-2 glass-card p-6 md:p-8 rounded-xl border border-outline-variant/15 flex items-center gap-6 group hover:bg-surface-container-lowest transition-colors duration-500 transform-gpu"
        >
          <div className="w-14 h-14 bg-sky-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shrink-0">
            TS
          </div>
          <div>
            <h3 className="font-bold font-headline text-xl">TypeScript</h3>
            <p className="text-on-surface-variant text-xs">
              Strict typing for scalable codebases.
            </p>
          </div>
        </motion.div>

        {/* Cloud Infrastructure */}
        <motion.div
          ref={progressRef}
          variants={fadeInUp}
          whileHover={{ y: -4, transition: { duration: 0.3, ease: skyEasing } }}
          className="sm:col-span-2 lg:col-span-2 p-6 md:p-8 rounded-xl border border-outline-variant/15 bg-inverse-surface group transition-colors duration-500 transform-gpu"
        >
          <div className="flex items-center gap-4 text-surface mb-4">
            <span className="material-symbols-outlined">cloud_queue</span>
            <h3 className="font-bold font-headline">Cloud Infrastructure</h3>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary-container rounded-full"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "85%" } : { width: "0%" }}
                transition={{ duration: 1.5, ease: skyEasing, delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-surface/60 font-label tracking-widest uppercase">
              <span>AWS / Azure</span>
              <span>85% Mastery</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroStagger, fadeInUp, fadeInRight, skyEasing } from "@/lib/animations";
import TechMarquee from "./TechMarquee";

const roles = [
  "Full-Stack Developer",
  "AI Enthusiast",
  "Competitive Programmer",
  "Systems Architect",
];

function useTypingAnimation(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));
          if (currentText.length === word.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));
          if (currentText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return currentText;
}

export default function HeroSection() {
  const typedRole = useTypingAnimation(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/15 text-primary font-label text-xs font-semibold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for New Ventures
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-headline leading-[1.05] tracking-tight text-on-surface"
          >
            I&apos;m{" "}
            <span className="text-primary">Aditya</span>.{" "}
            <span className="block mt-2">
              <span className="text-on-surface-variant">{typedRole}</span>
              <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-typing-cursor" />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed"
          >
            Full-Stack Developer and AI Enthusiast building high-performance
            systems with the precision of a competitive programmer.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-headline font-semibold tracking-wide text-lg transition-all flex items-center gap-2 cursor-target"
            >
              View Projects
              <span className="material-symbols-outlined">arrow_outward</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 98, 157, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent border border-outline-variant/20 text-primary px-8 py-4 rounded-full font-bold text-lg transition-all cursor-target"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right: Bento Cards */}
        <motion.div
          className="lg:col-span-5 grid grid-cols-2 gap-4 relative"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Main Card - Full-Stack Architect */}
          <motion.div
            variants={fadeInRight}
            className="glass-card p-6 rounded-3xl border border-outline-variant/10 shadow-sky-sm col-span-2 hover:shadow-sky-md transition-shadow duration-500 cursor-target"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">code</span>
              </div>
              <div>
                <h3 className="font-bold font-headline">Full-Stack Architect</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
                  Scalable Systems
                </p>
              </div>
            </div>
            <div className="h-24 w-full rounded-xl bg-inverse-surface p-4 font-mono text-[11px] text-primary-fixed leading-relaxed overflow-hidden">
              <span className="text-outline-variant">
                {"// Initialize complex architecture"}
              </span>
              <br />
              {"const portfolio = new SkyGlass({"}
              <br />
              {"  techStack: ['React', 'Go', 'PyTorch'],"}
              <br />
              {"  performance: '100ms'"}
              <br />
              {"});"}
            </div>
          </motion.div>

          {/* AI/ML Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: "0px 20px 40px rgba(0,98,157,0.08)" }}
            className="glass-card p-6 rounded-3xl border border-outline-variant/10 shadow-sky-sm transition-all duration-500 cursor-target"
          >
            <div className="h-10 w-10 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center mb-3">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h4 className="font-bold text-sm font-headline">AI/ML</h4>
            <p className="text-xs text-on-surface-variant mt-1">
              Neural networks & logic.
            </p>
          </motion.div>

          {/* Competitive Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4, boxShadow: "0px 20px 40px rgba(0,98,157,0.08)" }}
            className="glass-card p-6 rounded-3xl border border-outline-variant/10 shadow-sky-sm transition-all duration-500 cursor-target"
          >
            <div className="h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-3">
              <span className="material-symbols-outlined">emoji_events</span>
            </div>
            <h4 className="font-bold text-sm font-headline">Competitive</h4>
            <p className="text-xs text-on-surface-variant mt-1">
              Ranked Top 1% Global.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <TechMarquee />
      </div>
    </section>
  );
}

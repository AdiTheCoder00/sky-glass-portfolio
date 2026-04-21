"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

import MagicBento from "./MagicBento";

const expertiseCards = [
  {
    color: "transparent",
    title: "Performance First",
    description: "Deeply optimized backend services utilizing Go and Rust for high-throughput requirements and low-latency response times.",
    label: "Terminal",
  },
  {
    color: "transparent",
    title: "Clean Interface",
    description: "Crafting editorial-grade frontends that prioritize clarity, accessibility, and fluid user interaction using Next.js and Tailwind.",
    label: "Design",
  },
  {
    color: "transparent",
    title: "Applied AI",
    description: "Integrating Large Language Models and computer vision into production environments to solve non-trivial business logic problems.",
    label: "AI Systems",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-surface-container-low py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div className="max-w-xl" variants={fadeInUp}>
            <h2 className="text-primary font-label text-sm font-bold uppercase tracking-widest mb-4">
              Core Expertise
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tighter leading-tight">
              Full-Stack & AI Expertise
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="text-on-surface-variant text-lg max-w-xs font-light italic"
          >
            &ldquo;The best software feels as natural and expansive as the open
            sky.&rdquo;
          </motion.div>
        </motion.div>

        {/* Magic Bento Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <MagicBento 
            items={expertiseCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={15}
            glowColor="168, 85, 247" 
          />
        </motion.div>
      </div>
    </section>
  );
}

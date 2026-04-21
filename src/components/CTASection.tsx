"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto glass-card rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center border border-outline-variant/15 shadow-2xl relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {/* Decorative cloud */}
        <div className="absolute top-0 right-0 p-4 opacity-10 hidden sm:block">
          <span className="material-symbols-outlined text-[10rem] md:text-[12rem]">
            cloud
          </span>
        </div>

        <div className="relative z-10 space-y-6 md:space-y-8">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-headline tracking-tighter"
          >
            Work With Me
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-light"
          >
            I am currently accepting select freelance projects and full-time
            opportunities with visionary teams.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-container text-on-primary-container px-8 md:px-10 py-4 md:py-5 rounded-full font-headline font-semibold tracking-wide text-lg transition-all"
            >
              Start a Conversation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface-container-low border border-outline-variant/20 text-on-surface px-8 md:px-10 py-4 md:py-5 rounded-full font-medium tracking-wide text-lg hover:bg-surface-container-lowest transition-all"
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

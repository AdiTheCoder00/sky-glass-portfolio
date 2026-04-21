"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";
import { ParticleCard, GlobalSpotlight } from "./MagicBento";
import { useRef } from "react";

const projects = [
  {
    title: "Nebula Dashboard v2",
    subtitle: "Enterprise Cloud Management",
    description:
      "A complete reimagining of cloud infrastructure visualization. Built with high-frequency data streams and a custom-engineered glass rendering engine for real-time observability.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqBGCYoT6aMpFUc-PT-D5ByY2ilF7w0fht9LSaURw25sVumCPJaDiFoSMg0CSfVCxiWgrF7TtvK1li5nc-b5__y9hVfFRqJ7Ktla5l6jWgJq5tXNlsQUTmurriKHi0WHh6rzMowdCl4eNkGtfFvWpBJH5iDJf28zc_q95mc1SZW-uimeoOZUENoGm37Sttg-rw7vaJ8L4OiLxKLS1UKPU6sxa5uS_ymQpGn3UngprQPgXinAoe_O2OatAXQI4KF8Cy3j4lukWL_s",
    featured: true,
  },
  {
    title: "Lumina Mobile",
    subtitle: "AI Research",
    description:
      "Personal finance tracking with focus on tranquility and cognitive ease.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1o9nXU3USzO5IvgxpONCNeeJImHrF1Mf2s_iLg34bi4wgN3CtuJYRbFqXAE3Bixe95teIdB0yjYml1ej2H6lUqBmiWptjy78AEcV-kNTn2Kc76isgu95-Bh1fOSanf72g9MDFXStwLCF43Vq9tDkphEt6m9eluqSHRWDDNPrTSh-pYHr801mK70w7qyBShq8I6Fx2tk1KgXf4bWklZTOywKdgpKPbLcAggTlix52ObVDGNG_rQp5ZY7oW_XefHdzQmWqZ3SHxyEE",
    featured: false,
  },
  {
    title: "Prism Analytics",
    subtitle: "React / Three.js",
    description:
      "Advanced algorithmic trading platform with multi-dimensional glass UI.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMPx4NRi_x0hB60wkwvR8P4iGYDv2Ivwiq4JO_Oh3lCH9lGl8fTjjUZgnQNo21af9qG3seSYizzxwB-hRCY6AXuUuAh7VaF96GHo_BcgoP6RURVaOPl_1pbyUMTujljpVzP39WE-GGxqJQlnmQPDITVzlbCOfy1Y8NXMmaiapbOqxRImbgzzVLIBw3b3FbkC8eqQ5a22TWJ2ly3y9YX52Wji_JywGYAFsefYMekaMB0oJhTKyss9F2KPmgP-Zy7RvoRq-DnmXx42o",
    featured: false,
  },
  {
    title: "Stratosphere OS",
    subtitle: "Experimental",
    description:
      "An experimental browser-based operating system designed for focus and deep work. Featuring a minimal window management system and ambient audio integration.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGomD0S-4Pt8CxN8J3syrolEuXd29tRVEqyDmlJ9n_Y3b703s_1TGdWA5cSkiOmj27F-YFoulYCk-dcvGK_1pXoFSyTJc3aGfYA_FhXuVvrKLFoSNWRBS70nG2pcNJR0_w2YTSEukjRA7c79rkIRgcONkd58yYte_NxrUqXromb4lb2B2DU7hJkC9orytS_9BjkIuYrwN2WHYGZM9eW-ulkHQAhzlykO8mRvyLqCrhpjGiRz81FLIeTZk4Z-Dg6lh-Nh5PexW35XI",
    wide: true,
  },
];

export default function ProjectsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.header
          className="mb-12 md:mb-20 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary font-label uppercase tracking-widest text-sm font-semibold mb-4 block"
          >
            Portfolio Gallery
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-tight mb-6"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light"
          >
            A curated selection of software development projects focusing on
            user interface design, technical performance, and scalable
            architecture.
          </motion.p>
        </motion.header>

        {/* Projects Bento Grid */}
        <GlobalSpotlight gridRef={gridRef} glowColor="168, 85, 247" />
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 bento-section"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Featured: Nebula Dashboard */}
          <motion.div
            variants={fadeInUp}
            whileHover={{
              y: -8,
              transition: { duration: 0.4, ease: skyEasing },
            }}
            className="md:col-span-8 group relative"
          >
            <ParticleCard particleCount={0} glowColor="168, 85, 247" className="h-full w-full magic-bento-card--border-glow overflow-hidden rounded-3xl bg-surface-container-lowest glass-card shadow-sky-sm transition-all duration-500" style={({'--glow-color': '168, 85, 247', padding: 0} as any)}>
            <div className="aspect-video w-full overflow-hidden relative">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface tracking-tight">
                    {projects[0].title}
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    {projects[0].subtitle}
                  </p>
                </div>
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary-container/10 transition-colors cursor-pointer"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-primary">code</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center hover:brightness-110 transition-all cursor-pointer"
                    href="#"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                  </motion.a>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                {projects[0].description}
              </p>
            </div>
            </ParticleCard>
          </motion.div>

          {/* Lumina Mobile */}
          <motion.div
            variants={fadeInUp}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,98,157,0.08)",
              transition: { duration: 0.4, ease: skyEasing },
            }}
            className="md:col-span-4 group relative"
          >
            <ParticleCard particleCount={0} glowColor="168, 85, 247" className="h-full w-full magic-bento-card--border-glow bg-surface-container-low rounded-3xl overflow-hidden transition-all duration-500" style={({'--glow-color': '168, 85, 247', padding: 0} as any)}>
            <div className="aspect-square relative">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-headline font-bold mb-2">
                {projects[1].title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                {projects[1].description}
              </p>
              <motion.button
                whileHover={{ gap: "12px" }}
                className="text-primary text-sm font-semibold flex items-center gap-2"
              >
                View Case{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </motion.button>
            </div>
            </ParticleCard>
          </motion.div>

          {/* Prism Analytics */}
          <motion.div
            variants={fadeInUp}
            whileHover={{
              y: -8,
              transition: { duration: 0.4, ease: skyEasing },
            }}
            className="md:col-span-4 group relative"
          >
            <ParticleCard particleCount={0} glowColor="168, 85, 247" className="h-full w-full magic-bento-card--border-glow bg-surface-container-lowest glass-card rounded-3xl overflow-hidden shadow-sky-sm transition-all duration-500" style={({'--glow-color': '168, 85, 247', padding: 0} as any)}>
            <div className="aspect-video relative">
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-headline font-bold mb-2">
                {projects[2].title}
              </h3>
              <p className="text-sm text-on-surface-variant mb-6">
                {projects[2].description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-label uppercase tracking-widest text-outline">
                  {projects[2].subtitle}
                </span>
                <span className="material-symbols-outlined text-primary text-xl">
                  terminal
                </span>
              </div>
            </div>
            </ParticleCard>
          </motion.div>

          {/* Stratosphere OS — Wide */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-8 group relative"
          >
            <ParticleCard particleCount={0} glowColor="168, 85, 247" className="h-full w-full magic-bento-card--border-glow flex flex-col md:flex-row bg-surface-container-high rounded-3xl overflow-hidden" style={({'--glow-color': '168, 85, 247', padding: 0} as any)}>
            <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-4">
                {projects[3].title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8">
                {projects[3].description}
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-on-surface text-surface px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  GitHub Repository
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-outline/20 px-6 py-2 rounded-full text-sm font-medium hover:bg-surface-container-lowest transition-colors"
                >
                  Live Demo
                </motion.button>
              </div>
            </div>
            <div className="md:w-1/2 relative overflow-hidden min-h-[250px]">
              <Image
                src={projects[3].image}
                alt={projects[3].title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            </ParticleCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative atmospheric elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-container/5 rounded-full blur-[120px] pointer-events-none -z-10 will-change-transform" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10 will-change-transform" />
    </section>
  );
}

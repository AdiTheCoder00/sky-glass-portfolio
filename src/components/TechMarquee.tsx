"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportOnce } from "@/lib/animations";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "Go", icon: "🔵" },
  { name: "PyTorch", icon: "🔥" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "⎈" },
  { name: "Redis", icon: "🔴" },
  { name: "GraphQL", icon: "◆" },
  { name: "TailwindCSS", icon: "💨" },
  { name: "Git", icon: "📦" },
  { name: "AWS", icon: "☁️" },
  { name: "Figma", icon: "🎨" },
];

export default function TechMarquee() {
  const doubled = [...technologies, ...technologies];
  const spotlightRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.section
      ref={spotlightRef}
      onMouseMove={handleMouseMove}
      className="pb-12 md:pb-16 pt-0 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      {/* Cursor spotlight */}
      <div
        className="show-in-dark-only pointer-events-none absolute -z-5 w-[500px] h-[500px] rounded-full opacity-20 transition-opacity duration-300"
        style={{
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-3 px-6 py-3 mx-3 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary-container/30 hover:bg-primary-container/5 transition-all duration-300 whitespace-nowrap select-none cursor-default"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="font-headline font-semibold text-sm text-on-surface-variant">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

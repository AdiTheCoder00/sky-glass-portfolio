"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const stats = [
  { value: 15, suffix: "+", label: "Projects Built", icon: "rocket_launch" },
  { value: 10000, suffix: "+", label: "Lines of Code", icon: "code" },
  { value: 5, suffix: "+", label: "Tech Stacks", icon: "layers" },
  { value: 99, suffix: "%", label: "Uptime SLA", icon: "verified" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(stat.value, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="counter-card glass-card glow-card rounded-2xl p-6 md:p-8 border border-outline-variant/10 text-center"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
        <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
      </div>
      <div className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mb-2">
        {count.toLocaleString()}
        <span className="text-primary-container">{stat.suffix}</span>
      </div>
      <p className="text-sm text-on-surface-variant font-medium uppercase tracking-wider">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-6xl mx-auto">
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

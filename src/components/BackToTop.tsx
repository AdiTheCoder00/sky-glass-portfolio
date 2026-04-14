"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ultra-reliable scroll listener
    const toggleVisibility = () => {
      // Use documentElement.scrollTop as a fallback for window.scrollY
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Check immediately on mount

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }}
          whileHover={{ scale: 1.15, filter: "brightness(1.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/50 transition-all hover:bg-primary/90"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined text-3xl">arrow_upward</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass-navbar shadow-sky-nav"
            : "bg-white/50 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold tracking-tighter text-sky-900 hover:text-purple-600 transition-colors duration-300 font-headline cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNavClick("#home")}
          >
            Aditya Maini
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative py-1 font-headline tracking-tight transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary font-semibold"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/30 rounded-full"
                    transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2.5 rounded-full font-headline font-semibold transition-all duration-300"
          >
            Let&apos;s Build
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-sky-700 p-2 rounded-xl transition-all"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed inset-y-0 right-0 z-[60] flex flex-col p-8 bg-white/95 backdrop-blur-2xl rounded-l-3xl w-80 shadow-2xl shadow-sky-900/10"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-headline font-extrabold text-2xl text-sky-900">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-surface-container-low transition-colors"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <nav className="space-y-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`flex items-center gap-4 w-full p-4 rounded-xl text-left font-label text-base font-medium uppercase tracking-widest transition-all ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-sky-100 text-sky-700"
                        : "text-slate-500 hover:bg-surface-container-low hover:pl-6"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-primary-container text-on-primary-container py-4 rounded-full font-bold text-lg mt-8"
              >
                Let&apos;s Build
              </motion.button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

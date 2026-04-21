"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeInRight, staggerContainer, viewportOnce, skyEasing } from "@/lib/animations";

const socialLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    href: "https://github.com/AdiTheCoder00",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://linkedin.com/in/adityamaini",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    label: "Twitter",
    href: "https://twitter.com/adityamaini",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    href: "mailto:adityamaini@example.com",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
        // Fallback for demonstration if environment variable is missing
        console.warn("NEXT_PUBLIC_FORM_ENDPOINT is not set.");
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          setFormState({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
        return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setError("Oops! There was a network error submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.header
        className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div className="max-w-2xl" variants={fadeInUp}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-none">
            Contact
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-col items-start gap-4"
          variants={fadeInUp}
        >
          <p className="text-lg text-on-surface-variant max-w-xs leading-relaxed">
            Open for high-impact collaborations and architectural code
            inquiries.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-outline-variant/20 text-primary font-semibold hover:bg-surface-container-low transition-all"
          >
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </motion.button>
        </motion.div>
      </motion.header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          className="lg:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] border border-outline-variant/10 shadow-sky-sm">
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Design Maven"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@studio.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">
                  Message*
                </label>
                <textarea
                  required
                  placeholder="Tell me about the atmosphere you want to build..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-surface-container-high border-none rounded-xl p-4 focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all duration-300 outline-none resize-none"
                />
              </div>

              {error && (
                <div className="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm font-medium">
                  {error}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02, filter: isSubmitting || submitted ? "none" : "brightness(1.1)" }}
                whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
                className={`w-full md:w-auto bg-primary-container text-white px-10 py-4 rounded-full font-medium text-xl antialiased transition-all flex items-center justify-center gap-3 ${
                  (isSubmitting || submitted) ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <span className="material-symbols-outlined animate-spin">refresh</span>
                  </>
                ) : submitted ? (
                  <>
                    Message Sent!
                    <span className="material-symbols-outlined">check_circle</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* Image Card */}
          <motion.div
            variants={fadeInRight}
            className="relative group h-48 md:h-64 rounded-[2rem] overflow-hidden"
          >
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb_hArvYNZ3BfPCDduXRn-N3jJY-Q4zG2v8C9EWnIiZB_UUOuSJ4g3ZnsXn_afhfoENVE8NTbvJsiEacKx3QifdgbtYECxq9Skee_rMz5Jvl_eov6OE00Fvx3Jwmsdj539Ynrob5W3ekm5gMMq-XQIThDbldz8tD5Taqd-N-5XrgMlACWYftFZ6axVW-pQWHENMpKmLDrF6cBAXZwDvLE9eft_YHx3tTlPPs3VT7iql9S4hz9jbhNkn-dxjqHE2kmGrn84VEItkug"
              alt="Digital connectivity concept"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          </motion.div>

          {/* Connect Links */}
          <motion.div
            variants={fadeInRight}
            className="bg-surface-container-low rounded-[2rem] p-6 md:p-8 space-y-6"
          >
            <h3 className="font-headline font-bold text-2xl text-on-surface">
              Connect
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2, ease: skyEasing },
                  }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-surface-container-lowest hover:bg-primary-container/10 transition-all group border border-transparent hover:border-primary-container/20"
                >
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {link.icon}
                  </div>
                  <span className="font-semibold text-on-surface-variant text-sm md:text-base">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Status Card */}
          <motion.div
            variants={fadeInRight}
            className="p-6 md:p-8 border border-outline-variant/30 rounded-[2rem] flex items-center justify-between"
          >
            <div>
              <p className="text-sm font-bold text-outline uppercase tracking-widest mb-1">
                Current Status
              </p>
              <p className="text-on-surface-variant font-medium">
                Available for Q3 Projects
              </p>
            </div>
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

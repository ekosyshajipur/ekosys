"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" aria-label="Hero">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-24">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-number">EKOSYS CORPORATION</span>

            <h2
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy-900 leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Engineering{" "}
              <span className="text-green-700">the Future</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Delivering world-class engineering, technology, design and
              infrastructure solutions across renewable energy, architectural
              facades, medical technology, architecture and electronics.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button href="#solutions" variant="primary" size="lg" arrow id="hero-cta-primary">
                Explore Our Solutions
              </Button>
              <Button href="/contact" variant="outline" size="lg" id="hero-cta-secondary">
                Talk to an Expert
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>5 Engineering Divisions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500" />
                <span>End-to-End Solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/solar/Homepage-Hero-Image.webp"
                alt="EKOSYS Corporation — Engineering solutions across solar energy, facades, medical technology, architecture, and IT"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-700">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Trusted by</p>
                <p className="text-sm font-bold text-navy-900">
                  Industries Nationwide
                </p>
              </div>
            </div>

            {/* Accent corner */}
            <div className="absolute -top-3 -right-3 w-24 h-24 border-2 border-green-200 rounded-3xl opacity-50 hidden lg:block" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

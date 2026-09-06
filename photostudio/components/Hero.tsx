"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] w-full items-end overflow-hidden bg-ink">
      <Image
        src="https://picsum.photos/seed/hero-main/2400/1500"
        alt="A candid wedding moment at golden hour"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-[13px] text-paper/70"
        >
          Wedding &amp; Travel Photography — Pune, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-5xl font-light leading-[1.05] text-paper sm:text-6xl md:text-7xl"
        >
          Stories, told through light.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/80"
        >
          Photography that captures the moments, emotions and places that
          make life unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="/stories"
            className="border border-paper px-6 py-3 text-[13px] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
          >
            Explore Stories
          </a>
          <a
            href="/#contact"
            className="px-6 py-3 text-[13px] text-paper/85 underline decoration-paper/40 underline-offset-4 transition-colors hover:text-paper"
          >
            Let&rsquo;s Create Together
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 md:hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="h-10 w-px bg-paper/50" />
          <span className="text-[10px] uppercase tracking-widest text-paper/50">
            Scroll
          </span>
        </div>
      </motion.div>
    </section>
  );
}

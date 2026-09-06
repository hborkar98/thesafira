"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Stories", href: "/stories" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-cinematic ${
          scrolled || open ? "bg-paper/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            className="font-display text-lg tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            Amber &amp; Ash
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] text-ink/80 transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="rounded-none border border-ink px-4 py-2 text-[13px] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Let&rsquo;s Talk
            </Link>
          </nav>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {[{ label: "Home", href: "/" }, ...LINKS].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <p className="absolute bottom-10 left-8 text-sm text-ink/60">
              Pune, India — available worldwide
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

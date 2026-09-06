"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import { StoryImage } from "@/lib/types";

export default function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: StoryImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const isOpen = index !== null;
  const current = isOpen ? images[index] : null;

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) goNext();
    else if (info.offset.x > 80) goPrev();
  };

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/97 px-4"
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 text-2xl text-paper/80 transition-colors hover:text-paper"
          >
            ✕
          </button>

          <button
            aria-label="Previous image"
            onClick={goPrev}
            className="absolute left-2 z-10 hidden h-11 w-11 items-center justify-center text-3xl text-paper/70 transition-colors hover:text-paper sm:flex"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={goNext}
            className="absolute right-2 z-10 hidden h-11 w-11 items-center justify-center text-3xl text-paper/70 transition-colors hover:text-paper sm:flex"
          >
            ›
          </button>

          <motion.div
            key={current.src}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            className="relative flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
          >
            <div className="relative max-h-[75vh] w-full">
              <Image
                src={current.src}
                alt={current.alt}
                width={1800}
                height={1200}
                className={`mx-auto max-h-[75vh] w-auto object-contain ${
                  current.mono ? "grayscale" : ""
                }`}
                priority
              />
            </div>
            {(current.caption || current.alt) && (
              <p className="mt-4 text-center text-[13px] text-paper/60">
                {current.caption ?? current.alt}
              </p>
            )}
            <p className="mt-1 text-[11px] text-paper/35">
              {index !== null ? index + 1 : 0} / {images.length}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

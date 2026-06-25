"use client";

import { motion } from "framer-motion";
import MasonryGrid from "@/components/gallery/MasonryGrid";

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-display text-6xl md:text-8xl font-black text-cream mb-6">
          Through the Lens
        </h1>
        <p className="text-gold font-mono text-sm uppercase tracking-[0.3em]">
          Moments, Flavours, and Memories.
        </p>
      </div>

      <MasonryGrid />
    </motion.div>
  );
}

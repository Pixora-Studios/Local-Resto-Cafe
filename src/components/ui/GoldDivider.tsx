"use client";

import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function GoldDivider({
  className = "",
  orientation = "horizontal",
}: GoldDividerProps) {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`${
        orientation === "horizontal" ? "h-[1px] w-full" : "w-[1px] h-full"
      } bg-gold/30 ${className}`}
    />
  );
}

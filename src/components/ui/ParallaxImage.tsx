"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  className?: string;
  gradient?: string;
  overlay?: boolean;
}

export default function ParallaxImage({
  className = "",
  gradient = "linear-gradient(160deg, #1A1208 0%, #2E1A0A 100%)",
  overlay = true,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      <motion.div
        style={{
          y,
          backgroundImage: gradient,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-[-20%] w-[140%] h-[140%]"
      >
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3E")` }}>
        </div>
      </motion.div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none" />
      )}
    </div>
  );
}

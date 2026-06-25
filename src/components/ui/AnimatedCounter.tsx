"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  duration = 2000,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const isFloat = value % 1 !== 0;
        const formatted = isFloat
          ? latest.toFixed(1)
          : Math.floor(latest).toString();

        ref.current.textContent = formatted + suffix;
      }
    });
  }, [springValue, suffix, value]);

  return (
    <span
      ref={ref}
      className={`font-mono text-gold ${className}`}
    >
      0{suffix}
    </span>
  );
}

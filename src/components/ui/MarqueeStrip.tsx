"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MarqueeStripProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function MarqueeStrip({
  text,
  speed = 20,
  reverse = false,
  className = "",
}: MarqueeStripProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const textWidth = textRef.current.offsetWidth;
    const duration = textWidth / speed;

    const tween = gsap.to(textRef.current, {
      x: reverse ? textWidth / 2 : -(textWidth / 2),
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [speed, reverse, text]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap border-y border-border py-4 bg-bg ${className}`}
    >
      <div ref={textRef} className="inline-block">
        <span className="font-mono text-lg md:text-xl text-gold uppercase tracking-widest px-4">
          {text} {text} {text} {text}
        </span>
      </div>
    </div>
  );
}

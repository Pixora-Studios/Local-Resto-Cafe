"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: "🍽", label: "Dine-In" },
  { icon: "🚗", label: "Drive-Through" },
  { icon: "🛵", label: "Delivery" },
  { icon: "🎵", label: "Live Music" },
];

export default function FeatureBadges() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-item", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface border-y border-border py-6"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item flex items-center space-x-3 group"
            >
              <span className="text-xl grayscale group-hover:grayscale-0 transition-all duration-300">
                {feature.icon}
              </span>
              <span className="font-mono text-xs md:text-sm text-muted uppercase tracking-[0.15em] group-hover:text-gold transition-colors">
                {feature.label}
              </span>
              {index < features.length - 1 && (
                <div className="hidden md:block h-4 w-[1px] bg-border ml-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

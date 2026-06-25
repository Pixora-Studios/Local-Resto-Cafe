"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function AmbientQuote() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into words for animation
    const text = textRef.current.innerText;
    textRef.current.innerHTML = text
      .split(" ")
      .map((word) => `<span class="quote-word inline-block opacity-20 mr-[0.25em]">${word}</span>`)
      .join("");

    const words = textRef.current.querySelectorAll(".quote-word");

    const ctx = gsap.context(() => {
      gsap.to(words, {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] flex items-center justify-center bg-bg py-32 overflow-hidden"
    >
      {/* Giant Background Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20rem] md:text-[30rem] text-gold opacity-[0.03] pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <div
          ref={textRef}
          className="font-display italic font-medium text-cream leading-tight mb-8"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          &ldquo;A cozy ambience, flavours from near and far, and staff that feel like family.&rdquo;
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="font-mono text-xs md:text-sm text-gold uppercase tracking-[0.3em]"
        >
          &mdash; A Guest, Bhubaneswar
        </motion.p>
      </div>
    </section>
  );
}

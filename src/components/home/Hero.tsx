"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ParallaxImage from "../ui/ParallaxImage";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const words = headlineRef.current.querySelectorAll(".word-reveal");

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      words,
      { clipPath: "inset(0 0 100% 0)", y: 100 },
      {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out"
      }
    );

    tl.fromTo(
      ".hero-sub",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".hero-cta",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
      "-=0.4"
    );

    tl.fromTo(
      ".hero-rating",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );

    // Breathe effect for background
    gsap.to(".hero-gradient", {
      opacity: 0.6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section
      className="relative min-h-[100svh] w-full bg-bg flex items-center overflow-hidden pt-20"
    >
      {/* Background Animated Gradient */}
      <div className="hero-gradient absolute top-1/2 left-0 -translate-y-1/2 w-[60%] h-[80%] rounded-full bg-gold/10 blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center relative z-10">

        {/* Left: Content */}
        <div className="flex flex-col">
          <h1
            ref={headlineRef}
            className="font-display font-black text-cream leading-[0.95] mb-8"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)" }}
          >
            <div className="overflow-hidden block">
              <span className="word-reveal inline-block">Flavours</span>
            </div>
            <div className="overflow-hidden block">
              <span className="word-reveal inline-block">From Near</span>
            </div>
            <div className="overflow-hidden block">
              <span className="word-reveal inline-block">& Far.</span>
            </div>
          </h1>

          <p className="hero-sub font-body text-muted mb-10 max-w-lg" style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}>
            Multicuisine dining at its finest — in the heart of Rasulgarh, Bhubaneswar.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="hero-cta px-10 py-4 bg-gold text-bg font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              Explore Menu
            </Link>
            <Link
              href="/reserve"
              className="hero-cta px-10 py-4 border border-gold text-gold font-bold rounded-full transition-all hover:bg-gold hover:text-bg"
            >
              Reserve a Table
            </Link>
          </div>

          <div className="hero-rating mt-16 flex items-center">
            <div className="px-4 py-2 border border-gold/30 rounded-full font-mono text-sm text-gold bg-surface/50 backdrop-blur-sm">
              ⭐ 4.4 · 1,550+ Reviews
            </div>
          </div>
        </div>

        {/* Right: Image Slot */}
        <div className="hidden lg:block relative h-[80vh]">
          <ParallaxImage
            className="w-full h-full"
            gradient="linear-gradient(160deg, #1A1208 0%, #2E1A0A 100%)"
          />
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce pointer-events-none"
      >
        <span className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-2">Scroll to Explore</span>
        <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

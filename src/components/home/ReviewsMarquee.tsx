"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { reviews } from "@/lib/reviewsData";

export default function ReviewsMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (!row1 || !row2) return;

    const setupMarquee = (el: HTMLDivElement, reverse: boolean) => {
      const width = el.scrollWidth / 2;
      gsap.to(el, {
        x: reverse ? width : -width,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    };

    setupMarquee(row1, false);
    setupMarquee(row2, true);

    return () => {
      gsap.killTweensOf(row1);
      gsap.killTweensOf(row2);
    };
  }, []);

  const half = Math.ceil(reviews.length / 2);
  const row1Data = reviews.slice(0, half);
  const row2Data = reviews.slice(half);

  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="font-display text-4xl font-bold text-cream text-center">
          Voices of Our Guests
        </h2>
      </div>

      <div className="flex flex-col space-y-6">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap">
          <div ref={row1Ref} className="flex space-x-6">
            {[...row1Data, ...row1Data].map((review, i) => (
              <div
                key={i}
                className="bg-surface border border-border px-8 py-4 rounded-full flex items-center space-x-4 shadow-xl"
              >
                <span className="text-gold">⭐⭐⭐⭐⭐</span>
                <span className="text-cream/90 font-medium italic">&ldquo;{review.text}&rdquo;</span>
                <span className="text-muted text-xs uppercase tracking-widest font-mono">&mdash; {review.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex whitespace-nowrap">
          <div ref={row2Ref} className="flex space-x-6">
            {[...row2Data, ...row2Data].map((review, i) => (
              <div
                key={i}
                className="bg-surface border border-border px-8 py-4 rounded-full flex items-center space-x-4 shadow-xl"
              >
                <span className="text-gold">⭐⭐⭐⭐⭐</span>
                <span className="text-cream/90 font-medium italic">&ldquo;{review.text}&rdquo;</span>
                <span className="text-muted text-xs uppercase tracking-widest font-mono">&mdash; {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

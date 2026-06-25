"use client";

import { motion } from "framer-motion";
import StorySection from "@/components/about/StorySection";
import StatsRow from "@/components/about/StatsRow";

const pillars = [
  { icon: "🍴", title: "Honest Flavours", desc: "Every dish made fresh, every time." },
  { icon: "👐", title: "Warm Hospitality", desc: "Staff that feel like old friends." },
  { icon: "💰", title: "Fair Prices", desc: "Premium taste, pocket-friendly pricing." },
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6 mb-24 text-center">
        <h1 className="font-display text-6xl md:text-8xl font-black text-cream mb-6">
          More Than a Meal.
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          We&apos;re a gathering place for foodies, families, and friends in the heart of Bhubaneswar.
        </p>
      </div>

      <StorySection />

      <StatsRow />

      {/* Pillars Section */}
      <section className="py-24 bg-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center space-y-4"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="font-display text-2xl font-bold text-cream">{pillar.title}</h3>
                <p className="text-muted">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

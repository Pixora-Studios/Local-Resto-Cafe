"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { id: "01", name: "North Indian & Mughlai", color: "from-amber-900/40" },
  { id: "02", name: "Chinese & Asian", color: "from-red-900/40" },
  { id: "03", name: "Continental & Grills", color: "from-blue-900/40" },
  { id: "04", name: "Desserts & Beverages", color: "from-emerald-900/40" },
];

export default function MenuTeaser() {
  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            A World of Flavours
          </h2>
          <p className="text-muted max-w-lg">
            Our menu is a curated journey through diverse culinary landscapes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/menu" className="group block relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-surface border border-border hover:border-gold/30 transition-all duration-500">
                {/* Background Number */}
                <div className="absolute top-1/2 left-8 -translate-y-1/2 font-display text-9xl font-black text-white/[0.03] group-hover:text-gold/[0.05] transition-colors duration-500">
                  {cat.id}
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cat.color} to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex items-center justify-between">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-cream group-hover:text-gold transition-colors duration-500">
                    {cat.name}
                  </h3>
                  <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream group-hover:border-gold group-hover:text-gold transition-all duration-500 -rotate-45 group-hover:rotate-0">
                    →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

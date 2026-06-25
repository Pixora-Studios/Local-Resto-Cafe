"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Food", "Ambience", "Drinks", "Events"];

const items = [
  { id: 1, category: "Food", gradient: "linear-gradient(135deg, #1A1208 0%, #2E1A0A 100%)", span: "row-span-2" },
  { id: 2, category: "Ambience", gradient: "linear-gradient(135deg, #0A0A08 0%, #1E1E1A 100%)", span: "row-span-1" },
  { id: 3, category: "Drinks", gradient: "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)", span: "row-span-2" },
  { id: 4, category: "Food", gradient: "linear-gradient(135deg, #450A0A 0%, #7F1D1D 100%)", span: "row-span-1" },
  { id: 5, category: "Events", gradient: "linear-gradient(135deg, #064E3B 0%, #065F46 100%)", span: "row-span-2" },
  { id: 6, category: "Ambience", gradient: "linear-gradient(135deg, #111110 0%, #1E1E1A 100%)", span: "row-span-1" },
  { id: 7, category: "Food", gradient: "linear-gradient(135deg, #422006 0%, #78350F 100%)", span: "row-span-1" },
  { id: 8, category: "Drinks", gradient: "linear-gradient(135deg, #1A1A1A 0%, #333333 100%)", span: "row-span-2" },
  { id: 9, category: "Events", gradient: "linear-gradient(135deg, #1E1E1A 0%, #0A0A08 100%)", span: "row-span-1" },
  { id: 10, category: "Food", gradient: "linear-gradient(135deg, #2E1A0A 0%, #1A1208 100%)", span: "row-span-1" },
  { id: 11, category: "Ambience", gradient: "linear-gradient(135deg, #111110 0%, #000000 100%)", span: "row-span-2" },
  { id: 12, category: "Drinks", gradient: "linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)", span: "row-span-1" },
];

export default function MasonryGrid() {
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" ? items : items.filter(i => i.category === filter);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-gold ${
              filter === cat ? "text-gold" : "text-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl group ${item.span}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ background: item.gradient }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-end p-6">
                <span className="font-mono text-[10px] text-gold uppercase tracking-[0.2em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.category}
                </span>
                <h4 className="font-display text-lg text-cream translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  Captured Moments
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

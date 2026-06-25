"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { menuItems } from "@/lib/menuData";
import MenuCard from "./MenuCard";

const categories = [
  "All",
  "North Indian",
  "Chinese",
  "Continental",
  "Kebabs & Grills",
  "Biryani",
  "Soups",
  "Beverages",
  "Desserts",
];

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-bg/80 backdrop-blur-md py-6 mb-12 border-b border-border">
        <div className="flex overflow-x-auto space-x-8 hide-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors hover:text-gold ${
                activeCategory === cat ? "text-gold" : "text-muted"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

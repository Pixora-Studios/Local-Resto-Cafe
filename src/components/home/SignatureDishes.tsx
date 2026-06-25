"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GoldDivider from "../ui/GoldDivider";

const signatures = [
  {
    name: "Dragon Chicken",
    price: "₹249",
    category: "Chinese",
    desc: "Crispy chicken tossed in fiery dragon sauce",
    gradient: "linear-gradient(135deg, #422006 0%, #78350f 100%)"
  },
  {
    name: "Brownie Shake",
    price: "₹179",
    category: "Desserts",
    desc: "Rich chocolate brownie blended to perfection",
    gradient: "linear-gradient(135deg, #27170a 0%, #4a2c11 100%)"
  },
  {
    name: "Chicken Farmhouse Pizza",
    price: "₹299",
    category: "Continental",
    desc: "Loaded with farm-fresh toppings",
    gradient: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)"
  },
  {
    name: "Burnt Garlic Soup",
    price: "₹149",
    category: "Soups",
    desc: "Smoky, aromatic broth with a golden finish",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
  },
  {
    name: "Chicken Drums of Heaven",
    price: "₹259",
    category: "Kebabs",
    desc: "Glazed lollipops with signature dip",
    gradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)"
  },
  {
    name: "Veg Biryani",
    price: "₹199",
    category: "Biryani",
    desc: "Fragrant basmati with seasonal vegetables",
    gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)"
  },
];

export default function SignatureDishes() {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div className="flex items-center space-x-6 flex-grow">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream whitespace-nowrap">
              Our Signatures
            </h2>
            <GoldDivider className="hidden md:block" />
          </div>
          <Link
            href="/menu"
            className="group flex items-center text-gold font-medium hover:text-gold-dim transition-colors"
          >
            View Full Menu
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Mobile: Horizontal Scroll | Desktop: 3-Column Grid */}
        <div className="flex overflow-x-auto pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
          {signatures.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-[85vw] md:min-w-0 snap-center"
            >
              <div className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                {/* Image Placeholder */}
                <div
                  className="h-64 w-full relative"
                  style={{ background: dish.gradient }}
                >
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="font-mono text-[10px] text-muted uppercase tracking-widest block mb-1">
                        {dish.category}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-cream group-hover:text-gold transition-colors">
                        {dish.name}
                      </h3>
                    </div>
                    <span className="font-mono text-gold font-bold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                    {dish.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

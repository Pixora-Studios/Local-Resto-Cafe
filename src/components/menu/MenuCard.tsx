"use client";

import { motion } from "framer-motion";

interface MenuCardProps {
  item: {
    id: number;
    name: string;
    category: string;
    type: string;
    price: number;
    description: string;
    popular?: boolean;
  };
}

export default function MenuCard({ item }: MenuCardProps) {
  // Generate a consistent gradient based on item ID for visual variety
  const gradients = [
    "linear-gradient(135deg, #1A1208 0%, #2E1A0A 100%)",
    "linear-gradient(135deg, #111110 0%, #1E1E1A 100%)",
    "linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)",
    "linear-gradient(135deg, #450A0A 0%, #7F1D1D 100%)",
    "linear-gradient(135deg, #064E3B 0%, #065F46 100%)",
    "linear-gradient(135deg, #422006 0%, #78350F 100%)",
  ];
  const gradient = gradients[item.id % gradients.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-surface border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)] h-full flex flex-col"
    >
      {/* Image Placeholder */}
      <div
        className="h-48 w-full relative overflow-hidden"
        style={{ background: gradient }}
      >
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {/* Badges on top of image */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="flex items-center space-x-2 bg-bg/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/5">
            <span
              className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}
            />
            <span className="font-mono text-[9px] text-cream uppercase tracking-widest">
              {item.type}
            </span>
          </div>
          {item.popular && (
            <span className="bg-ember text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter w-fit">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[10px] text-gold/60 uppercase tracking-widest block">
            {item.category}
          </span>
          <span className="font-mono text-gold font-bold">
            ₹{item.price}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold text-cream group-hover:text-gold transition-colors mb-3">
          {item.name}
        </h3>

        <p className="text-muted text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

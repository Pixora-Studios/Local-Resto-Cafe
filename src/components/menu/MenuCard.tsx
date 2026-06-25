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
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-surface border border-gold/15 rounded-2xl p-6 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.05)] h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <span
            className={`w-2 h-2 rounded-full ${item.type === 'veg' ? 'bg-green-500' : 'bg-red-500'}`}
            title={item.type === 'veg' ? 'Veg' : 'Non-Veg'}
          />
          <span className="font-mono text-[10px] text-muted uppercase tracking-widest">
            {item.category}
          </span>
        </div>
        {item.popular && (
          <span className="bg-ember/20 text-ember text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
            Popular
          </span>
        )}
      </div>

      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-display text-xl font-bold text-cream group-hover:text-gold transition-colors">
          {item.name}
        </h3>
        <span className="font-mono text-gold font-bold ml-4 shrink-0">
          ₹{item.price}
        </span>
      </div>

      <p className="text-muted text-sm leading-relaxed line-clamp-2">
        {item.description}
      </p>
    </motion.div>
  );
}

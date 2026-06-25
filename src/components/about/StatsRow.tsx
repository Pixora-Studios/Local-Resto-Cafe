"use client";

import AnimatedCounter from "../ui/AnimatedCounter";

const stats = [
  { value: 1550, suffix: "+", label: "Google Reviews" },
  { value: 4.4, suffix: "", label: "Star Rating" },
  { value: 30, suffix: "+", label: "Menu Items" },
  { value: 7, suffix: "", label: "Days a Week" },
];

export default function StatsRow() {
  return (
    <section className="py-20 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-6xl font-bold"
              />
              <p className="text-muted text-xs md:text-sm uppercase tracking-widest font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

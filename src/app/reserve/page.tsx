"use client";

import { motion } from "framer-motion";
import ReserveForm from "@/components/reserve/ReserveForm";

export default function ReservePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 pb-24"
    >
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="font-display text-6xl md:text-8xl font-black text-cream mb-6">
          Reserve a Table
        </h1>
        <p className="text-gold font-mono text-sm uppercase tracking-[0.3em]">
          Join us for an unforgettable dining experience.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20">
          {/* Left: Form */}
          <div>
            <ReserveForm />
          </div>

          {/* Right: Info */}
          <div className="space-y-12">
            <div className="bg-surface border border-border rounded-3xl p-8 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-cream mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-start text-muted">
                    <span className="text-gold mr-3">📍</span>
                    New Colony, Palasuni, Rasulgarh,<br />Bhubaneswar, Odisha 751010
                  </p>
                  <p className="flex items-center text-muted">
                    <span className="text-gold mr-3">📞</span>
                    082496 35499
                  </p>
                  <p className="flex items-center text-muted">
                    <span className="text-gold mr-3">🕐</span>
                    Mon – Sun: 11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-display text-2xl font-bold text-cream mb-4">Features</h3>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gold uppercase tracking-widest">
                  <div className="flex items-center">
                    <span className="mr-2">🎵</span> Live Music
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">💳</span> Cards Accepted
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🥗</span> Veg & Non-Veg
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">🚗</span> Drive-through
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Map */}
            <div className="h-64 rounded-3xl overflow-hidden border border-border relative grayscale">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.11586548545!2d85.86796327523675!3d20.295475681177694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190bc985012345%3A0x1234567890abcdef!2sLocal%20Restro%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

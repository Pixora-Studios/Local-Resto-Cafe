"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReserveForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "19:00",
    guests: "2",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface border border-gold/30 rounded-3xl p-10 text-center space-y-6"
      >
        <div className="text-6xl">🎉</div>
        <h3 className="font-display text-3xl font-bold text-gold">Reservation Received</h3>
        <p className="text-muted leading-relaxed">
          Thank you, <span className="text-cream font-bold">{formData.name}</span>. We&apos;ve received your request for <span className="text-cream font-bold">{formData.date}</span> at <span className="text-cream font-bold">{formData.time}</span>.
          <br /><br />
          We&apos;ll call you at <span className="text-gold font-mono">{formData.phone}</span> shortly to confirm your table. See you soon!
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-gold font-mono text-xs uppercase tracking-widest hover:underline pt-4"
        >
          Make another reservation
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="space-y-2 group">
          <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Full Name</label>
          <input
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all placeholder:text-muted/30"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2 group">
          <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Phone Number</label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="082496 35499"
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all placeholder:text-muted/30"
          />
        </div>

        {/* Email */}
        <div className="space-y-2 group">
          <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Email Address</label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@example.com"
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all placeholder:text-muted/30"
          />
        </div>

        {/* Date */}
        <div className="space-y-2 group">
          <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Date</label>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all"
          />
        </div>

        {/* Time */}
        <div className="space-y-2 group">
          <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all appearance-none"
          >
            {Array.from({ length: 23 }, (_, i) => {
              const hour = Math.floor(i / 2) + 11;
              const min = i % 2 === 0 ? "00" : "30";
              const time = `${hour}:${min}`;
              return <option key={time} value={time} className="bg-surface">{time} {hour >= 12 ? 'PM' : 'AM'}</option>;
            })}
          </select>
        </div>

        {/* Guests */}
        <div className="space-y-2 group">
          <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Number of Guests</label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all appearance-none"
          >
            {[1, 2, 3, 4, 5, 6, 8, 10, "10+"].map(num => (
              <option key={num} value={num} className="bg-surface">{num} Guests</option>
            ))}
          </select>
        </div>
      </div>

      {/* Requests */}
      <div className="space-y-2 group">
        <label className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] group-focus-within:text-gold transition-colors">Special Requests</label>
        <textarea
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          rows={3}
          placeholder="Let us know if you have any allergies or special occasions..."
          className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-cream transition-all placeholder:text-muted/30 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-gold text-bg font-bold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-gold/10"
      >
        Confirm Reservation
      </button>
    </form>
  );
}

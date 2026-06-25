"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reserve", href: "/reserve" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? "bg-bg/92 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-gold uppercase tracking-tight">
            Local Restro
          </span>
          <span className="font-mono text-[10px] text-gold tracking-[0.3em] ml-0.5">
            CAFE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`nav-item text-sm font-medium transition-colors hover:text-gold ${
                pathname === link.href ? "text-gold" : "text-cream/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Reserve Button */}
        <div className="hidden md:block">
          <Link
            href="/reserve"
            className="nav-item group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-gold border border-gold rounded-full transition duration-300 ease-out hover:text-bg"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-bg duration-300 -translate-x-full bg-gold group-hover:translate-x-0 ease">
              Reserve a Table
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-gold transition-all duration-300 transform group-hover:translate-x-full ease">
              Reserve a Table
            </span>
            <span className="relative invisible">Reserve a Table</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1.5 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.span
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gold block"
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gold block"
          />
          <motion.span
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gold block"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-display font-bold text-cream hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reserve"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full border border-gold text-gold font-medium hover:bg-gold hover:text-bg transition-all"
            >
              Reserve a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

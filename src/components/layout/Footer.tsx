import Link from "next/link";
import MarqueeStrip from "../ui/MarqueeStrip";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg pt-20 border-t border-border overflow-hidden">
      <MarqueeStrip
        text="DRAGON CHICKEN · BROWNIE SHAKE · CHICKEN BIRYANI · BURNT GARLIC SOUP · DRUMS OF HEAVEN · VEG NUGGETS · "
        speed={40}
        className="mb-16"
      />

      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col leading-none">
              <span className="font-display text-3xl font-bold text-gold uppercase tracking-tight">
                Local Restro
              </span>
              <span className="font-mono text-xs text-gold tracking-[0.3em] ml-0.5">
                CAFE
              </span>
            </Link>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              &ldquo;Where Every Bite Tells a Story&rdquo; &mdash; Experience premium multicuisine dining in the heart of Bhubaneswar.
            </p>
            <div className="flex space-x-4">
              {/* Simple SVG icon placeholders */}
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gold hover:bg-gold hover:text-bg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gold hover:bg-gold hover:text-bg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-gold hover:bg-gold hover:text-bg transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-cream tracking-tight">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/menu" className="text-muted hover:text-gold transition-colors">Menu</Link></li>
              <li><Link href="/about" className="text-muted hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-muted hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/reserve" className="text-muted hover:text-gold transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-cream tracking-tight">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="text-gold mr-3">📍</span>
                <span className="text-muted leading-relaxed">New Colony, Palasuni, Rasulgarh,<br />Bhubaneswar, Odisha 751010</span>
              </li>
              <li className="flex items-center">
                <span className="text-gold mr-3">📞</span>
                <span className="text-muted">082496 35499</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3">🕐</span>
                <span className="text-muted">Mon – Sun: 11:00 AM – 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Popular Dishes */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-xl text-cream tracking-tight">Popular Dishes</h4>
            <ul className="space-y-4">
              <li><Link href="/menu" className="text-muted hover:text-gold transition-colors">Dragon Chicken</Link></li>
              <li><Link href="/menu" className="text-muted hover:text-gold transition-colors">Brownie Shake</Link></li>
              <li><Link href="/menu" className="text-muted hover:text-gold transition-colors">Chicken Farmhouse Pizza</Link></li>
              <li><Link href="/menu" className="text-muted hover:text-gold transition-colors">Burnt Garlic Soup</Link></li>
              <li><Link href="/menu" className="text-muted hover:text-gold transition-colors">Veg Biryani</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted text-xs font-mono tracking-wider">
            © {currentYear} LOCAL RESTRO CAFE · BHUBANESWAR, ODISHA
          </p>
          <p className="text-muted text-xs font-mono tracking-wider">
            BUILT WITH ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

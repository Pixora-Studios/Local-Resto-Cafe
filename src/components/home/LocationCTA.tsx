"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".location-text", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".location-map", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="location-text space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
                Find Us in Rasulgarh
              </h2>
              <p className="text-muted leading-relaxed max-w-md">
                Located near the Rasulgarh flyover, we are easily accessible for dine-in, drive-through, or delivery.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-cream font-bold mb-1">Our Address</h4>
                  <p className="text-muted text-sm">New Colony, Palasuni, Rasulgarh,<br />Bhubaneswar, Odisha 751010</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-cream font-bold mb-1">Call Us</h4>
                  <p className="text-muted text-sm">082496 35499</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  🕐
                </div>
                <div>
                  <h4 className="text-cream font-bold mb-1">Working Hours</h4>
                  <p className="text-muted text-sm">Mon – Sun: 11:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://maps.app.goo.gl/YourActualGoogleMapsURL"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold text-bg font-bold rounded-full transition-transform hover:scale-105"
              >
                Get Directions
              </a>
              <a
                href="tel:08249635499"
                className="px-8 py-3 border border-gold text-gold font-bold rounded-full transition-all hover:bg-gold hover:text-bg"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="location-map h-[500px] rounded-3xl overflow-hidden border border-border relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.11586548545!2d85.86796327523675!3d20.295475681177694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190bc985012345%3A0x1234567890abcdef!2sLocal%20Restro%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

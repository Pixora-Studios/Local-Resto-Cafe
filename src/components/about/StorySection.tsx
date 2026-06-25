"use client";

import ParallaxImage from "../ui/ParallaxImage";

export default function StorySection() {
  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">

          {/* Left: Text Content */}
          <div className="space-y-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight">
              A Mosaic of India&apos;s<br />Culinary Landscape.
            </h2>

            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Local Restro Cafe was born out of a simple belief &mdash; that great food should be accessible to everyone. Nestled near the Rasulgarh flyover in Bhubaneswar, we&apos;ve carved out a cozy corner where the aroma of freshly grilled kebabs meets the clink of coffee cups and the buzz of good company.
              </p>
              <p>
                Our kitchen is a mosaic of India&apos;s culinary landscape. From the smoky depths of Mughlai curries to the tangy punch of Indo-Chinese stir-fries, every dish on our menu tells a different story &mdash; but they all end the same way: with a smile.
              </p>
              <p>
                We believe in keeping things honest &mdash; honest ingredients, honest prices, and honest hospitality. That&apos;s what&apos;s kept our guests coming back since the day we opened our doors.
              </p>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="h-[600px]">
            <ParallaxImage
              className="w-full h-full"
              gradient="linear-gradient(160deg, #111110 0%, #1E1E1A 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

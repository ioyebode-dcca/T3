"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  speed?: number; // 0.1 to 0.9, lower = slower parallax
  overlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
  minHeight?: string;
}

export default function ParallaxSection({
  children,
  backgroundImage,
  backgroundColor = "transparent",
  speed = 0.5,
  overlay = true,
  overlayColor = "from-blue-700/70 to-emerald-500/60",
  overlayOpacity = 1,
  className = "",
  minHeight = "400px",
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        setIsInView(true);
        // Calculate parallax offset based on section position
        const scrolled = windowHeight - rect.top;
        setOffsetY(scrolled * speed * 0.5);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight, backgroundColor }}
    >
      {/* Parallax Background */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: isInView ? `translateY(${offsetY}px)` : "translateY(0)",
            transition: "transform 0.1s ease-out",
            // Extend background to prevent gaps during parallax
            top: "-50px",
            bottom: "-50px",
          }}
          aria-hidden="true"
        />
      )}

      {/* Gradient/Color Overlay */}
      {overlay && (
        <div
          className={`absolute inset-0 bg-gradient-to-r ${overlayColor}`}
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/* ---------- Simple CSS-only Parallax Alternative ---------- */
/* 
  If you prefer pure CSS parallax (no JS), use this instead:
  
  <section className="relative min-h-[400px] overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/your-image.jpg')" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-emerald-500/60" />
    <div className="relative z-10">
      {children}
    </div>
  </section>

  Note: bg-fixed creates a simple parallax effect but doesn't work on iOS Safari
*/

/* ---------- Usage Examples ---------- */
/*
  // Basic parallax with image
  <ParallaxSection backgroundImage="/images/hero-bg.jpg">
    <div className="flex min-h-[500px] items-center justify-center text-white">
      <h1>Your Content Here</h1>
    </div>
  </ParallaxSection>

  // Custom overlay colors
  <ParallaxSection 
    backgroundImage="/images/tech-bg.jpg"
    overlayColor="from-zinc-900/80 to-zinc-800/80"
    speed={0.3}
  >
    <div className="py-20 text-white">
      <h2>Dark overlay section</h2>
    </div>
  </ParallaxSection>

  // Solid color with no image
  <ParallaxSection 
    backgroundColor="#1a365d"
    overlay={false}
  >
    <div className="py-20 text-white">
      <h2>Solid background section</h2>
    </div>
  </ParallaxSection>

  // Slower parallax
  <ParallaxSection 
    backgroundImage="/images/clouds.jpg"
    speed={0.2}
  >
    <div className="min-h-[600px]">
      <h2>Slow, dreamy parallax</h2>
    </div>
  </ParallaxSection>
*/
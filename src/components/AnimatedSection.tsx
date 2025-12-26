"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number; // delay in ms
  duration?: number; // duration in ms
  className?: string;
  threshold?: number; // 0-1, how much of element should be visible
  once?: boolean; // only animate once
}

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && element) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms ease-out ${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return { ...base, transform: "translateY(40px)" };
      case "fade-down":
        return { ...base, transform: "translateY(-40px)" };
      case "fade-left":
        return { ...base, transform: "translateX(40px)" };
      case "fade-right":
        return { ...base, transform: "translateX(-40px)" };
      case "zoom-in":
        return { ...base, transform: "scale(0.9)" };
      case "fade":
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => ({
    opacity: 1,
    transform: "translateY(0) translateX(0) scale(1)",
    transition: `all ${duration}ms ease-out ${delay}ms`,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
}

/* 
  Usage Examples:
  
  <AnimatedSection animation="fade-up">
    <h2>This fades up on scroll</h2>
  </AnimatedSection>

  <AnimatedSection animation="fade-left" delay={200}>
    <p>This fades from right with 200ms delay</p>
  </AnimatedSection>

  <AnimatedSection animation="zoom-in" duration={800}>
    <Card>This zooms in over 800ms</Card>
  </AnimatedSection>

  // For staggered children:
  {items.map((item, i) => (
    <AnimatedSection key={item.id} animation="fade-up" delay={i * 100}>
      <Card>{item.content}</Card>
    </AnimatedSection>
  ))}
*/
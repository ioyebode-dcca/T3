"use client";

import { useState, useEffect } from "react";

interface PreloaderProps {
  minDisplayTime?: number; // minimum time to show loader in ms
}

export default function Preloader({ minDisplayTime = 800 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      // Wait for minimum display time before hiding
      setTimeout(() => {
        setIsLoading(false);
        // Remove from DOM after fade out animation
        setTimeout(() => setShouldRender(false), 500);
      }, remainingTime);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [minDisplayTime]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-700 to-emerald-500 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-white tracking-tight">
          THETABTECH
        </div>

        {/* Animated loader */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.3s]" />
          <div className="h-3 w-3 animate-bounce rounded-full bg-white [animation-delay:-0.15s]" />
          <div className="h-3 w-3 animate-bounce rounded-full bg-white" />
        </div>

        {/* Loading text */}
        <p className="text-sm text-white/80">Loading...</p>
      </div>
    </div>
  );
}

/* 
  Alternative Preloader Styles - swap the inner content for different looks:

  // Spinning circle
  <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/30 border-t-white" />

  // Pulsing logo
  <div className="animate-pulse text-4xl font-bold text-white">
    THETABTECH
  </div>

  // Progress bar style
  <div className="h-1 w-48 overflow-hidden rounded-full bg-white/30">
    <div className="h-full w-full origin-left animate-[loading_1.5s_ease-in-out_infinite] bg-white" />
  </div>
  // Add to tailwind.config.js:
  // animation: { loading: "loading 1.5s ease-in-out infinite" }
  // keyframes: { loading: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } } }

  // Pipeline-themed (DevSecOps)
  <div className="flex items-center gap-2">
    {["Code", "Build", "Test", "Secure", "Deploy"].map((stage, i) => (
      <div
        key={stage}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-xs font-bold text-white animate-pulse"
        style={{ animationDelay: `${i * 0.15}s` }}
      >
        {stage[0]}
      </div>
    ))}
  </div>
*/
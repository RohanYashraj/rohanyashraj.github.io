"use client";

import { useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function ScrollTracker() {
  const { trackScrollDepth } = useAnalytics();
  const trackedDepths = useRef<Set<number>>(new Set());
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track scroll depths at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercent >= milestone &&
          !trackedDepths.current.has(milestone)
        ) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // Calculate time spent when user leaves the page
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
        if (timeSpent > 10) {
          // Analytics tracking removed temporarily
        }
      } else if (document.visibilityState === "visible") {
        // Reset timer when user returns
        startTime.current = Date.now();
      }
    };

    // Set up periodic time tracking (every 30 seconds for active users)
    const timeOnPageTimer = setInterval(() => {
      if (document.visibilityState === "visible") {
        const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
        if (timeSpent >= 30) {
          // Analytics tracking removed temporarily
          startTime.current = Date.now(); // Reset timer
        }
      }
    }, 30000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearInterval(timeOnPageTimer);
    };
  }, [trackScrollDepth]);

  return null;
}

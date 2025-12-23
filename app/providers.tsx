// app/providers.tsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import PostHogPageView from "./PostHogPageView";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    // Only initialize PostHog if we have a valid key
    if (posthogKey && posthogKey.trim() !== "") {
      posthog.init(posthogKey, {
        api_host: posthogHost || "https://app.posthog.com",
        person_profiles: "always",
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true,

        // Enhanced configuration for better analytics
        autocapture: {
          dom_event_allowlist: ["click", "change", "submit"],
          url_allowlist: [window.location.origin],
          element_allowlist: [
            "a",
            "button",
            "form",
            "input",
            "select",
            "textarea",
            "label",
          ],
        },

        // Session recording (optional - enable if needed)
        disable_session_recording: false,

        // Performance monitoring
        capture_performance: true,

        // Cross-domain tracking
        cross_subdomain_cookie: false,

        // Enhanced event properties
        property_denylist: [], // Add any properties you don't want to track

        // Debugging (only in development)
        debug: process.env.NODE_ENV === "development",

        // Custom properties to add to all events
        bootstrap: {
          distinctID: localStorage.getItem("distinct_id") || undefined,
        },

        // Feature flags
        enable_recording_console_log: process.env.NODE_ENV === "development",
      });

      // Set user properties
      posthog.register({
        app_name: "Dr. Rohan Yashraj Gupta Portfolio",
        app_version: "2.0.0",
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
      });

      // Track initial app load
      posthog.capture("app_loaded", {
        url: window.location.href,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
      });
    } else {
      console.log("PostHog initialization skipped: No API key provided");
    }
  }, []);

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  );
}

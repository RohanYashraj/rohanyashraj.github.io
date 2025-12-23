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
        capture_pageview: true, // Disable automatic pageview capture, as we capture manually
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

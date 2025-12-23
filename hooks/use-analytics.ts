"use client";

import { usePostHog } from "posthog-js/react";
import { usePathname } from "next/navigation";

export const useAnalytics = () => {
  const posthog = usePostHog();
  const pathname = usePathname();

  // Navigation tracking
  const trackNavigation = (destination: string, source?: string) => {
    posthog?.capture("navigation_click", {
      destination,
      source: source || pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Button/CTA tracking
  const trackButtonClick = (
    buttonName: string,
    context?: string,
    metadata?: object
  ) => {
    posthog?.capture("button_click", {
      button_name: buttonName,
      page: pathname,
      context,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  };

  // Download tracking
  const trackDownload = (fileName: string, fileType: string) => {
    posthog?.capture("file_download", {
      file_name: fileName,
      file_type: fileType,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Contact form tracking
  const trackFormStart = (formName: string) => {
    posthog?.capture("form_start", {
      form_name: formName,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormSubmit = (
    formName: string,
    success: boolean,
    errorMessage?: string
  ) => {
    posthog?.capture("form_submit", {
      form_name: formName,
      success,
      error_message: errorMessage,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  const trackFormFieldFocus = (formName: string, fieldName: string) => {
    posthog?.capture("form_field_focus", {
      form_name: formName,
      field_name: fieldName,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Social media tracking
  const trackSocialClick = (platform: string, url: string) => {
    posthog?.capture("social_click", {
      platform,
      url,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // External link tracking
  const trackExternalLink = (url: string, linkText?: string) => {
    posthog?.capture("external_link_click", {
      url,
      link_text: linkText,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Project/work interaction tracking
  const trackProjectView = (projectId: string, projectTitle: string) => {
    posthog?.capture("project_view", {
      project_id: projectId,
      project_title: projectTitle,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  const trackProjectLinkClick = (
    projectId: string,
    linkType: "live" | "github",
    url: string
  ) => {
    posthog?.capture("project_link_click", {
      project_id: projectId,
      link_type: linkType,
      url,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Tab/section switching
  const trackTabSwitch = (fromTab: string, toTab: string, context: string) => {
    posthog?.capture("tab_switch", {
      from_tab: fromTab,
      to_tab: toTab,
      context,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // User engagement tracking
  const trackTimeOnPage = (timeSpent: number) => {
    posthog?.capture("time_on_page", {
      time_spent_seconds: timeSpent,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  const trackScrollDepth = (depth: number) => {
    posthog?.capture("scroll_depth", {
      depth_percentage: depth,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Search and filter tracking
  const trackSearch = (query: string, results: number, context: string) => {
    posthog?.capture("search", {
      query,
      results_count: results,
      context,
      page: pathname,
      timestamp: new Date().toISOString(),
    });
  };

  // Error tracking
  const trackError = (error: string, context: string, metadata?: object) => {
    posthog?.capture("error", {
      error_message: error,
      context,
      page: pathname,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  };

  // User identification (for returning visitors)
  const identifyUser = (userId: string, properties?: object) => {
    posthog?.identify(userId, {
      ...properties,
      last_seen: new Date().toISOString(),
    });
  };

  // Feature usage tracking
  const trackFeatureUsage = (featureName: string, metadata?: object) => {
    posthog?.capture("feature_usage", {
      feature_name: featureName,
      page: pathname,
      ...metadata,
      timestamp: new Date().toISOString(),
    });
  };

  return {
    trackNavigation,
    trackButtonClick,
    trackDownload,
    trackFormStart,
    trackFormSubmit,
    trackFormFieldFocus,
    trackSocialClick,
    trackExternalLink,
    trackProjectView,
    trackProjectLinkClick,
    trackTabSwitch,
    trackTimeOnPage,
    trackScrollDepth,
    trackSearch,
    trackError,
    identifyUser,
    trackFeatureUsage,
  };
};

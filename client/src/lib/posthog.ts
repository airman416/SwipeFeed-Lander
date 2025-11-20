import posthog from 'posthog-js';

// Initialize PostHog if credentials are available
if (typeof window !== 'undefined') {
  // In Vite, environment variables must be prefixed with VITE_ to be exposed to the client
  const posthogKey = import.meta.env.VITE_POSTHOG_KEY || import.meta.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = import.meta.env.VITE_POSTHOG_HOST || import.meta.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (posthogKey && posthogHost) {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      // Only create profiles for identified users (better privacy)
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      // Enable autocapture for better insights
      autocapture: true,
      // Capture pageviews automatically
      capture_pageview: true,
      // Capture pageleaves automatically
      capture_pageleave: true,
      // Enable debug mode in development
      loaded: (posthog) => {
        if (import.meta.env.DEV) {
          posthog.debug();
          console.log('PostHog loaded successfully');
        }
      },
    });
  } else {
    console.warn('PostHog API key or host not found. Analytics will not be initialized.');
  }
}

export default posthog;


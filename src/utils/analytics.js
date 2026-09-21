// Google Analytics 4 (GA4) Tracker Utility
export const GA_MEASUREMENT_ID = 'G-CZ6J6XVPK1';

// Track Page Views on Single Page App (SPA) Navigation
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Track Custom User Events (e.g. Case Study Clicks, Form Submissions, Social Links)
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

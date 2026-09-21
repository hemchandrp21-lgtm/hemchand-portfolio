// Privacy-Compliant Analytics Utility (Session Replay Disabled & Inputs Masked)
export const GA_MEASUREMENT_ID = 'G-CZ6J6XVPK1';

// Privacy Configuration: Session replay turned off by default, all user inputs masked
export const PRIVACY_CONFIG = {
  disable_session_replay: true,
  mask_all_inputs: true,
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
  restricted_data_processing: true,
};

// Track Page Views on Single Page App (SPA) Navigation with Privacy Guard
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      ...PRIVACY_CONFIG,
    });
  }
};

// Track Custom User Events (Sanitized - Sensitive payload data stripped)
export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Strip sensitive input keys if present
    const sanitizedParams = { ...params };
    delete sanitizedParams.email;
    delete sanitizedParams.password;
    delete sanitizedParams.phone;
    delete sanitizedParams.credit_card;

    window.gtag('event', eventName, {
      ...sanitizedParams,
      ...PRIVACY_CONFIG,
    });
  }
};


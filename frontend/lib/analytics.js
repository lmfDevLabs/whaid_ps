export const CONSENT_STORAGE_KEY = "whaid_cookie_consent";

export function trackAnalyticsEvent(name, parameters = {}) {
  if (typeof window === "undefined") return;
  if (window.localStorage.getItem(CONSENT_STORAGE_KEY) !== "accepted") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, parameters);
}

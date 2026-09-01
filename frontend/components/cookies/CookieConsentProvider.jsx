"use client";

import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import CookieConsent from "./CookieConsent";
import {CONSENT_STORAGE_KEY} from "../../lib/analytics";

const CookieConsentContext = createContext(null);
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() { window.dataLayer.push(arguments); };
}

function updateGoogleConsent(granted) {
  if (typeof window === "undefined") return;
  ensureGtag();
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  if (GA_ID) window[`ga-disable-${GA_ID}`] = !granted;
}

function loadAnalytics() {
  if (!GA_ID || document.querySelector("script[data-whaid-ga]")) return;
  ensureGtag();
  window[`ga-disable-${GA_ID}`] = false;
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {anonymize_ip: true});
  const script = document.createElement("script");
  script.async = true;
  script.dataset.whaidGa = "true";
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
}

export default function CookieConsentProvider({children}) {
  const [consent, setConsent] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    const initial = stored === "accepted" || stored === "rejected" ? stored : null;
    setConsent(initial);
    setIsOpen(initial === null);
    ensureGtag();
    window.gtag("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied",
      wait_for_update: 500,
    });
    if (initial === "accepted") {
      updateGoogleConsent(true);
      loadAnalytics();
    }
  }, []);

  const choose = useCallback((value) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
    setConsent(value);
    setIsOpen(false);
    const accepted = value === "accepted";
    updateGoogleConsent(accepted);
    if (accepted) loadAnalytics();
  }, []);

  const value = useMemo(() => ({consent, openSettings: () => setIsOpen(true)}), [consent]);

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {isOpen ? <CookieConsent consent={consent} onAccept={() => choose("accepted")} onReject={() => choose("rejected")} /> : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) throw new Error("useCookieConsent must be used within CookieConsentProvider");
  return context;
}

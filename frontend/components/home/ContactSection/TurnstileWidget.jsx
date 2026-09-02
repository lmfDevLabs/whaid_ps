"use client";

import Script from "next/script";
import {useCallback, useEffect, useRef, useState} from "react";

export default function TurnstileWidget({language, onToken, resetSignal, labels}) {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetRef.current !== null) return;
    widgetRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      language,
      theme: "auto",
      callback: (token) => { setFailed(false); onToken(token); },
      "expired-callback": () => onToken(""),
      "error-callback": () => { setFailed(true); onToken(""); },
    });
  }, [language, onToken, siteKey]);

  useEffect(() => { if (scriptReady) renderWidget(); }, [renderWidget, scriptReady]);
  useEffect(() => {
    if (widgetRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetRef.current);
      onToken("");
    }
  }, [resetSignal, onToken]);

  function retry() {
    setFailed(false);
    if (widgetRef.current !== null && window.turnstile) window.turnstile.reset(widgetRef.current);
    else renderWidget();
  }

  if (!siteKey) return <p className="form-status form-status--error" role="alert">{labels.unavailable}</p>;
  return (
    <div className="turnstile-area">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={() => setScriptReady(true)} onError={() => setFailed(true)} />
      <div ref={containerRef} />
      {failed && <p className="form-status form-status--error">{labels.failed} <button type="button" className="form-retry" onClick={retry}>{labels.retry}</button></p>}
    </div>
  );
}

"use client";

import useLanguage from "../../i18n/useLanguage";

const copy = {
  es: {title: "Tu privacidad, tu elección", body: "Utilizamos cookies necesarias para el funcionamiento del sitio y, con tu autorización, cookies de analítica para entender cómo se visita Whaid y mejorar su contenido.", accept: "Aceptar analítica", reject: "Rechazar", policy: "Política de cookies"},
  en: {title: "Your privacy, your choice", body: "We use cookies required for the site to work and, with your permission, analytics cookies to understand how Whaid is visited and improve its content.", accept: "Accept analytics", reject: "Reject", policy: "Cookie policy"},
};

export default function CookieConsent({consent, onAccept, onReject}) {
  const {language} = useLanguage();
  const text = copy[language] || copy.es;
  return (
    <section className="cookie-consent" role="dialog" aria-modal="false" aria-labelledby="cookie-title">
      <div className="cookie-consent__copy"><strong id="cookie-title">{text.title}</strong><p>{text.body}</p></div>
      <div className="cookie-consent__actions">
        <button type="button" className={`cookie-choice${consent === "rejected" ? " is-current" : ""}`} onClick={onReject}>{text.reject}</button>
        <button type="button" className={`cookie-choice${consent === "accepted" ? " is-current" : ""}`} onClick={onAccept}>{text.accept}</button>
        <a href="/cookies">{text.policy}</a>
      </div>
    </section>
  );
}

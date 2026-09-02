"use client";

import {useCallback, useRef, useState} from "react";
import useLanguage from "../../../i18n/useLanguage";
import {trackAnalyticsEvent} from "../../../lib/analytics";
import {validateDemoForm} from "../../../lib/demoFormSchema";
import TurnstileWidget from "./TurnstileWidget";

const INITIAL = {firstName: "", lastName: "", email: "", company: "", teamSize: "1-10", phone: "", message: "", contactCode: "", turnstileToken: ""};

export default function ContactSection() {
  const {language, t} = useLanguage();
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [resetSignal, setResetSignal] = useState(0);
  const submitting = useRef(false);
  const setTurnstileToken = useCallback((token) => setValues((current) => ({...current, turnstileToken: token})), []);

  function change(event) {
    const {name, value} = event.target;
    setValues((current) => ({...current, [name]: value}));
    setErrors((current) => ({...current, [name]: undefined}));
    if (status !== "idle") setStatus("idle");
  }

  async function handleDemoSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    setStatus("validating");
    const result = validateDemoForm({...values, locale: language, source: window.location.href});
    if (!result.success) {
      setErrors(result.errors);
      setStatus(result.errors.turnstileToken ? "captcha" : "invalid");
      event.currentTarget.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    submitting.current = true;
    setStatus("sending");
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_DEMO_FORM_API_URL || "/api/demo", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(result.data),
      });
      const body = await response.json().catch(() => ({}));
      if (response.ok) {
        setValues(INITIAL);
        setErrors({});
        setStatus("success");
        setResetSignal((value) => value + 1);
        trackAnalyticsEvent("contact_form_submit");
      } else {
        setStatus(response.status === 429 || body.code === "RATE_LIMITED" ? "rateLimited" : "error");
        setResetSignal((value) => value + 1);
      }
    } catch {
      setStatus("error");
      setResetSignal((value) => value + 1);
    } finally {
      submitting.current = false;
    }
  }

  const busy = status === "validating" || status === "sending";
  const field = (name) => ({name, value: values[name], onChange: change, "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `${name}-error` : undefined});
  const error = (name) => errors[name] ? <span id={`${name}-error`} className="field-error">{t(`form_error_${name}`)}</span> : null;
  const statusMessage = ["success", "error", "rateLimited", "invalid", "captcha"].includes(status) ? t(`form_status_${status}`) : "";

  return (
    <section className="section" id="demo"><div className="container"><div className="demo reveal">
      <div className="demo__content"><span className="eyebrow">{t("form_eyebrow")}</span><h2>{t("form_title")}</h2><p>{t("form_sub")}</p><ul>
        {["form_benefit_time", "form_benefit_demo", "form_benefit_plan"].map((key) => <li key={key}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="20 6 9 17 4 12"/></svg>{t(key)}</li>)}
      </ul></div>
      <form className="demo__form" onSubmit={handleDemoSubmit} noValidate>
        <div className="form-row"><div className="form-group"><label htmlFor="firstName">{t("form_name")}</label><input id="firstName" {...field("firstName")} autoComplete="given-name" maxLength="60" required />{error("firstName")}</div><div className="form-group"><label htmlFor="lastName">{t("form_last")}</label><input id="lastName" {...field("lastName")} autoComplete="family-name" maxLength="60" required />{error("lastName")}</div></div>
        <div className="form-single form-group"><label htmlFor="email">{t("form_email")}</label><input id="email" type="email" {...field("email")} autoComplete="email" maxLength="254" required />{error("email")}</div>
        <div className="form-row"><div className="form-group"><label htmlFor="company">{t("form_company")}</label><input id="company" {...field("company")} autoComplete="organization" maxLength="120" required />{error("company")}</div><div className="form-group"><label htmlFor="teamSize">{t("form_size")}</label><select id="teamSize" {...field("teamSize")}><option value="1-10">1–10</option><option value="11-50">11–50</option><option value="51-200">51–200</option><option value="200+">200+</option></select></div></div>
        <div className="form-single form-group"><label htmlFor="phone">{t("form_phone")}</label><input id="phone" type="tel" {...field("phone")} autoComplete="tel" maxLength="30" />{error("phone")}</div>
        <div className="form-single form-group"><label htmlFor="message">{t("form_message")}</label><textarea id="message" {...field("message")} rows="5" minLength="10" maxLength="2000" required />{error("message")}</div>
        <div className="form-trap" aria-hidden="true"><label htmlFor="contactCode">Contact code</label><input id="contactCode" name="contactCode" value={values.contactCode} onChange={change} tabIndex="-1" autoComplete="off" /></div>
        <TurnstileWidget language={language} onToken={setTurnstileToken} resetSignal={resetSignal} labels={{unavailable: t("form_captcha_unavailable"), failed: t("form_captcha_failed"), retry: t("form_retry")}} />
        <button type="submit" className={`form-submit${status === "success" ? " form-submit--success" : ""}`} disabled={busy}>{status === "success" ? `✓ ${t("form_status_success")}` : busy ? t(`form_status_${status}`) : t("form_submit")}</button>
        <div className="form-status" aria-live="polite" role="status">{statusMessage}</div>
        <p className="form-disclaimer">{t("form_disclaimer")}</p>
      </form>
    </div></div></section>
  );
}

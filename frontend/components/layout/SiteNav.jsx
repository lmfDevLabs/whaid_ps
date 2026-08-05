"use client";

import {useEffect, useState} from "react";
import useLanguage from "../../i18n/useLanguage";
const HOME_NAV_LINKS = [
  {href: "/", i18nKey: "nav_home", label: "Home", id: "home"},
  {href: "/#keyshots", i18nKey: "nav_product", label: "Producto", id: "product"},
  {href: "/#usecases", i18nKey: "nav_use_cases", label: "Casos de uso", id: "useCases"},
  {href: "/#pitch", i18nKey: "nav_pitch", label: "Pitch", id: "pitch"},
  {href: "/#pricing", i18nKey: "nav_pricing", label: "Precio", id: "pricing"},
  {href: "/blog", i18nKey: "nav_blog", label: "Blog", id: "blog"},
];

export default function SiteNav({activeItem = "home", demoHref = "#demo"}) {
  const {language, setLanguage, t} = useLanguage();
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("whaid:theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("whaid:theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const themeLabel = theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro";

  return (
    <nav className={`nav${isScrolled ? " is-scrolled" : ""}`} aria-label="Principal">
      <div className="nav__inner">
        <a href="/" className="nav__logo" aria-label="Whaid">
          <img src="/assets/whaid-logo-nav.png" alt="Whaid" />
        </a>

        <div className={`nav__links${isMenuOpen ? " is-open" : ""}`} id="nav-menu">
          {HOME_NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={activeItem === link.id ? "page" : undefined}
            >
              {t(link.i18nKey)}
            </a>
          ))}
          <a href={demoHref} className="nav__mobile-cta"><span>{t("nav_cta")}</span></a>
        </div>

        <div className="nav__actions">
          <button className="chip-btn" id="lang-switch" type="button" aria-label="Cambiar idioma" onClick={() => setLanguage(language === "es" ? "en" : "es")}>{language === "es" ? "EN" : "ES"}</button>
          <button className="chip-btn" id="theme-switch" type="button" aria-label={themeLabel} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          </button>
          <a href={demoHref} className="btn btn--primary btn--sm nav__desktop-cta"><span>{t("nav_cta")}</span></a>
          <button className="menu-toggle" id="menu-toggle" type="button" aria-label="Menú" aria-expanded={isMenuOpen} aria-controls="nav-menu" onClick={() => setIsMenuOpen((open) => !open)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg></button>
        </div>
      </div>
    </nav>
  );
}

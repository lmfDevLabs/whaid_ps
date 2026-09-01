"use client";

import TranslatedText from "../../i18n/TranslatedText";
import {useCookieConsent} from "../cookies/CookieConsentProvider";

export default function SiteFooter() {
  const {openSettings} = useCookieConsent();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div><div className="footer__logo"><img src="/assets/whaid-logo.png" alt="Whaid" /></div><p className="footer__tag"><TranslatedText i18nKey="footer_tagline" /></p></div>
          <div className="footer__col"><h4><TranslatedText i18nKey="footer_product" /></h4><ul><li><a href="/#keyshots">Capacidades</a></li><li><a href="/#usecases">Casos de uso</a></li><li><a href="#">Integraciones</a></li><li><a href="/#security"><TranslatedText i18nKey="footer_security" /></a></li><li><a href="/#pricing"><TranslatedText i18nKey="footer_pricing" /></a></li></ul></div>
          <div className="footer__col"><h4><TranslatedText i18nKey="footer_company" /></h4><ul><li><a href="/blog">Blog</a></li><li><a href="/sobre-nosotros">Sobre nosotros</a></li><li><a href="/#demo"><TranslatedText i18nKey="footer_contact" /></a></li><li><a href="/careers">Careers</a></li></ul></div>
          <div className="footer__col"><h4><TranslatedText i18nKey="footer_legal" /></h4><ul><li><a href="/privacidad">Privacidad</a></li><li><a href="/terminos">Términos</a></li><li><a href="/cookies">Cookies</a></li><li><a href="/dpa">DPA</a></li><li><button className="footer__link-button" type="button" onClick={openSettings}>Configurar cookies</button></li></ul></div>
        </div>
        <div className="footer__bottom"><span className="footer__copy"><TranslatedText i18nKey="footer_copy" /></span></div>
      </div>
    </footer>
  );
}

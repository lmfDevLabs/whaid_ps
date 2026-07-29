import FooterSocialLinks from "./FooterSocialLinks";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div><div className="footer__logo"><img src="/assets/whaid-logo.png" alt="Whaid" /></div><p className="footer__tag" data-i18n="footer_tagline">El asistente IA que responde por tus activos — desde WhatsApp.</p></div>
          <div className="footer__col"><h4 data-i18n="footer_product">Producto</h4><ul><li><a href="/#keyshots">Capacidades</a></li><li><a href="/#usecases">Casos de uso</a></li><li><a href="#">Integraciones</a></li><li><a href="/#security" data-i18n="footer_security">Seguridad</a></li><li><a href="/#pricing" data-i18n="footer_pricing">Pricing</a></li></ul></div>
          <div className="footer__col"><h4 data-i18n="footer_company">Compañía</h4><ul><li><a href="/blog">Blog</a></li><li><a href="#">Sobre nosotros</a></li><li><a href="/#demo" data-i18n="footer_contact">Contacto</a></li><li><a href="#">Careers</a></li></ul></div>
          <div className="footer__col"><h4 data-i18n="footer_legal">Legal</h4><ul><li><a href="#">Privacidad</a></li><li><a href="#">Términos</a></li><li><a href="#">Cookies</a></li><li><a href="#">DPA</a></li></ul></div>
        </div>
        <div className="footer__bottom"><span className="footer__copy" data-i18n="footer_copy">© 2026 Whaid. Hecho con cuidado en LatAm.</span><FooterSocialLinks /></div>
      </div>
    </footer>
  );
}

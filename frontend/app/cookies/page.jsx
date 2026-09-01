import SiteFooter from "../../components/layout/SiteFooter";
import SiteNav from "../../components/layout/SiteNav";

export const metadata = {
  title: "Política de cookies | Whaid",
  description: "Información sobre las tecnologías necesarias y de analítica utilizadas en el sitio web de Whaid.",
};

const LAST_UPDATED = "1 de septiembre de 2026";

export default function CookiesPage() {
  return (
    <>
      <SiteNav activeItem="" demoHref="/#demo" />
      <main className="legal-page">
        <article className="legal-page__inner">
          <span className="eyebrow">Legal</span>
          <h1>Política de cookies</h1>
          <p className="legal-page__lede">Esta política explica, de forma sencilla, qué tecnologías utiliza Whaid y cómo puedes decidir sobre las destinadas a analítica.</p>

          <section><h2>Qué son las cookies</h2><p>Las cookies son pequeños archivos o datos que un sitio puede guardar en tu dispositivo para recordar información entre visitas. Algunas preferencias también pueden guardarse mediante el almacenamiento local del navegador.</p></section>
          <section><h2>Qué utiliza Whaid</h2><h3>Tecnologías necesarias</h3><p>Permiten el funcionamiento técnico del sitio y recuerdan preferencias como el idioma, el tema visual y tu decisión sobre analítica. Están siempre activas porque no realizan seguimiento publicitario.</p><h3>Cookies de analítica</h3><p>Solo se habilitan si aceptas. Ayudan a comprender de manera agregada cómo se visita el sitio y a mejorar su contenido. Puedes rechazarlas sin perder acceso a Whaid.</p></section>
          <section><h2>Google Analytics</h2><p>Whaid tiene preparada una integración con Google Analytics 4 para analizar navegación y desempeño. La librería de Google no se descarga hasta que aceptas analítica y solo se utiliza cuando el sitio tiene configurado un identificador de medición.</p>
            <div className="legal-table-wrap"><table><thead><tr><th>Tecnología / cookie</th><th>Proveedor</th><th>Categoría</th><th>Finalidad</th><th>Duración aproximada</th></tr></thead><tbody>
              <tr><td><code>whaid_cookie_consent</code></td><td>Whaid (almacenamiento local)</td><td>Necesaria</td><td>Recordar si aceptaste o rechazaste analítica.</td><td>Hasta que borres los datos del navegador.</td></tr>
              <tr><td><code>whaid:lang</code> y <code>whaid:theme</code></td><td>Whaid (almacenamiento local)</td><td>Necesaria</td><td>Recordar idioma y apariencia.</td><td>Hasta que borres los datos del navegador.</td></tr>
              <tr><td><code>_ga</code> y variantes</td><td>Google Analytics</td><td>Analítica (opcional)</td><td>Distinguir visitas y elaborar métricas agregadas, únicamente tras aceptar.</td><td>Según la configuración de GA4; habitualmente hasta 2 años.</td></tr>
            </tbody></table></div>
          </section>
          <section><h2>Gestión del consentimiento</h2><p>Puedes aceptar o rechazar las tecnologías de analítica desde el aviso inicial. En cualquier momento puedes cambiar tu elección mediante <strong>Configurar cookies</strong>, disponible en el footer. Al rechazar después de haber aceptado, se impide el envío de nuevos eventos en adelante.</p></section>
          <p className="legal-page__updated"><strong>Última actualización:</strong> {LAST_UPDATED}</p>
          <a className="legal-page__back" href="/">← Volver al Home</a>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

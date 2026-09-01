import SiteFooter from "../layout/SiteFooter";
import SiteNav from "../layout/SiteNav";

export default function ComingSoonPage({title, description}) {
  return (
    <>
      <SiteNav activeItem="" demoHref="/#demo" />
      <main className="legal-page coming-soon">
        <div className="legal-page__inner">
          <span className="eyebrow">Whaid</span>
          <h1>{title}</h1>
          <p className="legal-page__lede">{description}</p>
          <a className="btn btn--primary" href="/">Volver al Home</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

import FooterSocialLinks from "../../components/FooterSocialLinks";
import {fetchPublishedPosts} from "../../lib/blogApi";
import ImageWithFallback from "../../components/blog/ImageWithFallback";

export const dynamic = "force-dynamic";

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es", {day: "2-digit", month: "short", year: "numeric"}).format(date).toUpperCase();
};

function Nav() {
  return (
    <nav className="nav" aria-label="Principal">
      <div className="nav__inner">
        <a href="/" className="nav__logo" aria-label="Whaid"><img src="/assets/whaid-logo-nav.png" alt="Whaid" /></a>
        <div className="nav__links" id="nav-menu"><a href="/" data-i18n="nav_home">Home</a><a href="/#keyshots" data-i18n="nav_product">Producto</a><a href="/#usecases" data-i18n="nav_use_cases">Casos de uso</a><a href="/blog" aria-current="page" data-i18n="nav_blog">Blog</a><a href="/#demo" className="nav__mobile-cta"><span data-i18n="nav_cta">Agendar demo</span></a></div>
        <div className="nav__actions"><button className="chip-btn" id="lang-switch" aria-label="Cambiar idioma">EN</button><button className="chip-btn" id="theme-switch" aria-label="Cambiar tema"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg></button><a href="/#demo" className="btn btn--primary btn--sm nav__desktop-cta"><span data-i18n="nav_cta">Agendar demo</span></a><button className="menu-toggle" id="menu-toggle" aria-label="Menú" aria-expanded="false" aria-controls="nav-menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg></button></div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer"><div className="container"><div className="footer__grid"><div><div className="footer__logo"><img src="/assets/whaid-logo.png" alt="Whaid" /></div><p className="footer__tag" data-i18n="footer_tagline">El asistente IA que responde por tus activos — desde WhatsApp.</p></div><div className="footer__col"><h4 data-i18n="footer_product">Producto</h4><ul><li><a href="/#keyshots">Capacidades</a></li><li><a href="/#usecases">Casos de uso</a></li><li><a href="#">Integraciones</a></li><li><a href="#">Seguridad</a></li><li><a href="#">Pricing</a></li></ul></div><div className="footer__col"><h4 data-i18n="footer_company">Compañía</h4><ul><li><a href="/blog">Blog</a></li><li><a href="#">Sobre nosotros</a></li><li><a href="#">Contacto</a></li><li><a href="#">Careers</a></li></ul></div><div className="footer__col"><h4 data-i18n="footer_legal">Legal</h4><ul><li><a href="#">Privacidad</a></li><li><a href="#">Términos</a></li><li><a href="#">Cookies</a></li><li><a href="#">DPA</a></li></ul></div></div><div className="footer__bottom"><span className="footer__copy" data-i18n="footer_copy">© 2026 Whaid. Hecho con cuidado en LatAm.</span><FooterSocialLinks /></div></div></footer>
  );
}

function CardInner({post}) {
  const tag = post.tags?.[0] || "Whaid";
  return (
    <>
      <div className="post-card__cover">
        <span className="post-card__cover-badge">{tag}</span>
        <ImageWithFallback src={post.cover_image_url} alt={post.title || "Imagen del post"} className="post-card__cover-img" />
        <div className="post-card__cover-glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6"/></svg></div>
      </div>
      <div className="post-card__meta"><span>{tag}</span>{post.published_at ? <><span className="dot-sep"/><span>{formatDate(post.published_at)}</span></> : null}</div>
      <h3 className="post-card__title">{post.title || "Post de Whaid"}</h3>
      {post.excerpt ? <p className="post-card__excerpt">{post.excerpt}</p> : null}
    </>
  );
}

const getPostHref = (post) => {
  const pathKey = post?.slug || post?.id;

  return pathKey ? `/blog/${encodeURIComponent(pathKey)}` : "";
};

function BlogCard({post}) {
  const tags = Array.isArray(post.tags) ? post.tags.join(" ").toLowerCase() : "";
  const href = getPostHref(post);

  // Si Firestore no trae slug usamos el id del documento como fallback de ruta;
  // solo se desactiva el card si tampoco existe id en la respuesta.
  if (!href) {
    return <article className="post-card is-disabled" data-tags={tags}><CardInner post={post} /></article>;
  }

  return <a href={href} className="post-card" data-tags={tags} style={{color: "inherit", textDecoration: "none"}}><CardInner post={post} /></a>;
}

export default async function BlogPage() {
  const posts = await fetchPublishedPosts();
  const featured = posts.find((post) => post.slug) || posts[0];
  const gridPosts = featured ? posts.filter((post) => post.id !== featured.id) : posts;

  return (
    <>
      <Nav />
      <header className="blog-hero"><div className="blog-hero__inner"><div><span className="eyebrow" data-i18n="blog_eyebrow">Journal</span><h1><span data-i18n="blog_title_a">Ideas sobre IA, operaciones y </span><span className="accent" data-i18n="blog_title_b">conversación</span><span data-i18n="blog_title_c">.</span></h1></div><p data-i18n="blog_sub">Ensayos, casos de estudio y notas técnicas del equipo de Whaid.</p></div></header>
      <div className="blog-tags" role="tablist" aria-label="Filtrar por categoría"><button className="blog-tag is-active" data-tag="all">Todos</button><button className="blog-tag" data-tag="producto">Producto</button><button className="blog-tag" data-tag="ia">IA &amp; LLMs</button><button className="blog-tag" data-tag="casos">Casos de estudio</button><button className="blog-tag" data-tag="ingenieria">Ingeniería</button><button className="blog-tag" data-tag="operaciones">Operaciones</button></div>

      {featured ? (
        <section className="featured-post reveal">
          <a href={getPostHref(featured)} className="featured-post__card" style={{color: "inherit", textDecoration: "none"}}>
            <div><span className="featured-post__label">Destacado</span><h2 className="featured-post__title">{featured.title || "Post de Whaid"}</h2>{featured.excerpt ? <p className="featured-post__excerpt">{featured.excerpt}</p> : null}<div className="featured-post__meta">{featured.author ? <span>{featured.author}</span> : null}{featured.published_at ? <><span className="dot-sep"/><span>{formatDate(featured.published_at)}</span></> : null}</div></div>
            <div className="featured-post__visual"><ImageWithFallback src={featured.cover_image_url} alt={featured.title || "Imagen destacada"} className="featured-post__visual-img" /></div>
          </a>
        </section>
      ) : null}

      <section className="posts-section"><div className="container"><div className="posts-grid" id="posts-grid">{gridPosts.map((post) => <BlogCard post={post} key={post.id} />)}</div></div></section>
      <Footer />
    </>
  );
}

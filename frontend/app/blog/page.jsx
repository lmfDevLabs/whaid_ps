import TranslatedText from "../../i18n/TranslatedText";
import SiteFooter from "../../components/layout/SiteFooter";
import SiteNav from "../../components/layout/SiteNav";
import {fetchPublishedPosts} from "../../lib/blogApi";
import ImageWithFallback from "../../components/blog/ImageWithFallback";

export const dynamic = "force-dynamic";

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es", {day: "2-digit", month: "short", year: "numeric"}).format(date).toUpperCase();
};

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
      <SiteNav activeItem="blog" demoHref="/#demo" />
      <header className="blog-hero"><div className="blog-hero__inner"><div><span className="eyebrow"><TranslatedText i18nKey="blog_eyebrow" /></span><h1><span><TranslatedText i18nKey="blog_title_a" /></span><span className="accent"><TranslatedText i18nKey="blog_title_b" /></span><span><TranslatedText i18nKey="blog_title_c" /></span></h1></div><p><TranslatedText i18nKey="blog_sub" /></p></div></header>
      <div className="blog-tags" role="tablist" aria-label="Filtrar por categoría"><button className="blog-tag is-active" data-tag="all">Todos</button><button className="blog-tag" data-tag="producto">Producto</button><button className="blog-tag" data-tag="ia">IA &amp; LLMs</button><button className="blog-tag" data-tag="casos">Casos de estudio</button><button className="blog-tag" data-tag="ingenieria">Ingeniería</button><button className="blog-tag" data-tag="operaciones">Operaciones</button></div>

      {featured ? (
        <section className="featured-post reveal">
          <a href={getPostHref(featured)} className="featured-post__card" style={{color: "inherit", textDecoration: "none"}}>
            <div><span className="featured-post__label"><TranslatedText i18nKey="featured" /></span><h2 className="featured-post__title">{featured.title || "Post de Whaid"}</h2>{featured.excerpt ? <p className="featured-post__excerpt">{featured.excerpt}</p> : null}<div className="featured-post__meta">{featured.author ? <span>{featured.author}</span> : null}{featured.published_at ? <><span className="dot-sep"/><span>{formatDate(featured.published_at)}</span></> : null}</div></div>
            <div className="featured-post__visual"><ImageWithFallback src={featured.cover_image_url} alt={featured.title || "Imagen destacada"} className="featured-post__visual-img" /></div>
          </a>
        </section>
      ) : null}

      <section className="posts-section"><div className="container"><div className="posts-grid" id="posts-grid">{gridPosts.map((post) => <BlogCard post={post} key={post.id} />)}</div></div></section>
      <SiteFooter />
    </>
  );
}

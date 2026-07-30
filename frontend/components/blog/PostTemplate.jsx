import TranslatedText from "../../i18n/TranslatedText";
import SiteFooter from "../layout/SiteFooter";
import SiteNav from "../layout/SiteNav";
import {siteUrl} from "../../lib/siteLinks";
import MarkdownContent from "./MarkdownContent";
import PostAuthor from "./PostAuthor";
import PostMediaBlock from "./PostMediaBlock";
import PostTags from "./PostTags";
import ImageWithFallback from "./ImageWithFallback";

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es", {day: "2-digit", month: "short", year: "numeric"}).format(date).toUpperCase();
};

const readingTime = (content) => {
  const words = String(content || "").trim().split(/\s+/).filter(Boolean).length;
  if (!words) return "";
  return Math.max(1, Math.ceil(words / 220));
};

export default function PostTemplate({post, slug}) {
  const date = formatDate(post?.published_at);
  const readTime = readingTime(post?.content);
  const postSlug = slug || post?.slug || post?.id || "";
  const postUrl = `${siteUrl}/blog/${encodeURIComponent(postSlug)}`;
  const postTitle = post?.title || "Artículo de Whaid";
  const shareLinks = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`,
      ariaLabel: "Compartir este artículo en LinkedIn",
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`,
      ariaLabel: "Compartir este artículo en X",
    },
  ];

  return (
    <>
      <SiteNav activeItem="blog" demoHref="/#demo" />
      <header className="post-header">
        <div className="post-header__inner">
          <a href="/blog" className="post-back">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            <span><TranslatedText i18nKey="back_to_blog" /></span>
          </a>

          <div className="post-meta">
            <PostTags tags={post?.tags} className="post-tags post-tags--inline" />
            {date ? <span>{date}</span> : null}
            {date && readTime ? <span className="dot-sep" /> : null}
            {readTime ? <span>{readTime} <TranslatedText i18nKey="min_read" /></span> : null}
          </div>

          <h1 className="post-title">{post?.title || "Post de Whaid"}</h1>
          {post?.excerpt ? <p className="post-lede">{post.excerpt}</p> : null}
          <PostAuthor author={post?.author} avatar_author={post?.avatar_author} role_author={post?.role_author} />
        </div>
      </header>

      <div className="post-hero-img">
        <div className="post-hero-img__inner">
          <ImageWithFallback src={post?.cover_image_url} alt={post?.title || "Imagen principal del post"} className="post-hero-img__image" fallbackClassName="post-hero-img__fallback" />
        </div>
      </div>

      <article className="post-body-wrap">
        <div className="post-body">
          {/* Orden fijo: el Markdown solo ocupa el slot de texto; keyshot y media tienen zonas propias. */}
          <MarkdownContent content={post?.content} />
          {post?.keyshot ? <blockquote className="post-quote post-keyshot">{post.keyshot}</blockquote> : null}
          <PostMediaBlock images={post?.images} video_url={post?.video_url} />
        </div>
      </article>

      <div className="post-footer">
        <div className="post-share" aria-label="Compartir artículo">
          <span className="post-share__label"><TranslatedText i18nKey="share" /></span>
          {shareLinks.map((link) => (
            <a key={link.name} href={link.href} aria-label={link.ariaLabel} target="_blank" rel="noopener noreferrer">{link.name}</a>
          ))}
        </div>
        <a href="/#demo" className="btn btn--primary"><TranslatedText i18nKey="nav_cta" /></a>
      </div>
      <SiteFooter />
    </>
  );
}

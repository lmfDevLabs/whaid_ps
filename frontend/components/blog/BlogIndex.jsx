"use client";

import {useMemo, useState} from "react";
import TranslatedText from "../../i18n/TranslatedText";
import useLanguage from "../../i18n/useLanguage";
import ImageWithFallback from "./ImageWithFallback";
import {getBlogCategories, getPostTagKeys, normalizePostTags} from "../../lib/blogTags.mjs";

const ALL_TAGS = "__all__";

const formatDate = (value, language) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(language, {day: "2-digit", month: "short", year: "numeric"}).format(date).toUpperCase();
};

const getPostHref = (post) => {
  const pathKey = post?.slug || post?.id;
  return pathKey ? `/blog/${encodeURIComponent(pathKey)}` : "";
};

function CardInner({post, language}) {
  const tag = normalizePostTags(post.tags)[0]?.label || "Whaid";
  return <><div className="post-card__cover"><span className="post-card__cover-badge">{tag}</span><ImageWithFallback src={post.cover_image_url} alt={post.title || "Imagen del post"} className="post-card__cover-img" /><div className="post-card__cover-glyph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6"/></svg></div></div><div className="post-card__meta"><span>{tag}</span>{post.published_at ? <><span className="dot-sep"/><span>{formatDate(post.published_at, language)}</span></> : null}</div><h3 className="post-card__title">{post.title || "Post de Whaid"}</h3>{post.excerpt ? <p className="post-card__excerpt">{post.excerpt}</p> : null}</>;
}

function BlogCard({post, language}) {
  const href = getPostHref(post);
  if (!href) return <article className="post-card is-disabled"><CardInner post={post} language={language} /></article>;
  return <a href={href} className="post-card" style={{color: "inherit", textDecoration: "none"}}><CardInner post={post} language={language} /></a>;
}

export default function BlogIndex({posts}) {
  const {language, t} = useLanguage();
  const [selectedTag, setSelectedTag] = useState(ALL_TAGS);
  const categories = useMemo(() => getBlogCategories(posts), [posts]);
  const visiblePosts = useMemo(() => selectedTag === ALL_TAGS
    ? posts
    : posts.filter((post) => getPostTagKeys(post).includes(selectedTag)), [posts, selectedTag]);
  const featured = visiblePosts.find((post) => post.slug) || visiblePosts[0];
  const gridPosts = featured ? visiblePosts.filter((post) => post.id !== featured.id) : visiblePosts;

  return <>
    <div className="blog-tags" role="group" aria-label={t("blog_filter_label")}>
      <button type="button" className={`blog-tag${selectedTag === ALL_TAGS ? " is-active" : ""}`} aria-pressed={selectedTag === ALL_TAGS} onClick={() => setSelectedTag(ALL_TAGS)}><TranslatedText i18nKey="blog_all" /></button>
      {categories.map(({key, label}) => <button type="button" className={`blog-tag${selectedTag === key ? " is-active" : ""}`} aria-pressed={selectedTag === key} onClick={() => setSelectedTag(key)} key={key}>{label}</button>)}
    </div>
    {featured ? <section className="featured-post reveal is-visible"><a href={getPostHref(featured)} className="featured-post__card" style={{color: "inherit", textDecoration: "none"}}><div><span className="featured-post__label"><TranslatedText i18nKey="featured" /></span><h2 className="featured-post__title">{featured.title || "Post de Whaid"}</h2>{featured.excerpt ? <p className="featured-post__excerpt">{featured.excerpt}</p> : null}<div className="featured-post__meta">{featured.author ? <span>{featured.author}</span> : null}{featured.published_at ? <><span className="dot-sep"/><span>{formatDate(featured.published_at, language)}</span></> : null}</div></div><div className="featured-post__visual"><ImageWithFallback src={featured.cover_image_url} alt={featured.title || "Imagen destacada"} className="featured-post__visual-img" /></div></a></section> : null}
    <section className="posts-section"><div className="container"><div className="posts-grid" id="posts-grid">{gridPosts.map((post) => <BlogCard post={post} language={language} key={post.id} />)}</div></div></section>
  </>;
}

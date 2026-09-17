import TranslatedText from "../../i18n/TranslatedText";
import SiteFooter from "../../components/layout/SiteFooter";
import SiteNav from "../../components/layout/SiteNav";
import BlogIndex from "../../components/blog/BlogIndex";
import {fetchPublishedPosts} from "../../lib/blogApi";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await fetchPublishedPosts();

  return <>
    <SiteNav activeItem="blog" demoHref="/#demo" />
    <header className="blog-hero"><div className="blog-hero__inner"><div><span className="eyebrow"><TranslatedText i18nKey="blog_eyebrow" /></span><h1><span><TranslatedText i18nKey="blog_title_a" /></span><span className="accent"><TranslatedText i18nKey="blog_title_b" /></span><span><TranslatedText i18nKey="blog_title_c" /></span></h1></div><p><TranslatedText i18nKey="blog_sub" /></p></div></header>
    <BlogIndex posts={posts} />
    <SiteFooter />
  </>;
}
